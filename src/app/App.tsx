import {
  useGetAuthorQuery,
  useGetLocationQuery,
  useGetPaintingsQuery,
} from "../api/api";
import Header from "../components/Header";
import { useState } from "react";
import Search from "../components/Search";
import PaintingsCards from "../components/PaintingsCards";
import Pagination from "../components/Pagination";
import { IPaintings } from "../types/types";

function App() {
  const [pagination, setPagination] = useState(1);
  const [title, setTitle] = useState("");

  const limit = 6;

  const { data: paintings = {} as { payload: IPaintings[]; total: number } } =
    useGetPaintingsQuery({ _page: pagination, _limit: limit, title });
  const { data: authors = [] } = useGetAuthorQuery();
  const { data: locations = [] } = useGetLocationQuery();

  const paintingsWithDetails = paintings?.payload?.map((painting) => ({
    ...painting,
    author: authors.find((author) => author.id === painting.authorId),
    location: locations.find((location) => location.id === painting.locationId),
  }));

  return (
    <main>
      <Header />
      <Search setTitle={setTitle} />
      <PaintingsCards paintingsWithDetails={paintingsWithDetails} />
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        limit={limit}
        paintings={paintings}
      />
    </main>
  );
}

export default App;
