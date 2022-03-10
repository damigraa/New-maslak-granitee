import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?
          <Container fluid >
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={`/`}>Главная</NavLink></li>
                  <li><NavLink to={`/category`}>Категории</NavLink></li>
                  <li><NavLink to={`/products`}>Продукты</NavLink></li>
                  <li><NavLink to={`/orders`}>Заказы</NavLink></li>
                  <li><NavLink to={`/image`}>Галерея</NavLink></li>
                  <li><NavLink to={`/page`}>Страницы</NavLink></li>
                  <li><NavLink to={`/applications`}>Заявки</NavLink></li>
                  <li><NavLink to={`/users`}>Пользователи</NavLink></li>
                  <li><NavLink to={`/siteSetting`}>Настройки сайта</NavLink></li>
                  <li><NavLink to={`/test`}>Пробный для тестов</NavLink></li>


                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                {props.children}
              </Col>
            </Row>
          </Container>
          :
          props.children
      }


    </>
  )

}

export default Layout;