import { useState } from 'react';

const NFAInputForm = ({ onSubmit }) => {
  const [nfaText, setNfaText] = useState(`{
  "states": ["q0", "q1", "q2"],
  "alphabet": ["0", "1"],
  "startState": "q0",
  "finalStates": ["q2"],
  "transitions": {
    "q0": { "0": ["q0", "q1"], "1": ["q0"] },
    "q1": { "1": ["q2"] },
    "q2": {}
  }
}`);

  const handleSubmit = () => {
    try {
      const parsed = JSON.parse(nfaText);
      // Basic validation
      if (!parsed.states || !parsed.alphabet || !parsed.startState || !parsed.finalStates || !parsed.transitions) {
        throw new Error('Invalid NFA format: Missing required fields');
      }
      onSubmit(parsed);
    } catch (e) {
      alert('Invalid JSON or NFA format: ' + e.message);
    }
  };

  return (
    <div>
      <h2>NFA Input (JSON Format)</h2>
      <textarea
        rows={12}
        cols={50}
        value={nfaText}
        onChange={(e) => setNfaText(e.target.value)}
        placeholder='Enter NFA in JSON format'
      />
      <button onClick={handleSubmit}>Convert & Visualize</button>
    </div>
  );
};

export default NFAInputForm;