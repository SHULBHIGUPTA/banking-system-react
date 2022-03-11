import React, { Component } from "react";
import { connect } from "react-redux";
import {Add,Remove} from '../../actions/action'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incAmount:0,
      decAmount:0
    };
  }

  AddAmount = () => {
    this.props.inc(this.state.incAmount);
  };

  withdrawAmount = () => {
    this.props.dec(this.state.decAmount);
  };

  render() {
    // console.log(this.props);
    // console.log(this.state.incAmount);
    // console.log(this.state.decAmount);
    
    return (
      <>
        <div className="main">
          <div className="container m-1">
            <div className="row">
            
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    <h2>Add Amount to your Account</h2>
                  </div>
                  
                  <div className="card-body">
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      className="form-control"
                      onChange={(e) => {
                        this.setState({
                          incAmount: e.target.value,
                        });
                      }}
                    />
                    <button
                      className="btn btn-primary mt-2"
                      onClick={this.AddAmount}
                    >
                      Deposit
                    </button>
                  </div>
                </div>
             
            </div>
          </div>

          <div className="container m-1">
            <div className="row">
              
                <div className="card">
                  <div className="card-header bg-dark text-white">
                    <h2>Withdraw Amount from your Account</h2>
                  </div>

                  <div className="card-body">
                    <input
                      type="number"
                      placeholder="Enter Amount"
                      className="form-control"
                      onChange={(e) => {
                        this.setState({
                          decAmount: e.target.value,
                        });
                      }}
                    />
                    <button
                      className="btn btn-primary mt-2"
                      onClick={this.withdrawAmount}
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


const mapDispatchToProps = (dispatch,props) => {

  const inc = (someDynamicAmount) => {
    dispatch(Add(someDynamicAmount));
  };

  const dec = (someDynamicAmount) => {
    dispatch(Remove(someDynamicAmount));
  };

  return {
    inc,
    dec
  }

}

export default connect(null,mapDispatchToProps)(Home);