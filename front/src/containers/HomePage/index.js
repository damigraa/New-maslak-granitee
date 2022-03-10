import React from 'react'
import Header from '../../components/Header/HeaderNav'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import AppHome from './../Home/AppHome';


const HomePage = (props) => {
  return(
    <Layout>
     <AppHome />
    </Layout>
   )

 }

export default HomePage