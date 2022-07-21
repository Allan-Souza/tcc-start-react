import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css";
import "https://getbootstrap.com/docs/5.2/assets/css/docs.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js";

export function Home() {
    return(
        
        <main class="inicio">
         <div className="home">
    <nav class="navbar bg-light" >
      <div class="" id="navbarNav">
            <ul class="nav justify-content-end nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="home.html">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="">Informações</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="">Calculadora</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="">Cadastro</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="">Contato</a>
              </li>
            </ul>
          </div>
      </nav>
    
   
  <!---CARROSEL-->

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="" role="img" aria-label="Espaço reservado: primeiro slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#5a6165;"></rect><text x="50%" y="50%" fill="#555" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#b2aca2;">First slide</text></svg>
      
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a095;"></rect><text x="50%" y="50%" fill="#444" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#bdb7af;">Second slide</text></svg>
      
          </div>
          <div class="carousel-item active">
            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#b2aca2;"></rect><text x="50%" y="50%" fill="#333" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#c8c3bc;">Third slide</text></svg>
      
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anterior</font></font></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Próximo</font></font></span>
        </button>
      </div>

    <!----Descrição inicial da BF Energy-->

    <div class="inicio">
      
       <div class="inicio-descricao">
    <section class="background-default pt-5">
        <div class="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded">
            <h1 class="text-center">Comprometidos com a <p class="text-center text-success">SUA ECONOMIA</p></h1>
            <p class="lead text-muted">Gerencie seu consumo com a calculadora de gastos elétricos residencial. Clique no botão abaixo e experimente!</p>
            <a href="#" class="d-flex justify-content-center text-decoration-none"><button type="button" class="btn btn-outline-success">Iniciar</button></a>

          </div>
     </section>
    </div>
</main>
)
}

