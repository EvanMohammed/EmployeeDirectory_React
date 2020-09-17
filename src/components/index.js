import React, {useState, useEffect} from "react";
import API from "../utils/API"


function Employees () {
    const [employeeSearch , setEmployeeSearch] = useState({
        name: ""
        
    })
    useEffect(() => {
        API.getUsers().then((res) => {
            setEmployeeSearch(res.data)
            console.log(employeeSearch)
            console.log(employeeSearch.results[100].name.first)
        })
    }, [employeeSearch]);


    return (
        <div className="card">
      <div>
        Name: {employeeSearch.name}
      </div>

      <div className="btn-group">
        <button onClick={() => setEmployeeSearch({ ...employeeSearch, name: "lazy" })} className="btn btn-danger">
          Encourage Laziness
        </button>
            </div>


</div>






    )

}

export default Employees;