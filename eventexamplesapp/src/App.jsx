import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const hello = () => alert('Welcome')
  const clicked = () => alert('I was clicked')

  const handleSubmit = (e) => {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    if (currency === 'rupees' || currency === 'inr') {
      alert(`Amount in Rupees: ₹${(amount * 101).toFixed(2)}`);
    } else if(currency === 'euro' || currency === 'Euro') {
      alert(`Amount in Euro: €${(amount / 101).toFixed(2)}`);
    }
  };

  return (
    <>
      <div className="card">
        {count}
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={hello}>Say Welcome</button>
        <button onClick={clicked}>Click on me</button>
        <h1>Currency converter!!</h1>
        <p>Amount: <input id="amount" type="number" placeholder='Enter amount'/></p>
        <p>Currency: <input id="currency" type="text" placeholder='Into euro or rupees?'/></p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App
