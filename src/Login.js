import React, {useState} from "react";

export default function Login(props) {
  //setting state for above variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [userLoggedIn, setUserLoggedIn] = useState(false);

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    if (email === "kojoasumani@hotmail.com" && password === "1234") {
      props.setUserLoggedIn(true);
      console.log("You have successfully signed in");
    } else {
      console.log("Incorrect Email or Password");
    }
  }
  return (
    <div>
      {/*  */}
      <form className="text-white" style={{ width: "50%", margin: "auto" }}>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={handleEmailInput} />
          <small className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={handlePasswordInput} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Submit
        </button>
        <hr />
        {/* {userLoggedIn === true ? <p>You are now logged In</p> : <p>{userLoggedIn}</p>} */}
      </form>
    </div>
  );
}
