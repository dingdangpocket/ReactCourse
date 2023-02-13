import { ReactElement, useEffect, useMemo, useState } from "react";
import styles from "@/pages/rootLevelPages/tab/Tab.module.less";
import { Cell } from "./components/Cell";
import web from "@/icon/web.png";
import asset from "@/icon/asset.png";
import language from "@/icon/language.png";
import note from "@/icon/note.png";
import notice from "@/icon/notice.png";
import service from "@/icon/service.png";
import message from "@/icon/message.png";
import ssl from "@/icon/ssl.png";
import address from "@/icon/address.png";
export type OptionsType = {
  title: string;
  active: boolean;
  page?: ReactElement;
  firstName?: string;
  lastName?: string;
};
export type StackType = {
  title: string;
  page?: ReactElement;
};
export type IconProps = {
  title: string;
  active: boolean;
};
export type CellType = {
  name: string;
  tag: string | null;
  icon: string;
  onPress: (name: string) => void;
};
const BARST = {
  height: "10vh",
  width: "24vw",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  color: "white",
} as object;
const pageStyle = {
  width: "100vw",
  height: "89vh",
  background: "rgb(38, 38, 38)",
  fontSize: 65,
  color: "rgb(210, 210, 210)",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
} as object;
const barStyle = {
  width: "100vw",
  background: "rgb(190, 190, 190)",
  padding: 2,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
} as object;
const containerStyle = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  background: "rgb(230, 230, 230)",
} as object;

//STACK PAGE
const Shop = (props: {
  setCurrentStack: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<any>>;
  currentStack: string;
  history: string[];
}) => {
  const onNavigate = (stackTitle: string) => {
    props.setCurrentStack(stackTitle);
    props.setHistory([...props.history, "Shop"]);
  };
  return (
    <div style={{ fontSize: 38 }}>
      <div>Hot_Shop_Stack</div>
      <p>
        <button style={{ fontSize: 28 }} onClick={() => onNavigate("Music")}>
          {" 导航至Music页面 ➡️"}
        </button>
      </p>
      <p>
        <button style={{ fontSize: 28 }} onClick={() => onNavigate("More")}>
          {" 导航至More页面 ➡️"}
        </button>
      </p>
    </div>
  );
};
const Music = (props: {
  setCurrentStack: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<any>>;
  currentStack: string;
  history: string[];
}) => {
  const onNavigateBack = () => {
    const popRes = props.history.pop() as string;
    props.setCurrentStack(popRes);
  };
  const onNavigate = (stackTitle: string) => {
    props.setCurrentStack(stackTitle);
    props.setHistory([...props.history, "Music"]);
  };
  return (
    <div style={{ fontSize: 38 }}>
      <div>Hot_Music_Stack</div>
      <p>
        <button style={{ fontSize: 25 }} onClick={() => onNavigateBack()}>
          {"⬅️ 返回"}
        </button>
      </p>
    </div>
  );
};
const More = (props: {
  setCurrentStack: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<any>>;
  currentStack: string;
  history: string[];
}) => {
  const onNavigateBack = () => {
    const popRes = props.history.pop() as string;
    props.setCurrentStack(popRes);
  };
  const onNavigate = (stackTitle: string) => {
    props.setCurrentStack(stackTitle);
    props.setHistory([...props.history, "More"]);
  };
  return (
    <div style={{ fontSize: 38 }}>
      <div>Hot_More_Stack</div>
      <p>
        <button style={{ fontSize: 28 }} onClick={() => onNavigate("Dist")}>
          {"导航到Dist ➡️"}
        </button>
      </p>
      <p>
        <button style={{ fontSize: 25 }} onClick={() => onNavigateBack()}>
          {"⬅️ 返回"}
        </button>
      </p>
    </div>
  );
};
const Dist = (props: {
  setCurrentStack: React.Dispatch<React.SetStateAction<string>>;
  setHistory: React.Dispatch<React.SetStateAction<any>>;
  currentStack: string;
  history: string[];
}) => {
  const onNavigateBack = () => {
    console.log("props.history", props.history);
    const popRes = props.history.pop() as string;
    props.setCurrentStack(popRes);
  };
  return (
    <div style={{ fontSize: 38 }}>
      <div>Hot_Dist_Stack</div>
      <p>
        <button style={{ fontSize: 30 }} onClick={() => onNavigateBack()}>
          {"⬅️返回"}
        </button>
      </p>
    </div>
  );
};
//TAB PAGE
//Generic Components
const Home = (props: { firstName: string; lastName: string }) => {
  const showModal = () => {
    alert("showModal");
  };
  const onDelete = (name: string) => {
    cells.splice(
      cells.findIndex((x) => x.name == name),
      1
    );
    setCells([...cells]);
  };
  const [cells, setCells] = useState<CellType[]>([
    { name: "React", tag: "🚀", icon: web, onPress: showModal },
    { name: "ReactNative", tag: "🔥", icon: asset, onPress: onDelete },
    { name: "Vue", tag: "🔥", icon: note, onPress: onDelete },
    { name: "Angular", tag: null, icon: language, onPress: onDelete },
    { name: "JavaScript", tag: null, icon: notice, onPress: onDelete },
    { name: "TypeScript", tag: null, icon: service, onPress: onDelete },
    { name: "Next.js", tag: null, icon: message, onPress: onDelete },
    { name: "Node", tag: null, icon: ssl, onPress: showModal },
    { name: "Taro", tag: null, icon: address, onPress: onDelete },
  ]);
  return (
    <div className={styles.HomePage}>
      {cells.map((cell) => {
        return (
          <Cell
            name={cell.name}
            tag={cell.tag}
            icon={cell.icon}
            onPress={cell.onPress}
            key={cell.name}
          />
        );
      })}
    </div>
  );
};

