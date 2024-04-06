## Movies App - Movie Search App (frontend: React.js)

---

**Project Description:** This project involves creating a basic routing system
for a movie search application.

**App Routes:**

- `/` - Home component: serves as the landing page featuring a list of popular
  movies.
- `/movies` - Movies component: facilitates movie search functionality by
  keyword.
- `/movies/:movieId` - MovieDetails component: displays detailed information
  about a specific movie.
- `/movies/:movieId/cast` - Cast component: presents information about the cast,
  rendering within the MovieDetails page.
- `/movies/:movieId/reviews` - Reviews component: showcases reviews related to a
  particular movie, also rendering on the MovieDetails page.

**Code Splitting:** This project implements asynchronous loading of JSX code for
app routes utilizing React.lazy() and `<Suspense>`.

**Additional Information:**

- The application utilizes the themoviedb.org API for fetching data.
- The application is responsive and compatible with both mobile and desktop
  devices.
