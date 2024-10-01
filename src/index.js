import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
import "./index.scss";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { ROUTES } from "./components/common/Menu/MenuConstants";
import Welcome from "./components/common/Welcome/Welcome";
import Menu from "./components/common/Menu/Menu";
import DeleteItem from "./examples/DeleteItem/DeleteItem";
import OpenItemCard from "./examples/OpenItemCard/OpenItemCard";
import GetSubItems from "./examples/GetSubItems/GetSubItems";
import UploadFileViaSDK from "./examples/UploadFileViaSDK/UploadFileViaSDK";
import UploadFileViaAPI from "./examples/UploadFileViaAPI/UploadFileViaAPI";
import StorageApi from "./examples/StorageApi/StorageApi";
import ArchiveSubitem from "./examples/ArchiveSubitem/ArchiveSubitem";
import GetUpdates from "./examples/GetUpdates/GetUpdates";
import Confirmation from "./examples/Confirmation/Confirmation";
import Notice from "./examples/Notice/Notice";
import FilePreview from "./examples/FilePreview/FilePreview";
import WorkingWithSettings from "./examples/WorkingWithSettings/WorkingWithSettings";
import Pagination from "./examples/Pagination/Pagination";
import UpdateSubitems from "./examples/UpdateSubitems/UpdateSubitems";
import DeleteSubitem from "./examples/DeleteSubitem/DeleteSubitem";
import OpenSettingsPane from "./examples/OpenSettingsPane/OpenSettingsPane";
import CreateItemCard from "./examples/CreateItemCard/CreateItemCard";
import GetAppContext from "./examples/GetAppContext/GetAppContext";
import ListenToEvents from "./examples/ListenToEvents/ListenToEvents";
import ListenToBoardFilter from "./examples/ListenToBoardFilter/ListenToBoardFilter";
import FilterBoardItems from "./examples/FilterBoardItems/FilterBoardItems";
import GetBoardItems from "./examples/GetBoardItems/GetBoardItems";
import GetWorkspaces from "./examples/GetWorkspaces/GetWorkspaces";
import GetSettings from "./examples/GetSettings/GetSettings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>
    },
    {
      path: "/index.html",
      element: <Welcome/>
    },
    {
      path: `/${ROUTES.MENU}`,
      element: <Menu />
    },
    {
      path: `/menu/${ROUTES.DELETE_ITEM}`,
      element: <DeleteItem />
    },
    {
      path: `/menu/${ROUTES.OPEN_ITEM_CARD}`,
      element: <OpenItemCard />
    },
    {
      path: `/menu/${ROUTES.OPEN_SETTINGS_PANE}`,
      element: <OpenSettingsPane />
    },
    {
      path: `/menu/${ROUTES.GET_SETTINGS}`,
      element: <GetSettings />
    },
    {
      path: `/menu/${ROUTES.GET_SUB_ITEMS}`,
      element: <GetSubItems />
    },
    {
      path: `/menu/${ROUTES.UPLOAD_FILE_VIA_SDK}`,
      element: <UploadFileViaSDK />
    },
    {
      path: `/menu/${ROUTES.UPLOAD_FILE_VIA_API}`,
      element: <UploadFileViaAPI />
    },
    {
      path: `/menu/${ROUTES.STORAGE_API}`,
      element: <StorageApi />
    },
    {
      path: `/menu/${ROUTES.CONFIRMATION}`,
      element: <Confirmation />
    },
    {
      path: `/menu/${ROUTES.NOTICE}`,
      element: <Notice />
    },
    {
      path: `/menu/${ROUTES.FILEPREVIEW}`,
      element: <FilePreview />
    },
    {
      path: `/menu/${ROUTES.WORKING_WITH_SETTINGS}`,
      element: <WorkingWithSettings />
    },
    {
      path: `/menu/${ROUTES.PAGINATED}`,
      element: <Pagination />
    },
    {
      path: `/menu/${ROUTES.UPDATE_SUBITEM}`,
      element: <UpdateSubitems />
    },
    {
      path: `/menu/${ROUTES.DELETE_SUBITEM}`,
      element: <DeleteSubitem />
    },
    {
      path: `/menu/${ROUTES.ARCHIVE_SUBITEM}`,
      element: <ArchiveSubitem />
    },
    {
      path: `/menu/${ROUTES.UPDATES}`,
      element: <GetUpdates />
    },
    {
      path: `/menu/${ROUTES.CREATE_ITEM}`,
      element: <CreateItemCard />
    },
    {
      path: `/menu/${ROUTES.GET_APP_CONTEXT}`,
      element: <GetAppContext />
    },
    {
      path: `/menu/${ROUTES.LISTEN_TO_EVENTS}`,
      element: <ListenToEvents />
    },
    {
      path: `/menu/${ROUTES.LISTEN_TO_BOARD_FILTER}`,
      element: <ListenToBoardFilter />
    },
    {
      path: `/menu/${ROUTES.GET_BOARD_ITEMS}`,
      element: <GetBoardItems />
    },
    {
      path: `/menu/${ROUTES.FILTER_BOARD_ITEMS}`,
      element: <FilterBoardItems />
    },
    {
      path: `/menu/${ROUTES.GET_WORKSPACES}`,
      element: <GetWorkspaces />
    },
  ])
  
//   const root = createRoot();
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();