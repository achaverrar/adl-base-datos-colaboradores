import { useState } from "react";

export const useList = (initialList) => {
  const [listData, setListData] = useState({
    list: initialList,
    lastId: initialList.length,
  });

  const addListItem = (item) => {
    setListData((prevListData) => {
      const newLastId = prevListData.lastId + 1;
      return {
        list: [
          ...prevListData.list,
          {
            id: newLastId,
            ...item,
          },
        ],
        lastId: newLastId,
      };
    });
  };

  const deleteListItem = (id) => {
    setListData((prevListData) => ({
      ...prevListData,
      list: prevListData.list.filter((item) => item.id !== id),
    }));
  };

  return [listData.list, addListItem, deleteListItem];
};

export default useList;