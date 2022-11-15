import React from "react";
import SearchedTodo from "./SearchedTodo";

const SearchComponent = ({ todo, searchInput, searchedTodos }) => {

  return (
    <div>
      {searchedTodos.map((item) => <SearchedTodo item={item} key={item.id} />)}
    </div>
  )
}

export default SearchComponent;