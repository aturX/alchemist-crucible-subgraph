## The Graph for MistX

```
NFT contract：

https://etherscan.io/token/0x54e0395cfb4f39bef66dbcd5bd93cca4e9273d56
```

Build The Graph for The NFT in The MISTX transaction

Init

```
graph init --from-contract 0x54e0395cfb4f39bef66dbcd5bd93cca4e9273d56 --network mainnet  --contract-name AlchemistCrucible --index-events
```


Subgraph aturx/alchemist-crucible-subgraph created in alchemist-crucible-subgraph

Next steps:

  1. Run `graph auth https://api.thegraph.com/deploy/ <access-token>`
     to authenticate with the hosted service. You can get the access token from
     https://thegraph.com/explorer/dashboard/.

  2. Type `cd alchemist-crucible-subgraph` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph to
     https://thegraph.com/explorer/subgraph/aturx/alchemist-crucible-subgraph.

