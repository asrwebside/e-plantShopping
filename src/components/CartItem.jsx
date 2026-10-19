import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Leaf } from 'lucide-react';
import { decreaseQuantity, increaseQuantity, removeFromCart, selectCartTotal } from '../redux/CartSlice.jsx';

const money = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD',
}).format(amount);

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="page-content cart-page">
        <section className="empty-cart">
          <span className="empty-cart-icon"><ShoppingBag size={32} /></span>
          <span className="eyebrow dark-eyebrow">YOUR CART, YOUR LITTLE JUNGLE</span>
          <h1>It's looking a little<br /><em>too leafy-free.</em></h1>
          <p>Your future plant friends are waiting to come home.</p>
          <Link to="/plants" className="btn btn-primary">Explore Plants <ArrowLeft size={17} /></Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-content cart-page">
      <section className="cart-heading">
        <div><span className="eyebrow dark-eyebrow">ALMOST HOME</span><h1>Your shopping<br /><em>basket.</em></h1></div>
        <span className="cart-item-count">{itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'} IN YOUR CART</span>
      </section>
      <div className="cart-layout">
        <section className="cart-list" aria-label="Cart items">
          <div className="cart-list-head"><span>YOUR PLANTS ({items.length})</span><Link to="/plants"><ArrowLeft size={15} /> Continue shopping</Link></div>
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img className="cart-thumb" src={item.image} alt={item.name} />
              <div className="cart-product-details">
                <span className="cart-category">{item.category || 'HOUSEPLANT'}</span>
                <h2>{item.name}</h2>
                <span className="cart-unit-price">{money(item.price)} <small>/ each</small></span>
                <button className="remove-item" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button>
              </div>
              <div className="cart-row-end">
                <div className="quantity-control">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} aria-label={`Decrease ${item.name} quantity`}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))} aria-label={`Increase ${item.name} quantity`}><Plus size={14} /></button>
                </div>
                <strong className="line-total">{money(item.price * item.quantity)}</strong>
                <span className="line-label">ITEM TOTAL</span>
              </div>
            </article>
          ))}
          <Link to="/plants" className="back-to-plants"><ArrowLeft size={16} /> Keep discovering plants</Link>
        </section>
        <aside className="order-summary">
          <span className="eyebrow dark-eyebrow">THE DETAILS</span>
          <h2>Order summary</h2>
          <div className="summary-line"><span>Plants ({itemCount} items)</span><span>{money(total)}</span></div>
          <div className="summary-line"><span>Delivery</span><span className="free-delivery">Calculated later</span></div>
          <div className="summary-divider" />
          <div className="summary-total"><span>Subtotal</span><strong>{money(total)}</strong></div>
          <p className="summary-note"><Leaf size={15} /> A little greenery goes a long way.</p>
          <button className="btn btn-primary checkout-btn" onClick={() => setCheckoutMessage(true)}>Checkout <ArrowLeft className="checkout-arrow" size={17} /></button>
          {checkoutMessage && <p className="checkout-message" role="status">Coming Soon — secure checkout is being planted!</p>}
          <p className="secure-note">Demo checkout · No payment will be taken</p>
        </aside>
      </div>
    </main>
  );
}