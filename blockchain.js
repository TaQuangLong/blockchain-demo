const Block  = require('./block');
class BlockChain {
    constructor() {
        this.chain = [Block.genesisBlock()]

    }
    genesisBlock() {
        return new Block({
            from: '',
            amount: 10e9,
            to: 'Nakamoto'
        }, 'genesis-hash')
    }

    addBock(data) {
        const lastBlock = this.chain[this.chain.length -1]
        const block =  Block.mineBlock(lastBlock, data)
        this.chain.push(block)
        return block
    }

    toString(){
        return  `Blockchaine
        ${(this.chain.map(c => c.toString()).join('\r\n'))}`
    }
}

module.exports = BlockChain