import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import Link from "next/link";

export function Comments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(setComments);
  }, []);
  return (
    <main className="flex justify-center items-center w-full p-2 gap-3">
      <ScrollArea>
        {comments.map((x, i) => 
          <CommentCard key={i} data={x} />)}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <Link className="text-primary underlined" to="/comment">View All</Link>
      <AddComment />
    </main>
  )
}

function CommentCard({ data }) {
  return (
    <Card className="flex w-full justify-center items-center p-2">
      <CardContent className="flex flex-col gap-2">
        <header className="flex justify-between p-1">
          <h3>@{data.senderName}</h3>
          <p>{convertToTimeString(data.timestamp)}</p>
        </header>
        <p className="text-left text-md">{data.content.length > 500 ? data.content.slice(0, 500)+"..." : data.content}</p>
      </CardContent>
    </Card>
  )
}

function AddComment() {
  const [done, setDone] = useState("");
  const [loading, setLoading] = useState("");
  const [name, setName] = useState(localStorage.getItem("name") || null);
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
      const day = 24 * 60 * 60 * 1000;
      const diff = Date.now() - limit.timestamp;
      if ((limit.count > 2) && (diff < day)) {
        show("Limit Reached");
        return;
      } else if ((diff > day) || !limit) {
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
        return;
      } else {
        show("Error");
        return;
      }
    } catch (err) {
      console.log(err);
      return;
    } finally {
      setLoading(false);
    }
  }
  return (
    <Card className="p-2 w-full flex justify-center items-center">
      <CardContent className="flex flex-col gap-2 w-full">
        <Label htmlFor="name">Name*</Label>
        <Input id="name" defaultValue={name} placeholder="Enter a name" onChange={(e) => setName(e.target.value)} />
        
        <Label htmlFor="comment">Comment*</Label>
        <Textarea id="comment" placeholder="Type in a comment" onChange={(e) => setComment(e.target.value)} />
        
        <Button className="w-full" disabled={!name || !comment} onClick={sendComment}>Send Comment</Button>
      </CardContent>
    </Card>
  );
}