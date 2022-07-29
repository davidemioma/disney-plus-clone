import { useState, useEffect } from "react";
import Head from "next/head";
import { db, auth } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import requests from "../utils/request";
import { Data } from "../types";
import Row from "../components/Row";
import WatchList from "../components/WatchList";

interface Props {
  popularMovies: Data[];
  popularTvShows: Data[];
  topRatedMovies: Data[];
  topRatedTvShows: Data[];
}

const Home = ({
  popularMovies,
  popularTvShows,
  topRatedMovies,
  topRatedTvShows,
}: Props) => {
  const [user] = useAuthState(auth);

  const [watchlist, setWatchlist] = useState<any>([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "users", `${user?.uid}`, "watchlist"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setWatchlist(snapshot.docs)
      ),
    []
  );

  return (
    <div>
      <Head>
        <title>
          Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
          Geo and Star
        </title>
      </Head>

      <Header />

      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:-z-10">
        <Hero />

        <Brands />

        <section id="movies">
          <Row results={popularMovies} title="Popular Movies" path="movie" />

          <Row results={topRatedMovies} title="Top Rated Movies" path="movie" />
        </section>

        <section id="series">
          <Row results={popularTvShows} title="Popular TvShows" path="show" />

          <Row
            results={topRatedTvShows}
            title="Top Rated TvShows"
            path="show"
          />
        </section>

        {watchlist.length > 0 && (
          <section id="watchlist">
            <WatchList results={watchlist} title="Watchlist" />
          </section>
        )}
      </main>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const [popularMovies, popularTvShows, topRatedMovies, topRatedTvShows] =
    await Promise.all([
      axios.get(requests.fetchPopularMovies),
      axios.get(requests.fetchPopularTvShows),
      axios.get(requests.fetchTopRatedMovies),
      axios.get(requests.fetchTopRatedTvShows),
    ]);

  return {
    props: {
      popularMovies: popularMovies.data.results,
      popularTvShows: popularTvShows.data.results,
      topRatedMovies: topRatedMovies.data.results,
      topRatedTvShows: topRatedTvShows.data.results,
    },
  };
};

export default Home;
