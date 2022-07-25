import 'bootstrap/dist/css/bootstrap.min.css';

export default function Equipe(){
    return(
<main className="background-default pt-5">
    <div className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-master">
        <h1>Equipe Sirius Development</h1>
            <div className="equipe">
              <div id="allan" className="grid-item">
                    <h2>Allan Souza</h2>
                    <img width="200" height="200" alt="imagem_allan" src="/prototipo-tcc/src/img/Allan.jpg">
                    <br>
                    <a href="https://www.linkedin.com/in/allan-victor-266ab6198/" target="_blank">Linkedin</a>
                    <a href="https://github.com/Allan-Souza" target="_blank">Github</a> 
                </div>
    
                <div id="Joyce" className="grid-item">
                    <h2>Joyce Almeida</h2>
                    <img width="200" height="200" alt="imagem_joyce" src="/prototipo-tcc/src/img/Joyce.jpg">
                    <br>
                    <a href="https://www.linkedin.com/in/joyce-almeida-ti/" target="_blank">Linkedin</a>
                    <a href="https://github.com/JoyAlmDev" target="_blank">Github</a> 
                </div>
    
                <div id="Rodrigo" className="grid-item">
                    <h2>Rodrigo Santana</h2>
                    <img width="200" height="200" alt="imagem_rodrigo" src="/prototipo-tcc/src/img/Rodrigo.jpg">
                    <br>
                    <a href="https://www.linkedin.com/in/rodrigoaster/" target="_blank">Linkedin</a>
                    <a href="https://github.com/rodrigoaster" target="_blank">Github</a>
                </div>

            </div>
            
        </div>
            
       </main>

    )
}