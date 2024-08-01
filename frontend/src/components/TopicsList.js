// components/TopicsList.js
import React, {useEffect, useState} from 'react';

const TopicsList = () => {
  const [topics, setTopics] = useState([])

  useEffect( () => {
        const apiUrl = 'http://localhost:8080/topics';
        
        fetch(apiUrl, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            if (response.status === 500) {
              throw new Error('Nie udalo sie zalogowac');
            }
            return response.json();
        })
        .then((data) => {
          console.log(data);
          setTopics(data)
        })
        .catch((error) => {
            console.log(error);
        });
  }, []);

  return (
    <div>
      <h2>Lista Tematów</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicsList;
