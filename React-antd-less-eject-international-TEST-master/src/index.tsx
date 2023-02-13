import ReactDOM from "react-dom";
import "./http/axios";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import { Suspense } from "react";
// axios.defaults.baseURL = "https://api.apiopen.top";

var mountNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <BrowserRouter>
        {/* <Suspense fallback={null}> */}
        <App name="DingDang" />
        {/* </Suspense> */}
      </BrowserRouter>
    </ContextProvider>
  </Provider>,
  mountNode
);
reportWebVitals();
//suspense方案实现懒加载，请求过快时会有闪烁问题；可以使用loadable方案实现懒加载；
