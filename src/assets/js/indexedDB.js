const DB = {
    init() {
        var databaseName = 'learning',
            version = 1,
            dataIndex = 0;
        var db;
        var objectStore;
        var request = window.indexedDB.open(databaseName, version);

        request.onerror = function(event) {}
        request.onsuccess = function(event) {
                db = request.result //可以拿到数据库对象
                readAll();
            }
            //如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
        request.onupgradeneeded = function(event) {
            db = event.target.result;
            if (!db.objectStoreNames.contains('data')) { //判断是否存在
                objectStore = db.createObjectStore('data', { keyPath: 'id' });
                //新建索引，参数索引名称、索引所在的属性、配置对象
                objectStore.createIndex('nameIndex', 'name', { unique: true });
                objectStore.createIndex('ageIndex', 'age', { unique: false });
            }
        }
    },
    put(data) { //新增
        var request = db.transaction(['data'], 'readwrite')
            .objectStore('data')
            .add(data);
        request.onsuccess = function(event) {
            console.log(data);
        };
        request.onerror = function(event) {
            console.log('该数据已存在');
        }
    },
    get(nameIndex, value) { //查找
        var transaction = db.transaction(['data'], 'readonly');
        var store = transaction.objectStore('data');
        var index = store.index(nameIndex);
        var request = index.openCursor(IDBKeyRange.only(value));
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if (cursor) {
                var data = cursor.value;
                console.log(data);
                cursor.continue();
            } else {
                console.log(cursor)
            }
        }
    },
    getItem(id) {
        var transaction = db.transaction(['data'], 'readonly');
        var store = transaction.objectStore('data');
        var index = store.index('id');
        var request = index.get(id);
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if (cursor) {
                console.log(cursor.value.name);
            } else {
                console.log('暂无此数据');
            }
        }
    }
};
export default DB;