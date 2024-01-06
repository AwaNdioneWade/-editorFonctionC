import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [texte, setTexte] = useState('');

  const blob = new Blob([texte], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  return (
    <div className="container-fluid p-5 bg-dark" style={{height: '100%'}} >
      <div className='row'>
        <div className='col-12 col-md-8'>
          <Textarea texte={texte} setTexte={setTexte} style={{backgroundColor: '#95a3b3', color: '#fff', border: 'none', width: '100%', height: '500px' }}  />
        </div>
        <div className='col-12 col-md-3'>
          <Texte texte={texte} style={{backgroundColor: '#fff', width: '100%', height: '250px' }} />
        </div>
      </div>

      <div className='row mt-5' style={{display:'flex', justifyContent: 'center'}}>
        <a href = {url} download = 'texte_telecharge.txt'>
        <button style={{ width:'140px', height: '60px', backgroundColor: '#084C61', color:'#fff', border:'none'}}>Download text</button>
        </a>
      </div>
    
    </div>
  );
}


 function Textarea({texte, setTexte, style}) {
  return (
    <div>
        <textarea value={texte} onChange={(e) => setTexte(e.target.value)} style={style} />
    </div>
  )
}
 
function Texte({texte, style}) {
  return (
    <div>
      <p style={style}>{texte}</p>
    </div>
  )
}



export default App;
