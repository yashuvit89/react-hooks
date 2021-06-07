import React from 'react'
import App from '../../exercise/02'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('should save to localStorage', () => {
  const {rerender} = render(<App />)
  userEvent.type(screen.getByRole('textbox', /name/i), 'Yaswanth')
  expect(screen.getByText(/hello.*yaswanth/i)).toBeInTheDocument()

  expect(localStorage.getItem('name')).toBe('Yaswanth')

  window.localStorage.setItem('name', 'Yoda')
  rerender(<App key="new" />)
  expect(screen.getByText(/hello.*Yoda/i)).toBeInTheDocument()
})
