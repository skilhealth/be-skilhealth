const express = require('express')
const allRoutes = require("./routes")
const fileUpload = require('express-fileupload')
const app = express()
const cors = require('cors')


const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(allRoutes)
app.use(fileUpload)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})