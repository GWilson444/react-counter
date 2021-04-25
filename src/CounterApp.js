import React, {useState} from 'react';
import './styles.css';

export default function CounterApp() {
  const [counter, setCounter] = useState(1);
  const [increment, setIncrement] = useState(1);

  const counterUp = () => setCounter(counter + increment);
  const counterDown = () => counter - increment < 0 ? setCounter(counter) : setCounter(counter - increment);

  const incrementUp = () => setIncrement(increment + 1);
  const incrementDown = () => increment < 2 ? setIncrement(1) : setIncrement(increment - 1);

  return (
    <div className='container'>
      React Counter
      <div className='display'>
        {counter}
        <div className='btns'>
          <button onClick={counterDown}>-</button>
          <button onClick={counterUp}>+</button>
        </div>
      </div>
      <div className='display'>
        {increment}
        <div className='btns'>
          <button onClick={incrementDown}>-</button>
          <button onClick={incrementUp}>+</button>
        </div>
      </div>
    </div>
  )
}