import React from "react";
import Navbar from "@/components/Navbar";
import Author from "@/components/Author";
import BlogsCard from "@/components/BlogsCard";
import Feacture from "@/components/Feacture"; 
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Feacture />
      <BlogsCard />
      <CommentSection postId="1" />
      <Author />
      <Footer />
    </div>
  );
};

export default Page;
