import { useState } from "react";
import "./Joke.css";
import Axios from 'axios';

export const Joke = () => {
  const [joke, setJoke] = useState("")
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
        console.log(response);
        setJoke(<>{response.data.setup}<br/>{response.data.punchline}</>)
    })
  }

  return (<>
      <h2>Żart</h2>
      <button onClick={getJoke}>Wygeneruj żart</button>
      <div>
      {joke}
      </div>
      </>
  );
}