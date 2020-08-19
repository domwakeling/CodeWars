// https://www.codewars.com/kata/565c0fa6e3a7d39dee000125

package kata

import "math"

const (
  g = 9.81
  T = 1.00
  kmh_to_mps = 1000.0 / 3600.0
)

func Dist(v, mu float64) float64 {                  // suppose reaction time is 1
  v_ms := v * kmh_to_mps
  return T * v_ms + v_ms * v_ms / (2.0 * mu * g)
}

func Speed(d, mu float64) float64 {                 // suppose reaction time is 1
  K := 1.0 / (2.0 * mu * g)
  v_ms := (-T + math.Sqrt(T*T + 4 * K * d))/(2*K)
  return v_ms / kmh_to_mps
}