import React, { useState, useEffect } from 'react';
import './App.css'; // Pastikan Anda mengganti ini dengan nama file CSS Anda

function Counter() {
  const [count, setCount] = useState(0);

  const teamMembers = ['Sugiyatmi', 'Maulana Yusuf Arrasyid ', 'Hafizh Anjar Saputra ', 'Ananda Muhammad Zahir']; // Ganti dengan nama anggota kelompok Anda

  useEffect(() => {
    if (count === 10) {
      // Lakukan sesuatu ketika counter mencapai 10
      alert('Counter mencapai angka 10!');
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>Tugas Modul 3 Prak RPLBK</p>
      <p>Anggota Kelompok 5</p>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
      <h2>Counter: {count}</h2>
      <div className="buttons">
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      {count === 10 ? (
        <p>Counter mencapai angka 10!</p>
      ) : null}
    </div>
  );
}

export default Counter;
