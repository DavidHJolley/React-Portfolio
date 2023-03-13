import './App.css';
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
    </div>
  );
}

export default App;
