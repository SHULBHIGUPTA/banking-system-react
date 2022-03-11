import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Header extends Component {
  render() {
    return (
      <>
        <nav className="bg-primary p-1">
              <h3 >Bank of Geekster</h3>
              <h5 >TOTAL BALANCE :{this.props.Amount}</h5>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (reduxStore, props) => {
//   console.log(reduxStore.Amount);
  return {
    Amount: reduxStore.Amount,
  };
};

export default connect(mapStateToProps, null)(Header);
