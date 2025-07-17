import { useState } from 'react';
import NFAInputForm from './components/NFAInputForm';
import DFAVisualizer from './components/DFAVisualizer';
import { convertNFAtoDFA } from './utils/convertNFAtoDFA';
import './index.css';

function App() {
  const [dfa, setDfa] = useState(null);

  const handleNfaSubmit = (nfa) => {
    try {
      const dfa = convertNFAtoDFA(nfa);
      setDfa(dfa);
    } catch (e) {
      alert('Error converting NFA to DFA: ' + e.message);
    }
  };

  return (
    <div className="app-container">
      <h1>NFA to DFA Converter & Visualizer</h1>
      <NFAInputForm onSubmit={handleNfaSubmit} />
      {dfa && (
        <div className="visualizer-container">
          <h2>DFA Visualization</h2>
          <DFAVisualizer dfa={dfa} />
        </div>
      )}
    </div>
  );
}

export default App;
