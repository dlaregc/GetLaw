import React, { useState } from 'react';
import LoginForm from './componenets/LoginForm';

function App() {
  const adminUser = {
    email: "geraldisgay@gay.com",
    password: "gayballs123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

// function for actually logging in
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });

    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className = "Welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
