import React, { FC } from "react";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";

const App: FC<{}> = () => {
  return (
    <>
      <Header />
      <ControlPanel />
    </>
  );
};

export default App;
