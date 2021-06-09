import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../exercise/03'

test('3rd example', () => {
  render(<App />)
  userEvent.type(screen.getByRole('textbox', {name: /name/i}), 'Yaswanth')
  userEvent.type(screen.getByRole('textbox', {name: /animal/i}), 'Dog')

  expect(screen.getByText(/.*dog/i)).toBeInTheDocument()
})
