import '../src/styles/header.css';
import '../src/styles/global.css';

import Header from './components/Header';
import About from './components/About';
import Materials from './components/Materials'; 
import Footer from './components/Footer';

function App() {
  return (
      <>
        <Header />
        <About />
        <Materials />
        <Footer />
      </>  
  );
}

export default App;