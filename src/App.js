import './App.css';
import React, { Component } from 'react';
import Div from './div';

// const isPrime = (num) => {
//   for (var i = 2; i < num; i++) if (num % i === 0) return false;
//   return num > 1;
// };

// let numList = [];
// for (let i = 2; i < 100; i++) {
//   if (!isPrime(i)) {
//     numList.push(i);
//   }
// }

const numList = [
  4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 27, 28, 30, 32, 33, 35,
  36, 40, 42, 44, 45, 48, 49, 50, 54, 55, 56, 60, 63, 64, 66, 70, 72, 77, 80,
  81, 84, 88, 90, 96, 99, 100, 108, 110, 120, 121, 132, 144,
];

console.log(numList.length);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { op1List: [] };
  }

  componentDidMount() {
    const arr = this.shuffle(numList).slice(0, 30);
    this.setState({ op1List: arr });
  }

  shuffle = (arr) => {
    let idx = arr.length,
      temp,
      randIdx;
    while (idx !== 0) {
      randIdx = Math.floor(Math.random() * idx);
      idx -= 1;
      temp = arr[idx];
      arr[idx] = arr[randIdx];
      arr[randIdx] = temp;
    }
    return arr;
  };

  getOp2 = (op1) => {
    const factors = Array.from(Array(op1 + 1), (_, i) => i).filter(
      (i) => op1 % i === 0 && i !== 1 && i !== op1 && i < 13 && op1 / i < 13
    );
    return factors[Math.floor(Math.random() * factors.length)];
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.op1List.map((op1) => {
          const op2 = this.getOp2(op1);
          return <Div key={op1} op1={op1} op2={op2} />;
        })}
      </div>
    );
  }
}

export default App;
