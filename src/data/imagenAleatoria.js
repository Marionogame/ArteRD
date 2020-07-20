import React, { useState } from 'react';
const axios = require('axios');

function Imagen() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState({ hits: [] });

  fetch('http://localhost:3000/usuario')
  .then(response => response.json())
  .then(memesJson => setCount(count = memesJson,  console.log(setCount)))
  return (count
  );
}
export default Imagen;