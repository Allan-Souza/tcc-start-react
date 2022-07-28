import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/navbar';
import '../assets/css/home.css'
export function Home() {

  return (
    <div>
      <Navbar />
      <section className="background-default pt-5">
        <div id='card' className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded">
          <h1 className="text-center">Nos comprometemos com <p className="text-center text-success">SUA ECONOMIA</p></h1> <br />
          <p className="lead text-muted">Inicie sua economia com nossa calculadora de gasto, ela irá medir o seu gasto mensal baseado no consumo dos eletrodomésticos de sua casa. Aperte no botão e experimente!</p> <br />
          <a href="login" className="d-flex justify-content-center text-decoration-none"><button type="button" className="btn btn-outline-success">Começar</button></a>    
        </div>
      </section>
    </div>
  )
}