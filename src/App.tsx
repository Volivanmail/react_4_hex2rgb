import {useState} from "react";
function App() {

  const [rgb, setRgb] = useState(" ");

  const getRGB = (value: string) => {
    var r = parseInt(value.substring(1,2),16);
    var g = parseInt(value.substring(3,2),16);
    var b = parseInt(value.substring(5,2),16);
    console.log(`(${r},${g},${b})`);
    return setRgb(`(${r},${g},${b})`);
}
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {

    const { name, value } = event.target;

    if (name === "HEX" && value.length === 7) {
      /^[#][0-9A-F]{6}$/.test(value)? getRGB(value) : setRgb("ошибка");
    }
  }

  return (
  <h2>Color Converter
    <div className='container'>
      <form onChange={handleChange} className='form'>
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