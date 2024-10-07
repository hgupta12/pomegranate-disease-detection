import * as SQLite from "expo-sqlite"

export const connectToDatabase = async () => {
    return await SQLite.openDatabaseAsync("pomegranate.db")
}

export const createTables = async (db : SQLite.SQLiteDatabase) => {
    const historyQuery = `
        CREATE TABLE IF NOT EXISTS history(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            imagePath TEXT,
            type TEXT,
            location TEXT,
            time INTEGER
        )
    `
    try {
        await db.execAsync(historyQuery)
    } catch (error) {
        console.error(error)
        throw Error("Could not create tables")
    }
}

export const addHistoryItem = async (db : SQLite.SQLiteDatabase, image: ImageType) => {
    const insertQuery = `
   INSERT INTO history (imagePath, type, location, time)
   VALUES (?, ?, ?, ?)
 `
  const values = [
    image.imagePath,
    image.type,
    image.location,
    image.time,
  ]
  try {
    return db.runAsync(insertQuery, values)
  } catch (error) {
    console.error(error)
    throw Error("Failed to add contact")
  }
}

export const getHistoryRecords = async (db: SQLite.SQLiteDatabase) => {
    try {
        console.log("HELLO")
        const historyRecords: ImageType[] = []
    
        const results: ImageType[] = await db.getAllAsync("SELECT * FROM history")
        console.log(results);
        results?.forEach((result) => {
            historyRecords.push(result)
        })
        return historyRecords
    } catch (error) {
        console.error(error)
        throw Error("Failed to get history records")
    }
}

export const deleteHistoryRecord = async (db: SQLite.SQLiteDatabase, id: string) => {
    const deleteQuery = `
        DELETE FROM history WHERE id = ?
    `
    try {
        return db.runAsync(deleteQuery, [+id])
    } catch (error) {
        console.error(error)
        throw Error("Failed to delete history record")
    }
}