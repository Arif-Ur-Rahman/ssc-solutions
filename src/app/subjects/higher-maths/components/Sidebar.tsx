"use client";

export default function Sidebar({
  chapters,
  activeChapter,
  setActiveChapter,
  sidebarOpen,
  setSidebarOpen,
}: any) {
  return (
    <aside
      className={`${
        sidebarOpen ? "w-60" : "w-14"
      } sticky top-0 h-screen bg-gray-900 text-gray-100 transition-all duration-300`}
    >
      <div className="flex items-center gap-2 border-b border-gray-700 p-5">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-pink-800 font-mono text-sm">
          ∑
        </div>
        {sidebarOpen && (
          <span className="font-semibold tracking-wide">
            Higher Maths
          </span>
        )}
      </div>

      <div className="px-5 pt-5 text-xs uppercase tracking-widest text-gray-400">
        {sidebarOpen && "Chapters"}
      </div>

      <nav className="mt-2 space-y-1 px-2">
        {chapters.map((ch: any) => (
          <button
            key={ch.id}
            onClick={() => setActiveChapter(ch.id)}
            className={`flex w-full items-center gap-3 rounded px-3 py-2 text-left text-sm transition ${
              activeChapter === ch.id
                ? "bg-pink-800 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-xs">
              {ch.id}
            </span>
            {sidebarOpen && <span>{ch.title}</span>}
          </button>
        ))}
      </nav>

      <div className="flex justify-center p-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded bg-gray-800 px-3 py-1 text-sm hover:bg-gray-700"
        >
          {sidebarOpen ? "‹" : "›"}
        </button>
      </div>
    </aside>
  );
}