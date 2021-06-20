import React from 'react'
import {render, screen} from '@testing-library/react'
import App from '../../exercise/05'

test('Test ex:5', () => {
  const {container, unmount} = render(<App />)
  const tiltRoot = container.querySelector('.tilt-root')
  expect(tiltRoot).toHaveProperty('vanillaTilt')

  const destroy = jest.spyOn(tiltRoot.vanillaTilt, 'destroy')
  expect(destroy).toHaveBeenCalledTimes(0)

  unmount()
  expect(destroy).toHaveBeenCalledTimes(1)
})
