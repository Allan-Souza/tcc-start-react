import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carroussel(){
    return(
        <main className="carroussel">

        <div className="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="" role="img" aria-label="Espaço reservado: primeiro slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#5a6165;"></rect><text x="50%" y="50%" fill="#555" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#b2aca2;">First slide</text></svg>
      
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a095;"></rect><text x="50%" y="50%" fill="#444" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#bdb7af;">Second slide</text></svg>
      
          </div>
          <div className="carousel-item active">
            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#b2aca2;"></rect><text x="50%" y="50%" fill="#333" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#c8c3bc;">Third slide</text></svg>
      
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anterior</font></font></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Próximo</font></font></span>
        </button>
      </div>

    </main>
    )
}