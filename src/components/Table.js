const Table = ({ sat }) => {             {/* start with sat prop*/}
  return (
    <div>
      {/*<h2>Orbit Report for Satellite: {sat.name}</h2>*/}
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
        {sat.map((data) => (
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