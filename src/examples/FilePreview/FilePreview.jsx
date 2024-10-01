import React, { useState, useEffect } from "react";
import "./FilePreview.scss";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
import RenderItems from "../RenderItems/RenderItems.jsx";
import Button from "monday-ui-react-core/dist/Button";
import filePreviewConstants from "./FilePreviewConstants";
import Loader from "monday-ui-react-core/dist/Loader";
import ActionHeader from "../../components/common/ActionHeader/ActionHeader";
import Instructions from "../../components/common/Instructions/Instructions";
import { useGetBoardData } from "../../hooks/UseGetBoardData.js";
import CodeSamples from "../../constants/codeSamples";
import CodeBlock from "../../components/common/CodeBlock/CodeBlock";
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "monday-ui-react-core";

const monday = mondaySdk();

// @mondaycom-codesample-start
const FilePreviewSample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const boardData = useGetBoardData();
  const [fileColumns, setFileColumns] = useState([]);
  const [itemsToRender, setItemsToRender] = useState([]);

  function handleAddFileColumn() {
    console.log('file clicked')
    monday.execute('notice',
      {
        message: `You need to add a file column to the board before using this example.`,
        type: "error",
        timeout: 3000,
      });
    // monday.api(`mutation ($boardId: ID!) {
    //     create_column(board_id:$boardId, column_type:file, title:"Files") {
    //       id
    //       title
    //     }
    //   }`, {
    //     boardId: boardData.boards[0].id
    //   })
  }

  function handleActionClick(item) {
    const fileColumnId = fileColumns[0].id;
    const fileColumnValue = JSON.parse(
      item.column_values.filter((x) => x.id === fileColumns[0].id)[0]
        .value
    );
    const assetId = fileColumnValue?.files[0]?.assetId ?? null;
    const boardId = boardData.boards[0].id;
    if (!assetId) {
      monday.execute("notice", {
        message: "No files uploaded. Uploading now...",
      });
      monday.execute("triggerFilesUpload", {
        boardId,
        itemId: item.id,
        columnId: fileColumnId,
      });
    } else {
      monday.execute("openFilesDialog", {
        boardId,
        itemId: item.id,
        columnId: fileColumnId,
        assetId,
      });
    }
  }

  useEffect(() => {
    if (boardData.boards) {
      setFileColumns(
        boardData.boards[0].columns.filter((x) => x.type === "file")
      );
      setIsLoading(false);
    }
  }, [boardData]);

  useEffect(() => {
    if (fileColumns.length != 0) {
      console.log({fileColumns});
      const tableItems = boardData.boards[0].items_page.items.map((item) => {
        const fileColumnValue = JSON.parse(
          item.column_values.filter((x) => x.id === fileColumns[0].id)[0]
            .value
        );
        const assetId = fileColumnValue?.files[0]?.assetId ?? null;
        const hasAsset = !!assetId;
        return {
          hasAsset,
          ...item
        }
      })
      setItemsToRender(tableItems)
    }
  }, [fileColumns])

  const tableColumns = [{
    id: 'name',
    title: 'Item name',
    width: {min: 150},
  },
  {
    id: 'action_button',
    title: 'Action',
    width: {min: 150},
  }
  ]

  return (
    <div>
      {isLoading ? (
        <Loader size={16} />
      ) : fileColumns.length > 0 ? (
        <>
          <Table dataState={{isLoading}} columns={tableColumns} withoutBorder>
            <TableHeader>
              {tableColumns.map((headerCell, index) => <TableHeaderCell key={index} title={headerCell.title} />)}
            </TableHeader>
            <TableBody>
              {itemsToRender.map(rowItem => <TableRow key={rowItem.id}>
                <TableCell>{rowItem.name}</TableCell>
                <TableCell>
                  <Button size={Button.sizes.SMALL} onClick={() => {handleActionClick(rowItem)}}>
                    {
                      rowItem.hasAsset ? "Open file" : "Upload file"
                    }</Button>
                </TableCell>
              </TableRow>)}
            </TableBody>
          </Table>
        </>
      ) : (
        <Button onClick={handleAddFileColumn}>Add file column</Button>
      )}
    </div>
  );
};
// @mondaycom-codesample-end

const FilePreview = () => {
  return (
    <div className="file-preview-container feature-container">
      <ActionHeader
        action="File Preview"
        actionDescription="Preview and upload files using SDK"
      />
      <div className="working-with-the-board-items playground">
        {/* <h3 className="playground-header">Playground</h3> */}
        <FilePreviewSample />
      </div>
      <CodeBlock contentText={CodeSamples.FilePreview.codeSample} />
      <Instructions
        className="instructions"
        paragraphs={filePreviewConstants?.instructionsParagraphs}
        instructionsListItems={filePreviewConstants?.instructionsListItems}
        linkToDocumentation={filePreviewConstants?.instructionslinkToDocumentation}
      />

    </div>
  );
};

export default FilePreview;
