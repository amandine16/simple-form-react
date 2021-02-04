import "./App.scss";
import Form from "./component/Form";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");

  return (
    <div className="App">
      <Form
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        pass1={pass1}
        setPass1={setPass1}
        pass2={pass2}
        setPass2={setPass2}
      />
    </div>
  );
}

export default App;
