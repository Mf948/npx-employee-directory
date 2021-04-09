import React from "react";


function Table(props){
    return(
        <div>
            <table className="table table-dark">
  <thead>
    <tr>
    <th scope="col">Image</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Age</th>
      <th scope="col">email</th>
      <th scope="col">phoneNumber</th>
      <th scope="col">Location</th>

      
    </tr>
  </thead>
  <tbody>
    <tr>
    <th><img src = {props.image}></img></th> 
    <td>{props.firstName}</td>
    <td>{props.lastName}</td>
    <td>{props.age}</td>
    <td>{props.email}</td>
    <td>{props.cell}</td>
    <td>{props.location}</td>
    </tr>

  </tbody>
</table>
        </div>
    )
}

export default Table; 