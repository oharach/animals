import React, { Component } from 'react';

class Categories extends Component {

  render() {
    var category = this.props.categories.map((cat) => {
      return (<tr key={cat.id}><td title={cat.cry}>{cat.type}</td><td>{cat.diet}</td><td>{cat.qty}</td><td><button type="button" onClick={this.props.onClick} category={cat.type} className="btn btn-success pull-right">View</button></td></tr>)
    });
    return (
      <div>
        <h1 className="text-center">Animal types</h1>
        <table className="table table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Diet</th>
              <th>Number of individuals</th>
            </tr>
          </thead>
          
          <tbody>
            {category}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Categories