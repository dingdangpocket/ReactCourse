import { Navigate } from "react-router-dom";
import Loadable from "react-loadable";
import Effect from "@/pages/rootLevelPages/effect/Effect";
import Memo from "@/pages/rootLevelPages/memo/Memo";
import TypeScript from "@/pages/rootLevelPages/typeScript/TypeScript";
const LoadingTip = () => <div>加载路由ing...</div>;
const Login = Loadable({
  loader: () => import("@/pages/rootLevelPages/login/Login"),
  loading: LoadingTip,
});
const Home = Loadable({
  loader: () => import("@/pages/rootLevelPages/home/Home"),
  loading: LoadingTip,
});
const UserPassword = Loadable({
  loader: () =>
    import("@/pages/rootLevelPages/home/userManage/userPassword/UserPassword"),
  loading: LoadingTip,
});

const UserInfo = Loadable({
  loader: () =>
    import("@/pages/rootLevelPages/home/userManage/userInfo/UserInfo"),
  loading: LoadingTip,
});

const UserDetail = Loadable({
  loader: () => import("@/pages/rootLevelPages/userDetail/UserDetail"),
  loading: LoadingTip,
});

const AvatorDetail = Loadable({
  loader: () => import("@/pages/rootLevelPages/avatorDetail/AvatorDetail"),
  loading: LoadingTip,
});

const ComputerInfo = Loadable({
  loader: () =>
    import(
      "@/pages/rootLevelPages/home/computerManage/computerInfo/ComputerInfo"
    ),
  loading: LoadingTip,
});

const ComputerDevice = Loadable({
  loader: () =>
    import(
      "@/pages/rootLevelPages/home/computerManage/computerDevice/ComputerDevice"
    ),
  loading: LoadingTip,
});

const UseEffect = Loadable({
  loader: () => import("@/pages/rootLevelPages/effect/Effect"),
  loading: LoadingTip,
});
const Tab = Loadable({
  loader: () => import("@/pages/rootLevelPages/tab/Tab"),
  loading: LoadingTip,
});

export type RoutesItems = {
  path: string;
  element: React.ReactElement;
  children?: RoutesItems[];
};
export const rootRouterConfig: RoutesItems[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <Navigate to={"/home/userManage/userPassword"} />,
      },
      {
        path: "userManage/userPassword",
        element: <UserPassword />,
        children: [
          { path: "change", element: <p>修改密码页面</p> },
          { path: "reset", element: <p>重置密码页面</p> },
          { path: "fingerprint", element: <p>指纹密码页面</p> },
        ],
      },
      {
        path: "userManage/userInfo",
        element: <UserInfo />,
      },
      {
        path: "computerManage/computerInfo",
        element: <ComputerInfo />,
      },
      {
        path: "computerManage/computerDevice",
        element: <ComputerDevice />,
      },
      { path: "*", element: <p>ERROR-PAGE</p> },
    ],
  },
  {
    path: "detail/:id",
    element: <UserDetail />,
  },
  {
    path: "avator/:id",
    element: <AvatorDetail />,
  },
  {
    path: "effect",
    element: <Effect />,
  },
  {
    path: "memo",
    element: <Memo />,
  },
  {
    path: "tab",
    element: <Tab />,
  },
  {
    path: "typeScript",
    element: <TypeScript />,
  },
  { path: "*", element: <p>ERROR-PAGE;</p> },
  { path: "error", element: <p>ERROR-PAGE-对不起-您没有该路由权限;</p> },
];
// eslint-disable-next-line react-hooks/rules-of-hooks
