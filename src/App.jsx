import React from "react";

import Joke from "./component/Joke";

function App() {
  return (
    <div className="my-100 text:4xl" >
      <h1 className="text-3xl">Joke Generator Using React and Joke API</h1>
      <Joke />
    </div>
  );
}
export default App;
