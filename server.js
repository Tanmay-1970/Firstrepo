const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.static("public"));


app.get("/api/health",(req,res)=>{

res.json({
status:"ok",
time:new Date()
});

});


app.get("/api/ip",(req,res)=>{

res.json({

ip:
req.headers["x-forwarded-for"] ||
req.socket.remoteAddress

});

});


app.get("/api/server",(req,res)=>{

res.json({

node:process.version,

platform:process.platform,

uptime:process.uptime()

});

});


app.listen(PORT,()=>{

console.log(
`Running on ${PORT}`
);

});
