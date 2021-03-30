import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import API from "./utils/API";


function App() {

  const [directories, setDirectories] = useState([]);

useEffect(() => {
API.directory()
.then(res => { 
  // console.log(res)
  setDirectories(res.data.results)
 
} )
.catch(err => console.log("error",err))


}, [])

console.log(directories)


  return (
    <div className="App">
    <table style={{width: 100}}>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
    <th>email</th>
  </tr>

  {directories.map(employee =>(
     <tr>
    <td>{employee.name.first}</td>
    <td>Smith</td>
    <td>50</td>
    <td>50</td>
  </tr> 
  ))}
  {/* <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    <td>50</td>
  </tr> */}

</table>


    </div>
  );
}

export default App;
