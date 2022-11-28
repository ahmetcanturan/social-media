import MySqlManager from "./MySqlManager.js"

//? DB metotlarını bu yöntemle dışarı açarak uygulamayı tek bir veritabanına bağımlı etmeyeceğiz
//* Bu noktadan uygulama farklı veritabanları ile de çalışabilecek 
class DatabaseDirectory {
    constructor(tableName) {
        this.table = tableName
    }
    db() {
        return new MySqlManager(this.table) //* Veri tabanı değişiminde buradaki kod değişecek
    }
}
export default DatabaseDirectory