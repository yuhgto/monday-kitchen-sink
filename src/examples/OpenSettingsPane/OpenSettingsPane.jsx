import React, { useEffect, useState } from "react";
import "monday-ui-react-core/dist/main.css";
import "./OpenSettingsPane.scss"
import mondaySdk from "monday-sdk-js";
import Button from "monday-ui-react-core/dist/Button";
import ActionHeader from "../../components/common/ActionHeader/ActionHeader";
// import "./Notice.scss";
import openSettingsPaneConstants from "./OpenSettingsPaneConstants";
import CodeBlock from "../../components/common/CodeBlock/CodeBlock";
import Instructions from "../../components/common/Instructions/Instructions";
import CodeSamples from "../../constants/codeSamples";

// @mondaycom-codesample-start
const monday = mondaySdk();

const OpenSettingsPane = () => {
    const [isPaneOpen, setIsPaneOpen] = useState(true);

  const handleOpenSettings = (type, text) => {
    monday.execute("openSettings")
    setIsPaneOpen(true);
  };

  const handleCloseSettings = (type, text) => {
    monday.execute("closeSettings")
    setIsPaneOpen(false);
  };

  useEffect(() => {
    monday.execute("openSettings");
    return () => {
      monday.execute("closeSettings");
    }
  }, [])

  return (
    <div className="open-settings-container feature-container">
      {/* @mondaycom-codesample-skip-block-start */}
      <ActionHeader action="Open settings pane" actionDescription="Using the SDK, open a notice pop up" />
      {/* @mondaycom-codesample-skip-block-end */}
      <div className="open-settings working-with-the-board-items playground">
        {/* @mondaycom-codesample-skip-block-start */}
        <h3 className="playground-header">Playground</h3>
        {/* @mondaycom-codesample-skip-block-end */}
        <div className="playground no-border">
          {!isPaneOpen 
          ? <Button onClick={handleOpenSettings}>
            Toggle settings pane
          </Button>
          : <Button onClick={handleCloseSettings}>
            Toggle settings pane
            </Button>}
        </div>
      </div>
      {/* @mondaycom-codesample-skip-block-start */}
      <CodeBlock contentText={CodeSamples?.OpenSettingsPane?.codeSample} />
      <Instructions
        paragraphs={openSettingsPaneConstants?.instructionsParagraphs}
        instructionsListItems={openSettingsPaneConstants?.instructionsListItems}
        linkToDocumentation={openSettingsPaneConstants?.instructionslinkToDocumentation}
      />
      {/* @mondaycom-codesample-skip-block-end */}
    </div>
  );
};
// @mondaycom-codesample-end

export default OpenSettingsPane;
