import "./App.css";
import React ,{ useState } from "react";
import NewProduct from "./components/NewProduct";
import ContactComponent from "./components/ContactComponent";


function App() {



  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Replace 'your-password' with the desired password
    const validPassword = 'Trademovers@.co.in';
    if (password === validPassword) {
      setLoggedIn(true);
    } else {
      alert('Invalid password. Please try again.');
    }
  };



  const handleLogout = () => {
    setLoggedIn(false);
    setPassword('');
  };

  return(
    <>
   

      <div>
      {loggedIn ? (
        <>
        <h1 id="adminpanelheading">Admin Panel</h1>
        <button onClick={handleLogout}>Logout</button> 
        
        
      <NewProduct/>
      <ContactComponent/>
        </>
      ) : (
        <>
        <center>
          <h1>Login to Access Admin Panel</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          </center>
        </>
      )}
    </div>
    </>
  )
 
}

export default App;
