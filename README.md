# The Graph for MistX
 

## front-end Code 


- [front-end](https://github.com/SusuwatariCoder/Blockchain-Just-Todo/tree/master/defi-example)

- [online-demo](https://defi.on.fleek.co/)

- [grants](https://gitcoin.co/issue/graphprotocol/gitcoin-grants-round-10-hackathon/1/100026014)
 

```
NFT contract：

https://etherscan.io/token/0x54e0395cfb4f39bef66dbcd5bd93cca4e9273d56
```

Build The Graph for The NFT in The MISTX transaction

Init

```
graph init --from-contract 0x54e0395cfb4f39bef66dbcd5bd93cca4e9273d56 --network mainnet  --contract-name AlchemistCrucible --index-events
```


```
$ graph codegen

$ graph build
```

Subgraph aturx/alchemist-crucible-subgraph created in alchemist-crucible-subgraph

Next steps:

  1. Run `graph auth https://api.thegraph.com/deploy/ <access-token>`
     to authenticate with the hosted service. You can get the access token from
     https://thegraph.com/explorer/dashboard/.

  2. Type `cd alchemist-crucible-subgraph` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph to
     https://thegraph.com/explorer/subgraph/aturx/alchemist-crucible-subgraph.


## Done 

```
Build completed: QmYANCSYf5offXq7jaLjB7WCBdnPcigcCVw2u3vMwg5i4K

Deployed to https://thegraph.com/explorer/subgraph/aturx/Alchemist-Crucible

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/aturx/alchemist-crucible      
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/aturx/alchemist-crucible 
```

## Update

```
Build completed: Qmd1YZBLRfC3gGKNcNN6Y6Gkb7SSA9Jw7AGQgiFH43B8ho

Deployed to https://thegraph.com/explorer/subgraph/aturx/Alchemist-Crucible

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/aturx/alchemist-crucible
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/aturx/alchemist-crucible
```