let request: IDBOpenDBRequest
let db: IDBDatabase
let version = 1

export type Lap = {
    id: string
    type: "pomodoro" | "short break" | "long break"
    time: number
}

const storeName = "laps"
const dbName = "pomodoroLaps"

export const initDB = (): Promise<boolean> => {
    return new Promise((resolve: (value: boolean | PromiseLike<boolean>) => void) => {
        request = indexedDB.open(dbName)

        request.onupgradeneeded = () => {
            db = request.result

            if (!db.objectStoreNames.contains(storeName)) {
                console.log("Creating users store")
                db.createObjectStore(storeName, { keyPath: "id" })
            }
        }

        request.onsuccess = (event) => {
            db = (event!.target! as unknown as { result: IDBDatabase }).result
            version = db.version
            console.log("request.onsuccess - initDB", version)
            resolve(true)
        }

        request.onerror = () => {
            resolve(false)
        }
    })
}

export const addLaps = <T>(data: T): Promise<T | string> => {
    return new Promise((resolve: (value: T | string | PromiseLike<T>) => void) => {
        request = indexedDB.open(dbName, version)

        request.onsuccess = (event) => {
            console.log("request.onsuccess - addData", data)
            db = (event!.target! as unknown as { result: IDBDatabase }).result

            const tx = db.transaction(storeName, "readwrite")
            const store = tx.objectStore(storeName)
            store.add(data)
            resolve(data)
        }

        request.onerror = () => {
            const error = request.error?.message
            if (error) {
                resolve(error)
            } else {
                resolve("Unknown error")
            }
        }
    })
}

export const getAllLaps = <Lap>(): Promise<Lap[]> => {
    return new Promise(resolve => {
        request = indexedDB.open(dbName, version)

        request.onsuccess = (event) => {
            console.log("request.onsuccess - getAllData")
            db = (event!.target! as unknown as { result: IDBDatabase }).result
            const tx = db.transaction(storeName, "readonly")
            const store = tx.objectStore(storeName)
            const res = store.getAll()
            res.onsuccess = () => {
                console.log(res.result)
                resolve(res.result)
            }
        }
    })
}

export const deleteOneLap = (id: string): Promise<boolean> => {
    return new Promise(resolve => {
        request = indexedDB.open(dbName, version)

        request.onsuccess = (event) => {
            console.log("request.onsuccess - deleteLap", id)
            db = (event!.target! as unknown as { result: IDBDatabase }).result
            const tx = db.transaction(storeName, "readwrite")
            const store = tx.objectStore(storeName)
            const res = store.delete(id)

            res.onsuccess = () => {
                resolve(true)
            }
            res.onerror = () => {
                resolve(false)
            }
        }
    })
}

export const deleteAllLaps = (): Promise<boolean> => {
    return new Promise(resolve => {
        request = indexedDB.open(dbName, version)

        request.onsuccess = (event) => {
            console.log("request.onsuccess - clearedLaps")
            db = (event!.target! as unknown as { result: IDBDatabase }).result
            const tx = db.transaction(storeName, "readwrite")
            const store = tx.objectStore(storeName)
            const res = store.clear()

            res.onsuccess = () => {
                resolve(true)
            }
            res.onerror = () => {
                resolve(false)
            }
        }
    })
}