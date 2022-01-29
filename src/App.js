import './App.css';
import Timer from './Components/Timer/timer.js';

function App() {
  return (
    <div>
      <Timer onTick={(seconds) => console.log('There is time left ' + seconds)}
        time={8000}
        step={1000}
        autostart={true}
      />
    </div>
  );
}

export default App;
