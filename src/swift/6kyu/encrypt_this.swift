// https://www.codewars.com/kata/5848565e273af816fb000449

func encryptThis(text:String) -> String{

  // split string into words and map words into characters
  let a = text.split(separator: " ")
              .map {
                word in word.map {$0}
              }

  // map characters - first letter to number, switch 2nd and last letters
  let b = a.map {
    word in word.enumerated().map { (index, element) -> String in
      if index == 0 {return String(element.asciiValue!) }
      if index == 1 && word.count > 2 {return String(word[word.count - 1])}
      if index == (word.count - 1) {return String(word[1])}
      return String(element)
    }
  }
  
  // join characters into words, then words into a sentence
  return b.map {$0.joined()} .joined(separator: " ")
}