const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/api/customers', (req, res) => {
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '주경서',
          'birthday' : '860328',
          'gender' : '남자',
          'job' : '유부남'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '엄혜영',
          'birthday' : '900821',
          'gender' : '여자',
          'job' : '유부녀'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '박준환',
          'birthday' : '860327',
          'gender' : '남자',
          'job' : '쏠로'
        }
    ])

})

app.listen(port, ()=> console.log(`Listening on port ${port}`));
