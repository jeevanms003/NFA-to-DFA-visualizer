export function convertNFAtoDFA(nfa) {
  const { states, alphabet, transitions, startState, finalStates } = nfa;

  // Validate input
  if (!states || !alphabet || !startState || !finalStates || !transitions) {
    throw new Error('Invalid NFA: Missing required fields');
  }

  const dfaStates = new Set();
  const dfaTransitions = {};
  const dfaFinalStates = new Set();
  const queue = [[startState]]; // Start with a set containing the NFA start state
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    const currentKey = current.sort().join(','); // Create a unique key for the state set

    if (visited.has(currentKey)) continue;
    visited.add(currentKey);
    dfaStates.add(currentKey);
    dfaTransitions[currentKey] = {};

    // Process each symbol in the alphabet
    for (const symbol of alphabet) {
      const nextSet = [];

      // Compute the set of states reachable from current states via symbol
      for (const state of current) {
        const nextStates = transitions[state]?.[symbol] || [];
        nextStates.forEach((ns) => {
          if (!nextSet.includes(ns)) nextSet.push(ns);
        });
      }

      const nextKey = nextSet.sort().join(',');
      if (nextKey) {
        dfaTransitions[currentKey][symbol] = nextKey;
        if (!visited.has(nextKey)) {
          queue.push(nextSet);
        }
      } else {
        // If no transitions, point to a dead state
        dfaTransitions[currentKey][symbol] = 'dead';
        if (!dfaStates.has('dead')) {
          dfaStates.add('dead');
          dfaTransitions['dead'] = {};
          alphabet.forEach((sym) => {
            dfaTransitions['dead'][sym] = 'dead';
          });
        }
      }
    }

    // Check if the current set contains any NFA final states
    if (current.some((s) => finalStates.includes(s))) {
      dfaFinalStates.add(currentKey);
    }
  }

  return {
    states: Array.from(dfaStates),
    alphabet,
    startState: startState,
    finalStates: Array.from(dfaFinalStates),
    transitions: dfaTransitions,
  };
}