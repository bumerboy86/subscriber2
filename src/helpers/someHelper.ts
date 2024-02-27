export const formattingNumbers = (n: number): string => {
  const K = 1000
  const M = K * K
  const B = M * K
  const T = B * K

  const formatList = {
    D: Number(n.toFixed(1)) + '',
    K: Number((n / K).toFixed(1)) + 'K',
    M: Number((n / M).toFixed(1)) + 'M',
    B: Number((n / B).toFixed(1)) + 'B',
  }

  if (n >= 0 && n < K) return formatList.D
  if (n >= K && n < M) return formatList.K
  if (n >= M && n < B) return formatList.M
  if (n >= B && n < T) return formatList.B

  return '-'
}
