'use client'

import { useEffect, useRef } from 'react'

/**
 * Shrinks display maths that is too wide for its column.
 *
 * A worked solution on a phone gets about 300px, and a step like a fraction
 * whose numerator and denominator are themselves fractions needs well over
 * 400px. Left alone it is clipped mid-expression, which is the one thing a
 * solution must never be.
 *
 * Each over-wide step is scaled down by setting `font-size` on its `.katex`
 * root rather than with a transform: KaTeX sizes everything in em, so the
 * layout box shrinks with the content and the surrounding column reflows
 * correctly. A transform would leave the original height behind as a gap.
 *
 * Scaling stops at MIN_RATIO — past that the glyphs are too small to study
 * from, so the step keeps its (now clearly styled) horizontal scrollbar.
 */
const MIN_RATIO = 0.72

export default function MathFit({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el) return

    const fit = () => {
      el.querySelectorAll<HTMLElement>('.katex-display').forEach((block) => {
        const katex = block.querySelector<HTMLElement>('.katex')
        const column = block.parentElement
        if (!katex || !column) return

        // Always measure from the natural size, so widening the window
        // undoes a shrink applied at a narrower one.
        katex.style.fontSize = ''
        const available = column.clientWidth
        if (!available || katex.scrollWidth <= available) return

        const base = parseFloat(getComputedStyle(katex).fontSize)
        const floor = base * MIN_RATIO
        let size = base

        // Width does not scale perfectly linearly with font-size — KaTeX adds
        // fixed padding around delimiters, and scrollWidth is rounded — so one
        // pass can land a few pixels over. Re-measure and close the gap.
        for (let pass = 0; pass < 4; pass++) {
          const needed = katex.scrollWidth
          if (needed <= available) break
          size = Math.max(size * (available / needed), floor)
          katex.style.fontSize = `${size}px`
          if (size === floor) break
        }
      })
    }

    // Resizing text inside a ResizeObserver callback resizes the observed
    // element, so the browser treats it as a loop and drops the follow-up
    // notifications. Guard against re-entry instead of deferring to a frame:
    // requestAnimationFrame does not run in a backgrounded tab, which would
    // leave the maths unscaled until the reader came back to it.
    let fitting = false
    let timer = 0
    const schedule = () => {
      if (fitting) return
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        fitting = true
        fit()
        // Let the observers deliver the notifications our own writes caused
        // before listening again.
        window.setTimeout(() => {
          fitting = false
        }, 0)
      }, 0)
    }

    fit()

    // The column changes width on rotate/resize, and steps appear and
    // disappear as solutions are expanded, so watch for both.
    const onResize = new ResizeObserver(schedule)
    onResize.observe(el)
    const onMutate = new MutationObserver(schedule)
    onMutate.observe(el, { childList: true, subtree: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('orientationchange', schedule)

    return () => {
      clearTimeout(timer)
      onResize.disconnect()
      onMutate.disconnect()
      window.removeEventListener('resize', schedule)
      window.removeEventListener('orientationchange', schedule)
    }
  }, [])

  return <div ref={root}>{children}</div>
}
