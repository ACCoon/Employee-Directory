import React from "react";

function TableRow( props ) {
  return (
    <tr key={props.emp.phone}>
      <td><img src={props.emp.picture} /></td>
      <td>{props.emp.name}</td>
      <td>{props.emp.email}</td>
      <td>{props.emp.phone}</td>
    </tr>
  )
}

export default TableRow;