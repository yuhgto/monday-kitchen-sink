export const paginationConstants = {
  paginationQuery: `query ($board_id: Int!, $limit: Int!, $page: Int!) {
        boards(ids: [$board_id]) {
          items(limit: $limit, page: $page) {
            id
            name
          }
        }
      }
      `,
  paginationInstructionslinkToDocumentation: "https://developer.monday.com/api-reference/reference/items-page",
  paginationItemInstructionsListItems: [
    "Query the board with 'page' & 'limit' argument in order to get paginated data",
  ],
  githubUrl: "Pagination/Pagination.jsx",
};
