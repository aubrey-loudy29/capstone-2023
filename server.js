const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')

const app = express()

const corsOptions = {
  origin: 'https://localhost:8000'
}

//middlwares
app.use(cors(corsOptions))

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true
  })
)

//api test

app.get('/', (req, resp) => {
  resp.json({ message: 'Server live' })
})

//port
const PORT = process.env.PORT || 8888

//server
app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`)
})
