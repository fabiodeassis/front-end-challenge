import localData from '@/_services/LocalData'

class TransactionStatus {
  constructor (data) {
    this.id = data.id
    this.description = data.description
  }
}

class CardBrand {
  constructor (data) {
    this.id = data.id
    this.name = data.name
  }
}

export default class Transaction {
  constructor (data) {
    this.id = data.id
    this.clientId = data.clientId
    this.amount = data.amount
    this.date = data.date
    this.status = new TransactionStatus(this.getStatus(data.statusId))
    this.bin = data.bin
    this.brand = new CardBrand(this.getBrand(data.brandId))
    this.clientName = data.clientName
  }

  getStatus (id) {
    const config = localData.getConfig()
    return config.transactionStatus.find((item) => {
      return item.id === id
    })
  }

  getBrand (id) {
    const config = localData.getConfig()
    return config.cardBrands.find((item) => {
      return item.id === id
    })
  }
}
