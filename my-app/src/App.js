import logo from './logo.svg';
import './App.css';
import Player from './components/Player';

function App() {
  return (
    <div className="App">
            <Player
            playername="naresh"
            telugu="34"
            hindi="90"
            english="90"
            maths="90"
            science="90"
            social="90"
            total="500"/>
            <Player 
            
            playername="suresh"
            telugu="70"
            hindi="70"
            english="70"
            maths="70"
            science="70"
            social="70"
            total="420"/>
            <Player
            playername="mahesh"
            telugu="80"
             hindi="80"
            english="80"
            maths="80"
            science="80"
            social="80"
            total="480"             />
    </div>
  );
}

export default App;
