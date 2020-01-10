
const StorageAPIWrapper = (storage) => {
  return {
    openStore: (options, cb) => {
      storage.openStore(options)
        .then(({ result }) => cb(null, result))
        .catch(cb)
    },
    setTable: (table, cb) => {
      storage.setTable(table)
        .then(({ result, message }) => cb(null, result, message))
        .catch(cb)
    },
    getAllKeys: cb => {
      storage.keys()
        .then(({ keys }) => cb(null, keys))
        .catch(cb)
    },
    getItem: (key, cb) => {
      storage.get({ key })
        .then(({ value }) => cb(null, value))
        .catch(cb)
    },
    setItem: (key, value, cb) => {
      storage.set({ key, value })
        .then(() => cb())
        .catch(cb)
    },
    removeItem: (key, cb) => {
      storage.remove({ key })
        .then(() => cb())
        .catch(cb)
    },
    clear: cb => {
      storage.clear()
        .then(() => cb())
        .catch(cb)
    }
  }
}
export default StorageAPIWrapper
