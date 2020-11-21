import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import {Main} from './components/Main'
import {Article} from './components/Article'
import {ArticleGrid} from './components/ArticleGrid'
import {Footer} from './components/Footer'


function App() {
  return (
    <div className="body">
      <Header />
      <Main />
      <Article />
      <ArticleGrid />
      <Footer />
    </div>
  );
}

export default App;
