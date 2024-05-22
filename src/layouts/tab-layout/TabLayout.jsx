import classes from "./TabLayout.module.scss";
import { CodeBlock, nord } from "react-code-blocks";
import {
  Tab,
  TabList,
  TabsContext,
  TabPanel,
  TabPanels,
  Dropdown,
} from "monday-ui-react-core";
import AttentionBoxLayout from "../../examples/attention-box-layout/AttentionBoxLayout";
import ButtonExample from "../../examples/button-example/ButtonExample";
import { codeExamples } from "../../constants/code-examples";
import { useState } from "react";

const TabLayout = (props) => {
  const [selectedApp, setSelectedApp] = useState('AttentionBox');

  function handleColumnSelect(e) {
    setSelectedApp(e?.value);
  }

  const dropdownOptions = [
    {label: 'Button', value: 'Button'},
    {label: 'Attention Box', value: 'AttentionBox'},
  ]

  return (
    <div className={classes.tabsWrapper}>
      <Dropdown
        // className={classes.se}
        options={dropdownOptions}
        onChange={handleColumnSelect}
        placeholder={"Select an example to see"}
        size="small"
      />
      <TabsContext>
        <TabList>
          <Tab>App</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanels animationDirection={TabPanels.animationDirections.LTR}>
          <TabPanel className="monday-storybook-tabs_bg-color">
            <div className={classes.appTabContent}>
              {selectedApp === 'AttentionBox' ? <AttentionBoxLayout /> : <ButtonExample />}
            </div>
          </TabPanel>
          <TabPanel>
            <div className={classes.codeDisplayBlock}>
              <CodeBlock
                text={
                  selectedApp === 'AttentionBox'
                    ? codeExamples.AttentionBox.code
                    : codeExamples.Button.code
                }
                theme={nord}
                showLineNumbers={true}
                language="jsx"
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </div>
  );
};

export default TabLayout;
