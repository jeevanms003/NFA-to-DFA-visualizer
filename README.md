# NFA to DFA Visualizer

A **React-based web application** that converts a **Non-deterministic Finite Automaton (NFA)** to a **Deterministic Finite Automaton (DFA)** and visualizes the resulting DFA using **Cytoscape.js**.  

Users can input an NFA in JSON format, and the tool performs the conversion using the subset construction algorithm, displaying the DFA as an interactive graph.

---

## ✨ Features
- **NFA Input**: Enter NFA details (states, alphabet, transitions, start state, final states) in JSON format via a textarea.  
- **NFA to DFA Conversion**: Implements the subset construction algorithm to convert NFAs to DFAs.  
- **Visualization**: Displays the DFA as a directed graph with Cytoscape.js, highlighting start and final states with distinct styles.  
- **Error Handling**: Validates JSON input and NFA structure, showing error messages for invalid formats.  

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/jeevanms003/NFA-to-DFA-visualizer.git

# Navigate to the project directory
cd NFA-to-DFA-visualizer

# Install dependencies
npm install

# Start the development server
npm start


