import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import { Modall, MaterialInput, MaterialButton, DropdownMenu } from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";

import "./style.css";
import CreateUser from './CreateUser';

const HeaderNav = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);

  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  const logout = () => {
    dispatch(signout());
  };
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
              Регестрация
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modall visible={loginModal} onClose={() => setLoginModal(false)}>
        <CreateUser
          auth={auth}
          signup={signup}
          login={login}
        />
      </Modall>
      <div className="row subHeader">
        {/* Logo  */}
        <div className="col-sm-6 col-md-6">
          <div className="logo">
            <a className="logoimage" href="/choice-of-monument">
              Как Выбрать Памятник?
            </a>
            <a className="logoimage" href="/to-start">
              С чего начать?
            </a>
          </div>
        </div>

        <div className="col-sm-6 col-md-6">
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
    </div>
  );
};

export default HeaderNav;
