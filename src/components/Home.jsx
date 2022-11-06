import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "./Card";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        Home page
      </h1>

      <Card />
      <button onClick={() => navigate("ordersummary")}> Place order</button>
    </>
  );
}
