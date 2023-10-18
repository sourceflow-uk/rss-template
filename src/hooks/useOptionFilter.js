import { generateOptionsArray } from "@/functions/generateOptionsArray";
import { useEffect, useState } from "react";

export const useOptionFilter = (items, key, setFunction) => {
  const [filterValue, setFilterValue] = useState(null);

  useEffect(() => {
    setFunction(
      items.filter((i) => (filterValue ? i[key].toLowerCase().trim() === filterValue.toLowerCase().trim() : true)),
    );
  }, [filterValue]);

  return [generateOptionsArray(items, key), filterValue, setFilterValue];
};
