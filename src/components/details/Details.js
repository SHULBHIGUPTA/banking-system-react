import React, { Component } from 'react'
import { connect } from 'react-redux';

class Details extends Component {
  render() {
    return (
      <>
        <h1>Total Amount : {this.props.Amount}</h1>
      </>
    );
  }
};

const mapStateToProps = (reduxStore,props) =>{
  return{
     Amount: reduxStore.Amount
  }
}

export default connect(mapStateToProps,null)(Details);

