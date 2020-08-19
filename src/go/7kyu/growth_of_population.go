// https://www.codewars.com/kata/563b662a59afc2b5120000c6

package kata

func NbYear(p0 int, percent float64, aug int, p int) int {
  year := 0
  for p0 < p {
    p0 = int( float64(p0) * ( 1.0 + percent/100)) + aug
    year += 1
  }
  return year
}