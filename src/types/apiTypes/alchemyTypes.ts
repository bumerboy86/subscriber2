type CONTRACT_METADATA = {
  address: string
  name: string | null
  totalSupply: string | null
  tokenType: string | null
  openSeaMetadata: OPENSEA_METADATA
}

type OPENSEA_METADATA = {
  floorPrice: number | null
  collectionName: string | null
  safelistRequestStatus: string | null
  imageUrl: string | null
  description: string | null
  externalUrl: string | null
  twitterUsername: string | null
  discordUrl: string | null
}

export type { CONTRACT_METADATA }
