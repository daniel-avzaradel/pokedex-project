const cors = require('cors')
const exp = require('express');
const app = exp();
const bcrypt = require('bcrypt');

app.use(cors())

let db = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'daniel88',
      database : 'pokedex',
      port: 5432
    }
});

app.set("db", db);

const bp = require('body-parser')

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.post('/login', (req, res) => {

    console.log(req.body);
    // res.send({message: 'ok'})
    db
    .select('*').from('users')
    .where({email: req.body.email})
    .then(user => {
        if(user.length > 0) {
            console.log(req.body.password, user[0].password);
            const match = bcrypt.compareSync(req.body.password, user[0].password);
            console.log(match);
            if(match) {
                res.send({message: 'ok'})
            } else {
                res.send({message: 'incorrect email or password'})
            }
        }
    });
})

app.listen(5000, () => {
    console.log(`Listening to port 5000`);
})