import React, { Component } from 'react';
import PetPreview from './PetPreview';

export default class AdoptionAgency extends Component {

  constructor () {

    super();

    this.state = {
      dogs: [
        { name: 'Taylor',  imgUrl: 'src/img/taylor.png'  },
        { name: 'Reggie',  imgUrl: 'src/img/reggie.png'  },
        { name: 'Pandora', imgUrl: 'src/img/pandora.png' }
      ],
      cats: [
        { name: 'Earl',    imgUrl: 'src/img/earl.png'   },
        { name: 'Winnie',  imgUrl: 'src/img/winnie.png' },
        { name: 'Fellini',  imgUrl: 'src/img/fellini.png' }
      ],
      // There's one more field that should be on this.state
      // You get to add that yourself!
    };

  }

  render () {

    return (
      <div>
        <h1>Adoptr</h1>

        <div className="clearfix">
          <h3>You are adopting: </h3>
        </div>

        <div className="clearfix">

          <div className="block" id="dogs">
            <h2>Dogs</h2>
          </div>

          <div className="block" id="cats">
            <h2>Cats</h2>
          </div>

        </div>
      </div>
    );
  }

}
