import { useEffect, useState } from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
function decode(query) {
  return query ? decodeURIComponent(query) : "";
}
export function useSearchQuery() {
  // const navigate = useNavigate();
  const params = useParams();
  const [search, setSearch] = useState(decode(params.query));
  useEffect(() => {
    setSearch(decode(params.query));
  }, [params.query]);
  const updateParams = (inp, commitToUrl = false) => {
    setSearch(inp);
    if (!commitToUrl) return;
    // if (inp.length === 0) {
    //   navigate("/", { replace: true });
    //   return;
    // }
    // navigate(
    //   generatePath("/browse/:query", {
    //     query: inp,
    //   }),
    //   { replace: true },
    // );
  };
  const onUnFocus = (newSearch) => {
    updateParams(newSearch !== undefined ? newSearch : search, true);
  };
  return [search, updateParams, onUnFocus];
}