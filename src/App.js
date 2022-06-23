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
              <td>€ 5,90</td>
              <td>€ 49,10</td>
            </tr>
            <tr>
              <td>
                <img src={leo} className="people-image" alt="leo" />
              </td>
              <td>€ 4,60</td>
              <td>€ 50,40</td>
            </tr>
            <tr>
              <td>
                <img src={claudio} className="people-image" alt="claudio" />
              </td>
              <td>€ 5,20</td>
              <td>€ 49,80</td>
            </tr>
            <tr>
              <td>
                <img src={jacopo} className="people-image" alt="jacopo" />
              </td>
              <td>€ 6,40</td>
              <td>€ 48,60</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className='table-dark'>
              <td>TOTALE</td>
              <td>€ 22,10 </td>
              <td>€ 197,90</td>
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;
