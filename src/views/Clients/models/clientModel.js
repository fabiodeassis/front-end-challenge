import localData from '@/_services/LocalData'

class ClientStatus {
  constructor (data) {
    this.id = data.id
    this.description = data.description
  }
}

class Document {
  constructor (data) {
    this.type = data.type
    this.number = data.number
  }
}

class Partner {
  constructor (data) {
    this.name = data.name
    this.document = data.document
  }
}

export default class Client {
  constructor (data) {
    this.id = data.id
    this.address = data.address
    this.city = data.city
    this.document = new Document(data.document || {})
    this.id = data.id
    this.name = data.name
    this.neighborhood = data.neighborhood
    this.partners = this.getPartners(data.partners || [])
    this.status = new ClientStatus(this.getStatus(data.status) || {})
  }

  getStatus (id) {
    const config = localData.getConfig()
    return config.clientStatus.find((item) => {
      return item.id === id
    })
  }

  getPartners (partners) {
    let result = []
    for (let i = 0; i < partners.length; i++) {
      result.push(new Partner(partners[i]))
    }
    return result
  }
}
