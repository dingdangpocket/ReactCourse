import { forwardRef, Ref, useImperativeHandle } from "react";
import { ContentContext } from "@/context/ContextProvider";
import { LightRef } from "@/model/interface/ref";
import { useContext, useEffect, useState } from "react";
const ST = {
  height: 50,
  width: 50,
  borderRadius: 25,
  color: "white",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 20,
} as object;
const Light = forwardRef(
  (
    props: {
      content?: string;
      memoizedFn?: () => number;
      standardFn?: () => number;
    },
    ref: Ref<LightRef>
  ) => {
    const { state } = useContext(ContentContext);
    const [localState, setLocalState] = useState(false);
    useImperativeHandle(ref, () => ({
      onChange() {
        setLocalState(!localState);
      },
      state: localState,
    }));
    useEffect(() => {
      state.lightState ? setLocalState(true) : setLocalState(false);
    }, [state.lightState]);

    useEffect(() => {
      //shouldComponentUpdate()
      //componentDidUpdate()
      console.log("Light=>Render");
    });

    useEffect(() => {
      console.log("Light=>memoizedFn");
    }, [props.memoizedFn]);

    useEffect(() => {
      console.log("Light=>standardFn");
    }, [props.standardFn]);

    return (
      <div
        style={{
          background: "rgb(170, 170, 170)",
          padding: 10,
        }}
      >
        <div
          style={{
            ...ST,
            background: "blue",
            fontSize: 15,
            height: 120,
            width: 120,
          }}
        >
          memoizedFn:{props.memoizedFn ? props.memoizedFn() : ""}
        </div>
        <div
          style={{
            ...ST,
            background: "blue",
            fontSize: 15,
            height: 120,
            width: 120,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          standardFn:{props.standardFn ? props.standardFn() : ""}
        </div>
        <button
          style={{
            marginTop: 10,
            marginBottom: 10,
            width: 100,
            background: "blue",
            color: "white",
            border: 0,
          }}
          onClick={() => setLocalState(!localState)}
        >
          本地状态
        </button>
        <div
          style={
            localState
              ? {
                  background: "blue",
                  ...ST,
                }
              : {
                  background: "gray",
                  ...ST,
                }
          }
        >
          <div>{localState ? "T" : "F"}</div>
        </div>
      </div>
    );
  }
);
export default Light;
