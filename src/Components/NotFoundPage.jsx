import React from 'react'
import { NavLink } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div class="container">
      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1>404</h1>
          <h2>La página que estas buscando no existe.</h2>
          <NavLink to="/" className="btn" href="index.html">
            Volver al inicio
          </NavLink> 
          <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
      </section>
  </div>
  )
}

export default NotFoundPage