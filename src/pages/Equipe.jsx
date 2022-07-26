import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/navbar';
import '../assets/css/equipe.css'

export function Equipe() {

  return (
    <div>
      <Navbar/>
      <main className="background-equipe pt-5">
        <div id='card' className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-master">       
          <h1 className="text-center">Equipe Sirius Development</h1><br />
            <div className="grid-container">
              <div id="allan" className="grid-item">
                <h2>Allan Souza</h2>
                <img className='foto' width="150" height="150" alt="imagem_allan" src="src/assets/img/equipe/allan.jpeg"/><br />
                <a href="https://www.linkedin.com/in/allan-victor-266ab6198/" target="_blank">Linkedin
                </a><br />
                <a href="https://github.com/Allan-Souza" target="_blank">Github</a> 
              </div>   
              <div id="Joyce" className="grid-item">
                <h2>Joyce Almeida</h2>
                <img className='foto' width="150" height="150" alt="imagem_joyce" src="src/assets/img/equipe/joyce.jpeg"/><br/>                    
                <a href="https://www.linkedin.com/in/joyce-almeida-ti/" target="_blank">Linkedin</a><br />
                <a href="https://github.com/JoyAlmDev" target="_blank">Github</a> 
              </div>   
              <div id="Rodrigo" className="grid-item">
                <h2>Rodrigo Santana</h2>
                <img className='foto' width="150" height="150" alt="imagem_rodrigo" src="src/assets/img/equipe/rodrigo.jpeg"/><br/>
                <a href="https://www.linkedin.com/in/rodrigoaster/" target="_blank">Linkedin</a><br />
                <a href="https://github.com/rodrigoaster" target="_blank">Github</a>
              </div>
          </div>        
        </div>            
      </main>
    </div>
    
  )
}