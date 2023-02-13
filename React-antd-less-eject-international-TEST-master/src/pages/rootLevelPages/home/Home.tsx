import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
import styles from "./Home.module.less";
import React, { useContext, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useRouterAuth from "@/commonHooks/useRouterAuth";
import { ContentContext } from "@/context/ContextProvider";
import { LightRef } from "@/model/interface/ref";
import Light from "./userManage/userPassword/components/Light";
export default function Home(props: any) {
  let navigate = useNavigate();
  let location = useLocation();
  const { AuthResult } = useRouterAuth(location.pathname);
  if (!AuthResult) {
    navigate("/error");
  }
  useEffect(() => {
    navigate("/home/userManage/userPassword");
    console.log();
  }, []);
  const { Header, Content, Sider } = Layout;
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  const items2 = [
    {
      title: "用户管理",
      icon: UserOutlined,
      key: "1",
      children: [
        {
          title: "用户密码",
          key: "1-1",
        },
        { title: "用户资料", key: "1-2" },
      ],
    },
    {
      title: "电脑管理",
      key: "2",
      icon: LaptopOutlined,
      children: [
        { title: "电脑资料", key: "2-1" },
        { title: "电脑设备", key: "2-2" },
      ],
    },
  ].map((item) => {
    return {
      key: item.key,
      icon: React.createElement(item.icon),
      label: item.title,
      children: item.children?.map((child) => {
        return {
          key: child.key,
          label: child.title,
        };
      }),
    };
  });
  const checkHandle = ({ item, key, keyPath, domEvent }: any) => {
    if (key === "1-1") {
      navigate("/home/userManage/userPassword");
    }
    if (key === "1-2") {
      navigate("/home/userManage/userInfo");
    }
    if (key === "2-1") {
      navigate(`/home/computerManage/computerInfo`);
    }
    if (key === "2-2") {
      navigate(`/home/computerManage/computerDevice`);
    }
  };
  const { state, dispatch } = useContext(ContentContext);
  const lightRef = useRef<LightRef>(null);
  const onRef = () => {
    if (lightRef.current) lightRef.current.onChange();
  };
  return (
    <>
      <Layout className={styles.main}>
        <Header className="header">
          <button
            onClick={() =>
              dispatch({
                type: "updateLightState",
                payload: !state.lightState,
              })
            }
            style={
              state.lightState
                ? { width: 100, background: "blue", color: "white", border: 0 }
                : { width: 100, background: "gray", color: "white", border: 0 }
            }
          >
            切换 {state.lightState ? "T" : "F"}
          </button>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1-1"]}
              defaultOpenKeys={["1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              onClick={({ key, keyPath, domEvent }) =>
                checkHandle({ key, keyPath, domEvent })
              }
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
