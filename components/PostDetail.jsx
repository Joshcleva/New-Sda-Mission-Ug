import React from "react";
import Head from "next/head";
import Image from "next/image";
import { grpahCMSImageLoader } from "../util";
import ReactPlayer from 'react-player';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-3">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="container mx-0">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="Download More free, Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta
          property="og:post"
          content="Download More Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <link rel="icon" href={`${post.featuredImage.url}`} />
      </Head>
      <div className="bg-white shadow-lg rounded-lg pb-1 mb-1 mt-6">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          <div className="block lg:flex text-center items-center justify-center mb-3">
            <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post.choir.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.choir.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg md:text-clip truncate hover:text-clip">
                {post.choir.name}
              </p>
            </div>
          </div>
          <h1 className="mb-3 text-3xl text-center font-semibold">
            {post.title}
          </h1>
          <div
            className="items-center p-3 justify-center "
            style={{ marginTop: "-30px" }}
          >
            <div className="justify-center text-center">
              <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block mt-2 bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                Download Audio
              </span>
              <div>
                <iframe
                  className=" font-medium justify-center"
                  src={`https://ytmp4.buzz/api/button/mp3/${post.downloadable}`}
                  width="100%"
                  allowtransparency="true"
                  scrolling="no"
                  style={{
                    border: "none",
                    height: "350px",
                  }}
                ></iframe>
                <div className="justify-center text-center lg:mt-">
                  <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                    Download Video
                  </span>
                </div>
                <iframe
                  className=" font-medium justify-center "
                  src={`https://ytmp4.buzz/api/button/videos/${post.downloadable}`}
                  width="100%"
                  allowtransparency="true"
                  scrolling="no"
                  style={{
                    border: "none",
                    height: "auto",
                  }}
                ></iframe>
              </div>
              <div>
                <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-red-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                  Song Preview
                </span>
                <div style={{ position: "relative", padding: "56.25%" }}>
                  <ReactPlayer
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "-4px",
                    }}
                    url={`${post.player}`}
                    width="90%"
                    height="90%"
                    controls={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
