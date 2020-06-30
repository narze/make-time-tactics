import React from 'react'
import { render } from '@testing-library/react'
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
