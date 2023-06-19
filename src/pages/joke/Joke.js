import { useState } from "react";
import "./Joke.css";
import Axios from 'axios';
import Button from 'react-bootstrap/Button';

export const Joke = () => {
  const [joke, setJoke] = useState("")
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
        console.log(response);
        setJoke(<>{response.data.setup}<br/><br/>...<br/><br/>{response.data.punchline}<br/><br/>🦗 🦗 🦗 🦗</>)
    })
  }

  return (<>
      <h2>Żart</h2>
      <Button variant="primary" onClick={getJoke}>Wygeneruj żart</Button>
      <div>
      {joke}
      </div>
      </>
  );
}