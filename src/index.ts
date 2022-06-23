import express from 'express';

const PORT = 3001;

const app = express()
const router = express.Router()

app.use(express.json())

router.get("/", (req, res) => {
  res.send({hello: "Worlds"})
})

app.use(router)


app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})