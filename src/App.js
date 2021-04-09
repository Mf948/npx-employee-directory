// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Counter from "./utils/increment"
import Search from "./components/search"
import Nav from './components/nav'
import Table from './components/table';
function App() {

  const [directories, setDirectories] = useState([]);
  const [number, setNumber] = useState(15)
  const [searchName, setSearchName] = useState("")

useEffect(() => {
  API.directory(number)
  .then(res => { 
    // console.log(res)
    setDirectories(res.data.results)
   console.log('idk',res.data.results)
  } )
  .catch(err => console.log("error",err))
  
}, [number])



const  desendingOrder = (e) => {
  
 let xyz= directories.sort(function (a, b) {

    return a.name.first < b.name.first ? 1 : -1
  });
   console.log("xyz",xyz)
  setDirectories(xyz)
  console.log("set",directories)
}


const asendingOrder = (e) => {
let abc =  directories.sort(function(a, b){
    return a.name.first > b.name.first ? 1 : -1
})
console.log("abc",abc)
 setDirectories(abc)

 }


const handleIncrement = () => {
  setNumber(number + 1)
 
}

const handleDecrement = () => {

  if (number == 1 ){
    console.log("dont go")
  }else{
   setNumber(number - 1 )
  }
}
const handleChange = (e) =>{
  setSearchName(e.target.value)
let updateEmployee = directories.filter(list => {
  return list.name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
})

console.log('update',updateEmployee)

setDirectories(updateEmployee)
  
}

  return (

    <div className="App">
      <Nav/>
       <Search 
       searchName= {searchName}
      handleChange={handleChange}
      />
       <Counter 
        number={number} 
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        asendingOrder={asendingOrder}
        desendingOrder={desendingOrder}
        />
  {directories.map(employee =>(
<Table
image={employee.picture.large}
firstName={employee.name.first}
lastName={employee.name.last}
age={employee.dob.age}
email={employee.email}
cell={employee.cell}
location={employee.location.country}
/>
     ))}
    </div>
  );
}

export default App;
