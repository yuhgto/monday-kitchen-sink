import { useState, useEffect } from "react";
import mondaySdk from "monday-sdk-js";
import { getAllBoardItemsQuery } from "../utils/boardUtil";

const monday = mondaySdk();

export function useBoardContext() {
  const [state, setState] = useState({ items: [], updateItems: () => {} });
  const [isLoading, setIsLoading] = useState(true);
  const [boardId, setBoardId] = useState();

  useEffect(() => {
    const unsubscribe = monday.listen("context", (res) => {
      if (res.data) {
        setIsLoading(false);
        setBoardId(res.data.boardIds ?? res.data.boardId);
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  useEffect(
    function getItemsFromBoard() {
      if (boardId) {
        setIsLoading(true);
        monday
          .api(getAllBoardItemsQuery, {
            variables: {
              boardIds: boardId,
              limit: 50,
            },
          })
          .then((itemsResponse) => {
            // ----- GETS THE ITEMS OF THE BOARD -----
            setState({
              boardId,
              boardName: itemsResponse?.data?.boards[0]?.name,
              items: itemsResponse.data.boards[0].items_page.items.map((item) => {
                return { id: item.id, name: item.name };
              }),
              updateItems: (state) => setState(state),
            });
            setIsLoading(false);
          });
      }
    },
    [boardId]
  );

  return { state, isLoading };
}
