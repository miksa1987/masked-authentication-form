import { renderHook, act } from '@testing-library/react-hooks'
import useField from '../useField'

describe('useField tests', () => {
  const setWatcher = jest.fn()
  
  test('Correct object is returned', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const field = result.current[0]

    expect(field.type).toBe('text')
    expect(field.value).toBe('')
    expect(field.onChange).toBeDefined()
  })

  test('onChange doesnt allow longer than 1 character strings', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const field = result.current[0]

    act(() => {
      field.onChange({ target: { value: 'ii' }})
    })
    
    setTimeout(() => {
      expect(field.value).toBe('')
    }, 50)
  })

  test('onChange doesnt allow characters outside the regex', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const field = result.current[0]

    act(() => {
      field.onChange({ target: { value: '2' }})
    })
    
    setTimeout(() => {
      expect(field.value).toBe('')
    }, 50)
  })

  test('onChange changes value if string is in regex and 1 character long', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const field = result.current[0]

    act(() => {
      field.onChange({ target: { value: 'i' }})
    })
    
    setTimeout(() => {
      expect(field.value).toBe('i')
    }, 50)
  })

  test('setDesiredValue works', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const [field, setValue] = result.current

    act(() => {
      setValue('i')
    })
    
    setTimeout(() => {
      expect(field.value).toBe('i')
    }, 50)
  })

  test('setDesiredValue doesnt change value if string is over 1 characters long', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const [field, setValue] = result.current

    act(() => {
      setValue('ii')
    })
    
    setTimeout(() => {
      expect(field.value).toBe('')
    }, 50)
  })

  test('setDesiredValue doesnt change value if string is not in regex', () => {
    const { result } = renderHook(() => useField('text', setWatcher, '[a-z]'))
    const [field, setValue] = result.current

    act(() => {
      setValue('2')
    })
    
    setTimeout(() => {
      expect(field.value).toBe('')
    }, 50)
  })
})