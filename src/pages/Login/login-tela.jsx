

export function Login() {
  return (
    <main >

      <nav class="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="src/assets/img/logo-fundo.png" alt="" width="70" height="60" className="d-inline-block align-text-top" />
              
          </a>
    
          <ul className="nav justify-content-end nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaSobre.html">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaInfos.html">Informações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaCalculoConsumo.html">Calculadora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaInfosGrupo.html">Contato</a>
            </li>
           </ul>

        </div>
      </nav>
      <div className="background-default pt-5">
        <form className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-position" action='#' method='POST'>
          <h1 className="text-center">Login</h1> <br />
          <input type="text" placeholder="Nome Completo" className="form-control form-control-lg"/><br />
          <input type="password" placeholder="Senha" className="form-control form-control-lg"/> <br /> <br />
          <a href="#" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-outline-success">Entrar</button></a>
        </form>
      </div>     
    </main> 
  )
}