const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
   .then(()=>{
     console.log("connection succesful");
   })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
     from:"neha",
     to: "priya",
     msg: "HIIIII PRIYAAAAAAA",
     created_at: new Date(),
    },
    {
     from:"hasini",
     to: "nihal",
     msg: "How are youuuuuu",
     created_at: new Date(),
    },
    {
     from:"krishna",
     to: "gaythri",
     msg: "reached safely??",
     created_at: new Date(),
    },
    {
     from:"tony",
     to: "priya",
     msg: "HIIIII PRIYAAAAAAA",
     created_at: new Date(),
    },
];

Chat.insertMany(allChats);