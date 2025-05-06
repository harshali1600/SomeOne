const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const PORT = 3001;

app.use(bodyParser.json())

// let institute = [{"id":01, "institute_Name":"Play House"},
//     {"id":02, "institute_Name":"School"},
//     {"id":03, "institute_Name":"colleage"},
//     {"id":01, "institute_Name":"Competitve Exam"}
// ]

let user_data = [];

app.post('/user_data/create', (req, res) =>{
    // const {user_id,institute_Name, Education_board, medium,class_category,Standard,Subject}= req.body;
    // user_data.push({user_id,institute_Name, Education_board, medium,class_category,Standard,Subject});
    // res.status(201).json({user_id,institute_Name, Education_board, medium,class_category,Standard,Subject})

     const userInformation= req.body;
    user_data.push(userInformation);
    res.status(201).json(userInformation)

} )

app.get('/user_data/list', (req,res)=>{
    if(user_data !== null){
        res.status(200).json(user_data)
    }else
    res.status(404).json({"message":"User data not found"});
})

app.get('/user_data/get/:id', (req,res)=>{
    let Id = parseInt(req.params.id);
    let data = user_data.find(i => i.user_id === Id)
    if(data !== null){
        res.status(200).json(data);
    }else
    res.status(404).json({"message":"User data not found"});
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})  