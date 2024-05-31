import React, { useState, useEffect } from "react";
import "monday-ui-react-core/dist/main.css";
import mondaySdk from "monday-sdk-js";
// import deleteItemConstants from "../DeleteItem/DeleteItemConstants";
import RenderItems from "../../components/RenderItems/RenderItems";
// import { Context } from "../../components/context/ContextProvider";
// import Instructions from "../../components/common/Instructions/Instructions";
// import CodeBlock from "../../components/common/CodeBlock/CodeBlock";
// import ActionHeader from "../../components/common/ActionHeader/ActionHeader";

const monday = mondaySdk();

const DeleteItem = () => {
  // const { items, boardName, updateItems } = useContext(Context);

  // TODO: redo the items, board name, and updateItems hook in this component
  const [items, updateItems] = useState([]);
  const [boardName, setBoardName] = useState('');
  const [boardContext, setBoardContext] = useState();

  useEffect(() => {
    monday.listen('context', (res) => {
      console.log(res);
      setBoardContext(res?.data);
    })
  }, [])

  useEffect(() => {
    monday.api(`query ($boardIds: [ID!], $limit: Int) {
      boards(ids: $boardIds, limit: $limit) {
        name
        items_page(limit: $limit) {
          items {
            id
            name
          }
        }
      }
    }`, {boardIds: boardContext?.boardIds, limit:10})
      .then((res) => {
        // TODO: There is an infinite loop here! please fix
        console.log('api data received.')
        setBoardName(res?.data?.boards[0]?.name);
        updateItems(res?.data?.boards[0]?.items_page?.items);
      })
  }, [boardContext, items, boardName])

  const deleteItemQuery = `mutation ($itemId: Int!) {
    delete_item(item_id: $itemId) {
      board {
        items_page {
          items {
            id
            name
          }
        }
      }
    }
  }`

  const deleteItem = (item) => {
    monday
      .api(deleteItemQuery, {
        variables: { itemId: +item.id },
      })
      .then((res) => {
        updateItems({ items: res.data.delete_item.board.items_page.items});
        setBoardName(res.data.delete_item.board.name)
      });
  };

  return (
    <div className="delete-item-container feature-container">
      {/* TODO: Rename "RenderItems" as "ItemsList" */}
      <RenderItems
        itemsData={items}
        actionButtonContent="Delete me"
        action={(item) => {
          monday
            .execute("confirm", {
              message: `Are you sure you want to delete the item ${item.name} (This item will be actually deleted from you board)?`,
              confirmButton: "Delete",
              cancelButton: "Cancel",
              excludeCancelButton: false,
            })
            .then((res) => {
              res.data.confirm &&
                monday.execute("notice", {
                  message: "Item has been deleted successfully",
                  type: "success",
                  timeout: 10000,
                }) &&
                deleteItem(item);
            });
        }}
      />
      {/* <Instructions
        paragraphs={deleteItemConstants.deleteItemInstructionsParagraphs}
        instructionsListItems={deleteItemConstants.deleteItemInstructionsListItems}
        linkToDocumentation={deleteItemConstants.deleteItemInstructionslinkToDocumentation}
      /> */}
    </div>
  );
};

export default DeleteItem;
