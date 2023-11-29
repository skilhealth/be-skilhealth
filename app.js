const express = require('express')
const allRoutes = require("./routes")
const app = express()
const cors = require('cors')
const authRoute = require("./routes/auth.route")
const session = require('express-session')


const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(allRoutes)
app.use(authRoute)
app.use('/images', express.static('images'))
app.use(session())


app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})