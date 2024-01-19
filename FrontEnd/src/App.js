import './App.css';
import AboutUs from './components/AboutUs';
import Example from './components/Example';
import JoinUs from './components/JoinUs';
function App() {
  return (
    <div className='mt-10'>
      {/* <Example></Example> */}
      <div className='my-10'>

        <JoinUs></JoinUs>
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
