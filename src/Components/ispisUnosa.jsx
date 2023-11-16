import React from "react";

const IspisUnosa = ({ names }) => {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            Ime: {name.name} Godine: {name.years}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IspisUnosa;
