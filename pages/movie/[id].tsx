import React, { useState } from "react";
import Head from "next/head";
import requests from "../../utils/request";
import { Data } from "../../types";
import axios from "axios";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Player from "../../components/Player";

interface Props {
  result: Data;
}

const Movie = ({ result }: Props) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
      </Head>

      <Header />

      <Layout
        result={result}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        title={result.title || result.original_name}
        onClick={() => setShowPlayer(true)}
      >
        <p className="text-xs md:text-sm">
          {result.release_date || result.first_air_date} .
          {Math.floor(result.runtime / 60)}h {Math.floor(result.runtime % 60)}m{" "}
          .{result.genres.map((genre) => genre.name + " ")}
        </p>

        <p className="text-sm md:text-base max-w-4xl">{result.overview}</p>
      </Layout>

      {showPlayer && (
        <div className="fixed top-0 w-full h-full bg-black/50 z-30" />
      )}

      <Player
        showPlayer={showPlayer}
        onClick={() => setShowPlayer(false)}
        result={result}
      />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;

  const req = await axios.get(requests.fetchMovie(id));

  return {
    props: {
      result: req.data,
    },
  };
};

export default Movie;
