import { useState } from "react";
import Light from "../../userManage/userPassword/components/Light";
export type info = {
  name: string;
  city: string;
};
export default function ComputerDevice() {
  const [count, setCount] = useState<number>(0);
  const [object, setObject] = useState<info>({
    name: "dingdang",
    city: "chengDu",
  });
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const changeInfo = () => {
    setObject({ ...object, city: "shanghai" });
  };
  return (
    <div>
      <Light />
      <p style={{ fontSize: 50 }}>{"Name:" + object.name}</p>
      <p style={{ fontSize: 50 }}>{"City:" + object.city}</p>
      <button
        style={{
          background: "black",
          color: "white",
          width: 300,
          height: 100,
          fontSize: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => changeInfo()}
      >
        change
      </button>
      <div
        style={{
          background: count > 10 ? "black" : "red",
          color: "white",
          width: 300,
          height: 200,
          fontSize: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>Result:{count}</div>
      </div>
      <button
        style={{
          background: "black",
          color: "white",
          width: 300,
          height: 100,
          fontSize: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => increment()}
      >
        +
      </button>
      <button
        style={{
          background: "black",
          color: "white",
          width: 300,
          height: 100,
          fontSize: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => decrement()}
      >
        -
      </button>
    </div>
  );
}
// import { Component } from "react";
// export default class ComputerDevice extends Component {
//   state = { count: 0 };
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <div
//           style={{
//             background: "black",
//             color: "white",
//             width: 300,
//             height: 200,
//             fontSize: 50,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <div>Result:{this.state.count}</div>
//         </div>
//         <button
//           style={{
//             background: "black",
//             color: "white",
//             width: 300,
//             height: 100,
//             fontSize: 50,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={() => this.increment()}
//         >
//           +
//         </button>
//         <button
//           style={{
//             background: "black",
//             color: "white",
//             width: 300,
//             height: 100,
//             fontSize: 50,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={() => this.decrement()}
//         >
//           -
//         </button>
//       </div>
//     );
//   }
// }
