// import Form from "./Form";

const StepTwo = ({ username, email, pass1, pass2, testPass, setTestPass }) => {
  return (
    <>
      <div
        style={{
          display: testPass ? "block" : "none",
          color: testPass ? "green" : "red",
        }}
      >
        <p>name = {username}</p>
        <p>email = {email}</p>
        <p>pass1 = {pass1}</p>
        <p>pass2 = {pass2}</p>
        <button
          onClick={() => {
            setTestPass(false);
          }}
        >
          Edit your information
        </button>
      </div>
    </>
  );
};

export default StepTwo;
