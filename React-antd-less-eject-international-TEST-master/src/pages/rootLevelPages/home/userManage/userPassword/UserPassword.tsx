import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Dynamic from "@/pages/rootLevelPages/dynamic/Dynamic";
import { ContentContext } from "@/context/ContextProvider";
import Light from "./components/Light";
import { LightRef } from "@/model/interface/ref";
export default function UserPassword() {
  const { state, dispatch } = useContext(ContentContext);
  const addRouter = () => {
    dispatch({
      type: "userRouterConfig",
      payload: [
        ...state.routerConfig,
        {
          path: "dynamic",
          element: <Dynamic />,
        },
      ],
    });
    console.log(state.routerConfig);
  };
  const lightRef = useRef<LightRef>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onRef = () => {
    if (lightRef.current) lightRef.current.onChange();
    console.log("divRef", divRef);
    console.log("inputRef", inputRef);
    console.log("lightRef", lightRef);
  };
  return (
    <div ref={divRef}>
      <input ref={inputRef} type="text" />
      <p style={{ margin: "10px", color: "black", fontSize: 15 }}>
        用户密码-PAGE
      </p>
      <button
        onClick={() => onRef()}
        style={{
          width: 100,
          background: "red",
          color: "white",
          border: 0,
          marginBottom: 8,
        }}
      >
        Ref
      </button>
      <Light ref={lightRef} />
      <p>
        <button
          style={{ margin: "10px", color: "black", fontSize: 20 }}
          onClick={() => addRouter()}
        >
          追加动态路由
        </button>
      </p>
      <p>
        <Link
          style={{ margin: "10px", color: "black", fontSize: 20 }}
          to={"/dynamic"}
        >
          进入追加路由
        </Link>
      </p>
      <p>
        <Link
          style={{ margin: "10px", color: "black", fontSize: 20 }}
          to={"/home/computerManage/computerInfo"}
        >
          进入电脑资料
        </Link>
      </p>
      <p>
        <Link
          style={{ margin: "10px", color: "black", fontSize: 20 }}
          to={"/home/computerManage/computerDevice"}
        >
          进入电脑设备
        </Link>
      </p>
    </div>
  );
}
