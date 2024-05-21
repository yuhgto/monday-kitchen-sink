import React from "react";
import { useState, useEffect } from "react";

import mondaySdk from "monday-sdk-js";

import "monday-ui-style/dist/index.min.css";
import "monday-ui-react-core/tokens";

import "./App.css";
import TabLayout from "./layouts/tab-layout/TabLayout"

const monday = mondaySdk();

const App = () => {

  // TODO: pass context to child components
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useState();

  useEffect(() => {
    monday.execute("valueCreatedForUser");

    monday.listen("context", (res) => {
      setContext(res.data);
    });
  }, []);

  return (
      // <AttentionBox
      //         title="Hello Monday Apps!"
      //         text={"hello?"}
      //         type="success"
      //       />
    <div className="App">
      <TabLayout />
    </div>
  );
};

export default App;
