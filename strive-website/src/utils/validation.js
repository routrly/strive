const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_DIGITS_RE = /^[0-9+\-\s]+$/

export function isValidEmail(value) {
  return EMAIL_RE.test(value.trim())
}

export function isValidPhone(value) {
  const trimmed = value.trim()
  if (!PHONE_DIGITS_RE.test(trimmed)) return false
  const digitCount = trimmed.replace(/\D/g, '').length
  return digitCount >= 7
}

export function validateContactForm({ name, email, phone, message }) {
  const errors = {}
  if (!name || !name.trim()) errors.name = 'Please enter your name.'
  if (!isValidEmail(email || '')) errors.email = 'Please enter a valid email address.'
  if (!isValidPhone(phone || '')) errors.phone = 'Please enter a valid phone number.'
  if (!message || !message.trim()) errors.message = 'Please enter a message.'
  return errors
}
