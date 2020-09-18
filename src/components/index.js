import React, {useState, useEffect} from "react";
import API from "../utils/API";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/style.css"

function Employees () {
    const [employeeSearch , setEmployeeSearch] = useState({
        first: "",
        last: ""
    })
    useEffect(() => {
        API.getUsers().then((res) => {
            setEmployeeSearch(res.data)
            // console.log(employeeSearch)
            // console.log(employeeSearch.results)
            // console.log(employeeSearch.results)
            console.log(employeeSearch.results)
        })
    });


    return (
        <div className="container">
      <div className="jumbotron jumbotron-fluid" id="jumbotron">
  <div className="container">
    <h1 className="display-4">Employee Data</h1>
    <p className="lead">PLease Type the Employee Name to Search</p>
  </div>
</div>
          
          
          <form>
  <div className="form-group">
    
    <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Employee Name" />
    <button type="button" className="btn btn-success" id="searchBtn">Search</button>
  </div>
        </form>
</div>








    )

}

export default Employees;