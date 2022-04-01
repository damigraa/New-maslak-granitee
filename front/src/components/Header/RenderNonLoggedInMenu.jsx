import React from "react";

import { Modall, MaterialInput, MaterialButton, DropdownMenu } from "../MaterialUI";
import { login, signout, getCartItems, signup as _signup } from "../../actions";



export const RenderNonLoggedInMenu = ({ auth, setSignup, setLoginModal }) => {
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
