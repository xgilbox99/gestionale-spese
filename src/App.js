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
              <td>€ 3,70</td>
              <td>€ 51,30</td>
            </tr>
            <tr>
              <td>LEONARDO COSARO</td>
              <td>€ 3,50</td>
              <td>€ 51,50</td>
            </tr>
            <tr>
              <td>CLAUDIO DI PALMA</td>
              <td>€ 2,50</td>
              <td>€ 52,50</td>
            </tr>
            <tr>
              <td>JACOPO CAPARONE</td>
              <td>€ 4,20</td>
              <td>€ 50,80</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className='table-dark'>
              <td>TOTALE SPESA</td>
              <td>€ 13,90  </td>
              <td>€ 206,10</td>
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;
