import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useCountUp from './useCountUp'

describe('useCountUp', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('stays at 0 when start is false', () => {
    const { result } = renderHook(() => useCountUp(500, { start: false, duration: 1000 }))
    expect(result.current).toBe(0)
  })

  it('animates to the target value once start is true', () => {
    const { result, rerender } = renderHook(({ start }) => useCountUp(500, { start, duration: 1000 }), {
      initialProps: { start: false },
    })
    rerender({ start: true })
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(result.current).toBe(500)
  })
})
