import React from 'react';
import CartWidget from './cartWidget';
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-edit">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sion Computación</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Perifericos</a></li>
            <li><a class="dropdown-item" href="#">Componentes</a></li>
            <li><a class="dropdown-item" href="#">Insumos</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre Nosotros</a>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/> 
</nav>
  );
}

export default NavBar;