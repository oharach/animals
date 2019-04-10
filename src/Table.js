import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class ProductTable extends Component {

  render() {
    const currentCategory = this.props.category;
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var animal = this.props.animals.map(function(animal) {
      if (animal.category.indexOf(currentCategory) === -1) {
        return true;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={animal} onDelEvent={rowDel} key={animal.id}/>)
    });
    return (
      <div>
        <button type="button" onClick={this.props.onClick} className="btn btn-secondary mb-1">Back</button>
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success float-right">Add</button>
        <table className="table table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {animal}
          </tbody>
        </table>
      </div>
    );
  }
}

class ProductRow extends Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "name",
          value: this.props.product.name,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "age",
          value: this.props.product.age,
          id: this.props.product.id
        }}/>
        <td className="del-cell text-center">
          <FontAwesomeIcon icon={faTrashAlt} onClick={this.onDelEvent.bind(this)} />
        </td>
      </tr>
    );
  }
}

class EditableCell extends Component {
  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );
  }
}

export default ProductTable