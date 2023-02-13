import { rootRouterConfig } from "@/routerConfig/routerConfig";
import { useReducer } from "react";
import { createContext } from "react";

interface ContentProps {
  children: JSX.Element | JSX.Element[];
}

export const ContentContext = createContext<any>({} as any);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "updateLightState":
      return {
        ...state,
        lightState: action.payload,
      };
    case "userRouterPermissions":
      return {
        ...state,
        routerPermissions: action.payload,
      };
    case "userRouterConfig":
      return {
        ...state,
        routerConfig: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }: ContentProps) => {
  const [state, dispatch] = useReducer(reducer, {
    lightState: true,
    routerPermissions: "",
    routerConfig: rootRouterConfig,
  });
  return (
    <ContentContext.Provider value={{ state, dispatch }}>
      {children}
    </ContentContext.Provider>
  );
};
