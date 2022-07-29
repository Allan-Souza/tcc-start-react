import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/navbar';
import '../assets/css/sobre.css'

export function Sobre() {

  return (
    <div className='background-default'>
      <Navbar />
      <section className='col-lg-6 col-md-8 mx-auto bg-light p-4 rounded'>
        <h1 className='text-center'>Quem somos</h1> <br />
        <p>
        Somos 3 potenciais humanos, bastante apaixonados por tecnologia e imensamente motivados a mudar o mundo da melhor forma utilizando-a.
        </p>
        <p>
         O nome de nosso projeto, foi inspirado em Benjamin Franklin, que foi um grande cientista que contribuiu para a física com seus estudos sobre a eletricidade.
        </p>
      </section>
      <section className='col-lg-6 col-md-8 mx-auto bg-light p-4 rounded'>
        <h2 className='text-center'>Nossa Missão</h2> <br />
        <p>
        Auxiliar as pessoas a calcularem o próprio consumo mensal de energia e a utilizarem da melhor forma, ajudando a economizar e ao meio ambiente
        </p>
      </section>
      <section className='col-lg-6 col-md-8 mx-auto bg-light p-4 rounded'>
        <h2 className='text-center'>Nossa Visão</h2><br />
        <p>
          Ser uma empresa referência em cálculos de gastos elétricos. Inspirados na ODS 7, visamos a economia financeira do usuário e o consumo consciente da energia elétrica.
        </p>
      </section>
      <section className='col-lg-6 col-md-8 mx-auto bg-light p-4 rounded'>
        <h2 className='text-center'>Nossos Valores</h2> <br />
        <ul>
          <li>Organização</li>
          <li>Ética e Transparência</li>
          <li>Responsabilidade Social</li>
        </ul>
      </section>
    </div>
  )
}