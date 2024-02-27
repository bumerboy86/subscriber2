import ky from 'ky'
import { CONTRACT_METADATA } from '../types/apiTypes/alchemyTypes'

const KEY = 'XhMoskC0anQy5MV8fNHTGgDiaHjaWOaj'
const baseURL = 'https://eth-mainnet.g.alchemy.com/nft/v3' + '/' + KEY

export default class AlchemyAPI {
  static async getContractMetadataBatch(
    contractAddresses: string[]
  ): Promise<{ contracts: CONTRACT_METADATA[] }> {
    const event = 'getContractMetadataBatch'
    const url = `${baseURL}/${event}`

    const body = JSON.stringify({ contractAddresses })

    const data: { contracts: CONTRACT_METADATA[] } = await ky.post(url, { body }).json()
    return data
  }

  static async getNFTsForContract<T>(
    contractAddress: string,
    startToken: number = 0,
    limit: number = 30
  ): Promise<{
    nfts: T
    pageKey: string
  }> {
    const event = 'getNFTsForContract'
    const url = `${baseURL}/${event}`

    const searchParams = {
      contractAddress,
      withMetadata: true,
      startToken,
      limit,
    }

    const data: { nfts: T; pageKey: string } = await ky(url, { searchParams }).json()
    return data
  }
}
