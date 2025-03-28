import {
  useGetAuthorQuery,
  useGetLocationQuery,
  useGetPaintingsQuery,
} from "../api/api";
import { IPaintings } from "../types/types";

const usePaintings = (pagination: number, title: string) => {
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

  return { paintingsWithDetails, paintings, limit };
};

export default usePaintings;
