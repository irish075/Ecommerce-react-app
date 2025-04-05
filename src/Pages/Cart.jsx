
function Cart({ cartItems }) {
  return (
    <div className='w-full h-screen border-l-green-600 p-5'>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item mb-4">
            <img src={item.image} alt={item.title} className="w-20 h-20" />
            <div className="cart-item-details">
              <h5>{item.title}</h5>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
