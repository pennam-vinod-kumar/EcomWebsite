import {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const CartPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card')

  const handleCheckout = () => {
    setIsModalOpen(true)
  }

  const handlePaymentMethodChange = e => {
    setSelectedPaymentMethod(e.target.value)
  }

  const handleConfirmOrder = () => {
    if (selectedPaymentMethod === 'cod') {
      // alert('Your order has been placed successfully')
      setIsModalOpen(false)
    }
  }
  return (
    <div>
      <button type="button" onClick={handleCheckout}>
        Checkout
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Payment Modal"
      >
        <h2>Payment Options</h2>
        <form>
          <label htmlFor="paymentMethod">Select Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={selectedPaymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <option value="card">Card</option>
            <option value="netBanking" disabled>
              Net Banking
            </option>
            <option value="upi" disabled>
              UPI
            </option>
            <option value="wallet" disabled>
              Wallet
            </option>
            <option value="cod">Cash on Delivery</option>
          </select>
          <p>Items in Cart: | Total Price:</p>
          <button
            type="button"
            onClick={handleConfirmOrder}
            disabled={selectedPaymentMethod !== 'cod'}
          >
            Confirm Order
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default CartPopup
