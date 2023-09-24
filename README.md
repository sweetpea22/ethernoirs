# Ethernoirs

EtherNoirs is a text-based, on-chain, multi-player strategy game, where players must interact with NPCs and find evidence to complete their objective. The story goes, a shady protocol hires blackhats to aggressively increase their power, only to have it ruled by blackhat mafiosos a month later. You are hired by the protocol to identify the killer and turn these mafias against each other with logic and cunning.

### Inspired By 
The intent of this project is to explore how the evolving smart contract, ZK & NFT standards will change how we play games. This game is inspired by the aspect of darkforest that enabled permissionless story-building and trading of information.

### Technical Details
EtherNoirs is pretty much fully on-chain. 

It features: 
- The front-end is built in Typescript, Tailwind and Nextjs.
- Each NPC is a ERC-6551 Tokenbound account in possession of alibis and information (1155s). 
- Every move in the game in recorded on-chain to funnel into a leaderboard, this is the multiplayer component. 
- There is a "superuser mode" which checks if an account was active during "NFT cannon events" in crypto history. Eligible accounts are given special abilities in the game to increase entropy in the game by being able to release new information. I used Axiom SDK to do this. 
- To ensure fairness, I used the snarkjs library and circom compiler to create a circuit and use snark proofs to verify that a player has correctly deduced the murderer, without revealing it to others. 
- Web3Modal v3 is used to handle Auth. -Deployed a subgraph to index the NFTs, but didn't have much luck querying what I wanted. Def a skill issue on my part, not theGraph. -All nft metadata is uploaded to IPFS via Pinata <3

5 contracts were written for this project: 
- A 721 contract to mint NPCs. I used tokenbound.org to turn them into ERC-6551 smart contract wallets
[Goerli](https://goerli.etherscan.io/address/0xcd844945c5a130A20a8DAd6FD7141D7654c49218)
[Base Goerli](https://goerli.basescan.org/address/0xA647110A28A52B07748b8526A4DF4A308a646016)

- An 1155 contract to mint the tips and information. 
[Goerli](https://goerli.etherscan.io/address/0x6703759B89F386A33f2bBcF73B363deb2bd81692)
[Mantle](https://explorer.testnet.mantle.xyz/address/0x677df0cb865368207999F2862Ece576dC56D8dF6)
[Scroll Sepolia](https://sepolia-blockscout.scroll.io/address/0xcd844945c5a130A20a8DAd6FD7141D7654c49218)
[Base Goerli](https://goerli.basescan.org/address/0xcd844945c5a130A20a8DAd6FD7141D7654c49218)

- A game logic contract to track each game move so that people can win by score if they do not figure out who the killer was. 
[Goerli](https://goerli.etherscan.io/address/0x8162c80C51b2d756E0b9678F5241d6aa71b64805)
[Mantle](https://explorer.testnet.mantle.xyz/address/0x0Cf17D5DcDA9cF25889cEc9ae5610B0FB9725F65)
[Scroll Sepolia](https://sepolia-blockscout.scroll.io/address/0xA8Ed3851F5A6D9782EB5604C89e46BABe98E6706)

- A superuser contract to generate proof of historical on-chain behaviour and mint new game tokens. (forked from axiom basically) 
[Goerli](https://goerli.etherscan.io/address/0xdbFfC7AC517f8223FB36e5647b2623cfF20D3A56)
[Scroll Sepolia](https://sepolia-blockscout.scroll.io/address/0x0536Ea95f78F109A8f46d89d02Ba15d414B51bE7)
[Base Goerli](https://goerli.basescan.org/address/0xA8Ed3851F5A6D9782EB5604C89e46BABe98E6706)

- A verifier contract for the zkp.
[Goerli] (https://goerli.etherscan.io/address/0x2658FB8C711CD23e66E50b83e9Aec3E03803A562)
[Base Goerli](https://goerli.basescan.org/address/0xCb58a793d91eFEd4c97B1bEFAb43C8d960dCA194)

