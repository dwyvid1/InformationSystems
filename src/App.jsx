import '../src/styles/styles.css'
import '../src/styles/global.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function App() {

  return (
    <>
      <div className="context">
        <img className="avatar" src="https://github.com/dwyvid1.png" />
        <h1>Deyvid Matheus</h1>
        <h2>Trilha de Aprendizagem em S.I</h2>

        <div className='links'>
          <a href="https://github.com/dwyvid1" target="blank"><GitHubIcon/> Github</a>
          <a href="https://www.linkedin.com/in/deyvid-matheus-101a69197/" target="blank"><LinkedInIcon/> LinkedIn</a>
          <a href="#"><InstagramIcon/>Instagram</a>
        </div>
      </div>
    </>
  )
}

export default App