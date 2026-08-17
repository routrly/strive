// Integration smoke test that mounts the real <App /> (with router,
// lazy-loaded routes, and Helmet) to catch routing regressions that
// component-only unit tests can't see.
import { describe, it, expect, beforeAll } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App'

beforeAll(() => {
  window.matchMedia = window.matchMedia || function (query) {
    return {
      matches: false,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
    }
  }
  window.IntersectionObserver = window.IntersectionObserver || class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver = window.ResizeObserver || class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.HTMLMediaElement.prototype.play = () => Promise.resolve()
  window.HTMLMediaElement.prototype.pause = () => {}
})

function renderAt(path) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>,
  )
}

describe('react-router-dom v7 routing smoke test', () => {
  it('renders the home route with the hero h1', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: /Empowering Trainers/i })).toBeInTheDocument()
  })

  it('renders the membership route with the correct h1', async () => {
    renderAt('/membership')
    expect(await screen.findByRole('heading', { level: 1, name: /Choose Your Training Domain/i })).toBeInTheDocument()
  })

  it('renders the contact route and applies useSearchParams prefill', async () => {
    renderAt('/contact?type=institution')
    expect(await screen.findByRole('heading', { level: 1, name: /Let's Connect/i })).toBeInTheDocument()
    expect(screen.getByDisplayValue(/institution looking to hire/i)).toBeInTheDocument()
  })

  it('renders the privacy route', async () => {
    renderAt('/privacy')
    expect(await screen.findByRole('heading', { level: 1, name: /Privacy Policy/i })).toBeInTheDocument()
  })

  it('renders the terms route', async () => {
    renderAt('/terms')
    expect(await screen.findByRole('heading', { level: 1, name: /Terms/i })).toBeInTheDocument()
  })
})
