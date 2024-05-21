import classes from "./TabLayout.scss";
import { CodeBlock } from "react-code-blocks";
import {
  AttentionBox,
  Tab,
  TabList,
  TabsContext,
  TabPanel,
  TabPanels,
} from "monday-ui-react-core";

const attentionBoxText = "hello";

// TODO: generate attention box text from context
//Some example what you can do with context, read more here: https://developer.monday.com/apps/docs/mondayget#requesting-context-and-settings-data
// const attentionBoxText = `Hello, your user_id is: ${
//   context ? context.user.id : "still loading"
// }.
// Let's start building your amazing app, which will change the world!`;

const TabLayout = (props) => {
  return (
    <div className={classes.tabsWrapper}>
      <TabsContext>
        <TabList>
          <Tab>App</Tab>
          <Tab>Code</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="monday-storybook-tabs_bg-color">
            <AttentionBox
              title="Hello Monday Apps!"
              text={attentionBoxText}
              type="success"
            />
          </TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">
            {/* TODO: add a  code block component - https://react-code-blocks-rajinwonderland.vercel.app/?path=/docs/codeblock--add-a-scrollbar */}
            <CodeBlock
              text={`<AttentionBox
  title="Hello Monday Apps!"
  text={attentionBoxText}
  type="success"
/>`}
              customStyle={{
                overflow: "scroll",
              }}
              theme="a11yDark"
              showLineNumbers={true}
              language="jsx"
            />
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </div>
  );
};

export default TabLayout;
