import React from "react";

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then(Response => Response.json())
      .then(data=>setUser(data))
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    if (Object.keys(user).length > 0) {
      console.log(user)
      console.log(user.results[0])
    }
  },[user])

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name : {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=""/>
    </div>
  ) : (
      <>
        <h1>Data pending...</h1>
        <p>{user}</p>
      </>
      
  );
}

export default App;
