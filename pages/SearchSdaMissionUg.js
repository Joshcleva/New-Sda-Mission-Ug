import React, { useState } from "react";
import { PostCard } from "../components";
import { getPosts } from "../services";
import Head from "next/head";

const Search = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container px-4 mx-auto mb-8 text-center">
      <Head>
        <title>
          SdaMissionUg | Stream, learn, Listen & Download all kinds of Sda Music
          Here
        </title>
        <meta
          name="description"
          content="Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta
          property="og:title"
          content="Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <link rel="icon" href="/images/smlogo.png" />
        
      </Head>
      <div class="justify-center flex w-full pt-2 mt-4 relative mx-auto text-gray-600">
        <input
          class="border-2 border-gray-300 mb-4 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="     Search Any Sda Songs, Hymns, Sermons, Accapella, Pathfinders and Preachings"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <img
          className="absolute top-8 rounded-full cursor-pointer"
          width="40 px"
          src="/search2.gif"
          alt="Logo"
        />
      </div>

        <div className=" my-4 grid grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {posts
            .filter((post) => {
              if (searchTerm == "") {
                return post;
              } else if (
                post.node.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
        </div>
      </div>
  );
};

export default Search;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
