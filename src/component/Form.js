import StepTwo from "./StepTwo";

const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  pass1,
  setPass1,
  pass2,
  setPass2,
}) => {
  const testPass = () => {
    if (pass1 === pass2) {
      <StepTwo />;
    } else {
      alert("non");
    }
  };
  return (
    <div className="Form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="pass1"
          value={pass1}
          onChange={(event) => {
            setPass1(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          name="pass2"
          value={pass2}
          onChange={(event) => {
            setPass2(event.target.value);
          }}
        />
        <div className="submit">
          <input type="submit" value="Submit" onClick={testPass} />
        </div>
      </form>
    </div>
  );
};

export default Form;
