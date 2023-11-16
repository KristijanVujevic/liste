import React, { useState } from "react";
import IspisUnosa from "./ispisUnosa";

const Ispisnovi = ({ imena }) => {
  const [names, setNames] = useState(imena);
  const [firstName, setFirstName] = useState("");
  const [year, setYear] = useState(0);
  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button
        onClick={() => {
          setNames([
            ...names,
            { id: crypto.randomUUID(), name: firstName, years: year },
          ]);
        }}
      >
        Dodaj
      </button>
      <IspisUnosa names={names} />
    </div>
  );
};

export default Ispisnovi;
