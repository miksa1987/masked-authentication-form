import {useState} from 'react'

export default (type, setWatcher, regexPattern) => {
  const [value, setValue] = useState('')
  
  const onChange = (event) => checkAndChangeValue(event.target.value)
  const setDesiredValue = (newValue) => checkAndChangeValue(newValue)

  const checkAndChangeValue = (newValue) => {
    const regex = new RegExp(regexPattern, 'i')

    if ((newValue === '' || regex.exec(newValue)) && newValue.length <= 1) {
      setValue(newValue)
      setWatcher(newValue)
    }
  }

  return [
    {type, value, onChange},
    setDesiredValue
  ]
}