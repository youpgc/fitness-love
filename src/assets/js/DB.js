/**
 * IndexedDB 数据库操作封装
 * 提供增删改查等基本操作
 */
const DB = {
  db: null,
  dataIndex: 1,
  DB_NAME: 'fitness-love',
  DB_VERSION: 1,

  /**
   * 初始化数据库
   * @param {string} name - 存储对象名称
   * @returns {Promise}
   */
  init(name = 'data') {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve(this.db);
        return;
      }

      const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);

      request.onerror = (event) => {
        console.error('数据库打开失败:', event.target.error);
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        if (!this.db.objectStoreNames.contains(name)) {
          const objectStore = this.db.createObjectStore(name, { keyPath: 'id' });
          objectStore.createIndex('title', 'title', { unique: false });
          objectStore.createIndex('phone', 'phone', { unique: false });
          objectStore.createIndex('email', 'email', { unique: false });
        }
      };
    });
  },

  /**
   * 新增数据
   * @param {Object} data - 要添加的数据
   * @param {string} name - 存储对象名称
   * @returns {Promise}
   */
  add(data, name = 'data') {
    return new Promise((resolve, reject) => {
      data.id = this.dataIndex;
      const transaction = this.db.transaction([name], 'readwrite');
      const request = transaction.objectStore(name).add(data);

      request.onsuccess = (event) => {
        this.dataIndex++;
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        console.error('数据添加失败:', event.target.error);
        reject(event.target.error);
      };
    });
  },

  /**
   * 更新数据
   * @param {Object} data - 要更新的数据
   * @param {string} name - 存储对象名称
   * @returns {Promise}
   */
  put(data, name = 'data') {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([name], 'readwrite');
      const request = transaction.objectStore(name).put(data);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        console.error('数据更新失败:', event.target.error);
        reject(event.target.error);
      };
    });
  },

  /**
   * 获取所有数据
   * @param {string} name - 存储对象名称
   * @returns {Promise}
   */
  get(name = 'data') {
    return new Promise((resolve, reject) => {
      const objectStore = this.db.transaction(name).objectStore(name);
      const request = objectStore.openCursor();
      const results = [];

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results.length > 0 ? results[results.length - 1] : null);
        }
      };

      request.onerror = (event) => {
        console.error('数据获取失败:', event.target.error);
        reject(event.target.error);
      };
    });
  },

  /**
   * 精确查找数据
   * @param {string} nameIndex - 索引名称
   * @param {string} value - 查找值
   * @param {string} name - 存储对象名称
   * @returns {Promise}
   */
  getItem(nameIndex, value, name = 'data') {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([name], 'readonly');
      const store = transaction.objectStore(name);
      const index = store.index(nameIndex);
      const request = index.openCursor(IDBKeyRange.only(value));
      const results = [];

      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results.length > 0 ? results : null);
        }
      };

      request.onerror = (event) => {
        console.error('数据查找失败:', event.target.error);
        reject(event.target.error);
      };
    });
  },

  /**
   * 删除数据
   * @param {number} id - 数据ID
   * @param {string} name - 存储对象名称
   * @returns {Promise}
   */
  remove(id, name = 'data') {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([name], 'readwrite');
      const request = transaction.objectStore(name).delete(id);

      request.onsuccess = () => {
        console.log('数据已删除');
        resolve();
      };

      request.onerror = (event) => {
        console.error('数据删除失败:', event.target.error);
        reject(event.target.error);
      };
    });
  },

  /**
   * 关闭数据库连接
   */
  close() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }
};

export default DB;
