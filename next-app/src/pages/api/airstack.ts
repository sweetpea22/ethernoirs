import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const API_URL = 'https://api.airstack.xyz/gql'

/* create the API client */
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

/* define queries */

export const exploreChars = gql`
query MyQuery($_eq: Address, $blockchain: TokenBlockchain!, $limit: Int) {
  Ethereum: TokenBalances(
    input: {filter: {tokenAddress: {_eq: $_eq}}, blockchain: $blockchain, limit: $limit}
  ) {
    TokenBalance {
      tokenNfts {
        id
        address
        tokenId
        blockchain
        chainId
        type
        totalSupply
        tokenURI
        contentType
        contentValue {
          image {
            small
          }
        }
        metaData {
          name
          description
          image
          attributes {
            trait_type
            value
            displayType
            maxValue
          }
        }
      }
    }
    pageInfo {
      nextCursor
      prevCursor
    }
  }
}`