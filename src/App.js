import './App.css';

import {useState} from "react";

function App() {
  const [email, setEmail] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  function handleChange(event) {
      setEmail(event.target.value);
  }

  function login() {
    alert(`You are logged in as ${email}.`);
    setIsLogged(true);
  }

  return (
      <div>
          <h1>System do zapisów na zajęcia</h1>
          {
            isLogged && 
              <>
                <h2>Witaj {email} !</h2> 
                <button onClick={() => setIsLogged(false)}>Wyloguj się</button>
              </>
          }
          {
            !isLogged && 
            <>
              <label>Podaj e-mail, aby się zalogować </label>
              <input type="text" value={email} onChange={handleChange}/>
              <button onClick={() => login()}>Zaloguj się</button>
              {email && ((email.includes('@')) ? <p>Twój e-mail jest poprawny</p> : <p>Twój e-mail jest niepoprawny</p>)}
            </>
          }
        
      </div>
  );
}

export default App;
