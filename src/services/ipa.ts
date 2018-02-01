import ipaAlphabet from "../assets/data/ipa"

export class IpaService {


  getAlphabet() {
    return ipaAlphabet;
  }


  getVowels() {
    return ipaAlphabet.filter(function(el) {
      return el.vowel_or_consonant === "vowel"
    });
  }


  getConsonants() {
    return ipaAlphabet.filter(function(el) {
      return el.vowel_or_consonant === "consonant"
    });    
  }




  arrayForChart() {
    return {}
  //   return {
  //     vowels: [
  //        [ // row 1
  //           { 
  //             entry: "i",
  //             word: {
  //               word: "sheep",
  //               underlines: [2,3]
  //             } 
  //           },
  //           {
  //             entry: "ɪ",
  //             word: {
  //               word: "ship",
  //               underlines: [2]
  //             }
  //           }
  //       ] // row 1 
  //     ] // end of rows

  //   }
  } 

   






}


    
        //  , "ɪ", "ʊ", "uː", "ɪə", "eɪ"],
        // ["e", "ə", "ɜː", "ɔː", "ʊə", "ɔɪ","əʊ"],
        // ["æ", "ʌ", "ɑː", "ɒ", "eə", "aɪ", "aʊ"]
   
