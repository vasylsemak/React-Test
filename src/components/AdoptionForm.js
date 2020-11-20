import React from 'react';

export default function AdoptionForm (props) {
  const { pets, previewPet, adoptSelectedPet } = props;

  return (
    <div>
      <select onChange={previewPet}>
      {
        pets.map(p => (
          <option key={p.name}>{p.name}</option>
        ))
      }
      </select>
      <button id='save-button' onClick={adoptSelectedPet}>ADOPT</button>
    </div>
  );
}
