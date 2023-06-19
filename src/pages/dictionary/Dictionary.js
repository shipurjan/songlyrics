import { useState } from "react";
import "./Dictionary.css";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Dictionary = () => {
  const [word, setWord] = useState("")
  const [definition, setDefinition] = useState("")

  const handleWordChange = (event) => {
    setWord(event.target.value);
  }

  const handleMeanings = (meanings) => {
    return <table>
      <thead>
        <tr>
          <th>Word</th>
          <th>Definition</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {meanings.map((meaning, index) => {
          console.log(index);
          return (
            <tr key={index}>
              <td>{meaning.partOfSpeech}</td>
              <td>{meaning.definitions[0].definition}</td>
              <td>{meaning.definitions[0].example}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  }

  const getDefinition = () => {
    Axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        console.log(response);
        var dictionaryEntries = [];
        response.data.forEach((data, index) => {
          dictionaryEntries.push(<div>
            <h4>{index+1}. {data.word} <i>{data.phonetic}</i></h4>
            {handleMeanings(data.meanings)}
          </div>)
        })
        setDefinition(<div className="definitions">
          {dictionaryEntries}
        </div>)
      })
      .catch((error) => {
        console.log(error);
        setDefinition(<>Nie znaleziono definicji</>)
      })
  }

  return (<>
    <h2>Słownik</h2>
    <h4>Słownik języka angielskiego</h4>

    <InputGroup className="input-group mb-3">
        <Form.Control
          placeholder="hello"
          aria-label="Wpisz angielskie słowo"
          aria-describedby="basic-addon2"
          onChange={handleWordChange}
          value={word}
          id="word"
          name="word"
        />
        <Button variant="primary" id="button-addon2" onClick={getDefinition} >
          Szukaj
        </Button>
      </InputGroup>

    <div>
      {definition}
    </div>
  </>
  );
}