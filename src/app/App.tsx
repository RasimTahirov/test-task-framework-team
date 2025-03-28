import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { setTheme } from "../store/slice";
import { Theme } from "../types/types";
import Header from "../components/Header";
import Search from "../components/Search";
import PaintingsCards from "../components/PaintingsCards";
import Pagination from "../components/Pagination";
import usePaintings from "../hooks/usePaintings";

function App() {
  const [pagination, setPagination] = useState(1);
  const [title, setTitle] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { paintingsWithDetails, paintings, limit } = usePaintings(
    pagination,
    title,
  );

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
