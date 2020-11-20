import React, { Component } from 'react';
import PetPreview from './PetPreview';

export default class AdoptionAgency extends Component {

  constructor () {
    super();

    this.state = {
      dogs: [
        { name: 'Pandora', imgUrl: 'src/img/pandora.png' },
        { name: 'Taylor',  imgUrl: 'src/img/taylor.png'  },
        { name: 'Reggie',  imgUrl: 'src/img/reggie.png'  },
      ],
      cats: [
        { name: 'Winnie',  imgUrl: 'src/img/winnie.png' },
        { name: 'Earl',    imgUrl: 'src/img/earl.png'   },
        { name: 'Fellini',  imgUrl: 'src/img/fellini.png' }
      ],
      petToAdopt: { name: 'ME !' }
    }

    this.adoptPet = this.adoptPet.bind(this);
  }

  adoptPet(pet) {
    this.setState({ petToAdopt: pet });
  }

  render () {
    return (
      <div>
        <h1>Adopt</h1>
        <div className="clearfix">
          <h3>{`You are adopting: ${this.state.petToAdopt.name}`}</h3>
        </div>
        <div className="clearfix">
          <div className="block" id="dogs">
            <PetPreview pets={this.state.dogs} adoptPet={this.adoptPet} />
          </div>
          <div className="block" id="cats">
            <PetPreview pets={this.state.cats} adoptPet={this.adoptPet} />
          </div>
        </div>
      </div>
    );
  }

}
