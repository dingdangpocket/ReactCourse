import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <Link to={"/home"} style={{ fontSize: 30 }}>
        Login
      </Link>
      <p></p>
      <Link to={"/effect"} style={{ fontSize: 30 }}>
        useEffect
      </Link>
      <p></p>
      <Link to={"/tab"} style={{ fontSize: 30 }}>
        Tab
      </Link>
      <p></p>
      <Link to={"/typeScript"} style={{ fontSize: 30 }}>
        typeScript
      </Link>
    </div>
  );
}
