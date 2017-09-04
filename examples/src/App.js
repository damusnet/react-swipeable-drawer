import React from "react";

import MainContent from "./MainContent";
import Drawer from "../../src/Drawer";

import DrawerContent from "./DrawerContent";

const App = () => (
  <Drawer width={80} content={<DrawerContent />}>
    <MainContent />
  </Drawer>
);

export default App;
