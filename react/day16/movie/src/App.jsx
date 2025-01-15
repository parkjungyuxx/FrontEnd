import { useEffect, useMemo, useRef } from "react";
import MovieApi from "./apis/movie/movieApi";
import "./App.css";
import { useInfiniteQuery } from "@tanstack/react-query";

function App() {
  const lastMovieItemRef = useRef(null);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["movieList", "upcoming"],
    queryFn: ({ pageParam = 1 }) =>
      MovieApi.getUpComingMovieList({ page: pageParam }),
    getNextPageParam: (lastPage, allPage) => lastPage + 1,
    // allPage.length > lastPage.totalPage && lastPage.page + 1,
  });

  const movieList = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap((page) => page.results);
  }, [data]);

  useEffect(
    function onObserve() {
      const el = lastMovieItemRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !isLoading) {
            fetchNextPage();
          }
        },
        {
          rootMargin: "0px",
          threshold: 1.0,
        }
      );

      observer.observe(el);

      return () => {
        if (!el) return;
        observer.unobserve(el);
      };
    },
    [fetchNextPage, isLoading]
  );

  console.log(movieList);
  return (
    <>
    <div>메뉴 리스트</div>
    <div>Movie</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
            <p>{movie.title}</p>
          </div>
        ))}
        <div ref={lastMovieItemRef}></div>
      </div>
    </>
  );
}

export default App;
