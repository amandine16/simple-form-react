import "./App.scss";
import Form from "./component/Form";
import { useState } from "react";
import StepTwo from "./component/StepTwo";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [testPass, setTestPass] = useState(false);

  return (
    <div className="App">
      <StepTwo
        username={username}
        email={email}
        pass1={pass1}
        pass2={pass2}
        testPass={testPass}
        setTestPass={setTestPass}
      />
      <Form
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        pass1={pass1}
        setPass1={setPass1}
        pass2={pass2}
        setPass2={setPass2}
        testPass={testPass}
        setTestPass={setTestPass}
      />
    </div>
  );
}

export default App;
