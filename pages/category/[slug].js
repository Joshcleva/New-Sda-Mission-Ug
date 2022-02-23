import React, { useState } from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';
import Head from "next/head";

const CategoryPost = ({ posts, post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

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
    <>
      <Head>
        <title>Categories | Sdamissionug</title>
        <meta
          name="description"
          content="Download Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta
          property="og:title"
          content="Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <link rel="icon" href="/images/smlogo.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,700italic,400italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <div className="container mx-auto px-2 mb-8 mt-8">
        <div className="lg:gap-4">
          <div className="px-0 my-2 grid grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
            {currentItems.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
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
                disabled={currentPage == pages[pages.length - 1] ? true : false}
              >
                Next
              </button>
            </Next>
          </Pagenumber>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
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
    font-size: 1.5rem;
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
