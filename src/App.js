import logo from './bg.png';
import ale from './ale.png';
import leo from './leo.png';
import jacopo from './jacopo.png';
import claudio from './claudio.png';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import number_format from './functions/number_format';
import React,{useState,useEffect} from 'react';
import { supabase } from './supabaseClient'

// Suppabase pw => nL8xh8cbnBtOBByu

function App() {
    
    const starting_total = 220

    const [totals,setTotals]=useState([]);
    const [datas,setDatas]=useState([]);

    const [personInputs,setPersonInputs]=useState([]);
    
    const [changeJson,setChangeJson]=useState(false);

    const getData = async () => {
        const { data: people } = await supabase.from('expenses').select().order('name')
        
        let totals = {
            remaining: starting_total,
            expense: 0
        }

        people.forEach( person => {
            totals.expense += person.expense 
            totals.remaining -= person.expense 
        });

        setDatas(people)
        setTotals(totals)
        console.log(datas);
    }

    const handleAddExpense = async ( e ) => {
        setChangeJson(false);
        const person = e.target.dataset.person
        
        if( personInputs[person] !== undefined && personInputs[person] !== 0 ){
            
            let db_person_datas = []
            datas.forEach( (db_person) => {
                if( db_person.name == person ){
                    db_person_datas = db_person
                }
            })

            const {name, total, expense, last_expense} = db_person_datas
            
            const new_total    = ( (total - personInputs[person]) < 0 ) ? 0 : (total - personInputs[person])
            const new_expense  = ( (total - personInputs[person]) < 0 ) ? (expense + total) : (expense + personInputs[person])
            const new_last_expense = ( (total - personInputs[person]) < 0 ) ? total : personInputs[person]

            const updates = {
                name: name,
                total: new_total,
                expense: new_expense,
                last_expense: new_last_expense,
            }
            
            let { data: update_response, error } = await supabase.from('expenses').upsert(updates)
            setChangeJson(true);
        }
    }
    
    const handleChange = ( e ) => {
        const person = e.target.dataset.person
        const value  = e.target.value

        personInputs[person] = parseFloat(value)
        setPersonInputs(personInputs)
    }
    
    /* Default values */
    useEffect( ()=> {
        let personInputsDefault = []
        datas.forEach( ( person ) => {
            const { name } = person
            personInputsDefault[name] = 0
        })

        setPersonInputs(personInputsDefault)
    },[])
    
    useEffect( ()=> {
        getData()
    },[changeJson])

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
                            <th>Azione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map( person => {
                                    const {name, total, expense} = person

                                    let logo = ''
                                    switch ( name ) {
                                        case 'jacopo':
                                            logo = jacopo
                                            break;
                                        case 'leo':
                                            logo = leo
                                            break;
                                        case 'claudio':
                                            logo = claudio
                                            break;
                                        case 'ale':
                                            logo = ale
                                            break;
                                        default: break
                                    }

                                    return (
                                        <tr key={name} className="align-middle">
                                            <td>
                                                <img src={logo} className="people-image" alt="ale" />
                                            </td>
                                            <td>€ {number_format((expense),2,',','.')}</td>
                                            <td>€ {number_format((total),2,',','.')}</td>
                                            <td>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <div>
                                                        <input type="number" min={0} step={0.1} className='form-control' style={{borderRadius:0}} data-person={name} onChange={handleChange} defaultValue={0} />
                                                    </div>
                                                    <div className='btn btn-danger' style={{borderRadius:0}} onClick={handleAddExpense} data-person={name}>
                                                        -
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr className='table-dark'>
                            <td>TOTALE</td>
                            <td>€ {number_format(totals.expense,2,',','.')} </td>
                            <td>€ {number_format(totals.remaining,2,',','.')}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </header>
        </div>
    );
}

export default App;
