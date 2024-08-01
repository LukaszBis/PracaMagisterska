// components/TopicsList.js
import React, {useEffect, useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

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
      <ListGroup as="ol" numbered>
        {topics.map((topic) => (
          <ListGroup.Item as="li" key={topic.id}>{topic.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TopicsList;
