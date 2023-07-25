import React from "react";

const Table = ({ sat }) => {             {/* start with sat prop*/}
  return (
    <div>
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
      <tbody>
        {sat.map((data, id) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
        ))};
      </tbody>
      </table>
    </div>
  );
};

export default Table;