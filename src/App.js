// import logo from './logo.svg';
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
  <th>photo</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
    <th>email</th>
    <th>phone number</th>
    <th>location</th>
    <th>location</th>
  </tr>

  {directories.map(employee =>(
     <tr>
   <th><img src = {employee.picture.large}></img></th>
    <td>{employee.name.first}</td>
    <td>{employee.name.last}</td>
    <td>{employee.dob.age}</td>
    <td>{employee.email}</td>
    <td>{employee.cell}</td>
    <td>{employee.location.country}</td>
  </tr> 
  ))}

</table>


    </div>
  );
}

export default App;
