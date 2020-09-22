import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../components/style.css"
import SearchForm from "../components/searchForm/SearchForm";

function Employees() {
  const [employeeSearch, setEmployeeSearch] = useState({
    filterUsers: [],
    users: []
  })
  useEffect(() => {
    API.getUsers().then((res) => {
      console.log(res.data.results[0])
    
      setEmployeeSearch({
        ...employeeSearch,
        users: res.data.results,
        filterUsers: res.data.results

      })
    })
  }, []);
  const handleInputChange = event => {
    let searchValue = event.target.value;
    searchValue = searchValue.toLowerCase()
    let searchResults = [...employeeSearch.users];
    searchResults = searchResults.filter((user) => {
      let fullName = `${user.name.first} ${user.name.last}`.toLowerCase()
      return fullName.includes(searchValue)
    })
    setEmployeeSearch({...employeeSearch , filterUsers : searchResults})
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEmployeeSearch(event.target.search.value);
    console.log(employeeSearch.state.search);
    console.log(employeeSearch.state.result);
  };


  return (
   
            <div className="container">
         <img src="https://jgparker.com/wp-content/uploads/2016/01/Employee-Benefits-5.jpg" class="img-fluid" alt="Responsive image" /> 
      
   


         
            <card heading="Search">
              <SearchForm
                
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
          


            <table>
              <tbody>
              {employeeSearch.filterUsers.map((user) =>
        
                  <tr>
      <td key={user.id.value}>{user.name.first} {user.name.last}</td>
          <td key={user.id.value}>{user.dob.date}</td>
          <td key={user.id.value}>{user.email}</td>
          <td key={user.id.value }>{user.phone}</td>
          <td key={user.id.value }><img src={user.picture.medium}></img></td>
          
</tr>
          
          
              )}
          
          
          </tbody>
    </table>
      </card>
    </div>








  )

}

export default Employees;