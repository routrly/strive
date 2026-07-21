import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useScrollPosition from './useScrollPosition'

function setScrollEnv({ scrollY, scrollHeight, innerHeight }) {
  Object.defineProperty(window, 'scrollY', { value: scrollY, writable: true, configurable: true })
  Object.defineProperty(document.documentElement, 'scrollHeight', { value: scrollHeight, writable: true, configurable: true })
  Object.defineProperty(window, 'innerHeight', { value: innerHeight, writable: true, configurable: true })
}

describe('useScrollPosition', () => {
  beforeEach(() => {
    setScrollEnv({ scrollY: 0, scrollHeight: 2000, innerHeight: 1000 })
  })

  it('starts with isScrolled false and scrollProgress 0', () => {
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current.isScrolled).toBe(false)
    expect(result.current.scrollProgress).toBe(0)
  })

  it('sets isScrolled true once scrollY passes 20', () => {
    const { result } = renderHook(() => useScrollPosition())
    act(() => {
      setScrollEnv({ scrollY: 50, scrollHeight: 2000, innerHeight: 1000 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.isScrolled).toBe(true)
    expect(result.current.scrollY).toBe(50)
  })

  it('computes scrollProgress clamped to [0,1]', () => {
    const { result } = renderHook(() => useScrollPosition())
    act(() => {
      setScrollEnv({ scrollY: 1000, scrollHeight: 2000, innerHeight: 1000 })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current.scrollProgress).toBe(1)
  })
})
