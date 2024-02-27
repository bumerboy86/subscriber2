import { img_PH } from '../helpers/imgPath'
import { formattingNumbers } from '../helpers/someHelper'

export const toCollectVerifiedData2 = obj => {
  const collectVerifiedData = {}

  for (const key in obj) {
    collectVerifiedData[key] = getData(obj[key], key)
  }

  return collectVerifiedData
}

const getData = (value, key) => {
  const getCollName = v => (v ? v : PH.collectionName)
  const getLogoUrl = v => (v ? v : PH.logoUrl)
  const getVolumeETH = v => {
    if (v) {
      if (!Number.isNaN(+v) && !Number.isInteger(+v)) {
        return formattingNumbers(v)
      }
    }

    return PH.volumeETH
  }
  const getFloorPriceValue = v => {
    if (v) {
      if (!Number.isNaN(+v) && !Number.isInteger(+v)) {
        return v.toFixed(2)
      }
    }

    return PH.floorPriceValue
  }
  const getFloorPricePercent = v => {
    if (v) {
      if (!Number.isNaN(+v) && !Number.isInteger(+v)) {
        return v.toFixed(2)
      }
    }

    return PH.floorPricePercent
  }

  const verificationList = {
    address: value,
    collectionName: getCollName(value),
    logoUrl: getLogoUrl(value),
    volumeETH: getVolumeETH(value),
    floorPriceValue: getFloorPriceValue(value),
    floorPricePercent: getFloorPricePercent(value),
  }

  return verificationList[key]
}

const PH = {
  address: '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
  collectionName: 'Collection',
  logoUrl: img_PH.logo_PH,
  volumeETH: '00.00',
  floorPriceValue: '-',
  floorPricePercent: 'n',
}
