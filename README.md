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
```

## 🚀 Usage
1. Input a valid **NFA** in JSON format in the textarea.  
2. Click **"Convert & Visualize"** to generate and display the DFA graph.  
3. Interact with the graph to explore states and transitions.  

---

## 🛠️ Technologies
- **React** – Frontend framework for building the UI.  
- **Cytoscape.js** – Graph visualization library for rendering the DFA.  
- **JavaScript** – Core logic for NFA-to-DFA conversion.  

---

## 📖 Example NFA Input

```json
{
  "states": ["q0", "q1", "q2"],
  "alphabet": ["0", "1"],
  "startState": "q0",
  "finalStates": ["q2"],
  "transitions": {
    "q0": { "0": ["q0", "q1"], "1": ["q0"] },
    "q1": { "1": ["q2"] },
    "q2": {}
  }
}
