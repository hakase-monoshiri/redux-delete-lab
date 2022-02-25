import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  

  render() {
    return(
      <div>
        <Bands bands={this.props.bands} deleteFn={this.props.deleteBand}/>
        <BandInput addBand={this.props.addBand}/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: name => dispatch({type: "ADD_BAND", name: name}),
    deleteBand: id => dispatch({type: "DELETE_BAND", id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
