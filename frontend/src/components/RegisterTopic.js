// components/RegisterTopic.js
import Web3 from 'web3';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import ThesisTopicsContract from '../contracts/build/ThesisTopics.json'


const contractAddress = '0xF36CE7b906513ec60468633E1482CA7084209bA2'; // Adres kontraktu

const RegisterTopic = () => {
  const [topic, setTopic] = useState('');
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async() => {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ThesisTopicsContract.networks[networkId];
      const accounts = await web3.eth.getAccounts();
      const contractInstance = new web3.eth.Contract(
        ThesisTopicsContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      setContract(contractInstance);
      setAccounts(accounts);
      console.log("contractInstance", contractInstance);
      console.log("accounts", accounts);
    };

    loadBlockchainData();
  }, []);
  

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
      <Form onSubmit={handleSubmit}>
        <Form.Control 
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Nazwa Tematu"
        />
        <Button type="submit">Zarejestruj</Button>
      </Form>
    </div>
    
  );
};

export default RegisterTopic;
