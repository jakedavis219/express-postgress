const { Client } = require('pg');

export const client = new Client({
    host: 'localhost',
    user: 'jakedavis',
    password: 'password',
    database: 'developer-practice-db',
    port: 5432 // should probs abstract this stuff out but oh well
});

client.connect()
    .then(() => console.log('Connected to database!'))
    .catch((err: Error) => console.error('Error connecting to database', err))

