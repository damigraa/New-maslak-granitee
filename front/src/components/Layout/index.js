import React from 'react';
import Footer from '../Footer';
import MenuHeader from '../MenuHeader';
import Header from './../Header/Header';


const Layout = (props) => {
  return(
    <>
        <Header />
        <div>
        <MenuHeader />

        </div>
        {props.children}
        <Footer />
    </>
   )

 }

export default Layout