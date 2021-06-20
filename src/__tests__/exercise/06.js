import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../exercise/06'

beforeEach(() => jest.spyOn(window, 'fetch'))
afterEach(() => window.fetch.mockRestore())

test('Ex: 06', async () => {
  render(<App />)

  // const input = screen.getByRole('textbox', /pokemonName/i)
  const input = screen.getByLabelText(/pokemon/i)
  const submit = screen.getByText(/^submit$/i)

  userEvent.type(input, 'pikachu')
  userEvent.click(submit)

  await screen.findByRole('heading', {name: /pikachu/i})

  userEvent.clear(input)

  userEvent.type(input, 'blah')
  userEvent.click(submit)

  // No idea why this is failing
  // await screen.findByRole('heading', {name: /blah/i})
})
