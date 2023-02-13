import { useReducer } from "react";
const ST = {
  background: "black",
  color: "white",
  width: 80,
  height: 80,
  fontSize: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as object;
export default function ReducerHook() {
  const reducer = (state: number, action: { type: string; new?: number }) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <div>
        <span
          style={{
            ...ST,
          }}
        >
          {count}
        </span>

        <button
          style={{
            ...ST,
          }}
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
        >
          +
        </button>
        <button
          style={{
            ...ST,
          }}
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          -
        </button>
      </div>
    </div>
  );
}
