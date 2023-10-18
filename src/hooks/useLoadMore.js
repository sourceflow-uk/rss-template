import { useCallback, useEffect, useState } from "react";
import { paginate } from "@/functions/paginate";

export const useLoadMore = (_rawItems) => {
  const [items, setItems] = useState(_rawItems);
  const [computedItems, setComputedItems] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [perPage, _setPerPage] = useState(9);

  const loadMore = useCallback(() => {
    const data = paginate(items, perPage, page + 1);

    setPage(data.__metadata.page);
    setPages(data.__metadata.pages);
    setComputedItems([...computedItems, ...data.items]);
  }, [computedItems, items, page, perPage]);

  useEffect(() => {
    if (computedItems.length === 0) {
      loadMore();
    }
  }, [computedItems, loadMore]);

  useEffect(() => {
    setPage(0);
    setPages(0);
    setComputedItems([]);
  }, [items]);

  return [computedItems, setItems, loadMore, page, pages];
};
