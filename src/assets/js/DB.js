const DB = {
    db: null,
    dataIndex: 0,
    async init(basename, nameObj) {
        var _this = this;
        var version = 1;
        var objectStore;
        var request = window.indexedDB.open(basename, version);

        request.onerror = function() {}
        request.onsuccess = function(event) {
                _this.db = event.target.result;
            }
            //如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
        request.onupgradeneeded = function(event) {
            _this.db = event.target.result;
            if (!_this.db.objectStoreNames.contains('data')) { //判断是否存在
                objectStore = _this.db.createObjectStore('data', { keyPath: 'title' });
                //新建索引，参数索引名称、索引所在的属性、配置对象
                if (nameObj && nameObj.length > 0) {
                    nameObj.map(item => {
                        objectStore.createIndex(item.key, item.name, { unique: item.unique || false });
                    })
                }
            }
        }
    },
    add(data, sure, nosure) { //新增数据
        var request = this.db.transaction(['data'], 'readwrite')
            .objectStore('data')
            .add(data);
        request.onsuccess = function(event) {
            sure(event.target.result)
        };
        request.onerror = function(event) {
            nosure(event.target.result)
        }
    },
    put(data, sure, nosure) { //更新数据 
        var request = this.db.transaction(['data'], 'readwrite')
            .objectStore('data')
            .put(data);
        request.onsuccess = function(event) {
            sure(event.target.result)
        };
        request.onerror = function(event) {
            nosure(event.target.result)
        }
    },
    get(sure) { //获取所有数据
        var objectStore = this.db.transaction('data').objectStore('data');
        var arr = [];
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                var data = cursor.value;
                arr.push(data);
                this.dataIndex = cursor.key + 1;
                cursor.continue(); //将光标移到下一个对象,若是当前对象是最后一个数据,则指向null
            } else {
                // console.log('没有数据了')
            }
        };
        sure(arr)
    },
    getItem(nameIndex, value) { //精确查找
        var transaction = this.db.transaction(['data'], 'readonly');
        var store = transaction.objectStore('data');
        var index = store.index(nameIndex);
        var request = index.openCursor(IDBKeyRange.only(value));
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if (cursor) {
                var data = cursor.value;
                console.log(data)
                cursor.continue();
            } else {
                console.log(cursor)
            }
        }
    },
    remove(id) { //删除数据
        var request = this.db.transaction(['data'], 'readwrite')
            .objectStore('data')
            .delete(id);
        request.onsuccess = function(event) {
            console.log('已删除')
        };
    },
    close() {
        this.db.close();
    }
};

export default DB;