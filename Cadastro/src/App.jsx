import {Cadastro} from './pages/cadastro/cadastro'
import { Navbar } from './pages/components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {

  return (
    <div>
      <Navbar />
      <Cadastro />      
    </div>
  )
}
