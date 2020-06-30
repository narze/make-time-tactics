import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Index from '../index'

test('renders title', () => {
  const { getByText } = render(<Index />)
  const title = getByText(
    /Make Time Tactics/
  )
  expect(title).toBeInTheDocument()
})

test('renders random button', () => {
  const { getByText } = render(<Index />)
  const button = getByText(
    /Random!/
  )
  expect(button).toBeInTheDocument()
})

test('clicks button to show box with message', () => {
  render(<Index />)

  expect(screen.queryByText(/Write It Down/)).toBeNull()

  fireEvent.click(screen.getByText(/Random!/))

  expect(screen.getByText(/Write It Down/)).toBeInTheDocument()
})
