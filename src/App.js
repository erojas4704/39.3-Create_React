import logo from './logo.svg';
import './App.css';
import Board from './Board';

function App() {
  return (
    <>
      <Board width={3} height={3} probablityLightIsOn={0.5} />
    </>
  );
}

export default App;
