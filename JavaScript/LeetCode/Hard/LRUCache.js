var Node = function(key,value){
    this.next = null;
    this.prev = null;
    this.value = value
    this.key = key
}


var LRUCache = function(capacity) {

    this.capacity = capacity;
    this.hash = {};
    this.head = new Node(null,null);
    this.tail = new Node(null,null);
    this.head.next = this.tail;
    this.tail.prev = this.head;





};


LRUCache.prototype.insert = function(node){
    //insert at head

    let nextNode = this.head.next;

    this.head.next = node;
    node.next = nextNode;
    node.prev = this.head;
    nextNode.prev = node;

}


LRUCache.prototype.remove = function(node){


    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;


}


LRUCache.prototype.get = function(key) {

    if(this.hash[key]){
        let node = this.hash[key];
        this.remove(node);
        this.insert(node);
        return this.hash[key].value;

    } else{
        return -1;
    }




};


LRUCache.prototype.put = function(key, value) {
    //update
    if(this.hash[key]){
        this.remove(this.hash[key]);

        let node = new Node(key,value);
        this.insert(node);
        this.hash[key] = node;

    } else{
       let node = new Node(key,value);

        if(this.capacity === Object.keys(this.hash).length){
            //evict least recently used
            let lastNode = this.tail.prev;

            this.remove(lastNode);
            delete this.hash[lastNode.key];
            this.insert(node);
            this.hash[key] = node;

        } else{
            this.insert(node);
            this.hash[key] = node;
        }
    }
};

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
