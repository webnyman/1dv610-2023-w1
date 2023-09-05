// Översätt vanlig text till rövarspråk
// -----------------------------------
const translateToRovarSprak = (textToTranslate) => {
  const vowels = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö']
  let rovarSprak = ''
  for (const letter of textToTranslate) {
    if (vowels.includes(letter)) {
      rovarSprak += letter
    } else {
      rovarSprak += letter + 'o' + letter.toLowerCase()
    }
  }
  return rovarSprak
}
console.log(translateToRovarSprak('Cecilia'))

// Översätt från rövarspråk till vanlig text

const translateFromRovarsprak = (textToTranslate) => {
  const vowels = ['a', 'o', 'u', 'å', 'e', 'i', 'y', 'ä', 'ö']
  let decodedRovarSprak = ''
  for (let i = 0; i < textToTranslate.length; i++) {
    if (vowels.includes(textToTranslate[i])) {
      decodedRovarSprak += textToTranslate[i]
    } else {
      // Check if text to translate is rövarspråk
      if (textToTranslate[i] === textToTranslate[(i + 2)] && (textToTranslate[(i + 1)]) === 'o') {
        decodedRovarSprak += textToTranslate[i]
        i = i + 2
      } else {
        decodedRovarSprak = 'Detta är inte rövarspråk!'
        break
      }
    }
  }
  return decodedRovarSprak
}
console.log(translateFromRovarsprak('bobjojörornon'))
