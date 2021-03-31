const express = require('express')
const app = express()
const PORT = 5001
const { connect } = require('./config/mongodb')
const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(routes)

connect().then(async (database) => {
  console.log(`Mongo succesfully connected`)
  app.listen(PORT, () => {
    console.log(`Host connected on port ${PORT}`)
  })
})
