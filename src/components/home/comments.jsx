import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { addComment, getComments, convertToTimeString } from "@/utils";
import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Link from "next/link";

export function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(setComments);
  }, []);
  return (
    <main className="mt-4 flex flex-col justify-center items-center w-full p-2 gap-3">
      <Carousel>
        <CarouselContent>
          {comments.length ? 
          comments.map((x, i) => <CarouselItem key={i}>
            <CommentCard data={x} />
          </CarouselItem>) 
          : 
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">No Comments</span>
              </CardContent>
            </Card>
          </CarouselItem>}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link className="text-primary underline" href="/comments">View All</Link>
      <AddComment setData={setComments} />
    </main>
  )
}

export function CommentCard({ data }) {
  return (
    <Card className="flex w-full justify-center items-center p-1 h-40">
      <CardContent className="flex flex-col gap-2 w-full p-1">
        <header className="flex justify-between p-1 w-full text-muted-foreground">
          <h3>@{data.senderName}</h3>
          <p>{convertToTimeString(data.timestamp)}</p>
        </header>
        <p className="text-left text-md">{data.content.length > 500 ? (data.content.slice(0, 500)+"...") : data.content}</p>
      </CardContent>
    </Card>
  )
}

export function AddComment({ setData }) {
  const [done, setDone] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState();
  const [comment, setComment] = useState("");
  const show = (text) => {
    setLoading(false);
    setDone(text);
    setTimeout(() => {
      setDone("");
    }, 2000);
  }
  const sendComment = async () => {
    try {
      setLoading(true);
      const limit = JSON.parse(localStorage.getItem("limit"));
      if (limit) {
        const day = 24 * 60 * 60 * 1000;
        const diff = Date.now() - limit.timestamp;
        if ((limit.count > 2) && (diff < day)) {
          show("Limit Reached");
          return;
        } else if (diff > day) {
          localStorage.setItem("limit", JSON.stringify({
            limit: 1,
            timestamp: Date.now()
          }));
        }
      } else {
        localStorage.setItem("limit", JSON.stringify({
          limit: 1,
          timestamp: Date.now()
        }));
      }
      localStorage.setItem("name", name);
      const data = {
        content: comment,
        timestamp: Date.now(),
        senderName: name
      };
      const res = await addComment(data);
      if (res) {
        show("Done");
        setData(prev => [data, ...prev]);
      } else {
        show("Error");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);
  return (
    <Card className="p-2 w-full flex justify-center items-center">
      <CardContent className="flex flex-col gap-2 w-full">
        <Label htmlFor="name">Name*</Label>
        <Input id="name" defaultValue={name} placeholder="Enter a name" onChange={(e) => setName(e.target.value)} />
        
        <Label htmlFor="comment">Comment*</Label>
        <Textarea id="comment" placeholder="Type in a comment" onChange={(e) => setComment(e.target.value)} />
        
        <Button className="w-full" disabled={!name || !comment} onClick={sendComment}>{loading ? <AiOutlineLoading className="animate-spin text-md"/> : (done ? done : "Send Comment")}</Button>
      </CardContent>
    </Card>
  )
}