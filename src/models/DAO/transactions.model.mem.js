class TransactionsMemModel{
    constructor(){
        this.transactions = [
            { id: 1, tipo: "retiro" , monto: 1500, destinatario: "Marisa Fernández"},
            { id: 2, tipo: "depósito", monto: 1800, destinatario: "Juan Gómez" },
            { id: 3, tipo: "depósito" , monto: 2500, destinatario: "Jimena Gruse"},
            { id: 4, tipo: "depósito", monto: 2800, destinatario: "Matías Berna" },
        ]    

    }
    
    getAllTransactions = async () => {
        return this.transactions
    }
    
    postTransactions = async (transaction) => {
        transaction.id = this.transactions[this.transactions.length - 1].id + 1
        this.transactions.push(transaction)
        return transaction
    }

    getTransactionsSize = async () => {
        const size = this.transactions.length
        const mensaje = "Cantidad de transacciones: " + size
        return mensaje
    }

    deleteTransaction = async (id) => {
        const index = this.transactions.findIndex((e) => e.id == id)
        this.transactions.splice(index, 1)
        const mensaje = "La transacción de id = " + id + " fue eliminada"
        return mensaje
    }

}
export default TransactionsMemModel