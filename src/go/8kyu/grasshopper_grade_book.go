// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

package kata

func GetGrade(a,b,c int) rune {
    var av float64 = (float64(a) + float64(b) + float64(c)) / 3
    switch {
      case av >= 90.0:
        return 'A'
      case av >= 80.0:
        return 'B'
      case av >= 70.0:
        return 'C'
      case av >= 60.0:
        return 'D'
      default:
        return'F'
    }
}