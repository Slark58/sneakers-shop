// import logo from './logo.svg';
import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import Main from '../Main/Main';
import data from '../SliderData.json'
import Announcement from '../Announcement/Announcement';
import News from '../News/News';
import './App.scss';

function App() {



  


  return (
    // console.log('start')
    <>
      <Header/>
      <Main/>
      <Slider data={data}/>
      <Announcement/>
      <News/>
    </>
  );
}

export default App;
