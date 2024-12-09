"use client";
import { Header } from "@/components/home/header";
import { CommentCard, AddComment } from "@/components/home/comments";
import { getAllComments } from "@/utils";
import { useState, useEffect } from "react";

export default function Home(){
  const [ comments, setComments ] = useState([]);
  useEffect(() => {
    getAllComments(setComments);
  }, []);
  return(
    <main className="w-full flex flex-col gap-2">
      <Header />
      <AddComment setData={setComments} />
      {comments.map((x, i) => <CommentCard data ={x} key={i} />)}
    </main>
  )
}