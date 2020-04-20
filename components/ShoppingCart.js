import React, { Component } from 'react';
import { Panel, Table, Button } from 'react-bootstrap';
import store from '../store';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';
 
const ShoppingCart = (props) => {
  return (
    <Panel> 
    <p>If the cart is completely empty we shall add back again the products for you</p>
      <Table fill>
        <thead>
          <tr>
            <th >4 Items</th>
            <th ></th>
            <th >Size</th>
            <th >Qty</th>
            <th >Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(product =>
            <tr key={product.p_id}>
              <td className="thumbnail-img"><img className="img-style" src={product.p_image} alt={product.p_name} /></td>
              <td><h4 className="f3 mb2">{product.p_name}</h4>
                <h5 className="f5 fw4 gray mt0">Style: {product.p_style}</h5>
                <h6 className="f5 fw4 gray mt1">Color: {product.p_selected_color.name}</h6>
                <p>
                  <a onClick={() => props.showModal(product)}>Edit</a> |
                  <a onClick={() => props.removeFromCart(product)}> X Remove</a> |
                  <a> Save For Later</a>
                </p></td>
              <td>
                {product.p_available_options.sizes.map(size => product.p_selected_size.name === size.name && size.code.toUpperCase())
                }
              </td>
              <td ><input type="number" value={product.p_quantity}  /></td>
              <td >${product.p_price}</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="12" className="footer-style text-right">
              Estimated Total: ${props.cart.reduce((sum, product) => sum + product.p_price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Panel> 
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
