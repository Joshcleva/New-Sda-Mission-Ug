import React from "react";
import Head from "next/head";
import Link from "next/link";

const Donate = () => {
  return (
    <div className="mt-4  px-4 mb-4">
      <Head>
        <title>Donate Us | Sda Mission Ug</title>
        <meta
          name="description"
          content="Please consider any gift you offer to us appreciatable for Seventhday Adventist music, Seventhday Adventist hymnal Sda lesson, sda mission story, Sda, granite bay church sda, sda church, sda sabbath school lesson"
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

      <div className="w-full text-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-gray-500 text-white px-8 py-3 rounded-lg mb-10">
        <div className="text-center text-lg mb-1 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-300 rounded-full text-white px-4 py-3 mx-10 ">
          <h1> Donations</h1>{" "}
        </div>

        <section>
          <h2>
            Sda Mission Ug has done great work in proclaiming the gospel through
            providing You with all Kinds of gospel music, sermons, lessons and
            preachings all over the whole world.It also encourages and uplifts
            all Choirs / sda songs to get a youtube channel so as to proclaim
            the word of our Almighty God further as well as earning from youtube
            if all standards are met.{" "}
          </h2>
          <h2>
            Through our work, We have got financial complications and We believe
            You are the solution to supporting us.{" "}
          </h2>{" "}
          <div>
            <strong>
              Please consider any gift you offer to us appreciatable.You can
              support us through:{" "}
            </strong>
          </div>
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-pink-500 rounded-full text-white px-4 py-1">
            <h3> PayPal </h3>
          </div>
          <p className="cursor-pointer">
            <Link href="https://www.paypal.com/myaccount/transfer/homepage/buy/preview">
              sdamissionug @gmail.com
            </Link>
          </p>
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-green-500 rounded-full text-white px-4 py-1">
            <h3> ChipperCash</h3>
          </div>
          <p className="cursor-pointer">
            <Link href="https://chippercash.com">@clarkrex</Link>
          </p>
          <div className="text-center text-lg mb-2 mt-2 justify-center transition duration-500 ease transform hover:-translate-y-1 inline-block items-center lg:items-center bg-blue-500 rounded-full text-white px-4 py-1">
            <h3> Mobile Money </h3>
          </div>
          <p className="cursor-pointer">
            <Link href="tel:*165*1*1*0772951826#"> 0772951826 </Link>
          </p>
        </section>
      </div>
    </div>
  );
};
export default Donate;
