import { Plugins } from '@capacitor/core'
import * as CapacitorSQLWebPlugin from 'capacitor-data-storage-sqlite'
import StorageAPIWrapper from './StorageAPIWrapper'

const { Device, CapacitorDataStorageSqlite } = Plugins

const storage = async () => {
  const info = await Device.getInfo()
  console.log('platform ', info.platform)

  if (info.platform === 'ios' || info.platform === 'android') {
    console.log('storage in ios android ', storage)
    return CapacitorDataStorageSqlite
  } else {
    console.log('storage in web ')
    return CapacitorSQLWebPlugin.CapacitorDataStorageSqlite
  }
}

const StorageAPI = new StorageAPIWrapper(storage())

export {
  StorageAPI
}
