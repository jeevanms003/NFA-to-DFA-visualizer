import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';

const DFAVisualizer = ({ dfa }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create nodes for each DFA state
    const elements = dfa.states.map((state) => ({
      data: { id: state, label: state },
      classes: dfa.finalStates.includes(state) ? 'final' : '',
    }));

    // Create edges for each transition
    for (const [from, trans] of Object.entries(dfa.transitions)) {
      for (const [symbol, to] of Object.entries(trans)) {
        elements.push({
          data: {
            id: `${from}_${symbol}_${to}`,
            source: from,
            target: to,
            label: symbol,
          },
        });
      }
    }

    // Highlight start state
    elements.find((el) => el.data.id === dfa.startState).classes = 'start';

    // Initialize Cytoscape
    const cy = cytoscape({
      container: containerRef.current,
      elements,
      layout: {
        name: 'cose', // Compound Spring Embedder layout for better positioning
        padding: 30,
        animate: true,
      },
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#0074d9',
            'label': 'data(label)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': 12,
            'width': 50,
            'height': 50,
            'border-width': 1,
            'border-color': '#000',
          },
        },
        {
          selector: 'node.start',
          style: {
            'border-width': 3,
            'border-color': '#00ff00', // Green border for start state
          },
        },
        {
          selector: 'node.final',
          style: {
            'border-width': 3,
            'border-color': '#ff4136', // Red border for final states
          },
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'target-arrow-color': '#000',
            'line-color': '#000',
            'label': 'data(label)',
            'font-size': 10,
            'text-background-color': '#fff',
            'text-background-opacity': 1,
            'text-background-padding': '2px',
          },
        },
      ],
    });

    // Cleanup on component unmount
    return () => {
      cy.destroy();
    };
  }, [dfa]);

  return <div ref={containerRef} style={{ width: '100%', height: '600px', border: '1px solid #ccc' }} />;
};

export default DFAVisualizer;