const Check = (props: { firstName: string; lastName: string }) => {
  const nameMemo = useMemo(() => {
    return `${props.firstName}${props.lastName}`;
  }, [props.firstName, props.lastName]);
  return <div>{"<CHECK/>"}</div>;
};
const Mine = () => {
  return <div>{"<Mine/>"}</div>;
};
const Hot = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [currentStack, setCurrentStack] = useState<any>("Shop");
  const [stack, setStack] = useState<StackType[]>([
    {
      title: "Shop",
      page: (
        <Shop
          setCurrentStack={setCurrentStack}
          currentStack={currentStack}
          setHistory={setHistory}
          history={history}
        />
      ),
    },
    {
      title: "Music",
      page: (
        <Music
          setCurrentStack={setCurrentStack}
          currentStack={currentStack}
          setHistory={setHistory}
          history={history}
        />
      ),
    },
    {
      title: "More",
      page: (
        <More
          setCurrentStack={setCurrentStack}
          currentStack={currentStack}
          setHistory={setHistory}
          history={history}
        />
      ),
    },
    {
      title: "Dist",
      page: (
        <Dist
          setCurrentStack={setCurrentStack}
          currentStack={currentStack}
          setHistory={setHistory}
          history={history}
        />
      ),
    },
  ]);
  useEffect(() => {
    setStack([
      {
        title: "Shop",
        page: (
          <Shop
            setCurrentStack={setCurrentStack}
            currentStack={currentStack}
            history={history}
            setHistory={setHistory}
          />
        ),
      },
      {
        title: "Music",
        page: (
          <Music
            setCurrentStack={setCurrentStack}
            currentStack={currentStack}
            history={history}
            setHistory={setHistory}
          />
        ),
      },
      {
        title: "More",
        page: (
          <More
            setCurrentStack={setCurrentStack}
            currentStack={currentStack}
            history={history}
            setHistory={setHistory}
          />
        ),
      },
      {
        title: "Dist",
        page: (
          <Dist
            setCurrentStack={setCurrentStack}
            currentStack={currentStack}
            setHistory={setHistory}
            history={history}
          />
        ),
      },
    ]);
  }, [currentStack, history]);
  const renderStack = () => {
    return stack.find((x) => x.title == currentStack)?.page;
  };
  return <div>{renderStack()}</div>;
};
const Icon = (props: OptionsType) => {
  return (
    <div
      style={
        props.active
          ? {
              fontSize: 20,
              background: "rgb(44, 54, 144)",
              ...BARST,
            }
          : {
              background: "rgb(90, 90, 90)",
              fontSize: 15,
              ...BARST,
            }
      }
    >
      {props.title}
    </div>
  );
};
export default function Tab() {
  const [bars, setbars] = useState<OptionsType[]>([
    {
      title: "HOME",
      active: true,
      page: <Home firstName={"Ding"} lastName={"Dang"} />,
      firstName: "Li",
      lastName: "Hua",
    },
    {
      title: "HOT",
      active: false,
      page: <Hot />,
      firstName: "Li",
      lastName: "Hua",
    },
    {
      title: "CHECK",
      active: false,
      page: <Check firstName={"Ding"} lastName={"Dang"} />,
      firstName: "Li",
      lastName: "Hua",
    },
    {
      title: "MINE",
      active: false,
      page: <Mine />,
      firstName: "Li",
      lastName: "Hua",
    },
  ]);
  const [currentBar, setCurrentBar] = useState("HOME");
  const onActive = (item: OptionsType) => {
    setCurrentBar(item.title);
    bars.forEach((x) => {
      x.title == item.title ? (x.active = !x.active) : (x.active = false);
    });
    setbars([...bars]);
  };
  const pageRenderFn = (curbar: string) => {
    return bars.find((x) => x.title == curbar)?.page;
  };
  useEffect(() => {
    // if (currentBar === "MINE") console.log("Effect");
  }, [currentBar]);
  return (
    <div style={containerStyle}>
      <div style={pageStyle}>{pageRenderFn(currentBar)}</div>
      <div style={barStyle}>
        {bars.map((item: OptionsType, index: number) => {
          return (
            <span onClick={() => onActive(item)} key={index}>
              <Icon title={item.title} active={item.active} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
