const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  pass1,
  setPass1,
  pass2,
  setPass2,
  testPass,
  setTestPass,
}) => {
  const verifPass = () => {
    pass1 === pass2 ? setTestPass(true) : setTestPass(false);
    pass1 !== pass2 && alert("mot de passe non identiques !");
  };
  return (
    <div className="Form" style={{ display: testPass ? "none" : "block" }}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder={username}
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
          <input type="submit" value="Submit" onClick={verifPass} />
        </div>
      </form>
    </div>
  );
};

export default Form;
