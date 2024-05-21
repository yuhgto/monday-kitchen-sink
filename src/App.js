import React from "react";
import { useState, useEffect } from "react";

import mondaySdk from "monday-sdk-js";
//Explore more Monday React Components here: https://style.monday.com/
import "monday-ui-react-core/dist/main.css";

import "./App.css";
import TabLayout from "./layouts/tab-layout/TabLayout"

// Usage of mondaySDK example, for more information visit here: https://developer.monday.com/apps/docs/introduction-to-the-sdk/
const monday = mondaySdk();

const App = () => {

  // TODO: pass context to child components
  // eslint-disable-next-line no-unused-vars
  const [context, setContext] = useState();

  useEffect(() => {
    // Notice this method notifies the monday platform that user gains a first value in an app.
    // Read more about it here: https://developer.monday.com/apps/docs/mondayexecute#value-created-for-user/
    monday.execute("valueCreatedForUser");

    // TODO: set up event listeners, Here`s an example, read more here: https://developer.monday.com/apps/docs/mondaylisten/
    monday.listen("context", (res) => {
      setContext(res.data);
    });
  }, []);

  return (
    <div className="App">
      <TabLayout />
    </div>
  );
};

export default App;
