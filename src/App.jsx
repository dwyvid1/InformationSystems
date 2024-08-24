import '../src/styles/header.css'
import '../src/styles/global.css'

import Header from './components/Header'
import About from './components/About';
import Materials from './components/Materials'; 

function App() {

  return (
    <>
        <Header />
        <About />
        <Materials />
    </>
  )
}

export default App