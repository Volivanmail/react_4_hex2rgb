
function App() {

  return (
  <h2>Color Converter
    <div className='container'>
      <form className='form'>
        <label htmlFor="HEX">HEX</label>
        <input className="input" type="text" id="HEX" name="HEX" placeholder='Введите код цвета, например: #000000'></input>
        <label htmlFor="rgb">RGB</label>
        <input className="input" type="text" id="rgb" name="rgb"></input>
      </form>
    </div>
  </h2>
  )
}

export default App