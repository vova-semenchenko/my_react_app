import { useState, useEffect } from "react";
import UserCard from "./components/userCard/UserCard";
import Form from "./components/form/Form";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=1"
      );
      setUser(await response.json());
    }

    getData();
  }, []);

  return (
    <div className="App">
      <UserCard data={user} key={user.id} />
      <Form />
    </div>
  );
}

export default App;
