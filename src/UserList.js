import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";

function UserList() {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((e) => setList(e.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="titre">List of users </h1>
      <div className="list">
        {List.map((el) => (
          <Card title= {el.id} className="card">
            <p>{el.name}</p>
            <p>{el.username}</p>
            <p>{el.email}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default UserList;
