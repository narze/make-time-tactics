import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Index from '../index'

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.0)
});

afterEach(() => {
  global.Math.random.mockRestore()
})

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

test('renders link button', () => {
  const { getByText } = render(<Index />)
  const button = getByText(
    'About "Make Time" Book'
  )
  expect(button).toBeInTheDocument()
})

test('clicks button to show results', () => {
  render(<Index />)

  expect(screen.queryByText(RegExp("Write It Down"))).toBeNull()
  expect(screen.queryByText(RegExp("Try a Distraction-Free Phone"))).toBeNull()
  expect(screen.queryByText(RegExp("Exercise Every Day"))).toBeNull()

  fireEvent.click(screen.getByText(/Random!/))

  expect(screen.getByText(RegExp("Write It Down"))).toBeInTheDocument()
  expect(screen.getByText(RegExp("Try a Distraction-Free Phone"))).toBeInTheDocument()
  expect(screen.getByText(RegExp("Exercise Every Day"))).toBeInTheDocument()
})
