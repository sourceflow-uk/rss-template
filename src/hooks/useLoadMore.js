import { useCallback, useEffect, useState } from "react";
import { paginate } from "@/functions/paginate";

export const useLoadMore = (items) => {
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [perPage, _setPerPage] = useState(9);
  const [computedItems, setComputedItems] = useState([]);

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

  return [computedItems, loadMore, page, pages];
};
