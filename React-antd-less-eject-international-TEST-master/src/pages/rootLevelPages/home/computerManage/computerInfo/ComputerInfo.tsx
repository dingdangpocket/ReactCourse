import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRouterAuth from "@/commonHooks/useRouterAuth";
import Light from "../../userManage/userPassword/components/Light";

const ST = {
  background: "black",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 190,
  height: 50,
  borderRadius: 10,
  fontSize: 20,
  marginTop: 5,
  marginBottom: 5,
} as object;

export default function ComputerInfo() {
  const [parentStateA, setParentStateA] = useState(0);
  const [parentStateB, setParentStateB] = useState(true);
  let navigate = useNavigate();
  let location = useLocation();
  const { AuthResult } = useRouterAuth(location.pathname);
  if (!AuthResult) {
    navigate("/error");
  }
  const memoizedFn = useCallback(() => {
    return parentStateA;
  }, [parentStateA]);

  const standardFn = () => {
    return parentStateA;
  };

  return (
    <div>
      <div
        style={{
          ...ST,
        }}
      >
        {JSON.stringify(parentStateA)}
      </div>
      <div
        onClick={() => setParentStateA(parentStateA + 1)}
        style={{
          ...ST,
        }}
      >
        setParentStateA
      </div>
      <div
        style={{
          ...ST,
        }}
      >
        {JSON.stringify(parentStateB)}
      </div>
      <div
        onClick={() => setParentStateB(!parentStateB)}
        style={{
          ...ST,
        }}
      >
        setParentStateB
      </div>
      <Light memoizedFn={memoizedFn} standardFn={standardFn} />
    </div>
  );
}
