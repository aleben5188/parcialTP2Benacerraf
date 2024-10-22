import Factory from "../models/Factory.js"

class TransactionsService{

    constructor(){
        this.model = Factory.get("")
    }
    
    getAllTransactions = async () => {
        return this.model.getAllTransactions()
    }

    postTransactions = async (data) => {
        const newTransaction = await this.model.postTransactions(data)
        return newTransaction
    };

    getTransactionsSize = async () => {
        const mensaje = await this.model.getTransactionsSize()
        return mensaje
    }

    deleteTransaction = async (id) => {
        return this.model.deleteTransaction(id)
    }

}

export default TransactionsService