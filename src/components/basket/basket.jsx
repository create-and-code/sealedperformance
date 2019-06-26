import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PaypalExpressBtn from "react-paypal-express-checkout";
import http from "../../services/httpService";
import { apiUrl } from "../../config.json";

function sort(items) {
  return items.sort((a, b) => a._id - b._id);
}

class Basket extends Component {
  state = {
    delivery: 0
  };

  render() {
    const { addToBasket, removeFromBasket, removeAllFromBasket } = this.props;
    const { items, total } = this.props.basket;

    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);
      const order = {
        items: items,
        payment: payment
      };
      http.post(apiUrl + "/orders", order).then(res => console.log(res));
    };

    const onCancel = data => {
      console.log("The payment was cancelled!", data);
      // toast 'The payment was cancelled!'
    };

    const onError = err => {
      console.log("Error!", err);
      // toast the error
    };

    let env = "sandbox";
    let currency = "GBP";

    const client = {
      sandbox:
        "ATpskLovJnjUF8w_zPbgzUIIul519nbDXpi4sPUgPgGo9F4sOifKBMIi6dax4fPIsVJtPv_07bUPdnAe",
      production:
        "ATpskLovJnjUF8w_zPbgzUIIul519nbDXpi4sPUgPgGo9F4sOifKBMIi6dax4fPIsVJtPv_07bUPdnAe"
    };

    return (
      <React.Fragment>
        {items.length === 0 && (
          <div className="basket__noitems">
            <p>You have no items in your basket.</p>
            <Link to="/shop" className="btn">
              Shop
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <div className="basketpage">
            <div className="basket">
              <h1>My Basket</h1>
              {sort(items).map(item => (
                <div className="basket__item">
                  <div className="basket__item-img">
                    <img src={item.images[0].original} alt={item.title} />
                  </div>
                  <div className="basket__item-info">
                    <p>£{item.price}</p>
                    <p>{item.title}</p>
                    <p>
                      Quantity:
                      <button onClick={() => removeFromBasket(item)}>
                        <i className="fa fa-minus" aria-hidden="true" />
                      </button>
                      {item.quantity}
                      <button onClick={() => addToBasket(item)}>
                        <i className="fa fa-plus" aria-hidden="true" />
                      </button>
                    </p>

                    <p>
                      Subtotal: &nbsp;
                      <span>
                        £
                        {(
                          parseFloat(item.quantity) * parseFloat(item.price)
                        ).toFixed(2)}
                      </span>
                    </p>
                    <button
                      onClick={() => removeAllFromBasket(item)}
                      className="basket__item-remove"
                    >
                      <i className="fa fa-times" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="summary">
              <h2>Summary</h2>
              <div className="summary__info">
                <div>
                  <p>Delivery Method</p>
                  <span>
                    <input
                      onClick={() => {
                        this.setState({ delivery: 0 });
                      }}
                      type="radio"
                      id="del-1"
                      name="delivery"
                      value="del-1"
                      defaultChecked
                    />
                    <label for="del-1">FREE - 3-5 Working Days £0.00</label>
                  </span>
                  <span>
                    <input
                      onClick={() => {
                        this.setState({ delivery: 8 });
                      }}
                      type="radio"
                      id="del-2"
                      name="delivery"
                      value="del-2"
                    />
                    <label for="del-2">Courier - 1-2 Working Days £8.00</label>
                  </span>
                </div>
                <table>
                  <tr>
                    <td>Subtotal</td>
                    <td>
                      {items
                        .reduce((sum, i) => (sum += i.quantity * i.price), 0)
                        .toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td>Delivery</td>
                    <td>£{this.state.delivery}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 900 }}>Order Total</td>
                    <td style={{ fontWeight: 900 }}>
                      {(total + this.state.delivery).toFixed(2)}
                    </td>
                  </tr>
                </table>
              </div>

              <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={(total + this.state.delivery).toFixed(2)}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { basket: state.basket };
}

function mapDispatchToProps(dispatch) {
  return {
    addToBasket: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromBasket: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromBasket: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket);
