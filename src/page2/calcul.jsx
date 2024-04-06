import { useState } from "react";
import './calcul.css'
function Calcul (){
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error")
    }
  }

  return (
    <div className="app mx-8">
    <div className="containere">
    <div>
        <form>
          <input type="text" id="input" value={result} />
        </form>

        <div className='keypad'>
          <button onClick={clear} id='clear'  className='highlight'>AC</button>
          <button  id="button"  onClick={handleDelete} className='highlight'>DEL</button>
          <button  id="button" name='/' onClick={handleClick} className='highlight'>&divide;</button>
          <button id="button"  name="7" onClick={handleClick}>7</button>
          <button id="button"  name="8" onClick={handleClick}>8</button>
          <button id="button"  name="9" onClick={handleClick}>9</button>
          <button id="button"  name="*" onClick={handleClick} className='highlight'>&times;</button>
          <button id="button"  name="4" onClick={handleClick}>4</button>
          <button id="button"  name="5" onClick={handleClick}>5</button>
          <button id="button"  name="6" onClick={handleClick}>6</button>
          <button id="button"  name="-" onClick={handleClick} className='highlight'>-</button>
          <button id="button"  name="1" onClick={handleClick}>1</button>
          <button id="button"  name="2" onClick={handleClick}>2</button>
          <button id="button"  name="3" onClick={handleClick}>3</button>
          <button id="button"  name="+" onClick={handleClick} className='highlight'>+</button>
          <button id="button"  name="0" onClick={handleClick}>0</button>
          <button id="button"  name="." onClick={handleClick}>.</button>
          <button onClick={calculate} id='equal' className='highlight'>=</button>
        </div>

      </div>

    </div>
    </div>
  );
}
export default Calcul;