import '../src/styles/styles.css'
import '../src/styles/global.css'

import About from './components/About';

function App() {

  return (
    <>
      <div className="context">
        <h1>Manual do Aluno de <br />
        Sistemas de Informação</h1>

        <About />
      </div>
    </>
  )
}

export default App