import React from 'react';
import Link from 'next/link';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 pb-2 ">
    <div className="relative overflow-hidden shadow-md pb-40 mb-1 lg:flex text-center justify-center">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="object-top absolute h-60 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>
    <h1 className="transition duration-700 text-center mb-3 cursor-pointer hover:text-pink-600 text-lg sm:text-sm font-semibold truncate hover:text-clip">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-sm font-medium rounded-full text-white px-2 py-1 cursor-pointer">
          Download
        </span>
      </Link>
    </div>
  </div>
);

export default PostCard;
