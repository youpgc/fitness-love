const DB = {
    db: null,
    dataIndex: 1,
    init(name = 'data') {
        var _this = this;
        var objectStore;
        var request = window.indexedDB.open('fitness-love', 1);
        request.onerror = function() {}
        request.onsuccess = function(event) {
                _this.db = event.target.result;
            }
            //如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
        request.onupgradeneeded = function(event) {
            _this.db = event.target.result;
            if (!_this.db.objectStoreNames.contains(name)) { //判断是否存在
                if (name === 'data') {
                    //新建索引，参数索引名称、索引所在的属性、配置对象
                    objectStore = _this.db.createObjectStore(name, { keyPath: 'id' });
                    objectStore.createIndex('title', 'title', { unique: false });
                    objectStore.createIndex('phone', 'phone', { unique: false });
                    objectStore.createIndex('email', 'email', { unique: false });
                }
            }
        }
    },
    add(data, sure, nosure, name = 'data') { //新增数据
        data['id'] = this.dataIndex;
        var request = this.db.transaction([name], 'readwrite')
            .objectStore(name)
            .add(data);
        request.onsuccess = function(event) {
            sure(event.target.result)
            this.dataIndex++;
        };
        request.onerror = function(event) {
            nosure(event.target.result)
        }
    },
    put(data, sure, nosure, name = 'data') { //更新数据 
        var request = this.db.transaction([name], 'readwrite')
            .objectStore(name)
            .put(data);
        request.onsuccess = function(event) {
            sure(event.target.result)
        };
        request.onerror = function(event) {
            nosure(event.target.result)
        }
    },
    get(sure, name = 'data') { //获取所有数据
        var objectStore = this.db.transaction(name).objectStore(name);
        var type = true;
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                var data = cursor.value;
                sure(data);
                type = false;
                cursor.continue(); //将光标移到下一个对象,若是当前对象是最后一个数据,则指向null
            } else {
                if (type) {
                    sure([])
                }
            }
        };
    },
    getItem(nameIndex, value, sure, name = 'data') { //精确查找
        var transaction = this.db.transaction([name], 'readonly');
        var store = transaction.objectStore(name);
        var index = store.index(nameIndex);
        var request = index.openCursor(IDBKeyRange.only(value));
        var type = true;
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if (cursor) {
                var data = cursor.value;
                sure(data);
                type = false;
                cursor.continue();
            } else {
                if (type) {
                    sure([])
                }
            }
        }
    },
    remove(id, name = 'data') { //删除数据
        var request = this.db.transaction([name], 'readwrite')
            .objectStore(name)
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