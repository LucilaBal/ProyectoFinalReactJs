import CartWidget from "./CartWidget";

const Navbar =() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">CellCom</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/">Smarthphones</a>
        </li>
        <li className="nav-item Marcas">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button " data-bs-toggle="dropdown" aria-expanded="false">
            Marcas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><a className="dropdown-item" href="/category/Samsung">Samsung</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="/category/Motorola">Motorola</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="/category/Iphone">Iphone</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="/category/Xiaomi">Xiaomi</a></li>
          </ul>
        </li>
      </ul>
      <a href="/cart"><CartWidget/></a>
    </div>
  </div>
</nav>
 );
}

export default Navbar;