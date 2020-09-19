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
    setEmployeeSearch(event.target.value);
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
          


            <ul>
      {employeeSearch.users.map((user) =>
        (<div className="card" >

          <li key={user.id.value}>{user.dob.date}</li>
          <li key={user.id.value}>{user.email}</li>
          <li key={user.id.value }>{user.phone}</li>
          <li key={user.id.value }> {user.picture.medium}</li>
          


        </div>)
      )}
    </ul>
      </card>
    </div>








  )

}

export default Employees;