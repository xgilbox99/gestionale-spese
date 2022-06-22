import logo from './bg.png';
import ale from './ale.png';
import leo from './leo.png';
import jacopo from './jacopo.png';
import claudio from './claudio.png';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <header className="App-header p-4">
        
        <img src={logo} className="App-logo my-2" alt="logo" />
        
        <h3>
          "BG - GROUP"
        </h3>
        <h4 className='mb-4'>
          GESTIONALE SPESE
        </h4>
        
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
              <td>
                <img src={ale} className="people-image" alt="ale" />
              </td>
              <td>€ 3,70</td>
              <td>€ 51,30</td>
            </tr>
            <tr>
              <td>
                <img src={leo} className="people-image" alt="leo" />
              </td>
              <td>€ 3,50</td>
              <td>€ 51,50</td>
            </tr>
            <tr>
              <td>
                <img src={claudio} className="people-image" alt="claudio" />
              </td>
              <td>€ 2,50</td>
              <td>€ 52,50</td>
            </tr>
            <tr>
              <td>
                <img src={jacopo} className="people-image" alt="jacopo" />
              </td>
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
