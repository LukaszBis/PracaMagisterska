// components/RegisterTopic.js
import React, { useState } from 'react';

const RegisterTopic = () => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const apiUrl = 'http://localhost:8080/register';
    
      const requestBody = {
        topic: topic,
      };
  
      console.log(requestBody)

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (response.status === 500) {
            throw new Error('Błąd serwera');
          }
          return response.json();
        })
        .then((data) => {
          if(data.success){
            document.location.href = '/welcome';
          }
        })



    console.log('Zarejestrowano temat:', topic);
  };

  return (
    <div>
      <h2>Zarejestruj Temat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Nazwa Tematu"
        />
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default RegisterTopic;
