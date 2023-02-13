import React from "react";
import { useParams } from "react-router-dom";
import Light from "../home/userManage/userPassword/components/Light";

export default function UserDetail() {
  let { id } = useParams();
  console.log("路由传递参数", id);
  return (
    <div style={{ padding: 10 }}>
      <Light />
      UserDetail+参数:{id}
    </div>
  );
}
