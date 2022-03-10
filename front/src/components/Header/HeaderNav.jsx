import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import { Modall, MaterialInput, MaterialButton, DropdownMenu } from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";

import "./style.css";

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}</a>}
        menus={[
          // { label: "Мой профиль", href: "", icon: null },
          {
            label: "Заказы",
            href: `/account/orders`,
            icon: null,
          },
          // { label: "Стать нашим партнером", href: "/partner", icon: null },
          // { label: "Уведомление", href: "", icon: null },
          { label: "Выйти", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Login
          </a>
        }
        menus={[
          { label: "Контакты", href: "/contacts", icon: null },
          // { label: "Мой профиль", href: "", icon: null },
          {
            label: "Заказы",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Купоны", href: "/discounts", icon: null },
          // { label: "Уведомления", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>Новый Покупатель</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Sign Up
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modall visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row-h">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  style={{ textAlign: "center" }}
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                {/* <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </Modall>
      <div className="subHeader">
        {/* Logo  */}
        <div className="logo">
          <a className="logoimage" href="/choice-of-monument">
            Как Выбрать Памятник?
         </a>
          <a className="logoimage" href="/to-start">
            С чего начать?
         </a>
        </div>

        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>Информация</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "С чего начать?", href: "/to-start", icon: null },
              { label: "Материалы", href: "/granite-catalog", icon: null },
              { label: "Оплата и Доставка", href: "/paymentAnd-delivery", icon: null },
              { label: "Способы оплаты", href: "/payment", icon: null },
              { label: "Гарантии", href: "/warranty", icon: null },
              { label: "Гравировка", href: "/engraving", icon: null },
              { label: "О Мастерской", href: "/workshop", icon: null },
              { label: "Как выбрать памятник", href: "/choice-of-monument", icon: null },
              { label: "Связаться с нами", href: "/contacts", icon: null },
              { label: "Акции", href: "/discounts", icon: null },
            ]}
          />
          <div>
            <a href={`/cart`} className="cart">
              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Корзина</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
