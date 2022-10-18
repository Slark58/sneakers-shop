// import logo from './logo.svg';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';
import data from '../SliderData.json'

function App() {



  


  return (
    // console.log('start')
    <>
      <Header/>
      <Main/>
      <Slider data={data}/>
    </>
  );
}

export default App;
