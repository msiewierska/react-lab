import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
  }

  function logout() {
    setLoggedIn(false);
  }

  return (
      <div class="app-wrapper">
          <h1>System do zapisów na zajęcia</h1>
           {
              loggedIn
                ? <UserPanel username={loggedIn} onLogout={logout}/>
                : <LoginForm onLogin={login} buttonLabel="Zaloguj się" />
           }
        
      </div>
  );
}

export default App;
