type GENERAL = MONOLITH & MAJOR

interface MONOLITH {
  address: string
}

interface MAJOR {
  logoUrl: string
  collectionName: string
  volumeETH: number
  floorPriceValue: number
  floorPricePercent: number
}

type GENERAL_STRING = TO_STRING<GENERAL>
type GENERAL_NULL = TO_NULL<MAJOR> & MONOLITH
type GENERAL_FUNC = TO_FUNC<GENERAL_NULL>
// type SOME_NESTED = TO_NESTED<T>

type TO_STRING<O> = {
  [prop in keyof O]: string
}

type TO_NULL<O> = {
  [prop in keyof O]: O[prop] | null
}

type TO_FUNC<O> = {
  [prop in keyof O]: (value: O[prop]) => string
}

// type TO_NESTED<O> = {
//   [prop in keyof O]: string | TO_NESTED<O[prop]>
// }

export type { GENERAL, GENERAL_STRING, GENERAL_NULL, GENERAL_FUNC }
export type { TO_STRING }
