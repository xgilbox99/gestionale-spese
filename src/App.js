import logo from './bg.png';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <header className="App-header p-4">
        <img src={logo} className="App-logo my-5" alt="logo" />
        <p className='mt-2'>
          GESTIONALE SPESE "BG - GROUP"
        </p>
        <table className='table table-info'>
          <thead className='table-dark'>
            <tr>
              <th>Personaggio</th>
              <th>Spesa</th>
              <th>Rimanenza</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ALESSANDRO PERUZZO</td>
              <td>€ 1,30</td>
              <td>€ 53,70</td>
            </tr>
            <tr>
              <td>LEONARDO COSARO</td>
              <td>€ 1,30</td>
              <td>€ 53,70</td>
            </tr>
            <tr>
              <td>CLAUDIO DI PALMA</td>
              <td>€ 1,30</td>
              <td>€ 53,70</td>
            </tr>
            <tr>
              <td>JACOPO CAPARONE</td>
              <td>€ 1,40</td>
              <td>€ 53,60</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className='table-dark'>
              <td>TOTALE SPESA</td>
              <td>€ 5,30</td>
              <td>€ 214,70</td>
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;
