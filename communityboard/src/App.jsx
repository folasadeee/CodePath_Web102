import './App.css';
import Board from './components/Board'


const App = () => {

  return (
    <div className="App">
      
      <div className="header">
  <img className='header-img' src='/src/assets/image1.jpg' />
  <div className="header-text">
    <h1>Innovation, Ignited.</h1>
    <p>Welcome to <b>HackerSphere</b>.</p>
    <p>Here, you can join the movement of innovators and disruptors. Dive into the world of <b>Hackathons</b>, where ideas come to life and boundaries are pushed. Explore, connect, and create at the forefront of technology.</p>
    <p>Ready to disrupt the tech scene (and win some sweet prizes)? Your journey starts here.</p>
    <a href="https://mlh.io/"><button className='button-1'>Find More Hackathons</button></a>
    <div className='divider' />
    <a href="#"><button className='button-2'>FAQs</button></a>
    <div className='divider-2' />
  </div>
</div>

      
      <div className="content">
      <Board />
      </div>

    </div>
  )
}

export default App
