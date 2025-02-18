import React from 'react';
import CallLawyer from './CallLawyer.jsx';

class StepsPartOne extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {


    return (
      <div>
        <h1>!!!RECORDING!!!</h1>
        <h2>CLAM DOWN and DO THE FOLLOWING</h2>
        <div>
          <h3>1: Stay in your car </h3>
          <h3>2: Keep your hands on the steering wheel </h3>
          <h3>3: Turn on the interior light if it is dark </h3>
          <h3>4: Place the phone in a good spot to film</h3>
          <h3>5: Politely ask the police the reason of this pullover</h3>
          <h3>6: Provide the police the documentations required by law</h3>
          <h3>7: Politely refuse telling the police anything not related</h3>
          {this.props.clickCallLawyer
            ? < CallLawyer />
            : <button onClick={this.props.handleCallLawyer}>CALL MY LAWYER</button>
          }
          <br></br>
        </div>
      </div>
    );
  }

}

// const StepsPartOne = (props) => {
//   return (
//     <div>
//       <h1>📸 !!!RECORDING!!! 📸</h1>
//       <div>
//         <h3>Step 1:xxxxxxxxxx </h3>
//         <h3>Step 2:xxxxxxxxxx </h3>
//         <h3>Step 3:xxxxxxxxxx </h3>
//         <h3>Step 4:xxxxxxxxxx </h3>
//         <h3>Step 5:xxxxxxxxxx </h3>
//         {props.clickCallLawyer
//           ? < CallLawyer />
//           : <button onClick={props.handleCallLawyer}>CALL MY LAWYER</button>
//         }
//       </div>
//     </div>
//   );
// };

export default StepsPartOne;