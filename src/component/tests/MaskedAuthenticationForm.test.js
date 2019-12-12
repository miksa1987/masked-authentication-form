import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import MaskedAuthenticationForm from '../MaskedAuthenticationForm'

describe('MaskedAuthenticationForm functionality', () => {
  const onSubmit = jest.fn()

  afterEach(cleanup)

  test('Submit function gets called once when clicking button', () => {
    const component = render(
      <MaskedAuthenticationForm 
        onSubmit={onSubmit}
        regex='[a-z]'
      />)
    const submitButton = component.container.querySelector('#submit-button')

    fireEvent.click(submitButton)
    expect(onSubmit.mock.calls.length).toBe(1)
  })

  test('Inputs cannot be changed with incorrect values', () => {
    const component = render(
      <MaskedAuthenticationForm 
        onSubmit={onSubmit}
        regex='[a-z]'
      />)
    const inputs = component.container.querySelectorAll('#input')
    expect(inputs.length).toBeGreaterThan(0)

    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: '1' }})
      expect(input.value).toBe('')
    })
  })

  test('Inputs can be changed with correct values', () => {
    const component = render(
      <MaskedAuthenticationForm 
        onSubmit={onSubmit}
        regex='[a-z]'
      />)
    const inputs = component.container.querySelectorAll('#input')
    expect(inputs.length).toBeGreaterThan(0)

    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: 'i' }})
      expect(input.value).toBe('i')
    })
  })
})