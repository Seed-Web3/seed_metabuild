export class Endorsement {
    constructor({ contractId, walletToUse }) {
      this.contractId = contractId;
      this.wallet = walletToUse;    
    }
    
    async nft_token(tokenId) {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_token' , args:{ tokenid : tokenId}});
    }

    async nft_metadata() {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_metadata' });
    }

    async nft_mint(Metadata, receiverId) {
        return await this.wallet.callMethod({ contractId: this.contractId, method: 'nft_mint', args: { metadata: Metadata, receiver_id: receiverId } });
    }

    async owner_tokens(account_id) {
        return await this.wallet.viewMethod({ contractId: this.contractId, method: 'nft_tokens_for_owner' , args:{ account_id : account_id, from_index:"0", limit:"200"}});
    }
}