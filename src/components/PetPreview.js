import React, { Component } from 'react';
import AdoptionForm from './AdoptionForm';

export default class PetPreview extends Component {
  constructor (props) {
    super(props);
    this.state = { petToPreview: {} };

    this.previewPet = this.previewPet.bind(this);
    this.adoptSelectedPet = this.adoptSelectedPet.bind(this);
  }

  componentDidMount() {
    this.setState({ petToPreview: this.props.pets[0] });
  }

  previewPet(evt) {
    const petName = evt.target.value;
    const selectedPet = this.props.pets.filter(p => p.name === petName)[0];
    this.setState({ petToPreview: selectedPet });
  }

  adoptSelectedPet() {
    const { adoptPet } = this.props;
    adoptPet(this.state.petToPreview);
  }

  render () {
    return (
      <div className="preview">
        <div>
          <h4>Preview:</h4>
          <img src={this.state.petToPreview.imgUrl} />
        </div>
        <AdoptionForm
          pets={this.props.pets}
          previewPet={this.previewPet}
          adoptSelectedPet={this.adoptSelectedPet}
         />
      </div>
    );
  }
}
