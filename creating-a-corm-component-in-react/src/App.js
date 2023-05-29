import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if (firstName == "" || !validateEmail(email) || password.value.length < 8 || role == "role") {
      return false;
    }
    return true;
  };

  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({ value: "", isTouched: false })
    setRole("role")
  };
  const onfirstnamechangedHandler = (e) => {
    setFirstName(e.target.value);
  }
  const onlastnamechangedHandler = (e) => {
    setLastName(e.target.value);
  }
  const onemailchangedHandler = (e) => {
    setEmail(e.target.value);
  }
  const onpasswordchangedHandler = (e) => {
    setPassword({ ...password, value: e.target.value })
  }
  const onpasswordBlurHandler = (e) => {
    setPassword({ ...password, isTouched: true })
  }


  const onrolechangedHandler = (e) => {
    setRole(e.target.value)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };
  const showPasswordErrorMessage = () => {
    if (password.isTouched && password.value.length < 8) {
      return PasswordErrorMessage();
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input tyep="text" placeholder="First name" value={firstName} onChange={onfirstnamechangedHandler} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input type="text" placeholder="Last name" value={lastName} onChange={onlastnamechangedHandler} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input type="text" placeholder="Email address" value={email} onChange={onemailchangedHandler} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input type="password" placeholder="Password" value={password.value} onChange={onpasswordchangedHandler} onBlur={onpasswordBlurHandler} />
            {/*() => (password.isTouched && password.value.length < 8) ? <PasswordErrorMessage /> : null*/}
            {/*showPasswordErrorMessage()*/}
            {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={onrolechangedHandler}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
