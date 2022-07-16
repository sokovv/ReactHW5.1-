import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Cards image="https://avatars.mds.yandex.net/i?id=626a1365f07b2b35e6c4f9a737a822a2-6251463-images-thumbs&n=13">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#1" className="btn btn-primary">Go somewhere</a>
      </Cards>
      <Cards>
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#1" className="card-link">Card link</a>
        <a href="#2" className="card-link">Another link</a>
      </Cards>
    </div>
  );
}

export default App;