import {useState} from 'react'

export default (type, setWatcher, regexPattern) => {
  const [value, setValue] = useState('')
  
  const onChange = (event) => {
    const regex = new RegExp(regexPattern, 'i')
    const value = event.target.value

    if ((value === '' || regex.exec(value)) && value.length <= 1) {
      setValue(value)
      setWatcher(value)
    }
  }

  return [
    {type, value, onChange},
    setValue
  ]
}