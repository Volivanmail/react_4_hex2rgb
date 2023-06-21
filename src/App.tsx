import {useState} from "react";
function App() {
  const defaultColor = "rgb(0, 139, 139)";
  const [rgb, setRgb] = useState(" ");
  const [color, setColor] = useState(defaultColor);

  const getRGB = (value: string) => {
    var r = parseInt(value.substr(1,2),16);
    var g = parseInt(value.substr(3,2),16);
    var b = parseInt(value.substr(5,2),16);
    let res = `rgb(${r}, ${g}, ${b})`;
    setColor(res);
    return setRgb(res);
}
  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {

    const { name, value} = event.target;

    if (name === "HEX" && !/^[#]/.test(value) && value.length > 1 && value.length <7) {
      setRgb("Внимательнее! HEX код начинается с -  #");
      setColor("rgb(220, 130, 0)");
    } else if (name === "HEX" && value.length === 7) {
      /^[#][0-9A-Fa-f]{6}$/.test(value)? (getRGB(value)) : (setRgb("Ошибка ввода HEX кодировки"), setColor("rgb(255, 0, 0)"));
    } else if (name === "HEX" && value.length > 7){
      setRgb('Ошибка! HEX код - 7 символов!');
      setColor("rgb(255, 0, 0)");
    } else {
      setRgb('');
      setColor(defaultColor);
    }
  }

  return (
  <h2>Color Converter
    <div className='container' style={{backgroundColor: color}}>
      <form onChange={handleChange} className='form'>
        <label htmlFor="HEX">HEX</label>
        <input className="input" type="text" id="HEX" name="HEX" placeholder='Введите код цвета, например: #000000'></input>
        <label htmlFor="rgb">RGB</label>
        <input className="input" type="text" id="rgb" name="rgb" value={rgb}></input>
      </form>
    </div>
  </h2>
  )
}

export default App