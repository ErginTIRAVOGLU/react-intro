import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class ProductList extends Component {
  

  render() {
    return (
      <>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Stok</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button onClick={()=>this.props.addToCart(product)} color="info">Add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}