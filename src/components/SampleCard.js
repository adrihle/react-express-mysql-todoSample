import React, { Component } from "react";

export default class SampleCard extends Component {

    
  render() {
    return (
      <div className="container pt-5">
        <div className="col-xs-12">
          <div className="card">
            <div className="card-header">
            <h5 className="card-title">{this.props.row.task}</h5>
            </div>
            <div className="card-body">
              <h4 className="card-title">{this.props.row.created_at}</h4>
              {this.props.row.status === 1 ? (
                <h3 className="card-title">Pending</h3>
              ) : (
                <h3 className="card-title">Completed</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
