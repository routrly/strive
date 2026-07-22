import { describe, it, expect } from 'vitest'
import { isValidEmail } from './validation'

describe('isValidEmail', () => {
  it('accepts a well-formed email', () => {
    expect(isValidEmail('strivekochi@gmail.com')).toBe(true)
  })

  it('rejects missing @', () => {
    expect(isValidEmail('strivekochigmail.com')).toBe(false)
  })

  it('rejects missing domain', () => {
    expect(isValidEmail('strivekochi@')).toBe(false)
  })

  it('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false)
  })
})

import { isValidPhone, validateContactForm } from './validation'

describe('isValidPhone', () => {
  it('accepts a valid Indian mobile number with country code', () => {
    expect(isValidPhone('+91 93477 34872')).toBe(true)
  })

  it('rejects too few digits', () => {
    expect(isValidPhone('12345')).toBe(false)
  })

  it('rejects letters', () => {
    expect(isValidPhone('abcdefghij')).toBe(false)
  })
})

describe('validateContactForm', () => {
  it('returns no errors for a fully valid submission', () => {
    const errors = validateContactForm({
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+91 93477 34872',
      message: 'Hello there',
    })
    expect(errors).toEqual({})
  })

  it('flags empty name and message, and invalid email', () => {
    const errors = validateContactForm({ name: '', email: 'not-an-email', phone: '+91 93477 34872', message: '' })
    expect(errors.name).toBeTruthy()
    expect(errors.email).toBeTruthy()
    expect(errors.message).toBeTruthy()
    expect(errors.phone).toBeUndefined()
  })
})
