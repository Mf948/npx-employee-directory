import React from 'react';

const Search = (props) => (

  <input 
  type="text" 
  className="form-control" 
  value= {props.searchName}
  onChange={props.handleChange}
  placeholder="Recipient's username" 
  aria-label="Recipient's username" 
  aria-describedby="basic-addon2">

  </input>

)
export default Search