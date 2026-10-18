import express from 'express'
import { createEquipment, getEquipmentList, getEquipment, getVenueTypeList, createVenueType, getVenueType } from './database.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200'
}))

app.get("/", (req, res) => {
    res.send("It works!!")
})

// #######################################################################################
// EQUIPMENT end points
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
// #######################################################################################


// #######################################################################################
// VENUE-TYPE end points
app.get("/venue-type", async (req, res) => {
    const venueType = await getVenueTypeList()
    res.send(venueType)
})

app.get("/venue-type/:id", async (req, res) => {
    const id = req.params.id
    const venueType = await getVenueType(id)
    res.send(venueType)
})

app.post("/venue-type", async (req, res) => {
    const {title} = req.body
    const venueType = await createVenueType(title)
    res.status(201).send(venueType)
})


// #######################################################################################

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})