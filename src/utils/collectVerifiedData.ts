import { formattingNumbers } from '../helpers/someHelper'
import { img_PH } from '../helpers/imgPath'
import { GENERAL_FUNC, GENERAL_STRING, TO_STRING } from '../types/general'

const toCollectVerifiedData = <O>(obj: O): TO_STRING<O> => {
  const collectVerifiedData: Partial<TO_STRING<O>> = {}

  // for (const key in obj) {
  //   collectVerifiedData[key] = verificationList[key](obj[key])
  // }

  return collectVerifiedData as TO_STRING<O>
}

const verificationList: GENERAL_FUNC = {
  address: v => v,
  collectionName: v => v ?? PH.collectionName,
  logoUrl: v => v ?? PH.logoUrl,
  volumeETH: v => (v ? formattingNumbers(v) : PH.volumeETH),
  floorPriceValue: v => v?.toFixed(2) ?? PH.floorPriceValue,
  floorPricePercent: v => v?.toFixed(2) ?? PH.floorPricePercent,
}


const PH: GENERAL_STRING = {
  address: '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
  collectionName: 'Collection',
  logoUrl: img_PH.logo_PH,
  volumeETH: '00.00',
  floorPriceValue: '-',
  floorPricePercent: 'n',
}

export { toCollectVerifiedData }

