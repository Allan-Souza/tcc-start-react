import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar";
import Carroussel from "../components/carroussel";



export default function Home() {
    return(
        
  <main className="home">
    <div className="home">
        <Navbar/>
        <Carroussel/>
         <div className="inicio">
            <div className="inicio-descricao">
            <section className="background-default pt-5">
            <div className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded">
            <h1 className="text-center">Comprometidos com a <p class="text-center text-success">SUA ECONOMIA</p></h1>
            <p className="lead text-muted">Gerencie seu consumo com a calculadora de gastos elétricos residencial. Clique no botão abaixo e experimente!</p>
            <a href="#" className="d-flex justify-content-center text-decoration-none"><button type="button" class="btn btn-outline-success">Iniciar</button></a>
            </section>
      </div>
    </div>
    </div>
</main>

)

}
