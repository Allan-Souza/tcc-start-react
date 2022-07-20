
export function Login() {
  return (
    <main >

      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
              BF Energy
            </a>
    
          <ul class="nav justify-content-end nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="telaSobre.html">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="telaInfos.html">Informações</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="telaCalculoConsumo.html">Calculadora</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="telaInfosGrupo.html">Contato</a>
            </li>
           </ul>

        </div>
      </nav>
      <div class="background-default pt-5">
        <form class="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-position" action='#' method='POST'>
          <h1 class="text-center">Login</h1>
          <input type="text" placeholder="Nome Completo" class="form-control form-control-lg"/><br />
          <input type="password" placeholder="Senha" class="form-control form-control-lg"/> <br />
          <a href="#" class="d-flex justify-content-center text-decoration-none"><button class="btn btn-outline-success">Entrar</button></a>
        </form>
      </div>     
    </main> 
  )
}