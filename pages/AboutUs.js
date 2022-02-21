import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>
          About Us | Sdamission Ug For All Seventhday Adventist music
        </title>
        <meta
          name="description"
          content="Sdamissionug.com finds its strength in proclaiming the word of God
            through Sda music, Sda lesson, Sda, granite bay church sda, sda church, sda sabbath school lesson"
        />
        <meta
          property="og:title"
          content="Seventhday Adventist Music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
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
      <div className="text-center">
        <div className="text-center text-4xl mb-1 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-300 rounded-full text-white px-8 py-3 mx-10 my-10">
          <h1> About Us </h1>
        </div>
        <div className=" text-centerjustify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-600 text-white px-8 py-3 rounded-lg mx-6 mb-10 my-6">
          <h2 className=" text-centtext-lger italic font-semibold border-4 p-2 text-lg border-white-600 mb-4">
            Sdamissionug.com finds its strength in proclaiming the word of God
            through music and streaming lessons, bible study, preachings and
            sermons.
          </h2>
          <div>
            <Link href="/">
              <Image
                alt="about"
                height="200px"
                width="300px"
                className="align-middle rounded-full "
                src="/images/sdaslogo.jpg"
              />
            </Link>
          </div>
          <p>
            Sda Mission Ug is a fully equiped sda music website that provides
            You with all kinds of sda songs like praising songs, worshiping
            songs, pathfinders songs, accapella songs, preachings, sermons,
            bible studies & hymn songs all over the whole world for you to
            stream, listen, and download at no cost.
          </p>
          <p>
            It was officially crafted and designed by{" "}
            <a
              style={{ color: "skyblue" }}
              href="https://joshcreativeprograma.netlify.app/"
              target="_blank"
            >
              Bwambale Joshua
            </a>{" "}
            a full stack developer for the love of Seventh Day Adventists.
          </p>
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-300 rounded-full text-white px-4 py-1">
            <h3> Sda Mission Ug commitment </h3>
          </div>
          <p>
            <span className="text-lg font-bold font-lg "> I </span>ts commitment
            includes Live streaming sermons, lessons, bible studies, preachings,
            and sda music through the{" "}
            <a style={{ color: "skyblue" }} href="/">
              SDA MISSION ONLINE RADIO
            </a>{" "}
            on this website, providing the users with the free downloads of
            music in Audio and Video formats, giving opportunities to various
            choirs all over the world a chance of Uploading thier music to
            youtube and the web as well as promoting All sda choirs in the whole
            world through streaming and uploading their music to this website.
          </p>
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-300 rounded-full text-white px-4 py-1">
            <h3> About the Sda Mission Ug Work </h3>
          </div>
          <p>
            Sda mission Ug 's work today reaches people in more than 200
            countries and areas of the world.It preaches the gospel through
            music, teaches lessons, sermons, bible studies on the radio and
            spreads the gospel on radio and very soon on television, updates you
            with the latest lessons, preachings and news happening in the Sda
            field to alert the world and provide comforting relief.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
