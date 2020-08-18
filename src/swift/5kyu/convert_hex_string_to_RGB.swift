
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

import Foundation

struct RGB: CustomStringConvertible, Equatable {
    var r:Int
    var g:Int
    var b:Int
    init(_ r:Int, _ g:Int, _ b:Int) {
        self.r = r
        self.g = g
        self.b = b
    }
    static func ==(left:RGB, right:RGB) -> Bool {
        return left.r == right.r && left.g == right.g && left.b == right.b
    }
    var description: String {
        return "{R:\(r), G:\(g), B:\(b)}"
    }
}

func hexStringToRGB(_ str:String) -> RGB {
  let s1 = str.map { String($0) } // generates an array of single-character strings; Array(str) generates characters ...
  let s2 = [s1[1] + s1[2], s1[3] + s1[4], s1[5] + s1[6]] // ... which you can't concatenate ...
  return RGB(Int(s2[0], radix: 16)!, Int(s2[1], radix: 16)!, Int(s2[2], radix: 16)!)
}