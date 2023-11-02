import NavBar from "./components/NavBar";
import { Outlet } from 'react-router-dom';
import { useState, useEffect} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/users`)
      .then(response => response.json())
      .then(returnedData => {
        setUsers(returnedData)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users} />
    </>
  );
};

export default App;
