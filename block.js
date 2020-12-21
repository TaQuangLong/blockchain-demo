const SHA256 = require('crypto-js/sha256')
const DIFICULTY = 4
const BLOCKTIME = 10000

class Block {
    constructor(timestamp, lashHash, hash, data, nonce, dificulty = DIFICULTY){
        this.timestamp = timestamp
        this.lashHash = lashHash
        this.hash = hash
        this.data = data
        this.nonce = nonce
        this.dificulty = dificulty
    }

    calculateHash() {
        return sha256(`${this.timestamp}${JSON.stringify(this.data)}${this.previousHash}${this.nonce}${this.difficulty}`).toString()
    }

    // static genesisBlock(){
    //     return new Block('genesis-time', '', '', 0, 4)
    // }

    toString(){
        return `Block -- 
        timestamp : ${this.timestamp}
        lashHash: ${this.lashHash}
        hash: ${this.hash}
        data: ${this.data}
        nonce: ${this.nonce}
        diffculty: ${this.difficulty}`
        
    }

    static mineBlock(lastBlock, data){
        //proof of work algorithms
        //hash: thay đổi ký tự return khác
        let nonce = 0
        let hash
        let timestamp
        let difficulty
        do {
            timestamp = Date.now()
            nonce++;
            difficulty = Block.adjustDiffuculty(lastBlock, timestamp)
            hash = calculateHash()
        } while(hash.substring(0, difficulty)!=='0'.repeat(difficulty))
        return new this(timestamp, lastBlock.hash, hash, data,nonce, difficulty)
    }

    static adjustDiffuculty(lastBlock, timestamp){
        return lastBlock.timestamp + BLOCKTIME > timestamp ? (lastBlock.difficulty +1): (lastBlock.difficulty - 1)
    }
    
}

module.exports = Block
