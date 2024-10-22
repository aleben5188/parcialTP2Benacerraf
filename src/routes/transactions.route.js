import TransactionsController from "../controllers/transactions.controller.js"
import express from "express"

class TransactionsRoutes{
    constructor(){
        this.router = express.Router()
        this.controller = new TransactionsController()
    }

    start(){
        this.router.get("/transactions", this.controller.getAllTransactions)
        this.router.post("/transactions", this.controller.postTransactions)
        this.router.get("/size", this.controller.getTransactionsSize)
        this.router.delete("/transactions/delete/:id", this.controller.deleteTransaction)

        return this.router
    }
}

export default TransactionsRoutes