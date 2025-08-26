NFA to DFA VisualizerThis project is a web-based tool built with React and Cytoscape.js to convert a Non-deterministic Finite Automaton (NFA) to a Deterministic Finite Automaton (DFA) and visualize the resulting DFA graph. Users can input an NFA in JSON format, and the application converts it to a DFA using the subset construction algorithm, then displays the DFA as an interactive graph.FeaturesNFA Input: Input an NFA via a JSON-formatted textarea, specifying states, alphabet, transitions, start state, and final states.
Conversion: Utilizes the convertNFAtoDFA function to transform the NFA into a DFA.
Visualization: Renders the DFA as a directed graph using Cytoscape.js, with distinct styling for start and final states.
Error Handling: Validates JSON input and NFA format, displaying errors for invalid inputs.

InstallationClone the repository: git clone <repository-url>
Install dependencies: npm install
Start the development server: npm start

UsageEnter a valid NFA in JSON format in the provided textarea and click "Convert & Visualize" to see the DFA graph.TechnologiesReact
Cytoscape.js
JavaScript

