import { Fragment, useState } from 'react'
import './App.css'

const App = () => {
  const[password, setPassword] = useState('')
  const[numberCaracters, setNumberCaracters] = useState('')

  const handleNumberCaracters = (e) => {
    setNumberCaracters(e.target.value)
  }

  let length = numberCaracters

  const generate = (e) => {
    e.preventDefault()
    const caracters = "'1234567890zxcvbnmasdfghjklçqwertyuiopZXCVBNMASDFGHJKLÇQWERTYUIOP<>,.@#$%&*!"
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * caracters.length)

      newPassword += caracters[position]
    }
    setPassword(newPassword)
    setNumberCaracters('')
  }

  return (
    <>
        <div className='boxH1'>
          <h1>Gerador de Senha</h1>
        </div>
        <form className='formStyle' onSubmit={generate}>
          <p>Gere uma senha de acordo com sua necessidade!</p>
          <div className='boxInputLabel'>
            <label for='password'>Defina o número de caracteres</label>
            <input type='text' id='password' value={numberCaracters} onChange={handleNumberCaracters} />
          </div>
          <button type='submit'>Gerar Senha</button>
          <div className='boxPassword'>{password}</div>
        </form>      
    </>
  )
}

export default App
