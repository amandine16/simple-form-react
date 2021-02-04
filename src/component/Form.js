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
  // au  click sur le btn du form = test si les mdp sont indentiques , si true = testPass passe à true, ainsi le formulaire disparait et la page de récap apparait
  // si mdp pas identique = alert
  const verifPass = () => {
    pass1 === pass2 ? setTestPass(true) : setTestPass(false);
    pass1 !== pass2 && alert("mot de passe non identiques !");
  };
  return (
    // si le test du mdp est true, je fais disparaitre mon formulaire (et ça fait apparaitre RecapInfo)
    <div className="Form" style={{ display: testPass ? "none" : "block" }}>
      <form
        // au click du submit, annulation de l'envoie par défaut vers une autre page
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
            // Récupère valeur de l'input
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
