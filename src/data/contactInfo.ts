/**
 * Single source of truth for public contact details.
 * Used by the contact page and the site footer.
 */
export const contactInfo = {
  /** Local Bangladeshi format, for display */
  phoneDisplay: '+880 1680-728065',
  /** E.164, for tel: links */
  phoneTel: '+8801680728065',
  /** Digits only, for wa.me deep links */
  whatsappNumber: '8801680728065',
  email: 'arifurrahman.it.doc@gmail.com',
  location: 'Dhaka, Bangladesh',
  hours: 'Sat – Thu · 9:00 AM – 10:00 PM (BST)',
} as const

export const whatsappLink = (message = "Hi! I'd like to know more about SSC Solutions.") =>
  `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`
