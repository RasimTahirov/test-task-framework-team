import { useGetAuthorQuery, useGetLocationQuery, useGetPaintingsQuery } from "../api/api";
import Header from "./Header";
import styles from '../styles/styles.module.scss'

function App() {
  const { data: paintings = [] } = useGetPaintingsQuery()
  const { data: authors = [] } = useGetAuthorQuery()
  const { data: locations = [] } = useGetLocationQuery()

  const paintingWithAuthor = paintings.map((painting) => ({
    ...painting,
    author: authors.find((author) => author.id === painting.authorId),
    location: locations.find((location) => location.id === painting.locationId)
  })

  )

  return (
    <main>
      <Header />
      <div className={styles.paintingsContainer}>{paintingWithAuthor.map((painting) => (
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
      ))}</div>
    </main>
  );
}

export default App;
