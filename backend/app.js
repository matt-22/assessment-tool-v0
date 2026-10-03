import express from 'express'
import { createEquipment, getEquipmentList, getEquipment } from './database.js'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("It works!!")
})

app.get("/equipment", async (req, res) => {
    const equipment = await getEquipmentList()
    res.send(equipment)
})

app.get("/equipment/:id", async (req, res) => {
    const id = req.params.id
    const equipment = await getEquipment(id)
    res.send(equipment)
})

app.post("/equipment", async (req, res) => {
    const {title} = req.body
    const equipment = await createEquipment(title)
    res.status(201).send(equipment)
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})