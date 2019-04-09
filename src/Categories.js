import React, { Component } from 'react';

class Categories extends Component {

  render() {
    var category = this.props.categories.map((cat) => {
      return (<tr key={cat.id}><td title={cat.cry}>{cat.type}</td><td>{cat.diet}</td><td>{cat.qty}</td><td><button type="button" onClick={this.props.onClick} category={cat.type} className="btn btn-success pull-right">View</button></td></tr>)
    });
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Type</th>
              <th>Diet</th>
              <th>quantity</th>
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