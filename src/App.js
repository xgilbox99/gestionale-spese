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
              <td>€ 8,30</td>
              <td>€ 46,70</td>
            </tr>
            <tr>
              <td>
                <img src={leo} className="people-image" alt="leo" />
              </td>
              <td>€ 9,10</td>
              <td>€ 45,90</td>
            </tr>
            <tr>
              <td>
                <img src={claudio} className="people-image" alt="claudio" />
              </td>
              <td>€ 8,00</td>
              <td>€ 47,00</td>
            </tr>
            <tr>
              <td>
                <img src={jacopo} className="people-image" alt="jacopo" />
              </td>
              <td>€ 7,50</td>
              <td>€ 47,50</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className='table-dark'>
              <td>TOTALE</td>
              <td>€ 32,90 </td>
              <td>€ 187,10</td>
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;
