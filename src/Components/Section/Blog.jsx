import React, { useState } from "react";
import blog1 from "/public/blog1.svg";
import blog2 from "/public/blog2.svg";
import blog3 from "/public/blog3.svg";

const Blog = () => {
  // Sample blog data
  const allBlogPosts = [
    {
      id: 1,
      title: "Fast Delivery Solutions for E-commerce",
      excerpt: "Learn how to optimize your delivery process for online stores.",
      image: blog1,
    },
    {
      id: 2,
      title: "Logistics Trends in 2023",
      excerpt: "Discover the latest innovations in the shipping industry.",
      image: blog2,
    },
    {
      id: 3,
      title: "Reducing Carbon Footprint in Shipping",
      excerpt: "Sustainable practices for modern logistics companies.",
      image: blog3,
    },
    {
      id: 4,
      title: "International Shipping Regulations",
      excerpt: "Navigate the complex world of cross-border deliveries.",
      image: blog2,
    },
    {
      id: 5,
      title: "Last-Mile Delivery Optimization",
      excerpt: "Strategies to improve the final stage of package delivery.",
      image: blog1,
    },
    {
      id: 6,
      title: "Technology in Modern Logistics",
      excerpt: "How AI and automation are transforming the shipping industry.",
      image: blog3,
    },
    {
      id: 7,
      title: "Customer Experience in Delivery Services",
      excerpt: "Building loyalty through exceptional shipping experiences.",
      image: blog3,
    },
    {
      id: 8,
      title: "Warehouse Management Best Practices",
      excerpt: "Optimize your storage and distribution processes.",
      image: blog2,
    },
    {
      id: 9,
      title: "Delivery Route Planning",
      excerpt: "Efficient strategies for planning delivery routes.",
      image: blog1,
    },
  ];

  // State to track how many blog posts to show
  const [visiblePosts, setVisiblePosts] = useState(3);

  // Function to load more posts
  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="bg-[#F0F0F0] py-16 md:py-20">
      <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Our Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
            Stay updated with the latest news and insights from our logistics
            experts
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.slice(0, visiblePosts).map((post) => (
            <div
              key={post.id}
              className="relative h-[350px] rounded-lg overflow-hidden shadow-md"
            >
              {/* Blog Image */}
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay with 60% opacity */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h4 className="text-white text-xl font-bold mb-3 font-poppins">
                  {post.title}
                </h4>
                <p className="text-white text-sm mb-4 font-poppins">
                  {post.excerpt}
                </p>
                <button className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded w-fit text-sm font-poppins transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - only show if there are more posts to load */}
        {visiblePosts < allBlogPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMorePosts}
              className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-2 px-6 rounded-lg transition duration-300 font-poppins"
            >
              More Blog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
