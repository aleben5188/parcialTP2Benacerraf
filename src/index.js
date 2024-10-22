import express from "express"
import TransactionsRoutes from "./routes/transactions.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use("/", new TransactionsRoutes().start())


app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))