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
