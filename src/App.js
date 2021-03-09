import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import {Main} from './components/Main'
import {Article} from './components/Article'
import {ArticleGrid} from './components/ArticleGrid'
import {Footer} from './components/Footer'


function App() {
  return (
    <div className="body">
      <Router >
        <Navbar />
        <Main />
        <Article />
        <ArticleGrid />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
