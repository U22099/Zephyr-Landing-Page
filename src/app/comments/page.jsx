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
      <section className="flex flex-col gap-4 p-4">
        <AddComment setData={setComments} />
        {comments.map((x, i) => <CommentCard className="flex w-full justify-center items-start p-1 h-full" className2="flex flex-col gap-2 w-full p-2" data={x} key={i} />)}
      </section>
    </main>
  )
}