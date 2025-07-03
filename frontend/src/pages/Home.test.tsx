import { render, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home Page', () => {
  it('renders the hero section', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByText(/Scalable React \+/i)).toBeInTheDocument()
    expect(screen.getByText(/Express Boilerplate/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
}) 