import '@testing-library/jest-dom'
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Index from '../index'
import { data } from '../_data'

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

test('clicks button to show result', () => {
  render(<Index />)

  const expectedHighlight = data.highlight[0].tactic
  expect(screen.queryByText(RegExp(expectedHighlight))).toBeNull()

  fireEvent.click(screen.getByText(/Random!/))

  expect(screen.getByText(RegExp(expectedHighlight))).toBeInTheDocument()
})
