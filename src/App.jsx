import React, { useState, useEffect } from 'react';
import './App.css';
import './assets/components/InputRange.css';
import NavBar from './assets/components/NavBar';
import Algorithm from './assets/components/Algorithm';
import InsertionSort from './assets/components/InsertionSort';
import SelectionSort from './assets/components/SelectionSort';
import BubbleSort from './assets/components/BubbleSort';
import CompareAlgorithms from './assets/components/CompareAlgorithms';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Footer from './assets/components/Footer';

function App() {
  const [selectedOption, setSelectedOption] = useState('RunAlgorithm');
  const [theme, setTheme] = useState('light');
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;
  const isLearnView = ['InsertionSort', 'SelectionSort', 'BubbleSort'].includes(selectedOption);

  const [algorithmState, setAlgorithmState] = useState({
    algorithm: '',
    inputArray: '',
    sortedArray: [],
    sortingSteps: [],
    showAnimation: false,
    displayAnimation: false,
    fullAlgorithm: '',
    inputtedArray: [],
    displaySteps: true,
    keyVal: 0
  });

  const updateAlgorithmState = (newState) => {
    setAlgorithmState((prevState) => ({
      ...prevState,
      ...newState
    }));
  };

  const [compareAlgorithmState, setCompareAlgorithmState] = useState({
    algorithm1: '',
    algorithm2: '',
    inputArray: '',
    sortedArray: [],
    fullAlgorithm1: '',
    fullAlgorithm2: '',
    inputtedArray: [],
    keyVal: 0
  });

  const updateCompareAlgorithmState = (newState) => {
    setCompareAlgorithmState((prevState) => ({
      ...prevState,
      ...newState
    }));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(matchMedia.matches ? 'dark' : 'light');
    const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
    matchMedia.addEventListener('change', handler);

    return () => {
      matchMedia.removeEventListener('change', handler);
    };
  }, []);

  return (
    <div className="app-shell">
      <NavBar selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

      <main className="app-main">
        {!isLearnView && (
          <header className="page-header">
            <p className="eyebrow">Sorting Visualizer</p>
            <h1>Explore sorting algorithms with an interactive workspace.</h1>
            <p className="lede">Run a single algorithm, compare two side-by-side, and inspect the steps in a clean, responsive layout.</p>
          </header>
        )}

        <section className="content-area">
          {selectedOption === 'RunAlgorithm' &&
            <Algorithm algorithmState={algorithmState} updateAlgorithmState={updateAlgorithmState} />
          }
          {selectedOption === 'CompareAlgorithm' && <CompareAlgorithms algorithmState={compareAlgorithmState} updateAlgorithmState={updateCompareAlgorithmState} />}
          {selectedOption === 'InsertionSort' && <InsertionSort codeStyle={codeStyle} />}
          {selectedOption === 'SelectionSort' && <SelectionSort codeStyle={codeStyle} />}
          {selectedOption === 'BubbleSort' && <BubbleSort codeStyle={codeStyle} />}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;