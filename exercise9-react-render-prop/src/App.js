
import './App.css';
import { useState, useEffect } from 'react'
const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    if (url.includes("desert")) {
      setData(["cake ", "ice creame ", "pie ", "brownie "])
    } else {
      setData(["water ", "soda ", "juice "])
    }
  }, [])
  return render(data);
};
const DesertsCount = () => {
  return (
    <DataFetcher url="https://littlelemon/deserts" render={(data) => <p>{data.length}  deserts : {data}</p>} />
  )
}
const DrinksCount = () => {
  return <DataFetcher url="https://littlelemon/drinks" render={(data) => <p>{data.length}  drinks : {data}</p>} />
}


function App() {
  return (
    <div className="App">
      <DesertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;
