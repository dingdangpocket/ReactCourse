import { Link, useNavigate } from "react-router-dom";
import "moment/locale/zh-cn";
import { useEffect } from "react";
import Light from "../userPassword/components/Light";
import ReducerHook from "@/pages/rootLevelPages/reducerHook/ReducerHook";
export default function UserInfo() {
  let navigate = useNavigate();
  useEffect(() => {
    // return () => {
    //   alert("组件卸载时执行");
    // };
  }, []);
  return (
    <div>
      <Light />
      <p></p>
      <ReducerHook />
      <p style={{ margin: "10px", color: "black", fontSize: 15 }}>
        用户资料-PAGE
      </p>
      <p
        style={{ margin: "10px", color: "black", fontSize: 20 }}
        onClick={() => navigate("/detail/6")}
      >
        资料详情navigate
      </p>
      <p>
        <Link
          style={{ margin: "10px", color: "black", fontSize: 20 }}
          to={`/detail/6`}
        >
          资料详情
        </Link>
      </p>
      <p>
        <Link
          style={{ margin: "10px", color: "black", fontSize: 20 }}
          to={`/avator/6`}
        >
          头像详情
        </Link>
      </p>
    </div>
  );
}
