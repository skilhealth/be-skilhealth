const express = require('express')
const allRoutes = require("./routes")
const app = express()
const cors = require('cors')
const authRoute = require("./routes/auth.route")


const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(allRoutes)
app.use(authRoute)


app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})