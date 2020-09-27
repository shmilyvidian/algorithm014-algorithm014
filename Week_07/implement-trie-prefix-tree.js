// 208. 实现 Trie (前缀树)

var Trie = function() {
    this.root = new TrieNode()
};

function TrieNode(){
    this.next = new Map();
    this.isEnd = false;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if(!word) return
    let node = this.root
    for(let i = 0; i < word.length; i++){
        if(!node.next.has(word[i])){
            node.next.set(word[i], new TrieNode())
        }
        node = node.next.get(word[i])
    }
    node.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if(!word) return
    let node = this.root
    for(let i = 0; i < word.length; i++){
        if(!node.next.has(word[i])){
            return false
        }
        node = node.next.get(word[i])
    }
    return node.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if(! prefix) return true;
    var node = this.root;
    for(let i=0;i<prefix.length;i++){
        if(! node.next.has(prefix[i])){
            return false;
        }
        node = node.next.get(prefix[i]);
    }
    return true;
};