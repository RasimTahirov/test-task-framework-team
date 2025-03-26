import React from "react";
import { useGetPaintingsQuery } from "../api/api";
import Header from "./Header";

function App() {
  const { data = [] } = useGetPaintingsQuery()

  return (
    <main>
      <Header />
      {/* <div>{data.map((paintings) => (
        <React.Fragment key={paintings.id}>
          <div >{paintings.name}</div>
          <img src={`https://test-front.framework.team/${paintings.imageUrl}`} alt="" />
        </React.Fragment>
      ))}</div> */}
    </main>
  );
}

export default App;
