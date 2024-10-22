import TransactionsMemModel from "./DAO/transactions.model.mem.js"

class Factory{
static get(){
       return new TransactionsMemModel();
    }
}

export default Factory