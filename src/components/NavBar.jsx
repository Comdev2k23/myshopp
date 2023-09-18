import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {AiOutlineShoppingCart} from "react-icons/ai"



function NavBar() {
  return (
    <div>
            <nav class="navbar bg-dark">
  <div class="container-fluid">
    
    <a class="navbar-brand  text-white" > <AiOutlineShoppingCart /> MyShopp</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search Products" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default NavBar