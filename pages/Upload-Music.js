import React from "react";
import Link from "next/link";
import Head from "next/head";

const Upload = () => {
  return (
    <>
      <Head>
        <title>
          Upload Your Seventhday Adventist Music Here
        </title>
        <meta
          name="description"
          content="Upload Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson Here"
        />
        <meta
          property="og:title"
          content="Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson "
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

      <div className="w-full text-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-500 text-white px-8 py-4 rounded-lg mb-10 my-6">
        <div className="text-center text-4xl mb-1 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-300 rounded-md text-white px-8 py-3 mx-10">
          <h1>Upload Your Sda Music</h1>
        </div>
        <p>
          If You are a Choir or an Individual who would like to upload sda music
          on the web, please contact us via:
        </p>
        <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-pink-500 rounded-full text-white px-4 py-1">
          <h3>Email</h3>
        </div>
        <p className="cursor-pointer">
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            sdamissionug@gmail.com
          </Link>
        </p>
        <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-green-500 rounded-full text-white px-4 py-1">
          <h3>WhatsApp</h3>
        </div>
        <p className="cursor-pointer">
          <Link href="https://www.whatsapp.com/">+256772951826</Link>
        </p>
        <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-500 rounded-full text-white px-4 py-1">
          <h3>FaceBook</h3>
        </div>
        <p className="cursor-pointer">
          <Link href="https://www.facebook.com/">sdamissionug@fb</Link>
        </p>
      </div>
    </>
  );
};

export default Upload;
