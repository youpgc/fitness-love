const DB = {
    db: null,
    init(basename, name, nameObj) {
        var _this = this;
        var databaseName = basename,
            version = 1;
        var objectStore;
        var request = window.indexedDB.open(databaseName, version);

        request.onerror = function(event) {}
        request.onsuccess = function(event) {
                _this.db = request.result //可以拿到数据库对象
                _this.getAll();
            }
            //如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
        request.onupgradeneeded = function(event) {
            _this.db = event.target.result;
            if (!_this.db.objectStoreNames.contains(name)) { //判断是否存在
                objectStore = _this.db.createObjectStore(name, { keyPath: 'id' });
                //新建索引，参数索引名称、索引所在的属性、配置对象
                nameObj.map(item => {
                    objectStore.createIndex(item.key, item.name, { unique: item.unique });
                })
            }
        }
    },
    put(data) { //新增
        var request = this.db.transaction(['data'], 'readwrite')
            .objectStore('data')
            .add(data);
        request.onsuccess = function(event) {
            console.log(data);
        };
        request.onerror = function(event) {
            console.log('该数据已存在');
        }
    },
    getList(nameIndex, value) { //查找
        var transaction = this.db.transaction(['data'], 'readonly');
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
    getItem(id) { //精确查找
        var transaction = this.db.transaction(['data'], 'readonly');
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
    },
    delete(id) { //删除
        var request = this.db.transaction(['data'], 'readwrite')
            .objectStore('data')
            .delete(id);
        request.onsuccess = function(event) {
            //do something...
        };
    },
    getAll() { //得到所有数据
        var objectStore = this.db.transaction('data').objectStore('data');
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                var data = cursor.value;
                console.log(data);
                cursor.continue(); //将光标移到下一个对象,若是当前对象是最后一个数据,则指向null
            } else {
                console.log('empty')
            }
        };
    }
};
export default DB;