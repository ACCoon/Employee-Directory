import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function Table() {
  // const emps = searchTerms();
  const [emps, setEmps] = useState([]);

  const loadEmps = () => {
    API()
      .then(data => {
        setEmps(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadEmps()
  });
 
  console.log(emps);
  return (
    <table className="table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th></th> {/* User picture */}
          <th>Name</th> {/* Concatenate name.first name.last */}
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {emps.map(emp => (
          <tr>
            <td><img href={emp.picture} /></td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.phone}</td>
          </tr>))}
      </tbody>
    </table>
  );
}

export default Table;