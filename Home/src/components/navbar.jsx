
export function Navbar() {
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="src/assets/images/logo.png" alt="" width="70" height="60" className="d-inline-block align-text-top"/>
                    
                </a>
    
                <ul className="nav justify-content-end nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sobre</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Informações</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="src/pages/telaCalculoConsumo.html">Calculadora</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contato</a>
                    </li>                   
                  </ul>
                </div>
              </nav>
    )
}