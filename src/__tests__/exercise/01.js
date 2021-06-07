import React from 'react'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../exercise/01'

afterEach(() => {
  window.localStorage.removeItem('name')
})

test('1st exercise', () => {
  render(<App />)
  const input = screen.getByRole('textbox', /name/i)
  userEvent.type(input, 'Yaswanth')
  expect(screen.getByText(/hello.*yaswanth/i)).toBeInTheDocument()
})
