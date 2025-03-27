import { useGetAuthorQuery, useGetLocationQuery, useGetPaintingsQuery, useLazyGetPaintingsQuery, useSeatchPaintingsQuery } from "../api/api";
import Header from "./Header";
import styles from '../styles/styles.module.scss'
import { useState } from "react";

function App() {
  const [pagination, setPagination] = useState(1)
  const [title, setTitle] = useState('')
  const limit = 6

  const { data: paintings = [] } = useGetPaintingsQuery({ _page: pagination, _limit: limit, title })
  const { data: authors = [] } = useGetAuthorQuery()
  const { data: locations = [] } = useGetLocationQuery()

  const [trigger] = useLazyGetPaintingsQuery()

  const paintingWithAuthor = paintings?.payload?.map((painting) => ({
    ...painting,
    author: authors.find((author) => author.id === painting.authorId),
    location: locations.find((location) => location.id === painting.locationId)
  }))

  const pagin = Math.ceil(paintings.total / limit)
  const paginArray = Array.from({ length: pagin }, (_, i) => i + 1)
  console.log(paginArray);


  const handlePageChange = (newPage: number) => {
    setPagination(newPage)
    trigger({ _page: newPage, _limit: limit })
  }


  return (
    <main>
      <Header />
      <input onChange={(e) => setTitle(e.target.value)}/>
      <div className={styles.paintingsContainer}>{Array.isArray(paintingWithAuthor) && paintingWithAuthor.map((painting) => (
        <div className={styles.paintings} key={painting.id}>
          <img className={styles.image} src={`https://test-front.framework.team/${painting.imageUrl}`} alt="" />
          <div className={styles.paintingsInfo}>
            <div style={{ position: 'relative' }}>
              <div className={styles.paintingInfo2}>
                <div className={styles.nameAndCreated}>
                  <p className={styles.paintingName}>{painting.name}</p>
                  <p className={styles.paintingCreated}>{painting.created}</p>
                </div>
                <div className={styles.authorAndLocation}>
                  <p className={styles.paintingName}>{painting.author?.name}</p>
                  <p className={styles.paintingCreated}>{painting.location?.location}</p>
                </div>
              </div>
              <div className={styles.separator} />
            </div>
          </div>
        </div>
      ))}
      </div>
      <div>
        <div>
          <button disabled={pagination === 1} onClick={() => handlePageChange(pagination - 1)}>Назад</button>
          {paginArray.map((page) => (
            <div>
              <div key={page} onClick={() => handlePageChange(page)}>{page}</div>
            </div>
          ))}
        </div>
        <button disabled={pagination === pagin} onClick={() => handlePageChange(pagination + 1)}>Вперед</button>
      </div>
    </main>
  );
}

export default App;
