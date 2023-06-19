import { useState } from "react";
import "./SongList.css";
import Axios from 'axios';

export const SongList = () => {
  const [joke, setJoke] = useState("")
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
        console.log(response);
        setJoke(<>{response.data.setup}<br/>{response.data.punchline}</>)
    })
  }

  return (<>
      SongList<br/>
      <button onClick={getJoke}>Get joke</button>
      <div>
      {joke}
      </div>
      </>
  );
}