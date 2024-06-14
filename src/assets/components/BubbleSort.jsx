import React from 'react';
import Sort from './Sort';
import './SortContainer.css';

const BubbleSort = () => {
    return (
        <div className='sort-container'>
            <h2>Bubble Sort</h2>
            <Sort algorithm={'Bubble Sort'} />
            <div className='sort-definition'>
                <p>Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It is named for the way smaller or larger elements "bubble" to the top of the list. While not efficient on large datasets due to its O(n^2) time complexity, bubble sort is easy to understand and implement.</p>

                <p><strong>Key Characteristics:</strong></p>
                <ul>
                    <li><strong>Stability:</strong> Bubble sort is stable, meaning it preserves the relative order of equal elements in the sorted output.</li>
                    <li><strong>In-place:</strong> It operates directly on the input array, requiring only a constant amount of additional space for temporary variables.</li>
                </ul>

                <p><strong>Analogy to Sorting:</strong><br />
                    Imagine sorting a row of people standing in height order. In bubble sort, you start at one end of the row, compare each pair of adjacent people, and swap them if they are out of order. This process is repeated until the entire row is sorted, resembling bubbles rising to the surface.</p>

                <p><strong>Bubble Sort Algorithm:</strong></p>
                <p>To implement bubble sort:</p>
                <ol>
                    <li>Start at the beginning of the array.</li>
                    <li>Compare each pair of adjacent elements.</li>
                    <li>If they are in the wrong order (larger followed by smaller), swap them.</li>
                    <li>Repeat this process for each pair of adjacent elements throughout the array.</li>
                    <li>Continue iterating through the array until no more swaps are needed, indicating the array is sorted.</li>
                </ol>

                <p><strong>Example:</strong><br />
                    Consider sorting an array [5, 2, 1, 9, 6] using bubble sort:
                    <ul>
                        <li>First pass: [2, 1, 5, 6, 9] (swaps 5 and 2, 9 and 6).</li>
                        <li>Second pass: [1, 2, 5, 6, 9] (no swaps needed).</li>
                    </ul>
                    Array is now sorted.</p>

                <p>Bubble sort is suitable for educational purposes or sorting small datasets where simplicity is more important than speed. Its inefficiency on larger datasets makes it less practical for real-world applications compared to more advanced algorithms like quicksort or mergesort.</p>
            </div>
        </div>
    );
};

export default BubbleSort;