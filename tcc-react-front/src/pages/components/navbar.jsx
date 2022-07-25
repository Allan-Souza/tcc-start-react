import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
    return(

<main className="navbar">
    <div className="narbar">
      <nav className="navbar bg-light" >

         <div className="narbar" id="navbarNav">
            <ul className="nav justify-content-end nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="home.html">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">Informações</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">Calculadora</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">Cadastro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="">Contato</a>
              </li>
            </ul>
        </nav>    
    </div>
</main>

    )
    
}