import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from './Logo';
import ToggleSwitch from './ToggleSwitch';

const NavBar = ({ selectedOption, setSelectedOption }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [is3d, setIs3d] = useState(localStorage.getItem('dimension') !== '2d');

    useEffect(() => {
        if (!localStorage.getItem('dimension')) {
            localStorage.setItem('dimension', '3d');
        }
    }, []);

    const handleDimensionChange = (nextValue) => {
        const prefers3d = typeof nextValue === 'boolean' ? nextValue : !is3d;
        const nextDimension = prefers3d ? '3d' : '2d';
        localStorage.setItem('dimension', nextDimension);
        window.dispatchEvent(new Event('storage'));
        setIs3d(prefers3d);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsMenuOpen(false);
    };

    return (
        <nav className="top-nav">
            <div className="brand">
                <Logo />
                <div className="brand-text">
                    <span className="brand-title">Sorting Visualizer</span>
                    <span className="brand-subtitle">Algorithms playground</span>
                </div>
            </div>

            <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>

            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <div className="nav-primary">
                    <button className={selectedOption === 'RunAlgorithm' ? 'active' : ''} onClick={() => handleSelect('RunAlgorithm')}>Run</button>
                    <button className={selectedOption === 'CompareAlgorithm' ? 'active' : ''} onClick={() => handleSelect('CompareAlgorithm')}>Compare</button>
                </div>

                <div className="nav-group">
                    <p className="nav-label">Learn</p>
                    <div className="pill-group">
                        <button className={selectedOption === 'InsertionSort' ? 'active' : ''} onClick={() => handleSelect('InsertionSort')}>Insertion</button>
                        <button className={selectedOption === 'SelectionSort' ? 'active' : ''} onClick={() => handleSelect('SelectionSort')}>Selection</button>
                        <button className={selectedOption === 'BubbleSort' ? 'active' : ''} onClick={() => handleSelect('BubbleSort')}>Bubble</button>
                    </div>
                </div>

                <div className="nav-group">
                    <p className="nav-label">Display</p>
                    <div className="toggle-row">
                        <span>3D mode</span>
                        <ToggleSwitch isChecked={is3d} setIsChecked={handleDimensionChange} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;