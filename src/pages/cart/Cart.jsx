import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Remove Product From Cart
  const removeProductFromCArt = (productId) => {
    dispatch(
      removeFromCart(productId)
    );

    Swal.fire({
      position: "center",
      icon: "error",
      title: "تم الازاله بنجاح ",
      showConfirmButton: false,
      timer: 1500
    });
  };

  return cartItems.length < 1 ? (
    <div className="empty-cart">
        <h1>سله التسوق الخاصه بك فارغه</h1>
        <p>لا یوجد سلع</p>
        <Link className="empty-cart-link" to="/products">
            صفحه السلع
        </Link>
    </div>
  ) : (
    <>
      <section className="cart">
        <h1 className="cart-title">سله التسوق</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img-wrapper">
                  <img
                    className="cart-item-img"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-quantity">
                    الکمیه:
                    <span>{item.quantity}</span>
                  </div>
                  <div className="cart-item-price">
                    السعر:
                    <span>{(item.price * item.quantity).toFixed(2)}$ </span>
                  </div>
                  <i
                    onClick={() => removeProductFromCArt(item.id)}
                    className="bi bi-trash fill cart-item-delete-icon"
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
              جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
              التفاصیل
            </div>
            <div className="cart-summary-total">
              المجموع:
              <span>
                {cartItems
                  .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                  .toFixed(2)}
                $
              </span>
            </div>
            <Link to="/E-commerce-website" className="cart-summary-btn">تابع عملیات الشراء</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
