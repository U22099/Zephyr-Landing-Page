import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
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
    <main className="mt-4 flex flex-col justify-center items-center w-full p-2 gap-3 h-fit">
      <Carousel className="w-60 md:w-1/3 max-w-2/3 h-fit mb-2">
        <CarouselContent>
          {comments.length ? 
          comments.map((x, i) => <CarouselItem key={i} className="md:basis-1/3">
            <CommentCard className="flex flex-col gap-2 w-full p-2 aspect-square" data={{
              ...x,
              content: x.content.length > 120 ? (x.content.slice(0, 120)+"...") : x.content
            }} />
          </CarouselItem>) 
          : 
          <CarouselItem>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-2xl font-semibold">No Comments</span>
              </CardContent>
            </Card>
          </CarouselItem>}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link className="mt-8 text-primary underline" href="/comments">View All</Link>
      <AddComment setData={setComments} />
    </main>
  )
}

export function CommentCard({ data, className }) {
  return (
    <Card className="flex w-full justify-center items-start p-1 h-full">
      <CardContent className={className}>
        <header className="flex justify-between p-1 w-full text-muted-foreground">
          <h3>@{data.senderName}</h3>
          <p>{convertToTimeString(data.timestamp)}</p>
        </header>
        <p className="text-left text-md">{data.content}</p>
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
        if (limit.count > 0 && limit.count < 3) {
          localStorage.setItem("limit", JSON.stringify({
            count: limit.count + 1,
            timestamp: limit.timestamp
          }));
        } else if (limit.count >= 3 && diff < day) {
          setComment("");
          show("Limit Reached");
          return;
        } else if (diff > day && limit >= 3) {
          localStorage.setItem("limit", JSON.stringify({
            count: 1,
            timestamp: Date.now()
          }));
        }
      } else {
        localStorage.setItem("limit", JSON.stringify({
          count: 1,
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
      setComment("");
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
        <Textarea id="comment" placeholder="Type in a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        
        <Button className="w-full" disabled={!name || !comment} onClick={sendComment}>{loading ? <AiOutlineLoading className="animate-spin text-md"/> : (done ? done : "Send Comment")}</Button>
      </CardContent>
    </Card>
  )
}