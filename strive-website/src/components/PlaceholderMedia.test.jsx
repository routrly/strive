import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PlaceholderMedia from './PlaceholderMedia'

describe('PlaceholderMedia', () => {
  it('renders the label and an accessible role', () => {
    render(<PlaceholderMedia label="Hero background video" aspect="16/9" />)
    expect(screen.getByText('Hero background video')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Hero background video' })).toBeInTheDocument()
  })

  it('applies the requested aspect ratio', () => {
    render(<PlaceholderMedia label="Team photo" aspect="4/3" />)
    const el = screen.getByRole('img', { name: 'Team photo' })
    expect(el).toHaveStyle({ aspectRatio: '4/3' })
  })
})
