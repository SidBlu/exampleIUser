import { useEffect, useState } from 'react';
import './App.css';
import Table from './Components/Table';
import { Users } from "./users";
// import axios from "axios"; 

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]
  // console.log(Users[0]); 

  const search = (data) => {
    return data.filter( (item) => 
    keys.some(key=>item[key].toLowerCase().includes(query))
    // Oppure
    // item.first_name.toLowerCase().includes(query) || 
    // item.last_name.toLowerCase().includes(query) ||
    // item.email.toLowerCase().includes(query)
    );
  };
  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("fe")));

  // FETCH
  // const [data, setData] = useState()

  // useEffect(()=>{
  //   const fetchUsers = async () => {
  //     const res = await axios.get("http://localhost:5000");
  //     setData(res.data);
  //   }
  //   fetchUsers();
  // }, [])
  return (
    <div className="app">
      <input type="text" placeholder='Search...' className='search' onChange={ (e) => setQuery(e.target.value)} />
      <Table data={search(Users)}/> 
    </div>
    // FETCH
    // <div className="app">
    //   <input type="text" placeholder='Search...' className='search' onChange={ (e) => setQuery(e.target.value)} />
    //   <Table data={data}/> 
    // </div>
  );
}
// http://macosa.dima.unige.it/om/esr/alg/0_7s.htm

export default App;
