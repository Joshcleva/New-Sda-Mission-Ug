import React, { useState } from "react";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import Head from "next/head";
import styled from "styled-components";

export default function Home({ posts }) {
  const [posted] = useState(posts.slice(0, 5000));

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(30);

  const [PageNumberLimit] = useState(8);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(8);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(posted.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posted.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrev = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % PageNumberLimit == 0) {
      setminPageNumberLimit(maxPageNumberLimit - PageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - PageNumberLimit);
    }
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setminPageNumberLimit(maxPageNumberLimit + PageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + PageNumberLimit);
    }
  };

  let PageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    PageIncrementBtn = <li onClick={handleNext}>...</li>;
  }

  let PageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    PageDecrementBtn = <li onClick={handlePrev}>...</li>;
  }

  return (
    <div className="container mx-auto px-2 mb-4">
      <Head>
        <title>
          SdaMissionUg | Stream & Download all Seventhday Adventist Music
        </title>
        <meta
          name="description"
          content="Seventhday Adventist Music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta
          property="og:title"
          content="SdaMissionUg | Stream & Download all Seventhday Adventist Music"/>
        <link rel="icon" href="/images/smlogo.png" />
      </Head>

      <FeaturedPosts />
      <div className="flex-row text-center justify-center">
        <div className=" text-center mb-1 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-600  rounded-full text-white px-8 py-3 cursor-pointer">
          <h1 className="font-large text-xl ">Sda Mission Radio</h1>
          <p className="font-small text-sm">
            This is the sound you breath, listen to your best sda songs, hymns,
            sermons and accapella all over the world
          </p>
        </div>
        <div className="flex text-center justify-center mt-4">
          <Iframe
            src="https://zeno.fm/player/sda-mission-radio"
          ></Iframe>
        </div>
      </div>
      <div className="lg:flex lg:gap-4">
        <div className="grid">
          <div className="px-0 my-4 grid grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
            {currentItems.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div>
            <Pagenumber>
              <Prev>
                <button
                  onClick={handlePrev}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  Prev
                </button>
              </Prev>
              {PageDecrementBtn}
              {renderPageNumbers}
              {PageIncrementBtn}
              <Next>
                <button
                  onClick={handleNext}
                  disabled={
                    currentPage == pages[pages.length - 1] ? true : false
                  }
                >
                  Next
                </button>
              </Next>
            </Pagenumber>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

const Pagenumber = styled.div`
  list-style: none;
  margin: 20px;
  display: flex;
  gap: 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  li {
    padding: 10px;
    background-color: gray;
    border: 1px solid white;
    cursor: pointer;
  }
  li.active {
    background-color: lightblue;
    color: black;
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: lightblue;
      color: black;
    }

    &:focus {
      outline: none;
    }
  }
  @media (max-width: 991px) {
    list-style: none;
    margin: 5px;
    width: 100%;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    li {
      padding: 10px;
      background-color: gray;
      border: 1px solid white;
      cursor: pointer;
    }
  }
`;

const Prev = styled.div`
  align-items: center;
  gap: 10px;
  background-color: gray;
  display: flex;
  position: relative;
  button {
    background-color: transparent;
    border: 1px solid white;
    color: #444;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Next = styled.div`
  align-items: center;
  gap: 10px;
  display: flex;
  background-color: gray;
  position: relative;
  button {
    background-color: transparent;
    border: 1px solid white;
    color: #444;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Iframe = styled.iframe`
text-align: center;
height: auto;
width: 80%;
top: 10px;
display: flex;
justify-content: center;
bottom: 10px;
overflow: hidden;
align-items: center;
`