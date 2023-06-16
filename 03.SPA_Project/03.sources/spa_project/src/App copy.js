import './App.css';
import Board from './ferrari/module/Board';
import Model from './ferrari/module/Model';
import Info from './ferrari/module/Info';
import News from './ferrari/module/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './ferrari/module/Test';
import Ban from './ferrari/module/Ban';

function App() {
  return (
    <>
      <Test />
      <Ban />
      <Model />
      <News />
      <Board />
      <Info />
    </>
  );
}

export default App;
