import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.send('OI')
})

app.listen(3333)