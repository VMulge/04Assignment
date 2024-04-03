import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [] = React.useState("");

  return (
    <>
      <input type="text" placeholder="Enter Text" />
      value={value}
        onChange={(e) => setValue(e.target.value)}
      <p>{value}</p>
    </>
  );
}


export default App
