import React, { Component } from 'react';
import ProductTable from './Table'

class Individuals extends Component {
  
  render() {
    return (
      <div>
        <h1 className="text-center">{this.props.category}s</h1>
        <ProductTable 
          animals={this.props.animals}
          category={this.props.category}
          onProductTableUpdate={this.props.onProductTableUpdate}
          onClick={this.props.onClick}
          onRowAdd={this.props.onRowAdd}
          onRowDel={this.props.onRowDel}
        />
      </div>
    );
  }
}

export default Individuals