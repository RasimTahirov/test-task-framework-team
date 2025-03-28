import {
  useGetAuthorQuery,
  useGetLocationQuery,
  useGetPaintingsQuery,
} from "../api/api";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import PaintingsCards from "../components/PaintingsCards";
import Pagination from "../components/Pagination";
import { IPaintings, Theme } from "../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setTheme } from "../store/slice";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const [pagination, setPagination] = useState(1);
  const [title, setTitle] = useState("");

  const limit = 6;

  const { data: paintings = {} as { payload: IPaintings[]; total: number } } =
    useGetPaintingsQuery({ _page: pagination, _limit: limit, title });
  const { data: authors = [] } = useGetAuthorQuery();
  const { data: locations = [] } = useGetLocationQuery();

  const paintingsWithDetails = paintings?.payload?.map((painting) => {
    const author = authors.find(({ id }) => id === painting.authorId);
    const location = locations.find(({ id }) => id === painting.locationId);

    return { ...painting, author, location };
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const theme = storedTheme || "light";
    
    dispatch(setTheme(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [dispatch]);

  return (
    <main>
      <Header />
      <Search setTitle={setTitle} />
      <PaintingsCards
        paintingsWithDetails={paintingsWithDetails}
        title={title}
      />
      <Pagination
        paintingsWithDetails={paintingsWithDetails}
        pagination={pagination}
        setPagination={setPagination}
        limit={limit}
        paintings={paintings}
      />
    </main>
  );
}

export default App;
