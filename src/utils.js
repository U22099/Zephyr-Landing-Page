import mongoose from 'mongoose';
import axios from "axios";


const connection = {};

export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL);
        connection.isConnected = db.connections[0].readyState;
    } catch(err) {
        console.log("Error at connectToDb " , err)
        return false;
    }
}

export const getAllComments = async (setData) => {
  try {
    const res = await axios.get("/api/comments/all");
    if (res.status === 200) {
      setData(res.data.data);
    }
  } catch (err) {
    console.log(err, err.message, "getAllComments")
  }
}


export const getComments = async (setData) => {
  try {
    const res = await axios.get("/api/comments");
    if(res.status === 200){
      setData(res.data.data);
    }
  } catch (err) {
    console.log(err, err.message, "getComments")
  }
}

export const addComment = async (data) => {
  try {
    const res = await axios.post("/api/comments", data);
    if(res.status === 200) return true;
  } catch (err) {
    console.log(err, err.message, "getData");
    return false;
  }
}

export function convertToTimeString(timestamp) {
  const aDay = 24 * 60 * 60 * 1000;
  const diff = Date.now() - timestamp;

  if (diff > aDay) {
    if (diff < 2 * aDay) {
      return "Yesterday";
    } else if (diff < 7 * aDay) {
      return new Date(timestamp).toLocaleString("en-UK", { weekday: "long" });
    } else {
      return new Date(timestamp).toLocaleDateString("en-UK", { day: "numeric", month: "numeric", year: "2-digit" });
    }
  } else {
    return new Date(timestamp).toLocaleTimeString("en-UK", { hour12: true, hour: "numeric", minute: "numeric" });
  }
}

console.log("Hey dev😉","careful with the tokens and storage data😂", "web github repo: https://github.com/U22099/Zephyr-Landing-Page");