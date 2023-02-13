import React from "react";
import { useParams } from "react-router-dom";
import Light from "../home/userManage/userPassword/components/Light";

export default function AvatorDetail() {
  const { id } = useParams();
  console.log("路由传递参数", id);
  return (
    <div style={{ padding: 10 }}>
      <Light />
      AvatorDetail{id}
    </div>
  );
}
