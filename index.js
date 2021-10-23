
const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors())

app.use(express.json())
const port = 5000 ;


app.get('/', (req, res)=>{
    res.send('hello fadfadfafrom second node to learn and express adfaf fdfaf exited')
});

const users =[
    {
    id: 0, 
    name: 'akash',
    email: 'akash@gmail.com',
    phone: '01754859345',
},
    {
    id: 1, 
    name: 'batash',
    email: 'akash@gmail.com',
    phone: '01754859345',
},
    {
    id: 2, 
    name: 'emran',
    email: 'akash@gmail.com',
    phone: '01754859345',
},
    {
    id: 3, 
    name: 'pakhi',
    email: 'akash@gmail.com',
    phone: '01754859345',
},
    {
    id: 4, 
    name: 'salsabil',
    email: 'akash@gmail.com',
    phone: '01754859345',
},
    {
    id: 5, 
    name: 'kabir',
    email: 'akash@gmail.com',
    phone: '01754859345',
}
]
app.get('/users', (req, res)=>{
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }else{
        res.send(users)
    }
    res.send(users)
});

// app method 
app.post('/users', (req, res)=>{
    
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('user hitting the post', req.body);
    res.json(newUser)
})


app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});
app.listen(port , ()=>{
    console.log('listening to port', port);
})