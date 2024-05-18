import './App.css';

import {useState} from "react";

function App() {
  const [email, setEmail] = useState("");

  function handleChange(event) {
      setEmail(event.target.value);
  }

  return (
      <div>
          <h1>System do zapisów na zajęcia</h1>
          <h2>Twój e-mail to {email}.</h2>

          {(email.length > 0 && email.length <= 5) && <p>Twój e-mail jest bardzo krótki.</p>}
          {(email.length > 5 && email.length <= 20) && <p>Twój e-mail jest ok.</p>}
          {(email.length > 20) && <p>Twój e-mail jest za długi.</p>}

          <input type="text" value={email} onChange={handleChange}/>
      </div>
  );
}

export default App;
