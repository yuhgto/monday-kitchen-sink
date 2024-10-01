import React, { useEffect, useState } from "react";
import './GetSettings.scss';

import mondaySdk from "monday-sdk-js";
import ActionHeader from "../../components/common/ActionHeader/ActionHeader";
import CodeBlock from "../../components/common/CodeBlock/CodeBlock";
import Instructions from "../../components/common/Instructions/Instructions";
import CodeSamples from "../../constants/codeSamples";
import _ from "lodash";

const getSettingsConstants = {
    actionTitle: 'Get app settings',
    actionSubtitle: `Use the SDK to get the app's settings info.`,
    instructionsParagraphs: [
        `This app feature contains settings – which the developer can define and the user can configure.`,
        `The monday.listen('settings') method fires an event every time the settings of the app changes.`,
        `This is useful for managing app configuration with minimal effort`],
    instructionslinkToDocumentation: `https://developer.monday.com/apps/docs/mondayget#requesting-context-and-settings-data`,
    instructionsListItems: [
        `Open the settings pane and edit the settings values.`,
        `The monday.listen method will tell the app when the settings change.`,
        `Examine the data in the playground to see how the settings are passed to your app.`,
        `Note: Try this example in other app features to see which ones support settings and what it looks like!`,
    ],
    githubUrl: "GetSettings/GetSettings.jsx",
    codeSample: CodeSamples.GetSettings.codeSample,
};

// @mondaycom-codesample-start
const monday = mondaySdk();

const GetSettings = () => {
    const [currentSettings, setCurrentSettings] = useState({});

    useEffect(() => {
        monday.execute("openSettings");
        const listener = monday.listen("settings", debouncedHandleSettingsChange);
        return () => {
            listener(); // unsubscribes to the listener
        }
    }, [])

    const handleSettingsChange = (evt) => {
        setCurrentSettings(evt);
    }

    const debouncedHandleSettingsChange = _.debounce(handleSettingsChange, 500);

    return (
        <div className="get-settings-container feature-container">
            {/* @mondaycom-codesample-skip-block-start */}
            <CodeBlock contentText={getSettingsConstants.codeSample} />
            <ActionHeader action={getSettingsConstants.actionTitle} actionDescription={getSettingsConstants.actionSubtitle} />
            <div className="get-settings-content working-with-the-board-items playground">
                <h3 className="playground-header">Playground</h3>
                {/* @mondaycom-codesample-skip-block-end */}
                <div className="code-block">
                    <CodeBlock contentText={JSON.stringify(currentSettings.data, null, 2)} />
                </div>
            </div>
            {/* @mondaycom-codesample-skip-block-start */}
            <Instructions
                paragraphs={getSettingsConstants.instructionsParagraphs}
                instructionsListItems={getSettingsConstants.instructionsListItems}
                linkToDocumentation={getSettingsConstants.instructionslinkToDocumentation}
            />
            {/* @mondaycom-codesample-skip-block-end */}
        </div>
    );
}
// @mondaycom-codesample-end

export default GetSettings;