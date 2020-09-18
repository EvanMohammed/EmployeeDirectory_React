import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "../components/style.css"

function Employees() {
  const [employeeSearch, setEmployeeSearch] = useState({
    filterUsers: [],
    users: []
  })
  useEffect(() => {
    API.getUsers().then((res) => {
      console.log(res.data.results[0])
      // setEmployeeSearch(res.data)
      // console.log(employeeSearch)
      // console.log(employeeSearch.results)
      // console.log(employeeSearch.results)
      // console.log(employeeSearch.results);
      setEmployeeSearch({
        ...employeeSearch,
        users: res.data.results,
        filterUsers: res.data.results

      })
    })
  }, []);


  return (
   
            <div className="container">
         <img src="https://jgparker.com/wp-content/uploads/2016/01/Employee-Benefits-5.jpg" class="img-fluid" alt="Responsive image" /> 
      
   


              <form>
      <div className="form-group">

        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Employee Name" />
        <button type="button" className="btn btn-success" id="searchBtn">Search</button>
      </div>
            </form>


            <ul>
      {employeeSearch.users.map((user, i) =>
        (<div className="card" >

          <li key={user.id.value}>{user.dob.date}</li>
          <li key={user.id.value}>{user.email}</li>
          <li key={user.id.value }>{user.phone}</li>
          <li key={user.id.value }>{user.image}</li>
          


        </div>)
      )}
    </ul>
    </div>








  )

}

export default Employees;