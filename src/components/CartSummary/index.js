import CartContext from '../../context/CartContext'
import './index.css'
import CartPopup from '../CartPopup'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <CartPopup noOfItems={cartList.length} total={total} />
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
