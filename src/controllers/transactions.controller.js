import TransactionsService from "../services/transactions.service.js";

class TransactionsController {
  constructor() {
    this.service = new TransactionsService();
  }

    getAllTransactions = async (req, res) => {
    const transactions = await this.service.getAllTransactions()
    res.status(200).send(transactions)

}
  
    postTransactions = async (req, res) => {
    const transaction = req.body
    if(JSON.stringify(req.body)== "{}"){
        throw new Error("Esta transacción está vacía")
    }
    const newTransaction = await this.service.postTransactions(transaction)
    res.send(newTransaction)
}

    getTransactionsSize = async (req, res) => {
        const mensaje = await this.service.getTransactionsSize()
        res.status(200).send(mensaje)
    }

    deleteTransaction = async (req, res) => {
        const { id } = req.params 
        const deletedTransaction = await this.service.deleteTransaction(id)
        res.send(deletedTransaction)
    }

}

export default TransactionsController
