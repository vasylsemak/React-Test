import React from 'react';

export default function AdoptionForm (props) {
  const { pets, previewPet, adoptSelectedPet } = props;

  return (
    <div>
      <select onChange={previewPet}>
      {
        pets.map((p, idx) => (
          <option key={p.name} >{p.name}</option>
        ))
      }
      </select>
      <button onClick={adoptSelectedPet}>ADOPT</button>
    </div>
  );
}
