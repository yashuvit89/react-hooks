import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../../exercise/04'

test('4th example', () => {
  render(<App />)

  const [s1, s2] = screen.queryAllByRole('button')

  userEvent.click(s1)
  expect(s1).toHaveTextContent('X')
  userEvent.click(s2)
  expect(s2).toHaveTextContent('O')
})
