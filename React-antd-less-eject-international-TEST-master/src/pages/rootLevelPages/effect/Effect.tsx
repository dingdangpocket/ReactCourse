import { ChangeEvent, useEffect, useState } from "react";
const spaceAround = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
} as object;
//commonStyle
export default function Effect() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [authCode, setAuthCode] = useState<string>("");
  const [btnTime, setBtnTime] = useState<number>(10);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [btnContent, setBtnContent] = useState<string>("获取验证码");
  const [count, setCount] = useState<number>(0);
  //state...
  useEffect(() => {
    if (btnDisabled) {
      if (btnTime == 0) {
        setBtnContent("获取验证码");
        setBtnDisabled(false);
        return;
      }
      if (btnTime > 0 && btnTime <= 10) {
        setBtnDisabled(true);
      }
      const interval = setInterval(() => {
        setBtnTime((t) => t - 1);
      }, 1000);
      setBtnContent(`${btnTime}s后重发`);
      return () => clearInterval(interval);
    }
  }, [btnTime, btnDisabled]);
  useEffect(() => {
    console.log("(1)空数组：挂载执行");
  }, []);
  useEffect(() => {
    console.log("(2)无参数：任一State更新即执行");
  });
  useEffect(() => {
    console.log("(3)特定参数：所依赖的State更新即执行");
  }, [count]);
  //effect...
  const inputFilter = (value: string) => {
    const authValue = value.replace(/[^\d]+/, "");
    return authValue;
  };
  //commonFunction...
  const onPhoneNumberInputRefChange = (
    inputEvent: ChangeEvent<HTMLInputElement>
  ) => {
    const res = inputFilter(inputEvent?.target?.value);
    setPhoneNumber(res);
  };
  const onAuthCodeInputRefChange = (
    inputEvent: ChangeEvent<HTMLInputElement>
  ) => {
    const res = inputFilter(inputEvent?.target?.value);
    setAuthCode(res);
  };
  const getAuthCode = () => {
    setBtnTime(10);
    setBtnDisabled(true);
  };
  //method...
  return (
    <div
      style={{
        width: 380,
        height: 220,
        background: "black",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{
        color: "white"
      }}>Effect</div>
      <div
        style={{
          width: 300,
          height: 50,
          ...spaceAround,
        }}
      >
        <input
          type="text"
          value={phoneNumber}
          placeholder="请输入手机号"
          onChange={onPhoneNumberInputRefChange}
          style={{
            width: 170,
            height: 30,
            ...spaceAround,
          }}
        ></input>
        <button
          style={
            btnDisabled
              ? {
                width: 100,
                height: 40,
                background: "gray",
                color: "white",
              }
              : {
                width: 100,
                height: 40,
                background: "#330066",
                color: "white",
              }
          }
          disabled={btnDisabled}
          onClick={() => getAuthCode()}
        >
          {btnContent}
        </button>
      </div>
      <div
        style={{
          width: 300,
          height: 50,
          ...spaceAround,
        }}
      >
        <input
          type="text"
          value={authCode}
          placeholder="请输入验证码"
          onChange={onAuthCodeInputRefChange}
          style={{
            width: 180,
            height: 30,
            ...spaceAround,
          }}
        ></input>
        <button
          style={{
            width: 100,
            height: 40,
            background: "#330066",
            color: "white",
          }}
        >
          登录
        </button>
      </div>
      <button
        style={
          btnDisabled
            ? {
              width: 100,
              height: 40,
              background: "gray",
              color: "white",
            }
            : {
              width: 100,
              height: 40,
              background: "#330066",
              color: "white",
            }
        }
        disabled={btnDisabled}
        onClick={() => setCount(count + 1)}
      >
        <div>{count}</div>
        setCount
      </button>
    </div>
  );
}
