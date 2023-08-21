import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from "react-bootstrap"
import categories from '../categories'
import { LinkContainer } from "react-router-bootstrap"
import "../pages/Home.css"

function Home() {
  return (
    <div className='home-banner'>
      aca abajo va una imagen del home
      <img src="https://www.amd.com/content/dam/amd/en/images/products/2034503-asus-rog-ally-front.png" alt='aca va imagen' />
      <div className='muestra-products-container container mt-4'>
        <h2>Ultimos productos</h2>
      </div>
      <div>
        <Link to="/category/all" style={{textAlign: "right", display: 'block', textDecoration: "none"}}>
          Ver más {">>"}
        </Link>
      </div>
      {/* Abajo va el banner */}
      <div className='sale-banner-container mt-4'>
        <img src="https://t3.ftcdn.net/jpg/04/13/99/08/360_F_413990824_UfRdsb76NpyXFICN3BQXKUOr6pdwDcMX.jpg" alt='Imagen de banner'/>
      </div>
      <div className='recientes-products-container container mt-4'>
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
            <Col md={4}>
              <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px"}} className='category-tile'>
                {category.name}
              </div>
            </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Home