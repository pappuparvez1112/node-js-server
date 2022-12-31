const express=require('express');

const app=express();

const cors=require("cors");

const bodyParser = require('body-parser');

// app.use(express.json());

// const router=express.Router({
//     caseSensitive:true,
// });
// app.use(router);

app.use(cors());
app.use(bodyParser.json())



const users=["asad",'moin','sadddam','kalam','salam','jobbar'];

// app.get('/data',(req,res)=>{
//     res.json({
//         name:"Bangladesh",
//         description:"Land of emotions"
//     });
// });
app.get('/users/:id',(req,res)=>{
    // console.log(req.params.id);
    const userId=req.params.id;
    const name=users[userId];
    res.send({userId,name});
});

app.post('/addUser',(req,res)=>{
    // console.log("data recieved",req.body);
    const user=req.body;
    user.id=55;
    res.send(user);

})

app.listen(3000,()=>{
    console.log('listening on port 3000');
});
