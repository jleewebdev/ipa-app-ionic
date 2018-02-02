export class DictionaryService {

  getRandomWord() {
    let dic = this.getDictionary()
    return dic[Math.floor(Math.random()*dic.length)]
  }


   getDictionary() { 
      return [
 {
   "id": 1,
   "word": "THE",
   "pronunciations": "ðə, ˈðʌ, ði"
 },
 {
   "id": 2,
   "word": "OF",
   "pronunciations": "ˈʌv, əv"
 },
 {
   "id": 3,
   "word": "AND",
   "pronunciations": "ənd, ˈænd"
 },
 {
   "id": 4,
   "word": "TO",
   "pronunciations": "ˈtuː, tɪ, tə"
 },
 {
   "id": 5,
   "word": "A",
   "pronunciations": "ə, ˈeɪ"
 },
 {
   "id": 6,
   "word": "IN",
   "pronunciations": "ɪn, ˈɪn"
 },
 {
   "id": 7,
   "word": "THAT",
   "pronunciations": "ˈðæt, ðət"
 },
 {
   "id": 8,
   "word": "IS",
   "pronunciations": "ˈɪz, ɪz"
 },
 {
   "id": 9,
   "word": "WAS",
   "pronunciations": "ˈwɑːz, wɑːz"
 },
 {
   "id": 10,
   "word": "HE",
   "pronunciations": "ˈhiː"
 },
 {
   "id": 11,
   "word": "FOR",
   "pronunciations": "ˈfɔr, fɝ, frɝ"
 },
 {
   "id": 12,
   "word": "IT",
   "pronunciations": "ˈɪt, ɪt"
 },
 {
   "id": 13,
   "word": "WITH",
   "pronunciations": "ˈwɪð, ˈwɪθ, wɪθ, wɪð"
 },
 {
   "id": 14,
   "word": "AS",
   "pronunciations": "ˈæz, ˈɛz"
 },
 {
   "id": 15,
   "word": "HIS",
   "pronunciations": "ˈhɪz, hɪz"
 },
 {
   "id": 16,
   "word": "ON",
   "pronunciations": "ˈɑːn, ˈɔn"
 },
 {
   "id": 17,
   "word": "BE",
   "pronunciations": "ˈbiː, bi"
 },
 {
   "id": 18,
   "word": "AT",
   "pronunciations": "ˈæt"
 },
 {
   "id": 19,
   "word": "BY",
   "pronunciations": "ˈbaɪ"
 },
 {
   "id": 20,
   "word": "I",
   "pronunciations": "ˈaɪ"
 },
 {
   "id": 21,
   "word": "THIS",
   "pronunciations": "ˈðɪs, ðɪs"
 },
 {
   "id": 22,
   "word": "HAD",
   "pronunciations": "ˈhæd"
 },
 {
   "id": 23,
   "word": "NOT",
   "pronunciations": "ˈnɑːt"
 },
 {
   "id": 24,
   "word": "ARE",
   "pronunciations": "ˈɑːr, ɝ"
 },
 {
   "id": 25,
   "word": "BUT",
   "pronunciations": "ˈbʌt"
 },
 {
   "id": 26,
   "word": "FROM",
   "pronunciations": "ˈfrʌm"
 },
 {
   "id": 27,
   "word": "OR",
   "pronunciations": "ˈɔr, ɝ"
 },
 {
   "id": 28,
   "word": "HAVE",
   "pronunciations": "ˈhæv"
 },
 {
   "id": 29,
   "word": "AN",
   "pronunciations": "ˈæn, ən"
 },
 {
   "id": 30,
   "word": "THEY",
   "pronunciations": "ˈðeɪ"
 },
 {
   "id": 31,
   "word": "WHICH",
   "pronunciations": "ˈwɪtʃ, ˈhwɪtʃ"
 },
 {
   "id": 32,
   "word": "ONE",
   "pronunciations": "ˈwʌn, ˈhwʌn"
 },
 {
   "id": 33,
   "word": "YOU",
   "pronunciations": "ˈjuː"
 },
 {
   "id": 34,
   "word": "WERE",
   "pronunciations": "ˈwɝː"
 },
 {
   "id": 35,
   "word": "HER",
   "pronunciations": "ˈhɝː"
 },
 {
   "id": 36,
   "word": "ALL",
   "pronunciations": "ˈɔl"
 },
 {
   "id": 37,
   "word": "SHE",
   "pronunciations": "ˈʃiː"
 },
 {
   "id": 38,
   "word": "THERE",
   "pronunciations": "ˈðɛr"
 },
 {
   "id": 39,
   "word": "WOULD",
   "pronunciations": "ˈwʊd"
 },
 {
   "id": 40,
   "word": "THEIR",
   "pronunciations": "ˈðɛr"
 },
 {
   "id": 41,
   "word": "WE",
   "pronunciations": "ˈwiː"
 },
 {
   "id": 42,
   "word": "HIM",
   "pronunciations": "ˈhɪm, ɪm"
 },
 {
   "id": 43,
   "word": "BEEN",
   "pronunciations": "ˈbɪn, bən, bɪn"
 },
 {
   "id": 44,
   "word": "HAS",
   "pronunciations": "ˈhæz, həz"
 },
 {
   "id": 45,
   "word": "WHEN",
   "pronunciations": "ˈwɛn, ˈhwɛn, ˈwɪn, ˈhwɪn"
 },
 {
   "id": 46,
   "word": "WHO",
   "pronunciations": "ˈhuː"
 },
 {
   "id": 47,
   "word": "WILL",
   "pronunciations": "ˈwɪl, wəl"
 },
 {
   "id": 48,
   "word": "MORE",
   "pronunciations": "ˈmɔr"
 },
 {
   "id": 49,
   "word": "IF",
   "pronunciations": "ˈɪf, ɪf"
 },
 {
   "id": 50,
   "word": "NO",
   "pronunciations": "ˈnoʊ"
 },
 {
   "id": 51,
   "word": "OUT",
   "pronunciations": "ˈaʊt"
 },
 {
   "id": 52,
   "word": "SO",
   "pronunciations": "ˈsoʊ"
 },
 {
   "id": 53,
   "word": "SAID",
   "pronunciations": "ˈsɛd"
 },
 {
   "id": 54,
   "word": "WHAT",
   "pronunciations": "ˈwʌt, ˈhwʌt"
 },
 {
   "id": 55,
   "word": "UP",
   "pronunciations": "ˈʌp"
 },
 {
   "id": 56,
   "word": "ITS",
   "pronunciations": "ˈɪts, ɪts"
 },
 {
   "id": 57,
   "word": "ABOUT",
   "pronunciations": "əˈbaʊt"
 },
 {
   "id": 58,
   "word": "INTO",
   "pronunciations": "ˈɪntuː, ɪnˈtuː, ɪntə"
 },
 {
   "id": 59,
   "word": "THAN",
   "pronunciations": "ˈðæn, ðən"
 },
 {
   "id": 60,
   "word": "THEM",
   "pronunciations": "ˈðɛm, ðəm"
 },
 {
   "id": 61,
   "word": "CAN",
   "pronunciations": "ˈkæn, kən"
 },
 {
   "id": 62,
   "word": "ONLY",
   "pronunciations": "ˈoʊnli"
 },
 {
   "id": 63,
   "word": "OTHER",
   "pronunciations": "ˈʌðɝ"
 },
 {
   "id": 64,
   "word": "NEW",
   "pronunciations": "ˈnuː, nˈjuː"
 },
 {
   "id": 65,
   "word": "SOME",
   "pronunciations": "ˈsʌm"
 },
 {
   "id": 66,
   "word": "COULD",
   "pronunciations": "ˈkʊd"
 },
 {
   "id": 67,
   "word": "TIME",
   "pronunciations": "ˈtaɪm"
 },
 {
   "id": 68,
   "word": "THESE",
   "pronunciations": "ˈðiːz"
 },
 {
   "id": 69,
   "word": "TWO",
   "pronunciations": "ˈtuː"
 },
 {
   "id": 70,
   "word": "MAY",
   "pronunciations": "ˈmeɪ"
 },
 {
   "id": 71,
   "word": "THEN",
   "pronunciations": "ˈðɛn"
 },
 {
   "id": 72,
   "word": "DO",
   "pronunciations": "ˈduː"
 },
 {
   "id": 73,
   "word": "FIRST",
   "pronunciations": "ˈfɝːst"
 },
 {
   "id": 74,
   "word": "ANY",
   "pronunciations": "ˈɛni"
 },
 {
   "id": 75,
   "word": "MY",
   "pronunciations": "ˈmaɪ"
 },
 {
   "id": 76,
   "word": "NOW",
   "pronunciations": "ˈnaʊ"
 },
 {
   "id": 77,
   "word": "SUCH",
   "pronunciations": "ˈsʌtʃ"
 },
 {
   "id": 78,
   "word": "LIKE",
   "pronunciations": "ˈlaɪk"
 },
 {
   "id": 79,
   "word": "OUR",
   "pronunciations": "ˈaʊɝ, ˈaʊr, ˈɑːr"
 },
 {
   "id": 80,
   "word": "OVER",
   "pronunciations": "ˈoʊvɝ"
 },
 {
   "id": 81,
   "word": "MAN",
   "pronunciations": "ˈmæn"
 },
 {
   "id": 82,
   "word": "ME",
   "pronunciations": "ˈmiː"
 },
 {
   "id": 83,
   "word": "EVEN",
   "pronunciations": "ˈiːvɪn"
 },
 {
   "id": 84,
   "word": "MOST",
   "pronunciations": "ˈmoʊst, ˈmoʊs"
 },
 {
   "id": 85,
   "word": "MADE",
   "pronunciations": "ˈmeɪd"
 },
 {
   "id": 86,
   "word": "AFTER",
   "pronunciations": "ˈæftɝ"
 },
 {
   "id": 87,
   "word": "ALSO",
   "pronunciations": "ˈɔlsoʊ"
 },
 {
   "id": 88,
   "word": "DID",
   "pronunciations": "ˈdɪd, dɪd"
 },
 {
   "id": 89,
   "word": "MANY",
   "pronunciations": "ˈmɛni"
 },
 {
   "id": 90,
   "word": "BEFORE",
   "pronunciations": "bɪˈfɔr, ˌbiːˈfɔr"
 },
 {
   "id": 91,
   "word": "MUST",
   "pronunciations": "ˈmʌst"
 },
 {
   "id": 92,
   "word": "THROUGH",
   "pronunciations": "ˈθruː"
 },
 {
   "id": 93,
   "word": "BACK",
   "pronunciations": "ˈbæk"
 },
 {
   "id": 94,
   "word": "YEARS",
   "pronunciations": "ˈjɪrz"
 },
 {
   "id": 95,
   "word": "MUCH",
   "pronunciations": "ˈmʌtʃ"
 },
 {
   "id": 96,
   "word": "WHERE",
   "pronunciations": "ˈwɛr, ˈhwɛr"
 },
 {
   "id": 97,
   "word": "YOUR",
   "pronunciations": "ˈjɔr, ˈjʊr"
 },
 {
   "id": 98,
   "word": "WAY",
   "pronunciations": "ˈweɪ"
 },
 {
   "id": 99,
   "word": "WELL",
   "pronunciations": "ˈwɛl"
 },
 {
   "id": 100,
   "word": "DOWN",
   "pronunciations": "ˈdaʊn"
 },
 {
   "id": 101,
   "word": "SHOULD",
   "pronunciations": "ˈʃʊd"
 },
 {
   "id": 102,
   "word": "BECAUSE",
   "pronunciations": "bɪˈkɔz, bɪˈkʌz, bɪˈkɑːz, bɪkəz"
 },
 {
   "id": 103,
   "word": "EACH",
   "pronunciations": "ˈiːtʃ"
 },
 {
   "id": 104,
   "word": "JUST",
   "pronunciations": "ˈdʒʌst, dʒɪst"
 },
 {
   "id": 105,
   "word": "THOSE",
   "pronunciations": "ˈðoʊz"
 },
 {
   "id": 106,
   "word": "PEOPLE",
   "pronunciations": "ˈpiːpəl"
 },
 {
   "id": 107,
   "word": "MR.",
   "pronunciations": "ˈmɪstɝ"
 },
 {
   "id": 108,
   "word": "HOW",
   "pronunciations": "ˈhaʊ"
 },
 {
   "id": 109,
   "word": "TOO",
   "pronunciations": "ˈtuː"
 },
 {
   "id": 110,
   "word": "LITTLE",
   "pronunciations": "ˈlɪtəl"
 },
 {
   "id": 111,
   "word": "STATE",
   "pronunciations": "ˈsteɪt"
 },
 {
   "id": 112,
   "word": "GOOD",
   "pronunciations": "ˈgʊd, gɪd"
 },
 {
   "id": 113,
   "word": "VERY",
   "pronunciations": "ˈvɛri"
 },
 {
   "id": 114,
   "word": "MAKE",
   "pronunciations": "ˈmeɪk"
 },
 {
   "id": 115,
   "word": "WORLD",
   "pronunciations": "ˈwɝːld"
 },
 {
   "id": 116,
   "word": "STILL",
   "pronunciations": "ˈstɪl"
 },
 {
   "id": 117,
   "word": "OWN",
   "pronunciations": "ˈoʊn"
 },
 {
   "id": 118,
   "word": "SEE",
   "pronunciations": "ˈsiː"
 },
 {
   "id": 119,
   "word": "MEN",
   "pronunciations": "ˈmɛn"
 },
 {
   "id": 120,
   "word": "WORK",
   "pronunciations": "ˈwɝːk"
 },
 {
   "id": 121,
   "word": "LONG",
   "pronunciations": "ˈlɔŋ"
 },
 {
   "id": 122,
   "word": "HERE",
   "pronunciations": "ˈhiːr"
 },
 {
   "id": 123,
   "word": "GET",
   "pronunciations": "ˈgɛt, ˈgɪt"
 },
 {
   "id": 124,
   "word": "BETWEEN",
   "pronunciations": "bɪˈtwiːn, biːˈtwiːn"
 },
 {
   "id": 125,
   "word": "BOTH",
   "pronunciations": "ˈboʊθ"
 },
 {
   "id": 126,
   "word": "LIFE",
   "pronunciations": "ˈlaɪf"
 },
 {
   "id": 127,
   "word": "BEING",
   "pronunciations": "ˈbiːɪŋ"
 },
 {
   "id": 128,
   "word": "UNDER",
   "pronunciations": "ˈʌndɝ"
 },
 {
   "id": 129,
   "word": "NEVER",
   "pronunciations": "ˈnɛvɝ"
 },
 {
   "id": 130,
   "word": "DAY",
   "pronunciations": "ˈdeɪ"
 },
 {
   "id": 131,
   "word": "SAME",
   "pronunciations": "ˈseɪm"
 },
 {
   "id": 132,
   "word": "ANOTHER",
   "pronunciations": "əˈnʌðɝ"
 },
 {
   "id": 133,
   "word": "KNOW",
   "pronunciations": "ˈnoʊ"
 },
 {
   "id": 134,
   "word": "WHILE",
   "pronunciations": "ˈwaɪl, ˈhwaɪl"
 },
 {
   "id": 135,
   "word": "LAST",
   "pronunciations": "ˈlæst"
 },
 {
   "id": 136,
   "word": "US",
   "pronunciations": "ˈʌs, ˈjuːˈɛs"
 },
 {
   "id": 137,
   "word": "MIGHT",
   "pronunciations": "ˈmaɪt"
 },
 {
   "id": 138,
   "word": "GREAT",
   "pronunciations": "ˈgreɪt"
 },
 {
   "id": 139,
   "word": "OLD",
   "pronunciations": "ˈoʊld"
 },
 {
   "id": 140,
   "word": "YEAR",
   "pronunciations": "ˈjɪr"
 },
 {
   "id": 141,
   "word": "OFF",
   "pronunciations": "ˈɔf"
 },
 {
   "id": 142,
   "word": "COME",
   "pronunciations": "ˈkʌm"
 },
 {
   "id": 143,
   "word": "SINCE",
   "pronunciations": "ˈsɪns"
 },
 {
   "id": 144,
   "word": "AGAINST",
   "pronunciations": "əˈgɛnst, əˈgeɪnst"
 },
 {
   "id": 145,
   "word": "GO",
   "pronunciations": "ˈgoʊ"
 },
 {
   "id": 146,
   "word": "CAME",
   "pronunciations": "ˈkeɪm"
 },
 {
   "id": 147,
   "word": "RIGHT",
   "pronunciations": "ˈraɪt"
 },
 {
   "id": 148,
   "word": "USED",
   "pronunciations": "ˈjuːzd"
 },
 {
   "id": 149,
   "word": "TAKE",
   "pronunciations": "ˈteɪk"
 },
 {
   "id": 150,
   "word": "THREE",
   "pronunciations": "ˈθriː"
 },
 {
   "id": 151,
   "word": "HIMSELF",
   "pronunciations": "hɪmˈsɛlf"
 },
 {
   "id": 152,
   "word": "STATES",
   "pronunciations": "ˈsteɪts"
 },
 {
   "id": 153,
   "word": "FEW",
   "pronunciations": "ˈfjuː"
 },
 {
   "id": 154,
   "word": "HOUSE",
   "pronunciations": "ˈhaʊs"
 },
 {
   "id": 155,
   "word": "USE",
   "pronunciations": "ˈjuːs, ˈjuːz"
 },
 {
   "id": 156,
   "word": "DURING",
   "pronunciations": "ˈdʊrɪŋ, dˈjʊrɪŋ, ˈdɝːɪŋ"
 },
 {
   "id": 157,
   "word": "WITHOUT",
   "pronunciations": "wɪˈθaʊt, wɪˈðaʊt"
 },
 {
   "id": 158,
   "word": "AGAIN",
   "pronunciations": "əˈgɛn, əˈgeɪn"
 },
 {
   "id": 159,
   "word": "PLACE",
   "pronunciations": "ˈpleɪs"
 },
 {
   "id": 160,
   "word": "AMERICAN",
   "pronunciations": "əˈmɛrɪkən"
 },
 {
   "id": 161,
   "word": "AROUND",
   "pronunciations": "ɝˈaʊnd, ɝˈaʊn"
 },
 {
   "id": 162,
   "word": "HOWEVER",
   "pronunciations": "ˌhaʊˈɛvɝ"
 },
 {
   "id": 163,
   "word": "HOME",
   "pronunciations": "ˈhoʊm"
 },
 {
   "id": 164,
   "word": "SMALL",
   "pronunciations": "ˈsmɔl"
 },
 {
   "id": 165,
   "word": "FOUND",
   "pronunciations": "ˈfaʊnd"
 },
 {
   "id": 166,
   "word": "MRS.",
   "pronunciations": "ˈmɪsɪz"
 },
 {
   "id": 167,
   "word": "THOUGHT",
   "pronunciations": "ˈθɔt"
 },
 {
   "id": 168,
   "word": "WENT",
   "pronunciations": "ˈwɛnt"
 },
 {
   "id": 169,
   "word": "SAY",
   "pronunciations": "ˈseɪ"
 },
 {
   "id": 170,
   "word": "PART",
   "pronunciations": "ˈpɑːrt"
 },
 {
   "id": 171,
   "word": "ONCE",
   "pronunciations": "ˈwʌns"
 },
 {
   "id": 172,
   "word": "GENERAL",
   "pronunciations": "ˈdʒɛnɝəl, ˈdʒɛnrəl"
 },
 {
   "id": 173,
   "word": "HIGH",
   "pronunciations": "ˈhaɪ"
 },
 {
   "id": 174,
   "word": "UPON",
   "pronunciations": "əˈpɑːn"
 },
 {
   "id": 175,
   "word": "SCHOOL",
   "pronunciations": "ˈskuːl"
 },
 {
   "id": 176,
   "word": "EVERY",
   "pronunciations": "ˈɛvɝi, ˈɛvri"
 },
 {
   "id": 177,
   "word": "DON'T",
   "pronunciations": "ˈdoʊnt, ˈdoʊn"
 },
 {
   "id": 178,
   "word": "DOES",
   "pronunciations": "ˈdʌz, dɪz"
 },
 {
   "id": 179,
   "word": "GOT",
   "pronunciations": "ˈgɑːt"
 },
 {
   "id": 180,
   "word": "UNITED",
   "pronunciations": "juːˈnaɪtəd, juːˈnaɪtɪd"
 },
 {
   "id": 181,
   "word": "LEFT",
   "pronunciations": "ˈlɛft"
 },
 {
   "id": 182,
   "word": "NUMBER",
   "pronunciations": "ˈnʌmbɝ"
 },
 {
   "id": 183,
   "word": "COURSE",
   "pronunciations": "ˈkɔrs"
 },
 {
   "id": 184,
   "word": "WAR",
   "pronunciations": "ˈwɔr"
 },
 {
   "id": 185,
   "word": "UNTIL",
   "pronunciations": "ənˈtɪl"
 },
 {
   "id": 186,
   "word": "ALWAYS",
   "pronunciations": "ˈɔlˌweɪz, ˈɔlwiːz"
 },
 {
   "id": 187,
   "word": "AWAY",
   "pronunciations": "əˈweɪ"
 },
 {
   "id": 188,
   "word": "SOMETHING",
   "pronunciations": "ˈsʌmθɪŋ"
 },
 {
   "id": 189,
   "word": "FACT",
   "pronunciations": "ˈfækt"
 },
 {
   "id": 190,
   "word": "WATER",
   "pronunciations": "ˈwɔtɝ"
 },
 {
   "id": 191,
   "word": "THOUGH",
   "pronunciations": "ˈðoʊ"
 },
 {
   "id": 192,
   "word": "PUBLIC",
   "pronunciations": "ˈpʌblɪk"
 },
 {
   "id": 193,
   "word": "LESS",
   "pronunciations": "ˈlɛs"
 },
 {
   "id": 194,
   "word": "PUT",
   "pronunciations": "ˈpʊt"
 },
 {
   "id": 195,
   "word": "THINK",
   "pronunciations": "ˈθɪŋk"
 },
 {
   "id": 196,
   "word": "ALMOST",
   "pronunciations": "ˈɔlˌmoʊst"
 },
 {
   "id": 197,
   "word": "HAND",
   "pronunciations": "ˈhænd"
 },
 {
   "id": 198,
   "word": "ENOUGH",
   "pronunciations": "ɪˈnʌf, iːˈnʌf"
 },
 {
   "id": 199,
   "word": "FAR",
   "pronunciations": "ˈfɑːr"
 },
 {
   "id": 200,
   "word": "TOOK",
   "pronunciations": "ˈtʊk"
 },
 {
   "id": 201,
   "word": "HEAD",
   "pronunciations": "ˈhɛd"
 },
 {
   "id": 202,
   "word": "YET",
   "pronunciations": "ˈjɛt"
 },
 {
   "id": 203,
   "word": "GOVERNMENT",
   "pronunciations": "ˈgʌvɝnmənt"
 },
 {
   "id": 204,
   "word": "SYSTEM",
   "pronunciations": "ˈsɪstəm"
 },
 {
   "id": 205,
   "word": "BETTER",
   "pronunciations": "ˈbɛtɝ"
 },
 {
   "id": 206,
   "word": "SET",
   "pronunciations": "ˈsɛt"
 },
 {
   "id": 207,
   "word": "TOLD",
   "pronunciations": "ˈtoʊld"
 },
 {
   "id": 208,
   "word": "NIGHT",
   "pronunciations": "ˈnaɪt"
 },
 {
   "id": 209,
   "word": "NOTHING",
   "pronunciations": "ˈnʌθɪŋ"
 },
 {
   "id": 210,
   "word": "END",
   "pronunciations": "ˈɛnd"
 },
 {
   "id": 211,
   "word": "WHY",
   "pronunciations": "ˈwaɪ, ˈhwaɪ"
 },
 {
   "id": 212,
   "word": "CALLED",
   "pronunciations": "ˈkɔld"
 },
 {
   "id": 213,
   "word": "DIDN'T",
   "pronunciations": "ˈdɪdənt, ˈdɪdnt, ˈdɪdən, ˈdɪnt"
 },
 {
   "id": 214,
   "word": "EYES",
   "pronunciations": "ˈaɪz"
 },
 {
   "id": 215,
   "word": "FIND",
   "pronunciations": "ˈfaɪnd"
 },
 {
   "id": 216,
   "word": "GOING",
   "pronunciations": "ˈgoʊɪŋ, ˈgoʊɪn"
 },
 {
   "id": 217,
   "word": "LOOK",
   "pronunciations": "ˈlʊk"
 },
 {
   "id": 218,
   "word": "ASKED",
   "pronunciations": "ˈæskt, ˈæst"
 },
 {
   "id": 219,
   "word": "LATER",
   "pronunciations": "ˈleɪtɝ"
 },
 {
   "id": 220,
   "word": "KNEW",
   "pronunciations": "ˈnuː, nˈjuː"
 },
 {
   "id": 221,
   "word": "POINT",
   "pronunciations": "ˈpɔɪnt"
 },
 {
   "id": 222,
   "word": "NEXT",
   "pronunciations": "ˈnɛkst, ˈnɛks"
 },
 {
   "id": 223,
   "word": "PROGRAM",
   "pronunciations": "ˈproʊˌgræm"
 },
 {
   "id": 224,
   "word": "BUSINESS",
   "pronunciations": "ˈbɪznəs, ˈbɪznɪs"
 },
 {
   "id": 225,
   "word": "CITY",
   "pronunciations": "ˈsɪti"
 },
 {
   "id": 226,
   "word": "GROUP",
   "pronunciations": "ˈgruːp"
 },
 {
   "id": 227,
   "word": "GIVE",
   "pronunciations": "ˈgɪv"
 },
 {
   "id": 228,
   "word": "TOWARD",
   "pronunciations": "təˈwɔrd, ˈtɔrd"
 },
 {
   "id": 229,
   "word": "YOUNG",
   "pronunciations": "ˈjʌŋ"
 },
 {
   "id": 230,
   "word": "DAYS",
   "pronunciations": "ˈdeɪz"
 },
 {
   "id": 231,
   "word": "LET",
   "pronunciations": "ˈlɛt"
 },
 {
   "id": 232,
   "word": "ROOM",
   "pronunciations": "ˈruːm"
 },
 {
   "id": 233,
   "word": "PRESIDENT",
   "pronunciations": "ˈprɛzɪdənt"
 },
 {
   "id": 234,
   "word": "SIDE",
   "pronunciations": "ˈsaɪd"
 },
 {
   "id": 235,
   "word": "SOCIAL",
   "pronunciations": "ˈsoʊʃəl"
 },
 {
   "id": 236,
   "word": "GIVEN",
   "pronunciations": "ˈgɪvən, ˈgɪvɪn"
 },
 {
   "id": 237,
   "word": "PRESENT",
   "pronunciations": "ˈprɛzənt, priːˈzɛnt, pɝˈzɛnt"
 },
 {
   "id": 238,
   "word": "SEVERAL",
   "pronunciations": "ˈsɛvɝəl"
 },
 {
   "id": 239,
   "word": "ORDER",
   "pronunciations": "ˈɔrdɝ"
 },
 {
   "id": 240,
   "word": "NATIONAL",
   "pronunciations": "ˈnæʃənəl, ˈnæʃnəl"
 },
 {
   "id": 241,
   "word": "POSSIBLE",
   "pronunciations": "ˈpɑːsəbəl"
 },
 {
   "id": 242,
   "word": "RATHER",
   "pronunciations": "ˈræðɝ, ˈrʌðɝ"
 },
 {
   "id": 243,
   "word": "SECOND",
   "pronunciations": "ˈsɛkənd"
 },
 {
   "id": 244,
   "word": "FACE",
   "pronunciations": "ˈfeɪs"
 },
 {
   "id": 245,
   "word": "PER",
   "pronunciations": "ˈpɝː"
 },
 {
   "id": 246,
   "word": "AMONG",
   "pronunciations": "əˈmʌŋ"
 },
 {
   "id": 247,
   "word": "FORM",
   "pronunciations": "ˈfɔrm"
 },
 {
   "id": 248,
   "word": "IMPORTANT",
   "pronunciations": "ˌɪmˈpɔrtənt"
 },
 {
   "id": 249,
   "word": "OFTEN",
   "pronunciations": "ˈɔftən, ˈɔfən"
 },
 {
   "id": 250,
   "word": "THINGS",
   "pronunciations": "ˈθɪŋz"
 },
 {
   "id": 251,
   "word": "LOOKED",
   "pronunciations": "ˈlʊkt"
 },
 {
   "id": 252,
   "word": "EARLY",
   "pronunciations": "ˈɝːli"
 },
 {
   "id": 253,
   "word": "WHITE",
   "pronunciations": "ˈwaɪt, ˈhwaɪt"
 },
 {
   "id": 254,
   "word": "CASE",
   "pronunciations": "ˈkeɪs"
 },
 {
   "id": 255,
   "word": "JOHN",
   "pronunciations": "ˈdʒɑːn"
 },
 {
   "id": 256,
   "word": "LARGE",
   "pronunciations": "ˈlɑːrdʒ"
 },
 {
   "id": 257,
   "word": "BIG",
   "pronunciations": "ˈbɪg"
 },
 {
   "id": 258,
   "word": "FOUR",
   "pronunciations": "ˈfɔr"
 },
 {
   "id": 259,
   "word": "NEED",
   "pronunciations": "ˈniːd"
 },
 {
   "id": 260,
   "word": "BECOME",
   "pronunciations": "bɪˈkʌm"
 },
 {
   "id": 261,
   "word": "WITHIN",
   "pronunciations": "wɪˈðɪn, wɪˈθɪn"
 },
 {
   "id": 262,
   "word": "FELT",
   "pronunciations": "ˈfɛlt"
 },
 {
   "id": 263,
   "word": "ALONG",
   "pronunciations": "əˈlɔŋ"
 },
 {
   "id": 264,
   "word": "CHILDREN",
   "pronunciations": "ˈtʃɪldrən"
 },
 {
   "id": 265,
   "word": "SAW",
   "pronunciations": "ˈsɔ"
 },
 {
   "id": 266,
   "word": "BEST",
   "pronunciations": "ˈbɛst"
 },
 {
   "id": 267,
   "word": "CHURCH",
   "pronunciations": "ˈtʃɝːtʃ"
 },
 {
   "id": 268,
   "word": "EVER",
   "pronunciations": "ˈɛvɝ"
 },
 {
   "id": 269,
   "word": "LEAST",
   "pronunciations": "ˈliːst"
 },
 {
   "id": 270,
   "word": "POWER",
   "pronunciations": "ˈpaʊɝ"
 },
 {
   "id": 271,
   "word": "DEVELOPMENT",
   "pronunciations": "dɪˈvɛləpmənt"
 },
 {
   "id": 272,
   "word": "LIGHT",
   "pronunciations": "ˈlaɪt"
 },
 {
   "id": 273,
   "word": "SEEMED",
   "pronunciations": "ˈsiːmd"
 },
 {
   "id": 274,
   "word": "THING",
   "pronunciations": "ˈθɪŋ"
 },
 {
   "id": 275,
   "word": "FAMILY",
   "pronunciations": "ˈfæməli, ˈfæmli"
 },
 {
   "id": 276,
   "word": "INTEREST",
   "pronunciations": "ˈɪntəˌrɛst"
 },
 {
   "id": 277,
   "word": "WANT",
   "pronunciations": "ˈwɑːnt, ˈwɔnt"
 },
 {
   "id": 278,
   "word": "MEMBERS",
   "pronunciations": "ˈmɛmbɝz"
 },
 {
   "id": 279,
   "word": "MIND",
   "pronunciations": "ˈmaɪnd"
 },
 {
   "id": 280,
   "word": "AREA",
   "pronunciations": "ˈɛriːə"
 },
 {
   "id": 281,
   "word": "COUNTRY",
   "pronunciations": "ˈkʌntri"
 },
 {
   "id": 282,
   "word": "OTHERS",
   "pronunciations": "ˈʌðɝz"
 },
 {
   "id": 283,
   "word": "ALTHOUGH",
   "pronunciations": "ˌɔlˈðoʊ"
 },
 {
   "id": 284,
   "word": "TURNED",
   "pronunciations": "ˈtɝːnd"
 },
 {
   "id": 285,
   "word": "DONE",
   "pronunciations": "ˈdʌn"
 },
 {
   "id": 286,
   "word": "OPEN",
   "pronunciations": "ˈoʊpən"
 },
 {
   "id": 287,
   "word": "GOD",
   "pronunciations": "ˈgɑːd"
 },
 {
   "id": 288,
   "word": "SERVICE",
   "pronunciations": "ˈsɝːvəs, ˈsɝːvɪs"
 },
 {
   "id": 289,
   "word": "CERTAIN",
   "pronunciations": "ˈsɝːtən"
 },
 {
   "id": 290,
   "word": "KIND",
   "pronunciations": "ˈkaɪnd"
 },
 {
   "id": 291,
   "word": "PROBLEM",
   "pronunciations": "ˈprɑːbləm"
 },
 {
   "id": 292,
   "word": "BEGAN",
   "pronunciations": "bɪˈgæn, biːˈgæn"
 },
 {
   "id": 293,
   "word": "DIFFERENT",
   "pronunciations": "ˈdɪfɝənt, ˈdɪfrənt"
 },
 {
   "id": 294,
   "word": "DOOR",
   "pronunciations": "ˈdɔr"
 },
 {
   "id": 295,
   "word": "THUS",
   "pronunciations": "ˈðʌs"
 },
 {
   "id": 296,
   "word": "HELP",
   "pronunciations": "ˈhɛlp"
 },
 {
   "id": 297,
   "word": "SENSE",
   "pronunciations": "ˈsɛns"
 },
 {
   "id": 298,
   "word": "MEANS",
   "pronunciations": "ˈmiːnz"
 },
 {
   "id": 299,
   "word": "WHOLE",
   "pronunciations": "ˈhoʊl"
 },
 {
   "id": 300,
   "word": "MATTER",
   "pronunciations": "ˈmætɝ"
 },
 {
   "id": 301,
   "word": "PERHAPS",
   "pronunciations": "pɝˈhæps"
 },
 {
   "id": 302,
   "word": "ITSELF",
   "pronunciations": "ˌɪtˈsɛlf"
 },
 {
   "id": 303,
   "word": "IT'S",
   "pronunciations": "ˈɪts, ɪts"
 },
 {
   "id": 304,
   "word": "YORK",
   "pronunciations": "ˈjɔrk"
 },
 {
   "id": 305,
   "word": "TIMES",
   "pronunciations": "ˈtaɪmz"
 },
 {
   "id": 306,
   "word": "HUMAN",
   "pronunciations": "ˈhjuːmən, ˈjuːmən"
 },
 {
   "id": 307,
   "word": "LAW",
   "pronunciations": "ˈlɔ, ˈlɑː"
 },
 {
   "id": 308,
   "word": "LINE",
   "pronunciations": "ˈlaɪn"
 },
 {
   "id": 309,
   "word": "ABOVE",
   "pronunciations": "əˈbʌv"
 },
 {
   "id": 310,
   "word": "NAME",
   "pronunciations": "ˈneɪm"
 },
 {
   "id": 311,
   "word": "EXAMPLE",
   "pronunciations": "ɪgˈzæmpəl"
 },
 {
   "id": 312,
   "word": "ACTION",
   "pronunciations": "ˈækʃən"
 },
 {
   "id": 313,
   "word": "COMPANY",
   "pronunciations": "ˈkʌmpəˌniː"
 },
 {
   "id": 314,
   "word": "HANDS",
   "pronunciations": "ˈhændz, ˈhænz"
 },
 {
   "id": 315,
   "word": "LOCAL",
   "pronunciations": "ˈloʊkəl"
 },
 {
   "id": 316,
   "word": "SHOW",
   "pronunciations": "ˈʃoʊ"
 },
 {
   "id": 317,
   "word": "FIVE",
   "pronunciations": "ˈfaɪv"
 },
 {
   "id": 318,
   "word": "HISTORY",
   "pronunciations": "ˈhɪstɝi, ˈhɪstri"
 },
 {
   "id": 319,
   "word": "WHETHER",
   "pronunciations": "ˈwɛðɝ, ˈhwɛðɝ"
 },
 {
   "id": 320,
   "word": "GAVE",
   "pronunciations": "ˈgeɪv"
 },
 {
   "id": 321,
   "word": "EITHER",
   "pronunciations": "ˈiːðɝ, ˈaɪðɝ"
 },
 {
   "id": 322,
   "word": "TODAY",
   "pronunciations": "təˈdeɪ, tuːˈdeɪ"
 },
 {
   "id": 323,
   "word": "ACT",
   "pronunciations": "ˈækt"
 },
 {
   "id": 324,
   "word": "FEET",
   "pronunciations": "ˈfiːt"
 },
 {
   "id": 325,
   "word": "ACROSS",
   "pronunciations": "əˈkrɔs"
 },
 {
   "id": 326,
   "word": "PAST",
   "pronunciations": "ˈpæst"
 },
 {
   "id": 327,
   "word": "QUITE",
   "pronunciations": "ˈkwaɪt"
 },
 {
   "id": 328,
   "word": "TAKEN",
   "pronunciations": "ˈteɪkən"
 },
 {
   "id": 329,
   "word": "ANYTHING",
   "pronunciations": "ˈɛniːˌθɪŋ"
 },
 {
   "id": 330,
   "word": "HAVING",
   "pronunciations": "ˈhævɪŋ"
 },
 {
   "id": 331,
   "word": "SEEN",
   "pronunciations": "ˈsiːn"
 },
 {
   "id": 332,
   "word": "DEATH",
   "pronunciations": "ˈdɛθ"
 },
 {
   "id": 333,
   "word": "BODY",
   "pronunciations": "ˈbɑːdi"
 },
 {
   "id": 334,
   "word": "EXPERIENCE",
   "pronunciations": "ɪkˈspɪriːəns"
 },
 {
   "id": 335,
   "word": "HALF",
   "pronunciations": "ˈhæf"
 },
 {
   "id": 336,
   "word": "REALLY",
   "pronunciations": "ˈrɪli, ˈriːli"
 },
 {
   "id": 337,
   "word": "WEEK",
   "pronunciations": "ˈwiːk"
 },
 {
   "id": 338,
   "word": "CAR",
   "pronunciations": "ˈkɑːr"
 },
 {
   "id": 339,
   "word": "FIELD",
   "pronunciations": "ˈfiːld"
 },
 {
   "id": 340,
   "word": "WORD",
   "pronunciations": "ˈwɝːd"
 },
 {
   "id": 341,
   "word": "WORDS",
   "pronunciations": "ˈwɝːdz"
 },
 {
   "id": 342,
   "word": "ALREADY",
   "pronunciations": "ɔlˈrɛdi, ɔˈrɛdi"
 },
 {
   "id": 343,
   "word": "THEMSELVES",
   "pronunciations": "ðɛmˈsɛlvz, ðəmˈsɛlvz"
 },
 {
   "id": 344,
   "word": "I'M",
   "pronunciations": "ˈaɪm, əm"
 },
 {
   "id": 345,
   "word": "INFORMATION",
   "pronunciations": "ˌɪnˌfɔrˈmeɪʃən"
 },
 {
   "id": 346,
   "word": "SHALL",
   "pronunciations": "ˈʃæl"
 },
 {
   "id": 347,
   "word": "TELL",
   "pronunciations": "ˈtɛl"
 },
 {
   "id": 348,
   "word": "COLLEGE",
   "pronunciations": "ˈkɑːlɪdʒ"
 },
 {
   "id": 349,
   "word": "TOGETHER",
   "pronunciations": "təˈgɛðɝ"
 },
 {
   "id": 350,
   "word": "MONEY",
   "pronunciations": "ˈmʌni"
 },
 {
   "id": 351,
   "word": "PERIOD",
   "pronunciations": "ˈpɪriːəd"
 },
 {
   "id": 352,
   "word": "HELD",
   "pronunciations": "ˈhɛld"
 },
 {
   "id": 353,
   "word": "KEEP",
   "pronunciations": "ˈkiːp"
 },
 {
   "id": 354,
   "word": "SURE",
   "pronunciations": "ˈʃʊr"
 },
 {
   "id": 355,
   "word": "PROBABLY",
   "pronunciations": "ˈprɑːbəˌbliː"
 },
 {
   "id": 356,
   "word": "FREE",
   "pronunciations": "ˈfriː"
 },
 {
   "id": 357,
   "word": "SEEMS",
   "pronunciations": "ˈsiːmz"
 },
 {
   "id": 358,
   "word": "BEHIND",
   "pronunciations": "bɪˈhaɪnd"
 },
 {
   "id": 359,
   "word": "CANNOT",
   "pronunciations": "ˈkænɑːt, kəˈnɑːt"
 },
 {
   "id": 360,
   "word": "POLITICAL",
   "pronunciations": "pəˈlɪtəkəl, pəˈlɪtɪkəl"
 },
 {
   "id": 361,
   "word": "REAL",
   "pronunciations": "ˈriːl"
 },
 {
   "id": 362,
   "word": "AIR",
   "pronunciations": "ˈɛr"
 },
 {
   "id": 363,
   "word": "QUESTION",
   "pronunciations": "ˈkwɛstʃən, ˈkwɛʃən"
 },
 {
   "id": 364,
   "word": "MAKING",
   "pronunciations": "ˈmeɪkɪŋ"
 },
 {
   "id": 365,
   "word": "OFFICE",
   "pronunciations": "ˈɔfəs"
 },
 {
   "id": 366,
   "word": "BROUGHT",
   "pronunciations": "ˈbrɔt"
 },
 {
   "id": 367,
   "word": "MISS",
   "pronunciations": "ˈmɪs"
 },
 {
   "id": 368,
   "word": "WHOSE",
   "pronunciations": "ˈhuːz"
 },
 {
   "id": 369,
   "word": "SPECIAL",
   "pronunciations": "ˈspɛʃəl"
 },
 {
   "id": 370,
   "word": "HEARD",
   "pronunciations": "ˈhɝːd"
 },
 {
   "id": 371,
   "word": "MAJOR",
   "pronunciations": "ˈmeɪdʒɝ"
 },
 {
   "id": 372,
   "word": "PROBLEMS",
   "pronunciations": "ˈprɑːbləmz"
 },
 {
   "id": 373,
   "word": "AGO",
   "pronunciations": "əˈgoʊ"
 },
 {
   "id": 374,
   "word": "BECAME",
   "pronunciations": "bɪˈkeɪm, biːˈkeɪm"
 },
 {
   "id": 375,
   "word": "FEDERAL",
   "pronunciations": "ˈfɛdɝəl, ˈfɛdrəl"
 },
 {
   "id": 376,
   "word": "MOMENT",
   "pronunciations": "ˈmoʊmənt"
 },
 {
   "id": 377,
   "word": "STUDY",
   "pronunciations": "ˈstʌdi"
 },
 {
   "id": 378,
   "word": "AVAILABLE",
   "pronunciations": "əˈveɪləbəl"
 },
 {
   "id": 379,
   "word": "KNOWN",
   "pronunciations": "ˈnoʊn"
 },
 {
   "id": 380,
   "word": "RESULT",
   "pronunciations": "rɪˈzʌlt, riːˈzʌlt"
 },
 {
   "id": 381,
   "word": "STREET",
   "pronunciations": "ˈstriːt"
 },
 {
   "id": 382,
   "word": "ECONOMIC",
   "pronunciations": "ˌɛkəˈnɑːmɪk, ˌiːkəˈnɑːmɪk"
 },
 {
   "id": 383,
   "word": "BOY",
   "pronunciations": "ˈbɔɪ"
 },
 {
   "id": 384,
   "word": "POSITION",
   "pronunciations": "pəˈzɪʃən"
 },
 {
   "id": 385,
   "word": "REASON",
   "pronunciations": "ˈriːzən"
 },
 {
   "id": 386,
   "word": "CHANGE",
   "pronunciations": "ˈtʃeɪndʒ"
 },
 {
   "id": 387,
   "word": "SOUTH",
   "pronunciations": "ˈsaʊθ"
 },
 {
   "id": 388,
   "word": "BOARD",
   "pronunciations": "ˈbɔrd"
 },
 {
   "id": 389,
   "word": "INDIVIDUAL",
   "pronunciations": "ˌɪndəˈvɪdʒəwəl"
 },
 {
   "id": 390,
   "word": "JOB",
   "pronunciations": "ˈdʒɑːb, ˈdʒoʊb"
 },
 {
   "id": 391,
   "word": "AM",
   "pronunciations": "ˈæm, ˈeɪˈɛm"
 },
 {
   "id": 392,
   "word": "SOCIETY",
   "pronunciations": "soʊˈsaɪɪti"
 },
 {
   "id": 393,
   "word": "AREAS",
   "pronunciations": "ˈɛriːəz"
 },
 {
   "id": 394,
   "word": "WEST",
   "pronunciations": "ˈwɛst"
 },
 {
   "id": 395,
   "word": "CLOSE",
   "pronunciations": "ˈkloʊs, ˈkloʊz"
 },
 {
   "id": 396,
   "word": "TURN",
   "pronunciations": "ˈtɝːn"
 },
 {
   "id": 397,
   "word": "COMMUNITY",
   "pronunciations": "kəˈmjuːnəti, kəˈmjuːnɪti"
 },
 {
   "id": 398,
   "word": "LOVE",
   "pronunciations": "ˈlʌv"
 },
 {
   "id": 399,
   "word": "TRUE",
   "pronunciations": "ˈtruː"
 },
 {
   "id": 400,
   "word": "COURT",
   "pronunciations": "ˈkɔrt"
 },
 {
   "id": 401,
   "word": "FORCE",
   "pronunciations": "ˈfɔrs"
 },
 {
   "id": 402,
   "word": "FULL",
   "pronunciations": "ˈfʊl"
 },
 {
   "id": 403,
   "word": "COST",
   "pronunciations": "ˈkɑːst, ˈkɔst"
 },
 {
   "id": 404,
   "word": "SEEM",
   "pronunciations": "ˈsiːm"
 },
 {
   "id": 405,
   "word": "WIFE",
   "pronunciations": "ˈwaɪf"
 },
 {
   "id": 406,
   "word": "AGE",
   "pronunciations": "ˈeɪdʒ"
 },
 {
   "id": 407,
   "word": "FUTURE",
   "pronunciations": "ˈfjuːtʃɝ"
 },
 {
   "id": 408,
   "word": "VOICE",
   "pronunciations": "ˈvɔɪs"
 },
 {
   "id": 409,
   "word": "WANTED",
   "pronunciations": "ˈwɔntɪd"
 },
 {
   "id": 410,
   "word": "DEPARTMENT",
   "pronunciations": "dɪˈpɑːrtmənt"
 },
 {
   "id": 411,
   "word": "CENTER",
   "pronunciations": "ˈsɛntɝ, ˈsɛnɝ"
 },
 {
   "id": 412,
   "word": "WOMAN",
   "pronunciations": "ˈwʊmən"
 },
 {
   "id": 413,
   "word": "COMMON",
   "pronunciations": "ˈkɑːmən"
 },
 {
   "id": 414,
   "word": "CONTROL",
   "pronunciations": "kənˈtroʊl"
 },
 {
   "id": 415,
   "word": "NECESSARY",
   "pronunciations": "ˈnɛsəˌsɛri"
 },
 {
   "id": 416,
   "word": "POLICY",
   "pronunciations": "ˈpɑːləsi"
 },
 {
   "id": 417,
   "word": "FOLLOWING",
   "pronunciations": "ˈfɑːloʊɪŋ"
 },
 {
   "id": 418,
   "word": "FRONT",
   "pronunciations": "ˈfrʌnt"
 },
 {
   "id": 419,
   "word": "SOMETIMES",
   "pronunciations": "səmˈtaɪmz, ˈsʌmˌtaɪmz"
 },
 {
   "id": 420,
   "word": "GIRL",
   "pronunciations": "ˈgɝːl"
 },
 {
   "id": 421,
   "word": "SIX",
   "pronunciations": "ˈsɪks"
 },
 {
   "id": 422,
   "word": "CLEAR",
   "pronunciations": "ˈklɪr"
 },
 {
   "id": 423,
   "word": "FURTHER",
   "pronunciations": "ˈfɝːðɝ"
 },
 {
   "id": 424,
   "word": "LAND",
   "pronunciations": "ˈlænd"
 },
 {
   "id": 425,
   "word": "ABLE",
   "pronunciations": "ˈeɪbəl"
 },
 {
   "id": 426,
   "word": "FEEL",
   "pronunciations": "ˈfiːl"
 },
 {
   "id": 427,
   "word": "MOTHER",
   "pronunciations": "ˈmʌðɝ"
 },
 {
   "id": 428,
   "word": "MUSIC",
   "pronunciations": "ˈmjuːzɪk"
 },
 {
   "id": 429,
   "word": "PARTY",
   "pronunciations": "ˈpɑːrti"
 },
 {
   "id": 430,
   "word": "PROVIDE",
   "pronunciations": "prəˈvaɪd"
 },
 {
   "id": 431,
   "word": "EDUCATION",
   "pronunciations": "ˌɛdʒəˈkeɪʃən, ˌɛdʒjuːˈkeɪʃən"
 },
 {
   "id": 432,
   "word": "UNIVERSITY",
   "pronunciations": "ˌjuːnəˈvɝːsəti"
 },
 {
   "id": 433,
   "word": "CHILD",
   "pronunciations": "ˈtʃaɪld"
 },
 {
   "id": 434,
   "word": "EFFECT",
   "pronunciations": "ɪˈfɛkt, ˈiːfɛkt, əˈfɛkt"
 },
 {
   "id": 435,
   "word": "LEVEL",
   "pronunciations": "ˈlɛvəl"
 },
 {
   "id": 436,
   "word": "STUDENTS",
   "pronunciations": "ˈstuːdənts"
 },
 {
   "id": 437,
   "word": "MILITARY",
   "pronunciations": "ˈmɪləˌtɛri, ˈmɪlɪˌtɛri"
 },
 {
   "id": 438,
   "word": "RUN",
   "pronunciations": "ˈrʌn"
 },
 {
   "id": 439,
   "word": "SHORT",
   "pronunciations": "ˈʃɔrt"
 },
 {
   "id": 440,
   "word": "STOOD",
   "pronunciations": "ˈstʊd"
 },
 {
   "id": 441,
   "word": "TOWN",
   "pronunciations": "ˈtaʊn"
 },
 {
   "id": 442,
   "word": "MORNING",
   "pronunciations": "ˈmɔrnɪŋ"
 },
 {
   "id": 443,
   "word": "TOTAL",
   "pronunciations": "ˈtoʊtəl"
 },
 {
   "id": 444,
   "word": "OUTSIDE",
   "pronunciations": "ˈaʊtˈsaɪd"
 },
 {
   "id": 445,
   "word": "FIGURE",
   "pronunciations": "ˈfɪgjɝ"
 },
 {
   "id": 446,
   "word": "RATE",
   "pronunciations": "ˈreɪt"
 },
 {
   "id": 447,
   "word": "ART",
   "pronunciations": "ˈɑːrt"
 },
 {
   "id": 448,
   "word": "CENTURY",
   "pronunciations": "ˈsɛntʃɝi"
 },
 {
   "id": 449,
   "word": "CLASS",
   "pronunciations": "ˈklæs"
 },
 {
   "id": 450,
   "word": "NORTH",
   "pronunciations": "ˈnɔrθ"
 },
 {
   "id": 451,
   "word": "USUALLY",
   "pronunciations": "ˈjuːʒəwəli, ˈjuːʒəli"
 },
 {
   "id": 452,
   "word": "WASHINGTON",
   "pronunciations": "ˈwɑːʃɪŋtən, ˈwɔʃɪŋtən"
 },
 {
   "id": 453,
   "word": "LEAVE",
   "pronunciations": "ˈliːv"
 },
 {
   "id": 454,
   "word": "PLAN",
   "pronunciations": "ˈplæn"
 },
 {
   "id": 455,
   "word": "THEREFORE",
   "pronunciations": "ˈðɛrˌfɔr"
 },
 {
   "id": 456,
   "word": "EVIDENCE",
   "pronunciations": "ˈɛvədəns"
 },
 {
   "id": 457,
   "word": "MILLION",
   "pronunciations": "ˈmɪljən"
 },
 {
   "id": 458,
   "word": "SOUND",
   "pronunciations": "ˈsaʊnd"
 },
 {
   "id": 459,
   "word": "TOP",
   "pronunciations": "ˈtɑːp, ˈtɔp"
 },
 {
   "id": 460,
   "word": "BLACK",
   "pronunciations": "ˈblæk"
 },
 {
   "id": 461,
   "word": "HARD",
   "pronunciations": "ˈhɑːrd"
 },
 {
   "id": 462,
   "word": "STRONG",
   "pronunciations": "ˈstrɔŋ"
 },
 {
   "id": 463,
   "word": "TAX",
   "pronunciations": "ˈtæks"
 },
 {
   "id": 464,
   "word": "VARIOUS",
   "pronunciations": "ˈvɛriːəs"
 },
 {
   "id": 465,
   "word": "BELIEVE",
   "pronunciations": "bɪˈliːv"
 },
 {
   "id": 466,
   "word": "PLAY",
   "pronunciations": "ˈpleɪ"
 },
 {
   "id": 467,
   "word": "SAYS",
   "pronunciations": "ˈsɛz, ˈsɪz"
 },
 {
   "id": 468,
   "word": "SURFACE",
   "pronunciations": "ˈsɝːfəs"
 },
 {
   "id": 469,
   "word": "TYPE",
   "pronunciations": "ˈtaɪp"
 },
 {
   "id": 470,
   "word": "VALUE",
   "pronunciations": "ˈvæljuː"
 },
 {
   "id": 471,
   "word": "MEAN",
   "pronunciations": "ˈmiːn"
 },
 {
   "id": 472,
   "word": "SOON",
   "pronunciations": "ˈsuːn"
 },
 {
   "id": 473,
   "word": "LINES",
   "pronunciations": "ˈlaɪnz"
 },
 {
   "id": 474,
   "word": "MODERN",
   "pronunciations": "ˈmɑːdɝn"
 },
 {
   "id": 475,
   "word": "NEAR",
   "pronunciations": "ˈnɪr"
 },
 {
   "id": 476,
   "word": "PEACE",
   "pronunciations": "ˈpiːs"
 },
 {
   "id": 477,
   "word": "TABLE",
   "pronunciations": "ˈteɪbəl"
 },
 {
   "id": 478,
   "word": "BOOK",
   "pronunciations": "ˈbʊk"
 },
 {
   "id": 479,
   "word": "RED",
   "pronunciations": "ˈrɛd"
 },
 {
   "id": 480,
   "word": "ROAD",
   "pronunciations": "ˈroʊd"
 },
 {
   "id": 481,
   "word": "MINUTES",
   "pronunciations": "ˈmɪnəts"
 },
 {
   "id": 482,
   "word": "PERSONAL",
   "pronunciations": "ˈpɝːsɪnəl"
 },
 {
   "id": 483,
   "word": "PROCESS",
   "pronunciations": "ˈprɑːˌsɛs, ˈprɔˌsɛs"
 },
 {
   "id": 484,
   "word": "SITUATION",
   "pronunciations": "ˌsɪtʃuːˈeɪʃən"
 },
 {
   "id": 485,
   "word": "ALONE",
   "pronunciations": "əˈloʊn"
 },
 {
   "id": 486,
   "word": "ENGLISH",
   "pronunciations": "ˈɪŋglɪʃ, ˈɪŋlɪʃ"
 },
 {
   "id": 487,
   "word": "GONE",
   "pronunciations": "ˈgɔn"
 },
 {
   "id": 488,
   "word": "IDEA",
   "pronunciations": "aɪˈdiːə"
 },
 {
   "id": 489,
   "word": "INCREASE",
   "pronunciations": "ˌɪnˈkriːs, ˈɪnˌkriːs"
 },
 {
   "id": 490,
   "word": "NOR",
   "pronunciations": "ˈnɔr"
 },
 {
   "id": 491,
   "word": "SCHOOLS",
   "pronunciations": "ˈskuːlz"
 },
 {
   "id": 492,
   "word": "WOMEN",
   "pronunciations": "ˈwɪmən"
 },
 {
   "id": 493,
   "word": "AMERICA",
   "pronunciations": "əˈmɛrɪkə"
 },
 {
   "id": 494,
   "word": "LIVING",
   "pronunciations": "ˈlɪvɪŋ"
 },
 {
   "id": 495,
   "word": "STARTED",
   "pronunciations": "ˈstɑːrtəd, ˈstɑːrtɪd"
 },
 {
   "id": 496,
   "word": "LONGER",
   "pronunciations": "ˈlɔŋgɝ"
 },
 {
   "id": 497,
   "word": "CUT",
   "pronunciations": "ˈkʌt"
 },
 {
   "id": 498,
   "word": "DR.",
   "pronunciations": "ˈdraɪv, ˈdɑːktɝ"
 },
 {
   "id": 499,
   "word": "FINALLY",
   "pronunciations": "ˈfaɪnəli"
 },
 {
   "id": 500,
   "word": "NATURE",
   "pronunciations": "ˈneɪtʃɝ"
 },
 {
   "id": 501,
   "word": "PRIVATE",
   "pronunciations": "ˈpraɪvət"
 },
 {
   "id": 502,
   "word": "SECRETARY",
   "pronunciations": "ˈsɛkrəˌtɛri"
 },
 {
   "id": 503,
   "word": "THIRD",
   "pronunciations": "ˈθɝːd"
 },
 {
   "id": 504,
   "word": "MONTHS",
   "pronunciations": "ˈmʌnθs"
 },
 {
   "id": 505,
   "word": "SECTION",
   "pronunciations": "ˈsɛkʃən"
 },
 {
   "id": 506,
   "word": "CALL",
   "pronunciations": "ˈkɔl"
 },
 {
   "id": 507,
   "word": "GREATER",
   "pronunciations": "ˈgreɪtɝ"
 },
 {
   "id": 508,
   "word": "EXPECTED",
   "pronunciations": "ɪkˈspɛktəd, ɪkˈspɛktɪd"
 },
 {
   "id": 509,
   "word": "FIRE",
   "pronunciations": "ˈfaɪɝ, ˈfaɪr"
 },
 {
   "id": 510,
   "word": "NEEDED",
   "pronunciations": "ˈniːdəd, ˈniːdɪd"
 },
 {
   "id": 511,
   "word": "THAT'S",
   "pronunciations": "ˈðæts"
 },
 {
   "id": 512,
   "word": "GROUND",
   "pronunciations": "ˈgraʊnd"
 },
 {
   "id": 513,
   "word": "KEPT",
   "pronunciations": "ˈkɛpt, ˈkæpt"
 },
 {
   "id": 514,
   "word": "VALUES",
   "pronunciations": "ˈvæljuːz"
 },
 {
   "id": 515,
   "word": "VIEW",
   "pronunciations": "vˈjuː"
 },
 {
   "id": 516,
   "word": "DARK",
   "pronunciations": "ˈdɑːrk"
 },
 {
   "id": 517,
   "word": "EVERYTHING",
   "pronunciations": "ˈɛvriːˌθɪŋ"
 },
 {
   "id": 518,
   "word": "PRESSURE",
   "pronunciations": "ˈprɛʃɝ"
 },
 {
   "id": 519,
   "word": "BASIS",
   "pronunciations": "ˈbeɪsəs, ˈbeɪsɪs"
 },
 {
   "id": 520,
   "word": "SPACE",
   "pronunciations": "ˈspeɪs"
 },
 {
   "id": 521,
   "word": "EAST",
   "pronunciations": "ˈiːst"
 },
 {
   "id": 522,
   "word": "FATHER",
   "pronunciations": "ˈfɑːðɝ"
 },
 {
   "id": 523,
   "word": "COMPLETE",
   "pronunciations": "kəmˈpliːt"
 },
 {
   "id": 524,
   "word": "REQUIRED",
   "pronunciations": "riːˈkwaɪɝd, riːˈkwaɪrd"
 },
 {
   "id": 525,
   "word": "SPIRIT",
   "pronunciations": "ˈspɪrət, ˈspɪrɪt"
 },
 {
   "id": 526,
   "word": "UNION",
   "pronunciations": "ˈjuːnjən"
 },
 {
   "id": 527,
   "word": "EXCEPT",
   "pronunciations": "ɪkˈsɛpt"
 },
 {
   "id": 528,
   "word": "I'LL",
   "pronunciations": "ˈaɪl"
 },
 {
   "id": 529,
   "word": "MOVED",
   "pronunciations": "ˈmuːvd"
 },
 {
   "id": 530,
   "word": "WROTE",
   "pronunciations": "ˈroʊt"
 },
 {
   "id": 531,
   "word": "CONDITIONS",
   "pronunciations": "kənˈdɪʃənz"
 },
 {
   "id": 532,
   "word": "RETURN",
   "pronunciations": "rɪˈtɝːn, riːˈtɝːn"
 },
 {
   "id": 533,
   "word": "SUPPORT",
   "pronunciations": "səˈpɔrt"
 },
 {
   "id": 534,
   "word": "ATTENTION",
   "pronunciations": "əˈtɛnʃən"
 },
 {
   "id": 535,
   "word": "LATE",
   "pronunciations": "ˈleɪt"
 },
 {
   "id": 536,
   "word": "PARTICULAR",
   "pronunciations": "pɝˈtɪkjəlɝ, ˌpɑːˈtɪkjəlɝ"
 },
 {
   "id": 537,
   "word": "RECENT",
   "pronunciations": "ˈriːsənt"
 },
 {
   "id": 538,
   "word": "HOPE",
   "pronunciations": "ˈhoʊp"
 },
 {
   "id": 539,
   "word": "LIVE",
   "pronunciations": "ˈlaɪv, ˈlɪv"
 },
 {
   "id": 540,
   "word": "BROWN",
   "pronunciations": "ˈbraʊn"
 },
 {
   "id": 541,
   "word": "COSTS",
   "pronunciations": "ˈkɑːsts, ˈkɔsts"
 },
 {
   "id": 542,
   "word": "ELSE",
   "pronunciations": "ˈɛls"
 },
 {
   "id": 543,
   "word": "BEYOND",
   "pronunciations": "bɪˈɑːnd, ˌbiːˈɔnd, bɪˈɔnd"
 },
 {
   "id": 544,
   "word": "COULDN'T",
   "pronunciations": "ˈkʊdənt, ˈkʊdən"
 },
 {
   "id": 545,
   "word": "FORCES",
   "pronunciations": "ˈfɔrsɪz"
 },
 {
   "id": 546,
   "word": "NATIONS",
   "pronunciations": "ˈneɪʃənz"
 },
 {
   "id": 547,
   "word": "STAGE",
   "pronunciations": "ˈsteɪdʒ"
 },
 {
   "id": 548,
   "word": "TAKING",
   "pronunciations": "ˈteɪkɪŋ"
 },
 {
   "id": 549,
   "word": "COMING",
   "pronunciations": "ˈkʌmɪŋ"
 },
 {
   "id": 550,
   "word": "DEAD",
   "pronunciations": "ˈdɛd"
 },
 {
   "id": 551,
   "word": "HOURS",
   "pronunciations": "ˈaʊɝz, ˈaʊrz"
 },
 {
   "id": 552,
   "word": "INSIDE",
   "pronunciations": "ˌɪnˈsaɪd, ˈɪnˌsaɪd"
 },
 {
   "id": 553,
   "word": "MATERIAL",
   "pronunciations": "məˈtɪriːəl"
 },
 {
   "id": 554,
   "word": "PERSON",
   "pronunciations": "ˈpɝːsən"
 },
 {
   "id": 555,
   "word": "READ",
   "pronunciations": "ˈrɛd, ˈriːd"
 },
 {
   "id": 556,
   "word": "REPORT",
   "pronunciations": "riːˈpɔrt, rɪˈpɔrt"
 },
 {
   "id": 557,
   "word": "DATA",
   "pronunciations": "ˈdeɪtə, ˈdætə"
 },
 {
   "id": 558,
   "word": "HEART",
   "pronunciations": "ˈhɑːrt"
 },
 {
   "id": 559,
   "word": "INSTEAD",
   "pronunciations": "ˌɪnˈstɛd"
 },
 {
   "id": 560,
   "word": "LOOKING",
   "pronunciations": "ˈlʊkɪŋ"
 },
 {
   "id": 561,
   "word": "LOST",
   "pronunciations": "ˈlɔst"
 },
 {
   "id": 562,
   "word": "LOW",
   "pronunciations": "ˈloʊ"
 },
 {
   "id": 563,
   "word": "MILES",
   "pronunciations": "ˈmaɪlz, ˈmaɪəlz"
 },
 {
   "id": 564,
   "word": "ADDED",
   "pronunciations": "ˈædɪd"
 },
 {
   "id": 565,
   "word": "AMOUNT",
   "pronunciations": "əˈmaʊnt"
 },
 {
   "id": 566,
   "word": "FEELING",
   "pronunciations": "ˈfiːlɪŋ"
 },
 {
   "id": 567,
   "word": "FOLLOWED",
   "pronunciations": "ˈfɑːloʊd"
 },
 {
   "id": 568,
   "word": "MAKES",
   "pronunciations": "ˈmeɪks"
 },
 {
   "id": 569,
   "word": "PAY",
   "pronunciations": "ˈpeɪ"
 },
 {
   "id": 570,
   "word": "SINGLE",
   "pronunciations": "ˈsɪŋgəl"
 },
 {
   "id": 571,
   "word": "BASIC",
   "pronunciations": "ˈbeɪsɪk"
 },
 {
   "id": 572,
   "word": "COLD",
   "pronunciations": "ˈkoʊld"
 },
 {
   "id": 573,
   "word": "HUNDRED",
   "pronunciations": "ˈhʌndrəd, ˈhʌndrɪd, ˈhʌnɝd, ˈhʌndɝd"
 },
 {
   "id": 574,
   "word": "INCLUDING",
   "pronunciations": "ˌɪnˈkluːdɪŋ"
 },
 {
   "id": 575,
   "word": "INDUSTRY",
   "pronunciations": "ˈɪndəstri"
 },
 {
   "id": 576,
   "word": "MOVE",
   "pronunciations": "ˈmuːv"
 },
 {
   "id": 577,
   "word": "RESEARCH",
   "pronunciations": "riːˈsɝːtʃ, ˈriːsɝtʃ"
 },
 {
   "id": 578,
   "word": "SIMPLY",
   "pronunciations": "ˈsɪmpli"
 },
 {
   "id": 579,
   "word": "DEVELOPED",
   "pronunciations": "dɪˈvɛləpt"
 },
 {
   "id": 580,
   "word": "TRIED",
   "pronunciations": "ˈtraɪd"
 },
 {
   "id": 581,
   "word": "CAN'T",
   "pronunciations": "ˈkænt"
 },
 {
   "id": 582,
   "word": "HOLD",
   "pronunciations": "ˈhoʊld"
 },
 {
   "id": 583,
   "word": "REACHED",
   "pronunciations": "ˈriːtʃt"
 },
 {
   "id": 584,
   "word": "COMMITTEE",
   "pronunciations": "kəˈmɪti"
 },
 {
   "id": 585,
   "word": "DEFENSE",
   "pronunciations": "dɪˈfɛns"
 },
 {
   "id": 586,
   "word": "EQUIPMENT",
   "pronunciations": "ɪˈkwɪpmənt"
 },
 {
   "id": 587,
   "word": "ISLAND",
   "pronunciations": "ˈaɪlənd"
 },
 {
   "id": 588,
   "word": "ACTUALLY",
   "pronunciations": "ˈækˌtʃuːəli, ˈæktʃli, ˈækʃəli"
 },
 {
   "id": 589,
   "word": "SHOWN",
   "pronunciations": "ˈʃoʊn"
 },
 {
   "id": 590,
   "word": "CENTRAL",
   "pronunciations": "ˈsɛntrəl"
 },
 {
   "id": 591,
   "word": "RELIGIOUS",
   "pronunciations": "rɪˈlɪdʒəs, riːˈlɪdʒəs"
 },
 {
   "id": 592,
   "word": "RIVER",
   "pronunciations": "ˈrɪvɝ"
 },
 {
   "id": 593,
   "word": "SON",
   "pronunciations": "ˈsʌn"
 },
 {
   "id": 594,
   "word": "BEGINNING",
   "pronunciations": "bɪˈgɪnɪŋ"
 },
 {
   "id": 595,
   "word": "GETTING",
   "pronunciations": "ˈgɛtɪŋ, ˈgɪtɪŋ"
 },
 {
   "id": 596,
   "word": "SORT",
   "pronunciations": "ˈsɔrt"
 },
 {
   "id": 597,
   "word": "ST.",
   "pronunciations": "ˈstriːt, ˈseɪnt"
 },
 {
   "id": 598,
   "word": "TEN",
   "pronunciations": "ˈtɛn"
 },
 {
   "id": 599,
   "word": "DOING",
   "pronunciations": "ˈduːɪŋ"
 },
 {
   "id": 600,
   "word": "RECEIVED",
   "pronunciations": "rəˈsiːvd, rɪˈsiːvd, riːˈsiːvd"
 },
 {
   "id": 601,
   "word": "REST",
   "pronunciations": "ˈrɛst"
 },
 {
   "id": 602,
   "word": "TERMS",
   "pronunciations": "ˈtɝːmz"
 },
 {
   "id": 603,
   "word": "TRYING",
   "pronunciations": "ˈtraɪɪŋ, ˈtraɪŋ"
 },
 {
   "id": 604,
   "word": "CARE",
   "pronunciations": "ˈkɛr"
 },
 {
   "id": 605,
   "word": "ESPECIALLY",
   "pronunciations": "əˈspɛʃli, əˈspɛʃəli"
 },
 {
   "id": 606,
   "word": "FRIENDS",
   "pronunciations": "ˈfrɛndz"
 },
 {
   "id": 607,
   "word": "INDEED",
   "pronunciations": "ˌɪnˈdiːd"
 },
 {
   "id": 608,
   "word": "MEDICAL",
   "pronunciations": "ˈmɛdəkəl, ˈmɛdɪkəl"
 },
 {
   "id": 609,
   "word": "PICTURE",
   "pronunciations": "ˈpɪktʃɝ"
 },
 {
   "id": 610,
   "word": "ADMINISTRATION",
   "pronunciations": "ædˌmɪnɪˈstreɪʃən"
 },
 {
   "id": 611,
   "word": "DIFFICULT",
   "pronunciations": "ˈdɪfəkəlt"
 },
 {
   "id": 612,
   "word": "FINE",
   "pronunciations": "ˈfaɪn"
 },
 {
   "id": 613,
   "word": "SUBJECT",
   "pronunciations": "səbˈdʒɛkt, ˈsʌbdʒɪkt"
 },
 {
   "id": 614,
   "word": "BUILDING",
   "pronunciations": "ˈbɪldɪŋ"
 },
 {
   "id": 615,
   "word": "HIGHER",
   "pronunciations": "ˈhaɪɝ"
 },
 {
   "id": 616,
   "word": "SIMPLE",
   "pronunciations": "ˈsɪmpəl"
 },
 {
   "id": 617,
   "word": "WALL",
   "pronunciations": "ˈwɔl"
 },
 {
   "id": 618,
   "word": "MEETING",
   "pronunciations": "ˈmiːtɪŋ"
 },
 {
   "id": 619,
   "word": "WALKED",
   "pronunciations": "ˈwɔkt"
 },
 {
   "id": 620,
   "word": "BRING",
   "pronunciations": "ˈbrɪŋ"
 },
 {
   "id": 621,
   "word": "FLOOR",
   "pronunciations": "ˈflɔr"
 },
 {
   "id": 622,
   "word": "FOREIGN",
   "pronunciations": "ˈfɔrən, ˈfɑːrən"
 },
 {
   "id": 623,
   "word": "PAPER",
   "pronunciations": "ˈpeɪpɝ"
 },
 {
   "id": 624,
   "word": "PASSED",
   "pronunciations": "ˈpæst"
 },
 {
   "id": 625,
   "word": "RANGE",
   "pronunciations": "ˈreɪndʒ"
 },
 {
   "id": 626,
   "word": "SIMILAR",
   "pronunciations": "ˈsɪməlɝ"
 },
 {
   "id": 627,
   "word": "FINAL",
   "pronunciations": "ˈfaɪnəl"
 },
 {
   "id": 628,
   "word": "NATURAL",
   "pronunciations": "ˈnætʃɝəl, ˈnætʃrəl"
 },
 {
   "id": 629,
   "word": "PROPERTY",
   "pronunciations": "ˈprɑːpɝti"
 },
 {
   "id": 630,
   "word": "TRAINING",
   "pronunciations": "ˈtreɪnɪŋ"
 },
 {
   "id": 631,
   "word": "CENT",
   "pronunciations": "ˈsɛnt"
 },
 {
   "id": 632,
   "word": "COUNTY",
   "pronunciations": "ˈkaʊnti, ˈkaʊni"
 },
 {
   "id": 633,
   "word": "GROWTH",
   "pronunciations": "ˈgroʊθ"
 },
 {
   "id": 634,
   "word": "INTERNATIONAL",
   "pronunciations": "ˌɪntɝˈnæʃənɑːl, ˌɪnɝˈnæʃənɑːl"
 },
 {
   "id": 635,
   "word": "MARKET",
   "pronunciations": "ˈmɑːrkət, ˈmɑːrkɪt"
 },
 {
   "id": 636,
   "word": "POLICE",
   "pronunciations": "pəˈliːs"
 },
 {
   "id": 637,
   "word": "ENGLAND",
   "pronunciations": "ˈɪŋglənd"
 },
 {
   "id": 638,
   "word": "START",
   "pronunciations": "ˈstɑːrt"
 },
 {
   "id": 639,
   "word": "TALK",
   "pronunciations": "ˈtɔk"
 },
 {
   "id": 640,
   "word": "WASN'T",
   "pronunciations": "ˈwɑːzənt, ˈwʌzənt"
 },
 {
   "id": 641,
   "word": "WRITTEN",
   "pronunciations": "ˈrɪtən"
 },
 {
   "id": 642,
   "word": "HEAR",
   "pronunciations": "ˈhiːr"
 },
 {
   "id": 643,
   "word": "STORY",
   "pronunciations": "ˈstɔri"
 },
 {
   "id": 644,
   "word": "SUDDENLY",
   "pronunciations": "ˈsʌdənli"
 },
 {
   "id": 645,
   "word": "ANSWER",
   "pronunciations": "ˈænsɝ"
 },
 {
   "id": 646,
   "word": "CONGRESS",
   "pronunciations": "ˈkɑːŋgrəs"
 },
 {
   "id": 647,
   "word": "HALL",
   "pronunciations": "ˈhɔl"
 },
 {
   "id": 648,
   "word": "ISSUE",
   "pronunciations": "ˈɪʃuː"
 },
 {
   "id": 649,
   "word": "NEEDS",
   "pronunciations": "ˈniːdz"
 },
 {
   "id": 650,
   "word": "CONSIDERED",
   "pronunciations": "kənˈsɪdɝd"
 },
 {
   "id": 651,
   "word": "COUNTRIES",
   "pronunciations": "ˈkʌntriːz"
 },
 {
   "id": 652,
   "word": "LIKELY",
   "pronunciations": "ˈlaɪkli"
 },
 {
   "id": 653,
   "word": "WORKING",
   "pronunciations": "ˈwɝːkɪŋ"
 },
 {
   "id": 654,
   "word": "YOU'RE",
   "pronunciations": "ˈjʊr, ˈjuːr"
 },
 {
   "id": 655,
   "word": "EARTH",
   "pronunciations": "ˈɝːθ"
 },
 {
   "id": 656,
   "word": "SAT",
   "pronunciations": "ˈsæt"
 },
 {
   "id": 657,
   "word": "ENTIRE",
   "pronunciations": "ɪnˈtaɪɝ"
 },
 {
   "id": 658,
   "word": "HAPPENED",
   "pronunciations": "ˈhæpənd"
 },
 {
   "id": 659,
   "word": "LABOR",
   "pronunciations": "ˈleɪbɝ"
 },
 {
   "id": 660,
   "word": "MEET",
   "pronunciations": "ˈmiːt"
 },
 {
   "id": 661,
   "word": "PURPOSE",
   "pronunciations": "ˈpɝːpəs"
 },
 {
   "id": 662,
   "word": "RESULTS",
   "pronunciations": "rɪˈzʌlts, riːˈzʌlts"
 },
 {
   "id": 663,
   "word": "CASES",
   "pronunciations": "ˈkeɪsəz, ˈkeɪsɪz"
 },
 {
   "id": 664,
   "word": "DIFFERENCE",
   "pronunciations": "ˈdɪfɝəns, ˈdɪfrəns"
 },
 {
   "id": 665,
   "word": "HAIR",
   "pronunciations": "ˈhɛr"
 },
 {
   "id": 666,
   "word": "PRODUCTION",
   "pronunciations": "prəˈdʌkʃən, proʊˈdʌkʃən, pɝˈdʌkʃən"
 },
 {
   "id": 667,
   "word": "STAND",
   "pronunciations": "ˈstænd"
 },
 {
   "id": 668,
   "word": "WILLIAM",
   "pronunciations": "ˈwɪljəm"
 },
 {
   "id": 669,
   "word": "FALL",
   "pronunciations": "ˈfɔl, ˈfɑːl"
 },
 {
   "id": 670,
   "word": "FOOD",
   "pronunciations": "ˈfuːd"
 },
 {
   "id": 671,
   "word": "INVOLVED",
   "pronunciations": "ˌɪnˈvɑːlvd"
 },
 {
   "id": 672,
   "word": "STOCK",
   "pronunciations": "ˈstɑːk"
 },
 {
   "id": 673,
   "word": "EARLIER",
   "pronunciations": "ˈɝːliːɝ"
 },
 {
   "id": 674,
   "word": "INCREASED",
   "pronunciations": "ˌɪnˈkriːst, ˈɪnˌkriːst"
 },
 {
   "id": 675,
   "word": "PARTICULARLY",
   "pronunciations": "ˌpɑːrˈtɪkjəlɝli, pɝˈtɪkjəlɝli"
 },
 {
   "id": 676,
   "word": "WHOM",
   "pronunciations": "ˈhuːm"
 },
 {
   "id": 677,
   "word": "BELOW",
   "pronunciations": "bɪˈloʊ, biːˈloʊ"
 },
 {
   "id": 678,
   "word": "CLUB",
   "pronunciations": "ˈklʌb"
 },
 {
   "id": 679,
   "word": "EFFORT",
   "pronunciations": "ˈɛfɝt"
 },
 {
   "id": 680,
   "word": "HOUR",
   "pronunciations": "ˈaʊɝ, ˈaʊr"
 },
 {
   "id": 681,
   "word": "KNOWLEDGE",
   "pronunciations": "ˈnɑːlədʒ, ˈnɑːlɪdʒ"
 },
 {
   "id": 682,
   "word": "LETTER",
   "pronunciations": "ˈlɛtɝ"
 },
 {
   "id": 683,
   "word": "PAID",
   "pronunciations": "ˈpeɪd"
 },
 {
   "id": 684,
   "word": "SENT",
   "pronunciations": "ˈsɛnt"
 },
 {
   "id": 685,
   "word": "THINKING",
   "pronunciations": "ˈθɪŋkɪŋ"
 },
 {
   "id": 686,
   "word": "USING",
   "pronunciations": "ˈjuːzɪŋ"
 },
 {
   "id": 687,
   "word": "CHRISTIAN",
   "pronunciations": "ˈkrɪstʃən, ˈkrɪstʃɪn"
 },
 {
   "id": 688,
   "word": "YES",
   "pronunciations": "ˈjɛs"
 },
 {
   "id": 689,
   "word": "BILL",
   "pronunciations": "ˈbɪl"
 },
 {
   "id": 690,
   "word": "BLUE",
   "pronunciations": "ˈbluː"
 },
 {
   "id": 691,
   "word": "BOYS",
   "pronunciations": "ˈbɔɪz"
 },
 {
   "id": 692,
   "word": "CERTAINLY",
   "pronunciations": "ˈsɝːtənli"
 },
 {
   "id": 693,
   "word": "DEAL",
   "pronunciations": "ˈdiːl"
 },
 {
   "id": 694,
   "word": "IDEAS",
   "pronunciations": "aɪˈdiːəz"
 },
 {
   "id": 695,
   "word": "INDUSTRIAL",
   "pronunciations": "ˌɪnˈdʌstriːəl"
 },
 {
   "id": 696,
   "word": "POINTS",
   "pronunciations": "ˈpɔɪnts"
 },
 {
   "id": 697,
   "word": "READY",
   "pronunciations": "ˈrɛdi"
 },
 {
   "id": 698,
   "word": "SQUARE",
   "pronunciations": "ˈskwɛr"
 },
 {
   "id": 699,
   "word": "TRADE",
   "pronunciations": "ˈtreɪd"
 },
 {
   "id": 700,
   "word": "ADDITION",
   "pronunciations": "əˈdɪʃən"
 },
 {
   "id": 701,
   "word": "BAD",
   "pronunciations": "ˈbæd"
 },
 {
   "id": 702,
   "word": "DUE",
   "pronunciations": "ˈduː, dˈjuː"
 },
 {
   "id": 703,
   "word": "GIRLS",
   "pronunciations": "ˈgɝːlz"
 },
 {
   "id": 704,
   "word": "METHOD",
   "pronunciations": "ˈmɛθəd"
 },
 {
   "id": 705,
   "word": "METHODS",
   "pronunciations": "ˈmɛθədz"
 },
 {
   "id": 706,
   "word": "MORAL",
   "pronunciations": "ˈmɔrəl"
 },
 {
   "id": 707,
   "word": "DECIDED",
   "pronunciations": "ˌdɪˈsaɪdɪd"
 },
 {
   "id": 708,
   "word": "DIRECTLY",
   "pronunciations": "dɝˈɛktli, diːˈrɛkli, daɪˈrɛkli, dɪˈrɛkli"
 },
 {
   "id": 709,
   "word": "NEARLY",
   "pronunciations": "ˈnɪrli"
 },
 {
   "id": 710,
   "word": "NEITHER",
   "pronunciations": "ˈniːðɝ, ˈnaɪðɝ"
 },
 {
   "id": 711,
   "word": "READING",
   "pronunciations": "ˈriːdɪŋ, ˈrɛdɪŋ"
 },
 {
   "id": 712,
   "word": "SHOWED",
   "pronunciations": "ˈʃoʊd"
 },
 {
   "id": 713,
   "word": "STATEMENT",
   "pronunciations": "ˈsteɪtmənt"
 },
 {
   "id": 714,
   "word": "THROUGHOUT",
   "pronunciations": "θruːˈaʊt"
 },
 {
   "id": 715,
   "word": "WEEKS",
   "pronunciations": "ˈwiːks"
 },
 {
   "id": 716,
   "word": "ACCORDING",
   "pronunciations": "əˈkɔrdɪŋ"
 },
 {
   "id": 717,
   "word": "ANYONE",
   "pronunciations": "ˈɛniːˌwən, ˈɛniːwən"
 },
 {
   "id": 718,
   "word": "COLOR",
   "pronunciations": "ˈkʌlɝ, ˈkɔlɝ"
 },
 {
   "id": 719,
   "word": "KENNEDY",
   "pronunciations": "ˈkɛnədi"
 },
 {
   "id": 720,
   "word": "QUESTIONS",
   "pronunciations": "ˈkwɛstʃənz"
 },
 {
   "id": 721,
   "word": "TRY",
   "pronunciations": "ˈtraɪ"
 },
 {
   "id": 722,
   "word": "FRENCH",
   "pronunciations": "ˈfrɛntʃ"
 },
 {
   "id": 723,
   "word": "LAY",
   "pronunciations": "ˈleɪ"
 },
 {
   "id": 724,
   "word": "NATION",
   "pronunciations": "ˈneɪʃən"
 },
 {
   "id": 725,
   "word": "PROGRAMS",
   "pronunciations": "ˈproʊˌgræmz"
 },
 {
   "id": 726,
   "word": "SERVICES",
   "pronunciations": "ˈsɝːvəsəz, ˈsɝːvɪsɪz"
 },
 {
   "id": 727,
   "word": "PHYSICAL",
   "pronunciations": "ˈfɪzɪkəl"
 },
 {
   "id": 728,
   "word": "REMEMBER",
   "pronunciations": "rɪˈmɛmbɝ, riːˈmɛmbɝ"
 },
 {
   "id": 729,
   "word": "SIZE",
   "pronunciations": "ˈsaɪz"
 },
 {
   "id": 730,
   "word": "COMES",
   "pronunciations": "ˈkʌmz"
 },
 {
   "id": 731,
   "word": "MEMBER",
   "pronunciations": "ˈmɛmbɝ"
 },
 {
   "id": 732,
   "word": "RECORD",
   "pronunciations": "rəˈkɔrd, ˈrɛkɝd, rɪˈkɔrd"
 },
 {
   "id": 733,
   "word": "SOUTHERN",
   "pronunciations": "ˈsʌðɝn"
 },
 {
   "id": 734,
   "word": "STRENGTH",
   "pronunciations": "ˈstrɛŋkθ, ˈstrɛŋθ"
 },
 {
   "id": 735,
   "word": "UNDERSTAND",
   "pronunciations": "ˌəndɝˈstænd"
 },
 {
   "id": 736,
   "word": "WESTERN",
   "pronunciations": "ˈwɛstɝn, ˈhwɛstɝn"
 },
 {
   "id": 737,
   "word": "NORMAL",
   "pronunciations": "ˈnɔrməl"
 },
 {
   "id": 738,
   "word": "POPULATION",
   "pronunciations": "ˌpɑːpjəˈleɪʃən"
 },
 {
   "id": 739,
   "word": "APPEARED",
   "pronunciations": "əˈpɪrd"
 },
 {
   "id": 740,
   "word": "CONCERNED",
   "pronunciations": "kənˈsɝːnd"
 },
 {
   "id": 741,
   "word": "DISTRICT",
   "pronunciations": "ˈdɪstrɪkt"
 },
 {
   "id": 742,
   "word": "MERELY",
   "pronunciations": "ˈmɪrli"
 },
 {
   "id": 743,
   "word": "TEMPERATURE",
   "pronunciations": "ˈtɛmprətʃɝ, ˈtɛmpɝətʃɝ"
 },
 {
   "id": 744,
   "word": "VOLUME",
   "pronunciations": "ˈvɑːljuːm"
 },
 {
   "id": 745,
   "word": "AID",
   "pronunciations": "ˈeɪd"
 },
 {
   "id": 746,
   "word": "DIRECTION",
   "pronunciations": "dɝˈɛkʃən, diːˈrɛkʃɪn, daɪˈrɛkʃɪn, dɪˈrɛkʃɪn"
 },
 {
   "id": 747,
   "word": "RAN",
   "pronunciations": "ˈræn"
 },
 {
   "id": 748,
   "word": "SUMMER",
   "pronunciations": "ˈsʌmɝ"
 },
 {
   "id": 749,
   "word": "TRIAL",
   "pronunciations": "ˈtraɪəl, ˈtraɪl"
 },
 {
   "id": 750,
   "word": "TROUBLE",
   "pronunciations": "ˈtrʌbəl"
 },
 {
   "id": 751,
   "word": "CONTINUED",
   "pronunciations": "kənˈtɪnjuːd"
 },
 {
   "id": 752,
   "word": "EVENING",
   "pronunciations": "ˈiːvnɪŋ"
 },
 {
   "id": 753,
   "word": "FRIEND",
   "pronunciations": "ˈfrɛnd"
 },
 {
   "id": 754,
   "word": "LIST",
   "pronunciations": "ˈlɪst"
 },
 {
   "id": 755,
   "word": "LITERATURE",
   "pronunciations": "ˈlɪtɝətʃɝ"
 },
 {
   "id": 756,
   "word": "MAYBE",
   "pronunciations": "ˈmeɪbi"
 },
 {
   "id": 757,
   "word": "SALES",
   "pronunciations": "ˈseɪlz"
 },
 {
   "id": 758,
   "word": "ARMY",
   "pronunciations": "ˈɑːrmi"
 },
 {
   "id": 759,
   "word": "ASSOCIATION",
   "pronunciations": "əˌsoʊsiːˈeɪʃən, əˌsoʊʃiːˈeɪʃən"
 },
 {
   "id": 760,
   "word": "GENERALLY",
   "pronunciations": "ˈdʒɛnɝəli, ˈdʒɛnrəli"
 },
 {
   "id": 761,
   "word": "INFLUENCE",
   "pronunciations": "ˈɪnfluːəns"
 },
 {
   "id": 762,
   "word": "LED",
   "pronunciations": "ˈlɛd"
 },
 {
   "id": 763,
   "word": "MET",
   "pronunciations": "ˈmɛt"
 },
 {
   "id": 764,
   "word": "PROVIDED",
   "pronunciations": "prəˈvaɪdəd, prəˈvaɪdɪd"
 },
 {
   "id": 765,
   "word": "CHANCE",
   "pronunciations": "ˈtʃæns"
 },
 {
   "id": 766,
   "word": "CHANGES",
   "pronunciations": "ˈtʃeɪndʒəz, ˈtʃeɪndʒɪz"
 },
 {
   "id": 767,
   "word": "FORMER",
   "pronunciations": "ˈfɔrmɝ"
 },
 {
   "id": 768,
   "word": "HUSBAND",
   "pronunciations": "ˈhʌzbənd"
 },
 {
   "id": 769,
   "word": "OPENED",
   "pronunciations": "ˈoʊpənd"
 },
 {
   "id": 770,
   "word": "SCIENCE",
   "pronunciations": "ˈsaɪəns"
 },
 {
   "id": 771,
   "word": "STEP",
   "pronunciations": "ˈstɛp"
 },
 {
   "id": 772,
   "word": "STUDENT",
   "pronunciations": "ˈstuːdənt"
 },
 {
   "id": 773,
   "word": "AVERAGE",
   "pronunciations": "ˈævɝɪdʒ, ˈævrɪdʒ"
 },
 {
   "id": 774,
   "word": "CAUSE",
   "pronunciations": "ˈkɑːz, ˈkɔz"
 },
 {
   "id": 775,
   "word": "HOT",
   "pronunciations": "ˈhɑːt"
 },
 {
   "id": 776,
   "word": "MONTH",
   "pronunciations": "ˈmʌnθ"
 },
 {
   "id": 777,
   "word": "SERIES",
   "pronunciations": "ˈsɪriːz"
 },
 {
   "id": 778,
   "word": "WORKS",
   "pronunciations": "ˈwɝːks"
 },
 {
   "id": 779,
   "word": "DIRECT",
   "pronunciations": "dɝˈɛkt, daɪˈrɛkt, dɪˈrɛkt"
 },
 {
   "id": 780,
   "word": "EFFECTIVE",
   "pronunciations": "ɪˈfɛktɪv, ˈiːfɛktɪv"
 },
 {
   "id": 781,
   "word": "GEORGE",
   "pronunciations": "ˈdʒɔrdʒ"
 },
 {
   "id": 782,
   "word": "LEAD",
   "pronunciations": "ˈlɛd, ˈliːd"
 },
 {
   "id": 783,
   "word": "MYSELF",
   "pronunciations": "ˌmaɪˈsɛlf"
 },
 {
   "id": 784,
   "word": "PIECE",
   "pronunciations": "ˈpiːs"
 },
 {
   "id": 785,
   "word": "PLANNING",
   "pronunciations": "ˈplænɪŋ"
 },
 {
   "id": 786,
   "word": "SOVIET",
   "pronunciations": "ˈsoʊviːət, ˈsoʊviːˌɛt"
 },
 {
   "id": 787,
   "word": "STOPPED",
   "pronunciations": "ˈstɑːpt"
 },
 {
   "id": 788,
   "word": "SYSTEMS",
   "pronunciations": "ˈsɪstəmz"
 },
 {
   "id": 789,
   "word": "THEORY",
   "pronunciations": "ˈθɪri, ˈθiːɝi"
 },
 {
   "id": 790,
   "word": "WOULDN'T",
   "pronunciations": "ˈwʊdənt"
 },
 {
   "id": 791,
   "word": "WRONG",
   "pronunciations": "ˈrɔŋ"
 },
 {
   "id": 792,
   "word": "ASK",
   "pronunciations": "ˈæsk"
 },
 {
   "id": 793,
   "word": "CLEARLY",
   "pronunciations": "ˈklɪrli"
 },
 {
   "id": 794,
   "word": "FREEDOM",
   "pronunciations": "ˈfriːdəm"
 },
 {
   "id": 795,
   "word": "MOVEMENT",
   "pronunciations": "ˈmuːvmənt"
 },
 {
   "id": 796,
   "word": "ORGANIZATION",
   "pronunciations": "ˌɔrgənəˈzeɪʃən"
 },
 {
   "id": 797,
   "word": "WAYS",
   "pronunciations": "ˈweɪz"
 },
 {
   "id": 798,
   "word": "WORKED",
   "pronunciations": "ˈwɝːkt"
 },
 {
   "id": 799,
   "word": "BEAUTIFUL",
   "pronunciations": "ˈbjuːtəfəl"
 },
 {
   "id": 800,
   "word": "BED",
   "pronunciations": "ˈbɛd"
 },
 {
   "id": 801,
   "word": "CONSIDER",
   "pronunciations": "kənˈsɪdɝ"
 },
 {
   "id": 802,
   "word": "EFFORTS",
   "pronunciations": "ˈɛfɝts"
 },
 {
   "id": 803,
   "word": "FEAR",
   "pronunciations": "ˈfɪr"
 },
 {
   "id": 804,
   "word": "FORMS",
   "pronunciations": "ˈfɔrmz"
 },
 {
   "id": 805,
   "word": "LOT",
   "pronunciations": "ˈlɑːt, ˈlɔt"
 },
 {
   "id": 806,
   "word": "MEANING",
   "pronunciations": "ˈmiːnɪŋ"
 },
 {
   "id": 807,
   "word": "NOTE",
   "pronunciations": "ˈnoʊt"
 },
 {
   "id": 808,
   "word": "PRESS",
   "pronunciations": "ˈprɛs"
 },
 {
   "id": 809,
   "word": "SOMEWHAT",
   "pronunciations": "ˈsʌmˈwʌt, ˈsʌmˈhwʌt"
 },
 {
   "id": 810,
   "word": "SPRING",
   "pronunciations": "ˈsprɪŋ, spɝˈɪŋ"
 },
 {
   "id": 811,
   "word": "TREATMENT",
   "pronunciations": "ˈtriːtmənt"
 },
 {
   "id": 812,
   "word": "HOTEL",
   "pronunciations": "hoʊˈtɛl"
 },
 {
   "id": 813,
   "word": "PLACED",
   "pronunciations": "ˈpleɪst"
 },
 {
   "id": 814,
   "word": "TRUTH",
   "pronunciations": "ˈtruːθ"
 },
 {
   "id": 815,
   "word": "APPARENTLY",
   "pronunciations": "əˈpɛrəntli"
 },
 {
   "id": 816,
   "word": "CARRIED",
   "pronunciations": "ˈkæriːd, ˈkɛriːd"
 },
 {
   "id": 817,
   "word": "DEGREE",
   "pronunciations": "dɪˈgriː"
 },
 {
   "id": 818,
   "word": "GROUPS",
   "pronunciations": "ˈgruːps"
 },
 {
   "id": 819,
   "word": "HE'S",
   "pronunciations": "ˈhiːz"
 },
 {
   "id": 820,
   "word": "HERSELF",
   "pronunciations": "hɝˈsɛlf"
 },
 {
   "id": 821,
   "word": "I'VE",
   "pronunciations": "ˈaɪv"
 },
 {
   "id": 822,
   "word": "MAN'S",
   "pronunciations": "ˈmænz"
 },
 {
   "id": 823,
   "word": "NUMBERS",
   "pronunciations": "ˈnʌmbɝz"
 },
 {
   "id": 824,
   "word": "PLANT",
   "pronunciations": "ˈplænt"
 },
 {
   "id": 825,
   "word": "RESPECT",
   "pronunciations": "rɪˈspɛkt, riːˈspɛkt"
 },
 {
   "id": 826,
   "word": "WIDE",
   "pronunciations": "ˈwaɪd"
 },
 {
   "id": 827,
   "word": "EASY",
   "pronunciations": "ˈiːzi"
 },
 {
   "id": 828,
   "word": "FARM",
   "pronunciations": "ˈfɑːrm"
 },
 {
   "id": 829,
   "word": "MANNER",
   "pronunciations": "ˈmænɝ"
 },
 {
   "id": 830,
   "word": "REACTION",
   "pronunciations": "riːˈækʃən"
 },
 {
   "id": 831,
   "word": "APPROACH",
   "pronunciations": "əˈproʊtʃ"
 },
 {
   "id": 832,
   "word": "GAME",
   "pronunciations": "ˈgeɪm"
 },
 {
   "id": 833,
   "word": "IMMEDIATELY",
   "pronunciations": "ˌɪˈmiːˌdiːətli"
 },
 {
   "id": 834,
   "word": "LARGER",
   "pronunciations": "ˈlɑːrdʒɝ"
 },
 {
   "id": 835,
   "word": "LOWER",
   "pronunciations": "ˈloʊɝ"
 },
 {
   "id": 836,
   "word": "RECENTLY",
   "pronunciations": "ˈriːsəntli, ˈriːsənli"
 },
 {
   "id": 837,
   "word": "RUNNING",
   "pronunciations": "ˈrʌnɪŋ"
 },
 {
   "id": 838,
   "word": "CHARGE",
   "pronunciations": "ˈtʃɑːrdʒ"
 },
 {
   "id": 839,
   "word": "COUPLE",
   "pronunciations": "ˈkʌpəl"
 },
 {
   "id": 840,
   "word": "DAILY",
   "pronunciations": "ˈdeɪli"
 },
 {
   "id": 841,
   "word": "DE",
   "pronunciations": "ˈdiː, ˈdeɪ, də"
 },
 {
   "id": 842,
   "word": "EYE",
   "pronunciations": "ˈaɪ"
 },
 {
   "id": 843,
   "word": "FEED",
   "pronunciations": "ˈfiːd"
 },
 {
   "id": 844,
   "word": "OH",
   "pronunciations": "ˈoʊ"
 },
 {
   "id": 845,
   "word": "PERFORMANCE",
   "pronunciations": "pɝˈfɔrməns"
 },
 {
   "id": 846,
   "word": "ARMS",
   "pronunciations": "ˈɑːrmz"
 },
 {
   "id": 847,
   "word": "BLOOD",
   "pronunciations": "ˈblʌd"
 },
 {
   "id": 848,
   "word": "C",
   "pronunciations": "ˈsiː"
 },
 {
   "id": 849,
   "word": "MARCH",
   "pronunciations": "ˈmɑːrtʃ"
 },
 {
   "id": 850,
   "word": "OPPORTUNITY",
   "pronunciations": "ˌɑːpɝˈtuːnəti"
 },
 {
   "id": 851,
   "word": "PERSONS",
   "pronunciations": "ˈpɝːsənz"
 },
 {
   "id": 852,
   "word": "UNDERSTANDING",
   "pronunciations": "ˌəndɝˈstændɪŋ"
 },
 {
   "id": 853,
   "word": "ADDITIONAL",
   "pronunciations": "əˈdɪʃənəl"
 },
 {
   "id": 854,
   "word": "DESCRIBED",
   "pronunciations": "dɪˈskraɪbd"
 },
 {
   "id": 855,
   "word": "FISCAL",
   "pronunciations": "ˈfɪskəl"
 },
 {
   "id": 856,
   "word": "J.",
   "pronunciations": "ˈdʒeɪ"
 },
 {
   "id": 857,
   "word": "PROGRESS",
   "pronunciations": "ˈprɑːˌgrɛs, prəˈgrɛs, proʊˈgrɛs"
 },
 {
   "id": 858,
   "word": "RADIO",
   "pronunciations": "ˈreɪdiːˌoʊ"
 },
 {
   "id": 859,
   "word": "STOP",
   "pronunciations": "ˈstɑːp"
 },
 {
   "id": 860,
   "word": "TECHNICAL",
   "pronunciations": "ˈtɛknɪkəl"
 },
 {
   "id": 861,
   "word": "BASED",
   "pronunciations": "ˈbeɪst"
 },
 {
   "id": 862,
   "word": "CHIEF",
   "pronunciations": "ˈtʃiːf"
 },
 {
   "id": 863,
   "word": "DECISION",
   "pronunciations": "dɪˈsɪʒən"
 },
 {
   "id": 864,
   "word": "DETERMINED",
   "pronunciations": "dɪˈtɝːmənd"
 },
 {
   "id": 865,
   "word": "IMAGE",
   "pronunciations": "ˈɪmədʒ, ˈɪmɪdʒ"
 },
 {
   "id": 866,
   "word": "MAIN",
   "pronunciations": "ˈmeɪn"
 },
 {
   "id": 867,
   "word": "RELIGION",
   "pronunciations": "rɪˈlɪdʒən, riːˈlɪdʒən"
 },
 {
   "id": 868,
   "word": "REPORTED",
   "pronunciations": "ˌriːˈpɔrtəd, rɪˈpɔrtəd"
 },
 {
   "id": 869,
   "word": "SERVED",
   "pronunciations": "ˈsɝːvd"
 },
 {
   "id": 870,
   "word": "STEPS",
   "pronunciations": "ˈstɛps"
 },
 {
   "id": 871,
   "word": "TEST",
   "pronunciations": "ˈtɛst"
 },
 {
   "id": 872,
   "word": "WINDOW",
   "pronunciations": "ˈwɪndoʊ"
 },
 {
   "id": 873,
   "word": "BRITISH",
   "pronunciations": "ˈbrɪtɪʃ"
 },
 {
   "id": 874,
   "word": "CHARACTER",
   "pronunciations": "ˈkɛrɪktɝ"
 },
 {
   "id": 875,
   "word": "EUROPE",
   "pronunciations": "ˈjʊrəp"
 },
 {
   "id": 876,
   "word": "GUN",
   "pronunciations": "ˈgʌn"
 },
 {
   "id": 877,
   "word": "MIDDLE",
   "pronunciations": "ˈmɪdəl"
 },
 {
   "id": 878,
   "word": "RESPONSIBILITY",
   "pronunciations": "riːˌspɑːnsəˈbɪləti"
 },
 {
   "id": 879,
   "word": "ACCOUNT",
   "pronunciations": "əˈkaʊnt"
 },
 {
   "id": 880,
   "word": "APPEAR",
   "pronunciations": "əˈpɪr"
 },
 {
   "id": 881,
   "word": "HORSE",
   "pronunciations": "ˈhɔrs"
 },
 {
   "id": 882,
   "word": "LEARNED",
   "pronunciations": "ˈlɝːnd, ˈlɝːnɪd"
 },
 {
   "id": 883,
   "word": "S.",
   "pronunciations": "ˈɛs"
 },
 {
   "id": 884,
   "word": "WRITING",
   "pronunciations": "ˈraɪtɪŋ"
 },
 {
   "id": 885,
   "word": "ACTIVITY",
   "pronunciations": "ækˈtɪvɪti"
 },
 {
   "id": 886,
   "word": "GREEN",
   "pronunciations": "ˈgriːn"
 },
 {
   "id": 887,
   "word": "LENGTH",
   "pronunciations": "ˈlɛŋkθ, ˈlɛŋθ"
 },
 {
   "id": 888,
   "word": "ONES",
   "pronunciations": "ˈwʌnz"
 },
 {
   "id": 889,
   "word": "SERIOUS",
   "pronunciations": "ˈsɪriːəs"
 },
 {
   "id": 890,
   "word": "TYPES",
   "pronunciations": "ˈtaɪps"
 },
 {
   "id": 891,
   "word": "ACTIVITIES",
   "pronunciations": "ækˈtɪvɪtiːz"
 },
 {
   "id": 892,
   "word": "AUDIENCE",
   "pronunciations": "ˈɑːdiːəns, ˈɔdiːəns"
 },
 {
   "id": 893,
   "word": "CORNER",
   "pronunciations": "ˈkɔrnɝ"
 },
 {
   "id": 894,
   "word": "FORWARD",
   "pronunciations": "ˈfɔrwɝd"
 },
 {
   "id": 895,
   "word": "LETTERS",
   "pronunciations": "ˈlɛtɝz"
 },
 {
   "id": 896,
   "word": "LIVED",
   "pronunciations": "ˈlɪvd, ˈlaɪvd"
 },
 {
   "id": 897,
   "word": "NUCLEAR",
   "pronunciations": "ˈnuːkliːɝ"
 },
 {
   "id": 898,
   "word": "OBTAINED",
   "pronunciations": "əbˈteɪnd"
 },
 {
   "id": 899,
   "word": "RETURNED",
   "pronunciations": "rɪˈtɝːnd, riːˈtɝːnd"
 },
 {
   "id": 900,
   "word": "SLOWLY",
   "pronunciations": "ˈsloʊli"
 },
 {
   "id": 901,
   "word": "SPECIFIC",
   "pronunciations": "spəˈsɪfɪk, spɪˈsɪfɪk"
 },
 {
   "id": 902,
   "word": "DESIGN",
   "pronunciations": "dɪˈzaɪn"
 },
 {
   "id": 903,
   "word": "DOUBT",
   "pronunciations": "ˈdaʊt"
 },
 {
   "id": 904,
   "word": "GIVES",
   "pronunciations": "ˈgɪvz"
 },
 {
   "id": 905,
   "word": "HIT",
   "pronunciations": "ˈhɪt"
 },
 {
   "id": 906,
   "word": "JUSTICE",
   "pronunciations": "ˈdʒʌstəs, ˈdʒʌstɪs"
 },
 {
   "id": 907,
   "word": "LATTER",
   "pronunciations": "ˈlætɝ"
 },
 {
   "id": 908,
   "word": "MOVING",
   "pronunciations": "ˈmuːvɪŋ"
 },
 {
   "id": 909,
   "word": "OBVIOUSLY",
   "pronunciations": "ˈɑːbviːəsli"
 },
 {
   "id": 910,
   "word": "PLANE",
   "pronunciations": "ˈpleɪn"
 },
 {
   "id": 911,
   "word": "QUALITY",
   "pronunciations": "ˈkwɑːləti"
 },
 {
   "id": 912,
   "word": "STRAIGHT",
   "pronunciations": "ˈstreɪt"
 },
 {
   "id": 913,
   "word": "A.",
   "pronunciations": "ˈeɪ"
 },
 {
   "id": 914,
   "word": "BORN",
   "pronunciations": "ˈbɔrn"
 },
 {
   "id": 915,
   "word": "CHOICE",
   "pronunciations": "ˈtʃɔɪs"
 },
 {
   "id": 916,
   "word": "FIGURES",
   "pronunciations": "ˈfɪgjɝz"
 },
 {
   "id": 917,
   "word": "FUNCTION",
   "pronunciations": "ˈfʌŋkʃən"
 },
 {
   "id": 918,
   "word": "INCLUDE",
   "pronunciations": "ˌɪnˈkluːd"
 },
 {
   "id": 919,
   "word": "OPERATION",
   "pronunciations": "ˌɑːpɝˈeɪʃən"
 },
 {
   "id": 920,
   "word": "PARTS",
   "pronunciations": "ˈpɑːrts"
 },
 {
   "id": 921,
   "word": "PATTERN",
   "pronunciations": "ˈpætɝn"
 },
 {
   "id": 922,
   "word": "PLANS",
   "pronunciations": "ˈplænz"
 },
 {
   "id": 923,
   "word": "POOR",
   "pronunciations": "ˈpuːr"
 },
 {
   "id": 924,
   "word": "SAYING",
   "pronunciations": "ˈseɪɪŋ"
 },
 {
   "id": 925,
   "word": "SEVEN",
   "pronunciations": "ˈsɛvən"
 },
 {
   "id": 926,
   "word": "SHOT",
   "pronunciations": "ˈʃɑːt"
 },
 {
   "id": 927,
   "word": "STAFF",
   "pronunciations": "ˈstæf"
 },
 {
   "id": 928,
   "word": "STAY",
   "pronunciations": "ˈsteɪ"
 },
 {
   "id": 929,
   "word": "CARS",
   "pronunciations": "ˈkɑːrz, ˈkɑːz"
 },
 {
   "id": 930,
   "word": "SUN",
   "pronunciations": "ˈsʌn"
 },
 {
   "id": 931,
   "word": "WHATEVER",
   "pronunciations": "ˌwəˈtɛvɝ, ˌhwəˈtɛvɝ"
 },
 {
   "id": 932,
   "word": "FAITH",
   "pronunciations": "ˈfeɪθ"
 },
 {
   "id": 933,
   "word": "POOL",
   "pronunciations": "ˈpuːl"
 },
 {
   "id": 934,
   "word": "BALL",
   "pronunciations": "ˈbɔl"
 },
 {
   "id": 935,
   "word": "COMPLETELY",
   "pronunciations": "kəmˈpliːtli"
 },
 {
   "id": 936,
   "word": "CORPS",
   "pronunciations": "ˈkɔr, ˈkɔrz"
 },
 {
   "id": 937,
   "word": "EXTENT",
   "pronunciations": "ɪkˈstɛnt"
 },
 {
   "id": 938,
   "word": "HEAVY",
   "pronunciations": "ˈhɛvi"
 },
 {
   "id": 939,
   "word": "HOSPITAL",
   "pronunciations": "ˈhɑːˌspɪtəl"
 },
 {
   "id": 940,
   "word": "LACK",
   "pronunciations": "ˈlæk"
 },
 {
   "id": 941,
   "word": "SPEAK",
   "pronunciations": "ˈspiːk"
 },
 {
   "id": 942,
   "word": "STANDARD",
   "pronunciations": "ˈstændɝd"
 },
 {
   "id": 943,
   "word": "WAITING",
   "pronunciations": "ˈweɪtɪŋ"
 },
 {
   "id": 944,
   "word": "WISH",
   "pronunciations": "ˈwɪʃ"
 },
 {
   "id": 945,
   "word": "AHEAD",
   "pronunciations": "əˈhɛd"
 },
 {
   "id": 946,
   "word": "DEEP",
   "pronunciations": "ˈdiːp"
 },
 {
   "id": 947,
   "word": "DEMOCRATIC",
   "pronunciations": "ˌdɛməˈkrætɪk"
 },
 {
   "id": 948,
   "word": "FIRM",
   "pronunciations": "ˈfɝːm"
 },
 {
   "id": 949,
   "word": "INCOME",
   "pronunciations": "ˈɪnˌkəm"
 },
 {
   "id": 950,
   "word": "LANGUAGE",
   "pronunciations": "ˈlæŋgwədʒ, ˈlæŋgwɪdʒ"
 },
 {
   "id": 951,
   "word": "PRINCIPLE",
   "pronunciations": "ˈprɪnsəpəl"
 },
 {
   "id": 952,
   "word": "THERE'S",
   "pronunciations": "ˈðɛrz"
 },
 {
   "id": 953,
   "word": "VISIT",
   "pronunciations": "ˈvɪzɪt"
 },
 {
   "id": 954,
   "word": "ANALYSIS",
   "pronunciations": "æˈnælɪsɪs"
 },
 {
   "id": 955,
   "word": "DESIGNED",
   "pronunciations": "dɪˈzaɪnd"
 },
 {
   "id": 956,
   "word": "DISTANCE",
   "pronunciations": "ˈdɪstəns"
 },
 {
   "id": 957,
   "word": "EFFECTS",
   "pronunciations": "ɪˈfɛkts, ɪˈfɛks, ˈiːfɛkts, ˈiːfɛks"
 },
 {
   "id": 958,
   "word": "ESTABLISHED",
   "pronunciations": "ɪˈstæblɪʃt"
 },
 {
   "id": 959,
   "word": "EXPECT",
   "pronunciations": "ɪkˈspɛkt"
 },
 {
   "id": 960,
   "word": "GROWING",
   "pronunciations": "ˈgroʊɪŋ"
 },
 {
   "id": 961,
   "word": "IMPORTANCE",
   "pronunciations": "ˌɪmˈpɔrtəns"
 },
 {
   "id": 962,
   "word": "INDICATED",
   "pronunciations": "ˈɪndəˌkeɪtəd, ˈɪndəˌkeɪtɪd"
 },
 {
   "id": 963,
   "word": "NONE",
   "pronunciations": "ˈnʌn"
 },
 {
   "id": 964,
   "word": "PRICE",
   "pronunciations": "ˈpraɪs"
 },
 {
   "id": 965,
   "word": "PRODUCTS",
   "pronunciations": "ˈprɑːdəkts, ˈprɑːdəks"
 },
 {
   "id": 966,
   "word": "ATTITUDE",
   "pronunciations": "ˈætəˌtuːd"
 },
 {
   "id": 967,
   "word": "CITIES",
   "pronunciations": "ˈsɪtiːz"
 },
 {
   "id": 968,
   "word": "CONTINUE",
   "pronunciations": "kənˈtɪnjuː"
 },
 {
   "id": 969,
   "word": "DETERMINE",
   "pronunciations": "dəˈtɝːmən, dɪˈtɝːmən"
 },
 {
   "id": 970,
   "word": "DIVISION",
   "pronunciations": "dɪˈvɪʒən"
 },
 {
   "id": 971,
   "word": "EASILY",
   "pronunciations": "ˈiːzəli"
 },
 {
   "id": 972,
   "word": "ELEMENTS",
   "pronunciations": "ˈɛləmənts"
 },
 {
   "id": 973,
   "word": "EXISTENCE",
   "pronunciations": "ɛgˈzɪstəns, ɪgˈzɪstəns"
 },
 {
   "id": 974,
   "word": "LEADERS",
   "pronunciations": "ˈliːdɝz"
 },
 {
   "id": 975,
   "word": "NEGRO",
   "pronunciations": "ˈniːgroʊ"
 },
 {
   "id": 976,
   "word": "PRETTY",
   "pronunciations": "ˈprɪti"
 },
 {
   "id": 977,
   "word": "SERVE",
   "pronunciations": "ˈsɝːv"
 },
 {
   "id": 978,
   "word": "STRESS",
   "pronunciations": "ˈstrɛs"
 },
 {
   "id": 979,
   "word": "AFTERNOON",
   "pronunciations": "ˌæftɝˈnuːn"
 },
 {
   "id": 980,
   "word": "AGREEMENT",
   "pronunciations": "əˈgriːmənt"
 },
 {
   "id": 981,
   "word": "APPLIED",
   "pronunciations": "əˈplaɪd"
 },
 {
   "id": 982,
   "word": "CLOSED",
   "pronunciations": "ˈkloʊzd"
 },
 {
   "id": 983,
   "word": "FACTORS",
   "pronunciations": "ˈfæktɝz"
 },
 {
   "id": 984,
   "word": "HARDLY",
   "pronunciations": "ˈhɑːrdli"
 },
 {
   "id": 985,
   "word": "LIMITED",
   "pronunciations": "ˈlɪmətəd, ˈlɪmɪtɪd"
 },
 {
   "id": 986,
   "word": "REMAINED",
   "pronunciations": "rɪˈmeɪnd, riːˈmeɪnd"
 },
 {
   "id": 987,
   "word": "SCENE",
   "pronunciations": "ˈsiːn"
 },
 {
   "id": 988,
   "word": "WRITE",
   "pronunciations": "ˈraɪt"
 },
 {
   "id": 989,
   "word": "ATTACK",
   "pronunciations": "əˈtæk"
 },
 {
   "id": 990,
   "word": "B",
   "pronunciations": "ˈbiː"
 },
 {
   "id": 991,
   "word": "DRIVE",
   "pronunciations": "ˈdraɪv"
 },
 {
   "id": 992,
   "word": "HEALTH",
   "pronunciations": "ˈhɛlθ"
 },
 {
   "id": 993,
   "word": "INTERESTED",
   "pronunciations": "ˈɪntəˌrɛstɪd"
 },
 {
   "id": 994,
   "word": "MARRIED",
   "pronunciations": "ˈmɛriːd"
 },
 {
   "id": 995,
   "word": "PROFESSIONAL",
   "pronunciations": "prəˈfɛʃənəl"
 },
 {
   "id": 996,
   "word": "REACH",
   "pronunciations": "ˈriːtʃ"
 },
 {
   "id": 997,
   "word": "RHODE",
   "pronunciations": "ˈroʊd"
 },
 {
   "id": 998,
   "word": "SEASON",
   "pronunciations": "ˈsiːzən"
 },
 {
   "id": 999,
   "word": "STATION",
   "pronunciations": "ˈsteɪʃən"
 },
 {
   "id": 1000,
   "word": "SUGGESTED",
   "pronunciations": "səˈdʒɛstəd, səˈdʒɛstɪd"
 },
 {
   "id": 1001,
   "word": "WON'T",
   "pronunciations": "ˈwoʊnt"
 },
 {
   "id": 1002,
   "word": "BECOMES",
   "pronunciations": "bɪˈkʌmz"
 },
 {
   "id": 1003,
   "word": "COVERED",
   "pronunciations": "ˈkʌvɝd"
 },
 {
   "id": 1004,
   "word": "CURRENT",
   "pronunciations": "ˈkɝːənt, ˈkɝːnt, ˈkɑːrənt"
 },
 {
   "id": 1005,
   "word": "DESPITE",
   "pronunciations": "dɪˈspaɪt"
 },
 {
   "id": 1006,
   "word": "EIGHT",
   "pronunciations": "ˈeɪt"
 },
 {
   "id": 1007,
   "word": "I'D",
   "pronunciations": "ˈaɪd"
 },
 {
   "id": 1008,
   "word": "PLAYED",
   "pronunciations": "ˈpleɪd"
 },
 {
   "id": 1009,
   "word": "ROLE",
   "pronunciations": "ˈroʊl"
 },
 {
   "id": 1010,
   "word": "SPENT",
   "pronunciations": "ˈspɛnt"
 },
 {
   "id": 1011,
   "word": "BUILT",
   "pronunciations": "ˈbɪlt"
 },
 {
   "id": 1012,
   "word": "COMMISSION",
   "pronunciations": "kəˈmɪʃən"
 },
 {
   "id": 1013,
   "word": "COUNCIL",
   "pronunciations": "ˈkaʊnsəl"
 },
 {
   "id": 1014,
   "word": "DATE",
   "pronunciations": "ˈdeɪt"
 },
 {
   "id": 1015,
   "word": "EXACTLY",
   "pronunciations": "ɪgˈzæktli"
 },
 {
   "id": 1016,
   "word": "MACHINE",
   "pronunciations": "məˈʃiːn"
 },
 {
   "id": 1017,
   "word": "MOUTH",
   "pronunciations": "ˈmaʊθ"
 },
 {
   "id": 1018,
   "word": "ORIGINAL",
   "pronunciations": "ɝˈɪdʒənəl"
 },
 {
   "id": 1019,
   "word": "RACE",
   "pronunciations": "ˈreɪs"
 },
 {
   "id": 1020,
   "word": "REASONS",
   "pronunciations": "ˈriːzənz"
 },
 {
   "id": 1021,
   "word": "STUDIES",
   "pronunciations": "ˈstʌdiːz"
 },
 {
   "id": 1022,
   "word": "TEETH",
   "pronunciations": "ˈtiːθ"
 },
 {
   "id": 1023,
   "word": "UNIT",
   "pronunciations": "ˈjuːnət, ˈjuːnɪt"
 },
 {
   "id": 1024,
   "word": "DEMAND",
   "pronunciations": "dɪˈmænd"
 },
 {
   "id": 1025,
   "word": "NEWS",
   "pronunciations": "ˈnuːz, nˈjuːz"
 },
 {
   "id": 1026,
   "word": "PREPARED",
   "pronunciations": "priːˈpɛrd"
 },
 {
   "id": 1027,
   "word": "RATES",
   "pronunciations": "ˈreɪts"
 },
 {
   "id": 1028,
   "word": "RELATED",
   "pronunciations": "rɪˈleɪtɪd, riːˈleɪtəd, riːˈleɪtɪd"
 },
 {
   "id": 1029,
   "word": "RELATIONS",
   "pronunciations": "riːˈleɪʃənz"
 },
 {
   "id": 1030,
   "word": "RISE",
   "pronunciations": "ˈraɪz"
 },
 {
   "id": 1031,
   "word": "SUPPLY",
   "pronunciations": "səˈplaɪ"
 },
 {
   "id": 1032,
   "word": "BIT",
   "pronunciations": "ˈbɪt"
 },
 {
   "id": 1033,
   "word": "DIRECTOR",
   "pronunciations": "dɝˈɛktɝ, daɪˈrɛktɝ, diːˈrɛktɝ, dɪˈrɛktɝ"
 },
 {
   "id": 1034,
   "word": "DROPPED",
   "pronunciations": "ˈdrɑːpt"
 },
 {
   "id": 1035,
   "word": "EVENTS",
   "pronunciations": "ɪˈvɛnts, iːˈvɛnts"
 },
 {
   "id": 1036,
   "word": "JAMES",
   "pronunciations": "ˈdʒeɪmz"
 },
 {
   "id": 1037,
   "word": "OFFICER",
   "pronunciations": "ˈɔfəsɝ, ˈɔfɪsɝ"
 },
 {
   "id": 1038,
   "word": "PLAYING",
   "pronunciations": "ˈpleɪɪŋ"
 },
 {
   "id": 1039,
   "word": "RAISED",
   "pronunciations": "ˈreɪzd"
 },
 {
   "id": 1040,
   "word": "STANDING",
   "pronunciations": "ˈstændɪŋ"
 },
 {
   "id": 1041,
   "word": "SUNDAY",
   "pronunciations": "ˈsʌnˌdeɪ, ˈsʌnˌdiː"
 },
 {
   "id": 1042,
   "word": "TREES",
   "pronunciations": "ˈtriːz"
 },
 {
   "id": 1043,
   "word": "UNLESS",
   "pronunciations": "ənˈlɛs"
 },
 {
   "id": 1044,
   "word": "CLAY",
   "pronunciations": "ˈkleɪ"
 },
 {
   "id": 1045,
   "word": "DOCTOR",
   "pronunciations": "ˈdɑːktɝ, ˈdɔktɝ"
 },
 {
   "id": 1046,
   "word": "ENERGY",
   "pronunciations": "ˈɛnɝdʒi"
 },
 {
   "id": 1047,
   "word": "FACILITIES",
   "pronunciations": "fəˈsɪlətiːz, fəˈsɪlɪtiːz"
 },
 {
   "id": 1048,
   "word": "MEANT",
   "pronunciations": "ˈmɛnt"
 },
 {
   "id": 1049,
   "word": "PLACES",
   "pronunciations": "ˈpleɪsəz, ˈpleɪsɪz"
 },
 {
   "id": 1050,
   "word": "SIDES",
   "pronunciations": "ˈsaɪdz"
 },
 {
   "id": 1051,
   "word": "TALKING",
   "pronunciations": "ˈtɔkɪŋ"
 },
 {
   "id": 1052,
   "word": "THOMAS",
   "pronunciations": "ˈtɑːməs"
 },
 {
   "id": 1053,
   "word": "WALK",
   "pronunciations": "ˈwɔk, ˈwɑːk"
 },
 {
   "id": 1054,
   "word": "ACTUAL",
   "pronunciations": "ˈæktʃəwəl, ˈækʃəl"
 },
 {
   "id": 1055,
   "word": "FILLED",
   "pronunciations": "ˈfɪld"
 },
 {
   "id": 1056,
   "word": "GAS",
   "pronunciations": "ˈgæs"
 },
 {
   "id": 1057,
   "word": "GLASS",
   "pronunciations": "ˈglæs"
 },
 {
   "id": 1058,
   "word": "HADN'T",
   "pronunciations": "ˈhædənt, ˈhædən"
 },
 {
   "id": 1059,
   "word": "JAZZ",
   "pronunciations": "ˈdʒæz"
 },
 {
   "id": 1060,
   "word": "JUNE",
   "pronunciations": "ˈdʒuːn"
 },
 {
   "id": 1061,
   "word": "KNOWS",
   "pronunciations": "ˈnoʊz"
 },
 {
   "id": 1062,
   "word": "POET",
   "pronunciations": "ˈpoʊət"
 },
 {
   "id": 1063,
   "word": "TECHNIQUES",
   "pronunciations": "tɛkˈniːks"
 },
 {
   "id": 1064,
   "word": "BRIDGE",
   "pronunciations": "ˈbrɪdʒ"
 },
 {
   "id": 1065,
   "word": "CAUGHT",
   "pronunciations": "ˈkɑːt, ˈkɔt"
 },
 {
   "id": 1066,
   "word": "CHICAGO",
   "pronunciations": "ʃəˈkɑːˌgoʊ"
 },
 {
   "id": 1067,
   "word": "CLAIM",
   "pronunciations": "ˈkleɪm"
 },
 {
   "id": 1068,
   "word": "CONCERN",
   "pronunciations": "kənˈsɝːn"
 },
 {
   "id": 1069,
   "word": "ENTERED",
   "pronunciations": "ˈɛntɝd, ˈɛnɝd"
 },
 {
   "id": 1070,
   "word": "FIGHT",
   "pronunciations": "ˈfaɪt"
 },
 {
   "id": 1071,
   "word": "HAPPY",
   "pronunciations": "ˈhæpi"
 },
 {
   "id": 1072,
   "word": "HE'D",
   "pronunciations": "ˈhiːd"
 },
 {
   "id": 1073,
   "word": "INSTITUTIONS",
   "pronunciations": "ˌɪnstɪˈtuːʃənz"
 },
 {
   "id": 1074,
   "word": "MASS",
   "pronunciations": "ˈmæs"
 },
 {
   "id": 1075,
   "word": "POPULAR",
   "pronunciations": "ˈpɑːpjəlɝ"
 },
 {
   "id": 1076,
   "word": "SHARE",
   "pronunciations": "ˈʃɛr"
 },
 {
   "id": 1077,
   "word": "STYLE",
   "pronunciations": "ˈstaɪl"
 },
 {
   "id": 1078,
   "word": "CATTLE",
   "pronunciations": "ˈkætəl"
 },
 {
   "id": 1079,
   "word": "CHRIST",
   "pronunciations": "ˈkraɪst"
 },
 {
   "id": 1080,
   "word": "COMMUNIST",
   "pronunciations": "ˈkɑːmjənəst"
 },
 {
   "id": 1081,
   "word": "DOLLARS",
   "pronunciations": "ˈdɑːlɝz, ˈdɔlɝz"
 },
 {
   "id": 1082,
   "word": "FOLLOW",
   "pronunciations": "ˈfɑːloʊ"
 },
 {
   "id": 1083,
   "word": "HEAT",
   "pronunciations": "ˈhiːt"
 },
 {
   "id": 1084,
   "word": "INCLUDED",
   "pronunciations": "ˌɪnˈkluːdəd, ˌɪnˈkluːdɪd"
 },
 {
   "id": 1085,
   "word": "ISN'T",
   "pronunciations": "ˈɪzənt, ɪzənt, ˈɪzən"
 },
 {
   "id": 1086,
   "word": "MATERIALS",
   "pronunciations": "məˈtɪriːəlz"
 },
 {
   "id": 1087,
   "word": "RADIATION",
   "pronunciations": "ˌreɪdiːˈeɪʃən"
 },
 {
   "id": 1088,
   "word": "STATUS",
   "pronunciations": "ˈstætəs, ˈsteɪtəs"
 },
 {
   "id": 1089,
   "word": "SUPPOSE",
   "pronunciations": "səˈpoʊz"
 },
 {
   "id": 1090,
   "word": "THOUSAND",
   "pronunciations": "ˈθaʊzənd, ˈθaʊzən"
 },
 {
   "id": 1091,
   "word": "ACCEPTED",
   "pronunciations": "ækˈsɛptɪd"
 },
 {
   "id": 1092,
   "word": "BEHAVIOR",
   "pronunciations": "bɪˈheɪvjɝ"
 },
 {
   "id": 1093,
   "word": "BOOKS",
   "pronunciations": "ˈbʊks"
 },
 {
   "id": 1094,
   "word": "CHARLES",
   "pronunciations": "ˈtʃɑːrlz, ˈtʃɑːrəlz"
 },
 {
   "id": 1095,
   "word": "CHURCHES",
   "pronunciations": "ˈtʃɝːtʃɪz"
 },
 {
   "id": 1096,
   "word": "CONFERENCE",
   "pronunciations": "ˈkɑːnfɝəns, ˈkɑːnfrəns"
 },
 {
   "id": 1097,
   "word": "CONSIDERABLE",
   "pronunciations": "kənˈsɪdɝəbəl"
 },
 {
   "id": 1098,
   "word": "FILM",
   "pronunciations": "ˈfɪlm"
 },
 {
   "id": 1099,
   "word": "GIVING",
   "pronunciations": "ˈgɪvɪŋ"
 },
 {
   "id": 1100,
   "word": "OPINION",
   "pronunciations": "əˈpɪnjən"
 },
 {
   "id": 1101,
   "word": "PRIMARY",
   "pronunciations": "ˈpraɪˌmɛri"
 },
 {
   "id": 1102,
   "word": "SITTING",
   "pronunciations": "ˈsɪtɪŋ"
 },
 {
   "id": 1103,
   "word": "USUAL",
   "pronunciations": "ˈjuːʒəwəl, ˈjuːʒuːəl"
 },
 {
   "id": 1104,
   "word": "ATTEMPT",
   "pronunciations": "əˈtɛmpt"
 },
 {
   "id": 1105,
   "word": "CHANGED",
   "pronunciations": "ˈtʃeɪndʒd"
 },
 {
   "id": 1106,
   "word": "CONSTRUCTION",
   "pronunciations": "kənˈstrʌkʃən"
 },
 {
   "id": 1107,
   "word": "FUNDS",
   "pronunciations": "ˈfʌndz"
 },
 {
   "id": 1108,
   "word": "HELL",
   "pronunciations": "ˈhɛl"
 },
 {
   "id": 1109,
   "word": "MARRIAGE",
   "pronunciations": "ˈmɛrɪdʒ"
 },
 {
   "id": 1110,
   "word": "OIL",
   "pronunciations": "ˈɔɪl"
 },
 {
   "id": 1111,
   "word": "PROPER",
   "pronunciations": "ˈprɑːpɝ"
 },
 {
   "id": 1112,
   "word": "SEA",
   "pronunciations": "ˈsiː"
 },
 {
   "id": 1113,
   "word": "SIR",
   "pronunciations": "ˈsɝː"
 },
 {
   "id": 1114,
   "word": "SUCCESSFUL",
   "pronunciations": "səkˈsɛsfəl"
 },
 {
   "id": 1115,
   "word": "ARM",
   "pronunciations": "ˈɑːrm"
 },
 {
   "id": 1116,
   "word": "DISCUSSION",
   "pronunciations": "dɪˈskʌʃən"
 },
 {
   "id": 1117,
   "word": "EVERYONE",
   "pronunciations": "ˈɛvriːˌwən"
 },
 {
   "id": 1118,
   "word": "HIGHLY",
   "pronunciations": "ˈhaɪli"
 },
 {
   "id": 1119,
   "word": "PARK",
   "pronunciations": "ˈpɑːrk"
 },
 {
   "id": 1120,
   "word": "PRACTICE",
   "pronunciations": "ˈpræktɪs"
 },
 {
   "id": 1121,
   "word": "SHOWS",
   "pronunciations": "ˈʃoʊz"
 },
 {
   "id": 1122,
   "word": "SIGN",
   "pronunciations": "ˈsaɪn"
 },
 {
   "id": 1123,
   "word": "SOMEONE",
   "pronunciations": "ˈsʌmˌwən"
 },
 {
   "id": 1124,
   "word": "SOURCE",
   "pronunciations": "ˈsɔrs"
 },
 {
   "id": 1125,
   "word": "TRADITION",
   "pronunciations": "trəˈdɪʃən"
 },
 {
   "id": 1126,
   "word": "WAIT",
   "pronunciations": "ˈweɪt"
 },
 {
   "id": 1127,
   "word": "WORTH",
   "pronunciations": "ˈwɝːθ"
 },
 {
   "id": 1128,
   "word": "AMERICANS",
   "pronunciations": "əˈmɛrɪkənz"
 },
 {
   "id": 1129,
   "word": "ANNUAL",
   "pronunciations": "ˈænjuːəl"
 },
 {
   "id": 1130,
   "word": "AUTHORITY",
   "pronunciations": "əˈθɔrəti"
 },
 {
   "id": 1131,
   "word": "C.",
   "pronunciations": "ˈsiː"
 },
 {
   "id": 1132,
   "word": "LORD",
   "pronunciations": "ˈlɔrd"
 },
 {
   "id": 1133,
   "word": "OLDER",
   "pronunciations": "ˈoʊldɝ"
 },
 {
   "id": 1134,
   "word": "PROJECT",
   "pronunciations": "ˈprɑːdʒɛkt, prɑːˈdʒɛkt"
 },
 {
   "id": 1135,
   "word": "REMAIN",
   "pronunciations": "rɪˈmeɪn, riːˈmeɪn"
 },
 {
   "id": 1136,
   "word": "SUCCESS",
   "pronunciations": "səkˈsɛs"
 },
 {
   "id": 1137,
   "word": "FELL",
   "pronunciations": "ˈfɛl"
 },
 {
   "id": 1138,
   "word": "JACK",
   "pronunciations": "ˈdʒæk"
 },
 {
   "id": 1139,
   "word": "LEADERSHIP",
   "pronunciations": "ˈliːdɝˌʃɪp"
 },
 {
   "id": 1140,
   "word": "OBVIOUS",
   "pronunciations": "ˈɑːbviːəs"
 },
 {
   "id": 1141,
   "word": "PIECES",
   "pronunciations": "ˈpiːsəz, ˈpiːsɪz"
 },
 {
   "id": 1142,
   "word": "PRINCIPAL",
   "pronunciations": "ˈprɪnsəpəl"
 },
 {
   "id": 1143,
   "word": "THIN",
   "pronunciations": "ˈθɪn"
 },
 {
   "id": 1144,
   "word": "BASE",
   "pronunciations": "ˈbeɪs"
 },
 {
   "id": 1145,
   "word": "CIVIL",
   "pronunciations": "ˈsɪvəl"
 },
 {
   "id": 1146,
   "word": "COMPLEX",
   "pronunciations": "ˈkɑːmplɛks, kəmˈplɛks"
 },
 {
   "id": 1147,
   "word": "CONDITION",
   "pronunciations": "kənˈdɪʃən"
 },
 {
   "id": 1148,
   "word": "DINNER",
   "pronunciations": "ˈdɪnɝ"
 },
 {
   "id": 1149,
   "word": "ENTIRELY",
   "pronunciations": "ɪnˈtaɪɝli"
 },
 {
   "id": 1150,
   "word": "FREQUENTLY",
   "pronunciations": "ˈfriːkwəntli, ˈfriːkwɛntli"
 },
 {
   "id": 1151,
   "word": "MANAGEMENT",
   "pronunciations": "ˈmænədʒmənt, ˈmænɪdʒmənt"
 },
 {
   "id": 1152,
   "word": "MEASURE",
   "pronunciations": "ˈmɛʒɝ"
 },
 {
   "id": 1153,
   "word": "MIKE",
   "pronunciations": "ˈmaɪk"
 },
 {
   "id": 1154,
   "word": "OBJECTIVE",
   "pronunciations": "əbˈdʒɛktɪv"
 },
 {
   "id": 1155,
   "word": "PARENTS",
   "pronunciations": "ˈpɛrənts"
 },
 {
   "id": 1156,
   "word": "RECORDS",
   "pronunciations": "rəˈkɔrdz, ˈrɛkɝdz, rɪˈkɔrdz"
 },
 {
   "id": 1157,
   "word": "SECURITY",
   "pronunciations": "sɪˈkjʊrəti"
 },
 {
   "id": 1158,
   "word": "STRUCTURE",
   "pronunciations": "ˈstrʌktʃɝ"
 },
 {
   "id": 1159,
   "word": "WEIGHT",
   "pronunciations": "ˈweɪt"
 },
 {
   "id": 1160,
   "word": "BALANCE",
   "pronunciations": "ˈbæləns"
 },
 {
   "id": 1161,
   "word": "CAUSED",
   "pronunciations": "ˈkɑːzd, ˈkɔzd"
 },
 {
   "id": 1162,
   "word": "CORPORATION",
   "pronunciations": "ˌkɔrpɝˈeɪʃən"
 },
 {
   "id": 1163,
   "word": "DANCE",
   "pronunciations": "ˈdæns"
 },
 {
   "id": 1164,
   "word": "EQUAL",
   "pronunciations": "ˈiːkwəl"
 },
 {
   "id": 1165,
   "word": "KITCHEN",
   "pronunciations": "ˈkɪtʃən"
 },
 {
   "id": 1166,
   "word": "NOTED",
   "pronunciations": "ˈnoʊtəd, ˈnoʊtɪd"
 },
 {
   "id": 1167,
   "word": "PRODUCED",
   "pronunciations": "prəˈduːst"
 },
 {
   "id": 1168,
   "word": "PURPOSES",
   "pronunciations": "ˈpɝːpəsəz, ˈpɝːpəsɪz"
 },
 {
   "id": 1169,
   "word": "YOU'LL",
   "pronunciations": "ˈjuːl"
 },
 {
   "id": 1170,
   "word": "CLOTHES",
   "pronunciations": "ˈkloʊðz, ˈkloʊz"
 },
 {
   "id": 1171,
   "word": "DEVELOP",
   "pronunciations": "dɪˈvɛləp"
 },
 {
   "id": 1172,
   "word": "FAILURE",
   "pronunciations": "ˈfeɪljɝ"
 },
 {
   "id": 1173,
   "word": "FAMOUS",
   "pronunciations": "ˈfeɪməs"
 },
 {
   "id": 1174,
   "word": "GOES",
   "pronunciations": "ˈgoʊz"
 },
 {
   "id": 1175,
   "word": "LONDON",
   "pronunciations": "ˈlʌndən"
 },
 {
   "id": 1176,
   "word": "NAMES",
   "pronunciations": "ˈneɪmz"
 },
 {
   "id": 1177,
   "word": "PASS",
   "pronunciations": "ˈpæs"
 },
 {
   "id": 1178,
   "word": "PUBLISHED",
   "pronunciations": "ˈpʌblɪʃt"
 },
 {
   "id": 1179,
   "word": "QUICKLY",
   "pronunciations": "ˈkwɪkli"
 },
 {
   "id": 1180,
   "word": "REGARD",
   "pronunciations": "rəˈgɑːrd, rɪˈgɑːrd"
 },
 {
   "id": 1181,
   "word": "ACTIVE",
   "pronunciations": "ˈæktɪv"
 },
 {
   "id": 1182,
   "word": "ADD",
   "pronunciations": "ˈæd"
 },
 {
   "id": 1183,
   "word": "ANNOUNCED",
   "pronunciations": "əˈnaʊnst"
 },
 {
   "id": 1184,
   "word": "BOTTOM",
   "pronunciations": "ˈbɑːtəm"
 },
 {
   "id": 1185,
   "word": "BREAK",
   "pronunciations": "ˈbreɪk"
 },
 {
   "id": 1186,
   "word": "CARRY",
   "pronunciations": "ˈkæri, ˈkɛri"
 },
 {
   "id": 1187,
   "word": "CHECK",
   "pronunciations": "ˈtʃɛk"
 },
 {
   "id": 1188,
   "word": "COVER",
   "pronunciations": "ˈkʌvɝ"
 },
 {
   "id": 1189,
   "word": "DOESN'T",
   "pronunciations": "ˈdʌzənt, ˈdʌzən"
 },
 {
   "id": 1190,
   "word": "ENEMY",
   "pronunciations": "ˈɛnəmi"
 },
 {
   "id": 1191,
   "word": "GREATEST",
   "pronunciations": "ˈgreɪtəst"
 },
 {
   "id": 1192,
   "word": "KEY",
   "pronunciations": "ˈkiː"
 },
 {
   "id": 1193,
   "word": "KING",
   "pronunciations": "ˈkɪŋ"
 },
 {
   "id": 1194,
   "word": "LAWS",
   "pronunciations": "ˈlɔz"
 },
 {
   "id": 1195,
   "word": "LEAVING",
   "pronunciations": "ˈliːvɪŋ"
 },
 {
   "id": 1196,
   "word": "MANAGER",
   "pronunciations": "ˈmænədʒɝ, ˈmænɪdʒɝ"
 },
 {
   "id": 1197,
   "word": "MOREOVER",
   "pronunciations": "mɔˈroʊvɝ"
 },
 {
   "id": 1198,
   "word": "PAIN",
   "pronunciations": "ˈpeɪn"
 },
 {
   "id": 1199,
   "word": "POETRY",
   "pronunciations": "ˈpoʊətri"
 },
 {
   "id": 1200,
   "word": "RELATIONSHIP",
   "pronunciations": "riːˈleɪʃənˌʃɪp"
 },
 {
   "id": 1201,
   "word": "SOURCES",
   "pronunciations": "ˈsɔrsəz"
 },
 {
   "id": 1202,
   "word": "ASSISTANCE",
   "pronunciations": "əˈsɪstəns"
 },
 {
   "id": 1203,
   "word": "BATTLE",
   "pronunciations": "ˈbætəl"
 },
 {
   "id": 1204,
   "word": "BRIGHT",
   "pronunciations": "ˈbraɪt"
 },
 {
   "id": 1205,
   "word": "CAREFULLY",
   "pronunciations": "ˈkɛrfəli"
 },
 {
   "id": 1206,
   "word": "COMPANIES",
   "pronunciations": "ˈkʌmpəˌniːz"
 },
 {
   "id": 1207,
   "word": "FACTS",
   "pronunciations": "ˈfækts, ˈfæks"
 },
 {
   "id": 1208,
   "word": "FINISHED",
   "pronunciations": "ˈfɪnɪʃt"
 },
 {
   "id": 1209,
   "word": "FIXED",
   "pronunciations": "ˈfɪkst"
 },
 {
   "id": 1210,
   "word": "MARY",
   "pronunciations": "ˈmɛri"
 },
 {
   "id": 1211,
   "word": "OPERATING",
   "pronunciations": "ˈɑːpɝˌeɪtɪŋ, ˈɔpɝˌeɪtɪŋ"
 },
 {
   "id": 1212,
   "word": "POSSIBILITY",
   "pronunciations": "ˌpɑːsəˈbɪləˌtiː"
 },
 {
   "id": 1213,
   "word": "PRODUCT",
   "pronunciations": "ˈprɑːdəkt"
 },
 {
   "id": 1214,
   "word": "SPOKE",
   "pronunciations": "ˈspoʊk"
 },
 {
   "id": 1215,
   "word": "TOUCH",
   "pronunciations": "ˈtʌtʃ"
 },
 {
   "id": 1216,
   "word": "UNITS",
   "pronunciations": "ˈjuːnəts, ˈjuːnɪts"
 },
 {
   "id": 1217,
   "word": "ALLOWED",
   "pronunciations": "əˈlaʊd"
 },
 {
   "id": 1218,
   "word": "BUILD",
   "pronunciations": "ˈbɪld"
 },
 {
   "id": 1219,
   "word": "CITIZENS",
   "pronunciations": "ˈsɪtəzənz, ˈsɪtɪzənz"
 },
 {
   "id": 1220,
   "word": "DIED",
   "pronunciations": "ˈdaɪd"
 },
 {
   "id": 1221,
   "word": "E.",
   "pronunciations": "ˈiː"
 },
 {
   "id": 1222,
   "word": "FINANCIAL",
   "pronunciations": "fəˈnænʃəl, fɪˈnænʃəl, ˌfaɪˈnænʃəl"
 },
 {
   "id": 1223,
   "word": "INCHES",
   "pronunciations": "ˈɪntʃəz, ˈɪntʃɪz"
 },
 {
   "id": 1224,
   "word": "LOSS",
   "pronunciations": "ˈlɔs"
 },
 {
   "id": 1225,
   "word": "OTHERWISE",
   "pronunciations": "ˈʌðɝˌwaɪz"
 },
 {
   "id": 1226,
   "word": "PATIENT",
   "pronunciations": "ˈpeɪʃənt"
 },
 {
   "id": 1227,
   "word": "PHILOSOPHY",
   "pronunciations": "fəˈlɑːsəfi"
 },
 {
   "id": 1228,
   "word": "PREVIOUS",
   "pronunciations": "ˈpriːviːəs"
 },
 {
   "id": 1229,
   "word": "REQUIRE",
   "pronunciations": "ˌriːˈkwaɪɝ, riːˈkwaɪr, rɪˈkwaɪɝ"
 },
 {
   "id": 1230,
   "word": "ROSE",
   "pronunciations": "ˈroʊz"
 },
 {
   "id": 1231,
   "word": "SCIENTIFIC",
   "pronunciations": "ˌsaɪənˈtɪfɪk"
 },
 {
   "id": 1232,
   "word": "SEEING",
   "pronunciations": "ˈsiːɪŋ"
 },
 {
   "id": 1233,
   "word": "SIGNIFICANT",
   "pronunciations": "səgˈnɪfɪkənt, sɪgˈnɪfɪkənt"
 },
 {
   "id": 1234,
   "word": "TAKES",
   "pronunciations": "ˈteɪks"
 },
 {
   "id": 1235,
   "word": "WORKERS",
   "pronunciations": "ˈwɝːkɝz"
 },
 {
   "id": 1236,
   "word": "CAPITAL",
   "pronunciations": "ˈkæpɪtəl"
 },
 {
   "id": 1237,
   "word": "CAPTAIN",
   "pronunciations": "ˈkæptən"
 },
 {
   "id": 1238,
   "word": "CLASSES",
   "pronunciations": "ˈklæsəz, ˈklæsɪz"
 },
 {
   "id": 1239,
   "word": "CONCEPT",
   "pronunciations": "ˈkɑːnsɛpt"
 },
 {
   "id": 1240,
   "word": "DISTRIBUTION",
   "pronunciations": "ˌdɪstrəˈbjuːʃən"
 },
 {
   "id": 1241,
   "word": "GERMAN",
   "pronunciations": "ˈdʒɝːmən"
 },
 {
   "id": 1242,
   "word": "MARKED",
   "pronunciations": "ˈmɑːrkt"
 },
 {
   "id": 1243,
   "word": "MUSICAL",
   "pronunciations": "ˈmjuːzɪkəl"
 },
 {
   "id": 1244,
   "word": "POST",
   "pronunciations": "ˈpoʊst"
 },
 {
   "id": 1245,
   "word": "RELATIVELY",
   "pronunciations": "ˈrɛlətɪvli"
 },
 {
   "id": 1246,
   "word": "RULES",
   "pronunciations": "ˈruːlz"
 },
 {
   "id": 1247,
   "word": "SHAPE",
   "pronunciations": "ˈʃeɪp"
 },
 {
   "id": 1248,
   "word": "STATED",
   "pronunciations": "ˈsteɪtɪd"
 },
 {
   "id": 1249,
   "word": "STATIONS",
   "pronunciations": "ˈsteɪʃənz"
 },
 {
   "id": 1250,
   "word": "VARIETY",
   "pronunciations": "vɝˈaɪəti"
 },
 {
   "id": 1251,
   "word": "AFFAIRS",
   "pronunciations": "əˈfɛrz"
 },
 {
   "id": 1252,
   "word": "APPEARS",
   "pronunciations": "əˈpɪrz"
 },
 {
   "id": 1253,
   "word": "AWARE",
   "pronunciations": "əˈwɛr"
 },
 {
   "id": 1254,
   "word": "BEGIN",
   "pronunciations": "bɪˈgɪn"
 },
 {
   "id": 1255,
   "word": "BROAD",
   "pronunciations": "ˈbrɔd"
 },
 {
   "id": 1256,
   "word": "CATHOLIC",
   "pronunciations": "ˈkæθlɪk"
 },
 {
   "id": 1257,
   "word": "CIRCUMSTANCES",
   "pronunciations": "ˈsɝːkəmˌstænsəz, ˈsɝːkəmˌstænsɪz"
 },
 {
   "id": 1258,
   "word": "COLLECTION",
   "pronunciations": "kəˈlɛkʃən"
 },
 {
   "id": 1259,
   "word": "IMPOSSIBLE",
   "pronunciations": "ˌɪmˈpɑːsəbəl"
 },
 {
   "id": 1260,
   "word": "LEARN",
   "pronunciations": "ˈlɝːn"
 },
 {
   "id": 1261,
   "word": "NAMED",
   "pronunciations": "ˈneɪmd"
 },
 {
   "id": 1262,
   "word": "OPERATIONS",
   "pronunciations": "ˌɑːpɝˈeɪʃənz"
 },
 {
   "id": 1263,
   "word": "PROPOSED",
   "pronunciations": "prəˈpoʊzd"
 },
 {
   "id": 1264,
   "word": "REMAINS",
   "pronunciations": "rɪˈmeɪnz, riːˈmeɪnz"
 },
 {
   "id": 1265,
   "word": "REPORTS",
   "pronunciations": "rɪˈpɔrts, riːˈpɔrts"
 },
 {
   "id": 1266,
   "word": "SEX",
   "pronunciations": "ˈsɛks"
 },
 {
   "id": 1267,
   "word": "STRANGE",
   "pronunciations": "ˈstreɪndʒ"
 },
 {
   "id": 1268,
   "word": "W.",
   "pronunciations": "ˈdʌbəljuː"
 },
 {
   "id": 1269,
   "word": "BANK",
   "pronunciations": "ˈbæŋk"
 },
 {
   "id": 1270,
   "word": "CAPACITY",
   "pronunciations": "kəˈpæsəti, kəˈpæsɪti"
 },
 {
   "id": 1271,
   "word": "GOVERNOR",
   "pronunciations": "ˈgʌvɝnɝ"
 },
 {
   "id": 1272,
   "word": "HENRY",
   "pronunciations": "ˈhɛnri"
 },
 {
   "id": 1273,
   "word": "HOUSES",
   "pronunciations": "ˈhaʊsəz, ˈhaʊsɪz"
 },
 {
   "id": 1274,
   "word": "INTERESTS",
   "pronunciations": "ˈɪntrəsts, ˈɪntrɪsts, ˈɪntɝəsts, ˈɪntɝɪsts"
 },
 {
   "id": 1275,
   "word": "MARK",
   "pronunciations": "ˈmɑːrk"
 },
 {
   "id": 1276,
   "word": "OFFERED",
   "pronunciations": "ˈɔfɝd"
 },
 {
   "id": 1277,
   "word": "OFFICERS",
   "pronunciations": "ˈɔfəsɝz, ˈɔfɪsɝz"
 },
 {
   "id": 1278,
   "word": "OPENING",
   "pronunciations": "ˈoʊpənɪŋ"
 },
 {
   "id": 1279,
   "word": "PREVENT",
   "pronunciations": "prɪˈvɛnt, priːˈvɛnt"
 },
 {
   "id": 1280,
   "word": "REGULAR",
   "pronunciations": "ˈrɛgjəlɝ, ˈreɪgjəlɝ"
 },
 {
   "id": 1281,
   "word": "REMEMBERED",
   "pronunciations": "rɪˈmɛmbɝd, riːˈmɛmbɝd"
 },
 {
   "id": 1282,
   "word": "REQUIREMENTS",
   "pronunciations": "rɪˈkwaɪrmənts"
 },
 {
   "id": 1283,
   "word": "ROBERT",
   "pronunciations": "ˈrɑːbɝt"
 },
 {
   "id": 1284,
   "word": "SHIP",
   "pronunciations": "ˈʃɪp"
 },
 {
   "id": 1285,
   "word": "SIGHT",
   "pronunciations": "ˈsaɪt"
 },
 {
   "id": 1286,
   "word": "SLIGHTLY",
   "pronunciations": "ˈslaɪtli"
 },
 {
   "id": 1287,
   "word": "SPEED",
   "pronunciations": "ˈspiːd"
 },
 {
   "id": 1288,
   "word": "SPREAD",
   "pronunciations": "ˈsprɛd"
 },
 {
   "id": 1289,
   "word": "TEAM",
   "pronunciations": "ˈtiːm"
 },
 {
   "id": 1290,
   "word": "WINTER",
   "pronunciations": "ˈwɪntɝ"
 },
 {
   "id": 1291,
   "word": "YESTERDAY",
   "pronunciations": "ˈjɛstɝˌdeɪ, ˈjɛstɝdi"
 },
 {
   "id": 1292,
   "word": "BAR",
   "pronunciations": "ˈbɑːr"
 },
 {
   "id": 1293,
   "word": "CRISIS",
   "pronunciations": "ˈkraɪsəs"
 },
 {
   "id": 1294,
   "word": "DRINK",
   "pronunciations": "ˈdrɪŋk"
 },
 {
   "id": 1295,
   "word": "FRESH",
   "pronunciations": "ˈfrɛʃ"
 },
 {
   "id": 1296,
   "word": "INSTANCE",
   "pronunciations": "ˈɪnstəns"
 },
 {
   "id": 1297,
   "word": "INTERESTING",
   "pronunciations": "ˈɪntəˌrɛstɪŋ"
 },
 {
   "id": 1298,
   "word": "POEMS",
   "pronunciations": "ˈpoʊəmz"
 },
 {
   "id": 1299,
   "word": "PRESENTED",
   "pronunciations": "priːˈzɛntəd, pɝˈzɛntəd, priːˈzɛnəd, pɝˈzɛnəd"
 },
 {
   "id": 1300,
   "word": "PRODUCE",
   "pronunciations": "prəˈduːs, ˈproʊduːs"
 },
 {
   "id": 1301,
   "word": "TRAIN",
   "pronunciations": "ˈtreɪn"
 },
 {
   "id": 1302,
   "word": "YOUTH",
   "pronunciations": "ˈjuːθ"
 },
 {
   "id": 1303,
   "word": "AGREED",
   "pronunciations": "əˈgriːd"
 },
 {
   "id": 1304,
   "word": "APARTMENT",
   "pronunciations": "əˈpɑːrtmənt"
 },
 {
   "id": 1305,
   "word": "CAMPAIGN",
   "pronunciations": "kæmˈpeɪn"
 },
 {
   "id": 1306,
   "word": "CELLS",
   "pronunciations": "ˈsɛlz"
 },
 {
   "id": 1307,
   "word": "CREATED",
   "pronunciations": "kriːˈeɪtəd, kriːˈeɪtɪd"
 },
 {
   "id": 1308,
   "word": "ESSENTIAL",
   "pronunciations": "ɛˈsɛnʃəl, iːˈsɛnʃəl"
 },
 {
   "id": 1309,
   "word": "EVENT",
   "pronunciations": "ɪˈvɛnt, iːˈvɛnt"
 },
 {
   "id": 1310,
   "word": "FILE",
   "pronunciations": "ˈfaɪl"
 },
 {
   "id": 1311,
   "word": "FORCED",
   "pronunciations": "ˈfɔrst"
 },
 {
   "id": 1312,
   "word": "GERMANY",
   "pronunciations": "ˈdʒɝːməni"
 },
 {
   "id": 1313,
   "word": "IMMEDIATE",
   "pronunciations": "ˌɪˈmiːˌdiːət"
 },
 {
   "id": 1314,
   "word": "INDEX",
   "pronunciations": "ˈɪndɛks"
 },
 {
   "id": 1315,
   "word": "LIVES",
   "pronunciations": "ˈlɪvz, ˈlaɪvz"
 },
 {
   "id": 1316,
   "word": "NECK",
   "pronunciations": "ˈnɛk"
 },
 {
   "id": 1317,
   "word": "NINE",
   "pronunciations": "ˈnaɪn"
 },
 {
   "id": 1318,
   "word": "OPPOSITE",
   "pronunciations": "ˈɑːpəzɪt"
 },
 {
   "id": 1319,
   "word": "PROVIDES",
   "pronunciations": "prəˈvaɪdz"
 },
 {
   "id": 1320,
   "word": "SUBJECTS",
   "pronunciations": "ˈsʌbdʒɪkts, səbˈdʒɛkts, səbˈdʒɛks"
 },
 {
   "id": 1321,
   "word": "TRIP",
   "pronunciations": "ˈtrɪp"
 },
 {
   "id": 1322,
   "word": "WATCH",
   "pronunciations": "ˈwɑːtʃ, ˈwɔtʃ"
 },
 {
   "id": 1323,
   "word": "WATCHED",
   "pronunciations": "ˈwɑːtʃt, ˈwɔtʃt"
 },
 {
   "id": 1324,
   "word": "EXPLAINED",
   "pronunciations": "ɪkˈspleɪnd"
 },
 {
   "id": 1325,
   "word": "FEATURES",
   "pronunciations": "ˈfiːtʃɝz"
 },
 {
   "id": 1326,
   "word": "FULLY",
   "pronunciations": "ˈfʊli"
 },
 {
   "id": 1327,
   "word": "GRAY",
   "pronunciations": "ˈgreɪ"
 },
 {
   "id": 1328,
   "word": "INDICATE",
   "pronunciations": "ˈɪndəˌkeɪt"
 },
 {
   "id": 1329,
   "word": "LADY",
   "pronunciations": "ˈleɪdi"
 },
 {
   "id": 1330,
   "word": "OFFER",
   "pronunciations": "ˈɔfɝ"
 },
 {
   "id": 1331,
   "word": "PROVIDENCE",
   "pronunciations": "ˈprɑːvədəns"
 },
 {
   "id": 1332,
   "word": "RECOGNIZED",
   "pronunciations": "ˈrɛkəgˌnaɪzd"
 },
 {
   "id": 1333,
   "word": "RUSSIAN",
   "pronunciations": "ˈrʌʃən"
 },
 {
   "id": 1334,
   "word": "SESSION",
   "pronunciations": "ˈsɛʃən"
 },
 {
   "id": 1335,
   "word": "TEACHER",
   "pronunciations": "ˈtiːtʃɝ"
 },
 {
   "id": 1336,
   "word": "TWENTY",
   "pronunciations": "ˈtwɛnti"
 },
 {
   "id": 1337,
   "word": "ATMOSPHERE",
   "pronunciations": "ˈætməsˌfɪr"
 },
 {
   "id": 1338,
   "word": "DESIRE",
   "pronunciations": "dɪˈzaɪɝ"
 },
 {
   "id": 1339,
   "word": "DIFFERENCES",
   "pronunciations": "ˈdɪfɝənsɪz, ˈdɪfrənsəz"
 },
 {
   "id": 1340,
   "word": "ECONOMY",
   "pronunciations": "ɪˈkɑːnəmi, iːˈkɑːnəmi"
 },
 {
   "id": 1341,
   "word": "EXPRESSION",
   "pronunciations": "ɪkˈsprɛʃən"
 },
 {
   "id": 1342,
   "word": "MAXIMUM",
   "pronunciations": "ˈmæksəməm"
 },
 {
   "id": 1343,
   "word": "MENTIONED",
   "pronunciations": "ˈmɛnʃənd"
 },
 {
   "id": 1344,
   "word": "PROCEDURE",
   "pronunciations": "prəˈsiːdʒɝ, proʊˈsiːdʒɝ"
 },
 {
   "id": 1345,
   "word": "REALITY",
   "pronunciations": "ˌriːˈæləˌtiː"
 },
 {
   "id": 1346,
   "word": "REDUCED",
   "pronunciations": "rɪˈduːst"
 },
 {
   "id": 1347,
   "word": "SAM",
   "pronunciations": "ˈsæm"
 },
 {
   "id": 1348,
   "word": "SEPARATE",
   "pronunciations": "ˈsɛpɝˌeɪt, ˈsɛpɝɪt, ˈsɛprət"
 },
 {
   "id": 1349,
   "word": "STUDIED",
   "pronunciations": "ˈstʌdiːd"
 },
 {
   "id": 1350,
   "word": "TERM",
   "pronunciations": "ˈtɝːm"
 },
 {
   "id": 1351,
   "word": "BESIDE",
   "pronunciations": "bɪˈsaɪd, ˌbiːˈsaɪd"
 },
 {
   "id": 1352,
   "word": "COFFEE",
   "pronunciations": "ˈkɑːfi, ˈkɔfi"
 },
 {
   "id": 1353,
   "word": "EDGE",
   "pronunciations": "ˈɛdʒ"
 },
 {
   "id": 1354,
   "word": "ENTER",
   "pronunciations": "ˈɛntɝ, ˈɛnɝ"
 },
 {
   "id": 1355,
   "word": "FAIR",
   "pronunciations": "ˈfɛr"
 },
 {
   "id": 1356,
   "word": "FAST",
   "pronunciations": "ˈfæst"
 },
 {
   "id": 1357,
   "word": "FAVOR",
   "pronunciations": "ˈfeɪvɝ"
 },
 {
   "id": 1358,
   "word": "LITERARY",
   "pronunciations": "ˈlɪtɝˌɛri"
 },
 {
   "id": 1359,
   "word": "LOOKS",
   "pronunciations": "ˈlʊks"
 },
 {
   "id": 1360,
   "word": "MISSION",
   "pronunciations": "ˈmɪʃən"
 },
 {
   "id": 1361,
   "word": "PICKED",
   "pronunciations": "ˈpɪkt"
 },
 {
   "id": 1362,
   "word": "SECRET",
   "pronunciations": "ˈsiːkrət, ˈsiːkrɪt"
 },
 {
   "id": 1363,
   "word": "SMALLER",
   "pronunciations": "ˈsmɔlɝ"
 },
 {
   "id": 1364,
   "word": "TONE",
   "pronunciations": "ˈtoʊn"
 },
 {
   "id": 1365,
   "word": "TRADITIONAL",
   "pronunciations": "trəˈdɪʃənəl"
 },
 {
   "id": 1366,
   "word": "ADDRESS",
   "pronunciations": "ˈæˌdrɛs, æˈdrɛs"
 },
 {
   "id": 1367,
   "word": "ANODE",
   "pronunciations": "ˈæˌnoʊd"
 },
 {
   "id": 1368,
   "word": "BELIEVED",
   "pronunciations": "bɪˈliːvd"
 },
 {
   "id": 1369,
   "word": "EDITOR",
   "pronunciations": "ˈɛdətɝ, ˈɛdɪtɝ"
 },
 {
   "id": 1370,
   "word": "ELECTION",
   "pronunciations": "ɪˈlɛkʃən"
 },
 {
   "id": 1371,
   "word": "FOLLOWS",
   "pronunciations": "ˈfɑːloʊz"
 },
 {
   "id": 1372,
   "word": "JUDGE",
   "pronunciations": "ˈdʒʌdʒ"
 },
 {
   "id": 1373,
   "word": "LAID",
   "pronunciations": "ˈleɪd"
 },
 {
   "id": 1374,
   "word": "MODEL",
   "pronunciations": "ˈmɑːdəl"
 },
 {
   "id": 1375,
   "word": "PERMIT",
   "pronunciations": "pɝˈmɪt, ˈpɝːˌmɪt"
 },
 {
   "id": 1376,
   "word": "RESPONSE",
   "pronunciations": "rɪˈspɑːns, riːˈspɑːns"
 },
 {
   "id": 1377,
   "word": "RIGHTS",
   "pronunciations": "ˈraɪts"
 },
 {
   "id": 1378,
   "word": "SOLID",
   "pronunciations": "ˈsɑːləd"
 },
 {
   "id": 1379,
   "word": "T",
   "pronunciations": "ˈtiː"
 },
 {
   "id": 1380,
   "word": "TITLE",
   "pronunciations": "ˈtaɪtəl"
 },
 {
   "id": 1381,
   "word": "VOCATIONAL",
   "pronunciations": "voʊˈkeɪʃənəl"
 },
 {
   "id": 1382,
   "word": "B.",
   "pronunciations": "ˈbiː"
 },
 {
   "id": 1383,
   "word": "BOTTLE",
   "pronunciations": "ˈbɑːtəl"
 },
 {
   "id": 1384,
   "word": "BUILDINGS",
   "pronunciations": "ˈbɪldɪŋz"
 },
 {
   "id": 1385,
   "word": "DIFFICULTY",
   "pronunciations": "ˈdɪfəkəlti, ˈdɪfɪˌkəlti"
 },
 {
   "id": 1386,
   "word": "FORMED",
   "pronunciations": "ˈfɔrmd"
 },
 {
   "id": 1387,
   "word": "HEARING",
   "pronunciations": "ˈhiːrɪŋ"
 },
 {
   "id": 1388,
   "word": "KNIFE",
   "pronunciations": "ˈnaɪf"
 },
 {
   "id": 1389,
   "word": "MEMORY",
   "pronunciations": "ˈmɛmɝi"
 },
 {
   "id": 1390,
   "word": "NICE",
   "pronunciations": "ˈnaɪs, ˈniːs"
 },
 {
   "id": 1391,
   "word": "P",
   "pronunciations": "ˈpiː"
 },
 {
   "id": 1392,
   "word": "PRESENCE",
   "pronunciations": "ˈprɛzəns"
 },
 {
   "id": 1393,
   "word": "QUIET",
   "pronunciations": "ˈkwaɪət"
 },
 {
   "id": 1394,
   "word": "RECEIVE",
   "pronunciations": "rəˈsiːv, rɪˈsiːv, riːˈsiːv"
 },
 {
   "id": 1395,
   "word": "REGION",
   "pronunciations": "ˈriːdʒən"
 },
 {
   "id": 1396,
   "word": "TELEPHONE",
   "pronunciations": "ˈtɛləˌfoʊn"
 },
 {
   "id": 1397,
   "word": "WATCHING",
   "pronunciations": "ˈwɑːtʃɪŋ"
 },
 {
   "id": 1398,
   "word": "CAMP",
   "pronunciations": "ˈkæmp"
 },
 {
   "id": 1399,
   "word": "DOG",
   "pronunciations": "ˈdɔg"
 },
 {
   "id": 1400,
   "word": "EXPRESSED",
   "pronunciations": "ɪkˈsprɛst"
 },
 {
   "id": 1401,
   "word": "FIT",
   "pronunciations": "ˈfɪt"
 },
 {
   "id": 1402,
   "word": "FRANCE",
   "pronunciations": "ˈfræns"
 },
 {
   "id": 1403,
   "word": "JUNIOR",
   "pronunciations": "ˈdʒuːnjɝ"
 },
 {
   "id": 1404,
   "word": "KILLED",
   "pronunciations": "ˈkɪld"
 },
 {
   "id": 1405,
   "word": "MURDER",
   "pronunciations": "ˈmɝːdɝ"
 },
 {
   "id": 1406,
   "word": "OFFICIAL",
   "pronunciations": "əˈfɪʃəl"
 },
 {
   "id": 1407,
   "word": "PERSONNEL",
   "pronunciations": "ˌpɝːsəˈnɛl"
 },
 {
   "id": 1408,
   "word": "PLANNED",
   "pronunciations": "ˈplænd"
 },
 {
   "id": 1409,
   "word": "REMOVED",
   "pronunciations": "riːˈmuːvd"
 },
 {
   "id": 1410,
   "word": "ROCK",
   "pronunciations": "ˈrɑːk"
 },
 {
   "id": 1411,
   "word": "ROUND",
   "pronunciations": "ˈraʊnd"
 },
 {
   "id": 1412,
   "word": "STAYED",
   "pronunciations": "ˈsteɪd"
 },
 {
   "id": 1413,
   "word": "TREATED",
   "pronunciations": "ˈtriːtəd, ˈtriːtɪd"
 },
 {
   "id": 1414,
   "word": "TURNING",
   "pronunciations": "ˈtɝːnɪŋ"
 },
 {
   "id": 1415,
   "word": "VIRGINIA",
   "pronunciations": "vɝˈdʒɪnjə"
 },
 {
   "id": 1416,
   "word": "VOTE",
   "pronunciations": "ˈvoʊt"
 },
 {
   "id": 1417,
   "word": "ABILITY",
   "pronunciations": "əˈbɪləˌtiː"
 },
 {
   "id": 1418,
   "word": "BERLIN",
   "pronunciations": "bɝˈlɪn"
 },
 {
   "id": 1419,
   "word": "CLAIMS",
   "pronunciations": "ˈkleɪmz"
 },
 {
   "id": 1420,
   "word": "CONTRAST",
   "pronunciations": "ˈkɑːntræst, kənˈtræst"
 },
 {
   "id": 1421,
   "word": "FACULTY",
   "pronunciations": "ˈfækəlti"
 },
 {
   "id": 1422,
   "word": "FAILED",
   "pronunciations": "ˈfeɪld"
 },
 {
   "id": 1423,
   "word": "FOURTH",
   "pronunciations": "ˈfɔrθ"
 },
 {
   "id": 1424,
   "word": "FRAME",
   "pronunciations": "ˈfreɪm"
 },
 {
   "id": 1425,
   "word": "GAIN",
   "pronunciations": "ˈgeɪn"
 },
 {
   "id": 1426,
   "word": "INCREASING",
   "pronunciations": "ˌɪnˈkriːsɪŋ"
 },
 {
   "id": 1427,
   "word": "INTERIOR",
   "pronunciations": "ˌɪnˈtɪriːɝ"
 },
 {
   "id": 1428,
   "word": "JEWISH",
   "pronunciations": "ˈdʒuːɪʃ"
 },
 {
   "id": 1429,
   "word": "LEADER",
   "pronunciations": "ˈliːdɝ"
 },
 {
   "id": 1430,
   "word": "NOBODY",
   "pronunciations": "ˈnoʊˌbɑːˌdiː, ˈnoʊbədi"
 },
 {
   "id": 1431,
   "word": "NOVEMBER",
   "pronunciations": "noʊˈvɛmbɝ"
 },
 {
   "id": 1432,
   "word": "OBSERVED",
   "pronunciations": "əbˈzɝːvd"
 },
 {
   "id": 1433,
   "word": "POINTED",
   "pronunciations": "ˈpɔɪntɪd"
 },
 {
   "id": 1434,
   "word": "POSITIVE",
   "pronunciations": "ˈpɑːzətɪv"
 },
 {
   "id": 1435,
   "word": "RICH",
   "pronunciations": "ˈrɪtʃ"
 },
 {
   "id": 1436,
   "word": "SELECTED",
   "pronunciations": "səˈlɛktəd, səˈlɛktɪd"
 },
 {
   "id": 1437,
   "word": "SEND",
   "pronunciations": "ˈsɛnd"
 },
 {
   "id": 1438,
   "word": "STANDARDS",
   "pronunciations": "ˈstændɝdz"
 },
 {
   "id": 1439,
   "word": "STORE",
   "pronunciations": "ˈstɔr"
 },
 {
   "id": 1440,
   "word": "TWICE",
   "pronunciations": "ˈtwaɪs"
 },
 {
   "id": 1441,
   "word": "ADVANTAGE",
   "pronunciations": "ædˈvæntɪdʒ"
 },
 {
   "id": 1442,
   "word": "BRIEF",
   "pronunciations": "ˈbriːf"
 },
 {
   "id": 1443,
   "word": "BROTHER",
   "pronunciations": "ˈbrʌðɝ"
 },
 {
   "id": 1444,
   "word": "CHAPTER",
   "pronunciations": "ˈtʃæptɝ"
 },
 {
   "id": 1445,
   "word": "DIE",
   "pronunciations": "ˈdaɪ"
 },
 {
   "id": 1446,
   "word": "DISCOVERED",
   "pronunciations": "dɪˈskʌvɝd"
 },
 {
   "id": 1447,
   "word": "INDIVIDUALS",
   "pronunciations": "ˌɪndəˈvɪdʒəwəlz"
 },
 {
   "id": 1448,
   "word": "LOUIS",
   "pronunciations": "ˈluːɪs, ˈluːi"
 },
 {
   "id": 1449,
   "word": "MEMBERSHIP",
   "pronunciations": "ˈmɛmbɝˌʃɪp"
 },
 {
   "id": 1450,
   "word": "NEVERTHELESS",
   "pronunciations": "ˌnɛvɝðəˈlɛs"
 },
 {
   "id": 1451,
   "word": "POWERS",
   "pronunciations": "ˈpaʊɝz"
 },
 {
   "id": 1452,
   "word": "PULLED",
   "pronunciations": "ˈpʊld"
 },
 {
   "id": 1453,
   "word": "RULE",
   "pronunciations": "ˈruːl"
 },
 {
   "id": 1454,
   "word": "VALLEY",
   "pronunciations": "ˈvæli"
 },
 {
   "id": 1455,
   "word": "WRITER",
   "pronunciations": "ˈraɪtɝ"
 },
 {
   "id": 1456,
   "word": "WRITERS",
   "pronunciations": "ˈraɪtɝz"
 },
 {
   "id": 1457,
   "word": "ACCEPT",
   "pronunciations": "ækˈsɛpt, əkˈsɛpt"
 },
 {
   "id": 1458,
   "word": "ALLOW",
   "pronunciations": "əˈlaʊ"
 },
 {
   "id": 1459,
   "word": "ASSUMED",
   "pronunciations": "əˈsuːmd"
 },
 {
   "id": 1460,
   "word": "BOAT",
   "pronunciations": "ˈboʊt"
 },
 {
   "id": 1461,
   "word": "BROKE",
   "pronunciations": "ˈbroʊk"
 },
 {
   "id": 1462,
   "word": "COMMAND",
   "pronunciations": "kəˈmænd"
 },
 {
   "id": 1463,
   "word": "DAUGHTER",
   "pronunciations": "ˈdɔtɝ"
 },
 {
   "id": 1464,
   "word": "DETAIL",
   "pronunciations": "dɪˈteɪl, ˈdiːteɪl"
 },
 {
   "id": 1465,
   "word": "EVERYBODY",
   "pronunciations": "ˈɛvriːˌbɑːdi"
 },
 {
   "id": 1466,
   "word": "EVIL",
   "pronunciations": "ˈiːvəl"
 },
 {
   "id": 1467,
   "word": "FACES",
   "pronunciations": "ˈfeɪsəz, ˈfeɪsɪz"
 },
 {
   "id": 1468,
   "word": "FAMILIAR",
   "pronunciations": "fəˈmɪljɝ"
 },
 {
   "id": 1469,
   "word": "FIELDS",
   "pronunciations": "ˈfiːldz"
 },
 {
   "id": 1470,
   "word": "FIGHTING",
   "pronunciations": "ˈfaɪtɪŋ"
 },
 {
   "id": 1471,
   "word": "HILL",
   "pronunciations": "ˈhɪl"
 },
 {
   "id": 1472,
   "word": "INCREASES",
   "pronunciations": "ˌɪnˈkriːsɪz, ˈɪnˌkriːsɪz"
 },
 {
   "id": 1473,
   "word": "ITEMS",
   "pronunciations": "ˈaɪtəmz"
 },
 {
   "id": 1474,
   "word": "JONES",
   "pronunciations": "ˈdʒoʊnz"
 },
 {
   "id": 1475,
   "word": "LEGAL",
   "pronunciations": "ˈliːgəl"
 },
 {
   "id": 1476,
   "word": "MASTER",
   "pronunciations": "ˈmæstɝ"
 },
 {
   "id": 1477,
   "word": "MORGAN",
   "pronunciations": "ˈmɔrgən"
 },
 {
   "id": 1478,
   "word": "ORDINARY",
   "pronunciations": "ˈɔrdəˌnɛri"
 },
 {
   "id": 1479,
   "word": "PHASE",
   "pronunciations": "ˈfeɪz"
 },
 {
   "id": 1480,
   "word": "PLATFORM",
   "pronunciations": "ˈplætˌfɔrm"
 },
 {
   "id": 1481,
   "word": "PLUS",
   "pronunciations": "ˈplʌs"
 },
 {
   "id": 1482,
   "word": "RESOURCES",
   "pronunciations": "ˈriːsɔrsɪz"
 },
 {
   "id": 1483,
   "word": "RUSSIA",
   "pronunciations": "ˈrʌʃə"
 },
 {
   "id": 1484,
   "word": "SHARP",
   "pronunciations": "ˈʃɑːrp"
 },
 {
   "id": 1485,
   "word": "SOMEHOW",
   "pronunciations": "ˈsʌmˌhaʊ"
 },
 {
   "id": 1486,
   "word": "UPPER",
   "pronunciations": "ˈʌpɝ"
 },
 {
   "id": 1487,
   "word": "VILLAGE",
   "pronunciations": "ˈvɪlədʒ, ˈvɪlɪdʒ"
 },
 {
   "id": 1488,
   "word": "WANTS",
   "pronunciations": "ˈwɑːnts, ˈwɔnts"
 },
 {
   "id": 1489,
   "word": "WINE",
   "pronunciations": "ˈwaɪn"
 },
 {
   "id": 1490,
   "word": "APPROXIMATELY",
   "pronunciations": "əˈprɑːksəmətli"
 },
 {
   "id": 1491,
   "word": "APRIL",
   "pronunciations": "ˈeɪprəl"
 },
 {
   "id": 1492,
   "word": "BEAUTY",
   "pronunciations": "ˈbjuːti"
 },
 {
   "id": 1493,
   "word": "CARRYING",
   "pronunciations": "ˈkæriːɪŋ, ˈkɛriːɪŋ"
 },
 {
   "id": 1494,
   "word": "CHOSEN",
   "pronunciations": "ˈtʃoʊzən"
 },
 {
   "id": 1495,
   "word": "COLUMN",
   "pronunciations": "ˈkɑːləm"
 },
 {
   "id": 1496,
   "word": "COMPARED",
   "pronunciations": "kəmˈpɛrd"
 },
 {
   "id": 1497,
   "word": "CONSTANT",
   "pronunciations": "ˈkɑːnstənt"
 },
 {
   "id": 1498,
   "word": "DU",
   "pronunciations": "ˈduː, də"
 },
 {
   "id": 1499,
   "word": "FACTOR",
   "pronunciations": "ˈfæktɝ"
 },
 {
   "id": 1500,
   "word": "FORTH",
   "pronunciations": "ˈfɔrθ"
 },
 {
   "id": 1501,
   "word": "H.",
   "pronunciations": "ˈeɪtʃ"
 },
 {
   "id": 1502,
   "word": "HISTORICAL",
   "pronunciations": "hɪˈstɔrɪkəl"
 },
 {
   "id": 1503,
   "word": "MERCER",
   "pronunciations": "ˈmɝːsɝ"
 },
 {
   "id": 1504,
   "word": "PRINCIPLES",
   "pronunciations": "ˈprɪnsəpəlz"
 },
 {
   "id": 1505,
   "word": "PROVED",
   "pronunciations": "ˈpruːvd"
 },
 {
   "id": 1506,
   "word": "RESPONSIBLE",
   "pronunciations": "riːˈspɑːnsəbəl"
 },
 {
   "id": 1507,
   "word": "RICHARD",
   "pronunciations": "ˈrɪtʃɝd"
 },
 {
   "id": 1508,
   "word": "SMILED",
   "pronunciations": "ˈsmaɪld"
 },
 {
   "id": 1509,
   "word": "UNITY",
   "pronunciations": "ˈjuːnəti, ˈjuːnɪti"
 },
 {
   "id": 1510,
   "word": "UNIVERSE",
   "pronunciations": "ˈjuːnəˌvɝːs"
 },
 {
   "id": 1511,
   "word": "AIRCRAFT",
   "pronunciations": "ˈɛrˌkræft"
 },
 {
   "id": 1512,
   "word": "BOX",
   "pronunciations": "ˈbɑːks"
 },
 {
   "id": 1513,
   "word": "BUY",
   "pronunciations": "ˈbaɪ"
 },
 {
   "id": 1514,
   "word": "CALLS",
   "pronunciations": "ˈkɔlz"
 },
 {
   "id": 1515,
   "word": "COMMUNISM",
   "pronunciations": "ˈkɑːmjəˌnɪzəm"
 },
 {
   "id": 1516,
   "word": "DANGER",
   "pronunciations": "ˈdeɪndʒɝ"
 },
 {
   "id": 1517,
   "word": "DOGS",
   "pronunciations": "ˈdɑːgz, ˈdɔgz"
 },
 {
   "id": 1518,
   "word": "DRAWN",
   "pronunciations": "ˈdrɔn"
 },
 {
   "id": 1519,
   "word": "DUST",
   "pronunciations": "ˈdʌst"
 },
 {
   "id": 1520,
   "word": "EDUCATIONAL",
   "pronunciations": "ˌɛdʒəˈkeɪʃənəl, ˌɛdʒjuːˈkeɪʃənəl"
 },
 {
   "id": 1521,
   "word": "EXCHANGE",
   "pronunciations": "ɪksˈtʃeɪndʒ"
 },
 {
   "id": 1522,
   "word": "FOOT",
   "pronunciations": "ˈfʊt"
 },
 {
   "id": 1523,
   "word": "INDEPENDENCE",
   "pronunciations": "ˌɪndɪˈpɛndəns"
 },
 {
   "id": 1524,
   "word": "INDEPENDENT",
   "pronunciations": "ˌɪndɪˈpɛndənt"
 },
 {
   "id": 1525,
   "word": "NATURALLY",
   "pronunciations": "ˈnætʃɝəli, ˈnætʃrəli"
 },
 {
   "id": 1526,
   "word": "RAIN",
   "pronunciations": "ˈreɪn"
 },
 {
   "id": 1527,
   "word": "REVOLUTION",
   "pronunciations": "ˌrɛvəˈluːʃən"
 },
 {
   "id": 1528,
   "word": "ROME",
   "pronunciations": "ˈroʊm"
 },
 {
   "id": 1529,
   "word": "SAN",
   "pronunciations": "ˈsæn"
 },
 {
   "id": 1530,
   "word": "SECTIONS",
   "pronunciations": "ˈsɛkʃənz"
 },
 {
   "id": 1531,
   "word": "SHELTER",
   "pronunciations": "ˈʃɛltɝ"
 },
 {
   "id": 1532,
   "word": "SONG",
   "pronunciations": "ˈsɔŋ"
 },
 {
   "id": 1533,
   "word": "WAITED",
   "pronunciations": "ˈweɪtɪd"
 },
 {
   "id": 1534,
   "word": "WALLS",
   "pronunciations": "ˈwɔlz"
 },
 {
   "id": 1535,
   "word": "ANCIENT",
   "pronunciations": "ˈeɪntʃənt, ˈeɪnʃənt"
 },
 {
   "id": 1536,
   "word": "CHINA",
   "pronunciations": "ˈtʃaɪnə"
 },
 {
   "id": 1537,
   "word": "CLEAN",
   "pronunciations": "ˈkliːn"
 },
 {
   "id": 1538,
   "word": "COMPLETED",
   "pronunciations": "kəmˈpliːtəd, kəmˈpliːtɪd"
 },
 {
   "id": 1539,
   "word": "CONNECTION",
   "pronunciations": "kəˈnɛkʃən"
 },
 {
   "id": 1540,
   "word": "FASHION",
   "pronunciations": "ˈfæʃən"
 },
 {
   "id": 1541,
   "word": "LEAGUE",
   "pronunciations": "ˈliːg"
 },
 {
   "id": 1542,
   "word": "LET'S",
   "pronunciations": "ˈlɛts"
 },
 {
   "id": 1543,
   "word": "LEVELS",
   "pronunciations": "ˈlɛvəlz"
 },
 {
   "id": 1544,
   "word": "LIBERAL",
   "pronunciations": "ˈlɪˌbɝːəl"
 },
 {
   "id": 1545,
   "word": "LIPS",
   "pronunciations": "ˈlɪps"
 },
 {
   "id": 1546,
   "word": "ORDERED",
   "pronunciations": "ˈɔrdɝd"
 },
 {
   "id": 1547,
   "word": "POLITICS",
   "pronunciations": "ˈpɑːləˌtɪks"
 },
 {
   "id": 1548,
   "word": "REALIZE",
   "pronunciations": "ˈriːəˌlaɪz"
 },
 {
   "id": 1549,
   "word": "REALIZED",
   "pronunciations": "ˈriːəˌlaɪzd"
 },
 {
   "id": 1550,
   "word": "SEEK",
   "pronunciations": "ˈsiːk"
 },
 {
   "id": 1551,
   "word": "SETTLED",
   "pronunciations": "ˈsɛtəld"
 },
 {
   "id": 1552,
   "word": "SWEET",
   "pronunciations": "ˈswiːt"
 },
 {
   "id": 1553,
   "word": "TEACHERS",
   "pronunciations": "ˈtiːtʃɝz"
 },
 {
   "id": 1554,
   "word": "TEXAS",
   "pronunciations": "ˈtɛksəs"
 },
 {
   "id": 1555,
   "word": "WEATHER",
   "pronunciations": "ˈwɛðɝ"
 },
 {
   "id": 1556,
   "word": "WILLING",
   "pronunciations": "ˈwɪlɪŋ"
 },
 {
   "id": 1557,
   "word": "ACTIONS",
   "pronunciations": "ˈækʃənz"
 },
 {
   "id": 1558,
   "word": "ANIMAL",
   "pronunciations": "ˈænəməl"
 },
 {
   "id": 1559,
   "word": "APPLICATION",
   "pronunciations": "ˌæpləˈkeɪʃən"
 },
 {
   "id": 1560,
   "word": "APPROPRIATE",
   "pronunciations": "əˈproʊpriːət, əˈproʊpriːˌeɪt"
 },
 {
   "id": 1561,
   "word": "ARTICLE",
   "pronunciations": "ˈɑːrtəkəl, ˈɑːrtɪkəl"
 },
 {
   "id": 1562,
   "word": "BEAT",
   "pronunciations": "ˈbiːt"
 },
 {
   "id": 1563,
   "word": "CHARACTERISTIC",
   "pronunciations": "ˌkɛrɪktɝˈɪstɪk"
 },
 {
   "id": 1564,
   "word": "DIRECTED",
   "pronunciations": "dɝˈɛktəd, dɝˈɛktɪd, daɪˈrɛktɪd, dɪˈrɛktɪd"
 },
 {
   "id": 1565,
   "word": "DREW",
   "pronunciations": "ˈdruː"
 },
 {
   "id": 1566,
   "word": "DRY",
   "pronunciations": "ˈdraɪ"
 },
 {
   "id": 1567,
   "word": "ELECTRIC",
   "pronunciations": "ɪˈlɛktrɪk"
 },
 {
   "id": 1568,
   "word": "ELECTRONIC",
   "pronunciations": "ˌɪˌlɛkˈtrɑːnɪk"
 },
 {
   "id": 1569,
   "word": "EMOTIONAL",
   "pronunciations": "ɪˈmoʊʃənəl, ˈiːˌmoʊʃənəl"
 },
 {
   "id": 1570,
   "word": "EXCELLENT",
   "pronunciations": "ˈɛksələnt"
 },
 {
   "id": 1571,
   "word": "FAMILIES",
   "pronunciations": "ˈfæməliːz, ˈfæmliːz"
 },
 {
   "id": 1572,
   "word": "FIFTY",
   "pronunciations": "ˈfɪfti"
 },
 {
   "id": 1573,
   "word": "FLOW",
   "pronunciations": "ˈfloʊ"
 },
 {
   "id": 1574,
   "word": "FRANK",
   "pronunciations": "ˈfræŋk"
 },
 {
   "id": 1575,
   "word": "HORSES",
   "pronunciations": "ˈhɔrsəz, ˈhɔrsɪz"
 },
 {
   "id": 1576,
   "word": "INITIAL",
   "pronunciations": "ˌɪˈnɪʃəl"
 },
 {
   "id": 1577,
   "word": "KHRUSHCHEV",
   "pronunciations": "ˈkruːsˌtʃɛv, ˈkruːsˌtʃɔf"
 },
 {
   "id": 1578,
   "word": "LARGELY",
   "pronunciations": "ˈlɑːrdʒli"
 },
 {
   "id": 1579,
   "word": "LEADING",
   "pronunciations": "ˈliːdɪŋ"
 },
 {
   "id": 1580,
   "word": "MINIMUM",
   "pronunciations": "ˈmɪnəməm"
 },
 {
   "id": 1581,
   "word": "MONDAY",
   "pronunciations": "ˈmʌndi, ˈmʌnˌdeɪ"
 },
 {
   "id": 1582,
   "word": "OUGHT",
   "pronunciations": "ˈɔt"
 },
 {
   "id": 1583,
   "word": "PICTURES",
   "pronunciations": "ˈpɪktʃɝz"
 },
 {
   "id": 1584,
   "word": "POLICIES",
   "pronunciations": "ˈpɑːləsiːz"
 },
 {
   "id": 1585,
   "word": "PRACTICAL",
   "pronunciations": "ˈpræktɪkəl"
 },
 {
   "id": 1586,
   "word": "PROJECTS",
   "pronunciations": "ˈprɑːdʒɛkts, prɑːˈdʒɛkts"
 },
 {
   "id": 1587,
   "word": "PROTECTION",
   "pronunciations": "prəˈtɛkʃən"
 },
 {
   "id": 1588,
   "word": "QUICK",
   "pronunciations": "ˈkwɪk"
 },
 {
   "id": 1589,
   "word": "SHE'D",
   "pronunciations": "ˈʃiːd"
 },
 {
   "id": 1590,
   "word": "SIGNS",
   "pronunciations": "ˈsaɪnz"
 },
 {
   "id": 1591,
   "word": "STANDS",
   "pronunciations": "ˈstændz"
 },
 {
   "id": 1592,
   "word": "STARTING",
   "pronunciations": "ˈstɑːrtɪŋ"
 },
 {
   "id": 1593,
   "word": "STATEMENTS",
   "pronunciations": "ˈsteɪtmənts"
 },
 {
   "id": 1594,
   "word": "TRAFFIC",
   "pronunciations": "ˈtræfɪk"
 },
 {
   "id": 1595,
   "word": "WON",
   "pronunciations": "ˈwʌn, ˈwɑːn"
 },
 {
   "id": 1596,
   "word": "ANSWERED",
   "pronunciations": "ˈænsɝd"
 },
 {
   "id": 1597,
   "word": "ASIDE",
   "pronunciations": "əˈsaɪd"
 },
 {
   "id": 1598,
   "word": "ASKING",
   "pronunciations": "ˈæskɪŋ"
 },
 {
   "id": 1599,
   "word": "BACKGROUND",
   "pronunciations": "ˈbækˌgraʊnd"
 },
 {
   "id": 1600,
   "word": "CAREER",
   "pronunciations": "kɝˈɪr"
 },
 {
   "id": 1601,
   "word": "CHAIRMAN",
   "pronunciations": "ˈtʃɛrmən"
 },
 {
   "id": 1602,
   "word": "COMMUNICATION",
   "pronunciations": "kəˌmjuːnəˈkeɪʃən"
 },
 {
   "id": 1603,
   "word": "DRESS",
   "pronunciations": "ˈdrɛs"
 },
 {
   "id": 1604,
   "word": "ENDS",
   "pronunciations": "ˈɛndz"
 },
 {
   "id": 1605,
   "word": "ESTIMATED",
   "pronunciations": "ˈɛstəˌmeɪtəd, ˈɛstəˌmeɪtɪd"
 },
 {
   "id": 1606,
   "word": "FLAT",
   "pronunciations": "ˈflæt"
 },
 {
   "id": 1607,
   "word": "IMPACT",
   "pronunciations": "ˌɪmˈpækt, ˈɪmpækt"
 },
 {
   "id": 1608,
   "word": "JURY",
   "pronunciations": "ˈdʒʊri"
 },
 {
   "id": 1609,
   "word": "LEGS",
   "pronunciations": "ˈlɛgz"
 },
 {
   "id": 1610,
   "word": "OCCURRED",
   "pronunciations": "əˈkɝːd"
 },
 {
   "id": 1611,
   "word": "PARIS",
   "pronunciations": "ˈpɛrɪs, ˈpærɪs"
 },
 {
   "id": 1612,
   "word": "POTENTIAL",
   "pronunciations": "pəˈtɛnʃəl"
 },
 {
   "id": 1613,
   "word": "REFERENCE",
   "pronunciations": "ˈrɛfɝəns, ˈrɛfrəns"
 },
 {
   "id": 1614,
   "word": "SATURDAY",
   "pronunciations": "ˈsætɝdi, ˈsæˌtɪˌdeɪ"
 },
 {
   "id": 1615,
   "word": "SIT",
   "pronunciations": "ˈsɪt"
 },
 {
   "id": 1616,
   "word": "TEACHING",
   "pronunciations": "ˈtiːtʃɪŋ"
 },
 {
   "id": 1617,
   "word": "THICK",
   "pronunciations": "ˈθɪk"
 },
 {
   "id": 1618,
   "word": "WARM",
   "pronunciations": "ˈwɔrm"
 },
 {
   "id": 1619,
   "word": "WONDER",
   "pronunciations": "ˈwʌndɝ"
 },
 {
   "id": 1620,
   "word": "YOU'VE",
   "pronunciations": "ˈjuːv"
 },
 {
   "id": 1621,
   "word": "YOURSELF",
   "pronunciations": "jɝˈsɛlf, jʊrˈsɛlf, ˈjɔrsɛlf"
 },
 {
   "id": 1622,
   "word": "ADEQUATE",
   "pronunciations": "ˈædəkwət, ˈædəˌkweɪt"
 },
 {
   "id": 1623,
   "word": "ARTS",
   "pronunciations": "ˈɑːrts"
 },
 {
   "id": 1624,
   "word": "BESIDES",
   "pronunciations": "bɪˈsaɪdz, ˌbiːˈsaɪdz"
 },
 {
   "id": 1625,
   "word": "BIRTH",
   "pronunciations": "ˈbɝːθ"
 },
 {
   "id": 1626,
   "word": "BLOCK",
   "pronunciations": "ˈblɑːk"
 },
 {
   "id": 1627,
   "word": "CAPABLE",
   "pronunciations": "ˈkeɪpəbəl"
 },
 {
   "id": 1628,
   "word": "CHAIR",
   "pronunciations": "ˈtʃɛr"
 },
 {
   "id": 1629,
   "word": "CLOSELY",
   "pronunciations": "ˈkloʊsli"
 },
 {
   "id": 1630,
   "word": "CUTTING",
   "pronunciations": "ˈkʌtɪŋ"
 },
 {
   "id": 1631,
   "word": "DECLARED",
   "pronunciations": "dɪˈklɛrd"
 },
 {
   "id": 1632,
   "word": "EMPLOYEES",
   "pronunciations": "ɛmˈplɔɪiːz, ɪmˈplɔɪiːz"
 },
 {
   "id": 1633,
   "word": "EXPERIMENTS",
   "pronunciations": "ɪkˈspɛrəmənts"
 },
 {
   "id": 1634,
   "word": "FINGERS",
   "pronunciations": "ˈfɪŋgɝz"
 },
 {
   "id": 1635,
   "word": "FOREST",
   "pronunciations": "ˈfɔrəst, ˈfɔrɪst"
 },
 {
   "id": 1636,
   "word": "GETS",
   "pronunciations": "ˈgɛts, ˈgɪts"
 },
 {
   "id": 1637,
   "word": "GROSS",
   "pronunciations": "ˈgroʊs"
 },
 {
   "id": 1638,
   "word": "HANOVER",
   "pronunciations": "ˈhænoʊvɝ"
 },
 {
   "id": 1639,
   "word": "HELPED",
   "pronunciations": "ˈhɛlpt"
 },
 {
   "id": 1640,
   "word": "HONOR",
   "pronunciations": "ˈɑːnɝ"
 },
 {
   "id": 1641,
   "word": "INTELLECTUAL",
   "pronunciations": "ˌɪntəˈlɛktʃuːəl, ˌɪnəˈlɛktʃuːəl"
 },
 {
   "id": 1642,
   "word": "ISSUES",
   "pronunciations": "ˈɪʃuːz"
 },
 {
   "id": 1643,
   "word": "JULY",
   "pronunciations": "ˌdʒuːˈlaɪ, dʒəˈlaɪ"
 },
 {
   "id": 1644,
   "word": "MEASURED",
   "pronunciations": "ˈmɛʒɝd"
 },
 {
   "id": 1645,
   "word": "OURSELVES",
   "pronunciations": "aʊɝˈsɛlvz, ɑːrˈsɛlvz"
 },
 {
   "id": 1646,
   "word": "PAGE",
   "pronunciations": "ˈpeɪdʒ"
 },
 {
   "id": 1647,
   "word": "PLAYS",
   "pronunciations": "ˈpleɪz"
 },
 {
   "id": 1648,
   "word": "PROPERTIES",
   "pronunciations": "ˈprɑːpɝtiːz"
 },
 {
   "id": 1649,
   "word": "RELIEF",
   "pronunciations": "rɪˈliːf, riːˈliːf"
 },
 {
   "id": 1650,
   "word": "SCORE",
   "pronunciations": "ˈskɔr"
 },
 {
   "id": 1651,
   "word": "SEARCH",
   "pronunciations": "ˈsɝːtʃ"
 },
 {
   "id": 1652,
   "word": "SIGNIFICANCE",
   "pronunciations": "səgˈnɪfɪkəns, sɪgˈnɪfɪkəns"
 },
 {
   "id": 1653,
   "word": "SUBSTANTIAL",
   "pronunciations": "səbˈstænʃəl"
 },
 {
   "id": 1654,
   "word": "ACHIEVEMENT",
   "pronunciations": "əˈtʃiːvmənt"
 },
 {
   "id": 1655,
   "word": "ATTORNEY",
   "pronunciations": "əˈtɝːni"
 },
 {
   "id": 1656,
   "word": "CALIFORNIA",
   "pronunciations": "ˌkæləˈfɔrnjə"
 },
 {
   "id": 1657,
   "word": "CELL",
   "pronunciations": "ˈsɛl"
 },
 {
   "id": 1658,
   "word": "D.",
   "pronunciations": "ˈdiː"
 },
 {
   "id": 1659,
   "word": "DESK",
   "pronunciations": "ˈdɛsk"
 },
 {
   "id": 1660,
   "word": "DISCUSSED",
   "pronunciations": "dɪˈskʌst"
 },
 {
   "id": 1661,
   "word": "DOMINANT",
   "pronunciations": "ˈdɑːmənənt"
 },
 {
   "id": 1662,
   "word": "ESCAPE",
   "pronunciations": "ɪˈskeɪp"
 },
 {
   "id": 1663,
   "word": "HEADQUARTERS",
   "pronunciations": "ˈhɛdˌkwɔrtɝz, ˈhɛdˌkɔrtɝz"
 },
 {
   "id": 1664,
   "word": "HOLDING",
   "pronunciations": "ˈhoʊldɪŋ"
 },
 {
   "id": 1665,
   "word": "HUNG",
   "pronunciations": "ˈhʌŋ"
 },
 {
   "id": 1666,
   "word": "IMAGINATION",
   "pronunciations": "ˌɪˌmædʒəˈneɪʃən"
 },
 {
   "id": 1667,
   "word": "JOBS",
   "pronunciations": "ˈdʒɑːbz"
 },
 {
   "id": 1668,
   "word": "JOIN",
   "pronunciations": "ˈdʒɔɪn"
 },
 {
   "id": 1669,
   "word": "NEWSPAPER",
   "pronunciations": "ˈnuːzˌpeɪpɝ"
 },
 {
   "id": 1670,
   "word": "OBJECT",
   "pronunciations": "ˈɑːbdʒɛkt, əbˈdʒɛkt"
 },
 {
   "id": 1671,
   "word": "OBJECTS",
   "pronunciations": "ˈɑːbdʒɛkts, əbˈdʒɛkts"
 },
 {
   "id": 1672,
   "word": "ONE'S",
   "pronunciations": "ˈwʌnz"
 },
 {
   "id": 1673,
   "word": "PASSING",
   "pronunciations": "ˈpæsɪŋ"
 },
 {
   "id": 1674,
   "word": "PHIL",
   "pronunciations": "ˈfɪl"
 },
 {
   "id": 1675,
   "word": "RAPIDLY",
   "pronunciations": "ˈræpədli"
 },
 {
   "id": 1676,
   "word": "SLEEP",
   "pronunciations": "ˈsliːp"
 },
 {
   "id": 1677,
   "word": "SUPPOSED",
   "pronunciations": "səˈpoʊzd"
 },
 {
   "id": 1678,
   "word": "THEY'RE",
   "pronunciations": "ˈðɛr"
 },
 {
   "id": 1679,
   "word": "TYPICAL",
   "pronunciations": "ˈtɪpəkəl, ˈtɪpɪkəl"
 },
 {
   "id": 1680,
   "word": "WORE",
   "pronunciations": "ˈwɔr"
 },
 {
   "id": 1681,
   "word": "ASPECTS",
   "pronunciations": "ˈæˌspɛkts"
 },
 {
   "id": 1682,
   "word": "BELIEF",
   "pronunciations": "bɪˈliːf"
 },
 {
   "id": 1683,
   "word": "BODIES",
   "pronunciations": "ˈbɑːdiːz"
 },
 {
   "id": 1684,
   "word": "CONTEMPORARY",
   "pronunciations": "kənˈtɛmpɝˌɛri"
 },
 {
   "id": 1685,
   "word": "CREDIT",
   "pronunciations": "ˈkrɛdət, ˈkrɛdɪt"
 },
 {
   "id": 1686,
   "word": "DREAM",
   "pronunciations": "ˈdriːm"
 },
 {
   "id": 1687,
   "word": "EMPTY",
   "pronunciations": "ˈɛmpti, ˈɛmti"
 },
 {
   "id": 1688,
   "word": "EXPLAIN",
   "pronunciations": "ɪkˈspleɪn"
 },
 {
   "id": 1689,
   "word": "GREW",
   "pronunciations": "ˈgruː"
 },
 {
   "id": 1690,
   "word": "LAOS",
   "pronunciations": "ˈlɑːoʊs, ˈlaʊs, ˈleɪoʊs"
 },
 {
   "id": 1691,
   "word": "LOCATED",
   "pronunciations": "ˈloʊˌkeɪtəd, ˈloʊˌkeɪd"
 },
 {
   "id": 1692,
   "word": "MAINTENANCE",
   "pronunciations": "ˈmeɪntənəns, ˈmeɪntnəns"
 },
 {
   "id": 1693,
   "word": "MATTERS",
   "pronunciations": "ˈmætɝz"
 },
 {
   "id": 1694,
   "word": "MESSAGE",
   "pronunciations": "ˈmɛsədʒ, ˈmɛsɪdʒ"
 },
 {
   "id": 1695,
   "word": "PRIMARILY",
   "pronunciations": "praɪˈmɛrəli"
 },
 {
   "id": 1696,
   "word": "REASONABLE",
   "pronunciations": "ˈriːzənəbəl, ˈriːznəbəl"
 },
 {
   "id": 1697,
   "word": "RESOLUTION",
   "pronunciations": "ˌrɛzəˈluːʃən"
 },
 {
   "id": 1698,
   "word": "SITE",
   "pronunciations": "ˈsaɪt"
 },
 {
   "id": 1699,
   "word": "SPIRITUAL",
   "pronunciations": "ˈspɪrɪˌtʃuːəl"
 },
 {
   "id": 1700,
   "word": "TOWARDS",
   "pronunciations": "təˈwɔrdz, ˈtɔrdz"
 },
 {
   "id": 1701,
   "word": "WE'LL",
   "pronunciations": "ˈwiːl, ˈwɪl"
 },
 {
   "id": 1702,
   "word": "YARDS",
   "pronunciations": "ˈjɑːrdz"
 },
 {
   "id": 1703,
   "word": "APPEAL",
   "pronunciations": "əˈpiːl"
 },
 {
   "id": 1704,
   "word": "ARGUMENT",
   "pronunciations": "ˈɑːrgjəmənt"
 },
 {
   "id": 1705,
   "word": "ASSUME",
   "pronunciations": "əˈsuːm"
 },
 {
   "id": 1706,
   "word": "BENEFIT",
   "pronunciations": "ˈbɛnəfɪt"
 },
 {
   "id": 1707,
   "word": "BROKEN",
   "pronunciations": "ˈbroʊkən"
 },
 {
   "id": 1708,
   "word": "COMPETITION",
   "pronunciations": "ˌkɑːmpəˈtɪʃən"
 },
 {
   "id": 1709,
   "word": "CONTACT",
   "pronunciations": "ˈkɑːnˌtækt"
 },
 {
   "id": 1710,
   "word": "DOMESTIC",
   "pronunciations": "dəˈmɛstɪk"
 },
 {
   "id": 1711,
   "word": "DRAMATIC",
   "pronunciations": "drəˈmætɪk"
 },
 {
   "id": 1712,
   "word": "EXPERIMENT",
   "pronunciations": "ɪkˈspɛrəmənt"
 },
 {
   "id": 1713,
   "word": "FELLOW",
   "pronunciations": "ˈfɛloʊ"
 },
 {
   "id": 1714,
   "word": "GROW",
   "pronunciations": "ˈgroʊ"
 },
 {
   "id": 1715,
   "word": "HAPPEN",
   "pronunciations": "ˈhæpən"
 },
 {
   "id": 1716,
   "word": "HIGHEST",
   "pronunciations": "ˈhaɪəst"
 },
 {
   "id": 1717,
   "word": "JESUS",
   "pronunciations": "ˈdʒiːzəs"
 },
 {
   "id": 1718,
   "word": "KILL",
   "pronunciations": "ˈkɪl"
 },
 {
   "id": 1719,
   "word": "LOCATION",
   "pronunciations": "loʊˈkeɪʃən"
 },
 {
   "id": 1720,
   "word": "NARROW",
   "pronunciations": "ˈnɛroʊ, ˈnæroʊ"
 },
 {
   "id": 1721,
   "word": "P.M.",
   "pronunciations": "ˈpiːˈɛm"
 },
 {
   "id": 1722,
   "word": "PARKER",
   "pronunciations": "ˈpɑːrkɝ"
 },
 {
   "id": 1723,
   "word": "POWERFUL",
   "pronunciations": "ˈpaʊɝfəl"
 },
 {
   "id": 1724,
   "word": "RELATION",
   "pronunciations": "riːˈleɪʃən"
 },
 {
   "id": 1725,
   "word": "RIFLE",
   "pronunciations": "ˈraɪfəl"
 },
 {
   "id": 1726,
   "word": "SHOP",
   "pronunciations": "ˈʃɑːp"
 },
 {
   "id": 1727,
   "word": "SIGNAL",
   "pronunciations": "ˈsɪgnəl"
 },
 {
   "id": 1728,
   "word": "SUFFICIENT",
   "pronunciations": "səˈfɪʃənt"
 },
 {
   "id": 1729,
   "word": "TOM",
   "pronunciations": "ˈtɑːm"
 },
 {
   "id": 1730,
   "word": "TOMORROW",
   "pronunciations": "təˈmɑːˌroʊ, tuːˈmɑːˌroʊ"
 },
 {
   "id": 1731,
   "word": "UNUSUAL",
   "pronunciations": "ənˈjuːˌʒuːəl, ənˈjuːʒwəl"
 },
 {
   "id": 1732,
   "word": "WIND",
   "pronunciations": "ˈwaɪnd, ˈwɪnd"
 },
 {
   "id": 1733,
   "word": "ACHIEVED",
   "pronunciations": "əˈtʃiːvd"
 },
 {
   "id": 1734,
   "word": "AGENCIES",
   "pronunciations": "ˈeɪdʒənsiːz"
 },
 {
   "id": 1735,
   "word": "ARRIVED",
   "pronunciations": "ɝˈaɪvd"
 },
 {
   "id": 1736,
   "word": "ASSIGNMENT",
   "pronunciations": "əˈsaɪnmənt"
 },
 {
   "id": 1737,
   "word": "BABY",
   "pronunciations": "ˈbeɪbi"
 },
 {
   "id": 1738,
   "word": "BILLION",
   "pronunciations": "ˈbɪljən"
 },
 {
   "id": 1739,
   "word": "CAREFUL",
   "pronunciations": "ˈkɛrfəl"
 },
 {
   "id": 1740,
   "word": "CONCERNING",
   "pronunciations": "kənˈsɝːnɪŋ"
 },
 {
   "id": 1741,
   "word": "COOL",
   "pronunciations": "ˈkuːl"
 },
 {
   "id": 1742,
   "word": "DECEMBER",
   "pronunciations": "dɪˈsɛmbɝ"
 },
 {
   "id": 1743,
   "word": "DROVE",
   "pronunciations": "ˈdroʊv"
 },
 {
   "id": 1744,
   "word": "EQUALLY",
   "pronunciations": "ˈiːkwəli"
 },
 {
   "id": 1745,
   "word": "EXTREME",
   "pronunciations": "ɪkˈstriːm"
 },
 {
   "id": 1746,
   "word": "FUND",
   "pronunciations": "ˈfʌnd"
 },
 {
   "id": 1747,
   "word": "GREATLY",
   "pronunciations": "ˈgreɪtli"
 },
 {
   "id": 1748,
   "word": "GUESTS",
   "pronunciations": "ˈgɛsts"
 },
 {
   "id": 1749,
   "word": "HOMES",
   "pronunciations": "ˈhoʊmz"
 },
 {
   "id": 1750,
   "word": "INTERNAL",
   "pronunciations": "ˌɪnˈtɝːnəl"
 },
 {
   "id": 1751,
   "word": "LIBRARY",
   "pronunciations": "ˈlaɪbrɛˌriː"
 },
 {
   "id": 1752,
   "word": "M.",
   "pronunciations": "ˈɛm"
 },
 {
   "id": 1753,
   "word": "OFFICIALS",
   "pronunciations": "əˈfɪʃəlz"
 },
 {
   "id": 1754,
   "word": "PLEASE",
   "pronunciations": "ˈpliːz"
 },
 {
   "id": 1755,
   "word": "PLEASURE",
   "pronunciations": "ˈplɛʒɝ"
 },
 {
   "id": 1756,
   "word": "PORTION",
   "pronunciations": "ˈpɔrʃən"
 },
 {
   "id": 1757,
   "word": "RECOGNIZE",
   "pronunciations": "ˈrɛkəgˌnaɪz"
 },
 {
   "id": 1758,
   "word": "REDUCE",
   "pronunciations": "rɪˈduːs"
 },
 {
   "id": 1759,
   "word": "RISING",
   "pronunciations": "ˈraɪzɪŋ"
 },
 {
   "id": 1760,
   "word": "SAVE",
   "pronunciations": "ˈseɪv"
 },
 {
   "id": 1761,
   "word": "SENATE",
   "pronunciations": "ˈsɛnət, ˈsɛnɪt"
 },
 {
   "id": 1762,
   "word": "SETS",
   "pronunciations": "ˈsɛts"
 },
 {
   "id": 1763,
   "word": "SPEAKING",
   "pronunciations": "ˈspiːkɪŋ"
 },
 {
   "id": 1764,
   "word": "STRUGGLE",
   "pronunciations": "ˈstrʌgəl"
 },
 {
   "id": 1765,
   "word": "U.",
   "pronunciations": "ˈjuː"
 },
 {
   "id": 1766,
   "word": "WILSON",
   "pronunciations": "ˈwɪlsən"
 },
 {
   "id": 1767,
   "word": "ACTING",
   "pronunciations": "ˈæktɪŋ"
 },
 {
   "id": 1768,
   "word": "ASSOCIATED",
   "pronunciations": "əˈsoʊsiːˌeɪtəd, əˈsoʊʃiːˌeɪtəd"
 },
 {
   "id": 1769,
   "word": "BEACH",
   "pronunciations": "ˈbiːtʃ"
 },
 {
   "id": 1770,
   "word": "BOSTON",
   "pronunciations": "ˈbɑːstən, ˈbɔstən"
 },
 {
   "id": 1771,
   "word": "CLOSER",
   "pronunciations": "ˈkloʊsɝ, ˈkloʊzɝ"
 },
 {
   "id": 1772,
   "word": "COAST",
   "pronunciations": "ˈkoʊst"
 },
 {
   "id": 1773,
   "word": "COMMERCIAL",
   "pronunciations": "kəˈmɝːʃəl"
 },
 {
   "id": 1774,
   "word": "CONTINUING",
   "pronunciations": "kənˈtɪnjuːɪŋ"
 },
 {
   "id": 1775,
   "word": "COURSES",
   "pronunciations": "ˈkɔrsəz, ˈkɔrsɪz"
 },
 {
   "id": 1776,
   "word": "DUTY",
   "pronunciations": "ˈduːti, dˈjuːti"
 },
 {
   "id": 1777,
   "word": "EAT",
   "pronunciations": "ˈiːt"
 },
 {
   "id": 1778,
   "word": "EUROPEAN",
   "pronunciations": "ˌjʊrəˈpiːən"
 },
 {
   "id": 1779,
   "word": "FEELINGS",
   "pronunciations": "ˈfiːlɪŋz"
 },
 {
   "id": 1780,
   "word": "FRIENDLY",
   "pronunciations": "ˈfrɛndli"
 },
 {
   "id": 1781,
   "word": "GOVERNMENTS",
   "pronunciations": "ˈgʌvɝnmənts"
 },
 {
   "id": 1782,
   "word": "GREEK",
   "pronunciations": "ˈgriːk"
 },
 {
   "id": 1783,
   "word": "IDEAL",
   "pronunciations": "aɪˈdiːl"
 },
 {
   "id": 1784,
   "word": "IMAGINE",
   "pronunciations": "ˌɪˈmædʒən"
 },
 {
   "id": 1785,
   "word": "KID",
   "pronunciations": "ˈkɪd"
 },
 {
   "id": 1786,
   "word": "METAL",
   "pronunciations": "ˈmɛtəl"
 },
 {
   "id": 1787,
   "word": "MINISTER",
   "pronunciations": "ˈmɪnəstɝ, ˈmɪnɪstɝ"
 },
 {
   "id": 1788,
   "word": "ORGANIZATIONS",
   "pronunciations": "ˌɔrgənəˈzeɪʃənz"
 },
 {
   "id": 1789,
   "word": "POSSIBLY",
   "pronunciations": "ˈpɑːsəbli"
 },
 {
   "id": 1790,
   "word": "PRICES",
   "pronunciations": "ˈpraɪsəz, ˈpraɪsɪz"
 },
 {
   "id": 1791,
   "word": "PROCEDURES",
   "pronunciations": "prəˈsiːdʒɝz, proʊˈsiːdʒɝz"
 },
 {
   "id": 1792,
   "word": "R.",
   "pronunciations": "ˈɑːr"
 },
 {
   "id": 1793,
   "word": "SHORE",
   "pronunciations": "ˈʃɔr"
 },
 {
   "id": 1794,
   "word": "SHOULDER",
   "pronunciations": "ˈʃoʊldɝ"
 },
 {
   "id": 1795,
   "word": "SHOWING",
   "pronunciations": "ˈʃoʊɪŋ"
 },
 {
   "id": 1796,
   "word": "SOFT",
   "pronunciations": "ˈsɑːft, ˈsɔft"
 },
 {
   "id": 1797,
   "word": "SPEECH",
   "pronunciations": "ˈspiːtʃ"
 },
 {
   "id": 1798,
   "word": "TESTS",
   "pronunciations": "ˈtɛsts"
 },
 {
   "id": 1799,
   "word": "TRAVEL",
   "pronunciations": "ˈtrævəl"
 },
 {
   "id": 1800,
   "word": "VAST",
   "pronunciations": "ˈvæst"
 },
 {
   "id": 1801,
   "word": "VICTORY",
   "pronunciations": "ˈvɪktəri"
 },
 {
   "id": 1802,
   "word": "WE'RE",
   "pronunciations": "ˈwiːr, ˈwɪr, ˈwɝː"
 },
 {
   "id": 1803,
   "word": "WEAPONS",
   "pronunciations": "ˈwɛpənz"
 },
 {
   "id": 1804,
   "word": "ARMED",
   "pronunciations": "ˈɑːrmd"
 },
 {
   "id": 1805,
   "word": "CHEMICAL",
   "pronunciations": "ˈkɛmɪkəl"
 },
 {
   "id": 1806,
   "word": "CIRCLE",
   "pronunciations": "ˈsɝːkəl"
 },
 {
   "id": 1807,
   "word": "CONTAINED",
   "pronunciations": "kənˈteɪnd"
 },
 {
   "id": 1808,
   "word": "CONTRACT",
   "pronunciations": "ˈkɑːnˌtrækt, kənˈtrækt"
 },
 {
   "id": 1809,
   "word": "ENDED",
   "pronunciations": "ˈɛndəd, ˈɛndɪd"
 },
 {
   "id": 1810,
   "word": "EXISTING",
   "pronunciations": "ɪgˈzɪstɪŋ"
 },
 {
   "id": 1811,
   "word": "FAT",
   "pronunciations": "ˈfæt"
 },
 {
   "id": 1812,
   "word": "FRIDAY",
   "pronunciations": "ˈfraɪdi, ˈfraɪˌdeɪ"
 },
 {
   "id": 1813,
   "word": "GARDEN",
   "pronunciations": "ˈgɑːrdən"
 },
 {
   "id": 1814,
   "word": "GOAL",
   "pronunciations": "ˈgoʊl"
 },
 {
   "id": 1815,
   "word": "HEAVILY",
   "pronunciations": "ˈhɛvəli"
 },
 {
   "id": 1816,
   "word": "KEEPING",
   "pronunciations": "ˈkiːpɪŋ"
 },
 {
   "id": 1817,
   "word": "LEARNING",
   "pronunciations": "ˈlɝːnɪŋ"
 },
 {
   "id": 1818,
   "word": "MACHINERY",
   "pronunciations": "məˈʃiːnɝi, məˈʃiːnri"
 },
 {
   "id": 1819,
   "word": "MAINTAIN",
   "pronunciations": "meɪnˈteɪn"
 },
 {
   "id": 1820,
   "word": "MOON",
   "pronunciations": "ˈmuːn"
 },
 {
   "id": 1821,
   "word": "NOSE",
   "pronunciations": "ˈnoʊz"
 },
 {
   "id": 1822,
   "word": "ONTO",
   "pronunciations": "ˈɑːntuː, ˈɔntuː"
 },
 {
   "id": 1823,
   "word": "ORCHESTRA",
   "pronunciations": "ˈɔrkəstrə"
 },
 {
   "id": 1824,
   "word": "REFUSED",
   "pronunciations": "rəˈfjuːzd, rɪˈfjuːzd"
 },
 {
   "id": 1825,
   "word": "SCALE",
   "pronunciations": "ˈskeɪl"
 },
 {
   "id": 1826,
   "word": "SETTING",
   "pronunciations": "ˈsɛtɪŋ"
 },
 {
   "id": 1827,
   "word": "SLOW",
   "pronunciations": "ˈsloʊ"
 },
 {
   "id": 1828,
   "word": "SOMEWHERE",
   "pronunciations": "ˈsʌmˌwɛr"
 },
 {
   "id": 1829,
   "word": "STARED",
   "pronunciations": "ˈstɛrd"
 },
 {
   "id": 1830,
   "word": "STREETS",
   "pronunciations": "ˈstriːts"
 },
 {
   "id": 1831,
   "word": "TASK",
   "pronunciations": "ˈtæsk"
 },
 {
   "id": 1832,
   "word": "TECHNIQUE",
   "pronunciations": "tɛkˈniːk"
 },
 {
   "id": 1833,
   "word": "TEXT",
   "pronunciations": "ˈtɛkst"
 },
 {
   "id": 1834,
   "word": "ADVANCE",
   "pronunciations": "ədˈvæns"
 },
 {
   "id": 1835,
   "word": "BIBLE",
   "pronunciations": "ˈbaɪbəl"
 },
 {
   "id": 1836,
   "word": "BUDGET",
   "pronunciations": "ˈbʌdʒɪt"
 },
 {
   "id": 1837,
   "word": "CONCLUSION",
   "pronunciations": "kənˈkluːʒən"
 },
 {
   "id": 1838,
   "word": "DROP",
   "pronunciations": "ˈdrɑːp, ˈdrɔp"
 },
 {
   "id": 1839,
   "word": "EXIST",
   "pronunciations": "ɪgˈzɪst"
 },
 {
   "id": 1840,
   "word": "F.",
   "pronunciations": "ˈɛf"
 },
 {
   "id": 1841,
   "word": "FINDS",
   "pronunciations": "ˈfaɪndz"
 },
 {
   "id": 1842,
   "word": "FORMULA",
   "pronunciations": "ˈfɔrmjələ"
 },
 {
   "id": 1843,
   "word": "HEADED",
   "pronunciations": "ˈhɛdəd, ˈhɛdɪd"
 },
 {
   "id": 1844,
   "word": "HOUSING",
   "pronunciations": "ˈhaʊzɪŋ"
 },
 {
   "id": 1845,
   "word": "JUDGMENT",
   "pronunciations": "ˈdʒʌdʒmənt"
 },
 {
   "id": 1846,
   "word": "LIE",
   "pronunciations": "ˈlaɪ"
 },
 {
   "id": 1847,
   "word": "MINE",
   "pronunciations": "ˈmaɪn"
 },
 {
   "id": 1848,
   "word": "NEGROES",
   "pronunciations": "ˈniːgroʊz"
 },
 {
   "id": 1849,
   "word": "NOTICE",
   "pronunciations": "ˈnoʊtəs, ˈnoʊtɪs"
 },
 {
   "id": 1850,
   "word": "NOVEL",
   "pronunciations": "ˈnɑːvəl"
 },
 {
   "id": 1851,
   "word": "PAINTING",
   "pronunciations": "ˈpeɪntɪŋ, ˈpeɪnɪŋ"
 },
 {
   "id": 1852,
   "word": "PARTIES",
   "pronunciations": "ˈpɑːrtiːz"
 },
 {
   "id": 1853,
   "word": "PLANTS",
   "pronunciations": "ˈplænts"
 },
 {
   "id": 1854,
   "word": "PROVIDING",
   "pronunciations": "prəˈvaɪdɪŋ"
 },
 {
   "id": 1855,
   "word": "REPEATED",
   "pronunciations": "rɪˈpiːtɪd, riːˈpiːtəd, riːˈpiːtɪd"
 },
 {
   "id": 1856,
   "word": "ROOF",
   "pronunciations": "ˈruːf, ˈrʊf"
 },
 {
   "id": 1857,
   "word": "SENSITIVE",
   "pronunciations": "ˈsɛnsətɪv, ˈsɛnsɪtɪv"
 },
 {
   "id": 1858,
   "word": "SEXUAL",
   "pronunciations": "ˈsɛkʃuːəl"
 },
 {
   "id": 1859,
   "word": "SNOW",
   "pronunciations": "ˈsnoʊ"
 },
 {
   "id": 1860,
   "word": "SOLUTION",
   "pronunciations": "səˈluːʃən"
 },
 {
   "id": 1861,
   "word": "SONGS",
   "pronunciations": "ˈsɔŋz"
 },
 {
   "id": 1862,
   "word": "STORIES",
   "pronunciations": "ˈstɔriːz"
 },
 {
   "id": 1863,
   "word": "STRUCK",
   "pronunciations": "ˈstrʌk"
 },
 {
   "id": 1864,
   "word": "TASTE",
   "pronunciations": "ˈteɪst"
 },
 {
   "id": 1865,
   "word": "TENSION",
   "pronunciations": "ˈtɛnʃən"
 },
 {
   "id": 1866,
   "word": "THIRTY",
   "pronunciations": "ˈθɝːˌdiː"
 },
 {
   "id": 1867,
   "word": "TREE",
   "pronunciations": "ˈtriː"
 },
 {
   "id": 1868,
   "word": "ULTIMATE",
   "pronunciations": "ˈʌltəmət"
 },
 {
   "id": 1869,
   "word": "USES",
   "pronunciations": "ˈjuːsəz, ˈjuːsɪz, ˈjuːzəz, ˈjuːzɪz"
 },
 {
   "id": 1870,
   "word": "ANIMALS",
   "pronunciations": "ˈænəməlz"
 },
 {
   "id": 1871,
   "word": "AVOID",
   "pronunciations": "əˈvɔɪd"
 },
 {
   "id": 1872,
   "word": "BUSY",
   "pronunciations": "ˈbɪzi"
 },
 {
   "id": 1873,
   "word": "CAUSES",
   "pronunciations": "ˈkɑːzəz, ˈkɔzɪz"
 },
 {
   "id": 1874,
   "word": "COMMERCE",
   "pronunciations": "ˈkɑːmɝs"
 },
 {
   "id": 1875,
   "word": "CRITICAL",
   "pronunciations": "ˈkrɪtɪkəl"
 },
 {
   "id": 1876,
   "word": "CULTURE",
   "pronunciations": "ˈkʌltʃɝ"
 },
 {
   "id": 1877,
   "word": "DALLAS",
   "pronunciations": "ˈdæləs"
 },
 {
   "id": 1878,
   "word": "EMPHASIS",
   "pronunciations": "ˈɛmfəsɪs"
 },
 {
   "id": 1879,
   "word": "ESTABLISH",
   "pronunciations": "ɪˈstæblɪʃ"
 },
 {
   "id": 1880,
   "word": "EXERCISE",
   "pronunciations": "ˈɛksɝˌsaɪz"
 },
 {
   "id": 1881,
   "word": "FAIRLY",
   "pronunciations": "ˈfɛrli"
 },
 {
   "id": 1882,
   "word": "GROUNDS",
   "pronunciations": "ˈgraʊndz, ˈgraʊnz"
 },
 {
   "id": 1883,
   "word": "HENCE",
   "pronunciations": "ˈhɛns"
 },
 {
   "id": 1884,
   "word": "HOLE",
   "pronunciations": "ˈhoʊl"
 },
 {
   "id": 1885,
   "word": "INDIA",
   "pronunciations": "ˈɪndiːə"
 },
 {
   "id": 1886,
   "word": "LEG",
   "pronunciations": "ˈlɛg"
 },
 {
   "id": 1887,
   "word": "LIKED",
   "pronunciations": "ˈlaɪkt"
 },
 {
   "id": 1888,
   "word": "LOSE",
   "pronunciations": "ˈluːz"
 },
 {
   "id": 1889,
   "word": "MINOR",
   "pronunciations": "ˈmaɪnɝ"
 },
 {
   "id": 1890,
   "word": "NEIGHBORHOOD",
   "pronunciations": "ˈneɪbɝˌhʊd"
 },
 {
   "id": 1891,
   "word": "OCCASION",
   "pronunciations": "əˈkeɪʒən"
 },
 {
   "id": 1892,
   "word": "ORDERS",
   "pronunciations": "ˈɔrdɝz"
 },
 {
   "id": 1893,
   "word": "P.",
   "pronunciations": "ˈpiː"
 },
 {
   "id": 1894,
   "word": "PALE",
   "pronunciations": "ˈpeɪl"
 },
 {
   "id": 1895,
   "word": "PERFECT",
   "pronunciations": "pɝˈfɛkt, ˈpɝːˌfɪkt"
 },
 {
   "id": 1896,
   "word": "PREVIOUSLY",
   "pronunciations": "ˈpriːviːəsli"
 },
 {
   "id": 1897,
   "word": "RAILROAD",
   "pronunciations": "ˈreɪlˌroʊd"
 },
 {
   "id": 1898,
   "word": "REMOVE",
   "pronunciations": "riːˈmuːv"
 },
 {
   "id": 1899,
   "word": "ROADS",
   "pronunciations": "ˈroʊdz"
 },
 {
   "id": 1900,
   "word": "ROMAN",
   "pronunciations": "ˈroʊmən"
 },
 {
   "id": 1901,
   "word": "SAFE",
   "pronunciations": "ˈseɪf"
 },
 {
   "id": 1902,
   "word": "SKY",
   "pronunciations": "ˈskaɪ"
 },
 {
   "id": 1903,
   "word": "SMILE",
   "pronunciations": "ˈsmaɪl"
 },
 {
   "id": 1904,
   "word": "SOMEBODY",
   "pronunciations": "ˈsʌmˌbɑːdi, ˈsʌmbəˌdiː"
 },
 {
   "id": 1905,
   "word": "STONE",
   "pronunciations": "ˈstoʊn"
 },
 {
   "id": 1906,
   "word": "SURPRISED",
   "pronunciations": "sɝˈpraɪzd, səˈpraɪzd"
 },
 {
   "id": 1907,
   "word": "TALKED",
   "pronunciations": "ˈtɔkt"
 },
 {
   "id": 1908,
   "word": "TUESDAY",
   "pronunciations": "ˈtuːzdi, ˈtuːzˌdeɪ, tˈjuːzˌdeɪ"
 },
 {
   "id": 1909,
   "word": "UNDERSTOOD",
   "pronunciations": "ˌəndɝˈstʊd"
 },
 {
   "id": 1910,
   "word": "UNIQUE",
   "pronunciations": "juːˈniːk"
 },
 {
   "id": 1911,
   "word": "USEFUL",
   "pronunciations": "ˈjuːsfəl"
 },
 {
   "id": 1912,
   "word": "WONDERED",
   "pronunciations": "ˈwʌndɝd"
 },
 {
   "id": 1913,
   "word": "AFRAID",
   "pronunciations": "əˈfreɪd"
 },
 {
   "id": 1914,
   "word": "ALIVE",
   "pronunciations": "əˈlaɪv"
 },
 {
   "id": 1915,
   "word": "APART",
   "pronunciations": "əˈpɑːrt"
 },
 {
   "id": 1916,
   "word": "APPARENT",
   "pronunciations": "əˈpɛrənt"
 },
 {
   "id": 1917,
   "word": "APPEARANCE",
   "pronunciations": "əˈpɪrəns"
 },
 {
   "id": 1918,
   "word": "ARTIST",
   "pronunciations": "ˈɑːrtəst, ˈɑːrtɪst"
 },
 {
   "id": 1919,
   "word": "BASEBALL",
   "pronunciations": "ˈbeɪsˈbɔl"
 },
 {
   "id": 1920,
   "word": "BAY",
   "pronunciations": "ˈbeɪ"
 },
 {
   "id": 1921,
   "word": "BEAR",
   "pronunciations": "ˈbɛr"
 },
 {
   "id": 1922,
   "word": "BECOMING",
   "pronunciations": "bɪˈkʌmɪŋ"
 },
 {
   "id": 1923,
   "word": "BENEATH",
   "pronunciations": "bɪˈniːθ"
 },
 {
   "id": 1924,
   "word": "BIRDS",
   "pronunciations": "ˈbɝːdz"
 },
 {
   "id": 1925,
   "word": "CHARGED",
   "pronunciations": "ˈtʃɑːrdʒd"
 },
 {
   "id": 1926,
   "word": "COMBINATION",
   "pronunciations": "ˌkɑːmbəˈneɪʃən"
 },
 {
   "id": 1927,
   "word": "COMPLETION",
   "pronunciations": "kəmˈpliːʃən"
 },
 {
   "id": 1928,
   "word": "CONGO",
   "pronunciations": "ˈkɑːŋgoʊ"
 },
 {
   "id": 1929,
   "word": "DETAILS",
   "pronunciations": "dɪˈteɪlz, ˈdiːteɪlz"
 },
 {
   "id": 1930,
   "word": "DICTIONARY",
   "pronunciations": "ˈdɪkʃəˌnɛri"
 },
 {
   "id": 1931,
   "word": "ENJOYED",
   "pronunciations": "ˌɛnˈdʒɔɪd"
 },
 {
   "id": 1932,
   "word": "ENTRANCE",
   "pronunciations": "ˈɛntrəns"
 },
 {
   "id": 1933,
   "word": "FLOWERS",
   "pronunciations": "ˈflaʊɝz"
 },
 {
   "id": 1934,
   "word": "GOODS",
   "pronunciations": "ˈgʊdz"
 },
 {
   "id": 1935,
   "word": "INFORMED",
   "pronunciations": "ˌɪnˈfɔrmd"
 },
 {
   "id": 1936,
   "word": "LEWIS",
   "pronunciations": "ˈluːɪs"
 },
 {
   "id": 1937,
   "word": "MAJORITY",
   "pronunciations": "məˈdʒɔrəti"
 },
 {
   "id": 1938,
   "word": "NOTES",
   "pronunciations": "ˈnoʊts"
 },
 {
   "id": 1939,
   "word": "PERMITTED",
   "pronunciations": "pɝˈmɪtəd, pɝˈmɪtɪd"
 },
 {
   "id": 1940,
   "word": "PROCESSES",
   "pronunciations": "ˈprɑːsɛsəz"
 },
 {
   "id": 1941,
   "word": "PROFESSOR",
   "pronunciations": "prəˈfɛsɝ"
 },
 {
   "id": 1942,
   "word": "REPLIED",
   "pronunciations": "rɪˈplaɪd, riːˈplaɪd"
 },
 {
   "id": 1943,
   "word": "REQUIRES",
   "pronunciations": "riːˈkwaɪɝz, riːˈkwaɪrz"
 },
 {
   "id": 1944,
   "word": "SAMPLE",
   "pronunciations": "ˈsæmpəl"
 },
 {
   "id": 1945,
   "word": "SHOOK",
   "pronunciations": "ˈʃʊk"
 },
 {
   "id": 1946,
   "word": "SPOT",
   "pronunciations": "ˈspɑːt"
 },
 {
   "id": 1947,
   "word": "TRUCK",
   "pronunciations": "ˈtrʌk"
 },
 {
   "id": 1948,
   "word": "TRULY",
   "pronunciations": "ˈtruːli"
 },
 {
   "id": 1949,
   "word": "UNCLE",
   "pronunciations": "ˈʌŋkəl"
 },
 {
   "id": 1950,
   "word": "ACADEMIC",
   "pronunciations": "ˌækəˈdɛmɪk"
 },
 {
   "id": 1951,
   "word": "AGENCY",
   "pronunciations": "ˈeɪdʒənsi"
 },
 {
   "id": 1952,
   "word": "APPLY",
   "pronunciations": "əˈplaɪ"
 },
 {
   "id": 1953,
   "word": "BOUGHT",
   "pronunciations": "ˈbɑːt, ˈbɔt"
 },
 {
   "id": 1954,
   "word": "CHINESE",
   "pronunciations": "tʃaɪˈniːz"
 },
 {
   "id": 1955,
   "word": "CONFIDENCE",
   "pronunciations": "ˈkɑːnfədɛns"
 },
 {
   "id": 1956,
   "word": "DOUBLE",
   "pronunciations": "ˈdʌbəl"
 },
 {
   "id": 1957,
   "word": "DRAW",
   "pronunciations": "ˈdrɔ"
 },
 {
   "id": 1958,
   "word": "ENTITLED",
   "pronunciations": "ɛnˈtaɪtəld"
 },
 {
   "id": 1959,
   "word": "EVIDENT",
   "pronunciations": "ˈɛvədənt"
 },
 {
   "id": 1960,
   "word": "FIFTEEN",
   "pronunciations": "fɪfˈtiːn, ˈfɪfˈtiːn"
 },
 {
   "id": 1961,
   "word": "GRANTED",
   "pronunciations": "ˈgræntəd, ˈgræntɪd, ˈgrænəd, ˈgrænɪd"
 },
 {
   "id": 1962,
   "word": "GUESS",
   "pronunciations": "ˈgɛs"
 },
 {
   "id": 1963,
   "word": "HAT",
   "pronunciations": "ˈhæt"
 },
 {
   "id": 1964,
   "word": "INTENSITY",
   "pronunciations": "ˌɪnˈtɛnsɪti"
 },
 {
   "id": 1965,
   "word": "JOINED",
   "pronunciations": "ˈdʒɔɪnd"
 },
 {
   "id": 1966,
   "word": "L.",
   "pronunciations": "ˈɛl"
 },
 {
   "id": 1967,
   "word": "LOVED",
   "pronunciations": "ˈlʌvd"
 },
 {
   "id": 1968,
   "word": "MINDS",
   "pronunciations": "ˈmaɪndz"
 },
 {
   "id": 1969,
   "word": "MOTOR",
   "pronunciations": "ˈmoʊtɝ"
 },
 {
   "id": 1970,
   "word": "ORGANIZED",
   "pronunciations": "ˈɔrgəˌnaɪzd"
 },
 {
   "id": 1971,
   "word": "PALMER",
   "pronunciations": "ˈpɑːmɝ, ˈpɑːlmɝ"
 },
 {
   "id": 1972,
   "word": "PURE",
   "pronunciations": "ˈpjʊr"
 },
 {
   "id": 1973,
   "word": "REGARDED",
   "pronunciations": "rəˈgɑːrdəd, rɪˈgɑːrdɪd"
 },
 {
   "id": 1974,
   "word": "REPRESENTED",
   "pronunciations": "ˌrɛprəˈzɛntəd, ˌrɛprɪˈzɛntɪd, ˌrɛprəˈzɛnəd, ˌrɛprɪˈzɛnɪd"
 },
 {
   "id": 1975,
   "word": "REVIEW",
   "pronunciations": "ˌriːvˈjuː"
 },
 {
   "id": 1976,
   "word": "SEPTEMBER",
   "pronunciations": "sɛpˈtɛmbɝ"
 },
 {
   "id": 1977,
   "word": "SOLDIERS",
   "pronunciations": "ˈsoʊldʒɝz"
 },
 {
   "id": 1978,
   "word": "SPITE",
   "pronunciations": "ˈspaɪt"
 },
 {
   "id": 1979,
   "word": "VISION",
   "pronunciations": "ˈvɪʒən"
 },
 {
   "id": 1980,
   "word": "VITAL",
   "pronunciations": "ˈvaɪtəl"
 },
 {
   "id": 1981,
   "word": "WAGE",
   "pronunciations": "ˈweɪdʒ"
 },
 {
   "id": 1982,
   "word": "WHEEL",
   "pronunciations": "ˈwiːl, ˈhwiːl"
 },
 {
   "id": 1983,
   "word": "WILD",
   "pronunciations": "ˈwaɪld"
 },
 {
   "id": 1984,
   "word": "ARTISTS",
   "pronunciations": "ˈɑːrtɪsts"
 },
 {
   "id": 1985,
   "word": "BEGINS",
   "pronunciations": "bɪˈgɪnz"
 },
 {
   "id": 1986,
   "word": "BRITAIN",
   "pronunciations": "ˈbrɪtən"
 },
 {
   "id": 1987,
   "word": "COMPONENTS",
   "pronunciations": "kəmˈpoʊnənts"
 },
 {
   "id": 1988,
   "word": "CONDUCT",
   "pronunciations": "ˈkɑːndəkt, kɑːnˈdʌkt"
 },
 {
   "id": 1989,
   "word": "CONDUCTED",
   "pronunciations": "kənˈdʌktəd"
 },
 {
   "id": 1990,
   "word": "CROSS",
   "pronunciations": "ˈkrɔs"
 },
 {
   "id": 1991,
   "word": "CULTURAL",
   "pronunciations": "ˈkʌltʃɝəl"
 },
 {
   "id": 1992,
   "word": "DEMANDS",
   "pronunciations": "dɪˈmændz"
 },
 {
   "id": 1993,
   "word": "DEVICE",
   "pronunciations": "dɪˈvaɪs"
 },
 {
   "id": 1994,
   "word": "DIVIDED",
   "pronunciations": "dɪˈvaɪdɪd"
 },
 {
   "id": 1995,
   "word": "EXECUTIVE",
   "pronunciations": "ɪgˈzɛkjətɪv"
 },
 {
   "id": 1996,
   "word": "EXTENDED",
   "pronunciations": "ɪkˈstɛndəd, ɪkˈstɛndɪd"
 },
 {
   "id": 1997,
   "word": "FIRMS",
   "pronunciations": "ˈfɝːmz"
 },
 {
   "id": 1998,
   "word": "FORT",
   "pronunciations": "ˈfɔrt"
 },
 {
   "id": 1999,
   "word": "GAMES",
   "pronunciations": "ˈgeɪmz"
 },
 {
   "id": 2000,
   "word": "GENERATION",
   "pronunciations": "ˌdʒɛnɝˈeɪʃən"
 },
 {
   "id": 2001,
   "word": "HUGE",
   "pronunciations": "ˈhjuːdʒ, ˈjuːdʒ"
 },
 {
   "id": 2002,
   "word": "IDENTITY",
   "pronunciations": "aɪˈdɛntəˌtiː"
 },
 {
   "id": 2003,
   "word": "IMPROVED",
   "pronunciations": "ˌɪmˈpruːvd"
 },
 {
   "id": 2004,
   "word": "INNER",
   "pronunciations": "ˈɪnɝ"
 },
 {
   "id": 2005,
   "word": "ITEM",
   "pronunciations": "ˈaɪtəm"
 },
 {
   "id": 2006,
   "word": "JOE",
   "pronunciations": "ˈdʒoʊ"
 },
 {
   "id": 2007,
   "word": "JOSEPH",
   "pronunciations": "ˈdʒoʊsəf, ˈdʒoʊzəf"
 },
 {
   "id": 2008,
   "word": "MARINE",
   "pronunciations": "mɝˈiːn"
 },
 {
   "id": 2009,
   "word": "MARTIN",
   "pronunciations": "ˈmɑːrtən, ˈmɑːrtɪn"
 },
 {
   "id": 2010,
   "word": "MINUTE",
   "pronunciations": "ˈmɪnət, maɪˈnuːt, maɪnˈjuːt"
 },
 {
   "id": 2011,
   "word": "MOTION",
   "pronunciations": "ˈmoʊʃən"
 },
 {
   "id": 2012,
   "word": "PICK",
   "pronunciations": "ˈpɪk"
 },
 {
   "id": 2013,
   "word": "PLENTY",
   "pronunciations": "ˈplɛnti, ˈplɛni"
 },
 {
   "id": 2014,
   "word": "PROPERLY",
   "pronunciations": "ˈprɑːpɝli"
 },
 {
   "id": 2015,
   "word": "PUBLICATION",
   "pronunciations": "ˌpəblɪˈkeɪʃən"
 },
 {
   "id": 2016,
   "word": "ROOMS",
   "pronunciations": "ˈruːmz"
 },
 {
   "id": 2017,
   "word": "RUNS",
   "pronunciations": "ˈrʌnz"
 },
 {
   "id": 2018,
   "word": "SOUGHT",
   "pronunciations": "ˈsɔt"
 },
 {
   "id": 2019,
   "word": "SOUNDS",
   "pronunciations": "ˈsaʊndz, ˈsaʊnz"
 },
 {
   "id": 2020,
   "word": "TALL",
   "pronunciations": "ˈtɔl"
 },
 {
   "id": 2021,
   "word": "THEME",
   "pronunciations": "ˈθiːm"
 },
 {
   "id": 2022,
   "word": "WAGON",
   "pronunciations": "ˈwægən"
 },
 {
   "id": 2023,
   "word": "WIN",
   "pronunciations": "ˈwɪn"
 },
 {
   "id": 2024,
   "word": "WISHED",
   "pronunciations": "ˈwɪʃt"
 },
 {
   "id": 2025,
   "word": "WOOD",
   "pronunciations": "ˈwʊd"
 },
 {
   "id": 2026,
   "word": "WORRY",
   "pronunciations": "ˈwɝːi"
 },
 {
   "id": 2027,
   "word": "YELLOW",
   "pronunciations": "ˈjɛloʊ"
 },
 {
   "id": 2028,
   "word": "ATTEND",
   "pronunciations": "əˈtɛnd"
 },
 {
   "id": 2029,
   "word": "CREATE",
   "pronunciations": "kriːˈeɪt"
 },
 {
   "id": 2030,
   "word": "DEAR",
   "pronunciations": "ˈdɪr"
 },
 {
   "id": 2031,
   "word": "DECISIONS",
   "pronunciations": "dɪˈsɪʒənz"
 },
 {
   "id": 2032,
   "word": "DESCRIPTION",
   "pronunciations": "dɪˈskrɪpʃən"
 },
 {
   "id": 2033,
   "word": "FACED",
   "pronunciations": "ˈfeɪst"
 },
 {
   "id": 2034,
   "word": "FORGET",
   "pronunciations": "fɝˈgɛt, fɔrˈgɛt"
 },
 {
   "id": 2035,
   "word": "INTERPRETATION",
   "pronunciations": "ˌɪnˌtɝːprɪˈteɪʃən"
 },
 {
   "id": 2036,
   "word": "JEWS",
   "pronunciations": "ˈdʒuːz"
 },
 {
   "id": 2037,
   "word": "LAKE",
   "pronunciations": "ˈleɪk"
 },
 {
   "id": 2038,
   "word": "MACHINES",
   "pronunciations": "məˈʃiːnz"
 },
 {
   "id": 2039,
   "word": "MEASUREMENTS",
   "pronunciations": "ˈmɛʒɝmənts"
 },
 {
   "id": 2040,
   "word": "PHONE",
   "pronunciations": "ˈfoʊn"
 },
 {
   "id": 2041,
   "word": "POSITIONS",
   "pronunciations": "pəˈzɪʃənz"
 },
 {
   "id": 2042,
   "word": "PREPARATION",
   "pronunciations": "ˌprɛpɝˈeɪʃən"
 },
 {
   "id": 2043,
   "word": "PUTTING",
   "pronunciations": "ˈpʌtɪŋ, ˈpʊtɪŋ"
 },
 {
   "id": 2044,
   "word": "REPUBLICAN",
   "pronunciations": "rɪˈpʌblɪkən, riːˈpʌbləkən, riːˈpʌblɪkən"
 },
 {
   "id": 2045,
   "word": "RISK",
   "pronunciations": "ˈrɪsk"
 },
 {
   "id": 2046,
   "word": "RURAL",
   "pronunciations": "ˈrʊrəl"
 },
 {
   "id": 2047,
   "word": "SEAT",
   "pronunciations": "ˈsiːt"
 },
 {
   "id": 2048,
   "word": "SMITH",
   "pronunciations": "ˈsmɪθ"
 },
 {
   "id": 2049,
   "word": "SOIL",
   "pronunciations": "ˈsɔɪl"
 },
 {
   "id": 2050,
   "word": "SUGGEST",
   "pronunciations": "səˈdʒɛst"
 },
 {
   "id": 2051,
   "word": "SUPPORTED",
   "pronunciations": "səˈpɔrtəd, səˈpɔrtɪd"
 },
 {
   "id": 2052,
   "word": "SYMBOL",
   "pronunciations": "ˈsɪmbəl"
 },
 {
   "id": 2053,
   "word": "THOUGHTS",
   "pronunciations": "ˈθɔts"
 },
 {
   "id": 2054,
   "word": "TRAINED",
   "pronunciations": "ˈtreɪnd"
 },
 {
   "id": 2055,
   "word": "UNABLE",
   "pronunciations": "əˈneɪbəl"
 },
 {
   "id": 2056,
   "word": "WALKING",
   "pronunciations": "ˈwɔkɪŋ"
 },
 {
   "id": 2057,
   "word": "ABSENCE",
   "pronunciations": "ˈæbsəns"
 },
 {
   "id": 2058,
   "word": "ADMINISTRATIVE",
   "pronunciations": "ədˈmɪnɪˌstreɪtɪv"
 },
 {
   "id": 2059,
   "word": "ADVANCED",
   "pronunciations": "ədˈvænst"
 },
 {
   "id": 2060,
   "word": "ASSIGNED",
   "pronunciations": "əˈsaɪnd"
 },
 {
   "id": 2061,
   "word": "AUGUST",
   "pronunciations": "ˈɑːgəst, ˈɔgəst"
 },
 {
   "id": 2062,
   "word": "BAND",
   "pronunciations": "ˈbænd"
 },
 {
   "id": 2063,
   "word": "BITTER",
   "pronunciations": "ˈbɪtɝ"
 },
 {
   "id": 2064,
   "word": "BREAKFAST",
   "pronunciations": "ˈbrɛkfəst"
 },
 {
   "id": 2065,
   "word": "BREATH",
   "pronunciations": "ˈbrɛθ"
 },
 {
   "id": 2066,
   "word": "CHEST",
   "pronunciations": "ˈtʃɛst"
 },
 {
   "id": 2067,
   "word": "CONTENT",
   "pronunciations": "ˈkɑːntɛnt, kənˈtɛnt"
 },
 {
   "id": 2068,
   "word": "CROWD",
   "pronunciations": "ˈkraʊd"
 },
 {
   "id": 2069,
   "word": "DEPTH",
   "pronunciations": "ˈdɛpθ"
 },
 {
   "id": 2070,
   "word": "DISEASE",
   "pronunciations": "dɪˈziːz"
 },
 {
   "id": 2071,
   "word": "DRIVING",
   "pronunciations": "ˈdraɪvɪŋ"
 },
 {
   "id": 2072,
   "word": "EXAMPLES",
   "pronunciations": "ɪgˈzæmpəlz"
 },
 {
   "id": 2073,
   "word": "EXPERIENCED",
   "pronunciations": "ɪkˈspɪriːənst"
 },
 {
   "id": 2074,
   "word": "EXPERIENCES",
   "pronunciations": "ɪkˈspɪriːənsɪz"
 },
 {
   "id": 2075,
   "word": "FINDING",
   "pronunciations": "ˈfaɪndɪŋ"
 },
 {
   "id": 2076,
   "word": "GRASS",
   "pronunciations": "ˈgræs"
 },
 {
   "id": 2077,
   "word": "HANDLE",
   "pronunciations": "ˈhændəl"
 },
 {
   "id": 2078,
   "word": "HUDSON",
   "pronunciations": "ˈhʌdsən"
 },
 {
   "id": 2079,
   "word": "JANUARY",
   "pronunciations": "ˈdʒænjuːˌɛri"
 },
 {
   "id": 2080,
   "word": "JAPANESE",
   "pronunciations": "ˌdʒæpəˈniːz"
 },
 {
   "id": 2081,
   "word": "LARGEST",
   "pronunciations": "ˈlɑːrdʒəst"
 },
 {
   "id": 2082,
   "word": "LOOSE",
   "pronunciations": "ˈluːs"
 },
 {
   "id": 2083,
   "word": "NEGATIVE",
   "pronunciations": "ˈnɛgətɪv"
 },
 {
   "id": 2084,
   "word": "PAYMENT",
   "pronunciations": "ˈpeɪmənt"
 },
 {
   "id": 2085,
   "word": "PERCENT",
   "pronunciations": "pɝˈsɛnt"
 },
 {
   "id": 2086,
   "word": "PRACTICALLY",
   "pronunciations": "ˈpræktɪkəli"
 },
 {
   "id": 2087,
   "word": "PRACTICES",
   "pronunciations": "ˈpræktɪsɪz"
 },
 {
   "id": 2088,
   "word": "PROVE",
   "pronunciations": "ˈpruːv"
 },
 {
   "id": 2089,
   "word": "PUSHED",
   "pronunciations": "ˈpʊʃt"
 },
 {
   "id": 2090,
   "word": "REMARKS",
   "pronunciations": "rɪˈmɑːrks, riːˈmɑːrks"
 },
 {
   "id": 2091,
   "word": "SIN",
   "pronunciations": "ˈsɪn"
 },
 {
   "id": 2092,
   "word": "SLIGHT",
   "pronunciations": "ˈslaɪt"
 },
 {
   "id": 2093,
   "word": "SPEND",
   "pronunciations": "ˈspɛnd"
 },
 {
   "id": 2094,
   "word": "TROOPS",
   "pronunciations": "ˈtruːps"
 },
 {
   "id": 2095,
   "word": "VEHICLES",
   "pronunciations": "ˈviːhɪkəlz, ˈviːɪkəlz"
 },
 {
   "id": 2096,
   "word": "VERSION",
   "pronunciations": "ˈvɝːʒən"
 },
 {
   "id": 2097,
   "word": "WELFARE",
   "pronunciations": "ˈwɛlˌfɛr"
 },
 {
   "id": 2098,
   "word": "WET",
   "pronunciations": "ˈwɛt"
 },
 {
   "id": 2099,
   "word": "WHAT'S",
   "pronunciations": "ˈwʌts, ˈhwʌts"
 },
 {
   "id": 2100,
   "word": "WINDOWS",
   "pronunciations": "ˈwɪndoʊz"
 },
 {
   "id": 2101,
   "word": "WONDERFUL",
   "pronunciations": "ˈwʌndɝfəl"
 },
 {
   "id": 2102,
   "word": "ADVICE",
   "pronunciations": "ædˈvaɪs, ədˈvaɪs"
 },
 {
   "id": 2103,
   "word": "ALFRED",
   "pronunciations": "ˈælfrɪd"
 },
 {
   "id": 2104,
   "word": "BEDROOM",
   "pronunciations": "ˈbɛˌdruːm"
 },
 {
   "id": 2105,
   "word": "CENTERS",
   "pronunciations": "ˈsɛntɝz, ˈsɛnɝz"
 },
 {
   "id": 2106,
   "word": "CHARACTERISTICS",
   "pronunciations": "ˌkɛrɪktɝˈɪstɪks"
 },
 {
   "id": 2107,
   "word": "COLORS",
   "pronunciations": "ˈkʌlɝz"
 },
 {
   "id": 2108,
   "word": "CONFLICT",
   "pronunciations": "ˈkɑːnflɪkt, kənˈflɪkt"
 },
 {
   "id": 2109,
   "word": "CONTRARY",
   "pronunciations": "ˈkɑːntrɛri, kənˈtrɛri"
 },
 {
   "id": 2110,
   "word": "CORRECT",
   "pronunciations": "kɝˈɛkt"
 },
 {
   "id": 2111,
   "word": "DETAILED",
   "pronunciations": "dɪˈteɪld"
 },
 {
   "id": 2112,
   "word": "DETECTIVE",
   "pronunciations": "dɪˈtɛktɪv"
 },
 {
   "id": 2113,
   "word": "DEVELOPING",
   "pronunciations": "dɪˈvɛləpɪŋ"
 },
 {
   "id": 2114,
   "word": "DOZEN",
   "pronunciations": "ˈdʌzən"
 },
 {
   "id": 2115,
   "word": "ELEMENT",
   "pronunciations": "ˈɛləmənt"
 },
 {
   "id": 2116,
   "word": "ESTABLISHMENT",
   "pronunciations": "ɪˈstæblɪʃmənt"
 },
 {
   "id": 2117,
   "word": "EVENTUALLY",
   "pronunciations": "ɪˈvɛntʃəwəli, ɪˈvɛnʃəli, iːˈvɛntʃəwəli, iːˈvɛnʃəli"
 },
 {
   "id": 2118,
   "word": "FLESH",
   "pronunciations": "ˈflɛʃ"
 },
 {
   "id": 2119,
   "word": "GOLD",
   "pronunciations": "ˈgoʊld"
 },
 {
   "id": 2120,
   "word": "HERO",
   "pronunciations": "ˈhɪroʊ, ˈhiːroʊ"
 },
 {
   "id": 2121,
   "word": "INDIAN",
   "pronunciations": "ˈɪndiːən"
 },
 {
   "id": 2122,
   "word": "INTRODUCED",
   "pronunciations": "ˌɪntrəˈduːst, ˌɪntroʊˈduːst"
 },
 {
   "id": 2123,
   "word": "LA",
   "pronunciations": "ˈlɑː"
 },
 {
   "id": 2124,
   "word": "RAISE",
   "pronunciations": "ˈreɪz"
 },
 {
   "id": 2125,
   "word": "SILENCE",
   "pronunciations": "ˈsaɪləns"
 },
 {
   "id": 2126,
   "word": "TELLING",
   "pronunciations": "ˈtɛlɪŋ"
 },
 {
   "id": 2127,
   "word": "THEATER",
   "pronunciations": "ˈθiːeɪtɝ"
 },
 {
   "id": 2128,
   "word": "TRUST",
   "pronunciations": "ˈtrʌst"
 },
 {
   "id": 2129,
   "word": "WIDELY",
   "pronunciations": "ˈwaɪdli"
 },
 {
   "id": 2130,
   "word": "ABROAD",
   "pronunciations": "əˈbrɔd"
 },
 {
   "id": 2131,
   "word": "ACHIEVE",
   "pronunciations": "əˈtʃiːv"
 },
 {
   "id": 2132,
   "word": "AGES",
   "pronunciations": "ˈeɪdʒɪz"
 },
 {
   "id": 2133,
   "word": "AGREE",
   "pronunciations": "əˈgriː"
 },
 {
   "id": 2134,
   "word": "ANGLE",
   "pronunciations": "ˈæŋgəl"
 },
 {
   "id": 2135,
   "word": "APPROVAL",
   "pronunciations": "əˈpruːvəl"
 },
 {
   "id": 2136,
   "word": "ARTHUR",
   "pronunciations": "ˈɑːrθɝ"
 },
 {
   "id": 2137,
   "word": "BEGUN",
   "pronunciations": "bɪˈgʌn, ˈbeɪgən"
 },
 {
   "id": 2138,
   "word": "BOATS",
   "pronunciations": "ˈboʊts"
 },
 {
   "id": 2139,
   "word": "CONVENTIONAL",
   "pronunciations": "kənˈvɛnʃənəl"
 },
 {
   "id": 2140,
   "word": "COUSIN",
   "pronunciations": "ˈkʌzən"
 },
 {
   "id": 2141,
   "word": "DAVID",
   "pronunciations": "ˈdeɪvɪd"
 },
 {
   "id": 2142,
   "word": "DEVOTED",
   "pronunciations": "dɪˈvoʊtəd, dɪˈvoʊtɪd"
 },
 {
   "id": 2143,
   "word": "EASIER",
   "pronunciations": "ˈiːziːɝ"
 },
 {
   "id": 2144,
   "word": "ELECTIONS",
   "pronunciations": "ɪˈlɛkʃənz"
 },
 {
   "id": 2145,
   "word": "ESTATE",
   "pronunciations": "ɛˈsteɪt"
 },
 {
   "id": 2146,
   "word": "FOODS",
   "pronunciations": "ˈfuːdz"
 },
 {
   "id": 2147,
   "word": "GRADUALLY",
   "pronunciations": "ˈgrædʒuːəli, ˈgrædʒuːli"
 },
 {
   "id": 2148,
   "word": "GUY",
   "pronunciations": "ˈgaɪ"
 },
 {
   "id": 2149,
   "word": "INVESTIGATION",
   "pronunciations": "ˌɪnˌvɛstəˈgeɪʃən"
 },
 {
   "id": 2150,
   "word": "LAUGHED",
   "pronunciations": "ˈlæft"
 },
 {
   "id": 2151,
   "word": "LISTEN",
   "pronunciations": "ˈlɪsən"
 },
 {
   "id": 2152,
   "word": "LOS",
   "pronunciations": "ˈloʊs, ˈlɔs"
 },
 {
   "id": 2153,
   "word": "NECESSARILY",
   "pronunciations": "ˌnɛsəˈsɛrəli"
 },
 {
   "id": 2154,
   "word": "NODDED",
   "pronunciations": "ˈnɑːdəd, ˈnɑːdɪd"
 },
 {
   "id": 2155,
   "word": "OCTOBER",
   "pronunciations": "ɑːkˈtoʊbɝ"
 },
 {
   "id": 2156,
   "word": "OPPORTUNITIES",
   "pronunciations": "ˌɑːpɝˈtuːnətiːz"
 },
 {
   "id": 2157,
   "word": "PAPERS",
   "pronunciations": "ˈpeɪpɝz"
 },
 {
   "id": 2158,
   "word": "PLAYER",
   "pronunciations": "ˈpleɪɝ"
 },
 {
   "id": 2159,
   "word": "PROTESTANT",
   "pronunciations": "ˈprɑːtəstənt"
 },
 {
   "id": 2160,
   "word": "PULL",
   "pronunciations": "ˈpʊl"
 },
 {
   "id": 2161,
   "word": "REAR",
   "pronunciations": "ˈrɪr"
 },
 {
   "id": 2162,
   "word": "SHOULDERS",
   "pronunciations": "ˈʃoʊldɝz"
 },
 {
   "id": 2163,
   "word": "SICK",
   "pronunciations": "ˈsɪk"
 },
 {
   "id": 2164,
   "word": "SITUATIONS",
   "pronunciations": "ˌsɪtʃuːˈeɪʃənz"
 },
 {
   "id": 2165,
   "word": "STAGES",
   "pronunciations": "ˈsteɪdʒɪz"
 },
 {
   "id": 2166,
   "word": "STREAM",
   "pronunciations": "ˈstriːm"
 },
 {
   "id": 2167,
   "word": "SUPREME",
   "pronunciations": "səˈpriːm, sɝˈpriːm"
 },
 {
   "id": 2168,
   "word": "SURPRISE",
   "pronunciations": "sɝˈpraɪz, səˈpraɪz"
 },
 {
   "id": 2169,
   "word": "THROAT",
   "pronunciations": "ˈθroʊt"
 },
 {
   "id": 2170,
   "word": "UNIFORM",
   "pronunciations": "ˈjuːnəˌfɔrm"
 },
 {
   "id": 2171,
   "word": "VIEWS",
   "pronunciations": "vˈjuːz"
 },
 {
   "id": 2172,
   "word": "WARREN",
   "pronunciations": "ˈwɔrən"
 },
 {
   "id": 2173,
   "word": "WAVES",
   "pronunciations": "ˈweɪvz"
 },
 {
   "id": 2174,
   "word": "ADVERTISING",
   "pronunciations": "ˈædvɝˌtaɪzɪŋ"
 },
 {
   "id": 2175,
   "word": "ASSEMBLY",
   "pronunciations": "əˈsɛmbli"
 },
 {
   "id": 2176,
   "word": "AUTOMOBILE",
   "pronunciations": "ˈɔtəmoʊˌbiːl, ˌɔtəmoʊˈbiːl"
 },
 {
   "id": 2177,
   "word": "BRILLIANT",
   "pronunciations": "ˈbrɪljənt"
 },
 {
   "id": 2178,
   "word": "CHAIN",
   "pronunciations": "ˈtʃeɪn"
 },
 {
   "id": 2179,
   "word": "CHILDHOOD",
   "pronunciations": "ˈtʃaɪldˌhʊd"
 },
 {
   "id": 2180,
   "word": "CHOOSE",
   "pronunciations": "ˈtʃuːz"
 },
 {
   "id": 2181,
   "word": "CONVERSATION",
   "pronunciations": "ˌkɑːnvɝˈseɪʃən"
 },
 {
   "id": 2182,
   "word": "CONVICTION",
   "pronunciations": "kənˈvɪkʃən"
 },
 {
   "id": 2183,
   "word": "CONVINCED",
   "pronunciations": "kənˈvɪnst"
 },
 {
   "id": 2184,
   "word": "COURTS",
   "pronunciations": "ˈkɔrts"
 },
 {
   "id": 2185,
   "word": "D",
   "pronunciations": "ˈdiː"
 },
 {
   "id": 2186,
   "word": "DESIRED",
   "pronunciations": "dɪˈzaɪɝd"
 },
 {
   "id": 2187,
   "word": "EFFICIENCY",
   "pronunciations": "ɪˈfɪʃənsi"
 },
 {
   "id": 2188,
   "word": "EISENHOWER",
   "pronunciations": "ˈaɪzənˌhaʊɝ"
 },
 {
   "id": 2189,
   "word": "ENGINE",
   "pronunciations": "ˈɛndʒən, ˈɪndʒən"
 },
 {
   "id": 2190,
   "word": "EXPENSE",
   "pronunciations": "ɪkˈspɛns"
 },
 {
   "id": 2191,
   "word": "EXTRA",
   "pronunciations": "ˈɛkstrə"
 },
 {
   "id": 2192,
   "word": "EXTREMELY",
   "pronunciations": "ɪkˈstriːmli"
 },
 {
   "id": 2193,
   "word": "FEMALE",
   "pronunciations": "ˈfiːˌmeɪl"
 },
 {
   "id": 2194,
   "word": "FILL",
   "pronunciations": "ˈfɪl"
 },
 {
   "id": 2195,
   "word": "FUNDAMENTAL",
   "pronunciations": "ˌfəndəˈmɛntəl, ˌfəndəˈmɛnəl"
 },
 {
   "id": 2196,
   "word": "HILLS",
   "pronunciations": "ˈhɪlz"
 },
 {
   "id": 2197,
   "word": "INSTITUTE",
   "pronunciations": "ˈɪnstɪˌtuːt"
 },
 {
   "id": 2198,
   "word": "ISSUED",
   "pronunciations": "ˈɪʃuːd"
 },
 {
   "id": 2199,
   "word": "KNOWING",
   "pronunciations": "ˈnoʊɪŋ"
 },
 {
   "id": 2200,
   "word": "LATIN",
   "pronunciations": "ˈlætən"
 },
 {
   "id": 2201,
   "word": "MASSACHUSETTS",
   "pronunciations": "ˌmæsəˈtʃuːsəts"
 },
 {
   "id": 2202,
   "word": "MENTION",
   "pronunciations": "ˈmɛnʃən"
 },
 {
   "id": 2203,
   "word": "MOMENTS",
   "pronunciations": "ˈmoʊmənts"
 },
 {
   "id": 2204,
   "word": "MOTORS",
   "pronunciations": "ˈmoʊtɝz"
 },
 {
   "id": 2205,
   "word": "NOTICED",
   "pronunciations": "ˈnoʊtɪst"
 },
 {
   "id": 2206,
   "word": "PAIR",
   "pronunciations": "ˈpɛr"
 },
 {
   "id": 2207,
   "word": "PHILADELPHIA",
   "pronunciations": "ˌfɪləˈdɛlfiːə"
 },
 {
   "id": 2208,
   "word": "PROUD",
   "pronunciations": "ˈpraʊd"
 },
 {
   "id": 2209,
   "word": "STRIKE",
   "pronunciations": "ˈstraɪk"
 },
 {
   "id": 2210,
   "word": "TAUGHT",
   "pronunciations": "ˈtɔt"
 },
 {
   "id": 2211,
   "word": "TELEVISION",
   "pronunciations": "ˈtɛləˌvɪʒən"
 },
 {
   "id": 2212,
   "word": "TINY",
   "pronunciations": "ˈtaɪni"
 },
 {
   "id": 2213,
   "word": "TOWNS",
   "pronunciations": "ˈtaʊnz"
 },
 {
   "id": 2214,
   "word": "WELCOME",
   "pronunciations": "ˈwɛlkəm"
 },
 {
   "id": 2215,
   "word": "WOODEN",
   "pronunciations": "ˈwʊdən"
 },
 {
   "id": 2216,
   "word": "WORSE",
   "pronunciations": "ˈwɝːs"
 },
 {
   "id": 2217,
   "word": "ACCEPTANCE",
   "pronunciations": "ækˈsɛptəns, əkˈsɛptəns"
 },
 {
   "id": 2218,
   "word": "BURNING",
   "pronunciations": "ˈbɝːnɪŋ"
 },
 {
   "id": 2219,
   "word": "CONSIDERATION",
   "pronunciations": "kənˌsɪdɝˈeɪʃən"
 },
 {
   "id": 2220,
   "word": "CONSTITUTION",
   "pronunciations": "ˌkɑːnstəˈtuːʃən"
 },
 {
   "id": 2221,
   "word": "COUNT",
   "pronunciations": "ˈkaʊnt"
 },
 {
   "id": 2222,
   "word": "CREATIVE",
   "pronunciations": "kriːˈeɪtɪv"
 },
 {
   "id": 2223,
   "word": "DEPENDS",
   "pronunciations": "dɪˈpɛndz"
 },
 {
   "id": 2224,
   "word": "DRIVER",
   "pronunciations": "ˈdraɪvɝ"
 },
 {
   "id": 2225,
   "word": "EMPLOYED",
   "pronunciations": "ɛmˈplɔɪd, ɪmˈplɔɪd"
 },
 {
   "id": 2226,
   "word": "FIRMLY",
   "pronunciations": "ˈfɝːmli"
 },
 {
   "id": 2227,
   "word": "HOLY",
   "pronunciations": "ˈhoʊli"
 },
 {
   "id": 2228,
   "word": "HOPES",
   "pronunciations": "ˈhoʊps"
 },
 {
   "id": 2229,
   "word": "IMPRESSIVE",
   "pronunciations": "ˌɪmˈprɛsɪv"
 },
 {
   "id": 2230,
   "word": "INCIDENT",
   "pronunciations": "ˈɪnsədənt"
 },
 {
   "id": 2231,
   "word": "LEAVES",
   "pronunciations": "ˈliːvz"
 },
 {
   "id": 2232,
   "word": "MEASURES",
   "pronunciations": "ˈmɛʒɝz"
 },
 {
   "id": 2233,
   "word": "MILK",
   "pronunciations": "ˈmɪlk"
 },
 {
   "id": 2234,
   "word": "MILLIONS",
   "pronunciations": "ˈmɪljənz"
 },
 {
   "id": 2235,
   "word": "OPERATOR",
   "pronunciations": "ˈɑːpɝˌeɪtɝ"
 },
 {
   "id": 2236,
   "word": "PARTLY",
   "pronunciations": "ˈpɑːrtli"
 },
 {
   "id": 2237,
   "word": "PASSAGE",
   "pronunciations": "ˈpæsədʒ, ˈpæsɪdʒ"
 },
 {
   "id": 2238,
   "word": "PAYMENTS",
   "pronunciations": "ˈpeɪmənts"
 },
 {
   "id": 2239,
   "word": "QUIETLY",
   "pronunciations": "ˈkwaɪətli"
 },
 {
   "id": 2240,
   "word": "REQUEST",
   "pronunciations": "rɪˈkwɛst, riːˈkwɛst"
 },
 {
   "id": 2241,
   "word": "RIDE",
   "pronunciations": "ˈraɪd"
 },
 {
   "id": 2242,
   "word": "SILENT",
   "pronunciations": "ˈsaɪlənt"
 },
 {
   "id": 2243,
   "word": "SPEAKER",
   "pronunciations": "ˈspiːkɝ"
 },
 {
   "id": 2244,
   "word": "SPORTS",
   "pronunciations": "ˈspɔrts"
 },
 {
   "id": 2245,
   "word": "TENDENCY",
   "pronunciations": "ˈtɛndənsi"
 },
 {
   "id": 2246,
   "word": "TILL",
   "pronunciations": "ˈtɪl"
 },
 {
   "id": 2247,
   "word": "TRAGEDY",
   "pronunciations": "ˈtrædʒədi"
 },
 {
   "id": 2248,
   "word": "ANGER",
   "pronunciations": "ˈæŋgɝ"
 },
 {
   "id": 2249,
   "word": "ATTITUDES",
   "pronunciations": "ˈætəˌtuːdz"
 },
 {
   "id": 2250,
   "word": "CHARLIE",
   "pronunciations": "ˈtʃɑːrli"
 },
 {
   "id": 2251,
   "word": "CO.",
   "pronunciations": "ˈkoʊ, ˈkʌpəni"
 },
 {
   "id": 2252,
   "word": "COMPARISON",
   "pronunciations": "kəmˈpɛrəsən"
 },
 {
   "id": 2253,
   "word": "CONCRETE",
   "pronunciations": "kənˈkriːt, ˈkɑːnkriːt"
 },
 {
   "id": 2254,
   "word": "CRY",
   "pronunciations": "ˈkraɪ"
 },
 {
   "id": 2255,
   "word": "DESTROY",
   "pronunciations": "dɪˈstrɔɪ"
 },
 {
   "id": 2256,
   "word": "DRINKING",
   "pronunciations": "ˈdrɪŋkɪŋ"
 },
 {
   "id": 2257,
   "word": "FORMAL",
   "pronunciations": "ˈfɔrməl"
 },
 {
   "id": 2258,
   "word": "FUNCTIONS",
   "pronunciations": "ˈfʌŋkʃənz"
 },
 {
   "id": 2259,
   "word": "GRAND",
   "pronunciations": "ˈgrænd"
 },
 {
   "id": 2260,
   "word": "GUARD",
   "pronunciations": "ˈgɑːrd"
 },
 {
   "id": 2261,
   "word": "HEARST",
   "pronunciations": "ˈhɝːst"
 },
 {
   "id": 2262,
   "word": "HOPED",
   "pronunciations": "ˈhoʊpt"
 },
 {
   "id": 2263,
   "word": "INTEGRATION",
   "pronunciations": "ˌɪntəˈgreɪʃən, ˌɪnəˈgreɪʃən"
 },
 {
   "id": 2264,
   "word": "INTELLIGENCE",
   "pronunciations": "ˌɪnˈtɛlədʒəns"
 },
 {
   "id": 2265,
   "word": "LIMIT",
   "pronunciations": "ˈlɪmət"
 },
 {
   "id": 2266,
   "word": "LIQUID",
   "pronunciations": "ˈlɪkwəd, ˈlɪkwɪd"
 },
 {
   "id": 2267,
   "word": "MAINTAINED",
   "pronunciations": "meɪnˈteɪnd"
 },
 {
   "id": 2268,
   "word": "MANTLE",
   "pronunciations": "ˈmæntəl"
 },
 {
   "id": 2269,
   "word": "MILE",
   "pronunciations": "ˈmaɪl"
 },
 {
   "id": 2270,
   "word": "MISSILE",
   "pronunciations": "ˈmɪsəl"
 },
 {
   "id": 2271,
   "word": "OCCASIONALLY",
   "pronunciations": "ɔˈkeɪʒənəˌliː"
 },
 {
   "id": 2272,
   "word": "OPERATE",
   "pronunciations": "ˈɑːpɝˌeɪt, ˈɔpɝˌeɪt"
 },
 {
   "id": 2273,
   "word": "PERSONALITY",
   "pronunciations": "ˌpɝːsəˈnælɪti"
 },
 {
   "id": 2274,
   "word": "PINK",
   "pronunciations": "ˈpɪŋk"
 },
 {
   "id": 2275,
   "word": "PLAIN",
   "pronunciations": "ˈpleɪn"
 },
 {
   "id": 2276,
   "word": "POEM",
   "pronunciations": "ˈpoʊəm"
 },
 {
   "id": 2277,
   "word": "PRECISELY",
   "pronunciations": "prɪˈsaɪsli, priːˈsaɪsli"
 },
 {
   "id": 2278,
   "word": "RESISTANCE",
   "pronunciations": "rɪˈzɪstəns, riːˈzɪstəns"
 },
 {
   "id": 2279,
   "word": "ROLLED",
   "pronunciations": "ˈroʊld"
 },
 {
   "id": 2280,
   "word": "ROYAL",
   "pronunciations": "ˈrɔɪəl"
 },
 {
   "id": 2281,
   "word": "SCREEN",
   "pronunciations": "ˈskriːn"
 },
 {
   "id": 2282,
   "word": "SHE'S",
   "pronunciations": "ˈʃiːz"
 },
 {
   "id": 2283,
   "word": "SHOOTING",
   "pronunciations": "ˈʃuːtɪŋ"
 },
 {
   "id": 2284,
   "word": "SORRY",
   "pronunciations": "ˈsɑːri"
 },
 {
   "id": 2285,
   "word": "SUIT",
   "pronunciations": "ˈsuːt"
 },
 {
   "id": 2286,
   "word": "SWUNG",
   "pronunciations": "ˈswʌŋ"
 },
 {
   "id": 2287,
   "word": "TIRED",
   "pronunciations": "ˈtaɪɝd"
 },
 {
   "id": 2288,
   "word": "TWELVE",
   "pronunciations": "ˈtwɛlv"
 },
 {
   "id": 2289,
   "word": "VIA",
   "pronunciations": "ˈvaɪə, ˈviːə"
 },
 {
   "id": 2290,
   "word": "ANGELES",
   "pronunciations": "ˈændʒəlɪs"
 },
 {
   "id": 2291,
   "word": "ASPECT",
   "pronunciations": "ˈæˌspɛkt"
 },
 {
   "id": 2292,
   "word": "BILLS",
   "pronunciations": "ˈbɪlz"
 },
 {
   "id": 2293,
   "word": "BLIND",
   "pronunciations": "ˈblaɪnd"
 },
 {
   "id": 2294,
   "word": "BOARDS",
   "pronunciations": "ˈbɔrdz"
 },
 {
   "id": 2295,
   "word": "BONDS",
   "pronunciations": "ˈbɑːndz"
 },
 {
   "id": 2296,
   "word": "CONCENTRATION",
   "pronunciations": "ˌkɑːnsənˈtreɪʃən"
 },
 {
   "id": 2297,
   "word": "CONGREGATION",
   "pronunciations": "ˌkɑːŋgrəˈgeɪʃən"
 },
 {
   "id": 2298,
   "word": "CONSIDERING",
   "pronunciations": "kənˈsɪdɝɪŋ"
 },
 {
   "id": 2299,
   "word": "COOK",
   "pronunciations": "ˈkʊk"
 },
 {
   "id": 2300,
   "word": "CUBA",
   "pronunciations": "ˈkjuːbə"
 },
 {
   "id": 2301,
   "word": "DENIED",
   "pronunciations": "dɪˈnaɪd"
 },
 {
   "id": 2302,
   "word": "DENY",
   "pronunciations": "dɪˈnaɪ"
 },
 {
   "id": 2303,
   "word": "EMPLOYMENT",
   "pronunciations": "ɛmˈplɔɪmənt, ɪmˈplɔɪmənt"
 },
 {
   "id": 2304,
   "word": "ENGAGED",
   "pronunciations": "ɪnˈgeɪdʒd"
 },
 {
   "id": 2305,
   "word": "ESSENTIALLY",
   "pronunciations": "ɛˈsɛnʃəli, iːˈsɛnʃəli"
 },
 {
   "id": 2306,
   "word": "EVERYWHERE",
   "pronunciations": "ˈɛvriːˌwɛr, ˈɛvriːˌhwɛr"
 },
 {
   "id": 2307,
   "word": "EXPANSION",
   "pronunciations": "ɪkˈspænʃən, ɪkˈspæntʃən"
 },
 {
   "id": 2308,
   "word": "EXPENSES",
   "pronunciations": "ɪkˈspɛnsɪz"
 },
 {
   "id": 2309,
   "word": "FEARS",
   "pronunciations": "ˈfɪrz"
 },
 {
   "id": 2310,
   "word": "GRANT",
   "pronunciations": "ˈgrænt"
 },
 {
   "id": 2311,
   "word": "HONEST",
   "pronunciations": "ˈɑːnəst"
 },
 {
   "id": 2312,
   "word": "HUMOR",
   "pronunciations": "ˈhjuːmɝ"
 },
 {
   "id": 2313,
   "word": "INSTRUMENT",
   "pronunciations": "ˈɪnstrəmənt"
 },
 {
   "id": 2314,
   "word": "ITALIAN",
   "pronunciations": "ˌɪˈtæljən"
 },
 {
   "id": 2315,
   "word": "LIGHTS",
   "pronunciations": "ˈlaɪts"
 },
 {
   "id": 2316,
   "word": "LINCOLN",
   "pronunciations": "ˈlɪŋkən"
 },
 {
   "id": 2317,
   "word": "LUCK",
   "pronunciations": "ˈlʌk"
 },
 {
   "id": 2318,
   "word": "MAIL",
   "pronunciations": "ˈmeɪl"
 },
 {
   "id": 2319,
   "word": "MANUFACTURERS",
   "pronunciations": "ˌmænjəˈfæktʃɝɝz"
 },
 {
   "id": 2320,
   "word": "MERE",
   "pronunciations": "ˈmɪr"
 },
 {
   "id": 2321,
   "word": "MODELS",
   "pronunciations": "ˈmɑːdəlz"
 },
 {
   "id": 2322,
   "word": "MOSCOW",
   "pronunciations": "ˈmɑːˌskoʊ, ˈmɔˌskaʊ"
 },
 {
   "id": 2323,
   "word": "MOVEMENTS",
   "pronunciations": "ˈmuːvmənts"
 },
 {
   "id": 2324,
   "word": "NORTHERN",
   "pronunciations": "ˈnɔrðɝn"
 },
 {
   "id": 2325,
   "word": "NUMEROUS",
   "pronunciations": "ˈnuːmɝəs"
 },
 {
   "id": 2326,
   "word": "OPERA",
   "pronunciations": "ˈɑːprə"
 },
 {
   "id": 2327,
   "word": "PATTERNS",
   "pronunciations": "ˈpætɝnz"
 },
 {
   "id": 2328,
   "word": "PERIODS",
   "pronunciations": "ˈpɪriːədz"
 },
 {
   "id": 2329,
   "word": "PRIOR",
   "pronunciations": "ˈpraɪɝ"
 },
 {
   "id": 2330,
   "word": "PROVISION",
   "pronunciations": "prəˈvɪʒən"
 },
 {
   "id": 2331,
   "word": "PURCHASE",
   "pronunciations": "ˈpɝːtʃəs"
 },
 {
   "id": 2332,
   "word": "REMARKABLE",
   "pronunciations": "rɪˈmɑːrkəbəl, riːˈmɑːrkəbəl"
 },
 {
   "id": 2333,
   "word": "REPRESENTATIVE",
   "pronunciations": "ˌrɛprəˈzɛntətɪv, ˌrɛprɪˈzɛntətɪv, ˌrɛprəˈzɛnətɪv, ˌrɛprɪˈzɛnətɪv"
 },
 {
   "id": 2334,
   "word": "RING",
   "pronunciations": "ˈrɪŋ"
 },
 {
   "id": 2335,
   "word": "SAFETY",
   "pronunciations": "ˈseɪfti"
 },
 {
   "id": 2336,
   "word": "SINGING",
   "pronunciations": "ˈsɪŋɪŋ"
 },
 {
   "id": 2337,
   "word": "SKIN",
   "pronunciations": "ˈskɪn"
 },
 {
   "id": 2338,
   "word": "SOLD",
   "pronunciations": "ˈsoʊld"
 },
 {
   "id": 2339,
   "word": "SOUL",
   "pronunciations": "ˈsoʊl"
 },
 {
   "id": 2340,
   "word": "STAIRS",
   "pronunciations": "ˈstɛrz"
 },
 {
   "id": 2341,
   "word": "SUPPLIES",
   "pronunciations": "səˈplaɪz"
 },
 {
   "id": 2342,
   "word": "SURELY",
   "pronunciations": "ˈʃʊrli"
 },
 {
   "id": 2343,
   "word": "TESTIMONY",
   "pronunciations": "ˈtɛstɪˌmoʊni"
 },
 {
   "id": 2344,
   "word": "THOUSANDS",
   "pronunciations": "ˈθaʊzəndz, ˈθaʊzənz"
 },
 {
   "id": 2345,
   "word": "UNKNOWN",
   "pronunciations": "ənˈnoʊn"
 },
 {
   "id": 2346,
   "word": "VACATION",
   "pronunciations": "veɪˈkeɪʃən"
 },
 {
   "id": 2347,
   "word": "WEARING",
   "pronunciations": "ˈwɛrɪŋ"
 },
 {
   "id": 2348,
   "word": "AIN'T",
   "pronunciations": "ˈeɪnt"
 },
 {
   "id": 2349,
   "word": "ANYWAY",
   "pronunciations": "ˈɛniːˌweɪ"
 },
 {
   "id": 2350,
   "word": "ARTERY",
   "pronunciations": "ˈɑːrtɝi"
 },
 {
   "id": 2351,
   "word": "ATOMIC",
   "pronunciations": "əˈtɑːmɪk"
 },
 {
   "id": 2352,
   "word": "AUTHOR",
   "pronunciations": "ˈɔθɝ"
 },
 {
   "id": 2353,
   "word": "AVENUE",
   "pronunciations": "ˈævəˌnuː"
 },
 {
   "id": 2354,
   "word": "AWARD",
   "pronunciations": "əˈwɔrd"
 },
 {
   "id": 2355,
   "word": "BOND",
   "pronunciations": "ˈbɑːnd"
 },
 {
   "id": 2356,
   "word": "CENTURIES",
   "pronunciations": "ˈsɛntʃɝiːz"
 },
 {
   "id": 2357,
   "word": "CHAMBER",
   "pronunciations": "ˈtʃeɪmbɝ"
 },
 {
   "id": 2358,
   "word": "CONSCIOUS",
   "pronunciations": "ˈkɑːnʃəs"
 },
 {
   "id": 2359,
   "word": "CREATION",
   "pronunciations": "kriːˈeɪʃən"
 },
 {
   "id": 2360,
   "word": "CURIOUS",
   "pronunciations": "ˈkjʊriːəs"
 },
 {
   "id": 2361,
   "word": "DANGEROUS",
   "pronunciations": "ˈdeɪndʒɝəs"
 },
 {
   "id": 2362,
   "word": "DECADE",
   "pronunciations": "dɛˈkeɪd, ˈdɛkeɪd"
 },
 {
   "id": 2363,
   "word": "DIFFICULTIES",
   "pronunciations": "ˈdɪfəkəltiːz, ˈdɪfɪˌkəltiːz"
 },
 {
   "id": 2364,
   "word": "DOCTRINE",
   "pronunciations": "ˈdɑːktrən, ˈdɔktɝɪn"
 },
 {
   "id": 2365,
   "word": "DOLLAR",
   "pronunciations": "ˈdɑːlɝ, ˈdɔlɝ"
 },
 {
   "id": 2366,
   "word": "ELECTRICAL",
   "pronunciations": "ɪˈlɛktrɪkəl"
 },
 {
   "id": 2367,
   "word": "ENCOURAGE",
   "pronunciations": "ɛnˈkɝːɪdʒ, ɪnˈkɝːədʒ"
 },
 {
   "id": 2368,
   "word": "ENGINEERING",
   "pronunciations": "ˈɛndʒəˈnɪrɪŋ"
 },
 {
   "id": 2369,
   "word": "EQUIVALENT",
   "pronunciations": "ɪˈkwɪvələnt"
 },
 {
   "id": 2370,
   "word": "FICTION",
   "pronunciations": "ˈfɪkʃən"
 },
 {
   "id": 2371,
   "word": "FLIGHT",
   "pronunciations": "ˈflaɪt"
 },
 {
   "id": 2372,
   "word": "FOUGHT",
   "pronunciations": "ˈfɔt"
 },
 {
   "id": 2373,
   "word": "GEORGIA",
   "pronunciations": "ˈdʒɔrdʒə"
 },
 {
   "id": 2374,
   "word": "IDENTIFIED",
   "pronunciations": "aɪˈdɛntəˌfaɪd"
 },
 {
   "id": 2375,
   "word": "INSURANCE",
   "pronunciations": "ˌɪnˈʃʊrəns"
 },
 {
   "id": 2376,
   "word": "LEGISLATION",
   "pronunciations": "ˌlɛdʒəˈsleɪʃən"
 },
 {
   "id": 2377,
   "word": "LIBERTY",
   "pronunciations": "ˈlɪbɝˌtiː"
 },
 {
   "id": 2378,
   "word": "LOAN",
   "pronunciations": "ˈloʊn"
 },
 {
   "id": 2379,
   "word": "LOSSES",
   "pronunciations": "ˈlɔsəz, ˈlɔsɪz"
 },
 {
   "id": 2380,
   "word": "NATIVE",
   "pronunciations": "ˈneɪtɪv"
 },
 {
   "id": 2381,
   "word": "OPPOSITION",
   "pronunciations": "ˌɑːpəˈzɪʃən"
 },
 {
   "id": 2382,
   "word": "PANELS",
   "pronunciations": "ˈpænəlz"
 },
 {
   "id": 2383,
   "word": "PERCENTAGE",
   "pronunciations": "pɝˈsɛntədʒ, pɝˈsɛnədʒ, pɝˈsɛntɪdʒ, pɝˈsɛnɪdʒ"
 },
 {
   "id": 2384,
   "word": "POCKET",
   "pronunciations": "ˈpɑːkət"
 },
 {
   "id": 2385,
   "word": "PRECISION",
   "pronunciations": "priːˈsɪʒən"
 },
 {
   "id": 2386,
   "word": "Q",
   "pronunciations": "ˈkjuː"
 },
 {
   "id": 2387,
   "word": "RECOMMENDED",
   "pronunciations": "ˌrɛkəˈmɛndəd, ˌrɛkəˈmɛndɪd"
 },
 {
   "id": 2388,
   "word": "RELATIVE",
   "pronunciations": "ˈrɛlətɪv"
 },
 {
   "id": 2389,
   "word": "SALT",
   "pronunciations": "ˈsɔlt"
 },
 {
   "id": 2390,
   "word": "SERIOUSLY",
   "pronunciations": "ˈsɪriːəsli"
 },
 {
   "id": 2391,
   "word": "SHARES",
   "pronunciations": "ˈʃɛrz"
 },
 {
   "id": 2392,
   "word": "SHUT",
   "pronunciations": "ˈʃʌt"
 },
 {
   "id": 2393,
   "word": "SUPERIOR",
   "pronunciations": "suːˈpɪriːɝ"
 },
 {
   "id": 2394,
   "word": "THREW",
   "pronunciations": "ˈθruː"
 },
 {
   "id": 2395,
   "word": "TREND",
   "pronunciations": "ˈtrɛnd"
 },
 {
   "id": 2396,
   "word": "VIOLENCE",
   "pronunciations": "ˈvaɪələns"
 },
 {
   "id": 2397,
   "word": "WAVE",
   "pronunciations": "ˈweɪv"
 },
 {
   "id": 2398,
   "word": "WEAKNESS",
   "pronunciations": "ˈwiːknəs"
 },
 {
   "id": 2399,
   "word": "WRIGHT",
   "pronunciations": "ˈraɪt"
 },
 {
   "id": 2400,
   "word": "ADOPTED",
   "pronunciations": "əˈdɑːptəd"
 },
 {
   "id": 2401,
   "word": "AFRICA",
   "pronunciations": "ˈæfrɪkɑː"
 },
 {
   "id": 2402,
   "word": "ALEXANDER",
   "pronunciations": "ˌælɪgˈzændɝ"
 },
 {
   "id": 2403,
   "word": "ANGRY",
   "pronunciations": "ˈæŋgri"
 },
 {
   "id": 2404,
   "word": "APPROACHED",
   "pronunciations": "əˈproʊtʃt"
 },
 {
   "id": 2405,
   "word": "BALLET",
   "pronunciations": "bæˈleɪ"
 },
 {
   "id": 2406,
   "word": "BRAIN",
   "pronunciations": "ˈbreɪn"
 },
 {
   "id": 2407,
   "word": "CALLING",
   "pronunciations": "ˈkɔlɪŋ"
 },
 {
   "id": 2408,
   "word": "CAST",
   "pronunciations": "ˈkæst"
 },
 {
   "id": 2409,
   "word": "CHARGES",
   "pronunciations": "ˈtʃɑːrdʒɪz"
 },
 {
   "id": 2410,
   "word": "CONTAIN",
   "pronunciations": "kənˈteɪn"
 },
 {
   "id": 2411,
   "word": "CONTAINING",
   "pronunciations": "kənˈteɪnɪŋ"
 },
 {
   "id": 2412,
   "word": "CUP",
   "pronunciations": "ˈkʌp"
 },
 {
   "id": 2413,
   "word": "CURVE",
   "pronunciations": "ˈkɝːv"
 },
 {
   "id": 2414,
   "word": "DEPEND",
   "pronunciations": "dɪˈpɛnd"
 },
 {
   "id": 2415,
   "word": "DIAMETER",
   "pronunciations": "daɪˈæmətɝ"
 },
 {
   "id": 2416,
   "word": "DISCOVERY",
   "pronunciations": "dɪˈskʌvɝi, dɪˈskʌvri, ˌdɪˈskʌvri"
 },
 {
   "id": 2417,
   "word": "EDWARD",
   "pronunciations": "ˈɛdwɝd"
 },
 {
   "id": 2418,
   "word": "ELSEWHERE",
   "pronunciations": "ˈɛlˌswɛr"
 },
 {
   "id": 2419,
   "word": "EXPENDITURES",
   "pronunciations": "ɪkˈspɛndətʃɝz, ɪkˈspɛndɪtʃɝz"
 },
 {
   "id": 2420,
   "word": "FEBRUARY",
   "pronunciations": "ˈfɛbjəˌwɛri, ˈfɛbruːˌɛri"
 },
 {
   "id": 2421,
   "word": "FEELS",
   "pronunciations": "ˈfiːlz"
 },
 {
   "id": 2422,
   "word": "ICE",
   "pronunciations": "ˈaɪs"
 },
 {
   "id": 2423,
   "word": "IMPRESSION",
   "pronunciations": "ˌɪmˈprɛʃən"
 },
 {
   "id": 2424,
   "word": "INCLUDES",
   "pronunciations": "ˌɪnˈkluːdz"
 },
 {
   "id": 2425,
   "word": "INTENDED",
   "pronunciations": "ˌɪnˈtɛndɪd"
 },
 {
   "id": 2426,
   "word": "INTERFERENCE",
   "pronunciations": "ˌɪntɝˈfɪrəns, ˌɪnɝˈfɪrəns"
 },
 {
   "id": 2427,
   "word": "LOAD",
   "pronunciations": "ˈloʊd"
 },
 {
   "id": 2428,
   "word": "LUCY",
   "pronunciations": "ˈluːsi"
 },
 {
   "id": 2429,
   "word": "MEAT",
   "pronunciations": "ˈmiːt"
 },
 {
   "id": 2430,
   "word": "MEDIUM",
   "pronunciations": "ˈmiːdiːəm"
 },
 {
   "id": 2431,
   "word": "MOLD",
   "pronunciations": "ˈmoʊld"
 },
 {
   "id": 2432,
   "word": "MOUNTED",
   "pronunciations": "ˈmaʊntəd, ˈmaʊntɪd, ˈmaʊnɪd"
 },
 {
   "id": 2433,
   "word": "NEARBY",
   "pronunciations": "ˈnɪrˈbaɪ"
 },
 {
   "id": 2434,
   "word": "OFFERS",
   "pronunciations": "ˈɔfɝz"
 },
 {
   "id": 2435,
   "word": "OFFICES",
   "pronunciations": "ˈɔfəsəz, ˈɔfəsɪz"
 },
 {
   "id": 2436,
   "word": "PENNSYLVANIA",
   "pronunciations": "ˌpɛnsəlˈveɪnjə"
 },
 {
   "id": 2437,
   "word": "PRIME",
   "pronunciations": "ˈpraɪm"
 },
 {
   "id": 2438,
   "word": "PROMISE",
   "pronunciations": "ˈprɑːməs"
 },
 {
   "id": 2439,
   "word": "PROMISED",
   "pronunciations": "ˈprɑːməst"
 },
 {
   "id": 2440,
   "word": "QUALITIES",
   "pronunciations": "ˈkwɑːlətiːz"
 },
 {
   "id": 2441,
   "word": "REFERRED",
   "pronunciations": "rəˈfɝːd, rɪˈfɝːd"
 },
 {
   "id": 2442,
   "word": "RESIDENTIAL",
   "pronunciations": "ˌrɛzɪˈdɛnʃəl"
 },
 {
   "id": 2443,
   "word": "RIDING",
   "pronunciations": "ˈraɪdɪŋ"
 },
 {
   "id": 2444,
   "word": "SHEET",
   "pronunciations": "ˈʃiːt"
 },
 {
   "id": 2445,
   "word": "STEEL",
   "pronunciations": "ˈstiːl"
 },
 {
   "id": 2446,
   "word": "SUM",
   "pronunciations": "ˈsʌm"
 },
 {
   "id": 2447,
   "word": "TARGET",
   "pronunciations": "ˈtɑːrgət, ˈtɝːgət"
 },
 {
   "id": 2448,
   "word": "TAXES",
   "pronunciations": "ˈtæksəz, ˈtæksɪz"
 },
 {
   "id": 2449,
   "word": "TERRIBLE",
   "pronunciations": "ˈtɛrəbəl"
 },
 {
   "id": 2450,
   "word": "UNIVERSAL",
   "pronunciations": "ˌjuːnəˈvɝːsəl"
 },
 {
   "id": 2451,
   "word": "VALUABLE",
   "pronunciations": "ˈvæljəbəl, ˈvæljuːbəl"
 },
 {
   "id": 2452,
   "word": "WATSON",
   "pronunciations": "ˈwɑːtsən"
 },
 {
   "id": 2453,
   "word": "ACCOMPLISHED",
   "pronunciations": "əˈkɑːmplɪʃt"
 },
 {
   "id": 2454,
   "word": "ACRES",
   "pronunciations": "ˈeɪkɝz"
 },
 {
   "id": 2455,
   "word": "ADAM",
   "pronunciations": "ˈædəm"
 },
 {
   "id": 2456,
   "word": "ADMITTED",
   "pronunciations": "ədˈmɪtəd"
 },
 {
   "id": 2457,
   "word": "AGENT",
   "pronunciations": "ˈeɪdʒənt"
 },
 {
   "id": 2458,
   "word": "AMOUNTS",
   "pronunciations": "əˈmaʊnts"
 },
 {
   "id": 2459,
   "word": "ANSWERS",
   "pronunciations": "ˈænsɝz"
 },
 {
   "id": 2460,
   "word": "ARRANGED",
   "pronunciations": "ɝˈeɪndʒd"
 },
 {
   "id": 2461,
   "word": "ASIA",
   "pronunciations": "ˈeɪʒə"
 },
 {
   "id": 2462,
   "word": "BRUSH",
   "pronunciations": "ˈbrʌʃ"
 },
 {
   "id": 2463,
   "word": "BURDEN",
   "pronunciations": "ˈbɝːdən"
 },
 {
   "id": 2464,
   "word": "CHANGING",
   "pronunciations": "ˈtʃeɪndʒɪŋ"
 },
 {
   "id": 2465,
   "word": "CLIMBED",
   "pronunciations": "ˈklaɪmd"
 },
 {
   "id": 2466,
   "word": "COLLECTED",
   "pronunciations": "kəˈlɛktəd"
 },
 {
   "id": 2467,
   "word": "CONFUSED",
   "pronunciations": "kənˈfjuːzd"
 },
 {
   "id": 2468,
   "word": "CONFUSION",
   "pronunciations": "kənˈfjuːʒən"
 },
 {
   "id": 2469,
   "word": "CONSIDERABLY",
   "pronunciations": "kənˈsɪdɝəbli"
 },
 {
   "id": 2470,
   "word": "CONTINUOUS",
   "pronunciations": "kənˈtɪnjuːəs"
 },
 {
   "id": 2471,
   "word": "CONTRIBUTE",
   "pronunciations": "kənˈtrɪbjuːt"
 },
 {
   "id": 2472,
   "word": "DEVELOPMENTS",
   "pronunciations": "dɪˈvɛləpmənts"
 },
 {
   "id": 2473,
   "word": "DRIVEN",
   "pronunciations": "ˈdrɪvən"
 },
 {
   "id": 2474,
   "word": "ENJOY",
   "pronunciations": "ˌɛnˈdʒɔɪ"
 },
 {
   "id": 2475,
   "word": "ERRORS",
   "pronunciations": "ˈɛrɝz"
 },
 {
   "id": 2476,
   "word": "EXPENSIVE",
   "pronunciations": "ɪkˈspɛnsɪv"
 },
 {
   "id": 2477,
   "word": "EXTENSIVE",
   "pronunciations": "ɪkˈstɛnsɪv"
 },
 {
   "id": 2478,
   "word": "FIRED",
   "pronunciations": "ˈfaɪɝd"
 },
 {
   "id": 2479,
   "word": "FUN",
   "pronunciations": "ˈfʌn"
 },
 {
   "id": 2480,
   "word": "HANS",
   "pronunciations": "ˈhɑːns, ˈhænz"
 },
 {
   "id": 2481,
   "word": "HELPING",
   "pronunciations": "ˈhɛlpɪŋ"
 },
 {
   "id": 2482,
   "word": "HUNDREDS",
   "pronunciations": "ˈhʌndrədz, ˈhʌndɝdz, ˈhʌnɝdz"
 },
 {
   "id": 2483,
   "word": "LIES",
   "pronunciations": "ˈlaɪz"
 },
 {
   "id": 2484,
   "word": "LISTED",
   "pronunciations": "ˈlɪstəd, ˈlɪstɪd"
 },
 {
   "id": 2485,
   "word": "LOVELY",
   "pronunciations": "ˈlʌvli"
 },
 {
   "id": 2486,
   "word": "MAMA",
   "pronunciations": "ˈmɑːmə"
 },
 {
   "id": 2487,
   "word": "MANCHESTER",
   "pronunciations": "ˈmænˌtʃɛstɝ"
 },
 {
   "id": 2488,
   "word": "MOBILE",
   "pronunciations": "ˈmoʊbəl"
 },
 {
   "id": 2489,
   "word": "MOSTLY",
   "pronunciations": "ˈmoʊstli, ˈmoʊsli"
 },
 {
   "id": 2490,
   "word": "ODD",
   "pronunciations": "ˈɑːd"
 },
 {
   "id": 2491,
   "word": "OPINIONS",
   "pronunciations": "əˈpɪnjənz"
 },
 {
   "id": 2492,
   "word": "ORIGIN",
   "pronunciations": "ˈɔrədʒən"
 },
 {
   "id": 2493,
   "word": "OXYGEN",
   "pronunciations": "ˈɑːksədʒən, ˈɑːksɪdʒən"
 },
 {
   "id": 2494,
   "word": "PATH",
   "pronunciations": "ˈpæθ"
 },
 {
   "id": 2495,
   "word": "PILOT",
   "pronunciations": "ˈpaɪlət"
 },
 {
   "id": 2496,
   "word": "POUNDS",
   "pronunciations": "ˈpaʊndz, ˈpaʊnz"
 },
 {
   "id": 2497,
   "word": "RECOGNITION",
   "pronunciations": "ˌrɛkəgˈnɪʃən, ˌrɛkɪgˈnɪʃən"
 },
 {
   "id": 2498,
   "word": "SALE",
   "pronunciations": "ˈseɪl"
 },
 {
   "id": 2499,
   "word": "SEEKING",
   "pronunciations": "ˈsiːkɪŋ"
 },
 {
   "id": 2500,
   "word": "SHOES",
   "pronunciations": "ˈʃuːz"
 },
 {
   "id": 2501,
   "word": "SLAVES",
   "pronunciations": "ˈsleɪvz"
 },
 {
   "id": 2502,
   "word": "SNAKE",
   "pronunciations": "ˈsneɪk"
 },
 {
   "id": 2503,
   "word": "SPIRITS",
   "pronunciations": "ˈspɪrɪts"
 },
 {
   "id": 2504,
   "word": "SUFFERING",
   "pronunciations": "ˈsʌfɝɪŋ, ˈsʌfrɪŋ"
 },
 {
   "id": 2505,
   "word": "TABLES",
   "pronunciations": "ˈteɪbəlz"
 },
 {
   "id": 2506,
   "word": "THICKNESS",
   "pronunciations": "ˈθɪknəs"
 },
 {
   "id": 2507,
   "word": "VOLUMES",
   "pronunciations": "ˈvɑːljuːmz"
 },
 {
   "id": 2508,
   "word": "WARNING",
   "pronunciations": "ˈwɔrnɪŋ"
 },
 {
   "id": 2509,
   "word": "WASHING",
   "pronunciations": "ˈwɑːʃɪŋ"
 },
 {
   "id": 2510,
   "word": "WISDOM",
   "pronunciations": "ˈwɪzdəm"
 },
 {
   "id": 2511,
   "word": "YOUNGER",
   "pronunciations": "ˈjʌŋgɝ"
 },
 {
   "id": 2512,
   "word": "BELIEVES",
   "pronunciations": "bɪˈliːvz"
 },
 {
   "id": 2513,
   "word": "BUREAU",
   "pronunciations": "ˈbjʊroʊ"
 },
 {
   "id": 2514,
   "word": "CATCH",
   "pronunciations": "ˈkætʃ"
 },
 {
   "id": 2515,
   "word": "CLOTH",
   "pronunciations": "ˈklɔθ"
 },
 {
   "id": 2516,
   "word": "COAT",
   "pronunciations": "ˈkoʊt"
 },
 {
   "id": 2517,
   "word": "COMFORT",
   "pronunciations": "ˈkʌmfɝt"
 },
 {
   "id": 2518,
   "word": "CONCERNS",
   "pronunciations": "kənˈsɝːnz"
 },
 {
   "id": 2519,
   "word": "CONSISTS",
   "pronunciations": "kənˈsɪsts"
 },
 {
   "id": 2520,
   "word": "CORE",
   "pronunciations": "ˈkɔr"
 },
 {
   "id": 2521,
   "word": "DANCING",
   "pronunciations": "ˈdænsɪŋ"
 },
 {
   "id": 2522,
   "word": "DARKNESS",
   "pronunciations": "ˈdɑːrknəs"
 },
 {
   "id": 2523,
   "word": "DEALING",
   "pronunciations": "ˈdiːlɪŋ"
 },
 {
   "id": 2524,
   "word": "DIRT",
   "pronunciations": "ˈdɝːt"
 },
 {
   "id": 2525,
   "word": "DRAMA",
   "pronunciations": "ˈdrɑːmə"
 },
 {
   "id": 2526,
   "word": "EMOTIONS",
   "pronunciations": "ɪˈmoʊʃənz, ˈɪˌmoʊʃənz"
 },
 {
   "id": 2527,
   "word": "ENVIRONMENT",
   "pronunciations": "ɪnˈvaɪrənmənt"
 },
 {
   "id": 2528,
   "word": "EXPLANATION",
   "pronunciations": "ˌɛkspləˈneɪʃən"
 },
 {
   "id": 2529,
   "word": "EXTERNAL",
   "pronunciations": "ɪkˈstɝːnəl"
 },
 {
   "id": 2530,
   "word": "FLYING",
   "pronunciations": "ˈflaɪɪŋ"
 },
 {
   "id": 2531,
   "word": "GROWN",
   "pronunciations": "ˈgroʊn"
 },
 {
   "id": 2532,
   "word": "HEADS",
   "pronunciations": "ˈhɛdz"
 },
 {
   "id": 2533,
   "word": "HEAVEN",
   "pronunciations": "ˈhɛvən"
 },
 {
   "id": 2534,
   "word": "IDENTIFICATION",
   "pronunciations": "aɪˌdɛntəfəˈkeɪʃən"
 },
 {
   "id": 2535,
   "word": "INSISTED",
   "pronunciations": "ˌɪnˈsɪstəd, ˌɪnˈsɪstɪd"
 },
 {
   "id": 2536,
   "word": "INVESTMENT",
   "pronunciations": "ˌɪnˈvɛstmənt, ˌɪnˈvɛsmənt"
 },
 {
   "id": 2537,
   "word": "IRON",
   "pronunciations": "ˈaɪɝn"
 },
 {
   "id": 2538,
   "word": "LAWYER",
   "pronunciations": "ˈlɔjɝ, ˈlɔɪɝ"
 },
 {
   "id": 2539,
   "word": "LIFTED",
   "pronunciations": "ˈlɪftəd, ˈlɪftɪd"
 },
 {
   "id": 2540,
   "word": "LIQUOR",
   "pronunciations": "ˈlɪkɝ"
 },
 {
   "id": 2541,
   "word": "MARKETING",
   "pronunciations": "ˈmɑːrkətɪŋ"
 },
 {
   "id": 2542,
   "word": "MENTAL",
   "pronunciations": "ˈmɛntəl"
 },
 {
   "id": 2543,
   "word": "MOUNTAINS",
   "pronunciations": "ˈmaʊntənz"
 },
 {
   "id": 2544,
   "word": "OCCUR",
   "pronunciations": "əˈkɝː"
 },
 {
   "id": 2545,
   "word": "PACE",
   "pronunciations": "ˈpeɪs"
 },
 {
   "id": 2546,
   "word": "PORCH",
   "pronunciations": "ˈpɔrtʃ"
 },
 {
   "id": 2547,
   "word": "RAPID",
   "pronunciations": "ˈræpəd, ˈræpɪd"
 },
 {
   "id": 2548,
   "word": "RAW",
   "pronunciations": "ˈrɑː"
 },
 {
   "id": 2549,
   "word": "REACHING",
   "pronunciations": "ˈriːtʃɪŋ"
 },
 {
   "id": 2550,
   "word": "READER",
   "pronunciations": "ˈriːdɝ"
 },
 {
   "id": 2551,
   "word": "READILY",
   "pronunciations": "ˈrɛdəli"
 },
 {
   "id": 2552,
   "word": "RECORDED",
   "pronunciations": "rəˈkɔrdəd, rɪˈkɔrdɪd"
 },
 {
   "id": 2553,
   "word": "RECREATION",
   "pronunciations": "ˌrɛkriːˈeɪʃən"
 },
 {
   "id": 2554,
   "word": "REPUBLIC",
   "pronunciations": "riːˈpʌblək, riːˈpʌblɪk"
 },
 {
   "id": 2555,
   "word": "RESULTING",
   "pronunciations": "rɪˈzʌltɪŋ, riːˈzʌltɪŋ"
 },
 {
   "id": 2556,
   "word": "ROUTE",
   "pronunciations": "ˈruːt, ˈraʊt"
 },
 {
   "id": 2557,
   "word": "SALARY",
   "pronunciations": "ˈsælɝi"
 },
 {
   "id": 2558,
   "word": "SAVED",
   "pronunciations": "ˈseɪvd"
 },
 {
   "id": 2559,
   "word": "SEPARATED",
   "pronunciations": "ˈsɛpɝˌeɪtəd, ˈsɛpɝˌeɪtɪd"
 },
 {
   "id": 2560,
   "word": "SHIPS",
   "pronunciations": "ˈʃɪps"
 },
 {
   "id": 2561,
   "word": "SWITCH",
   "pronunciations": "ˈswɪtʃ"
 },
 {
   "id": 2562,
   "word": "TECHNOLOGY",
   "pronunciations": "tɛkˈnɑːlədʒi"
 },
 {
   "id": 2563,
   "word": "TEND",
   "pronunciations": "ˈtɛnd"
 },
 {
   "id": 2564,
   "word": "TOUR",
   "pronunciations": "ˈtʊr"
 },
 {
   "id": 2565,
   "word": "TRANSPORTATION",
   "pronunciations": "ˌtrænspɝˈteɪʃən"
 },
 {
   "id": 2566,
   "word": "WARFARE",
   "pronunciations": "ˈwɔrˌfɛr"
 },
 {
   "id": 2567,
   "word": "WHENEVER",
   "pronunciations": "wɛˈnɛvɝ, hwɛˈnɛvɝ"
 },
 {
   "id": 2568,
   "word": "YEAR'S",
   "pronunciations": "ˈjɪrz"
 },
 {
   "id": 2569,
   "word": "ADAMS",
   "pronunciations": "ˈædəmz"
 },
 {
   "id": 2570,
   "word": "ANNE",
   "pronunciations": "ˈæn"
 },
 {
   "id": 2571,
   "word": "ANXIETY",
   "pronunciations": "æŋˈzaɪəti"
 },
 {
   "id": 2572,
   "word": "ANYBODY",
   "pronunciations": "ˈɛniːbədi"
 },
 {
   "id": 2573,
   "word": "APPOINTED",
   "pronunciations": "əˈpɔɪntəd, əˈpɔɪntɪd"
 },
 {
   "id": 2574,
   "word": "BAG",
   "pronunciations": "ˈbæg"
 },
 {
   "id": 2575,
   "word": "BOUND",
   "pronunciations": "ˈbaʊnd"
 },
 {
   "id": 2576,
   "word": "CIVILIZATION",
   "pronunciations": "ˌsɪvəlɪˈzeɪʃən"
 },
 {
   "id": 2577,
   "word": "COMMENT",
   "pronunciations": "ˈkɑːmɛnt"
 },
 {
   "id": 2578,
   "word": "COOLING",
   "pronunciations": "ˈkuːlɪŋ"
 },
 {
   "id": 2579,
   "word": "CROSSED",
   "pronunciations": "ˈkrɔst"
 },
 {
   "id": 2580,
   "word": "DEMANDED",
   "pronunciations": "dɪˈmændəd, dɪˈmændɪd"
 },
 {
   "id": 2581,
   "word": "DISTINCT",
   "pronunciations": "dɪˈstɪŋkt"
 },
 {
   "id": 2582,
   "word": "DISTINGUISHED",
   "pronunciations": "dɪˈstɪŋgwɪʃt"
 },
 {
   "id": 2583,
   "word": "EASE",
   "pronunciations": "ˈiːz"
 },
 {
   "id": 2584,
   "word": "EDITORIAL",
   "pronunciations": "ˌɛdəˈtɔriːəl"
 },
 {
   "id": 2585,
   "word": "ENGINEER",
   "pronunciations": "ˈɛndʒəˈnɪr"
 },
 {
   "id": 2586,
   "word": "EXCESS",
   "pronunciations": "ˈɛkˌsɛs, ɪkˈsɛs"
 },
 {
   "id": 2587,
   "word": "EXISTS",
   "pronunciations": "ɪgˈzɪsts"
 },
 {
   "id": 2588,
   "word": "EXPRESS",
   "pronunciations": "ɪkˈsprɛs"
 },
 {
   "id": 2589,
   "word": "G.",
   "pronunciations": "ˈdʒiː"
 },
 {
   "id": 2590,
   "word": "GOLDEN",
   "pronunciations": "ˈgoʊldən"
 },
 {
   "id": 2591,
   "word": "GUNS",
   "pronunciations": "ˈgʌnz"
 },
 {
   "id": 2592,
   "word": "HARDY",
   "pronunciations": "ˈhɑːrdi"
 },
 {
   "id": 2593,
   "word": "HATE",
   "pronunciations": "ˈheɪt"
 },
 {
   "id": 2594,
   "word": "HOLDS",
   "pronunciations": "ˈhoʊldz"
 },
 {
   "id": 2595,
   "word": "INCREASINGLY",
   "pronunciations": "ˌɪnˈkriːsɪŋgli"
 },
 {
   "id": 2596,
   "word": "JOURNAL",
   "pronunciations": "ˈdʒɝːnəl"
 },
 {
   "id": 2597,
   "word": "LINDA",
   "pronunciations": "ˈlɪndə"
 },
 {
   "id": 2598,
   "word": "LONG-RANGE",
   "pronunciations": "ˈlɔŋˈreɪndʒ"
 },
 {
   "id": 2599,
   "word": "LOTS",
   "pronunciations": "ˈlɑːts"
 },
 {
   "id": 2600,
   "word": "MUSCLE",
   "pronunciations": "ˈmʌsəl"
 },
 {
   "id": 2601,
   "word": "NINETEENTH",
   "pronunciations": "ˈnaɪnˈtiːnθ"
 },
 {
   "id": 2602,
   "word": "OBTAIN",
   "pronunciations": "əbˈteɪn"
 },
 {
   "id": 2603,
   "word": "PARTICLES",
   "pronunciations": "ˈpɑːrtəkəlz, ˈpɑːrtɪkəlz"
 },
 {
   "id": 2604,
   "word": "POSSIBILITIES",
   "pronunciations": "ˌpɑːsəˈbɪlətiːz"
 },
 {
   "id": 2605,
   "word": "PRIDE",
   "pronunciations": "ˈpraɪd"
 },
 {
   "id": 2606,
   "word": "PRISON",
   "pronunciations": "ˈprɪzən"
 },
 {
   "id": 2607,
   "word": "RACHEL",
   "pronunciations": "ˈreɪtʃəl"
 },
 {
   "id": 2608,
   "word": "REACTIONS",
   "pronunciations": "riːˈækʃənz"
 },
 {
   "id": 2609,
   "word": "REDUCTION",
   "pronunciations": "rɪˈdʌkʃən"
 },
 {
   "id": 2610,
   "word": "REFLECTED",
   "pronunciations": "rəˈflɛktəd, rɪˈflɛktɪd"
 },
 {
   "id": 2611,
   "word": "REGIONAL",
   "pronunciations": "ˈriːdʒənəl"
 },
 {
   "id": 2612,
   "word": "REPLACED",
   "pronunciations": "ˌriːˈpleɪst"
 },
 {
   "id": 2613,
   "word": "REPLY",
   "pronunciations": "rɪˈplaɪ, riːˈplaɪ"
 },
 {
   "id": 2614,
   "word": "SEEDS",
   "pronunciations": "ˈsiːdz"
 },
 {
   "id": 2615,
   "word": "SKILL",
   "pronunciations": "ˈskɪl"
 },
 {
   "id": 2616,
   "word": "SMOOTH",
   "pronunciations": "ˈsmuːð"
 },
 {
   "id": 2617,
   "word": "SUFFERED",
   "pronunciations": "ˈsʌfɝd"
 },
 {
   "id": 2618,
   "word": "SUFFICIENTLY",
   "pronunciations": "səˈfɪʃəntli"
 },
 {
   "id": 2619,
   "word": "THREAT",
   "pronunciations": "ˈθrɛt"
 },
 {
   "id": 2620,
   "word": "THROW",
   "pronunciations": "ˈθroʊ"
 },
 {
   "id": 2621,
   "word": "TOUCHED",
   "pronunciations": "ˈtʌtʃt"
 },
 {
   "id": 2622,
   "word": "UNLIKE",
   "pronunciations": "ənˈlaɪk"
 },
 {
   "id": 2623,
   "word": "URBAN",
   "pronunciations": "ˈɝːbən"
 },
 {
   "id": 2624,
   "word": "VARIED",
   "pronunciations": "ˈvɛriːd"
 },
 {
   "id": 2625,
   "word": "VARYING",
   "pronunciations": "ˈvɛriːɪŋ"
 },
 {
   "id": 2626,
   "word": "WAGES",
   "pronunciations": "ˈweɪdʒəz, ˈweɪdʒɪz"
 },
 {
   "id": 2627,
   "word": "WATERS",
   "pronunciations": "ˈwɔtɝz"
 },
 {
   "id": 2628,
   "word": "WEAPON",
   "pronunciations": "ˈwɛpən"
 },
 {
   "id": 2629,
   "word": "WIRE",
   "pronunciations": "ˈwaɪɝ, ˈwaɪr"
 },
 {
   "id": 2630,
   "word": "'EM",
   "pronunciations": "əm"
 },
 {
   "id": 2631,
   "word": "ARC",
   "pronunciations": "ˈɑːrk"
 },
 {
   "id": 2632,
   "word": "ASSUMPTION",
   "pronunciations": "əˈsʌmpʃən"
 },
 {
   "id": 2633,
   "word": "BREAD",
   "pronunciations": "ˈbrɛd"
 },
 {
   "id": 2634,
   "word": "BROTHERS",
   "pronunciations": "ˈbrʌðɝz"
 },
 {
   "id": 2635,
   "word": "CARL",
   "pronunciations": "ˈkɑːrl"
 },
 {
   "id": 2636,
   "word": "COMMUNITIES",
   "pronunciations": "kəˈmjuːnətiːz, kəˈmjuːnɪtiːz"
 },
 {
   "id": 2637,
   "word": "COMPARABLE",
   "pronunciations": "ˈkɑːmprəbəl, kəmˈpærəbəl"
 },
 {
   "id": 2638,
   "word": "CONSTANTLY",
   "pronunciations": "ˈkɑːnstəntli"
 },
 {
   "id": 2639,
   "word": "CONTINUES",
   "pronunciations": "kənˈtɪnjuːz"
 },
 {
   "id": 2640,
   "word": "DESCRIBE",
   "pronunciations": "dɪˈskraɪb"
 },
 {
   "id": 2641,
   "word": "DISPLAY",
   "pronunciations": "dɪˈspleɪ"
 },
 {
   "id": 2642,
   "word": "DISTINCTION",
   "pronunciations": "dɪˈstɪŋkʃən"
 },
 {
   "id": 2643,
   "word": "DOWNTOWN",
   "pronunciations": "ˈdaʊnˈtaʊn"
 },
 {
   "id": 2644,
   "word": "FAVORITE",
   "pronunciations": "ˈfeɪvɝɪt, ˈfeɪvrət"
 },
 {
   "id": 2645,
   "word": "FED",
   "pronunciations": "ˈfɛd"
 },
 {
   "id": 2646,
   "word": "FRANCISCO",
   "pronunciations": "frænˈsɪskoʊ"
 },
 {
   "id": 2647,
   "word": "FUNNY",
   "pronunciations": "ˈfʌni"
 },
 {
   "id": 2648,
   "word": "HENRIETTA",
   "pronunciations": "ˌhɛnriːˈɛtə"
 },
 {
   "id": 2649,
   "word": "INSTITUTION",
   "pronunciations": "ˌɪnstɪˈtuːʃən"
 },
 {
   "id": 2650,
   "word": "INVOLVES",
   "pronunciations": "ˌɪnˈvɑːlvz"
 },
 {
   "id": 2651,
   "word": "KATE",
   "pronunciations": "ˈkeɪt"
 },
 {
   "id": 2652,
   "word": "LIMITS",
   "pronunciations": "ˈlɪməts, ˈlɪmɪts"
 },
 {
   "id": 2653,
   "word": "MATCH",
   "pronunciations": "ˈmætʃ"
 },
 {
   "id": 2654,
   "word": "MUSICIANS",
   "pronunciations": "mjuːˈzɪʃənz"
 },
 {
   "id": 2655,
   "word": "O'CLOCK",
   "pronunciations": "əˈklɑːk"
 },
 {
   "id": 2656,
   "word": "OPPOSED",
   "pronunciations": "əˈpoʊzd"
 },
 {
   "id": 2657,
   "word": "PARTICIPATION",
   "pronunciations": "pɑːrˌtɪsəˈpeɪʃən"
 },
 {
   "id": 2658,
   "word": "PIKE",
   "pronunciations": "ˈpaɪk"
 },
 {
   "id": 2659,
   "word": "PLEASED",
   "pronunciations": "ˈpliːzd"
 },
 {
   "id": 2660,
   "word": "PROPOSAL",
   "pronunciations": "prəˈpoʊzəl"
 },
 {
   "id": 2661,
   "word": "PSYCHOLOGICAL",
   "pronunciations": "ˌsaɪkəˈlɑːdʒɪkəl"
 },
 {
   "id": 2662,
   "word": "QUEEN",
   "pronunciations": "ˈkwiːn"
 },
 {
   "id": 2663,
   "word": "RARE",
   "pronunciations": "ˈrɛr"
 },
 {
   "id": 2664,
   "word": "RARELY",
   "pronunciations": "ˈrɛrli"
 },
 {
   "id": 2665,
   "word": "REMAINING",
   "pronunciations": "rɪˈmeɪnɪŋ, riːˈmeɪnɪŋ"
 },
 {
   "id": 2666,
   "word": "REMOVAL",
   "pronunciations": "rɪˈmuːvəl"
 },
 {
   "id": 2667,
   "word": "REPRESENTATIVES",
   "pronunciations": "ˌrɛprəˈzɛntətɪvz, ˌrɛprɪˈzɛntətɪvz, ˌrɛprəˈzɛnətɪvz, ˌrɛprɪˈzɛnətɪvz"
 },
 {
   "id": 2668,
   "word": "RESTAURANT",
   "pronunciations": "ˈrɛstɝˌɑːnt, ˈrɛˌstrɑːnt"
 },
 {
   "id": 2669,
   "word": "ROUGH",
   "pronunciations": "ˈrʌf"
 },
 {
   "id": 2670,
   "word": "SAKE",
   "pronunciations": "ˈseɪk"
 },
 {
   "id": 2671,
   "word": "SEED",
   "pronunciations": "ˈsiːd"
 },
 {
   "id": 2672,
   "word": "SELL",
   "pronunciations": "ˈsɛl"
 },
 {
   "id": 2673,
   "word": "SHIFT",
   "pronunciations": "ˈʃɪft"
 },
 {
   "id": 2674,
   "word": "SMOKE",
   "pronunciations": "ˈsmoʊk"
 },
 {
   "id": 2675,
   "word": "SOCIETIES",
   "pronunciations": "səˈsaɪɪtiːz"
 },
 {
   "id": 2676,
   "word": "SPENDING",
   "pronunciations": "ˈspɛndɪŋ"
 },
 {
   "id": 2677,
   "word": "STEADY",
   "pronunciations": "ˈstɛdi"
 },
 {
   "id": 2678,
   "word": "STORAGE",
   "pronunciations": "ˈstɔrədʒ, ˈstɔrɪdʒ"
 },
 {
   "id": 2679,
   "word": "TEACH",
   "pronunciations": "ˈtiːtʃ"
 },
 {
   "id": 2680,
   "word": "TISSUE",
   "pronunciations": "ˈtɪsˌjuː, ˈtɪʃuː"
 },
 {
   "id": 2681,
   "word": "TODAY'S",
   "pronunciations": "təˈdeɪz, ˈtuːdeɪz"
 },
 {
   "id": 2682,
   "word": "VICE",
   "pronunciations": "ˈvaɪs"
 },
 {
   "id": 2683,
   "word": "VIRTUALLY",
   "pronunciations": "ˈvɝːtʃuːəli, ˈvɝːtʃuːli"
 },
 {
   "id": 2684,
   "word": "VISITED",
   "pronunciations": "ˈvɪzɪtɪd"
 },
 {
   "id": 2685,
   "word": "WHEREAS",
   "pronunciations": "wɛˈræz, hwɛˈræz"
 },
 {
   "id": 2686,
   "word": "WRITES",
   "pronunciations": "ˈraɪts"
 },
 {
   "id": 2687,
   "word": "AFFORD",
   "pronunciations": "əˈfɔrd"
 },
 {
   "id": 2688,
   "word": "APPROVED",
   "pronunciations": "əˈpruːvd"
 },
 {
   "id": 2689,
   "word": "ATLANTIC",
   "pronunciations": "ətˈlæntɪk"
 },
 {
   "id": 2690,
   "word": "ATOMS",
   "pronunciations": "ˈætəmz"
 },
 {
   "id": 2691,
   "word": "AUTOMATIC",
   "pronunciations": "ˌɔtəˈmætɪk, ˌɔtoʊˈmætɪk"
 },
 {
   "id": 2692,
   "word": "BARS",
   "pronunciations": "ˈbɑːrz"
 },
 {
   "id": 2693,
   "word": "BOB",
   "pronunciations": "ˈbɑːb"
 },
 {
   "id": 2694,
   "word": "BRINGS",
   "pronunciations": "ˈbrɪŋz"
 },
 {
   "id": 2695,
   "word": "BURNED",
   "pronunciations": "ˈbɝːnd"
 },
 {
   "id": 2696,
   "word": "COMBINED",
   "pronunciations": "kəmˈbaɪnd"
 },
 {
   "id": 2697,
   "word": "COMPOSED",
   "pronunciations": "kəmˈpoʊzd"
 },
 {
   "id": 2698,
   "word": "CONSCIENCE",
   "pronunciations": "ˈkɑːnʃəns"
 },
 {
   "id": 2699,
   "word": "CRITICISM",
   "pronunciations": "ˈkrɪtɪˌsɪzəm"
 },
 {
   "id": 2700,
   "word": "CUSTOMERS",
   "pronunciations": "ˈkʌstəmɝz"
 },
 {
   "id": 2701,
   "word": "DEAN",
   "pronunciations": "ˈdiːn"
 },
 {
   "id": 2702,
   "word": "DECIDE",
   "pronunciations": "ˌdɪˈsaɪd"
 },
 {
   "id": 2703,
   "word": "DEMOCRATS",
   "pronunciations": "ˈdɛməˌkræts"
 },
 {
   "id": 2704,
   "word": "DEPENDENT",
   "pronunciations": "dɪˈpɛndənt"
 },
 {
   "id": 2705,
   "word": "DESEGREGATION",
   "pronunciations": "dɪˌsɛgrəˈgeɪʃən, ˌdiːsɛgrəˈgeɪʃən"
 },
 {
   "id": 2706,
   "word": "DISCOVER",
   "pronunciations": "dɪˈskʌvɝ"
 },
 {
   "id": 2707,
   "word": "DRAWING",
   "pronunciations": "ˈdrɔɪŋ"
 },
 {
   "id": 2708,
   "word": "E",
   "pronunciations": "ˈiː"
 },
 {
   "id": 2709,
   "word": "ELEVEN",
   "pronunciations": "ɪˈlɛvən, ˈiːlɛvən"
 },
 {
   "id": 2710,
   "word": "EXCEPTION",
   "pronunciations": "ɪkˈsɛpʃən"
 },
 {
   "id": 2711,
   "word": "EXISTED",
   "pronunciations": "ɪgˈzɪstəd"
 },
 {
   "id": 2712,
   "word": "FINGER",
   "pronunciations": "ˈfɪŋgɝ"
 },
 {
   "id": 2713,
   "word": "FOCUS",
   "pronunciations": "ˈfoʊkəs, ˈfoʊkɪs"
 },
 {
   "id": 2714,
   "word": "GLANCE",
   "pronunciations": "ˈglæns"
 },
 {
   "id": 2715,
   "word": "GOALS",
   "pronunciations": "ˈgoʊlz"
 },
 {
   "id": 2716,
   "word": "GRACE",
   "pronunciations": "ˈgreɪs"
 },
 {
   "id": 2717,
   "word": "GUIDANCE",
   "pronunciations": "ˈgaɪdəns"
 },
 {
   "id": 2718,
   "word": "HANDSOME",
   "pronunciations": "ˈhænsəm"
 },
 {
   "id": 2719,
   "word": "HAPPENS",
   "pronunciations": "ˈhæpənz"
 },
 {
   "id": 2720,
   "word": "HIGHWAY",
   "pronunciations": "ˈhaɪˌweɪ"
 },
 {
   "id": 2721,
   "word": "ILLINOIS",
   "pronunciations": "ˌɪləˈnɔɪ, ˌɪləˈnɔɪz"
 },
 {
   "id": 2722,
   "word": "IMPROVEMENT",
   "pronunciations": "ˌɪmˈpruːvmənt"
 },
 {
   "id": 2723,
   "word": "INDICATES",
   "pronunciations": "ˈɪndɪˌkeɪts"
 },
 {
   "id": 2724,
   "word": "INTENSE",
   "pronunciations": "ˌɪnˈtɛns"
 },
 {
   "id": 2725,
   "word": "JOY",
   "pronunciations": "ˈdʒɔɪ"
 },
 {
   "id": 2726,
   "word": "LABORATORY",
   "pronunciations": "ˈlæbrəˌtɔri"
 },
 {
   "id": 2727,
   "word": "LANGUAGES",
   "pronunciations": "ˈlæŋgwədʒəz, ˈlæŋgwɪdʒɪz"
 },
 {
   "id": 2728,
   "word": "LEGISLATIVE",
   "pronunciations": "ˈlɛdʒəˌsleɪtɪv"
 },
 {
   "id": 2729,
   "word": "MISSED",
   "pronunciations": "ˈmɪst"
 },
 {
   "id": 2730,
   "word": "NECESSITY",
   "pronunciations": "nəˈsɛsəti, nəˈsɛsɪti"
 },
 {
   "id": 2731,
   "word": "NEIGHBORS",
   "pronunciations": "ˈneɪbɝz"
 },
 {
   "id": 2732,
   "word": "NOTION",
   "pronunciations": "ˈnoʊʃən"
 },
 {
   "id": 2733,
   "word": "OBSERVATIONS",
   "pronunciations": "ˌɑːbzɝˈveɪʃənz"
 },
 {
   "id": 2734,
   "word": "ORLEANS",
   "pronunciations": "ˈɔrˌliːnz, ˌɔrˈliːnz"
 },
 {
   "id": 2735,
   "word": "PAINTED",
   "pronunciations": "ˈpeɪntəd, ˈpeɪntɪd, ˈpeɪnəd, ˈpeɪnɪd"
 },
 {
   "id": 2736,
   "word": "PAPA",
   "pronunciations": "ˈpɑːˌpə"
 },
 {
   "id": 2737,
   "word": "PARALLEL",
   "pronunciations": "ˈpɛrəˌlɛl"
 },
 {
   "id": 2738,
   "word": "PERMANENT",
   "pronunciations": "ˈpɝːmɑːˌnɛnt"
 },
 {
   "id": 2739,
   "word": "PERSONALLY",
   "pronunciations": "ˈpɝːsənəli"
 },
 {
   "id": 2740,
   "word": "POPE",
   "pronunciations": "ˈpoʊp"
 },
 {
   "id": 2741,
   "word": "PRESUMABLY",
   "pronunciations": "prəˈzuːməbli, prɪˈzuːməbli, priːˈzuːməbli"
 },
 {
   "id": 2742,
   "word": "PROMINENT",
   "pronunciations": "ˈprɑːmənənt"
 },
 {
   "id": 2743,
   "word": "PROOF",
   "pronunciations": "ˈpruːf"
 },
 {
   "id": 2744,
   "word": "REGARDING",
   "pronunciations": "rəˈgɑːrdɪŋ, rɪˈgɑːrdɪŋ"
 },
 {
   "id": 2745,
   "word": "REGIONS",
   "pronunciations": "ˈriːdʒənz"
 },
 {
   "id": 2746,
   "word": "RODE",
   "pronunciations": "ˈroʊd"
 },
 {
   "id": 2747,
   "word": "SENATOR",
   "pronunciations": "ˈsɛnətɝ"
 },
 {
   "id": 2748,
   "word": "SHARED",
   "pronunciations": "ˈʃɛrd"
 },
 {
   "id": 2749,
   "word": "SHEAR",
   "pronunciations": "ˈʃɪr"
 },
 {
   "id": 2750,
   "word": "SHOUTED",
   "pronunciations": "ˈʃaʊtəd, ˈʃaʊtɪd"
 },
 {
   "id": 2751,
   "word": "STEPPED",
   "pronunciations": "ˈstɛpt"
 },
 {
   "id": 2752,
   "word": "STRANGER",
   "pronunciations": "ˈstreɪndʒɝ"
 },
 {
   "id": 2753,
   "word": "STUDYING",
   "pronunciations": "ˈstʌdiːɪŋ"
 },
 {
   "id": 2754,
   "word": "TALENT",
   "pronunciations": "ˈtælənt"
 },
 {
   "id": 2755,
   "word": "THOROUGHLY",
   "pronunciations": "ˈθɝːoʊli"
 },
 {
   "id": 2756,
   "word": "THROWN",
   "pronunciations": "ˈθroʊn"
 },
 {
   "id": 2757,
   "word": "TOOL",
   "pronunciations": "ˈtuːl"
 },
 {
   "id": 2758,
   "word": "TREASURY",
   "pronunciations": "ˈtrɛʒɝi"
 },
 {
   "id": 2759,
   "word": "VISUAL",
   "pronunciations": "ˈvɪʒəwəl"
 },
 {
   "id": 2760,
   "word": "WALTER",
   "pronunciations": "ˈwɔltɝ"
 },
 {
   "id": 2761,
   "word": "WINSTON",
   "pronunciations": "ˈwɪnstən"
 },
 {
   "id": 2762,
   "word": "ACTS",
   "pronunciations": "ˈækts, ˈæks"
 },
 {
   "id": 2763,
   "word": "AGENTS",
   "pronunciations": "ˈeɪdʒənts"
 },
 {
   "id": 2764,
   "word": "ALLOTMENT",
   "pronunciations": "əˈlɑːtmənt"
 },
 {
   "id": 2765,
   "word": "ANYWHERE",
   "pronunciations": "ˈɛniːˌwɛr, ˈɛniːˌhwɛr"
 },
 {
   "id": 2766,
   "word": "ASSURED",
   "pronunciations": "əˈʃʊrd"
 },
 {
   "id": 2767,
   "word": "ATTRACTIVE",
   "pronunciations": "əˈtræktɪv"
 },
 {
   "id": 2768,
   "word": "AUTHORITIES",
   "pronunciations": "əˈθɔrətiːz"
 },
 {
   "id": 2769,
   "word": "CODE",
   "pronunciations": "ˈkoʊd"
 },
 {
   "id": 2770,
   "word": "COLLEGES",
   "pronunciations": "ˈkɑːlɪdʒɪz"
 },
 {
   "id": 2771,
   "word": "COMEDY",
   "pronunciations": "ˈkɑːmədi"
 },
 {
   "id": 2772,
   "word": "COMMUNISTS",
   "pronunciations": "ˈkɑːmjənəsts"
 },
 {
   "id": 2773,
   "word": "CONCERT",
   "pronunciations": "ˈkɑːnsɝt, kənˈsɝːt"
 },
 {
   "id": 2774,
   "word": "CONTRIBUTED",
   "pronunciations": "kənˈtrɪbjuːtɪd"
 },
 {
   "id": 2775,
   "word": "CONTROLLED",
   "pronunciations": "kənˈtroʊld"
 },
 {
   "id": 2776,
   "word": "COOPERATION",
   "pronunciations": "koʊˌɑːpɝˈeɪʃən, ˌkwɑːpɝˈeɪʃən, ˌkwɔpɝˈeɪʃən"
 },
 {
   "id": 2777,
   "word": "DEEPLY",
   "pronunciations": "ˈdiːpli"
 },
 {
   "id": 2778,
   "word": "DEFINED",
   "pronunciations": "dɪˈfaɪnd"
 },
 {
   "id": 2779,
   "word": "DERIVED",
   "pronunciations": "dɝˈaɪvd"
 },
 {
   "id": 2780,
   "word": "DESTROYED",
   "pronunciations": "dɪˈstrɔɪd"
 },
 {
   "id": 2781,
   "word": "DETERMINATION",
   "pronunciations": "dɪˌtɝːməˈneɪʃən"
 },
 {
   "id": 2782,
   "word": "EMERGENCY",
   "pronunciations": "ɪˈmɝːdʒənsi, ˈiːmɝdʒənsi"
 },
 {
   "id": 2783,
   "word": "ESTIMATE",
   "pronunciations": "ˈɛstəmət, ˈɛstəˌmeɪt"
 },
 {
   "id": 2784,
   "word": "FINISH",
   "pronunciations": "ˈfɪnɪʃ"
 },
 {
   "id": 2785,
   "word": "FOREVER",
   "pronunciations": "fɝˈɛvɝ"
 },
 {
   "id": 2786,
   "word": "FURNITURE",
   "pronunciations": "ˈfɝːnɪtʃɝ"
 },
 {
   "id": 2787,
   "word": "FURTHERMORE",
   "pronunciations": "ˈfɝːðɝˌmɔr"
 },
 {
   "id": 2788,
   "word": "GAINED",
   "pronunciations": "ˈgeɪnd"
 },
 {
   "id": 2789,
   "word": "GUEST",
   "pronunciations": "ˈgɛst"
 },
 {
   "id": 2790,
   "word": "HOLES",
   "pronunciations": "ˈhoʊlz"
 },
 {
   "id": 2791,
   "word": "HYDROGEN",
   "pronunciations": "ˈhaɪdrədʒən"
 },
 {
   "id": 2792,
   "word": "IMPROVE",
   "pronunciations": "ˌɪmˈpruːv"
 },
 {
   "id": 2793,
   "word": "INCH",
   "pronunciations": "ˈɪntʃ"
 },
 {
   "id": 2794,
   "word": "INTRODUCTION",
   "pronunciations": "ˌɪntrəˈdʌkʃən, ˌɪntroʊˈdʌkʃən"
 },
 {
   "id": 2795,
   "word": "JOINT",
   "pronunciations": "ˈdʒɔɪnt"
 },
 {
   "id": 2796,
   "word": "LAWRENCE",
   "pronunciations": "ˈlɔrəns"
 },
 {
   "id": 2797,
   "word": "LEGISLATURE",
   "pronunciations": "ˈlɛdʒəˌsleɪtʃɝ"
 },
 {
   "id": 2798,
   "word": "LISTENING",
   "pronunciations": "ˈlɪsənɪŋ, ˈlɪsnɪŋ"
 },
 {
   "id": 2799,
   "word": "MAD",
   "pronunciations": "ˈmæd"
 },
 {
   "id": 2800,
   "word": "MAGAZINE",
   "pronunciations": "ˈmægəˌziːn"
 },
 {
   "id": 2801,
   "word": "MANKIND",
   "pronunciations": "ˈmænˈkaɪnd"
 },
 {
   "id": 2802,
   "word": "MATURITY",
   "pronunciations": "məˈtʃʊrəti, mətˈjʊrɪti"
 },
 {
   "id": 2803,
   "word": "MISSISSIPPI",
   "pronunciations": "ˌmɪsɪˈsɪpi"
 },
 {
   "id": 2804,
   "word": "MYSTERY",
   "pronunciations": "ˈmɪstɝi"
 },
 {
   "id": 2805,
   "word": "NEUTRAL",
   "pronunciations": "ˈnuːtrəl"
 },
 {
   "id": 2806,
   "word": "OBJECTIVES",
   "pronunciations": "əbˈdʒɛktɪvz"
 },
 {
   "id": 2807,
   "word": "PROVISIONS",
   "pronunciations": "prəˈvɪʒənz"
 },
 {
   "id": 2808,
   "word": "RAYBURN",
   "pronunciations": "ˈreɪbɝn"
 },
 {
   "id": 2809,
   "word": "RECALL",
   "pronunciations": "ˈriːˌkɔl, rɪˈkɔl"
 },
 {
   "id": 2810,
   "word": "REPRESENTS",
   "pronunciations": "ˌrɛprəˈzɛnts, ˌrɛprɪˈzɛnts"
 },
 {
   "id": 2811,
   "word": "REVEALED",
   "pronunciations": "rɪˈviːld, riːˈviːld"
 },
 {
   "id": 2812,
   "word": "SATISFACTORY",
   "pronunciations": "ˌsætəsˈfæktri, ˌsætɪsˈfæktɝi"
 },
 {
   "id": 2813,
   "word": "SELECTION",
   "pronunciations": "səˈlɛkʃən"
 },
 {
   "id": 2814,
   "word": "SELF",
   "pronunciations": "ˈsɛlf"
 },
 {
   "id": 2815,
   "word": "SEVERE",
   "pronunciations": "səˈvɪr"
 },
 {
   "id": 2816,
   "word": "SLEEPING",
   "pronunciations": "ˈsliːpɪŋ"
 },
 {
   "id": 2817,
   "word": "SOLDIER",
   "pronunciations": "ˈsoʊldʒɝ"
 },
 {
   "id": 2818,
   "word": "STICK",
   "pronunciations": "ˈstɪk"
 },
 {
   "id": 2819,
   "word": "STRIKING",
   "pronunciations": "ˈstraɪkɪŋ"
 },
 {
   "id": 2820,
   "word": "TRANSFER",
   "pronunciations": "trænsˈfɝː, ˈtrænsfɝ"
 },
 {
   "id": 2821,
   "word": "TRIALS",
   "pronunciations": "ˈtraɪəlz, ˈtraɪlz"
 },
 {
   "id": 2822,
   "word": "TV",
   "pronunciations": "ˈtiːˈviː, ˌtɛləˈvɪʒən"
 },
 {
   "id": 2823,
   "word": "ACCOUNTS",
   "pronunciations": "əˈkaʊnts"
 },
 {
   "id": 2824,
   "word": "AGRICULTURAL",
   "pronunciations": "ˌægrɪˈkʌltʃɝəl"
 },
 {
   "id": 2825,
   "word": "ARRANGEMENTS",
   "pronunciations": "ɝˈeɪndʒmənts"
 },
 {
   "id": 2826,
   "word": "ATTEMPTS",
   "pronunciations": "əˈtɛmpts"
 },
 {
   "id": 2827,
   "word": "AXIS",
   "pronunciations": "ˈæksəs"
 },
 {
   "id": 2828,
   "word": "BRIEFLY",
   "pronunciations": "ˈbriːfli"
 },
 {
   "id": 2829,
   "word": "BRINGING",
   "pronunciations": "ˈbrɪŋɪŋ"
 },
 {
   "id": 2830,
   "word": "CANDIDATES",
   "pronunciations": "ˈkændədeɪts, ˈkænədɪts"
 },
 {
   "id": 2831,
   "word": "CLOUDS",
   "pronunciations": "ˈklaʊdz"
 },
 {
   "id": 2832,
   "word": "CONSUMER",
   "pronunciations": "kənˈsuːmɝ"
 },
 {
   "id": 2833,
   "word": "CONTAINS",
   "pronunciations": "kənˈteɪnz"
 },
 {
   "id": 2834,
   "word": "COPY",
   "pronunciations": "ˈkɑːpi"
 },
 {
   "id": 2835,
   "word": "CORRESPONDING",
   "pronunciations": "ˌkɔrəˈspɑːndɪŋ"
 },
 {
   "id": 2836,
   "word": "COTTON",
   "pronunciations": "ˈkɑːtən, ˈkɔtən"
 },
 {
   "id": 2837,
   "word": "DEFINITION",
   "pronunciations": "ˌdɛfəˈnɪʃən"
 },
 {
   "id": 2838,
   "word": "DESTRUCTION",
   "pronunciations": "dɪˈstrʌkʃən"
 },
 {
   "id": 2839,
   "word": "DISTRICTS",
   "pronunciations": "ˈdɪstrɪkts"
 },
 {
   "id": 2840,
   "word": "EARS",
   "pronunciations": "ˈɪrz, ˈiːrz"
 },
 {
   "id": 2841,
   "word": "EXPERIMENTAL",
   "pronunciations": "ɪkˌspɛrɪˈmɛntəl"
 },
 {
   "id": 2842,
   "word": "EXPERTS",
   "pronunciations": "ˈɛkspɝts"
 },
 {
   "id": 2843,
   "word": "FATHER'S",
   "pronunciations": "ˈfɑːðɝz"
 },
 {
   "id": 2844,
   "word": "FIFTH",
   "pronunciations": "ˈfɪfθ, ˈfɪθ"
 },
 {
   "id": 2845,
   "word": "FORGOTTEN",
   "pronunciations": "fɝˈgɑːtən, fɔrˈgɑːtən"
 },
 {
   "id": 2846,
   "word": "FOUNDATION",
   "pronunciations": "faʊnˈdeɪʃən"
 },
 {
   "id": 2847,
   "word": "GLAD",
   "pronunciations": "ˈglæd"
 },
 {
   "id": 2848,
   "word": "GOD'S",
   "pronunciations": "ˈgɑːdz"
 },
 {
   "id": 2849,
   "word": "HANDED",
   "pronunciations": "ˈhændəd, ˈhændɪd"
 },
 {
   "id": 2850,
   "word": "HANDLING",
   "pronunciations": "ˈhændlɪŋ, ˈhændəlɪŋ"
 },
 {
   "id": 2851,
   "word": "HAVEN'T",
   "pronunciations": "ˈhævənt, ˈhævən"
 },
 {
   "id": 2852,
   "word": "INEVITABLY",
   "pronunciations": "ˌɪˈnɛvətəbli"
 },
 {
   "id": 2853,
   "word": "INSTANT",
   "pronunciations": "ˈɪnstənt"
 },
 {
   "id": 2854,
   "word": "JAPAN",
   "pronunciations": "dʒəˈpæn"
 },
 {
   "id": 2855,
   "word": "KNEES",
   "pronunciations": "ˈniːz"
 },
 {
   "id": 2856,
   "word": "LEANED",
   "pronunciations": "ˈliːnd"
 },
 {
   "id": 2857,
   "word": "MAYOR",
   "pronunciations": "ˈmeɪɝ"
 },
 {
   "id": 2858,
   "word": "N",
   "pronunciations": "ˈɛn"
 },
 {
   "id": 2859,
   "word": "NEWSPAPERS",
   "pronunciations": "ˈnuːzˌpeɪpɝz"
 },
 {
   "id": 2860,
   "word": "OHIO",
   "pronunciations": "oʊˈhaɪoʊ"
 },
 {
   "id": 2861,
   "word": "ONSET",
   "pronunciations": "ˈɑːnˌsɛt, ˈɔnˌsɛt"
 },
 {
   "id": 2862,
   "word": "ORGANIC",
   "pronunciations": "ɔrˈgænɪk"
 },
 {
   "id": 2863,
   "word": "PALACE",
   "pronunciations": "ˈpæləs"
 },
 {
   "id": 2864,
   "word": "PAUL",
   "pronunciations": "ˈpɔl"
 },
 {
   "id": 2865,
   "word": "PIANO",
   "pronunciations": "piːˈænoʊ, piːˈænə"
 },
 {
   "id": 2866,
   "word": "PLEASANT",
   "pronunciations": "ˈplɛzənt"
 },
 {
   "id": 2867,
   "word": "PRESSURES",
   "pronunciations": "ˈprɛʃɝz"
 },
 {
   "id": 2868,
   "word": "PRIMITIVE",
   "pronunciations": "ˈprɪmətɪv, ˈprɪmɪtɪv"
 },
 {
   "id": 2869,
   "word": "PROCESSING",
   "pronunciations": "ˈprɑːsɛsɪŋ"
 },
 {
   "id": 2870,
   "word": "R",
   "pronunciations": "ˈɑːr"
 },
 {
   "id": 2871,
   "word": "RANDOM",
   "pronunciations": "ˈrændəm"
 },
 {
   "id": 2872,
   "word": "RECEPTION",
   "pronunciations": "rɪˈsɛpʃən, riːˈsɛpʃən"
 },
 {
   "id": 2873,
   "word": "REGARDLESS",
   "pronunciations": "rəˈgɑːrdləs"
 },
 {
   "id": 2874,
   "word": "RELATIONSHIPS",
   "pronunciations": "riːˈleɪʃənˌʃɪps"
 },
 {
   "id": 2875,
   "word": "REPRESENT",
   "pronunciations": "ˌrɛprəˈzɛnt, ˌrɛprɪˈzɛnt"
 },
 {
   "id": 2876,
   "word": "ROBINSON",
   "pronunciations": "ˈrɑːbənsən"
 },
 {
   "id": 2877,
   "word": "SACRED",
   "pronunciations": "ˈseɪkrəd, ˈseɪkrɪd"
 },
 {
   "id": 2878,
   "word": "SCHEDULED",
   "pronunciations": "ˈskɛdʒʊld, ˈskɛdʒuːld"
 },
 {
   "id": 2879,
   "word": "SERVING",
   "pronunciations": "ˈsɝːvɪŋ"
 },
 {
   "id": 2880,
   "word": "SHARPLY",
   "pronunciations": "ˈʃɑːrpli"
 },
 {
   "id": 2881,
   "word": "SIMULTANEOUSLY",
   "pronunciations": "ˌsaɪməlˈteɪniːəsli"
 },
 {
   "id": 2882,
   "word": "SISTER",
   "pronunciations": "ˈsɪstɝ"
 },
 {
   "id": 2883,
   "word": "SPECIFICALLY",
   "pronunciations": "spəˈsɪfɪkli"
 },
 {
   "id": 2884,
   "word": "STATE'S",
   "pronunciations": "ˈsteɪts"
 },
 {
   "id": 2885,
   "word": "SUDDEN",
   "pronunciations": "ˈsʌdən"
 },
 {
   "id": 2886,
   "word": "TEMPLE",
   "pronunciations": "ˈtɛmpəl"
 },
 {
   "id": 2887,
   "word": "THOMPSON",
   "pronunciations": "ˈtɑːmpsən, ˈtɑːmsən"
 },
 {
   "id": 2888,
   "word": "THYROID",
   "pronunciations": "ˈθaɪrɔɪd"
 },
 {
   "id": 2889,
   "word": "TONIGHT",
   "pronunciations": "təˈnaɪt, tuːˈnaɪt"
 },
 {
   "id": 2890,
   "word": "TRACK",
   "pronunciations": "ˈtræk"
 },
 {
   "id": 2891,
   "word": "TURNS",
   "pronunciations": "ˈtɝːnz"
 },
 {
   "id": 2892,
   "word": "VOICES",
   "pronunciations": "ˈvɔɪsəz, ˈvɔɪsɪz"
 },
 {
   "id": 2893,
   "word": "ACCOMPANIED",
   "pronunciations": "əˈkʌmpəniːd"
 },
 {
   "id": 2894,
   "word": "ADMIT",
   "pronunciations": "ədˈmɪt"
 },
 {
   "id": 2895,
   "word": "AIM",
   "pronunciations": "ˈeɪm"
 },
 {
   "id": 2896,
   "word": "ASSURE",
   "pronunciations": "əˈʃʊr"
 },
 {
   "id": 2897,
   "word": "ATOM",
   "pronunciations": "ˈætəm"
 },
 {
   "id": 2898,
   "word": "AUTHORIZED",
   "pronunciations": "ˈɔθɝˌaɪzd"
 },
 {
   "id": 2899,
   "word": "BANKS",
   "pronunciations": "ˈbæŋks"
 },
 {
   "id": 2900,
   "word": "BELONG",
   "pronunciations": "bɪˈlɔŋ"
 },
 {
   "id": 2901,
   "word": "BLOCKS",
   "pronunciations": "ˈblɑːks"
 },
 {
   "id": 2902,
   "word": "CHICKEN",
   "pronunciations": "ˈtʃɪkən"
 },
 {
   "id": 2903,
   "word": "CHOSE",
   "pronunciations": "ˈtʃoʊz"
 },
 {
   "id": 2904,
   "word": "CLEANING",
   "pronunciations": "ˈkliːnɪŋ"
 },
 {
   "id": 2905,
   "word": "COLONEL",
   "pronunciations": "ˈkɝːnəl"
 },
 {
   "id": 2906,
   "word": "COMFORTABLE",
   "pronunciations": "ˈkʌmfɝtəbəl"
 },
 {
   "id": 2907,
   "word": "CONSTRUCTED",
   "pronunciations": "kənˈstrʌktəd, kənˈstrʌktɪd"
 },
 {
   "id": 2908,
   "word": "CONTRIBUTION",
   "pronunciations": "ˌkɑːntrəˈbjuːʃən"
 },
 {
   "id": 2909,
   "word": "DEEPER",
   "pronunciations": "ˈdiːpɝ"
 },
 {
   "id": 2910,
   "word": "DEFINITE",
   "pronunciations": "ˈdɛfənət"
 },
 {
   "id": 2911,
   "word": "DELIVERED",
   "pronunciations": "dɪˈlɪvɝd"
 },
 {
   "id": 2912,
   "word": "DEVICES",
   "pronunciations": "dɪˈvaɪsəz, dɪˈvaɪsɪz"
 },
 {
   "id": 2913,
   "word": "DISTANT",
   "pronunciations": "ˈdɪstənt"
 },
 {
   "id": 2914,
   "word": "DRUNK",
   "pronunciations": "ˈdrʌŋk"
 },
 {
   "id": 2915,
   "word": "EDGES",
   "pronunciations": "ˈɛdʒəz, ˈɛdʒɪz"
 },
 {
   "id": 2916,
   "word": "EDITION",
   "pronunciations": "əˈdɪʃən, ɪˈdɪʃən"
 },
 {
   "id": 2917,
   "word": "EFFECTIVELY",
   "pronunciations": "ɪˈfɛktɪvli, ˈiːfɛktɪvli"
 },
 {
   "id": 2918,
   "word": "ENORMOUS",
   "pronunciations": "ɪˈnɔrməs, ɪˈnɔrmɪs, iːˈnɔrməs, iːˈnɔrmɪs"
 },
 {
   "id": 2919,
   "word": "FAIL",
   "pronunciations": "ˈfeɪl"
 },
 {
   "id": 2920,
   "word": "FEATURE",
   "pronunciations": "ˈfiːtʃɝ"
 },
 {
   "id": 2921,
   "word": "FOAM",
   "pronunciations": "ˈfoʊm"
 },
 {
   "id": 2922,
   "word": "FOOL",
   "pronunciations": "ˈfuːl"
 },
 {
   "id": 2923,
   "word": "FORMATION",
   "pronunciations": "fɔrˈmeɪʃən"
 },
 {
   "id": 2924,
   "word": "GATE",
   "pronunciations": "ˈgeɪt"
 },
 {
   "id": 2925,
   "word": "HARBOR",
   "pronunciations": "ˈhɑːrbɝ"
 },
 {
   "id": 2926,
   "word": "HOLMES",
   "pronunciations": "ˈhoʊmz, ˈhoʊlmz"
 },
 {
   "id": 2927,
   "word": "HURT",
   "pronunciations": "ˈhɝːt"
 },
 {
   "id": 2928,
   "word": "ILLUSION",
   "pronunciations": "ˌɪˈluːʒən"
 },
 {
   "id": 2929,
   "word": "ILLUSTRATED",
   "pronunciations": "ˈɪləˌstreɪtəd, ˈɪləˌstreɪtɪd"
 },
 {
   "id": 2930,
   "word": "IMAGES",
   "pronunciations": "ˈɪmədʒəz, ˈɪmɪdʒɪz"
 },
 {
   "id": 2931,
   "word": "INNOCENT",
   "pronunciations": "ˈɪnəsənt"
 },
 {
   "id": 2932,
   "word": "MAGIC",
   "pronunciations": "ˈmædʒɪk"
 },
 {
   "id": 2933,
   "word": "MALE",
   "pronunciations": "ˈmeɪl"
 },
 {
   "id": 2934,
   "word": "MIXED",
   "pronunciations": "ˈmɪkst"
 },
 {
   "id": 2935,
   "word": "MOOD",
   "pronunciations": "ˈmuːd"
 },
 {
   "id": 2936,
   "word": "NATION'S",
   "pronunciations": "ˈneɪʃənz"
 },
 {
   "id": 2937,
   "word": "NAVY",
   "pronunciations": "ˈneɪvi"
 },
 {
   "id": 2938,
   "word": "NOISE",
   "pronunciations": "ˈnɔɪz"
 },
 {
   "id": 2939,
   "word": "OCCASIONAL",
   "pronunciations": "ɔˈkeɪʒənəl"
 },
 {
   "id": 2940,
   "word": "OUTSTANDING",
   "pronunciations": "ˌaʊtˈstændɪŋ"
 },
 {
   "id": 2941,
   "word": "PAINT",
   "pronunciations": "ˈpeɪnt"
 },
 {
   "id": 2942,
   "word": "PLOT",
   "pronunciations": "ˈplɑːt"
 },
 {
   "id": 2943,
   "word": "PROFESSION",
   "pronunciations": "prəˈfɛʃən"
 },
 {
   "id": 2944,
   "word": "PUSH",
   "pronunciations": "ˈpʊʃ"
 },
 {
   "id": 2945,
   "word": "QUESTIONNAIRE",
   "pronunciations": "ˌkwɛstʃəˈnɛr"
 },
 {
   "id": 2946,
   "word": "READERS",
   "pronunciations": "ˈriːdɝz"
 },
 {
   "id": 2947,
   "word": "RELEASE",
   "pronunciations": "riːˈliːs"
 },
 {
   "id": 2948,
   "word": "RESERVE",
   "pronunciations": "rɪˈzɝːv, riːˈzɝːv"
 },
 {
   "id": 2949,
   "word": "RESULTED",
   "pronunciations": "rɪˈzʌltɪd, riːˈzʌltəd, riːˈzʌltɪd"
 },
 {
   "id": 2950,
   "word": "ROBERTS",
   "pronunciations": "ˈrɑːbɝts"
 },
 {
   "id": 2951,
   "word": "ROY",
   "pronunciations": "ˈrɔɪ"
 },
 {
   "id": 2952,
   "word": "SERVES",
   "pronunciations": "ˈsɝːvz"
 },
 {
   "id": 2953,
   "word": "SIGNED",
   "pronunciations": "ˈsaɪnd"
 },
 {
   "id": 2954,
   "word": "SKILLS",
   "pronunciations": "ˈskɪlz"
 },
 {
   "id": 2955,
   "word": "SPECIES",
   "pronunciations": "ˈspiːʃiːz"
 },
 {
   "id": 2956,
   "word": "SPOKEN",
   "pronunciations": "ˈspoʊkən"
 },
 {
   "id": 2957,
   "word": "STAINING",
   "pronunciations": "ˈsteɪnɪŋ"
 },
 {
   "id": 2958,
   "word": "STOMACH",
   "pronunciations": "ˈstʌmək"
 },
 {
   "id": 2959,
   "word": "STRONGER",
   "pronunciations": "ˈstrɔŋgɝ"
 },
 {
   "id": 2960,
   "word": "STRONGLY",
   "pronunciations": "ˈstrɔŋli"
 },
 {
   "id": 2961,
   "word": "SUPPER",
   "pronunciations": "ˈsʌpɝ"
 },
 {
   "id": 2962,
   "word": "SURVEY",
   "pronunciations": "sɝˈveɪ, ˈsɝːˌveɪ"
 },
 {
   "id": 2963,
   "word": "SUSAN",
   "pronunciations": "ˈsuːzən"
 },
 {
   "id": 2964,
   "word": "SWIMMING",
   "pronunciations": "ˈswɪmɪŋ"
 },
 {
   "id": 2965,
   "word": "TESTED",
   "pronunciations": "ˈtɛstɪd"
 },
 {
   "id": 2966,
   "word": "THANKS",
   "pronunciations": "ˈθæŋks"
 },
 {
   "id": 2967,
   "word": "TREMENDOUS",
   "pronunciations": "trəˈmɛndəs, trɪˈmɛndəs"
 },
 {
   "id": 2968,
   "word": "ACCURACY",
   "pronunciations": "ˈækjɝəsi"
 },
 {
   "id": 2969,
   "word": "AFFECTED",
   "pronunciations": "əˈfɛktɪd"
 },
 {
   "id": 2970,
   "word": "AREN'T",
   "pronunciations": "ˈɑːrənt, ˈɑːrnt"
 },
 {
   "id": 2971,
   "word": "ASSISTANT",
   "pronunciations": "əˈsɪstənt"
 },
 {
   "id": 2972,
   "word": "ATTENDED",
   "pronunciations": "əˈtɛndəd"
 },
 {
   "id": 2973,
   "word": "AUTOMATICALLY",
   "pronunciations": "ˌɔtəˈmætɪkli, ˌɔtoʊˈmætɪkli"
 },
 {
   "id": 2974,
   "word": "BAKER",
   "pronunciations": "ˈbeɪkɝ"
 },
 {
   "id": 2975,
   "word": "BEINGS",
   "pronunciations": "ˈbiːɪŋz"
 },
 {
   "id": 2976,
   "word": "BINOMIAL",
   "pronunciations": "baɪˈnoʊmiːəl"
 },
 {
   "id": 2977,
   "word": "BOMB",
   "pronunciations": "ˈbɑːm, ˈbɔm"
 },
 {
   "id": 2978,
   "word": "CAMERA",
   "pronunciations": "ˈkæmɝə, ˈkæmrə"
 },
 {
   "id": 2979,
   "word": "CARDS",
   "pronunciations": "ˈkɑːrdz"
 },
 {
   "id": 2980,
   "word": "CASH",
   "pronunciations": "ˈkæʃ"
 },
 {
   "id": 2981,
   "word": "CHALLENGE",
   "pronunciations": "ˈtʃæləndʒ"
 },
 {
   "id": 2982,
   "word": "CHARACTERS",
   "pronunciations": "ˈkærɪktɝz, ˈkɛrɪktɝz"
 },
 {
   "id": 2983,
   "word": "CLASSIC",
   "pronunciations": "ˈklæsɪk"
 },
 {
   "id": 2984,
   "word": "COATING",
   "pronunciations": "ˈkoʊtɪŋ"
 },
 {
   "id": 2985,
   "word": "COLUMNS",
   "pronunciations": "ˈkɑːləmz"
 },
 {
   "id": 2986,
   "word": "CONCLUSIONS",
   "pronunciations": "kənˈkluːʒənz"
 },
 {
   "id": 2987,
   "word": "CREW",
   "pronunciations": "ˈkruː"
 },
 {
   "id": 2988,
   "word": "DESIRABLE",
   "pronunciations": "dɪˈzaɪrəbəl, dɪˈzaɪɝəbəl"
 },
 {
   "id": 2989,
   "word": "DIRTY",
   "pronunciations": "ˈdɝːti"
 },
 {
   "id": 2990,
   "word": "DOORS",
   "pronunciations": "ˈdɔrz"
 },
 {
   "id": 2991,
   "word": "DRESSED",
   "pronunciations": "ˈdrɛst"
 },
 {
   "id": 2992,
   "word": "EQUIPPED",
   "pronunciations": "ɪˈkwɪpt"
 },
 {
   "id": 2993,
   "word": "ERROR",
   "pronunciations": "ˈɛrɝ"
 },
 {
   "id": 2994,
   "word": "EXTENSION",
   "pronunciations": "ɪkˈstɛnʃən"
 },
 {
   "id": 2995,
   "word": "F",
   "pronunciations": "ˈɛf"
 },
 {
   "id": 2996,
   "word": "FELLOWSHIP",
   "pronunciations": "ˈfɛloʊˌʃɪp"
 },
 {
   "id": 2997,
   "word": "FILLING",
   "pronunciations": "ˈfɪlɪŋ"
 },
 {
   "id": 2998,
   "word": "FOOTBALL",
   "pronunciations": "ˈfʊtˌbɔl"
 },
 {
   "id": 2999,
   "word": "FORTY",
   "pronunciations": "ˈfɔrti"
 },
 {
   "id": 3000,
   "word": "GUIDE",
   "pronunciations": "ˈgaɪd"
 },
 {
   "id": 3001,
   "word": "HOST",
   "pronunciations": "ˈhoʊst"
 },
 {
   "id": 3002,
   "word": "HURRY",
   "pronunciations": "ˈhɝːi"
 },
 {
   "id": 3003,
   "word": "INDUSTRIES",
   "pronunciations": "ˈɪndəstriːz"
 },
 {
   "id": 3004,
   "word": "INTENTION",
   "pronunciations": "ˌɪnˈtɛntʃən"
 },
 {
   "id": 3005,
   "word": "JACKSON",
   "pronunciations": "ˈdʒæksən"
 },
 {
   "id": 3006,
   "word": "JIM",
   "pronunciations": "ˈdʒɪm"
 },
 {
   "id": 3007,
   "word": "KINDS",
   "pronunciations": "ˈkaɪndz, ˈkaɪnz"
 },
 {
   "id": 3008,
   "word": "LICENSE",
   "pronunciations": "ˈlaɪsəns"
 },
 {
   "id": 3009,
   "word": "LYING",
   "pronunciations": "ˈlaɪɪŋ"
 },
 {
   "id": 3010,
   "word": "MANAGED",
   "pronunciations": "ˈmænədʒd, ˈmænɪdʒd"
 },
 {
   "id": 3011,
   "word": "MARIS",
   "pronunciations": "ˈmɑːrɪs"
 },
 {
   "id": 3012,
   "word": "MOTHER'S",
   "pronunciations": "ˈmʌðɝz"
 },
 {
   "id": 3013,
   "word": "MOVES",
   "pronunciations": "ˈmuːvz"
 },
 {
   "id": 3014,
   "word": "MULTIPLE",
   "pronunciations": "ˈmʌltəpəl"
 },
 {
   "id": 3015,
   "word": "NORMALLY",
   "pronunciations": "ˈnɔrməli, ˈnɔrmli"
 },
 {
   "id": 3016,
   "word": "OCCUPIED",
   "pronunciations": "ˈɑːkjəˌpaɪd"
 },
 {
   "id": 3017,
   "word": "OUTLOOK",
   "pronunciations": "ˈaʊtˌlʊk"
 },
 {
   "id": 3018,
   "word": "PAINTINGS",
   "pronunciations": "ˈpeɪntɪŋz, ˈpeɪnɪŋz"
 },
 {
   "id": 3019,
   "word": "PATIENTS",
   "pronunciations": "ˈpeɪʃənts, ˈpeɪʃənz"
 },
 {
   "id": 3020,
   "word": "PEOPLES",
   "pronunciations": "ˈpiːpəlz"
 },
 {
   "id": 3021,
   "word": "PETER",
   "pronunciations": "ˈpiːtɝ"
 },
 {
   "id": 3022,
   "word": "PRINTED",
   "pronunciations": "ˈprɪntəd, ˈprɪntɪd, ˈprɪnəd, ˈprɪnɪd"
 },
 {
   "id": 3023,
   "word": "RATIO",
   "pronunciations": "ˈreɪʃiːˌoʊ"
 },
 {
   "id": 3024,
   "word": "SATISFIED",
   "pronunciations": "ˈsætəsˌfaɪd, ˈsætɪsˌfaɪd"
 },
 {
   "id": 3025,
   "word": "SCHEDULE",
   "pronunciations": "ˈskɛdʒʊl, ˈskɛdʒuːl"
 },
 {
   "id": 3026,
   "word": "SCHOLARSHIP",
   "pronunciations": "ˈskɑːlɝˌʃɪp"
 },
 {
   "id": 3027,
   "word": "SCIENTISTS",
   "pronunciations": "ˈsaɪəntɪsts, ˈsaɪntɪsts, ˈsaɪntɪs, ˈsaɪəntɪs"
 },
 {
   "id": 3028,
   "word": "SEES",
   "pronunciations": "ˈsiːz"
 },
 {
   "id": 3029,
   "word": "SHADOW",
   "pronunciations": "ˈʃæˌdoʊ"
 },
 {
   "id": 3030,
   "word": "SIMILARLY",
   "pronunciations": "ˈsɪməlɝli"
 },
 {
   "id": 3031,
   "word": "SMILING",
   "pronunciations": "ˈsmaɪlɪŋ"
 },
 {
   "id": 3032,
   "word": "SPANISH",
   "pronunciations": "ˈspænɪʃ"
 },
 {
   "id": 3033,
   "word": "STORED",
   "pronunciations": "ˈstɔrd"
 },
 {
   "id": 3034,
   "word": "SUBSTANTIALLY",
   "pronunciations": "səbˈstænʃəli"
 },
 {
   "id": 3035,
   "word": "SUPPLIED",
   "pronunciations": "səˈplaɪd"
 },
 {
   "id": 3036,
   "word": "SYMBOLS",
   "pronunciations": "ˈsɪmbəlz"
 },
 {
   "id": 3037,
   "word": "SYMPATHY",
   "pronunciations": "ˈsɪmpəθi"
 },
 {
   "id": 3038,
   "word": "THANK",
   "pronunciations": "ˈθæŋk"
 },
 {
   "id": 3039,
   "word": "TOUGH",
   "pronunciations": "ˈtʌf"
 },
 {
   "id": 3040,
   "word": "VARIABLE",
   "pronunciations": "ˈvɛriːəbəl"
 },
 {
   "id": 3041,
   "word": "VISITING",
   "pronunciations": "ˈvɪzɪtɪŋ"
 },
 {
   "id": 3042,
   "word": "VISITORS",
   "pronunciations": "ˈvɪzɪtɝz"
 },
 {
   "id": 3043,
   "word": "WISE",
   "pronunciations": "ˈwaɪz"
 },
 {
   "id": 3044,
   "word": "WORSHIP",
   "pronunciations": "ˈwɝːʃəp, ˈwɝːʃɪp"
 },
 {
   "id": 3045,
   "word": "YOU'D",
   "pronunciations": "ˈjuːd, ˈjʊd"
 },
 {
   "id": 3046,
   "word": "ACCURATE",
   "pronunciations": "ˈækjɝət"
 },
 {
   "id": 3047,
   "word": "ADJUSTMENT",
   "pronunciations": "əˈdʒʌstmənt"
 },
 {
   "id": 3048,
   "word": "AFFECT",
   "pronunciations": "əˈfɛkt"
 },
 {
   "id": 3049,
   "word": "ATLANTA",
   "pronunciations": "ætˈlæntə"
 },
 {
   "id": 3050,
   "word": "BEER",
   "pronunciations": "ˈbɪr"
 },
 {
   "id": 3051,
   "word": "BENCH",
   "pronunciations": "ˈbɛntʃ"
 },
 {
   "id": 3052,
   "word": "BOMBS",
   "pronunciations": "ˈbɑːmz"
 },
 {
   "id": 3053,
   "word": "CALCULATED",
   "pronunciations": "ˈkælkjəˌleɪtəd, ˈkælkjəˌleɪtɪd"
 },
 {
   "id": 3054,
   "word": "CALM",
   "pronunciations": "ˈkɑːm, ˈkɑːlm"
 },
 {
   "id": 3055,
   "word": "CLAIMED",
   "pronunciations": "ˈkleɪmd"
 },
 {
   "id": 3056,
   "word": "CLARK",
   "pronunciations": "ˈklɑːrk"
 },
 {
   "id": 3057,
   "word": "CONSEQUENCES",
   "pronunciations": "ˈkɑːnsəˌkwɛnsəz"
 },
 {
   "id": 3058,
   "word": "CONTEXT",
   "pronunciations": "ˈkɑːntɛkst"
 },
 {
   "id": 3059,
   "word": "COUNTIES",
   "pronunciations": "ˈkaʊntiːz"
 },
 {
   "id": 3060,
   "word": "CRIME",
   "pronunciations": "ˈkraɪm"
 },
 {
   "id": 3061,
   "word": "DIGNITY",
   "pronunciations": "ˈdɪgnəti"
 },
 {
   "id": 3062,
   "word": "DISAPPEARED",
   "pronunciations": "ˌdɪsəˈpɪrd, ˌdɪsəˈpiːrd"
 },
 {
   "id": 3063,
   "word": "EGGS",
   "pronunciations": "ˈɛgz"
 },
 {
   "id": 3064,
   "word": "FISH",
   "pronunciations": "ˈfɪʃ"
 },
 {
   "id": 3065,
   "word": "FRUIT",
   "pronunciations": "ˈfruːt"
 },
 {
   "id": 3066,
   "word": "GRADE",
   "pronunciations": "ˈgreɪd"
 },
 {
   "id": 3067,
   "word": "HARRY",
   "pronunciations": "ˈhɛri"
 },
 {
   "id": 3068,
   "word": "HEIGHT",
   "pronunciations": "ˈhaɪt"
 },
 {
   "id": 3069,
   "word": "INSTALLED",
   "pronunciations": "ˌɪnˈstɔld"
 },
 {
   "id": 3070,
   "word": "INSTRUCTIONS",
   "pronunciations": "ˌɪnˈstrʌkʃənz"
 },
 {
   "id": 3071,
   "word": "ISOLATED",
   "pronunciations": "ˈaɪsəˌleɪtəd, ˈaɪsəˌleɪtɪd"
 },
 {
   "id": 3072,
   "word": "JANE",
   "pronunciations": "ˈdʒeɪn"
 },
 {
   "id": 3073,
   "word": "JUMPED",
   "pronunciations": "ˈdʒʌmpt"
 },
 {
   "id": 3074,
   "word": "KNEE",
   "pronunciations": "ˈniː"
 },
 {
   "id": 3075,
   "word": "LATEST",
   "pronunciations": "ˈleɪtəst"
 },
 {
   "id": 3076,
   "word": "LUMBER",
   "pronunciations": "ˈlʌmbɝ"
 },
 {
   "id": 3077,
   "word": "MATSUO",
   "pronunciations": "mɑːtˈsuːoʊ"
 },
 {
   "id": 3078,
   "word": "MEANWHILE",
   "pronunciations": "ˈmiːnˌwaɪl"
 },
 {
   "id": 3079,
   "word": "MEETS",
   "pronunciations": "ˈmiːts"
 },
 {
   "id": 3080,
   "word": "MYTH",
   "pronunciations": "ˈmɪθ"
 },
 {
   "id": 3081,
   "word": "NATIONALISM",
   "pronunciations": "ˈnæʃənəˌlɪzəm"
 },
 {
   "id": 3082,
   "word": "OUTPUT",
   "pronunciations": "ˈaʊtˌpʊt"
 },
 {
   "id": 3083,
   "word": "OWNERS",
   "pronunciations": "ˈoʊnɝz"
 },
 {
   "id": 3084,
   "word": "PAT",
   "pronunciations": "ˈpæt"
 },
 {
   "id": 3085,
   "word": "PATENT",
   "pronunciations": "ˈpætənt"
 },
 {
   "id": 3086,
   "word": "PERFORMED",
   "pronunciations": "pɝˈfɔrmd"
 },
 {
   "id": 3087,
   "word": "PHENOMENON",
   "pronunciations": "fəˈnɑːməˌnɑːn"
 },
 {
   "id": 3088,
   "word": "PONT",
   "pronunciations": "ˈpɑːnt"
 },
 {
   "id": 3089,
   "word": "PREPARE",
   "pronunciations": "priːˈpɛr"
 },
 {
   "id": 3090,
   "word": "PRESENTLY",
   "pronunciations": "ˈprɛzəntli"
 },
 {
   "id": 3091,
   "word": "PRESERVE",
   "pronunciations": "prəˈzɝːv, prɪˈzɝːv, priːˈzɝːv"
 },
 {
   "id": 3092,
   "word": "PROBABILITY",
   "pronunciations": "ˌprɑːbəˈbɪləˌtiː"
 },
 {
   "id": 3093,
   "word": "PRODUCING",
   "pronunciations": "prəˈduːsɪŋ"
 },
 {
   "id": 3094,
   "word": "RETIRED",
   "pronunciations": "rɪˈtaɪrd, riːˈtaɪɝd, riːˈtaɪrd"
 },
 {
   "id": 3095,
   "word": "RETURNING",
   "pronunciations": "rɪˈtɝːnɪŋ, riːˈtɝːnɪŋ"
 },
 {
   "id": 3096,
   "word": "REVENUE",
   "pronunciations": "ˈrɛvəˌnuː, ˈrɛvənˌjuː"
 },
 {
   "id": 3097,
   "word": "ROUTINE",
   "pronunciations": "ruːˈtiːn"
 },
 {
   "id": 3098,
   "word": "ROW",
   "pronunciations": "ˈroʊ"
 },
 {
   "id": 3099,
   "word": "SAD",
   "pronunciations": "ˈsæd"
 },
 {
   "id": 3100,
   "word": "SCIENCES",
   "pronunciations": "ˈsaɪənsəz, ˈsaɪənsɪz"
 },
 {
   "id": 3101,
   "word": "SEQUENCE",
   "pronunciations": "ˈsiːkwəns"
 },
 {
   "id": 3102,
   "word": "SOUNDED",
   "pronunciations": "ˈsaʊndɪd"
 },
 {
   "id": 3103,
   "word": "STANLEY",
   "pronunciations": "ˈstænli"
 },
 {
   "id": 3104,
   "word": "STORES",
   "pronunciations": "ˈstɔrz"
 },
 {
   "id": 3105,
   "word": "SYMBOLIC",
   "pronunciations": "sɪmˈbɑːlɪk"
 },
 {
   "id": 3106,
   "word": "SYMPATHETIC",
   "pronunciations": "ˌsɪmpəˈθɛtɪk"
 },
 {
   "id": 3107,
   "word": "TAPE",
   "pronunciations": "ˈteɪp"
 },
 {
   "id": 3108,
   "word": "TONGUE",
   "pronunciations": "ˈtʌŋ"
 },
 {
   "id": 3109,
   "word": "URGED",
   "pronunciations": "ˈɝːdʒd"
 },
 {
   "id": 3110,
   "word": "VEHICLE",
   "pronunciations": "ˈviːhɪkəl, ˈviːɪkəl"
 },
 {
   "id": 3111,
   "word": "VIRGIN",
   "pronunciations": "ˈvɝːdʒɪn"
 },
 {
   "id": 3112,
   "word": "WASHED",
   "pronunciations": "ˈwɑːʃt"
 },
 {
   "id": 3113,
   "word": "WASTE",
   "pronunciations": "ˈweɪst"
 },
 {
   "id": 3114,
   "word": "WEAR",
   "pronunciations": "ˈwɛr"
 },
 {
   "id": 3115,
   "word": "WEDNESDAY",
   "pronunciations": "ˈwɛnzdi, ˈwɛnzˌdeɪ"
 },
 {
   "id": 3116,
   "word": "WORLD'S",
   "pronunciations": "ˈwɝːldz"
 },
 {
   "id": 3117,
   "word": "WORRIED",
   "pronunciations": "ˈwɝːiːd"
 },
 {
   "id": 3118,
   "word": "YARD",
   "pronunciations": "ˈjɑːrd"
 },
 {
   "id": 3119,
   "word": "YIELD",
   "pronunciations": "ˈjiːld"
 },
 {
   "id": 3120,
   "word": "ABSTRACT",
   "pronunciations": "æbˈstrækt, ˈæbˌstrækt"
 },
 {
   "id": 3121,
   "word": "ALTERNATIVE",
   "pronunciations": "ɔlˈtɝːnətɪv"
 },
 {
   "id": 3122,
   "word": "ARRANGEMENT",
   "pronunciations": "ɝˈeɪndʒmənt"
 },
 {
   "id": 3123,
   "word": "BADLY",
   "pronunciations": "ˈbædli"
 },
 {
   "id": 3124,
   "word": "BENT",
   "pronunciations": "ˈbɛnt"
 },
 {
   "id": 3125,
   "word": "BIGGER",
   "pronunciations": "ˈbɪgɝ"
 },
 {
   "id": 3126,
   "word": "BLAME",
   "pronunciations": "ˈbleɪm"
 },
 {
   "id": 3127,
   "word": "BUS",
   "pronunciations": "ˈbʌs"
 },
 {
   "id": 3128,
   "word": "CANADA",
   "pronunciations": "ˈkænədə"
 },
 {
   "id": 3129,
   "word": "CANDIDATE",
   "pronunciations": "ˈkændədeɪt, ˈkænədɪt"
 },
 {
   "id": 3130,
   "word": "CLERK",
   "pronunciations": "ˈklɝːk"
 },
 {
   "id": 3131,
   "word": "CORN",
   "pronunciations": "ˈkɔrn"
 },
 {
   "id": 3132,
   "word": "CRAZY",
   "pronunciations": "ˈkreɪzi"
 },
 {
   "id": 3133,
   "word": "CURRENTLY",
   "pronunciations": "ˈkɝːəntli"
 },
 {
   "id": 3134,
   "word": "DECADES",
   "pronunciations": "dɛˈkeɪdz, ˈdɛkeɪdz"
 },
 {
   "id": 3135,
   "word": "DISPUTE",
   "pronunciations": "dɪsˈpjuːt"
 },
 {
   "id": 3136,
   "word": "DIVINE",
   "pronunciations": "dɪˈvaɪn"
 },
 {
   "id": 3137,
   "word": "DUTIES",
   "pronunciations": "ˈduːtiːz"
 },
 {
   "id": 3138,
   "word": "DYING",
   "pronunciations": "ˈdaɪɪŋ"
 },
 {
   "id": 3139,
   "word": "EMOTION",
   "pronunciations": "ɪˈmoʊʃən, ˈiːˌmoʊʃən"
 },
 {
   "id": 3140,
   "word": "EXPOSED",
   "pronunciations": "ɪkˈspoʊzd"
 },
 {
   "id": 3141,
   "word": "FACING",
   "pronunciations": "ˈfeɪsɪŋ"
 },
 {
   "id": 3142,
   "word": "FALLEN",
   "pronunciations": "ˈfɑːlən"
 },
 {
   "id": 3143,
   "word": "FINANCING",
   "pronunciations": "fəˈnænsɪŋ, fɪˈnænsɪŋ, faɪˈnænsɪŋ"
 },
 {
   "id": 3144,
   "word": "FINDINGS",
   "pronunciations": "ˈfaɪndɪŋz"
 },
 {
   "id": 3145,
   "word": "FOLK",
   "pronunciations": "ˈfoʊk"
 },
 {
   "id": 3146,
   "word": "FREQUENT",
   "pronunciations": "ˈfriːkwənt, ˈfriːˌkwɛnt"
 },
 {
   "id": 3147,
   "word": "GENUINE",
   "pronunciations": "ˈdʒɛnjuːən, ˈdʒɛnjuːˌaɪn"
 },
 {
   "id": 3148,
   "word": "GOLF",
   "pronunciations": "ˈgɑːlf, ˈgɔlf"
 },
 {
   "id": 3149,
   "word": "HARVARD",
   "pronunciations": "ˈhɑːrvɝd"
 },
 {
   "id": 3150,
   "word": "HUNTING",
   "pronunciations": "ˈhʌntɪŋ"
 },
 {
   "id": 3151,
   "word": "ITALY",
   "pronunciations": "ˈɪtəli"
 },
 {
   "id": 3152,
   "word": "JOHNSON",
   "pronunciations": "ˈdʒɑːnsən"
 },
 {
   "id": 3153,
   "word": "KEYS",
   "pronunciations": "ˈkiːz"
 },
 {
   "id": 3154,
   "word": "LEE",
   "pronunciations": "ˈliː"
 },
 {
   "id": 3155,
   "word": "LISTS",
   "pronunciations": "ˈlɪsts"
 },
 {
   "id": 3156,
   "word": "LOGICAL",
   "pronunciations": "ˈlɑːdʒɪkəl"
 },
 {
   "id": 3157,
   "word": "MEASUREMENT",
   "pronunciations": "ˈmɛʒɝmənt"
 },
 {
   "id": 3158,
   "word": "MECHANICAL",
   "pronunciations": "məˈkænɪkəl"
 },
 {
   "id": 3159,
   "word": "METROPOLITAN",
   "pronunciations": "ˌmɛtrəˈpɑːlətən"
 },
 {
   "id": 3160,
   "word": "MISTAKE",
   "pronunciations": "mɪˈsteɪk"
 },
 {
   "id": 3161,
   "word": "NET",
   "pronunciations": "ˈnɛt"
 },
 {
   "id": 3162,
   "word": "OCEAN",
   "pronunciations": "ˈoʊʃən"
 },
 {
   "id": 3163,
   "word": "OPENLY",
   "pronunciations": "ˈoʊpənli"
 },
 {
   "id": 3164,
   "word": "OWNED",
   "pronunciations": "ˈoʊnd"
 },
 {
   "id": 3165,
   "word": "PENCIL",
   "pronunciations": "ˈpɛnsəl"
 },
 {
   "id": 3166,
   "word": "PHRASE",
   "pronunciations": "ˈfreɪz"
 },
 {
   "id": 3167,
   "word": "PRESIDENTIAL",
   "pronunciations": "ˌprɛzɪˈdɛnʃəl"
 },
 {
   "id": 3168,
   "word": "PROTECT",
   "pronunciations": "prəˈtɛkt"
 },
 {
   "id": 3169,
   "word": "QUARTER",
   "pronunciations": "ˈkwɔrtɝ"
 },
 {
   "id": 3170,
   "word": "RAISING",
   "pronunciations": "ˈreɪzɪŋ"
 },
 {
   "id": 3171,
   "word": "REALISTIC",
   "pronunciations": "ˌriːəˈlɪstɪk"
 },
 {
   "id": 3172,
   "word": "REASONABLY",
   "pronunciations": "ˈriːzənəbli"
 },
 {
   "id": 3173,
   "word": "RECEIVING",
   "pronunciations": "rəˈsiːvɪŋ, rɪˈsiːvɪŋ, riːˈsiːvɪŋ"
 },
 {
   "id": 3174,
   "word": "REPORTERS",
   "pronunciations": "rɪˈpɔrtɝz"
 },
 {
   "id": 3175,
   "word": "RETURNS",
   "pronunciations": "rɪˈtɝːnz, riːˈtɝːnz"
 },
 {
   "id": 3176,
   "word": "ROLES",
   "pronunciations": "ˈroʊlz"
 },
 {
   "id": 3177,
   "word": "ROLL",
   "pronunciations": "ˈroʊl"
 },
 {
   "id": 3178,
   "word": "SAMUEL",
   "pronunciations": "ˈsæmjuːl"
 },
 {
   "id": 3179,
   "word": "SELDOM",
   "pronunciations": "ˈsɛldəm"
 },
 {
   "id": 3180,
   "word": "SENDING",
   "pronunciations": "ˈsɛndɪŋ"
 },
 {
   "id": 3181,
   "word": "SENIOR",
   "pronunciations": "ˈsiːnjɝ"
 },
 {
   "id": 3182,
   "word": "SENTENCE",
   "pronunciations": "ˈsɛntəns"
 },
 {
   "id": 3183,
   "word": "SHORTLY",
   "pronunciations": "ˈʃɔrtli"
 },
 {
   "id": 3184,
   "word": "SING",
   "pronunciations": "ˈsɪŋ"
 },
 {
   "id": 3185,
   "word": "SMELL",
   "pronunciations": "ˈsmɛl"
 },
 {
   "id": 3186,
   "word": "STRETCHED",
   "pronunciations": "ˈstrɛtʃt"
 },
 {
   "id": 3187,
   "word": "SUGAR",
   "pronunciations": "ˈʃʊgɝ"
 },
 {
   "id": 3188,
   "word": "SUGGESTION",
   "pronunciations": "səˈdʒɛstʃən"
 },
 {
   "id": 3189,
   "word": "SUITABLE",
   "pronunciations": "ˈsuːtəbəl"
 },
 {
   "id": 3190,
   "word": "SWEPT",
   "pronunciations": "ˈswɛpt"
 },
 {
   "id": 3191,
   "word": "TEARS",
   "pronunciations": "ˈtɛrz, ˈtɪrz"
 },
 {
   "id": 3192,
   "word": "TELLS",
   "pronunciations": "ˈtɛlz"
 },
 {
   "id": 3193,
   "word": "TENDS",
   "pronunciations": "ˈtɛndz"
 },
 {
   "id": 3194,
   "word": "THEREBY",
   "pronunciations": "ˈðɛrˈbaɪ"
 },
 {
   "id": 3195,
   "word": "TIED",
   "pronunciations": "ˈtaɪd"
 },
 {
   "id": 3196,
   "word": "TOOLS",
   "pronunciations": "ˈtuːlz"
 },
 {
   "id": 3197,
   "word": "VARY",
   "pronunciations": "ˈvɛri"
 },
 {
   "id": 3198,
   "word": "VISIBLE",
   "pronunciations": "ˈvɪzəbəl"
 },
 {
   "id": 3199,
   "word": "WE'VE",
   "pronunciations": "ˈwiːv"
 },
 {
   "id": 3200,
   "word": "WORST",
   "pronunciations": "ˈwɝːst"
 },
 {
   "id": 3201,
   "word": "ACCIDENT",
   "pronunciations": "ˈæksədənt"
 },
 {
   "id": 3202,
   "word": "ADJUSTED",
   "pronunciations": "əˈdʒʌstɪd"
 },
 {
   "id": 3203,
   "word": "ADMISSION",
   "pronunciations": "ædˈmɪʃən, ədˈmɪʃən"
 },
 {
   "id": 3204,
   "word": "ADVISED",
   "pronunciations": "ædˈvaɪzd, ədˈvaɪzd"
 },
 {
   "id": 3205,
   "word": "AFFAIR",
   "pronunciations": "əˈfɛr"
 },
 {
   "id": 3206,
   "word": "ALERT",
   "pronunciations": "əˈlɝːt"
 },
 {
   "id": 3207,
   "word": "ANDY",
   "pronunciations": "ˈændi"
 },
 {
   "id": 3208,
   "word": "ARTISTIC",
   "pronunciations": "ɑːrˈtɪstɪk"
 },
 {
   "id": 3209,
   "word": "ATTEMPTED",
   "pronunciations": "əˈtɛmptəd"
 },
 {
   "id": 3210,
   "word": "BENEFITS",
   "pronunciations": "ˈbɛnəfɪts"
 },
 {
   "id": 3211,
   "word": "BLOW",
   "pronunciations": "ˈbloʊ"
 },
 {
   "id": 3212,
   "word": "BONE",
   "pronunciations": "ˈboʊn"
 },
 {
   "id": 3213,
   "word": "BRANCH",
   "pronunciations": "ˈbræntʃ"
 },
 {
   "id": 3214,
   "word": "BRANCHES",
   "pronunciations": "ˈbræntʃəz, ˈbræntʃɪz"
 },
 {
   "id": 3215,
   "word": "BRIDE",
   "pronunciations": "ˈbraɪd"
 },
 {
   "id": 3216,
   "word": "BURST",
   "pronunciations": "ˈbɝːst"
 },
 {
   "id": 3217,
   "word": "CAMPUS",
   "pronunciations": "ˈkæmpəs"
 },
 {
   "id": 3218,
   "word": "CATHOLICS",
   "pronunciations": "ˈkæθlɪks"
 },
 {
   "id": 3219,
   "word": "CHARTER",
   "pronunciations": "ˈtʃɑːrtɝ"
 },
 {
   "id": 3220,
   "word": "CHILD'S",
   "pronunciations": "ˈtʃaɪldz"
 },
 {
   "id": 3221,
   "word": "CHLORINE",
   "pronunciations": "ˈklɔriːn"
 },
 {
   "id": 3222,
   "word": "CLASSICAL",
   "pronunciations": "ˈklæsɪkəl"
 },
 {
   "id": 3223,
   "word": "CONNECTED",
   "pronunciations": "kəˈnɛktɪd"
 },
 {
   "id": 3224,
   "word": "DAMAGE",
   "pronunciations": "ˈdæmədʒ, ˈdæmɪdʒ"
 },
 {
   "id": 3225,
   "word": "DEMONSTRATED",
   "pronunciations": "ˈdɛmənˌstreɪtəd, ˈdɛmənˌstreɪtɪd"
 },
 {
   "id": 3226,
   "word": "DETERMINING",
   "pronunciations": "dɪˈtɝːmənɪŋ"
 },
 {
   "id": 3227,
   "word": "DRILL",
   "pronunciations": "ˈdrɪl"
 },
 {
   "id": 3228,
   "word": "ELECTED",
   "pronunciations": "ɪˈlɛktəd, ɪˈlɛktɪd"
 },
 {
   "id": 3229,
   "word": "ENGINEERS",
   "pronunciations": "ˈɛndʒəˈnɪrz"
 },
 {
   "id": 3230,
   "word": "EQUATION",
   "pronunciations": "ɪˈkweɪʒən"
 },
 {
   "id": 3231,
   "word": "EXAMINE",
   "pronunciations": "ɪgˈzæmɪn"
 },
 {
   "id": 3232,
   "word": "FALLING",
   "pronunciations": "ˈfɑːlɪŋ"
 },
 {
   "id": 3233,
   "word": "FARMERS",
   "pronunciations": "ˈfɑːrmɝz"
 },
 {
   "id": 3234,
   "word": "FATE",
   "pronunciations": "ˈfeɪt"
 },
 {
   "id": 3235,
   "word": "FAVORABLE",
   "pronunciations": "ˈfeɪvɝəbəl, ˈfeɪvrəbəl"
 },
 {
   "id": 3236,
   "word": "FEWER",
   "pronunciations": "ˈfjuːɝ"
 },
 {
   "id": 3237,
   "word": "FILED",
   "pronunciations": "ˈfaɪld"
 },
 {
   "id": 3238,
   "word": "FLY",
   "pronunciations": "ˈflaɪ"
 },
 {
   "id": 3239,
   "word": "FUNERAL",
   "pronunciations": "ˈfjuːnɝəl"
 },
 {
   "id": 3240,
   "word": "GIFT",
   "pronunciations": "ˈgɪft"
 },
 {
   "id": 3241,
   "word": "GRAVE",
   "pronunciations": "ˈgreɪv"
 },
 {
   "id": 3242,
   "word": "GUILT",
   "pronunciations": "ˈgɪlt"
 },
 {
   "id": 3243,
   "word": "HARMONY",
   "pronunciations": "ˈhɑːrməni"
 },
 {
   "id": 3244,
   "word": "HEALTHY",
   "pronunciations": "ˈhɛlθi"
 },
 {
   "id": 3245,
   "word": "INEVITABLE",
   "pronunciations": "ˌɪˈnɛvətəbəl"
 },
 {
   "id": 3246,
   "word": "INTERVIEW",
   "pronunciations": "ˈɪntɝvˌjuː"
 },
 {
   "id": 3247,
   "word": "INVOLVING",
   "pronunciations": "ˌɪnˈvɑːlvɪŋ"
 },
 {
   "id": 3248,
   "word": "JACKET",
   "pronunciations": "ˈdʒækət, ˈdʒækɪt"
 },
 {
   "id": 3249,
   "word": "JESS",
   "pronunciations": "ˈdʒɛs"
 },
 {
   "id": 3250,
   "word": "LEADS",
   "pronunciations": "ˈliːdz"
 },
 {
   "id": 3251,
   "word": "LUNCH",
   "pronunciations": "ˈlʌntʃ"
 },
 {
   "id": 3252,
   "word": "MASSIVE",
   "pronunciations": "ˈmæsɪv"
 },
 {
   "id": 3253,
   "word": "MATCHING",
   "pronunciations": "ˈmætʃɪŋ"
 },
 {
   "id": 3254,
   "word": "MISSING",
   "pronunciations": "ˈmɪsɪŋ"
 },
 {
   "id": 3255,
   "word": "MOUNTAIN",
   "pronunciations": "ˈmaʊntən"
 },
 {
   "id": 3256,
   "word": "NAMELY",
   "pronunciations": "ˈneɪmli"
 },
 {
   "id": 3257,
   "word": "NAVAL",
   "pronunciations": "ˈneɪvəl"
 },
 {
   "id": 3258,
   "word": "NIGHTS",
   "pronunciations": "ˈnaɪts"
 },
 {
   "id": 3259,
   "word": "OWNER",
   "pronunciations": "ˈoʊnɝ"
 },
 {
   "id": 3260,
   "word": "PARKED",
   "pronunciations": "ˈpɑːrkt"
 },
 {
   "id": 3261,
   "word": "PATHOLOGY",
   "pronunciations": "pəˈθɑːlədʒi"
 },
 {
   "id": 3262,
   "word": "PERFORMANCES",
   "pronunciations": "pɝˈfɔrmənsəz, pɝˈfɔrmənsɪz"
 },
 {
   "id": 3263,
   "word": "POLAND",
   "pronunciations": "ˈpoʊlənd"
 },
 {
   "id": 3264,
   "word": "PRECISE",
   "pronunciations": "prɪˈsaɪs, priːˈsaɪs"
 },
 {
   "id": 3265,
   "word": "PRESENTATION",
   "pronunciations": "ˌprɛzənˈteɪʃən"
 },
 {
   "id": 3266,
   "word": "PRESENTS",
   "pronunciations": "ˈprɛzənts, priːˈzɛnts"
 },
 {
   "id": 3267,
   "word": "PRINCE",
   "pronunciations": "ˈprɪns"
 },
 {
   "id": 3268,
   "word": "QUANTITY",
   "pronunciations": "ˈkwɑːntəti"
 },
 {
   "id": 3269,
   "word": "RECTOR",
   "pronunciations": "ˈrɛktɝ"
 },
 {
   "id": 3270,
   "word": "REJECTED",
   "pronunciations": "rɪˈdʒɛktɪd, riːˈdʒɛktəd, riːˈdʒɛktɪd"
 },
 {
   "id": 3271,
   "word": "RICE",
   "pronunciations": "ˈraɪs"
 },
 {
   "id": 3272,
   "word": "SCHEME",
   "pronunciations": "ˈskiːm"
 },
 {
   "id": 3273,
   "word": "SLAVERY",
   "pronunciations": "ˈsleɪvɝi"
 },
 {
   "id": 3274,
   "word": "STEMS",
   "pronunciations": "ˈstɛmz"
 },
 {
   "id": 3275,
   "word": "STRICTLY",
   "pronunciations": "ˈstrɪktli"
 },
 {
   "id": 3276,
   "word": "SUBSTANCE",
   "pronunciations": "ˈsʌbstəns"
 },
 {
   "id": 3277,
   "word": "SUCCEEDED",
   "pronunciations": "səkˈsiːdəd, səkˈsiːdɪd"
 },
 {
   "id": 3278,
   "word": "SUFFER",
   "pronunciations": "ˈsʌfɝ"
 },
 {
   "id": 3279,
   "word": "SURVIVE",
   "pronunciations": "sɝˈvaɪv"
 },
 {
   "id": 3280,
   "word": "SWIFT",
   "pronunciations": "ˈswɪft"
 },
 {
   "id": 3281,
   "word": "SYMPHONY",
   "pronunciations": "ˈsɪmfəni"
 },
 {
   "id": 3282,
   "word": "THERMAL",
   "pronunciations": "ˈθɝːməl"
 },
 {
   "id": 3283,
   "word": "THURSDAY",
   "pronunciations": "ˈθɝːzˌdeɪ, ˈθɝːzdi"
 },
 {
   "id": 3284,
   "word": "TRAGIC",
   "pronunciations": "ˈtrædʒɪk"
 },
 {
   "id": 3285,
   "word": "UNFORTUNATELY",
   "pronunciations": "ənˈfɔrtʃənətli, ənˈfɔrtʃuːnətli"
 },
 {
   "id": 3286,
   "word": "VIOLENT",
   "pronunciations": "ˈvaɪələnt"
 },
 {
   "id": 3287,
   "word": "WASH",
   "pronunciations": "ˈwɑːʃ"
 },
 {
   "id": 3288,
   "word": "AWARENESS",
   "pronunciations": "əˈwɛrnəs"
 },
 {
   "id": 3289,
   "word": "CASTRO",
   "pronunciations": "ˈkæstroʊ"
 },
 {
   "id": 3290,
   "word": "CHANDLER",
   "pronunciations": "ˈtʃændlɝ"
 },
 {
   "id": 3291,
   "word": "CIRCLES",
   "pronunciations": "ˈsɝːkəlz"
 },
 {
   "id": 3292,
   "word": "COAL",
   "pronunciations": "ˈkoʊl"
 },
 {
   "id": 3293,
   "word": "COLLECTIVE",
   "pronunciations": "kəˈlɛktɪv"
 },
 {
   "id": 3294,
   "word": "CONCEPTION",
   "pronunciations": "kənˈsɛpʃən"
 },
 {
   "id": 3295,
   "word": "CONCLUDED",
   "pronunciations": "kənˈkluːdəd, kənˈkluːdɪd"
 },
 {
   "id": 3296,
   "word": "CONFRONTED",
   "pronunciations": "kənˈfrʌntəd, kənˈfrʌntɪd"
 },
 {
   "id": 3297,
   "word": "COOKING",
   "pronunciations": "ˈkʊkɪŋ"
 },
 {
   "id": 3298,
   "word": "COURAGE",
   "pronunciations": "ˈkɝːɪdʒ"
 },
 {
   "id": 3299,
   "word": "COVERING",
   "pronunciations": "ˈkʌvɝɪŋ, ˈkʌvrɪŋ"
 },
 {
   "id": 3300,
   "word": "COVERS",
   "pronunciations": "ˈkʌvɝz"
 },
 {
   "id": 3301,
   "word": "CROWDED",
   "pronunciations": "ˈkraʊdəd, ˈkraʊdɪd"
 },
 {
   "id": 3302,
   "word": "CURT",
   "pronunciations": "ˈkɝːt"
 },
 {
   "id": 3303,
   "word": "DAMN",
   "pronunciations": "ˈdæm"
 },
 {
   "id": 3304,
   "word": "DEBATE",
   "pronunciations": "dəˈbeɪt"
 },
 {
   "id": 3305,
   "word": "DEPENDING",
   "pronunciations": "dɪˈpɛndɪŋ"
 },
 {
   "id": 3306,
   "word": "DISCUSSIONS",
   "pronunciations": "dɪˈskʌʃənz"
 },
 {
   "id": 3307,
   "word": "EASTERN",
   "pronunciations": "ˈiːstɝn"
 },
 {
   "id": 3308,
   "word": "EATING",
   "pronunciations": "ˈiːtɪŋ"
 },
 {
   "id": 3309,
   "word": "EFFECTIVENESS",
   "pronunciations": "ɪˈfɛktɪvnəs, ˈiːfɛktɪvnəs"
 },
 {
   "id": 3310,
   "word": "EFFICIENT",
   "pronunciations": "ɪˈfɪʃənt"
 },
 {
   "id": 3311,
   "word": "ELABORATE",
   "pronunciations": "ɪˈlæbrət, ɪˈlæbɝˌeɪt"
 },
 {
   "id": 3312,
   "word": "ELECTRONICS",
   "pronunciations": "ˌɪˌlɛkˈtrɑːnɪks"
 },
 {
   "id": 3313,
   "word": "EMISSION",
   "pronunciations": "ɪˈmɪʃən"
 },
 {
   "id": 3314,
   "word": "EXCITEMENT",
   "pronunciations": "ɪkˈsaɪtmənt"
 },
 {
   "id": 3315,
   "word": "FACTORY",
   "pronunciations": "ˈfæktɝi"
 },
 {
   "id": 3316,
   "word": "FALLS",
   "pronunciations": "ˈfɔlz"
 },
 {
   "id": 3317,
   "word": "FARTHER",
   "pronunciations": "ˈfɑːrðɝ"
 },
 {
   "id": 3318,
   "word": "FISHING",
   "pronunciations": "ˈfɪʃɪŋ"
 },
 {
   "id": 3319,
   "word": "GARDENS",
   "pronunciations": "ˈgɑːrdənz"
 },
 {
   "id": 3320,
   "word": "GATHERED",
   "pronunciations": "ˈgæðɝd"
 },
 {
   "id": 3321,
   "word": "GESTURE",
   "pronunciations": "ˈdʒɛstʃɝ"
 },
 {
   "id": 3322,
   "word": "GORTON",
   "pronunciations": "ˈgɔrtən"
 },
 {
   "id": 3323,
   "word": "HAROLD",
   "pronunciations": "ˈhɛrəld"
 },
 {
   "id": 3324,
   "word": "HOUSEHOLD",
   "pronunciations": "ˈhaʊsˌhoʊld"
 },
 {
   "id": 3325,
   "word": "HOWARD",
   "pronunciations": "ˈhaʊɝd"
 },
 {
   "id": 3326,
   "word": "INADEQUATE",
   "pronunciations": "ˌɪˈnædəkwət, ˌɪˈnædəˌkweɪt"
 },
 {
   "id": 3327,
   "word": "INDIANS",
   "pronunciations": "ˈɪndiːənz"
 },
 {
   "id": 3328,
   "word": "INITIATIVE",
   "pronunciations": "ˌɪˈnɪʃətɪv, ˌɪˈnɪʃjətɪv"
 },
 {
   "id": 3329,
   "word": "KIDS",
   "pronunciations": "ˈkɪdz"
 },
 {
   "id": 3330,
   "word": "LACKING",
   "pronunciations": "ˈlækɪŋ"
 },
 {
   "id": 3331,
   "word": "LOANS",
   "pronunciations": "ˈloʊnz"
 },
 {
   "id": 3332,
   "word": "LONG-TERM",
   "pronunciations": "ˈlɔŋˈtɝːm"
 },
 {
   "id": 3333,
   "word": "MILLS",
   "pronunciations": "ˈmɪlz"
 },
 {
   "id": 3334,
   "word": "MISSILES",
   "pronunciations": "ˈmɪsəlz"
 },
 {
   "id": 3335,
   "word": "MUD",
   "pronunciations": "ˈmʌd"
 },
 {
   "id": 3336,
   "word": "MUSEUM",
   "pronunciations": "mjuːˈziːəm, ˈmjuːziːəm"
 },
 {
   "id": 3337,
   "word": "NAKED",
   "pronunciations": "ˈneɪkəd"
 },
 {
   "id": 3338,
   "word": "PARTNER",
   "pronunciations": "ˈpɑːrtnɝ"
 },
 {
   "id": 3339,
   "word": "PLASTIC",
   "pronunciations": "ˈplæstɪk"
 },
 {
   "id": 3340,
   "word": "POETS",
   "pronunciations": "ˈpoʊəts"
 },
 {
   "id": 3341,
   "word": "PROMOTE",
   "pronunciations": "prəˈmoʊt"
 },
 {
   "id": 3342,
   "word": "REFLECTION",
   "pronunciations": "rəˈflɛkʃən, rɪˈflɛkʃən"
 },
 {
   "id": 3343,
   "word": "REMARKED",
   "pronunciations": "rɪˈmɑːrkt, riːˈmɑːrkt"
 },
 {
   "id": 3344,
   "word": "REMOTE",
   "pronunciations": "rɪˈmoʊt, riːˈmoʊt"
 },
 {
   "id": 3345,
   "word": "ROMANTIC",
   "pronunciations": "roʊˈmæntɪk"
 },
 {
   "id": 3346,
   "word": "SALVATION",
   "pronunciations": "sælˈveɪʃən"
 },
 {
   "id": 3347,
   "word": "SCOTTY",
   "pronunciations": "ˈskɑːti"
 },
 {
   "id": 3348,
   "word": "SHOUTING",
   "pronunciations": "ˈʃaʊtɪŋ"
 },
 {
   "id": 3349,
   "word": "SKYWAVE",
   "pronunciations": "ˈskaɪˌweɪv"
 },
 {
   "id": 3350,
   "word": "SLIPPED",
   "pronunciations": "ˈslɪpt"
 },
 {
   "id": 3351,
   "word": "SO-CALLED",
   "pronunciations": "ˈsoʊˈkɔld"
 },
 {
   "id": 3352,
   "word": "SPOTS",
   "pronunciations": "ˈspɑːts"
 },
 {
   "id": 3353,
   "word": "STUFF",
   "pronunciations": "ˈstʌf"
 },
 {
   "id": 3354,
   "word": "SURVIVAL",
   "pronunciations": "sɝˈvaɪvəl"
 },
 {
   "id": 3355,
   "word": "TEMPORARY",
   "pronunciations": "ˈtɛmpɝˌɛri"
 },
 {
   "id": 3356,
   "word": "TESTING",
   "pronunciations": "ˈtɛstɪŋ"
 },
 {
   "id": 3357,
   "word": "THEY'LL",
   "pronunciations": "ˈðɛl"
 },
 {
   "id": 3358,
   "word": "TRANSITION",
   "pronunciations": "trænˈzɪʃən"
 },
 {
   "id": 3359,
   "word": "UNIVERSITIES",
   "pronunciations": "ˌjuːnəˈvɝːsətiːz"
 },
 {
   "id": 3360,
   "word": "VAN",
   "pronunciations": "ˈvæn"
 },
 {
   "id": 3361,
   "word": "VARIATION",
   "pronunciations": "ˌvɛriːˈeɪʃən"
 },
 {
   "id": 3362,
   "word": "WE'D",
   "pronunciations": "ˈwiːd"
 },
 {
   "id": 3363,
   "word": "WEAK",
   "pronunciations": "ˈwiːk"
 },
 {
   "id": 3364,
   "word": "WEDDING",
   "pronunciations": "ˈwɛdɪŋ"
 },
 {
   "id": 3365,
   "word": "WILLIAMS",
   "pronunciations": "ˈwɪljəmz"
 },
 {
   "id": 3366,
   "word": "ACCORDINGLY",
   "pronunciations": "əˈkɔrdɪŋli"
 },
 {
   "id": 3367,
   "word": "ALLOWING",
   "pronunciations": "əˈlaʊɪŋ"
 },
 {
   "id": 3368,
   "word": "ARTICLES",
   "pronunciations": "ˈɑːrtəkəlz, ˈɑːrtɪkəlz"
 },
 {
   "id": 3369,
   "word": "BARELY",
   "pronunciations": "ˈbɛrli"
 },
 {
   "id": 3370,
   "word": "BASEMENT",
   "pronunciations": "ˈbeɪsmənt"
 },
 {
   "id": 3371,
   "word": "BEEF",
   "pronunciations": "ˈbiːf"
 },
 {
   "id": 3372,
   "word": "BIRD",
   "pronunciations": "ˈbɝːd"
 },
 {
   "id": 3373,
   "word": "CEILING",
   "pronunciations": "ˈsiːlɪŋ"
 },
 {
   "id": 3374,
   "word": "CHECKED",
   "pronunciations": "ˈtʃɛkt"
 },
 {
   "id": 3375,
   "word": "CHRISTIANITY",
   "pronunciations": "ˌkrɪstʃiːˈænɪti"
 },
 {
   "id": 3376,
   "word": "COLORED",
   "pronunciations": "ˈkʌlɝd"
 },
 {
   "id": 3377,
   "word": "COMPETITIVE",
   "pronunciations": "kəmˈpɛtətɪv, kəmˈpɛtɪtɪv"
 },
 {
   "id": 3378,
   "word": "COMPOSER",
   "pronunciations": "kəmˈpoʊzɝ"
 },
 {
   "id": 3379,
   "word": "CONSEQUENTLY",
   "pronunciations": "ˈkɑːnsəkwəntli, ˈkɑːnsəˌkwɛntli"
 },
 {
   "id": 3380,
   "word": "CONSERVATIVE",
   "pronunciations": "kənˈsɝːvətɪv"
 },
 {
   "id": 3381,
   "word": "CONSIDERATIONS",
   "pronunciations": "kənˌsɪdɝˈeɪʃənz"
 },
 {
   "id": 3382,
   "word": "COUNTER",
   "pronunciations": "ˈkaʊntɝ"
 },
 {
   "id": 3383,
   "word": "DANCER",
   "pronunciations": "ˈdænsɝ"
 },
 {
   "id": 3384,
   "word": "DANCERS",
   "pronunciations": "ˈdænsɝz"
 },
 {
   "id": 3385,
   "word": "DAVE",
   "pronunciations": "ˈdeɪv"
 },
 {
   "id": 3386,
   "word": "DECLINE",
   "pronunciations": "dɪˈklaɪn"
 },
 {
   "id": 3387,
   "word": "DEFEAT",
   "pronunciations": "dɪˈfiːt"
 },
 {
   "id": 3388,
   "word": "DENSITY",
   "pronunciations": "ˈdɛnsəti, ˈdɛnsɪti"
 },
 {
   "id": 3389,
   "word": "ENDING",
   "pronunciations": "ˈɛndɪŋ"
 },
 {
   "id": 3390,
   "word": "ENTERPRISE",
   "pronunciations": "ˈɛntɝˌpraɪz, ˈɛnɝˌpraɪz"
 },
 {
   "id": 3391,
   "word": "EVALUATION",
   "pronunciations": "ɪˌvæljuːˈeɪʃən, iːˌvæljuːˈeɪʃən"
 },
 {
   "id": 3392,
   "word": "EXTEND",
   "pronunciations": "ɪkˈstɛnd"
 },
 {
   "id": 3393,
   "word": "EXTRAORDINARY",
   "pronunciations": "ˌɛkstrəˈɔrdəˌnɛri, ɪkˈstrɔrdəˌnɛri"
 },
 {
   "id": 3394,
   "word": "FALLOUT",
   "pronunciations": "ˈfɔˌlaʊt"
 },
 {
   "id": 3395,
   "word": "FILMS",
   "pronunciations": "ˈfɪlmz"
 },
 {
   "id": 3396,
   "word": "FINANCE",
   "pronunciations": "fəˈnæns, fɪˈnæns, ˈfaɪˌnæns"
 },
 {
   "id": 3397,
   "word": "FOURTEEN",
   "pronunciations": "ˈfɔrˈtiːn, ˌfɔrˈtiːn"
 },
 {
   "id": 3398,
   "word": "FREQUENCIES",
   "pronunciations": "ˈfriːkwənsiːz"
 },
 {
   "id": 3399,
   "word": "GALLERY",
   "pronunciations": "ˈgælɝi"
 },
 {
   "id": 3400,
   "word": "GENTLY",
   "pronunciations": "ˈdʒɛntli"
 },
 {
   "id": 3401,
   "word": "HEADING",
   "pronunciations": "ˈhɛdɪŋ"
 },
 {
   "id": 3402,
   "word": "HELPS",
   "pronunciations": "ˈhɛlps"
 },
 {
   "id": 3403,
   "word": "HORN",
   "pronunciations": "ˈhɔrn"
 },
 {
   "id": 3404,
   "word": "IDENTICAL",
   "pronunciations": "aɪˈdɛntɪkəl"
 },
 {
   "id": 3405,
   "word": "INVARIABLY",
   "pronunciations": "ˌɪnˈvɛriːəbli"
 },
 {
   "id": 3406,
   "word": "INVOLVE",
   "pronunciations": "ˌɪnˈvɑːlv"
 },
 {
   "id": 3407,
   "word": "JUNIORS",
   "pronunciations": "ˈdʒuːnjɝz"
 },
 {
   "id": 3408,
   "word": "KANSAS",
   "pronunciations": "ˈkænzəs"
 },
 {
   "id": 3409,
   "word": "KNOCKED",
   "pronunciations": "ˈnɑːkt"
 },
 {
   "id": 3410,
   "word": "LETTING",
   "pronunciations": "ˈlɛtɪŋ"
 },
 {
   "id": 3411,
   "word": "LIGHTLY",
   "pronunciations": "ˈlaɪtli"
 },
 {
   "id": 3412,
   "word": "LOCKING",
   "pronunciations": "ˈlɑːkɪŋ"
 },
 {
   "id": 3413,
   "word": "MAID",
   "pronunciations": "ˈmeɪd"
 },
 {
   "id": 3414,
   "word": "MAINLY",
   "pronunciations": "ˈmeɪnli"
 },
 {
   "id": 3415,
   "word": "MARKETS",
   "pronunciations": "ˈmɑːrkəts, ˈmɑːrkɪts"
 },
 {
   "id": 3416,
   "word": "MATURE",
   "pronunciations": "məˈtʃʊr, mətˈjʊr"
 },
 {
   "id": 3417,
   "word": "MOVIES",
   "pronunciations": "ˈmuːviːz"
 },
 {
   "id": 3418,
   "word": "MUSCLES",
   "pronunciations": "ˈmʌsəlz"
 },
 {
   "id": 3419,
   "word": "OUTER",
   "pronunciations": "ˈaʊtɝ"
 },
 {
   "id": 3420,
   "word": "PACIFIC",
   "pronunciations": "pəˈsɪfɪk"
 },
 {
   "id": 3421,
   "word": "PAGES",
   "pronunciations": "ˈpeɪdʒəz, ˈpeɪdʒɪz"
 },
 {
   "id": 3422,
   "word": "PANEL",
   "pronunciations": "ˈpænəl"
 },
 {
   "id": 3423,
   "word": "PARKING",
   "pronunciations": "ˈpɑːrkɪŋ"
 },
 {
   "id": 3424,
   "word": "PERFECTLY",
   "pronunciations": "ˈpɝːfəktli, ˈpɝːfəkli"
 },
 {
   "id": 3425,
   "word": "PLASTICS",
   "pronunciations": "ˈplæstɪks"
 },
 {
   "id": 3426,
   "word": "POETIC",
   "pronunciations": "poʊˈɛtɪk"
 },
 {
   "id": 3427,
   "word": "PROTECTED",
   "pronunciations": "prəˈtɛktɪd"
 },
 {
   "id": 3428,
   "word": "RECORDING",
   "pronunciations": "rəˈkɔrdɪŋ, rɪˈkɔrdɪŋ"
 },
 {
   "id": 3429,
   "word": "REDUCING",
   "pronunciations": "rɪˈduːsɪŋ"
 },
 {
   "id": 3430,
   "word": "REMARK",
   "pronunciations": "rɪˈmɑːrk, riːˈmɑːrk"
 },
 {
   "id": 3431,
   "word": "RESPECTIVELY",
   "pronunciations": "rɪˈspɛktɪvli"
 },
 {
   "id": 3432,
   "word": "RULED",
   "pronunciations": "ˈruːld"
 },
 {
   "id": 3433,
   "word": "RUSSIANS",
   "pronunciations": "ˈrʌʃənz"
 },
 {
   "id": 3434,
   "word": "SALINE",
   "pronunciations": "səˈliːn"
 },
 {
   "id": 3435,
   "word": "SECONDARY",
   "pronunciations": "ˈsɛkənˌdɛri"
 },
 {
   "id": 3436,
   "word": "SELLING",
   "pronunciations": "ˈsɛlɪŋ"
 },
 {
   "id": 3437,
   "word": "SEVENTH",
   "pronunciations": "ˈsɛvənθ"
 },
 {
   "id": 3438,
   "word": "SHOCK",
   "pronunciations": "ˈʃɑːk"
 },
 {
   "id": 3439,
   "word": "SOFTLY",
   "pronunciations": "ˈsɔftli, ˈsɔfli"
 },
 {
   "id": 3440,
   "word": "STARTS",
   "pronunciations": "ˈstɑːrts"
 },
 {
   "id": 3441,
   "word": "STRAIN",
   "pronunciations": "ˈstreɪn"
 },
 {
   "id": 3442,
   "word": "STRUCTURES",
   "pronunciations": "ˈstrʌktʃɝz"
 },
 {
   "id": 3443,
   "word": "STUDIO",
   "pronunciations": "ˈstuːdiːˌoʊ"
 },
 {
   "id": 3444,
   "word": "SUCCESSFULLY",
   "pronunciations": "səkˈsɛsfəli"
 },
 {
   "id": 3445,
   "word": "TERRITORY",
   "pronunciations": "ˈtɛrɪˌtɔri"
 },
 {
   "id": 3446,
   "word": "TOSSED",
   "pronunciations": "ˈtɔst"
 },
 {
   "id": 3447,
   "word": "TRAIL",
   "pronunciations": "ˈtreɪl"
 },
 {
   "id": 3448,
   "word": "TROUBLED",
   "pronunciations": "ˈtrʌbəld"
 },
 {
   "id": 3449,
   "word": "TUBE",
   "pronunciations": "ˈtuːb, tˈjuːb"
 },
 {
   "id": 3450,
   "word": "V.",
   "pronunciations": "ˈviː"
 },
 {
   "id": 3451,
   "word": "WINNING",
   "pronunciations": "ˈwɪnɪŋ"
 },
 {
   "id": 3452,
   "word": "ABSOLUTE",
   "pronunciations": "ˈæbsəˌluːt"
 },
 {
   "id": 3453,
   "word": "ALEX",
   "pronunciations": "ˈæləks"
 },
 {
   "id": 3454,
   "word": "ALLIES",
   "pronunciations": "ˈælaɪz, əˈlaɪz"
 },
 {
   "id": 3455,
   "word": "ALTOGETHER",
   "pronunciations": "ˌɔltəˈgɛðɝ"
 },
 {
   "id": 3456,
   "word": "ASLEEP",
   "pronunciations": "əˈsliːp"
 },
 {
   "id": 3457,
   "word": "ASSOCIATIONS",
   "pronunciations": "əˌsoʊsiːˈeɪʃənz, əˌsoʊʃiːˈeɪʃənz"
 },
 {
   "id": 3458,
   "word": "BLANKET",
   "pronunciations": "ˈblæŋkət, ˈblæŋkɪt"
 },
 {
   "id": 3459,
   "word": "BUYING",
   "pronunciations": "ˈbaɪɪŋ"
 },
 {
   "id": 3460,
   "word": "CARBON",
   "pronunciations": "ˈkɑːrbən"
 },
 {
   "id": 3461,
   "word": "CITIZEN",
   "pronunciations": "ˈsɪtəzən, ˈsɪtɪzən"
 },
 {
   "id": 3462,
   "word": "COMMENTS",
   "pronunciations": "ˈkɑːmɛnts"
 },
 {
   "id": 3463,
   "word": "COMPLICATED",
   "pronunciations": "ˈkɑːmpləˌkeɪtəd"
 },
 {
   "id": 3464,
   "word": "CONCENTRATED",
   "pronunciations": "ˈkɑːnsənˌtreɪtəd, ˈkɔnsənˌtreɪtɪd"
 },
 {
   "id": 3465,
   "word": "CONSCIOUSNESS",
   "pronunciations": "ˈkɑːnʃəsnəs"
 },
 {
   "id": 3466,
   "word": "CONSEQUENCE",
   "pronunciations": "ˈkɑːnsəkwəns"
 },
 {
   "id": 3467,
   "word": "CONTROLS",
   "pronunciations": "kənˈtroʊlz"
 },
 {
   "id": 3468,
   "word": "CRIED",
   "pronunciations": "ˈkraɪd"
 },
 {
   "id": 3469,
   "word": "CRUCIAL",
   "pronunciations": "ˈkruːʃəl"
 },
 {
   "id": 3470,
   "word": "CUTS",
   "pronunciations": "ˈkʌts"
 },
 {
   "id": 3471,
   "word": "DARTMOUTH",
   "pronunciations": "ˈdɑːrtməθ"
 },
 {
   "id": 3472,
   "word": "DATES",
   "pronunciations": "ˈdeɪts"
 },
 {
   "id": 3473,
   "word": "DEALERS",
   "pronunciations": "ˈdiːlɝz"
 },
 {
   "id": 3474,
   "word": "DELIBERATELY",
   "pronunciations": "dɪˈlɪbɝətli, dɪˈlɪbrətli"
 },
 {
   "id": 3475,
   "word": "DIMENSIONS",
   "pronunciations": "dɪˈmɛnʃənz"
 },
 {
   "id": 3476,
   "word": "DIRECTIONS",
   "pronunciations": "dɝˈɛkʃənz, diːˈrɛkʃɪnz, daɪˈrɛkʃɪnz, dɪˈrɛkʃɪnz"
 },
 {
   "id": 3477,
   "word": "DOCTORS",
   "pronunciations": "ˈdɑːktɝz"
 },
 {
   "id": 3478,
   "word": "DREAMS",
   "pronunciations": "ˈdriːmz"
 },
 {
   "id": 3479,
   "word": "EDDIE",
   "pronunciations": "ˈɛdi"
 },
 {
   "id": 3480,
   "word": "ENCOUNTERED",
   "pronunciations": "ɪnˈkaʊntɝd, ɪnˈkaʊnɝd"
 },
 {
   "id": 3481,
   "word": "ERA",
   "pronunciations": "ˈɛrə, ˈɪrə"
 },
 {
   "id": 3482,
   "word": "ET",
   "pronunciations": "ˈɛt"
 },
 {
   "id": 3483,
   "word": "EXCESSIVE",
   "pronunciations": "ɪkˈsɛsɪv"
 },
 {
   "id": 3484,
   "word": "EXPERT",
   "pronunciations": "ˈɛkspɝt"
 },
 {
   "id": 3485,
   "word": "FELIX",
   "pronunciations": "ˈfiːlɪks"
 },
 {
   "id": 3486,
   "word": "FENCE",
   "pronunciations": "ˈfɛns"
 },
 {
   "id": 3487,
   "word": "FLUX",
   "pronunciations": "ˈflʌks"
 },
 {
   "id": 3488,
   "word": "FRANKLIN",
   "pronunciations": "ˈfræŋklɪn"
 },
 {
   "id": 3489,
   "word": "FRONTIER",
   "pronunciations": "frənˈtɪr"
 },
 {
   "id": 3490,
   "word": "GAY",
   "pronunciations": "ˈgeɪ"
 },
 {
   "id": 3491,
   "word": "GRADUATE",
   "pronunciations": "ˈgrædʒəwət, ˈgrædʒəˌweɪt, ˈgrædʒuːwət, ˈgrædʒuːˌeɪt"
 },
 {
   "id": 3492,
   "word": "GRINNED",
   "pronunciations": "ˈgrɪnd"
 },
 {
   "id": 3493,
   "word": "HE'LL",
   "pronunciations": "ˈhiːl"
 },
 {
   "id": 3494,
   "word": "HISTORIAN",
   "pronunciations": "hɪˈstɔriːən"
 },
 {
   "id": 3495,
   "word": "HOPING",
   "pronunciations": "ˈhoʊpɪŋ"
 },
 {
   "id": 3496,
   "word": "IMPRESSED",
   "pronunciations": "ˌɪmˈprɛst"
 },
 {
   "id": 3497,
   "word": "INSTANCES",
   "pronunciations": "ˈɪnstənsəz, ˈɪnstənsɪz"
 },
 {
   "id": 3498,
   "word": "ISLANDS",
   "pronunciations": "ˈaɪləndz"
 },
 {
   "id": 3499,
   "word": "JOHNNY",
   "pronunciations": "ˈdʒɑːni"
 },
 {
   "id": 3500,
   "word": "LANE",
   "pronunciations": "ˈleɪn"
 },
 {
   "id": 3501,
   "word": "LISTENED",
   "pronunciations": "ˈlɪsənd"
 },
 {
   "id": 3502,
   "word": "LOCKED",
   "pronunciations": "ˈlɑːkt"
 },
 {
   "id": 3503,
   "word": "LOUISIANA",
   "pronunciations": "luːˌiːziːˈænə"
 },
 {
   "id": 3504,
   "word": "MEAL",
   "pronunciations": "ˈmiːl"
 },
 {
   "id": 3505,
   "word": "MEASURING",
   "pronunciations": "ˈmɛʒɝɪŋ"
 },
 {
   "id": 3506,
   "word": "MEDICINE",
   "pronunciations": "ˈmɛdəsən"
 },
 {
   "id": 3507,
   "word": "MIRIAM",
   "pronunciations": "ˈmɪriːəm"
 },
 {
   "id": 3508,
   "word": "MIXTURE",
   "pronunciations": "ˈmɪkstʃɝ"
 },
 {
   "id": 3509,
   "word": "NETWORK",
   "pronunciations": "ˈnɛˌtwɝːk"
 },
 {
   "id": 3510,
   "word": "NOWHERE",
   "pronunciations": "ˈnoʊˌwɛr, ˈnoʊˌhwɛr"
 },
 {
   "id": 3511,
   "word": "OCCURRENCE",
   "pronunciations": "əˈkɝːəns"
 },
 {
   "id": 3512,
   "word": "PRECEDING",
   "pronunciations": "priːˈsiːdɪŋ"
 },
 {
   "id": 3513,
   "word": "PROPAGANDA",
   "pronunciations": "ˌprɑːpəˈgændə"
 },
 {
   "id": 3514,
   "word": "PURELY",
   "pronunciations": "ˈpjʊrli"
 },
 {
   "id": 3515,
   "word": "RADICAL",
   "pronunciations": "ˈrædɪkəl"
 },
 {
   "id": 3516,
   "word": "RANGING",
   "pronunciations": "ˈreɪndʒɪŋ"
 },
 {
   "id": 3517,
   "word": "REFORM",
   "pronunciations": "rəˈfɔrm, rɪˈfɔrm"
 },
 {
   "id": 3518,
   "word": "REPLACE",
   "pronunciations": "ˌriːˈpleɪs, ɝˈpleɪs"
 },
 {
   "id": 3519,
   "word": "REPRESENTING",
   "pronunciations": "ˌrɛprɪˈzɛntɪŋ, ˌrɛprɪˈzɛnɪŋ"
 },
 {
   "id": 3520,
   "word": "REVEAL",
   "pronunciations": "rɪˈviːl, riːˈviːl"
 },
 {
   "id": 3521,
   "word": "ROOT",
   "pronunciations": "ˈruːt"
 },
 {
   "id": 3522,
   "word": "SACRIFICE",
   "pronunciations": "ˈsækrəˌfaɪs"
 },
 {
   "id": 3523,
   "word": "SECURE",
   "pronunciations": "sɪˈkjʊr"
 },
 {
   "id": 3524,
   "word": "SHAKESPEARE",
   "pronunciations": "ˈʃeɪkˌspiːr"
 },
 {
   "id": 3525,
   "word": "SHARPE",
   "pronunciations": "ˈʃɑːrp"
 },
 {
   "id": 3526,
   "word": "SHEETS",
   "pronunciations": "ˈʃiːts"
 },
 {
   "id": 3527,
   "word": "SKILLED",
   "pronunciations": "ˈskɪld"
 },
 {
   "id": 3528,
   "word": "SLAVE",
   "pronunciations": "ˈsleɪv"
 },
 {
   "id": 3529,
   "word": "SOVEREIGN",
   "pronunciations": "ˈsɑːvrən"
 },
 {
   "id": 3530,
   "word": "SPLIT",
   "pronunciations": "ˈsplɪt"
 },
 {
   "id": 3531,
   "word": "SPONSORED",
   "pronunciations": "ˈspɑːnsɝd"
 },
 {
   "id": 3532,
   "word": "STABLE",
   "pronunciations": "ˈsteɪbəl"
 },
 {
   "id": 3533,
   "word": "STEM",
   "pronunciations": "ˈstɛm"
 },
 {
   "id": 3534,
   "word": "STRIP",
   "pronunciations": "ˈstrɪp"
 },
 {
   "id": 3535,
   "word": "SURPRISING",
   "pronunciations": "sɝˈpraɪzɪŋ, səˈpraɪzɪŋ"
 },
 {
   "id": 3536,
   "word": "SUSPECT",
   "pronunciations": "səˈspɛkt, ˈsʌˌspɛkt"
 },
 {
   "id": 3537,
   "word": "SUSPENDED",
   "pronunciations": "səˈspɛndəd, səˈspɛndɪd"
 },
 {
   "id": 3538,
   "word": "THEY'D",
   "pronunciations": "ˈðeɪd"
 },
 {
   "id": 3539,
   "word": "UNCONSCIOUS",
   "pronunciations": "ˌənˈkɑːnʃəs"
 },
 {
   "id": 3540,
   "word": "VIRTUE",
   "pronunciations": "ˈvɝːtʃuː"
 },
 {
   "id": 3541,
   "word": "VOTING",
   "pronunciations": "ˈvoʊtɪŋ"
 },
 {
   "id": 3542,
   "word": "WIDESPREAD",
   "pronunciations": "ˈwaɪdˈsprɛd"
 },
 {
   "id": 3543,
   "word": "WOODRUFF",
   "pronunciations": "ˈwʊdrəf"
 },
 {
   "id": 3544,
   "word": "WORKER",
   "pronunciations": "ˈwɝːkɝ"
 },
 {
   "id": 3545,
   "word": "ALBERT",
   "pronunciations": "ˈælbɝt"
 },
 {
   "id": 3546,
   "word": "ALLIED",
   "pronunciations": "əˈlaɪd, ˈæˌlaɪd"
 },
 {
   "id": 3547,
   "word": "ANN",
   "pronunciations": "ˈæn"
 },
 {
   "id": 3548,
   "word": "ANXIOUS",
   "pronunciations": "ˈæŋkʃəs, ˈæŋʃəs"
 },
 {
   "id": 3549,
   "word": "APPARATUS",
   "pronunciations": "ˌæpɝˈætəs"
 },
 {
   "id": 3550,
   "word": "APPLYING",
   "pronunciations": "əˈplaɪɪŋ"
 },
 {
   "id": 3551,
   "word": "ARGUE",
   "pronunciations": "ˈɑːrgjuː"
 },
 {
   "id": 3552,
   "word": "ARGUED",
   "pronunciations": "ˈɑːrgjuːd"
 },
 {
   "id": 3553,
   "word": "BARE",
   "pronunciations": "ˈbɛr"
 },
 {
   "id": 3554,
   "word": "BARN",
   "pronunciations": "ˈbɑːrn"
 },
 {
   "id": 3555,
   "word": "BELT",
   "pronunciations": "ˈbɛlt"
 },
 {
   "id": 3556,
   "word": "BRANNON",
   "pronunciations": "ˈbrænən"
 },
 {
   "id": 3557,
   "word": "BRONCHIAL",
   "pronunciations": "ˈbrɑːntʃiːəl"
 },
 {
   "id": 3558,
   "word": "BROOKLYN",
   "pronunciations": "ˈbrʊklən, ˈbrʊklɪn"
 },
 {
   "id": 3559,
   "word": "BUILDER",
   "pronunciations": "ˈbɪldɝ"
 },
 {
   "id": 3560,
   "word": "CARLETON",
   "pronunciations": "ˈkɑːrltən"
 },
 {
   "id": 3561,
   "word": "COMMONLY",
   "pronunciations": "ˈkɑːmənli"
 },
 {
   "id": 3562,
   "word": "CONSTITUTE",
   "pronunciations": "ˈkɑːnstəˌtuːt"
 },
 {
   "id": 3563,
   "word": "CONTRIBUTIONS",
   "pronunciations": "ˌkɑːntrəˈbjuːʃənz"
 },
 {
   "id": 3564,
   "word": "COW",
   "pronunciations": "ˈkaʊ"
 },
 {
   "id": 3565,
   "word": "CREATING",
   "pronunciations": "kriːˈeɪtɪŋ"
 },
 {
   "id": 3566,
   "word": "DELIGHT",
   "pronunciations": "dɪˈlaɪt"
 },
 {
   "id": 3567,
   "word": "DIVORCE",
   "pronunciations": "dɪˈvɔrs"
 },
 {
   "id": 3568,
   "word": "DRYING",
   "pronunciations": "ˈdraɪɪŋ"
 },
 {
   "id": 3569,
   "word": "EAR",
   "pronunciations": "ˈiːr, ˈɪr"
 },
 {
   "id": 3570,
   "word": "ECUMENICAL",
   "pronunciations": "ˌɛkjuːˈmɛnɪkəl"
 },
 {
   "id": 3571,
   "word": "ELECTRON",
   "pronunciations": "ˌɪˈlɛktrɑːn"
 },
 {
   "id": 3572,
   "word": "ENCOURAGED",
   "pronunciations": "ɛnˈkɝːɪdʒd, ɪnˈkɝːədʒd"
 },
 {
   "id": 3573,
   "word": "ENTERTAINMENT",
   "pronunciations": "ˌɛntɝˈteɪnmənt, ˌɛnɝˈteɪnmənt"
 },
 {
   "id": 3574,
   "word": "ETERNAL",
   "pronunciations": "ɪˈtɝːnəl, iːˈtɝːnəl"
 },
 {
   "id": 3575,
   "word": "ETHICAL",
   "pronunciations": "ˈɛθɪkəl"
 },
 {
   "id": 3576,
   "word": "EXAMINATION",
   "pronunciations": "ɪgˌzæməˈneɪʃən"
 },
 {
   "id": 3577,
   "word": "EXCITING",
   "pronunciations": "ɪkˈsaɪtɪŋ"
 },
 {
   "id": 3578,
   "word": "EXTENDING",
   "pronunciations": "ɪkˈstɛndɪŋ"
 },
 {
   "id": 3579,
   "word": "FABRICS",
   "pronunciations": "ˈfæbrɪks"
 },
 {
   "id": 3580,
   "word": "FALSE",
   "pronunciations": "ˈfɔls"
 },
 {
   "id": 3581,
   "word": "FEES",
   "pronunciations": "ˈfiːz"
 },
 {
   "id": 3582,
   "word": "FURNISH",
   "pronunciations": "ˈfɝːnɪʃ"
 },
 {
   "id": 3583,
   "word": "GLASSES",
   "pronunciations": "ˈglæsəz, ˈglæsɪz"
 },
 {
   "id": 3584,
   "word": "GUILTY",
   "pronunciations": "ˈgɪlti"
 },
 {
   "id": 3585,
   "word": "HELPFUL",
   "pronunciations": "ˈhɛlpfəl"
 },
 {
   "id": 3586,
   "word": "IGNORED",
   "pronunciations": "ˌɪgˈnɔrd"
 },
 {
   "id": 3587,
   "word": "JET",
   "pronunciations": "ˈdʒɛt"
 },
 {
   "id": 3588,
   "word": "JURISDICTION",
   "pronunciations": "ˌdʒʊrəsˈdɪkʃən, ˌdʒʊrɪsˈdɪkʃən"
 },
 {
   "id": 3589,
   "word": "LESSON",
   "pronunciations": "ˈlɛsən"
 },
 {
   "id": 3590,
   "word": "LIEUTENANT",
   "pronunciations": "luːˈtɛnənt"
 },
 {
   "id": 3591,
   "word": "LIGHTED",
   "pronunciations": "ˈlaɪtəd, ˈlaɪtɪd"
 },
 {
   "id": 3592,
   "word": "MAGNITUDE",
   "pronunciations": "ˈmægnəˌtuːd"
 },
 {
   "id": 3593,
   "word": "MERIT",
   "pronunciations": "ˈmɛrət"
 },
 {
   "id": 3594,
   "word": "MICKEY",
   "pronunciations": "ˈmɪki"
 },
 {
   "id": 3595,
   "word": "MIGHTY",
   "pronunciations": "ˈmaɪti"
 },
 {
   "id": 3596,
   "word": "MODEST",
   "pronunciations": "ˈmɑːdəst"
 },
 {
   "id": 3597,
   "word": "MORALITY",
   "pronunciations": "ˌmɔˈræləˌtiː"
 },
 {
   "id": 3598,
   "word": "MORSE",
   "pronunciations": "ˈmɔrs"
 },
 {
   "id": 3599,
   "word": "MOVIE",
   "pronunciations": "ˈmuːvi"
 },
 {
   "id": 3600,
   "word": "O.",
   "pronunciations": "ˈoʊ"
 },
 {
   "id": 3601,
   "word": "PERCEPTION",
   "pronunciations": "pɝˈsɛpʃən"
 },
 {
   "id": 3602,
   "word": "PERFORM",
   "pronunciations": "pɝˈfɔrm"
 },
 {
   "id": 3603,
   "word": "PETITIONER",
   "pronunciations": "pəˈtɪʃənɝ"
 },
 {
   "id": 3604,
   "word": "PLAYERS",
   "pronunciations": "ˈpleɪɝz"
 },
 {
   "id": 3605,
   "word": "POURED",
   "pronunciations": "ˈpɔrd"
 },
 {
   "id": 3606,
   "word": "PRECIOUS",
   "pronunciations": "ˈprɛʃəs"
 },
 {
   "id": 3607,
   "word": "PRESSED",
   "pronunciations": "ˈprɛst"
 },
 {
   "id": 3608,
   "word": "PRESTIGE",
   "pronunciations": "prɛˈstiːʒ"
 },
 {
   "id": 3609,
   "word": "PROPORTION",
   "pronunciations": "prəˈpɔrʃən"
 },
 {
   "id": 3610,
   "word": "PROPOSALS",
   "pronunciations": "prəˈpoʊzəlz"
 },
 {
   "id": 3611,
   "word": "QUESTIONED",
   "pronunciations": "ˈkwɛstʃənd"
 },
 {
   "id": 3612,
   "word": "RECOVERY",
   "pronunciations": "rɪˈkʌvri, rɪˈkʌvɝi"
 },
 {
   "id": 3613,
   "word": "REGULATIONS",
   "pronunciations": "ˌrɛgjəˈleɪʃənz"
 },
 {
   "id": 3614,
   "word": "REMINDED",
   "pronunciations": "riːˈmaɪndəd, riːˈmaɪndɪd"
 },
 {
   "id": 3615,
   "word": "REPUBLICANS",
   "pronunciations": "rɪˈpʌblɪkənz, riːˈpʌbləkənz, riːˈpʌblɪkənz"
 },
 {
   "id": 3616,
   "word": "RESIDENCE",
   "pronunciations": "ˈrɛzɪdəns"
 },
 {
   "id": 3617,
   "word": "SAMPLES",
   "pronunciations": "ˈsæmpəlz"
 },
 {
   "id": 3618,
   "word": "SANG",
   "pronunciations": "ˈsæŋ"
 },
 {
   "id": 3619,
   "word": "SCENES",
   "pronunciations": "ˈsiːnz"
 },
 {
   "id": 3620,
   "word": "SEWAGE",
   "pronunciations": "ˈsuːədʒ, ˈsuːɪdʒ"
 },
 {
   "id": 3621,
   "word": "SHAPES",
   "pronunciations": "ˈʃeɪps"
 },
 {
   "id": 3622,
   "word": "SHERMAN",
   "pronunciations": "ˈʃɝːmən"
 },
 {
   "id": 3623,
   "word": "SHORTS",
   "pronunciations": "ˈʃɔrts"
 },
 {
   "id": 3624,
   "word": "SHOTS",
   "pronunciations": "ˈʃɑːts"
 },
 {
   "id": 3625,
   "word": "SIGNALS",
   "pronunciations": "ˈsɪgnəlz"
 },
 {
   "id": 3626,
   "word": "SILVER",
   "pronunciations": "ˈsɪlvɝ"
 },
 {
   "id": 3627,
   "word": "SOLUTIONS",
   "pronunciations": "səˈluːʃənz"
 },
 {
   "id": 3628,
   "word": "SONS",
   "pronunciations": "ˈsʌnz"
 },
 {
   "id": 3629,
   "word": "STARS",
   "pronunciations": "ˈstɑːrz"
 },
 {
   "id": 3630,
   "word": "SUBSEQUENT",
   "pronunciations": "ˈsʌbsəkwənt"
 },
 {
   "id": 3631,
   "word": "SUBURBAN",
   "pronunciations": "səˈbɝːbən"
 },
 {
   "id": 3632,
   "word": "SUGGESTS",
   "pronunciations": "səˈdʒɛsts"
 },
 {
   "id": 3633,
   "word": "TASKS",
   "pronunciations": "ˈtæsks"
 },
 {
   "id": 3634,
   "word": "TEA",
   "pronunciations": "ˈtiː"
 },
 {
   "id": 3635,
   "word": "TESTAMENT",
   "pronunciations": "ˈtɛstəmənt"
 },
 {
   "id": 3636,
   "word": "THEATRE",
   "pronunciations": "ˈθiːətɝ"
 },
 {
   "id": 3637,
   "word": "THREATENED",
   "pronunciations": "ˈθrɛtənd"
 },
 {
   "id": 3638,
   "word": "TRANSFERRED",
   "pronunciations": "trænsˈfɝːd, ˈtrænsfɝd"
 },
 {
   "id": 3639,
   "word": "TRIPS",
   "pronunciations": "ˈtrɪps"
 },
 {
   "id": 3640,
   "word": "UNIONS",
   "pronunciations": "ˈjuːnjənz"
 },
 {
   "id": 3641,
   "word": "UTILITY",
   "pronunciations": "juːˈtɪləti"
 },
 {
   "id": 3642,
   "word": "VIGOROUS",
   "pronunciations": "ˈvɪgɝəs"
 },
 {
   "id": 3643,
   "word": "VOLUNTEERS",
   "pronunciations": "ˌvɑːlənˈtɪrz"
 },
 {
   "id": 3644,
   "word": "ABSENT",
   "pronunciations": "ˈæbsənt"
 },
 {
   "id": 3645,
   "word": "ADVANTAGES",
   "pronunciations": "ædˈvæntɪdʒɪz"
 },
 {
   "id": 3646,
   "word": "AFRICAN",
   "pronunciations": "ˈæfrɪkɑːn"
 },
 {
   "id": 3647,
   "word": "APPOINTMENT",
   "pronunciations": "əˈpɔɪntmənt"
 },
 {
   "id": 3648,
   "word": "ARISE",
   "pronunciations": "ɝˈaɪz"
 },
 {
   "id": 3649,
   "word": "BULLET",
   "pronunciations": "ˈbʊlət"
 },
 {
   "id": 3650,
   "word": "CALENDAR",
   "pronunciations": "ˈkæləndɝ"
 },
 {
   "id": 3651,
   "word": "CLARITY",
   "pronunciations": "ˈklɛrəti, ˈklɛrɪti"
 },
 {
   "id": 3652,
   "word": "CLOSING",
   "pronunciations": "ˈkloʊzɪŋ"
 },
 {
   "id": 3653,
   "word": "CLOUD",
   "pronunciations": "ˈklaʊd"
 },
 {
   "id": 3654,
   "word": "COLONY",
   "pronunciations": "ˈkɑːləni"
 },
 {
   "id": 3655,
   "word": "COMMANDER",
   "pronunciations": "kəˈmændɝ"
 },
 {
   "id": 3656,
   "word": "COMMITTED",
   "pronunciations": "kəˈmɪtɪd"
 },
 {
   "id": 3657,
   "word": "COMMUNICATIONS",
   "pronunciations": "kəˌmjuːnəˈkeɪʃənz"
 },
 {
   "id": 3658,
   "word": "COMPARE",
   "pronunciations": "kəmˈpɛr"
 },
 {
   "id": 3659,
   "word": "CONSISTENT",
   "pronunciations": "kənˈsɪstənt"
 },
 {
   "id": 3660,
   "word": "CONVENTION",
   "pronunciations": "kənˈvɛnʃən"
 },
 {
   "id": 3661,
   "word": "CURE",
   "pronunciations": "ˈkjʊr"
 },
 {
   "id": 3662,
   "word": "DAWN",
   "pronunciations": "ˈdɔn"
 },
 {
   "id": 3663,
   "word": "DEMONSTRATE",
   "pronunciations": "ˈdɛmənˌstreɪt"
 },
 {
   "id": 3664,
   "word": "DESIGNS",
   "pronunciations": "dɪˈzaɪnz"
 },
 {
   "id": 3665,
   "word": "DINING",
   "pronunciations": "ˈdaɪnɪŋ"
 },
 {
   "id": 3666,
   "word": "DIPLOMATIC",
   "pronunciations": "ˌdɪpləˈmætɪk"
 },
 {
   "id": 3667,
   "word": "DISCUSS",
   "pronunciations": "dɪˈskʌs"
 },
 {
   "id": 3668,
   "word": "DRIED",
   "pronunciations": "ˈdraɪd"
 },
 {
   "id": 3669,
   "word": "DRUGS",
   "pronunciations": "ˈdrʌgz"
 },
 {
   "id": 3670,
   "word": "ENCOUNTER",
   "pronunciations": "ɪnˈkaʊntɝ, ɪnˈkaʊnɝ"
 },
 {
   "id": 3671,
   "word": "ENTHUSIASM",
   "pronunciations": "ɪnˈθuːziːˌæzəm"
 },
 {
   "id": 3672,
   "word": "EXAMINED",
   "pronunciations": "ɪgˈzæmənd"
 },
 {
   "id": 3673,
   "word": "EXCLUSIVE",
   "pronunciations": "ɪksˈkluːsɪv"
 },
 {
   "id": 3674,
   "word": "EXCUSE",
   "pronunciations": "ɪksˈkjuːs, ɪksˈkjuːz"
 },
 {
   "id": 3675,
   "word": "EXPANDING",
   "pronunciations": "ɪkˈspændɪŋ"
 },
 {
   "id": 3676,
   "word": "FLED",
   "pronunciations": "ˈflɛd"
 },
 {
   "id": 3677,
   "word": "FOLKLORE",
   "pronunciations": "ˈfoʊˌklɔr"
 },
 {
   "id": 3678,
   "word": "FORMERLY",
   "pronunciations": "ˈfɔrmɝli"
 },
 {
   "id": 3679,
   "word": "FREIGHT",
   "pronunciations": "ˈfreɪt"
 },
 {
   "id": 3680,
   "word": "GATHERING",
   "pronunciations": "ˈgæðɝɪŋ"
 },
 {
   "id": 3681,
   "word": "GENTLEMAN",
   "pronunciations": "ˈdʒɛntəlmən, ˈdʒɛnəlmən"
 },
 {
   "id": 3682,
   "word": "HAL",
   "pronunciations": "ˈhæl"
 },
 {
   "id": 3683,
   "word": "HANGING",
   "pronunciations": "ˈhæŋɪŋ, ˈhæŋgɪŋ"
 },
 {
   "id": 3684,
   "word": "HAPPENING",
   "pronunciations": "ˈhæpənɪŋ, ˈhæpnɪŋ"
 },
 {
   "id": 3685,
   "word": "HARRIS",
   "pronunciations": "ˈhɛrɪs"
 },
 {
   "id": 3686,
   "word": "HATED",
   "pronunciations": "ˈheɪtəd, ˈheɪtɪd"
 },
 {
   "id": 3687,
   "word": "HUMANITY",
   "pronunciations": "hjuːˈmænɪti, juːˈmænɪti"
 },
 {
   "id": 3688,
   "word": "INNOCENCE",
   "pronunciations": "ˈɪnəsəns"
 },
 {
   "id": 3689,
   "word": "IRISH",
   "pronunciations": "ˈaɪrɪʃ"
 },
 {
   "id": 3690,
   "word": "JOURNEY",
   "pronunciations": "ˈdʒɝːni"
 },
 {
   "id": 3691,
   "word": "LADIES",
   "pronunciations": "ˈleɪdiːz"
 },
 {
   "id": 3692,
   "word": "LAUGH",
   "pronunciations": "ˈlæf"
 },
 {
   "id": 3693,
   "word": "LAUGHING",
   "pronunciations": "ˈlæfɪŋ"
 },
 {
   "id": 3694,
   "word": "LIBRARIES",
   "pronunciations": "ˈlaɪbrɛˌriːz"
 },
 {
   "id": 3695,
   "word": "LIMITATIONS",
   "pronunciations": "ˌlɪmɪˈteɪʃənz"
 },
 {
   "id": 3696,
   "word": "LOSING",
   "pronunciations": "ˈluːzɪŋ"
 },
 {
   "id": 3697,
   "word": "MAINTAINING",
   "pronunciations": "meɪnˈteɪnɪŋ"
 },
 {
   "id": 3698,
   "word": "MARKS",
   "pronunciations": "ˈmɑːrks"
 },
 {
   "id": 3699,
   "word": "MECHANISM",
   "pronunciations": "ˈmɛkəˌnɪzəm"
 },
 {
   "id": 3700,
   "word": "MEETINGS",
   "pronunciations": "ˈmiːtɪŋz"
 },
 {
   "id": 3701,
   "word": "MINES",
   "pronunciations": "ˈmaɪnz"
 },
 {
   "id": 3702,
   "word": "MUNICIPAL",
   "pronunciations": "mjuːˈnɪsəpəl"
 },
 {
   "id": 3703,
   "word": "N.",
   "pronunciations": "ˈɛn"
 },
 {
   "id": 3704,
   "word": "NEWLY",
   "pronunciations": "ˈnuːli"
 },
 {
   "id": 3705,
   "word": "OFFERING",
   "pronunciations": "ˈɔfɝɪŋ, ˈɔfrɪŋ"
 },
 {
   "id": 3706,
   "word": "OPTIMAL",
   "pronunciations": "ˈɑːptɪməl"
 },
 {
   "id": 3707,
   "word": "PASSION",
   "pronunciations": "ˈpæʃən"
 },
 {
   "id": 3708,
   "word": "PAUSED",
   "pronunciations": "ˈpɔzd"
 },
 {
   "id": 3709,
   "word": "PECULIAR",
   "pronunciations": "pəˈkjuːljɝ, pɪˈkjuːljɝ"
 },
 {
   "id": 3710,
   "word": "POLYNOMIAL",
   "pronunciations": "ˌpɑːˌliːˈnoʊmiːəl"
 },
 {
   "id": 3711,
   "word": "POT",
   "pronunciations": "ˈpɑːt"
 },
 {
   "id": 3712,
   "word": "POUND",
   "pronunciations": "ˈpaʊnd"
 },
 {
   "id": 3713,
   "word": "POWDER",
   "pronunciations": "ˈpaʊdɝ"
 },
 {
   "id": 3714,
   "word": "PRAYER",
   "pronunciations": "ˈprɛr, ˈpreɪɝ"
 },
 {
   "id": 3715,
   "word": "PRESIDENT'S",
   "pronunciations": "ˈprɛzɪdənts"
 },
 {
   "id": 3716,
   "word": "PRIZE",
   "pronunciations": "ˈpraɪz"
 },
 {
   "id": 3717,
   "word": "PROFIT",
   "pronunciations": "ˈprɑːfət, ˈprɑːfɪt"
 },
 {
   "id": 3718,
   "word": "PROMPTLY",
   "pronunciations": "ˈprɑːmptli, ˈprɑːmpli"
 },
 {
   "id": 3719,
   "word": "QUARTERS",
   "pronunciations": "ˈkwɔrtɝz"
 },
 {
   "id": 3720,
   "word": "RAMEY",
   "pronunciations": "ˈræmi"
 },
 {
   "id": 3721,
   "word": "RENDERED",
   "pronunciations": "ˈrɛndɝd"
 },
 {
   "id": 3722,
   "word": "RESPONSES",
   "pronunciations": "rɪˈspɑːnsɪz, riːˈspɑːnsəz, riːˈspɑːnsɪz"
 },
 {
   "id": 3723,
   "word": "ROOSEVELT",
   "pronunciations": "ˈroʊzəˌvɛlt, ˈruːzəˌvɛlt"
 },
 {
   "id": 3724,
   "word": "SAND",
   "pronunciations": "ˈsænd"
 },
 {
   "id": 3725,
   "word": "SANTA",
   "pronunciations": "ˈsæntə, ˈsænə"
 },
 {
   "id": 3726,
   "word": "SATISFACTION",
   "pronunciations": "ˌsætəsˈfækʃən, ˌsætɪsˈfækʃən"
 },
 {
   "id": 3727,
   "word": "SENSITIVITY",
   "pronunciations": "ˌsɛnsɪˈtɪvɪti"
 },
 {
   "id": 3728,
   "word": "SERGEANT",
   "pronunciations": "ˈsɑːrdʒənt"
 },
 {
   "id": 3729,
   "word": "SHADE",
   "pronunciations": "ˈʃeɪd"
 },
 {
   "id": 3730,
   "word": "SOUTHEAST",
   "pronunciations": "ˌsaʊˈθiːst"
 },
 {
   "id": 3731,
   "word": "SOVEREIGNTY",
   "pronunciations": "ˈsɑːvrənti"
 },
 {
   "id": 3732,
   "word": "SPECIFIED",
   "pronunciations": "ˈspɛsəˌfaɪd"
 },
 {
   "id": 3733,
   "word": "STAINED",
   "pronunciations": "ˈsteɪnd"
 },
 {
   "id": 3734,
   "word": "SURFACES",
   "pronunciations": "ˈsɝːfəsəz, ˈsɝːfəsɪz"
 },
 {
   "id": 3735,
   "word": "TALENTS",
   "pronunciations": "ˈtælənts"
 },
 {
   "id": 3736,
   "word": "TEXTILE",
   "pronunciations": "ˈtɛkˌstaɪl"
 },
 {
   "id": 3737,
   "word": "TIGHT",
   "pronunciations": "ˈtaɪt"
 },
 {
   "id": 3738,
   "word": "TONS",
   "pronunciations": "ˈtʌnz"
 },
 {
   "id": 3739,
   "word": "UPSTAIRS",
   "pronunciations": "əpˈstɛrz"
 },
 {
   "id": 3740,
   "word": "VERSE",
   "pronunciations": "ˈvɝːs"
 },
 {
   "id": 3741,
   "word": "WARMTH",
   "pronunciations": "ˈwɔrmθ"
 },
 {
   "id": 3742,
   "word": "WITNESS",
   "pronunciations": "ˈwɪtnəs"
 },
 {
   "id": 3743,
   "word": "WORTHY",
   "pronunciations": "ˈwɝːði"
 },
 {
   "id": 3744,
   "word": "WOUND",
   "pronunciations": "ˈwaʊnd, ˈwuːnd"
 },
 {
   "id": 3745,
   "word": "YANKEES",
   "pronunciations": "ˈjæŋkiːz"
 },
 {
   "id": 3746,
   "word": "ABSOLUTELY",
   "pronunciations": "ˌæbsəˈluːtli"
 },
 {
   "id": 3747,
   "word": "ACQUIRE",
   "pronunciations": "əˈkwaɪɝ"
 },
 {
   "id": 3748,
   "word": "AIDS",
   "pronunciations": "ˈeɪdz"
 },
 {
   "id": 3749,
   "word": "APPROACHING",
   "pronunciations": "əˈproʊtʃɪŋ"
 },
 {
   "id": 3750,
   "word": "BUILDERS",
   "pronunciations": "ˈbɪldɝz"
 },
 {
   "id": 3751,
   "word": "BUTTER",
   "pronunciations": "ˈbʌtɝ"
 },
 {
   "id": 3752,
   "word": "CADY",
   "pronunciations": "ˈkeɪdi"
 },
 {
   "id": 3753,
   "word": "CAP",
   "pronunciations": "ˈkæp"
 },
 {
   "id": 3754,
   "word": "CHRISTMAS",
   "pronunciations": "ˈkrɪsməs"
 },
 {
   "id": 3755,
   "word": "CLAYTON",
   "pronunciations": "ˈkleɪtən"
 },
 {
   "id": 3756,
   "word": "CLINICAL",
   "pronunciations": "ˈklɪnəkəl, ˈklɪnɪkəl"
 },
 {
   "id": 3757,
   "word": "COMBAT",
   "pronunciations": "ˈkɑːmbæt, kəmˈbæt"
 },
 {
   "id": 3758,
   "word": "COMPANY'S",
   "pronunciations": "ˈkʌmpəniːz"
 },
 {
   "id": 3759,
   "word": "CONCEIVED",
   "pronunciations": "kənˈsiːvd"
 },
 {
   "id": 3760,
   "word": "CONCEPTS",
   "pronunciations": "ˈkɑːnsɛpts, ˈkɑːnsɛps"
 },
 {
   "id": 3761,
   "word": "CONSISTING",
   "pronunciations": "kənˈsɪstɪŋ"
 },
 {
   "id": 3762,
   "word": "CUSTOMER",
   "pronunciations": "ˈkʌstəmɝ"
 },
 {
   "id": 3763,
   "word": "DAN",
   "pronunciations": "ˈdæn"
 },
 {
   "id": 3764,
   "word": "DAVIS",
   "pronunciations": "ˈdeɪvəs, ˈdeɪvɪs"
 },
 {
   "id": 3765,
   "word": "DEFINE",
   "pronunciations": "dɪˈfaɪn"
 },
 {
   "id": 3766,
   "word": "DELAWARE",
   "pronunciations": "ˈdɛləˌwɛr"
 },
 {
   "id": 3767,
   "word": "DELICATE",
   "pronunciations": "ˈdɛləkət"
 },
 {
   "id": 3768,
   "word": "DISCIPLINE",
   "pronunciations": "ˈdɪsəplən"
 },
 {
   "id": 3769,
   "word": "DISTRIBUTED",
   "pronunciations": "dɪˈstrɪbjətəd"
 },
 {
   "id": 3770,
   "word": "DULL",
   "pronunciations": "ˈdʌl"
 },
 {
   "id": 3771,
   "word": "EAGER",
   "pronunciations": "ˈiːgɝ"
 },
 {
   "id": 3772,
   "word": "ENEMIES",
   "pronunciations": "ˈɛnəmiːz"
 },
 {
   "id": 3773,
   "word": "EXACT",
   "pronunciations": "ɪgˈzækt"
 },
 {
   "id": 3774,
   "word": "FESTIVAL",
   "pronunciations": "ˈfɛstəvəl, ˈfɛstɪvəl"
 },
 {
   "id": 3775,
   "word": "FIBER",
   "pronunciations": "ˈfaɪbɝ"
 },
 {
   "id": 3776,
   "word": "FLEW",
   "pronunciations": "ˈfluː"
 },
 {
   "id": 3777,
   "word": "FRED",
   "pronunciations": "ˈfrɛd"
 },
 {
   "id": 3778,
   "word": "FRIENDSHIP",
   "pronunciations": "ˈfrɛndʃɪp"
 },
 {
   "id": 3779,
   "word": "FROZEN",
   "pronunciations": "ˈfroʊzən"
 },
 {
   "id": 3780,
   "word": "GENTLE",
   "pronunciations": "ˈdʒɛntəl, ˈdʒɛnəl"
 },
 {
   "id": 3781,
   "word": "GERMANS",
   "pronunciations": "ˈdʒɝːmənz"
 },
 {
   "id": 3782,
   "word": "GRAIN",
   "pronunciations": "ˈgreɪn"
 },
 {
   "id": 3783,
   "word": "GREENWICH",
   "pronunciations": "ˈgrɛnɪtʃ, ˈgriːnˌwɪtʃ"
 },
 {
   "id": 3784,
   "word": "HOLDER",
   "pronunciations": "ˈhoʊldɝ"
 },
 {
   "id": 3785,
   "word": "HORIZON",
   "pronunciations": "hɝˈaɪzən"
 },
 {
   "id": 3786,
   "word": "HUGHES",
   "pronunciations": "ˈhjuːz, ˈjuːz"
 },
 {
   "id": 3787,
   "word": "IMAGINED",
   "pronunciations": "ˌɪˈmædʒənd"
 },
 {
   "id": 3788,
   "word": "INJURY",
   "pronunciations": "ˈɪndʒɝi"
 },
 {
   "id": 3789,
   "word": "INSIST",
   "pronunciations": "ˌɪnˈsɪst"
 },
 {
   "id": 3790,
   "word": "JEFFERSON",
   "pronunciations": "ˈdʒɛfɝsən"
 },
 {
   "id": 3791,
   "word": "JUDGMENTS",
   "pronunciations": "ˈdʒʌdʒmənts"
 },
 {
   "id": 3792,
   "word": "JULIA",
   "pronunciations": "ˈdʒuːljə"
 },
 {
   "id": 3793,
   "word": "LITERALLY",
   "pronunciations": "ˈlɪtɝəli, ˈlɪtrəli"
 },
 {
   "id": 3794,
   "word": "MAGNIFICENT",
   "pronunciations": "mægˈnɪfəsənt, mægˈnɪfɪsənt"
 },
 {
   "id": 3795,
   "word": "MARRIAGES",
   "pronunciations": "ˈmɛrɪdʒɪz"
 },
 {
   "id": 3796,
   "word": "MARSHALL",
   "pronunciations": "ˈmɑːrʃəl"
 },
 {
   "id": 3797,
   "word": "MINIMAL",
   "pronunciations": "ˈmɪnəməl"
 },
 {
   "id": 3798,
   "word": "MIRROR",
   "pronunciations": "ˈmɪrɝ"
 },
 {
   "id": 3799,
   "word": "MYRA",
   "pronunciations": "ˈmaɪrə"
 },
 {
   "id": 3800,
   "word": "NEWPORT",
   "pronunciations": "ˈnuːpɔrt"
 },
 {
   "id": 3801,
   "word": "OBSERVATION",
   "pronunciations": "ˌɑːbzɝˈveɪʃən"
 },
 {
   "id": 3802,
   "word": "OCCURS",
   "pronunciations": "əˈkɝːz"
 },
 {
   "id": 3803,
   "word": "OPERATED",
   "pronunciations": "ˈɑːpɝˌeɪtəd"
 },
 {
   "id": 3804,
   "word": "ORAL",
   "pronunciations": "ˈɔrəl"
 },
 {
   "id": 3805,
   "word": "OURS",
   "pronunciations": "ˈaʊɝz, ˈɑːrz, ˈaʊrz"
 },
 {
   "id": 3806,
   "word": "OUTDOOR",
   "pronunciations": "ˈaʊtˌdɔr"
 },
 {
   "id": 3807,
   "word": "PASSES",
   "pronunciations": "ˈpæsəz, ˈpæsɪz"
 },
 {
   "id": 3808,
   "word": "PERMISSION",
   "pronunciations": "pɝˈmɪʃən"
 },
 {
   "id": 3809,
   "word": "PERMITS",
   "pronunciations": "pɝˈmɪts, ˈpɝːˌmɪts"
 },
 {
   "id": 3810,
   "word": "PISTOL",
   "pronunciations": "ˈpɪstəl"
 },
 {
   "id": 3811,
   "word": "PLACING",
   "pronunciations": "ˈpleɪsɪŋ"
 },
 {
   "id": 3812,
   "word": "PREFER",
   "pronunciations": "prəˈfɝː, prɪˈfɝː, priːˈfɝː"
 },
 {
   "id": 3813,
   "word": "PREVENTED",
   "pronunciations": "prɪˈvɛntɪd, priːˈvɛntɪd, prɪˈvɛnɪd, priːˈvɛnɪd"
 },
 {
   "id": 3814,
   "word": "PREVENTION",
   "pronunciations": "priːˈvɛnʃən"
 },
 {
   "id": 3815,
   "word": "PROFOUND",
   "pronunciations": "proʊˈfaʊnd"
 },
 {
   "id": 3816,
   "word": "PUBLICITY",
   "pronunciations": "pəˈblɪsəti, pəˈblɪsɪti"
 },
 {
   "id": 3817,
   "word": "PUBLICLY",
   "pronunciations": "ˈpʌblɪkli"
 },
 {
   "id": 3818,
   "word": "PULMONARY",
   "pronunciations": "ˈpʊlməˌnɛri"
 },
 {
   "id": 3819,
   "word": "PURSUANT",
   "pronunciations": "pɝˈsuːənt"
 },
 {
   "id": 3820,
   "word": "RANCH",
   "pronunciations": "ˈræntʃ"
 },
 {
   "id": 3821,
   "word": "REFER",
   "pronunciations": "rəˈfɝː, rɪˈfɝː"
 },
 {
   "id": 3822,
   "word": "REORGANIZATION",
   "pronunciations": "ˌriːɔrgənəˈzeɪʃən"
 },
 {
   "id": 3823,
   "word": "REPUTATION",
   "pronunciations": "ˌrɛpjəˈteɪʃən"
 },
 {
   "id": 3824,
   "word": "REQUIREMENT",
   "pronunciations": "rɪˈkwaɪrmənt"
 },
 {
   "id": 3825,
   "word": "RESERVED",
   "pronunciations": "rɪˈzɝːvd, riːˈzɝːvd"
 },
 {
   "id": 3826,
   "word": "RESTRICTIONS",
   "pronunciations": "riːˈstrɪkʃənz"
 },
 {
   "id": 3827,
   "word": "ROOTS",
   "pronunciations": "ˈruːts"
 },
 {
   "id": 3828,
   "word": "RUSHED",
   "pronunciations": "ˈrʌʃt"
 },
 {
   "id": 3829,
   "word": "SCATTERED",
   "pronunciations": "ˈskætɝd"
 },
 {
   "id": 3830,
   "word": "SCHOLARS",
   "pronunciations": "ˈskɑːlɝz"
 },
 {
   "id": 3831,
   "word": "SCOPE",
   "pronunciations": "ˈskoʊp"
 },
 {
   "id": 3832,
   "word": "SECONDS",
   "pronunciations": "ˈsɛkəndz"
 },
 {
   "id": 3833,
   "word": "SHAYNE",
   "pronunciations": "ˈʃeɪn"
 },
 {
   "id": 3834,
   "word": "SHIRT",
   "pronunciations": "ˈʃɝːt"
 },
 {
   "id": 3835,
   "word": "SHOOT",
   "pronunciations": "ˈʃuːt"
 },
 {
   "id": 3836,
   "word": "SHOPPING",
   "pronunciations": "ˈʃɑːpɪŋ"
 },
 {
   "id": 3837,
   "word": "SLEPT",
   "pronunciations": "ˈslɛpt"
 },
 {
   "id": 3838,
   "word": "SUITE",
   "pronunciations": "ˈswiːt"
 },
 {
   "id": 3839,
   "word": "SUPPORTING",
   "pronunciations": "səˈpɔrtɪŋ"
 },
 {
   "id": 3840,
   "word": "SURPLUS",
   "pronunciations": "ˈsɝːpləs"
 },
 {
   "id": 3841,
   "word": "SURROUNDING",
   "pronunciations": "sɝˈaʊndɪŋ"
 },
 {
   "id": 3842,
   "word": "SUSPICION",
   "pronunciations": "səˈspɪʃən"
 },
 {
   "id": 3843,
   "word": "T.",
   "pronunciations": "ˈtiː"
 },
 {
   "id": 3844,
   "word": "THEOLOGICAL",
   "pronunciations": "ˌθiːəˈlɑːdʒɪkəl"
 },
 {
   "id": 3845,
   "word": "UPWARD",
   "pronunciations": "ˈʌpwɝd"
 },
 {
   "id": 3846,
   "word": "UTTERLY",
   "pronunciations": "ˈʌtɝli"
 },
 {
   "id": 3847,
   "word": "V",
   "pronunciations": "ˈviː"
 },
 {
   "id": 3848,
   "word": "VETERAN",
   "pronunciations": "ˈvɛtɝən, ˈvɛtrən"
 },
 {
   "id": 3849,
   "word": "VICTIM",
   "pronunciations": "ˈvɪktɪm"
 },
 {
   "id": 3850,
   "word": "VOTED",
   "pronunciations": "ˈvoʊtəd, ˈvoʊtɪd"
 },
 {
   "id": 3851,
   "word": "WEEKEND",
   "pronunciations": "ˈwiːˌkɛnd, ˈwiːˌkɪnd"
 },
 {
   "id": 3852,
   "word": "WHEREVER",
   "pronunciations": "wɛˈrɛvɝ, hwɛˈrɛvɝ"
 },
 {
   "id": 3853,
   "word": "WINGS",
   "pronunciations": "ˈwɪŋz"
 },
 {
   "id": 3854,
   "word": "WOMEN'S",
   "pronunciations": "ˈwɪmənz"
 },
 {
   "id": 3855,
   "word": "ACQUIRED",
   "pronunciations": "əˈkwaɪɝd"
 },
 {
   "id": 3856,
   "word": "AESTHETIC",
   "pronunciations": "ɛsˈθɛtɪk"
 },
 {
   "id": 3857,
   "word": "APPRECIATE",
   "pronunciations": "əˈpriːʃiːˌeɪt"
 },
 {
   "id": 3858,
   "word": "ARLENE",
   "pronunciations": "ˈɑːrˌliːn"
 },
 {
   "id": 3859,
   "word": "ASSIST",
   "pronunciations": "əˈsɪst"
 },
 {
   "id": 3860,
   "word": "BATH",
   "pronunciations": "ˈbæθ"
 },
 {
   "id": 3861,
   "word": "BEARD",
   "pronunciations": "ˈbɪrd"
 },
 {
   "id": 3862,
   "word": "BEARS",
   "pronunciations": "ˈbɛrz"
 },
 {
   "id": 3863,
   "word": "BILLY",
   "pronunciations": "ˈbɪli"
 },
 {
   "id": 3864,
   "word": "BRIDGES",
   "pronunciations": "ˈbrɪdʒəz, ˈbrɪdʒɪz"
 },
 {
   "id": 3865,
   "word": "CARD",
   "pronunciations": "ˈkɑːrd"
 },
 {
   "id": 3866,
   "word": "CAVALRY",
   "pronunciations": "ˈkævəlri"
 },
 {
   "id": 3867,
   "word": "CELLAR",
   "pronunciations": "ˈsɛlɝ"
 },
 {
   "id": 3868,
   "word": "CENTS",
   "pronunciations": "ˈsɛnts, ˈsɛns"
 },
 {
   "id": 3869,
   "word": "CHARM",
   "pronunciations": "ˈtʃɑːrm"
 },
 {
   "id": 3870,
   "word": "CLIMATE",
   "pronunciations": "ˈklaɪmət, ˈklaɪmɪt"
 },
 {
   "id": 3871,
   "word": "CONCERTS",
   "pronunciations": "ˈkɑːnsɝts, kənˈsɝːts"
 },
 {
   "id": 3872,
   "word": "CONTEST",
   "pronunciations": "ˈkɑːntɛst, kənˈtɛst"
 },
 {
   "id": 3873,
   "word": "CONTROVERSY",
   "pronunciations": "ˈkɑːntrəˌvɝːsi"
 },
 {
   "id": 3874,
   "word": "COOLIDGE",
   "pronunciations": "ˈkuːlɪdʒ"
 },
 {
   "id": 3875,
   "word": "CRITICS",
   "pronunciations": "ˈkrɪtɪks"
 },
 {
   "id": 3876,
   "word": "DELIGHTFUL",
   "pronunciations": "dɪˈlaɪtfəl"
 },
 {
   "id": 3877,
   "word": "DESPERATE",
   "pronunciations": "ˈdɛsprɪt, ˈdɛspɝɪt"
 },
 {
   "id": 3878,
   "word": "DISASTER",
   "pronunciations": "dɪˈzæstɝ"
 },
 {
   "id": 3879,
   "word": "DISTURBED",
   "pronunciations": "dɪˈstɝːbd"
 },
 {
   "id": 3880,
   "word": "EILEEN",
   "pronunciations": "aɪˈliːn"
 },
 {
   "id": 3881,
   "word": "ELECTRICITY",
   "pronunciations": "ɪˌlɛkˈtrɪsəti"
 },
 {
   "id": 3882,
   "word": "ELIMINATE",
   "pronunciations": "ɪˈlɪməˌneɪt"
 },
 {
   "id": 3883,
   "word": "EMERGED",
   "pronunciations": "ɪˈmɝːdʒd, ˈiːmɝdʒd"
 },
 {
   "id": 3884,
   "word": "ENTRY",
   "pronunciations": "ˈɛntri"
 },
 {
   "id": 3885,
   "word": "ESTABLISHING",
   "pronunciations": "ɪˈstæblɪʃɪŋ"
 },
 {
   "id": 3886,
   "word": "EXCEPTIONS",
   "pronunciations": "ɪkˈsɛpʃənz"
 },
 {
   "id": 3887,
   "word": "FEEDING",
   "pronunciations": "ˈfiːdɪŋ"
 },
 {
   "id": 3888,
   "word": "FRAMES",
   "pronunciations": "ˈfreɪmz"
 },
 {
   "id": 3889,
   "word": "FRIGHTENED",
   "pronunciations": "ˈfraɪtənd"
 },
 {
   "id": 3890,
   "word": "GEAR",
   "pronunciations": "ˈgɪr"
 },
 {
   "id": 3891,
   "word": "GREG",
   "pronunciations": "ˈgrɛg"
 },
 {
   "id": 3892,
   "word": "GYRO",
   "pronunciations": "ˈdʒaɪˌroʊ"
 },
 {
   "id": 3893,
   "word": "HANDLED",
   "pronunciations": "ˈhændəld"
 },
 {
   "id": 3894,
   "word": "HANG",
   "pronunciations": "ˈhæŋ"
 },
 {
   "id": 3895,
   "word": "IDENTIFY",
   "pronunciations": "aɪˈdɛntəˌfaɪ"
 },
 {
   "id": 3896,
   "word": "ILL",
   "pronunciations": "ˈɪl"
 },
 {
   "id": 3897,
   "word": "INHERENT",
   "pronunciations": "ˌɪnˈhɛrənt"
 },
 {
   "id": 3898,
   "word": "INSTRUCTION",
   "pronunciations": "ˌɪnˈstrʌkʃən"
 },
 {
   "id": 3899,
   "word": "INSTRUMENTS",
   "pronunciations": "ˈɪnstrəmənts"
 },
 {
   "id": 3900,
   "word": "INTELLIGENT",
   "pronunciations": "ˌɪnˈtɛlədʒənt"
 },
 {
   "id": 3901,
   "word": "INVITED",
   "pronunciations": "ˌɪnˈvaɪtəd, ˌɪnˈvaɪtɪd"
 },
 {
   "id": 3902,
   "word": "JEW",
   "pronunciations": "ˈdʒuː"
 },
 {
   "id": 3903,
   "word": "JOHNNIE",
   "pronunciations": "ˈdʒɑːni"
 },
 {
   "id": 3904,
   "word": "JUSTIFY",
   "pronunciations": "ˈdʒʌstəˌfaɪ"
 },
 {
   "id": 3905,
   "word": "KENNEDY'S",
   "pronunciations": "ˈkɛnədiːz"
 },
 {
   "id": 3906,
   "word": "KINGDOM",
   "pronunciations": "ˈkɪŋdəm"
 },
 {
   "id": 3907,
   "word": "LANDING",
   "pronunciations": "ˈlændɪŋ"
 },
 {
   "id": 3908,
   "word": "LEGEND",
   "pronunciations": "ˈlɛdʒənd"
 },
 {
   "id": 3909,
   "word": "LIBERALS",
   "pronunciations": "ˈlɪˌbɝːəlz"
 },
 {
   "id": 3910,
   "word": "LIVELY",
   "pronunciations": "ˈlaɪvli"
 },
 {
   "id": 3911,
   "word": "MARGINAL",
   "pronunciations": "ˈmɑːrdʒənəl"
 },
 {
   "id": 3912,
   "word": "MARSHAL",
   "pronunciations": "ˈmɑːrʃəl"
 },
 {
   "id": 3913,
   "word": "MEALS",
   "pronunciations": "ˈmiːlz"
 },
 {
   "id": 3914,
   "word": "MITCHELL",
   "pronunciations": "ˈmɪtʃəl"
 },
 {
   "id": 3915,
   "word": "MOUNT",
   "pronunciations": "ˈmaʊnt"
 },
 {
   "id": 3916,
   "word": "MUTUAL",
   "pronunciations": "ˈmjuːtʃuːəl"
 },
 {
   "id": 3917,
   "word": "MYSTERIOUS",
   "pronunciations": "mɪˈstɪriːəs"
 },
 {
   "id": 3918,
   "word": "O",
   "pronunciations": "ˈoʊ"
 },
 {
   "id": 3919,
   "word": "OUTCOME",
   "pronunciations": "ˈaʊtˌkəm"
 },
 {
   "id": 3920,
   "word": "OVERCOME",
   "pronunciations": "ˈoʊvɝˌkəm"
 },
 {
   "id": 3921,
   "word": "PALFREY",
   "pronunciations": "ˈpælfri"
 },
 {
   "id": 3922,
   "word": "PART-TIME",
   "pronunciations": "ˈpɑːrtˈtaɪm"
 },
 {
   "id": 3923,
   "word": "PATCHEN",
   "pronunciations": "ˈpætʃən"
 },
 {
   "id": 3924,
   "word": "PAYING",
   "pronunciations": "ˈpeɪɪŋ"
 },
 {
   "id": 3925,
   "word": "PEACEFUL",
   "pronunciations": "ˈpiːsfəl"
 },
 {
   "id": 3926,
   "word": "PERSPECTIVE",
   "pronunciations": "pɝˈspɛktɪv"
 },
 {
   "id": 3927,
   "word": "PHENOMENA",
   "pronunciations": "fəˈnɑːmənə"
 },
 {
   "id": 3928,
   "word": "PHILOSOPHICAL",
   "pronunciations": "ˌfɪləˈsɑːfɪkəl"
 },
 {
   "id": 3929,
   "word": "PLANES",
   "pronunciations": "ˈpleɪnz"
 },
 {
   "id": 3930,
   "word": "POINTING",
   "pronunciations": "ˈpɔɪntɪŋ"
 },
 {
   "id": 3931,
   "word": "PREFERRED",
   "pronunciations": "prəˈfɝːd, prɪˈfɝːd, priːˈfɝːd"
 },
 {
   "id": 3932,
   "word": "PREMIER",
   "pronunciations": "prɛˈmɪr, priːˈmɪr"
 },
 {
   "id": 3933,
   "word": "PROMOTION",
   "pronunciations": "prəˈmoʊʃən, pɝˈmoʊʃən"
 },
 {
   "id": 3934,
   "word": "QUOTED",
   "pronunciations": "ˈkwoʊtɪd"
 },
 {
   "id": 3935,
   "word": "RECALLED",
   "pronunciations": "rɪˈkɔld"
 },
 {
   "id": 3936,
   "word": "REGISTER",
   "pronunciations": "ˈrɛdʒɪstɝ"
 },
 {
   "id": 3937,
   "word": "RELEASED",
   "pronunciations": "riːˈliːst"
 },
 {
   "id": 3938,
   "word": "REPEAT",
   "pronunciations": "rɪˈpiːt, riːˈpiːt"
 },
 {
   "id": 3939,
   "word": "RETIREMENT",
   "pronunciations": "riːˈtaɪɝmənt, rɪˈtaɪɝmənt"
 },
 {
   "id": 3940,
   "word": "REVENUES",
   "pronunciations": "ˈrɛvəˌnuːz, ˈrɛvənˌjuːz"
 },
 {
   "id": 3941,
   "word": "SARAH",
   "pronunciations": "ˈsɛrə"
 },
 {
   "id": 3942,
   "word": "SESSIONS",
   "pronunciations": "ˈsɛʃənz"
 },
 {
   "id": 3943,
   "word": "SETTLEMENT",
   "pronunciations": "ˈsɛtəlmənt"
 },
 {
   "id": 3944,
   "word": "SIXTH",
   "pronunciations": "ˈsɪksθ"
 },
 {
   "id": 3945,
   "word": "SNAKES",
   "pronunciations": "ˈsneɪks"
 },
 {
   "id": 3946,
   "word": "SOPHISTICATED",
   "pronunciations": "səˈfɪstəˌkeɪtɪd, səˈfɪstɪˌkeɪtəd"
 },
 {
   "id": 3947,
   "word": "SOUTHERNERS",
   "pronunciations": "ˈsʌðɝnɝz"
 },
 {
   "id": 3948,
   "word": "STARING",
   "pronunciations": "ˈstɛrɪŋ"
 },
 {
   "id": 3949,
   "word": "STOCKHOLDERS",
   "pronunciations": "ˈstɑːkˌhoʊldɝz"
 },
 {
   "id": 3950,
   "word": "STORM",
   "pronunciations": "ˈstɔrm"
 },
 {
   "id": 3951,
   "word": "STRETCH",
   "pronunciations": "ˈstrɛtʃ"
 },
 {
   "id": 3952,
   "word": "SUBMARINE",
   "pronunciations": "ˈsʌbmɝˌiːn, ˌsəbmɝˈiːn"
 },
 {
   "id": 3953,
   "word": "SWITCHES",
   "pronunciations": "ˈswɪtʃəz, ˈswɪtʃɪz"
 },
 {
   "id": 3954,
   "word": "TANGENT",
   "pronunciations": "ˈtændʒənt"
 },
 {
   "id": 3955,
   "word": "TEMPERATURES",
   "pronunciations": "ˈtɛmprətʃɝz, ˈtɛmpɝətʃɝz"
 },
 {
   "id": 3956,
   "word": "THREATENING",
   "pronunciations": "ˈθrɛtənɪŋ, ˈθrɛtnɪŋ"
 },
 {
   "id": 3957,
   "word": "TRADERS",
   "pronunciations": "ˈtreɪdɝz"
 },
 {
   "id": 3958,
   "word": "TREAT",
   "pronunciations": "ˈtriːt"
 },
 {
   "id": 3959,
   "word": "TREMBLING",
   "pronunciations": "ˈtrɛmbəlɪŋ, ˈtrɛmblɪŋ"
 },
 {
   "id": 3960,
   "word": "UNHAPPY",
   "pronunciations": "ənˈhæpi"
 },
 {
   "id": 3961,
   "word": "URETHANE",
   "pronunciations": "ˈjɝːəˌθeɪn"
 },
 {
   "id": 3962,
   "word": "VARIABLES",
   "pronunciations": "ˈvɛriːəbəlz"
 },
 {
   "id": 3963,
   "word": "VELOCITY",
   "pronunciations": "vəˈlɑːsəti"
 },
 {
   "id": 3964,
   "word": "WARS",
   "pronunciations": "ˈwɔrz"
 },
 {
   "id": 3965,
   "word": "WIDOW",
   "pronunciations": "ˈwɪdoʊ"
 },
 {
   "id": 3966,
   "word": "ZEN",
   "pronunciations": "ˈzɛn"
 },
 {
   "id": 3967,
   "word": "ABANDONED",
   "pronunciations": "əˈbændənd"
 },
 {
   "id": 3968,
   "word": "ABOARD",
   "pronunciations": "əˈbɔrd"
 },
 {
   "id": 3969,
   "word": "ACCUSED",
   "pronunciations": "əˈkjuːzd"
 },
 {
   "id": 3970,
   "word": "ADULT",
   "pronunciations": "əˈdʌlt, ˈædəlt"
 },
 {
   "id": 3971,
   "word": "AL",
   "pronunciations": "ˈæl"
 },
 {
   "id": 3972,
   "word": "ALEC",
   "pronunciations": "ˈælɪk"
 },
 {
   "id": 3973,
   "word": "ALLOWANCES",
   "pronunciations": "əˈlaʊənsɪz"
 },
 {
   "id": 3974,
   "word": "AMATEUR",
   "pronunciations": "ˈæməˌtʃɝː, ˈæməˌtɝː"
 },
 {
   "id": 3975,
   "word": "APPLICATIONS",
   "pronunciations": "ˌæpləˈkeɪʃənz"
 },
 {
   "id": 3976,
   "word": "APPROACHES",
   "pronunciations": "əˈproʊtʃɪz"
 },
 {
   "id": 3977,
   "word": "ATTACHED",
   "pronunciations": "əˈtætʃt"
 },
 {
   "id": 3978,
   "word": "ATTACKED",
   "pronunciations": "əˈtækt"
 },
 {
   "id": 3979,
   "word": "ATTRACTED",
   "pronunciations": "əˈtræktəd"
 },
 {
   "id": 3980,
   "word": "BARTON",
   "pronunciations": "ˈbɑːrtən"
 },
 {
   "id": 3981,
   "word": "BEARING",
   "pronunciations": "ˈbɛrɪŋ"
 },
 {
   "id": 3982,
   "word": "BLANCHE",
   "pronunciations": "ˈblæntʃ"
 },
 {
   "id": 3983,
   "word": "BREAKING",
   "pronunciations": "ˈbreɪkɪŋ"
 },
 {
   "id": 3984,
   "word": "CANCER",
   "pronunciations": "ˈkænsɝ"
 },
 {
   "id": 3985,
   "word": "CAROLINA",
   "pronunciations": "ˌkɛrəˈlaɪnə"
 },
 {
   "id": 3986,
   "word": "CHIN",
   "pronunciations": "ˈtʃɪn"
 },
 {
   "id": 3987,
   "word": "CIGARETTE",
   "pronunciations": "ˌsɪgəˈrɛt"
 },
 {
   "id": 3988,
   "word": "COCKTAIL",
   "pronunciations": "ˈkɑːkˌteɪl"
 },
 {
   "id": 3989,
   "word": "COMPONENT",
   "pronunciations": "kəmˈpoʊnənt"
 },
 {
   "id": 3990,
   "word": "COMPOSITION",
   "pronunciations": "ˌkɑːmpəˈzɪʃən"
 },
 {
   "id": 3991,
   "word": "CONDUCTOR",
   "pronunciations": "kənˈdʌktɝ"
 },
 {
   "id": 3992,
   "word": "CONFERENCES",
   "pronunciations": "ˈkɑːnfɝənsəz, ˈkɑːnfrənsəz"
 },
 {
   "id": 3993,
   "word": "CONSTITUTIONAL",
   "pronunciations": "ˌkɑːnstəˈtuːʃənəl"
 },
 {
   "id": 3994,
   "word": "CONTACTS",
   "pronunciations": "ˈkɑːnˌtækts, ˈkɑːnˌtæks"
 },
 {
   "id": 3995,
   "word": "CONTINUALLY",
   "pronunciations": "kənˈtɪnjuːəli, kənˈtɪnjuːli"
 },
 {
   "id": 3996,
   "word": "CONTINUITY",
   "pronunciations": "ˌkɑːntəˈnuːəti"
 },
 {
   "id": 3997,
   "word": "CORPORATIONS",
   "pronunciations": "ˌkɔrpɝˈeɪʃənz"
 },
 {
   "id": 3998,
   "word": "CORRESPONDENCE",
   "pronunciations": "ˌkɔrəˈspɑːndəns"
 },
 {
   "id": 3999,
   "word": "COVERAGE",
   "pronunciations": "ˈkʌvɝədʒ, ˈkʌvɝɪdʒ, ˈkʌvrɪdʒ"
 },
 {
   "id": 4000,
   "word": "CRITIC",
   "pronunciations": "ˈkrɪtɪk"
 },
 {
   "id": 4001,
   "word": "DEALER",
   "pronunciations": "ˈdiːlɝ"
 },
 {
   "id": 4002,
   "word": "DELAYED",
   "pronunciations": "dɪˈleɪd"
 },
 {
   "id": 4003,
   "word": "DEMONSTRATION",
   "pronunciations": "ˌdɛmənˈstreɪʃən"
 },
 {
   "id": 4004,
   "word": "DEPARTMENTS",
   "pronunciations": "dɪˈpɑːrtmənts"
 },
 {
   "id": 4005,
   "word": "DESTRUCTIVE",
   "pronunciations": "dɪˈstrʌktɪv"
 },
 {
   "id": 4006,
   "word": "DETERGENT",
   "pronunciations": "dɪˈtɝːdʒənt"
 },
 {
   "id": 4007,
   "word": "DEVIL",
   "pronunciations": "ˈdɛvəl"
 },
 {
   "id": 4008,
   "word": "DILEMMA",
   "pronunciations": "dɪˈlɛmə"
 },
 {
   "id": 4009,
   "word": "DISK",
   "pronunciations": "ˈdɪsk"
 },
 {
   "id": 4010,
   "word": "EUGENE",
   "pronunciations": "juːˈdʒiːn, ˈjuːdʒiːn"
 },
 {
   "id": 4011,
   "word": "EVIDENTLY",
   "pronunciations": "ˈɛvədəntli"
 },
 {
   "id": 4012,
   "word": "EXHIBIT",
   "pronunciations": "ɪgˈzɪbɪt"
 },
 {
   "id": 4013,
   "word": "EXPLORATION",
   "pronunciations": "ˌɛksplɝˈeɪʃən, ˌɛksplɔˈreɪʃən"
 },
 {
   "id": 4014,
   "word": "EXPOSURE",
   "pronunciations": "ɪkˈspoʊʒɝ"
 },
 {
   "id": 4015,
   "word": "FAINT",
   "pronunciations": "ˈfeɪnt"
 },
 {
   "id": 4016,
   "word": "FIST",
   "pronunciations": "ˈfɪst"
 },
 {
   "id": 4017,
   "word": "FLEXIBLE",
   "pronunciations": "ˈflɛksəbəl"
 },
 {
   "id": 4018,
   "word": "FOG",
   "pronunciations": "ˈfɑːg, ˈfɔg"
 },
 {
   "id": 4019,
   "word": "FORTUNE",
   "pronunciations": "ˈfɔrtʃən, ˈfɔrtʃuːn"
 },
 {
   "id": 4020,
   "word": "GENEROUS",
   "pronunciations": "ˈdʒɛnɝəs"
 },
 {
   "id": 4021,
   "word": "GLANCED",
   "pronunciations": "ˈglænst"
 },
 {
   "id": 4022,
   "word": "GRATEFUL",
   "pronunciations": "ˈgreɪtfəl"
 },
 {
   "id": 4023,
   "word": "HARM",
   "pronunciations": "ˈhɑːrm"
 },
 {
   "id": 4024,
   "word": "HIRED",
   "pronunciations": "ˈhaɪɝd"
 },
 {
   "id": 4025,
   "word": "HONEY",
   "pronunciations": "ˈhʌni"
 },
 {
   "id": 4026,
   "word": "HOUSTON",
   "pronunciations": "ˈhjuːstən"
 },
 {
   "id": 4027,
   "word": "IMPRESSIONS",
   "pronunciations": "ˌɪmˈprɛʃənz"
 },
 {
   "id": 4028,
   "word": "INSPIRED",
   "pronunciations": "ˌɪnˈspaɪɝd"
 },
 {
   "id": 4029,
   "word": "INTERVALS",
   "pronunciations": "ˈɪntɝvəlz"
 },
 {
   "id": 4030,
   "word": "JERSEY",
   "pronunciations": "ˈdʒɝːzi"
 },
 {
   "id": 4031,
   "word": "LANDS",
   "pronunciations": "ˈlændz"
 },
 {
   "id": 4032,
   "word": "LONELY",
   "pronunciations": "ˈloʊnli"
 },
 {
   "id": 4033,
   "word": "MAGAZINES",
   "pronunciations": "ˈmægəˌziːnz"
 },
 {
   "id": 4034,
   "word": "MAGNETIC",
   "pronunciations": "mægˈnɛtɪk"
 },
 {
   "id": 4035,
   "word": "MOTHERS",
   "pronunciations": "ˈmʌðɝz"
 },
 {
   "id": 4036,
   "word": "NATO",
   "pronunciations": "ˈneɪtoʊ"
 },
 {
   "id": 4037,
   "word": "NICK",
   "pronunciations": "ˈnɪk"
 },
 {
   "id": 4038,
   "word": "NIXON",
   "pronunciations": "ˈnɪksən"
 },
 {
   "id": 4039,
   "word": "NOON",
   "pronunciations": "ˈnuːn"
 },
 {
   "id": 4040,
   "word": "NORTHWEST",
   "pronunciations": "ˌnɔrθˈwɛst"
 },
 {
   "id": 4041,
   "word": "O'BANION",
   "pronunciations": "oʊˈbænjən"
 },
 {
   "id": 4042,
   "word": "OBSERVE",
   "pronunciations": "əbˈzɝːv"
 },
 {
   "id": 4043,
   "word": "OPERATIONAL",
   "pronunciations": "ˌɑːpɝˈeɪʃənəl"
 },
 {
   "id": 4044,
   "word": "OWEN",
   "pronunciations": "ˈoʊən"
 },
 {
   "id": 4045,
   "word": "PACK",
   "pronunciations": "ˈpæk"
 },
 {
   "id": 4046,
   "word": "PAINFUL",
   "pronunciations": "ˈpeɪnfəl"
 },
 {
   "id": 4047,
   "word": "PARADE",
   "pronunciations": "pɝˈeɪd"
 },
 {
   "id": 4048,
   "word": "PARTIALLY",
   "pronunciations": "ˈpɑːrʃəli, ˈpɑːrʃli"
 },
 {
   "id": 4049,
   "word": "PATROL",
   "pronunciations": "pəˈtroʊl"
 },
 {
   "id": 4050,
   "word": "PENNY",
   "pronunciations": "ˈpɛni"
 },
 {
   "id": 4051,
   "word": "PILE",
   "pronunciations": "ˈpaɪl"
 },
 {
   "id": 4052,
   "word": "PITTSBURGH",
   "pronunciations": "ˈpɪtsbɝg"
 },
 {
   "id": 4053,
   "word": "POND",
   "pronunciations": "ˈpɑːnd"
 },
 {
   "id": 4054,
   "word": "PRESSING",
   "pronunciations": "ˈprɛsɪŋ"
 },
 {
   "id": 4055,
   "word": "PROBABLE",
   "pronunciations": "ˈprɑːbəbəl"
 },
 {
   "id": 4056,
   "word": "PROCEEDED",
   "pronunciations": "prəˈsiːdəd, proʊˈsiːdɪd"
 },
 {
   "id": 4057,
   "word": "PRODUCTIVE",
   "pronunciations": "prəˈdʌktɪv, proʊˈdʌktɪv, pɝˈdʌktɪv"
 },
 {
   "id": 4058,
   "word": "PROSPECT",
   "pronunciations": "ˈprɑːspɛkt"
 },
 {
   "id": 4059,
   "word": "PULLING",
   "pronunciations": "ˈpʊlɪŋ"
 },
 {
   "id": 4060,
   "word": "PUPILS",
   "pronunciations": "ˈpjuːpəlz"
 },
 {
   "id": 4061,
   "word": "RACIAL",
   "pronunciations": "ˈreɪʃəl"
 },
 {
   "id": 4062,
   "word": "RATIONAL",
   "pronunciations": "ˈræʃənəl, ˈræʃnəl"
 },
 {
   "id": 4063,
   "word": "REACHES",
   "pronunciations": "ˈriːtʃəz, ˈriːtʃɪz"
 },
 {
   "id": 4064,
   "word": "RECOMMEND",
   "pronunciations": "ˌrɛkəˈmɛnd"
 },
 {
   "id": 4065,
   "word": "REFLECT",
   "pronunciations": "rəˈflɛkt, rɪˈflɛkt"
 },
 {
   "id": 4066,
   "word": "REGIMENT",
   "pronunciations": "ˈrɛdʒəmənt"
 },
 {
   "id": 4067,
   "word": "RESPONSIBILITIES",
   "pronunciations": "riːˌspɑːnsəˈbɪlətiːz"
 },
 {
   "id": 4068,
   "word": "RITUAL",
   "pronunciations": "ˈrɪtʃuːəl"
 },
 {
   "id": 4069,
   "word": "ROUGHLY",
   "pronunciations": "ˈrʌfli"
 },
 {
   "id": 4070,
   "word": "SADDLE",
   "pronunciations": "ˈsædəl"
 },
 {
   "id": 4071,
   "word": "SHELTERS",
   "pronunciations": "ˈʃɛltɝz"
 },
 {
   "id": 4072,
   "word": "STADIUM",
   "pronunciations": "ˈsteɪdiːəm"
 },
 {
   "id": 4073,
   "word": "STAR",
   "pronunciations": "ˈstɑːr"
 },
 {
   "id": 4074,
   "word": "STRUCTURAL",
   "pronunciations": "ˈstrʌktʃɝəl"
 },
 {
   "id": 4075,
   "word": "SUBTLE",
   "pronunciations": "ˈsʌtəl"
 },
 {
   "id": 4076,
   "word": "SUCCESSION",
   "pronunciations": "səkˈsɛʃən"
 },
 {
   "id": 4077,
   "word": "SUITS",
   "pronunciations": "ˈsuːts"
 },
 {
   "id": 4078,
   "word": "TERROR",
   "pronunciations": "ˈtɛrɝ"
 },
 {
   "id": 4079,
   "word": "TILGHMAN",
   "pronunciations": "ˈtɪlmən"
 },
 {
   "id": 4080,
   "word": "TIM",
   "pronunciations": "ˈtɪm"
 },
 {
   "id": 4081,
   "word": "TORN",
   "pronunciations": "ˈtɔrn"
 },
 {
   "id": 4082,
   "word": "TRADING",
   "pronunciations": "ˈtreɪdɪŋ"
 },
 {
   "id": 4083,
   "word": "TRANSFORMED",
   "pronunciations": "trænsˈfɔrmd"
 },
 {
   "id": 4084,
   "word": "TRUSTEES",
   "pronunciations": "ˌtrəˈstiːz"
 },
 {
   "id": 4085,
   "word": "TWENTY-FIVE",
   "pronunciations": "ˈtwɛntiːˌfaɪv"
 },
 {
   "id": 4086,
   "word": "VAGUE",
   "pronunciations": "ˈveɪg"
 },
 {
   "id": 4087,
   "word": "VEIN",
   "pronunciations": "ˈveɪn"
 },
 {
   "id": 4088,
   "word": "VIEWED",
   "pronunciations": "vˈjuːd"
 },
 {
   "id": 4089,
   "word": "VIVID",
   "pronunciations": "ˈvɪvəd, ˈvɪvɪd"
 },
 {
   "id": 4090,
   "word": "WALLY",
   "pronunciations": "ˈwɔli, ˈweɪli"
 },
 {
   "id": 4091,
   "word": "WARD",
   "pronunciations": "ˈwɔrd"
 },
 {
   "id": 4092,
   "word": "WILDLY",
   "pronunciations": "ˈwaɪldli"
 },
 {
   "id": 4093,
   "word": "WOODS",
   "pronunciations": "ˈwʊdz"
 },
 {
   "id": 4094,
   "word": "YEAH",
   "pronunciations": "ˈjæ"
 },
 {
   "id": 4095,
   "word": "YOURS",
   "pronunciations": "ˈjʊrz, ˈjɔrz, jɝz"
 },
 {
   "id": 4096,
   "word": "ABSORBED",
   "pronunciations": "əbˈzɔrbd"
 },
 {
   "id": 4097,
   "word": "ACADEMY",
   "pronunciations": "əˈkædəmi"
 },
 {
   "id": 4098,
   "word": "ACCESS",
   "pronunciations": "ˈækˌsɛs"
 },
 {
   "id": 4099,
   "word": "ACCOMPLISH",
   "pronunciations": "əˈkɑːmplɪʃ"
 },
 {
   "id": 4100,
   "word": "ACCURATELY",
   "pronunciations": "ˈækjɝətli"
 },
 {
   "id": 4101,
   "word": "ACTOR",
   "pronunciations": "ˈæktɝ"
 },
 {
   "id": 4102,
   "word": "ADVISORY",
   "pronunciations": "ædˈvaɪzɝi"
 },
 {
   "id": 4103,
   "word": "AIMED",
   "pronunciations": "ˈeɪmd"
 },
 {
   "id": 4104,
   "word": "ANGELS",
   "pronunciations": "ˈeɪndʒəlz"
 },
 {
   "id": 4105,
   "word": "ANNOUNCEMENT",
   "pronunciations": "əˈnaʊnsmɛnt"
 },
 {
   "id": 4106,
   "word": "ARRIVE",
   "pronunciations": "ɝˈaɪv"
 },
 {
   "id": 4107,
   "word": "ASSEMBLED",
   "pronunciations": "əˈsɛmbəld"
 },
 {
   "id": 4108,
   "word": "ASTRONOMY",
   "pronunciations": "əˈstrɑːnəmi"
 },
 {
   "id": 4109,
   "word": "AUTOMOBILES",
   "pronunciations": "ˈɔtəmoʊˌbiːlz, ˌɔtəmoʊˈbiːlz"
 },
 {
   "id": 4110,
   "word": "BACKED",
   "pronunciations": "ˈbækt"
 },
 {
   "id": 4111,
   "word": "BARREL",
   "pronunciations": "ˈbærəl, ˈbɛrəl"
 },
 {
   "id": 4112,
   "word": "BEND",
   "pronunciations": "ˈbɛnd"
 },
 {
   "id": 4113,
   "word": "BIGGEST",
   "pronunciations": "ˈbɪgəst"
 },
 {
   "id": 4114,
   "word": "BORE",
   "pronunciations": "ˈbɔr"
 },
 {
   "id": 4115,
   "word": "BRAVE",
   "pronunciations": "ˈbreɪv"
 },
 {
   "id": 4116,
   "word": "BROADWAY",
   "pronunciations": "ˈbrɔˌdweɪ"
 },
 {
   "id": 4117,
   "word": "CATEGORIES",
   "pronunciations": "ˈkætəˌgɔriːz"
 },
 {
   "id": 4118,
   "word": "CHANCES",
   "pronunciations": "ˈtʃænsəz, ˈtʃænsɪz"
 },
 {
   "id": 4119,
   "word": "CHARMING",
   "pronunciations": "ˈtʃɑːrmɪŋ"
 },
 {
   "id": 4120,
   "word": "CHEAP",
   "pronunciations": "ˈtʃiːp"
 },
 {
   "id": 4121,
   "word": "CITED",
   "pronunciations": "ˈsaɪtəd, ˈsaɪtɪd"
 },
 {
   "id": 4122,
   "word": "CIVILIAN",
   "pronunciations": "səˈvɪljən"
 },
 {
   "id": 4123,
   "word": "CLUBS",
   "pronunciations": "ˈklʌbz"
 },
 {
   "id": 4124,
   "word": "COACH",
   "pronunciations": "ˈkoʊtʃ"
 },
 {
   "id": 4125,
   "word": "CONSISTED",
   "pronunciations": "kənˈsɪstəd, kənˈsɪstɪd"
 },
 {
   "id": 4126,
   "word": "CONTRACTS",
   "pronunciations": "ˈkɑːnˌtrækts, kənˈtrækts"
 },
 {
   "id": 4127,
   "word": "CRIMINAL",
   "pronunciations": "ˈkrɪmənəl"
 },
 {
   "id": 4128,
   "word": "CYCLE",
   "pronunciations": "ˈsaɪkəl"
 },
 {
   "id": 4129,
   "word": "DECLARATION",
   "pronunciations": "ˌdɛklɝˈeɪʃən"
 },
 {
   "id": 4130,
   "word": "DEMOCRACY",
   "pronunciations": "dɪˈmɑːkrəsi"
 },
 {
   "id": 4131,
   "word": "DEPRESSION",
   "pronunciations": "dɪˈprɛʃən"
 },
 {
   "id": 4132,
   "word": "DESIRES",
   "pronunciations": "dɪˈzaɪɝz"
 },
 {
   "id": 4133,
   "word": "DIFFUSION",
   "pronunciations": "dɪˈfjuːʒən"
 },
 {
   "id": 4134,
   "word": "DRAFT",
   "pronunciations": "ˈdræft"
 },
 {
   "id": 4135,
   "word": "DRIVERS",
   "pronunciations": "ˈdraɪvɝz"
 },
 {
   "id": 4136,
   "word": "DRUG",
   "pronunciations": "ˈdrʌg"
 },
 {
   "id": 4137,
   "word": "EMPLOYEE",
   "pronunciations": "ɛmˈplɔɪi, ɪmˈplɔɪi"
 },
 {
   "id": 4138,
   "word": "ENTERING",
   "pronunciations": "ˈɛntɝɪŋ, ˈɛnɝɪŋ"
 },
 {
   "id": 4139,
   "word": "ENTHUSIASTIC",
   "pronunciations": "ɪnˌθuːziːˈæstɪk"
 },
 {
   "id": 4140,
   "word": "ESTIMATES",
   "pronunciations": "ˈɛstəməts, ˈɛstəˌmeɪts"
 },
 {
   "id": 4141,
   "word": "EXCLUSIVELY",
   "pronunciations": "ɪksˈkluːsɪvli"
 },
 {
   "id": 4142,
   "word": "EXPLICIT",
   "pronunciations": "ɪkˈsplɪsət"
 },
 {
   "id": 4143,
   "word": "EXPRESSING",
   "pronunciations": "ɪkˈsprɛsɪŋ"
 },
 {
   "id": 4144,
   "word": "FACTORIES",
   "pronunciations": "ˈfæktɝiːz"
 },
 {
   "id": 4145,
   "word": "FIRING",
   "pronunciations": "ˈfaɪrɪŋ, ˈfaɪɝrɪŋ"
 },
 {
   "id": 4146,
   "word": "FORD",
   "pronunciations": "ˈfɔrd"
 },
 {
   "id": 4147,
   "word": "FORGIVE",
   "pronunciations": "fɝˈgɪv, fɔrˈgɪv"
 },
 {
   "id": 4148,
   "word": "FULL-TIME",
   "pronunciations": "ˈfʊlˌtaɪm"
 },
 {
   "id": 4149,
   "word": "FUNCTIONAL",
   "pronunciations": "ˈfʌŋkʃənəl"
 },
 {
   "id": 4150,
   "word": "HEATING",
   "pronunciations": "ˈhiːtɪŋ"
 },
 {
   "id": 4151,
   "word": "HONORED",
   "pronunciations": "ˈɑːnɝd"
 },
 {
   "id": 4152,
   "word": "INSURE",
   "pronunciations": "ˌɪnˈʃʊr"
 },
 {
   "id": 4153,
   "word": "INTERPRETED",
   "pronunciations": "ˌɪnˈtɝːprətəd"
 },
 {
   "id": 4154,
   "word": "JUMP",
   "pronunciations": "ˈdʒʌmp"
 },
 {
   "id": 4155,
   "word": "LEATHER",
   "pronunciations": "ˈlɛðɝ"
 },
 {
   "id": 4156,
   "word": "LOCK",
   "pronunciations": "ˈlɑːk"
 },
 {
   "id": 4157,
   "word": "MANAGERS",
   "pronunciations": "ˈmænədʒɝz, ˈmænɪdʒɝz"
 },
 {
   "id": 4158,
   "word": "MANUFACTURING",
   "pronunciations": "ˌmænjəˈfæktʃɝɪŋ"
 },
 {
   "id": 4159,
   "word": "MASON",
   "pronunciations": "ˈmeɪsən"
 },
 {
   "id": 4160,
   "word": "MASTERS",
   "pronunciations": "ˈmæstɝz"
 },
 {
   "id": 4161,
   "word": "MATHEMATICAL",
   "pronunciations": "ˌmæθəˈmætɪkəl"
 },
 {
   "id": 4162,
   "word": "MEANINGFUL",
   "pronunciations": "ˈmiːnɪŋfəl"
 },
 {
   "id": 4163,
   "word": "MEXICAN",
   "pronunciations": "ˈmɛksəkən"
 },
 {
   "id": 4164,
   "word": "MOORE",
   "pronunciations": "ˈmʊr, ˈmɔr"
 },
 {
   "id": 4165,
   "word": "MOTEL",
   "pronunciations": "moʊˈtɛl"
 },
 {
   "id": 4166,
   "word": "NARRATIVE",
   "pronunciations": "ˈnærətɪv, ˈnɛrətɪv"
 },
 {
   "id": 4167,
   "word": "NEAREST",
   "pronunciations": "ˈnɪrəst"
 },
 {
   "id": 4168,
   "word": "NEIGHBORING",
   "pronunciations": "ˈneɪbɝɪŋ"
 },
 {
   "id": 4169,
   "word": "NERVOUS",
   "pronunciations": "ˈnɝːvəs"
 },
 {
   "id": 4170,
   "word": "NORMS",
   "pronunciations": "ˈnɔrmz"
 },
 {
   "id": 4171,
   "word": "OCCUPATION",
   "pronunciations": "ˌɑːkjəˈpeɪʃən"
 },
 {
   "id": 4172,
   "word": "PEAS",
   "pronunciations": "ˈpiːz"
 },
 {
   "id": 4173,
   "word": "PHASES",
   "pronunciations": "ˈfeɪzəz, ˈfeɪzɪz"
 },
 {
   "id": 4174,
   "word": "PORTLAND",
   "pronunciations": "ˈpɔrtlənd"
 },
 {
   "id": 4175,
   "word": "PRELIMINARY",
   "pronunciations": "prɪˈlɪməˌnɛri, priːˈlɪməˌnɛri"
 },
 {
   "id": 4176,
   "word": "PROMISING",
   "pronunciations": "ˈprɑːməsɪŋ"
 },
 {
   "id": 4177,
   "word": "PROSPECTS",
   "pronunciations": "ˈprɑːspɛkts, ˈprɑːspɛks"
 },
 {
   "id": 4178,
   "word": "PUERTO",
   "pronunciations": "pˈwɛrˌtoʊ, ˈpɔrtə, ˈpɔrtɝ"
 },
 {
   "id": 4179,
   "word": "QUALIFIED",
   "pronunciations": "ˈkwɑːləˌfaɪd"
 },
 {
   "id": 4180,
   "word": "RANK",
   "pronunciations": "ˈræŋk"
 },
 {
   "id": 4181,
   "word": "REALISM",
   "pronunciations": "ˈriːəlɪzm"
 },
 {
   "id": 4182,
   "word": "REALIZATION",
   "pronunciations": "ˈriːləˈzeɪʃən"
 },
 {
   "id": 4183,
   "word": "RECOMMENDATION",
   "pronunciations": "ˌrɛkəmənˈdeɪʃən"
 },
 {
   "id": 4184,
   "word": "RELIEVED",
   "pronunciations": "rɪˈliːvd, riːˈliːvd"
 },
 {
   "id": 4185,
   "word": "RIGID",
   "pronunciations": "ˈrɪdʒəd, ˈrɪdʒɪd"
 },
 {
   "id": 4186,
   "word": "RULING",
   "pronunciations": "ˈruːlɪŋ"
 },
 {
   "id": 4187,
   "word": "SCARCELY",
   "pronunciations": "ˈskɛrsli"
 },
 {
   "id": 4188,
   "word": "SEATED",
   "pronunciations": "ˈsiːtəd, ˈsiːtɪd"
 },
 {
   "id": 4189,
   "word": "SEIZED",
   "pronunciations": "ˈsiːzd"
 },
 {
   "id": 4190,
   "word": "SEVENTEEN",
   "pronunciations": "ˈsɛvənˈtiːn"
 },
 {
   "id": 4191,
   "word": "SITTER",
   "pronunciations": "ˈsɪtɝ"
 },
 {
   "id": 4192,
   "word": "SLID",
   "pronunciations": "ˈslɪd"
 },
 {
   "id": 4193,
   "word": "SPECIMEN",
   "pronunciations": "ˈspɛsəmən"
 },
 {
   "id": 4194,
   "word": "STUPID",
   "pronunciations": "ˈstuːpəd, ˈstuːpɪd"
 },
 {
   "id": 4195,
   "word": "SUBJECTED",
   "pronunciations": "səbˈdʒɛktɪd"
 },
 {
   "id": 4196,
   "word": "SWING",
   "pronunciations": "ˈswɪŋ"
 },
 {
   "id": 4197,
   "word": "TAIL",
   "pronunciations": "ˈteɪl"
 },
 {
   "id": 4198,
   "word": "TENDED",
   "pronunciations": "ˈtɛndəd, ˈtɛndɪd"
 },
 {
   "id": 4199,
   "word": "THERESA",
   "pronunciations": "tɝˈiːsə, tɝˈeɪsə"
 },
 {
   "id": 4200,
   "word": "TRACTOR",
   "pronunciations": "ˈtræktɝ"
 },
 {
   "id": 4201,
   "word": "TRIBUTE",
   "pronunciations": "ˈtrɪbjuːt"
 },
 {
   "id": 4202,
   "word": "TUBES",
   "pronunciations": "ˈtuːbz"
 },
 {
   "id": 4203,
   "word": "UNDOUBTEDLY",
   "pronunciations": "ənˈdaʊtɪdli"
 },
 {
   "id": 4204,
   "word": "UTOPIA",
   "pronunciations": "juːˈtoʊpiːə"
 },
 {
   "id": 4205,
   "word": "WEEKLY",
   "pronunciations": "ˈwiːkli"
 },
 {
   "id": 4206,
   "word": "WHOLLY",
   "pronunciations": "ˈhoʊli"
 },
 {
   "id": 4207,
   "word": "WINES",
   "pronunciations": "ˈwaɪnz"
 },
 {
   "id": 4208,
   "word": "WISHES",
   "pronunciations": "ˈwɪʃɪz"
 },
 {
   "id": 4209,
   "word": "WORKSHOP",
   "pronunciations": "ˈwɝːkˌʃɑːp"
 },
 {
   "id": 4210,
   "word": "ZERO",
   "pronunciations": "ˈziːroʊ"
 },
 {
   "id": 4211,
   "word": "ADULTS",
   "pronunciations": "əˈdʌlts, ˈædəlts"
 },
 {
   "id": 4212,
   "word": "AGRICULTURE",
   "pronunciations": "ˈægrɪˌkəltʃɝ"
 },
 {
   "id": 4213,
   "word": "AMENDMENT",
   "pronunciations": "əˈmɛndmənt"
 },
 {
   "id": 4214,
   "word": "ANTICIPATED",
   "pronunciations": "ænˈtɪsəˌpeɪtəd, ænˈtɪsəˌpeɪtɪd"
 },
 {
   "id": 4215,
   "word": "ARRIVAL",
   "pronunciations": "ɝˈaɪvəl"
 },
 {
   "id": 4216,
   "word": "ASSESSMENT",
   "pronunciations": "əˈsɛsmənt"
 },
 {
   "id": 4217,
   "word": "ASSUMPTIONS",
   "pronunciations": "əˈsʌmpʃənz"
 },
 {
   "id": 4218,
   "word": "ATTEMPTING",
   "pronunciations": "əˈtɛmptɪŋ"
 },
 {
   "id": 4219,
   "word": "ATTENDING",
   "pronunciations": "əˈtɛndɪŋ"
 },
 {
   "id": 4220,
   "word": "AUTHORS",
   "pronunciations": "ˈɔθɝz"
 },
 {
   "id": 4221,
   "word": "BASES",
   "pronunciations": "ˈbeɪsəz, ˈbeɪsɪz, ˈbeɪsiːz"
 },
 {
   "id": 4222,
   "word": "BELIEFS",
   "pronunciations": "bɪˈliːfs"
 },
 {
   "id": 4223,
   "word": "BELLY",
   "pronunciations": "ˈbɛli"
 },
 {
   "id": 4224,
   "word": "BOATING",
   "pronunciations": "ˈboʊtɪŋ"
 },
 {
   "id": 4225,
   "word": "BOBBY",
   "pronunciations": "ˈbɑːbi"
 },
 {
   "id": 4226,
   "word": "BOWL",
   "pronunciations": "ˈboʊl"
 },
 {
   "id": 4227,
   "word": "BROWN'S",
   "pronunciations": "ˈbraʊnz"
 },
 {
   "id": 4228,
   "word": "BURNS",
   "pronunciations": "ˈbɝːnz"
 },
 {
   "id": 4229,
   "word": "CABIN",
   "pronunciations": "ˈkæbən"
 },
 {
   "id": 4230,
   "word": "CASEY",
   "pronunciations": "ˈkeɪsi"
 },
 {
   "id": 4231,
   "word": "CAT",
   "pronunciations": "ˈkæt"
 },
 {
   "id": 4232,
   "word": "CATEGORY",
   "pronunciations": "ˈkætəˌgɔri"
 },
 {
   "id": 4233,
   "word": "CHAIRS",
   "pronunciations": "ˈtʃɛrz"
 },
 {
   "id": 4234,
   "word": "CHAMPION",
   "pronunciations": "ˈtʃæmpiːən"
 },
 {
   "id": 4235,
   "word": "CHANNELS",
   "pronunciations": "ˈtʃænəlz"
 },
 {
   "id": 4236,
   "word": "CHILDREN'S",
   "pronunciations": "ˈtʃɪldrənz"
 },
 {
   "id": 4237,
   "word": "CIRCUIT",
   "pronunciations": "ˈsɝːkət"
 },
 {
   "id": 4238,
   "word": "CIVIC",
   "pronunciations": "ˈsɪvɪk"
 },
 {
   "id": 4239,
   "word": "CLEARED",
   "pronunciations": "ˈklɪrd"
 },
 {
   "id": 4240,
   "word": "COLLEAGUES",
   "pronunciations": "ˈkɑːliːgz"
 },
 {
   "id": 4241,
   "word": "COMPETE",
   "pronunciations": "kəmˈpiːt"
 },
 {
   "id": 4242,
   "word": "CONTINUOUSLY",
   "pronunciations": "kənˈtɪnjuːəsli"
 },
 {
   "id": 4243,
   "word": "CONTROLLING",
   "pronunciations": "kənˈtroʊlɪŋ"
 },
 {
   "id": 4244,
   "word": "CRAFT",
   "pronunciations": "ˈkræft"
 },
 {
   "id": 4245,
   "word": "CRYSTAL",
   "pronunciations": "ˈkrɪstəl"
 },
 {
   "id": 4246,
   "word": "CURIOSITY",
   "pronunciations": "ˌkjʊriːˈɑːsəti"
 },
 {
   "id": 4247,
   "word": "DANCES",
   "pronunciations": "ˈdænsəz, ˈdænsɪz"
 },
 {
   "id": 4248,
   "word": "DECK",
   "pronunciations": "ˈdɛk"
 },
 {
   "id": 4249,
   "word": "DEDICATED",
   "pronunciations": "ˈdɛdəkeɪtəd"
 },
 {
   "id": 4250,
   "word": "DEGREES",
   "pronunciations": "dɪˈgriːz"
 },
 {
   "id": 4251,
   "word": "DISCRIMINATION",
   "pronunciations": "dɪˌskrɪməˈneɪʃən"
 },
 {
   "id": 4252,
   "word": "DISPLACEMENT",
   "pronunciations": "dɪˈspleɪsmənt"
 },
 {
   "id": 4253,
   "word": "DIVE",
   "pronunciations": "ˈdaɪv"
 },
 {
   "id": 4254,
   "word": "DON",
   "pronunciations": "ˈdɑːn"
 },
 {
   "id": 4255,
   "word": "DOUGLAS",
   "pronunciations": "ˈdʌgləs"
 },
 {
   "id": 4256,
   "word": "EIGHTH",
   "pronunciations": "ˈeɪtθ, ˈeɪθ"
 },
 {
   "id": 4257,
   "word": "EMPIRICAL",
   "pronunciations": "ˌɛmˈpɪrɪkəl"
 },
 {
   "id": 4258,
   "word": "ENABLE",
   "pronunciations": "ɛˈneɪbəl, ɪˈneɪbəl"
 },
 {
   "id": 4259,
   "word": "ENCOURAGING",
   "pronunciations": "ɛnˈkɝːɪdʒɪŋ, ɪnˈkɝːədʒɪŋ"
 },
 {
   "id": 4260,
   "word": "EXCITED",
   "pronunciations": "ɪkˈsaɪtəd, ɪkˈsaɪtɪd"
 },
 {
   "id": 4261,
   "word": "EXERCISES",
   "pronunciations": "ˈɛksɝˌsaɪzɪz"
 },
 {
   "id": 4262,
   "word": "EXPECTATIONS",
   "pronunciations": "ˌɛkspɛkˈteɪʃənz"
 },
 {
   "id": 4263,
   "word": "FARMER",
   "pronunciations": "ˈfɑːrmɝ"
 },
 {
   "id": 4264,
   "word": "FIBERS",
   "pronunciations": "ˈfaɪbɝz"
 },
 {
   "id": 4265,
   "word": "FLOWER",
   "pronunciations": "ˈflaʊɝ"
 },
 {
   "id": 4266,
   "word": "FOGG",
   "pronunciations": "ˈfɑːg"
 },
 {
   "id": 4267,
   "word": "FRACTION",
   "pronunciations": "ˈfrækʃən"
 },
 {
   "id": 4268,
   "word": "FURNISHED",
   "pronunciations": "ˈfɝːnɪʃt"
 },
 {
   "id": 4269,
   "word": "GENERATIONS",
   "pronunciations": "ˌdʒɛnɝˈeɪʃənz"
 },
 {
   "id": 4270,
   "word": "GENIUS",
   "pronunciations": "ˈdʒiːnjəs"
 },
 {
   "id": 4271,
   "word": "GIANT",
   "pronunciations": "ˈdʒaɪənt"
 },
 {
   "id": 4272,
   "word": "GIN",
   "pronunciations": "ˈdʒɪn"
 },
 {
   "id": 4273,
   "word": "GOVERNMENTAL",
   "pronunciations": "ˈgʌvɝˌmɛntəl, ˌgəvɝnˈmɛntəl"
 },
 {
   "id": 4274,
   "word": "GRADES",
   "pronunciations": "ˈgreɪdz"
 },
 {
   "id": 4275,
   "word": "H",
   "pronunciations": "ˈeɪtʃ"
 },
 {
   "id": 4276,
   "word": "HABIT",
   "pronunciations": "ˈhæbət"
 },
 {
   "id": 4277,
   "word": "HAPPINESS",
   "pronunciations": "ˈhæpiːnəs"
 },
 {
   "id": 4278,
   "word": "HARDER",
   "pronunciations": "ˈhɑːrdɝ"
 },
 {
   "id": 4279,
   "word": "HEARTS",
   "pronunciations": "ˈhɑːrts"
 },
 {
   "id": 4280,
   "word": "HEELS",
   "pronunciations": "ˈhiːlz"
 },
 {
   "id": 4281,
   "word": "HEIGHTS",
   "pronunciations": "ˈhaɪts"
 },
 {
   "id": 4282,
   "word": "HISTORIC",
   "pronunciations": "hɪˈstɔrɪk"
 },
 {
   "id": 4283,
   "word": "HOLLYWOOD",
   "pronunciations": "ˈhɑːliːˌwʊd"
 },
 {
   "id": 4284,
   "word": "HUNGRY",
   "pronunciations": "ˈhʌŋgri"
 },
 {
   "id": 4285,
   "word": "HURRIED",
   "pronunciations": "ˈhɝːiːd"
 },
 {
   "id": 4286,
   "word": "ILLUSTRATION",
   "pronunciations": "ˌɪləˈstreɪʃən"
 },
 {
   "id": 4287,
   "word": "IMITATION",
   "pronunciations": "ˌɪməˈteɪʃən"
 },
 {
   "id": 4288,
   "word": "INCREDIBLE",
   "pronunciations": "ˌɪnˈkrɛdəbəl"
 },
 {
   "id": 4289,
   "word": "INSECTS",
   "pronunciations": "ˈɪnˌsɛkts"
 },
 {
   "id": 4290,
   "word": "INVENTORY",
   "pronunciations": "ˌɪnvənˈtɔri"
 },
 {
   "id": 4291,
   "word": "JEAN",
   "pronunciations": "ˈdʒiːn"
 },
 {
   "id": 4292,
   "word": "JUSTIFIED",
   "pronunciations": "ˈdʒʌstəˌfaɪd"
 },
 {
   "id": 4293,
   "word": "KILLING",
   "pronunciations": "ˈkɪlɪŋ"
 },
 {
   "id": 4294,
   "word": "LAWYERS",
   "pronunciations": "ˈlɔjɝz, ˈlɔɪɝz"
 },
 {
   "id": 4295,
   "word": "LENGTHS",
   "pronunciations": "ˈlɛŋkθs, ˈlɛŋθs"
 },
 {
   "id": 4296,
   "word": "LIFT",
   "pronunciations": "ˈlɪft"
 },
 {
   "id": 4297,
   "word": "LIGHTING",
   "pronunciations": "ˈlaɪtɪŋ"
 },
 {
   "id": 4298,
   "word": "LUNCHEON",
   "pronunciations": "ˈlʌntʃən"
 },
 {
   "id": 4299,
   "word": "MADISON",
   "pronunciations": "ˈmædəsən, ˈmædɪsən"
 },
 {
   "id": 4300,
   "word": "MAGGIE",
   "pronunciations": "ˈmæˌgiː"
 },
 {
   "id": 4301,
   "word": "MANUFACTURER",
   "pronunciations": "ˌmænjəˈfæktʃɝɝ"
 },
 {
   "id": 4302,
   "word": "MARYLAND",
   "pronunciations": "ˈmɛrələnd"
 },
 {
   "id": 4303,
   "word": "MEMORIAL",
   "pronunciations": "məˈmɔriːəl"
 },
 {
   "id": 4304,
   "word": "MIDNIGHT",
   "pronunciations": "ˈmɪdˌnaɪt"
 },
 {
   "id": 4305,
   "word": "MONTHLY",
   "pronunciations": "ˈmʌnθli"
 },
 {
   "id": 4306,
   "word": "MUSICIAN",
   "pronunciations": "mjuːˈzɪʃən"
 },
 {
   "id": 4307,
   "word": "NOBLE",
   "pronunciations": "ˈnoʊbəl"
 },
 {
   "id": 4308,
   "word": "ORANGE",
   "pronunciations": "ˈɔrəndʒ, ˈɔrɪndʒ"
 },
 {
   "id": 4309,
   "word": "ORIGINALLY",
   "pronunciations": "ɝˈɪdʒənəli, ɝˈɪdʒnəli"
 },
 {
   "id": 4310,
   "word": "OXIDATION",
   "pronunciations": "ˌɑːksəˈdeɪʃən"
 },
 {
   "id": 4311,
   "word": "PA",
   "pronunciations": "ˈpɑː"
 },
 {
   "id": 4312,
   "word": "PETE",
   "pronunciations": "ˈpiːt"
 },
 {
   "id": 4313,
   "word": "PIP",
   "pronunciations": "ˈpɪp"
 },
 {
   "id": 4314,
   "word": "PLASTER",
   "pronunciations": "ˈplæstɝ"
 },
 {
   "id": 4315,
   "word": "PLATES",
   "pronunciations": "ˈpleɪts"
 },
 {
   "id": 4316,
   "word": "PLUG",
   "pronunciations": "ˈplʌg"
 },
 {
   "id": 4317,
   "word": "PROTEST",
   "pronunciations": "ˈproʊˌtɛst, prəˈtɛst"
 },
 {
   "id": 4318,
   "word": "PUBLICATIONS",
   "pronunciations": "ˌpəblɪˈkeɪʃənz"
 },
 {
   "id": 4319,
   "word": "RADAR",
   "pronunciations": "ˈreɪˌdɑːr"
 },
 {
   "id": 4320,
   "word": "REFLECTS",
   "pronunciations": "rɪˈflɛkts, rɪˈflɛks"
 },
 {
   "id": 4321,
   "word": "REFRIGERATOR",
   "pronunciations": "rəˈfrɪdʒɝˌeɪtɝ, rɪˈfrɪdʒɝˌeɪtɝ"
 },
 {
   "id": 4322,
   "word": "REGIME",
   "pronunciations": "rəˈʒiːm, reɪˈʒiːm"
 },
 {
   "id": 4323,
   "word": "REGISTERED",
   "pronunciations": "ˈrɛdʒɪstɝd"
 },
 {
   "id": 4324,
   "word": "REGISTRATION",
   "pronunciations": "ˌrɛdʒɪˈstreɪʃən"
 },
 {
   "id": 4325,
   "word": "RELEVANT",
   "pronunciations": "ˈrɛləvənt"
 },
 {
   "id": 4326,
   "word": "RESUMED",
   "pronunciations": "rɪˈzuːmd, riːˈzuːmd"
 },
 {
   "id": 4327,
   "word": "RIFLES",
   "pronunciations": "ˈraɪfəlz"
 },
 {
   "id": 4328,
   "word": "ROCKS",
   "pronunciations": "ˈrɑːks"
 },
 {
   "id": 4329,
   "word": "RUTH",
   "pronunciations": "ˈruːθ"
 },
 {
   "id": 4330,
   "word": "SAVINGS",
   "pronunciations": "ˈseɪvɪŋz"
 },
 {
   "id": 4331,
   "word": "SEARCHING",
   "pronunciations": "ˈsɝːtʃɪŋ"
 },
 {
   "id": 4332,
   "word": "SELECT",
   "pronunciations": "səˈlɛkt"
 },
 {
   "id": 4333,
   "word": "SENTIMENT",
   "pronunciations": "ˈsɛntəmənt, ˈsɛnəmənt"
 },
 {
   "id": 4334,
   "word": "SETTLE",
   "pronunciations": "ˈsɛtəl"
 },
 {
   "id": 4335,
   "word": "SHARING",
   "pronunciations": "ˈʃɛrɪŋ"
 },
 {
   "id": 4336,
   "word": "SHEEP",
   "pronunciations": "ˈʃiːp"
 },
 {
   "id": 4337,
   "word": "SINK",
   "pronunciations": "ˈsɪŋk"
 },
 {
   "id": 4338,
   "word": "SPARE",
   "pronunciations": "ˈspɛr"
 },
 {
   "id": 4339,
   "word": "SPENCER",
   "pronunciations": "ˈspɛnsɝ"
 },
 {
   "id": 4340,
   "word": "STERN",
   "pronunciations": "ˈstɝːn"
 },
 {
   "id": 4341,
   "word": "STRATEGIC",
   "pronunciations": "strəˈtiːdʒɪk"
 },
 {
   "id": 4342,
   "word": "STRESSED",
   "pronunciations": "ˈstrɛst"
 },
 {
   "id": 4343,
   "word": "STUCK",
   "pronunciations": "ˈstʌk"
 },
 {
   "id": 4344,
   "word": "SUBSTANCES",
   "pronunciations": "ˈsʌbstənsəz, ˈsʌbstənsɪz"
 },
 {
   "id": 4345,
   "word": "SUBSTRATE",
   "pronunciations": "ˈsʌbˌstreɪt"
 },
 {
   "id": 4346,
   "word": "SUGGESTIONS",
   "pronunciations": "səˈdʒɛstʃənz"
 },
 {
   "id": 4347,
   "word": "SWEAT",
   "pronunciations": "ˈswɛt"
 },
 {
   "id": 4348,
   "word": "TENNESSEE",
   "pronunciations": "ˌtɛnəˈsiː"
 },
 {
   "id": 4349,
   "word": "THINKS",
   "pronunciations": "ˈθɪŋks"
 },
 {
   "id": 4350,
   "word": "TIE",
   "pronunciations": "ˈtaɪ"
 },
 {
   "id": 4351,
   "word": "TRACE",
   "pronunciations": "ˈtreɪs"
 },
 {
   "id": 4352,
   "word": "ULTIMATELY",
   "pronunciations": "ˈʌltəmətli"
 },
 {
   "id": 4353,
   "word": "UNEXPECTED",
   "pronunciations": "ˌənɪkˈspɛktɪd"
 },
 {
   "id": 4354,
   "word": "VARIATIONS",
   "pronunciations": "ˌvɛriːˈeɪʃənz"
 },
 {
   "id": 4355,
   "word": "VICTOR",
   "pronunciations": "ˈvɪktɝ"
 },
 {
   "id": 4356,
   "word": "WAKE",
   "pronunciations": "ˈweɪk"
 },
 {
   "id": 4357,
   "word": "WESTMINSTER",
   "pronunciations": "ˌwɛstˈmɪnstɝ"
 },
 {
   "id": 4358,
   "word": "WHISKY",
   "pronunciations": "ˈwɪski, ˈhwɪski"
 },
 {
   "id": 4359,
   "word": "WHISPERED",
   "pronunciations": "ˈwɪspɝd, ˈhwɪspɝd"
 },
 {
   "id": 4360,
   "word": "WORN",
   "pronunciations": "ˈwɔrn"
 },
 {
   "id": 4361,
   "word": "WOUNDED",
   "pronunciations": "ˈwuːndɪd"
 },
 {
   "id": 4362,
   "word": "ADDING",
   "pronunciations": "ˈædɪŋ"
 },
 {
   "id": 4363,
   "word": "AH",
   "pronunciations": "ˈɑː"
 },
 {
   "id": 4364,
   "word": "ALASKA",
   "pronunciations": "əˈlæskə"
 },
 {
   "id": 4365,
   "word": "ALIENATION",
   "pronunciations": "ˌeɪliːəˈneɪʃən"
 },
 {
   "id": 4366,
   "word": "ALTERED",
   "pronunciations": "ˈɔltɝd"
 },
 {
   "id": 4367,
   "word": "AMBASSADOR",
   "pronunciations": "æmˈbæsədɝ"
 },
 {
   "id": 4368,
   "word": "AMBIGUOUS",
   "pronunciations": "æmˈbɪgjuːəs"
 },
 {
   "id": 4369,
   "word": "AMERICA'S",
   "pronunciations": "əˈmɛrɪkəz"
 },
 {
   "id": 4370,
   "word": "APPRECIATION",
   "pronunciations": "əˌpriːʃiːˈeɪʃən"
 },
 {
   "id": 4371,
   "word": "ARBITRARY",
   "pronunciations": "ˈɑːrbəˌtrɛri, ˈɑːrbɪˌtrɛri"
 },
 {
   "id": 4372,
   "word": "ARCHITECT",
   "pronunciations": "ˈɑːrkəˌtɛkt"
 },
 {
   "id": 4373,
   "word": "ATTACKS",
   "pronunciations": "əˈtæks"
 },
 {
   "id": 4374,
   "word": "AUNT",
   "pronunciations": "ˈænt, ˈɔnt"
 },
 {
   "id": 4375,
   "word": "AUTO",
   "pronunciations": "ˈɔtoʊ"
 },
 {
   "id": 4376,
   "word": "AUTUMN",
   "pronunciations": "ˈɔtəm"
 },
 {
   "id": 4377,
   "word": "BACKWARD",
   "pronunciations": "ˈbækwɝd"
 },
 {
   "id": 4378,
   "word": "BALANCED",
   "pronunciations": "ˈbælənst"
 },
 {
   "id": 4379,
   "word": "BALTIMORE",
   "pronunciations": "ˈbɔltəˌmɔr"
 },
 {
   "id": 4380,
   "word": "BELONGS",
   "pronunciations": "bɪˈlɔŋz"
 },
 {
   "id": 4381,
   "word": "BID",
   "pronunciations": "ˈbɪd"
 },
 {
   "id": 4382,
   "word": "BLUES",
   "pronunciations": "ˈbluːz"
 },
 {
   "id": 4383,
   "word": "BOBBIE",
   "pronunciations": "ˈbɑːbi"
 },
 {
   "id": 4384,
   "word": "BOMBERS",
   "pronunciations": "ˈbɑːmɝz"
 },
 {
   "id": 4385,
   "word": "BOTHER",
   "pronunciations": "ˈbɑːðɝ"
 },
 {
   "id": 4386,
   "word": "CAPABILITIES",
   "pronunciations": "ˌkeɪpəˈbɪlətiːz"
 },
 {
   "id": 4387,
   "word": "CAPITOL",
   "pronunciations": "ˈkæpɪtəl"
 },
 {
   "id": 4388,
   "word": "CARRIES",
   "pronunciations": "ˈkæriːz, ˈkɛriːz"
 },
 {
   "id": 4389,
   "word": "CASUAL",
   "pronunciations": "ˈkæʒəwəl"
 },
 {
   "id": 4390,
   "word": "CHART",
   "pronunciations": "ˈtʃɑːrt"
 },
 {
   "id": 4391,
   "word": "CHIEFLY",
   "pronunciations": "ˈtʃiːfli"
 },
 {
   "id": 4392,
   "word": "COMPLAINED",
   "pronunciations": "kəmˈpleɪnd"
 },
 {
   "id": 4393,
   "word": "CONGRESSIONAL",
   "pronunciations": "kənˈgrɛʃənəl"
 },
 {
   "id": 4394,
   "word": "CONSPIRACY",
   "pronunciations": "kənˈspɪrəsi"
 },
 {
   "id": 4395,
   "word": "CONVENIENT",
   "pronunciations": "kənˈviːnjənt"
 },
 {
   "id": 4396,
   "word": "DEALT",
   "pronunciations": "ˈdɛlt"
 },
 {
   "id": 4397,
   "word": "DEEGAN",
   "pronunciations": "ˈdiːgən"
 },
 {
   "id": 4398,
   "word": "DESCRIBES",
   "pronunciations": "dɪˈskraɪbz"
 },
 {
   "id": 4399,
   "word": "DESPERATELY",
   "pronunciations": "ˈdɛspɝətli, ˈdɛsprətli"
 },
 {
   "id": 4400,
   "word": "DESTINY",
   "pronunciations": "ˈdɛstəni"
 },
 {
   "id": 4401,
   "word": "DI",
   "pronunciations": "ˈdiː, ˈdaɪ"
 },
 {
   "id": 4402,
   "word": "DOUBTFUL",
   "pronunciations": "ˈdaʊtfəl"
 },
 {
   "id": 4403,
   "word": "DRESSING",
   "pronunciations": "ˈdrɛsɪŋ"
 },
 {
   "id": 4404,
   "word": "DRINKS",
   "pronunciations": "ˈdrɪŋks"
 },
 {
   "id": 4405,
   "word": "EARLIEST",
   "pronunciations": "ˈɝːliːəst"
 },
 {
   "id": 4406,
   "word": "ECONOMICAL",
   "pronunciations": "ˌɛkəˈnɑːmɪkəl, ˌiːkəˈnɑːmɪkəl"
 },
 {
   "id": 4407,
   "word": "EIGHTEENTH",
   "pronunciations": "eɪˈtiːnθ, ˈeɪˈtiːnθ"
 },
 {
   "id": 4408,
   "word": "ELAINE",
   "pronunciations": "ɪˈleɪn, əˈleɪn, ˌiːˈleɪn"
 },
 {
   "id": 4409,
   "word": "ELIMINATED",
   "pronunciations": "ɪˈlɪməˌneɪtəd, ɪˈlɪməˌneɪtɪd"
 },
 {
   "id": 4410,
   "word": "EMPIRE",
   "pronunciations": "ˈɛmpaɪɝ"
 },
 {
   "id": 4411,
   "word": "ENGAGEMENT",
   "pronunciations": "ɛnˈgeɪdʒmənt"
 },
 {
   "id": 4412,
   "word": "EXHIBITION",
   "pronunciations": "ˌɛksəˈbɪʃən"
 },
 {
   "id": 4413,
   "word": "EXPECTS",
   "pronunciations": "ɪkˈspɛkts, ɪkˈspɛks"
 },
 {
   "id": 4414,
   "word": "FAULT",
   "pronunciations": "ˈfɔlt"
 },
 {
   "id": 4415,
   "word": "FOAMS",
   "pronunciations": "ˈfoʊmz"
 },
 {
   "id": 4416,
   "word": "FORESTS",
   "pronunciations": "ˈfɔrəsts"
 },
 {
   "id": 4417,
   "word": "FORMULAS",
   "pronunciations": "ˈfɔrmjələz"
 },
 {
   "id": 4418,
   "word": "FORTUNATE",
   "pronunciations": "ˈfɔrtʃənət, ˈfɔrtʃuːnət"
 },
 {
   "id": 4419,
   "word": "FREELY",
   "pronunciations": "ˈfriːli"
 },
 {
   "id": 4420,
   "word": "FREQUENCY",
   "pronunciations": "ˈfriːkwənsi"
 },
 {
   "id": 4421,
   "word": "GANG",
   "pronunciations": "ˈgæŋ"
 },
 {
   "id": 4422,
   "word": "GROWS",
   "pronunciations": "ˈgroʊz"
 },
 {
   "id": 4423,
   "word": "GULF",
   "pronunciations": "ˈgʌlf"
 },
 {
   "id": 4424,
   "word": "HERD",
   "pronunciations": "ˈhɝːd"
 },
 {
   "id": 4425,
   "word": "HIDE",
   "pronunciations": "ˈhaɪd"
 },
 {
   "id": 4426,
   "word": "HITS",
   "pronunciations": "ˈhɪts"
 },
 {
   "id": 4427,
   "word": "HYPOTHALAMIC",
   "pronunciations": "ˌhaɪpoʊθəˈlæmɪk"
 },
 {
   "id": 4428,
   "word": "IMPLICATIONS",
   "pronunciations": "ˌɪmpləˈkeɪʃənz"
 },
 {
   "id": 4429,
   "word": "INSIGHT",
   "pronunciations": "ˈɪnˌsaɪt"
 },
 {
   "id": 4430,
   "word": "INTENTIONS",
   "pronunciations": "ˌɪnˈtɛntʃənz"
 },
 {
   "id": 4431,
   "word": "INVESTIGATIONS",
   "pronunciations": "ˌɪnˌvɛstəˈgeɪʃənz"
 },
 {
   "id": 4432,
   "word": "JOKE",
   "pronunciations": "ˈdʒoʊk"
 },
 {
   "id": 4433,
   "word": "LAUGHTER",
   "pronunciations": "ˈlæftɝ"
 },
 {
   "id": 4434,
   "word": "LO",
   "pronunciations": "ˈloʊ"
 },
 {
   "id": 4435,
   "word": "LOADED",
   "pronunciations": "ˈloʊdəd, ˈloʊdɪd"
 },
 {
   "id": 4436,
   "word": "LOYALTY",
   "pronunciations": "ˈlɔɪəlti"
 },
 {
   "id": 4437,
   "word": "MEANINGS",
   "pronunciations": "ˈmiːnɪŋz"
 },
 {
   "id": 4438,
   "word": "MELTING",
   "pronunciations": "ˈmɛltɪŋ"
 },
 {
   "id": 4439,
   "word": "MERCHANTS",
   "pronunciations": "ˈmɝːtʃənts"
 },
 {
   "id": 4440,
   "word": "MESS",
   "pronunciations": "ˈmɛs"
 },
 {
   "id": 4441,
   "word": "MIAMI",
   "pronunciations": "maɪˈæmi"
 },
 {
   "id": 4442,
   "word": "MIDDLE-CLASS",
   "pronunciations": "ˈmɪdəlˈklæs"
 },
 {
   "id": 4443,
   "word": "MILLER",
   "pronunciations": "ˈmɪlɝ"
 },
 {
   "id": 4444,
   "word": "MODERATE",
   "pronunciations": "ˈmɑːdɝət, ˈmɑːdɝˌeɪt"
 },
 {
   "id": 4445,
   "word": "MOTIVE",
   "pronunciations": "ˈmoʊtɪv"
 },
 {
   "id": 4446,
   "word": "NERVES",
   "pronunciations": "ˈnɝːvz"
 },
 {
   "id": 4447,
   "word": "NOVELS",
   "pronunciations": "ˈnɑːvəlz"
 },
 {
   "id": 4448,
   "word": "OBLIGATIONS",
   "pronunciations": "ˌɑːbləˈgeɪʃənz"
 },
 {
   "id": 4449,
   "word": "OCCASIONS",
   "pronunciations": "ɔˈkeɪʒənz"
 },
 {
   "id": 4450,
   "word": "OVERSEAS",
   "pronunciations": "ˈoʊvɝˈsiːz"
 },
 {
   "id": 4451,
   "word": "OWNERSHIP",
   "pronunciations": "ˈoʊnɝˌʃɪp"
 },
 {
   "id": 4452,
   "word": "PALM",
   "pronunciations": "ˈpɑːm, ˈpɑːlm"
 },
 {
   "id": 4453,
   "word": "PANIC",
   "pronunciations": "ˈpænɪk"
 },
 {
   "id": 4454,
   "word": "PARTICIPATE",
   "pronunciations": "pɑːrˈtɪsəˌpeɪt"
 },
 {
   "id": 4455,
   "word": "PATIENCE",
   "pronunciations": "ˈpeɪʃəns"
 },
 {
   "id": 4456,
   "word": "PHYSICS",
   "pronunciations": "ˈfɪzɪks"
 },
 {
   "id": 4457,
   "word": "PHYSIOLOGICAL",
   "pronunciations": "ˌfɪziːəˈlɑːdʒɪkəl"
 },
 {
   "id": 4458,
   "word": "PITCH",
   "pronunciations": "ˈpɪtʃ"
 },
 {
   "id": 4459,
   "word": "PLANETS",
   "pronunciations": "ˈplænəts"
 },
 {
   "id": 4460,
   "word": "PLATE",
   "pronunciations": "ˈpleɪt"
 },
 {
   "id": 4461,
   "word": "POSSESSED",
   "pronunciations": "pəˈzɛst"
 },
 {
   "id": 4462,
   "word": "POSTS",
   "pronunciations": "ˈpoʊsts"
 },
 {
   "id": 4463,
   "word": "PREPARING",
   "pronunciations": "priːˈpɛrɪŋ, pɝˈpɛrɪŋ"
 },
 {
   "id": 4464,
   "word": "RACING",
   "pronunciations": "ˈreɪsɪŋ"
 },
 {
   "id": 4465,
   "word": "RALPH",
   "pronunciations": "ˈrælf"
 },
 {
   "id": 4466,
   "word": "RECOMMENDATIONS",
   "pronunciations": "ˌrɛkəmənˈdeɪʃənz"
 },
 {
   "id": 4467,
   "word": "REFUND",
   "pronunciations": "rɪˈfʌnd, ˈriːˌfənd"
 },
 {
   "id": 4468,
   "word": "REGULARLY",
   "pronunciations": "ˈrɛgjəlɝli"
 },
 {
   "id": 4469,
   "word": "REHABILITATION",
   "pronunciations": "ˌriːhəˌbɪləˈteɪʃən, ˌriːəˌbɪləˈteɪʃən"
 },
 {
   "id": 4470,
   "word": "RELATIVES",
   "pronunciations": "ˈrɛlətɪvz"
 },
 {
   "id": 4471,
   "word": "RELIABLE",
   "pronunciations": "rɪˈlaɪəbəl, riːˈlaɪəbəl"
 },
 {
   "id": 4472,
   "word": "RESIST",
   "pronunciations": "rɪˈzɪst, riːˈzɪst"
 },
 {
   "id": 4473,
   "word": "RESPECTS",
   "pronunciations": "rɪˈspɛkts, riːˈspɛkts, rəˈspɛks, riːˈspɛks"
 },
 {
   "id": 4474,
   "word": "RETAINED",
   "pronunciations": "rɪˈteɪnd, riːˈteɪnd"
 },
 {
   "id": 4475,
   "word": "RHYTHM",
   "pronunciations": "ˈrɪðəm"
 },
 {
   "id": 4476,
   "word": "S",
   "pronunciations": "ˈɛs"
 },
 {
   "id": 4477,
   "word": "SAMPLING",
   "pronunciations": "ˈsæmplɪŋ"
 },
 {
   "id": 4478,
   "word": "SANDBURG",
   "pronunciations": "ˈsændbɝg"
 },
 {
   "id": 4479,
   "word": "SAVAGE",
   "pronunciations": "ˈsævədʒ, ˈsævɪdʒ"
 },
 {
   "id": 4480,
   "word": "SERVANTS",
   "pronunciations": "ˈsɝːvənts"
 },
 {
   "id": 4481,
   "word": "SHELL",
   "pronunciations": "ˈʃɛl"
 },
 {
   "id": 4482,
   "word": "SHOULDN'T",
   "pronunciations": "ˈʃʊdənt"
 },
 {
   "id": 4483,
   "word": "SIGHED",
   "pronunciations": "ˈsaɪd"
 },
 {
   "id": 4484,
   "word": "SIXTIES",
   "pronunciations": "ˈsɪkstiːz"
 },
 {
   "id": 4485,
   "word": "SOAP",
   "pronunciations": "ˈsoʊp"
 },
 {
   "id": 4486,
   "word": "SOULS",
   "pronunciations": "ˈsoʊlz"
 },
 {
   "id": 4487,
   "word": "SPECTACULAR",
   "pronunciations": "spɛkˈtækjəlɝ"
 },
 {
   "id": 4488,
   "word": "SPHERE",
   "pronunciations": "sˈfɪr"
 },
 {
   "id": 4489,
   "word": "SPONSOR",
   "pronunciations": "ˈspɑːnsɝ"
 },
 {
   "id": 4490,
   "word": "STATISTICS",
   "pronunciations": "stəˈtɪstɪks"
 },
 {
   "id": 4491,
   "word": "STEADILY",
   "pronunciations": "ˈstɛdəli"
 },
 {
   "id": 4492,
   "word": "STICKS",
   "pronunciations": "ˈstɪks"
 },
 {
   "id": 4493,
   "word": "STRATEGY",
   "pronunciations": "ˈstrætədʒi"
 },
 {
   "id": 4494,
   "word": "SUBSTITUTE",
   "pronunciations": "ˈsʌbstəˌtuːt"
 },
 {
   "id": 4495,
   "word": "SUCCESSES",
   "pronunciations": "səkˈsɛsəz, səkˈsɛsɪz"
 },
 {
   "id": 4496,
   "word": "SUITED",
   "pronunciations": "ˈsuːtəd, ˈsuːtɪd"
 },
 {
   "id": 4497,
   "word": "SURRENDER",
   "pronunciations": "sɝˈɛndɝ"
 },
 {
   "id": 4498,
   "word": "TARGETS",
   "pronunciations": "ˈtɑːrgəts"
 },
 {
   "id": 4499,
   "word": "TEAMS",
   "pronunciations": "ˈtiːmz"
 },
 {
   "id": 4500,
   "word": "THRUST",
   "pronunciations": "ˈθrʌst"
 },
 {
   "id": 4501,
   "word": "TIP",
   "pronunciations": "ˈtɪp"
 },
 {
   "id": 4502,
   "word": "TIRE",
   "pronunciations": "ˈtaɪɝ"
 },
 {
   "id": 4503,
   "word": "TOTALLY",
   "pronunciations": "ˈtoʊtəli"
 },
 {
   "id": 4504,
   "word": "TRAVELED",
   "pronunciations": "ˈtrævəld"
 },
 {
   "id": 4505,
   "word": "TRIUMPH",
   "pronunciations": "ˈtraɪəmf"
 },
 {
   "id": 4506,
   "word": "TROUBLES",
   "pronunciations": "ˈtrʌbəlz"
 },
 {
   "id": 4507,
   "word": "TRUCKS",
   "pronunciations": "ˈtrʌks"
 },
 {
   "id": 4508,
   "word": "UNCERTAIN",
   "pronunciations": "ənˈsɝːtən"
 },
 {
   "id": 4509,
   "word": "UNEASY",
   "pronunciations": "əˈniːzi"
 },
 {
   "id": 4510,
   "word": "UNFORTUNATE",
   "pronunciations": "ənˈfɔrtʃənət, ənˈfɔrtʃuːnət"
 },
 {
   "id": 4511,
   "word": "VALID",
   "pronunciations": "ˈvælɪd"
 },
 {
   "id": 4512,
   "word": "VIENNA",
   "pronunciations": "viːˈɛnə"
 },
 {
   "id": 4513,
   "word": "VOLUNTARY",
   "pronunciations": "ˈvɑːləntɛri"
 },
 {
   "id": 4514,
   "word": "WARNED",
   "pronunciations": "ˈwɔrnd"
 },
 {
   "id": 4515,
   "word": "WEALTH",
   "pronunciations": "ˈwɛlθ"
 },
 {
   "id": 4516,
   "word": "WEREN'T",
   "pronunciations": "ˈwɝːənt, ˈwɝːnt"
 },
 {
   "id": 4517,
   "word": "WOMAN'S",
   "pronunciations": "ˈwʊmənz"
 },
 {
   "id": 4518,
   "word": "YELLED",
   "pronunciations": "ˈjɛld"
 },
 {
   "id": 4519,
   "word": "ACCEPTABLE",
   "pronunciations": "ækˈsɛptəbəl, əkˈsɛptəbəl"
 },
 {
   "id": 4520,
   "word": "ACCEPTING",
   "pronunciations": "ækˈsɛptɪŋ, əkˈsɛptɪŋ"
 },
 {
   "id": 4521,
   "word": "ADDRESSES",
   "pronunciations": "ˈæˈdrɛsɪz, æˈdrɛsɪz"
 },
 {
   "id": 4522,
   "word": "ANNIVERSARY",
   "pronunciations": "ˌænəˈvɝːsɝi"
 },
 {
   "id": 4523,
   "word": "ARISTOTLE",
   "pronunciations": "ˈɛrəˌstɑːtəl"
 },
 {
   "id": 4524,
   "word": "ASSOCIATE",
   "pronunciations": "əˈsoʊsiːət, əˈsoʊsiːˌeɪt, əˈsoʊʃiːət, əˈsoʊʃiːˌeɪt"
 },
 {
   "id": 4525,
   "word": "AVAILABILITY",
   "pronunciations": "əˌveɪləˈbɪləti, əˌveɪləˈbɪlɪti"
 },
 {
   "id": 4526,
   "word": "BEAM",
   "pronunciations": "ˈbiːm"
 },
 {
   "id": 4527,
   "word": "BEHALF",
   "pronunciations": "bɪˈhæf"
 },
 {
   "id": 4528,
   "word": "BELGIANS",
   "pronunciations": "ˈbɛldʒənz"
 },
 {
   "id": 4529,
   "word": "BEN",
   "pronunciations": "ˈbɛn"
 },
 {
   "id": 4530,
   "word": "BOLD",
   "pronunciations": "ˈboʊld"
 },
 {
   "id": 4531,
   "word": "BREATHING",
   "pronunciations": "ˈbriːðɪŋ"
 },
 {
   "id": 4532,
   "word": "BRIDGET",
   "pronunciations": "ˈbrɪdʒət, ˈbrɪdʒɪt"
 },
 {
   "id": 4533,
   "word": "BULLETS",
   "pronunciations": "ˈbʊləts"
 },
 {
   "id": 4534,
   "word": "CERTAINTY",
   "pronunciations": "ˈsɝːtənti"
 },
 {
   "id": 4535,
   "word": "CHARACTERIZED",
   "pronunciations": "ˈkɛrɪktɝˌaɪzd"
 },
 {
   "id": 4536,
   "word": "CHOLESTEROL",
   "pronunciations": "kəˈlɛstɝˌɔl, kəˈlɛstɝəl"
 },
 {
   "id": 4537,
   "word": "CIRCULAR",
   "pronunciations": "ˈsɝːkjəlɝ"
 },
 {
   "id": 4538,
   "word": "CITY'S",
   "pronunciations": "ˈsɪtiːz"
 },
 {
   "id": 4539,
   "word": "CLASSIFICATION",
   "pronunciations": "ˌklæsəfəˈkeɪʃən"
 },
 {
   "id": 4540,
   "word": "COLONIAL",
   "pronunciations": "kəˈloʊniːəl"
 },
 {
   "id": 4541,
   "word": "COLORFUL",
   "pronunciations": "ˈkʌlɝfəl"
 },
 {
   "id": 4542,
   "word": "COMMODITIES",
   "pronunciations": "kəˈmɑːdətiːz"
 },
 {
   "id": 4543,
   "word": "COMPETENT",
   "pronunciations": "ˈkɑːmpətɪnt"
 },
 {
   "id": 4544,
   "word": "COMPLEMENT",
   "pronunciations": "ˈkɑːmpləmənt"
 },
 {
   "id": 4545,
   "word": "COMPUTED",
   "pronunciations": "kəmˈpjuːtəd, kəmˈpjuːtɪd"
 },
 {
   "id": 4546,
   "word": "CONGRESSMAN",
   "pronunciations": "ˈkɑːŋgrəsmən"
 },
 {
   "id": 4547,
   "word": "CONVERSION",
   "pronunciations": "kənˈvɝːʒən"
 },
 {
   "id": 4548,
   "word": "COPE",
   "pronunciations": "ˈkoʊp"
 },
 {
   "id": 4549,
   "word": "CRACK",
   "pronunciations": "ˈkræk"
 },
 {
   "id": 4550,
   "word": "CRISES",
   "pronunciations": "ˈkraɪsiːz"
 },
 {
   "id": 4551,
   "word": "CROMWELL",
   "pronunciations": "ˈkrɑːmwəl"
 },
 {
   "id": 4552,
   "word": "CROSSING",
   "pronunciations": "ˈkrɔsɪŋ"
 },
 {
   "id": 4553,
   "word": "DARE",
   "pronunciations": "ˈdɛr"
 },
 {
   "id": 4554,
   "word": "DEDICATION",
   "pronunciations": "ˌdɛdəˈkeɪʃən"
 },
 {
   "id": 4555,
   "word": "DEFEND",
   "pronunciations": "dɪˈfɛnd"
 },
 {
   "id": 4556,
   "word": "DEFINITELY",
   "pronunciations": "ˈdɛfənətli"
 },
 {
   "id": 4557,
   "word": "DELAY",
   "pronunciations": "dɪˈleɪ"
 },
 {
   "id": 4558,
   "word": "DESERT",
   "pronunciations": "ˈdɛzɝt, dɪˈzɝːt"
 },
 {
   "id": 4559,
   "word": "DESPAIR",
   "pronunciations": "dɪˈspɛr"
 },
 {
   "id": 4560,
   "word": "DETROIT",
   "pronunciations": "dɪˈtrɔɪt, ˈdiːˌtrɔɪt"
 },
 {
   "id": 4561,
   "word": "DIET",
   "pronunciations": "ˈdaɪət"
 },
 {
   "id": 4562,
   "word": "DISHES",
   "pronunciations": "ˈdɪʃəz, ˈdɪʃɪz"
 },
 {
   "id": 4563,
   "word": "DISPLAYED",
   "pronunciations": "dɪˈspleɪd"
 },
 {
   "id": 4564,
   "word": "DISPLAYS",
   "pronunciations": "dɪˈspleɪz"
 },
 {
   "id": 4565,
   "word": "DRAWINGS",
   "pronunciations": "ˈdrɔɪŋz"
 },
 {
   "id": 4566,
   "word": "DYNAMIC",
   "pronunciations": "daɪˈnæmɪk"
 },
 {
   "id": 4567,
   "word": "EDUCATED",
   "pronunciations": "ˈɛdʒəˌkeɪtɪd, ˈɛdʒjuːˌkeɪtɪd"
 },
 {
   "id": 4568,
   "word": "ENJOYMENT",
   "pronunciations": "ˌɛnˈdʒɔɪmənt"
 },
 {
   "id": 4569,
   "word": "ENVELOPE",
   "pronunciations": "ˈɛnvəˌloʊp"
 },
 {
   "id": 4570,
   "word": "FANS",
   "pronunciations": "ˈfænz"
 },
 {
   "id": 4571,
   "word": "FAULKNER",
   "pronunciations": "ˈfɔknɝ"
 },
 {
   "id": 4572,
   "word": "FLASH",
   "pronunciations": "ˈflæʃ"
 },
 {
   "id": 4573,
   "word": "FLUID",
   "pronunciations": "ˈfluːəd, ˈfluːɪd"
 },
 {
   "id": 4574,
   "word": "FORMING",
   "pronunciations": "ˈfɔrmɪŋ"
 },
 {
   "id": 4575,
   "word": "FRANCIS",
   "pronunciations": "ˈfrænsəs, ˈfrænsɪs"
 },
 {
   "id": 4576,
   "word": "GARAGE",
   "pronunciations": "gɝˈɑːʒ"
 },
 {
   "id": 4577,
   "word": "GENTLEMEN",
   "pronunciations": "ˈdʒɛntəlmɪn, ˈdʒɛnəlmɪn"
 },
 {
   "id": 4578,
   "word": "GIANTS",
   "pronunciations": "ˈdʒaɪənts"
 },
 {
   "id": 4579,
   "word": "GLORY",
   "pronunciations": "ˈglɔri"
 },
 {
   "id": 4580,
   "word": "GOVERNING",
   "pronunciations": "ˈgʌvɝnɪŋ"
 },
 {
   "id": 4581,
   "word": "HABITS",
   "pronunciations": "ˈhæbəts"
 },
 {
   "id": 4582,
   "word": "HELPLESS",
   "pronunciations": "ˈhɛlpləs"
 },
 {
   "id": 4583,
   "word": "HEN",
   "pronunciations": "ˈhɛn"
 },
 {
   "id": 4584,
   "word": "HERITAGE",
   "pronunciations": "ˈhɛrətədʒ, ˈhɛrɪtɪdʒ"
 },
 {
   "id": 4585,
   "word": "HEROIC",
   "pronunciations": "hɪˈroʊɪk"
 },
 {
   "id": 4586,
   "word": "HESITATED",
   "pronunciations": "ˈhɛzɪˌteɪtɪd"
 },
 {
   "id": 4587,
   "word": "HOAG",
   "pronunciations": "ˈhoʊg"
 },
 {
   "id": 4588,
   "word": "IDEOLOGICAL",
   "pronunciations": "ˌaɪdiːəˈlɑːdʒɪkəl"
 },
 {
   "id": 4589,
   "word": "INCLINED",
   "pronunciations": "ˌɪnˈklaɪnd"
 },
 {
   "id": 4590,
   "word": "INDIRECT",
   "pronunciations": "ˌɪndɝˈɛkt"
 },
 {
   "id": 4591,
   "word": "INSPECTION",
   "pronunciations": "ˌɪnˈspɛkʃən"
 },
 {
   "id": 4592,
   "word": "INTERMEDIATE",
   "pronunciations": "ˌɪntɝˈmiːdiːɪt, ˌɪnɝˈmiːdiːɪt"
 },
 {
   "id": 4593,
   "word": "INTIMATE",
   "pronunciations": "ˈɪntəmət, ˈɪntɪˌmeɪt, ˈɪnɪmət"
 },
 {
   "id": 4594,
   "word": "JAIL",
   "pronunciations": "ˈdʒeɪl"
 },
 {
   "id": 4595,
   "word": "JOHN'S",
   "pronunciations": "ˈdʒɑːnz"
 },
 {
   "id": 4596,
   "word": "JOHNSTON",
   "pronunciations": "ˈdʒɑːnstən"
 },
 {
   "id": 4597,
   "word": "JOYCE",
   "pronunciations": "ˈdʒɔɪs"
 },
 {
   "id": 4598,
   "word": "KAY",
   "pronunciations": "ˈkeɪ"
 },
 {
   "id": 4599,
   "word": "KEEPS",
   "pronunciations": "ˈkiːps"
 },
 {
   "id": 4600,
   "word": "KEITH",
   "pronunciations": "ˈkiːθ"
 },
 {
   "id": 4601,
   "word": "KILLER",
   "pronunciations": "ˈkɪlɝ"
 },
 {
   "id": 4602,
   "word": "LAUNCHED",
   "pronunciations": "ˈlɔntʃt"
 },
 {
   "id": 4603,
   "word": "LINEAR",
   "pronunciations": "ˈlɪniːɝ"
 },
 {
   "id": 4604,
   "word": "LOOP",
   "pronunciations": "ˈluːp"
 },
 {
   "id": 4605,
   "word": "LOWERED",
   "pronunciations": "ˈloʊɝd"
 },
 {
   "id": 4606,
   "word": "LUCKY",
   "pronunciations": "ˈlʌki"
 },
 {
   "id": 4607,
   "word": "LUXURY",
   "pronunciations": "ˈlʌgʒɝi"
 },
 {
   "id": 4608,
   "word": "MARBLE",
   "pronunciations": "ˈmɑːrbəl"
 },
 {
   "id": 4609,
   "word": "MARS",
   "pronunciations": "ˈmɑːrz"
 },
 {
   "id": 4610,
   "word": "MASSES",
   "pronunciations": "ˈmæsəz, ˈmæsɪz"
 },
 {
   "id": 4611,
   "word": "MATE",
   "pronunciations": "ˈmeɪt"
 },
 {
   "id": 4612,
   "word": "MAUDE",
   "pronunciations": "ˈmɔd"
 },
 {
   "id": 4613,
   "word": "MELODY",
   "pronunciations": "ˈmɛlədi"
 },
 {
   "id": 4614,
   "word": "MERGER",
   "pronunciations": "ˈmɝːdʒɝ"
 },
 {
   "id": 4615,
   "word": "MICHIGAN",
   "pronunciations": "ˈmɪʃɪgən"
 },
 {
   "id": 4616,
   "word": "MILLIGRAMS",
   "pronunciations": "ˈmɪləˌgræmz"
 },
 {
   "id": 4617,
   "word": "MISSOURI",
   "pronunciations": "məˈzʊri, məˈzɝːə"
 },
 {
   "id": 4618,
   "word": "MODE",
   "pronunciations": "ˈmoʊd"
 },
 {
   "id": 4619,
   "word": "MONUMENT",
   "pronunciations": "ˈmɑːnjuːmənt, ˈmɑːnjəmənt"
 },
 {
   "id": 4620,
   "word": "MORRIS",
   "pronunciations": "ˈmɔrəs, ˈmɔrɪs"
 },
 {
   "id": 4621,
   "word": "NEAT",
   "pronunciations": "ˈniːt"
 },
 {
   "id": 4622,
   "word": "NUTS",
   "pronunciations": "ˈnʌts"
 },
 {
   "id": 4623,
   "word": "OBLIGED",
   "pronunciations": "əˈblaɪdʒd"
 },
 {
   "id": 4624,
   "word": "OCCURRING",
   "pronunciations": "əˈkɝːɪŋ"
 },
 {
   "id": 4625,
   "word": "PAINTER",
   "pronunciations": "ˈpeɪntɝ, ˈpeɪnɝ"
 },
 {
   "id": 4626,
   "word": "PARTICLE",
   "pronunciations": "ˈpɑːrtəkəl, ˈpɑːrtɪkəl"
 },
 {
   "id": 4627,
   "word": "PARTISAN",
   "pronunciations": "ˈpɑːrtəzən"
 },
 {
   "id": 4628,
   "word": "PASSENGERS",
   "pronunciations": "ˈpæsəndʒɝz"
 },
 {
   "id": 4629,
   "word": "PATIENT'S",
   "pronunciations": "ˈpeɪʃənts"
 },
 {
   "id": 4630,
   "word": "PAUSE",
   "pronunciations": "ˈpɔz"
 },
 {
   "id": 4631,
   "word": "PERSUADED",
   "pronunciations": "pɝˈsweɪdəd, pɝˈsweɪdɪd"
 },
 {
   "id": 4632,
   "word": "PERTINENT",
   "pronunciations": "ˈpɝːtɪnɪnt"
 },
 {
   "id": 4633,
   "word": "PHILIP",
   "pronunciations": "ˈfɪləp, ˈfɪlɪp"
 },
 {
   "id": 4634,
   "word": "PITCHER",
   "pronunciations": "ˈpɪtʃɝ"
 },
 {
   "id": 4635,
   "word": "PLANET",
   "pronunciations": "ˈplænət"
 },
 {
   "id": 4636,
   "word": "PLANETARY",
   "pronunciations": "ˈplænəˌtɛri"
 },
 {
   "id": 4637,
   "word": "PORT",
   "pronunciations": "ˈpɔrt"
 },
 {
   "id": 4638,
   "word": "POSSESSION",
   "pronunciations": "pəˈzɛʃən"
 },
 {
   "id": 4639,
   "word": "PRAIRIE",
   "pronunciations": "ˈprɛri"
 },
 {
   "id": 4640,
   "word": "PRISONERS",
   "pronunciations": "ˈprɪzənɝz, ˈprɪznɝz"
 },
 {
   "id": 4641,
   "word": "PROCUREMENT",
   "pronunciations": "proʊˈkjʊrmənt"
 },
 {
   "id": 4642,
   "word": "PROFITS",
   "pronunciations": "ˈprɑːfɪts"
 },
 {
   "id": 4643,
   "word": "PROSPECTIVE",
   "pronunciations": "prəˈspɛktɪv"
 },
 {
   "id": 4644,
   "word": "PROTEIN",
   "pronunciations": "ˈproʊˌtiːn"
 },
 {
   "id": 4645,
   "word": "PUNISHMENT",
   "pronunciations": "ˈpʌnɪʃmənt"
 },
 {
   "id": 4646,
   "word": "QUESTIONING",
   "pronunciations": "ˈkwɛstʃənɪŋ"
 },
 {
   "id": 4647,
   "word": "RACES",
   "pronunciations": "ˈreɪsəz, ˈreɪsɪz"
 },
 {
   "id": 4648,
   "word": "RANG",
   "pronunciations": "ˈræŋ"
 },
 {
   "id": 4649,
   "word": "RENT",
   "pronunciations": "ˈrɛnt"
 },
 {
   "id": 4650,
   "word": "REPLACEMENT",
   "pronunciations": "rɪˈpleɪsmənt"
 },
 {
   "id": 4651,
   "word": "RESOLVED",
   "pronunciations": "riːˈzɑːlvd"
 },
 {
   "id": 4652,
   "word": "RESPECTABLE",
   "pronunciations": "rɪˈspɛktəbəl, riːˈspɛktəbəl"
 },
 {
   "id": 4653,
   "word": "RESPOND",
   "pronunciations": "rɪˈspɑːnd, riːˈspɑːnd"
 },
 {
   "id": 4654,
   "word": "REVEALS",
   "pronunciations": "rɪˈviːlz, riːˈviːlz"
 },
 {
   "id": 4655,
   "word": "REVEREND",
   "pronunciations": "ˈrɛvɝənd, ˈrɛvrənd"
 },
 {
   "id": 4656,
   "word": "REVOLUTIONARY",
   "pronunciations": "ˌrɛvəˈluːʃəˌnɛri"
 },
 {
   "id": 4657,
   "word": "RICO",
   "pronunciations": "ˈriːkoʊ"
 },
 {
   "id": 4658,
   "word": "RUSS",
   "pronunciations": "ˈrʌs"
 },
 {
   "id": 4659,
   "word": "SAVING",
   "pronunciations": "ˈseɪvɪŋ"
 },
 {
   "id": 4660,
   "word": "SCARED",
   "pronunciations": "ˈskɛrd"
 },
 {
   "id": 4661,
   "word": "SCREW",
   "pronunciations": "ˈskruː"
 },
 {
   "id": 4662,
   "word": "SHAKING",
   "pronunciations": "ˈʃeɪkɪŋ"
 },
 {
   "id": 4663,
   "word": "SHAME",
   "pronunciations": "ˈʃeɪm"
 },
 {
   "id": 4664,
   "word": "SHINING",
   "pronunciations": "ˈʃaɪnɪŋ"
 },
 {
   "id": 4665,
   "word": "SHU",
   "pronunciations": "ˈʃuː"
 },
 {
   "id": 4666,
   "word": "SIDEWALK",
   "pronunciations": "ˈsaɪˌdwɔk"
 },
 {
   "id": 4667,
   "word": "SIXTY",
   "pronunciations": "ˈsɪksti"
 },
 {
   "id": 4668,
   "word": "SKIRT",
   "pronunciations": "ˈskɝːt"
 },
 {
   "id": 4669,
   "word": "SMART",
   "pronunciations": "ˈsmɑːrt"
 },
 {
   "id": 4670,
   "word": "SOCIALIST",
   "pronunciations": "ˈsoʊʃəlɪst"
 },
 {
   "id": 4671,
   "word": "SPEECHES",
   "pronunciations": "ˈspiːtʃəz, ˈspiːtʃɪz"
 },
 {
   "id": 4672,
   "word": "SPRINGS",
   "pronunciations": "ˈsprɪŋz, spɝˈɪŋz"
 },
 {
   "id": 4673,
   "word": "STARTLED",
   "pronunciations": "ˈstɑːrtəld"
 },
 {
   "id": 4674,
   "word": "STEELE",
   "pronunciations": "ˈstiːl"
 },
 {
   "id": 4675,
   "word": "STIFF",
   "pronunciations": "ˈstɪf"
 },
 {
   "id": 4676,
   "word": "STUMBLED",
   "pronunciations": "ˈstʌmbəld"
 },
 {
   "id": 4677,
   "word": "SUBMITTED",
   "pronunciations": "səbˈmɪtəd"
 },
 {
   "id": 4678,
   "word": "SUMMARY",
   "pronunciations": "ˈsʌmɝi"
 },
 {
   "id": 4679,
   "word": "SURROUNDED",
   "pronunciations": "sɝˈaʊndəd, sɝˈaʊndɪd"
 },
 {
   "id": 4680,
   "word": "SUSPECTED",
   "pronunciations": "səˈspɛktəd, səˈspɛktɪd"
 },
 {
   "id": 4681,
   "word": "TALE",
   "pronunciations": "ˈteɪl"
 },
 {
   "id": 4682,
   "word": "TALES",
   "pronunciations": "ˈteɪlz"
 },
 {
   "id": 4683,
   "word": "TAXPAYERS",
   "pronunciations": "ˈtækˌspeɪɝz"
 },
 {
   "id": 4684,
   "word": "TAYLOR",
   "pronunciations": "ˈteɪlɝ"
 },
 {
   "id": 4685,
   "word": "TELEGRAPH",
   "pronunciations": "ˈtɛləˌgræf"
 },
 {
   "id": 4686,
   "word": "THEIRS",
   "pronunciations": "ˈðɛrz"
 },
 {
   "id": 4687,
   "word": "THEORETICAL",
   "pronunciations": "ˌθiːɝˈɛtɪkəl"
 },
 {
   "id": 4688,
   "word": "THOROUGH",
   "pronunciations": "ˈθɝːoʊ, ˈθɔroʊ"
 },
 {
   "id": 4689,
   "word": "TRADITIONS",
   "pronunciations": "trəˈdɪʃənz"
 },
 {
   "id": 4690,
   "word": "TRENDS",
   "pronunciations": "ˈtrɛndz, ˈtrɛnz"
 },
 {
   "id": 4691,
   "word": "TSUNAMI",
   "pronunciations": "tsuːˈnɑːmi, suːˈnɑːmi"
 },
 {
   "id": 4692,
   "word": "UGLY",
   "pronunciations": "ˈʌgli"
 },
 {
   "id": 4693,
   "word": "UNLIKELY",
   "pronunciations": "ənˈlaɪkli"
 },
 {
   "id": 4694,
   "word": "URGE",
   "pronunciations": "ˈɝːdʒ"
 },
 {
   "id": 4695,
   "word": "URGENT",
   "pronunciations": "ˈɝːdʒənt"
 },
 {
   "id": 4696,
   "word": "UTOPIAN",
   "pronunciations": "juːˈtoʊpiːən"
 },
 {
   "id": 4697,
   "word": "VERBAL",
   "pronunciations": "ˈvɝːbəl"
 },
 {
   "id": 4698,
   "word": "VERMONT",
   "pronunciations": "vɝˈmɑːnt"
 },
 {
   "id": 4699,
   "word": "VERNON",
   "pronunciations": "ˈvɝːnən"
 },
 {
   "id": 4700,
   "word": "WAGNER",
   "pronunciations": "ˈwægnɝ, ˈvɑːgnɝ"
 },
 {
   "id": 4701,
   "word": "WARWICK",
   "pronunciations": "ˈwɔrwɪk"
 },
 {
   "id": 4702,
   "word": "WHEELS",
   "pronunciations": "ˈwiːlz, ˈhwiːlz"
 },
 {
   "id": 4703,
   "word": "WINDS",
   "pronunciations": "ˈwɪndz, ˈwaɪndz"
 },
 {
   "id": 4704,
   "word": "WITNESSES",
   "pronunciations": "ˈwɪtnəsəz, ˈwɪtnəsɪz"
 },
 {
   "id": 4705,
   "word": "WIVES",
   "pronunciations": "ˈwaɪvz"
 },
 {
   "id": 4706,
   "word": "WONDERING",
   "pronunciations": "ˈwʌndɝɪŋ"
 },
 {
   "id": 4707,
   "word": "ABEL",
   "pronunciations": "ˈeɪbəl"
 },
 {
   "id": 4708,
   "word": "ACCORDANCE",
   "pronunciations": "əˈkɔrdəns"
 },
 {
   "id": 4709,
   "word": "ADJUSTMENTS",
   "pronunciations": "əˈdʒʌstmənts"
 },
 {
   "id": 4710,
   "word": "ALABAMA",
   "pronunciations": "ˌæləˈbæmə"
 },
 {
   "id": 4711,
   "word": "ALIKE",
   "pronunciations": "əˈlaɪk"
 },
 {
   "id": 4712,
   "word": "ALLEN",
   "pronunciations": "ˈælən"
 },
 {
   "id": 4713,
   "word": "ALLIANCE",
   "pronunciations": "əˈlaɪəns"
 },
 {
   "id": 4714,
   "word": "AMAZING",
   "pronunciations": "əˈmeɪzɪŋ"
 },
 {
   "id": 4715,
   "word": "ANTICIPATION",
   "pronunciations": "ænˌtɪsəˈpeɪʃən, æntɪsəˈpeɪʃən"
 },
 {
   "id": 4716,
   "word": "ANYHOW",
   "pronunciations": "ˈɛniːˌhaʊ"
 },
 {
   "id": 4717,
   "word": "ARNOLD",
   "pronunciations": "ˈɑːrnəld"
 },
 {
   "id": 4718,
   "word": "AROUSED",
   "pronunciations": "ɝˈaʊzd"
 },
 {
   "id": 4719,
   "word": "ASSESSORS",
   "pronunciations": "əˈsɛsɝz"
 },
 {
   "id": 4720,
   "word": "ATTAIN",
   "pronunciations": "əˈteɪn"
 },
 {
   "id": 4721,
   "word": "AUTHENTIC",
   "pronunciations": "əˈθɛntɪk, ɔˈθɛntɪk, ɔˈθɛnɪk, əˈθɛnɪk"
 },
 {
   "id": 4722,
   "word": "AWAKE",
   "pronunciations": "əˈweɪk"
 },
 {
   "id": 4723,
   "word": "BASICALLY",
   "pronunciations": "ˈbeɪsɪkli"
 },
 {
   "id": 4724,
   "word": "BET",
   "pronunciations": "ˈbɛt"
 },
 {
   "id": 4725,
   "word": "BINDING",
   "pronunciations": "ˈbaɪndɪŋ"
 },
 {
   "id": 4726,
   "word": "BIOLOGICAL",
   "pronunciations": "ˌbaɪəˈlɑːdʒɪkəl"
 },
 {
   "id": 4727,
   "word": "BLONDE",
   "pronunciations": "ˈblɑːnd"
 },
 {
   "id": 4728,
   "word": "BONES",
   "pronunciations": "ˈboʊnz"
 },
 {
   "id": 4729,
   "word": "BOOTS",
   "pronunciations": "ˈbuːts"
 },
 {
   "id": 4730,
   "word": "BORDEN",
   "pronunciations": "ˈbɔrdən"
 },
 {
   "id": 4731,
   "word": "BORDER",
   "pronunciations": "ˈbɔrdɝ"
 },
 {
   "id": 4732,
   "word": "BOSS",
   "pronunciations": "ˈbɑːs, ˈbɔs"
 },
 {
   "id": 4733,
   "word": "BRUSHED",
   "pronunciations": "ˈbrʌʃt"
 },
 {
   "id": 4734,
   "word": "BUCK",
   "pronunciations": "ˈbʌk"
 },
 {
   "id": 4735,
   "word": "BUNDLE",
   "pronunciations": "ˈbʌndəl"
 },
 {
   "id": 4736,
   "word": "CAFE",
   "pronunciations": "kəˈfeɪ, kæˈfeɪ"
 },
 {
   "id": 4737,
   "word": "CAPE",
   "pronunciations": "ˈkeɪp"
 },
 {
   "id": 4738,
   "word": "CATHY",
   "pronunciations": "ˈkæθi"
 },
 {
   "id": 4739,
   "word": "CHAPEL",
   "pronunciations": "ˈtʃæpəl"
 },
 {
   "id": 4740,
   "word": "CHEEK",
   "pronunciations": "ˈtʃiːk"
 },
 {
   "id": 4741,
   "word": "CHRIST'S",
   "pronunciations": "ˈkraɪsts"
 },
 {
   "id": 4742,
   "word": "CLOCK",
   "pronunciations": "ˈklɑːk"
 },
 {
   "id": 4743,
   "word": "CLOTHING",
   "pronunciations": "ˈkloʊðɪŋ"
 },
 {
   "id": 4744,
   "word": "COMPROMISE",
   "pronunciations": "ˈkɑːmprəˌmaɪz"
 },
 {
   "id": 4745,
   "word": "CONDITIONED",
   "pronunciations": "kənˈdɪʃənd"
 },
 {
   "id": 4746,
   "word": "CONFIRMED",
   "pronunciations": "kənˈfɝːmd"
 },
 {
   "id": 4747,
   "word": "CONVERTED",
   "pronunciations": "kənˈvɝːtɪd"
 },
 {
   "id": 4748,
   "word": "CONVICTIONS",
   "pronunciations": "kənˈvɪkʃənz"
 },
 {
   "id": 4749,
   "word": "COOPERATIVE",
   "pronunciations": "koʊˈɑːpɝˌeɪtɪv"
 },
 {
   "id": 4750,
   "word": "CRASH",
   "pronunciations": "ˈkræʃ"
 },
 {
   "id": 4751,
   "word": "CRAWLED",
   "pronunciations": "ˈkrɔld"
 },
 {
   "id": 4752,
   "word": "CREAM",
   "pronunciations": "ˈkriːm"
 },
 {
   "id": 4753,
   "word": "CREATURES",
   "pronunciations": "ˈkriːtʃɝz"
 },
 {
   "id": 4754,
   "word": "CROP",
   "pronunciations": "ˈkrɑːp"
 },
 {
   "id": 4755,
   "word": "DECENT",
   "pronunciations": "ˈdiːsənt"
 },
 {
   "id": 4756,
   "word": "DISPOSAL",
   "pronunciations": "dɪˈspoʊzəl"
 },
 {
   "id": 4757,
   "word": "DISTINCTIVE",
   "pronunciations": "dɪˈstɪŋktɪv"
 },
 {
   "id": 4758,
   "word": "DOC",
   "pronunciations": "ˈdɑːk"
 },
 {
   "id": 4759,
   "word": "DOLORES",
   "pronunciations": "dəˈlɔrɪs"
 },
 {
   "id": 4760,
   "word": "DOMINATED",
   "pronunciations": "ˈdɑːməˌneɪtəd"
 },
 {
   "id": 4761,
   "word": "DONALD",
   "pronunciations": "ˈdɑːnəld"
 },
 {
   "id": 4762,
   "word": "EL",
   "pronunciations": "ˈɛl"
 },
 {
   "id": 4763,
   "word": "EMPHASIZE",
   "pronunciations": "ˈɛmfəˌsaɪz"
 },
 {
   "id": 4764,
   "word": "ENDLESS",
   "pronunciations": "ˈɛndləs"
 },
 {
   "id": 4765,
   "word": "ENFORCED",
   "pronunciations": "ɛnˈfɔrst"
 },
 {
   "id": 4766,
   "word": "EXPANDED",
   "pronunciations": "ɪkˈspændəd, ɪkˈspændɪd"
 },
 {
   "id": 4767,
   "word": "EXPLAINS",
   "pronunciations": "ɪkˈspleɪnz"
 },
 {
   "id": 4768,
   "word": "FANTASTIC",
   "pronunciations": "fænˈtæstɪk"
 },
 {
   "id": 4769,
   "word": "FASCINATING",
   "pronunciations": "ˈfæsəˌneɪtɪŋ"
 },
 {
   "id": 4770,
   "word": "FIGURED",
   "pronunciations": "ˈfɪgjɝd"
 },
 {
   "id": 4771,
   "word": "FITTED",
   "pronunciations": "ˈfɪtəd, ˈfɪtɪd"
 },
 {
   "id": 4772,
   "word": "FLORIDA",
   "pronunciations": "ˈflɔrədə, ˈflɔrɪdə, ˈflɑːrədə, ˈflɑːrɪdə"
 },
 {
   "id": 4773,
   "word": "FOIL",
   "pronunciations": "ˈfɔɪl"
 },
 {
   "id": 4774,
   "word": "FORTUNATELY",
   "pronunciations": "ˈfɔrtʃənətli, ˈfɔrtʃuːnətli"
 },
 {
   "id": 4775,
   "word": "FOUNDED",
   "pronunciations": "ˈfaʊndɪd"
 },
 {
   "id": 4776,
   "word": "FRACTIONS",
   "pronunciations": "ˈfrækʃənz"
 },
 {
   "id": 4777,
   "word": "FREDDY",
   "pronunciations": "ˈfrɛdi"
 },
 {
   "id": 4778,
   "word": "GATHER",
   "pronunciations": "ˈgæðɝ"
 },
 {
   "id": 4779,
   "word": "GRABBED",
   "pronunciations": "ˈgræbd"
 },
 {
   "id": 4780,
   "word": "GRAINS",
   "pronunciations": "ˈgreɪnz"
 },
 {
   "id": 4781,
   "word": "GRANTS",
   "pronunciations": "ˈgrænts"
 },
 {
   "id": 4782,
   "word": "GREETED",
   "pronunciations": "ˈgriːtəd, ˈgriːtɪd"
 },
 {
   "id": 4783,
   "word": "GRIP",
   "pronunciations": "ˈgrɪp"
 },
 {
   "id": 4784,
   "word": "GUIDED",
   "pronunciations": "ˈgaɪdəd, ˈgaɪdɪd"
 },
 {
   "id": 4785,
   "word": "GUYS",
   "pronunciations": "ˈgaɪz"
 },
 {
   "id": 4786,
   "word": "HAPPILY",
   "pronunciations": "ˈhæpəli"
 },
 {
   "id": 4787,
   "word": "HASN'T",
   "pronunciations": "ˈhæzənt"
 },
 {
   "id": 4788,
   "word": "HATRED",
   "pronunciations": "ˈheɪtrəd"
 },
 {
   "id": 4789,
   "word": "HIDDEN",
   "pronunciations": "ˈhɪdən"
 },
 {
   "id": 4790,
   "word": "HISTORIANS",
   "pronunciations": "hɪˈstɔriːənz"
 },
 {
   "id": 4791,
   "word": "HOSPITALS",
   "pronunciations": "ˈhɑːˌspɪtəlz"
 },
 {
   "id": 4792,
   "word": "HOTELS",
   "pronunciations": "hoʊˈtɛlz"
 },
 {
   "id": 4793,
   "word": "ILLNESS",
   "pronunciations": "ˈɪlnəs"
 },
 {
   "id": 4794,
   "word": "IMPROVEMENTS",
   "pronunciations": "ˌɪmˈpruːvmənts"
 },
 {
   "id": 4795,
   "word": "IMPULSE",
   "pronunciations": "ˈɪmpəls, ˌɪmˈpʌls"
 },
 {
   "id": 4796,
   "word": "INC.",
   "pronunciations": "ˈɪŋk"
 },
 {
   "id": 4797,
   "word": "INDICATION",
   "pronunciations": "ˌɪndəˈkeɪʃən"
 },
 {
   "id": 4798,
   "word": "INJURED",
   "pronunciations": "ˈɪndʒɝd"
 },
 {
   "id": 4799,
   "word": "INPUT",
   "pronunciations": "ˈɪnˌpʊt"
 },
 {
   "id": 4800,
   "word": "INTERVENTION",
   "pronunciations": "ˌɪntɝˈvɛnʃən"
 },
 {
   "id": 4801,
   "word": "INVENTION",
   "pronunciations": "ˌɪnˈvɛnʃən"
 },
 {
   "id": 4802,
   "word": "INVITATION",
   "pronunciations": "ˌɪnvɪˈteɪʃən"
 },
 {
   "id": 4803,
   "word": "JAN.",
   "pronunciations": "ˈdʒæn, ˈdʒænjuːɛri"
 },
 {
   "id": 4804,
   "word": "JUDGES",
   "pronunciations": "ˈdʒʌdʒɪz"
 },
 {
   "id": 4805,
   "word": "JUNGLE",
   "pronunciations": "ˈdʒʌŋgəl"
 },
 {
   "id": 4806,
   "word": "LANDSCAPE",
   "pronunciations": "ˈlændˌskeɪp, ˈlænˌskeɪp"
 },
 {
   "id": 4807,
   "word": "LAURA",
   "pronunciations": "ˈlɔrə"
 },
 {
   "id": 4808,
   "word": "LEAN",
   "pronunciations": "ˈliːn"
 },
 {
   "id": 4809,
   "word": "LEAPED",
   "pronunciations": "ˈlɛpt, ˈliːpt"
 },
 {
   "id": 4810,
   "word": "LEGISLATORS",
   "pronunciations": "ˈlɛdʒəˌsleɪtɝz"
 },
 {
   "id": 4811,
   "word": "LISTENERS",
   "pronunciations": "ˈlɪsənɝz, ˈlɪsnɝz"
 },
 {
   "id": 4812,
   "word": "LOBBY",
   "pronunciations": "ˈlɑːbi"
 },
 {
   "id": 4813,
   "word": "LOUD",
   "pronunciations": "ˈlaʊd"
 },
 {
   "id": 4814,
   "word": "LUNGS",
   "pronunciations": "ˈlʌŋz"
 },
 {
   "id": 4815,
   "word": "MANAGE",
   "pronunciations": "ˈmænədʒ, ˈmænɪdʒ"
 },
 {
   "id": 4816,
   "word": "MANHATTAN",
   "pronunciations": "mænˈhætən"
 },
 {
   "id": 4817,
   "word": "MATHEMATICS",
   "pronunciations": "ˌmæθəˈmætɪks"
 },
 {
   "id": 4818,
   "word": "MERCHANT",
   "pronunciations": "ˈmɝːtʃənt"
 },
 {
   "id": 4819,
   "word": "MERCY",
   "pronunciations": "ˈmɝːsi"
 },
 {
   "id": 4820,
   "word": "MICHELANGELO",
   "pronunciations": "ˌmaɪkəˈlændʒəˌloʊ, ˌmɪkəˈlændʒəˌloʊ"
 },
 {
   "id": 4821,
   "word": "MINORITY",
   "pronunciations": "maɪˈnɔrəti, məˈnɔrəti"
 },
 {
   "id": 4822,
   "word": "MOTIVES",
   "pronunciations": "ˈmoʊtɪvz"
 },
 {
   "id": 4823,
   "word": "MUSTARD",
   "pronunciations": "ˈmʌstɝd"
 },
 {
   "id": 4824,
   "word": "NEGOTIATIONS",
   "pronunciations": "nəˌgoʊʃiːˈeɪʃənz, nɪˌgoʊʃiːˈeɪʃənz"
 },
 {
   "id": 4825,
   "word": "NEST",
   "pronunciations": "ˈnɛst"
 },
 {
   "id": 4826,
   "word": "NEWER",
   "pronunciations": "ˈnuːɝ"
 },
 {
   "id": 4827,
   "word": "NINTH",
   "pronunciations": "ˈnaɪnθ"
 },
 {
   "id": 4828,
   "word": "NOTABLE",
   "pronunciations": "ˈnoʊtəbəl"
 },
 {
   "id": 4829,
   "word": "NOTTE",
   "pronunciations": "ˈnɑːt"
 },
 {
   "id": 4830,
   "word": "NUDE",
   "pronunciations": "ˈnuːd"
 },
 {
   "id": 4831,
   "word": "OBSERVERS",
   "pronunciations": "əbˈzɝːvɝz"
 },
 {
   "id": 4832,
   "word": "OEDIPUS",
   "pronunciations": "ˈɛdɪpəs"
 },
 {
   "id": 4833,
   "word": "OKAY",
   "pronunciations": "ˌoʊˈkeɪ"
 },
 {
   "id": 4834,
   "word": "ORDERLY",
   "pronunciations": "ˈɔrdɝli"
 },
 {
   "id": 4835,
   "word": "OVERWHELMING",
   "pronunciations": "ˌoʊvɝˈwɛlmɪŋ, ˌoʊvɝˈhwɛlmɪŋ"
 },
 {
   "id": 4836,
   "word": "PACKAGE",
   "pronunciations": "ˈpækədʒ, ˈpækɪdʒ"
 },
 {
   "id": 4837,
   "word": "PARKS",
   "pronunciations": "ˈpɑːrks"
 },
 {
   "id": 4838,
   "word": "PASSAGES",
   "pronunciations": "ˈpæsədʒəz, ˈpæsɪdʒɪz"
 },
 {
   "id": 4839,
   "word": "PEERED",
   "pronunciations": "ˈpɪrd"
 },
 {
   "id": 4840,
   "word": "PHYSICALLY",
   "pronunciations": "ˈfɪzɪkəli, ˈfɪzɪkli"
 },
 {
   "id": 4841,
   "word": "PIONEER",
   "pronunciations": "ˌpaɪəˈnɪr"
 },
 {
   "id": 4842,
   "word": "PIPE",
   "pronunciations": "ˈpaɪp"
 },
 {
   "id": 4843,
   "word": "PLATO",
   "pronunciations": "ˈpleɪtoʊ"
 },
 {
   "id": 4844,
   "word": "POVERTY",
   "pronunciations": "ˈpɑːvɝti"
 },
 {
   "id": 4845,
   "word": "PROBABILITIES",
   "pronunciations": "ˌprɑːbəˈbɪləˌtiːz"
 },
 {
   "id": 4846,
   "word": "PROMISES",
   "pronunciations": "ˈprɑːməsəz"
 },
 {
   "id": 4847,
   "word": "PUPIL",
   "pronunciations": "ˈpjuːpəl"
 },
 {
   "id": 4848,
   "word": "PURCHASED",
   "pronunciations": "ˈpɝːtʃəst"
 },
 {
   "id": 4849,
   "word": "PURSUE",
   "pronunciations": "pɝˈsuː"
 },
 {
   "id": 4850,
   "word": "PUTS",
   "pronunciations": "ˈpʊts"
 },
 {
   "id": 4851,
   "word": "QUARREL",
   "pronunciations": "ˈkwɔrəl"
 },
 {
   "id": 4852,
   "word": "RANKS",
   "pronunciations": "ˈræŋks"
 },
 {
   "id": 4853,
   "word": "REACTIONARY",
   "pronunciations": "riːˈækʃəˌnɛri"
 },
 {
   "id": 4854,
   "word": "RECEIVES",
   "pronunciations": "rəˈsiːvz, rɪˈsiːvz, riːˈsiːvz"
 },
 {
   "id": 4855,
   "word": "RELATING",
   "pronunciations": "rɪˈleɪtɪŋ, riːˈleɪtɪŋ"
 },
 {
   "id": 4856,
   "word": "RENAISSANCE",
   "pronunciations": "ˌrɛnəˈsɑːns"
 },
 {
   "id": 4857,
   "word": "REPAIR",
   "pronunciations": "rɪˈpɛr"
 },
 {
   "id": 4858,
   "word": "REPORTER",
   "pronunciations": "rɪˈpɔrtɝ"
 },
 {
   "id": 4859,
   "word": "RESIDENTS",
   "pronunciations": "ˈrɛzɪdənts"
 },
 {
   "id": 4860,
   "word": "RESPONDED",
   "pronunciations": "rɪˈspɑːndɪd, riːˈspɑːndəd, riːˈspɑːndɪd"
 },
 {
   "id": 4861,
   "word": "RETAIL",
   "pronunciations": "ˈriːˌteɪl"
 },
 {
   "id": 4862,
   "word": "RISES",
   "pronunciations": "ˈraɪzəz, ˈraɪzɪz"
 },
 {
   "id": 4863,
   "word": "RUSH",
   "pronunciations": "ˈrʌʃ"
 },
 {
   "id": 4864,
   "word": "SAILING",
   "pronunciations": "ˈseɪlɪŋ"
 },
 {
   "id": 4865,
   "word": "SAUCE",
   "pronunciations": "ˈsɔs"
 },
 {
   "id": 4866,
   "word": "SECRETS",
   "pronunciations": "ˈsiːkrɪts"
 },
 {
   "id": 4867,
   "word": "SHADOWS",
   "pronunciations": "ˈʃæˌdoʊz"
 },
 {
   "id": 4868,
   "word": "SHERIFF",
   "pronunciations": "ˈʃɛrəf, ˈʃɛrɪf"
 },
 {
   "id": 4869,
   "word": "SIXTEEN",
   "pronunciations": "sɪkˈstiːn, ˈsɪkˈstiːn"
 },
 {
   "id": 4870,
   "word": "SLIDE",
   "pronunciations": "ˈslaɪd"
 },
 {
   "id": 4871,
   "word": "SLIM",
   "pronunciations": "ˈslɪm"
 },
 {
   "id": 4872,
   "word": "SOCIALISM",
   "pronunciations": "ˈsoʊʃəˌlɪzəm"
 },
 {
   "id": 4873,
   "word": "SOLELY",
   "pronunciations": "ˈsoʊəli"
 },
 {
   "id": 4874,
   "word": "SOLVE",
   "pronunciations": "ˈsɑːlv"
 },
 {
   "id": 4875,
   "word": "SPLENDID",
   "pronunciations": "ˈsplɛndɪd"
 },
 {
   "id": 4876,
   "word": "STAKE",
   "pronunciations": "ˈsteɪk"
 },
 {
   "id": 4877,
   "word": "STRIKES",
   "pronunciations": "ˈstraɪks"
 },
 {
   "id": 4878,
   "word": "STRONGEST",
   "pronunciations": "ˈstrɔŋgəst"
 },
 {
   "id": 4879,
   "word": "STRUGGLING",
   "pronunciations": "ˈstrʌgəlɪŋ, ˈstrʌglɪŋ"
 },
 {
   "id": 4880,
   "word": "STYLES",
   "pronunciations": "ˈstaɪlz"
 },
 {
   "id": 4881,
   "word": "SUBMARINES",
   "pronunciations": "ˈsʌbmɝˌiːnz, səbmɝˈiːnz"
 },
 {
   "id": 4882,
   "word": "SUITCASE",
   "pronunciations": "ˈsuːtˌkeɪs"
 },
 {
   "id": 4883,
   "word": "SUPPLEMENT",
   "pronunciations": "ˈsʌpləmənt, ˌsəpləˈmɛnt"
 },
 {
   "id": 4884,
   "word": "TACTICS",
   "pronunciations": "ˈtæktɪks"
 },
 {
   "id": 4885,
   "word": "TEMPORARILY",
   "pronunciations": "ˌtɛmpɝˈɛrəli"
 },
 {
   "id": 4886,
   "word": "TENT",
   "pronunciations": "ˈtɛnt"
 },
 {
   "id": 4887,
   "word": "THEORIES",
   "pronunciations": "ˈθɪriːz, ˈθiːɝiːz"
 },
 {
   "id": 4888,
   "word": "THEREAFTER",
   "pronunciations": "ðɛˈræftɝ"
 },
 {
   "id": 4889,
   "word": "TONES",
   "pronunciations": "ˈtoʊnz"
 },
 {
   "id": 4890,
   "word": "TOOTH",
   "pronunciations": "ˈtuːθ"
 },
 {
   "id": 4891,
   "word": "TOURNAMENT",
   "pronunciations": "ˈtʊrnəmənt"
 },
 {
   "id": 4892,
   "word": "TRANSFORMATION",
   "pronunciations": "ˌtrænsfɝˈmeɪʃən"
 },
 {
   "id": 4893,
   "word": "TRAP",
   "pronunciations": "ˈtræp"
 },
 {
   "id": 4894,
   "word": "TREATY",
   "pronunciations": "ˈtriːti"
 },
 {
   "id": 4895,
   "word": "TRIM",
   "pronunciations": "ˈtrɪm"
 },
 {
   "id": 4896,
   "word": "TWENTIETH",
   "pronunciations": "ˈtwɛntiːˌɛθ, ˈtwɛnˌtiːɛθ"
 },
 {
   "id": 4897,
   "word": "UNDERLYING",
   "pronunciations": "ˌəndɝˈlaɪɪŋ"
 },
 {
   "id": 4898,
   "word": "VACUUM",
   "pronunciations": "ˈvækjuːm"
 },
 {
   "id": 4899,
   "word": "VOTERS",
   "pronunciations": "ˈvoʊtɝz"
 },
 {
   "id": 4900,
   "word": "VOTES",
   "pronunciations": "ˈvoʊts"
 },
 {
   "id": 4901,
   "word": "WARRANT",
   "pronunciations": "ˈwɔrənt"
 },
 {
   "id": 4902,
   "word": "WIT",
   "pronunciations": "ˈwɪt"
 },
 {
   "id": 4903,
   "word": "WORRIES",
   "pronunciations": "ˈwɝːiːz"
 },
 {
   "id": 4904,
   "word": "ACHIEVEMENTS",
   "pronunciations": "əˈtʃiːvmənts"
 },
 {
   "id": 4905,
   "word": "ADDRESSED",
   "pronunciations": "əˈdrɛst"
 },
 {
   "id": 4906,
   "word": "AFFECTS",
   "pronunciations": "əˈfɛkts"
 },
 {
   "id": 4907,
   "word": "AIRPORT",
   "pronunciations": "ˈɛrˌpɔrt"
 },
 {
   "id": 4908,
   "word": "ALLOWS",
   "pronunciations": "əˈlaʊz"
 },
 {
   "id": 4909,
   "word": "AMBITION",
   "pronunciations": "æmˈbɪʃən"
 },
 {
   "id": 4910,
   "word": "AMEN",
   "pronunciations": "eɪˈmɛn, ɑːˈmɛn"
 },
 {
   "id": 4911,
   "word": "APPEALS",
   "pronunciations": "əˈpiːlz"
 },
 {
   "id": 4912,
   "word": "APPLIES",
   "pronunciations": "əˈplaɪz"
 },
 {
   "id": 4913,
   "word": "ARREST",
   "pronunciations": "ɝˈɛst"
 },
 {
   "id": 4914,
   "word": "ARRESTED",
   "pronunciations": "ɝˈɛstəd, ɝˈɛstɪd"
 },
 {
   "id": 4915,
   "word": "ASSERT",
   "pronunciations": "əˈsɝːt"
 },
 {
   "id": 4916,
   "word": "ASSURANCE",
   "pronunciations": "əˈʃʊrəns"
 },
 {
   "id": 4917,
   "word": "ATTRACT",
   "pronunciations": "əˈtrækt"
 },
 {
   "id": 4918,
   "word": "AVOIDED",
   "pronunciations": "əˈvɔɪdɪd"
 },
 {
   "id": 4919,
   "word": "BLOWING",
   "pronunciations": "ˈbloʊɪŋ"
 },
 {
   "id": 4920,
   "word": "BRASS",
   "pronunciations": "ˈbræs"
 },
 {
   "id": 4921,
   "word": "BROADER",
   "pronunciations": "ˈbrɔdɝ"
 },
 {
   "id": 4922,
   "word": "BUSINESSES",
   "pronunciations": "ˈbɪznəsəz, ˈbɪznɪsɪz"
 },
 {
   "id": 4923,
   "word": "CANVAS",
   "pronunciations": "ˈkænvəs"
 },
 {
   "id": 4924,
   "word": "CAUTION",
   "pronunciations": "ˈkɑːʃən, ˈkɔʃən"
 },
 {
   "id": 4925,
   "word": "COMBINATIONS",
   "pronunciations": "ˌkɑːmbəˈneɪʃənz"
 },
 {
   "id": 4926,
   "word": "COMMISSIONER",
   "pronunciations": "kəˈmɪʃənɝ"
 },
 {
   "id": 4927,
   "word": "COMPANION",
   "pronunciations": "kəmˈpænjən"
 },
 {
   "id": 4928,
   "word": "COMPREHENSIVE",
   "pronunciations": "ˌkɑːmpriːˈhɛnsɪv"
 },
 {
   "id": 4929,
   "word": "CONDEMNED",
   "pronunciations": "kənˈdɛmd"
 },
 {
   "id": 4930,
   "word": "CONSISTENTLY",
   "pronunciations": "kənˈsɪstəntli"
 },
 {
   "id": 4931,
   "word": "CONTINENTAL",
   "pronunciations": "ˌkɑːntəˈnɛntəl, ˌkɑːntəˈnɛnəl"
 },
 {
   "id": 4932,
   "word": "CONVENIENCE",
   "pronunciations": "kənˈviːnjəns"
 },
 {
   "id": 4933,
   "word": "CORPORATE",
   "pronunciations": "ˈkɔrpɝət, ˈkɔrprət"
 },
 {
   "id": 4934,
   "word": "COTTAGE",
   "pronunciations": "ˈkɑːtədʒ, ˈkɑːtɪdʒ"
 },
 {
   "id": 4935,
   "word": "CROWN",
   "pronunciations": "ˈkraʊn"
 },
 {
   "id": 4936,
   "word": "CUBAN",
   "pronunciations": "ˈkjuːbən"
 },
 {
   "id": 4937,
   "word": "CURVES",
   "pronunciations": "ˈkɝːvz"
 },
 {
   "id": 4938,
   "word": "DAIRY",
   "pronunciations": "ˈdɛri"
 },
 {
   "id": 4939,
   "word": "DAMNED",
   "pronunciations": "ˈdæmd"
 },
 {
   "id": 4940,
   "word": "DATED",
   "pronunciations": "ˈdeɪtɪd"
 },
 {
   "id": 4941,
   "word": "DAYTIME",
   "pronunciations": "ˈdeɪˌtaɪm"
 },
 {
   "id": 4942,
   "word": "DEADLY",
   "pronunciations": "ˈdɛdli"
 },
 {
   "id": 4943,
   "word": "DECISIVE",
   "pronunciations": "dɪˈsaɪsɪv"
 },
 {
   "id": 4944,
   "word": "DELIVERY",
   "pronunciations": "dɪˈlɪvɝi"
 },
 {
   "id": 4945,
   "word": "DEMANDING",
   "pronunciations": "dɪˈmændɪŋ"
 },
 {
   "id": 4946,
   "word": "DEPTHS",
   "pronunciations": "ˈdɛpθs"
 },
 {
   "id": 4947,
   "word": "DEVOTION",
   "pronunciations": "dɪˈvoʊʃən"
 },
 {
   "id": 4948,
   "word": "DIM",
   "pronunciations": "ˈdɪm"
 },
 {
   "id": 4949,
   "word": "DIRECTORS",
   "pronunciations": "dɝˈɛktɝz, daɪˈrɛktɝz, diːˈrɛktɝz, dɪˈrɛktɝz"
 },
 {
   "id": 4950,
   "word": "DISCHARGE",
   "pronunciations": "dɪsˈtʃɑːrdʒ, ˈdɪsˌtʃɑːrdʒ"
 },
 {
   "id": 4951,
   "word": "DISEASES",
   "pronunciations": "dɪˈziːzəz, dɪˈziːzɪz"
 },
 {
   "id": 4952,
   "word": "DISTANCES",
   "pronunciations": "ˈdɪstənsəz, ˈdɪstənsɪz"
 },
 {
   "id": 4953,
   "word": "DISTINGUISH",
   "pronunciations": "dɪˈstɪŋgwɪʃ"
 },
 {
   "id": 4954,
   "word": "DOCUMENTS",
   "pronunciations": "ˈdɑːkjəmənts, ˈdɑːkjuːmənts"
 },
 {
   "id": 4955,
   "word": "DRANK",
   "pronunciations": "ˈdræŋk"
 },
 {
   "id": 4956,
   "word": "DREAMED",
   "pronunciations": "ˈdriːmd"
 },
 {
   "id": 4957,
   "word": "EARNINGS",
   "pronunciations": "ˈɝːnɪŋz"
 },
 {
   "id": 4958,
   "word": "ELEMENTARY",
   "pronunciations": "ˌɛləˈmɛntri, ˌɛləˈmɛntɝri, ˌɛləˈmɛntʃri"
 },
 {
   "id": 4959,
   "word": "EMPEROR",
   "pronunciations": "ˈɛmpɝɝ"
 },
 {
   "id": 4960,
   "word": "ENFORCEMENT",
   "pronunciations": "ɛnˈfɔrsmənt"
 },
 {
   "id": 4961,
   "word": "ENTRIES",
   "pronunciations": "ˈɛntriːz"
 },
 {
   "id": 4962,
   "word": "ESSAY",
   "pronunciations": "ɛˈseɪ, ˈɛˌseɪ"
 },
 {
   "id": 4963,
   "word": "ETHICS",
   "pronunciations": "ˈɛθɪks"
 },
 {
   "id": 4964,
   "word": "EVE",
   "pronunciations": "ˈiːv"
 },
 {
   "id": 4965,
   "word": "EXCEED",
   "pronunciations": "ɪkˈsiːd"
 },
 {
   "id": 4966,
   "word": "EXCEPTIONAL",
   "pronunciations": "ɪkˈsɛpʃənəl"
 },
 {
   "id": 4967,
   "word": "FATAL",
   "pronunciations": "ˈfeɪtəl"
 },
 {
   "id": 4968,
   "word": "FATHERS",
   "pronunciations": "ˈfɑːðɝz"
 },
 {
   "id": 4969,
   "word": "FATS",
   "pronunciations": "ˈfæts"
 },
 {
   "id": 4970,
   "word": "FEVER",
   "pronunciations": "ˈfiːvɝ"
 },
 {
   "id": 4971,
   "word": "FILING",
   "pronunciations": "ˈfaɪlɪŋ"
 },
 {
   "id": 4972,
   "word": "FLOOD",
   "pronunciations": "ˈflʌd"
 },
 {
   "id": 4973,
   "word": "FREDERICK",
   "pronunciations": "ˈfrɛdrɪk, ˈfrɛdɝɪk"
 },
 {
   "id": 4974,
   "word": "FURY",
   "pronunciations": "ˈfjʊri"
 },
 {
   "id": 4975,
   "word": "GAINS",
   "pronunciations": "ˈgeɪnz"
 },
 {
   "id": 4976,
   "word": "GLUED",
   "pronunciations": "ˈgluːd"
 },
 {
   "id": 4977,
   "word": "GUARDS",
   "pronunciations": "ˈgɑːrdz"
 },
 {
   "id": 4978,
   "word": "GUITAR",
   "pronunciations": "gɪˈtɑːr"
 },
 {
   "id": 4979,
   "word": "HAM",
   "pronunciations": "ˈhæm"
 },
 {
   "id": 4980,
   "word": "HANEY",
   "pronunciations": "ˈheɪni"
 },
 {
   "id": 4981,
   "word": "HAY",
   "pronunciations": "ˈheɪ"
 },
 {
   "id": 4982,
   "word": "HOSTILE",
   "pronunciations": "ˈhɑːstəl, hɑːˈstaɪl"
 },
 {
   "id": 4983,
   "word": "IGNORE",
   "pronunciations": "ˌɪgˈnɔr"
 },
 {
   "id": 4984,
   "word": "IMMORTALITY",
   "pronunciations": "ˌɪmɔrˈtælɪti"
 },
 {
   "id": 4985,
   "word": "IMPOSED",
   "pronunciations": "ˌɪmˈpoʊzd"
 },
 {
   "id": 4986,
   "word": "INDIVIDUALLY",
   "pronunciations": "ˌɪndɪˈvɪdʒuːəli, ˌɪndɪˈvɪdʒəli"
 },
 {
   "id": 4987,
   "word": "INFINITE",
   "pronunciations": "ˈɪnfənət"
 },
 {
   "id": 4988,
   "word": "INSISTENCE",
   "pronunciations": "ˌɪnˈsɪstəns"
 },
 {
   "id": 4989,
   "word": "INSTANTLY",
   "pronunciations": "ˈɪnstəntli"
 },
 {
   "id": 4990,
   "word": "INTERVIEWS",
   "pronunciations": "ˈɪntɝvˌjuːz"
 },
 {
   "id": 4991,
   "word": "LABEL",
   "pronunciations": "ˈleɪbəl"
 },
 {
   "id": 4992,
   "word": "LACKED",
   "pronunciations": "ˈlækt"
 },
 {
   "id": 4993,
   "word": "LADDER",
   "pronunciations": "ˈlædɝ"
 },
 {
   "id": 4994,
   "word": "LAP",
   "pronunciations": "ˈlæp"
 },
 {
   "id": 4995,
   "word": "LESSER",
   "pronunciations": "ˈlɛsɝ"
 },
 {
   "id": 4996,
   "word": "LID",
   "pronunciations": "ˈlɪd"
 },
 {
   "id": 4997,
   "word": "LIKES",
   "pronunciations": "ˈlaɪks"
 },
 {
   "id": 4998,
   "word": "LIVESTOCK",
   "pronunciations": "ˈlaɪvˌstɑːk"
 },
 {
   "id": 4999,
   "word": "LODGE",
   "pronunciations": "ˈlɑːdʒ"
 },
 {
   "id": 5000,
   "word": "LOVER",
   "pronunciations": "ˈlʌvɝ"
 },
 {
   "id": 5001,
   "word": "LOVES",
   "pronunciations": "ˈlʌvz"
 },
 {
   "id": 5002,
   "word": "MA",
   "pronunciations": "ˈmɑː"
 },
 {
   "id": 5003,
   "word": "MAKERS",
   "pronunciations": "ˈmeɪkɝz"
 },
 {
   "id": 5004,
   "word": "MALES",
   "pronunciations": "ˈmeɪlz"
 },
 {
   "id": 5005,
   "word": "MECHANICS",
   "pronunciations": "məˈkænɪks"
 },
 {
   "id": 5006,
   "word": "MEN'S",
   "pronunciations": "ˈmɛnz"
 },
 {
   "id": 5007,
   "word": "MEXICO",
   "pronunciations": "ˈmɛksəˌkoʊ"
 },
 {
   "id": 5008,
   "word": "MIDST",
   "pronunciations": "ˈmɪdst, ˈmɪst"
 },
 {
   "id": 5009,
   "word": "MOVABLE",
   "pronunciations": "ˈmuːvəbəl"
 },
 {
   "id": 5010,
   "word": "MURDERER",
   "pronunciations": "ˈmɝːdɝɝ"
 },
 {
   "id": 5011,
   "word": "NAIVE",
   "pronunciations": "ˌnaɪˈiːv"
 },
 {
   "id": 5012,
   "word": "NEATLY",
   "pronunciations": "ˈniːtli"
 },
 {
   "id": 5013,
   "word": "NONSPECIFIC",
   "pronunciations": "ˌnɑːnspəˈsɪfɪk"
 },
 {
   "id": 5014,
   "word": "NUMERICAL",
   "pronunciations": "nuːˈmɛrəkəl, nuːˈmɛrɪkəl"
 },
 {
   "id": 5015,
   "word": "OPTICAL",
   "pronunciations": "ˈɑːptɪkəl"
 },
 {
   "id": 5016,
   "word": "ORTHODOX",
   "pronunciations": "ˈɔrθəˌdɑːks"
 },
 {
   "id": 5017,
   "word": "PACKED",
   "pronunciations": "ˈpækt"
 },
 {
   "id": 5018,
   "word": "PAMELA",
   "pronunciations": "ˈpæmələ"
 },
 {
   "id": 5019,
   "word": "PATENTS",
   "pronunciations": "ˈpætənts"
 },
 {
   "id": 5020,
   "word": "PAULA",
   "pronunciations": "ˈpɔlə"
 },
 {
   "id": 5021,
   "word": "PEOPLE'S",
   "pronunciations": "ˈpiːpəlz"
 },
 {
   "id": 5022,
   "word": "PLANTATION",
   "pronunciations": "ˌplænˈteɪʃən"
 },
 {
   "id": 5023,
   "word": "POLICEMAN",
   "pronunciations": "pəˈliːsmən"
 },
 {
   "id": 5024,
   "word": "POLISH",
   "pronunciations": "ˈpɑːlɪʃ, ˈpoʊlɪʃ"
 },
 {
   "id": 5025,
   "word": "POLITICIANS",
   "pronunciations": "ˌpɑːləˈtɪʃənz"
 },
 {
   "id": 5026,
   "word": "PRESERVED",
   "pronunciations": "prəˈzɝːvd, prɪˈzɝːvd, priːˈzɝːvd"
 },
 {
   "id": 5027,
   "word": "PRODUCES",
   "pronunciations": "prəˈduːsəz, prəˈduːsɪz"
 },
 {
   "id": 5028,
   "word": "PUZZLED",
   "pronunciations": "ˈpʌzəld"
 },
 {
   "id": 5029,
   "word": "RAY",
   "pronunciations": "ˈreɪ"
 },
 {
   "id": 5030,
   "word": "REACTIVITY",
   "pronunciations": "ˌriːˌækˈtɪvəti"
 },
 {
   "id": 5031,
   "word": "REALM",
   "pronunciations": "ˈrɛlm"
 },
 {
   "id": 5032,
   "word": "REALTORS",
   "pronunciations": "ˈriːəltɝz, ˈriːltɝz"
 },
 {
   "id": 5033,
   "word": "RELAX",
   "pronunciations": "rɪˈlæks, riːˈlæks"
 },
 {
   "id": 5034,
   "word": "REMAINDER",
   "pronunciations": "rɪˈmeɪndɝ, riːˈmeɪndɝ"
 },
 {
   "id": 5035,
   "word": "RESPECTIVE",
   "pronunciations": "rɪˈspɛktɪv, riːˈspɛktɪv"
 },
 {
   "id": 5036,
   "word": "RESTING",
   "pronunciations": "ˈrɛstɪŋ"
 },
 {
   "id": 5037,
   "word": "RID",
   "pronunciations": "ˈrɪd"
 },
 {
   "id": 5038,
   "word": "RIDICULOUS",
   "pronunciations": "rɪˈdɪkjələs"
 },
 {
   "id": 5039,
   "word": "ROB",
   "pronunciations": "ˈrɑːb"
 },
 {
   "id": 5040,
   "word": "ROLLING",
   "pronunciations": "ˈroʊlɪŋ"
 },
 {
   "id": 5041,
   "word": "ROURKE",
   "pronunciations": "ˈrɔrk"
 },
 {
   "id": 5042,
   "word": "ROUSSEAU",
   "pronunciations": "ruːˈsoʊ"
 },
 {
   "id": 5043,
   "word": "RUGGED",
   "pronunciations": "ˈrʌgəd"
 },
 {
   "id": 5044,
   "word": "SALEM",
   "pronunciations": "ˈseɪləm"
 },
 {
   "id": 5045,
   "word": "SALESMEN",
   "pronunciations": "ˈseɪlzmɪn"
 },
 {
   "id": 5046,
   "word": "SERA",
   "pronunciations": "ˈsɪrə"
 },
 {
   "id": 5047,
   "word": "SERVANT",
   "pronunciations": "ˈsɝːvənt"
 },
 {
   "id": 5048,
   "word": "SHIPPING",
   "pronunciations": "ˈʃɪpɪŋ"
 },
 {
   "id": 5049,
   "word": "SHOCKED",
   "pronunciations": "ˈʃɑːkt"
 },
 {
   "id": 5050,
   "word": "SHORTER",
   "pronunciations": "ˈʃɔrtɝ"
 },
 {
   "id": 5051,
   "word": "SITUATED",
   "pronunciations": "ˈsɪtʃuːˌeɪtɪd"
 },
 {
   "id": 5052,
   "word": "SKETCHES",
   "pronunciations": "ˈskɛtʃəz, ˈskɛtʃɪz"
 },
 {
   "id": 5053,
   "word": "SLENDER",
   "pronunciations": "ˈslɛndɝ"
 },
 {
   "id": 5054,
   "word": "SLIP",
   "pronunciations": "ˈslɪp"
 },
 {
   "id": 5055,
   "word": "SLOPE",
   "pronunciations": "ˈsloʊp"
 },
 {
   "id": 5056,
   "word": "SMELLED",
   "pronunciations": "ˈsmɛld"
 },
 {
   "id": 5057,
   "word": "SNAPPED",
   "pronunciations": "ˈsnæpt"
 },
 {
   "id": 5058,
   "word": "SOBER",
   "pronunciations": "ˈsoʊbɝ"
 },
 {
   "id": 5059,
   "word": "SOLVED",
   "pronunciations": "ˈsɑːlvd"
 },
 {
   "id": 5060,
   "word": "SPAN",
   "pronunciations": "ˈspæn"
 },
 {
   "id": 5061,
   "word": "SPECIALISTS",
   "pronunciations": "ˈspɛʃəlɪsts"
 },
 {
   "id": 5062,
   "word": "SPELL",
   "pronunciations": "ˈspɛl"
 },
 {
   "id": 5063,
   "word": "STARTLING",
   "pronunciations": "ˈstɑːrtlɪŋ"
 },
 {
   "id": 5064,
   "word": "STRAIGHTENED",
   "pronunciations": "ˈstreɪtənd"
 },
 {
   "id": 5065,
   "word": "STRESSES",
   "pronunciations": "ˈstrɛsəz, ˈstrɛsɪz"
 },
 {
   "id": 5066,
   "word": "STRING",
   "pronunciations": "ˈstrɪŋ"
 },
 {
   "id": 5067,
   "word": "STROKE",
   "pronunciations": "ˈstroʊk"
 },
 {
   "id": 5068,
   "word": "SUPERVISION",
   "pronunciations": "ˌsuːpɝˈvɪʒən"
 },
 {
   "id": 5069,
   "word": "TANGIBLE",
   "pronunciations": "ˈtændʒəbəl"
 },
 {
   "id": 5070,
   "word": "TENSIONS",
   "pronunciations": "ˈtɛntʃənz"
 },
 {
   "id": 5071,
   "word": "THEOLOGY",
   "pronunciations": "θiːˈɑːlədʒi"
 },
 {
   "id": 5072,
   "word": "THERAPIST",
   "pronunciations": "ˈθɛrəpɪst"
 },
 {
   "id": 5073,
   "word": "TIMBER",
   "pronunciations": "ˈtɪmbɝ"
 },
 {
   "id": 5074,
   "word": "TOAST",
   "pronunciations": "ˈtoʊst"
 },
 {
   "id": 5075,
   "word": "TOBACCO",
   "pronunciations": "təˈbæˌkoʊ"
 },
 {
   "id": 5076,
   "word": "TOES",
   "pronunciations": "ˈtoʊz"
 },
 {
   "id": 5077,
   "word": "TRAVELING",
   "pronunciations": "ˈtrævəlɪŋ, ˈtrævlɪŋ"
 },
 {
   "id": 5078,
   "word": "TWISTED",
   "pronunciations": "ˈtwɪstəd, ˈtwɪstɪd"
 },
 {
   "id": 5079,
   "word": "UNDERGROUND",
   "pronunciations": "ˈʌndɝˌgraʊnd"
 },
 {
   "id": 5080,
   "word": "VECTOR",
   "pronunciations": "ˈvɛktɝ"
 },
 {
   "id": 5081,
   "word": "VENTURE",
   "pronunciations": "ˈvɛntʃɝ"
 },
 {
   "id": 5082,
   "word": "VERTEX",
   "pronunciations": "ˈvɝːˌtɛks"
 },
 {
   "id": 5083,
   "word": "VICTIMS",
   "pronunciations": "ˈvɪktɪmz"
 },
 {
   "id": 5084,
   "word": "VINCENT",
   "pronunciations": "ˈvɪnsɛnt, ˈvɪnsɪnt"
 },
 {
   "id": 5085,
   "word": "WHEREBY",
   "pronunciations": "wɛrˈbaɪ, hwɛrˈbaɪ"
 },
 {
   "id": 5086,
   "word": "WHIP",
   "pronunciations": "ˈwɪp, ˈhwɪp"
 },
 {
   "id": 5087,
   "word": "WILDLIFE",
   "pronunciations": "ˈwaɪldˌlaɪf"
 },
 {
   "id": 5088,
   "word": "WIPED",
   "pronunciations": "ˈwaɪpt"
 },
 {
   "id": 5089,
   "word": "WISCONSIN",
   "pronunciations": "wɪˈskɑːnsən"
 },
 {
   "id": 5090,
   "word": "ABRUPT",
   "pronunciations": "əˈbrʌpt"
 },
 {
   "id": 5091,
   "word": "ABRUPTLY",
   "pronunciations": "əˈbrʌptli"
 },
 {
   "id": 5092,
   "word": "ABUSE",
   "pronunciations": "əˈbjuːs, əˈbjuːz"
 },
 {
   "id": 5093,
   "word": "ACTED",
   "pronunciations": "ˈæktɪd"
 },
 {
   "id": 5094,
   "word": "ADOLESCENCE",
   "pronunciations": "ˌædəˈlɛsəns, ˌædoʊˈlɛsəns"
 },
 {
   "id": 5095,
   "word": "ADVANCES",
   "pronunciations": "ədˈvænsɪz"
 },
 {
   "id": 5096,
   "word": "AFFECTION",
   "pronunciations": "əˈfɛkʃən"
 },
 {
   "id": 5097,
   "word": "AGED",
   "pronunciations": "ˈeɪdʒd, ˈeɪdʒɪd"
 },
 {
   "id": 5098,
   "word": "ALUMINUM",
   "pronunciations": "əˈluːmənəm"
 },
 {
   "id": 5099,
   "word": "AMMUNITION",
   "pronunciations": "ˌæmjəˈnɪʃən"
 },
 {
   "id": 5100,
   "word": "ANDREI",
   "pronunciations": "ˈænˌdreɪ"
 },
 {
   "id": 5101,
   "word": "ANGEL",
   "pronunciations": "ˈeɪndʒəl"
 },
 {
   "id": 5102,
   "word": "ANNOUNCE",
   "pronunciations": "əˈnaʊns"
 },
 {
   "id": 5103,
   "word": "APPLICABLE",
   "pronunciations": "ˈæpləkəbəl"
 },
 {
   "id": 5104,
   "word": "ARKANSAS",
   "pronunciations": "ˈɑːrkənˌsɑː"
 },
 {
   "id": 5105,
   "word": "AROSE",
   "pronunciations": "ɝˈoʊz"
 },
 {
   "id": 5106,
   "word": "ASKS",
   "pronunciations": "ˈæsks"
 },
 {
   "id": 5107,
   "word": "ASSIGN",
   "pronunciations": "əˈsaɪn"
 },
 {
   "id": 5108,
   "word": "ASSIGNMENTS",
   "pronunciations": "əˈsaɪnmənts"
 },
 {
   "id": 5109,
   "word": "ATHLETIC",
   "pronunciations": "æθˈlɛtɪk"
 },
 {
   "id": 5110,
   "word": "ATTRIBUTED",
   "pronunciations": "əˈtrɪbjətəd"
 },
 {
   "id": 5111,
   "word": "AUSTIN",
   "pronunciations": "ˈɔstən"
 },
 {
   "id": 5112,
   "word": "AUTONOMY",
   "pronunciations": "ɔˈtɑːnəmi, əˈtɑːnəmi"
 },
 {
   "id": 5113,
   "word": "BARCO",
   "pronunciations": "ˈbɑːrkoʊ"
 },
 {
   "id": 5114,
   "word": "BARGAINING",
   "pronunciations": "ˈbɑːrgɪnɪŋ"
 },
 {
   "id": 5115,
   "word": "BAT",
   "pronunciations": "ˈbæt"
 },
 {
   "id": 5116,
   "word": "BATHROOM",
   "pronunciations": "ˈbæˌθruːm"
 },
 {
   "id": 5117,
   "word": "BATTERY",
   "pronunciations": "ˈbætɝi"
 },
 {
   "id": 5118,
   "word": "BELL",
   "pronunciations": "ˈbɛl"
 },
 {
   "id": 5119,
   "word": "BELOVED",
   "pronunciations": "bɪˈlʌvd, bɪˈlʌvəd"
 },
 {
   "id": 5120,
   "word": "BIBLICAL",
   "pronunciations": "ˈbɪbləkəl, ˈbɪblɪkəl"
 },
 {
   "id": 5121,
   "word": "BIRTHDAY",
   "pronunciations": "ˈbɝːθˌdeɪ"
 },
 {
   "id": 5122,
   "word": "BISHOP",
   "pronunciations": "ˈbɪʃəp"
 },
 {
   "id": 5123,
   "word": "BITTERNESS",
   "pronunciations": "ˈbɪtɝnəs"
 },
 {
   "id": 5124,
   "word": "BRAINS",
   "pronunciations": "ˈbreɪnz"
 },
 {
   "id": 5125,
   "word": "BRICK",
   "pronunciations": "ˈbrɪk"
 },
 {
   "id": 5126,
   "word": "BRIGHTNESS",
   "pronunciations": "ˈbraɪtnəs"
 },
 {
   "id": 5127,
   "word": "BULLETIN",
   "pronunciations": "ˈbʊlɪtən"
 },
 {
   "id": 5128,
   "word": "BUNK",
   "pronunciations": "ˈbʌŋk"
 },
 {
   "id": 5129,
   "word": "BURIED",
   "pronunciations": "ˈbɛriːd"
 },
 {
   "id": 5130,
   "word": "CAMPING",
   "pronunciations": "ˈkæmpɪŋ"
 },
 {
   "id": 5131,
   "word": "CAMPS",
   "pronunciations": "ˈkæmps"
 },
 {
   "id": 5132,
   "word": "CANDLE",
   "pronunciations": "ˈkændəl"
 },
 {
   "id": 5133,
   "word": "CATS",
   "pronunciations": "ˈkæts"
 },
 {
   "id": 5134,
   "word": "CAUSING",
   "pronunciations": "ˈkɑːzɪŋ, ˈkɔzɪŋ"
 },
 {
   "id": 5135,
   "word": "CEREMONY",
   "pronunciations": "ˈsɛrəˌmoʊni"
 },
 {
   "id": 5136,
   "word": "CHASE",
   "pronunciations": "ˈtʃeɪs"
 },
 {
   "id": 5137,
   "word": "CHORUS",
   "pronunciations": "ˈkɔrəs"
 },
 {
   "id": 5138,
   "word": "CLASSROOM",
   "pronunciations": "ˈklæsˌruːm"
 },
 {
   "id": 5139,
   "word": "COBB",
   "pronunciations": "ˈkɑːb"
 },
 {
   "id": 5140,
   "word": "COLT",
   "pronunciations": "ˈkoʊlt"
 },
 {
   "id": 5141,
   "word": "COLUMBIA",
   "pronunciations": "kəˈlʌmbiːə"
 },
 {
   "id": 5142,
   "word": "COMMENTED",
   "pronunciations": "ˈkɑːmɛntəd"
 },
 {
   "id": 5143,
   "word": "COMMITTEES",
   "pronunciations": "kəˈmɪtiːz"
 },
 {
   "id": 5144,
   "word": "COMPELLED",
   "pronunciations": "kəmˈpɛld"
 },
 {
   "id": 5145,
   "word": "COMPETENCE",
   "pronunciations": "ˈkɑːmpətɪns"
 },
 {
   "id": 5146,
   "word": "CONGREGATIONS",
   "pronunciations": "ˌkɑːŋgrəˈgeɪʃənz"
 },
 {
   "id": 5147,
   "word": "CONSISTENCY",
   "pronunciations": "kənˈsɪstənsi"
 },
 {
   "id": 5148,
   "word": "CONSUMPTION",
   "pronunciations": "kənˈsʌmpʃən, kənˈsʌmʃən"
 },
 {
   "id": 5149,
   "word": "CONTINUATION",
   "pronunciations": "kənˌtɪnjuːˈeɪʃən"
 },
 {
   "id": 5150,
   "word": "COPIES",
   "pronunciations": "ˈkɑːpiːz"
 },
 {
   "id": 5151,
   "word": "CORNERS",
   "pronunciations": "ˈkɔrnɝz"
 },
 {
   "id": 5152,
   "word": "COSMIC",
   "pronunciations": "ˈkɑːzmɪk"
 },
 {
   "id": 5153,
   "word": "COSTUMES",
   "pronunciations": "kɑːˈstuːmz, ˈkɑːstuːmz"
 },
 {
   "id": 5154,
   "word": "CROPS",
   "pronunciations": "ˈkrɑːps"
 },
 {
   "id": 5155,
   "word": "CUSTOMS",
   "pronunciations": "ˈkʌstəmz"
 },
 {
   "id": 5156,
   "word": "CYLINDER",
   "pronunciations": "ˈsɪləndɝ, ˈsɪlɪndɝ"
 },
 {
   "id": 5157,
   "word": "DEFENDED",
   "pronunciations": "dɪˈfɛndəd, dɪˈfɛndɪd"
 },
 {
   "id": 5158,
   "word": "DELIVER",
   "pronunciations": "dɪˈlɪvɝ"
 },
 {
   "id": 5159,
   "word": "DENIAL",
   "pronunciations": "dɪˈnaɪəl"
 },
 {
   "id": 5160,
   "word": "DESIGNER",
   "pronunciations": "dɪˈzaɪnɝ"
 },
 {
   "id": 5161,
   "word": "DICK",
   "pronunciations": "ˈdɪk"
 },
 {
   "id": 5162,
   "word": "DIFFER",
   "pronunciations": "ˈdɪfɝ"
 },
 {
   "id": 5163,
   "word": "DISPOSED",
   "pronunciations": "dɪˈspoʊzd"
 },
 {
   "id": 5164,
   "word": "DOCTOR'S",
   "pronunciations": "ˈdɑːktɝz"
 },
 {
   "id": 5165,
   "word": "DRAIN",
   "pronunciations": "ˈdreɪn"
 },
 {
   "id": 5166,
   "word": "DRIFT",
   "pronunciations": "ˈdrɪft"
 },
 {
   "id": 5167,
   "word": "DROPS",
   "pronunciations": "ˈdrɑːps"
 },
 {
   "id": 5168,
   "word": "EARNED",
   "pronunciations": "ˈɝːnd"
 },
 {
   "id": 5169,
   "word": "EARNEST",
   "pronunciations": "ˈɝːnɪst"
 },
 {
   "id": 5170,
   "word": "EDITORS",
   "pronunciations": "ˈɛdɪtɝz"
 },
 {
   "id": 5171,
   "word": "EFFLUENT",
   "pronunciations": "ˈɛfluːənt"
 },
 {
   "id": 5172,
   "word": "EMERGE",
   "pronunciations": "ɪˈmɝːdʒ, ˈiːmɝdʒ"
 },
 {
   "id": 5173,
   "word": "EMPHASIZED",
   "pronunciations": "ˈɛmfəˌsaɪzd"
 },
 {
   "id": 5174,
   "word": "EPIC",
   "pronunciations": "ˈɛpɪk"
 },
 {
   "id": 5175,
   "word": "ERECTED",
   "pronunciations": "ɪˈrɛktəd, ɪˈrɛktɪd"
 },
 {
   "id": 5176,
   "word": "ERNIE",
   "pronunciations": "ˈɝːni"
 },
 {
   "id": 5177,
   "word": "ESCAPED",
   "pronunciations": "ɪˈskeɪpt"
 },
 {
   "id": 5178,
   "word": "EXERCISED",
   "pronunciations": "ˈɛksɝˌsaɪzd"
 },
 {
   "id": 5179,
   "word": "EXPECTING",
   "pronunciations": "ɪkˈspɛktɪŋ"
 },
 {
   "id": 5180,
   "word": "FADED",
   "pronunciations": "ˈfeɪdəd, ˈfeɪdɪd"
 },
 {
   "id": 5181,
   "word": "FAME",
   "pronunciations": "ˈfeɪm"
 },
 {
   "id": 5182,
   "word": "FAN",
   "pronunciations": "ˈfæn"
 },
 {
   "id": 5183,
   "word": "FASTER",
   "pronunciations": "ˈfæstɝ"
 },
 {
   "id": 5184,
   "word": "FAVORED",
   "pronunciations": "ˈfeɪvɝd"
 },
 {
   "id": 5185,
   "word": "FELLOWS",
   "pronunciations": "ˈfɛloʊz"
 },
 {
   "id": 5186,
   "word": "FOLKS",
   "pronunciations": "ˈfoʊks"
 },
 {
   "id": 5187,
   "word": "FORGOT",
   "pronunciations": "fɝˈgɑːt, fɔrˈgɑːt"
 },
 {
   "id": 5188,
   "word": "FORMALLY",
   "pronunciations": "ˈfɔrməli"
 },
 {
   "id": 5189,
   "word": "FOUNTAIN",
   "pronunciations": "ˈfaʊntən"
 },
 {
   "id": 5190,
   "word": "GRAMS",
   "pronunciations": "ˈgræmz"
 },
 {
   "id": 5191,
   "word": "GRIFFITH",
   "pronunciations": "ˈgrɪfəθ, ˈgrɪfɪθ"
 },
 {
   "id": 5192,
   "word": "HALFWAY",
   "pronunciations": "ˈhæfˈweɪ"
 },
 {
   "id": 5193,
   "word": "HARVEY",
   "pronunciations": "ˈhɑːrvi"
 },
 {
   "id": 5194,
   "word": "HUMBLE",
   "pronunciations": "ˈhʌmbəl"
 },
 {
   "id": 5195,
   "word": "HUNTER",
   "pronunciations": "ˈhʌntɝ"
 },
 {
   "id": 5196,
   "word": "HYPOTHESIS",
   "pronunciations": "haɪˈpɑːθəsəs"
 },
 {
   "id": 5197,
   "word": "INFORMAL",
   "pronunciations": "ˌɪnˈfɔrməl"
 },
 {
   "id": 5198,
   "word": "INITIALLY",
   "pronunciations": "ˌɪˈnɪʃəli"
 },
 {
   "id": 5199,
   "word": "INTERRUPTED",
   "pronunciations": "ˌɪntɝˈʌptɪd"
 },
 {
   "id": 5200,
   "word": "INTERVAL",
   "pronunciations": "ˈɪntɝvəl"
 },
 {
   "id": 5201,
   "word": "INTUITION",
   "pronunciations": "ˌɪntuːˈɪʃən"
 },
 {
   "id": 5202,
   "word": "INVESTIGATED",
   "pronunciations": "ˌɪnˈvɛstəˌgeɪtəd, ˌɪnˈvɛstəˌgeɪtɪd"
 },
 {
   "id": 5203,
   "word": "IODINE",
   "pronunciations": "ˈaɪəˌdaɪn"
 },
 {
   "id": 5204,
   "word": "IT'LL",
   "pronunciations": "ˈɪtəl, ˈɪtl"
 },
 {
   "id": 5205,
   "word": "JUVENILE",
   "pronunciations": "ˈdʒuːvənəl, ˈdʒuːvəˌnaɪl"
 },
 {
   "id": 5206,
   "word": "KICKED",
   "pronunciations": "ˈkɪkt"
 },
 {
   "id": 5207,
   "word": "KNIGHT",
   "pronunciations": "ˈnaɪt"
 },
 {
   "id": 5208,
   "word": "KOWALSKI",
   "pronunciations": "kəˈwɑːlski"
 },
 {
   "id": 5209,
   "word": "LAMP",
   "pronunciations": "ˈlæmp"
 },
 {
   "id": 5210,
   "word": "LANGFORD",
   "pronunciations": "ˈlæŋfɝd"
 },
 {
   "id": 5211,
   "word": "LEMON",
   "pronunciations": "ˈlɛmən"
 },
 {
   "id": 5212,
   "word": "LIKEWISE",
   "pronunciations": "ˈlaɪˌkwaɪz"
 },
 {
   "id": 5213,
   "word": "LIP",
   "pronunciations": "ˈlɪp"
 },
 {
   "id": 5214,
   "word": "LOCATIONS",
   "pronunciations": "loʊˈkeɪʃənz"
 },
 {
   "id": 5215,
   "word": "LOYAL",
   "pronunciations": "ˈlɔɪəl"
 },
 {
   "id": 5216,
   "word": "MADDEN",
   "pronunciations": "ˈmædən"
 },
 {
   "id": 5217,
   "word": "MANUFACTURE",
   "pronunciations": "ˌmænjəˈfæktʃɝ"
 },
 {
   "id": 5218,
   "word": "MARRY",
   "pronunciations": "ˈmɛri"
 },
 {
   "id": 5219,
   "word": "MECHANISMS",
   "pronunciations": "ˈmɛkəˌnɪzəmz"
 },
 {
   "id": 5220,
   "word": "MEDIEVAL",
   "pronunciations": "mɪˈdiːvəl, miːˈdiːvəl, mɪdˈjiːvəl"
 },
 {
   "id": 5221,
   "word": "MEREDITH",
   "pronunciations": "ˈmɛrɪdɪθ"
 },
 {
   "id": 5222,
   "word": "MILLING",
   "pronunciations": "ˈmɪlɪŋ"
 },
 {
   "id": 5223,
   "word": "NEGLECTED",
   "pronunciations": "nəˈglɛktəd, nɪˈglɛktɪd"
 },
 {
   "id": 5224,
   "word": "NINETEEN",
   "pronunciations": "ˈnaɪnˈtiːn"
 },
 {
   "id": 5225,
   "word": "OBJECTION",
   "pronunciations": "əbˈdʒɛkʃən"
 },
 {
   "id": 5226,
   "word": "OFFICIALLY",
   "pronunciations": "əˈfɪʃəli"
 },
 {
   "id": 5227,
   "word": "OVERHEAD",
   "pronunciations": "ˈoʊvɝˈhɛd"
 },
 {
   "id": 5228,
   "word": "OVERNIGHT",
   "pronunciations": "ˈoʊvɝˈnaɪt"
 },
 {
   "id": 5229,
   "word": "OXFORD",
   "pronunciations": "ˈɑːksfɝd"
 },
 {
   "id": 5230,
   "word": "PARLOR",
   "pronunciations": "ˈpɑːrlɝ"
 },
 {
   "id": 5231,
   "word": "PARTNERSHIP",
   "pronunciations": "ˈpɑːrtnɝˌʃɪp"
 },
 {
   "id": 5232,
   "word": "PEN",
   "pronunciations": "ˈpɛn"
 },
 {
   "id": 5233,
   "word": "PHOTOGRAPH",
   "pronunciations": "ˈfoʊtəˌgræf"
 },
 {
   "id": 5234,
   "word": "PHRASES",
   "pronunciations": "ˈfreɪzəz, ˈfreɪzɪz"
 },
 {
   "id": 5235,
   "word": "PLAINLY",
   "pronunciations": "ˈpleɪnli"
 },
 {
   "id": 5236,
   "word": "POLE",
   "pronunciations": "ˈpoʊl"
 },
 {
   "id": 5237,
   "word": "PREDICTED",
   "pronunciations": "prɪˈdɪktɪd, priːˈdɪktəd, priːˈdɪktɪd"
 },
 {
   "id": 5238,
   "word": "PRINT",
   "pronunciations": "ˈprɪnt"
 },
 {
   "id": 5239,
   "word": "PRINTING",
   "pronunciations": "ˈprɪntɪŋ, ˈprɪnɪŋ"
 },
 {
   "id": 5240,
   "word": "PRIORITY",
   "pronunciations": "praɪˈɔrəti"
 },
 {
   "id": 5241,
   "word": "PRIVILEGE",
   "pronunciations": "ˈprɪvɪlɪdʒ"
 },
 {
   "id": 5242,
   "word": "PROCEED",
   "pronunciations": "prəˈsiːd, proʊˈsiːd, pɝˈsiːd"
 },
 {
   "id": 5243,
   "word": "PROCEEDINGS",
   "pronunciations": "proʊˈsiːdɪŋz, prəˈsiːdɪŋz"
 },
 {
   "id": 5244,
   "word": "PRONOUNCED",
   "pronunciations": "prəˈnaʊnst"
 },
 {
   "id": 5245,
   "word": "PROPORTIONS",
   "pronunciations": "prəˈpɔrʃənz"
 },
 {
   "id": 5246,
   "word": "RANGED",
   "pronunciations": "ˈreɪndʒd"
 },
 {
   "id": 5247,
   "word": "RATIOS",
   "pronunciations": "ˈreɪʃiːˌoʊz"
 },
 {
   "id": 5248,
   "word": "REBEL",
   "pronunciations": "ˈrɛbəl, rɪˈbɛl"
 },
 {
   "id": 5249,
   "word": "REFERRING",
   "pronunciations": "rɪˈfɝːɪŋ"
 },
 {
   "id": 5250,
   "word": "REFERS",
   "pronunciations": "rəˈfɝːz, rɪˈfɝːz"
 },
 {
   "id": 5251,
   "word": "RELIGIONS",
   "pronunciations": "riːˈlɪdʒənz"
 },
 {
   "id": 5252,
   "word": "REMARKABLY",
   "pronunciations": "rɪˈmɑːrkəbli, riːˈmɑːrkəbli"
 },
 {
   "id": 5253,
   "word": "REPEATEDLY",
   "pronunciations": "rɪˈpiːtɪdli"
 },
 {
   "id": 5254,
   "word": "REPRESENTATION",
   "pronunciations": "ˌrɛprəzɛnˈteɪʃən"
 },
 {
   "id": 5255,
   "word": "RESENTMENT",
   "pronunciations": "rɪˈzɛntmənt, rɪˈzɛnmənt"
 },
 {
   "id": 5256,
   "word": "RESTS",
   "pronunciations": "ˈrɛsts"
 },
 {
   "id": 5257,
   "word": "REVERSE",
   "pronunciations": "rɪˈvɝːs, riːˈvɝːs"
 },
 {
   "id": 5258,
   "word": "RIDGE",
   "pronunciations": "ˈrɪdʒ"
 },
 {
   "id": 5259,
   "word": "ROARED",
   "pronunciations": "ˈrɔrd"
 },
 {
   "id": 5260,
   "word": "ROD",
   "pronunciations": "ˈrɑːd"
 },
 {
   "id": 5261,
   "word": "RUBBED",
   "pronunciations": "ˈrʌbd"
 },
 {
   "id": 5262,
   "word": "SANK",
   "pronunciations": "ˈsæŋk"
 },
 {
   "id": 5263,
   "word": "SAXON",
   "pronunciations": "ˈsæksən"
 },
 {
   "id": 5264,
   "word": "SELECTIVE",
   "pronunciations": "səˈlɛktɪv"
 },
 {
   "id": 5265,
   "word": "SERUM",
   "pronunciations": "ˈsɪrəm"
 },
 {
   "id": 5266,
   "word": "SHIFTED",
   "pronunciations": "ˈʃɪftəd, ˈʃɪftɪd"
 },
 {
   "id": 5267,
   "word": "SHRUGGED",
   "pronunciations": "ˈʃrʌgd"
 },
 {
   "id": 5268,
   "word": "SIMPLER",
   "pronunciations": "ˈsɪmpəlɝ, ˈsɪmplɝ"
 },
 {
   "id": 5269,
   "word": "SOLE",
   "pronunciations": "ˈsoʊl"
 },
 {
   "id": 5270,
   "word": "SPEAKS",
   "pronunciations": "ˈspiːks"
 },
 {
   "id": 5271,
   "word": "SPECIALIZED",
   "pronunciations": "ˈspɛʃəˌlaɪzd"
 },
 {
   "id": 5272,
   "word": "SPECTACLE",
   "pronunciations": "ˈspɛktəkəl"
 },
 {
   "id": 5273,
   "word": "SPECTRA",
   "pronunciations": "ˈspɛktrə"
 },
 {
   "id": 5274,
   "word": "SQUAD",
   "pronunciations": "ˈskwɑːd"
 },
 {
   "id": 5275,
   "word": "SQUEEZED",
   "pronunciations": "ˈskwiːzd"
 },
 {
   "id": 5276,
   "word": "STALL",
   "pronunciations": "ˈstɔl"
 },
 {
   "id": 5277,
   "word": "STEIN",
   "pronunciations": "ˈstaɪn"
 },
 {
   "id": 5278,
   "word": "STEPHEN",
   "pronunciations": "ˈstiːvən"
 },
 {
   "id": 5279,
   "word": "STEVENS",
   "pronunciations": "ˈstiːvənz"
 },
 {
   "id": 5280,
   "word": "STEVIE",
   "pronunciations": "ˈstiːvi"
 },
 {
   "id": 5281,
   "word": "STOCKS",
   "pronunciations": "ˈstɑːks"
 },
 {
   "id": 5282,
   "word": "STOLEN",
   "pronunciations": "ˈstoʊlən"
 },
 {
   "id": 5283,
   "word": "SUBJECTIVE",
   "pronunciations": "səbˈdʒɛktɪv"
 },
 {
   "id": 5284,
   "word": "SUBMIT",
   "pronunciations": "səbˈmɪt"
 },
 {
   "id": 5285,
   "word": "SUBURBS",
   "pronunciations": "ˈsʌbɝbz"
 },
 {
   "id": 5286,
   "word": "SUE",
   "pronunciations": "ˈsuː"
 },
 {
   "id": 5287,
   "word": "SUNG",
   "pronunciations": "ˈsʌŋ"
 },
 {
   "id": 5288,
   "word": "SURPRISINGLY",
   "pronunciations": "sɝˈpraɪzɪŋli, səˈpraɪzɪŋli"
 },
 {
   "id": 5289,
   "word": "SYSTEMATIC",
   "pronunciations": "ˌsɪstəˈmætɪk"
 },
 {
   "id": 5290,
   "word": "TALKS",
   "pronunciations": "ˈtɔks"
 },
 {
   "id": 5291,
   "word": "TANKS",
   "pronunciations": "ˈtæŋks"
 },
 {
   "id": 5292,
   "word": "TAP",
   "pronunciations": "ˈtæp"
 },
 {
   "id": 5293,
   "word": "TECHNOLOGICAL",
   "pronunciations": "ˌtɛknəˈlɑːdʒɪkəl"
 },
 {
   "id": 5294,
   "word": "TERRIBLY",
   "pronunciations": "ˈtɛrəbli"
 },
 {
   "id": 5295,
   "word": "THEOREM",
   "pronunciations": "ˈθɪrəm"
 },
 {
   "id": 5296,
   "word": "TOKYO",
   "pronunciations": "ˈtoʊkiːˌoʊ"
 },
 {
   "id": 5297,
   "word": "TOMMY",
   "pronunciations": "ˈtɑːmi"
 },
 {
   "id": 5298,
   "word": "TRANSPORT",
   "pronunciations": "trænˈspɔrt, ˈtrænspɔrt"
 },
 {
   "id": 5299,
   "word": "TRAY",
   "pronunciations": "ˈtreɪ"
 },
 {
   "id": 5300,
   "word": "TWIST",
   "pronunciations": "ˈtwɪst"
 },
 {
   "id": 5301,
   "word": "UNDERTAKEN",
   "pronunciations": "ˈʌndɝˌteɪkən"
 },
 {
   "id": 5302,
   "word": "UPTON",
   "pronunciations": "ˈʌptən"
 },
 {
   "id": 5303,
   "word": "WHO'S",
   "pronunciations": "ˈhuːz"
 },
 {
   "id": 5304,
   "word": "WING",
   "pronunciations": "ˈwɪŋ"
 },
 {
   "id": 5305,
   "word": "YANKEE",
   "pronunciations": "ˈjæŋki"
 },
 {
   "id": 5306,
   "word": "YOUNGSTERS",
   "pronunciations": "ˈjʌŋstɝz"
 },
 {
   "id": 5307,
   "word": "ABANDON",
   "pronunciations": "əˈbændən"
 },
 {
   "id": 5308,
   "word": "ABSURD",
   "pronunciations": "əbˈsɝːd"
 },
 {
   "id": 5309,
   "word": "ACCELERATION",
   "pronunciations": "ˌækˌsɛlɝˈeɪʃən"
 },
 {
   "id": 5310,
   "word": "ACCELEROMETER",
   "pronunciations": "ækˌsɛlɝˈɑːmətɝ"
 },
 {
   "id": 5311,
   "word": "ACCOMPANYING",
   "pronunciations": "əˈkʌmpəniːɪŋ"
 },
 {
   "id": 5312,
   "word": "ACQUISITION",
   "pronunciations": "ˌækwəˈzɪʃən"
 },
 {
   "id": 5313,
   "word": "ADA",
   "pronunciations": "ˈeɪdə"
 },
 {
   "id": 5314,
   "word": "ADMIRED",
   "pronunciations": "ədˈmaɪɝd"
 },
 {
   "id": 5315,
   "word": "AGGRESSIVE",
   "pronunciations": "əˈgrɛsɪv"
 },
 {
   "id": 5316,
   "word": "ALLOCATION",
   "pronunciations": "ˌæləˈkeɪʃən"
 },
 {
   "id": 5317,
   "word": "ALTERNATIVES",
   "pronunciations": "ɔlˈtɝːnətɪvz"
 },
 {
   "id": 5318,
   "word": "ANGIE",
   "pronunciations": "ˈændʒi"
 },
 {
   "id": 5319,
   "word": "ANNISTON",
   "pronunciations": "ˈænɪstɪn, ˈænɪsɪn"
 },
 {
   "id": 5320,
   "word": "ANONYMOUS",
   "pronunciations": "əˈnɑːnəməs"
 },
 {
   "id": 5321,
   "word": "APARTMENTS",
   "pronunciations": "əˈpɑːrtmənts"
 },
 {
   "id": 5322,
   "word": "ARTIFICIAL",
   "pronunciations": "ˌɑːrtəˈfɪʃəl"
 },
 {
   "id": 5323,
   "word": "ASSUMING",
   "pronunciations": "əˈsuːmɪŋ"
 },
 {
   "id": 5324,
   "word": "AWARDED",
   "pronunciations": "əˈwɔrdɪd"
 },
 {
   "id": 5325,
   "word": "AWARDS",
   "pronunciations": "əˈwɔrdz"
 },
 {
   "id": 5326,
   "word": "AWFUL",
   "pronunciations": "ˈɔfəl"
 },
 {
   "id": 5327,
   "word": "BALLISTIC",
   "pronunciations": "bəˈlɪstɪk"
 },
 {
   "id": 5328,
   "word": "BALLS",
   "pronunciations": "ˈbɔlz"
 },
 {
   "id": 5329,
   "word": "BAPTIST",
   "pronunciations": "ˈbæptəst, ˈbæptɪst"
 },
 {
   "id": 5330,
   "word": "BARRIERS",
   "pronunciations": "ˈbæriːɝz, ˈbɛriːɝz"
 },
 {
   "id": 5331,
   "word": "BASKET",
   "pronunciations": "ˈbæskət"
 },
 {
   "id": 5332,
   "word": "BELONGED",
   "pronunciations": "bɪˈlɔŋd"
 },
 {
   "id": 5333,
   "word": "BENSON",
   "pronunciations": "ˈbɛnsən"
 },
 {
   "id": 5334,
   "word": "BRAND",
   "pronunciations": "ˈbrænd"
 },
 {
   "id": 5335,
   "word": "BREED",
   "pronunciations": "ˈbriːd"
 },
 {
   "id": 5336,
   "word": "BUNCH",
   "pronunciations": "ˈbʌntʃ"
 },
 {
   "id": 5337,
   "word": "BUNKS",
   "pronunciations": "ˈbʌŋks"
 },
 {
   "id": 5338,
   "word": "BURMA",
   "pronunciations": "ˈbɝːmə"
 },
 {
   "id": 5339,
   "word": "CABINET",
   "pronunciations": "ˈkæbənət, ˈkæbnət"
 },
 {
   "id": 5340,
   "word": "CAMPAIGNS",
   "pronunciations": "kæmˈpeɪnz"
 },
 {
   "id": 5341,
   "word": "CAPTURE",
   "pronunciations": "ˈkæptʃɝ"
 },
 {
   "id": 5342,
   "word": "CAPTURED",
   "pronunciations": "ˈkæptʃɝd"
 },
 {
   "id": 5343,
   "word": "CARROLL",
   "pronunciations": "ˈkærəl, ˈkɛrəl"
 },
 {
   "id": 5344,
   "word": "CATCHER",
   "pronunciations": "ˈkæˌtʃɝː"
 },
 {
   "id": 5345,
   "word": "CEREAL",
   "pronunciations": "ˈsɪriːəl"
 },
 {
   "id": 5346,
   "word": "CHAOS",
   "pronunciations": "ˈkeɪɑːs"
 },
 {
   "id": 5347,
   "word": "CHECKS",
   "pronunciations": "ˈtʃɛks"
 },
 {
   "id": 5348,
   "word": "CHIP",
   "pronunciations": "ˈtʃɪp"
 },
 {
   "id": 5349,
   "word": "CHRISTIANS",
   "pronunciations": "ˈkrɪstʃənz, ˈkrɪstʃɪnz"
 },
 {
   "id": 5350,
   "word": "CLEVELAND",
   "pronunciations": "ˈkliːvlənd"
 },
 {
   "id": 5351,
   "word": "CLEVER",
   "pronunciations": "ˈklɛvɝ"
 },
 {
   "id": 5352,
   "word": "CODES",
   "pronunciations": "ˈkoʊdz"
 },
 {
   "id": 5353,
   "word": "COLLAR",
   "pronunciations": "ˈkɑːlɝ"
 },
 {
   "id": 5354,
   "word": "COMBINE",
   "pronunciations": "ˈkɑːmbaɪn, kəmˈbaɪn"
 },
 {
   "id": 5355,
   "word": "COMPARATIVE",
   "pronunciations": "kəmˈpærətɪv"
 },
 {
   "id": 5356,
   "word": "COMPENSATION",
   "pronunciations": "ˌkɑːmpənˈseɪʃən"
 },
 {
   "id": 5357,
   "word": "CONFESSION",
   "pronunciations": "kənˈfɛʃən"
 },
 {
   "id": 5358,
   "word": "CONNECTICUT",
   "pronunciations": "kəˈnɛtəkət"
 },
 {
   "id": 5359,
   "word": "CONSENT",
   "pronunciations": "kənˈsɛnt"
 },
 {
   "id": 5360,
   "word": "CONSIST",
   "pronunciations": "kənˈsɪst"
 },
 {
   "id": 5361,
   "word": "CONSULTED",
   "pronunciations": "kənˈsʌltəd, kənˈsʌltɪd"
 },
 {
   "id": 5362,
   "word": "CONTINENT",
   "pronunciations": "ˈkɑːntənənt"
 },
 {
   "id": 5363,
   "word": "COOLED",
   "pronunciations": "ˈkuːld"
 },
 {
   "id": 5364,
   "word": "COPS",
   "pronunciations": "ˈkɑːps"
 },
 {
   "id": 5365,
   "word": "CORRIDOR",
   "pronunciations": "ˈkɔrədɝ, ˈkɔrɪdɝ"
 },
 {
   "id": 5366,
   "word": "COUNSEL",
   "pronunciations": "ˈkaʊnsəl"
 },
 {
   "id": 5367,
   "word": "COUNTED",
   "pronunciations": "ˈkaʊntɪd"
 },
 {
   "id": 5368,
   "word": "CRACKED",
   "pronunciations": "ˈkrækt"
 },
 {
   "id": 5369,
   "word": "DANDY",
   "pronunciations": "ˈdændi"
 },
 {
   "id": 5370,
   "word": "DARLING",
   "pronunciations": "ˈdɑːrlɪŋ"
 },
 {
   "id": 5371,
   "word": "DECLINED",
   "pronunciations": "dɪˈklaɪnd"
 },
 {
   "id": 5372,
   "word": "DEFENSIVE",
   "pronunciations": "dɪˈfɛnsɪv"
 },
 {
   "id": 5373,
   "word": "DEPARTMENT'S",
   "pronunciations": "dɪˈpɑːrtmənts"
 },
 {
   "id": 5374,
   "word": "DEPARTURE",
   "pronunciations": "dɪˈpɑːrtʃɝ"
 },
 {
   "id": 5375,
   "word": "DEPUTY",
   "pronunciations": "ˈdɛpjəti, ˈdɛpjuːti"
 },
 {
   "id": 5376,
   "word": "DESCRIBING",
   "pronunciations": "dɪˈskraɪbɪŋ"
 },
 {
   "id": 5377,
   "word": "DESIGNATED",
   "pronunciations": "ˈdɛzɪgˌneɪtɪd"
 },
 {
   "id": 5378,
   "word": "DESTROYING",
   "pronunciations": "dɪˈstrɔɪɪŋ"
 },
 {
   "id": 5379,
   "word": "DETECTIVES",
   "pronunciations": "dɪˈtɛktɪvz"
 },
 {
   "id": 5380,
   "word": "DIPLOMACY",
   "pronunciations": "dɪˈploʊməsi"
 },
 {
   "id": 5381,
   "word": "DOME",
   "pronunciations": "ˈdoʊm"
 },
 {
   "id": 5382,
   "word": "DRUG'S",
   "pronunciations": "ˈdrʌgz"
 },
 {
   "id": 5383,
   "word": "EARTH'S",
   "pronunciations": "ˈɝːθs"
 },
 {
   "id": 5384,
   "word": "ECONOMICS",
   "pronunciations": "ˌɛkəˈnɑːmɪks, ˌiːkəˈnɑːmɪks"
 },
 {
   "id": 5385,
   "word": "EIGHTEEN",
   "pronunciations": "eɪˈtiːn, ˈeɪˈtiːn"
 },
 {
   "id": 5386,
   "word": "EMBASSY",
   "pronunciations": "ˈɛmbəsi"
 },
 {
   "id": 5387,
   "word": "EMPLOYERS",
   "pronunciations": "ɛmˈplɔɪɝz, ɪmˈplɔɪɝz"
 },
 {
   "id": 5388,
   "word": "ENGINES",
   "pronunciations": "ˈɛndʒənz"
 },
 {
   "id": 5389,
   "word": "ENJOYING",
   "pronunciations": "ˌɛnˈdʒɔɪɪŋ"
 },
 {
   "id": 5390,
   "word": "EXPLOSIVE",
   "pronunciations": "ɪkˈsploʊsɪv"
 },
 {
   "id": 5391,
   "word": "FAILING",
   "pronunciations": "ˈfeɪlɪŋ"
 },
 {
   "id": 5392,
   "word": "FEMALES",
   "pronunciations": "ˈfiːˌmeɪlz"
 },
 {
   "id": 5393,
   "word": "FIRES",
   "pronunciations": "ˈfaɪɝz, ˈfaɪrz"
 },
 {
   "id": 5394,
   "word": "FITTING",
   "pronunciations": "ˈfɪtɪŋ"
 },
 {
   "id": 5395,
   "word": "FLAME",
   "pronunciations": "ˈfleɪm"
 },
 {
   "id": 5396,
   "word": "FLEET",
   "pronunciations": "ˈfliːt"
 },
 {
   "id": 5397,
   "word": "FLOWING",
   "pronunciations": "ˈfloʊɪŋ"
 },
 {
   "id": 5398,
   "word": "FOLLOWERS",
   "pronunciations": "ˈfɑːloʊɝz"
 },
 {
   "id": 5399,
   "word": "FORMIDABLE",
   "pronunciations": "ˈfɔrmədəbəl, ˌfɔrˈmɪdəbəl"
 },
 {
   "id": 5400,
   "word": "FORMULATION",
   "pronunciations": "ˌfɔrmjəˈleɪʃən, ˌfɔrmjuːˈleɪʃən"
 },
 {
   "id": 5401,
   "word": "FRANKFURTER",
   "pronunciations": "ˈfræŋkfɝtɝ"
 },
 {
   "id": 5402,
   "word": "FRANKIE",
   "pronunciations": "ˈfræŋki"
 },
 {
   "id": 5403,
   "word": "FRICTION",
   "pronunciations": "ˈfrɪkʃən"
 },
 {
   "id": 5404,
   "word": "FUEL",
   "pronunciations": "ˈfjuːəl, ˈfjuːl"
 },
 {
   "id": 5405,
   "word": "FULTON",
   "pronunciations": "ˈfʊltən"
 },
 {
   "id": 5406,
   "word": "GAMBLING",
   "pronunciations": "ˈgæmbəlɪŋ, ˈgæmblɪŋ"
 },
 {
   "id": 5407,
   "word": "GAP",
   "pronunciations": "ˈgæp"
 },
 {
   "id": 5408,
   "word": "GENEVA",
   "pronunciations": "dʒəˈniːvə"
 },
 {
   "id": 5409,
   "word": "GEOMETRIC",
   "pronunciations": "ˌdʒiːəˈmɛtrɪk"
 },
 {
   "id": 5410,
   "word": "GIFFEN",
   "pronunciations": "ˈgɪfən"
 },
 {
   "id": 5411,
   "word": "GONNA",
   "pronunciations": "ˈgɑːnə"
 },
 {
   "id": 5412,
   "word": "GRADUATES",
   "pronunciations": "ˈgrædʒəwəts, ˈgrædʒəˌweɪts, ˈgrædʒuːwəts, ˈgrædʒuːˌeɪts"
 },
 {
   "id": 5413,
   "word": "GRAPH",
   "pronunciations": "ˈgræf"
 },
 {
   "id": 5414,
   "word": "GRASP",
   "pronunciations": "ˈgræsp"
 },
 {
   "id": 5415,
   "word": "GUERRILLAS",
   "pronunciations": "gɝˈɪləz"
 },
 {
   "id": 5416,
   "word": "HAMILTON",
   "pronunciations": "ˈhæməltən"
 },
 {
   "id": 5417,
   "word": "HANK",
   "pronunciations": "ˈhæŋk"
 },
 {
   "id": 5418,
   "word": "HEROES",
   "pronunciations": "ˈhɪroʊz, ˈhiːroʊz"
 },
 {
   "id": 5419,
   "word": "HIDING",
   "pronunciations": "ˈhaɪdɪŋ"
 },
 {
   "id": 5420,
   "word": "HITTING",
   "pronunciations": "ˈhɪtɪŋ"
 },
 {
   "id": 5421,
   "word": "HOLIDAY",
   "pronunciations": "ˈhɑːləˌdeɪ, ˈhɑːlɪˌdeɪ"
 },
 {
   "id": 5422,
   "word": "HORROR",
   "pronunciations": "ˈhɔrɝ"
 },
 {
   "id": 5423,
   "word": "HUNGER",
   "pronunciations": "ˈhʌŋgɝ"
 },
 {
   "id": 5424,
   "word": "HUSBAND'S",
   "pronunciations": "ˈhʌzbəndz"
 },
 {
   "id": 5425,
   "word": "ILLUSTRATE",
   "pronunciations": "ˈɪləˌstreɪt"
 },
 {
   "id": 5426,
   "word": "IMAGINARY",
   "pronunciations": "ˌɪˈmædʒəˌnɛri"
 },
 {
   "id": 5427,
   "word": "IMPLIED",
   "pronunciations": "ˌɪmˈplaɪd"
 },
 {
   "id": 5428,
   "word": "IMPORT",
   "pronunciations": "ˌɪmˈpɔrt, ˈɪmˌpɔrt"
 },
 {
   "id": 5429,
   "word": "INABILITY",
   "pronunciations": "ˌɪnəˈbɪlɪti"
 },
 {
   "id": 5430,
   "word": "INDIFFERENCE",
   "pronunciations": "ˌɪnˈdɪfɝəns, ˌɪnˈdɪfrəns"
 },
 {
   "id": 5431,
   "word": "INDIRECTLY",
   "pronunciations": "ˌɪndɝˈɛktˌliː"
 },
 {
   "id": 5432,
   "word": "INFECTIOUS",
   "pronunciations": "ˌɪnˈfɛkʃəs"
 },
 {
   "id": 5433,
   "word": "INQUIRIES",
   "pronunciations": "ˌɪnˈkwaɪɝiːz, ˈɪnkwɝiːz"
 },
 {
   "id": 5434,
   "word": "INQUIRY",
   "pronunciations": "ˌɪnˈkwaɪˌriː, ˈɪnkwəˌriː"
 },
 {
   "id": 5435,
   "word": "INTERACTION",
   "pronunciations": "ˌɪntɝˈækʃən, ˌɪnɝˈækʃən"
 },
 {
   "id": 5436,
   "word": "INTERSECTION",
   "pronunciations": "ˌɪntɝˈsɛkʃən"
 },
 {
   "id": 5437,
   "word": "IVORY",
   "pronunciations": "ˈaɪvɝi, ˈaɪvri"
 },
 {
   "id": 5438,
   "word": "K.",
   "pronunciations": "ˈkeɪ"
 },
 {
   "id": 5439,
   "word": "KISS",
   "pronunciations": "ˈkɪs"
 },
 {
   "id": 5440,
   "word": "KRIM",
   "pronunciations": "ˈkrɪm"
 },
 {
   "id": 5441,
   "word": "LAO",
   "pronunciations": "ˈlaʊ"
 },
 {
   "id": 5442,
   "word": "LESSONS",
   "pronunciations": "ˈlɛsənz"
 },
 {
   "id": 5443,
   "word": "LEST",
   "pronunciations": "ˈlɛst"
 },
 {
   "id": 5444,
   "word": "LION",
   "pronunciations": "ˈlaɪən"
 },
 {
   "id": 5445,
   "word": "LIT",
   "pronunciations": "ˈlɪt"
 },
 {
   "id": 5446,
   "word": "LIZZIE",
   "pronunciations": "ˈlɪzi"
 },
 {
   "id": 5447,
   "word": "LOGIC",
   "pronunciations": "ˈlɑːdʒɪk"
 },
 {
   "id": 5448,
   "word": "LOUDLY",
   "pronunciations": "ˈlaʊdli"
 },
 {
   "id": 5449,
   "word": "MEADOW",
   "pronunciations": "ˈmɛˌdoʊ"
 },
 {
   "id": 5450,
   "word": "MILTON",
   "pronunciations": "ˈmɪltən"
 },
 {
   "id": 5451,
   "word": "MISSIONARY",
   "pronunciations": "ˈmɪʃəˌnɛri"
 },
 {
   "id": 5452,
   "word": "MISTAKEN",
   "pronunciations": "mɪˈsteɪkən"
 },
 {
   "id": 5453,
   "word": "MOLECULAR",
   "pronunciations": "məˈlɛkjəlɝ"
 },
 {
   "id": 5454,
   "word": "MORALE",
   "pronunciations": "mɝˈæl"
 },
 {
   "id": 5455,
   "word": "MORELAND",
   "pronunciations": "ˈmɔrlənd"
 },
 {
   "id": 5456,
   "word": "MORTGAGE",
   "pronunciations": "ˈmɔrgədʒ, ˈmɔrgɪdʒ"
 },
 {
   "id": 5457,
   "word": "MOTIONS",
   "pronunciations": "ˈmoʊʃənz"
 },
 {
   "id": 5458,
   "word": "MURMURED",
   "pronunciations": "ˈmɝːmɝd"
 },
 {
   "id": 5459,
   "word": "MUTTERED",
   "pronunciations": "ˈmʌtɝd"
 },
 {
   "id": 5460,
   "word": "NADINE",
   "pronunciations": "nəˈdiːn"
 },
 {
   "id": 5461,
   "word": "NEIGHBORHOODS",
   "pronunciations": "ˈneɪbɝˌhʊdz"
 },
 {
   "id": 5462,
   "word": "NOTING",
   "pronunciations": "ˈnoʊtɪŋ"
 },
 {
   "id": 5463,
   "word": "NOTIONS",
   "pronunciations": "ˈnoʊʃənz"
 },
 {
   "id": 5464,
   "word": "NURSE",
   "pronunciations": "ˈnɝːs"
 },
 {
   "id": 5465,
   "word": "NURSING",
   "pronunciations": "ˈnɝːsɪŋ"
 },
 {
   "id": 5466,
   "word": "OBSCURE",
   "pronunciations": "əbsˈkjʊr"
 },
 {
   "id": 5467,
   "word": "OPERATORS",
   "pronunciations": "ˈɑːpɝˌeɪtɝz, ˈɔpɝˌeɪtɝz"
 },
 {
   "id": 5468,
   "word": "PACKING",
   "pronunciations": "ˈpækɪŋ"
 },
 {
   "id": 5469,
   "word": "PASTOR",
   "pronunciations": "ˈpæstɝ"
 },
 {
   "id": 5470,
   "word": "PAYS",
   "pronunciations": "ˈpeɪz"
 },
 {
   "id": 5471,
   "word": "PERFORMING",
   "pronunciations": "pɝˈfɔrmɪŋ"
 },
 {
   "id": 5472,
   "word": "PERSUADE",
   "pronunciations": "pɝˈsweɪd"
 },
 {
   "id": 5473,
   "word": "PIAZZA",
   "pronunciations": "piːˈæzə"
 },
 {
   "id": 5474,
   "word": "PIERRE",
   "pronunciations": "piːˈɛr"
 },
 {
   "id": 5475,
   "word": "POCKETS",
   "pronunciations": "ˈpɑːkəts"
 },
 {
   "id": 5476,
   "word": "POPULARITY",
   "pronunciations": "ˌpɑːpjəˈlɛrəti"
 },
 {
   "id": 5477,
   "word": "PORTER",
   "pronunciations": "ˈpɔrtɝ"
 },
 {
   "id": 5478,
   "word": "PORTRAIT",
   "pronunciations": "ˈpɔrtrət"
 },
 {
   "id": 5479,
   "word": "POSSESS",
   "pronunciations": "pəˈzɛs"
 },
 {
   "id": 5480,
   "word": "PRAISE",
   "pronunciations": "ˈpreɪz"
 },
 {
   "id": 5481,
   "word": "PREACHING",
   "pronunciations": "ˈpriːtʃɪŋ"
 },
 {
   "id": 5482,
   "word": "PRESERVATION",
   "pronunciations": "ˌprɛzɝˈveɪʃən"
 },
 {
   "id": 5483,
   "word": "PREVAILING",
   "pronunciations": "prɪˈveɪlɪŋ, priːˈveɪlɪŋ"
 },
 {
   "id": 5484,
   "word": "PRODUCTIVITY",
   "pronunciations": "ˌproʊdəkˈtɪvəti, ˌproʊdəkˈtɪvɪti"
 },
 {
   "id": 5485,
   "word": "PROGRESSIVE",
   "pronunciations": "prəˈgrɛsɪv"
 },
 {
   "id": 5486,
   "word": "PURCHASING",
   "pronunciations": "ˈpɝːtʃəsɪŋ"
 },
 {
   "id": 5487,
   "word": "PUSHING",
   "pronunciations": "ˈpʊʃɪŋ"
 },
 {
   "id": 5488,
   "word": "QUOTE",
   "pronunciations": "ˈkwoʊt"
 },
 {
   "id": 5489,
   "word": "RAYMOND",
   "pronunciations": "ˈreɪmənd"
 },
 {
   "id": 5490,
   "word": "READINGS",
   "pronunciations": "ˈriːdɪŋz"
 },
 {
   "id": 5491,
   "word": "REBELS",
   "pronunciations": "ˈrɛbəlz, rɪˈbɛlz"
 },
 {
   "id": 5492,
   "word": "REFLECTING",
   "pronunciations": "rəˈflɛktɪŋ, rɪˈflɛktɪŋ"
 },
 {
   "id": 5493,
   "word": "REMEMBERING",
   "pronunciations": "rɪˈmɛmbɝɪŋ, riːˈmɛmbɝɪŋ, rɪˈmɛmbrɪŋ, riːˈmɛmbrɪŋ"
 },
 {
   "id": 5494,
   "word": "RENEWED",
   "pronunciations": "rɪˈnuːd, riːˈnuːd"
 },
 {
   "id": 5495,
   "word": "REPORTING",
   "pronunciations": "riːˈpɔrtɪŋ, rɪˈpɔrtɪŋ"
 },
 {
   "id": 5496,
   "word": "RESPIRATORY",
   "pronunciations": "ˈrɛspɝəˌtɔri"
 },
 {
   "id": 5497,
   "word": "RESTED",
   "pronunciations": "ˈrɛstəd, ˈrɛstɪd"
 },
 {
   "id": 5498,
   "word": "RIVERS",
   "pronunciations": "ˈrɪvɝz"
 },
 {
   "id": 5499,
   "word": "SCIENTIST",
   "pronunciations": "ˈsaɪəntɪst"
 },
 {
   "id": 5500,
   "word": "SCREAMED",
   "pronunciations": "ˈskriːmd"
 },
 {
   "id": 5501,
   "word": "SCREAMING",
   "pronunciations": "ˈskriːmɪŋ"
 },
 {
   "id": 5502,
   "word": "SEAL",
   "pronunciations": "ˈsiːl"
 },
 {
   "id": 5503,
   "word": "SEASONS",
   "pronunciations": "ˈsiːzənz"
 },
 {
   "id": 5504,
   "word": "SEEMINGLY",
   "pronunciations": "ˈsiːmɪŋli"
 },
 {
   "id": 5505,
   "word": "SENSED",
   "pronunciations": "ˈsɛnst"
 },
 {
   "id": 5506,
   "word": "SEPARATION",
   "pronunciations": "ˌsɛpɝˈeɪʃən"
 },
 {
   "id": 5507,
   "word": "SHAKE",
   "pronunciations": "ˈʃeɪk"
 },
 {
   "id": 5508,
   "word": "SHAPED",
   "pronunciations": "ˈʃeɪpt"
 },
 {
   "id": 5509,
   "word": "SHIFTS",
   "pronunciations": "ˈʃɪfts"
 },
 {
   "id": 5510,
   "word": "SHOPS",
   "pronunciations": "ˈʃɑːps"
 },
 {
   "id": 5511,
   "word": "SIGNIFICANTLY",
   "pronunciations": "sɪgˈnɪfɪkəntli"
 },
 {
   "id": 5512,
   "word": "SILENTLY",
   "pronunciations": "ˈsaɪləntli"
 },
 {
   "id": 5513,
   "word": "SIMMS",
   "pronunciations": "ˈsɪmz"
 },
 {
   "id": 5514,
   "word": "SLOWED",
   "pronunciations": "ˈsloʊd"
 },
 {
   "id": 5515,
   "word": "SOONER",
   "pronunciations": "ˈsuːnɝ"
 },
 {
   "id": 5516,
   "word": "SPONTANEOUS",
   "pronunciations": "spɑːnˈteɪniːəs"
 },
 {
   "id": 5517,
   "word": "SPORT",
   "pronunciations": "ˈspɔrt"
 },
 {
   "id": 5518,
   "word": "STATUE",
   "pronunciations": "ˈstæˌtʃuː"
 },
 {
   "id": 5519,
   "word": "STAYING",
   "pronunciations": "ˈsteɪɪŋ"
 },
 {
   "id": 5520,
   "word": "STEAM",
   "pronunciations": "ˈstiːm"
 },
 {
   "id": 5521,
   "word": "STRETCHING",
   "pronunciations": "ˈstrɛtʃɪŋ"
 },
 {
   "id": 5522,
   "word": "STRIPPED",
   "pronunciations": "ˈstrɪpt"
 },
 {
   "id": 5523,
   "word": "SUICIDE",
   "pronunciations": "ˈsuːəˌsaɪd, ˈsuːɪˌsaɪd"
 },
 {
   "id": 5524,
   "word": "SUMMERS",
   "pronunciations": "ˈsʌmɝz"
 },
 {
   "id": 5525,
   "word": "SUMS",
   "pronunciations": "ˈsʌmz"
 },
 {
   "id": 5526,
   "word": "SUNLIGHT",
   "pronunciations": "ˈsʌnˌlaɪt"
 },
 {
   "id": 5527,
   "word": "SUPERINTENDENT",
   "pronunciations": "ˌsuːpɝənˈtɛndənt, ˌsuːpɝɪnˈtɛndənt"
 },
 {
   "id": 5528,
   "word": "SUPERNATURAL",
   "pronunciations": "ˌsuːpɝˈnætʃɝəl"
 },
 {
   "id": 5529,
   "word": "THEE",
   "pronunciations": "ˈðiː"
 },
 {
   "id": 5530,
   "word": "THROWING",
   "pronunciations": "ˈθroʊɪŋ"
 },
 {
   "id": 5531,
   "word": "TITLES",
   "pronunciations": "ˈtaɪtəlz"
 },
 {
   "id": 5532,
   "word": "TRACING",
   "pronunciations": "ˈtreɪsɪŋ"
 },
 {
   "id": 5533,
   "word": "TRACT",
   "pronunciations": "ˈtrækt"
 },
 {
   "id": 5534,
   "word": "TRANSOM",
   "pronunciations": "ˈtrænsəm"
 },
 {
   "id": 5535,
   "word": "TREVELYAN",
   "pronunciations": "trəˈvɛljən"
 },
 {
   "id": 5536,
   "word": "TUMOR",
   "pronunciations": "ˈtuːmɝ"
 },
 {
   "id": 5537,
   "word": "UNCERTAINTY",
   "pronunciations": "ənˈsɝːtənti"
 },
 {
   "id": 5538,
   "word": "USELESS",
   "pronunciations": "ˈjuːsləs"
 },
 {
   "id": 5539,
   "word": "VAGUELY",
   "pronunciations": "ˈveɪgli"
 },
 {
   "id": 5540,
   "word": "VICIOUS",
   "pronunciations": "ˈvɪʃəs"
 },
 {
   "id": 5541,
   "word": "VIOLATION",
   "pronunciations": "vaɪəˈleɪʃən"
 },
 {
   "id": 5542,
   "word": "VISITS",
   "pronunciations": "ˈvɪzɪts"
 },
 {
   "id": 5543,
   "word": "VITALITY",
   "pronunciations": "vaɪˈtæləti"
 },
 {
   "id": 5544,
   "word": "VOYAGE",
   "pronunciations": "ˈvɔɪədʒ"
 },
 {
   "id": 5545,
   "word": "WAGONS",
   "pronunciations": "ˈwægənz"
 },
 {
   "id": 5546,
   "word": "WALKER",
   "pronunciations": "ˈwɔkɝ"
 },
 {
   "id": 5547,
   "word": "WEARY",
   "pronunciations": "ˈwɪri"
 },
 {
   "id": 5548,
   "word": "WELL-KNOWN",
   "pronunciations": "ˈwɛlˈnoʊn"
 },
 {
   "id": 5549,
   "word": "WHISKEY",
   "pronunciations": "ˈwɪski, ˈhwɪski"
 },
 {
   "id": 5550,
   "word": "WIDER",
   "pronunciations": "ˈwaɪdɝ"
 },
 {
   "id": 5551,
   "word": "ABSTRACTION",
   "pronunciations": "æbˈstrækʃən"
 },
 {
   "id": 5552,
   "word": "ADEQUATELY",
   "pronunciations": "ˈædəkwɪtli"
 },
 {
   "id": 5553,
   "word": "ADJUST",
   "pronunciations": "əˈdʒʌst"
 },
 {
   "id": 5554,
   "word": "AFTERWARD",
   "pronunciations": "ˈæftɝwɝd"
 },
 {
   "id": 5555,
   "word": "AIMS",
   "pronunciations": "ˈeɪmz"
 },
 {
   "id": 5556,
   "word": "ALARM",
   "pronunciations": "əˈlɑːrm"
 },
 {
   "id": 5557,
   "word": "ALIEN",
   "pronunciations": "ˈeɪliːən"
 },
 {
   "id": 5558,
   "word": "ALLOWANCE",
   "pronunciations": "əˈlaʊəns"
 },
 {
   "id": 5559,
   "word": "AMBITIOUS",
   "pronunciations": "æmˈbɪʃəs"
 },
 {
   "id": 5560,
   "word": "AMPLE",
   "pronunciations": "ˈæmpəl"
 },
 {
   "id": 5561,
   "word": "ANALYTIC",
   "pronunciations": "ˌænəˈlɪtɪk"
 },
 {
   "id": 5562,
   "word": "ANGULAR",
   "pronunciations": "ˈæŋgjəlɝ"
 },
 {
   "id": 5563,
   "word": "ANTHONY",
   "pronunciations": "ˈænθɔˌniː"
 },
 {
   "id": 5564,
   "word": "APPEARING",
   "pronunciations": "əˈpɪrɪŋ"
 },
 {
   "id": 5565,
   "word": "ARRANGING",
   "pronunciations": "ɝˈeɪndʒɪŋ"
 },
 {
   "id": 5566,
   "word": "ARTERIES",
   "pronunciations": "ˈɑːrtɝiːz"
 },
 {
   "id": 5567,
   "word": "ASHAMED",
   "pronunciations": "əˈʃeɪmd"
 },
 {
   "id": 5568,
   "word": "ASSERTED",
   "pronunciations": "əˈsɝːtəd"
 },
 {
   "id": 5569,
   "word": "ATE",
   "pronunciations": "ˈeɪt"
 },
 {
   "id": 5570,
   "word": "ATTIC",
   "pronunciations": "ˈætɪk"
 },
 {
   "id": 5571,
   "word": "AUDIENCES",
   "pronunciations": "ˈɑːdiːənsəz, ˈɔdiːənsəz"
 },
 {
   "id": 5572,
   "word": "BASS",
   "pronunciations": "ˈbæs, ˈbeɪs"
 },
 {
   "id": 5573,
   "word": "BEAUTIFULLY",
   "pronunciations": "ˈbjuːtəfli"
 },
 {
   "id": 5574,
   "word": "BITTERLY",
   "pronunciations": "ˈbɪtɝli"
 },
 {
   "id": 5575,
   "word": "BLEEDING",
   "pronunciations": "ˈbliːdɪŋ"
 },
 {
   "id": 5576,
   "word": "BLOCKADE",
   "pronunciations": "ˌblɑːˈkeɪd"
 },
 {
   "id": 5577,
   "word": "BOUNCED",
   "pronunciations": "ˈbaʊnst"
 },
 {
   "id": 5578,
   "word": "BOUNDARY",
   "pronunciations": "ˈbaʊndɝi, ˈbaʊndri"
 },
 {
   "id": 5579,
   "word": "BOY'S",
   "pronunciations": "ˈbɔɪz"
 },
 {
   "id": 5580,
   "word": "BROADCAST",
   "pronunciations": "ˈbrɔdˌkæst"
 },
 {
   "id": 5581,
   "word": "BROOKS",
   "pronunciations": "ˈbrʊks"
 },
 {
   "id": 5582,
   "word": "BUFFALO",
   "pronunciations": "ˈbʌfəˌloʊ"
 },
 {
   "id": 5583,
   "word": "BUFFER",
   "pronunciations": "ˈbʌfɝ"
 },
 {
   "id": 5584,
   "word": "BULK",
   "pronunciations": "ˈbʌlk"
 },
 {
   "id": 5585,
   "word": "BYRON",
   "pronunciations": "ˈbaɪrən"
 },
 {
   "id": 5586,
   "word": "CANDY",
   "pronunciations": "ˈkændi"
 },
 {
   "id": 5587,
   "word": "CAPITA",
   "pronunciations": "ˈkæpɪtə"
 },
 {
   "id": 5588,
   "word": "CHANNEL",
   "pronunciations": "ˈtʃænəl"
 },
 {
   "id": 5589,
   "word": "CHAPTERS",
   "pronunciations": "ˈtʃæptɝz"
 },
 {
   "id": 5590,
   "word": "CHEMISTRY",
   "pronunciations": "ˈkɛmɪstri"
 },
 {
   "id": 5591,
   "word": "CHERISHED",
   "pronunciations": "ˈtʃɛrɪʃt"
 },
 {
   "id": 5592,
   "word": "CHORES",
   "pronunciations": "ˈtʃɔrz"
 },
 {
   "id": 5593,
   "word": "CIRCULATION",
   "pronunciations": "ˈsɝːkjəˌleɪʃən"
 },
 {
   "id": 5594,
   "word": "CLAIMING",
   "pronunciations": "ˈkleɪmɪŋ"
 },
 {
   "id": 5595,
   "word": "CLAIRE",
   "pronunciations": "ˈklɛr"
 },
 {
   "id": 5596,
   "word": "CLEANED",
   "pronunciations": "ˈkliːnd"
 },
 {
   "id": 5597,
   "word": "CLEARING",
   "pronunciations": "ˈklɪrɪŋ"
 },
 {
   "id": 5598,
   "word": "CLOSET",
   "pronunciations": "ˈklɑːzət"
 },
 {
   "id": 5599,
   "word": "CLOVER",
   "pronunciations": "ˈkloʊvɝ"
 },
 {
   "id": 5600,
   "word": "COCKPIT",
   "pronunciations": "ˈkɑːkˌpɪt"
 },
 {
   "id": 5601,
   "word": "COLLECT",
   "pronunciations": "kəˈlɛkt"
 },
 {
   "id": 5602,
   "word": "COMMISSIONERS",
   "pronunciations": "kəˈmɪʃənɝz"
 },
 {
   "id": 5603,
   "word": "COMMIT",
   "pronunciations": "kəˈmɪt"
 },
 {
   "id": 5604,
   "word": "COMMITMENTS",
   "pronunciations": "kəˈmɪtmənts"
 },
 {
   "id": 5605,
   "word": "COMPATIBLE",
   "pronunciations": "kəmˈpætəbəl"
 },
 {
   "id": 5606,
   "word": "COMPOSITE",
   "pronunciations": "kəmˈpɑːzət, kɑːmˈpɑːzət"
 },
 {
   "id": 5607,
   "word": "COMPOUNDS",
   "pronunciations": "ˈkɑːmpaʊndz, kəmˈpaʊndz"
 },
 {
   "id": 5608,
   "word": "CONCLUDE",
   "pronunciations": "kənˈkluːd"
 },
 {
   "id": 5609,
   "word": "CONFIDENT",
   "pronunciations": "ˈkɑːnfədənt"
 },
 {
   "id": 5610,
   "word": "CONFINED",
   "pronunciations": "kənˈfaɪnd"
 },
 {
   "id": 5611,
   "word": "CONFIRM",
   "pronunciations": "kənˈfɝːm"
 },
 {
   "id": 5612,
   "word": "CONFORMITY",
   "pronunciations": "kənˈfɔrməti"
 },
 {
   "id": 5613,
   "word": "CONFRONTATION",
   "pronunciations": "ˌkɑːnfrənˈteɪʃən"
 },
 {
   "id": 5614,
   "word": "CONJUNCTION",
   "pronunciations": "kənˈdʒʌŋkʃən"
 },
 {
   "id": 5615,
   "word": "CONTENTS",
   "pronunciations": "ˈkɑːntɛnts, kənˈtɛnts"
 },
 {
   "id": 5616,
   "word": "CORRELATION",
   "pronunciations": "ˌkɔrəˈleɪʃən"
 },
 {
   "id": 5617,
   "word": "COSTLY",
   "pronunciations": "ˈkɑːstli, ˈkɔstli"
 },
 {
   "id": 5618,
   "word": "COWBOY",
   "pronunciations": "ˈkaʊˌbɔɪ"
 },
 {
   "id": 5619,
   "word": "COWS",
   "pronunciations": "ˈkaʊz"
 },
 {
   "id": 5620,
   "word": "CRANSTON",
   "pronunciations": "ˈkrænstən"
 },
 {
   "id": 5621,
   "word": "CROUCHED",
   "pronunciations": "ˈkraʊtʃt"
 },
 {
   "id": 5622,
   "word": "CURRICULUM",
   "pronunciations": "kɝˈɪkjələm"
 },
 {
   "id": 5623,
   "word": "DAMP",
   "pronunciations": "ˈdæmp"
 },
 {
   "id": 5624,
   "word": "DANGERS",
   "pronunciations": "ˈdeɪndʒɝz"
 },
 {
   "id": 5625,
   "word": "DELEGATES",
   "pronunciations": "ˈdɛləˌgeɪts, ˈdɛləgəts"
 },
 {
   "id": 5626,
   "word": "DELIGHTED",
   "pronunciations": "dɪˈlaɪtəd, dɪˈlaɪtɪd"
 },
 {
   "id": 5627,
   "word": "DENVER",
   "pronunciations": "ˈdɛnvɝ"
 },
 {
   "id": 5628,
   "word": "DESERVES",
   "pronunciations": "dɪˈzɝːvz"
 },
 {
   "id": 5629,
   "word": "DEVISED",
   "pronunciations": "dɪˈvaɪzd"
 },
 {
   "id": 5630,
   "word": "DICKENS",
   "pronunciations": "ˈdɪkənz"
 },
 {
   "id": 5631,
   "word": "DIFFERENTIAL",
   "pronunciations": "ˌdɪfɝˈɛnʃəl"
 },
 {
   "id": 5632,
   "word": "DIFFERENTLY",
   "pronunciations": "ˈdɪfrəntli, ˈdɪfɝˈɛntli"
 },
 {
   "id": 5633,
   "word": "DISASTROUS",
   "pronunciations": "dɪˈzæstrəs"
 },
 {
   "id": 5634,
   "word": "DISCUSSING",
   "pronunciations": "dɪˈskʌsɪŋ"
 },
 {
   "id": 5635,
   "word": "DISH",
   "pronunciations": "ˈdɪʃ"
 },
 {
   "id": 5636,
   "word": "DISTURBING",
   "pronunciations": "dɪˈstɝːbɪŋ"
 },
 {
   "id": 5637,
   "word": "DOUBTS",
   "pronunciations": "ˈdaʊts"
 },
 {
   "id": 5638,
   "word": "DOWNWARD",
   "pronunciations": "ˈdaʊnwɝd"
 },
 {
   "id": 5639,
   "word": "DROPPING",
   "pronunciations": "ˈdrɑːpɪŋ"
 },
 {
   "id": 5640,
   "word": "DUSTY",
   "pronunciations": "ˈdʌsti"
 },
 {
   "id": 5641,
   "word": "EARN",
   "pronunciations": "ˈɝːn"
 },
 {
   "id": 5642,
   "word": "ENDURANCE",
   "pronunciations": "ˈɛndɝəns"
 },
 {
   "id": 5643,
   "word": "EXCLUDING",
   "pronunciations": "ɪksˈkluːdɪŋ"
 },
 {
   "id": 5644,
   "word": "EXHIBITS",
   "pronunciations": "ɪgˈzɪbəts"
 },
 {
   "id": 5645,
   "word": "EXPLOSION",
   "pronunciations": "ɪkˈsploʊʒən"
 },
 {
   "id": 5646,
   "word": "FANCY",
   "pronunciations": "ˈfænsi"
 },
 {
   "id": 5647,
   "word": "FARMING",
   "pronunciations": "ˈfɑːrmɪŋ"
 },
 {
   "id": 5648,
   "word": "FARMS",
   "pronunciations": "ˈfɑːrmz"
 },
 {
   "id": 5649,
   "word": "FEE",
   "pronunciations": "ˈfiː"
 },
 {
   "id": 5650,
   "word": "FENCES",
   "pronunciations": "ˈfɛnsɪz"
 },
 {
   "id": 5651,
   "word": "FIGHTERS",
   "pronunciations": "ˈfaɪtɝz"
 },
 {
   "id": 5652,
   "word": "FINANCED",
   "pronunciations": "fɪˈnænst, ˈfaɪˌnænst"
 },
 {
   "id": 5653,
   "word": "FINEST",
   "pronunciations": "ˈfaɪnəst"
 },
 {
   "id": 5654,
   "word": "FLAG",
   "pronunciations": "ˈflæg"
 },
 {
   "id": 5655,
   "word": "FLASHED",
   "pronunciations": "ˈflæʃt"
 },
 {
   "id": 5656,
   "word": "FLAVOR",
   "pronunciations": "ˈfleɪvɝ"
 },
 {
   "id": 5657,
   "word": "FLEXIBILITY",
   "pronunciations": "ˌflɛksəˈbɪləti"
 },
 {
   "id": 5658,
   "word": "FOOLISH",
   "pronunciations": "ˈfuːlɪʃ"
 },
 {
   "id": 5659,
   "word": "FOREHEAD",
   "pronunciations": "ˈfɔrhɛd"
 },
 {
   "id": 5660,
   "word": "FOUNDING",
   "pronunciations": "ˈfaʊndɪŋ"
 },
 {
   "id": 5661,
   "word": "FRINGE",
   "pronunciations": "ˈfrɪndʒ"
 },
 {
   "id": 5662,
   "word": "G",
   "pronunciations": "ˈdʒiː"
 },
 {
   "id": 5663,
   "word": "GAVIN",
   "pronunciations": "ˈgævɪn"
 },
 {
   "id": 5664,
   "word": "GEOGRAPHICAL",
   "pronunciations": "ˌdʒiːəˈgræfɪkəl"
 },
 {
   "id": 5665,
   "word": "GLIMPSE",
   "pronunciations": "ˈglɪmps"
 },
 {
   "id": 5666,
   "word": "GLORIOUS",
   "pronunciations": "ˈglɔriːəs"
 },
 {
   "id": 5667,
   "word": "GLOW",
   "pronunciations": "ˈgloʊ"
 },
 {
   "id": 5668,
   "word": "GOODNESS",
   "pronunciations": "ˈgʊdnəs, ˈgʊdnɪs"
 },
 {
   "id": 5669,
   "word": "GOTTEN",
   "pronunciations": "ˈgɑːtən, ˈgɔtən"
 },
 {
   "id": 5670,
   "word": "GOVERNMENT'S",
   "pronunciations": "ˈgʌvɝnmənts"
 },
 {
   "id": 5671,
   "word": "GOWN",
   "pronunciations": "ˈgaʊn"
 },
 {
   "id": 5672,
   "word": "GRAB",
   "pronunciations": "ˈgræb"
 },
 {
   "id": 5673,
   "word": "GRADUAL",
   "pronunciations": "ˈgrædʒuːəl"
 },
 {
   "id": 5674,
   "word": "GREECE",
   "pronunciations": "ˈgriːs"
 },
 {
   "id": 5675,
   "word": "HANDLEY",
   "pronunciations": "ˈhændli"
 },
 {
   "id": 5676,
   "word": "HANFORD",
   "pronunciations": "ˈhænfɝd"
 },
 {
   "id": 5677,
   "word": "HAWAII",
   "pronunciations": "həˈwaɪˌiː"
 },
 {
   "id": 5678,
   "word": "HEATED",
   "pronunciations": "ˈhiːtəd, ˈhiːtɪd"
 },
 {
   "id": 5679,
   "word": "HENRI",
   "pronunciations": "ˈhɛnri, ˌɔˈriː, ˌɑːnˈriː"
 },
 {
   "id": 5680,
   "word": "HERS",
   "pronunciations": "hɝz, ˈhɝːz"
 },
 {
   "id": 5681,
   "word": "HIGHWAYS",
   "pronunciations": "ˈhaɪˌweɪz"
 },
 {
   "id": 5682,
   "word": "HISTORICALLY",
   "pronunciations": "hɪˈstɔrɪkəli, hɪˈstɔrɪkli"
 },
 {
   "id": 5683,
   "word": "HOMER",
   "pronunciations": "ˈhoʊmɝ"
 },
 {
   "id": 5684,
   "word": "HUDSON'S",
   "pronunciations": "ˈhʌdsənz"
 },
 {
   "id": 5685,
   "word": "HUMOROUS",
   "pronunciations": "ˈhjuːmɝəs"
 },
 {
   "id": 5686,
   "word": "I.",
   "pronunciations": "ˈaɪ"
 },
 {
   "id": 5687,
   "word": "IDEALS",
   "pronunciations": "aɪˈdiːlz"
 },
 {
   "id": 5688,
   "word": "IGNORANCE",
   "pronunciations": "ˈɪgnɝəns"
 },
 {
   "id": 5689,
   "word": "IMPLIES",
   "pronunciations": "ˌɪmˈplaɪz"
 },
 {
   "id": 5690,
   "word": "IMPROVING",
   "pronunciations": "ˌɪmˈpruːvɪŋ"
 },
 {
   "id": 5691,
   "word": "INDICATING",
   "pronunciations": "ˈɪndəˌkeɪtɪŋ"
 },
 {
   "id": 5692,
   "word": "INDICATIONS",
   "pronunciations": "ˌɪndəˈkeɪʃənz"
 },
 {
   "id": 5693,
   "word": "INFANTRY",
   "pronunciations": "ˈɪnfəntri"
 },
 {
   "id": 5694,
   "word": "INFLUENCED",
   "pronunciations": "ˈɪnfluːənst"
 },
 {
   "id": 5695,
   "word": "INHERITED",
   "pronunciations": "ˌɪnˈhɛrətɪd"
 },
 {
   "id": 5696,
   "word": "INJUSTICE",
   "pronunciations": "ˌɪnˈdʒʌstɪs"
 },
 {
   "id": 5697,
   "word": "INQUIRED",
   "pronunciations": "ˌɪnˈkwaɪɝd"
 },
 {
   "id": 5698,
   "word": "INSERTED",
   "pronunciations": "ˌɪnˈsɝːtəd, ˌɪnˈsɝːtɪd"
 },
 {
   "id": 5699,
   "word": "INSIGHTS",
   "pronunciations": "ˈɪnˌsaɪts"
 },
 {
   "id": 5700,
   "word": "INSTALLATIONS",
   "pronunciations": "ˌɪnstəˈleɪʃənz"
 },
 {
   "id": 5701,
   "word": "INSTRUCTED",
   "pronunciations": "ˌɪnˈstrʌktəd, ˌɪnˈstrʌktɪd"
 },
 {
   "id": 5702,
   "word": "INVASION",
   "pronunciations": "ˌɪnˈveɪʒən"
 },
 {
   "id": 5703,
   "word": "INVESTORS",
   "pronunciations": "ˌɪnˈvɛstɝz"
 },
 {
   "id": 5704,
   "word": "ISOLATION",
   "pronunciations": "ˌaɪsəˈleɪʃən"
 },
 {
   "id": 5705,
   "word": "JAR",
   "pronunciations": "ˈdʒɑːr"
 },
 {
   "id": 5706,
   "word": "JAW",
   "pronunciations": "ˈdʒɔ"
 },
 {
   "id": 5707,
   "word": "JEEP",
   "pronunciations": "ˈdʒiːp"
 },
 {
   "id": 5708,
   "word": "JUDICIAL",
   "pronunciations": "dʒuːˈdɪʃəl"
 },
 {
   "id": 5709,
   "word": "JUSTIFICATION",
   "pronunciations": "ˌdʒəstəfəˈkeɪʃən"
 },
 {
   "id": 5710,
   "word": "L",
   "pronunciations": "ˈɛl"
 },
 {
   "id": 5711,
   "word": "LECTURE",
   "pronunciations": "ˈlɛktʃɝ"
 },
 {
   "id": 5712,
   "word": "LEGITIMATE",
   "pronunciations": "ləˈdʒɪtəmət"
 },
 {
   "id": 5713,
   "word": "LEVELING",
   "pronunciations": "ˈlɛvəlɪŋ, ˈlɛvlɪŋ"
 },
 {
   "id": 5714,
   "word": "LINED",
   "pronunciations": "ˈlaɪnd"
 },
 {
   "id": 5715,
   "word": "LINK",
   "pronunciations": "ˈlɪŋk"
 },
 {
   "id": 5716,
   "word": "LINKED",
   "pronunciations": "ˈlɪŋkt"
 },
 {
   "id": 5717,
   "word": "LIVER",
   "pronunciations": "ˈlɪvɝ"
 },
 {
   "id": 5718,
   "word": "LOCATE",
   "pronunciations": "ˈloʊˌkeɪt"
 },
 {
   "id": 5719,
   "word": "LUNG",
   "pronunciations": "ˈlʌŋ"
 },
 {
   "id": 5720,
   "word": "M",
   "pronunciations": "ˈɛm"
 },
 {
   "id": 5721,
   "word": "MAE",
   "pronunciations": "ˈmeɪ"
 },
 {
   "id": 5722,
   "word": "MAILED",
   "pronunciations": "ˈmeɪld"
 },
 {
   "id": 5723,
   "word": "MAINTAINS",
   "pronunciations": "meɪnˈteɪnz"
 },
 {
   "id": 5724,
   "word": "MARE",
   "pronunciations": "ˈmɛr"
 },
 {
   "id": 5725,
   "word": "MATCHED",
   "pronunciations": "ˈmætʃt"
 },
 {
   "id": 5726,
   "word": "MESSAGES",
   "pronunciations": "ˈmɛsədʒəz, ˈmɛsɪdʒɪz"
 },
 {
   "id": 5727,
   "word": "METAPHYSICAL",
   "pronunciations": "ˌmɛtəˈfɪzɪkəl"
 },
 {
   "id": 5728,
   "word": "MINIMIZE",
   "pronunciations": "ˈmɪnəˌmaɪz"
 },
 {
   "id": 5729,
   "word": "MIRACLE",
   "pronunciations": "ˈmɪrəkəl"
 },
 {
   "id": 5730,
   "word": "MISSIONS",
   "pronunciations": "ˈmɪʃənz"
 },
 {
   "id": 5731,
   "word": "MISTAKES",
   "pronunciations": "mɪˈsteɪks"
 },
 {
   "id": 5732,
   "word": "MONK",
   "pronunciations": "ˈmʌŋk"
 },
 {
   "id": 5733,
   "word": "MONTGOMERY",
   "pronunciations": "mɑːntˈgʌmri"
 },
 {
   "id": 5734,
   "word": "MUSCULAR",
   "pronunciations": "ˈmʌskjəlɝ"
 },
 {
   "id": 5735,
   "word": "NELSON",
   "pronunciations": "ˈnɛlsən"
 },
 {
   "id": 5736,
   "word": "NETWORKS",
   "pronunciations": "ˈnɛˌtwɝːks"
 },
 {
   "id": 5737,
   "word": "NICOLAS",
   "pronunciations": "ˈnɪkɔləs"
 },
 {
   "id": 5738,
   "word": "NORTHEAST",
   "pronunciations": "ˌnɔrˈθiːst"
 },
 {
   "id": 5739,
   "word": "NOTABLY",
   "pronunciations": "ˈnoʊtəbli"
 },
 {
   "id": 5740,
   "word": "O'",
   "pronunciations": "ˈoʊ"
 },
 {
   "id": 5741,
   "word": "OBLIGATION",
   "pronunciations": "ˌɑːbləˈgeɪʃən"
 },
 {
   "id": 5742,
   "word": "OBSERVER",
   "pronunciations": "əbˈzɝːvɝ"
 },
 {
   "id": 5743,
   "word": "OCCUPY",
   "pronunciations": "ˈɑːkjəˌpaɪ"
 },
 {
   "id": 5744,
   "word": "OPENS",
   "pronunciations": "ˈoʊpənz"
 },
 {
   "id": 5745,
   "word": "OPIUM",
   "pronunciations": "ˈoʊpiːəm"
 },
 {
   "id": 5746,
   "word": "OPTIMUM",
   "pronunciations": "ˈɑːptɪməm"
 },
 {
   "id": 5747,
   "word": "ORBIT",
   "pronunciations": "ˈɔrbət"
 },
 {
   "id": 5748,
   "word": "ORIENTAL",
   "pronunciations": "ˌɔriːˈɛntəl, ˌɔriːˈɛnəl"
 },
 {
   "id": 5749,
   "word": "ORIENTATION",
   "pronunciations": "ˌɔriːɛnˈteɪʃən"
 },
 {
   "id": 5750,
   "word": "OUTFIT",
   "pronunciations": "ˈaʊtˌfɪt"
 },
 {
   "id": 5751,
   "word": "PAN",
   "pronunciations": "ˈpæn"
 },
 {
   "id": 5752,
   "word": "PARLIAMENT",
   "pronunciations": "ˈpɑːrləmɛnt"
 },
 {
   "id": 5753,
   "word": "PARTNERS",
   "pronunciations": "ˈpɑːrtnɝz"
 },
 {
   "id": 5754,
   "word": "PAYNE",
   "pronunciations": "ˈpeɪn"
 },
 {
   "id": 5755,
   "word": "PAYROLL",
   "pronunciations": "ˈpeɪˌroʊl"
 },
 {
   "id": 5756,
   "word": "PEAK",
   "pronunciations": "ˈpiːk"
 },
 {
   "id": 5757,
   "word": "PERSISTENT",
   "pronunciations": "pɝˈsɪstənt"
 },
 {
   "id": 5758,
   "word": "PHILOSOPHER",
   "pronunciations": "fəˈlɑːsəfɝ"
 },
 {
   "id": 5759,
   "word": "PHOTOGRAPHS",
   "pronunciations": "ˈfoʊtəˌgræfs"
 },
 {
   "id": 5760,
   "word": "PILED",
   "pronunciations": "ˈpaɪld"
 },
 {
   "id": 5761,
   "word": "PIN",
   "pronunciations": "ˈpɪn"
 },
 {
   "id": 5762,
   "word": "PITCHING",
   "pronunciations": "ˈpɪtʃɪŋ"
 },
 {
   "id": 5763,
   "word": "POTTERY",
   "pronunciations": "ˈpɑːtɝi"
 },
 {
   "id": 5764,
   "word": "PRIEST",
   "pronunciations": "ˈpriːst"
 },
 {
   "id": 5765,
   "word": "PRIESTS",
   "pronunciations": "ˈpriːsts"
 },
 {
   "id": 5766,
   "word": "PRO",
   "pronunciations": "ˈproʊ"
 },
 {
   "id": 5767,
   "word": "PROCEEDS",
   "pronunciations": "prəˈsiːdz, proʊˈsiːdz"
 },
 {
   "id": 5768,
   "word": "PRODUCER",
   "pronunciations": "prəˈduːsɝ"
 },
 {
   "id": 5769,
   "word": "PROFESSORS",
   "pronunciations": "prəˈfɛsɝz"
 },
 {
   "id": 5770,
   "word": "PROLONGED",
   "pronunciations": "prəˈlɔŋd"
 },
 {
   "id": 5771,
   "word": "PROPOSITION",
   "pronunciations": "ˌprɑːpəˈzɪʃən"
 },
 {
   "id": 5772,
   "word": "PROVES",
   "pronunciations": "ˈpruːvz"
 },
 {
   "id": 5773,
   "word": "PURCHASES",
   "pronunciations": "ˈpɝːtʃəsəz, ˈpɝːtʃəsɪz"
 },
 {
   "id": 5774,
   "word": "PURSUIT",
   "pronunciations": "pɝˈsuːt"
 },
 {
   "id": 5775,
   "word": "QUALIFICATIONS",
   "pronunciations": "ˌkwɑːləfəˈkeɪʃənz"
 },
 {
   "id": 5776,
   "word": "QUEST",
   "pronunciations": "ˈkwɛst"
 },
 {
   "id": 5777,
   "word": "RAGE",
   "pronunciations": "ˈreɪdʒ"
 },
 {
   "id": 5778,
   "word": "RAIL",
   "pronunciations": "ˈreɪl"
 },
 {
   "id": 5779,
   "word": "RAILROADS",
   "pronunciations": "ˈreɪlˌroʊdz"
 },
 {
   "id": 5780,
   "word": "RAISES",
   "pronunciations": "ˈreɪzəz, ˈreɪzɪz"
 },
 {
   "id": 5781,
   "word": "READS",
   "pronunciations": "ˈriːdz"
 },
 {
   "id": 5782,
   "word": "REASONING",
   "pronunciations": "ˈriːzənɪŋ"
 },
 {
   "id": 5783,
   "word": "REFERENCES",
   "pronunciations": "ˈrɛfɝənsɪz, ˈrɛfrənsɪz"
 },
 {
   "id": 5784,
   "word": "REFUSE",
   "pronunciations": "rəˈfjuːz, ˈrɛˌfjuːz, rɪˈfjuːz"
 },
 {
   "id": 5785,
   "word": "REQUIRING",
   "pronunciations": "riːˈkwaɪɝɪŋ, riːˈkwaɪrɪŋ"
 },
 {
   "id": 5786,
   "word": "RESUME",
   "pronunciations": "rɪˈzuːm, riːˈzuːm, ˈrɛzəˌmeɪ"
 },
 {
   "id": 5787,
   "word": "REVISED",
   "pronunciations": "rɪˈvaɪzd, riːˈvaɪzd"
 },
 {
   "id": 5788,
   "word": "RIDER",
   "pronunciations": "ˈraɪdɝ"
 },
 {
   "id": 5789,
   "word": "ROLEPLAYING",
   "pronunciations": "ˈroʊlˌpleɪɪŋ"
 },
 {
   "id": 5790,
   "word": "ROWS",
   "pronunciations": "ˈroʊz"
 },
 {
   "id": 5791,
   "word": "RUINED",
   "pronunciations": "ˈruːənd, ˈruːɪnd"
 },
 {
   "id": 5792,
   "word": "SAINT",
   "pronunciations": "ˈseɪnt"
 },
 {
   "id": 5793,
   "word": "SATISFY",
   "pronunciations": "ˈsætəsˌfaɪ, ˈsætɪsˌfaɪ"
 },
 {
   "id": 5794,
   "word": "SCOTT",
   "pronunciations": "ˈskɑːt"
 },
 {
   "id": 5795,
   "word": "SECULAR",
   "pronunciations": "ˈsɛkjəlɝ"
 },
 {
   "id": 5796,
   "word": "SEVERELY",
   "pronunciations": "səˈvɪrli"
 },
 {
   "id": 5797,
   "word": "SHIPMENTS",
   "pronunciations": "ˈʃɪpmənts"
 },
 {
   "id": 5798,
   "word": "SHORTAGE",
   "pronunciations": "ˈʃɔrtədʒ, ˈʃɔrtɪdʒ"
 },
 {
   "id": 5799,
   "word": "SIMPLICITY",
   "pronunciations": "sɪmˈplɪsəti, sɪmˈplɪsɪti"
 },
 {
   "id": 5800,
   "word": "SINS",
   "pronunciations": "ˈsɪnz"
 },
 {
   "id": 5801,
   "word": "SITES",
   "pronunciations": "ˈsaɪts"
 },
 {
   "id": 5802,
   "word": "SKETCH",
   "pronunciations": "ˈskɛtʃ"
 },
 {
   "id": 5803,
   "word": "SLAMMED",
   "pronunciations": "ˈslæmd"
 },
 {
   "id": 5804,
   "word": "SOLAR",
   "pronunciations": "ˈsoʊlɝ"
 },
 {
   "id": 5805,
   "word": "SOUP",
   "pronunciations": "ˈsuːp"
 },
 {
   "id": 5806,
   "word": "SOUTHWEST",
   "pronunciations": "ˌsaʊθˈwɛst"
 },
 {
   "id": 5807,
   "word": "SPECIALIST",
   "pronunciations": "ˈspɛʃəlɪst"
 },
 {
   "id": 5808,
   "word": "SPOTTED",
   "pronunciations": "ˈspɑːtəd, ˈspɑːtɪd"
 },
 {
   "id": 5809,
   "word": "SPRAY",
   "pronunciations": "ˈspreɪ"
 },
 {
   "id": 5810,
   "word": "SPREADING",
   "pronunciations": "ˈsprɛdɪŋ"
 },
 {
   "id": 5811,
   "word": "SPUN",
   "pronunciations": "ˈspʌn"
 },
 {
   "id": 5812,
   "word": "STAGED",
   "pronunciations": "ˈsteɪdʒd"
 },
 {
   "id": 5813,
   "word": "STATING",
   "pronunciations": "ˈsteɪtɪŋ"
 },
 {
   "id": 5814,
   "word": "STATISTICAL",
   "pronunciations": "stəˈtɪstɪkəl"
 },
 {
   "id": 5815,
   "word": "STIRRING",
   "pronunciations": "ˈstɝːɪŋ"
 },
 {
   "id": 5816,
   "word": "STRENGTHEN",
   "pronunciations": "ˈstrɛŋθən"
 },
 {
   "id": 5817,
   "word": "STRIDE",
   "pronunciations": "ˈstraɪd"
 },
 {
   "id": 5818,
   "word": "STRINGS",
   "pronunciations": "ˈstrɪŋz"
 },
 {
   "id": 5819,
   "word": "STUART",
   "pronunciations": "ˈstuːɝt, stˈjuːɝt, ˈstɔrt"
 },
 {
   "id": 5820,
   "word": "STURDY",
   "pronunciations": "ˈstɝːdi"
 },
 {
   "id": 5821,
   "word": "SUCCESSOR",
   "pronunciations": "səkˈsɛsɝ"
 },
 {
   "id": 5822,
   "word": "SWINGING",
   "pronunciations": "ˈswɪŋɪŋ"
 },
 {
   "id": 5823,
   "word": "SWITCHED",
   "pronunciations": "ˈswɪtʃt"
 },
 {
   "id": 5824,
   "word": "SYNTHESIS",
   "pronunciations": "ˈsɪnθəsəs"
 },
 {
   "id": 5825,
   "word": "TAXI",
   "pronunciations": "ˈtæksi"
 },
 {
   "id": 5826,
   "word": "TELEPHONED",
   "pronunciations": "ˈtɛləˌfoʊnd"
 },
 {
   "id": 5827,
   "word": "THEREOF",
   "pronunciations": "ˌðɛˈrʌv"
 },
 {
   "id": 5828,
   "word": "THEY'VE",
   "pronunciations": "ˈðeɪv"
 },
 {
   "id": 5829,
   "word": "THRU",
   "pronunciations": "ˈθruː"
 },
 {
   "id": 5830,
   "word": "TICKET",
   "pronunciations": "ˈtɪkət, ˈtɪkɪt"
 },
 {
   "id": 5831,
   "word": "TILE",
   "pronunciations": "ˈtaɪl"
 },
 {
   "id": 5832,
   "word": "TOLL",
   "pronunciations": "ˈtoʊl"
 },
 {
   "id": 5833,
   "word": "TOURIST",
   "pronunciations": "ˈtʊrəst, ˈtʊrɪst"
 },
 {
   "id": 5834,
   "word": "TRAILS",
   "pronunciations": "ˈtreɪlz"
 },
 {
   "id": 5835,
   "word": "TRAINS",
   "pronunciations": "ˈtreɪnz"
 },
 {
   "id": 5836,
   "word": "TRANSIT",
   "pronunciations": "ˈtrænzɪt"
 },
 {
   "id": 5837,
   "word": "TRANSLATE",
   "pronunciations": "trænzˈleɪt, trænˈsleɪt"
 },
 {
   "id": 5838,
   "word": "TRANSLATED",
   "pronunciations": "trænzˈleɪtəd, trænˈsleɪtɪd"
 },
 {
   "id": 5839,
   "word": "TRANSLATION",
   "pronunciations": "trænzˈleɪʃən, trænˈsleɪʃən"
 },
 {
   "id": 5840,
   "word": "TRANSMISSION",
   "pronunciations": "trænˈsmɪʃən, trænzˈmɪʃən"
 },
 {
   "id": 5841,
   "word": "TROOP",
   "pronunciations": "ˈtruːp"
 },
 {
   "id": 5842,
   "word": "TYPICALLY",
   "pronunciations": "ˈtɪpɪkli, ˈtɪpɪkəli"
 },
 {
   "id": 5843,
   "word": "UNEMPLOYMENT",
   "pronunciations": "ˌənɪmˈplɔɪmənt"
 },
 {
   "id": 5844,
   "word": "UNNECESSARY",
   "pronunciations": "ənˈnɛsəˌsɛri"
 },
 {
   "id": 5845,
   "word": "UNTO",
   "pronunciations": "ˈʌntuː"
 },
 {
   "id": 5846,
   "word": "VEGETABLES",
   "pronunciations": "ˈvɛdʒtəbəlz"
 },
 {
   "id": 5847,
   "word": "VERTICAL",
   "pronunciations": "ˈvɝːtɪkəl"
 },
 {
   "id": 5848,
   "word": "VESSEL",
   "pronunciations": "ˈvɛsəl"
 },
 {
   "id": 5849,
   "word": "VETERANS",
   "pronunciations": "ˈvɛtɝənz, ˈvɛtrənz"
 },
 {
   "id": 5850,
   "word": "VIET",
   "pronunciations": "viːˈɛt"
 },
 {
   "id": 5851,
   "word": "VIEWPOINT",
   "pronunciations": "vˈjuːˌpɔɪnt"
 },
 {
   "id": 5852,
   "word": "VOLTAGE",
   "pronunciations": "ˈvoʊltədʒ, ˈvoʊltɪdʒ"
 },
 {
   "id": 5853,
   "word": "WANTING",
   "pronunciations": "ˈwɑːntɪŋ, ˈwɑːnɪŋ"
 },
 {
   "id": 5854,
   "word": "WASTED",
   "pronunciations": "ˈweɪstəd, ˈweɪstɪd"
 },
 {
   "id": 5855,
   "word": "WAVED",
   "pronunciations": "ˈweɪvd"
 },
 {
   "id": 5856,
   "word": "WEIGHED",
   "pronunciations": "ˈweɪd"
 },
 {
   "id": 5857,
   "word": "WHITES",
   "pronunciations": "ˈwaɪts, ˈhwaɪts"
 },
 {
   "id": 5858,
   "word": "WILLIS",
   "pronunciations": "ˈwɪlɪs"
 },
 {
   "id": 5859,
   "word": "ACCUSTOMED",
   "pronunciations": "əˈkʌstəmd"
 },
 {
   "id": 5860,
   "word": "ACE",
   "pronunciations": "ˈeɪs"
 },
 {
   "id": 5861,
   "word": "ACHIEVING",
   "pronunciations": "əˈtʃiːvɪŋ"
 },
 {
   "id": 5862,
   "word": "ACTORS",
   "pronunciations": "ˈæktɝz"
 },
 {
   "id": 5863,
   "word": "ADMINISTRATOR",
   "pronunciations": "ədˈmɪnɪˌstreɪtɝ"
 },
 {
   "id": 5864,
   "word": "ADVOCATE",
   "pronunciations": "ˈædvəkət, ˈædvəˌkeɪt"
 },
 {
   "id": 5865,
   "word": "AEGEAN",
   "pronunciations": "ˌeɪˈdʒiːən"
 },
 {
   "id": 5866,
   "word": "AGREEMENTS",
   "pronunciations": "əˈgriːmənts"
 },
 {
   "id": 5867,
   "word": "ALONGSIDE",
   "pronunciations": "əˈlɔŋˈsaɪd"
 },
 {
   "id": 5868,
   "word": "ALTER",
   "pronunciations": "ˈɔltɝ"
 },
 {
   "id": 5869,
   "word": "AMBITIONS",
   "pronunciations": "æmˈbɪʃənz"
 },
 {
   "id": 5870,
   "word": "AMY",
   "pronunciations": "ˈeɪmi"
 },
 {
   "id": 5871,
   "word": "ANCHOR",
   "pronunciations": "ˈæŋkɝ"
 },
 {
   "id": 5872,
   "word": "APPRENTICE",
   "pronunciations": "əˈprɛntəs, əˈprɛntɪs"
 },
 {
   "id": 5873,
   "word": "APT",
   "pronunciations": "ˈæpt"
 },
 {
   "id": 5874,
   "word": "ARGUMENTS",
   "pronunciations": "ˈɑːrgjəmənts"
 },
 {
   "id": 5875,
   "word": "ARMIES",
   "pronunciations": "ˈɑːrmiːz"
 },
 {
   "id": 5876,
   "word": "ARRIVING",
   "pronunciations": "ɝˈaɪvɪŋ"
 },
 {
   "id": 5877,
   "word": "ASSAULT",
   "pronunciations": "əˈsɔlt"
 },
 {
   "id": 5878,
   "word": "ASSOCIATES",
   "pronunciations": "əˈsoʊsiːəts, əˈsoʊsiːˌeɪts, əˈsoʊʃiːəts, əˈsoʊʃiːˌeɪts"
 },
 {
   "id": 5879,
   "word": "ATTRACTION",
   "pronunciations": "əˈtrækʃən"
 },
 {
   "id": 5880,
   "word": "BACKS",
   "pronunciations": "ˈbæks"
 },
 {
   "id": 5881,
   "word": "BANKERS",
   "pronunciations": "ˈbæŋkɝz"
 },
 {
   "id": 5882,
   "word": "BATHING",
   "pronunciations": "ˈbeɪðɪŋ"
 },
 {
   "id": 5883,
   "word": "BATTING",
   "pronunciations": "ˈbætɪŋ"
 },
 {
   "id": 5884,
   "word": "BEATEN",
   "pronunciations": "ˈbiːtən"
 },
 {
   "id": 5885,
   "word": "BEES",
   "pronunciations": "ˈbiːz"
 },
 {
   "id": 5886,
   "word": "BERGER",
   "pronunciations": "ˈbɝːgɝ"
 },
 {
   "id": 5887,
   "word": "BLACKMAN",
   "pronunciations": "ˈblækmən"
 },
 {
   "id": 5888,
   "word": "BLAST",
   "pronunciations": "ˈblæst"
 },
 {
   "id": 5889,
   "word": "BOOST",
   "pronunciations": "ˈbuːst"
 },
 {
   "id": 5890,
   "word": "BOTTLES",
   "pronunciations": "ˈbɑːtəlz"
 },
 {
   "id": 5891,
   "word": "BOW",
   "pronunciations": "ˈbaʊ, ˈboʊ"
 },
 {
   "id": 5892,
   "word": "BROODING",
   "pronunciations": "ˈbruːdɪŋ"
 },
 {
   "id": 5893,
   "word": "BURN",
   "pronunciations": "ˈbɝːn"
 },
 {
   "id": 5894,
   "word": "BURTON",
   "pronunciations": "ˈbɝːtən"
 },
 {
   "id": 5895,
   "word": "BUSINESSMEN",
   "pronunciations": "ˈbɪznɪˌsmɛn"
 },
 {
   "id": 5896,
   "word": "CAFETERIA",
   "pronunciations": "ˌkæfəˈtɪriːə"
 },
 {
   "id": 5897,
   "word": "CAMBRIDGE",
   "pronunciations": "ˈkeɪmbrɪdʒ"
 },
 {
   "id": 5898,
   "word": "CARDINAL",
   "pronunciations": "ˈkɑːrdɪnəl"
 },
 {
   "id": 5899,
   "word": "CARED",
   "pronunciations": "ˈkɛrd"
 },
 {
   "id": 5900,
   "word": "CARLA",
   "pronunciations": "ˈkɑːrlɑː"
 },
 {
   "id": 5901,
   "word": "CEASE",
   "pronunciations": "ˈsiːs"
 },
 {
   "id": 5902,
   "word": "CELEBRATION",
   "pronunciations": "ˌsɛləˈbreɪʃən"
 },
 {
   "id": 5903,
   "word": "CEMETERY",
   "pronunciations": "ˈsɛməˌtɛri, ˈsɛmɪˌtɛri"
 },
 {
   "id": 5904,
   "word": "CIRCUMSTANCE",
   "pronunciations": "ˈsɝːkəmˌstæns"
 },
 {
   "id": 5905,
   "word": "CLEARER",
   "pronunciations": "ˈklɪrɝ"
 },
 {
   "id": 5906,
   "word": "CLIENT",
   "pronunciations": "ˈklaɪənt"
 },
 {
   "id": 5907,
   "word": "CLUE",
   "pronunciations": "ˈkluː"
 },
 {
   "id": 5908,
   "word": "COALITION",
   "pronunciations": "ˌkoʊəˈlɪʃən"
 },
 {
   "id": 5909,
   "word": "COLLAGE",
   "pronunciations": "kəˈlɑːʒ"
 },
 {
   "id": 5910,
   "word": "COMMANDED",
   "pronunciations": "kəˈmændɪd"
 },
 {
   "id": 5911,
   "word": "COMMANDS",
   "pronunciations": "kəˈmændz"
 },
 {
   "id": 5912,
   "word": "COMMONPLACE",
   "pronunciations": "ˈkɑːmənˌpleɪs"
 },
 {
   "id": 5913,
   "word": "COMPARATIVELY",
   "pronunciations": "kəmˈpærətɪvˌliː"
 },
 {
   "id": 5914,
   "word": "COMPETING",
   "pronunciations": "kəmˈpiːtɪŋ"
 },
 {
   "id": 5915,
   "word": "CONNECTIONS",
   "pronunciations": "kəˈnɛkʃənz"
 },
 {
   "id": 5916,
   "word": "CONSIDERS",
   "pronunciations": "kənˈsɪdɝz"
 },
 {
   "id": 5917,
   "word": "CONSTRUCTIVE",
   "pronunciations": "kənˈstrʌktɪv"
 },
 {
   "id": 5918,
   "word": "CONTEMPT",
   "pronunciations": "kənˈtɛmpt"
 },
 {
   "id": 5919,
   "word": "CONTOURS",
   "pronunciations": "ˈkɑːnˌtʊrz"
 },
 {
   "id": 5920,
   "word": "CONTRIBUTING",
   "pronunciations": "kənˈtrɪbjuːtɪŋ"
 },
 {
   "id": 5921,
   "word": "COORDINATION",
   "pronunciations": "koʊˌɔrdəˈneɪʃən"
 },
 {
   "id": 5922,
   "word": "COP",
   "pronunciations": "ˈkɑːp"
 },
 {
   "id": 5923,
   "word": "COUNTRY'S",
   "pronunciations": "ˈkʌntriːz"
 },
 {
   "id": 5924,
   "word": "CRACKING",
   "pronunciations": "ˈkrækɪŋ"
 },
 {
   "id": 5925,
   "word": "CREATURE",
   "pronunciations": "ˈkriːtʃɝ"
 },
 {
   "id": 5926,
   "word": "CRUDE",
   "pronunciations": "ˈkruːd"
 },
 {
   "id": 5927,
   "word": "CRUEL",
   "pronunciations": "ˈkruːəl, ˈkruːl"
 },
 {
   "id": 5928,
   "word": "CRYING",
   "pronunciations": "ˈkraɪɪŋ"
 },
 {
   "id": 5929,
   "word": "CUBIC",
   "pronunciations": "ˈkjuːbɪk"
 },
 {
   "id": 5930,
   "word": "DA",
   "pronunciations": "ˈdɑː, ˈdiːˈeɪ"
 },
 {
   "id": 5931,
   "word": "DAD",
   "pronunciations": "ˈdæd"
 },
 {
   "id": 5932,
   "word": "DAY'S",
   "pronunciations": "ˈdeɪz"
 },
 {
   "id": 5933,
   "word": "DAYLIGHT",
   "pronunciations": "ˈdeɪˌlaɪt"
 },
 {
   "id": 5934,
   "word": "DEALS",
   "pronunciations": "ˈdiːlz"
 },
 {
   "id": 5935,
   "word": "DECREASE",
   "pronunciations": "dɪˈkriːs, ˈdiːˌkriːs"
 },
 {
   "id": 5936,
   "word": "DEEMED",
   "pronunciations": "ˈdiːmd"
 },
 {
   "id": 5937,
   "word": "DEFEATED",
   "pronunciations": "dɪˈfiːtəd, dɪˈfiːtɪd"
 },
 {
   "id": 5938,
   "word": "DELIBERATE",
   "pronunciations": "dɪˈlɪbɝət, dɪˈlɪbɝˌeɪt, dɪˈlɪbrət"
 },
 {
   "id": 5939,
   "word": "DENOMINATIONS",
   "pronunciations": "dɪˌnɔməˈneɪʃənz"
 },
 {
   "id": 5940,
   "word": "DESERTED",
   "pronunciations": "dɪˈzɝːtɪd"
 },
 {
   "id": 5941,
   "word": "DEVOTE",
   "pronunciations": "dɪˈvoʊt"
 },
 {
   "id": 5942,
   "word": "DIMENSION",
   "pronunciations": "dɪˈmɛnʃən"
 },
 {
   "id": 5943,
   "word": "DISAPPOINTED",
   "pronunciations": "ˌdɪsəˈpɔɪntɪd, ˌdɪsəˈpɔɪnɪd"
 },
 {
   "id": 5944,
   "word": "DISAPPOINTMENT",
   "pronunciations": "ˌdɪsəˈpɔɪntmənt"
 },
 {
   "id": 5945,
   "word": "DISAPPROVAL",
   "pronunciations": "dɪsəˈpruːvəl"
 },
 {
   "id": 5946,
   "word": "DISCOURAGED",
   "pronunciations": "dɪˈskɝːɪdʒd"
 },
 {
   "id": 5947,
   "word": "DISSOLVED",
   "pronunciations": "dɪˈzɑːlvd"
 },
 {
   "id": 5948,
   "word": "DISTINCTIONS",
   "pronunciations": "dɪˈstɪŋkʃənz"
 },
 {
   "id": 5949,
   "word": "DISTRESS",
   "pronunciations": "dɪˈstrɛs"
 },
 {
   "id": 5950,
   "word": "DIVISIONS",
   "pronunciations": "dɪˈvɪʒənz"
 },
 {
   "id": 5951,
   "word": "DOMINATION",
   "pronunciations": "ˌdɑːməˈneɪʃən"
 },
 {
   "id": 5952,
   "word": "DOORWAY",
   "pronunciations": "ˈdɔrˌweɪ"
 },
 {
   "id": 5953,
   "word": "DRAG",
   "pronunciations": "ˈdræg"
 },
 {
   "id": 5954,
   "word": "DRAGGED",
   "pronunciations": "ˈdrægd"
 },
 {
   "id": 5955,
   "word": "DRAGGING",
   "pronunciations": "ˈdrægɪŋ"
 },
 {
   "id": 5956,
   "word": "DRUMS",
   "pronunciations": "ˈdrʌmz"
 },
 {
   "id": 5957,
   "word": "DUG",
   "pronunciations": "ˈdʌg"
 },
 {
   "id": 5958,
   "word": "DUTCH",
   "pronunciations": "ˈdʌtʃ"
 },
 {
   "id": 5959,
   "word": "ELDER",
   "pronunciations": "ˈɛldɝ"
 },
 {
   "id": 5960,
   "word": "ELIMINATING",
   "pronunciations": "ɪˈlɪməˌneɪtɪŋ"
 },
 {
   "id": 5961,
   "word": "ELIZABETH",
   "pronunciations": "ɪˈlɪzəbəθ, ɪˈlɪzəbɪθ"
 },
 {
   "id": 5962,
   "word": "EMERGING",
   "pronunciations": "ɪˈmɝːdʒɪŋ, ˈiːmɝdʒɪŋ"
 },
 {
   "id": 5963,
   "word": "EMPLOYER",
   "pronunciations": "ɛmˈplɔɪɝ, ɪmˈplɔɪɝ"
 },
 {
   "id": 5964,
   "word": "ENGLISHMAN",
   "pronunciations": "ˈɪŋglɪʃmən"
 },
 {
   "id": 5965,
   "word": "ESSENCE",
   "pronunciations": "ˈɛsəns"
 },
 {
   "id": 5966,
   "word": "EUGENIA",
   "pronunciations": "ˌjuːˈdʒiːniːə"
 },
 {
   "id": 5967,
   "word": "EVENINGS",
   "pronunciations": "ˈiːvnɪŋz"
 },
 {
   "id": 5968,
   "word": "EXCELLENCE",
   "pronunciations": "ˈɛksələns"
 },
 {
   "id": 5969,
   "word": "EXECUTION",
   "pronunciations": "ˌɛksəˈkjuːʃən"
 },
 {
   "id": 5970,
   "word": "EXHAUSTED",
   "pronunciations": "ɪgˈzɔstɪd"
 },
 {
   "id": 5971,
   "word": "EXPEDITION",
   "pronunciations": "ˌɛkspəˈdɪʃən"
 },
 {
   "id": 5972,
   "word": "EXPLANATIONS",
   "pronunciations": "ˌɛkspləˈneɪʃənz"
 },
 {
   "id": 5973,
   "word": "EXPRESSIONS",
   "pronunciations": "ɪkˈsprɛʃənz"
 },
 {
   "id": 5974,
   "word": "FABRIC",
   "pronunciations": "ˈfæbrɪk"
 },
 {
   "id": 5975,
   "word": "FEASIBLE",
   "pronunciations": "ˈfiːzəbəl"
 },
 {
   "id": 5976,
   "word": "FEDERATION",
   "pronunciations": "ˌfɛdɝˈeɪʃən"
 },
 {
   "id": 5977,
   "word": "FLUIDS",
   "pronunciations": "ˈfluːədz, ˈfluːɪdz"
 },
 {
   "id": 5978,
   "word": "FOLDED",
   "pronunciations": "ˈfoʊldəd, ˈfoʊldɪd"
 },
 {
   "id": 5979,
   "word": "FORBIDDEN",
   "pronunciations": "ˈfɔrbɪdən, fɝrˈbɪdən"
 },
 {
   "id": 5980,
   "word": "FORGIVENESS",
   "pronunciations": "fɝˈgɪvnəs, fɔrˈgɪvnəs"
 },
 {
   "id": 5981,
   "word": "FOSTER",
   "pronunciations": "ˈfɑːstɝ"
 },
 {
   "id": 5982,
   "word": "FREEZING",
   "pronunciations": "ˈfriːzɪŋ"
 },
 {
   "id": 5983,
   "word": "FROMM",
   "pronunciations": "ˈfrɑːm"
 },
 {
   "id": 5984,
   "word": "GAINING",
   "pronunciations": "ˈgeɪnɪŋ"
 },
 {
   "id": 5985,
   "word": "GATES",
   "pronunciations": "ˈgeɪts"
 },
 {
   "id": 5986,
   "word": "GOVERNED",
   "pronunciations": "ˈgʌvɝnd"
 },
 {
   "id": 5987,
   "word": "GRAHAM",
   "pronunciations": "ˈgreɪəm, ˈgræm"
 },
 {
   "id": 5988,
   "word": "GUESSED",
   "pronunciations": "ˈgɛst"
 },
 {
   "id": 5989,
   "word": "HARDY'S",
   "pronunciations": "ˈhɑːrdiːz"
 },
 {
   "id": 5990,
   "word": "HASTILY",
   "pronunciations": "ˈheɪstəli"
 },
 {
   "id": 5991,
   "word": "HAVANA",
   "pronunciations": "həˈvænə"
 },
 {
   "id": 5992,
   "word": "HEAVIER",
   "pronunciations": "ˈhɛviːɝ"
 },
 {
   "id": 5993,
   "word": "HELIUM",
   "pronunciations": "ˈhiːliːəm"
 },
 {
   "id": 5994,
   "word": "HEY",
   "pronunciations": "ˈheɪ"
 },
 {
   "id": 5995,
   "word": "HIRE",
   "pronunciations": "ˈhaɪɝ, ˈhaɪr"
 },
 {
   "id": 5996,
   "word": "HOMERIC",
   "pronunciations": "hoʊˈmɛrɪk"
 },
 {
   "id": 5997,
   "word": "HONORS",
   "pronunciations": "ˈɑːnɝz"
 },
 {
   "id": 5998,
   "word": "HORRIBLE",
   "pronunciations": "ˈhɔrəbəl"
 },
 {
   "id": 5999,
   "word": "IMPORTS",
   "pronunciations": "ˌɪmˈpɔrts, ˈɪmˌpɔrts"
 },
 {
   "id": 6000,
   "word": "INDISPENSABLE",
   "pronunciations": "ˌɪndɪˈspɛnsəbəl"
 },
 {
   "id": 6001,
   "word": "INDUSTRY'S",
   "pronunciations": "ˈɪndəstriːz"
 },
 {
   "id": 6002,
   "word": "INTEND",
   "pronunciations": "ˌɪnˈtɛnd"
 },
 {
   "id": 6003,
   "word": "INTENSIVE",
   "pronunciations": "ˌɪnˈtɛnsɪv"
 },
 {
   "id": 6004,
   "word": "ISRAEL",
   "pronunciations": "ˈɪzriːəl, ˈɪzreɪl"
 },
 {
   "id": 6005,
   "word": "JAY",
   "pronunciations": "ˈdʒeɪ"
 },
 {
   "id": 6006,
   "word": "JERRY",
   "pronunciations": "ˈdʒɛri"
 },
 {
   "id": 6007,
   "word": "JOINING",
   "pronunciations": "ˈdʒɔɪnɪŋ"
 },
 {
   "id": 6008,
   "word": "JUANITA",
   "pronunciations": "wɑːˈniːtə, ˌdʒuːəˈniːtə"
 },
 {
   "id": 6009,
   "word": "JUDGED",
   "pronunciations": "ˈdʒʌdʒd"
 },
 {
   "id": 6010,
   "word": "JUDGING",
   "pronunciations": "ˈdʒʌdʒɪŋ"
 },
 {
   "id": 6011,
   "word": "KATIE",
   "pronunciations": "ˈkeɪti"
 },
 {
   "id": 6012,
   "word": "KICK",
   "pronunciations": "ˈkɪk"
 },
 {
   "id": 6013,
   "word": "KISSED",
   "pronunciations": "ˈkɪst"
 },
 {
   "id": 6014,
   "word": "KNOCK",
   "pronunciations": "ˈnɑːk"
 },
 {
   "id": 6015,
   "word": "LAGOON",
   "pronunciations": "ləˈguːn"
 },
 {
   "id": 6016,
   "word": "LANDED",
   "pronunciations": "ˈlændəd, ˈlændɪd"
 },
 {
   "id": 6017,
   "word": "LAWN",
   "pronunciations": "ˈlɔn"
 },
 {
   "id": 6018,
   "word": "LEANING",
   "pronunciations": "ˈliːnɪŋ"
 },
 {
   "id": 6019,
   "word": "LECTURES",
   "pronunciations": "ˈlɛktʃɝz"
 },
 {
   "id": 6020,
   "word": "LIBERALISM",
   "pronunciations": "ˈlɪˌbɝːəˌlɪzəm"
 },
 {
   "id": 6021,
   "word": "LITERAL",
   "pronunciations": "ˈlɪtɝəl"
 },
 {
   "id": 6022,
   "word": "LOSES",
   "pronunciations": "ˈluːzɪz"
 },
 {
   "id": 6023,
   "word": "LOVING",
   "pronunciations": "ˈlʌvɪŋ"
 },
 {
   "id": 6024,
   "word": "LUBLIN",
   "pronunciations": "ˈlʌblɪn"
 },
 {
   "id": 6025,
   "word": "LYRICS",
   "pronunciations": "ˈlɪrɪks"
 },
 {
   "id": 6026,
   "word": "MADAME",
   "pronunciations": "ˈmædəm, məˈdæm"
 },
 {
   "id": 6027,
   "word": "MANNERS",
   "pronunciations": "ˈmænɝz"
 },
 {
   "id": 6028,
   "word": "MARCHING",
   "pronunciations": "ˈmɑːrtʃɪŋ"
 },
 {
   "id": 6029,
   "word": "MEANINGLESS",
   "pronunciations": "ˈmiːnɪŋləs"
 },
 {
   "id": 6030,
   "word": "MEMORIES",
   "pronunciations": "ˈmɛmɝiːz"
 },
 {
   "id": 6031,
   "word": "MENTALLY",
   "pronunciations": "ˈmɛntəli, ˈmɛnəli"
 },
 {
   "id": 6032,
   "word": "MILEAGE",
   "pronunciations": "ˈmaɪlədʒ, ˈmaɪlɪdʒ"
 },
 {
   "id": 6033,
   "word": "MISERY",
   "pronunciations": "ˈmɪzɝi"
 },
 {
   "id": 6034,
   "word": "MOLDING",
   "pronunciations": "ˈmoʊldɪŋ"
 },
 {
   "id": 6035,
   "word": "MORTON",
   "pronunciations": "ˈmɔrtən"
 },
 {
   "id": 6036,
   "word": "NEEDLE",
   "pronunciations": "ˈniːdəl"
 },
 {
   "id": 6037,
   "word": "NEWEST",
   "pronunciations": "ˈnuːəst"
 },
 {
   "id": 6038,
   "word": "NORMAN",
   "pronunciations": "ˈnɔrmən"
 },
 {
   "id": 6039,
   "word": "NOVELIST",
   "pronunciations": "ˈnɑːvələst"
 },
 {
   "id": 6040,
   "word": "NUT",
   "pronunciations": "ˈnʌt"
 },
 {
   "id": 6041,
   "word": "OAK",
   "pronunciations": "ˈoʊk"
 },
 {
   "id": 6042,
   "word": "OILS",
   "pronunciations": "ˈɔɪlz"
 },
 {
   "id": 6043,
   "word": "ONION",
   "pronunciations": "ˈʌnjən"
 },
 {
   "id": 6044,
   "word": "OPERATES",
   "pronunciations": "ˈɑːpɝˌeɪts"
 },
 {
   "id": 6045,
   "word": "OPPONENT",
   "pronunciations": "əˈpoʊnənt"
 },
 {
   "id": 6046,
   "word": "OPPOSE",
   "pronunciations": "əˈpoʊz"
 },
 {
   "id": 6047,
   "word": "OPTIMISM",
   "pronunciations": "ˈɑːptɪˌmɪzəm"
 },
 {
   "id": 6048,
   "word": "OPTIMISTIC",
   "pronunciations": "ˌɑːptɪˈmɪstɪk"
 },
 {
   "id": 6049,
   "word": "ORIGINATED",
   "pronunciations": "ɝˈɪdʒəˌneɪtəd, ɔˈrɪdʒəˌneɪtɪd"
 },
 {
   "id": 6050,
   "word": "OWED",
   "pronunciations": "ˈoʊd"
 },
 {
   "id": 6051,
   "word": "PAINS",
   "pronunciations": "ˈpeɪnz"
 },
 {
   "id": 6052,
   "word": "PARENT",
   "pronunciations": "ˈpɛrənt"
 },
 {
   "id": 6053,
   "word": "PARTICIPATING",
   "pronunciations": "pɑːrˈtɪsəˌpeɪtɪŋ"
 },
 {
   "id": 6054,
   "word": "PENETRATION",
   "pronunciations": "ˌpɛnəˈtreɪʃən"
 },
 {
   "id": 6055,
   "word": "PERSONALITIES",
   "pronunciations": "ˌpɝːsəˈnælɪtiːz"
 },
 {
   "id": 6056,
   "word": "PETITION",
   "pronunciations": "pəˈtɪʃən"
 },
 {
   "id": 6057,
   "word": "PHYSICIAN",
   "pronunciations": "fəˈzɪʃən"
 },
 {
   "id": 6058,
   "word": "PICNIC",
   "pronunciations": "ˈpɪkˌnɪk"
 },
 {
   "id": 6059,
   "word": "PILL",
   "pronunciations": "ˈpɪl"
 },
 {
   "id": 6060,
   "word": "PLACEMENT",
   "pronunciations": "ˈpleɪsmənt"
 },
 {
   "id": 6061,
   "word": "PLUNGED",
   "pronunciations": "ˈplʌndʒd"
 },
 {
   "id": 6062,
   "word": "POLICEMEN",
   "pronunciations": "pəˈliːsmɪn"
 },
 {
   "id": 6063,
   "word": "PONT'S",
   "pronunciations": "ˈpɑːnts"
 },
 {
   "id": 6064,
   "word": "POOLS",
   "pronunciations": "ˈpuːlz"
 },
 {
   "id": 6065,
   "word": "POTATO",
   "pronunciations": "pəˈteɪˌtoʊ"
 },
 {
   "id": 6066,
   "word": "POTATOES",
   "pronunciations": "pəˈteɪtoʊz"
 },
 {
   "id": 6067,
   "word": "POWELL",
   "pronunciations": "ˈpɑːwɛl"
 },
 {
   "id": 6068,
   "word": "PRACTICING",
   "pronunciations": "ˈpræktɪsɪŋ"
 },
 {
   "id": 6069,
   "word": "PRECEDED",
   "pronunciations": "prɪˈsiːdɪd, priːˈsiːdəd, priːˈsiːdɪd"
 },
 {
   "id": 6070,
   "word": "PREPARATIONS",
   "pronunciations": "ˌprɛpɝˈeɪʃənz"
 },
 {
   "id": 6071,
   "word": "PREVENTIVE",
   "pronunciations": "prɪˈvɛntɪv, priːˈvɛntɪv, prɪˈvɛnɪv, priːˈvɛnɪv"
 },
 {
   "id": 6072,
   "word": "PROFILE",
   "pronunciations": "ˈproʊˌfaɪl"
 },
 {
   "id": 6073,
   "word": "PROVINCE",
   "pronunciations": "ˈprɑːvəns, ˈprɑːvɪns"
 },
 {
   "id": 6074,
   "word": "QUALIFY",
   "pronunciations": "ˈkwɑːləˌfaɪ"
 },
 {
   "id": 6075,
   "word": "QUIT",
   "pronunciations": "ˈkwɪt"
 },
 {
   "id": 6076,
   "word": "RANCHER",
   "pronunciations": "ˈræntʃɝ"
 },
 {
   "id": 6077,
   "word": "RAZOR",
   "pronunciations": "ˈreɪzɝ"
 },
 {
   "id": 6078,
   "word": "REACT",
   "pronunciations": "riːˈækt"
 },
 {
   "id": 6079,
   "word": "READINESS",
   "pronunciations": "ˈrɛdiːnəs"
 },
 {
   "id": 6080,
   "word": "REALITIES",
   "pronunciations": "ˌriːˈæləˌtiːz"
 },
 {
   "id": 6081,
   "word": "REFUSAL",
   "pronunciations": "rəˈfjuːzəl, rɪˈfjuːzəl"
 },
 {
   "id": 6082,
   "word": "RELUCTANT",
   "pronunciations": "rɪˈlʌktənt, riːˈlʌktənt"
 },
 {
   "id": 6083,
   "word": "REMIND",
   "pronunciations": "riːˈmaɪnd"
 },
 {
   "id": 6084,
   "word": "RENTAL",
   "pronunciations": "ˈrɛntəl"
 },
 {
   "id": 6085,
   "word": "RESCUE",
   "pronunciations": "ˈrɛskjuː"
 },
 {
   "id": 6086,
   "word": "RESTRICTED",
   "pronunciations": "riːˈstrɪktəd, riːˈstrɪktɪd"
 },
 {
   "id": 6087,
   "word": "REWARD",
   "pronunciations": "rɪˈwɔrd, riːˈwɔrd"
 },
 {
   "id": 6088,
   "word": "ROGER",
   "pronunciations": "ˈrɑːdʒɝ"
 },
 {
   "id": 6089,
   "word": "ROPE",
   "pronunciations": "ˈroʊp"
 },
 {
   "id": 6090,
   "word": "ROUNDED",
   "pronunciations": "ˈraʊndəd, ˈraʊndɪd"
 },
 {
   "id": 6091,
   "word": "RUBBER",
   "pronunciations": "ˈrʌbɝ"
 },
 {
   "id": 6092,
   "word": "RYAN",
   "pronunciations": "ˈraɪən"
 },
 {
   "id": 6093,
   "word": "SCHOLAR",
   "pronunciations": "ˈskɑːlɝ"
 },
 {
   "id": 6094,
   "word": "SCORED",
   "pronunciations": "ˈskɔrd"
 },
 {
   "id": 6095,
   "word": "SCORES",
   "pronunciations": "ˈskɔrz"
 },
 {
   "id": 6096,
   "word": "SEATS",
   "pronunciations": "ˈsiːts"
 },
 {
   "id": 6097,
   "word": "SEGREGATED",
   "pronunciations": "ˈsɛgrəˌgeɪtɪd"
 },
 {
   "id": 6098,
   "word": "SELDEN",
   "pronunciations": "ˈsɛldən"
 },
 {
   "id": 6099,
   "word": "SELECTING",
   "pronunciations": "səˈlɛktɪŋ"
 },
 {
   "id": 6100,
   "word": "SELECTIONS",
   "pronunciations": "səˈlɛkʃənz"
 },
 {
   "id": 6101,
   "word": "SELF-HELP",
   "pronunciations": "ˈsɛlfˈhɛlp"
 },
 {
   "id": 6102,
   "word": "SENSES",
   "pronunciations": "ˈsɛnsɪz"
 },
 {
   "id": 6103,
   "word": "SENTIMENTAL",
   "pronunciations": "ˌsɛntəˈmɛntəl, ˌsɛnəˈmɛntəl, ˌsɛntəˈmɛnəl, ˌsɛnəˈmɛnəl"
 },
 {
   "id": 6104,
   "word": "SHEER",
   "pronunciations": "ˈʃɪr"
 },
 {
   "id": 6105,
   "word": "SHOWER",
   "pronunciations": "ˈʃaʊɝ"
 },
 {
   "id": 6106,
   "word": "SIGHTS",
   "pronunciations": "ˈsaɪts"
 },
 {
   "id": 6107,
   "word": "SILLY",
   "pronunciations": "ˈsɪli"
 },
 {
   "id": 6108,
   "word": "SINCERE",
   "pronunciations": "sɪnˈsɪr"
 },
 {
   "id": 6109,
   "word": "SIZABLE",
   "pronunciations": "ˈsaɪzəbəl"
 },
 {
   "id": 6110,
   "word": "SLOAN",
   "pronunciations": "ˈsloʊn"
 },
 {
   "id": 6111,
   "word": "SMASHED",
   "pronunciations": "ˈsmæʃt"
 },
 {
   "id": 6112,
   "word": "SOCIALLY",
   "pronunciations": "ˈsoʊʃəli"
 },
 {
   "id": 6113,
   "word": "SOCIOLOGY",
   "pronunciations": "ˌsoʊsiːˈɑːlədʒi"
 },
 {
   "id": 6114,
   "word": "SOILS",
   "pronunciations": "ˈsɔɪlz"
 },
 {
   "id": 6115,
   "word": "STALIN",
   "pronunciations": "ˈstɑːlən"
 },
 {
   "id": 6116,
   "word": "STATURE",
   "pronunciations": "ˈstætʃɝ"
 },
 {
   "id": 6117,
   "word": "STEINBERG",
   "pronunciations": "ˈstaɪnbɝg"
 },
 {
   "id": 6118,
   "word": "STEVENSON",
   "pronunciations": "ˈstiːvənsən"
 },
 {
   "id": 6119,
   "word": "STIMULUS",
   "pronunciations": "ˈstɪmjələs"
 },
 {
   "id": 6120,
   "word": "STIRRED",
   "pronunciations": "ˈstɝːd"
 },
 {
   "id": 6121,
   "word": "STOVE",
   "pronunciations": "ˈstoʊv"
 },
 {
   "id": 6122,
   "word": "STRAW",
   "pronunciations": "ˈstrɔ"
 },
 {
   "id": 6123,
   "word": "SUBSTITUTED",
   "pronunciations": "ˈsʌbstəˌtuːtəd"
 },
 {
   "id": 6124,
   "word": "SUCCEED",
   "pronunciations": "səkˈsiːd"
 },
 {
   "id": 6125,
   "word": "SUPPORTS",
   "pronunciations": "səˈpɔrts"
 },
 {
   "id": 6126,
   "word": "SUSTAINED",
   "pronunciations": "səˈsteɪnd"
 },
 {
   "id": 6127,
   "word": "SWEEP",
   "pronunciations": "ˈswiːp"
 },
 {
   "id": 6128,
   "word": "SWIFTLY",
   "pronunciations": "ˈswɪftli"
 },
 {
   "id": 6129,
   "word": "SWIM",
   "pronunciations": "ˈswɪm"
 },
 {
   "id": 6130,
   "word": "TAPPET",
   "pronunciations": "ˈtæpət"
 },
 {
   "id": 6131,
   "word": "TENNIS",
   "pronunciations": "ˈtɛnəs, ˈtɛnɪs"
 },
 {
   "id": 6132,
   "word": "TENSE",
   "pronunciations": "ˈtɛns"
 },
 {
   "id": 6133,
   "word": "TENTATIVE",
   "pronunciations": "ˈtɛntətɪv"
 },
 {
   "id": 6134,
   "word": "TERMED",
   "pronunciations": "ˈtɝːmd"
 },
 {
   "id": 6135,
   "word": "TEXTILES",
   "pronunciations": "ˈtɛkˌstaɪlz"
 },
 {
   "id": 6136,
   "word": "TEXTURE",
   "pronunciations": "ˈtɛkstʃɝ"
 },
 {
   "id": 6137,
   "word": "THREAD",
   "pronunciations": "ˈθrɛd"
 },
 {
   "id": 6138,
   "word": "THRESHOLD",
   "pronunciations": "ˈθrɛˌʃoʊld"
 },
 {
   "id": 6139,
   "word": "TIES",
   "pronunciations": "ˈtaɪz"
 },
 {
   "id": 6140,
   "word": "TIGHTLY",
   "pronunciations": "ˈtaɪtli"
 },
 {
   "id": 6141,
   "word": "TORE",
   "pronunciations": "ˈtɔr"
 },
 {
   "id": 6142,
   "word": "TOUCHING",
   "pronunciations": "ˈtʌtʃɪŋ"
 },
 {
   "id": 6143,
   "word": "TRICK",
   "pronunciations": "ˈtrɪk"
 },
 {
   "id": 6144,
   "word": "TURNPIKE",
   "pronunciations": "ˈtɝːnˌpaɪk"
 },
 {
   "id": 6145,
   "word": "UNDERWATER",
   "pronunciations": "ˈʌndɝˌwɔtɝ"
 },
 {
   "id": 6146,
   "word": "UNPLEASANT",
   "pronunciations": "ənˈplɛzənt"
 },
 {
   "id": 6147,
   "word": "VALIDITY",
   "pronunciations": "vəˈlɪdɪti"
 },
 {
   "id": 6148,
   "word": "VANISHED",
   "pronunciations": "ˈvænɪʃt"
 },
 {
   "id": 6149,
   "word": "VERDICT",
   "pronunciations": "ˈvɝːdɪkt"
 },
 {
   "id": 6150,
   "word": "VIRTUES",
   "pronunciations": "ˈvɝːtʃuːz"
 },
 {
   "id": 6151,
   "word": "WADDELL",
   "pronunciations": "wɑːˈdɛl"
 },
 {
   "id": 6152,
   "word": "WIFE'S",
   "pronunciations": "ˈwaɪfs"
 },
 {
   "id": 6153,
   "word": "WRITINGS",
   "pronunciations": "ˈraɪtɪŋz"
 },
 {
   "id": 6154,
   "word": "X",
   "pronunciations": "ˈɛks"
 },
 {
   "id": 6155,
   "word": "ACCOMMODATE",
   "pronunciations": "əˈkɑːməˌdeɪt"
 },
 {
   "id": 6156,
   "word": "ADMINISTERED",
   "pronunciations": "ədˈmɪnɪstɝd"
 },
 {
   "id": 6157,
   "word": "ADVENTURE",
   "pronunciations": "ædˈvɛntʃɝ, ədˈvɛntʃɝ"
 },
 {
   "id": 6158,
   "word": "ADVENTURES",
   "pronunciations": "ædˈvɛntʃɝz"
 },
 {
   "id": 6159,
   "word": "AFFIXED",
   "pronunciations": "əˈfɪkst"
 },
 {
   "id": 6160,
   "word": "AFTERWARDS",
   "pronunciations": "ˈæftɝwɝdz"
 },
 {
   "id": 6161,
   "word": "ALICE",
   "pronunciations": "ˈælɪs"
 },
 {
   "id": 6162,
   "word": "AMENDED",
   "pronunciations": "əˈmɛndɪd"
 },
 {
   "id": 6163,
   "word": "AMID",
   "pronunciations": "əˈmɪd"
 },
 {
   "id": 6164,
   "word": "AMUSING",
   "pronunciations": "əˈmjuːzɪŋ"
 },
 {
   "id": 6165,
   "word": "ANACONDA",
   "pronunciations": "ˌænəˈkɑːndə"
 },
 {
   "id": 6166,
   "word": "ANALYZED",
   "pronunciations": "ˈænəˌlaɪzd"
 },
 {
   "id": 6167,
   "word": "ANNUALLY",
   "pronunciations": "ˈænjuːəli"
 },
 {
   "id": 6168,
   "word": "ANSWERING",
   "pronunciations": "ˈænsɝɪŋ"
 },
 {
   "id": 6169,
   "word": "AP",
   "pronunciations": "ˌeɪˈpiː"
 },
 {
   "id": 6170,
   "word": "APPEALING",
   "pronunciations": "əˈpiːlɪŋ"
 },
 {
   "id": 6171,
   "word": "APPEARANCES",
   "pronunciations": "əˈpɪrənsəz"
 },
 {
   "id": 6172,
   "word": "APPLAUSE",
   "pronunciations": "əˈplɔz"
 },
 {
   "id": 6173,
   "word": "APPROVE",
   "pronunciations": "əˈpruːv"
 },
 {
   "id": 6174,
   "word": "AQUEOUS",
   "pronunciations": "ˈeɪkwiːəs"
 },
 {
   "id": 6175,
   "word": "ARISES",
   "pronunciations": "ɝˈaɪzɪz"
 },
 {
   "id": 6176,
   "word": "ARROW",
   "pronunciations": "ˈæroʊ, ˈɛroʊ"
 },
 {
   "id": 6177,
   "word": "ATTACH",
   "pronunciations": "əˈtætʃ"
 },
 {
   "id": 6178,
   "word": "AUDITORIUM",
   "pronunciations": "ˌɔdəˈtɔriːəm"
 },
 {
   "id": 6179,
   "word": "BACTERIAL",
   "pronunciations": "bækˈtɪriːəl"
 },
 {
   "id": 6180,
   "word": "BARI",
   "pronunciations": "ˈbɑːri"
 },
 {
   "id": 6181,
   "word": "BARK",
   "pronunciations": "ˈbɑːrk"
 },
 {
   "id": 6182,
   "word": "BASTARDS",
   "pronunciations": "ˈbæstɝdz"
 },
 {
   "id": 6183,
   "word": "BEACHES",
   "pronunciations": "ˈbiːtʃəz, ˈbiːtʃɪz"
 },
 {
   "id": 6184,
   "word": "BELGIAN",
   "pronunciations": "ˈbɛldʒən"
 },
 {
   "id": 6185,
   "word": "BELIEVING",
   "pronunciations": "bɪˈliːvɪŋ"
 },
 {
   "id": 6186,
   "word": "BEOWULF",
   "pronunciations": "ˈbeɪəˌwʊlf"
 },
 {
   "id": 6187,
   "word": "BEVERLY",
   "pronunciations": "ˈbɛvɝli"
 },
 {
   "id": 6188,
   "word": "BLANK",
   "pronunciations": "ˈblæŋk"
 },
 {
   "id": 6189,
   "word": "BORED",
   "pronunciations": "ˈbɔrd"
 },
 {
   "id": 6190,
   "word": "BORROWED",
   "pronunciations": "ˈbɑːˌroʊd"
 },
 {
   "id": 6191,
   "word": "BOTHERED",
   "pronunciations": "ˈbɑːðɝd"
 },
 {
   "id": 6192,
   "word": "BOUNDARIES",
   "pronunciations": "ˈbaʊndɝiːz, ˈbaʊndriːz"
 },
 {
   "id": 6193,
   "word": "BOXES",
   "pronunciations": "ˈbɑːksəz, ˈbɑːksɪz"
 },
 {
   "id": 6194,
   "word": "BRACE",
   "pronunciations": "ˈbreɪs"
 },
 {
   "id": 6195,
   "word": "BREEZE",
   "pronunciations": "ˈbriːz"
 },
 {
   "id": 6196,
   "word": "BUBBLES",
   "pronunciations": "ˈbʌbəlz"
 },
 {
   "id": 6197,
   "word": "BULL",
   "pronunciations": "ˈbʊl"
 },
 {
   "id": 6198,
   "word": "BUSH",
   "pronunciations": "ˈbʊʃ"
 },
 {
   "id": 6199,
   "word": "CANNERY",
   "pronunciations": "ˈkænɝi"
 },
 {
   "id": 6200,
   "word": "CAPABILITY",
   "pronunciations": "ˌkeɪpəˈbɪləti"
 },
 {
   "id": 6201,
   "word": "CAPITALISM",
   "pronunciations": "ˈkæpɪtəˌlɪzəm"
 },
 {
   "id": 6202,
   "word": "CAREERS",
   "pronunciations": "kɝˈɪrz"
 },
 {
   "id": 6203,
   "word": "CARVED",
   "pronunciations": "ˈkɑːrvd"
 },
 {
   "id": 6204,
   "word": "CELEBRATED",
   "pronunciations": "ˈsɛləˌbreɪtɪd"
 },
 {
   "id": 6205,
   "word": "CENTERED",
   "pronunciations": "ˈsɛntɝd"
 },
 {
   "id": 6206,
   "word": "CEREMONIES",
   "pronunciations": "ˈsɛrəˌmoʊniːz"
 },
 {
   "id": 6207,
   "word": "CHANCELLOR",
   "pronunciations": "ˈtʃænsəlɝ, ˈtʃænslɝ"
 },
 {
   "id": 6208,
   "word": "CHARCOAL",
   "pronunciations": "ˈtʃɑːrˌkoʊl"
 },
 {
   "id": 6209,
   "word": "CHILL",
   "pronunciations": "ˈtʃɪl"
 },
 {
   "id": 6210,
   "word": "CHUCK",
   "pronunciations": "ˈtʃʌk"
 },
 {
   "id": 6211,
   "word": "CLASSIFIED",
   "pronunciations": "ˈklæsəˌfaɪd"
 },
 {
   "id": 6212,
   "word": "CLIMAX",
   "pronunciations": "ˈklaɪˌmæks"
 },
 {
   "id": 6213,
   "word": "CLUNG",
   "pronunciations": "ˈklʌŋ"
 },
 {
   "id": 6214,
   "word": "COLUMBUS",
   "pronunciations": "kəˈlʌmbəs"
 },
 {
   "id": 6215,
   "word": "COMPLAINT",
   "pronunciations": "kəmˈpleɪnt"
 },
 {
   "id": 6216,
   "word": "COMPLEXITY",
   "pronunciations": "kəmˈplɛksəti, kəmˈplɛksɪti"
 },
 {
   "id": 6217,
   "word": "CONCEIVE",
   "pronunciations": "kənˈsiːv"
 },
 {
   "id": 6218,
   "word": "CONDITIONING",
   "pronunciations": "kənˈdɪʃənɪŋ"
 },
 {
   "id": 6219,
   "word": "CONFEDERATE",
   "pronunciations": "kənˈfɛdɝət, kənˈfɛdɝˌeɪt"
 },
 {
   "id": 6220,
   "word": "CONGREGATIONAL",
   "pronunciations": "ˌkɑːŋgrəˈgeɪʃənəl"
 },
 {
   "id": 6221,
   "word": "CONJUGATES",
   "pronunciations": "ˌkɑːndʒəˈgeɪts, ˈkɑːndʒəˌgeɪts"
 },
 {
   "id": 6222,
   "word": "CONVICTED",
   "pronunciations": "kənˈvɪktəd"
 },
 {
   "id": 6223,
   "word": "COORDINATED",
   "pronunciations": "koʊˈɔrdəneɪtɪd"
 },
 {
   "id": 6224,
   "word": "CORRUPTION",
   "pronunciations": "kɝˈʌpʃən"
 },
 {
   "id": 6225,
   "word": "COUNTLESS",
   "pronunciations": "ˈkaʊntləs"
 },
 {
   "id": 6226,
   "word": "COUNTS",
   "pronunciations": "ˈkaʊnts"
 },
 {
   "id": 6227,
   "word": "COUPLED",
   "pronunciations": "ˈkʌpəld"
 },
 {
   "id": 6228,
   "word": "CREATOR",
   "pronunciations": "kriːˈeɪtɝ"
 },
 {
   "id": 6229,
   "word": "CREEK",
   "pronunciations": "ˈkriːk"
 },
 {
   "id": 6230,
   "word": "CRIMES",
   "pronunciations": "ˈkraɪmz"
 },
 {
   "id": 6231,
   "word": "CRITICIZED",
   "pronunciations": "ˈkrɪtəˌsaɪzd"
 },
 {
   "id": 6232,
   "word": "CUPS",
   "pronunciations": "ˈkʌps"
 },
 {
   "id": 6233,
   "word": "CUSTOM",
   "pronunciations": "ˈkʌstəm"
 },
 {
   "id": 6234,
   "word": "CUSTOMARY",
   "pronunciations": "ˈkʌstəˌmɛri"
 },
 {
   "id": 6235,
   "word": "DANIEL",
   "pronunciations": "ˈdænjəl"
 },
 {
   "id": 6236,
   "word": "DARED",
   "pronunciations": "ˈdɛrd"
 },
 {
   "id": 6237,
   "word": "DAUGHTERS",
   "pronunciations": "ˈdɔtɝz"
 },
 {
   "id": 6238,
   "word": "DEBUT",
   "pronunciations": "deɪˈbjuː, ˈdeɪbjuː"
 },
 {
   "id": 6239,
   "word": "DECAY",
   "pronunciations": "dɪˈkeɪ"
 },
 {
   "id": 6240,
   "word": "DECOMPOSITION",
   "pronunciations": "ˌdiːkəmpoʊˈzɪʃən, ˌdiːkəmpəˈzɪʃən"
 },
 {
   "id": 6241,
   "word": "DESIGNERS",
   "pronunciations": "dɪˈzaɪnɝz"
 },
 {
   "id": 6242,
   "word": "DETERMINES",
   "pronunciations": "dəˈtɝːmənz, dɪˈtɝːmənz"
 },
 {
   "id": 6243,
   "word": "DEVIATION",
   "pronunciations": "ˌdiːviːˈeɪʃən"
 },
 {
   "id": 6244,
   "word": "DIANE",
   "pronunciations": "daɪˈæn"
 },
 {
   "id": 6245,
   "word": "DICE",
   "pronunciations": "ˈdaɪs"
 },
 {
   "id": 6246,
   "word": "DISCLOSED",
   "pronunciations": "dɪsˈkloʊzd"
 },
 {
   "id": 6247,
   "word": "DISCRETION",
   "pronunciations": "dɪˈskrɛʃən"
 },
 {
   "id": 6248,
   "word": "DISLIKE",
   "pronunciations": "dɪˈslaɪk"
 },
 {
   "id": 6249,
   "word": "DISMISSED",
   "pronunciations": "dɪˈsmɪst"
 },
 {
   "id": 6250,
   "word": "DIVIDE",
   "pronunciations": "dɪˈvaɪd"
 },
 {
   "id": 6251,
   "word": "DOMINICAN",
   "pronunciations": "dəˈmɪnəkən"
 },
 {
   "id": 6252,
   "word": "DRAWS",
   "pronunciations": "ˈdrɔz"
 },
 {
   "id": 6253,
   "word": "DRIVEWAY",
   "pronunciations": "ˈdraɪvˌweɪ"
 },
 {
   "id": 6254,
   "word": "EDYTHE",
   "pronunciations": "ˈɛdaɪð"
 },
 {
   "id": 6255,
   "word": "EGYPT",
   "pronunciations": "ˈiːdʒəpt, ˈiːdʒɪpt"
 },
 {
   "id": 6256,
   "word": "EICHMANN",
   "pronunciations": "ˈaɪkmən"
 },
 {
   "id": 6257,
   "word": "ELEGANT",
   "pronunciations": "ˈɛləgənt"
 },
 {
   "id": 6258,
   "word": "ELIGIBLE",
   "pronunciations": "ˈɛlədʒəbəl, ˈɛlɪdʒəbəl"
 },
 {
   "id": 6259,
   "word": "EMANCIPATION",
   "pronunciations": "ɪˌmænsəˈpeɪʃən"
 },
 {
   "id": 6260,
   "word": "EMORY",
   "pronunciations": "ˈɛmɝi"
 },
 {
   "id": 6261,
   "word": "ENCOURAGEMENT",
   "pronunciations": "ɛnˈkɝːɪdʒmənt"
 },
 {
   "id": 6262,
   "word": "ENGAGE",
   "pronunciations": "ɪnˈgeɪdʒ"
 },
 {
   "id": 6263,
   "word": "ENTERPRISES",
   "pronunciations": "ˈɛntɝˌpraɪzɪz, ˈɛnɝˌpraɪzɪz"
 },
 {
   "id": 6264,
   "word": "ENTERTAIN",
   "pronunciations": "ˌɛntɝˈteɪn, ˌɛnɝˈteɪn"
 },
 {
   "id": 6265,
   "word": "EVOLUTION",
   "pronunciations": "ˌɛvəˈluːʃən, ˌiːvəˈluːʃən, ˌɛvoʊˈluːʃən, ˌiːvoʊˈluːʃən"
 },
 {
   "id": 6266,
   "word": "EXAMINER",
   "pronunciations": "ɪgˈzæmənɝ"
 },
 {
   "id": 6267,
   "word": "EXCLAIMED",
   "pronunciations": "ɪksˈkleɪmd"
 },
 {
   "id": 6268,
   "word": "EXECUTED",
   "pronunciations": "ˈɛksəˌkjuːtɪd"
 },
 {
   "id": 6269,
   "word": "FAILS",
   "pronunciations": "ˈfeɪlz"
 },
 {
   "id": 6270,
   "word": "FANTASY",
   "pronunciations": "ˈfæntəsi, ˈfænəsi"
 },
 {
   "id": 6271,
   "word": "FAREWELL",
   "pronunciations": "ˌfɛrˈwɛl"
 },
 {
   "id": 6272,
   "word": "FASTENED",
   "pronunciations": "ˈfæsənd"
 },
 {
   "id": 6273,
   "word": "FAVORABLY",
   "pronunciations": "ˈfeɪvɝəbli, ˈfeɪvrəbli"
 },
 {
   "id": 6274,
   "word": "FEARED",
   "pronunciations": "ˈfɪrd"
 },
 {
   "id": 6275,
   "word": "FEATHERS",
   "pronunciations": "ˈfɛðɝz"
 },
 {
   "id": 6276,
   "word": "FISTS",
   "pronunciations": "ˈfɪsts"
 },
 {
   "id": 6277,
   "word": "FIX",
   "pronunciations": "ˈfɪks"
 },
 {
   "id": 6278,
   "word": "FLAMES",
   "pronunciations": "ˈfleɪmz"
 },
 {
   "id": 6279,
   "word": "FLIGHTS",
   "pronunciations": "ˈflaɪts"
 },
 {
   "id": 6280,
   "word": "FLUNG",
   "pronunciations": "ˈflʌŋ"
 },
 {
   "id": 6281,
   "word": "FORK",
   "pronunciations": "ˈfɔrk"
 },
 {
   "id": 6282,
   "word": "FOUNDATIONS",
   "pronunciations": "faʊnˈdeɪʃənz"
 },
 {
   "id": 6283,
   "word": "FRAMED",
   "pronunciations": "ˈfreɪmd"
 },
 {
   "id": 6284,
   "word": "FRIGHTENING",
   "pronunciations": "ˈfraɪtənɪŋ, ˈfraɪtnɪŋ"
 },
 {
   "id": 6285,
   "word": "FRUITS",
   "pronunciations": "ˈfruːts"
 },
 {
   "id": 6286,
   "word": "GARTH",
   "pronunciations": "ˈgɑːrθ"
 },
 {
   "id": 6287,
   "word": "GENERATOR",
   "pronunciations": "ˈdʒɛnɝˌeɪtɝ"
 },
 {
   "id": 6288,
   "word": "GLOOM",
   "pronunciations": "ˈgluːm"
 },
 {
   "id": 6289,
   "word": "GODS",
   "pronunciations": "ˈgɑːdz"
 },
 {
   "id": 6290,
   "word": "GOVERNOR'S",
   "pronunciations": "ˈgʌvɝnɝz"
 },
 {
   "id": 6291,
   "word": "GRADIENT",
   "pronunciations": "ˈgreɪdiːənt"
 },
 {
   "id": 6292,
   "word": "GRIM",
   "pronunciations": "ˈgrɪm"
 },
 {
   "id": 6293,
   "word": "GROVE",
   "pronunciations": "ˈgroʊv"
 },
 {
   "id": 6294,
   "word": "GUM",
   "pronunciations": "ˈgʌm"
 },
 {
   "id": 6295,
   "word": "HABITAT",
   "pronunciations": "ˈhæbəˌtæt"
 },
 {
   "id": 6296,
   "word": "HARLEM",
   "pronunciations": "ˈhɑːrləm"
 },
 {
   "id": 6297,
   "word": "HATS",
   "pronunciations": "ˈhæts"
 },
 {
   "id": 6298,
   "word": "HAWK",
   "pronunciations": "ˈhɔk"
 },
 {
   "id": 6299,
   "word": "HEAP",
   "pronunciations": "ˈhiːp"
 },
 {
   "id": 6300,
   "word": "HEATER",
   "pronunciations": "ˈhiːtɝ"
 },
 {
   "id": 6301,
   "word": "HEMISPHERE",
   "pronunciations": "ˈhɛmɪsˌfɪr"
 },
 {
   "id": 6302,
   "word": "HODGES",
   "pronunciations": "ˈhɑːdʒɪz"
 },
 {
   "id": 6303,
   "word": "HOPELESS",
   "pronunciations": "ˈhoʊpləs"
 },
 {
   "id": 6304,
   "word": "HUSBANDS",
   "pronunciations": "ˈhʌzbəndz"
 },
 {
   "id": 6305,
   "word": "ILIAD",
   "pronunciations": "ˈɪliːəd"
 },
 {
   "id": 6306,
   "word": "ILLUMINATED",
   "pronunciations": "ˌɪˈluːməˌneɪtəd"
 },
 {
   "id": 6307,
   "word": "IMMENSE",
   "pronunciations": "ˌɪˈmɛns"
 },
 {
   "id": 6308,
   "word": "IMPERSONAL",
   "pronunciations": "ˌɪmˈpɝːsənəl"
 },
 {
   "id": 6309,
   "word": "INCIDENTALLY",
   "pronunciations": "ˌɪnsɪˈdɛntəli, ˌɪnsɪˈdɛntli"
 },
 {
   "id": 6310,
   "word": "INFLUENCES",
   "pronunciations": "ˈɪnˌfluːənsɪz"
 },
 {
   "id": 6311,
   "word": "INFLUENTIAL",
   "pronunciations": "ˌɪnfluːˈɛnʃəl"
 },
 {
   "id": 6312,
   "word": "INSECT",
   "pronunciations": "ˈɪnˌsɛkt"
 },
 {
   "id": 6313,
   "word": "INSTINCT",
   "pronunciations": "ˈɪnstɪŋkt"
 },
 {
   "id": 6314,
   "word": "INTACT",
   "pronunciations": "ˌɪnˈtækt"
 },
 {
   "id": 6315,
   "word": "INTENT",
   "pronunciations": "ˌɪnˈtɛnt"
 },
 {
   "id": 6316,
   "word": "INTERSTATE",
   "pronunciations": "ˌɪntɝˈsteɪt"
 },
 {
   "id": 6317,
   "word": "INVITATIONS",
   "pronunciations": "ˌɪnvɪˈteɪʃənz"
 },
 {
   "id": 6318,
   "word": "IRRELEVANT",
   "pronunciations": "ˌɪˈrɛləvənt"
 },
 {
   "id": 6319,
   "word": "JESSICA",
   "pronunciations": "ˈdʒɛsɪkə"
 },
 {
   "id": 6320,
   "word": "JOAN",
   "pronunciations": "ˈdʒoʊn"
 },
 {
   "id": 6321,
   "word": "KENT",
   "pronunciations": "ˈkɛnt"
 },
 {
   "id": 6322,
   "word": "KENTUCKY",
   "pronunciations": "kənˈtʌki"
 },
 {
   "id": 6323,
   "word": "KHRUSHCHEV'S",
   "pronunciations": "ˈkruːsˌtʃɛvz, ˈkruːsˌtʃɔfs"
 },
 {
   "id": 6324,
   "word": "KING'S",
   "pronunciations": "ˈkɪŋz"
 },
 {
   "id": 6325,
   "word": "LE",
   "pronunciations": "lə"
 },
 {
   "id": 6326,
   "word": "LEAP",
   "pronunciations": "ˈliːp"
 },
 {
   "id": 6327,
   "word": "LEND",
   "pronunciations": "ˈlɛnd"
 },
 {
   "id": 6328,
   "word": "LEVER",
   "pronunciations": "ˈlɛvɝ, ˈliːvɝ"
 },
 {
   "id": 6329,
   "word": "LIGHTNING",
   "pronunciations": "ˈlaɪtnɪŋ"
 },
 {
   "id": 6330,
   "word": "MANPOWER",
   "pronunciations": "ˈmænˌpaʊɝ"
 },
 {
   "id": 6331,
   "word": "MARTY",
   "pronunciations": "ˈmɑːrti"
 },
 {
   "id": 6332,
   "word": "MERITS",
   "pronunciations": "ˈmɛrəts, ˈmɛrɪts"
 },
 {
   "id": 6333,
   "word": "MILD",
   "pronunciations": "ˈmaɪld"
 },
 {
   "id": 6334,
   "word": "MINERALS",
   "pronunciations": "ˈmɪnɝəlz, ˈmɪnrəlz"
 },
 {
   "id": 6335,
   "word": "MIST",
   "pronunciations": "ˈmɪst"
 },
 {
   "id": 6336,
   "word": "MOMENTUM",
   "pronunciations": "moʊˈmɛntəm"
 },
 {
   "id": 6337,
   "word": "MONOPOLY",
   "pronunciations": "məˈnɑːpəli"
 },
 {
   "id": 6338,
   "word": "NAILS",
   "pronunciations": "ˈneɪlz"
 },
 {
   "id": 6339,
   "word": "NASSAU",
   "pronunciations": "ˈnæsɔ"
 },
 {
   "id": 6340,
   "word": "NEARER",
   "pronunciations": "ˈnɪrɝ"
 },
 {
   "id": 6341,
   "word": "NEIGHBOR",
   "pronunciations": "ˈneɪbɝ"
 },
 {
   "id": 6342,
   "word": "NEON",
   "pronunciations": "ˈniːɑːn"
 },
 {
   "id": 6343,
   "word": "ODDS",
   "pronunciations": "ˈɑːdz"
 },
 {
   "id": 6344,
   "word": "ODOR",
   "pronunciations": "ˈoʊdɝ"
 },
 {
   "id": 6345,
   "word": "OLDEST",
   "pronunciations": "ˈoʊldəst"
 },
 {
   "id": 6346,
   "word": "ONE-THIRD",
   "pronunciations": "ˌwənˈθɝːd"
 },
 {
   "id": 6347,
   "word": "ORDINARILY",
   "pronunciations": "ˌɔrdəˈnɛrəli"
 },
 {
   "id": 6348,
   "word": "ORGANIZE",
   "pronunciations": "ˈɔrgəˌnaɪz"
 },
 {
   "id": 6349,
   "word": "ORGANS",
   "pronunciations": "ˈɔrgənz"
 },
 {
   "id": 6350,
   "word": "PAINFULLY",
   "pronunciations": "ˈpeɪnfəli"
 },
 {
   "id": 6351,
   "word": "PAIRS",
   "pronunciations": "ˈpɛrz"
 },
 {
   "id": 6352,
   "word": "PARAGRAPHS",
   "pronunciations": "ˈpærəˌgræfs, ˈpɛrəˌgræfs"
 },
 {
   "id": 6353,
   "word": "PASSENGER",
   "pronunciations": "ˈpæsəndʒɝ"
 },
 {
   "id": 6354,
   "word": "PASTURE",
   "pronunciations": "ˈpæstʃɝ"
 },
 {
   "id": 6355,
   "word": "PATHS",
   "pronunciations": "ˈpæðz, ˈpæθs"
 },
 {
   "id": 6356,
   "word": "PENALTY",
   "pronunciations": "ˈpɛnəlti"
 },
 {
   "id": 6357,
   "word": "PENDING",
   "pronunciations": "ˈpɛndɪŋ"
 },
 {
   "id": 6358,
   "word": "PENETRATING",
   "pronunciations": "ˈpɛnəˌtreɪtɪŋ"
 },
 {
   "id": 6359,
   "word": "PIANIST",
   "pronunciations": "piːˈænəst, piːˈɑːnəst, ˈpiːənɪst"
 },
 {
   "id": 6360,
   "word": "PICASSO",
   "pronunciations": "pɪˈkɑːsoʊ"
 },
 {
   "id": 6361,
   "word": "PICKING",
   "pronunciations": "ˈpɪkɪŋ"
 },
 {
   "id": 6362,
   "word": "PICKUP",
   "pronunciations": "ˈpɪˌkəp"
 },
 {
   "id": 6363,
   "word": "PIE",
   "pronunciations": "ˈpaɪ"
 },
 {
   "id": 6364,
   "word": "PINE",
   "pronunciations": "ˈpaɪn"
 },
 {
   "id": 6365,
   "word": "PIT",
   "pronunciations": "ˈpɪt"
 },
 {
   "id": 6366,
   "word": "PITY",
   "pronunciations": "ˈpɪti"
 },
 {
   "id": 6367,
   "word": "PLAINS",
   "pronunciations": "ˈpleɪnz"
 },
 {
   "id": 6368,
   "word": "PLATO'S",
   "pronunciations": "ˈpleɪtoʊz"
 },
 {
   "id": 6369,
   "word": "POLISHED",
   "pronunciations": "ˈpɑːlɪʃt"
 },
 {
   "id": 6370,
   "word": "PREFERABLY",
   "pronunciations": "ˈprɛfɝəbli, ˈprɛfrəbli"
 },
 {
   "id": 6371,
   "word": "PRESCRIBED",
   "pronunciations": "priːˈskraɪbd"
 },
 {
   "id": 6372,
   "word": "PRESIDENTS",
   "pronunciations": "ˈprɛzɪˌdɛnts, ˈprɛzɪdɛnts"
 },
 {
   "id": 6373,
   "word": "PROCLAMATION",
   "pronunciations": "ˌprɑːkləˈmeɪʃən"
 },
 {
   "id": 6374,
   "word": "PRODUCERS",
   "pronunciations": "prəˈduːsɝz"
 },
 {
   "id": 6375,
   "word": "PROFITABLE",
   "pronunciations": "ˈprɑːfətəbəl"
 },
 {
   "id": 6376,
   "word": "PROJECTED",
   "pronunciations": "prɑːˈdʒɛktəd"
 },
 {
   "id": 6377,
   "word": "PRONE",
   "pronunciations": "ˈproʊn"
 },
 {
   "id": 6378,
   "word": "PROPORTIONAL",
   "pronunciations": "prəˈpɔrʃənəl"
 },
 {
   "id": 6379,
   "word": "PROSE",
   "pronunciations": "ˈproʊz"
 },
 {
   "id": 6380,
   "word": "PROSPERITY",
   "pronunciations": "prɑːˈspɛrəti"
 },
 {
   "id": 6381,
   "word": "PROTECTIVE",
   "pronunciations": "prəˈtɛktɪv"
 },
 {
   "id": 6382,
   "word": "PROTEINS",
   "pronunciations": "ˈproʊˌtiːnz"
 },
 {
   "id": 6383,
   "word": "PROTESTANTS",
   "pronunciations": "ˈprɑːtəstənts"
 },
 {
   "id": 6384,
   "word": "PSYCHOLOGY",
   "pronunciations": "saɪˈkɑːlədʒi"
 },
 {
   "id": 6385,
   "word": "PUBLISHING",
   "pronunciations": "ˈpʌblɪʃɪŋ"
 },
 {
   "id": 6386,
   "word": "PURSE",
   "pronunciations": "ˈpɝːs"
 },
 {
   "id": 6387,
   "word": "PURSUED",
   "pronunciations": "pɝˈsuːd"
 },
 {
   "id": 6388,
   "word": "PYTHON",
   "pronunciations": "ˈpaɪθɑːn"
 },
 {
   "id": 6389,
   "word": "REFORMS",
   "pronunciations": "rəˈfɔrmz, rɪˈfɔrmz"
 },
 {
   "id": 6390,
   "word": "REGULATION",
   "pronunciations": "ˌrɛgjəˈleɪʃən"
 },
 {
   "id": 6391,
   "word": "RELAXED",
   "pronunciations": "rɪˈlækst, riːˈlækst"
 },
 {
   "id": 6392,
   "word": "REQUESTS",
   "pronunciations": "rɪˈkwɛsts, riːˈkwɛsts, rɪˈkwɛs, riːˈkwɛs"
 },
 {
   "id": 6393,
   "word": "RESONANCE",
   "pronunciations": "ˈrɛzənəns"
 },
 {
   "id": 6394,
   "word": "RESTORED",
   "pronunciations": "rɪˈstɔrd"
 },
 {
   "id": 6395,
   "word": "RETREAT",
   "pronunciations": "riːˈtriːt"
 },
 {
   "id": 6396,
   "word": "REVELATION",
   "pronunciations": "ˌrɛvəˈleɪʃən"
 },
 {
   "id": 6397,
   "word": "REVOLVER",
   "pronunciations": "rɪˈvɑːlvɝ"
 },
 {
   "id": 6398,
   "word": "RIPE",
   "pronunciations": "ˈraɪp"
 },
 {
   "id": 6399,
   "word": "RUIN",
   "pronunciations": "ˈruːən, ˈruːɪn"
 },
 {
   "id": 6400,
   "word": "RUPEES",
   "pronunciations": "ruːˈpiːz, ˈruːpiːz"
 },
 {
   "id": 6401,
   "word": "RUSSIA'S",
   "pronunciations": "ˈrʌʃəz"
 },
 {
   "id": 6402,
   "word": "SCENERY",
   "pronunciations": "ˈsiːnɝi"
 },
 {
   "id": 6403,
   "word": "SCREWED",
   "pronunciations": "ˈskruːd"
 },
 {
   "id": 6404,
   "word": "SCRUTINY",
   "pronunciations": "ˈskruːtəni"
 },
 {
   "id": 6405,
   "word": "SEEMING",
   "pronunciations": "ˈsiːmɪŋ"
 },
 {
   "id": 6406,
   "word": "SENSATION",
   "pronunciations": "sɛnˈseɪʃən"
 },
 {
   "id": 6407,
   "word": "SENSIBLE",
   "pronunciations": "ˈsɛnsəbəl"
 },
 {
   "id": 6408,
   "word": "SHALLOW",
   "pronunciations": "ˈʃæloʊ"
 },
 {
   "id": 6409,
   "word": "SHELLS",
   "pronunciations": "ˈʃɛlz"
 },
 {
   "id": 6410,
   "word": "SHOE",
   "pronunciations": "ˈʃuː"
 },
 {
   "id": 6411,
   "word": "SHORT-TERM",
   "pronunciations": "ˌʃɔrtˈtɝːm"
 },
 {
   "id": 6412,
   "word": "SINGULAR",
   "pronunciations": "ˈsɪŋgjəlɝ"
 },
 {
   "id": 6413,
   "word": "SOLITARY",
   "pronunciations": "ˈsɑːləˌtɛri"
 },
 {
   "id": 6414,
   "word": "SPEAKERS",
   "pronunciations": "ˈspiːkɝz"
 },
 {
   "id": 6415,
   "word": "SPECTRUM",
   "pronunciations": "ˈspɛktrəm"
 },
 {
   "id": 6416,
   "word": "SPEEDS",
   "pronunciations": "ˈspiːdz"
 },
 {
   "id": 6417,
   "word": "STARE",
   "pronunciations": "ˈstɛr"
 },
 {
   "id": 6418,
   "word": "STOPPING",
   "pronunciations": "ˈstɑːpɪŋ"
 },
 {
   "id": 6419,
   "word": "STRIPS",
   "pronunciations": "ˈstrɪps"
 },
 {
   "id": 6420,
   "word": "STRUCTURED",
   "pronunciations": "ˈstrʌktʃɝd"
 },
 {
   "id": 6421,
   "word": "SUNSET",
   "pronunciations": "ˈsʌnˌsɛt"
 },
 {
   "id": 6422,
   "word": "SUPERB",
   "pronunciations": "sʊˈpɝːb"
 },
 {
   "id": 6423,
   "word": "SUPERIORITY",
   "pronunciations": "ˌsuːpɪriːˈɔrɪti"
 },
 {
   "id": 6424,
   "word": "SURVIVED",
   "pronunciations": "sɝˈvaɪvd"
 },
 {
   "id": 6425,
   "word": "SURVIVING",
   "pronunciations": "sɝˈvaɪvɪŋ"
 },
 {
   "id": 6426,
   "word": "SUSTAIN",
   "pronunciations": "səˈsteɪn"
 },
 {
   "id": 6427,
   "word": "SWEATER",
   "pronunciations": "ˈswɛtɝ"
 },
 {
   "id": 6428,
   "word": "SWISS",
   "pronunciations": "ˈswɪs"
 },
 {
   "id": 6429,
   "word": "SWORE",
   "pronunciations": "ˈswɔr"
 },
 {
   "id": 6430,
   "word": "SYMPTOMS",
   "pronunciations": "ˈsɪmptəmz"
 },
 {
   "id": 6431,
   "word": "TERRITORIAL",
   "pronunciations": "ˌtɛrɪˈtɔriːəl"
 },
 {
   "id": 6432,
   "word": "THEODORE",
   "pronunciations": "ˈθiːəˌdɔr"
 },
 {
   "id": 6433,
   "word": "THIRTY-FIVE",
   "pronunciations": "ˈθɝːdiːˌfaɪv"
 },
 {
   "id": 6434,
   "word": "THOU",
   "pronunciations": "ˈðaʊ"
 },
 {
   "id": 6435,
   "word": "THOUGHTFULLY",
   "pronunciations": "ˈθɔtfəli"
 },
 {
   "id": 6436,
   "word": "THREATS",
   "pronunciations": "ˈθrɛts"
 },
 {
   "id": 6437,
   "word": "THUNDER",
   "pronunciations": "ˈθʌndɝ"
 },
 {
   "id": 6438,
   "word": "TICKETS",
   "pronunciations": "ˈtɪkəts, ˈtɪkɪts"
 },
 {
   "id": 6439,
   "word": "TOUCHES",
   "pronunciations": "ˈtʌtʃəz, ˈtʌtʃɪz"
 },
 {
   "id": 6440,
   "word": "TOWN'S",
   "pronunciations": "ˈtaʊnz"
 },
 {
   "id": 6441,
   "word": "TREASURER",
   "pronunciations": "ˈtrɛʒɝɝ"
 },
 {
   "id": 6442,
   "word": "TREATS",
   "pronunciations": "ˈtriːts"
 },
 {
   "id": 6443,
   "word": "TWENTY-FOUR",
   "pronunciations": "ˈtwɛntiːˌfɔr"
 },
 {
   "id": 6444,
   "word": "ULTRAVIOLET",
   "pronunciations": "ˌəltrəˈvaɪəlɪt"
 },
 {
   "id": 6445,
   "word": "UNCOMFORTABLE",
   "pronunciations": "ənˈkʌmfɝtəbəl"
 },
 {
   "id": 6446,
   "word": "UNIFORMS",
   "pronunciations": "ˈjuːnəˌfɔrmz"
 },
 {
   "id": 6447,
   "word": "UPRIGHT",
   "pronunciations": "əˈpraɪt, ˈʌˌpraɪt"
 },
 {
   "id": 6448,
   "word": "UPSET",
   "pronunciations": "əpˈsɛt, ˈʌpˌsɛt"
 },
 {
   "id": 6449,
   "word": "USAGE",
   "pronunciations": "ˈjuːsədʒ, ˈjuːsɪdʒ"
 },
 {
   "id": 6450,
   "word": "VALUED",
   "pronunciations": "ˈvæljuːd"
 },
 {
   "id": 6451,
   "word": "VICE-PRESIDENT",
   "pronunciations": "ˈvaɪˈsprɛzədənt"
 },
 {
   "id": 6452,
   "word": "VIGOR",
   "pronunciations": "ˈvɪgɝ"
 },
 {
   "id": 6453,
   "word": "VOCAL",
   "pronunciations": "ˈvoʊkəl"
 },
 {
   "id": 6454,
   "word": "VULNERABLE",
   "pronunciations": "ˈvʌlnɝəbəl"
 },
 {
   "id": 6455,
   "word": "WAX",
   "pronunciations": "ˈwæks"
 },
 {
   "id": 6456,
   "word": "WEEP",
   "pronunciations": "ˈwiːp"
 },
 {
   "id": 6457,
   "word": "WELCH",
   "pronunciations": "ˈwɛltʃ"
 },
 {
   "id": 6458,
   "word": "WIDTH",
   "pronunciations": "ˈwɪdθ"
 },
 {
   "id": 6459,
   "word": "WOKE",
   "pronunciations": "ˈwoʊk"
 },
 {
   "id": 6460,
   "word": "WRAPPED",
   "pronunciations": "ˈræpt"
 },
 {
   "id": 6461,
   "word": "X-RAY",
   "pronunciations": "ˈɛksˌreɪ"
 },
 {
   "id": 6462,
   "word": "YALTA",
   "pronunciations": "ˈjɔltə"
 },
 {
   "id": 6463,
   "word": "YARN",
   "pronunciations": "ˈjɑːrn"
 },
 {
   "id": 6464,
   "word": "ABILITIES",
   "pronunciations": "əˈbɪləˌtiːz"
 },
 {
   "id": 6465,
   "word": "ABSORB",
   "pronunciations": "əbˈzɔrb"
 },
 {
   "id": 6466,
   "word": "ABUNDANCE",
   "pronunciations": "əˈbʌndəns"
 },
 {
   "id": 6467,
   "word": "ACCELERATED",
   "pronunciations": "ækˈsɛlɝˌeɪtɪd"
 },
 {
   "id": 6468,
   "word": "ACID",
   "pronunciations": "ˈæsəd"
 },
 {
   "id": 6469,
   "word": "ACUTE",
   "pronunciations": "əˈkjuːt"
 },
 {
   "id": 6470,
   "word": "ADAPTED",
   "pronunciations": "əˈdæptɪd"
 },
 {
   "id": 6471,
   "word": "ADJOINING",
   "pronunciations": "əˈdʒɔɪnɪŋ"
 },
 {
   "id": 6472,
   "word": "ADOPT",
   "pronunciations": "əˈdɑːpt"
 },
 {
   "id": 6473,
   "word": "AFTERNOONS",
   "pronunciations": "ˌæftɝˈnuːnz"
 },
 {
   "id": 6474,
   "word": "ALCOHOL",
   "pronunciations": "ˈælkəˌhɑːl"
 },
 {
   "id": 6475,
   "word": "ALOUD",
   "pronunciations": "əˈlaʊd"
 },
 {
   "id": 6476,
   "word": "ANALOGY",
   "pronunciations": "əˈnælədʒi"
 },
 {
   "id": 6477,
   "word": "ANALYSES",
   "pronunciations": "æˈnælɪˌsiːz, ænəˈlaɪˌzɪz"
 },
 {
   "id": 6478,
   "word": "ANDERSON",
   "pronunciations": "ˈændɝsən"
 },
 {
   "id": 6479,
   "word": "ANTENNA",
   "pronunciations": "ænˈtɛnə"
 },
 {
   "id": 6480,
   "word": "APPEALED",
   "pronunciations": "əˈpiːld"
 },
 {
   "id": 6481,
   "word": "ARCH",
   "pronunciations": "ˈɑːrtʃ"
 },
 {
   "id": 6482,
   "word": "ARLEN",
   "pronunciations": "ˈɑːrlən"
 },
 {
   "id": 6483,
   "word": "ASSETS",
   "pronunciations": "ˈæˌsɛts"
 },
 {
   "id": 6484,
   "word": "AUTISTIC",
   "pronunciations": "ɔˈtɪstɪk"
 },
 {
   "id": 6485,
   "word": "AVERAGED",
   "pronunciations": "ˈævrɪdʒd"
 },
 {
   "id": 6486,
   "word": "BARBECUE",
   "pronunciations": "ˈbɑːrbɪˌkjuː"
 },
 {
   "id": 6487,
   "word": "BEAMS",
   "pronunciations": "ˈbiːmz"
 },
 {
   "id": 6488,
   "word": "BEATING",
   "pronunciations": "ˈbiːtɪŋ"
 },
 {
   "id": 6489,
   "word": "BEGGED",
   "pronunciations": "ˈbɛgd"
 },
 {
   "id": 6490,
   "word": "BEHAVE",
   "pronunciations": "bɪˈheɪv"
 },
 {
   "id": 6491,
   "word": "BEHAVED",
   "pronunciations": "bɪˈheɪvd"
 },
 {
   "id": 6492,
   "word": "BELONGING",
   "pronunciations": "bɪˈlɔŋɪŋ"
 },
 {
   "id": 6493,
   "word": "BIOGRAPHY",
   "pronunciations": "baɪˈɑːgrəfi"
 },
 {
   "id": 6494,
   "word": "BIRMINGHAM",
   "pronunciations": "ˈbɝːmɪŋˌhæm"
 },
 {
   "id": 6495,
   "word": "BLADE",
   "pronunciations": "ˈbleɪd"
 },
 {
   "id": 6496,
   "word": "BLESSED",
   "pronunciations": "ˈblɛst"
 },
 {
   "id": 6497,
   "word": "BOOT",
   "pronunciations": "ˈbuːt"
 },
 {
   "id": 6498,
   "word": "BREAKDOWN",
   "pronunciations": "ˈbreɪkˌdaʊn"
 },
 {
   "id": 6499,
   "word": "BRUTALITY",
   "pronunciations": "bruːˈtæləti, bruːˈtælɪti"
 },
 {
   "id": 6500,
   "word": "BUDDY",
   "pronunciations": "ˈbʌdi"
 },
 {
   "id": 6501,
   "word": "BURSTING",
   "pronunciations": "ˈbɝːstɪŋ"
 },
 {
   "id": 6502,
   "word": "BUZZ",
   "pronunciations": "ˈbʌz"
 },
 {
   "id": 6503,
   "word": "CAKE",
   "pronunciations": "ˈkeɪk"
 },
 {
   "id": 6504,
   "word": "CARPET",
   "pronunciations": "ˈkɑːrpət"
 },
 {
   "id": 6505,
   "word": "CASEWORK",
   "pronunciations": "ˈkeɪˌswɝːk"
 },
 {
   "id": 6506,
   "word": "CASUALLY",
   "pronunciations": "ˈkæʒəwəli"
 },
 {
   "id": 6507,
   "word": "CHAMPAGNE",
   "pronunciations": "ʃæmˈpeɪn"
 },
 {
   "id": 6508,
   "word": "CHARLOTTE",
   "pronunciations": "ˈʃɑːrlət"
 },
 {
   "id": 6509,
   "word": "CHEEKS",
   "pronunciations": "ˈtʃiːks"
 },
 {
   "id": 6510,
   "word": "CHEWING",
   "pronunciations": "ˈtʃuːɪŋ"
 },
 {
   "id": 6511,
   "word": "CHICKENS",
   "pronunciations": "ˈtʃɪkənz"
 },
 {
   "id": 6512,
   "word": "CLARIFY",
   "pronunciations": "ˈklɛrəˌfaɪ"
 },
 {
   "id": 6513,
   "word": "CLUSTER",
   "pronunciations": "ˈklʌstɝ"
 },
 {
   "id": 6514,
   "word": "COLLAPSED",
   "pronunciations": "kəˈlæpst"
 },
 {
   "id": 6515,
   "word": "COLLECTING",
   "pronunciations": "kəˈlɛktɪŋ"
 },
 {
   "id": 6516,
   "word": "COLORADO",
   "pronunciations": "ˌkɑːlɝˈɑːdoʊ, ˌkɑːlɝˈædoʊ"
 },
 {
   "id": 6517,
   "word": "COMMITMENT",
   "pronunciations": "kəˈmɪtmənt"
 },
 {
   "id": 6518,
   "word": "COMMUNICATE",
   "pronunciations": "kəˈmjuːnəˌkeɪt"
 },
 {
   "id": 6519,
   "word": "COMPASS",
   "pronunciations": "ˈkʌmpəs"
 },
 {
   "id": 6520,
   "word": "COMPLETING",
   "pronunciations": "kəmˈpliːtɪŋ"
 },
 {
   "id": 6521,
   "word": "COMPOSERS",
   "pronunciations": "kəmˈpoʊzɝz"
 },
 {
   "id": 6522,
   "word": "COMPUTER",
   "pronunciations": "kəmˈpjuːtɝ"
 },
 {
   "id": 6523,
   "word": "CONDITIONER",
   "pronunciations": "kənˈdɪʃənɝ"
 },
 {
   "id": 6524,
   "word": "CONDUCTING",
   "pronunciations": "kənˈdʌktɪŋ"
 },
 {
   "id": 6525,
   "word": "CONE",
   "pronunciations": "ˈkoʊn"
 },
 {
   "id": 6526,
   "word": "CONSERVATION",
   "pronunciations": "ˌkɑːnsɝˈveɪʃən"
 },
 {
   "id": 6527,
   "word": "CONSULTING",
   "pronunciations": "kənˈsʌltɪŋ"
 },
 {
   "id": 6528,
   "word": "CONSUMED",
   "pronunciations": "kənˈsuːmd"
 },
 {
   "id": 6529,
   "word": "CONTRADICTION",
   "pronunciations": "ˌkɑːntrəˈdɪkʃən"
 },
 {
   "id": 6530,
   "word": "CONVEY",
   "pronunciations": "kənˈveɪ"
 },
 {
   "id": 6531,
   "word": "COPERNICUS",
   "pronunciations": "kəˈpɝːnəkəs"
 },
 {
   "id": 6532,
   "word": "COPPER",
   "pronunciations": "ˈkɑːpɝ"
 },
 {
   "id": 6533,
   "word": "CORRECTLY",
   "pronunciations": "kɝˈɛktli"
 },
 {
   "id": 6534,
   "word": "COUPLES",
   "pronunciations": "ˈkʌpəlz"
 },
 {
   "id": 6535,
   "word": "CREATES",
   "pronunciations": "kriːˈeɪts"
 },
 {
   "id": 6536,
   "word": "CRUELTY",
   "pronunciations": "ˈkruːlti, ˈkruːəlti"
 },
 {
   "id": 6537,
   "word": "CUMULATIVE",
   "pronunciations": "ˈkjuːmjələtɪv"
 },
 {
   "id": 6538,
   "word": "CURB",
   "pronunciations": "ˈkɝːb"
 },
 {
   "id": 6539,
   "word": "CURLED",
   "pronunciations": "ˈkɝːld"
 },
 {
   "id": 6540,
   "word": "CURTAIN",
   "pronunciations": "ˈkɝːtən"
 },
 {
   "id": 6541,
   "word": "DEBT",
   "pronunciations": "ˈdɛt"
 },
 {
   "id": 6542,
   "word": "DEEPEST",
   "pronunciations": "ˈdiːpəst"
 },
 {
   "id": 6543,
   "word": "DEER",
   "pronunciations": "ˈdɪr"
 },
 {
   "id": 6544,
   "word": "DEFECTS",
   "pronunciations": "ˈdiːfɛkts, dɪˈfɛkts"
 },
 {
   "id": 6545,
   "word": "DEFENDING",
   "pronunciations": "dɪˈfɛndɪŋ"
 },
 {
   "id": 6546,
   "word": "DEMOCRAT",
   "pronunciations": "ˈdɛməˌkræt"
 },
 {
   "id": 6547,
   "word": "DEPOT",
   "pronunciations": "ˈdiːpoʊ"
 },
 {
   "id": 6548,
   "word": "DEPRECIATION",
   "pronunciations": "dɪˌpriːʃiːˈeɪʃən"
 },
 {
   "id": 6549,
   "word": "DEPUTIES",
   "pronunciations": "ˈdɛpjətiːz, ˈdɛpjuːtiːz"
 },
 {
   "id": 6550,
   "word": "DERIVE",
   "pronunciations": "dɝˈaɪv"
 },
 {
   "id": 6551,
   "word": "DETECTION",
   "pronunciations": "dɪˈtɛkʃən"
 },
 {
   "id": 6552,
   "word": "DIAGNOSIS",
   "pronunciations": "ˌdaɪəgˈnoʊsəs"
 },
 {
   "id": 6553,
   "word": "DICTATORSHIP",
   "pronunciations": "dɪkˈteɪtɝˌʃɪp"
 },
 {
   "id": 6554,
   "word": "DIFFERED",
   "pronunciations": "ˈdɪfɝd"
 },
 {
   "id": 6555,
   "word": "DISPOSITION",
   "pronunciations": "ˌdɪspəˈzɪʃən"
 },
 {
   "id": 6556,
   "word": "DIVERSE",
   "pronunciations": "daɪˈvɝːs, dɪˈvɝːs"
 },
 {
   "id": 6557,
   "word": "DIVERSITY",
   "pronunciations": "dɪˈvɝːsɪti, daɪˈvɝːsɪti"
 },
 {
   "id": 6558,
   "word": "DOCUMENT",
   "pronunciations": "ˈdɑːkjəmɛnt, ˈdɑːkjuːmɛnt"
 },
 {
   "id": 6559,
   "word": "DOSES",
   "pronunciations": "ˈdoʊsəz, ˈdoʊsɪz"
 },
 {
   "id": 6560,
   "word": "DOT",
   "pronunciations": "ˈdɑːt"
 },
 {
   "id": 6561,
   "word": "DOUBTLESS",
   "pronunciations": "ˈdaʊtləs"
 },
 {
   "id": 6562,
   "word": "DOUGH",
   "pronunciations": "ˈdoʊ"
 },
 {
   "id": 6563,
   "word": "DRAINAGE",
   "pronunciations": "ˈdreɪnədʒ, ˈdreɪnɪdʒ"
 },
 {
   "id": 6564,
   "word": "DUMB",
   "pronunciations": "ˈdʌm"
 },
 {
   "id": 6565,
   "word": "DWELLING",
   "pronunciations": "ˈdwɛlɪŋ"
 },
 {
   "id": 6566,
   "word": "EAGERLY",
   "pronunciations": "ˈiːgɝli"
 },
 {
   "id": 6567,
   "word": "EARNESTLY",
   "pronunciations": "ˈɝːnəstli"
 },
 {
   "id": 6568,
   "word": "ED",
   "pronunciations": "ˈɛd"
 },
 {
   "id": 6569,
   "word": "EGO",
   "pronunciations": "ˈiːgoʊ"
 },
 {
   "id": 6570,
   "word": "ELDERLY",
   "pronunciations": "ˈɛldɝli"
 },
 {
   "id": 6571,
   "word": "ELECTORAL",
   "pronunciations": "ɪˈlɛktɝəl"
 },
 {
   "id": 6572,
   "word": "ELITE",
   "pronunciations": "ɪˈliːt, eɪˈliːt"
 },
 {
   "id": 6573,
   "word": "EMBRACE",
   "pronunciations": "ɛmˈbreɪs, ɪmˈbreɪs"
 },
 {
   "id": 6574,
   "word": "EMOTIONALLY",
   "pronunciations": "ɪˈmoʊʃnəli, ˈiːˌmoʊʃnəli"
 },
 {
   "id": 6575,
   "word": "ENABLING",
   "pronunciations": "ɛˈneɪbəlɪŋ, ɪˈneɪbəlɪŋ, ɪˈneɪblɪŋ"
 },
 {
   "id": 6576,
   "word": "ENTERS",
   "pronunciations": "ˈɛntɝz, ˈɛnɝz"
 },
 {
   "id": 6577,
   "word": "EQUILIBRIUM",
   "pronunciations": "ˌiːkwəˈlɪbriːəm"
 },
 {
   "id": 6578,
   "word": "ERECT",
   "pronunciations": "ɪˈrɛkt"
 },
 {
   "id": 6579,
   "word": "ETHNIC",
   "pronunciations": "ˈɛθnɪk"
 },
 {
   "id": 6580,
   "word": "EVALUATE",
   "pronunciations": "ɪˈvæljuːˌeɪt, iːˈvæljuːˌeɪt"
 },
 {
   "id": 6581,
   "word": "EXAGGERATED",
   "pronunciations": "ɪgˈzædʒɝˌeɪtəd, ɪgˈzædʒɝˌeɪtɪd"
 },
 {
   "id": 6582,
   "word": "EXERTED",
   "pronunciations": "ɪgˈzɝːtɪd"
 },
 {
   "id": 6583,
   "word": "EXPAND",
   "pronunciations": "ɪkˈspænd"
 },
 {
   "id": 6584,
   "word": "EXPERIMENTATION",
   "pronunciations": "ɪkˌspɛrəmənˈteɪʃən"
 },
 {
   "id": 6585,
   "word": "EXPLAINING",
   "pronunciations": "ɪkˈspleɪnɪŋ"
 },
 {
   "id": 6586,
   "word": "FAMILIARITY",
   "pronunciations": "fəˌmɪlˈjɛrəti"
 },
 {
   "id": 6587,
   "word": "FEARFUL",
   "pronunciations": "ˈfɪrfəl"
 },
 {
   "id": 6588,
   "word": "FIAT",
   "pronunciations": "ˈfaɪæt"
 },
 {
   "id": 6589,
   "word": "FICTIONAL",
   "pronunciations": "ˈfɪkʃənəl"
 },
 {
   "id": 6590,
   "word": "FILES",
   "pronunciations": "ˈfaɪlz"
 },
 {
   "id": 6591,
   "word": "FITS",
   "pronunciations": "ˈfɪts"
 },
 {
   "id": 6592,
   "word": "FOND",
   "pronunciations": "ˈfɑːnd"
 },
 {
   "id": 6593,
   "word": "FORCING",
   "pronunciations": "ˈfɔrsɪŋ"
 },
 {
   "id": 6594,
   "word": "FOREIGNERS",
   "pronunciations": "ˈfɔrənɝz, ˈfɑːrənɝz, ˈfɔrnɝz, ˈfɑːrnɝz"
 },
 {
   "id": 6595,
   "word": "FOUNDATION'S",
   "pronunciations": "faʊnˈdeɪʃənz"
 },
 {
   "id": 6596,
   "word": "FRANKLY",
   "pronunciations": "ˈfræŋkli"
 },
 {
   "id": 6597,
   "word": "FRIEZE",
   "pronunciations": "ˈfriːz"
 },
 {
   "id": 6598,
   "word": "FUR",
   "pronunciations": "ˈfɝː"
 },
 {
   "id": 6599,
   "word": "FUSION",
   "pronunciations": "ˈfjuːʒən"
 },
 {
   "id": 6600,
   "word": "GARIBALDI",
   "pronunciations": "ˌgærəˈbɔldi"
 },
 {
   "id": 6601,
   "word": "GENTILE",
   "pronunciations": "ˈdʒɛnˌtaɪl"
 },
 {
   "id": 6602,
   "word": "GIFTED",
   "pronunciations": "ˈgɪftəd, ˈgɪftɪd"
 },
 {
   "id": 6603,
   "word": "GLOBE",
   "pronunciations": "ˈgloʊb"
 },
 {
   "id": 6604,
   "word": "GOSPEL",
   "pronunciations": "ˈgɑːspəl, ˈgɔspəl"
 },
 {
   "id": 6605,
   "word": "GOSSIP",
   "pronunciations": "ˈgɑːsəp"
 },
 {
   "id": 6606,
   "word": "GRADUATED",
   "pronunciations": "ˈgrædʒuːˌeɪtɪd, ˈgrædʒəˌweɪtɪd"
 },
 {
   "id": 6607,
   "word": "GRANDMA",
   "pronunciations": "ˈgrændmɑː"
 },
 {
   "id": 6608,
   "word": "GREENE",
   "pronunciations": "ˈgriːn"
 },
 {
   "id": 6609,
   "word": "GRIN",
   "pronunciations": "ˈgrɪn"
 },
 {
   "id": 6610,
   "word": "GUARANTEED",
   "pronunciations": "ˌgɛrənˈtiːd"
 },
 {
   "id": 6611,
   "word": "HANDFUL",
   "pronunciations": "ˈhændˌfʊl"
 },
 {
   "id": 6612,
   "word": "HANDICAPPED",
   "pronunciations": "ˈhændiːˌkæpt"
 },
 {
   "id": 6613,
   "word": "HANDY",
   "pronunciations": "ˈhændi"
 },
 {
   "id": 6614,
   "word": "HART",
   "pronunciations": "ˈhɑːrt"
 },
 {
   "id": 6615,
   "word": "HELEN",
   "pronunciations": "ˈhɛlən"
 },
 {
   "id": 6616,
   "word": "HINO",
   "pronunciations": "ˈhiːnoʊ"
 },
 {
   "id": 6617,
   "word": "HORMONE",
   "pronunciations": "ˈhɔrˌmoʊn"
 },
 {
   "id": 6618,
   "word": "HULL",
   "pronunciations": "ˈhʌl"
 },
 {
   "id": 6619,
   "word": "HUT",
   "pronunciations": "ˈhʌt"
 },
 {
   "id": 6620,
   "word": "HYMEN",
   "pronunciations": "ˈhaɪmən"
 },
 {
   "id": 6621,
   "word": "IDEOLOGY",
   "pronunciations": "ˌaɪdiːˈɑːlədʒi"
 },
 {
   "id": 6622,
   "word": "IDLE",
   "pronunciations": "ˈaɪdəl"
 },
 {
   "id": 6623,
   "word": "ILLUSTRATIONS",
   "pronunciations": "ˌɪləˈstreɪʃənz"
 },
 {
   "id": 6624,
   "word": "IMAGINATIVE",
   "pronunciations": "ˌɪˈmædʒənətɪv"
 },
 {
   "id": 6625,
   "word": "IMPERIAL",
   "pronunciations": "ˌɪmˈpɪriːəl"
 },
 {
   "id": 6626,
   "word": "IMPLICIT",
   "pronunciations": "ˌɪmˈplɪsət"
 },
 {
   "id": 6627,
   "word": "IMPLY",
   "pronunciations": "ˌɪmˈplaɪ"
 },
 {
   "id": 6628,
   "word": "INCEST",
   "pronunciations": "ˈɪnˌsɛst"
 },
 {
   "id": 6629,
   "word": "INCOMPLETE",
   "pronunciations": "ˌɪnkəmˈpliːt"
 },
 {
   "id": 6630,
   "word": "INCORPORATED",
   "pronunciations": "ˌɪnˈkɔrpɝˌeɪtɪd"
 },
 {
   "id": 6631,
   "word": "INDIANA",
   "pronunciations": "ˌɪndiːˈænə"
 },
 {
   "id": 6632,
   "word": "INDUCED",
   "pronunciations": "ˌɪnˈduːst"
 },
 {
   "id": 6633,
   "word": "INHABITANTS",
   "pronunciations": "ˌɪnˈhæbɪtənts"
 },
 {
   "id": 6634,
   "word": "INQUIRER",
   "pronunciations": "ˌɪnˈkwaɪrɝ"
 },
 {
   "id": 6635,
   "word": "INSANE",
   "pronunciations": "ˌɪnˈseɪn"
 },
 {
   "id": 6636,
   "word": "INSERT",
   "pronunciations": "ˌɪnˈsɝːt, ˈɪnˌsɝːt"
 },
 {
   "id": 6637,
   "word": "INSPECTOR",
   "pronunciations": "ˌɪnˈspɛktɝ"
 },
 {
   "id": 6638,
   "word": "INTEGRAL",
   "pronunciations": "ˈɪntəgrəl, ˈɪnəgrəl"
 },
 {
   "id": 6639,
   "word": "INVARIANT",
   "pronunciations": "ˌɪnˈvɛriːənt"
 },
 {
   "id": 6640,
   "word": "INVENTED",
   "pronunciations": "ˌɪnˈvɛntəd, ˌɪnˈvɛntɪd"
 },
 {
   "id": 6641,
   "word": "INVENTORIES",
   "pronunciations": "ˌɪnvənˈtɔriːz"
 },
 {
   "id": 6642,
   "word": "INVESTIGATORS",
   "pronunciations": "ˌɪnˈvɛstəˌgeɪtɝz"
 },
 {
   "id": 6643,
   "word": "INVOLVEMENT",
   "pronunciations": "ˌɪnˈvɑːlvmənt"
 },
 {
   "id": 6644,
   "word": "IRELAND",
   "pronunciations": "ˈaɪɝlənd, ˈaɪrlənd"
 },
 {
   "id": 6645,
   "word": "IRONIC",
   "pronunciations": "aɪˈrɑːnɪk"
 },
 {
   "id": 6646,
   "word": "JOURNALISM",
   "pronunciations": "ˈdʒɝːnəˌlɪzəm"
 },
 {
   "id": 6647,
   "word": "LAFAYETTE",
   "pronunciations": "ˌlɑːfiːˈɛt, ˌlɑːfeɪˈɛt"
 },
 {
   "id": 6648,
   "word": "LANTERN",
   "pronunciations": "ˈlæntɝn"
 },
 {
   "id": 6649,
   "word": "LASTING",
   "pronunciations": "ˈlæstɪŋ"
 },
 {
   "id": 6650,
   "word": "LESTER",
   "pronunciations": "ˈlɛstɝ"
 },
 {
   "id": 6651,
   "word": "LEVELED",
   "pronunciations": "ˈlɛvəld"
 },
 {
   "id": 6652,
   "word": "LIME",
   "pronunciations": "ˈlaɪm"
 },
 {
   "id": 6653,
   "word": "LINGUIST",
   "pronunciations": "ˈlɪŋgwɪst"
 },
 {
   "id": 6654,
   "word": "LITIGATION",
   "pronunciations": "ˌlɪtəˈgeɪʃən"
 },
 {
   "id": 6655,
   "word": "LOU",
   "pronunciations": "ˈluː"
 },
 {
   "id": 6656,
   "word": "LOWEST",
   "pronunciations": "ˈloʊəst"
 },
 {
   "id": 6657,
   "word": "LUCILLE",
   "pronunciations": "luːˈsiːl"
 },
 {
   "id": 6658,
   "word": "MANIFOLD",
   "pronunciations": "ˈmænəˌfoʊld, ˈmænɪˌfoʊld"
 },
 {
   "id": 6659,
   "word": "MAP",
   "pronunciations": "ˈmæp"
 },
 {
   "id": 6660,
   "word": "MAPS",
   "pronunciations": "ˈmæps"
 },
 {
   "id": 6661,
   "word": "MATCHES",
   "pronunciations": "ˈmætʃəz, ˈmætʃɪz"
 },
 {
   "id": 6662,
   "word": "MAYS",
   "pronunciations": "ˈmeɪz"
 },
 {
   "id": 6663,
   "word": "MCCLELLAN",
   "pronunciations": "məˈklɛlən"
 },
 {
   "id": 6664,
   "word": "MEDIA",
   "pronunciations": "ˈmiːdiːə"
 },
 {
   "id": 6665,
   "word": "METHODIST",
   "pronunciations": "ˈmɛθədəst, ˈmɛθədɪst"
 },
 {
   "id": 6666,
   "word": "MINISTRY",
   "pronunciations": "ˈmɪnəstri, ˈmɪnɪstri"
 },
 {
   "id": 6667,
   "word": "MINNESOTA",
   "pronunciations": "ˌmɪnɪˈsoʊtə"
 },
 {
   "id": 6668,
   "word": "MISERABLE",
   "pronunciations": "ˈmɪzɝəbəl, ˈmɪzrəbəl"
 },
 {
   "id": 6669,
   "word": "MIX",
   "pronunciations": "ˈmɪks"
 },
 {
   "id": 6670,
   "word": "MODERNIZATION",
   "pronunciations": "ˌmɑːdɝnəˈzeɪʃən, ˌmɑːdɝnaɪˈzeɪʃə"
 },
 {
   "id": 6671,
   "word": "MODIFIED",
   "pronunciations": "ˈmɑːdəˌfaɪd"
 },
 {
   "id": 6672,
   "word": "MONITORING",
   "pronunciations": "ˈmɑːnətɝɪŋ"
 },
 {
   "id": 6673,
   "word": "MONSTROUS",
   "pronunciations": "ˈmɑːnstrəs"
 },
 {
   "id": 6674,
   "word": "MOONLIGHT",
   "pronunciations": "ˈmuːnˌlaɪt"
 },
 {
   "id": 6675,
   "word": "MUTUALLY",
   "pronunciations": "ˈmjuːtʃuːəli"
 },
 {
   "id": 6676,
   "word": "MYTHOLOGICAL",
   "pronunciations": "ˌmɪθəˈlɑːdʒɪkəl"
 },
 {
   "id": 6677,
   "word": "NAM",
   "pronunciations": "ˈnæm"
 },
 {
   "id": 6678,
   "word": "NAZI",
   "pronunciations": "ˈnɑːtsi"
 },
 {
   "id": 6679,
   "word": "NECESSITIES",
   "pronunciations": "nəˈsɛsɪtiːz"
 },
 {
   "id": 6680,
   "word": "NIGHT'S",
   "pronunciations": "ˈnaɪts"
 },
 {
   "id": 6681,
   "word": "NIGHTTIME",
   "pronunciations": "ˈnaɪtˌtaɪm"
 },
 {
   "id": 6682,
   "word": "NONSENSE",
   "pronunciations": "ˈnɑːnsɛns"
 },
 {
   "id": 6683,
   "word": "NUCLEI",
   "pronunciations": "ˈnuːkliːˌaɪ"
 },
 {
   "id": 6684,
   "word": null,
   "pronunciations": "ˈnʌl"
 },
 {
   "id": 6685,
   "word": "NURSERY",
   "pronunciations": "ˈnɝːsɝi"
 },
 {
   "id": 6686,
   "word": "OBJECTED",
   "pronunciations": "əbˈdʒɛktəd"
 },
 {
   "id": 6687,
   "word": "OBJECTIONS",
   "pronunciations": "əbˈdʒɛkʃənz"
 },
 {
   "id": 6688,
   "word": "OBSERVING",
   "pronunciations": "əbˈzɝːvɪŋ"
 },
 {
   "id": 6689,
   "word": "OFFICER'S",
   "pronunciations": "ˈɔfɪsɝz"
 },
 {
   "id": 6690,
   "word": "OKLAHOMA",
   "pronunciations": "ˌoʊkləˈhoʊmə"
 },
 {
   "id": 6691,
   "word": "OMITTED",
   "pronunciations": "oʊˈmɪtəd, oʊˈmɪtɪd"
 },
 {
   "id": 6692,
   "word": "OPPONENTS",
   "pronunciations": "əˈpoʊnənts"
 },
 {
   "id": 6693,
   "word": "OPPOSING",
   "pronunciations": "əˈpoʊzɪŋ"
 },
 {
   "id": 6694,
   "word": "ORDERING",
   "pronunciations": "ˈɔrdɝɪŋ"
 },
 {
   "id": 6695,
   "word": "OUTSET",
   "pronunciations": "ˈaʊtˌsɛt"
 },
 {
   "id": 6696,
   "word": "OWNS",
   "pronunciations": "ˈoʊnz"
 },
 {
   "id": 6697,
   "word": "PACKARD",
   "pronunciations": "ˈpækɝd"
 },
 {
   "id": 6698,
   "word": "PAINTERS",
   "pronunciations": "ˈpeɪntɝz, ˈpeɪnɝz"
 },
 {
   "id": 6699,
   "word": "PANSIES",
   "pronunciations": "ˈpænziːz"
 },
 {
   "id": 6700,
   "word": "PAR",
   "pronunciations": "ˈpɑːr"
 },
 {
   "id": 6701,
   "word": "PARAMAGNETIC",
   "pronunciations": "ˌpærəˌmægˈnɛtɪk"
 },
 {
   "id": 6702,
   "word": "PARTICIPATED",
   "pronunciations": "pɑːrˈtɪsəˌpeɪtəd, pɑːrˈtɪsəˌpeɪtɪd"
 },
 {
   "id": 6703,
   "word": "PATCH",
   "pronunciations": "ˈpætʃ"
 },
 {
   "id": 6704,
   "word": "PENSION",
   "pronunciations": "ˈpɛnʃən"
 },
 {
   "id": 6705,
   "word": "PENTAGON",
   "pronunciations": "ˈpɛntɪˌgɑːn, ˈpɛnɪˌgɑːn"
 },
 {
   "id": 6706,
   "word": "PEPPER",
   "pronunciations": "ˈpɛpɝ"
 },
 {
   "id": 6707,
   "word": "PERCEIVE",
   "pronunciations": "pɝˈsiːv"
 },
 {
   "id": 6708,
   "word": "PERFORMERS",
   "pronunciations": "pɝˈfɔrmɝz"
 },
 {
   "id": 6709,
   "word": "PERMANENTLY",
   "pronunciations": "ˈpɝːmɑːˌnɛntˌliː"
 },
 {
   "id": 6710,
   "word": "PHOSPHOR",
   "pronunciations": "ˈfɑːsˌfɔr"
 },
 {
   "id": 6711,
   "word": "PINT",
   "pronunciations": "ˈpaɪnt"
 },
 {
   "id": 6712,
   "word": "PLANNERS",
   "pronunciations": "ˈplænɝz"
 },
 {
   "id": 6713,
   "word": "PLASMA",
   "pronunciations": "ˈplæzmə"
 },
 {
   "id": 6714,
   "word": "POET'S",
   "pronunciations": "ˈpoʊəts"
 },
 {
   "id": 6715,
   "word": "POLITICIAN",
   "pronunciations": "ˌpɑːləˈtɪʃən"
 },
 {
   "id": 6716,
   "word": "PORTABLE",
   "pronunciations": "ˈpɔrtəbəl"
 },
 {
   "id": 6717,
   "word": "POSTURE",
   "pronunciations": "ˈpɑːstʃɝ"
 },
 {
   "id": 6718,
   "word": "PRAISED",
   "pronunciations": "ˈpreɪzd"
 },
 {
   "id": 6719,
   "word": "PRAYERS",
   "pronunciations": "ˈprɛrz, ˈpreɪɝz"
 },
 {
   "id": 6720,
   "word": "PRIVATELY",
   "pronunciations": "ˈpraɪvətli"
 },
 {
   "id": 6721,
   "word": "PROCLAIM",
   "pronunciations": "proʊˈkleɪm"
 },
 {
   "id": 6722,
   "word": "PROGRAMING",
   "pronunciations": "ˈproʊˌgræmɪŋ"
 },
 {
   "id": 6723,
   "word": "PROGRESSED",
   "pronunciations": "prəˈgrɛst"
 },
 {
   "id": 6724,
   "word": "PROHIBITION",
   "pronunciations": "ˌproʊəˈbɪʃən"
 },
 {
   "id": 6725,
   "word": "PROMOTING",
   "pronunciations": "prəˈmoʊtɪŋ"
 },
 {
   "id": 6726,
   "word": "PROPOSE",
   "pronunciations": "prəˈpoʊz"
 },
 {
   "id": 6727,
   "word": "PROTESTED",
   "pronunciations": "prəˈtɛstəd, ˈproʊˌtɛstəd"
 },
 {
   "id": 6728,
   "word": "PURPLE",
   "pronunciations": "ˈpɝːpəl"
 },
 {
   "id": 6729,
   "word": "RABBI",
   "pronunciations": "ˈræˌbaɪ"
 },
 {
   "id": 6730,
   "word": "RADICALLY",
   "pronunciations": "ˈrædɪkli"
 },
 {
   "id": 6731,
   "word": "REBELLION",
   "pronunciations": "rɪˈbɛljən"
 },
 {
   "id": 6732,
   "word": "RECEIVER",
   "pronunciations": "rəˈsiːvɝ, rɪˈsiːvɝ, riːˈsiːvɝ"
 },
 {
   "id": 6733,
   "word": "REFRIGERATION",
   "pronunciations": "rɪˌfrɪdʒɝˈeɪʃən"
 },
 {
   "id": 6734,
   "word": "RELIEVE",
   "pronunciations": "rɪˈliːv, riːˈliːv"
 },
 {
   "id": 6735,
   "word": "RELY",
   "pronunciations": "rɪˈlaɪ, riːˈlaɪ"
 },
 {
   "id": 6736,
   "word": "REMEDY",
   "pronunciations": "ˈrɛmədi"
 },
 {
   "id": 6737,
   "word": "REMEMBERS",
   "pronunciations": "rɪˈmɛmbɝz, riːˈmɛmbɝz"
 },
 {
   "id": 6738,
   "word": "REP.",
   "pronunciations": "rɛpriːˈzɛtətɪv"
 },
 {
   "id": 6739,
   "word": "REPETITION",
   "pronunciations": "ˌrɛpəˈtɪʃən"
 },
 {
   "id": 6740,
   "word": "RESEMBLANCE",
   "pronunciations": "rɪˈzɛmbləns, riːˈzɛmbləns"
 },
 {
   "id": 6741,
   "word": "RESIDENT",
   "pronunciations": "ˈrɛzɪdənt"
 },
 {
   "id": 6742,
   "word": "RESOLVE",
   "pronunciations": "riːˈzɑːlv"
 },
 {
   "id": 6743,
   "word": "RESTLESS",
   "pronunciations": "ˈrɛstləs"
 },
 {
   "id": 6744,
   "word": "RESTRAINED",
   "pronunciations": "riːˈstreɪnd"
 },
 {
   "id": 6745,
   "word": "REVIEWED",
   "pronunciations": "riːvˈjuːd"
 },
 {
   "id": 6746,
   "word": "ROAR",
   "pronunciations": "ˈrɔr"
 },
 {
   "id": 6747,
   "word": "ROCKETS",
   "pronunciations": "ˈrɑːkəts"
 },
 {
   "id": 6748,
   "word": "ROCKING",
   "pronunciations": "ˈrɑːkɪŋ"
 },
 {
   "id": 6749,
   "word": "ROMANCE",
   "pronunciations": "roʊˈmæns, ˈroʊmæns"
 },
 {
   "id": 6750,
   "word": "ROUNDS",
   "pronunciations": "ˈraʊndz, ˈraʊnz"
 },
 {
   "id": 6751,
   "word": "RUG",
   "pronunciations": "ˈrʌg"
 },
 {
   "id": 6752,
   "word": "SAFELY",
   "pronunciations": "ˈseɪfli"
 },
 {
   "id": 6753,
   "word": "SALLY",
   "pronunciations": "ˈsæli"
 },
 {
   "id": 6754,
   "word": "SATISFYING",
   "pronunciations": "ˈsætɪsˌfaɪɪŋ"
 },
 {
   "id": 6755,
   "word": "SCOTLAND",
   "pronunciations": "ˈskɑːtlənd"
 },
 {
   "id": 6756,
   "word": "SCREAM",
   "pronunciations": "ˈskriːm"
 },
 {
   "id": 6757,
   "word": "SEALED",
   "pronunciations": "ˈsiːld"
 },
 {
   "id": 6758,
   "word": "SECTOR",
   "pronunciations": "ˈsɛktɝ"
 },
 {
   "id": 6759,
   "word": "SELLS",
   "pronunciations": "ˈsɛlz"
 },
 {
   "id": 6760,
   "word": "SENTENCES",
   "pronunciations": "ˈsɛntənsəz, ˈsɛntənsɪz"
 },
 {
   "id": 6761,
   "word": "SEPARATELY",
   "pronunciations": "ˈsɛpɝətli, ˈsɛprətli"
 },
 {
   "id": 6762,
   "word": "SHADES",
   "pronunciations": "ˈʃeɪdz"
 },
 {
   "id": 6763,
   "word": "SHATTERED",
   "pronunciations": "ˈʃætɝd"
 },
 {
   "id": 6764,
   "word": "SHY",
   "pronunciations": "ˈʃaɪ"
 },
 {
   "id": 6765,
   "word": "SINCERITY",
   "pronunciations": "sɪnˈsɛrəti"
 },
 {
   "id": 6766,
   "word": "SINGERS",
   "pronunciations": "ˈsɪŋɝz"
 },
 {
   "id": 6767,
   "word": "SINISTER",
   "pronunciations": "ˈsɪnɪstɝ"
 },
 {
   "id": 6768,
   "word": "SISTERS",
   "pronunciations": "ˈsɪstɝz"
 },
 {
   "id": 6769,
   "word": "SKELETAL",
   "pronunciations": "ˈskɛlətəl"
 },
 {
   "id": 6770,
   "word": "SLICE",
   "pronunciations": "ˈslaɪs"
 },
 {
   "id": 6771,
   "word": "SLIGHTEST",
   "pronunciations": "ˈslaɪtəst"
 },
 {
   "id": 6772,
   "word": "SMALLEST",
   "pronunciations": "ˈsmɔləst"
 },
 {
   "id": 6773,
   "word": "SOLIDARITY",
   "pronunciations": "ˌsɑːləˈdɛrəti"
 },
 {
   "id": 6774,
   "word": "SOLIDS",
   "pronunciations": "ˈsɑːlədz"
 },
 {
   "id": 6775,
   "word": "SOX",
   "pronunciations": "ˈsɑːks"
 },
 {
   "id": 6776,
   "word": "SPECIMENS",
   "pronunciations": "ˈspɛsəmənz"
 },
 {
   "id": 6777,
   "word": "SPECTATORS",
   "pronunciations": "ˈspɛkteɪtɝz"
 },
 {
   "id": 6778,
   "word": "SPOKESMAN",
   "pronunciations": "ˈspoʊksmən"
 },
 {
   "id": 6779,
   "word": "SPOKESMEN",
   "pronunciations": "ˈspoʊksmɪn"
 },
 {
   "id": 6780,
   "word": "SPRANG",
   "pronunciations": "ˈspræŋ"
 },
 {
   "id": 6781,
   "word": "SPUR",
   "pronunciations": "ˈspɝː"
 },
 {
   "id": 6782,
   "word": "SQUARES",
   "pronunciations": "ˈskwɛrz"
 },
 {
   "id": 6783,
   "word": "STABILITY",
   "pronunciations": "stəˈbɪlɪti"
 },
 {
   "id": 6784,
   "word": "STANDPOINT",
   "pronunciations": "ˈstændˌpɔɪnt"
 },
 {
   "id": 6785,
   "word": "STATEWIDE",
   "pronunciations": "ˈsteɪˌtwaɪd"
 },
 {
   "id": 6786,
   "word": "STATIC",
   "pronunciations": "ˈstætɪk"
 },
 {
   "id": 6787,
   "word": "STATUTE",
   "pronunciations": "ˈstætʃuːt"
 },
 {
   "id": 6788,
   "word": "STATUTORY",
   "pronunciations": "ˈstætʃəˌtɔri"
 },
 {
   "id": 6789,
   "word": "STEEP",
   "pronunciations": "ˈstiːp"
 },
 {
   "id": 6790,
   "word": "STIMULATION",
   "pronunciations": "ˌstɪmjəˈleɪʃən"
 },
 {
   "id": 6791,
   "word": "STREETCAR",
   "pronunciations": "ˈstriːtˌkɑːr"
 },
 {
   "id": 6792,
   "word": "SUBSECTION",
   "pronunciations": "ˈsʌbsɛkʃən"
 },
 {
   "id": 6793,
   "word": "SUBURB",
   "pronunciations": "ˈsʌbɝb"
 },
 {
   "id": 6794,
   "word": "SUGGESTING",
   "pronunciations": "səˈdʒɛstɪŋ"
 },
 {
   "id": 6795,
   "word": "SUNNY",
   "pronunciations": "ˈsʌni"
 },
 {
   "id": 6796,
   "word": "SUPPLYING",
   "pronunciations": "səˈplaɪɪŋ"
 },
 {
   "id": 6797,
   "word": "SURVIVORS",
   "pronunciations": "sɝˈvaɪvɝz"
 },
 {
   "id": 6798,
   "word": "SUSPICIOUS",
   "pronunciations": "səˈspɪʃəs"
 },
 {
   "id": 6799,
   "word": "SWEEPING",
   "pronunciations": "ˈswiːpɪŋ"
 },
 {
   "id": 6800,
   "word": "TAXED",
   "pronunciations": "ˈtækst"
 },
 {
   "id": 6801,
   "word": "TEMPTED",
   "pronunciations": "ˈtɛmptəd, ˈtɛmptɪd"
 },
 {
   "id": 6802,
   "word": "THAYER",
   "pronunciations": "ˈθeɪɝ"
 },
 {
   "id": 6803,
   "word": "THERAPEUTIC",
   "pronunciations": "ˌθɛrəˈpjuːtɪk"
 },
 {
   "id": 6804,
   "word": "TIPS",
   "pronunciations": "ˈtɪps"
 },
 {
   "id": 6805,
   "word": "TISSUES",
   "pronunciations": "ˈtɪsˌjuːz, ˈtɪʃuːz"
 },
 {
   "id": 6806,
   "word": "TOILET",
   "pronunciations": "ˈtɔɪlət"
 },
 {
   "id": 6807,
   "word": "TON",
   "pronunciations": "ˈtʌn"
 },
 {
   "id": 6808,
   "word": "TORY",
   "pronunciations": "ˈtɔri"
 },
 {
   "id": 6809,
   "word": "TOWER",
   "pronunciations": "ˈtaʊɝ"
 },
 {
   "id": 6810,
   "word": "TRANSPARENT",
   "pronunciations": "trænˈspɛrənt"
 },
 {
   "id": 6811,
   "word": "TRIBUNE",
   "pronunciations": "ˈtrɪbjuːn"
 },
 {
   "id": 6812,
   "word": "TRIES",
   "pronunciations": "ˈtraɪz"
 },
 {
   "id": 6813,
   "word": "TRUMAN",
   "pronunciations": "ˈtruːmən"
 },
 {
   "id": 6814,
   "word": "TUB",
   "pronunciations": "ˈtʌb"
 },
 {
   "id": 6815,
   "word": "TUMBLED",
   "pronunciations": "ˈtʌmbəld"
 },
 {
   "id": 6816,
   "word": "U",
   "pronunciations": "ˈjuː"
 },
 {
   "id": 6817,
   "word": "UN",
   "pronunciations": "ˈʌn, ˈjuːˈɛn"
 },
 {
   "id": 6818,
   "word": "UNAWARE",
   "pronunciations": "ˌənəˈwɛr"
 },
 {
   "id": 6819,
   "word": "UNDERSTANDABLE",
   "pronunciations": "ˌəndɝˈstændəbəl"
 },
 {
   "id": 6820,
   "word": "UNDERTAKE",
   "pronunciations": "ˈʌndɝˌteɪk"
 },
 {
   "id": 6821,
   "word": "UNDUE",
   "pronunciations": "ənˈduː"
 },
 {
   "id": 6822,
   "word": "UNFAIR",
   "pronunciations": "ənˈfɛr, ˈʌnˈfɛr, ˌɔnˈfɛr"
 },
 {
   "id": 6823,
   "word": "UNLIMITED",
   "pronunciations": "ənˈlɪmətəd, ənˈlɪmɪtɪd"
 },
 {
   "id": 6824,
   "word": "UTTER",
   "pronunciations": "ˈʌtɝ"
 },
 {
   "id": 6825,
   "word": "VIGOROUSLY",
   "pronunciations": "ˈvɪgɝəsli"
 },
 {
   "id": 6826,
   "word": "VIRUS",
   "pronunciations": "ˈvaɪrəs"
 },
 {
   "id": 6827,
   "word": "VISITOR",
   "pronunciations": "ˈvɪzɪtɝ"
 },
 {
   "id": 6828,
   "word": "VOCABULARY",
   "pronunciations": "voʊˈkæbjəˌlɛri"
 },
 {
   "id": 6829,
   "word": "WALKS",
   "pronunciations": "ˈwɔks"
 },
 {
   "id": 6830,
   "word": "WAVING",
   "pronunciations": "ˈweɪvɪŋ"
 },
 {
   "id": 6831,
   "word": "WHOEVER",
   "pronunciations": "huːˈɛvɝ"
 },
 {
   "id": 6832,
   "word": "WIRES",
   "pronunciations": "ˈwaɪɝz, ˈwaɪrz"
 },
 {
   "id": 6833,
   "word": "WITNESSED",
   "pronunciations": "ˈwɪtnəst"
 },
 {
   "id": 6834,
   "word": "YALE",
   "pronunciations": "ˈjeɪl"
 },
 {
   "id": 6835,
   "word": "YOUNGEST",
   "pronunciations": "ˈjʌŋgəst"
 },
 {
   "id": 6836,
   "word": "ABSORPTION",
   "pronunciations": "əbˈzɔrpʃən, əbˈsɔrpʃən"
 },
 {
   "id": 6837,
   "word": "ACCOUNTING",
   "pronunciations": "əˈkaʊntɪŋ, əˈkaʊnɪŋ"
 },
 {
   "id": 6838,
   "word": "ACKNOWLEDGE",
   "pronunciations": "ækˈnɑːlɪdʒ"
 },
 {
   "id": 6839,
   "word": "ACKNOWLEDGED",
   "pronunciations": "ækˈnɑːlɪdʒd"
 },
 {
   "id": 6840,
   "word": "ACQUAINTED",
   "pronunciations": "əˈkweɪntɪd, əˈkweɪnɪd"
 },
 {
   "id": 6841,
   "word": "ACTIVELY",
   "pronunciations": "ˈæktɪvli"
 },
 {
   "id": 6842,
   "word": "AD",
   "pronunciations": "ˈæd"
 },
 {
   "id": 6843,
   "word": "ADJACENT",
   "pronunciations": "əˈdʒeɪsənt"
 },
 {
   "id": 6844,
   "word": "ADOLESCENT",
   "pronunciations": "ˌædəˈlɛsənt, ˌædoʊˈlɛsənt"
 },
 {
   "id": 6845,
   "word": "ADVISERS",
   "pronunciations": "ædˈvaɪzɝz"
 },
 {
   "id": 6846,
   "word": "AFFIRM",
   "pronunciations": "əˈfɝːm"
 },
 {
   "id": 6847,
   "word": "ANDREW",
   "pronunciations": "ˈændruː"
 },
 {
   "id": 6848,
   "word": "ANDRUS",
   "pronunciations": "ˈændrəs"
 },
 {
   "id": 6849,
   "word": "ANTIBODY",
   "pronunciations": "ˈæntɪˌbɑːdi, ˈæntiːˌbɑːdi"
 },
 {
   "id": 6850,
   "word": "ANTIGEN",
   "pronunciations": "ˈæntədʒən"
 },
 {
   "id": 6851,
   "word": "ANTIQUE",
   "pronunciations": "ænˈtiːk"
 },
 {
   "id": 6852,
   "word": "ARDENT",
   "pronunciations": "ˈɑːrdənt"
 },
 {
   "id": 6853,
   "word": "ASPIRATIONS",
   "pronunciations": "ˌæspɝˈeɪʃənz"
 },
 {
   "id": 6854,
   "word": "ATLAS",
   "pronunciations": "ˈætləs"
 },
 {
   "id": 6855,
   "word": "ATTENDANCE",
   "pronunciations": "əˈtɛndəns"
 },
 {
   "id": 6856,
   "word": "ATTENDANT",
   "pronunciations": "əˈtɛndənt"
 },
 {
   "id": 6857,
   "word": "ATTRIBUTES",
   "pronunciations": "əˈtrɪˌbjuːts"
 },
 {
   "id": 6858,
   "word": "BABIES",
   "pronunciations": "ˈbeɪbiːz"
 },
 {
   "id": 6859,
   "word": "BAKE",
   "pronunciations": "ˈbeɪk"
 },
 {
   "id": 6860,
   "word": "BALLOT",
   "pronunciations": "ˈbælət"
 },
 {
   "id": 6861,
   "word": "BAPTIZED",
   "pronunciations": "bæpˈtaɪzd, ˈbæpˌtaɪzd"
 },
 {
   "id": 6862,
   "word": "BASTARD",
   "pronunciations": "ˈbæstɝd"
 },
 {
   "id": 6863,
   "word": "BEDS",
   "pronunciations": "ˈbɛdz"
 },
 {
   "id": 6864,
   "word": "BEETHOVEN",
   "pronunciations": "ˈbeɪtoʊvən"
 },
 {
   "id": 6865,
   "word": "BENJAMIN",
   "pronunciations": "ˈbɛndʒəmən"
 },
 {
   "id": 6866,
   "word": "BITS",
   "pronunciations": "ˈbɪts"
 },
 {
   "id": 6867,
   "word": "BLADES",
   "pronunciations": "ˈbleɪdz"
 },
 {
   "id": 6868,
   "word": "BLEW",
   "pronunciations": "ˈbluː"
 },
 {
   "id": 6869,
   "word": "BLINDNESS",
   "pronunciations": "ˈblaɪndnəs"
 },
 {
   "id": 6870,
   "word": "BLOCKED",
   "pronunciations": "ˈblɑːkt"
 },
 {
   "id": 6871,
   "word": "BLOOM",
   "pronunciations": "ˈbluːm"
 },
 {
   "id": 6872,
   "word": "BOIL",
   "pronunciations": "ˈbɔɪl"
 },
 {
   "id": 6873,
   "word": "BORDERS",
   "pronunciations": "ˈbɔrdɝz"
 },
 {
   "id": 6874,
   "word": "BREAKS",
   "pronunciations": "ˈbreɪks"
 },
 {
   "id": 6875,
   "word": "BRYAN",
   "pronunciations": "ˈbraɪən"
 },
 {
   "id": 6876,
   "word": "BUBBLE",
   "pronunciations": "ˈbʌbəl"
 },
 {
   "id": 6877,
   "word": "BUTT",
   "pronunciations": "ˈbʌt"
 },
 {
   "id": 6878,
   "word": "CAB",
   "pronunciations": "ˈkæb"
 },
 {
   "id": 6879,
   "word": "CALCULATION",
   "pronunciations": "ˌkælkjəˈleɪʃən"
 },
 {
   "id": 6880,
   "word": "CANE",
   "pronunciations": "ˈkeɪn"
 },
 {
   "id": 6881,
   "word": "CANYON",
   "pronunciations": "ˈkænjən"
 },
 {
   "id": 6882,
   "word": "CAPPY",
   "pronunciations": "ˈkæpi"
 },
 {
   "id": 6883,
   "word": "CARRYOVER",
   "pronunciations": "ˈkɛrˌjoʊvɝ"
 },
 {
   "id": 6884,
   "word": "CAVITY",
   "pronunciations": "ˈkævəti"
 },
 {
   "id": 6885,
   "word": "CEASED",
   "pronunciations": "ˈsiːst"
 },
 {
   "id": 6886,
   "word": "CHALLENGING",
   "pronunciations": "ˈtʃæləndʒɪŋ"
 },
 {
   "id": 6887,
   "word": "CHOICES",
   "pronunciations": "ˈtʃɔɪsəz, ˈtʃɔɪsɪz"
 },
 {
   "id": 6888,
   "word": "CHRIS",
   "pronunciations": "ˈkrɪs"
 },
 {
   "id": 6889,
   "word": "CHURCHILL",
   "pronunciations": "ˈtʃɝːtʃɪl, ˈtʃɝːtʃhɪl"
 },
 {
   "id": 6890,
   "word": "CIGARETTES",
   "pronunciations": "ˌsɪgəˈrɛts"
 },
 {
   "id": 6891,
   "word": "CLERGY",
   "pronunciations": "ˈklɝːdʒi"
 },
 {
   "id": 6892,
   "word": "CLIMB",
   "pronunciations": "ˈklaɪm"
 },
 {
   "id": 6893,
   "word": "COATINGS",
   "pronunciations": "ˈkoʊtɪŋz"
 },
 {
   "id": 6894,
   "word": "COINCIDE",
   "pronunciations": "ˌkoʊɪnˈsaɪd"
 },
 {
   "id": 6895,
   "word": "COLLABORATION",
   "pronunciations": "kəˌlæbɝˈeɪʃən"
 },
 {
   "id": 6896,
   "word": "COMBUSTION",
   "pronunciations": "kəmˈbʌstʃən"
 },
 {
   "id": 6897,
   "word": "COMFORTABLY",
   "pronunciations": "ˈkʌmfɝtəbli"
 },
 {
   "id": 6898,
   "word": "COMPACT",
   "pronunciations": "ˈkɑːmpækt, kəmˈpækt"
 },
 {
   "id": 6899,
   "word": "COMPOUNDED",
   "pronunciations": "kəmˈpaʊndəd, kəmˈpaʊndɪd"
 },
 {
   "id": 6900,
   "word": "CONGOLESE",
   "pronunciations": "ˌkɑːngəˈliːz"
 },
 {
   "id": 6901,
   "word": "CONSCIOUSLY",
   "pronunciations": "ˈkɑːnʃəsli"
 },
 {
   "id": 6902,
   "word": "CONSTRUCT",
   "pronunciations": "kənˈstrʌkt, ˈkɑːnstrəkt"
 },
 {
   "id": 6903,
   "word": "CONSULTANT",
   "pronunciations": "kənˈsʌltənt"
 },
 {
   "id": 6904,
   "word": "CONTENDED",
   "pronunciations": "kənˈtɛndɪd"
 },
 {
   "id": 6905,
   "word": "CONTRACTION",
   "pronunciations": "kənˈtrækʃən"
 },
 {
   "id": 6906,
   "word": "CONTROVERSIAL",
   "pronunciations": "ˌkɑːntrəˈvɝːʃəl"
 },
 {
   "id": 6907,
   "word": "CONVERT",
   "pronunciations": "ˈkɑːnvɝt, kənˈvɝːt"
 },
 {
   "id": 6908,
   "word": "COOLER",
   "pronunciations": "ˈkuːlɝ"
 },
 {
   "id": 6909,
   "word": "COOPER",
   "pronunciations": "ˈkuːpɝ"
 },
 {
   "id": 6910,
   "word": "CORRESPONDENT",
   "pronunciations": "ˌkɔrəˈspɑːndənt"
 },
 {
   "id": 6911,
   "word": "COUCH",
   "pronunciations": "ˈkaʊtʃ"
 },
 {
   "id": 6912,
   "word": "COUNTING",
   "pronunciations": "ˈkaʊntɪŋ"
 },
 {
   "id": 6913,
   "word": "CRASHED",
   "pronunciations": "ˈkræʃt"
 },
 {
   "id": 6914,
   "word": "CREDITED",
   "pronunciations": "ˈkrɛdətəd, ˈkrɛdɪtɪd"
 },
 {
   "id": 6915,
   "word": "CREST",
   "pronunciations": "ˈkrɛst"
 },
 {
   "id": 6916,
   "word": "CROSSROADS",
   "pronunciations": "ˈkrɔsˌroʊdz"
 },
 {
   "id": 6917,
   "word": "CROWDS",
   "pronunciations": "ˈkraʊdz"
 },
 {
   "id": 6918,
   "word": "CULTURES",
   "pronunciations": "ˈkʌltʃɝz"
 },
 {
   "id": 6919,
   "word": "CURRENCY",
   "pronunciations": "ˈkɝːənsi"
 },
 {
   "id": 6920,
   "word": "DARING",
   "pronunciations": "ˈdɛrɪŋ"
 },
 {
   "id": 6921,
   "word": "DEAF",
   "pronunciations": "ˈdɛf"
 },
 {
   "id": 6922,
   "word": "DEBTS",
   "pronunciations": "ˈdɛts"
 },
 {
   "id": 6923,
   "word": "DECIDES",
   "pronunciations": "ˌdɪˈsaɪdz"
 },
 {
   "id": 6924,
   "word": "DECIDING",
   "pronunciations": "ˌdɪˈsaɪdɪŋ"
 },
 {
   "id": 6925,
   "word": "DEDUCT",
   "pronunciations": "dɪˈdʌkt"
 },
 {
   "id": 6926,
   "word": "DEDUCTION",
   "pronunciations": "dɪˈdʌkʃən"
 },
 {
   "id": 6927,
   "word": "DEFENSES",
   "pronunciations": "dɪˈfɛnsəz, dɪˈfɛnsɪz"
 },
 {
   "id": 6928,
   "word": "DEFICIT",
   "pronunciations": "ˈdɛfəsət"
 },
 {
   "id": 6929,
   "word": "DELPHINE",
   "pronunciations": "dɛlˈfiːni"
 },
 {
   "id": 6930,
   "word": "DEMOGRAPHIC",
   "pronunciations": "ˌdɛməˈgræfɪk"
 },
 {
   "id": 6931,
   "word": "DENTAL",
   "pronunciations": "ˈdɛntəl"
 },
 {
   "id": 6932,
   "word": "DENTIST",
   "pronunciations": "ˈdɛntəst, ˈdɛntɪst"
 },
 {
   "id": 6933,
   "word": "DEPENDENCE",
   "pronunciations": "dɪˈpɛndəns"
 },
 {
   "id": 6934,
   "word": "DESERVE",
   "pronunciations": "dɪˈzɝːv"
 },
 {
   "id": 6935,
   "word": "DESERVED",
   "pronunciations": "dɪˈzɝːvd"
 },
 {
   "id": 6936,
   "word": "DETACHED",
   "pronunciations": "dɪˈtætʃt, diːˈtætʃt"
 },
 {
   "id": 6937,
   "word": "DETECTED",
   "pronunciations": "dɪˈtɛktəd, dɪˈtɛktɪd"
 },
 {
   "id": 6938,
   "word": "DIALOGUE",
   "pronunciations": "ˈdaɪəˌlɔg"
 },
 {
   "id": 6939,
   "word": "DIALYSIS",
   "pronunciations": "daɪˈæləsəs, daɪˈælɪsɪs"
 },
 {
   "id": 6940,
   "word": "DIES",
   "pronunciations": "ˈdaɪz"
 },
 {
   "id": 6941,
   "word": "DILL",
   "pronunciations": "ˈdɪl"
 },
 {
   "id": 6942,
   "word": "DIMLY",
   "pronunciations": "ˈdɪmli"
 },
 {
   "id": 6943,
   "word": "DISCOUNT",
   "pronunciations": "dɪˈskaʊnt, ˈdɪskaʊnt"
 },
 {
   "id": 6944,
   "word": "DISTINCTLY",
   "pronunciations": "dɪˈstɪŋktli"
 },
 {
   "id": 6945,
   "word": "DOLLS",
   "pronunciations": "ˈdɑːlz"
 },
 {
   "id": 6946,
   "word": "DOWNSTAIRS",
   "pronunciations": "ˈdaʊnˈstɛrz"
 },
 {
   "id": 6947,
   "word": "DURABLE",
   "pronunciations": "ˈdʊrəbəl"
 },
 {
   "id": 6948,
   "word": "DWIGHT",
   "pronunciations": "ˈdwaɪt"
 },
 {
   "id": 6949,
   "word": "EARL",
   "pronunciations": "ˈɝːl"
 },
 {
   "id": 6950,
   "word": "EATEN",
   "pronunciations": "ˈiːtən"
 },
 {
   "id": 6951,
   "word": "EFFECTED",
   "pronunciations": "ɪˈfɛktəd, ɪˈfɛktɪd, ˈiːfɛktəd, ˈiːfɛktɪd"
 },
 {
   "id": 6952,
   "word": "EGG",
   "pronunciations": "ˈɛg"
 },
 {
   "id": 6953,
   "word": "ELEVATOR",
   "pronunciations": "ˈɛləˌveɪtɝ"
 },
 {
   "id": 6954,
   "word": "EMPLOY",
   "pronunciations": "ɛmˈplɔɪ, ɪmˈplɔɪ"
 },
 {
   "id": 6955,
   "word": "ENABLED",
   "pronunciations": "ɛˈneɪbəld, ɪˈneɪbəld"
 },
 {
   "id": 6956,
   "word": "ENACTED",
   "pronunciations": "ɛˈnæktəd"
 },
 {
   "id": 6957,
   "word": "ENTERTAINING",
   "pronunciations": "ˌɛntɝˈteɪnɪŋ, ˌɛnɝˈteɪnɪŋ"
 },
 {
   "id": 6958,
   "word": "EPISODE",
   "pronunciations": "ˈɛpɪˌsoʊd"
 },
 {
   "id": 6959,
   "word": "EQUALITY",
   "pronunciations": "ɪˈkwɑːləti"
 },
 {
   "id": 6960,
   "word": "ESSEX",
   "pronunciations": "ˈɛsɪks"
 },
 {
   "id": 6961,
   "word": "EVERYDAY",
   "pronunciations": "ˈɛvriːˈdeɪ"
 },
 {
   "id": 6962,
   "word": "EVIDENCED",
   "pronunciations": "ˈɛvɪdənst"
 },
 {
   "id": 6963,
   "word": "EXPENDED",
   "pronunciations": "ɪkˈspɛndɪd"
 },
 {
   "id": 6964,
   "word": "EXPLORE",
   "pronunciations": "ɪkˈsplɔr"
 },
 {
   "id": 6965,
   "word": "EXTENDS",
   "pronunciations": "ɪkˈstɛndz"
 },
 {
   "id": 6966,
   "word": "FAITHFUL",
   "pronunciations": "ˈfeɪθfəl"
 },
 {
   "id": 6967,
   "word": "FASHIONABLE",
   "pronunciations": "ˈfæʃənəbəl, ˈfæʃnəbəl"
 },
 {
   "id": 6968,
   "word": "FAVORITES",
   "pronunciations": "ˈfeɪvɝɪts, ˈfeɪvrəts"
 },
 {
   "id": 6969,
   "word": "FEEDS",
   "pronunciations": "ˈfiːdz"
 },
 {
   "id": 6970,
   "word": "FIFTIES",
   "pronunciations": "ˈfɪftiːz"
 },
 {
   "id": 6971,
   "word": "FLIES",
   "pronunciations": "ˈflaɪz"
 },
 {
   "id": 6972,
   "word": "FLOATING",
   "pronunciations": "ˈfloʊtɪŋ"
 },
 {
   "id": 6973,
   "word": "FLOORS",
   "pronunciations": "ˈflɔrz"
 },
 {
   "id": 6974,
   "word": "FLUORESCENCE",
   "pronunciations": "ˌflʊˈrɛsəns"
 },
 {
   "id": 6975,
   "word": "FOCUSED",
   "pronunciations": "ˈfoʊkəst, ˈfoʊkɪst"
 },
 {
   "id": 6976,
   "word": "FOLIAGE",
   "pronunciations": "ˈfoʊlɪdʒ, ˈfoʊliːɪdʒ"
 },
 {
   "id": 6977,
   "word": "FOREMOST",
   "pronunciations": "ˈfɔrˌmoʊst"
 },
 {
   "id": 6978,
   "word": "FORMULAIC",
   "pronunciations": "ˌfɔrmjəˈleɪɪk"
 },
 {
   "id": 6979,
   "word": "FOX",
   "pronunciations": "ˈfɑːks"
 },
 {
   "id": 6980,
   "word": "FREED",
   "pronunciations": "ˈfriːd"
 },
 {
   "id": 6981,
   "word": "FROWNING",
   "pronunciations": "ˈfraʊnɪŋ"
 },
 {
   "id": 6982,
   "word": "FULFILLMENT",
   "pronunciations": "fʊlˈfɪlmənt"
 },
 {
   "id": 6983,
   "word": "FUNCTIONING",
   "pronunciations": "ˈfʌŋkʃənɪŋ"
 },
 {
   "id": 6984,
   "word": "FURIOUSLY",
   "pronunciations": "ˈfjʊriːəsli"
 },
 {
   "id": 6985,
   "word": "GABRIEL",
   "pronunciations": "ˈgeɪbriːəl"
 },
 {
   "id": 6986,
   "word": "GARRY",
   "pronunciations": "ˈgæri, ˈgɛri"
 },
 {
   "id": 6987,
   "word": "GASOLINE",
   "pronunciations": "ˈgæsəˌliːn"
 },
 {
   "id": 6988,
   "word": "GAUGE",
   "pronunciations": "ˈgeɪdʒ"
 },
 {
   "id": 6989,
   "word": "GAZE",
   "pronunciations": "ˈgeɪz"
 },
 {
   "id": 6990,
   "word": "GRANDFATHER",
   "pronunciations": "ˈgrændˌfɑːðɝ, ˈgrænˌfɑːðɝ"
 },
 {
   "id": 6991,
   "word": "GREY",
   "pronunciations": "ˈgreɪ"
 },
 {
   "id": 6992,
   "word": "GRILL",
   "pronunciations": "ˈgrɪl"
 },
 {
   "id": 6993,
   "word": "GRIPPED",
   "pronunciations": "ˈgrɪpt"
 },
 {
   "id": 6994,
   "word": "GUAM",
   "pronunciations": "ˈgwɑːm"
 },
 {
   "id": 6995,
   "word": "GUERRILLA",
   "pronunciations": "gɝˈɪlə"
 },
 {
   "id": 6996,
   "word": "HAIRS",
   "pronunciations": "ˈhɛrz"
 },
 {
   "id": 6997,
   "word": "HALTED",
   "pronunciations": "ˈhɔltəd, ˈhɔltɪd"
 },
 {
   "id": 6998,
   "word": "HARDENED",
   "pronunciations": "ˈhɑːrdənd"
 },
 {
   "id": 6999,
   "word": "HARSH",
   "pronunciations": "ˈhɑːrʃ"
 },
 {
   "id": 7000,
   "word": "HARVEST",
   "pronunciations": "ˈhɑːrvəst"
 },
 {
   "id": 7001,
   "word": "HAZARD",
   "pronunciations": "ˈhæzɝd"
 },
 {
   "id": 7002,
   "word": "HERBERT",
   "pronunciations": "ˈhɝːbɝt"
 },
 {
   "id": 7003,
   "word": "HETMAN",
   "pronunciations": "ˈhɛtmən"
 },
 {
   "id": 7004,
   "word": "HOLIDAYS",
   "pronunciations": "ˈhɑːləˌdeɪz"
 },
 {
   "id": 7005,
   "word": "HOLLOW",
   "pronunciations": "ˈhɑːloʊ"
 },
 {
   "id": 7006,
   "word": "HONESTLY",
   "pronunciations": "ˈɑːnəstli, ˈɑːnəsli"
 },
 {
   "id": 7007,
   "word": "HONORABLE",
   "pronunciations": "ˈɑːnɝəbəl"
 },
 {
   "id": 7008,
   "word": "HOPEFUL",
   "pronunciations": "ˈhoʊpfəl"
 },
 {
   "id": 7009,
   "word": "HOUSED",
   "pronunciations": "ˈhaʊzd"
 },
 {
   "id": 7010,
   "word": "HOWE",
   "pronunciations": "ˈhaʊ"
 },
 {
   "id": 7011,
   "word": "ICY",
   "pronunciations": "ˈaɪsi"
 },
 {
   "id": 7012,
   "word": "IGNORANT",
   "pronunciations": "ˈɪgnɝənt"
 },
 {
   "id": 7013,
   "word": "IMPULSES",
   "pronunciations": "ˈɪmpəlsɪz, ˌɪmˈpʌlsɪz"
 },
 {
   "id": 7014,
   "word": "INCENTIVE",
   "pronunciations": "ˌɪnˈsɛntɪv, ˌɪnˈsɛnɪv"
 },
 {
   "id": 7015,
   "word": "INDEPENDENTLY",
   "pronunciations": "ˌɪndɪˈpɛndəntli"
 },
 {
   "id": 7016,
   "word": "INDICTMENT",
   "pronunciations": "ˌɪnˈdaɪtmənt"
 },
 {
   "id": 7017,
   "word": "INDIVIDUALISM",
   "pronunciations": "ˌɪndɪvɪˈduːəˌlɪzəm"
 },
 {
   "id": 7018,
   "word": "INFRARED",
   "pronunciations": "ˌɪnfrɝˈɛd"
 },
 {
   "id": 7019,
   "word": "INITIATED",
   "pronunciations": "ˌɪˈnɪʃiːˌeɪtəd, ˌɪˈnɪʃiːˌeɪtɪd"
 },
 {
   "id": 7020,
   "word": "INNING",
   "pronunciations": "ˈɪnɪŋ"
 },
 {
   "id": 7021,
   "word": "INSOLUBLE",
   "pronunciations": "ˌɪnˈsɑːljəbəl"
 },
 {
   "id": 7022,
   "word": "INSPECT",
   "pronunciations": "ˌɪnˈspɛkt"
 },
 {
   "id": 7023,
   "word": "INSTALLATION",
   "pronunciations": "ˌɪnstəˈleɪʃən"
 },
 {
   "id": 7024,
   "word": "INSTITUTED",
   "pronunciations": "ˈɪnstɪˌtuːtɪd"
 },
 {
   "id": 7025,
   "word": "INTELLECTUALS",
   "pronunciations": "ˌɪntəˈlɛktʃuːəlz"
 },
 {
   "id": 7026,
   "word": "INTERPRETATIONS",
   "pronunciations": "ˌɪnˌtɝːprɪˈteɪʃənz"
 },
 {
   "id": 7027,
   "word": "INTERSECTIONS",
   "pronunciations": "ˌɪntɝˈsɛkʃənz"
 },
 {
   "id": 7028,
   "word": "INTERVIEWED",
   "pronunciations": "ˈɪntɝvˌjuːd"
 },
 {
   "id": 7029,
   "word": "IRONY",
   "pronunciations": "ˈaɪrəni"
 },
 {
   "id": 7030,
   "word": "JERKED",
   "pronunciations": "ˈdʒɝːkt"
 },
 {
   "id": 7031,
   "word": "JOEL",
   "pronunciations": "ˈdʒoʊəl"
 },
 {
   "id": 7032,
   "word": "JOINTS",
   "pronunciations": "ˈdʒɔɪnts"
 },
 {
   "id": 7033,
   "word": "KEN",
   "pronunciations": "ˈkɛn"
 },
 {
   "id": 7034,
   "word": "KICKING",
   "pronunciations": "ˈkɪkɪŋ"
 },
 {
   "id": 7035,
   "word": "KID'S",
   "pronunciations": "ˈkɪdz"
 },
 {
   "id": 7036,
   "word": "KOREA",
   "pronunciations": "ˌkɔˈriːə"
 },
 {
   "id": 7037,
   "word": "LANDLORD",
   "pronunciations": "ˈlændˌlɔrd"
 },
 {
   "id": 7038,
   "word": "LASTED",
   "pronunciations": "ˈlæstəd, ˈlæstɪd"
 },
 {
   "id": 7039,
   "word": "LATELY",
   "pronunciations": "ˈleɪtli"
 },
 {
   "id": 7040,
   "word": "LAYER",
   "pronunciations": "ˈleɪɝ"
 },
 {
   "id": 7041,
   "word": "LAYING",
   "pronunciations": "ˈleɪɪŋ"
 },
 {
   "id": 7042,
   "word": "LEAF",
   "pronunciations": "ˈliːf"
 },
 {
   "id": 7043,
   "word": "LENS",
   "pronunciations": "ˈlɛnz"
 },
 {
   "id": 7044,
   "word": "LIGHTER",
   "pronunciations": "ˈlaɪtɝ"
 },
 {
   "id": 7045,
   "word": "LIMP",
   "pronunciations": "ˈlɪmp"
 },
 {
   "id": 7046,
   "word": "LIQUIDATION",
   "pronunciations": "ˌlɪkwɪˈdeɪʃən"
 },
 {
   "id": 7047,
   "word": "LOGICALLY",
   "pronunciations": "ˈlɑːdʒɪkli"
 },
 {
   "id": 7048,
   "word": "LOOSELY",
   "pronunciations": "ˈluːsli"
 },
 {
   "id": 7049,
   "word": "LORD'S",
   "pronunciations": "ˈlɔrdz"
 },
 {
   "id": 7050,
   "word": "LOUDER",
   "pronunciations": "ˈlaʊdɝ"
 },
 {
   "id": 7051,
   "word": "LOUSY",
   "pronunciations": "ˈlaʊzi"
 },
 {
   "id": 7052,
   "word": "LUMINOUS",
   "pronunciations": "ˈluːmənəs"
 },
 {
   "id": 7053,
   "word": "LYRIC",
   "pronunciations": "ˈlɪrɪk"
 },
 {
   "id": 7054,
   "word": "MAGICAL",
   "pronunciations": "ˈmædʒɪkəl"
 },
 {
   "id": 7055,
   "word": "MAIDS",
   "pronunciations": "ˈmeɪdz"
 },
 {
   "id": 7056,
   "word": "MAKER",
   "pronunciations": "ˈmeɪkɝ"
 },
 {
   "id": 7057,
   "word": "MANNED",
   "pronunciations": "ˈmænd"
 },
 {
   "id": 7058,
   "word": "MARIA",
   "pronunciations": "mɝˈiːə"
 },
 {
   "id": 7059,
   "word": "MASS.",
   "pronunciations": "ˈmæs, ˌmæsəˈtʃuːsəts"
 },
 {
   "id": 7060,
   "word": "MAX",
   "pronunciations": "ˈmæks"
 },
 {
   "id": 7061,
   "word": "MEANTIME",
   "pronunciations": "ˈmiːnˌtaɪm"
 },
 {
   "id": 7062,
   "word": "MEATS",
   "pronunciations": "ˈmiːts"
 },
 {
   "id": 7063,
   "word": "MELTZER",
   "pronunciations": "ˈmɛltsɝ"
 },
 {
   "id": 7064,
   "word": "MERCENARIES",
   "pronunciations": "ˈmɝːsəˌnɛriːz"
 },
 {
   "id": 7065,
   "word": "METAPHYSICS",
   "pronunciations": "ˌmɛtəˈfɪzɪks"
 },
 {
   "id": 7066,
   "word": "MEXICANS",
   "pronunciations": "ˈmɛksɪkənz"
 },
 {
   "id": 7067,
   "word": "MICROORGANISMS",
   "pronunciations": "ˌmaɪkroʊˈɔrgəˌnɪzəmz"
 },
 {
   "id": 7068,
   "word": "MINERAL",
   "pronunciations": "ˈmɪnɝəl, ˈmɪnrəl"
 },
 {
   "id": 7069,
   "word": "MINING",
   "pronunciations": "ˈmaɪnɪŋ"
 },
 {
   "id": 7070,
   "word": "MINISTERS",
   "pronunciations": "ˈmɪnəstɝz, ˈmɪnɪstɝz"
 },
 {
   "id": 7071,
   "word": "MOLDED",
   "pronunciations": "ˈmoʊldəd, ˈmoʊldɪd"
 },
 {
   "id": 7072,
   "word": "MONROE",
   "pronunciations": "mənˈroʊ"
 },
 {
   "id": 7073,
   "word": "MONSIEUR",
   "pronunciations": "məsˈjɝː"
 },
 {
   "id": 7074,
   "word": "MURDERS",
   "pronunciations": "ˈmɝːdɝz"
 },
 {
   "id": 7075,
   "word": "NAVY'S",
   "pronunciations": "ˈneɪviːz"
 },
 {
   "id": 7076,
   "word": "NAZIS",
   "pronunciations": "ˈnɑːtsiːz"
 },
 {
   "id": 7077,
   "word": "NEARING",
   "pronunciations": "ˈnɪrɪŋ"
 },
 {
   "id": 7078,
   "word": "NEGLECT",
   "pronunciations": "nəˈglɛkt, nɪˈglɛkt"
 },
 {
   "id": 7079,
   "word": "NERVE",
   "pronunciations": "ˈnɝːv"
 },
 {
   "id": 7080,
   "word": "NIGGER",
   "pronunciations": "ˈnɪgɝ"
 },
 {
   "id": 7081,
   "word": "NINETY",
   "pronunciations": "ˈnaɪnti"
 },
 {
   "id": 7082,
   "word": "NITROGEN",
   "pronunciations": "ˈnaɪtrədʒən"
 },
 {
   "id": 7083,
   "word": "NOD",
   "pronunciations": "ˈnɑːd"
 },
 {
   "id": 7084,
   "word": "NOMINATION",
   "pronunciations": "ˌnɑːməˈneɪʃən"
 },
 {
   "id": 7085,
   "word": "NOWADAYS",
   "pronunciations": "ˈnaʊəˌdeɪz"
 },
 {
   "id": 7086,
   "word": "OMINOUS",
   "pronunciations": "ˈɑːmənəs"
 },
 {
   "id": 7087,
   "word": "ORGAN",
   "pronunciations": "ˈɔrgən"
 },
 {
   "id": 7088,
   "word": "OUTLINE",
   "pronunciations": "ˈaʊtˌlaɪn"
 },
 {
   "id": 7089,
   "word": "OVERALL",
   "pronunciations": "ˈoʊvɝˌɔl"
 },
 {
   "id": 7090,
   "word": "PALAZZO",
   "pronunciations": "pəˈlɑːzoʊ"
 },
 {
   "id": 7091,
   "word": "PARADISE",
   "pronunciations": "ˈpɛrəˌdaɪs"
 },
 {
   "id": 7092,
   "word": "PARAGRAPH",
   "pronunciations": "ˈpærəˌgræf, ˈpɛrəˌgræf"
 },
 {
   "id": 7093,
   "word": "PAROCHIAL",
   "pronunciations": "pɝˈoʊkiːəl"
 },
 {
   "id": 7094,
   "word": "PASSIONATE",
   "pronunciations": "ˈpæʃənət"
 },
 {
   "id": 7095,
   "word": "PASSIONS",
   "pronunciations": "ˈpæʃənz"
 },
 {
   "id": 7096,
   "word": "PATROLMAN",
   "pronunciations": "pəˈtroʊlˌmæn"
 },
 {
   "id": 7097,
   "word": "PEARSON",
   "pronunciations": "ˈpɪrsən"
 },
 {
   "id": 7098,
   "word": "PEASANTS",
   "pronunciations": "ˈpɛzənts"
 },
 {
   "id": 7099,
   "word": "PERCEIVED",
   "pronunciations": "pɝˈsiːvd"
 },
 {
   "id": 7100,
   "word": "PERSIANS",
   "pronunciations": "ˈpɝːʒənz"
 },
 {
   "id": 7101,
   "word": "PHONY",
   "pronunciations": "ˈfoʊni"
 },
 {
   "id": 7102,
   "word": "PIRATES",
   "pronunciations": "ˈpaɪrəts"
 },
 {
   "id": 7103,
   "word": "PLEADING",
   "pronunciations": "ˈpliːdɪŋ"
 },
 {
   "id": 7104,
   "word": "PLOW",
   "pronunciations": "ˈplaʊ"
 },
 {
   "id": 7105,
   "word": "POISED",
   "pronunciations": "ˈpɔɪzd"
 },
 {
   "id": 7106,
   "word": "POLES",
   "pronunciations": "ˈpoʊlz"
 },
 {
   "id": 7107,
   "word": "POPS",
   "pronunciations": "ˈpɑːps"
 },
 {
   "id": 7108,
   "word": "POPULATED",
   "pronunciations": "ˈpɑːpjəˌleɪtəd"
 },
 {
   "id": 7109,
   "word": "POROUS",
   "pronunciations": "ˈpɔrəs"
 },
 {
   "id": 7110,
   "word": "PRAY",
   "pronunciations": "ˈpreɪ"
 },
 {
   "id": 7111,
   "word": "PRAYED",
   "pronunciations": "ˈpreɪd"
 },
 {
   "id": 7112,
   "word": "PREMIUM",
   "pronunciations": "ˈpriːmiːəm"
 },
 {
   "id": 7113,
   "word": "PRESUMED",
   "pronunciations": "prəˈzuːmd, prɪˈzuːmd, priːˈzuːmd"
 },
 {
   "id": 7114,
   "word": "PRETENDING",
   "pronunciations": "priːˈtɛndɪŋ"
 },
 {
   "id": 7115,
   "word": "PRIVACY",
   "pronunciations": "ˈpraɪvəsi"
 },
 {
   "id": 7116,
   "word": "PROCEEDING",
   "pronunciations": "prəˈsiːdɪŋ, proʊˈsiːdɪŋ"
 },
 {
   "id": 7117,
   "word": "PROCESSED",
   "pronunciations": "ˈprɑːsɛst"
 },
 {
   "id": 7118,
   "word": "PROMOTED",
   "pronunciations": "prəˈmoʊtəd"
 },
 {
   "id": 7119,
   "word": "PROVINCES",
   "pronunciations": "ˈprɑːvənsəz"
 },
 {
   "id": 7120,
   "word": "PTOLEMAIC",
   "pronunciations": "ˌtɑːləˈmeɪɪk"
 },
 {
   "id": 7121,
   "word": "PURITY",
   "pronunciations": "ˈpjʊrəti, ˈpjʊrɪti"
 },
 {
   "id": 7122,
   "word": "QUAINT",
   "pronunciations": "ˈkweɪnt"
 },
 {
   "id": 7123,
   "word": "RACED",
   "pronunciations": "ˈreɪst"
 },
 {
   "id": 7124,
   "word": "RAILWAY",
   "pronunciations": "ˈreɪlˌweɪ"
 },
 {
   "id": 7125,
   "word": "REACTED",
   "pronunciations": "riːˈæktəd, riːˈæktɪd"
 },
 {
   "id": 7126,
   "word": "REALIZING",
   "pronunciations": "ˈriːəˌlaɪzɪŋ"
 },
 {
   "id": 7127,
   "word": "RECALLS",
   "pronunciations": "ˈriːˌkɔlz, rɪˈkɔlz"
 },
 {
   "id": 7128,
   "word": "REQUESTED",
   "pronunciations": "rɪˈkwɛstɪd, riːˈkwɛstəd, riːˈkwɛstɪd"
 },
 {
   "id": 7129,
   "word": "RESORT",
   "pronunciations": "rɪˈzɔrt, riːˈzɔrt, riːˈsɔrt"
 },
 {
   "id": 7130,
   "word": "RESTAURANTS",
   "pronunciations": "ˈrɛstɝˌɑːnts, ˈrɛˌstrɑːnts"
 },
 {
   "id": 7131,
   "word": "RESULTANT",
   "pronunciations": "riːˈzʌltənt"
 },
 {
   "id": 7132,
   "word": "RETENTION",
   "pronunciations": "riːˈtɛnʃən"
 },
 {
   "id": 7133,
   "word": "RHYTHMS",
   "pronunciations": "ˈrɪðəmz"
 },
 {
   "id": 7134,
   "word": "RIBBON",
   "pronunciations": "ˈrɪbən"
 },
 {
   "id": 7135,
   "word": "RICHARDSON",
   "pronunciations": "ˈrɪtʃɝdsən"
 },
 {
   "id": 7136,
   "word": "RICHMOND",
   "pronunciations": "ˈrɪtʃmənd"
 },
 {
   "id": 7137,
   "word": "RIDERS",
   "pronunciations": "ˈraɪdɝz"
 },
 {
   "id": 7138,
   "word": "RIVAL",
   "pronunciations": "ˈraɪvəl"
 },
 {
   "id": 7139,
   "word": "ROBERTS'",
   "pronunciations": "ˈrɑːbɝts"
 },
 {
   "id": 7140,
   "word": "ROCKEFELLER",
   "pronunciations": "ˈrɑːkəˌfɛlɝ"
 },
 {
   "id": 7141,
   "word": "RUSSELL",
   "pronunciations": "ˈrʌsəl"
 },
 {
   "id": 7142,
   "word": "SADLY",
   "pronunciations": "ˈsædli"
 },
 {
   "id": 7143,
   "word": "SAIL",
   "pronunciations": "ˈseɪl"
 },
 {
   "id": 7144,
   "word": "SALESMAN",
   "pronunciations": "ˈseɪlzmən"
 },
 {
   "id": 7145,
   "word": "SALOON",
   "pronunciations": "səˈluːn"
 },
 {
   "id": 7146,
   "word": "SANSOM",
   "pronunciations": "ˈsænsəm"
 },
 {
   "id": 7147,
   "word": "SCRATCHING",
   "pronunciations": "ˈskrætʃɪŋ"
 },
 {
   "id": 7148,
   "word": "SELKIRK",
   "pronunciations": "ˈsɛlkɝk"
 },
 {
   "id": 7149,
   "word": "SERMON",
   "pronunciations": "ˈsɝːmən"
 },
 {
   "id": 7150,
   "word": "SETTLERS",
   "pronunciations": "ˈsɛtlɝz, ˈsɛtəlɝz"
 },
 {
   "id": 7151,
   "word": "SHELF",
   "pronunciations": "ˈʃɛlf"
 },
 {
   "id": 7152,
   "word": "SHELLEY",
   "pronunciations": "ˈʃɛli"
 },
 {
   "id": 7153,
   "word": "SILK",
   "pronunciations": "ˈsɪlk"
 },
 {
   "id": 7154,
   "word": "SIXTEENTH",
   "pronunciations": "sɪkˈstiːnθ, ˈsɪkˈstiːnθ"
 },
 {
   "id": 7155,
   "word": "SIZES",
   "pronunciations": "ˈsaɪzəz, ˈsaɪzɪz"
 },
 {
   "id": 7156,
   "word": "SKIES",
   "pronunciations": "ˈskaɪz"
 },
 {
   "id": 7157,
   "word": "SMOOTHLY",
   "pronunciations": "ˈsmuːðli"
 },
 {
   "id": 7158,
   "word": "SNAP",
   "pronunciations": "ˈsnæp"
 },
 {
   "id": 7159,
   "word": "SODIUM",
   "pronunciations": "ˈsoʊdiːəm"
 },
 {
   "id": 7160,
   "word": "SOLEMN",
   "pronunciations": "ˈsɑːləm"
 },
 {
   "id": 7161,
   "word": "SOMEDAY",
   "pronunciations": "ˈsʌmˌdeɪ"
 },
 {
   "id": 7162,
   "word": "SORTS",
   "pronunciations": "ˈsɔrts"
 },
 {
   "id": 7163,
   "word": "SOVIETS",
   "pronunciations": "ˈsoʊviːˌɛts"
 },
 {
   "id": 7164,
   "word": "SPARK",
   "pronunciations": "ˈspɑːrk"
 },
 {
   "id": 7165,
   "word": "STAGGERED",
   "pronunciations": "ˈstægɝd"
 },
 {
   "id": 7166,
   "word": "STATESMAN",
   "pronunciations": "ˈsteɪtsmən"
 },
 {
   "id": 7167,
   "word": "STEREO",
   "pronunciations": "ˈstɛriːˌoʊ"
 },
 {
   "id": 7168,
   "word": "STEREOTYPE",
   "pronunciations": "ˈstɛriːoʊˌtaɪp"
 },
 {
   "id": 7169,
   "word": "STOCKADE",
   "pronunciations": "ˈstɑːˌkeɪd"
 },
 {
   "id": 7170,
   "word": "STONES",
   "pronunciations": "ˈstoʊnz"
 },
 {
   "id": 7171,
   "word": "STRAY",
   "pronunciations": "ˈstreɪ"
 },
 {
   "id": 7172,
   "word": "STRENGTHENING",
   "pronunciations": "ˈstrɛŋθənɪŋ"
 },
 {
   "id": 7173,
   "word": "STROKES",
   "pronunciations": "ˈstroʊks"
 },
 {
   "id": 7174,
   "word": "STUBBORN",
   "pronunciations": "ˈstʌbɝn"
 },
 {
   "id": 7175,
   "word": "SUCCESSIVE",
   "pronunciations": "səkˈsɛsɪv"
 },
 {
   "id": 7176,
   "word": "SUMMIT",
   "pronunciations": "ˈsʌmət, ˈsʌmɪt"
 },
 {
   "id": 7177,
   "word": "SUPPOSEDLY",
   "pronunciations": "səˈpoʊzədli"
 },
 {
   "id": 7178,
   "word": "SURVEYS",
   "pronunciations": "sɝˈveɪz, ˈsɝːˌveɪz"
 },
 {
   "id": 7179,
   "word": "SUSPENSION",
   "pronunciations": "səˈspɛnʃən"
 },
 {
   "id": 7180,
   "word": "SWALLOWED",
   "pronunciations": "ˈswɑːloʊd"
 },
 {
   "id": 7181,
   "word": "SWITZERLAND",
   "pronunciations": "ˈswɪtsɝlənd"
 },
 {
   "id": 7182,
   "word": "SWOLLEN",
   "pronunciations": "ˈswoʊlən"
 },
 {
   "id": 7183,
   "word": "SYNTHETIC",
   "pronunciations": "sɪnˈθɛtɪk"
 },
 {
   "id": 7184,
   "word": "TANK",
   "pronunciations": "ˈtæŋk"
 },
 {
   "id": 7185,
   "word": "TAR",
   "pronunciations": "ˈtɑːr"
 },
 {
   "id": 7186,
   "word": "TECHNICIANS",
   "pronunciations": "tɛkˈnɪʃənz"
 },
 {
   "id": 7187,
   "word": "TEMPER",
   "pronunciations": "ˈtɛmpɝ"
 },
 {
   "id": 7188,
   "word": "TEMPTATION",
   "pronunciations": "tɛmˈteɪʃən"
 },
 {
   "id": 7189,
   "word": "TENURE",
   "pronunciations": "ˈtɛnjɝ"
 },
 {
   "id": 7190,
   "word": "TERMINAL",
   "pronunciations": "ˈtɝːmənəl"
 },
 {
   "id": 7191,
   "word": "TERMINATE",
   "pronunciations": "ˈtɝːməˌneɪt"
 },
 {
   "id": 7192,
   "word": "THEATRICAL",
   "pronunciations": "θiːˈætrɪkəl"
 },
 {
   "id": 7193,
   "word": "THERAPY",
   "pronunciations": "ˈθɛrəpi"
 },
 {
   "id": 7194,
   "word": "THY",
   "pronunciations": "ˈðaɪ"
 },
 {
   "id": 7195,
   "word": "TILTED",
   "pronunciations": "ˈtɪltəd, ˈtɪltɪd"
 },
 {
   "id": 7196,
   "word": "TIN",
   "pronunciations": "ˈtɪn"
 },
 {
   "id": 7197,
   "word": "TIRES",
   "pronunciations": "ˈtaɪɝz"
 },
 {
   "id": 7198,
   "word": "TITLED",
   "pronunciations": "ˈtaɪtəld"
 },
 {
   "id": 7199,
   "word": "TOURISTS",
   "pronunciations": "ˈtʊrəsts, ˈtʊrɪsts"
 },
 {
   "id": 7200,
   "word": "TRACED",
   "pronunciations": "ˈtreɪst"
 },
 {
   "id": 7201,
   "word": "TRACKS",
   "pronunciations": "ˈtræks"
 },
 {
   "id": 7202,
   "word": "TRAILERS",
   "pronunciations": "ˈtreɪlɝz"
 },
 {
   "id": 7203,
   "word": "TRI-STATE",
   "pronunciations": "ˈtraɪˈsteɪt"
 },
 {
   "id": 7204,
   "word": "TRIBES",
   "pronunciations": "ˈtraɪbz"
 },
 {
   "id": 7205,
   "word": "TRIGGER",
   "pronunciations": "ˈtrɪgɝ"
 },
 {
   "id": 7206,
   "word": "TROT",
   "pronunciations": "ˈtrɑːt"
 },
 {
   "id": 7207,
   "word": "TRUJILLO",
   "pronunciations": "truːˈhiːoʊ"
 },
 {
   "id": 7208,
   "word": "TURKISH",
   "pronunciations": "ˈtɝːkɪʃ"
 },
 {
   "id": 7209,
   "word": "TURMOIL",
   "pronunciations": "ˈtɝːˌmɔɪl"
 },
 {
   "id": 7210,
   "word": "TWINS",
   "pronunciations": "ˈtwɪnz"
 },
 {
   "id": 7211,
   "word": "TWO-THIRDS",
   "pronunciations": "ˌtuːˈθɝːdz"
 },
 {
   "id": 7212,
   "word": "UNADJUSTED",
   "pronunciations": "ˌənəˈdʒʌstɪd"
 },
 {
   "id": 7213,
   "word": "UNDERGOING",
   "pronunciations": "ˌəndɝˈgoʊɪŋ"
 },
 {
   "id": 7214,
   "word": "UNLOCKED",
   "pronunciations": "ənˈlɑːkt"
 },
 {
   "id": 7215,
   "word": "UNSTRUCTURED",
   "pronunciations": "ənˈstrʌkʃɝd"
 },
 {
   "id": 7216,
   "word": "UNWED",
   "pronunciations": "ənˈwɛd"
 },
 {
   "id": 7217,
   "word": "URGENCY",
   "pronunciations": "ˈɝːdʒənsi"
 },
 {
   "id": 7218,
   "word": "VAPOR",
   "pronunciations": "ˈveɪpɝ"
 },
 {
   "id": 7219,
   "word": "VESSELS",
   "pronunciations": "ˈvɛsəlz"
 },
 {
   "id": 7220,
   "word": "VILLAGES",
   "pronunciations": "ˈvɪlədʒɪz, ˈvɪlɪdʒɪz"
 },
 {
   "id": 7221,
   "word": "VIOLENTLY",
   "pronunciations": "ˈvaɪələntli"
 },
 {
   "id": 7222,
   "word": "WATERCOLOR",
   "pronunciations": "ˈwɔtɝˌkəlɝ"
 },
 {
   "id": 7223,
   "word": "WAYNE",
   "pronunciations": "ˈweɪn"
 },
 {
   "id": 7224,
   "word": "WEALTHY",
   "pronunciations": "ˈwɛlθi"
 },
 {
   "id": 7225,
   "word": "WELCOMED",
   "pronunciations": "ˈwɛlkəmd"
 },
 {
   "id": 7226,
   "word": "WHIPPED",
   "pronunciations": "ˈwɪpt, ˈhwɪpt"
 },
 {
   "id": 7227,
   "word": "WHISPER",
   "pronunciations": "ˈwɪspɝ, ˈhwɪspɝ"
 },
 {
   "id": 7228,
   "word": "WINCHESTER",
   "pronunciations": "ˈwɪnˌtʃɛstɝ"
 },
 {
   "id": 7229,
   "word": "WRINKLED",
   "pronunciations": "ˈrɪŋkəld"
 },
 {
   "id": 7230,
   "word": "YANG",
   "pronunciations": "ˈjæŋ"
 },
 {
   "id": 7231,
   "word": "YEARLY",
   "pronunciations": "ˈjɪrli"
 },
 {
   "id": 7232,
   "word": "YIELDED",
   "pronunciations": "ˈjiːldəd, ˈjiːldɪd"
 },
 {
   "id": 7233,
   "word": "YOUTHFUL",
   "pronunciations": "ˈjuːθfəl"
 },
 {
   "id": 7234,
   "word": "ACCUMULATION",
   "pronunciations": "əˌkjuːmjəˈleɪʃən"
 },
 {
   "id": 7235,
   "word": "ACQUIRING",
   "pronunciations": "əˈkwaɪrɪŋ, əˈkwaɪɝɪŋ"
 },
 {
   "id": 7236,
   "word": "ACREAGE",
   "pronunciations": "ˈeɪkərɪdʒ, ˈeɪkrɪdʒ"
 },
 {
   "id": 7237,
   "word": "ACRYLIC",
   "pronunciations": "əˈkrɪlɪk"
 },
 {
   "id": 7238,
   "word": "ADJUSTING",
   "pronunciations": "əˈdʒʌstɪŋ"
 },
 {
   "id": 7239,
   "word": "ADOPTING",
   "pronunciations": "əˈdɑːptɪŋ"
 },
 {
   "id": 7240,
   "word": "ADOPTION",
   "pronunciations": "əˈdɑːpʃən"
 },
 {
   "id": 7241,
   "word": "ADVERSE",
   "pronunciations": "ædˈvɝːs, ˈædˌvɝːs, ˌædˈvɝːs"
 },
 {
   "id": 7242,
   "word": "AFFORDED",
   "pronunciations": "əˈfɔrdəd"
 },
 {
   "id": 7243,
   "word": "AGREEABLE",
   "pronunciations": "əˈgriːəbəl"
 },
 {
   "id": 7244,
   "word": "AGREES",
   "pronunciations": "əˈgriːz"
 },
 {
   "id": 7245,
   "word": "AIDED",
   "pronunciations": "ˈeɪdɪd"
 },
 {
   "id": 7246,
   "word": "AIRPLANE",
   "pronunciations": "ˈɛrˌpleɪn"
 },
 {
   "id": 7247,
   "word": "ALBANY",
   "pronunciations": "ˈɔlbəni"
 },
 {
   "id": 7248,
   "word": "ALTERNATE",
   "pronunciations": "ˈɔltɝnət, ˈɔltɝˌneɪt"
 },
 {
   "id": 7249,
   "word": "AMAZED",
   "pronunciations": "əˈmeɪzd"
 },
 {
   "id": 7250,
   "word": "AMBIGUITY",
   "pronunciations": "ˌæmbɪgˈjuːəti"
 },
 {
   "id": 7251,
   "word": "ANGLES",
   "pronunciations": "ˈæŋgəlz"
 },
 {
   "id": 7252,
   "word": "ANGLICAN",
   "pronunciations": "ˈæŋglɪkən"
 },
 {
   "id": 7253,
   "word": "ANTICIPATE",
   "pronunciations": "ænˈtɪsəˌpeɪt"
 },
 {
   "id": 7254,
   "word": "APPETITE",
   "pronunciations": "ˈæpəˌtaɪt"
 },
 {
   "id": 7255,
   "word": "APPRECIATED",
   "pronunciations": "əˈpriːʃiːˌeɪtɪd"
 },
 {
   "id": 7256,
   "word": "APPREHENSION",
   "pronunciations": "ˌæprɪˈhɛnʃən"
 },
 {
   "id": 7257,
   "word": "APPROPRIATED",
   "pronunciations": "əˈproʊpriːˌeɪtɪd"
 },
 {
   "id": 7258,
   "word": "APPROXIMATE",
   "pronunciations": "əˈprɑːksəmət, əˈprɑːksəˌmeɪt"
 },
 {
   "id": 7259,
   "word": "ARCHAEOLOGY",
   "pronunciations": "ˌɑːrkiːˈɑːlədʒi"
 },
 {
   "id": 7260,
   "word": "ARCHED",
   "pronunciations": "ˈɑːrtʃt"
 },
 {
   "id": 7261,
   "word": "ARCHITECTURE",
   "pronunciations": "ˈɑːrkəˌtɛktʃɝ"
 },
 {
   "id": 7262,
   "word": "ARISING",
   "pronunciations": "ɝˈaɪzɪŋ"
 },
 {
   "id": 7263,
   "word": "ARRAY",
   "pronunciations": "ɝˈeɪ"
 },
 {
   "id": 7264,
   "word": "ARTILLERY",
   "pronunciations": "ɑːrˈtɪlɝi"
 },
 {
   "id": 7265,
   "word": "ASH",
   "pronunciations": "ˈæʃ"
 },
 {
   "id": 7266,
   "word": "ASSEMBLIES",
   "pronunciations": "əˈsɛmbliːz"
 },
 {
   "id": 7267,
   "word": "ASSISTANTS",
   "pronunciations": "əˈsɪstənts"
 },
 {
   "id": 7268,
   "word": "AUSTRALIA",
   "pronunciations": "ɔˈstreɪljə"
 },
 {
   "id": 7269,
   "word": "AUTONOMIC",
   "pronunciations": "ˌɔtəˈnɑːmɪk"
 },
 {
   "id": 7270,
   "word": "AVOIDING",
   "pronunciations": "əˈvɔɪdɪŋ"
 },
 {
   "id": 7271,
   "word": "AWKWARD",
   "pronunciations": "ˈɔkwɝd"
 },
 {
   "id": 7272,
   "word": "BANDS",
   "pronunciations": "ˈbændz"
 },
 {
   "id": 7273,
   "word": "BARBED",
   "pronunciations": "ˈbɑːrbd"
 },
 {
   "id": 7274,
   "word": "BARNETT",
   "pronunciations": "bɑːrˈnɛt"
 },
 {
   "id": 7275,
   "word": "BAROQUE",
   "pronunciations": "bɝˈoʊk"
 },
 {
   "id": 7276,
   "word": "BEE",
   "pronunciations": "ˈbiː"
 },
 {
   "id": 7277,
   "word": "BEG",
   "pronunciations": "ˈbɛg"
 },
 {
   "id": 7278,
   "word": "BENEFICIAL",
   "pronunciations": "ˌbɛnəˈfɪʃəl"
 },
 {
   "id": 7279,
   "word": "BLANKETS",
   "pronunciations": "ˈblæŋkəts"
 },
 {
   "id": 7280,
   "word": "BLOND",
   "pronunciations": "ˈblɑːnd"
 },
 {
   "id": 7281,
   "word": "BOREDOM",
   "pronunciations": "ˈbɔrdəm"
 },
 {
   "id": 7282,
   "word": "BOULEVARD",
   "pronunciations": "ˈbʊləˌvɑːrd"
 },
 {
   "id": 7283,
   "word": "BREAST",
   "pronunciations": "ˈbrɛst"
 },
 {
   "id": 7284,
   "word": "BRONZE",
   "pronunciations": "ˈbrɑːnz"
 },
 {
   "id": 7285,
   "word": "BURIAL",
   "pronunciations": "ˈbɛriːəl"
 },
 {
   "id": 7286,
   "word": "BUYS",
   "pronunciations": "ˈbaɪz"
 },
 {
   "id": 7287,
   "word": "CALCIUM",
   "pronunciations": "ˈkælsiːəm"
 },
 {
   "id": 7288,
   "word": "CALENDARS",
   "pronunciations": "ˈkæləndɝz"
 },
 {
   "id": 7289,
   "word": "CALF",
   "pronunciations": "ˈkæf"
 },
 {
   "id": 7290,
   "word": "CALMLY",
   "pronunciations": "ˈkɑːmli, ˈkɑːlmli"
 },
 {
   "id": 7291,
   "word": "CARRIAGE",
   "pronunciations": "ˈkærɪdʒ, ˈkɛrədʒ"
 },
 {
   "id": 7292,
   "word": "CARRIERS",
   "pronunciations": "ˈkæriːɝz, ˈkɛriːɝz"
 },
 {
   "id": 7293,
   "word": "CATASTROPHE",
   "pronunciations": "kəˈtæstrəfi"
 },
 {
   "id": 7294,
   "word": "CEMENT",
   "pronunciations": "səˈmɛnt, sɪˈmɛnt"
 },
 {
   "id": 7295,
   "word": "CENSUS",
   "pronunciations": "ˈsɛnsəs"
 },
 {
   "id": 7296,
   "word": "CHAMBERS",
   "pronunciations": "ˈtʃeɪmbɝz"
 },
 {
   "id": 7297,
   "word": "CHEAPER",
   "pronunciations": "ˈtʃiːpɝ"
 },
 {
   "id": 7298,
   "word": "CHILDISH",
   "pronunciations": "ˈtʃaɪldɪʃ"
 },
 {
   "id": 7299,
   "word": "CHOOSING",
   "pronunciations": "ˈtʃuːzɪŋ"
 },
 {
   "id": 7300,
   "word": "CHRONIC",
   "pronunciations": "ˈkrɑːnɪk"
 },
 {
   "id": 7301,
   "word": "CIVILIZED",
   "pronunciations": "ˈsɪvəˌlaɪzd"
 },
 {
   "id": 7302,
   "word": "CLAUDE",
   "pronunciations": "ˈklɔd"
 },
 {
   "id": 7303,
   "word": "CLIFF",
   "pronunciations": "ˈklɪf"
 },
 {
   "id": 7304,
   "word": "CLIMBING",
   "pronunciations": "ˈklaɪmɪŋ"
 },
 {
   "id": 7305,
   "word": "COEXISTENCE",
   "pronunciations": "ˌkoʊɪgˈzɪstəns"
 },
 {
   "id": 7306,
   "word": "COHESIVE",
   "pronunciations": "koʊˈhiːsɪv"
 },
 {
   "id": 7307,
   "word": "COINCIDENCE",
   "pronunciations": "koʊˈɪnsɪdəns"
 },
 {
   "id": 7308,
   "word": "COMMANDING",
   "pronunciations": "kəˈmændɪŋ"
 },
 {
   "id": 7309,
   "word": "COMMERCIALLY",
   "pronunciations": "kəˈmɝːʃəli"
 },
 {
   "id": 7310,
   "word": "COMMISSIONS",
   "pronunciations": "kəˈmɪʃənz"
 },
 {
   "id": 7311,
   "word": "COMMUNION",
   "pronunciations": "kəˈmjuːnjən"
 },
 {
   "id": 7312,
   "word": "COMPARTMENT",
   "pronunciations": "kəmˈpɑːrtmənt"
 },
 {
   "id": 7313,
   "word": "COMPILATION",
   "pronunciations": "ˌkɑːmpəˈleɪʃən"
 },
 {
   "id": 7314,
   "word": "COMPLAIN",
   "pronunciations": "kəmˈpleɪn"
 },
 {
   "id": 7315,
   "word": "COMPOUND",
   "pronunciations": "ˈkɑːmpaʊnd, kəmˈpaʊnd"
 },
 {
   "id": 7316,
   "word": "COMPRISE",
   "pronunciations": "kəmˈpraɪz"
 },
 {
   "id": 7317,
   "word": "COMPUTING",
   "pronunciations": "kəmˈpjuːtɪŋ"
 },
 {
   "id": 7318,
   "word": "CONCEDED",
   "pronunciations": "kənˈsiːdɪd"
 },
 {
   "id": 7319,
   "word": "CONCEIVABLE",
   "pronunciations": "kənˈsiːvəbəl"
 },
 {
   "id": 7320,
   "word": "CONCENTRATE",
   "pronunciations": "ˈkɑːnsənˌtreɪt"
 },
 {
   "id": 7321,
   "word": "CONCERTO",
   "pronunciations": "kənˈtʃɛrtoʊ"
 },
 {
   "id": 7322,
   "word": "CONCLUSIVE",
   "pronunciations": "kənˈkluːsɪv"
 },
 {
   "id": 7323,
   "word": "CONFESS",
   "pronunciations": "kənˈfɛs"
 },
 {
   "id": 7324,
   "word": "CONGRUENCE",
   "pronunciations": "ˈkɔngruːəns"
 },
 {
   "id": 7325,
   "word": "CONSTITUTED",
   "pronunciations": "ˈkɑːnstəˌtuːtəd"
 },
 {
   "id": 7326,
   "word": "CONSTITUTES",
   "pronunciations": "ˈkɑːnstəˌtuːts"
 },
 {
   "id": 7327,
   "word": "CONSULT",
   "pronunciations": "kənˈsʌlt"
 },
 {
   "id": 7328,
   "word": "CONTRASTING",
   "pronunciations": "kənˈtræstɪŋ"
 },
 {
   "id": 7329,
   "word": "CONTRASTS",
   "pronunciations": "ˈkɑːntræsts, kənˈtræsts"
 },
 {
   "id": 7330,
   "word": "CONVINCING",
   "pronunciations": "kənˈvɪnsɪŋ"
 },
 {
   "id": 7331,
   "word": "COOPERATE",
   "pronunciations": "koʊˈɑːpɝˌeɪt, ˈkwɑːpɝˌeɪt"
 },
 {
   "id": 7332,
   "word": "CORP.",
   "pronunciations": "ˈkɔrp, ˈkɔrpɝˈeɪʃən"
 },
 {
   "id": 7333,
   "word": "COUNTERPARTS",
   "pronunciations": "ˈkaʊntɝˌpɑːrts"
 },
 {
   "id": 7334,
   "word": "CRAWL",
   "pronunciations": "ˈkrɔl"
 },
 {
   "id": 7335,
   "word": "CREPT",
   "pronunciations": "ˈkrɛpt"
 },
 {
   "id": 7336,
   "word": "CRITERIA",
   "pronunciations": "kraɪˈtɪriːə"
 },
 {
   "id": 7337,
   "word": "CRITERION",
   "pronunciations": "kraɪˈtɪriːən"
 },
 {
   "id": 7338,
   "word": "CRITICISMS",
   "pronunciations": "ˈkrɪtɪˌsɪzəmz"
 },
 {
   "id": 7339,
   "word": "CROMBIE",
   "pronunciations": "ˈkrɑːmbi"
 },
 {
   "id": 7340,
   "word": "CUBISM",
   "pronunciations": "ˈkjuːbɪzəm"
 },
 {
   "id": 7341,
   "word": "CULT",
   "pronunciations": "ˈkʌlt"
 },
 {
   "id": 7342,
   "word": "CURIOUSLY",
   "pronunciations": "ˈkjʊriːəsli"
 },
 {
   "id": 7343,
   "word": "CURSE",
   "pronunciations": "ˈkɝːs"
 },
 {
   "id": 7344,
   "word": "CURSED",
   "pronunciations": "ˈkɝːst"
 },
 {
   "id": 7345,
   "word": "CYLINDRICAL",
   "pronunciations": "səˈlɪndrɪkəl, sɪˈlɪndrɪkəl"
 },
 {
   "id": 7346,
   "word": "DASH",
   "pronunciations": "ˈdæʃ"
 },
 {
   "id": 7347,
   "word": "DECLARES",
   "pronunciations": "dɪˈklɛrz"
 },
 {
   "id": 7348,
   "word": "DEDUCTIONS",
   "pronunciations": "dɪˈdʌkʃənz"
 },
 {
   "id": 7349,
   "word": "DEFICIENCY",
   "pronunciations": "dɪˈfɪʃənsi"
 },
 {
   "id": 7350,
   "word": "DEL",
   "pronunciations": "ˈdɛl"
 },
 {
   "id": 7351,
   "word": "DELEGATION",
   "pronunciations": "ˌdɛləˈgeɪʃən"
 },
 {
   "id": 7352,
   "word": "DEPRESSED",
   "pronunciations": "dɪˈprɛst"
 },
 {
   "id": 7353,
   "word": "DESCENT",
   "pronunciations": "dɪˈsɛnt"
 },
 {
   "id": 7354,
   "word": "DEVELOPS",
   "pronunciations": "dɪˈvɛləps"
 },
 {
   "id": 7355,
   "word": "DILLON",
   "pronunciations": "ˈdɪlən"
 },
 {
   "id": 7356,
   "word": "DIMENSIONAL",
   "pronunciations": "dɪˈmɛnʃənəl"
 },
 {
   "id": 7357,
   "word": "DISAGREEMENT",
   "pronunciations": "dɪsəˈgriːmənt"
 },
 {
   "id": 7358,
   "word": "DISAPPEAR",
   "pronunciations": "ˌdɪsəˈpɪr, ˌdɪsəˈpiːr"
 },
 {
   "id": 7359,
   "word": "DISARMAMENT",
   "pronunciations": "dɪˈsɑːrməmənt"
 },
 {
   "id": 7360,
   "word": "DISCIPLINED",
   "pronunciations": "ˈdɪsəplənd"
 },
 {
   "id": 7361,
   "word": "DISCREPANCY",
   "pronunciations": "dɪˈskrɛpənsi"
 },
 {
   "id": 7362,
   "word": "DISGUISED",
   "pronunciations": "dɪsˈgaɪzd"
 },
 {
   "id": 7363,
   "word": "DISLIKED",
   "pronunciations": "dɪˈslaɪkt"
 },
 {
   "id": 7364,
   "word": "DISTORTED",
   "pronunciations": "dɪˈstɔrtəd, dɪˈstɔrtɪd"
 },
 {
   "id": 7365,
   "word": "DODGE",
   "pronunciations": "ˈdɑːdʒ"
 },
 {
   "id": 7366,
   "word": "DOMINANCE",
   "pronunciations": "ˈdɑːmənəns"
 },
 {
   "id": 7367,
   "word": "DOSE",
   "pronunciations": "ˈdoʊs"
 },
 {
   "id": 7368,
   "word": "DOTS",
   "pronunciations": "ˈdɑːts"
 },
 {
   "id": 7369,
   "word": "DOUBLED",
   "pronunciations": "ˈdʌbəld"
 },
 {
   "id": 7370,
   "word": "DOZENS",
   "pronunciations": "ˈdʌzənz"
 },
 {
   "id": 7371,
   "word": "DRASTIC",
   "pronunciations": "ˈdræstɪk"
 },
 {
   "id": 7372,
   "word": "DREAMING",
   "pronunciations": "ˈdriːmɪŋ"
 },
 {
   "id": 7373,
   "word": "DRIFTING",
   "pronunciations": "ˈdrɪftɪŋ"
 },
 {
   "id": 7374,
   "word": "DRUM",
   "pronunciations": "ˈdrʌm"
 },
 {
   "id": 7375,
   "word": "DUKE",
   "pronunciations": "ˈduːk"
 },
 {
   "id": 7376,
   "word": "DURATION",
   "pronunciations": "ˈdʊˈreɪʃən"
 },
 {
   "id": 7377,
   "word": "DYLAN",
   "pronunciations": "ˈdɪlən"
 },
 {
   "id": 7378,
   "word": "EASTER",
   "pronunciations": "ˈiːstɝ"
 },
 {
   "id": 7379,
   "word": "ECCENTRIC",
   "pronunciations": "ˌɛkˈsɛntrɪk"
 },
 {
   "id": 7380,
   "word": "ECONOMICALLY",
   "pronunciations": "ˌɛkəˈnɑːmɪkli, ˌiːkəˈnɑːmɪkli"
 },
 {
   "id": 7381,
   "word": "EDWIN",
   "pronunciations": "ˈɛdwən, ˈɛdwɪn"
 },
 {
   "id": 7382,
   "word": "EIGHTY",
   "pronunciations": "ˈeɪti"
 },
 {
   "id": 7383,
   "word": "EISENHOWER'S",
   "pronunciations": "ˈaɪzənˌhaʊɝz"
 },
 {
   "id": 7384,
   "word": "ELECTRONS",
   "pronunciations": "ˌɪˈlɛktrɑːnz"
 },
 {
   "id": 7385,
   "word": "ELEMENTAL",
   "pronunciations": "ˌɛləˈmɛntəl, ˌɛləˈmɛnəl"
 },
 {
   "id": 7386,
   "word": "ELEVATED",
   "pronunciations": "ˈɛləˌveɪtɪd"
 },
 {
   "id": 7387,
   "word": "ELOQUENT",
   "pronunciations": "ˈɛləkwənt"
 },
 {
   "id": 7388,
   "word": "EMBARRASSING",
   "pronunciations": "ɪmˈbɛrəsɪŋ"
 },
 {
   "id": 7389,
   "word": "ENCLOSED",
   "pronunciations": "ɛnˈkloʊzd, ɪnˈkloʊzd"
 },
 {
   "id": 7390,
   "word": "ENDURED",
   "pronunciations": "ɛndˈjʊrd, ɪnˈdʊrd"
 },
 {
   "id": 7391,
   "word": "ENERGETIC",
   "pronunciations": "ˌɛnɝˈdʒɛtɪk"
 },
 {
   "id": 7392,
   "word": "ENERGIES",
   "pronunciations": "ˈɛnɝdʒiːz"
 },
 {
   "id": 7393,
   "word": "ENLISTED",
   "pronunciations": "ˌɛnˈlɪstɪd"
 },
 {
   "id": 7394,
   "word": "ENSEMBLE",
   "pronunciations": "ɑːnˈsɑːmbəl"
 },
 {
   "id": 7395,
   "word": "ENTERTAINED",
   "pronunciations": "ˌɛntɝˈteɪnd, ˌɛnɝˈteɪnd"
 },
 {
   "id": 7396,
   "word": "ENTITIES",
   "pronunciations": "ˈɛntɪtiːz"
 },
 {
   "id": 7397,
   "word": "ENZYMES",
   "pronunciations": "ˈɛnˌzaɪmz"
 },
 {
   "id": 7398,
   "word": "EPIDEMIC",
   "pronunciations": "ˌɛpəˈdɛmɪk, ˌɛpɪˈdɛmɪk"
 },
 {
   "id": 7399,
   "word": "EQUITABLE",
   "pronunciations": "ˈɛkwətəbəl, ˈɛkwɪtəbəl"
 },
 {
   "id": 7400,
   "word": "EVALUATED",
   "pronunciations": "ɪˈvæljuːˌeɪtəd, iːˈvæljuːˌeɪtəd"
 },
 {
   "id": 7401,
   "word": "EVENTUAL",
   "pronunciations": "əˈvɛntʃuːəl, iːˈvɛntʃuːəl"
 },
 {
   "id": 7402,
   "word": "EXERT",
   "pronunciations": "ɪgˈzɝːt"
 },
 {
   "id": 7403,
   "word": "EXPECTATION",
   "pronunciations": "ˌɛkspɛkˈteɪʃən"
 },
 {
   "id": 7404,
   "word": "EXPENDITURE",
   "pronunciations": "ɪkˈspɛndətʃɝ, ɪkˈspɛndɪtʃɝ"
 },
 {
   "id": 7405,
   "word": "EXPLORED",
   "pronunciations": "ɪkˈsplɔrd"
 },
 {
   "id": 7406,
   "word": "EXPORTS",
   "pronunciations": "ˈɛkspɔrts"
 },
 {
   "id": 7407,
   "word": "FACILITY",
   "pronunciations": "fəˈsɪlɪti"
 },
 {
   "id": 7408,
   "word": "FATIGUE",
   "pronunciations": "fəˈtiːg"
 },
 {
   "id": 7409,
   "word": "FERRY",
   "pronunciations": "ˈfɛri"
 },
 {
   "id": 7410,
   "word": "FINITE",
   "pronunciations": "ˈfaɪˌnaɪt"
 },
 {
   "id": 7411,
   "word": "FIXING",
   "pronunciations": "ˈfɪksɪŋ"
 },
 {
   "id": 7412,
   "word": "FLUSH",
   "pronunciations": "ˈflʌʃ"
 },
 {
   "id": 7413,
   "word": "FOREGOING",
   "pronunciations": "fɔrˈgoʊɪŋ"
 },
 {
   "id": 7414,
   "word": "FORMULATED",
   "pronunciations": "ˈfɔrmjəˌleɪtəd, ˈfɔrmjəˌleɪtɪd"
 },
 {
   "id": 7415,
   "word": "FORMULATIONS",
   "pronunciations": "ˌfɔrmjuːˈleɪʃənz"
 },
 {
   "id": 7416,
   "word": "FORTHCOMING",
   "pronunciations": "ˈfɔrθˈkʌmɪŋ"
 },
 {
   "id": 7417,
   "word": "FRAMEWORK",
   "pronunciations": "ˈfreɪmˌwɝːk"
 },
 {
   "id": 7418,
   "word": "FRANTIC",
   "pronunciations": "ˈfræntɪk"
 },
 {
   "id": 7419,
   "word": "FREEMAN",
   "pronunciations": "ˈfriːmən"
 },
 {
   "id": 7420,
   "word": "FRIGHTEN",
   "pronunciations": "ˈfraɪtən"
 },
 {
   "id": 7421,
   "word": "FRUSTRATION",
   "pronunciations": "frəˈstreɪʃən"
 },
 {
   "id": 7422,
   "word": "FULFILLED",
   "pronunciations": "fʊlˈfɪld"
 },
 {
   "id": 7423,
   "word": "FURNACE",
   "pronunciations": "ˈfɝːnəs"
 },
 {
   "id": 7424,
   "word": "GENERATED",
   "pronunciations": "ˈdʒɛnɝˌeɪtəd, ˈdʒɛnɝˌeɪtɪd"
 },
 {
   "id": 7425,
   "word": "GHETTO",
   "pronunciations": "ˈgɛtoʊ"
 },
 {
   "id": 7426,
   "word": "GHOST",
   "pronunciations": "ˈgoʊst"
 },
 {
   "id": 7427,
   "word": "GIFTS",
   "pronunciations": "ˈgɪfts, ˈgɪfs"
 },
 {
   "id": 7428,
   "word": "GLAZE",
   "pronunciations": "ˈgleɪz"
 },
 {
   "id": 7429,
   "word": "GODDAMN",
   "pronunciations": "ˌgɑːˈdæm"
 },
 {
   "id": 7430,
   "word": "GRADUATION",
   "pronunciations": "ˌgrædʒuːˈeɪʃən, ˌgrædʒəˈweɪʃən"
 },
 {
   "id": 7431,
   "word": "GRASPED",
   "pronunciations": "ˈgræspt"
 },
 {
   "id": 7432,
   "word": "GREATNESS",
   "pronunciations": "ˈgreɪtnəs"
 },
 {
   "id": 7433,
   "word": "GRIMLY",
   "pronunciations": "ˈgrɪmli"
 },
 {
   "id": 7434,
   "word": "GYMNASTICS",
   "pronunciations": "dʒɪmˈnæstɪks"
 },
 {
   "id": 7435,
   "word": "HAMPSHIRE",
   "pronunciations": "ˈhæmpʃɝ, ˈhæmʃɝ, ˈhæmpʃaɪɝ, ˈhæmʃaɪɝ"
 },
 {
   "id": 7436,
   "word": "HAPPIER",
   "pronunciations": "ˈhæpiːɝ"
 },
 {
   "id": 7437,
   "word": "HARDEST",
   "pronunciations": "ˈhɑːrdəst"
 },
 {
   "id": 7438,
   "word": "HARDWARE",
   "pronunciations": "ˈhɑːrˌdwɛr"
 },
 {
   "id": 7439,
   "word": "HAVEN",
   "pronunciations": "ˈheɪvən"
 },
 {
   "id": 7440,
   "word": "HERALD",
   "pronunciations": "ˈhɛrəld"
 },
 {
   "id": 7441,
   "word": "HERE'S",
   "pronunciations": "ˈhɪrz"
 },
 {
   "id": 7442,
   "word": "HIDEOUS",
   "pronunciations": "ˈhɪdiːəs"
 },
 {
   "id": 7443,
   "word": "HILLSBORO",
   "pronunciations": "ˈhɪlzbɝoʊ"
 },
 {
   "id": 7444,
   "word": "HIROSHIMA",
   "pronunciations": "ˌhɪroʊˈʃiːmə, ˌhɪˈroʊʃɪmə"
 },
 {
   "id": 7445,
   "word": "HISTORIES",
   "pronunciations": "ˈhɪstɝiːz, ˈhɪstriːz"
 },
 {
   "id": 7446,
   "word": "HOGAN",
   "pronunciations": "ˈhoʊˌgɑːn, ˈhoʊgən"
 },
 {
   "id": 7447,
   "word": "HONEYMOON",
   "pronunciations": "ˈhʌniːˌmuːn"
 },
 {
   "id": 7448,
   "word": "HONG",
   "pronunciations": "ˈhɔŋ"
 },
 {
   "id": 7449,
   "word": "HUB",
   "pronunciations": "ˈhʌb"
 },
 {
   "id": 7450,
   "word": "IMPROVES",
   "pronunciations": "ˌɪmˈpruːvz"
 },
 {
   "id": 7451,
   "word": "INCAPABLE",
   "pronunciations": "ˌɪnˈkeɪpəbəl"
 },
 {
   "id": 7452,
   "word": "INCIDENTS",
   "pronunciations": "ˈɪnsədənts"
 },
 {
   "id": 7453,
   "word": "INDIFFERENT",
   "pronunciations": "ˌɪnˈdɪfrənt, ˌɪnˈdɪfɝənt"
 },
 {
   "id": 7454,
   "word": "INDIVIDUAL'S",
   "pronunciations": "ˌɪndəˈvɪdʒəwəlz"
 },
 {
   "id": 7455,
   "word": "INFANCY",
   "pronunciations": "ˈɪnfənsi"
 },
 {
   "id": 7456,
   "word": "INFANT",
   "pronunciations": "ˈɪnfənt"
 },
 {
   "id": 7457,
   "word": "INJURIES",
   "pronunciations": "ˈɪndʒɝiːz"
 },
 {
   "id": 7458,
   "word": "INORGANIC",
   "pronunciations": "ˌɪnɔrˈgænɪk"
 },
 {
   "id": 7459,
   "word": "INSTRUMENTAL",
   "pronunciations": "ˌɪnstrəˈmɛntəl, ˌɪnstrəˈmɛnəl"
 },
 {
   "id": 7460,
   "word": "INTEGRATED",
   "pronunciations": "ˈɪntəˌgreɪtəd, ˈɪntəˌgreɪtɪd, ˈɪnəˌgreɪtəd, ˈɪnəˌgreɪtɪd"
 },
 {
   "id": 7461,
   "word": "INTELLIGIBLE",
   "pronunciations": "ˌɪnˈtɛlədʒəbəl"
 },
 {
   "id": 7462,
   "word": "INTERIM",
   "pronunciations": "ˈɪntɝəm, ˈɪntrəm, ˈɪnɝəm"
 },
 {
   "id": 7463,
   "word": "INTERPRET",
   "pronunciations": "ˌɪnˈtɝːprət"
 },
 {
   "id": 7464,
   "word": "INTRODUCE",
   "pronunciations": "ˌɪntrəˈduːs, ˌɪntroʊˈduːs"
 },
 {
   "id": 7465,
   "word": "INVESTED",
   "pronunciations": "ˌɪnˈvɛstəd, ˌɪnˈvɛstɪd"
 },
 {
   "id": 7466,
   "word": "INVESTIGATE",
   "pronunciations": "ˌɪnˈvɛstəˌgeɪt"
 },
 {
   "id": 7467,
   "word": "INVITE",
   "pronunciations": "ˌɪnˈvaɪt"
 },
 {
   "id": 7468,
   "word": "JACK'S",
   "pronunciations": "ˈdʒæks"
 },
 {
   "id": 7469,
   "word": "JIMMY",
   "pronunciations": "ˈdʒɪmi"
 },
 {
   "id": 7470,
   "word": "JUICE",
   "pronunciations": "ˈdʒuːs"
 },
 {
   "id": 7471,
   "word": "KEEN",
   "pronunciations": "ˈkiːn"
 },
 {
   "id": 7472,
   "word": "KEHL",
   "pronunciations": "ˈkɛl"
 },
 {
   "id": 7473,
   "word": "KONG",
   "pronunciations": "ˈkɔŋ, ˈkɔŋg"
 },
 {
   "id": 7474,
   "word": "KOREAN",
   "pronunciations": "ˌkɔˈriːən"
 },
 {
   "id": 7475,
   "word": "KREMLIN",
   "pronunciations": "ˈkrɛmlən, ˈkrɛmlɪn"
 },
 {
   "id": 7476,
   "word": "LEISURE",
   "pronunciations": "ˈlɛʒɝ, ˈliːʒɝ"
 },
 {
   "id": 7477,
   "word": "LENGTHY",
   "pronunciations": "ˈlɛŋθi"
 },
 {
   "id": 7478,
   "word": "LIKING",
   "pronunciations": "ˈlaɪkɪŋ"
 },
 {
   "id": 7479,
   "word": "LIMITING",
   "pronunciations": "ˈlɪmətɪŋ"
 },
 {
   "id": 7480,
   "word": "LINGUISTS",
   "pronunciations": "ˈlɪŋgwɪsts"
 },
 {
   "id": 7481,
   "word": "LOADING",
   "pronunciations": "ˈloʊdɪŋ"
 },
 {
   "id": 7482,
   "word": "LOCALLY",
   "pronunciations": "ˈloʊkəli"
 },
 {
   "id": 7483,
   "word": "LOCATING",
   "pronunciations": "ˈloʊˌkeɪtɪŋ"
 },
 {
   "id": 7484,
   "word": "LOG",
   "pronunciations": "ˈlɔg"
 },
 {
   "id": 7485,
   "word": "MAGNUM",
   "pronunciations": "ˈmægnəm"
 },
 {
   "id": 7486,
   "word": "MAHAYANA",
   "pronunciations": "ˌmɑːhəˈjɑːnə"
 },
 {
   "id": 7487,
   "word": "MAINLAND",
   "pronunciations": "ˈmeɪnˌlænd, ˈmeɪnlənd"
 },
 {
   "id": 7488,
   "word": "MANUFACTURED",
   "pronunciations": "ˌmænjəˈfæktʃɝd"
 },
 {
   "id": 7489,
   "word": "MARINES",
   "pronunciations": "mɝˈiːnz"
 },
 {
   "id": 7490,
   "word": "MARKING",
   "pronunciations": "ˈmɑːrkɪŋ"
 },
 {
   "id": 7491,
   "word": "MARVELOUS",
   "pronunciations": "ˈmɑːrvələs"
 },
 {
   "id": 7492,
   "word": "MAXWELL",
   "pronunciations": "ˈmækˌswɛl"
 },
 {
   "id": 7493,
   "word": "MCBRIDE",
   "pronunciations": "məkˈbraɪd"
 },
 {
   "id": 7494,
   "word": "MCKINLEY",
   "pronunciations": "məˈkɪnli"
 },
 {
   "id": 7495,
   "word": "MEMORABLE",
   "pronunciations": "ˈmɛmɝəbəl"
 },
 {
   "id": 7496,
   "word": "METERS",
   "pronunciations": "ˈmiːtɝz"
 },
 {
   "id": 7497,
   "word": "MICHAEL",
   "pronunciations": "ˈmaɪkəl"
 },
 {
   "id": 7498,
   "word": "MIDWEST",
   "pronunciations": "ˌmɪˈdwɛst"
 },
 {
   "id": 7499,
   "word": "MILITIA",
   "pronunciations": "məˈlɪʃə, mɪˈlɪʃə"
 },
 {
   "id": 7500,
   "word": "MILL",
   "pronunciations": "ˈmɪl"
 },
 {
   "id": 7501,
   "word": "MISUNDERSTANDING",
   "pronunciations": "ˌmɪsəndɝˈstændɪŋ"
 },
 {
   "id": 7502,
   "word": "MOIST",
   "pronunciations": "ˈmɔɪst"
 },
 {
   "id": 7503,
   "word": "MORITZ",
   "pronunciations": "mɔˈrɪts"
 },
 {
   "id": 7504,
   "word": "MORTAR",
   "pronunciations": "ˈmɔrtɝ"
 },
 {
   "id": 7505,
   "word": "MOTIVATION",
   "pronunciations": "ˌmoʊtəˈveɪʃən"
 },
 {
   "id": 7506,
   "word": "MOUND",
   "pronunciations": "ˈmaʊnd"
 },
 {
   "id": 7507,
   "word": "MOUNTING",
   "pronunciations": "ˈmaʊntɪŋ"
 },
 {
   "id": 7508,
   "word": "MUFFLED",
   "pronunciations": "ˈmʌfəld"
 },
 {
   "id": 7509,
   "word": "NAILED",
   "pronunciations": "ˈneɪld"
 },
 {
   "id": 7510,
   "word": "NARRATOR",
   "pronunciations": "ˈnɛreɪtɝ"
 },
 {
   "id": 7511,
   "word": "NATIVES",
   "pronunciations": "ˈneɪtɪvz"
 },
 {
   "id": 7512,
   "word": "NECESSITATED",
   "pronunciations": "nəˈsɛsəˌteɪtəd"
 },
 {
   "id": 7513,
   "word": "NEEDLESS",
   "pronunciations": "ˈniːdləs"
 },
 {
   "id": 7514,
   "word": "NOMINAL",
   "pronunciations": "ˈnɑːmənəl"
 },
 {
   "id": 7515,
   "word": "NOTICEABLE",
   "pronunciations": "ˈnoʊtəsəbəl"
 },
 {
   "id": 7516,
   "word": "NUCLEUS",
   "pronunciations": "ˈnuːkliːəs"
 },
 {
   "id": 7517,
   "word": "OBTAINABLE",
   "pronunciations": "əbˈteɪnəbəl"
 },
 {
   "id": 7518,
   "word": "OCCUPATIONAL",
   "pronunciations": "ɑːkjəˈpeɪʃənəl"
 },
 {
   "id": 7519,
   "word": "ODYSSEY",
   "pronunciations": "ˈɑːdəsi"
 },
 {
   "id": 7520,
   "word": "OREGON",
   "pronunciations": "ˈɔrəgən, ˈɔrəˌgɑːn"
 },
 {
   "id": 7521,
   "word": "ORIENTED",
   "pronunciations": "ˈɔriːˌɛntəd, ˈɔriːˌɛntɪd"
 },
 {
   "id": 7522,
   "word": "ORIOLES",
   "pronunciations": "ˈɔriːˌoʊlz"
 },
 {
   "id": 7523,
   "word": "OUTCOMES",
   "pronunciations": "ˈaʊtˌkəmz"
 },
 {
   "id": 7524,
   "word": "OVERT",
   "pronunciations": "oʊˈvɝːt, ˈoʊvɝt"
 },
 {
   "id": 7525,
   "word": "PACED",
   "pronunciations": "ˈpeɪst"
 },
 {
   "id": 7526,
   "word": "PARADOXICALLY",
   "pronunciations": "ˌpɛrəˈdɑːksəkli, ˌpɛrəˈdɑːksəkəli"
 },
 {
   "id": 7527,
   "word": "PARISH",
   "pronunciations": "ˈpærɪʃ, ˈpɛrɪʃ"
 },
 {
   "id": 7528,
   "word": "PARTIAL",
   "pronunciations": "ˈpɑːrʃəl"
 },
 {
   "id": 7529,
   "word": "PASO",
   "pronunciations": "ˈpæsoʊ"
 },
 {
   "id": 7530,
   "word": "PASSIVE",
   "pronunciations": "ˈpæsɪv"
 },
 {
   "id": 7531,
   "word": "PAVEMENT",
   "pronunciations": "ˈpeɪvmənt"
 },
 {
   "id": 7532,
   "word": "PERFECTION",
   "pronunciations": "pɝˈfɛkʃən"
 },
 {
   "id": 7533,
   "word": "PHILLIPS",
   "pronunciations": "ˈfɪlɪps"
 },
 {
   "id": 7534,
   "word": "PHILOSOPHIC",
   "pronunciations": "ˌfɪləˈsɑːfɪk"
 },
 {
   "id": 7535,
   "word": "PHOTOGRAPHIC",
   "pronunciations": "ˌfoʊtəˈgræfɪk"
 },
 {
   "id": 7536,
   "word": "PITUITARY",
   "pronunciations": "pəˈtuːəˌtɛri, pɪˈtuːɪˌtɛri"
 },
 {
   "id": 7537,
   "word": "PLANTED",
   "pronunciations": "ˈplæntəd, ˈplæntɪd, ˈplænəd, ˈplænɪd"
 },
 {
   "id": 7538,
   "word": "PLEA",
   "pronunciations": "ˈpliː"
 },
 {
   "id": 7539,
   "word": "PLOWING",
   "pronunciations": "ˈplaʊɪŋ"
 },
 {
   "id": 7540,
   "word": "PLYMOUTH",
   "pronunciations": "ˈplɪməθ"
 },
 {
   "id": 7541,
   "word": "POHL",
   "pronunciations": "ˈpoʊl"
 },
 {
   "id": 7542,
   "word": "POLITICALLY",
   "pronunciations": "pəˈlɪtɪkəli, ˈplɪtɪkli"
 },
 {
   "id": 7543,
   "word": "POLLEN",
   "pronunciations": "ˈpɑːlən"
 },
 {
   "id": 7544,
   "word": "POORLY",
   "pronunciations": "ˈpuːrli"
 },
 {
   "id": 7545,
   "word": "PORTIONS",
   "pronunciations": "ˈpɔrʃənz"
 },
 {
   "id": 7546,
   "word": "POSE",
   "pronunciations": "ˈpoʊz"
 },
 {
   "id": 7547,
   "word": "POSSE",
   "pronunciations": "ˈpɑːsi"
 },
 {
   "id": 7548,
   "word": "POSSESSIONS",
   "pronunciations": "pəˈzɛʃənz"
 },
 {
   "id": 7549,
   "word": "POSTED",
   "pronunciations": "ˈpoʊstɪd"
 },
 {
   "id": 7550,
   "word": "POSTWAR",
   "pronunciations": "ˈpoʊsˈtwɔr"
 },
 {
   "id": 7551,
   "word": "POULTRY",
   "pronunciations": "ˈpoʊltri"
 },
 {
   "id": 7552,
   "word": "PREACHER",
   "pronunciations": "ˈpriːtʃɝ"
 },
 {
   "id": 7553,
   "word": "PREJUDICE",
   "pronunciations": "ˈprɛdʒədɪs"
 },
 {
   "id": 7554,
   "word": "PREOCCUPIED",
   "pronunciations": "priːˈɑːkjəˌpaɪd"
 },
 {
   "id": 7555,
   "word": "PRESBYTERIAN",
   "pronunciations": "ˌprɛsbɪˈtɪriːən, ˌprɛzbɪˈtɪriːən"
 },
 {
   "id": 7556,
   "word": "PRESERVES",
   "pronunciations": "prəˈzɝːvz, prɪˈzɝːvz, priːˈzɝːvz"
 },
 {
   "id": 7557,
   "word": "PRESIDENCY",
   "pronunciations": "ˈprɛzɪdənsi"
 },
 {
   "id": 7558,
   "word": "PROMPT",
   "pronunciations": "ˈprɑːmpt"
 },
 {
   "id": 7559,
   "word": "PROPRIETOR",
   "pronunciations": "prəˈpraɪətɝ"
 },
 {
   "id": 7560,
   "word": "PROTESTANTISM",
   "pronunciations": "ˈprɑːtəstənˌtɪzəm"
 },
 {
   "id": 7561,
   "word": "PROTESTS",
   "pronunciations": "ˈproʊˌtɛsts, ˈproʊˌtɛs, prəˈtɛsts, prəˈtɛs"
 },
 {
   "id": 7562,
   "word": "PROVEN",
   "pronunciations": "ˈpruːvən"
 },
 {
   "id": 7563,
   "word": "PSYCHOLOGISTS",
   "pronunciations": "saɪˈkɑːlədʒəsts"
 },
 {
   "id": 7564,
   "word": "PUBLISHERS",
   "pronunciations": "ˈpʌblɪʃɝz"
 },
 {
   "id": 7565,
   "word": "PULLEY",
   "pronunciations": "ˈpʊli"
 },
 {
   "id": 7566,
   "word": "PUMP",
   "pronunciations": "ˈpʌmp"
 },
 {
   "id": 7567,
   "word": "QUANTITIES",
   "pronunciations": "ˈkwɑːntətiːz"
 },
 {
   "id": 7568,
   "word": "QUINT",
   "pronunciations": "ˈkwɪnt"
 },
 {
   "id": 7569,
   "word": "QUO",
   "pronunciations": "ˈkwoʊ"
 },
 {
   "id": 7570,
   "word": "RABBIT",
   "pronunciations": "ˈræbət, ˈræbɪt"
 },
 {
   "id": 7571,
   "word": "RAKE",
   "pronunciations": "ˈreɪk"
 },
 {
   "id": 7572,
   "word": "RECONSTRUCTION",
   "pronunciations": "ˌriːkənˈstrʌkʃən"
 },
 {
   "id": 7573,
   "word": "RECORDINGS",
   "pronunciations": "rɪˈkɔrdɪŋz"
 },
 {
   "id": 7574,
   "word": "RECOVER",
   "pronunciations": "rɪˈkʌvɝ"
 },
 {
   "id": 7575,
   "word": "REEF",
   "pronunciations": "ˈriːf"
 },
 {
   "id": 7576,
   "word": "REGRETTED",
   "pronunciations": "rɪˈgrɛtɪd"
 },
 {
   "id": 7577,
   "word": "REJECTION",
   "pronunciations": "rɪˈdʒɛkʃən, riːˈdʒɛkʃən"
 },
 {
   "id": 7578,
   "word": "REJECTS",
   "pronunciations": "rɪˈdʒɛkts, ˈriːdʒɛkts, rɪˈdʒɛks, ˈriːdʒɛks"
 },
 {
   "id": 7579,
   "word": "RENDER",
   "pronunciations": "ˈrɛndɝ"
 },
 {
   "id": 7580,
   "word": "RENDERING",
   "pronunciations": "ˈrɛndɝɪŋ"
 },
 {
   "id": 7581,
   "word": "REPAIRED",
   "pronunciations": "rɪˈpɛrd, riːˈpɛrd"
 },
 {
   "id": 7582,
   "word": "RESPECTED",
   "pronunciations": "rɪˈspɛktɪd, riːˈspɛktəd, riːˈspɛktɪd"
 },
 {
   "id": 7583,
   "word": "RESTORATION",
   "pronunciations": "ˌrɛstɝˈeɪʃən"
 },
 {
   "id": 7584,
   "word": "RESTRAINT",
   "pronunciations": "rɪˈstreɪnt, riːˈstreɪnt"
 },
 {
   "id": 7585,
   "word": "RESTRICT",
   "pronunciations": "riːˈstrɪkt"
 },
 {
   "id": 7586,
   "word": "RETAIN",
   "pronunciations": "rɪˈteɪn, riːˈteɪn"
 },
 {
   "id": 7587,
   "word": "REUNION",
   "pronunciations": "riːˈuːnjən"
 },
 {
   "id": 7588,
   "word": "REV",
   "pronunciations": "ˈrɛv"
 },
 {
   "id": 7589,
   "word": "REVEALING",
   "pronunciations": "rɪˈviːlɪŋ, riːˈviːlɪŋ"
 },
 {
   "id": 7590,
   "word": "RHYTHMIC",
   "pronunciations": "ˈrɪðmɪk"
 },
 {
   "id": 7591,
   "word": "RIBS",
   "pronunciations": "ˈrɪbz"
 },
 {
   "id": 7592,
   "word": "ROLLS",
   "pronunciations": "ˈroʊlz"
 },
 {
   "id": 7593,
   "word": "ROSS",
   "pronunciations": "ˈrɑːs, ˈrɔs"
 },
 {
   "id": 7594,
   "word": "ROTATING",
   "pronunciations": "ˈroʊˌteɪtɪŋ"
 },
 {
   "id": 7595,
   "word": "ROTATION",
   "pronunciations": "roʊˈteɪʃən"
 },
 {
   "id": 7596,
   "word": "RUBBING",
   "pronunciations": "ˈrʌbɪŋ"
 },
 {
   "id": 7597,
   "word": "SANCTION",
   "pronunciations": "ˈsæŋkʃən"
 },
 {
   "id": 7598,
   "word": "SANITATION",
   "pronunciations": "ˌsænəˈteɪʃən, ˌsænɪˈteɪʃən"
 },
 {
   "id": 7599,
   "word": "SATISFACTORILY",
   "pronunciations": "ˌsætɪsˈfæktrəli"
 },
 {
   "id": 7600,
   "word": "SCHOOLHOUSE",
   "pronunciations": "ˈskuːlˌhaʊs"
 },
 {
   "id": 7601,
   "word": "SCOTTY'S",
   "pronunciations": "ˈskɑːtiːz"
 },
 {
   "id": 7602,
   "word": "SCRIPT",
   "pronunciations": "ˈskrɪpt"
 },
 {
   "id": 7603,
   "word": "SCRIPTURES",
   "pronunciations": "ˈskrɪptʃɝz"
 },
 {
   "id": 7604,
   "word": "SCULPTURE",
   "pronunciations": "ˈskʌlptʃɝ"
 },
 {
   "id": 7605,
   "word": "SECURED",
   "pronunciations": "sɪˈkjʊrd"
 },
 {
   "id": 7606,
   "word": "SETTLING",
   "pronunciations": "ˈsɛtəlɪŋ, ˈsɛtlɪŋ"
 },
 {
   "id": 7607,
   "word": "SEVENTEENTH",
   "pronunciations": "ˈsɛvənˈtiːnθ"
 },
 {
   "id": 7608,
   "word": "SEXES",
   "pronunciations": "ˈsɛksəz, ˈsɛksɪz"
 },
 {
   "id": 7609,
   "word": "SHAFT",
   "pronunciations": "ˈʃæft"
 },
 {
   "id": 7610,
   "word": "SHAKEN",
   "pronunciations": "ˈʃeɪkən"
 },
 {
   "id": 7611,
   "word": "SHAKESPEARE'S",
   "pronunciations": "ˈʃeɪkˌspiːrz"
 },
 {
   "id": 7612,
   "word": "SHED",
   "pronunciations": "ˈʃɛd"
 },
 {
   "id": 7613,
   "word": "SHIFTING",
   "pronunciations": "ˈʃɪftɪŋ"
 },
 {
   "id": 7614,
   "word": "SHIVERING",
   "pronunciations": "ˈʃɪvɝɪŋ"
 },
 {
   "id": 7615,
   "word": "SHOWMANSHIP",
   "pronunciations": "ˈʃoʊmənˌʃɪp"
 },
 {
   "id": 7616,
   "word": "SIGH",
   "pronunciations": "ˈsaɪ"
 },
 {
   "id": 7617,
   "word": "SLEEVE",
   "pronunciations": "ˈsliːv"
 },
 {
   "id": 7618,
   "word": "SLIDING",
   "pronunciations": "ˈslaɪdɪŋ"
 },
 {
   "id": 7619,
   "word": "SMILES",
   "pronunciations": "ˈsmaɪlz"
 },
 {
   "id": 7620,
   "word": "SNATCHED",
   "pronunciations": "ˈsnætʃt"
 },
 {
   "id": 7621,
   "word": "SOCIOLOGICAL",
   "pronunciations": "ˌsoʊsiːəˈlɑːdʒɪkəl"
 },
 {
   "id": 7622,
   "word": "SOMETIME",
   "pronunciations": "ˈsʌmˌtaɪm"
 },
 {
   "id": 7623,
   "word": "SPACES",
   "pronunciations": "ˈspeɪsəz, ˈspeɪsɪz"
 },
 {
   "id": 7624,
   "word": "SPECIFY",
   "pronunciations": "ˈspɛsəˌfaɪ"
 },
 {
   "id": 7625,
   "word": "SPELMAN",
   "pronunciations": "ˈspɛlmən"
 },
 {
   "id": 7626,
   "word": "SPINNING",
   "pronunciations": "ˈspɪnɪŋ"
 },
 {
   "id": 7627,
   "word": "SPIT",
   "pronunciations": "ˈspɪt"
 },
 {
   "id": 7628,
   "word": "SPRAWLED",
   "pronunciations": "ˈsprɔld"
 },
 {
   "id": 7629,
   "word": "SQUARELY",
   "pronunciations": "ˈskwɛrli"
 },
 {
   "id": 7630,
   "word": "SQUEEZE",
   "pronunciations": "ˈskwiːz"
 },
 {
   "id": 7631,
   "word": "STRAINED",
   "pronunciations": "ˈstreɪnd"
 },
 {
   "id": 7632,
   "word": "STREAMS",
   "pronunciations": "ˈstriːmz"
 },
 {
   "id": 7633,
   "word": "STRENUOUS",
   "pronunciations": "ˈstrɛnjuːəs"
 },
 {
   "id": 7634,
   "word": "STRICT",
   "pronunciations": "ˈstrɪkt"
 },
 {
   "id": 7635,
   "word": "SUBDIVISION",
   "pronunciations": "ˈsʌbdɪˌvɪʒən"
 },
 {
   "id": 7636,
   "word": "SUBSEQUENTLY",
   "pronunciations": "ˈsʌbsəkwəntli"
 },
 {
   "id": 7637,
   "word": "SURGEON",
   "pronunciations": "ˈsɝːdʒən, ˈsɝːdʒɪn"
 },
 {
   "id": 7638,
   "word": "SWELLING",
   "pronunciations": "ˈswɛlɪŋ"
 },
 {
   "id": 7639,
   "word": "SYMBOLIZED",
   "pronunciations": "ˈsɪmbəˌlaɪzd"
 },
 {
   "id": 7640,
   "word": "TAXATION",
   "pronunciations": "tækˈseɪʃən"
 },
 {
   "id": 7641,
   "word": "TAXPAYER",
   "pronunciations": "ˈtækˌspeɪɝ"
 },
 {
   "id": 7642,
   "word": "TEACHES",
   "pronunciations": "ˈtiːtʃəz, ˈtiːtʃɪz"
 },
 {
   "id": 7643,
   "word": "TEAR",
   "pronunciations": "ˈtɛr, ˈtɪr"
 },
 {
   "id": 7644,
   "word": "TENDER",
   "pronunciations": "ˈtɛndɝ"
 },
 {
   "id": 7645,
   "word": "TESTIFIED",
   "pronunciations": "ˈtɛstɪˌfaɪd"
 },
 {
   "id": 7646,
   "word": "THEATERS",
   "pronunciations": "ˈθiːətɝz"
 },
 {
   "id": 7647,
   "word": "THIRTEEN",
   "pronunciations": "ˈθɝːˈtiːn"
 },
 {
   "id": 7648,
   "word": "THOUGHTFUL",
   "pronunciations": "ˈθɔtfəl"
 },
 {
   "id": 7649,
   "word": "THREATEN",
   "pronunciations": "ˈθrɛtən"
 },
 {
   "id": 7650,
   "word": "TIDE",
   "pronunciations": "ˈtaɪd"
 },
 {
   "id": 7651,
   "word": "TIMING",
   "pronunciations": "ˈtaɪmɪŋ"
 },
 {
   "id": 7652,
   "word": "TIMOTHY",
   "pronunciations": "ˈtɪməθi"
 },
 {
   "id": 7653,
   "word": "TOMB",
   "pronunciations": "ˈtuːm"
 },
 {
   "id": 7654,
   "word": "TONY",
   "pronunciations": "ˈtoʊni"
 },
 {
   "id": 7655,
   "word": "TOWELS",
   "pronunciations": "ˈtaʊəlz, ˈtaʊlz"
 },
 {
   "id": 7656,
   "word": "TOWERING",
   "pronunciations": "ˈtaʊɝɪŋ, ˈtaʊrɪŋ"
 },
 {
   "id": 7657,
   "word": "TOYS",
   "pronunciations": "ˈtɔɪz"
 },
 {
   "id": 7658,
   "word": "TRAILER",
   "pronunciations": "ˈtreɪlɝ"
 },
 {
   "id": 7659,
   "word": "TRANSFERS",
   "pronunciations": "trænsˈfɝːz, ˈtrænsfɝz"
 },
 {
   "id": 7660,
   "word": "TREATING",
   "pronunciations": "ˈtriːtɪŋ"
 },
 {
   "id": 7661,
   "word": "TREATMENTS",
   "pronunciations": "ˈtriːtmənts"
 },
 {
   "id": 7662,
   "word": "TRIVIAL",
   "pronunciations": "ˈtrɪviːəl"
 },
 {
   "id": 7663,
   "word": "TROPICAL",
   "pronunciations": "ˈtrɑːpɪkəl"
 },
 {
   "id": 7664,
   "word": "TRUSTED",
   "pronunciations": "ˈtrʌstɪd"
 },
 {
   "id": 7665,
   "word": "TWISTING",
   "pronunciations": "ˈtwɪstɪŋ"
 },
 {
   "id": 7666,
   "word": "TYRANNY",
   "pronunciations": "ˈtɪrəni"
 },
 {
   "id": 7667,
   "word": "UNANIMOUSLY",
   "pronunciations": "juːˈnænəməsli"
 },
 {
   "id": 7668,
   "word": "UNDERGRADUATE",
   "pronunciations": "ˌəndɝˈgrædʒəwət"
 },
 {
   "id": 7669,
   "word": "UNDERNEATH",
   "pronunciations": "ˌəndɝˈniːθ"
 },
 {
   "id": 7670,
   "word": "UNEXPECTEDLY",
   "pronunciations": "ˌənɪkˈspɛktɪdli"
 },
 {
   "id": 7671,
   "word": "UNIFIED",
   "pronunciations": "ˈjuːnəˌfaɪd"
 },
 {
   "id": 7672,
   "word": "UNIFORMITY",
   "pronunciations": "ˌjuːnəˈfɔrməti"
 },
 {
   "id": 7673,
   "word": "UNPRECEDENTED",
   "pronunciations": "ənˈprɛsɪˌdɛntɪd"
 },
 {
   "id": 7674,
   "word": "UNQUESTIONABLY",
   "pronunciations": "ənˈkwɛstʃənəbli"
 },
 {
   "id": 7675,
   "word": "UNUSUALLY",
   "pronunciations": "ənˈjuːˌʒuːəli, ənˈjuːʒwəli"
 },
 {
   "id": 7676,
   "word": "USEFULNESS",
   "pronunciations": "ˈjuːsfəlnəs"
 },
 {
   "id": 7677,
   "word": "VACANT",
   "pronunciations": "ˈveɪkənt"
 },
 {
   "id": 7678,
   "word": "VARIES",
   "pronunciations": "ˈvɛriːz"
 },
 {
   "id": 7679,
   "word": "VASES",
   "pronunciations": "ˈveɪsəz, ˈvɑːzɪz"
 },
 {
   "id": 7680,
   "word": "VENUS",
   "pronunciations": "ˈviːnəs"
 },
 {
   "id": 7681,
   "word": "VINCE",
   "pronunciations": "ˈvɪns"
 },
 {
   "id": 7682,
   "word": "VIOLA",
   "pronunciations": "vaɪˈoʊlə, viːˈoʊlə"
 },
 {
   "id": 7683,
   "word": "VIOLIN",
   "pronunciations": "vaɪəˈlɪn"
 },
 {
   "id": 7684,
   "word": "VIVIAN",
   "pronunciations": "ˈvɪviːən"
 },
 {
   "id": 7685,
   "word": "WAIST",
   "pronunciations": "ˈweɪst"
 },
 {
   "id": 7686,
   "word": "WAKING",
   "pronunciations": "ˈweɪkɪŋ"
 },
 {
   "id": 7687,
   "word": "WALNUT",
   "pronunciations": "ˈwɔlˌnət"
 },
 {
   "id": 7688,
   "word": "WARN",
   "pronunciations": "ˈwɔrn"
 },
 {
   "id": 7689,
   "word": "WART",
   "pronunciations": "ˈwɔrt"
 },
 {
   "id": 7690,
   "word": "WEIGHTS",
   "pronunciations": "ˈweɪts"
 },
 {
   "id": 7691,
   "word": "WELLS",
   "pronunciations": "ˈwɛlz"
 },
 {
   "id": 7692,
   "word": "WHOLESOME",
   "pronunciations": "ˈhoʊlsəm"
 },
 {
   "id": 7693,
   "word": "WILDERNESS",
   "pronunciations": "ˈwɪldɝnəs"
 },
 {
   "id": 7694,
   "word": "WILLIE",
   "pronunciations": "ˈwɪli"
 },
 {
   "id": 7695,
   "word": "WILLINGNESS",
   "pronunciations": "ˈwɪlɪŋnəs"
 },
 {
   "id": 7696,
   "word": "WINSLOW",
   "pronunciations": "ˈwɪnzloʊ"
 },
 {
   "id": 7697,
   "word": "WIRED",
   "pronunciations": "ˈwaɪɝd, ˈwaɪrd"
 },
 {
   "id": 7698,
   "word": "WONDERFULLY",
   "pronunciations": "ˈwʌndɝfəli, ˈwʌndɝfli"
 },
 {
   "id": 7699,
   "word": "YE",
   "pronunciations": "ˈjiː, ˈjɛ"
 },
 {
   "id": 7700,
   "word": "YOUTHS",
   "pronunciations": "ˈjuːðz, ˈjuːθs"
 },
 {
   "id": 7701,
   "word": "ZONE",
   "pronunciations": "ˈzoʊn"
 },
 {
   "id": 7702,
   "word": "ABANDONMENT",
   "pronunciations": "əˈbændənmənt"
 },
 {
   "id": 7703,
   "word": "ABOLITION",
   "pronunciations": "ˌæbəˈlɪʃən"
 },
 {
   "id": 7704,
   "word": "ACCOMPLISHMENTS",
   "pronunciations": "əˈkɑːmplɪʃmənts"
 },
 {
   "id": 7705,
   "word": "ACCUMULATED",
   "pronunciations": "əˈkjuːmjəˌleɪtɪd"
 },
 {
   "id": 7706,
   "word": "ACCUSE",
   "pronunciations": "əˈkjuːz"
 },
 {
   "id": 7707,
   "word": "ACRE",
   "pronunciations": "ˈeɪkɝ"
 },
 {
   "id": 7708,
   "word": "ADAPTATION",
   "pronunciations": "ˌædəpˈteɪʃən"
 },
 {
   "id": 7709,
   "word": "ADDS",
   "pronunciations": "ˈædz"
 },
 {
   "id": 7710,
   "word": "ADMIRABLE",
   "pronunciations": "ˈædmɝəbəl, ˈædmrəbəl"
 },
 {
   "id": 7711,
   "word": "ADMIRATION",
   "pronunciations": "ˌædmɝˈeɪʃən"
 },
 {
   "id": 7712,
   "word": "ADMIRE",
   "pronunciations": "ædˈmaɪr"
 },
 {
   "id": 7713,
   "word": "ADS",
   "pronunciations": "ˈædz"
 },
 {
   "id": 7714,
   "word": "ADVANCEMENT",
   "pronunciations": "ədˈvænsmənt"
 },
 {
   "id": 7715,
   "word": "AGGRESSION",
   "pronunciations": "əˈgrɛʃən"
 },
 {
   "id": 7716,
   "word": "AIRPLANES",
   "pronunciations": "ˈɛrpleɪnz"
 },
 {
   "id": 7717,
   "word": "AKIN",
   "pronunciations": "əˈkɪn, ˈeɪkɪn"
 },
 {
   "id": 7718,
   "word": "ALAS",
   "pronunciations": "əˈlæs"
 },
 {
   "id": 7719,
   "word": "ALBUMIN",
   "pronunciations": "ælˈbjuːmən"
 },
 {
   "id": 7720,
   "word": "ALEX'S",
   "pronunciations": "ˈæləksɪz"
 },
 {
   "id": 7721,
   "word": "ALLEGED",
   "pronunciations": "əˈlɛdʒd"
 },
 {
   "id": 7722,
   "word": "ALLOTMENTS",
   "pronunciations": "əˈlɑːtmənts"
 },
 {
   "id": 7723,
   "word": "ALLOTTED",
   "pronunciations": "əˈlɑːtɪd"
 },
 {
   "id": 7724,
   "word": "AMAZEMENT",
   "pronunciations": "əˈmeɪzmənt"
 },
 {
   "id": 7725,
   "word": "ANALYZE",
   "pronunciations": "ˈænəˌlaɪz"
 },
 {
   "id": 7726,
   "word": "ANCHORED",
   "pronunciations": "ˈæŋkɝd"
 },
 {
   "id": 7727,
   "word": "APPENDIX",
   "pronunciations": "əˈpɛndɪks"
 },
 {
   "id": 7728,
   "word": "APPLICANTS",
   "pronunciations": "ˈæplɪkənts"
 },
 {
   "id": 7729,
   "word": "ARGUES",
   "pronunciations": "ˈɑːrgjuːz"
 },
 {
   "id": 7730,
   "word": "ARGUING",
   "pronunciations": "ˈɑːrgjuːɪŋ"
 },
 {
   "id": 7731,
   "word": "ARRANGE",
   "pronunciations": "ɝˈeɪndʒ"
 },
 {
   "id": 7732,
   "word": "ASIAN",
   "pronunciations": "ˈeɪʒən"
 },
 {
   "id": 7733,
   "word": "ASSESSING",
   "pronunciations": "əˈsɛsɪŋ"
 },
 {
   "id": 7734,
   "word": "ASSURING",
   "pronunciations": "əˈʃʊrɪŋ"
 },
 {
   "id": 7735,
   "word": "AVERAGES",
   "pronunciations": "ˈævrɪdʒɪz"
 },
 {
   "id": 7736,
   "word": "AVOCADO",
   "pronunciations": "ˌævəˈkɑːdoʊ"
 },
 {
   "id": 7737,
   "word": "AWFULLY",
   "pronunciations": "ˈɔfəli"
 },
 {
   "id": 7738,
   "word": "BACON",
   "pronunciations": "ˈbeɪkən"
 },
 {
   "id": 7739,
   "word": "BAGS",
   "pronunciations": "ˈbægz"
 },
 {
   "id": 7740,
   "word": "BALLOON",
   "pronunciations": "bəˈluːn"
 },
 {
   "id": 7741,
   "word": "BARBARA",
   "pronunciations": "ˈbɑːrbɝə, ˈbɑːrbrə"
 },
 {
   "id": 7742,
   "word": "BATON",
   "pronunciations": "bəˈtɑːn, ˈbæˌtɑːn, ˈbætən"
 },
 {
   "id": 7743,
   "word": "BEARDED",
   "pronunciations": "ˈbɪrdəd"
 },
 {
   "id": 7744,
   "word": "BEGGING",
   "pronunciations": "ˈbɛgɪŋ"
 },
 {
   "id": 7745,
   "word": "BITE",
   "pronunciations": "ˈbaɪt"
 },
 {
   "id": 7746,
   "word": "BLEAK",
   "pronunciations": "ˈbliːk"
 },
 {
   "id": 7747,
   "word": "BLESSING",
   "pronunciations": "ˈblɛsɪŋ"
 },
 {
   "id": 7748,
   "word": "BLOC",
   "pronunciations": "ˈblɑːk"
 },
 {
   "id": 7749,
   "word": "BLOOMING",
   "pronunciations": "ˈbluːmɪŋ"
 },
 {
   "id": 7750,
   "word": "BOILED",
   "pronunciations": "ˈbɔɪld"
 },
 {
   "id": 7751,
   "word": "BOLT",
   "pronunciations": "ˈboʊlt"
 },
 {
   "id": 7752,
   "word": "BORIS",
   "pronunciations": "ˈbɔrɪs"
 },
 {
   "id": 7753,
   "word": "BOULDER",
   "pronunciations": "ˈboʊldɝ"
 },
 {
   "id": 7754,
   "word": "BOUNDS",
   "pronunciations": "ˈbaʊndz"
 },
 {
   "id": 7755,
   "word": "BRANDT",
   "pronunciations": "ˈbrænt"
 },
 {
   "id": 7756,
   "word": "BRENNER",
   "pronunciations": "ˈbrɛnɝ"
 },
 {
   "id": 7757,
   "word": "BRODIE",
   "pronunciations": "ˈbroʊti"
 },
 {
   "id": 7758,
   "word": "BROTHER'S",
   "pronunciations": "ˈbrʌðɝz"
 },
 {
   "id": 7759,
   "word": "BUMBLEBEES",
   "pronunciations": "ˈbʌmbəlˌbiːz"
 },
 {
   "id": 7760,
   "word": "BUSHES",
   "pronunciations": "ˈbʊʃəz"
 },
 {
   "id": 7761,
   "word": "BUTTON",
   "pronunciations": "ˈbʌtən"
 },
 {
   "id": 7762,
   "word": "BUTTONS",
   "pronunciations": "ˈbʌtənz"
 },
 {
   "id": 7763,
   "word": "CALCULATIONS",
   "pronunciations": "ˌkælkjəˈleɪʃənz"
 },
 {
   "id": 7764,
   "word": "CALHOUN",
   "pronunciations": "kælˈhuːn"
 },
 {
   "id": 7765,
   "word": "CARING",
   "pronunciations": "ˈkɛrɪŋ"
 },
 {
   "id": 7766,
   "word": "CARMER",
   "pronunciations": "ˈkɑːrmɝ"
 },
 {
   "id": 7767,
   "word": "CATHODE",
   "pronunciations": "ˈkæˌθoʊd"
 },
 {
   "id": 7768,
   "word": "CAUTIOUS",
   "pronunciations": "ˈkɔʃəs"
 },
 {
   "id": 7769,
   "word": "CELLULOSE",
   "pronunciations": "ˈsɛljəˌloʊs"
 },
 {
   "id": 7770,
   "word": "CHAINS",
   "pronunciations": "ˈtʃeɪnz"
 },
 {
   "id": 7771,
   "word": "CHAMPIONS",
   "pronunciations": "ˈtʃæmpiːənz"
 },
 {
   "id": 7772,
   "word": "CHEERFUL",
   "pronunciations": "ˈtʃɪrfəl"
 },
 {
   "id": 7773,
   "word": "CHESTER",
   "pronunciations": "ˈtʃɛstɝ"
 },
 {
   "id": 7774,
   "word": "CHICAGO'S",
   "pronunciations": "ʃəˈkɑːˌgoʊz"
 },
 {
   "id": 7775,
   "word": "CIGAR",
   "pronunciations": "sɪˈgɑːr"
 },
 {
   "id": 7776,
   "word": "CITES",
   "pronunciations": "ˈsaɪts"
 },
 {
   "id": 7777,
   "word": "CLERGYMAN",
   "pronunciations": "ˈklɝːdʒiːmən, ˈklɝːdʒiːˌmæn"
 },
 {
   "id": 7778,
   "word": "CLIENTS",
   "pronunciations": "ˈklaɪənts"
 },
 {
   "id": 7779,
   "word": "CLUES",
   "pronunciations": "ˈkluːz"
 },
 {
   "id": 7780,
   "word": "COARSE",
   "pronunciations": "ˈkɔrs"
 },
 {
   "id": 7781,
   "word": "COATS",
   "pronunciations": "ˈkoʊts"
 },
 {
   "id": 7782,
   "word": "COIN",
   "pronunciations": "ˈkɔɪn"
 },
 {
   "id": 7783,
   "word": "COMBINING",
   "pronunciations": "kəmˈbaɪnɪŋ"
 },
 {
   "id": 7784,
   "word": "COMMERCIALS",
   "pronunciations": "kəˈmɝːʃəlz"
 },
 {
   "id": 7785,
   "word": "COMMUTE",
   "pronunciations": "kəˈmjuːt"
 },
 {
   "id": 7786,
   "word": "COMMUTER",
   "pronunciations": "kəˈmjuːtɝ"
 },
 {
   "id": 7787,
   "word": "COMPETITORS",
   "pronunciations": "kəmˈpɛtətɝz, kəmˈpɛtɪtɝz"
 },
 {
   "id": 7788,
   "word": "COMPILED",
   "pronunciations": "kəmˈpaɪld"
 },
 {
   "id": 7789,
   "word": "COMPOSITIONS",
   "pronunciations": "ˌkɑːmpəˈzɪʃənz"
 },
 {
   "id": 7790,
   "word": "COMPULSIVE",
   "pronunciations": "kəmˈpʌlsɪv"
 },
 {
   "id": 7791,
   "word": "COMRADES",
   "pronunciations": "ˈkɑːmˌrædz"
 },
 {
   "id": 7792,
   "word": "CONCEIVABLY",
   "pronunciations": "kənˈsiːvəbli"
 },
 {
   "id": 7793,
   "word": "CONCORD",
   "pronunciations": "ˈkɑːnˌkɔrd, ˈkɑːnkɝd"
 },
 {
   "id": 7794,
   "word": "CONFORM",
   "pronunciations": "kənˈfɔrm"
 },
 {
   "id": 7795,
   "word": "CONFRONTING",
   "pronunciations": "kənˈfrʌntɪŋ"
 },
 {
   "id": 7796,
   "word": "CONGRESSMEN",
   "pronunciations": "ˈkɑːŋgrəsmɪn"
 },
 {
   "id": 7797,
   "word": "CONJUGATE",
   "pronunciations": "ˌkɑːndʒəˈgeɪt, ˈkɑːndʒəˌgeɪt"
 },
 {
   "id": 7798,
   "word": "CONRAD",
   "pronunciations": "ˈkɑːnræd"
 },
 {
   "id": 7799,
   "word": "CONSCIENTIOUS",
   "pronunciations": "ˌkɑːnʃiːˈɛnʃəs"
 },
 {
   "id": 7800,
   "word": "CONSECUTIVE",
   "pronunciations": "kənˈsɛkjətɪv"
 },
 {
   "id": 7801,
   "word": "CONSERVATISM",
   "pronunciations": "kənˈsɝːvəˌtɪzəm"
 },
 {
   "id": 7802,
   "word": "CONSTITUENTS",
   "pronunciations": "kənˈstɪtʃuːənts"
 },
 {
   "id": 7803,
   "word": "CONSULTATION",
   "pronunciations": "ˌkɑːnsəlˈteɪʃən"
 },
 {
   "id": 7804,
   "word": "CONTAINER",
   "pronunciations": "kənˈteɪnɝ"
 },
 {
   "id": 7805,
   "word": "CONTRIBUTES",
   "pronunciations": "kənˈtrɪbjuːts"
 },
 {
   "id": 7806,
   "word": "CONVERSATIONS",
   "pronunciations": "ˌkɑːnvɝˈseɪʃənz"
 },
 {
   "id": 7807,
   "word": "CONVERTIBLE",
   "pronunciations": "kənˈvɝːtəbəl"
 },
 {
   "id": 7808,
   "word": "COOKED",
   "pronunciations": "ˈkʊkt"
 },
 {
   "id": 7809,
   "word": "COOPERATIVES",
   "pronunciations": "koʊˈɑːprətɪvz"
 },
 {
   "id": 7810,
   "word": "COORDINATE",
   "pronunciations": "koʊˈɔrdənət, koʊˈɔrdəˌneɪt"
 },
 {
   "id": 7811,
   "word": "COSTUME",
   "pronunciations": "kɑːˈstuːm, ˈkɑːstuːm"
 },
 {
   "id": 7812,
   "word": "COUNSELING",
   "pronunciations": "ˈkaʊnsəlɪŋ"
 },
 {
   "id": 7813,
   "word": "CREEP",
   "pronunciations": "ˈkriːp"
 },
 {
   "id": 7814,
   "word": "CRUSHED",
   "pronunciations": "ˈkrʌʃt"
 },
 {
   "id": 7815,
   "word": "CULTIVATED",
   "pronunciations": "ˈkʌltəˌveɪtɪd"
 },
 {
   "id": 7816,
   "word": "DANCED",
   "pronunciations": "ˈdænst"
 },
 {
   "id": 7817,
   "word": "DEADLOCK",
   "pronunciations": "ˈdɛdˌlɑːk"
 },
 {
   "id": 7818,
   "word": "DECEASED",
   "pronunciations": "dɪˈsiːst"
 },
 {
   "id": 7819,
   "word": "DECENCY",
   "pronunciations": "ˈdiːsənsi"
 },
 {
   "id": 7820,
   "word": "DECLARING",
   "pronunciations": "dɪˈklɛrɪŋ"
 },
 {
   "id": 7821,
   "word": "DEFENDANTS",
   "pronunciations": "dɪˈfɛndənts"
 },
 {
   "id": 7822,
   "word": "DEFICIENCIES",
   "pronunciations": "dɪˈfɪʃənsiːz"
 },
 {
   "id": 7823,
   "word": "DEFINING",
   "pronunciations": "dɪˈfaɪnɪŋ"
 },
 {
   "id": 7824,
   "word": "DENYING",
   "pronunciations": "dɪˈnaɪɪŋ"
 },
 {
   "id": 7825,
   "word": "DEPARTING",
   "pronunciations": "dɪˈpɑːrtɪŋ"
 },
 {
   "id": 7826,
   "word": "DEPOSITED",
   "pronunciations": "dəˈpɑːzɪtɪd, dɪˈpɑːzətəd"
 },
 {
   "id": 7827,
   "word": "DESCENDING",
   "pronunciations": "dɪˈsɛndɪŋ"
 },
 {
   "id": 7828,
   "word": "DESCRIPTIONS",
   "pronunciations": "dɪˈskrɪpʃənz"
 },
 {
   "id": 7829,
   "word": "DETECT",
   "pronunciations": "dɪˈtɛkt"
 },
 {
   "id": 7830,
   "word": "DEVOTING",
   "pronunciations": "dɪˈvoʊtɪŋ"
 },
 {
   "id": 7831,
   "word": "DIAGNOSTIC",
   "pronunciations": "ˌdaɪəgˈnɑːstɪk"
 },
 {
   "id": 7832,
   "word": "DIAGRAM",
   "pronunciations": "ˈdaɪəˌgræm"
 },
 {
   "id": 7833,
   "word": "DIALECT",
   "pronunciations": "ˈdaɪəˌlɛkt"
 },
 {
   "id": 7834,
   "word": "DIFFERS",
   "pronunciations": "ˈdɪfɝz"
 },
 {
   "id": 7835,
   "word": "DIG",
   "pronunciations": "ˈdɪg"
 },
 {
   "id": 7836,
   "word": "DIMINISHED",
   "pronunciations": "dɪˈmɪnɪʃt"
 },
 {
   "id": 7837,
   "word": "DISABLED",
   "pronunciations": "dɪˈseɪbəld"
 },
 {
   "id": 7838,
   "word": "DISCOURSE",
   "pronunciations": "ˈdɪskɔrs"
 },
 {
   "id": 7839,
   "word": "DISCOVERIES",
   "pronunciations": "dɪˈskʌvɝiːz"
 },
 {
   "id": 7840,
   "word": "DISTILLED",
   "pronunciations": "dɪˈstɪld"
 },
 {
   "id": 7841,
   "word": "DISTRIBUTIONS",
   "pronunciations": "ˌdɪstrəˈbjuːʃənz"
 },
 {
   "id": 7842,
   "word": "DISTURB",
   "pronunciations": "dɪˈstɝːb"
 },
 {
   "id": 7843,
   "word": "DISTURBANCE",
   "pronunciations": "dɪˈstɝːbəns"
 },
 {
   "id": 7844,
   "word": "DITCH",
   "pronunciations": "ˈdɪtʃ"
 },
 {
   "id": 7845,
   "word": "DOLL",
   "pronunciations": "ˈdɑːl"
 },
 {
   "id": 7846,
   "word": "DOOMED",
   "pronunciations": "ˈduːmd"
 },
 {
   "id": 7847,
   "word": "DRAMATICALLY",
   "pronunciations": "drəˈmætɪkli, drəˈmætɪkəli"
 },
 {
   "id": 7848,
   "word": "DRASTICALLY",
   "pronunciations": "ˈdræstɪkli"
 },
 {
   "id": 7849,
   "word": "DREADFUL",
   "pronunciations": "ˈdrɛdfəl"
 },
 {
   "id": 7850,
   "word": "DRESSES",
   "pronunciations": "ˈdrɛsəz, ˈdrɛsɪz"
 },
 {
   "id": 7851,
   "word": "DREXEL",
   "pronunciations": "ˈdrɛksəl"
 },
 {
   "id": 7852,
   "word": "DRILLING",
   "pronunciations": "ˈdrɪlɪŋ"
 },
 {
   "id": 7853,
   "word": "DULY",
   "pronunciations": "ˈduːli"
 },
 {
   "id": 7854,
   "word": "DUMONT",
   "pronunciations": "duːˈmɑːnt"
 },
 {
   "id": 7855,
   "word": "EARTHY",
   "pronunciations": "ˈɝːθi"
 },
 {
   "id": 7856,
   "word": "ECHO",
   "pronunciations": "ˈɛkoʊ"
 },
 {
   "id": 7857,
   "word": "EDITIONS",
   "pronunciations": "ɪˈdɪʃənz"
 },
 {
   "id": 7858,
   "word": "EDITORIALS",
   "pronunciations": "ˌɛdəˈtɔriːəlz"
 },
 {
   "id": 7859,
   "word": "EDUCATOR",
   "pronunciations": "ˈɛdʒəˌkeɪtɝ, ˈɛdʒjuːˌkeɪtɝ"
 },
 {
   "id": 7860,
   "word": "ELBOW",
   "pronunciations": "ˈɛlˌboʊ"
 },
 {
   "id": 7861,
   "word": "ELEANOR",
   "pronunciations": "ˈɛlənɔr, ˈɛlənɝ"
 },
 {
   "id": 7862,
   "word": "ELEGANCE",
   "pronunciations": "ˈɛləgəns"
 },
 {
   "id": 7863,
   "word": "ELEPHANTS",
   "pronunciations": "ˈɛləfənts"
 },
 {
   "id": 7864,
   "word": "ELLEN",
   "pronunciations": "ˈɛlən"
 },
 {
   "id": 7865,
   "word": "EMBODIMENT",
   "pronunciations": "ɛmˈbɑːdiːmənt"
 },
 {
   "id": 7866,
   "word": "EMMA",
   "pronunciations": "ˈɛmə"
 },
 {
   "id": 7867,
   "word": "EMPLOYING",
   "pronunciations": "ɛmˈplɔɪɪŋ, ɪmˈplɔɪɪŋ"
 },
 {
   "id": 7868,
   "word": "ENDURING",
   "pronunciations": "ɛndˈjʊrɪŋ, ɪnˈdʊrɪŋ"
 },
 {
   "id": 7869,
   "word": "ENJOYS",
   "pronunciations": "ˌɛnˈdʒɔɪz"
 },
 {
   "id": 7870,
   "word": "ENTITY",
   "pronunciations": "ˈɛntəti, ˈɛntɪti"
 },
 {
   "id": 7871,
   "word": "EQUATIONS",
   "pronunciations": "ɪˈkweɪʒənz"
 },
 {
   "id": 7872,
   "word": "ERNEST",
   "pronunciations": "ˈɝːnəst, ˈɝːnɪst"
 },
 {
   "id": 7873,
   "word": "EVANS",
   "pronunciations": "ˈɛvənz"
 },
 {
   "id": 7874,
   "word": "EXCEEDS",
   "pronunciations": "ɪkˈsiːdz"
 },
 {
   "id": 7875,
   "word": "EXHIBITED",
   "pronunciations": "ɪgˈzɪbətəd"
 },
 {
   "id": 7876,
   "word": "EXPORT",
   "pronunciations": "ˈɛkspɔrt"
 },
 {
   "id": 7877,
   "word": "EXPRESSWAY",
   "pronunciations": "ɪkˈsprɛˌsweɪ"
 },
 {
   "id": 7878,
   "word": "EXTENSIVELY",
   "pronunciations": "ɪkˈstɛnsɪvli"
 },
 {
   "id": 7879,
   "word": "FAKE",
   "pronunciations": "ˈfeɪk"
 },
 {
   "id": 7880,
   "word": "FAVORS",
   "pronunciations": "ˈfeɪvɝz"
 },
 {
   "id": 7881,
   "word": "FEMININE",
   "pronunciations": "ˈfɛmənən"
 },
 {
   "id": 7882,
   "word": "FERTILITY",
   "pronunciations": "fɝˈtɪləti, fɝˈtɪlɪti"
 },
 {
   "id": 7883,
   "word": "FINALS",
   "pronunciations": "ˈfaɪnəlz"
 },
 {
   "id": 7884,
   "word": "FLEEING",
   "pronunciations": "ˈfliːɪŋ"
 },
 {
   "id": 7885,
   "word": "FLOCK",
   "pronunciations": "ˈflɑːk"
 },
 {
   "id": 7886,
   "word": "FOLLY",
   "pronunciations": "ˈfɑːli"
 },
 {
   "id": 7887,
   "word": "FORECAST",
   "pronunciations": "ˈfɔrˌkæst"
 },
 {
   "id": 7888,
   "word": "FORGE",
   "pronunciations": "ˈfɔrdʒ"
 },
 {
   "id": 7889,
   "word": "FORUM",
   "pronunciations": "ˈfɔrəm"
 },
 {
   "id": 7890,
   "word": "FOSDICK",
   "pronunciations": "ˈfɑːsdɪk"
 },
 {
   "id": 7891,
   "word": "FOUNDER",
   "pronunciations": "ˈfaʊndɝ"
 },
 {
   "id": 7892,
   "word": "FRAGILE",
   "pronunciations": "ˈfrædʒəl"
 },
 {
   "id": 7893,
   "word": "FRAGMENTS",
   "pronunciations": "ˈfrægmənts"
 },
 {
   "id": 7894,
   "word": "FRAMING",
   "pronunciations": "ˈfreɪmɪŋ"
 },
 {
   "id": 7895,
   "word": "FRUSTRATED",
   "pronunciations": "ˈfrʌˌstreɪtəd"
 },
 {
   "id": 7896,
   "word": "GAZETTE",
   "pronunciations": "gəˈzɛt"
 },
 {
   "id": 7897,
   "word": "GENERALS",
   "pronunciations": "ˈdʒɛnɝəlz, ˈdʒɛnrəlz"
 },
 {
   "id": 7898,
   "word": "GENUINELY",
   "pronunciations": "ˈdʒɛnjuːənli, ˈdʒɛnjuːˌaɪnli"
 },
 {
   "id": 7899,
   "word": "GIGANTIC",
   "pronunciations": "dʒaɪˈgæntɪk, dʒaɪˈgænɪk"
 },
 {
   "id": 7900,
   "word": "GIRL'S",
   "pronunciations": "ˈgɝːlz"
 },
 {
   "id": 7901,
   "word": "GLOWING",
   "pronunciations": "ˈgloʊɪŋ"
 },
 {
   "id": 7902,
   "word": "GOLDBERG",
   "pronunciations": "ˈgoʊldbɝg"
 },
 {
   "id": 7903,
   "word": "GORDON",
   "pronunciations": "ˈgɔrdən"
 },
 {
   "id": 7904,
   "word": "GRACEFUL",
   "pronunciations": "ˈgreɪsfəl"
 },
 {
   "id": 7905,
   "word": "GRAM",
   "pronunciations": "ˈgræm"
 },
 {
   "id": 7906,
   "word": "GREG'S",
   "pronunciations": "ˈgrɛgz"
 },
 {
   "id": 7907,
   "word": "GRIEF",
   "pronunciations": "ˈgriːf"
 },
 {
   "id": 7908,
   "word": "GUIDING",
   "pronunciations": "ˈgaɪdɪŋ"
 },
 {
   "id": 7909,
   "word": "HAIL",
   "pronunciations": "ˈheɪl"
 },
 {
   "id": 7910,
   "word": "HALFBACK",
   "pronunciations": "ˈhæfˌbæk"
 },
 {
   "id": 7911,
   "word": "HALT",
   "pronunciations": "ˈhɔlt"
 },
 {
   "id": 7912,
   "word": "HANSEN",
   "pronunciations": "ˈhænsən"
 },
 {
   "id": 7913,
   "word": "HARNESS",
   "pronunciations": "ˈhɑːrnəs, ˈhɑːrnɪs"
 },
 {
   "id": 7914,
   "word": "HAWKSLEY",
   "pronunciations": "ˈhɔksli"
 },
 {
   "id": 7915,
   "word": "HAZARDS",
   "pronunciations": "ˈhæzɝdz"
 },
 {
   "id": 7916,
   "word": "HEBREW",
   "pronunciations": "ˈhiːbruː"
 },
 {
   "id": 7917,
   "word": "HELLO",
   "pronunciations": "həˈloʊ, hɛˈloʊ"
 },
 {
   "id": 7918,
   "word": "HERMAN",
   "pronunciations": "ˈhɝːmən"
 },
 {
   "id": 7919,
   "word": "HERR",
   "pronunciations": "ˈhɛr"
 },
 {
   "id": 7920,
   "word": "HESITATE",
   "pronunciations": "ˈhɛzəˌteɪt"
 },
 {
   "id": 7921,
   "word": "HINTS",
   "pronunciations": "ˈhɪnts"
 },
 {
   "id": 7922,
   "word": "HIP",
   "pronunciations": "ˈhɪp"
 },
 {
   "id": 7923,
   "word": "HOLSTER",
   "pronunciations": "ˈhoʊlstɝ"
 },
 {
   "id": 7924,
   "word": "HONESTY",
   "pronunciations": "ˈɑːnəsti"
 },
 {
   "id": 7925,
   "word": "HUDDLED",
   "pronunciations": "ˈhʌdəld"
 },
 {
   "id": 7926,
   "word": "HUFF",
   "pronunciations": "ˈhʌf"
 },
 {
   "id": 7927,
   "word": "HUNT",
   "pronunciations": "ˈhʌnt"
 },
 {
   "id": 7928,
   "word": "HYSTERICAL",
   "pronunciations": "hɪˈstɛrɪkəl"
 },
 {
   "id": 7929,
   "word": "IDEALLY",
   "pronunciations": "aɪˈdiːli"
 },
 {
   "id": 7930,
   "word": "IDENTITIES",
   "pronunciations": "aɪˈdɛntɪˌtiːz"
 },
 {
   "id": 7931,
   "word": "IMAGERY",
   "pronunciations": "ˈɪmədʒri, ˈɪmɪdʒri"
 },
 {
   "id": 7932,
   "word": "IMMIGRANTS",
   "pronunciations": "ˈɪməgrənts"
 },
 {
   "id": 7933,
   "word": "IMMIGRATION",
   "pronunciations": "ˌɪməˈgreɪʃən"
 },
 {
   "id": 7934,
   "word": "IMPATIENCE",
   "pronunciations": "ˌɪmˈpeɪʃəns"
 },
 {
   "id": 7935,
   "word": "IMPATIENT",
   "pronunciations": "ˌɪmˈpeɪʃənt"
 },
 {
   "id": 7936,
   "word": "IMPERATIVE",
   "pronunciations": "ˌɪmˈpɛrətɪv"
 },
 {
   "id": 7937,
   "word": "IMPLICATION",
   "pronunciations": "ˌɪmpləˈkeɪʃən"
 },
 {
   "id": 7938,
   "word": "INDEBTED",
   "pronunciations": "ˌɪnˈdɛtɪd"
 },
 {
   "id": 7939,
   "word": "INDIGNANT",
   "pronunciations": "ˌɪnˈdɪgnənt"
 },
 {
   "id": 7940,
   "word": "INGENIOUS",
   "pronunciations": "ˌɪnˈdʒiːnjəs"
 },
 {
   "id": 7941,
   "word": "INSISTS",
   "pronunciations": "ˌɪnˈsɪsts"
 },
 {
   "id": 7942,
   "word": "INSTINCTIVELY",
   "pronunciations": "ˌɪnˈstɪŋktɪvˌliː"
 },
 {
   "id": 7943,
   "word": "INSULATION",
   "pronunciations": "ˌɪnsəˈleɪʃən"
 },
 {
   "id": 7944,
   "word": "INTEGRITY",
   "pronunciations": "ˌɪnˈtɛgrəti"
 },
 {
   "id": 7945,
   "word": "INTENSELY",
   "pronunciations": "ˌɪnˈtɛnsli"
 },
 {
   "id": 7946,
   "word": "INTRICATE",
   "pronunciations": "ˈɪntrəkət"
 },
 {
   "id": 7947,
   "word": "IRRADIATION",
   "pronunciations": "ˌɪˌreɪdiːˈeɪʃən"
 },
 {
   "id": 7948,
   "word": "ISAAC",
   "pronunciations": "ˈaɪzək, ˈaɪzɪk"
 },
 {
   "id": 7949,
   "word": "JAWS",
   "pronunciations": "ˈdʒɔz"
 },
 {
   "id": 7950,
   "word": "JOHNSON'S",
   "pronunciations": "ˈdʒɑːnsənz"
 },
 {
   "id": 7951,
   "word": "JOURNALIST",
   "pronunciations": "ˈdʒɝːnələst, ˈdʒɝːnəlɪst"
 },
 {
   "id": 7952,
   "word": "JULIE",
   "pronunciations": "ˈdʒuːli"
 },
 {
   "id": 7953,
   "word": "K",
   "pronunciations": "ˈkeɪ"
 },
 {
   "id": 7954,
   "word": "KEELSON",
   "pronunciations": "ˈkɛlsən"
 },
 {
   "id": 7955,
   "word": "KNIT",
   "pronunciations": "ˈnɪt"
 },
 {
   "id": 7956,
   "word": "LARKIN",
   "pronunciations": "ˈlɑːrkɪn"
 },
 {
   "id": 7957,
   "word": "LATTER'S",
   "pronunciations": "ˈlætɝz"
 },
 {
   "id": 7958,
   "word": "LAUNCH",
   "pronunciations": "ˈlɔntʃ"
 },
 {
   "id": 7959,
   "word": "LAUREN",
   "pronunciations": "ˈlɔrən"
 },
 {
   "id": 7960,
   "word": "LAYERS",
   "pronunciations": "ˈleɪɝz"
 },
 {
   "id": 7961,
   "word": "LEARNS",
   "pronunciations": "ˈlɝːnz"
 },
 {
   "id": 7962,
   "word": "LEASE",
   "pronunciations": "ˈliːs"
 },
 {
   "id": 7963,
   "word": "LEGENDS",
   "pronunciations": "ˈlɛdʒəndz"
 },
 {
   "id": 7964,
   "word": "LEONARD",
   "pronunciations": "ˈlɛnɝd"
 },
 {
   "id": 7965,
   "word": "LICKED",
   "pronunciations": "ˈlɪkt"
 },
 {
   "id": 7966,
   "word": "LIFETIME",
   "pronunciations": "ˈlaɪfˌtaɪm"
 },
 {
   "id": 7967,
   "word": "LIKELIHOOD",
   "pronunciations": "ˈlaɪkliːˌhʊd"
 },
 {
   "id": 7968,
   "word": "LILLY",
   "pronunciations": "ˈlɪli"
 },
 {
   "id": 7969,
   "word": "LIMITATION",
   "pronunciations": "ˌlɪmɪˈteɪʃən"
 },
 {
   "id": 7970,
   "word": "LINGUISTIC",
   "pronunciations": "lɪŋˈgwɪstɪk"
 },
 {
   "id": 7971,
   "word": "LISTENER",
   "pronunciations": "ˈlɪsənɝ, ˈlɪsnɝ"
 },
 {
   "id": 7972,
   "word": "LITTLEPAGE",
   "pronunciations": "ˈlɪtəlˌpeɪdʒ"
 },
 {
   "id": 7973,
   "word": "LLOYD",
   "pronunciations": "ˈlɔɪd"
 },
 {
   "id": 7974,
   "word": "LOADS",
   "pronunciations": "ˈloʊdz"
 },
 {
   "id": 7975,
   "word": "LONGING",
   "pronunciations": "ˈlɔŋɪŋ"
 },
 {
   "id": 7976,
   "word": "LOOMING",
   "pronunciations": "ˈluːmɪŋ"
 },
 {
   "id": 7977,
   "word": "LOVERS",
   "pronunciations": "ˈlʌvɝz"
 },
 {
   "id": 7978,
   "word": "LUCIEN",
   "pronunciations": "ˌluːˌsiːˈɛn"
 },
 {
   "id": 7979,
   "word": "LUGGAGE",
   "pronunciations": "ˈlʌgədʒ, ˈlʌgɪdʒ"
 },
 {
   "id": 7980,
   "word": "LUNAR",
   "pronunciations": "ˈluːnɝ"
 },
 {
   "id": 7981,
   "word": "MAGNIFICATION",
   "pronunciations": "ˌmægnəfəˈkeɪʃən"
 },
 {
   "id": 7982,
   "word": "MAJESTIC",
   "pronunciations": "məˈdʒɛstɪk"
 },
 {
   "id": 7983,
   "word": "MANAGERIAL",
   "pronunciations": "ˌmænɪˈdʒɪriːəl"
 },
 {
   "id": 7984,
   "word": "MARGARET",
   "pronunciations": "ˈmɑːrgɝɪt, ˈmɑːrgrət, ˈmɑːrgrɪt"
 },
 {
   "id": 7985,
   "word": "MARGIN",
   "pronunciations": "ˈmɑːrdʒən"
 },
 {
   "id": 7986,
   "word": "MARIJUANA",
   "pronunciations": "ˌmɛrəˈwɑːnə"
 },
 {
   "id": 7987,
   "word": "MARINA",
   "pronunciations": "mɝˈiːnə"
 },
 {
   "id": 7988,
   "word": "MARITAL",
   "pronunciations": "ˈmærətəl"
 },
 {
   "id": 7989,
   "word": "MARY'S",
   "pronunciations": "ˈmɛriːz"
 },
 {
   "id": 7990,
   "word": "MASTERPIECE",
   "pronunciations": "ˈmæstɝˌpiːs"
 },
 {
   "id": 7991,
   "word": "MASTERY",
   "pronunciations": "ˈmæstɝi"
 },
 {
   "id": 7992,
   "word": "MATES",
   "pronunciations": "ˈmeɪts"
 },
 {
   "id": 7993,
   "word": "MEEK",
   "pronunciations": "ˈmiːk"
 },
 {
   "id": 7994,
   "word": "MEEKER",
   "pronunciations": "ˈmiːkɝ"
 },
 {
   "id": 7995,
   "word": "MEGATONS",
   "pronunciations": "ˈmɛgəˌtənz"
 },
 {
   "id": 7996,
   "word": "MELODIES",
   "pronunciations": "ˈmɛlədiːz"
 },
 {
   "id": 7997,
   "word": "MERCURY",
   "pronunciations": "ˈmɝːkjɝi"
 },
 {
   "id": 7998,
   "word": "MERGE",
   "pronunciations": "ˈmɝːdʒ"
 },
 {
   "id": 7999,
   "word": "MESSENGER",
   "pronunciations": "ˈmɛsəndʒɝ, ˈmɛsɪndʒɝ"
 },
 {
   "id": 8000,
   "word": "MICE",
   "pronunciations": "ˈmaɪs"
 },
 {
   "id": 8001,
   "word": "MISCELLANEOUS",
   "pronunciations": "ˌmɪsəˈleɪniːəs"
 },
 {
   "id": 8002,
   "word": "MISFORTUNE",
   "pronunciations": "mɪsˈfɔrtʃən"
 },
 {
   "id": 8003,
   "word": "MISLEADING",
   "pronunciations": "mɪˈsliːdɪŋ"
 },
 {
   "id": 8004,
   "word": "MISSIONARIES",
   "pronunciations": "ˈmɪʃəˌnɛriːz"
 },
 {
   "id": 8005,
   "word": "MISTER",
   "pronunciations": "ˈmɪstɝ"
 },
 {
   "id": 8006,
   "word": "MIXING",
   "pronunciations": "ˈmɪksɪŋ"
 },
 {
   "id": 8007,
   "word": "MOB",
   "pronunciations": "ˈmɑːb"
 },
 {
   "id": 8008,
   "word": "MOISTURE",
   "pronunciations": "ˈmɔɪstʃɝ"
 },
 {
   "id": 8009,
   "word": "MONKS",
   "pronunciations": "ˈmʌŋks"
 },
 {
   "id": 8010,
   "word": "MONTERO",
   "pronunciations": "mɑːnˈtɛroʊ"
 },
 {
   "id": 8011,
   "word": "MORNINGS",
   "pronunciations": "ˈmɔrnɪŋz"
 },
 {
   "id": 8012,
   "word": "MORTAL",
   "pronunciations": "ˈmɔrtəl"
 },
 {
   "id": 8013,
   "word": "MOSQUE",
   "pronunciations": "ˈmɑːsk, ˈmɔsk"
 },
 {
   "id": 8014,
   "word": "MOUSE",
   "pronunciations": "ˈmaʊs"
 },
 {
   "id": 8015,
   "word": "MUDDY",
   "pronunciations": "ˈmʌdi"
 },
 {
   "id": 8016,
   "word": "MULTIPLY",
   "pronunciations": "ˈmʌltəˌplaɪ"
 },
 {
   "id": 8017,
   "word": "MUSEUMS",
   "pronunciations": "mjuːˈziːəmz, ˈmjuːziːəmz"
 },
 {
   "id": 8018,
   "word": "MUZZLE",
   "pronunciations": "ˈmʌzəl"
 },
 {
   "id": 8019,
   "word": "NATIONALLY",
   "pronunciations": "ˈnæʃənəli, ˈnæʃnəli"
 },
 {
   "id": 8020,
   "word": "NEGLIGIBLE",
   "pronunciations": "ˈnɛglədʒəbəl, ˈnɛglɪdʒəbəl"
 },
 {
   "id": 8021,
   "word": "NEGOTIATE",
   "pronunciations": "nəˈgoʊʃiːˌeɪt, nɪˈgoʊʃiːˌeɪt"
 },
 {
   "id": 8022,
   "word": "NEUROTIC",
   "pronunciations": "nʊˈrɑːtɪk"
 },
 {
   "id": 8023,
   "word": "NEWMAN",
   "pronunciations": "ˈnuːmən"
 },
 {
   "id": 8024,
   "word": "NICKNAME",
   "pronunciations": "ˈnɪkˌneɪm"
 },
 {
   "id": 8025,
   "word": "NON",
   "pronunciations": "ˈnɑːn"
 },
 {
   "id": 8026,
   "word": "NON-VIOLENT",
   "pronunciations": "nɑːnˈvaɪələnt"
 },
 {
   "id": 8027,
   "word": "NONETHELESS",
   "pronunciations": "ˌnənðəˈlɛs"
 },
 {
   "id": 8028,
   "word": "NORM",
   "pronunciations": "ˈnɔrm"
 },
 {
   "id": 8029,
   "word": "OBSTACLE",
   "pronunciations": "ˈɑːbstəkəl"
 },
 {
   "id": 8030,
   "word": "OCCURRENCES",
   "pronunciations": "əˈkɝːənsɪz"
 },
 {
   "id": 8031,
   "word": "OILY",
   "pronunciations": "ˈɔɪli"
 },
 {
   "id": 8032,
   "word": "OUTWARD",
   "pronunciations": "ˈaʊtwɝd"
 },
 {
   "id": 8033,
   "word": "OWE",
   "pronunciations": "ˈoʊ"
 },
 {
   "id": 8034,
   "word": "OXEN",
   "pronunciations": "ˈɑːksən"
 },
 {
   "id": 8035,
   "word": "PAINTS",
   "pronunciations": "ˈpeɪnts"
 },
 {
   "id": 8036,
   "word": "PAPA'S",
   "pronunciations": "ˈpɑːˌpɑːz"
 },
 {
   "id": 8037,
   "word": "PASTE",
   "pronunciations": "ˈpeɪst"
 },
 {
   "id": 8038,
   "word": "PATCHES",
   "pronunciations": "ˈpætʃəz, ˈpætʃɪz"
 },
 {
   "id": 8039,
   "word": "PATRIOT",
   "pronunciations": "ˈpeɪtriːət"
 },
 {
   "id": 8040,
   "word": "PATRIOTIC",
   "pronunciations": "ˌpeɪtriːˈɑːtɪk"
 },
 {
   "id": 8041,
   "word": "PATRONAGE",
   "pronunciations": "ˈpætrənɪdʒ, ˈpeɪtrənədʒ, ˈpeɪtrənɪdʒ"
 },
 {
   "id": 8042,
   "word": "PEDERSEN",
   "pronunciations": "ˈpɛdɝsən"
 },
 {
   "id": 8043,
   "word": "PERFUME",
   "pronunciations": "pɝˈfjuːm"
 },
 {
   "id": 8044,
   "word": "PERSIAN",
   "pronunciations": "ˈpɝːʒən"
 },
 {
   "id": 8045,
   "word": "PERSISTED",
   "pronunciations": "pɝˈsɪstɪd"
 },
 {
   "id": 8046,
   "word": "PHILHARMONIC",
   "pronunciations": "ˌfɪlˌhɑːrˈmɑːnɪk"
 },
 {
   "id": 8047,
   "word": "PIOUS",
   "pronunciations": "ˈpaɪəs"
 },
 {
   "id": 8048,
   "word": "PLEASANTLY",
   "pronunciations": "ˈplɛzəntli"
 },
 {
   "id": 8049,
   "word": "PLEASING",
   "pronunciations": "ˈpliːzɪŋ"
 },
 {
   "id": 8050,
   "word": "PLOTTED",
   "pronunciations": "ˈplɑːtəd, ˈplɑːtɪd"
 },
 {
   "id": 8051,
   "word": "POISON",
   "pronunciations": "ˈpɔɪzən"
 },
 {
   "id": 8052,
   "word": "POLARIS",
   "pronunciations": "poʊˈlɛrəs"
 },
 {
   "id": 8053,
   "word": "POLITELY",
   "pronunciations": "pəˈlaɪtli"
 },
 {
   "id": 8054,
   "word": "POLLS",
   "pronunciations": "ˈpoʊlz"
 },
 {
   "id": 8055,
   "word": "PONY",
   "pronunciations": "ˈpoʊˌniː"
 },
 {
   "id": 8056,
   "word": "PORK",
   "pronunciations": "ˈpɔrk"
 },
 {
   "id": 8057,
   "word": "PRATT",
   "pronunciations": "ˈpræt"
 },
 {
   "id": 8058,
   "word": "PREDICTION",
   "pronunciations": "priːˈdɪkʃən"
 },
 {
   "id": 8059,
   "word": "PRESENTING",
   "pronunciations": "prɪˈzɛntɪŋ, priːˈzɛntɪŋ"
 },
 {
   "id": 8060,
   "word": "PRESERVING",
   "pronunciations": "prəˈzɝːvɪŋ, prɪˈzɝːvɪŋ, priːˈzɝːvɪŋ"
 },
 {
   "id": 8061,
   "word": "PRESIDING",
   "pronunciations": "prɪˈzaɪdɪŋ, priːˈzaɪdɪŋ"
 },
 {
   "id": 8062,
   "word": "PREVENTING",
   "pronunciations": "prɪˈvɛntɪŋ, priːˈvɛntɪŋ, prɪˈvɛnɪŋ, priːˈvɛnɪŋ"
 },
 {
   "id": 8063,
   "word": "PREVENTS",
   "pronunciations": "prɪˈvɛnts, priːˈvɛnts"
 },
 {
   "id": 8064,
   "word": "PRINCESS",
   "pronunciations": "ˈprɪnsɛs"
 },
 {
   "id": 8065,
   "word": "PRINCIPALLY",
   "pronunciations": "ˈprɪnsɪpli"
 },
 {
   "id": 8066,
   "word": "PRINTS",
   "pronunciations": "ˈprɪnts"
 },
 {
   "id": 8067,
   "word": "PRIVILEGED",
   "pronunciations": "ˈprɪvɪlɪdʒd"
 },
 {
   "id": 8068,
   "word": "PRIVILEGES",
   "pronunciations": "ˈprɪvɪˌlɪdʒɪz"
 },
 {
   "id": 8069,
   "word": "PROFESSIONALS",
   "pronunciations": "prəˈfɛʃənəlz"
 },
 {
   "id": 8070,
   "word": "PROJECTIONS",
   "pronunciations": "prɑːˈdʒɛkʃənz"
 },
 {
   "id": 8071,
   "word": "PROSTITUTION",
   "pronunciations": "ˌprɑːstəˈtuːʃən"
 },
 {
   "id": 8072,
   "word": "PSYCHOLOGIST",
   "pronunciations": "saɪˈkɑːlədʒəst"
 },
 {
   "id": 8073,
   "word": "PURIFIED",
   "pronunciations": "ˈpjʊrəˌfaɪd"
 },
 {
   "id": 8074,
   "word": "PUZZLE",
   "pronunciations": "ˈpʌzəl"
 },
 {
   "id": 8075,
   "word": "QUEENS",
   "pronunciations": "ˈkwiːnz"
 },
 {
   "id": 8076,
   "word": "RADIOACTIVE",
   "pronunciations": "ˌreɪdiːoʊˈæktɪv"
 },
 {
   "id": 8077,
   "word": "RAG",
   "pronunciations": "ˈræg"
 },
 {
   "id": 8078,
   "word": "RAID",
   "pronunciations": "ˈreɪd"
 },
 {
   "id": 8079,
   "word": "RALLY",
   "pronunciations": "ˈræli"
 },
 {
   "id": 8080,
   "word": "RAMSEY",
   "pronunciations": "ˈræmzi"
 },
 {
   "id": 8081,
   "word": "RANGES",
   "pronunciations": "ˈreɪndʒəz, ˈreɪndʒɪz"
 },
 {
   "id": 8082,
   "word": "RATING",
   "pronunciations": "ˈreɪtɪŋ"
 },
 {
   "id": 8083,
   "word": "RATION",
   "pronunciations": "ˈræʃən, ˈreɪʃən"
 },
 {
   "id": 8084,
   "word": "REARED",
   "pronunciations": "ˈrɪrd"
 },
 {
   "id": 8085,
   "word": "RECOGNIZES",
   "pronunciations": "ˈrɛkəgˌnaɪzɪz"
 },
 {
   "id": 8086,
   "word": "RECOGNIZING",
   "pronunciations": "ˈrɛkəgˌnaɪzɪŋ"
 },
 {
   "id": 8087,
   "word": "RECRUIT",
   "pronunciations": "rəˈkruːt, rɪˈkruːt, riːˈkruːt"
 },
 {
   "id": 8088,
   "word": "REFRAIN",
   "pronunciations": "rɪˈfreɪn"
 },
 {
   "id": 8089,
   "word": "REFUSING",
   "pronunciations": "rəˈfjuːzɪŋ, rɪˈfjuːzɪŋ"
 },
 {
   "id": 8090,
   "word": "REINFORCE",
   "pronunciations": "ˌriːɪnˈfɔrs"
 },
 {
   "id": 8091,
   "word": "REJECT",
   "pronunciations": "rɪˈdʒɛkt, ˈriːdʒɛkt"
 },
 {
   "id": 8092,
   "word": "RELEVANCE",
   "pronunciations": "ˈrɛləvəns"
 },
 {
   "id": 8093,
   "word": "REPLIES",
   "pronunciations": "rɪˈplaɪz, riːˈplaɪz"
 },
 {
   "id": 8094,
   "word": "REPRESENTATIONS",
   "pronunciations": "ˌrɛprəzənˈteɪʃənz"
 },
 {
   "id": 8095,
   "word": "RESERVOIR",
   "pronunciations": "ˈrɛzəvˌwɑːr, ˈrɛzɝvˌwɑːr"
 },
 {
   "id": 8096,
   "word": "RESTRAIN",
   "pronunciations": "riːˈstreɪn"
 },
 {
   "id": 8097,
   "word": "RETRIEVED",
   "pronunciations": "riːˈtriːvd"
 },
 {
   "id": 8098,
   "word": "REVIEWING",
   "pronunciations": "riːvˈjuːɪŋ"
 },
 {
   "id": 8099,
   "word": "REVULSION",
   "pronunciations": "rɪˈvʌlʃən, riːˈvʌlʃən"
 },
 {
   "id": 8100,
   "word": "RICHARDS",
   "pronunciations": "ˈrɪtʃɝdz"
 },
 {
   "id": 8101,
   "word": "RIDES",
   "pronunciations": "ˈraɪdz"
 },
 {
   "id": 8102,
   "word": "RINGING",
   "pronunciations": "ˈrɪŋɪŋ"
 },
 {
   "id": 8103,
   "word": "RISEN",
   "pronunciations": "ˈrɪzən"
 },
 {
   "id": 8104,
   "word": "RIVERSIDE",
   "pronunciations": "ˈrɪvɝˌsaɪd"
 },
 {
   "id": 8105,
   "word": "ROAST",
   "pronunciations": "ˈroʊst"
 },
 {
   "id": 8106,
   "word": "ROBBED",
   "pronunciations": "ˈrɑːbd"
 },
 {
   "id": 8107,
   "word": "ROBBERY",
   "pronunciations": "ˈrɑːbɝi"
 },
 {
   "id": 8108,
   "word": "ROCKY",
   "pronunciations": "ˈrɑːki"
 },
 {
   "id": 8109,
   "word": "ROMANS",
   "pronunciations": "ˈroʊmənz"
 },
 {
   "id": 8110,
   "word": "ROTARY",
   "pronunciations": "ˈroʊtɝi"
 },
 {
   "id": 8111,
   "word": "RUSHING",
   "pronunciations": "ˈrʌʃɪŋ"
 },
 {
   "id": 8112,
   "word": "RUSK",
   "pronunciations": "ˈrʌsk"
 },
 {
   "id": 8113,
   "word": "RUST",
   "pronunciations": "ˈrʌst"
 },
 {
   "id": 8114,
   "word": "RUSTLING",
   "pronunciations": "ˈrʌslɪŋ"
 },
 {
   "id": 8115,
   "word": "SAILED",
   "pronunciations": "ˈseɪld"
 },
 {
   "id": 8116,
   "word": "SANDS",
   "pronunciations": "ˈsændz"
 },
 {
   "id": 8117,
   "word": "SANDWICH",
   "pronunciations": "ˈsændwɪtʃ, ˈsænwɪtʃ, ˈsæmwɪtʃ"
 },
 {
   "id": 8118,
   "word": "SCANNED",
   "pronunciations": "ˈskænd"
 },
 {
   "id": 8119,
   "word": "SCAR",
   "pronunciations": "ˈskɑːr"
 },
 {
   "id": 8120,
   "word": "SCARS",
   "pronunciations": "ˈskɑːrz"
 },
 {
   "id": 8121,
   "word": "SCHEDULES",
   "pronunciations": "ˈskɛdʒʊlz, ˈskɛdʒuːlz"
 },
 {
   "id": 8122,
   "word": "SCOTTISH",
   "pronunciations": "ˈskɑːtɪʃ"
 },
 {
   "id": 8123,
   "word": "SCREENS",
   "pronunciations": "ˈskriːnz"
 },
 {
   "id": 8124,
   "word": "SCREWS",
   "pronunciations": "ˈskruːz"
 },
 {
   "id": 8125,
   "word": "SE",
   "pronunciations": "ˈseɪ"
 },
 {
   "id": 8126,
   "word": "SEAS",
   "pronunciations": "ˈsiːz"
 },
 {
   "id": 8127,
   "word": "SECEDE",
   "pronunciations": "sɪˈsiːd"
 },
 {
   "id": 8128,
   "word": "SECTORS",
   "pronunciations": "ˈsɛktɝz"
 },
 {
   "id": 8129,
   "word": "SEEKS",
   "pronunciations": "ˈsiːks"
 },
 {
   "id": 8130,
   "word": "SEGMENT",
   "pronunciations": "ˈsɛgmənt, ˌsɛgˈmɛnt"
 },
 {
   "id": 8131,
   "word": "SEGMENTS",
   "pronunciations": "ˈsɛgmənts, ˌsɛgˈmɛnts"
 },
 {
   "id": 8132,
   "word": "SEGREGATION",
   "pronunciations": "ˌsɛgrəˈgeɪʃən"
 },
 {
   "id": 8133,
   "word": "SEMESTER",
   "pronunciations": "səˈmɛstɝ"
 },
 {
   "id": 8134,
   "word": "SEMINARY",
   "pronunciations": "ˈsɛməˌnɛri"
 },
 {
   "id": 8135,
   "word": "SENATORS",
   "pronunciations": "ˈsɛnətɝz"
 },
 {
   "id": 8136,
   "word": "SENSATIONS",
   "pronunciations": "sɛnˈseɪʃənz"
 },
 {
   "id": 8137,
   "word": "SERENE",
   "pronunciations": "sɝˈiːn"
 },
 {
   "id": 8138,
   "word": "SEWER",
   "pronunciations": "ˈsuːɝ"
 },
 {
   "id": 8139,
   "word": "SEWING",
   "pronunciations": "ˈsoʊɪŋ"
 },
 {
   "id": 8140,
   "word": "SHE'LL",
   "pronunciations": "ˈʃiːl"
 },
 {
   "id": 8141,
   "word": "SHEA",
   "pronunciations": "ˈʃeɪ"
 },
 {
   "id": 8142,
   "word": "SIMMONS",
   "pronunciations": "ˈsɪmənz"
 },
 {
   "id": 8143,
   "word": "SIMPLEST",
   "pronunciations": "ˈsɪmpləst"
 },
 {
   "id": 8144,
   "word": "SINGER",
   "pronunciations": "ˈsɪŋɝ"
 },
 {
   "id": 8145,
   "word": "SINGLED",
   "pronunciations": "ˈsɪŋgəld"
 },
 {
   "id": 8146,
   "word": "SINGS",
   "pronunciations": "ˈsɪŋz"
 },
 {
   "id": 8147,
   "word": "SLASHED",
   "pronunciations": "ˈslæʃt"
 },
 {
   "id": 8148,
   "word": "SLATE",
   "pronunciations": "ˈsleɪt"
 },
 {
   "id": 8149,
   "word": "SLAUGHTER",
   "pronunciations": "ˈslɔtɝ"
 },
 {
   "id": 8150,
   "word": "SLUG",
   "pronunciations": "ˈslʌg"
 },
 {
   "id": 8151,
   "word": "SOLIDLY",
   "pronunciations": "ˈsɑːlədli"
 },
 {
   "id": 8152,
   "word": "SORE",
   "pronunciations": "ˈsɔr"
 },
 {
   "id": 8153,
   "word": "SPADE",
   "pronunciations": "ˈspeɪd"
 },
 {
   "id": 8154,
   "word": "SPATIAL",
   "pronunciations": "ˈspeɪʃəl"
 },
 {
   "id": 8155,
   "word": "SPECIALIZATION",
   "pronunciations": "ˌspɛʃələˈzeɪʃən"
 },
 {
   "id": 8156,
   "word": "SPECIFICITY",
   "pronunciations": "ˌspɛsəˈfɪsəti"
 },
 {
   "id": 8157,
   "word": "SPONSORS",
   "pronunciations": "ˈspɑːnsɝz"
 },
 {
   "id": 8158,
   "word": "SPREADS",
   "pronunciations": "ˈsprɛdz"
 },
 {
   "id": 8159,
   "word": "STACY",
   "pronunciations": "ˈsteɪsi"
 },
 {
   "id": 8160,
   "word": "STAINS",
   "pronunciations": "ˈsteɪnz"
 },
 {
   "id": 8161,
   "word": "STEAK",
   "pronunciations": "ˈsteɪk"
 },
 {
   "id": 8162,
   "word": "STEICHEN",
   "pronunciations": "ˈstaɪkən"
 },
 {
   "id": 8163,
   "word": "STOLE",
   "pronunciations": "ˈstoʊl"
 },
 {
   "id": 8164,
   "word": "STREAK",
   "pronunciations": "ˈstriːk"
 },
 {
   "id": 8165,
   "word": "STRODE",
   "pronunciations": "ˈstroʊd"
 },
 {
   "id": 8166,
   "word": "SUBSISTENCE",
   "pronunciations": "səbˈsɪstəns"
 },
 {
   "id": 8167,
   "word": "SUBSYSTEMS",
   "pronunciations": "ˈsʌbˌsɪstəmz"
 },
 {
   "id": 8168,
   "word": "SUMMONED",
   "pronunciations": "ˈsʌmənd"
 },
 {
   "id": 8169,
   "word": "SUNRISE",
   "pronunciations": "ˈsʌnˌraɪz"
 },
 {
   "id": 8170,
   "word": "SWALLOW",
   "pronunciations": "ˈswɑːloʊ, ˈswɔloʊ"
 },
 {
   "id": 8171,
   "word": "SWEAR",
   "pronunciations": "ˈswɛr"
 },
 {
   "id": 8172,
   "word": "SWEDEN",
   "pronunciations": "ˈswiːdən"
 },
 {
   "id": 8173,
   "word": "SYSTEMATICALLY",
   "pronunciations": "ˌsɪstəˈmætɪkli"
 },
 {
   "id": 8174,
   "word": "TACKLE",
   "pronunciations": "ˈtækəl"
 },
 {
   "id": 8175,
   "word": "TASTED",
   "pronunciations": "ˈteɪstəd, ˈteɪstɪd"
 },
 {
   "id": 8176,
   "word": "TASTES",
   "pronunciations": "ˈteɪsts"
 },
 {
   "id": 8177,
   "word": "TENTS",
   "pronunciations": "ˈtɛnts"
 },
 {
   "id": 8178,
   "word": "THEFT",
   "pronunciations": "ˈθɛft"
 },
 {
   "id": 8179,
   "word": "THERMOMETER",
   "pronunciations": "θɝˈmɑːmətɝ"
 },
 {
   "id": 8180,
   "word": "THESIS",
   "pronunciations": "ˈθiːˌsɪs"
 },
 {
   "id": 8181,
   "word": "THREE-DIMENSIONAL",
   "pronunciations": "ˌθriːzdɪˈmɛnʃənəl"
 },
 {
   "id": 8182,
   "word": "THUMB",
   "pronunciations": "ˈθʌm"
 },
 {
   "id": 8183,
   "word": "TODMAN",
   "pronunciations": "ˈtɑːdmən"
 },
 {
   "id": 8184,
   "word": "TOKEN",
   "pronunciations": "ˈtoʊkən"
 },
 {
   "id": 8185,
   "word": "TOPICS",
   "pronunciations": "ˈtɑːpɪks"
 },
 {
   "id": 8186,
   "word": "TOPS",
   "pronunciations": "ˈtɑːps"
 },
 {
   "id": 8187,
   "word": "TOUGHER",
   "pronunciations": "ˈtʌfɝ"
 },
 {
   "id": 8188,
   "word": "TOURS",
   "pronunciations": "ˈtʊrz, ˈtɔrz"
 },
 {
   "id": 8189,
   "word": "TRADITIONALLY",
   "pronunciations": "trəˈdɪʃənəli, trəˈdɪʃnəli"
 },
 {
   "id": 8190,
   "word": "TRANSDUCER",
   "pronunciations": "trænsˈduːsɝ"
 },
 {
   "id": 8191,
   "word": "TREMBLE",
   "pronunciations": "ˈtrɛmbəl"
 },
 {
   "id": 8192,
   "word": "TREMENDOUSLY",
   "pronunciations": "trəˈmɛndəsli, trɪˈmɛndəsli"
 },
 {
   "id": 8193,
   "word": "TRIG",
   "pronunciations": "ˈtrɪg"
 },
 {
   "id": 8194,
   "word": "TUNE",
   "pronunciations": "ˈtuːn"
 },
 {
   "id": 8195,
   "word": "TUNNEL",
   "pronunciations": "ˈtʌnəl"
 },
 {
   "id": 8196,
   "word": "TURNPIKES",
   "pronunciations": "ˈtɝːnˌpaɪks"
 },
 {
   "id": 8197,
   "word": "TWENTIES",
   "pronunciations": "ˈtwɛntiːz"
 },
 {
   "id": 8198,
   "word": "TYPEWRITER",
   "pronunciations": "ˈtaɪˌpraɪtɝ"
 },
 {
   "id": 8199,
   "word": "UNCONSCIOUSLY",
   "pronunciations": "ˌənˈkɑːnʃəsli"
 },
 {
   "id": 8200,
   "word": "UNDERDEVELOPED",
   "pronunciations": "ˌəndɝdɪˈvɛləpt"
 },
 {
   "id": 8201,
   "word": "UNDERGONE",
   "pronunciations": "ˌəndɝˈgɔn"
 },
 {
   "id": 8202,
   "word": "UNDESIRABLE",
   "pronunciations": "ˌəndɪˈzaɪrəbəl"
 },
 {
   "id": 8203,
   "word": "UNFAMILIAR",
   "pronunciations": "ˌənfəˈmɪljɝ"
 },
 {
   "id": 8204,
   "word": "UNIQUELY",
   "pronunciations": "juːˈniːkli"
 },
 {
   "id": 8205,
   "word": "UNITE",
   "pronunciations": "ˈjuːˌnaɪt"
 },
 {
   "id": 8206,
   "word": "UNIVERSITY'S",
   "pronunciations": "ˌjuːnəˈvɝːsətiːz"
 },
 {
   "id": 8207,
   "word": "URGING",
   "pronunciations": "ˈɝːdʒɪŋ"
 },
 {
   "id": 8208,
   "word": "UTILIZE",
   "pronunciations": "ˈjuːtəˌlaɪz"
 },
 {
   "id": 8209,
   "word": "UTILIZED",
   "pronunciations": "ˈjuːtəˌlaɪzd"
 },
 {
   "id": 8210,
   "word": "VAGINA",
   "pronunciations": "vəˈdʒaɪnə"
 },
 {
   "id": 8211,
   "word": "VAIN",
   "pronunciations": "ˈveɪn"
 },
 {
   "id": 8212,
   "word": "VASTLY",
   "pronunciations": "ˈvæstli"
 },
 {
   "id": 8213,
   "word": "VEGETABLE",
   "pronunciations": "ˈvɛdʒtəbəl"
 },
 {
   "id": 8214,
   "word": "VENGEANCE",
   "pronunciations": "ˈvɛndʒəns"
 },
 {
   "id": 8215,
   "word": "VENT",
   "pronunciations": "ˈvɛnt"
 },
 {
   "id": 8216,
   "word": "VETO",
   "pronunciations": "ˈviːˌtoʊ"
 },
 {
   "id": 8217,
   "word": "VIEWING",
   "pronunciations": "vˈjuːɪŋ"
 },
 {
   "id": 8218,
   "word": "VISCOSITY",
   "pronunciations": "vɪˈskɑːsəti"
 },
 {
   "id": 8219,
   "word": "VITAMINS",
   "pronunciations": "ˈvaɪtəmənz"
 },
 {
   "id": 8220,
   "word": "VOID",
   "pronunciations": "ˈvɔɪd"
 },
 {
   "id": 8221,
   "word": "VUE",
   "pronunciations": "vˈjuː"
 },
 {
   "id": 8222,
   "word": "WAITER",
   "pronunciations": "ˈweɪtɝ"
 },
 {
   "id": 8223,
   "word": "WALES",
   "pronunciations": "ˈweɪlz"
 },
 {
   "id": 8224,
   "word": "WARMED",
   "pronunciations": "ˈwɔrmd"
 },
 {
   "id": 8225,
   "word": "WARSAW",
   "pronunciations": "ˈwɔrˌsɔ"
 },
 {
   "id": 8226,
   "word": "WATERFRONT",
   "pronunciations": "ˈwɔtɝˌfrənt"
 },
 {
   "id": 8227,
   "word": "WEIRD",
   "pronunciations": "ˈwɪrd"
 },
 {
   "id": 8228,
   "word": "WHEELED",
   "pronunciations": "ˈwiːld, ˈhwiːld"
 },
 {
   "id": 8229,
   "word": "WHIRLING",
   "pronunciations": "ˈwɝːlɪŋ, ˈhwɝːlɪŋ"
 },
 {
   "id": 8230,
   "word": "WIPE",
   "pronunciations": "ˈwaɪp"
 },
 {
   "id": 8231,
   "word": "WITTY",
   "pronunciations": "ˈwɪti"
 },
 {
   "id": 8232,
   "word": "WOOL",
   "pronunciations": "ˈwʊl"
 },
 {
   "id": 8233,
   "word": "WRIST",
   "pronunciations": "ˈrɪst"
 },
 {
   "id": 8234,
   "word": "ZINC",
   "pronunciations": "ˈzɪŋk"
 },
 {
   "id": 8235,
   "word": "ABUNDANT",
   "pronunciations": "əˈbʌndənt"
 },
 {
   "id": 8236,
   "word": "ACCENT",
   "pronunciations": "əkˈsɛnt, ˈækˌsɛnt"
 },
 {
   "id": 8237,
   "word": "ACCIDENTAL",
   "pronunciations": "ˌæksəˈdɛntəl, ˌæksəˈdɛnəl"
 },
 {
   "id": 8238,
   "word": "ACCORD",
   "pronunciations": "əˈkɔrd"
 },
 {
   "id": 8239,
   "word": "ACQUAINTANCE",
   "pronunciations": "əˈkweɪntəns"
 },
 {
   "id": 8240,
   "word": "ADDITIONS",
   "pronunciations": "əˈdɪʃənz"
 },
 {
   "id": 8241,
   "word": "ADDRESSING",
   "pronunciations": "æˈdrɛsɪŋ"
 },
 {
   "id": 8242,
   "word": "ADHERENCE",
   "pronunciations": "ədˈhɪrəns"
 },
 {
   "id": 8243,
   "word": "ADMISSIBLE",
   "pronunciations": "ədˈmɪsəbəl"
 },
 {
   "id": 8244,
   "word": "ADVERTISED",
   "pronunciations": "ˈædvɝˌtaɪzd, ˌædvɝˈtaɪzd"
 },
 {
   "id": 8245,
   "word": "ADVISE",
   "pronunciations": "ædˈvaɪz, ədˈvaɪz"
 },
 {
   "id": 8246,
   "word": "AGONY",
   "pronunciations": "ˈægəni"
 },
 {
   "id": 8247,
   "word": "AIDE",
   "pronunciations": "ˈeɪd"
 },
 {
   "id": 8248,
   "word": "ALLY",
   "pronunciations": "ˈælaɪ, əˈlaɪ"
 },
 {
   "id": 8249,
   "word": "ALUMNI",
   "pronunciations": "əˈlʌmˌnaɪ"
 },
 {
   "id": 8250,
   "word": "ALVEOLAR",
   "pronunciations": "ælˈviːəlɝ"
 },
 {
   "id": 8251,
   "word": "AMUSED",
   "pronunciations": "əˈmjuːzd"
 },
 {
   "id": 8252,
   "word": "ANALYTICAL",
   "pronunciations": "ˌænəˈlɪtɪkəl"
 },
 {
   "id": 8253,
   "word": "ANATOMICAL",
   "pronunciations": "ˌænəˈtɑːmɪkəl"
 },
 {
   "id": 8254,
   "word": "ANATOMY",
   "pronunciations": "əˈnætəmi"
 },
 {
   "id": 8255,
   "word": "ANECDOTE",
   "pronunciations": "ˈænɪkˌdoʊt"
 },
 {
   "id": 8256,
   "word": "ANNOYANCE",
   "pronunciations": "əˈnɔɪəns"
 },
 {
   "id": 8257,
   "word": "ANTAGONISM",
   "pronunciations": "ænˈtægəˌnɪzəm"
 },
 {
   "id": 8258,
   "word": "ANTIBODIES",
   "pronunciations": "ˈæntɪˌbɑːdiːz, ˈæntiːˌbɑːdiːz, ˈænɪˌbɑːdiːz"
 },
 {
   "id": 8259,
   "word": "ANXIOUSLY",
   "pronunciations": "ˈæŋkʃəsli"
 },
 {
   "id": 8260,
   "word": "APPALLING",
   "pronunciations": "əˈpɔlɪŋ"
 },
 {
   "id": 8261,
   "word": "APPLE",
   "pronunciations": "ˈæpəl"
 },
 {
   "id": 8262,
   "word": "APPORTIONMENT",
   "pronunciations": "əˈpɔrʃənmənt"
 },
 {
   "id": 8263,
   "word": "APPROPRIATIONS",
   "pronunciations": "əˌproʊpriːˈeɪʃənz"
 },
 {
   "id": 8264,
   "word": "ARIZONA",
   "pronunciations": "ˌɛrɪˈzoʊnə"
 },
 {
   "id": 8265,
   "word": "ASSEMBLE",
   "pronunciations": "əˈsɛmbəl"
 },
 {
   "id": 8266,
   "word": "ASSESSED",
   "pronunciations": "əˈsɛst"
 },
 {
   "id": 8267,
   "word": "ASSIGNING",
   "pronunciations": "əˈsaɪnɪŋ"
 },
 {
   "id": 8268,
   "word": "ATHLETE",
   "pronunciations": "ˈæθˌliːt"
 },
 {
   "id": 8269,
   "word": "ATHLETICS",
   "pronunciations": "æθˈlɛtɪks"
 },
 {
   "id": 8270,
   "word": "ATMOSPHERIC",
   "pronunciations": "ˌætməsˈfɛrɪk"
 },
 {
   "id": 8271,
   "word": "ATTACKING",
   "pronunciations": "əˈtækɪŋ"
 },
 {
   "id": 8272,
   "word": "ATTAINMENT",
   "pronunciations": "əˈteɪnmənt"
 },
 {
   "id": 8273,
   "word": "ATTORNEYS",
   "pronunciations": "əˈtɝːniːz"
 },
 {
   "id": 8274,
   "word": "ATTRACTIONS",
   "pronunciations": "əˈtrækʃənz"
 },
 {
   "id": 8275,
   "word": "AUGMENTED",
   "pronunciations": "ɑːgˈmɛntəd"
 },
 {
   "id": 8276,
   "word": "AUSTRALIAN",
   "pronunciations": "ɔˈstreɪljən"
 },
 {
   "id": 8277,
   "word": "AVERAGING",
   "pronunciations": "ˈævrɪdʒɪŋ"
 },
 {
   "id": 8278,
   "word": "AWAIT",
   "pronunciations": "əˈweɪt"
 },
 {
   "id": 8279,
   "word": "AWOKE",
   "pronunciations": "əˈwoʊk"
 },
 {
   "id": 8280,
   "word": "BADNESS",
   "pronunciations": "ˈbædnəs"
 },
 {
   "id": 8281,
   "word": "BARNES",
   "pronunciations": "ˈbɑːrnz"
 },
 {
   "id": 8282,
   "word": "BARRIER",
   "pronunciations": "ˈbæriːɝ, ˈbɛriːɝ"
 },
 {
   "id": 8283,
   "word": "BASKETBALL",
   "pronunciations": "ˈbæskətˌbɔl"
 },
 {
   "id": 8284,
   "word": "BATTERED",
   "pronunciations": "ˈbætɝd"
 },
 {
   "id": 8285,
   "word": "BEANS",
   "pronunciations": "ˈbiːnz"
 },
 {
   "id": 8286,
   "word": "BEGINNINGS",
   "pronunciations": "bɪˈgɪnɪŋz"
 },
 {
   "id": 8287,
   "word": "BERMUDA",
   "pronunciations": "bɝˈmjuːdə"
 },
 {
   "id": 8288,
   "word": "BERNARD",
   "pronunciations": "bɝˈnɑːrd, ˈbɝːnɝd"
 },
 {
   "id": 8289,
   "word": "BERRY",
   "pronunciations": "ˈbɛri"
 },
 {
   "id": 8290,
   "word": "BIN",
   "pronunciations": "ˈbɪn"
 },
 {
   "id": 8291,
   "word": "BLATZ",
   "pronunciations": "ˈblæts"
 },
 {
   "id": 8292,
   "word": "BLEND",
   "pronunciations": "ˈblɛnd"
 },
 {
   "id": 8293,
   "word": "BLESS",
   "pronunciations": "ˈblɛs"
 },
 {
   "id": 8294,
   "word": "BLOWN",
   "pronunciations": "ˈbloʊn"
 },
 {
   "id": 8295,
   "word": "BLUNT",
   "pronunciations": "ˈblʌnt"
 },
 {
   "id": 8296,
   "word": "BOILING",
   "pronunciations": "ˈbɔɪlɪŋ"
 },
 {
   "id": 8297,
   "word": "BORROW",
   "pronunciations": "ˈbɑːˌroʊ"
 },
 {
   "id": 8298,
   "word": "BOUNCING",
   "pronunciations": "ˈbaʊnsɪŋ"
 },
 {
   "id": 8299,
   "word": "BOUNDED",
   "pronunciations": "ˈbaʊndəd, ˈbaʊndɪd"
 },
 {
   "id": 8300,
   "word": "BRAQUE",
   "pronunciations": "ˈbræk"
 },
 {
   "id": 8301,
   "word": "BREASTS",
   "pronunciations": "ˈbrɛsts"
 },
 {
   "id": 8302,
   "word": "BREATHED",
   "pronunciations": "ˈbriːðd"
 },
 {
   "id": 8303,
   "word": "BRILLIANTLY",
   "pronunciations": "ˈbrɪljəntli"
 },
 {
   "id": 8304,
   "word": "BROADCASTING",
   "pronunciations": "ˈbrɔdˌkæstɪŋ"
 },
 {
   "id": 8305,
   "word": "BROADENING",
   "pronunciations": "ˈbrɔdənɪŋ, ˈbrɔdnɪŋ"
 },
 {
   "id": 8306,
   "word": "BRONX",
   "pronunciations": "ˈbrɑːŋks"
 },
 {
   "id": 8307,
   "word": "BROOD",
   "pronunciations": "ˈbruːd"
 },
 {
   "id": 8308,
   "word": "BUD",
   "pronunciations": "ˈbʌd"
 },
 {
   "id": 8309,
   "word": "BUDDHISM",
   "pronunciations": "ˈbuːdɪzəm"
 },
 {
   "id": 8310,
   "word": "BULKY",
   "pronunciations": "ˈbʌlki"
 },
 {
   "id": 8311,
   "word": "BUSINESSMAN",
   "pronunciations": "ˈbɪznəˌsmæn, ˈbɪznɪˌsmæn"
 },
 {
   "id": 8312,
   "word": "BYRD",
   "pronunciations": "ˈbɝːd"
 },
 {
   "id": 8313,
   "word": "CADILLAC",
   "pronunciations": "ˈkædəˌlæk"
 },
 {
   "id": 8314,
   "word": "CAGE",
   "pronunciations": "ˈkeɪdʒ"
 },
 {
   "id": 8315,
   "word": "CAMERAS",
   "pronunciations": "ˈkæmɝəz, ˈkæmrəz"
 },
 {
   "id": 8316,
   "word": "CAMPERS",
   "pronunciations": "ˈkæmpɝz"
 },
 {
   "id": 8317,
   "word": "CAREFREE",
   "pronunciations": "ˈkɛrˌfriː"
 },
 {
   "id": 8318,
   "word": "CARES",
   "pronunciations": "ˈkɛrz"
 },
 {
   "id": 8319,
   "word": "CARNIVAL",
   "pronunciations": "ˈkɑːrnəvəl"
 },
 {
   "id": 8320,
   "word": "CARRIER",
   "pronunciations": "ˈkæriːɝ, ˈkɛriːɝ"
 },
 {
   "id": 8321,
   "word": "CATCHING",
   "pronunciations": "ˈkætʃɪŋ"
 },
 {
   "id": 8322,
   "word": "CAUTIOUSLY",
   "pronunciations": "ˈkɔʃəsli"
 },
 {
   "id": 8323,
   "word": "CAVE",
   "pronunciations": "ˈkeɪv"
 },
 {
   "id": 8324,
   "word": "CENTRALIZED",
   "pronunciations": "ˈsɛntrəˌlaɪzd"
 },
 {
   "id": 8325,
   "word": "CERAMIC",
   "pronunciations": "sɝˈæmɪk"
 },
 {
   "id": 8326,
   "word": "CHAIRMEN",
   "pronunciations": "ˈtʃɛrmɪn"
 },
 {
   "id": 8327,
   "word": "CHALLENGED",
   "pronunciations": "ˈtʃæləndʒd"
 },
 {
   "id": 8328,
   "word": "CHARTS",
   "pronunciations": "ˈtʃɑːrts"
 },
 {
   "id": 8329,
   "word": "CHEESE",
   "pronunciations": "ˈtʃiːz"
 },
 {
   "id": 8330,
   "word": "CHEF",
   "pronunciations": "ˈʃɛf"
 },
 {
   "id": 8331,
   "word": "CHIEN",
   "pronunciations": "ˈtʃɛn"
 },
 {
   "id": 8332,
   "word": "CHOCOLATE",
   "pronunciations": "ˈtʃɔklət"
 },
 {
   "id": 8333,
   "word": "CHOKE",
   "pronunciations": "ˈtʃoʊk"
 },
 {
   "id": 8334,
   "word": "CHRISTIANA",
   "pronunciations": "ˌkrɪstiːˈænə"
 },
 {
   "id": 8335,
   "word": "CHROMATOGRAPHY",
   "pronunciations": "kroʊməˈtɑːgrəfi"
 },
 {
   "id": 8336,
   "word": "CINCINNATI",
   "pronunciations": "ˌsɪnsəˈnæti"
 },
 {
   "id": 8337,
   "word": "CIRCLED",
   "pronunciations": "ˈsɝːkəld"
 },
 {
   "id": 8338,
   "word": "CLASSICS",
   "pronunciations": "ˈklæsɪks"
 },
 {
   "id": 8339,
   "word": "CLAUSE",
   "pronunciations": "ˈklɔz"
 },
 {
   "id": 8340,
   "word": "CLEANER",
   "pronunciations": "ˈkliːnɝ"
 },
 {
   "id": 8341,
   "word": "CLERICAL",
   "pronunciations": "ˈklɛrəkəl, ˈklɛrɪkəl"
 },
 {
   "id": 8342,
   "word": "CLOSEST",
   "pronunciations": "ˈkloʊsəst"
 },
 {
   "id": 8343,
   "word": "CLUB'S",
   "pronunciations": "ˈklʌbz"
 },
 {
   "id": 8344,
   "word": "COINS",
   "pronunciations": "ˈkɔɪnz"
 },
 {
   "id": 8345,
   "word": "COLLABORATED",
   "pronunciations": "kəˈlæbɝˌeɪtəd, kəˈlæbɝˌeɪtɪd"
 },
 {
   "id": 8346,
   "word": "COLLEAGUE",
   "pronunciations": "ˈkɑːliːg"
 },
 {
   "id": 8347,
   "word": "COLOGNE",
   "pronunciations": "kəˈloʊn"
 },
 {
   "id": 8348,
   "word": "COMIC",
   "pronunciations": "ˈkɑːmɪk"
 },
 {
   "id": 8349,
   "word": "COMPARING",
   "pronunciations": "kəmˈpɛrɪŋ"
 },
 {
   "id": 8350,
   "word": "COMPRESSED",
   "pronunciations": "kəmˈprɛst"
 },
 {
   "id": 8351,
   "word": "CONCENTRATIONS",
   "pronunciations": "ˌkɑːnsənˈtreɪʃənz"
 },
 {
   "id": 8352,
   "word": "CONCEPTIONS",
   "pronunciations": "kənˈsɛpʃənz"
 },
 {
   "id": 8353,
   "word": "CONDENSED",
   "pronunciations": "kənˈdɛnst"
 },
 {
   "id": 8354,
   "word": "CONFEDERACY",
   "pronunciations": "kənˈfɛdɝəsi, kənˈfɛdrəsi"
 },
 {
   "id": 8355,
   "word": "CONFLICTS",
   "pronunciations": "kənˈflɪkts, ˈkɑːnflɪkts, kənˈflɪks, ˈkɑːnflɪks"
 },
 {
   "id": 8356,
   "word": "CONQUEST",
   "pronunciations": "ˈkɑːŋkwɛst"
 },
 {
   "id": 8357,
   "word": "CONSOLIDATION",
   "pronunciations": "kənˌsɑːləˈdeɪʃən"
 },
 {
   "id": 8358,
   "word": "CONSONANTAL",
   "pronunciations": "ˌkɑːnsəˈnɑːntəl, ˌkɑːnsəˈnɑːnəl"
 },
 {
   "id": 8359,
   "word": "CONSTANTS",
   "pronunciations": "ˈkɑːnstənts"
 },
 {
   "id": 8360,
   "word": "CONSUMERS",
   "pronunciations": "kənˈsuːmɝz"
 },
 {
   "id": 8361,
   "word": "CONTENTION",
   "pronunciations": "kənˈtɛnʃən"
 },
 {
   "id": 8362,
   "word": "CONTROLLER",
   "pronunciations": "kənˈtroʊlɝ"
 },
 {
   "id": 8363,
   "word": "CONVENTIONS",
   "pronunciations": "kənˈvɛnʃənz"
 },
 {
   "id": 8364,
   "word": "CONVERSELY",
   "pronunciations": "ˈkɑːnvɝsli"
 },
 {
   "id": 8365,
   "word": "CONVEYED",
   "pronunciations": "kənˈveɪd"
 },
 {
   "id": 8366,
   "word": "COOMBS",
   "pronunciations": "ˈkuːmz"
 },
 {
   "id": 8367,
   "word": "CORK",
   "pronunciations": "ˈkɔrk"
 },
 {
   "id": 8368,
   "word": "CORRECTED",
   "pronunciations": "kɝˈɛktəd, kɝˈɛktɪd"
 },
 {
   "id": 8369,
   "word": "COUNTERPART",
   "pronunciations": "ˈkaʊntɝˌpɑːrt"
 },
 {
   "id": 8370,
   "word": "COUPLING",
   "pronunciations": "ˈkʌplɪŋ"
 },
 {
   "id": 8371,
   "word": "COUSINS",
   "pronunciations": "ˈkʌzənz"
 },
 {
   "id": 8372,
   "word": "CREATIVITY",
   "pronunciations": "ˌkriːeɪˈtɪvəti"
 },
 {
   "id": 8373,
   "word": "CURRENTS",
   "pronunciations": "ˈkɝːənts"
 },
 {
   "id": 8374,
   "word": "CYNICAL",
   "pronunciations": "ˈsɪnɪkəl"
 },
 {
   "id": 8375,
   "word": "DAZZLING",
   "pronunciations": "ˈdæzəlɪŋ, ˈdæzlɪŋ"
 },
 {
   "id": 8376,
   "word": "DECLINING",
   "pronunciations": "dɪˈklaɪnɪŋ"
 },
 {
   "id": 8377,
   "word": "DELIVERING",
   "pronunciations": "dɪˈlɪvɝɪŋ"
 },
 {
   "id": 8378,
   "word": "DEMON",
   "pronunciations": "ˈdiːmən"
 },
 {
   "id": 8379,
   "word": "DENOMINATIONAL",
   "pronunciations": "dɪˌnɔməˈneɪʃənəl"
 },
 {
   "id": 8380,
   "word": "DENOTED",
   "pronunciations": "dɪˈnoʊtəd"
 },
 {
   "id": 8381,
   "word": "DENSE",
   "pronunciations": "ˈdɛns"
 },
 {
   "id": 8382,
   "word": "DEPARTED",
   "pronunciations": "dɪˈpɑːrtɪd"
 },
 {
   "id": 8383,
   "word": "DEPENDED",
   "pronunciations": "dɪˈpɛndəd, dɪˈpɛndɪd"
 },
 {
   "id": 8384,
   "word": "DEPOSIT",
   "pronunciations": "dəˈpɑːzɪt, dɪˈpɑːzət"
 },
 {
   "id": 8385,
   "word": "DERIVES",
   "pronunciations": "dɝˈaɪvz, dɪˈraɪvz"
 },
 {
   "id": 8386,
   "word": "DES",
   "pronunciations": "ˈdɛs, ˌdɪ"
 },
 {
   "id": 8387,
   "word": "DESIGNING",
   "pronunciations": "dɪˈzaɪnɪŋ"
 },
 {
   "id": 8388,
   "word": "DESTINATION",
   "pronunciations": "ˌdɛstəˈneɪʃən, ˌdɛstɪˈneɪʃən"
 },
 {
   "id": 8389,
   "word": "DESTINED",
   "pronunciations": "ˈdɛstɪnd"
 },
 {
   "id": 8390,
   "word": "DEVELOPMENTAL",
   "pronunciations": "dɪˌvɛləpˈmɛntəl, dɪˌvɛləpˈmɛnəl"
 },
 {
   "id": 8391,
   "word": "DICTATES",
   "pronunciations": "dɪkˈteɪts, ˈdɪkˌteɪts"
 },
 {
   "id": 8392,
   "word": "DINNERS",
   "pronunciations": "ˈdɪnɝz"
 },
 {
   "id": 8393,
   "word": "DISADVANTAGES",
   "pronunciations": "ˌdɪsədˈvæntɪdʒɪz, ˌdɪsədˈvænɪdʒz"
 },
 {
   "id": 8394,
   "word": "DISCHARGED",
   "pronunciations": "dɪsˈtʃɑːrdʒd, ˈdɪsˌtʃɑːrdʒd"
 },
 {
   "id": 8395,
   "word": "DISCHARGES",
   "pronunciations": "dɪsˈtʃɑːrdʒəz, ˈdɪsˌtʃɑːrdʒəz"
 },
 {
   "id": 8396,
   "word": "DISCLOSE",
   "pronunciations": "dɪsˈkloʊz"
 },
 {
   "id": 8397,
   "word": "DISCOURAGE",
   "pronunciations": "dɪˈskɝːɪdʒ"
 },
 {
   "id": 8398,
   "word": "DISSATISFACTION",
   "pronunciations": "ˌdɪsætɪsˈfækʃən"
 },
 {
   "id": 8399,
   "word": "DISTAL",
   "pronunciations": "ˈdɪstəl"
 },
 {
   "id": 8400,
   "word": "DOCHERTY",
   "pronunciations": "ˈdɑːtʃɝti"
 },
 {
   "id": 8401,
   "word": "DOMAIN",
   "pronunciations": "doʊˈmeɪn"
 },
 {
   "id": 8402,
   "word": "DOUBTED",
   "pronunciations": "ˈdaʊtɪd"
 },
 {
   "id": 8403,
   "word": "DOUGLASS",
   "pronunciations": "ˈdʌgləs"
 },
 {
   "id": 8404,
   "word": "DRAPED",
   "pronunciations": "ˈdreɪpt"
 },
 {
   "id": 8405,
   "word": "DREAD",
   "pronunciations": "ˈdrɛd"
 },
 {
   "id": 8406,
   "word": "DRIFTED",
   "pronunciations": "ˈdrɪftəd, ˈdrɪftɪd"
 },
 {
   "id": 8407,
   "word": "DUAL",
   "pronunciations": "ˈduːəl, ˈduːl"
 },
 {
   "id": 8408,
   "word": "DUCK",
   "pronunciations": "ˈdʌk"
 },
 {
   "id": 8409,
   "word": "DULLES",
   "pronunciations": "ˈdʌləs"
 },
 {
   "id": 8410,
   "word": "DUMPED",
   "pronunciations": "ˈdʌmpt"
 },
 {
   "id": 8411,
   "word": "DUSK",
   "pronunciations": "ˈdʌsk"
 },
 {
   "id": 8412,
   "word": "EARNING",
   "pronunciations": "ˈɝːnɪŋ"
 },
 {
   "id": 8413,
   "word": "EARTHQUAKE",
   "pronunciations": "ˈɝːθˌkweɪk"
 },
 {
   "id": 8414,
   "word": "EARTHQUAKES",
   "pronunciations": "ˈɝːθˌkweɪks"
 },
 {
   "id": 8415,
   "word": "ECCLESIASTICAL",
   "pronunciations": "ˌɛˌkliːziːˈæstɪkəl"
 },
 {
   "id": 8416,
   "word": "EDEN",
   "pronunciations": "ˈiːdən"
 },
 {
   "id": 8417,
   "word": "EFFICACY",
   "pronunciations": "ˈɛfɪˌkæsi"
 },
 {
   "id": 8418,
   "word": "ELDERS",
   "pronunciations": "ˈɛldɝz"
 },
 {
   "id": 8419,
   "word": "ELECTROSTATIC",
   "pronunciations": "ˌɪˌlɛktroʊˈstætɪk"
 },
 {
   "id": 8420,
   "word": "ELIMINATION",
   "pronunciations": "ɪˌlɪməˈneɪʃən"
 },
 {
   "id": 8421,
   "word": "ELSE'S",
   "pronunciations": "ˈɛlsɪz"
 },
 {
   "id": 8422,
   "word": "EMERGES",
   "pronunciations": "ɪˈmɝːdʒɪz, ˈiːmɝdʒɪz"
 },
 {
   "id": 8423,
   "word": "EMINENT",
   "pronunciations": "ˈɛmənənt"
 },
 {
   "id": 8424,
   "word": "EMPLOYS",
   "pronunciations": "ɛmˈplɔɪz, ɪmˈplɔɪz"
 },
 {
   "id": 8425,
   "word": "ENABLES",
   "pronunciations": "ɛˈneɪbəlz, ɪˈneɪbəlz"
 },
 {
   "id": 8426,
   "word": "ENCHANTING",
   "pronunciations": "ɛnˈtʃæntɪŋ, ɛnˈtʃænɪŋ"
 },
 {
   "id": 8427,
   "word": "ENFORCE",
   "pronunciations": "ɛnˈfɔrs"
 },
 {
   "id": 8428,
   "word": "ENGENDERED",
   "pronunciations": "ɛnˈdʒɛndɝd"
 },
 {
   "id": 8429,
   "word": "ENORMOUSLY",
   "pronunciations": "ɪˈnɔrməsli, iːˈnɔrməsli"
 },
 {
   "id": 8430,
   "word": "ENROLLED",
   "pronunciations": "ɛnˈroʊld"
 },
 {
   "id": 8431,
   "word": "ESCORT",
   "pronunciations": "ɛˈskɔrt, ˈɛskɔrt"
 },
 {
   "id": 8432,
   "word": "ESTHER",
   "pronunciations": "ˈɛstɝ"
 },
 {
   "id": 8433,
   "word": "ETCETERA",
   "pronunciations": "ˈɛtˈsɛtɝə"
 },
 {
   "id": 8434,
   "word": "EVANGELISM",
   "pronunciations": "ɪˈvændʒəˌlɪzəm, iːˈvændʒəˌlɪzəm"
 },
 {
   "id": 8435,
   "word": "EVILS",
   "pronunciations": "ˈiːvəlz"
 },
 {
   "id": 8436,
   "word": "EXECUTIVES",
   "pronunciations": "ɪgˈzɛkjətɪvz"
 },
 {
   "id": 8437,
   "word": "EXISTENTIAL",
   "pronunciations": "ˌɛgˌzɪˈstɛnʃəl"
 },
 {
   "id": 8438,
   "word": "EXPLOIT",
   "pronunciations": "ˈɛkˌsplɔɪt, ˌɛkˈsplɔɪt"
 },
 {
   "id": 8439,
   "word": "EXPLOITED",
   "pronunciations": "ˈɛkˌsplɔɪtəd, ɪkˈsplɔɪtəd"
 },
 {
   "id": 8440,
   "word": "EXPRESSES",
   "pronunciations": "ɪkˈsprɛsəz, ɪkˈsprɛsɪz"
 },
 {
   "id": 8441,
   "word": "EXTRACTED",
   "pronunciations": "ɛkˈstræktɪd"
 },
 {
   "id": 8442,
   "word": "EXTREMES",
   "pronunciations": "ɪkˈstriːmz"
 },
 {
   "id": 8443,
   "word": "EXTRUDED",
   "pronunciations": "ɪkˈstruːdəd"
 },
 {
   "id": 8444,
   "word": "EYEBROWS",
   "pronunciations": "ˈaɪˌbraʊz"
 },
 {
   "id": 8445,
   "word": "FACETS",
   "pronunciations": "ˈfæsəts"
 },
 {
   "id": 8446,
   "word": "FAULKNER'S",
   "pronunciations": "ˈfɔknɝz"
 },
 {
   "id": 8447,
   "word": "FIEDLER",
   "pronunciations": "ˈfiːdlɝ"
 },
 {
   "id": 8448,
   "word": "FIFTEENTH",
   "pronunciations": "fɪfˈtiːnθ"
 },
 {
   "id": 8449,
   "word": "FIGHTER",
   "pronunciations": "ˈfaɪtɝ"
 },
 {
   "id": 8450,
   "word": "FILLY",
   "pronunciations": "ˈfɪli"
 },
 {
   "id": 8451,
   "word": "FILTER",
   "pronunciations": "ˈfɪltɝ"
 },
 {
   "id": 8452,
   "word": "FINISHING",
   "pronunciations": "ˈfɪnɪʃɪŋ"
 },
 {
   "id": 8453,
   "word": "FLASHES",
   "pronunciations": "ˈflæʃɪz"
 },
 {
   "id": 8454,
   "word": "FLOODED",
   "pronunciations": "ˈflʌdəd, ˈflʌdɪd"
 },
 {
   "id": 8455,
   "word": "FORBES",
   "pronunciations": "ˈfɔrbz"
 },
 {
   "id": 8456,
   "word": "FORECASTING",
   "pronunciations": "ˈfɔrˌkæstɪŋ"
 },
 {
   "id": 8457,
   "word": "FORMAT",
   "pronunciations": "ˈfɔrˌmæt"
 },
 {
   "id": 8458,
   "word": "FORMULATE",
   "pronunciations": "ˈfɔrmjəˌleɪt"
 },
 {
   "id": 8459,
   "word": "FREUD",
   "pronunciations": "ˈfrɔɪd"
 },
 {
   "id": 8460,
   "word": "FULFILL",
   "pronunciations": "fʊlˈfɪl"
 },
 {
   "id": 8461,
   "word": "FUNDAMENTALLY",
   "pronunciations": "ˌfəndəˈmɛntəli, ˌfəndəˈmɛnəli"
 },
 {
   "id": 8462,
   "word": "FURNISHINGS",
   "pronunciations": "ˈfɝːnɪʃɪŋz"
 },
 {
   "id": 8463,
   "word": "GARLAND",
   "pronunciations": "ˈgɑːrlənd"
 },
 {
   "id": 8464,
   "word": "GARSON",
   "pronunciations": "ˈgɑːrsən"
 },
 {
   "id": 8465,
   "word": "GENE",
   "pronunciations": "ˈdʒiːn"
 },
 {
   "id": 8466,
   "word": "GENERALIZED",
   "pronunciations": "ˈdʒɛnɝəˌlaɪzd, ˈdʒɛnrəˌlaɪzd"
 },
 {
   "id": 8467,
   "word": "GENERATORS",
   "pronunciations": "ˈdʒɛnɝˌeɪtɝz"
 },
 {
   "id": 8468,
   "word": "GEOMETRY",
   "pronunciations": "dʒiːˈɑːmətri"
 },
 {
   "id": 8469,
   "word": "GEORGIA'S",
   "pronunciations": "ˈdʒɔrdʒəz"
 },
 {
   "id": 8470,
   "word": "GERMANIC",
   "pronunciations": "dʒɝˈmænɪk"
 },
 {
   "id": 8471,
   "word": "GLAND",
   "pronunciations": "ˈglænd"
 },
 {
   "id": 8472,
   "word": "GLOVE",
   "pronunciations": "ˈglʌv"
 },
 {
   "id": 8473,
   "word": "GONZALES",
   "pronunciations": "gɑːnˈzɑːləs"
 },
 {
   "id": 8474,
   "word": "GRACIOUS",
   "pronunciations": "ˈgreɪʃəs"
 },
 {
   "id": 8475,
   "word": "GRAMMATICAL",
   "pronunciations": "grəˈmætəkəl, grəˈmætɪkəl"
 },
 {
   "id": 8476,
   "word": "GRAN",
   "pronunciations": "ˈgræn"
 },
 {
   "id": 8477,
   "word": "GRANDMOTHER",
   "pronunciations": "ˈgrændˌməðɝ"
 },
 {
   "id": 8478,
   "word": "GRATITUDE",
   "pronunciations": "ˈgrætəˌtuːd"
 },
 {
   "id": 8479,
   "word": "GRAVEL",
   "pronunciations": "ˈgrævəl"
 },
 {
   "id": 8480,
   "word": "GRAVES",
   "pronunciations": "ˈgreɪvz"
 },
 {
   "id": 8481,
   "word": "GREASE",
   "pronunciations": "ˈgriːs"
 },
 {
   "id": 8482,
   "word": "GRIPS",
   "pronunciations": "ˈgrɪps"
 },
 {
   "id": 8483,
   "word": "GROCERY",
   "pronunciations": "ˈgroʊsɝi, ˈgroʊsri"
 },
 {
   "id": 8484,
   "word": "GROSSE",
   "pronunciations": "ˈgrɑːs"
 },
 {
   "id": 8485,
   "word": "GROTESQUE",
   "pronunciations": "groʊˈtɛsk"
 },
 {
   "id": 8486,
   "word": "GROUPINGS",
   "pronunciations": "ˈgruːpɪŋz"
 },
 {
   "id": 8487,
   "word": "GRUNTED",
   "pronunciations": "ˈgrʌntɪd"
 },
 {
   "id": 8488,
   "word": "GUARANTEE",
   "pronunciations": "ˌgɛrənˈtiː"
 },
 {
   "id": 8489,
   "word": "GUARDIAN",
   "pronunciations": "ˈgɑːrdiːən"
 },
 {
   "id": 8490,
   "word": "GUARDING",
   "pronunciations": "ˈgɑːrdɪŋ"
 },
 {
   "id": 8491,
   "word": "GUIDES",
   "pronunciations": "ˈgaɪdz"
 },
 {
   "id": 8492,
   "word": "GUTS",
   "pronunciations": "ˈgʌts"
 },
 {
   "id": 8493,
   "word": "HAGUE",
   "pronunciations": "ˈheɪg"
 },
 {
   "id": 8494,
   "word": "HAMMER",
   "pronunciations": "ˈhæmɝ"
 },
 {
   "id": 8495,
   "word": "HAN",
   "pronunciations": "ˈhɑːn, ˈhæn"
 },
 {
   "id": 8496,
   "word": "HANDKERCHIEF",
   "pronunciations": "ˈhæŋkɝtʃɪf, ˈhæŋkɝtʃiːf"
 },
 {
   "id": 8497,
   "word": "HANDLES",
   "pronunciations": "ˈhændəlz"
 },
 {
   "id": 8498,
   "word": "HARDSHIP",
   "pronunciations": "ˈhɑːrdʃɪp"
 },
 {
   "id": 8499,
   "word": "HARRIET",
   "pronunciations": "ˈhɛriːət"
 },
 {
   "id": 8500,
   "word": "HASTE",
   "pronunciations": "ˈheɪst"
 },
 {
   "id": 8501,
   "word": "HASTENED",
   "pronunciations": "ˈheɪsənd"
 },
 {
   "id": 8502,
   "word": "HAULED",
   "pronunciations": "ˈhɔld"
 },
 {
   "id": 8503,
   "word": "HEARTILY",
   "pronunciations": "ˈhɑːrtəli"
 },
 {
   "id": 8504,
   "word": "HEAVENLY",
   "pronunciations": "ˈhɛvənli"
 },
 {
   "id": 8505,
   "word": "HEAVENS",
   "pronunciations": "ˈhɛvənz"
 },
 {
   "id": 8506,
   "word": "HEEL",
   "pronunciations": "ˈhiːl"
 },
 {
   "id": 8507,
   "word": "HIERARCHY",
   "pronunciations": "ˈhaɪɝˌɑːrki, ˈhaɪˌrɑːrki"
 },
 {
   "id": 8508,
   "word": "HILLSIDE",
   "pronunciations": "ˈhɪlˌsaɪd"
 },
 {
   "id": 8509,
   "word": "HINT",
   "pronunciations": "ˈhɪnt"
 },
 {
   "id": 8510,
   "word": "HOLDEN",
   "pronunciations": "ˈhoʊldən"
 },
 {
   "id": 8511,
   "word": "HOMELY",
   "pronunciations": "ˈhoʊmli"
 },
 {
   "id": 8512,
   "word": "HOOT",
   "pronunciations": "ˈhuːt"
 },
 {
   "id": 8513,
   "word": "HORIZONTAL",
   "pronunciations": "ˌhɔrəˈzɑːntəl"
 },
 {
   "id": 8514,
   "word": "HOSE",
   "pronunciations": "ˈhoʊz"
 },
 {
   "id": 8515,
   "word": "HOW'S",
   "pronunciations": "ˈhaʊz"
 },
 {
   "id": 8516,
   "word": "HUMANS",
   "pronunciations": "ˈhjuːmənz, ˈjuːmənz"
 },
 {
   "id": 8517,
   "word": "HUNGARIAN",
   "pronunciations": "həŋˈgɛriːən"
 },
 {
   "id": 8518,
   "word": "HYMN",
   "pronunciations": "ˈhɪm"
 },
 {
   "id": 8519,
   "word": "ILLEGAL",
   "pronunciations": "ˌɪˈliːgəl"
 },
 {
   "id": 8520,
   "word": "ILLS",
   "pronunciations": "ˈɪlz"
 },
 {
   "id": 8521,
   "word": "ILLUMINATION",
   "pronunciations": "ˌɪˌluːməˈneɪʃən"
 },
 {
   "id": 8522,
   "word": "IMMENSELY",
   "pronunciations": "ˌɪˈmɛnsli"
 },
 {
   "id": 8523,
   "word": "IMPATIENTLY",
   "pronunciations": "ˌɪmˈpeɪʃəntli"
 },
 {
   "id": 8524,
   "word": "IMPOSE",
   "pronunciations": "ˌɪmˈpoʊz"
 },
 {
   "id": 8525,
   "word": "IMPURITIES",
   "pronunciations": "ˌɪmˈpjʊrətiːz"
 },
 {
   "id": 8526,
   "word": "INCURRED",
   "pronunciations": "ˌɪnˈkɝːd"
 },
 {
   "id": 8527,
   "word": "INDICATORS",
   "pronunciations": "ˈɪndəˌkeɪtɝz"
 },
 {
   "id": 8528,
   "word": "INDIES",
   "pronunciations": "ˈɪndiːz"
 },
 {
   "id": 8529,
   "word": "INDIGNATION",
   "pronunciations": "ˌɪndɪgˈneɪʃən"
 },
 {
   "id": 8530,
   "word": "INDONESIA",
   "pronunciations": "ˌɪndoʊˈniːʒə"
 },
 {
   "id": 8531,
   "word": "INDUCE",
   "pronunciations": "ˌɪnˈduːs"
 },
 {
   "id": 8532,
   "word": "INDULGE",
   "pronunciations": "ˌɪnˈdʌldʒ"
 },
 {
   "id": 8533,
   "word": "INDUSTRIALIZED",
   "pronunciations": "ˌɪnˈdʌstriːəˌlaɪzd"
 },
 {
   "id": 8534,
   "word": "INGREDIENTS",
   "pronunciations": "ˌɪnˈgriːdiːənts"
 },
 {
   "id": 8535,
   "word": "INN",
   "pronunciations": "ˈɪn"
 },
 {
   "id": 8536,
   "word": "INSPIRATION",
   "pronunciations": "ˌɪnspɝˈeɪʃən"
 },
 {
   "id": 8537,
   "word": "INSTITUTIONAL",
   "pronunciations": "ˌɪnstɪˈtuːʃənəl"
 },
 {
   "id": 8538,
   "word": "INTERCOURSE",
   "pronunciations": "ˈɪntɝˌkɔrs, ˈɪnɝˌkɔrs"
 },
 {
   "id": 8539,
   "word": "INTERFERE",
   "pronunciations": "ˌɪntɝˈfɪr, ˌɪnɝˈfɪr"
 },
 {
   "id": 8540,
   "word": "INTERLOCKING",
   "pronunciations": "ˈɪntɝˌlɑːkɪŋ"
 },
 {
   "id": 8541,
   "word": "INTRODUCING",
   "pronunciations": "ˌɪntrəˈduːsɪŋ, ˌɪntroʊˈduːsɪŋ"
 },
 {
   "id": 8542,
   "word": "INVASIONS",
   "pronunciations": "ˌɪnˈveɪʒənz"
 },
 {
   "id": 8543,
   "word": "INWARD",
   "pronunciations": "ˈɪnwɝd"
 },
 {
   "id": 8544,
   "word": "IONS",
   "pronunciations": "ˈaɪˌɑːnz"
 },
 {
   "id": 8545,
   "word": "IRREGULAR",
   "pronunciations": "ˌɪˈrɛgjəlɝ"
 },
 {
   "id": 8546,
   "word": "IRRESPONSIBLE",
   "pronunciations": "ˌɪrəˈspɑːnsəbəl"
 },
 {
   "id": 8547,
   "word": "ISLAND'S",
   "pronunciations": "ˈaɪləndz"
 },
 {
   "id": 8548,
   "word": "IVY",
   "pronunciations": "ˈaɪvi"
 },
 {
   "id": 8549,
   "word": "JENKINS",
   "pronunciations": "ˈdʒɛŋkənz, ˈdʒɛŋkɪnz"
 },
 {
   "id": 8550,
   "word": "JOKES",
   "pronunciations": "ˈdʒoʊks"
 },
 {
   "id": 8551,
   "word": "JUMPING",
   "pronunciations": "ˈdʒʌmpɪŋ"
 },
 {
   "id": 8552,
   "word": "JUPITER",
   "pronunciations": "ˈdʒuːpətɝ, ˈdʒuːpɪtɝ"
 },
 {
   "id": 8553,
   "word": "KARL",
   "pronunciations": "ˈkɑːrl"
 },
 {
   "id": 8554,
   "word": "KIRBY",
   "pronunciations": "ˈkɝːbi"
 },
 {
   "id": 8555,
   "word": "KIROV",
   "pronunciations": "ˈkɪrɑːv"
 },
 {
   "id": 8556,
   "word": "LABELED",
   "pronunciations": "ˈleɪbəld"
 },
 {
   "id": 8557,
   "word": "LABORATORIES",
   "pronunciations": "ˈlæbrəˌtɔriːz"
 },
 {
   "id": 8558,
   "word": "LADIES'",
   "pronunciations": "ˈleɪˌdiːz"
 },
 {
   "id": 8559,
   "word": "LARRY",
   "pronunciations": "ˈlɛri"
 },
 {
   "id": 8560,
   "word": "LATENT",
   "pronunciations": "ˈleɪtənt"
 },
 {
   "id": 8561,
   "word": "LAZY",
   "pronunciations": "ˈleɪzi"
 },
 {
   "id": 8562,
   "word": "LESSENED",
   "pronunciations": "ˈlɛsənd"
 },
 {
   "id": 8563,
   "word": "LOCKER",
   "pronunciations": "ˈlɑːkɝ"
 },
 {
   "id": 8564,
   "word": "LONELINESS",
   "pronunciations": "ˈloʊnliːnəs"
 },
 {
   "id": 8565,
   "word": "LOUNGE",
   "pronunciations": "ˈlaʊndʒ"
 },
 {
   "id": 8566,
   "word": "LUIS",
   "pronunciations": "luːˈiːs"
 },
 {
   "id": 8567,
   "word": "MAINE",
   "pronunciations": "ˈmeɪn"
 },
 {
   "id": 8568,
   "word": "MALAISE",
   "pronunciations": "mæˈleɪz"
 },
 {
   "id": 8569,
   "word": "MANIFEST",
   "pronunciations": "ˈmænəˌfɛst"
 },
 {
   "id": 8570,
   "word": "MANIFESTATIONS",
   "pronunciations": "ˌmænəfɛˈsteɪʃənz"
 },
 {
   "id": 8571,
   "word": "MANN'S",
   "pronunciations": "ˈmænz"
 },
 {
   "id": 8572,
   "word": "MANUAL",
   "pronunciations": "ˈmænjuːəl"
 },
 {
   "id": 8573,
   "word": "MARCHED",
   "pronunciations": "ˈmɑːrtʃt"
 },
 {
   "id": 8574,
   "word": "MARVIN",
   "pronunciations": "ˈmɑːrvɪn"
 },
 {
   "id": 8575,
   "word": "MASK",
   "pronunciations": "ˈmæsk"
 },
 {
   "id": 8576,
   "word": "MAYOR'S",
   "pronunciations": "ˈmeɪɝz"
 },
 {
   "id": 8577,
   "word": "MELANCHOLY",
   "pronunciations": "ˈmɛlənˌkɑːli"
 },
 {
   "id": 8578,
   "word": "MELTED",
   "pronunciations": "ˈmɛltəd, ˈmɛltɪd"
 },
 {
   "id": 8579,
   "word": "MENACE",
   "pronunciations": "ˈmɛnəs, ˈmɛnɪs"
 },
 {
   "id": 8580,
   "word": "METALLIC",
   "pronunciations": "məˈtælɪk"
 },
 {
   "id": 8581,
   "word": "MILWAUKEE",
   "pronunciations": "mɪlˈwɔki"
 },
 {
   "id": 8582,
   "word": "MINIATURE",
   "pronunciations": "ˈmɪniːəˌtʃʊr, ˈmɪnɪˌtʃʊr"
 },
 {
   "id": 8583,
   "word": "MINNEAPOLIS",
   "pronunciations": "ˌmɪniːˈæpəlɪs"
 },
 {
   "id": 8584,
   "word": "MOLECULES",
   "pronunciations": "ˈmɑːləˌkjuːlz"
 },
 {
   "id": 8585,
   "word": "MONETARY",
   "pronunciations": "ˈmɑːnəˌtɛri"
 },
 {
   "id": 8586,
   "word": "MONKEY",
   "pronunciations": "ˈmʌŋki"
 },
 {
   "id": 8587,
   "word": "MORTALITY",
   "pronunciations": "mɔrˈtæləti"
 },
 {
   "id": 8588,
   "word": "MOSES",
   "pronunciations": "ˈmoʊzəs, ˈmoʊzɪs"
 },
 {
   "id": 8589,
   "word": "MOSS",
   "pronunciations": "ˈmɔs"
 },
 {
   "id": 8590,
   "word": "MOTIVATED",
   "pronunciations": "ˈmoʊtəˌveɪtəd"
 },
 {
   "id": 8591,
   "word": "MULLER",
   "pronunciations": "ˈmʌlɝ"
 },
 {
   "id": 8592,
   "word": "MUNICIPALITIES",
   "pronunciations": "ˌmjuːnɪsəˈpælɪtiːz"
 },
 {
   "id": 8593,
   "word": "MURDERED",
   "pronunciations": "ˈmɝːdɝd"
 },
 {
   "id": 8594,
   "word": "NAGGING",
   "pronunciations": "ˈnægɪŋ"
 },
 {
   "id": 8595,
   "word": "NARROWED",
   "pronunciations": "ˈnɛroʊd"
 },
 {
   "id": 8596,
   "word": "NEPHEW",
   "pronunciations": "ˈnɛfjuː"
 },
 {
   "id": 8597,
   "word": "NICELY",
   "pronunciations": "ˈnaɪsli"
 },
 {
   "id": 8598,
   "word": "NIGHTMARE",
   "pronunciations": "ˈnaɪtˌmɛr"
 },
 {
   "id": 8599,
   "word": "NORTON",
   "pronunciations": "ˈnɔrtən"
 },
 {
   "id": 8600,
   "word": "NOTICES",
   "pronunciations": "ˈnoʊtɪsɪz"
 },
 {
   "id": 8601,
   "word": "NUMBERED",
   "pronunciations": "ˈnʌmbɝd"
 },
 {
   "id": 8602,
   "word": "OBEDIENCE",
   "pronunciations": "oʊˈbiːdiːəns"
 },
 {
   "id": 8603,
   "word": "OBTAINING",
   "pronunciations": "əbˈteɪnɪŋ"
 },
 {
   "id": 8604,
   "word": "OCCUPANTS",
   "pronunciations": "ˈɑːkjəpənts"
 },
 {
   "id": 8605,
   "word": "ODDLY",
   "pronunciations": "ˈɑːdli"
 },
 {
   "id": 8606,
   "word": "OFFSET",
   "pronunciations": "ɔfˈsɛt, ˈɔfˌsɛt"
 },
 {
   "id": 8607,
   "word": "ORBITS",
   "pronunciations": "ˈɔrbəts"
 },
 {
   "id": 8608,
   "word": "ORDINANCE",
   "pronunciations": "ˈɔrdənəns"
 },
 {
   "id": 8609,
   "word": "ORTHODONTIC",
   "pronunciations": "ˌɔrθəˈdɑːntɪk"
 },
 {
   "id": 8610,
   "word": "ORTHODONTIST",
   "pronunciations": "ˌɔrθəˈdɑːntəst"
 },
 {
   "id": 8611,
   "word": "OSCAR",
   "pronunciations": "ˈɔskɝ"
 },
 {
   "id": 8612,
   "word": "OTHER'S",
   "pronunciations": "ˈʌðɝz"
 },
 {
   "id": 8613,
   "word": "OUTLET",
   "pronunciations": "ˈaʊtˌlɛt"
 },
 {
   "id": 8614,
   "word": "OUTRIGHT",
   "pronunciations": "ˈaʊˈtraɪt"
 },
 {
   "id": 8615,
   "word": "OVERCAST",
   "pronunciations": "ˈoʊvɝˌkæst"
 },
 {
   "id": 8616,
   "word": "PALATABILITY",
   "pronunciations": "ˌpælətəˈbɪləti"
 },
 {
   "id": 8617,
   "word": "PAMPHLETS",
   "pronunciations": "ˈpæmfləts"
 },
 {
   "id": 8618,
   "word": "PANTING",
   "pronunciations": "ˈpæntɪŋ"
 },
 {
   "id": 8619,
   "word": "PANTS",
   "pronunciations": "ˈpænts"
 },
 {
   "id": 8620,
   "word": "PARADOX",
   "pronunciations": "ˈpɛrəˌdɑːks"
 },
 {
   "id": 8621,
   "word": "PARAMOUNT",
   "pronunciations": "ˈpɛrəˌmaʊnt"
 },
 {
   "id": 8622,
   "word": "PARTLOW",
   "pronunciations": "ˈpɑːrtˌloʊ"
 },
 {
   "id": 8623,
   "word": "PARTY'S",
   "pronunciations": "ˈpɑːrtiːz"
 },
 {
   "id": 8624,
   "word": "PATHOLOGICAL",
   "pronunciations": "ˌpæθəˈlɑːdʒɪkəl"
 },
 {
   "id": 8625,
   "word": "PATIENTLY",
   "pronunciations": "ˈpeɪʃəntli"
 },
 {
   "id": 8626,
   "word": "PATRONS",
   "pronunciations": "ˈpeɪtrənz"
 },
 {
   "id": 8627,
   "word": "PEARL",
   "pronunciations": "ˈpɝːl"
 },
 {
   "id": 8628,
   "word": "PEERING",
   "pronunciations": "ˈpiːrɪŋ"
 },
 {
   "id": 8629,
   "word": "PELTS",
   "pronunciations": "ˈpɛlts"
 },
 {
   "id": 8630,
   "word": "PENINSULA",
   "pronunciations": "pəˈnɪnsələ"
 },
 {
   "id": 8631,
   "word": "PENNANT",
   "pronunciations": "ˈpɛnənt"
 },
 {
   "id": 8632,
   "word": "PERCEPTIONS",
   "pronunciations": "pɝˈsɛpʃənz"
 },
 {
   "id": 8633,
   "word": "PERIODIC",
   "pronunciations": "ˌpɪriːˈɑːdɪk"
 },
 {
   "id": 8634,
   "word": "PERMITTING",
   "pronunciations": "pɝˈmɪtɪŋ"
 },
 {
   "id": 8635,
   "word": "PERSISTENCE",
   "pronunciations": "pɝˈsɪstəns"
 },
 {
   "id": 8636,
   "word": "PERSUASION",
   "pronunciations": "pɝˈsweɪʒən"
 },
 {
   "id": 8637,
   "word": "PETER'S",
   "pronunciations": "ˈpiːtɝz"
 },
 {
   "id": 8638,
   "word": "PHILOSOPHERS",
   "pronunciations": "fəˈlɑːsəfɝz"
 },
 {
   "id": 8639,
   "word": "PHOENIX",
   "pronunciations": "ˈfiːnɪks"
 },
 {
   "id": 8640,
   "word": "PICKET",
   "pronunciations": "ˈpɪkɪt"
 },
 {
   "id": 8641,
   "word": "PICTURESQUE",
   "pronunciations": "ˈpɪktʃɝəsk"
 },
 {
   "id": 8642,
   "word": "PIGMENT",
   "pronunciations": "ˈpɪgmɛnt"
 },
 {
   "id": 8643,
   "word": "PILGRIMAGE",
   "pronunciations": "ˈpɪlgrəmədʒ, ˈpɪlgrəmɪdʒ"
 },
 {
   "id": 8644,
   "word": "PINEAPPLE",
   "pronunciations": "ˈpaɪˌnæpəl"
 },
 {
   "id": 8645,
   "word": "PLUMBING",
   "pronunciations": "ˈplʌmɪŋ"
 },
 {
   "id": 8646,
   "word": "PLYWOOD",
   "pronunciations": "ˈplaɪˌwʊd"
 },
 {
   "id": 8647,
   "word": "POLL",
   "pronunciations": "ˈpoʊl"
 },
 {
   "id": 8648,
   "word": "POSITIVELY",
   "pronunciations": "ˈpɑːzətɪvli"
 },
 {
   "id": 8649,
   "word": "POSTPONED",
   "pronunciations": "poʊstˈpoʊnd"
 },
 {
   "id": 8650,
   "word": "POTENT",
   "pronunciations": "ˈpoʊtənt"
 },
 {
   "id": 8651,
   "word": "POUR",
   "pronunciations": "ˈpɔr"
 },
 {
   "id": 8652,
   "word": "POURING",
   "pronunciations": "ˈpɔrɪŋ"
 },
 {
   "id": 8653,
   "word": "PRECEDENT",
   "pronunciations": "ˈprɛsɪdənt"
 },
 {
   "id": 8654,
   "word": "PRECIPITATED",
   "pronunciations": "prɪˈsɪpɪˌteɪtɪd"
 },
 {
   "id": 8655,
   "word": "PREDISPOSITIONS",
   "pronunciations": "ˌpriːdɪspəˈzɪʃənz"
 },
 {
   "id": 8656,
   "word": "PREFERENCE",
   "pronunciations": "ˈprɛfɝəns, ˈprɛfrəns"
 },
 {
   "id": 8657,
   "word": "PREOCCUPATION",
   "pronunciations": "priːˌɑːkjəˈpeɪʃən"
 },
 {
   "id": 8658,
   "word": "PRESSES",
   "pronunciations": "ˈprɛsəz, ˈprɛsɪz"
 },
 {
   "id": 8659,
   "word": "PROCLAIMED",
   "pronunciations": "proʊˈkleɪmd"
 },
 {
   "id": 8660,
   "word": "PROJECTION",
   "pronunciations": "prɑːˈdʒɛkʃən"
 },
 {
   "id": 8661,
   "word": "PROPORTIONATE",
   "pronunciations": "prəˈpɔrʃənət"
 },
 {
   "id": 8662,
   "word": "PROPORTIONATELY",
   "pronunciations": "prəˈpɔrʃənətli"
 },
 {
   "id": 8663,
   "word": "PROPRIETORSHIP",
   "pronunciations": "prəˈpraɪətɝˌʃɪp"
 },
 {
   "id": 8664,
   "word": "PROSECUTION",
   "pronunciations": "ˌprɑːsəˈkjuːʃən"
 },
 {
   "id": 8665,
   "word": "PROUDLY",
   "pronunciations": "ˈpraʊdli"
 },
 {
   "id": 8666,
   "word": "PROVINCIAL",
   "pronunciations": "prəˈvɪnʃəl"
 },
 {
   "id": 8667,
   "word": "PUBLISHER",
   "pronunciations": "ˈpʌblɪʃɝ"
 },
 {
   "id": 8668,
   "word": "PULLS",
   "pronunciations": "ˈpʊlz"
 },
 {
   "id": 8669,
   "word": "PULSE",
   "pronunciations": "ˈpʌls"
 },
 {
   "id": 8670,
   "word": "PURSUING",
   "pronunciations": "pɝˈsuːɪŋ"
 },
 {
   "id": 8671,
   "word": "PUZZLING",
   "pronunciations": "ˈpʌzəlɪŋ, ˈpʌzlɪŋ"
 },
 {
   "id": 8672,
   "word": "QUACK",
   "pronunciations": "ˈkwæk"
 },
 {
   "id": 8673,
   "word": "QUACKS",
   "pronunciations": "ˈkwæks"
 },
 {
   "id": 8674,
   "word": "QUANTITATIVE",
   "pronunciations": "ˈkwɑːntɪˌteɪtɪv"
 },
 {
   "id": 8675,
   "word": "QUARTET",
   "pronunciations": "kwɔrˈtɛt"
 },
 {
   "id": 8676,
   "word": "QUESTIONABLE",
   "pronunciations": "ˈkwɛstʃənəbəl"
 },
 {
   "id": 8677,
   "word": "QUILL",
   "pronunciations": "ˈkwɪl"
 },
 {
   "id": 8678,
   "word": "RACK",
   "pronunciations": "ˈræk"
 },
 {
   "id": 8679,
   "word": "RADIUS",
   "pronunciations": "ˈreɪdiːəs"
 },
 {
   "id": 8680,
   "word": "RAGGED",
   "pronunciations": "ˈrægəd"
 },
 {
   "id": 8681,
   "word": "RAILS",
   "pronunciations": "ˈreɪlz"
 },
 {
   "id": 8682,
   "word": "RANDOLPH",
   "pronunciations": "ˈrændɑːlf"
 },
 {
   "id": 8683,
   "word": "RANKIN",
   "pronunciations": "ˈræŋkɪn"
 },
 {
   "id": 8684,
   "word": "RATED",
   "pronunciations": "ˈreɪtəd, ˈreɪtɪd"
 },
 {
   "id": 8685,
   "word": "RATINGS",
   "pronunciations": "ˈreɪtɪŋz"
 },
 {
   "id": 8686,
   "word": "RECKLESS",
   "pronunciations": "ˈrɛkləs"
 },
 {
   "id": 8687,
   "word": "RECONNAISSANCE",
   "pronunciations": "riːˈkɑːnəsəns"
 },
 {
   "id": 8688,
   "word": "RECOVERED",
   "pronunciations": "rəˈkʌvɝd, rɪˈkʌvɝd"
 },
 {
   "id": 8689,
   "word": "REDCOATS",
   "pronunciations": "ˈrɛdˌkoʊts"
 },
 {
   "id": 8690,
   "word": "REGRET",
   "pronunciations": "rəˈgrɛt, rɪˈgrɛt"
 },
 {
   "id": 8691,
   "word": "REINS",
   "pronunciations": "ˈreɪnz"
 },
 {
   "id": 8692,
   "word": "REPEATING",
   "pronunciations": "rɪˈpiːtɪŋ, riːˈpiːtɪŋ"
 },
 {
   "id": 8693,
   "word": "REPLACING",
   "pronunciations": "rɪˈpleɪsɪŋ"
 },
 {
   "id": 8694,
   "word": "REPORTEDLY",
   "pronunciations": "rɪˈpɔrtədli, riːˈpɔrtədli"
 },
 {
   "id": 8695,
   "word": "RESEMBLES",
   "pronunciations": "rɪˈzɛmbəlz, riːˈzɛmbəlz"
 },
 {
   "id": 8696,
   "word": "RESERVATIONS",
   "pronunciations": "ˌrɛzɝˈveɪʃənz"
 },
 {
   "id": 8697,
   "word": "RESIGNED",
   "pronunciations": "rɪˈzaɪnd, riːˈzaɪnd, riːˈsaɪnd"
 },
 {
   "id": 8698,
   "word": "RESIN",
   "pronunciations": "ˈrɛzən, ˈrɛzɪn"
 },
 {
   "id": 8699,
   "word": "RESISTED",
   "pronunciations": "rɪˈzɪstɪd, riːˈzɪstəd, riːˈzɪstɪd"
 },
 {
   "id": 8700,
   "word": "RESOURCE",
   "pronunciations": "ˈriːsɔrs"
 },
 {
   "id": 8701,
   "word": "RESTORE",
   "pronunciations": "rɪˈstɔr"
 },
 {
   "id": 8702,
   "word": "RESUMPTION",
   "pronunciations": "rɪˈzʌmpʃən, riːˈzʌmpʃən, rɪˈzʌmʃən, riːˈzʌmʃən"
 },
 {
   "id": 8703,
   "word": "RETAINS",
   "pronunciations": "rɪˈteɪnz, riːˈteɪnz"
 },
 {
   "id": 8704,
   "word": "RETIRE",
   "pronunciations": "rɪˈtaɪr, riːˈtaɪr, ˌriːˈtaɪɝ"
 },
 {
   "id": 8705,
   "word": "REVIEWS",
   "pronunciations": "riːvˈjuːz, rəvˈjuːz"
 },
 {
   "id": 8706,
   "word": "REVISIONS",
   "pronunciations": "riːˈvɪʒənz"
 },
 {
   "id": 8707,
   "word": "RITTER",
   "pronunciations": "ˈrɪtɝ"
 },
 {
   "id": 8708,
   "word": "ROARING",
   "pronunciations": "ˈrɔrɪŋ"
 },
 {
   "id": 8709,
   "word": "ROEBUCK",
   "pronunciations": "ˈroʊˌbək"
 },
 {
   "id": 8710,
   "word": "ROGERS",
   "pronunciations": "ˈrɑːdʒɝz"
 },
 {
   "id": 8711,
   "word": "ROOKIE",
   "pronunciations": "ˈrʊki"
 },
 {
   "id": 8712,
   "word": "RULERS",
   "pronunciations": "ˈruːlɝz"
 },
 {
   "id": 8713,
   "word": "SALAD",
   "pronunciations": "ˈsæləd"
 },
 {
   "id": 8714,
   "word": "SALTER",
   "pronunciations": "ˈsɔltɝ"
 },
 {
   "id": 8715,
   "word": "SANCTIONS",
   "pronunciations": "ˈsæŋkʃənz"
 },
 {
   "id": 8716,
   "word": "SANCTUARY",
   "pronunciations": "ˈsæŋktʃuːˌɛri"
 },
 {
   "id": 8717,
   "word": "SATIRE",
   "pronunciations": "ˈsæˌtaɪɝ"
 },
 {
   "id": 8718,
   "word": "SAVANNAH",
   "pronunciations": "səˈvænə"
 },
 {
   "id": 8719,
   "word": "SCENIC",
   "pronunciations": "ˈsiːnɪk"
 },
 {
   "id": 8720,
   "word": "SCHAFFNER",
   "pronunciations": "ˈʃæfnɝ"
 },
 {
   "id": 8721,
   "word": "SCHOLASTIC",
   "pronunciations": "skəˈlæstɪk"
 },
 {
   "id": 8722,
   "word": "SCHWEITZER",
   "pronunciations": "ˈʃwaɪtsɝ"
 },
 {
   "id": 8723,
   "word": "SCRAMBLED",
   "pronunciations": "ˈskræmbəld"
 },
 {
   "id": 8724,
   "word": "SCRATCH",
   "pronunciations": "ˈskrætʃ"
 },
 {
   "id": 8725,
   "word": "SCRUB",
   "pronunciations": "ˈskrʌb"
 },
 {
   "id": 8726,
   "word": "SEAM",
   "pronunciations": "ˈsiːm"
 },
 {
   "id": 8727,
   "word": "SEAMS",
   "pronunciations": "ˈsiːmz"
 },
 {
   "id": 8728,
   "word": "SEARCHED",
   "pronunciations": "ˈsɝːtʃt"
 },
 {
   "id": 8729,
   "word": "SECRECY",
   "pronunciations": "ˈsiːkrəsi"
 },
 {
   "id": 8730,
   "word": "SECRETARIES",
   "pronunciations": "ˈsɛkrəˌtɛriːz"
 },
 {
   "id": 8731,
   "word": "SECRETARY'S",
   "pronunciations": "ˈsɛkrəˌtɛriːz"
 },
 {
   "id": 8732,
   "word": "SENSORY",
   "pronunciations": "ˈsɛnsɝi"
 },
 {
   "id": 8733,
   "word": "SETTINGS",
   "pronunciations": "ˈsɛtɪŋz"
 },
 {
   "id": 8734,
   "word": "SHAVED",
   "pronunciations": "ˈʃeɪvd"
 },
 {
   "id": 8735,
   "word": "SHAW",
   "pronunciations": "ˈʃɔ"
 },
 {
   "id": 8736,
   "word": "SHORES",
   "pronunciations": "ˈʃɔrz"
 },
 {
   "id": 8737,
   "word": "SIDNEY",
   "pronunciations": "ˈsɪdni"
 },
 {
   "id": 8738,
   "word": "SIMILARITY",
   "pronunciations": "ˌsɪməˈlɛrəti"
 },
 {
   "id": 8739,
   "word": "SIMPLIFIED",
   "pronunciations": "ˈsɪmpləˌfaɪd"
 },
 {
   "id": 8740,
   "word": "SIMPLIFY",
   "pronunciations": "ˈsɪmpləˌfaɪ"
 },
 {
   "id": 8741,
   "word": "SIMULTANEOUS",
   "pronunciations": "ˌsaɪməlˈteɪniːəs"
 },
 {
   "id": 8742,
   "word": "SKIFF",
   "pronunciations": "ˈskɪf"
 },
 {
   "id": 8743,
   "word": "SKILLFUL",
   "pronunciations": "ˈskɪlfəl"
 },
 {
   "id": 8744,
   "word": "SKINNY",
   "pronunciations": "ˈskɪni"
 },
 {
   "id": 8745,
   "word": "SLAB",
   "pronunciations": "ˈslæb"
 },
 {
   "id": 8746,
   "word": "SLACK",
   "pronunciations": "ˈslæk"
 },
 {
   "id": 8747,
   "word": "SLOWER",
   "pronunciations": "ˈsloʊɝ"
 },
 {
   "id": 8748,
   "word": "SMELLS",
   "pronunciations": "ˈsmɛlz"
 },
 {
   "id": 8749,
   "word": "SMOKED",
   "pronunciations": "ˈsmoʊkt"
 },
 {
   "id": 8750,
   "word": "SNAPPING",
   "pronunciations": "ˈsnæpɪŋ"
 },
 {
   "id": 8751,
   "word": "SOAKING",
   "pronunciations": "ˈsoʊkɪŋ"
 },
 {
   "id": 8752,
   "word": "SOLEMNLY",
   "pronunciations": "ˈsɔləmli"
 },
 {
   "id": 8753,
   "word": "SOLOIST",
   "pronunciations": "ˈsoʊˌloʊəst, ˈsoʊˌloʊɪst"
 },
 {
   "id": 8754,
   "word": "SON'S",
   "pronunciations": "ˈsʌnz"
 },
 {
   "id": 8755,
   "word": "SONATA",
   "pronunciations": "səˈnɑːtə"
 },
 {
   "id": 8756,
   "word": "SORROW",
   "pronunciations": "ˈsɑːroʊ"
 },
 {
   "id": 8757,
   "word": "SPACIOUS",
   "pronunciations": "ˈspeɪʃəs"
 },
 {
   "id": 8758,
   "word": "SPARED",
   "pronunciations": "ˈspɛrd"
 },
 {
   "id": 8759,
   "word": "SPAT",
   "pronunciations": "ˈspæt"
 },
 {
   "id": 8760,
   "word": "SPECIALLY",
   "pronunciations": "ˈspɛʃəli, ˈspɛʃli"
 },
 {
   "id": 8761,
   "word": "SPECIFICATIONS",
   "pronunciations": "ˌspɛsəfəˈkeɪʃənz"
 },
 {
   "id": 8762,
   "word": "SPECTATOR",
   "pronunciations": "ˈspɛkteɪtɝ"
 },
 {
   "id": 8763,
   "word": "SPED",
   "pronunciations": "ˈspɛd"
 },
 {
   "id": 8764,
   "word": "SPONTANEOUSLY",
   "pronunciations": "spɑːnˈteɪniːəsli"
 },
 {
   "id": 8765,
   "word": "SPORTING",
   "pronunciations": "ˈspɔrtɪŋ"
 },
 {
   "id": 8766,
   "word": "SPY",
   "pronunciations": "ˈspaɪ"
 },
 {
   "id": 8767,
   "word": "STACK",
   "pronunciations": "ˈstæk"
 },
 {
   "id": 8768,
   "word": "STACKED",
   "pronunciations": "ˈstækt"
 },
 {
   "id": 8769,
   "word": "STATES'",
   "pronunciations": "ˈsteɪts"
 },
 {
   "id": 8770,
   "word": "STEEPLE",
   "pronunciations": "ˈstiːpəl"
 },
 {
   "id": 8771,
   "word": "STEER",
   "pronunciations": "ˈstɪr"
 },
 {
   "id": 8772,
   "word": "STEERING",
   "pronunciations": "ˈstɪrɪŋ"
 },
 {
   "id": 8773,
   "word": "STEPPING",
   "pronunciations": "ˈstɛpɪŋ"
 },
 {
   "id": 8774,
   "word": "STERILE",
   "pronunciations": "ˈstɛrəl"
 },
 {
   "id": 8775,
   "word": "STICKY",
   "pronunciations": "ˈstɪki"
 },
 {
   "id": 8776,
   "word": "STIFFLY",
   "pronunciations": "ˈstɪfli"
 },
 {
   "id": 8777,
   "word": "STILLNESS",
   "pronunciations": "ˈstɪlnəs"
 },
 {
   "id": 8778,
   "word": "STIMULATING",
   "pronunciations": "ˈstɪmjəˌleɪtɪŋ"
 },
 {
   "id": 8779,
   "word": "STRETCHES",
   "pronunciations": "ˈstrɛtʃəz, ˈstrɛtʃɪz"
 },
 {
   "id": 8780,
   "word": "SUBORDINATES",
   "pronunciations": "səˈbɔrdəˌneɪts, səˈbɔrdənəts"
 },
 {
   "id": 8781,
   "word": "SUDS",
   "pronunciations": "ˈsʌdz"
 },
 {
   "id": 8782,
   "word": "SUGGESTIVE",
   "pronunciations": "səˈdʒɛstɪv"
 },
 {
   "id": 8783,
   "word": "SULLEN",
   "pronunciations": "ˈsʌlən"
 },
 {
   "id": 8784,
   "word": "SUMMARIZED",
   "pronunciations": "ˈsʌmɝˌaɪzd"
 },
 {
   "id": 8785,
   "word": "SUNDAYS",
   "pronunciations": "ˈsʌnˌdeɪz, ˈsʌnˌdiːz"
 },
 {
   "id": 8786,
   "word": "SUPERBLY",
   "pronunciations": "ˈsuːpɝbli"
 },
 {
   "id": 8787,
   "word": "SUPPLEMENTARY",
   "pronunciations": "ˌsəpləˈmɛntəˌriː"
 },
 {
   "id": 8788,
   "word": "SURGE",
   "pronunciations": "ˈsɝːdʒ"
 },
 {
   "id": 8789,
   "word": "SURVEYED",
   "pronunciations": "sɝˈveɪd, ˈsɝːˌveɪd"
 },
 {
   "id": 8790,
   "word": "SWAYED",
   "pronunciations": "ˈsweɪd"
 },
 {
   "id": 8791,
   "word": "SWEETHEART",
   "pronunciations": "ˈswiːtˌhɑːrt"
 },
 {
   "id": 8792,
   "word": "SYLLABLES",
   "pronunciations": "ˈsɪləbəlz"
 },
 {
   "id": 8793,
   "word": "SYMBOLIZE",
   "pronunciations": "ˈsɪmbəˌlaɪz"
 },
 {
   "id": 8794,
   "word": "SYMPOSIUM",
   "pronunciations": "sɪmˈpoʊziːəm"
 },
 {
   "id": 8795,
   "word": "TAILORED",
   "pronunciations": "ˈteɪlɝd"
 },
 {
   "id": 8796,
   "word": "TAN",
   "pronunciations": "ˈtæn"
 },
 {
   "id": 8797,
   "word": "TAXING",
   "pronunciations": "ˈtæksɪŋ"
 },
 {
   "id": 8798,
   "word": "TEARING",
   "pronunciations": "ˈtɛrɪŋ, ˈtɪrɪŋ"
 },
 {
   "id": 8799,
   "word": "TECHNICALLY",
   "pronunciations": "ˈtɛknɪkəli, ˈtɛknɪkli"
 },
 {
   "id": 8800,
   "word": "TENANTS",
   "pronunciations": "ˈtɛnənts"
 },
 {
   "id": 8801,
   "word": "TERRACE",
   "pronunciations": "ˈtɛrəs"
 },
 {
   "id": 8802,
   "word": "TERRITORIES",
   "pronunciations": "ˈtɛrəˌtɔriːz"
 },
 {
   "id": 8803,
   "word": "TEXANS",
   "pronunciations": "ˈtɛksənz"
 },
 {
   "id": 8804,
   "word": "THEOLOGIANS",
   "pronunciations": "ˌθiːəˈloʊdʒənz"
 },
 {
   "id": 8805,
   "word": "THEREIN",
   "pronunciations": "ðɛˈrɪn"
 },
 {
   "id": 8806,
   "word": "THIEVES",
   "pronunciations": "ˈθiːvz"
 },
 {
   "id": 8807,
   "word": "THIGH",
   "pronunciations": "ˈθaɪ"
 },
 {
   "id": 8808,
   "word": "THOR",
   "pronunciations": "ˈθɔr"
 },
 {
   "id": 8809,
   "word": "TIMED",
   "pronunciations": "ˈtaɪmd"
 },
 {
   "id": 8810,
   "word": "TIMELY",
   "pronunciations": "ˈtaɪmli"
 },
 {
   "id": 8811,
   "word": "TOE",
   "pronunciations": "ˈtoʊ"
 },
 {
   "id": 8812,
   "word": "TOLERANCE",
   "pronunciations": "ˈtɑːlɝəns"
 },
 {
   "id": 8813,
   "word": "TOLERANT",
   "pronunciations": "ˈtɑːlɝənt"
 },
 {
   "id": 8814,
   "word": "TONAL",
   "pronunciations": "ˈtoʊnəl"
 },
 {
   "id": 8815,
   "word": "TOPIC",
   "pronunciations": "ˈtɑːpɪk"
 },
 {
   "id": 8816,
   "word": "TORTURED",
   "pronunciations": "ˈtɔrtʃɝd"
 },
 {
   "id": 8817,
   "word": "TOSS",
   "pronunciations": "ˈtɔs"
 },
 {
   "id": 8818,
   "word": "TOWNE",
   "pronunciations": "ˈtaʊn"
 },
 {
   "id": 8819,
   "word": "TRACES",
   "pronunciations": "ˈtreɪsəz, ˈtreɪsɪz"
 },
 {
   "id": 8820,
   "word": "TRADES",
   "pronunciations": "ˈtreɪdz"
 },
 {
   "id": 8821,
   "word": "TRIFLE",
   "pronunciations": "ˈtraɪfəl"
 },
 {
   "id": 8822,
   "word": "TRIO",
   "pronunciations": "ˈtriːˌoʊ"
 },
 {
   "id": 8823,
   "word": "TRUSTEE",
   "pronunciations": "ˌtrəˈstiː"
 },
 {
   "id": 8824,
   "word": "TURKEY",
   "pronunciations": "ˈtɝːki"
 },
 {
   "id": 8825,
   "word": "UNCHANGED",
   "pronunciations": "ənˈtʃeɪndʒd"
 },
 {
   "id": 8826,
   "word": "UNDERGRADUATES",
   "pronunciations": "ˌəndɝˈgrædʒəwəts"
 },
 {
   "id": 8827,
   "word": "UNHAPPILY",
   "pronunciations": "ənˈhæpəli"
 },
 {
   "id": 8828,
   "word": "UNIFICATION",
   "pronunciations": "ˌjuːnəfəˈkeɪʃən"
 },
 {
   "id": 8829,
   "word": "UNIMPORTANT",
   "pronunciations": "ənɪmˈpɔrtənt"
 },
 {
   "id": 8830,
   "word": "UNPAID",
   "pronunciations": "ənˈpeɪd"
 },
 {
   "id": 8831,
   "word": "UNSUCCESSFUL",
   "pronunciations": "ˌənsəkˈsɛsfəl"
 },
 {
   "id": 8832,
   "word": "UNTOUCHED",
   "pronunciations": "ənˈtʌtʃt"
 },
 {
   "id": 8833,
   "word": "UTILIZATION",
   "pronunciations": "ˌjuːtələˈzeɪʃən"
 },
 {
   "id": 8834,
   "word": "VACATIONS",
   "pronunciations": "veɪˈkeɪʃənz"
 },
 {
   "id": 8835,
   "word": "VERSES",
   "pronunciations": "ˈvɝːsɪz"
 },
 {
   "id": 8836,
   "word": "VERSIONS",
   "pronunciations": "ˈvɝːʒənz"
 },
 {
   "id": 8837,
   "word": "VERSUS",
   "pronunciations": "ˈvɝːsəs, ˈvɝːsəz"
 },
 {
   "id": 8838,
   "word": "VINEGAR",
   "pronunciations": "ˈvɪnəgɝ"
 },
 {
   "id": 8839,
   "word": "VITALLY",
   "pronunciations": "ˈvaɪtəli"
 },
 {
   "id": 8840,
   "word": "VIVIDLY",
   "pronunciations": "ˈvɪvədli"
 },
 {
   "id": 8841,
   "word": "VOLTAIRE",
   "pronunciations": "voʊlˈtɛr"
 },
 {
   "id": 8842,
   "word": "VOLUNTARILY",
   "pronunciations": "ˌvɑːlənˈtɛrəli"
 },
 {
   "id": 8843,
   "word": "VOLUNTEER",
   "pronunciations": "ˌvɑːlənˈtɪr"
 },
 {
   "id": 8844,
   "word": "VON",
   "pronunciations": "ˈvɔn"
 },
 {
   "id": 8845,
   "word": "WALTON",
   "pronunciations": "ˈwɔltən"
 },
 {
   "id": 8846,
   "word": "WARMING",
   "pronunciations": "ˈwɔrmɪŋ"
 },
 {
   "id": 8847,
   "word": "WARNINGS",
   "pronunciations": "ˈwɔrnɪŋz"
 },
 {
   "id": 8848,
   "word": "WEIGHING",
   "pronunciations": "ˈweɪɪŋ"
 },
 {
   "id": 8849,
   "word": "WELL-BEING",
   "pronunciations": "ˌwɛlˈbiːɪŋ"
 },
 {
   "id": 8850,
   "word": "WEPT",
   "pronunciations": "ˈwɛpt"
 },
 {
   "id": 8851,
   "word": "WHEAT",
   "pronunciations": "ˈwiːt, ˈhwiːt"
 },
 {
   "id": 8852,
   "word": "WHO'D",
   "pronunciations": "ˈhuːd"
 },
 {
   "id": 8853,
   "word": "WICKED",
   "pronunciations": "ˈwɪkəd"
 },
 {
   "id": 8854,
   "word": "WILLOW",
   "pronunciations": "ˈwɪˌloʊ"
 },
 {
   "id": 8855,
   "word": "WINDING",
   "pronunciations": "ˈwaɪndɪŋ"
 },
 {
   "id": 8856,
   "word": "WISHFUL",
   "pronunciations": "ˈwɪʃfəl"
 },
 {
   "id": 8857,
   "word": "WISMAN",
   "pronunciations": "ˈwɪzmən"
 },
 {
   "id": 8858,
   "word": "WITHDREW",
   "pronunciations": "wɪθˈdruː, wɪðˈdruː"
 },
 {
   "id": 8859,
   "word": "WORKABLE",
   "pronunciations": "ˈwɝːkəbəl"
 },
 {
   "id": 8860,
   "word": "WORLDLY",
   "pronunciations": "ˈwɝːldli"
 },
 {
   "id": 8861,
   "word": "WOVEN",
   "pronunciations": "ˈwoʊvən"
 },
 {
   "id": 8862,
   "word": "WRATH",
   "pronunciations": "ˈræθ"
 },
 {
   "id": 8863,
   "word": "WRIGHT'S",
   "pronunciations": "ˈraɪts"
 },
 {
   "id": 8864,
   "word": "WYOMING",
   "pronunciations": "ˌwaɪˈoʊmɪŋ"
 },
 {
   "id": 8865,
   "word": "YELL",
   "pronunciations": "ˈjɛl"
 },
 {
   "id": 8866,
   "word": "YIELDING",
   "pronunciations": "ˈjiːldɪŋ"
 },
 {
   "id": 8867,
   "word": "ZOO",
   "pronunciations": "ˈzuː"
 },
 {
   "id": 8868,
   "word": "ABOLISH",
   "pronunciations": "əˈbɑːlɪʃ"
 },
 {
   "id": 8869,
   "word": "ABORIGINES",
   "pronunciations": "ˌæbɝˈɪdʒəniːz"
 },
 {
   "id": 8870,
   "word": "ABSURDITY",
   "pronunciations": "əbˈsɝːdəti"
 },
 {
   "id": 8871,
   "word": "ACCELEROMETERS",
   "pronunciations": "ækˌsɛlɝˈɑːmətɝz"
 },
 {
   "id": 8872,
   "word": "ACCIDENTS",
   "pronunciations": "ˈæksədənts"
 },
 {
   "id": 8873,
   "word": "ACCOMMODATIONS",
   "pronunciations": "əˌkɑːməˈdeɪʃənz"
 },
 {
   "id": 8874,
   "word": "ACCOMPANIMENT",
   "pronunciations": "əˈkʌmpnɪmənt, əˈkʌmpniːmənt"
 },
 {
   "id": 8875,
   "word": "ACCOMPANY",
   "pronunciations": "əˈkʌmpəni"
 },
 {
   "id": 8876,
   "word": "ACCUSING",
   "pronunciations": "əˈkjuːzɪŋ"
 },
 {
   "id": 8877,
   "word": "ACTIVES",
   "pronunciations": "ˈæktɪvz"
 },
 {
   "id": 8878,
   "word": "ACTUALITY",
   "pronunciations": "ˌæktʃuːˈæləˌtiː"
 },
 {
   "id": 8879,
   "word": "ADMITTING",
   "pronunciations": "ædˈmɪtɪŋ, ədˈmɪtɪŋ"
 },
 {
   "id": 8880,
   "word": "AERIAL",
   "pronunciations": "ˈɛriːəl"
 },
 {
   "id": 8881,
   "word": "AFFLICTED",
   "pronunciations": "əˈflɪktɪd"
 },
 {
   "id": 8882,
   "word": "AGGREGATE",
   "pronunciations": "ˈægrəgət, ˈægrəgeɪt"
 },
 {
   "id": 8883,
   "word": "AGRARIAN",
   "pronunciations": "əˈgrɛriːən"
 },
 {
   "id": 8884,
   "word": "ALARMED",
   "pronunciations": "əˈlɑːrmd"
 },
 {
   "id": 8885,
   "word": "ALIBI",
   "pronunciations": "ˈæləˌbaɪ"
 },
 {
   "id": 8886,
   "word": "ALLEY",
   "pronunciations": "ˈæli"
 },
 {
   "id": 8887,
   "word": "ANALOGOUS",
   "pronunciations": "əˈnæləgəs"
 },
 {
   "id": 8888,
   "word": "ANALYZING",
   "pronunciations": "ˈænəˌlaɪzɪŋ"
 },
 {
   "id": 8889,
   "word": "ANCESTRY",
   "pronunciations": "ˈænsɛstri"
 },
 {
   "id": 8890,
   "word": "ANGELO",
   "pronunciations": "ˈændʒəˌloʊ"
 },
 {
   "id": 8891,
   "word": "ANGUISH",
   "pronunciations": "ˈæŋgwɪʃ"
 },
 {
   "id": 8892,
   "word": "ANKLE",
   "pronunciations": "ˈæŋkəl"
 },
 {
   "id": 8893,
   "word": "APERTURE",
   "pronunciations": "ˈæpɝtʃɝ"
 },
 {
   "id": 8894,
   "word": "APPLIANCES",
   "pronunciations": "əˈplaɪənsɪz"
 },
 {
   "id": 8895,
   "word": "APPLICANT",
   "pronunciations": "ˈæplɪkənt"
 },
 {
   "id": 8896,
   "word": "APPORTIONED",
   "pronunciations": "əˈpɔrʃənd"
 },
 {
   "id": 8897,
   "word": "APPRAISAL",
   "pronunciations": "əˈpreɪzəl"
 },
 {
   "id": 8898,
   "word": "ARCHAEOLOGICAL",
   "pronunciations": "ˌɑːrkiːəˈlɑːdʒɪkəl"
 },
 {
   "id": 8899,
   "word": "ARCHBISHOP",
   "pronunciations": "ˈɑːrtʃˈbɪʃəp"
 },
 {
   "id": 8900,
   "word": "ARCHITECTS",
   "pronunciations": "ˈɑːrkəˌtɛkts"
 },
 {
   "id": 8901,
   "word": "ARCHITECTURAL",
   "pronunciations": "ˌɑːrkəˈtɛktʃɝəl"
 },
 {
   "id": 8902,
   "word": "ARCS",
   "pronunciations": "ˈɑːrks"
 },
 {
   "id": 8903,
   "word": "ARITHMETIC",
   "pronunciations": "ˌɛrɪθˈmɛtɪk, ɝˈɪθməˌtɪk"
 },
 {
   "id": 8904,
   "word": "ARTICULATE",
   "pronunciations": "ɑːrˈtɪkjəˌleɪt, ɑːrˈtɪkjələt"
 },
 {
   "id": 8905,
   "word": "ARTIE",
   "pronunciations": "ˈɑːrti"
 },
 {
   "id": 8906,
   "word": "ASSIMILATION",
   "pronunciations": "əˌsɪməˈleɪʃən"
 },
 {
   "id": 8907,
   "word": "ASSUMES",
   "pronunciations": "əˈsuːmz"
 },
 {
   "id": 8908,
   "word": "ASTONISHING",
   "pronunciations": "əˈstɑːnɪʃɪŋ"
 },
 {
   "id": 8909,
   "word": "ATHENS",
   "pronunciations": "ˈæθənz"
 },
 {
   "id": 8910,
   "word": "ATTAINED",
   "pronunciations": "əˈteɪnd"
 },
 {
   "id": 8911,
   "word": "AUTHENTICITY",
   "pronunciations": "ˌɔθənˈtɪsɪti"
 },
 {
   "id": 8912,
   "word": "AUTHORITATIVE",
   "pronunciations": "əˈθɔrəˌteɪtɪv"
 },
 {
   "id": 8913,
   "word": "AUTOMOTIVE",
   "pronunciations": "ˌɔtəˈmoʊtɪv"
 },
 {
   "id": 8914,
   "word": "AVOIDANCE",
   "pronunciations": "əˈvɔɪdəns"
 },
 {
   "id": 8915,
   "word": "BABE",
   "pronunciations": "ˈbeɪb"
 },
 {
   "id": 8916,
   "word": "BACKING",
   "pronunciations": "ˈbækɪŋ"
 },
 {
   "id": 8917,
   "word": "BACTERIA",
   "pronunciations": "bækˈtɪriːə"
 },
 {
   "id": 8918,
   "word": "BAKED",
   "pronunciations": "ˈbeɪkt"
 },
 {
   "id": 8919,
   "word": "BALLAD",
   "pronunciations": "ˈbæləd"
 },
 {
   "id": 8920,
   "word": "BALLROOM",
   "pronunciations": "ˈbɔlˌruːm"
 },
 {
   "id": 8921,
   "word": "BANKRUPTCY",
   "pronunciations": "ˈbæŋkrəpsi, ˈbæŋkrəptsi"
 },
 {
   "id": 8922,
   "word": "BANNER",
   "pronunciations": "ˈbænɝ"
 },
 {
   "id": 8923,
   "word": "BARBER",
   "pronunciations": "ˈbɑːrbɝ"
 },
 {
   "id": 8924,
   "word": "BARCO'S",
   "pronunciations": "ˈbɑːrkoʊz"
 },
 {
   "id": 8925,
   "word": "BARKER",
   "pronunciations": "ˈbɑːrkɝ"
 },
 {
   "id": 8926,
   "word": "BARNEY",
   "pronunciations": "ˈbɑːrni"
 },
 {
   "id": 8927,
   "word": "BARRED",
   "pronunciations": "ˈbɑːrd"
 },
 {
   "id": 8928,
   "word": "BARRELS",
   "pronunciations": "ˈbærəlz, ˈbɛrəlz"
 },
 {
   "id": 8929,
   "word": "BELLOWS",
   "pronunciations": "ˈbɛloʊz"
 },
 {
   "id": 8930,
   "word": "BELLS",
   "pronunciations": "ˈbɛlz"
 },
 {
   "id": 8931,
   "word": "BELTS",
   "pronunciations": "ˈbɛlts"
 },
 {
   "id": 8932,
   "word": "BENCHES",
   "pronunciations": "ˈbɛntʃɪz"
 },
 {
   "id": 8933,
   "word": "BETRAYED",
   "pronunciations": "bɪˈtreɪd"
 },
 {
   "id": 8934,
   "word": "BIAS",
   "pronunciations": "ˈbaɪəs"
 },
 {
   "id": 8935,
   "word": "BITES",
   "pronunciations": "ˈbaɪts"
 },
 {
   "id": 8936,
   "word": "BLINDLY",
   "pronunciations": "ˈblaɪndli"
 },
 {
   "id": 8937,
   "word": "BLOAT",
   "pronunciations": "ˈbloʊt"
 },
 {
   "id": 8938,
   "word": "BLOODY",
   "pronunciations": "ˈblʌdi"
 },
 {
   "id": 8939,
   "word": "BLOWS",
   "pronunciations": "ˈbloʊz"
 },
 {
   "id": 8940,
   "word": "BLUFF",
   "pronunciations": "ˈblʌf"
 },
 {
   "id": 8941,
   "word": "BLUNTLY",
   "pronunciations": "ˈblʌntli"
 },
 {
   "id": 8942,
   "word": "BOAST",
   "pronunciations": "ˈboʊst"
 },
 {
   "id": 8943,
   "word": "BOLDLY",
   "pronunciations": "ˈboʊldli"
 },
 {
   "id": 8944,
   "word": "BOMBER",
   "pronunciations": "ˈbɑːmɝ"
 },
 {
   "id": 8945,
   "word": "BOOM",
   "pronunciations": "ˈbuːm"
 },
 {
   "id": 8946,
   "word": "BORNE",
   "pronunciations": "ˈbɔrn"
 },
 {
   "id": 8947,
   "word": "BORROWING",
   "pronunciations": "ˈbɑːroʊɪŋ"
 },
 {
   "id": 8948,
   "word": "BOSOM",
   "pronunciations": "ˈbʊzəm"
 },
 {
   "id": 8949,
   "word": "BOTTOMS",
   "pronunciations": "ˈbɑːtəmz"
 },
 {
   "id": 8950,
   "word": "BOUNCE",
   "pronunciations": "ˈbaʊns"
 },
 {
   "id": 8951,
   "word": "BOURBON",
   "pronunciations": "ˈbɝːbən"
 },
 {
   "id": 8952,
   "word": "BOYCOTT",
   "pronunciations": "ˈbɔɪˌkɑːt"
 },
 {
   "id": 8953,
   "word": "BRANDON",
   "pronunciations": "ˈbrændən"
 },
 {
   "id": 8954,
   "word": "BRAZIL",
   "pronunciations": "brəˈzɪl"
 },
 {
   "id": 8955,
   "word": "BRETHREN",
   "pronunciations": "ˈbrɛðrən"
 },
 {
   "id": 8956,
   "word": "BRIGHTER",
   "pronunciations": "ˈbraɪtɝ"
 },
 {
   "id": 8957,
   "word": "BROADEN",
   "pronunciations": "ˈbrɔdən"
 },
 {
   "id": 8958,
   "word": "BRUISES",
   "pronunciations": "ˈbruːzəz, ˈbruːzɪz"
 },
 {
   "id": 8959,
   "word": "BUDAPEST",
   "pronunciations": "ˈbuːdəˌpɛst, ˈbuːdəˌpɛʃt"
 },
 {
   "id": 8960,
   "word": "BUDDHA",
   "pronunciations": "ˈbuːdə"
 },
 {
   "id": 8961,
   "word": "BUGS",
   "pronunciations": "ˈbʌgz"
 },
 {
   "id": 8962,
   "word": "BUNS",
   "pronunciations": "ˈbʌnz"
 },
 {
   "id": 8963,
   "word": "BUSILY",
   "pronunciations": "ˈbɪzəli"
 },
 {
   "id": 8964,
   "word": "BUTCHER",
   "pronunciations": "ˈbʊtʃɝ"
 },
 {
   "id": 8965,
   "word": "CALIBER",
   "pronunciations": "ˈkæləbɝ"
 },
 {
   "id": 8966,
   "word": "CANVASES",
   "pronunciations": "ˈkænvəsɪz"
 },
 {
   "id": 8967,
   "word": "CAPILLARY",
   "pronunciations": "ˈkæpəˌlɛri"
 },
 {
   "id": 8968,
   "word": "CARAVAN",
   "pronunciations": "ˈkærəˌvæn, ˈkɛrəˌvæn"
 },
 {
   "id": 8969,
   "word": "CARDINALS",
   "pronunciations": "ˈkɑːrdɪnəlz"
 },
 {
   "id": 8970,
   "word": "CARELESS",
   "pronunciations": "ˈkɛrlɛs"
 },
 {
   "id": 8971,
   "word": "CARNEGIE",
   "pronunciations": "ˈkɑːrnɛgi, ˌkɑːrˈneɪgi"
 },
 {
   "id": 8972,
   "word": "CATALOGUE",
   "pronunciations": "ˈkætəˌlɔg"
 },
 {
   "id": 8973,
   "word": "CATHEDRAL",
   "pronunciations": "kəˈθiːdrəl"
 },
 {
   "id": 8974,
   "word": "CATHOLICISM",
   "pronunciations": "kəˈθɔləˌsɪzəm"
 },
 {
   "id": 8975,
   "word": "CD",
   "pronunciations": "ˈsiːˈdiː"
 },
 {
   "id": 8976,
   "word": "CELESTIAL",
   "pronunciations": "səˈlɛstʃəl"
 },
 {
   "id": 8977,
   "word": "CENTIMETERS",
   "pronunciations": "ˈsɛntəˌmiːtɝz"
 },
 {
   "id": 8978,
   "word": "CEREBRAL",
   "pronunciations": "ˈsɛrəbrəl, sɝˈiːbrəl"
 },
 {
   "id": 8979,
   "word": "CHAMPIONSHIP",
   "pronunciations": "ˈtʃæmpiːənˌʃɪp"
 },
 {
   "id": 8980,
   "word": "CHARACTERIZATION",
   "pronunciations": "ˌkɛrɪktɝɪˈzeɪʃən"
 },
 {
   "id": 8981,
   "word": "CHARGING",
   "pronunciations": "ˈtʃɑːrdʒɪŋ"
 },
 {
   "id": 8982,
   "word": "CHARITY",
   "pronunciations": "ˈtʃɛrɪti"
 },
 {
   "id": 8983,
   "word": "CHARLEY",
   "pronunciations": "ˈtʃɑːrli"
 },
 {
   "id": 8984,
   "word": "CHEER",
   "pronunciations": "ˈtʃɪr"
 },
 {
   "id": 8985,
   "word": "CHOIR",
   "pronunciations": "ˈkwaɪɝ"
 },
 {
   "id": 8986,
   "word": "CHOOSES",
   "pronunciations": "ˈtʃuːzəz, ˈtʃuːzɪz"
 },
 {
   "id": 8987,
   "word": "CHUCKLED",
   "pronunciations": "ˈtʃʌkəld"
 },
 {
   "id": 8988,
   "word": "CHURCH'S",
   "pronunciations": "ˈtʃɝːtʃəz"
 },
 {
   "id": 8989,
   "word": "CHURCHYARD",
   "pronunciations": "ˈtʃɝːtʃˌjɑːrd"
 },
 {
   "id": 8990,
   "word": "CLAIMANT",
   "pronunciations": "ˈkleɪmənt"
 },
 {
   "id": 8991,
   "word": "CLAMPED",
   "pronunciations": "ˈklæmpt"
 },
 {
   "id": 8992,
   "word": "CLARENCE",
   "pronunciations": "ˈklɛrəns"
 },
 {
   "id": 8993,
   "word": "CLARIFIED",
   "pronunciations": "ˈklɛrəˌfaɪd"
 },
 {
   "id": 8994,
   "word": "CLEANERS",
   "pronunciations": "ˈkliːnɝz"
 },
 {
   "id": 8995,
   "word": "CLICKED",
   "pronunciations": "ˈklɪkt"
 },
 {
   "id": 8996,
   "word": "CLOCKS",
   "pronunciations": "ˈklɑːks"
 },
 {
   "id": 8997,
   "word": "CLUTCHING",
   "pronunciations": "ˈklʌtʃɪŋ"
 },
 {
   "id": 8998,
   "word": "COALS",
   "pronunciations": "ˈkoʊlz"
 },
 {
   "id": 8999,
   "word": "COLDLY",
   "pronunciations": "ˈkoʊldli"
 },
 {
   "id": 9000,
   "word": "COLLECTIONS",
   "pronunciations": "kəˈlɛkʃənz"
 },
 {
   "id": 9001,
   "word": "COLLECTOR",
   "pronunciations": "kəˈlɛktɝ"
 },
 {
   "id": 9002,
   "word": "COLTS",
   "pronunciations": "ˈkoʊlts"
 },
 {
   "id": 9003,
   "word": "COMFORTING",
   "pronunciations": "ˈkʌmfɝtɪŋ"
 },
 {
   "id": 9004,
   "word": "COMMENCING",
   "pronunciations": "kəˈmɛnsɪŋ"
 },
 {
   "id": 9005,
   "word": "COMMENTARY",
   "pronunciations": "ˈkɑːmənˌtɛri"
 },
 {
   "id": 9006,
   "word": "COMPANIONS",
   "pronunciations": "kəmˈpænjənz"
 },
 {
   "id": 9007,
   "word": "COMPELLING",
   "pronunciations": "kəmˈpɛlɪŋ"
 },
 {
   "id": 9008,
   "word": "COMPLAINTS",
   "pronunciations": "kəmˈpleɪnts"
 },
 {
   "id": 9009,
   "word": "COMPOST",
   "pronunciations": "ˈkɑːmpoʊst"
 },
 {
   "id": 9010,
   "word": "COMPRESSION",
   "pronunciations": "kəmˈprɛʃən"
 },
 {
   "id": 9011,
   "word": "COMPRISED",
   "pronunciations": "kəmˈpraɪzd"
 },
 {
   "id": 9012,
   "word": "COMPULSION",
   "pronunciations": "kəmˈpʌlʃən"
 },
 {
   "id": 9013,
   "word": "CONCEALED",
   "pronunciations": "kənˈsiːld"
 },
 {
   "id": 9014,
   "word": "CONCEDE",
   "pronunciations": "kənˈsiːd"
 },
 {
   "id": 9015,
   "word": "CONCLUDING",
   "pronunciations": "kənˈkluːdɪŋ"
 },
 {
   "id": 9016,
   "word": "CONFIDED",
   "pronunciations": "kənˈfaɪdɪd"
 },
 {
   "id": 9017,
   "word": "CONFLICTING",
   "pronunciations": "kənˈflɪktɪŋ"
 },
 {
   "id": 9018,
   "word": "CONFRONT",
   "pronunciations": "kənˈfrʌnt"
 },
 {
   "id": 9019,
   "word": "CONNALLY",
   "pronunciations": "ˈkɑːnəli"
 },
 {
   "id": 9020,
   "word": "CONSPICUOUSLY",
   "pronunciations": "kənˈspɪkjuːəsli"
 },
 {
   "id": 9021,
   "word": "CONSTANTINE",
   "pronunciations": "ˈkɑːnstənˌtiːn, ˈkɑːnstənˌtaɪn"
 },
 {
   "id": 9022,
   "word": "CONTENTED",
   "pronunciations": "kənˈtɛntəd, kənˈtɛntɪd"
 },
 {
   "id": 9023,
   "word": "CONTESTS",
   "pronunciations": "ˈkɑːntɛsts, kənˈtɛsts, ˈkɑːntɛs, kənˈtɛs"
 },
 {
   "id": 9024,
   "word": "CONTRACTED",
   "pronunciations": "ˈkɑːntræktəd"
 },
 {
   "id": 9025,
   "word": "COOKS",
   "pronunciations": "ˈkʊks"
 },
 {
   "id": 9026,
   "word": "COPERNICAN",
   "pronunciations": "kəˈpɝːnəkən"
 },
 {
   "id": 9027,
   "word": "COPING",
   "pronunciations": "ˈkoʊpɪŋ"
 },
 {
   "id": 9028,
   "word": "CORRUPT",
   "pronunciations": "kɝˈʌpt"
 },
 {
   "id": 9029,
   "word": "COUNTERS",
   "pronunciations": "ˈkaʊntɝz"
 },
 {
   "id": 9030,
   "word": "COURT'S",
   "pronunciations": "ˈkɔrts"
 },
 {
   "id": 9031,
   "word": "COURTYARD",
   "pronunciations": "ˈkɔrtˌjɑːrd"
 },
 {
   "id": 9032,
   "word": "COWARD",
   "pronunciations": "ˈkaʊɝd"
 },
 {
   "id": 9033,
   "word": "CRAWLING",
   "pronunciations": "ˈkrɔlɪŋ"
 },
 {
   "id": 9034,
   "word": "CREDO",
   "pronunciations": "ˈkreɪdoʊ, ˈkriːdoʊ"
 },
 {
   "id": 9035,
   "word": "CREED",
   "pronunciations": "ˈkriːd"
 },
 {
   "id": 9036,
   "word": "CREEPING",
   "pronunciations": "ˈkriːpɪŋ"
 },
 {
   "id": 9037,
   "word": "CRIMSON",
   "pronunciations": "ˈkrɪmzən"
 },
 {
   "id": 9038,
   "word": "CRISP",
   "pronunciations": "ˈkrɪsp"
 },
 {
   "id": 9039,
   "word": "CRUSADE",
   "pronunciations": "kruːˈseɪd"
 },
 {
   "id": 9040,
   "word": "CRUZ",
   "pronunciations": "ˈkruːz"
 },
 {
   "id": 9041,
   "word": "CRYSTALS",
   "pronunciations": "ˈkrɪstəlz"
 },
 {
   "id": 9042,
   "word": "CURSING",
   "pronunciations": "ˈkɝːsɪŋ"
 },
 {
   "id": 9043,
   "word": "CURT'S",
   "pronunciations": "ˈkɝːts"
 },
 {
   "id": 9044,
   "word": "CURTAINS",
   "pronunciations": "ˈkɝːtənz"
 },
 {
   "id": 9045,
   "word": "CUSHION",
   "pronunciations": "ˈkʊʃən"
 },
 {
   "id": 9046,
   "word": "CYCLIST",
   "pronunciations": "ˈsaɪkəlɪst, ˈsaɪklɪst"
 },
 {
   "id": 9047,
   "word": "DANISH",
   "pronunciations": "ˈdeɪnɪʃ"
 },
 {
   "id": 9048,
   "word": "DASHED",
   "pronunciations": "ˈdæʃt"
 },
 {
   "id": 9049,
   "word": "DEATHS",
   "pronunciations": "ˈdɛθs"
 },
 {
   "id": 9050,
   "word": "DEBRIS",
   "pronunciations": "dəˈbriː"
 },
 {
   "id": 9051,
   "word": "DECLARE",
   "pronunciations": "dɪˈklɛr"
 },
 {
   "id": 9052,
   "word": "DECORATION",
   "pronunciations": "ˌdɛkɝˈeɪʃən"
 },
 {
   "id": 9053,
   "word": "DECORATIONS",
   "pronunciations": "ˌdɛkɝˈeɪʃənz"
 },
 {
   "id": 9054,
   "word": "DECORATIVE",
   "pronunciations": "ˈdɛkrətɪv"
 },
 {
   "id": 9055,
   "word": "DECREASED",
   "pronunciations": "dɪˈkriːst, ˈdiːˌkriːst"
 },
 {
   "id": 9056,
   "word": "DECREASES",
   "pronunciations": "dɪˈkriːsəz, dɪˈkriːsɪz, ˈdiːˌkriːsɪz"
 },
 {
   "id": 9057,
   "word": "DEED",
   "pronunciations": "ˈdiːd"
 },
 {
   "id": 9058,
   "word": "DEEDS",
   "pronunciations": "ˈdiːdz"
 },
 {
   "id": 9059,
   "word": "DELEGATE",
   "pronunciations": "ˈdɛləˌgeɪt, ˈdɛləgət"
 },
 {
   "id": 9060,
   "word": "DENOMINATION",
   "pronunciations": "dɪˌnɔməˈneɪʃən"
 },
 {
   "id": 9061,
   "word": "DEPENDABLE",
   "pronunciations": "dɪˈpɛndəbəl"
 },
 {
   "id": 9062,
   "word": "DEPICTED",
   "pronunciations": "dɪˈpɪktəd, dɪˈpɪktɪd"
 },
 {
   "id": 9063,
   "word": "DEPRIVED",
   "pronunciations": "dɪˈpraɪvd"
 },
 {
   "id": 9064,
   "word": "DESCENDED",
   "pronunciations": "dɪˈsɛndəd, dɪˈsɛndɪd"
 },
 {
   "id": 9065,
   "word": "DETECTABLE",
   "pronunciations": "dɪˈtɛktəbəl"
 },
 {
   "id": 9066,
   "word": "DETERRENT",
   "pronunciations": "dɪˈtɝːrənt"
 },
 {
   "id": 9067,
   "word": "DEVISE",
   "pronunciations": "dɪˈvaɪz, dɪˈvaɪs"
 },
 {
   "id": 9068,
   "word": "DIAGRAMS",
   "pronunciations": "ˈdaɪəˌgræmz"
 },
 {
   "id": 9069,
   "word": "DIAMOND",
   "pronunciations": "ˈdaɪmənd"
 },
 {
   "id": 9070,
   "word": "DIFFERENTIATION",
   "pronunciations": "dɪfɝˌɛnʃiːˈeɪʃən, ˌdɪfɝˌɛntʃiːˈeɪʃən"
 },
 {
   "id": 9071,
   "word": "DIMINISHING",
   "pronunciations": "dɪˈmɪnɪʃɪŋ"
 },
 {
   "id": 9072,
   "word": "DIRECTIONAL",
   "pronunciations": "dɝˈɛkʃənəl, diːˈrɛkʃɪnəl, daɪˈrɛkʃɪnəl, dɪˈrɛkʃɪnəl"
 },
 {
   "id": 9073,
   "word": "DISAPPEARANCE",
   "pronunciations": "ˌdɪsəˈpɪrəns, ˌdɪsəˈpiːrəns"
 },
 {
   "id": 9074,
   "word": "DISCARDED",
   "pronunciations": "dɪˈskɑːrdɪd"
 },
 {
   "id": 9075,
   "word": "DISCERNIBLE",
   "pronunciations": "dɪˈsɝːnəbəl"
 },
 {
   "id": 9076,
   "word": "DISCONTENT",
   "pronunciations": "dɪskənˈtɛnt"
 },
 {
   "id": 9077,
   "word": "DISMAL",
   "pronunciations": "ˈdɪzməl"
 },
 {
   "id": 9078,
   "word": "DISPATCH",
   "pronunciations": "dɪˈspætʃ"
 },
 {
   "id": 9079,
   "word": "DISPELLED",
   "pronunciations": "dɪˈspɛld"
 },
 {
   "id": 9080,
   "word": "DISPUTES",
   "pronunciations": "dɪsˈpjuːts"
 },
 {
   "id": 9081,
   "word": "DISTASTE",
   "pronunciations": "dɪˈsteɪst"
 },
 {
   "id": 9082,
   "word": "DIVIDENDS",
   "pronunciations": "ˈdɪvɪˌdɛndz"
 },
 {
   "id": 9083,
   "word": "DIVORCED",
   "pronunciations": "dɪˈvɔrst"
 },
 {
   "id": 9084,
   "word": "DOCK",
   "pronunciations": "ˈdɑːk"
 },
 {
   "id": 9085,
   "word": "DOMES",
   "pronunciations": "ˈdoʊmz"
 },
 {
   "id": 9086,
   "word": "DOMINATE",
   "pronunciations": "ˈdɑːməˌneɪt"
 },
 {
   "id": 9087,
   "word": "DOMINION",
   "pronunciations": "dəˈmɪnjən"
 },
 {
   "id": 9088,
   "word": "DORSET",
   "pronunciations": "ˈdɔrsɪt"
 },
 {
   "id": 9089,
   "word": "DOWNRIGHT",
   "pronunciations": "ˈdaʊnˌraɪt"
 },
 {
   "id": 9090,
   "word": "DRAWER",
   "pronunciations": "ˈdrɔr"
 },
 {
   "id": 9091,
   "word": "DUNES",
   "pronunciations": "ˈduːnz"
 },
 {
   "id": 9092,
   "word": "DUPLICATION",
   "pronunciations": "dˌjuːpləˈkeɪʃən"
 },
 {
   "id": 9093,
   "word": "DWELL",
   "pronunciations": "ˈdwɛl"
 },
 {
   "id": 9094,
   "word": "EASED",
   "pronunciations": "ˈiːzd"
 },
 {
   "id": 9095,
   "word": "ECHOES",
   "pronunciations": "ˈɛkoʊz"
 },
 {
   "id": 9096,
   "word": "EFFICIENTLY",
   "pronunciations": "ɪˈfɪʃəntli"
 },
 {
   "id": 9097,
   "word": "EH",
   "pronunciations": "ˈɛ"
 },
 {
   "id": 9098,
   "word": "ELECT",
   "pronunciations": "ɪˈlɛkt"
 },
 {
   "id": 9099,
   "word": "EMBARRASSED",
   "pronunciations": "ɪmˈbɛrəst"
 },
 {
   "id": 9100,
   "word": "EMBARRASSMENT",
   "pronunciations": "ɪmˈbɛrəsmənt"
 },
 {
   "id": 9101,
   "word": "EMERSON",
   "pronunciations": "ˈɛmɝsən"
 },
 {
   "id": 9102,
   "word": "EMPTIED",
   "pronunciations": "ˈɛmptiːd, ˈɛmtiːd"
 },
 {
   "id": 9103,
   "word": "ENCOUNTERS",
   "pronunciations": "ɪnˈkaʊntɝz, ɪnˈkaʊnɝz"
 },
 {
   "id": 9104,
   "word": "ENDURE",
   "pronunciations": "ɛndˈjʊr, ɪnˈdʊr"
 },
 {
   "id": 9105,
   "word": "ENEMY'S",
   "pronunciations": "ˈɛnəmiːz"
 },
 {
   "id": 9106,
   "word": "ENGAGEMENTS",
   "pronunciations": "ɪnˈgeɪdʒmənts"
 },
 {
   "id": 9107,
   "word": "ENGAGING",
   "pronunciations": "ɪnˈgeɪdʒɪŋ"
 },
 {
   "id": 9108,
   "word": "ENGLISHMEN",
   "pronunciations": "ˌɛŋˈlɪʃmən"
 },
 {
   "id": 9109,
   "word": "ENSURE",
   "pronunciations": "ɛnˈʃʊr, ɪnˈʃʊr"
 },
 {
   "id": 9110,
   "word": "ENTAILS",
   "pronunciations": "ɪnˈteɪlz"
 },
 {
   "id": 9111,
   "word": "EQUALS",
   "pronunciations": "ˈiːkwəlz"
 },
 {
   "id": 9112,
   "word": "EQUATE",
   "pronunciations": "ɪˈkweɪt"
 },
 {
   "id": 9113,
   "word": "EQUIVALENTS",
   "pronunciations": "ɪˈkwɪvələnts"
 },
 {
   "id": 9114,
   "word": "EROTIC",
   "pronunciations": "ɪˈrɑːtɪk"
 },
 {
   "id": 9115,
   "word": "ESSAYS",
   "pronunciations": "ɛˈseɪz, ˈɛˌseɪz"
 },
 {
   "id": 9116,
   "word": "ESTABLISHMENTS",
   "pronunciations": "ɛˈstæblɪʃmənts"
 },
 {
   "id": 9117,
   "word": "EVERLASTING",
   "pronunciations": "ˌɛvɝˈlæstɪŋ"
 },
 {
   "id": 9118,
   "word": "EVOLVED",
   "pronunciations": "ɪˈvɑːlvd, iːˈvɑːlvd"
 },
 {
   "id": 9119,
   "word": "EXAGGERATE",
   "pronunciations": "ɪgˈzædʒɝˌeɪt"
 },
 {
   "id": 9120,
   "word": "EXAMINATIONS",
   "pronunciations": "ɪgˌzæməˈneɪʃənz"
 },
 {
   "id": 9121,
   "word": "EXCEEDINGLY",
   "pronunciations": "ɪkˈsiːdɪŋli"
 },
 {
   "id": 9122,
   "word": "EXCEPTIONALLY",
   "pronunciations": "ɪkˈsɛpʃənəli, ɪkˈsɛpʃnəli"
 },
 {
   "id": 9123,
   "word": "EXCLUDED",
   "pronunciations": "ɪksˈkluːdəd, ɪksˈkluːdɪd"
 },
 {
   "id": 9124,
   "word": "EXEMPTION",
   "pronunciations": "ɪgˈzɛmpʃən"
 },
 {
   "id": 9125,
   "word": "EXPERIMENTALLY",
   "pronunciations": "ɪkˌspɛrəˈmɛntəli"
 },
 {
   "id": 9126,
   "word": "EXPLODED",
   "pronunciations": "ɪkˈsploʊdəd, ɪkˈsploʊdɪd"
 },
 {
   "id": 9127,
   "word": "EXPOSE",
   "pronunciations": "ɪkˈspoʊz"
 },
 {
   "id": 9128,
   "word": "EXTENSIONS",
   "pronunciations": "ɪkˈstɛnʃənz"
 },
 {
   "id": 9129,
   "word": "EXTERIOR",
   "pronunciations": "ɪkˈstɪriːɝ"
 },
 {
   "id": 9130,
   "word": "FABRICATION",
   "pronunciations": "ˌfæbrɪˈkeɪʃən"
 },
 {
   "id": 9131,
   "word": "FARMHOUSE",
   "pronunciations": "ˈfɑːrmˌhaʊs"
 },
 {
   "id": 9132,
   "word": "FAULTY",
   "pronunciations": "ˈfɔlti"
 },
 {
   "id": 9133,
   "word": "FBI",
   "pronunciations": "ˈɛfˈbiːˈaɪ"
 },
 {
   "id": 9134,
   "word": "FEATURED",
   "pronunciations": "ˈfiːtʃɝd"
 },
 {
   "id": 9135,
   "word": "FEEBLE",
   "pronunciations": "ˈfiːbəl"
 },
 {
   "id": 9136,
   "word": "FESTIVITIES",
   "pronunciations": "fɛˈstɪvətiːz"
 },
 {
   "id": 9137,
   "word": "FIDELITY",
   "pronunciations": "fəˈdɛləti, ˌfaɪˈdɛləti"
 },
 {
   "id": 9138,
   "word": "FIERCE",
   "pronunciations": "ˈfɪrs"
 },
 {
   "id": 9139,
   "word": "FINANCIALLY",
   "pronunciations": "fəˈnænʃəli, fɪˈnænʃəli, ˌfaɪˈnænʃəli"
 },
 {
   "id": 9140,
   "word": "FITNESS",
   "pronunciations": "ˈfɪtnəs"
 },
 {
   "id": 9141,
   "word": "FLAIR",
   "pronunciations": "ˈflɛr"
 },
 {
   "id": 9142,
   "word": "FLASHLIGHT",
   "pronunciations": "ˈflæˌʃlaɪt"
 },
 {
   "id": 9143,
   "word": "FLATNESS",
   "pronunciations": "ˈflætnəs"
 },
 {
   "id": 9144,
   "word": "FLOUR",
   "pronunciations": "ˈflaʊɝ, ˈflaʊr"
 },
 {
   "id": 9145,
   "word": "FLU",
   "pronunciations": "ˈfluː"
 },
 {
   "id": 9146,
   "word": "FOCAL",
   "pronunciations": "ˈfoʊkəl"
 },
 {
   "id": 9147,
   "word": "FOE",
   "pronunciations": "ˈfoʊ"
 },
 {
   "id": 9148,
   "word": "FOLLOW-UP",
   "pronunciations": "ˈfɑːloʊˌəp"
 },
 {
   "id": 9149,
   "word": "FOOTSTEPS",
   "pronunciations": "ˈfʊtˌstɛps"
 },
 {
   "id": 9150,
   "word": "FORCEFUL",
   "pronunciations": "ˈfɔrsfəl"
 },
 {
   "id": 9151,
   "word": "FORESEEN",
   "pronunciations": "ˌfɔrˈsiːn"
 },
 {
   "id": 9152,
   "word": "FRAIL",
   "pronunciations": "ˈfreɪl"
 },
 {
   "id": 9153,
   "word": "FRANCESCA",
   "pronunciations": "frænˈtʃɛskə"
 },
 {
   "id": 9154,
   "word": "FRANKS",
   "pronunciations": "ˈfræŋks"
 },
 {
   "id": 9155,
   "word": "FRANTICALLY",
   "pronunciations": "ˈfræntəkəli, ˈfræntəkli, ˈfrænəkəli, ˈfrænəkli"
 },
 {
   "id": 9156,
   "word": "FRAUD",
   "pronunciations": "ˈfrɔd"
 },
 {
   "id": 9157,
   "word": "FRENCHMAN",
   "pronunciations": "ˈfrɛntʃmæn"
 },
 {
   "id": 9158,
   "word": "FRESCO",
   "pronunciations": "ˈfrɛskoʊ"
 },
 {
   "id": 9159,
   "word": "FRESHMAN",
   "pronunciations": "ˈfrɛʃmən"
 },
 {
   "id": 9160,
   "word": "FROWNED",
   "pronunciations": "ˈfraʊnd"
 },
 {
   "id": 9161,
   "word": "FULLER",
   "pronunciations": "ˈfʊlɝ"
 },
 {
   "id": 9162,
   "word": "FURIOUS",
   "pronunciations": "ˈfjʊriːəs"
 },
 {
   "id": 9163,
   "word": "GAIT",
   "pronunciations": "ˈgeɪt"
 },
 {
   "id": 9164,
   "word": "GAZING",
   "pronunciations": "ˈgeɪzɪŋ"
 },
 {
   "id": 9165,
   "word": "GENEROUSLY",
   "pronunciations": "ˈdʒɛnɝəsli"
 },
 {
   "id": 9166,
   "word": "GEOLOGICAL",
   "pronunciations": "ˌdʒiːəˈlɑːdʒɪkəl"
 },
 {
   "id": 9167,
   "word": "GIBSON",
   "pronunciations": "ˈgɪbsən"
 },
 {
   "id": 9168,
   "word": "GLANCING",
   "pronunciations": "ˈglænsɪŋ"
 },
 {
   "id": 9169,
   "word": "GLUE",
   "pronunciations": "ˈgluː"
 },
 {
   "id": 9170,
   "word": "GOIN'",
   "pronunciations": "ˈgoʊən"
 },
 {
   "id": 9171,
   "word": "GOVERNORS",
   "pronunciations": "ˈgʌvɝnɝz"
 },
 {
   "id": 9172,
   "word": "GRACEFULLY",
   "pronunciations": "ˈgreɪsfəli"
 },
 {
   "id": 9173,
   "word": "GRANTING",
   "pronunciations": "ˈgræntɪŋ, ˈgrænɪŋ"
 },
 {
   "id": 9174,
   "word": "GREASY",
   "pronunciations": "ˈgriːsi"
 },
 {
   "id": 9175,
   "word": "GRINDING",
   "pronunciations": "ˈgraɪndɪŋ"
 },
 {
   "id": 9176,
   "word": "GUARANTEES",
   "pronunciations": "ˌgɛrənˈtiːz"
 },
 {
   "id": 9177,
   "word": "GUESSING",
   "pronunciations": "ˈgɛsɪŋ"
 },
 {
   "id": 9178,
   "word": "GUIDEPOSTS",
   "pronunciations": "ˈgaɪdˌpoʊsts"
 },
 {
   "id": 9179,
   "word": "HALF-HOUR",
   "pronunciations": "ˈhæˌfaʊɝ"
 },
 {
   "id": 9180,
   "word": "HAMRICK",
   "pronunciations": "ˈhæmrɪk"
 },
 {
   "id": 9181,
   "word": "HAUNTED",
   "pronunciations": "ˈhɔntəd, ˈhɔntɪd"
 },
 {
   "id": 9182,
   "word": "HAUNTING",
   "pronunciations": "ˈhɔntɪŋ"
 },
 {
   "id": 9183,
   "word": "HEADLIGHTS",
   "pronunciations": "ˈhɛdˌlaɪts"
 },
 {
   "id": 9184,
   "word": "HEARINGS",
   "pronunciations": "ˈhiːrɪŋz"
 },
 {
   "id": 9185,
   "word": "HEED",
   "pronunciations": "ˈhiːd"
 },
 {
   "id": 9186,
   "word": "HEMPHILL",
   "pronunciations": "ˈhɛmpˌhɪl"
 },
 {
   "id": 9187,
   "word": "HERB",
   "pronunciations": "ˈɝːb, ˈhɝːb"
 },
 {
   "id": 9188,
   "word": "HEREBY",
   "pronunciations": "hɪrˈbaɪ"
 },
 {
   "id": 9189,
   "word": "HERETOFORE",
   "pronunciations": "ˌhɪrtəˈfɔr"
 },
 {
   "id": 9190,
   "word": "HIPS",
   "pronunciations": "ˈhɪps"
 },
 {
   "id": 9191,
   "word": "HITLER",
   "pronunciations": "ˈhɪtlɝ"
 },
 {
   "id": 9192,
   "word": "HOLLAND",
   "pronunciations": "ˈhɑːlənd"
 },
 {
   "id": 9193,
   "word": "HOMOGENEOUS",
   "pronunciations": "ˌhoʊməˈdʒiːniːəs"
 },
 {
   "id": 9194,
   "word": "HONORING",
   "pronunciations": "ˈɑːnɝɪŋ"
 },
 {
   "id": 9195,
   "word": "HOOVER",
   "pronunciations": "ˈhuːvɝ"
 },
 {
   "id": 9196,
   "word": "HOPEFULLY",
   "pronunciations": "ˈhoʊpfəli"
 },
 {
   "id": 9197,
   "word": "HORNS",
   "pronunciations": "ˈhɔrnz"
 },
 {
   "id": 9198,
   "word": "HOSTESS",
   "pronunciations": "ˈhoʊstəs"
 },
 {
   "id": 9199,
   "word": "HUGH",
   "pronunciations": "ˈhjuː, ˈjuː"
 },
 {
   "id": 9200,
   "word": "HUMIDITY",
   "pronunciations": "hjuːˈmɪdəti"
 },
 {
   "id": 9201,
   "word": "HURRICANE",
   "pronunciations": "ˈhɝːəˌkeɪn, ˈhʌrəˌkeɪnz"
 },
 {
   "id": 9202,
   "word": "HYPOTHETICAL",
   "pronunciations": "ˌhaɪpəˈθɛtəkəl, ˌhaɪpəˈθɛtɪkəl"
 },
 {
   "id": 9203,
   "word": "ILLITERATE",
   "pronunciations": "ˌɪˈlɪtɝət"
 },
 {
   "id": 9204,
   "word": "IMMEDIACY",
   "pronunciations": "ˌɪˈmiːˌdiːəsi"
 },
 {
   "id": 9205,
   "word": "IMPARTIAL",
   "pronunciations": "ˌɪmˈpɑːrʃəl"
 },
 {
   "id": 9206,
   "word": "IMPASSIONED",
   "pronunciations": "ˌɪmˈpæʃənd"
 },
 {
   "id": 9207,
   "word": "IMPLEMENTATION",
   "pronunciations": "ˌɪmpləmɛnˈteɪʃən"
 },
 {
   "id": 9208,
   "word": "IMPORTANTLY",
   "pronunciations": "ˌɪmˈpɔrtəntli"
 },
 {
   "id": 9209,
   "word": "IMPORTED",
   "pronunciations": "ˌɪmˈpɔrtɪd"
 },
 {
   "id": 9210,
   "word": "INAUGURAL",
   "pronunciations": "ˌɪˈnɔgɝəl, ˌɪˈnɔgjɝəl"
 },
 {
   "id": 9211,
   "word": "INAUGURATION",
   "pronunciations": "ˌɪˌnɔgjəˈreɪʃən"
 },
 {
   "id": 9212,
   "word": "INCLINATION",
   "pronunciations": "ˌɪnkləˈneɪʃən"
 },
 {
   "id": 9213,
   "word": "INDEFINITE",
   "pronunciations": "ˌɪnˈdɛfənət"
 },
 {
   "id": 9214,
   "word": "INDICATOR",
   "pronunciations": "ˈɪndəˌkeɪtɝ"
 },
 {
   "id": 9215,
   "word": "INESCAPABLE",
   "pronunciations": "ˌɪnɪˈskeɪpəbəl"
 },
 {
   "id": 9216,
   "word": "INFECTION",
   "pronunciations": "ˌɪnˈfɛkʃən"
 },
 {
   "id": 9217,
   "word": "INHIBIT",
   "pronunciations": "ˌɪnˈhɪbət"
 },
 {
   "id": 9218,
   "word": "INSISTENT",
   "pronunciations": "ˌɪnˈsɪstənt"
 },
 {
   "id": 9219,
   "word": "INSPIRING",
   "pronunciations": "ˌɪnˈspaɪrɪŋ, ˌɪnˈspaɪɝɪŋ"
 },
 {
   "id": 9220,
   "word": "INSTALL",
   "pronunciations": "ˌɪnˈstɔl"
 },
 {
   "id": 9221,
   "word": "INSTRUCTOR",
   "pronunciations": "ˌɪnˈstrʌktɝ"
 },
 {
   "id": 9222,
   "word": "INTENSIFICATION",
   "pronunciations": "ˌɪnˌtɛnsɪfəˈkeɪʃən"
 },
 {
   "id": 9223,
   "word": "INTERDEPENDENT",
   "pronunciations": "ˌɪntɝdɪˈpɛndənt"
 },
 {
   "id": 9224,
   "word": "INTERPRETER",
   "pronunciations": "ˌɪnˈtɝːprətɝ"
 },
 {
   "id": 9225,
   "word": "INTERRUPTION",
   "pronunciations": "ˌɪntɝˈʌpʃən"
 },
 {
   "id": 9226,
   "word": "INTONATION",
   "pronunciations": "ˌɪntəˈneɪʃən"
 },
 {
   "id": 9227,
   "word": "INVESTIGATING",
   "pronunciations": "ˌɪnˈvɛstəˌgeɪtɪŋ"
 },
 {
   "id": 9228,
   "word": "INVISIBLE",
   "pronunciations": "ˌɪnˈvɪzəbəl"
 },
 {
   "id": 9229,
   "word": "INVITING",
   "pronunciations": "ˌɪnˈvaɪtɪŋ"
 },
 {
   "id": 9230,
   "word": "IODIDE",
   "pronunciations": "ˈaɪəˌdaɪd"
 },
 {
   "id": 9231,
   "word": "IONIC",
   "pronunciations": "ˌaɪˈɑːnɪk"
 },
 {
   "id": 9232,
   "word": "IRRATIONAL",
   "pronunciations": "ˌɪˈræʃənəl"
 },
 {
   "id": 9233,
   "word": "IRREGULARITIES",
   "pronunciations": "ˌɪrɛgjəˈlɛrətiːz"
 },
 {
   "id": 9234,
   "word": "IRRESISTIBLE",
   "pronunciations": "ˌɪrɪˈzɪstəbəl"
 },
 {
   "id": 9235,
   "word": "ISOLATE",
   "pronunciations": "ˈaɪsəˌleɪt"
 },
 {
   "id": 9236,
   "word": "JACQUES",
   "pronunciations": "ˈʒɑːk, ˈdʒæk"
 },
 {
   "id": 9237,
   "word": "JAMMED",
   "pronunciations": "ˈdʒæmd"
 },
 {
   "id": 9238,
   "word": "JED",
   "pronunciations": "ˈdʒɛd"
 },
 {
   "id": 9239,
   "word": "JENNY",
   "pronunciations": "ˈdʒɛni"
 },
 {
   "id": 9240,
   "word": "JIG",
   "pronunciations": "ˈdʒɪg"
 },
 {
   "id": 9241,
   "word": "JUDY",
   "pronunciations": "ˈdʒuːdi"
 },
 {
   "id": 9242,
   "word": "JULIAN",
   "pronunciations": "ˈdʒuːliːən, ˈdʒuːljən"
 },
 {
   "id": 9243,
   "word": "JUNK",
   "pronunciations": "ˈdʒʌŋk"
 },
 {
   "id": 9244,
   "word": "KERN",
   "pronunciations": "ˈkɝːn"
 },
 {
   "id": 9245,
   "word": "KILLS",
   "pronunciations": "ˈkɪlz"
 },
 {
   "id": 9246,
   "word": "KILOMETER",
   "pronunciations": "kəˈlɑːmətɝ, ˈkɪləˌmiːtɝ"
 },
 {
   "id": 9247,
   "word": "KINDLY",
   "pronunciations": "ˈkaɪndli"
 },
 {
   "id": 9248,
   "word": "KINETIC",
   "pronunciations": "kəˈnɛtɪk, kɪˈnɛtɪk"
 },
 {
   "id": 9249,
   "word": "KNELT",
   "pronunciations": "ˈnɛlt"
 },
 {
   "id": 9250,
   "word": "KNIGHTS",
   "pronunciations": "ˈnaɪts"
 },
 {
   "id": 9251,
   "word": "KNITTED",
   "pronunciations": "ˈnɪtəd, ˈnɪtɪd"
 },
 {
   "id": 9252,
   "word": "KNOT",
   "pronunciations": "ˈnɑːt"
 },
 {
   "id": 9253,
   "word": "KNUCKLES",
   "pronunciations": "ˈnʌkəlz"
 },
 {
   "id": 9254,
   "word": "LAKES",
   "pronunciations": "ˈleɪks"
 },
 {
   "id": 9255,
   "word": "LB",
   "pronunciations": "ˈpaʊnd"
 },
 {
   "id": 9256,
   "word": "LEAGUES",
   "pronunciations": "ˈliːgz"
 },
 {
   "id": 9257,
   "word": "LIBERATED",
   "pronunciations": "ˈlɪˌbɝːˌeɪtɪd"
 },
 {
   "id": 9258,
   "word": "LIBERTIES",
   "pronunciations": "ˈlɪbɝˌtiːz"
 },
 {
   "id": 9259,
   "word": "LIFTING",
   "pronunciations": "ˈlɪftɪŋ"
 },
 {
   "id": 9260,
   "word": "LOGS",
   "pronunciations": "ˈlɔgz"
 },
 {
   "id": 9261,
   "word": "LONE",
   "pronunciations": "ˈloʊn"
 },
 {
   "id": 9262,
   "word": "LOTION",
   "pronunciations": "ˈloʊʃən"
 },
 {
   "id": 9263,
   "word": "LUCIA",
   "pronunciations": "ˈluːʃə"
 },
 {
   "id": 9264,
   "word": "MACKLIN",
   "pronunciations": "ˈmæklɪn"
 },
 {
   "id": 9265,
   "word": "MAGNETISM",
   "pronunciations": "ˈmægnəˌtɪzəm"
 },
 {
   "id": 9266,
   "word": "MAHOGANY",
   "pronunciations": "məˈhɑːgəni"
 },
 {
   "id": 9267,
   "word": "MAILING",
   "pronunciations": "ˈmeɪlɪŋ"
 },
 {
   "id": 9268,
   "word": "MAMMA",
   "pronunciations": "ˈmɑːmə"
 },
 {
   "id": 9269,
   "word": "MANAGING",
   "pronunciations": "ˈmænədʒɪŋ"
 },
 {
   "id": 9270,
   "word": "MANEUVERS",
   "pronunciations": "məˈnuːvɝz"
 },
 {
   "id": 9271,
   "word": "MANSION",
   "pronunciations": "ˈmænʃən"
 },
 {
   "id": 9272,
   "word": "MANUSCRIPT",
   "pronunciations": "ˈmænjəˌskrɪpt"
 },
 {
   "id": 9273,
   "word": "MARCHES",
   "pronunciations": "ˈmɑːrtʃɪz"
 },
 {
   "id": 9274,
   "word": "MARTYR",
   "pronunciations": "ˈmɑːrtɝ"
 },
 {
   "id": 9275,
   "word": "MARX",
   "pronunciations": "ˈmɑːrks"
 },
 {
   "id": 9276,
   "word": "MATING",
   "pronunciations": "ˈmeɪtɪŋ"
 },
 {
   "id": 9277,
   "word": "MATSON",
   "pronunciations": "ˈmɑːtsən"
 },
 {
   "id": 9278,
   "word": "MCCORMICK",
   "pronunciations": "məˈkɔrmɪk"
 },
 {
   "id": 9279,
   "word": "MEL",
   "pronunciations": "ˈmɛl"
 },
 {
   "id": 9280,
   "word": "MEMPHIS",
   "pronunciations": "ˈmɛmfəs, ˈmɛmfɪs, ˈmɛmpfəs, ˈmɛmpfɪs"
 },
 {
   "id": 9281,
   "word": "MENTIONING",
   "pronunciations": "ˈmɛnʃənɪŋ"
 },
 {
   "id": 9282,
   "word": "MERCHANDISING",
   "pronunciations": "ˈmɝːtʃənˌdaɪzɪŋ"
 },
 {
   "id": 9283,
   "word": "MERRY",
   "pronunciations": "ˈmɛri"
 },
 {
   "id": 9284,
   "word": "METROPOLIS",
   "pronunciations": "məˈtrɑːpələs"
 },
 {
   "id": 9285,
   "word": "MICROSCOPE",
   "pronunciations": "ˈmaɪkrəˌskoʊp"
 },
 {
   "id": 9286,
   "word": "MICROSCOPIC",
   "pronunciations": "ˌmaɪkrəˈskɑːpɪk"
 },
 {
   "id": 9287,
   "word": "MIDDLE-AGED",
   "pronunciations": "ˈmɪdəˌleɪgd"
 },
 {
   "id": 9288,
   "word": "MIDWAY",
   "pronunciations": "ˈmɪˌdweɪ"
 },
 {
   "id": 9289,
   "word": "MILITANT",
   "pronunciations": "ˈmɪlətənt"
 },
 {
   "id": 9290,
   "word": "MINGLED",
   "pronunciations": "ˈmɪŋgəld"
 },
 {
   "id": 9291,
   "word": "MINUS",
   "pronunciations": "ˈmaɪnəs"
 },
 {
   "id": 9292,
   "word": "MIRACLES",
   "pronunciations": "ˈmɪrəkəlz"
 },
 {
   "id": 9293,
   "word": "MOBILITY",
   "pronunciations": "moʊˈbɪləti, moʊˈbɪlɪti"
 },
 {
   "id": 9294,
   "word": "MOCK",
   "pronunciations": "ˈmɑːk"
 },
 {
   "id": 9295,
   "word": "MODES",
   "pronunciations": "ˈmoʊdz"
 },
 {
   "id": 9296,
   "word": "MOMENTOUS",
   "pronunciations": "moʊˈmɛntəs"
 },
 {
   "id": 9297,
   "word": "MONOTONOUS",
   "pronunciations": "məˈnɑːtənəs"
 },
 {
   "id": 9298,
   "word": "MONUMENTS",
   "pronunciations": "ˈmɑːnjəmənts, ˈmɑːnjuːmənts"
 },
 {
   "id": 9299,
   "word": "MOODS",
   "pronunciations": "ˈmuːdz"
 },
 {
   "id": 9300,
   "word": "MOTIF",
   "pronunciations": "moʊˈtiːf"
 },
 {
   "id": 9301,
   "word": "MOUNTS",
   "pronunciations": "ˈmaʊnts"
 },
 {
   "id": 9302,
   "word": "MOURNING",
   "pronunciations": "ˈmɔrnɪŋ"
 },
 {
   "id": 9303,
   "word": "MOUTHS",
   "pronunciations": "ˈmaʊðz"
 },
 {
   "id": 9304,
   "word": "MULTIPLICITY",
   "pronunciations": "ˌməltəˈplɪsɪti"
 },
 {
   "id": 9305,
   "word": "MULTIPLYING",
   "pronunciations": "ˈmʌltəˌplaɪɪŋ"
 },
 {
   "id": 9306,
   "word": "MURRAY",
   "pronunciations": "ˈmɝːi, ˈmʌri"
 },
 {
   "id": 9307,
   "word": "MUTTERING",
   "pronunciations": "ˈmʌtɝɪŋ"
 },
 {
   "id": 9308,
   "word": "MUTTON",
   "pronunciations": "ˈmʌtən"
 },
 {
   "id": 9309,
   "word": "NEGOTIATING",
   "pronunciations": "nɪˈgoʊʃiːˌeɪtɪŋ"
 },
 {
   "id": 9310,
   "word": "NEUTRALIST",
   "pronunciations": "ˈnuːtrələst"
 },
 {
   "id": 9311,
   "word": "NEWARK",
   "pronunciations": "ˈnuːɝk, nˈjuːɝk"
 },
 {
   "id": 9312,
   "word": "NEWT",
   "pronunciations": "ˈnuːt"
 },
 {
   "id": 9313,
   "word": "NIECE",
   "pronunciations": "ˈniːs"
 },
 {
   "id": 9314,
   "word": "NOEL",
   "pronunciations": "noʊˈɛl"
 },
 {
   "id": 9315,
   "word": "NOMINATED",
   "pronunciations": "ˈnɑːməˌneɪtəd"
 },
 {
   "id": 9316,
   "word": "NOSTALGIA",
   "pronunciations": "nɔˈstældʒə"
 },
 {
   "id": 9317,
   "word": "NOTIFY",
   "pronunciations": "ˈnoʊtəˌfaɪ"
 },
 {
   "id": 9318,
   "word": "NOTORIOUS",
   "pronunciations": "noʊˈtɔriːəs"
 },
 {
   "id": 9319,
   "word": "NUTRITION",
   "pronunciations": "nuːˈtrɪʃən"
 },
 {
   "id": 9320,
   "word": "OBEY",
   "pronunciations": "oʊˈbeɪ"
 },
 {
   "id": 9321,
   "word": "OBSERVES",
   "pronunciations": "əbˈzɝːvz"
 },
 {
   "id": 9322,
   "word": "ODORS",
   "pronunciations": "ˈoʊdɝz"
 },
 {
   "id": 9323,
   "word": "OFFENSE",
   "pronunciations": "əˈfɛns"
 },
 {
   "id": 9324,
   "word": "OFFENSIVE",
   "pronunciations": "əˈfɛnsɪv"
 },
 {
   "id": 9325,
   "word": "ONTOLOGICAL",
   "pronunciations": "ˌɑːntəˈlɑːdʒɪkəl"
 },
 {
   "id": 9326,
   "word": "ORGANIZING",
   "pronunciations": "ˈɔrgəˌnaɪzɪŋ"
 },
 {
   "id": 9327,
   "word": "OUTGOING",
   "pronunciations": "ˈaʊtˌgoʊɪŋ"
 },
 {
   "id": 9328,
   "word": "OUTSIDERS",
   "pronunciations": "aʊtˈsaɪdɝz"
 },
 {
   "id": 9329,
   "word": "OVAL",
   "pronunciations": "ˈoʊvəl"
 },
 {
   "id": 9330,
   "word": "OVERBOARD",
   "pronunciations": "ˈoʊvɝˌbɔrd"
 },
 {
   "id": 9331,
   "word": "OVERLY",
   "pronunciations": "ˈoʊvɝli"
 },
 {
   "id": 9332,
   "word": "OYSTERS",
   "pronunciations": "ˈɔɪstɝz"
 },
 {
   "id": 9333,
   "word": "PAD",
   "pronunciations": "ˈpæd"
 },
 {
   "id": 9334,
   "word": "PALMS",
   "pronunciations": "ˈpɑːmz, ˈpɑːlmz"
 },
 {
   "id": 9335,
   "word": "PAM",
   "pronunciations": "ˈpæm"
 },
 {
   "id": 9336,
   "word": "PARAMETERS",
   "pronunciations": "pɝˈæmətɝz"
 },
 {
   "id": 9337,
   "word": "PARASYMPATHETIC",
   "pronunciations": "ˌpɛrəˌsɪmpəˈθɛtɪk"
 },
 {
   "id": 9338,
   "word": "PARDON",
   "pronunciations": "ˈpɑːrdən"
 },
 {
   "id": 9339,
   "word": "PARLIAMENTARY",
   "pronunciations": "ˌpɑːrləˈmɛntɝi"
 },
 {
   "id": 9340,
   "word": "PATHETIC",
   "pronunciations": "pəˈθɛtɪk"
 },
 {
   "id": 9341,
   "word": "PEAKS",
   "pronunciations": "ˈpiːks"
 },
 {
   "id": 9342,
   "word": "PECULIARLY",
   "pronunciations": "pɪˈkjuːljɝli"
 },
 {
   "id": 9343,
   "word": "PEER",
   "pronunciations": "ˈpɪr"
 },
 {
   "id": 9344,
   "word": "PEERS",
   "pronunciations": "ˈpɪrz"
 },
 {
   "id": 9345,
   "word": "PENETRATED",
   "pronunciations": "ˈpɛnəˌtreɪtəd, ˈpɛnəˌtreɪtɪd"
 },
 {
   "id": 9346,
   "word": "PERIL",
   "pronunciations": "ˈpɛrəl"
 },
 {
   "id": 9347,
   "word": "PERILOUS",
   "pronunciations": "ˈpɛrələs"
 },
 {
   "id": 9348,
   "word": "PERIPHERAL",
   "pronunciations": "pɝˈɪfɝəl, pɝˈɪfrəl"
 },
 {
   "id": 9349,
   "word": "PERPETUAL",
   "pronunciations": "pɝˈpɛtʃuːəl"
 },
 {
   "id": 9350,
   "word": "PERRY",
   "pronunciations": "ˈpɛri"
 },
 {
   "id": 9351,
   "word": "PET",
   "pronunciations": "ˈpɛt"
 },
 {
   "id": 9352,
   "word": "PETERSON",
   "pronunciations": "ˈpiːtɝsən"
 },
 {
   "id": 9353,
   "word": "PETITIONS",
   "pronunciations": "pəˈtɪʃənz"
 },
 {
   "id": 9354,
   "word": "PETTY",
   "pronunciations": "ˈpɛˌtiː"
 },
 {
   "id": 9355,
   "word": "PH",
   "pronunciations": "ˈpiːˈeɪtʃ"
 },
 {
   "id": 9356,
   "word": "PHONEMIC",
   "pronunciations": "fəˈniːmɪk"
 },
 {
   "id": 9357,
   "word": "PIG",
   "pronunciations": "ˈpɪg"
 },
 {
   "id": 9358,
   "word": "PILLOW",
   "pronunciations": "ˈpɪloʊ"
 },
 {
   "id": 9359,
   "word": "PILLS",
   "pronunciations": "ˈpɪlz"
 },
 {
   "id": 9360,
   "word": "PILOTS",
   "pronunciations": "ˈpaɪləts"
 },
 {
   "id": 9361,
   "word": "PITCHED",
   "pronunciations": "ˈpɪtʃt"
 },
 {
   "id": 9362,
   "word": "PITCHERS",
   "pronunciations": "ˈpɪtʃɝz"
 },
 {
   "id": 9363,
   "word": "PLANKING",
   "pronunciations": "ˈplæŋkɪŋ"
 },
 {
   "id": 9364,
   "word": "PLOTS",
   "pronunciations": "ˈplɑːts"
 },
 {
   "id": 9365,
   "word": "POLLOCK",
   "pronunciations": "ˈpɑːlək"
 },
 {
   "id": 9366,
   "word": "POPULATIONS",
   "pronunciations": "ˌpɑːpjəˈleɪʃənz"
 },
 {
   "id": 9367,
   "word": "POSSESSES",
   "pronunciations": "pəˈzɛsəz, pəˈzɛsɪz"
 },
 {
   "id": 9368,
   "word": "POTTERS",
   "pronunciations": "ˈpɑːtɝz"
 },
 {
   "id": 9369,
   "word": "PRACTICED",
   "pronunciations": "ˈpræktɪst"
 },
 {
   "id": 9370,
   "word": "PREACH",
   "pronunciations": "ˈpriːtʃ"
 },
 {
   "id": 9371,
   "word": "PREACHED",
   "pronunciations": "ˈpriːtʃt"
 },
 {
   "id": 9372,
   "word": "PRECARIOUS",
   "pronunciations": "priːˈkɛriːəs"
 },
 {
   "id": 9373,
   "word": "PRECAUTION",
   "pronunciations": "priːˈkɔʃən"
 },
 {
   "id": 9374,
   "word": "PRECINCT",
   "pronunciations": "ˈpriːˌsɪŋkt, ˈpriːˌsɪŋk"
 },
 {
   "id": 9375,
   "word": "PREDICT",
   "pronunciations": "prɪˈdɪkt, priːˈdɪkt"
 },
 {
   "id": 9376,
   "word": "PREDICTABLE",
   "pronunciations": "prɪˈdɪktəbəl, priːˈdɪktəbəl"
 },
 {
   "id": 9377,
   "word": "PREGNANT",
   "pronunciations": "ˈprɛgnənt"
 },
 {
   "id": 9378,
   "word": "PREMISES",
   "pronunciations": "ˈprɛməsəz"
 },
 {
   "id": 9379,
   "word": "PRETEND",
   "pronunciations": "priːˈtɛnd"
 },
 {
   "id": 9380,
   "word": "PROFOUNDLY",
   "pronunciations": "proʊˈfaʊndli"
 },
 {
   "id": 9381,
   "word": "PROHIBITED",
   "pronunciations": "proʊˈhɪbətəd"
 },
 {
   "id": 9382,
   "word": "PROMINENTLY",
   "pronunciations": "ˈprɑːmənəntli"
 },
 {
   "id": 9383,
   "word": "PROPAGATION",
   "pronunciations": "ˌprɑːpəˈgeɪʃən"
 },
 {
   "id": 9384,
   "word": "PROSECUTOR",
   "pronunciations": "ˈprɑːsɪˌkjuːtɝ"
 },
 {
   "id": 9385,
   "word": "PROSPEROUS",
   "pronunciations": "ˈprɑːspɝəs"
 },
 {
   "id": 9386,
   "word": "PTOLEMY",
   "pronunciations": "ˈtɑːləmi"
 },
 {
   "id": 9387,
   "word": "PUMPING",
   "pronunciations": "ˈpʌmpɪŋ"
 },
 {
   "id": 9388,
   "word": "QUALIFICATION",
   "pronunciations": "ˌkwɑːləfəˈkeɪʃən"
 },
 {
   "id": 9389,
   "word": "RADIANT",
   "pronunciations": "ˈreɪˌdiːənt"
 },
 {
   "id": 9390,
   "word": "RADISH",
   "pronunciations": "ˈrædɪʃ"
 },
 {
   "id": 9391,
   "word": "RAGED",
   "pronunciations": "ˈreɪdʒd"
 },
 {
   "id": 9392,
   "word": "RAYBURN'S",
   "pronunciations": "ˈreɪˌbɝːnz"
 },
 {
   "id": 9393,
   "word": "REALISTICALLY",
   "pronunciations": "ˌriːəˈlɪstɪkli"
 },
 {
   "id": 9394,
   "word": "REASSURANCE",
   "pronunciations": "ˌriːəˈʃʊrəns"
 },
 {
   "id": 9395,
   "word": "RECIPE",
   "pronunciations": "ˈrɛsəpi"
 },
 {
   "id": 9396,
   "word": "RECIPROCAL",
   "pronunciations": "rɪˈsɪprəkəl"
 },
 {
   "id": 9397,
   "word": "RECITAL",
   "pronunciations": "rəˈsaɪtəl"
 },
 {
   "id": 9398,
   "word": "RECOMMENDING",
   "pronunciations": "ˌrɛkəˈmɛndɪŋ"
 },
 {
   "id": 9399,
   "word": "RECREATIONAL",
   "pronunciations": "ˌrɛkriːˈeɪʃənəl"
 },
 {
   "id": 9400,
   "word": "RECRUITS",
   "pronunciations": "rəˈkruːts, rɪˈkruːts, riːˈkruːts"
 },
 {
   "id": 9401,
   "word": "REFERRALS",
   "pronunciations": "rɪˈfɝːəlz"
 },
 {
   "id": 9402,
   "word": "RELATES",
   "pronunciations": "rɪˈleɪts, riːˈleɪts"
 },
 {
   "id": 9403,
   "word": "RELEASES",
   "pronunciations": "rɪˈliːsɪz"
 },
 {
   "id": 9404,
   "word": "RELIED",
   "pronunciations": "rɪˈlaɪd, riːˈlaɪd"
 },
 {
   "id": 9405,
   "word": "RELISH",
   "pronunciations": "ˈrɛlɪʃ"
 },
 {
   "id": 9406,
   "word": "REMINDER",
   "pronunciations": "riːˈmaɪndɝ"
 },
 {
   "id": 9407,
   "word": "REMINDS",
   "pronunciations": "riːˈmaɪndz"
 },
 {
   "id": 9408,
   "word": "REMOVING",
   "pronunciations": "riːˈmuːvɪŋ"
 },
 {
   "id": 9409,
   "word": "RENEWAL",
   "pronunciations": "rɪˈnuːəl"
 },
 {
   "id": 9410,
   "word": "REPAIRS",
   "pronunciations": "rɪˈpɛrz, riːˈpɛrz"
 },
 {
   "id": 9411,
   "word": "REPEL",
   "pronunciations": "rɪˈpɛl"
 },
 {
   "id": 9412,
   "word": "REQUESTING",
   "pronunciations": "rɪˈkwɛstɪŋ, riːˈkwɛstɪŋ"
 },
 {
   "id": 9413,
   "word": "RESEMBLE",
   "pronunciations": "rɪˈzɛmbəl, riːˈzɛmbəl"
 },
 {
   "id": 9414,
   "word": "RESEMBLED",
   "pronunciations": "rɪˈzɛmbəld, riːˈzɛmbəld"
 },
 {
   "id": 9415,
   "word": "RESENT",
   "pronunciations": "rɪˈzɛnt, riːˈzɛnt"
 },
 {
   "id": 9416,
   "word": "RESENTED",
   "pronunciations": "riːˈzɛntəd, riːˈzɛnəd"
 },
 {
   "id": 9417,
   "word": "RESERVATION",
   "pronunciations": "ˌrɛzɝˈveɪʃən"
 },
 {
   "id": 9418,
   "word": "RESIDUE",
   "pronunciations": "ˈrɛzəˌduː"
 },
 {
   "id": 9419,
   "word": "RESPONDENT",
   "pronunciations": "rɪˈspɑːndənt"
 },
 {
   "id": 9420,
   "word": "RESPONDENTS",
   "pronunciations": "rɪˈspɑːndənts"
 },
 {
   "id": 9421,
   "word": "RESTORATIVE",
   "pronunciations": "rəˈstɔrətɪv"
 },
 {
   "id": 9422,
   "word": "RESTRICTION",
   "pronunciations": "riːˈstrɪkʃən"
 },
 {
   "id": 9423,
   "word": "RETIRING",
   "pronunciations": "rɪˈtaɪrɪŋ, riːˈtaɪɝɪŋ, riːˈtaɪrɪŋ"
 },
 {
   "id": 9424,
   "word": "RETREATED",
   "pronunciations": "riːˈtriːtəd, riːˈtriːtɪd"
 },
 {
   "id": 9425,
   "word": "REVERSED",
   "pronunciations": "rɪˈvɝːst, riːˈvɝːst"
 },
 {
   "id": 9426,
   "word": "REVISION",
   "pronunciations": "riːˈvɪʒən"
 },
 {
   "id": 9427,
   "word": "REVIVAL",
   "pronunciations": "rɪˈvaɪvəl, riːˈvaɪvəl"
 },
 {
   "id": 9428,
   "word": "REVIVE",
   "pronunciations": "rɪˈvaɪv, riːˈvaɪv"
 },
 {
   "id": 9429,
   "word": "REVOLT",
   "pronunciations": "rɪˈvoʊlt, riːˈvoʊlt"
 },
 {
   "id": 9430,
   "word": "RHODES",
   "pronunciations": "ˈroʊdz"
 },
 {
   "id": 9431,
   "word": "RIGIDLY",
   "pronunciations": "ˈrɪdʒɪdli"
 },
 {
   "id": 9432,
   "word": "RITE",
   "pronunciations": "ˈraɪt"
 },
 {
   "id": 9433,
   "word": "ROBARDS",
   "pronunciations": "ˈrɑːbɝdz"
 },
 {
   "id": 9434,
   "word": "ROCKED",
   "pronunciations": "ˈrɑːkt"
 },
 {
   "id": 9435,
   "word": "ROOTED",
   "pronunciations": "ˈruːtəd, ˈruːtɪd"
 },
 {
   "id": 9436,
   "word": "ROSY",
   "pronunciations": "ˈroʊzi"
 },
 {
   "id": 9437,
   "word": "ROT",
   "pronunciations": "ˈrɑːt"
 },
 {
   "id": 9438,
   "word": "ROUSING",
   "pronunciations": "ˈraʊzɪŋ"
 },
 {
   "id": 9439,
   "word": "RUINS",
   "pronunciations": "ˈruːənz, ˈruːɪnz"
 },
 {
   "id": 9440,
   "word": "RUMOR",
   "pronunciations": "ˈruːmɝ"
 },
 {
   "id": 9441,
   "word": "RUSTY",
   "pronunciations": "ˈrʌsti"
 },
 {
   "id": 9442,
   "word": "RUTH'S",
   "pronunciations": "ˈruːθs"
 },
 {
   "id": 9443,
   "word": "SAC",
   "pronunciations": "ˈsæk"
 },
 {
   "id": 9444,
   "word": "SACK",
   "pronunciations": "ˈsæk"
 },
 {
   "id": 9445,
   "word": "SAILORS",
   "pronunciations": "ˈseɪlɝz"
 },
 {
   "id": 9446,
   "word": "SALARIES",
   "pronunciations": "ˈsælɝiːz"
 },
 {
   "id": 9447,
   "word": "SALOONS",
   "pronunciations": "səˈluːnz"
 },
 {
   "id": 9448,
   "word": "SANE",
   "pronunciations": "ˈseɪn"
 },
 {
   "id": 9449,
   "word": "SATELLITE",
   "pronunciations": "ˈsætəˌlaɪt"
 },
 {
   "id": 9450,
   "word": "SCANDAL",
   "pronunciations": "ˈskændəl"
 },
 {
   "id": 9451,
   "word": "SCHOLARLY",
   "pronunciations": "ˈskɑːlɝli"
 },
 {
   "id": 9452,
   "word": "SCHOLARSHIPS",
   "pronunciations": "ˈskɑːlɝˌʃɪps"
 },
 {
   "id": 9453,
   "word": "SCIENCE-FICTION",
   "pronunciations": "ˈsaɪənsˌfɪkʃən"
 },
 {
   "id": 9454,
   "word": "SCOTS",
   "pronunciations": "ˈskɑːts"
 },
 {
   "id": 9455,
   "word": "SCOUT",
   "pronunciations": "ˈskaʊt"
 },
 {
   "id": 9456,
   "word": "SCRAP",
   "pronunciations": "ˈskræp"
 },
 {
   "id": 9457,
   "word": "SCRAPED",
   "pronunciations": "ˈskreɪpt"
 },
 {
   "id": 9458,
   "word": "SEASONAL",
   "pronunciations": "ˈsiːzənəl"
 },
 {
   "id": 9459,
   "word": "SECURITIES",
   "pronunciations": "sɪˈkjʊrətiːz"
 },
 {
   "id": 9460,
   "word": "SELFISH",
   "pronunciations": "ˈsɛlfɪʃ"
 },
 {
   "id": 9461,
   "word": "SENSIBILITY",
   "pronunciations": "ˌsɛnsɪˈbɪlɪti"
 },
 {
   "id": 9462,
   "word": "SENSING",
   "pronunciations": "ˈsɛnsɪŋ"
 },
 {
   "id": 9463,
   "word": "SENTENCED",
   "pronunciations": "ˈsɛntənst"
 },
 {
   "id": 9464,
   "word": "SENTIMENTS",
   "pronunciations": "ˈsɛntəmənts, ˈsɛnəmənts"
 },
 {
   "id": 9465,
   "word": "SERIOUSNESS",
   "pronunciations": "ˈsɪriːəsnəs"
 },
 {
   "id": 9466,
   "word": "SETUP",
   "pronunciations": "ˈsɛˌtəp"
 },
 {
   "id": 9467,
   "word": "SHAPING",
   "pronunciations": "ˈʃeɪpɪŋ"
 },
 {
   "id": 9468,
   "word": "SHELDON",
   "pronunciations": "ˈʃɛldən"
 },
 {
   "id": 9469,
   "word": "SHELVES",
   "pronunciations": "ˈʃɛlvz"
 },
 {
   "id": 9470,
   "word": "SHERRY",
   "pronunciations": "ˈʃɛri"
 },
 {
   "id": 9471,
   "word": "SHIELD",
   "pronunciations": "ˈʃiːld"
 },
 {
   "id": 9472,
   "word": "SHOTGUN",
   "pronunciations": "ˈʃɑːtˌgən"
 },
 {
   "id": 9473,
   "word": "SHOUT",
   "pronunciations": "ˈʃaʊt"
 },
 {
   "id": 9474,
   "word": "SHOVED",
   "pronunciations": "ˈʃʌvd"
 },
 {
   "id": 9475,
   "word": "SHREWD",
   "pronunciations": "ˈʃruːd"
 },
 {
   "id": 9476,
   "word": "SIOUX",
   "pronunciations": "ˈsuː"
 },
 {
   "id": 9477,
   "word": "SIPPING",
   "pronunciations": "ˈsɪpɪŋ"
 },
 {
   "id": 9478,
   "word": "SKIPPED",
   "pronunciations": "ˈskɪpt"
 },
 {
   "id": 9479,
   "word": "SLAPPED",
   "pronunciations": "ˈslæpt"
 },
 {
   "id": 9480,
   "word": "SLEEVES",
   "pronunciations": "ˈsliːvz"
 },
 {
   "id": 9481,
   "word": "SLIPS",
   "pronunciations": "ˈslɪps"
 },
 {
   "id": 9482,
   "word": "SLUM",
   "pronunciations": "ˈslʌm"
 },
 {
   "id": 9483,
   "word": "SLUMP",
   "pronunciations": "ˈslʌmp"
 },
 {
   "id": 9484,
   "word": "SLUMPED",
   "pronunciations": "ˈslʌmpt"
 },
 {
   "id": 9485,
   "word": "SLUMS",
   "pronunciations": "ˈslʌmz"
 },
 {
   "id": 9486,
   "word": "SMOKING",
   "pronunciations": "ˈsmoʊkɪŋ"
 },
 {
   "id": 9487,
   "word": "SNARLED",
   "pronunciations": "ˈsnɑːrəld"
 },
 {
   "id": 9488,
   "word": "SOLVING",
   "pronunciations": "ˈsɑːlvɪŋ"
 },
 {
   "id": 9489,
   "word": "SOPHISTICATION",
   "pronunciations": "səˌfɪstəˈkeɪʃən"
 },
 {
   "id": 9490,
   "word": "SOUTHERNER",
   "pronunciations": "ˈsʌðɝnɝ"
 },
 {
   "id": 9491,
   "word": "SOUTHWARD",
   "pronunciations": "ˈsaʊθwɝd"
 },
 {
   "id": 9492,
   "word": "SPACED",
   "pronunciations": "ˈspeɪst"
 },
 {
   "id": 9493,
   "word": "SPECULATIVE",
   "pronunciations": "ˈspɛkjələtɪv"
 },
 {
   "id": 9494,
   "word": "SPENDS",
   "pronunciations": "ˈspɛndz, ˈspɛnz"
 },
 {
   "id": 9495,
   "word": "SPHERICAL",
   "pronunciations": "sˈfɛrɪkəl"
 },
 {
   "id": 9496,
   "word": "SPINDLE",
   "pronunciations": "ˈspɪndəl"
 },
 {
   "id": 9497,
   "word": "SPIRAL",
   "pronunciations": "ˈspaɪrəl"
 },
 {
   "id": 9498,
   "word": "SPIRITED",
   "pronunciations": "ˈspɪrɪtəd"
 },
 {
   "id": 9499,
   "word": "SPOILAGE",
   "pronunciations": "ˈspɔɪlədʒ, ˈspɔɪlɪdʒ"
 },
 {
   "id": 9500,
   "word": "SPRAYING",
   "pronunciations": "ˈspreɪɪŋ"
 },
 {
   "id": 9501,
   "word": "SPRUNG",
   "pronunciations": "ˈsprʌŋ"
 },
 {
   "id": 9502,
   "word": "STAFFS",
   "pronunciations": "ˈstæfs"
 },
 {
   "id": 9503,
   "word": "STAG",
   "pronunciations": "ˈstæg"
 },
 {
   "id": 9504,
   "word": "STAIRCASE",
   "pronunciations": "ˈstɛrˌkeɪs"
 },
 {
   "id": 9505,
   "word": "STAMP",
   "pronunciations": "ˈstæmp"
 },
 {
   "id": 9506,
   "word": "STATESMEN",
   "pronunciations": "ˈsteɪtsmɪn"
 },
 {
   "id": 9507,
   "word": "STATUES",
   "pronunciations": "ˈstæˌtʃuːz"
 },
 {
   "id": 9508,
   "word": "STICKING",
   "pronunciations": "ˈstɪkɪŋ"
 },
 {
   "id": 9509,
   "word": "STIFFENED",
   "pronunciations": "ˈstɪfənd"
 },
 {
   "id": 9510,
   "word": "STOOL",
   "pronunciations": "ˈstuːl"
 },
 {
   "id": 9511,
   "word": "STOPS",
   "pronunciations": "ˈstɑːps"
 },
 {
   "id": 9512,
   "word": "STORMY",
   "pronunciations": "ˈstɔrmi"
 },
 {
   "id": 9513,
   "word": "STRAIGHTFORWARD",
   "pronunciations": "ˈstreɪtˈfɔrwɝd"
 },
 {
   "id": 9514,
   "word": "STRAINS",
   "pronunciations": "ˈstreɪnz"
 },
 {
   "id": 9515,
   "word": "STRANGELY",
   "pronunciations": "ˈstreɪndʒli"
 },
 {
   "id": 9516,
   "word": "STRANGERS",
   "pronunciations": "ˈstreɪndʒɝz"
 },
 {
   "id": 9517,
   "word": "STRASBOURG",
   "pronunciations": "ˈstræsˌbɔrg"
 },
 {
   "id": 9518,
   "word": "STRAVINSKY",
   "pronunciations": "strəˈvɪnski"
 },
 {
   "id": 9519,
   "word": "STRIKINGLY",
   "pronunciations": "ˈstraɪkɪŋli"
 },
 {
   "id": 9520,
   "word": "STRUGGLED",
   "pronunciations": "ˈstrʌgəld"
 },
 {
   "id": 9521,
   "word": "STUMBLING",
   "pronunciations": "ˈstʌmbəlɪŋ, ˈstʌmblɪŋ"
 },
 {
   "id": 9522,
   "word": "STUNNED",
   "pronunciations": "ˈstʌnd"
 },
 {
   "id": 9523,
   "word": "STUPIDITY",
   "pronunciations": "stuːˈpɪdɪˌtiː"
 },
 {
   "id": 9524,
   "word": "SUBDUED",
   "pronunciations": "səbˈduːd"
 },
 {
   "id": 9525,
   "word": "SUCCEEDS",
   "pronunciations": "səkˈsiːdz"
 },
 {
   "id": 9526,
   "word": "SUCKING",
   "pronunciations": "ˈsʌkɪŋ"
 },
 {
   "id": 9527,
   "word": "SULLIVAN",
   "pronunciations": "ˈsʌləvən, ˈsʌlɪvən"
 },
 {
   "id": 9528,
   "word": "SUNSHINE",
   "pronunciations": "ˈsʌnˌʃaɪn"
 },
 {
   "id": 9529,
   "word": "SUPER",
   "pronunciations": "ˈsuːpɝ"
 },
 {
   "id": 9530,
   "word": "SUPERSTITION",
   "pronunciations": "ˌsuːpɝˈstɪʃən"
 },
 {
   "id": 9531,
   "word": "SUPPLEMENTS",
   "pronunciations": "ˌsəpləˈmɛnts"
 },
 {
   "id": 9532,
   "word": "SUPPORTERS",
   "pronunciations": "səˈpɔrtɝz"
 },
 {
   "id": 9533,
   "word": "SURROUNDINGS",
   "pronunciations": "sɝˈaʊndɪŋz"
 },
 {
   "id": 9534,
   "word": "SURVEYING",
   "pronunciations": "sɝˈveɪɪŋ, ˈsɝːˌveɪɪŋ"
 },
 {
   "id": 9535,
   "word": "SYMBOLISM",
   "pronunciations": "ˈsɪmbəˌlɪzəm"
 },
 {
   "id": 9536,
   "word": "SYMPATHIES",
   "pronunciations": "ˈsɪmpəθiːz"
 },
 {
   "id": 9537,
   "word": "TACTICAL",
   "pronunciations": "ˈtæktɪkəl"
 },
 {
   "id": 9538,
   "word": "TANGLE",
   "pronunciations": "ˈtæŋgəl"
 },
 {
   "id": 9539,
   "word": "TAUT",
   "pronunciations": "ˈtɔt"
 },
 {
   "id": 9540,
   "word": "TAXABLE",
   "pronunciations": "ˈtæksəbəl"
 },
 {
   "id": 9541,
   "word": "TEAMSTERS",
   "pronunciations": "ˈtiːmstɝz"
 },
 {
   "id": 9542,
   "word": "TECH",
   "pronunciations": "ˈtɛk"
 },
 {
   "id": 9543,
   "word": "TELEGRAM",
   "pronunciations": "ˈtɛləˌgræm"
 },
 {
   "id": 9544,
   "word": "TERMINATION",
   "pronunciations": "tɝməˈneɪʃən"
 },
 {
   "id": 9545,
   "word": "TERRAIN",
   "pronunciations": "tɝˈeɪn"
 },
 {
   "id": 9546,
   "word": "TESTIFY",
   "pronunciations": "ˈtɛstɪˌfaɪ"
 },
 {
   "id": 9547,
   "word": "THANKSGIVING",
   "pronunciations": "ˌθæŋksˈgɪvɪŋ"
 },
 {
   "id": 9548,
   "word": "THEMES",
   "pronunciations": "ˈθiːmz"
 },
 {
   "id": 9549,
   "word": "THIEF",
   "pronunciations": "ˈθiːf"
 },
 {
   "id": 9550,
   "word": "THORNBURG",
   "pronunciations": "ˈθɔrnbɝg"
 },
 {
   "id": 9551,
   "word": "THRUSTING",
   "pronunciations": "ˈθrʌstɪŋ"
 },
 {
   "id": 9552,
   "word": "TRADED",
   "pronunciations": "ˈtreɪdɪd"
 },
 {
   "id": 9553,
   "word": "TRADER",
   "pronunciations": "ˈtreɪdɝ"
 },
 {
   "id": 9554,
   "word": "TRAILED",
   "pronunciations": "ˈtreɪld"
 },
 {
   "id": 9555,
   "word": "TRANSMITTED",
   "pronunciations": "trænˈsmɪtɪd, trænzˈmɪtəd"
 },
 {
   "id": 9556,
   "word": "TRAPS",
   "pronunciations": "ˈtræps"
 },
 {
   "id": 9557,
   "word": "TRAVELER",
   "pronunciations": "ˈtrævəlɝ, ˈtrævlɝ"
 },
 {
   "id": 9558,
   "word": "TRAVELERS",
   "pronunciations": "ˈtrævəlɝz, ˈtrævlɝz"
 },
 {
   "id": 9559,
   "word": "TRICKS",
   "pronunciations": "ˈtrɪks"
 },
 {
   "id": 9560,
   "word": "TRIUMPHANTLY",
   "pronunciations": "traɪˈʌmfəntli"
 },
 {
   "id": 9561,
   "word": "TROPHY",
   "pronunciations": "ˈtroʊfi"
 },
 {
   "id": 9562,
   "word": "TRUNK",
   "pronunciations": "ˈtrʌŋk"
 },
 {
   "id": 9563,
   "word": "TUMORS",
   "pronunciations": "ˈtuːmɝz"
 },
 {
   "id": 9564,
   "word": "TURTLE",
   "pronunciations": "ˈtɝːtəl"
 },
 {
   "id": 9565,
   "word": "TWENTY-ONE",
   "pronunciations": "ˈtwɛntiːˌwɔn"
 },
 {
   "id": 9566,
   "word": "TWENTY-TWO",
   "pronunciations": "ˈtwɛntiːˌtuː"
 },
 {
   "id": 9567,
   "word": "ULTRASONIC",
   "pronunciations": "ˌəltrəˈsɑːnɪk"
 },
 {
   "id": 9568,
   "word": "UMBRELLA",
   "pronunciations": "əmˈbrɛlə, ˈʌmˌbrɛlə"
 },
 {
   "id": 9569,
   "word": "UNCOMMON",
   "pronunciations": "ənˈkɑːmən"
 },
 {
   "id": 9570,
   "word": "UNCONCERNED",
   "pronunciations": "ˌənkənˈsɝːnd"
 },
 {
   "id": 9571,
   "word": "UNDERGO",
   "pronunciations": "ˌəndɝˈgoʊ"
 },
 {
   "id": 9572,
   "word": "UNDERMINE",
   "pronunciations": "ˈʌndɝˌmaɪn"
 },
 {
   "id": 9573,
   "word": "UNITARIAN",
   "pronunciations": "ˌjuːnəˈtɛriːən"
 },
 {
   "id": 9574,
   "word": "UNNATURAL",
   "pronunciations": "ənˈnætʃɝəl"
 },
 {
   "id": 9575,
   "word": "UNSATISFACTORY",
   "pronunciations": "ˌənsətɪsˈfæktɝi"
 },
 {
   "id": 9576,
   "word": "UNSTABLE",
   "pronunciations": "ənˈsteɪbəl"
 },
 {
   "id": 9577,
   "word": "UPSIDE",
   "pronunciations": "ˈʌpˈsaɪd"
 },
 {
   "id": 9578,
   "word": "URBANIZATION",
   "pronunciations": "ˌɝːbənəˈzeɪʃən, ˌɝːbənɪˈzeɪʃən"
 },
 {
   "id": 9579,
   "word": "URGES",
   "pronunciations": "ˈɝːdʒəz, ˈɝːdʒɪz"
 },
 {
   "id": 9580,
   "word": "USABLE",
   "pronunciations": "ˈjuːzəbəl"
 },
 {
   "id": 9581,
   "word": "UTILIZING",
   "pronunciations": "ˈjuːtəˌlaɪzɪŋ"
 },
 {
   "id": 9582,
   "word": "VARIETIES",
   "pronunciations": "vɝˈaɪətiːz"
 },
 {
   "id": 9583,
   "word": "VECCHIO",
   "pronunciations": "ˈvɛkiːoʊ"
 },
 {
   "id": 9584,
   "word": "VEIL",
   "pronunciations": "ˈveɪl"
 },
 {
   "id": 9585,
   "word": "VERANDA",
   "pronunciations": "vɝˈændə"
 },
 {
   "id": 9586,
   "word": "VICTORIA",
   "pronunciations": "vɪkˈtɔriːə"
 },
 {
   "id": 9587,
   "word": "VICTORIAN",
   "pronunciations": "vɪkˈtɔriːən"
 },
 {
   "id": 9588,
   "word": "VINES",
   "pronunciations": "ˈvaɪnz"
 },
 {
   "id": 9589,
   "word": "WANDER",
   "pronunciations": "ˈwɑːndɝ"
 },
 {
   "id": 9590,
   "word": "WANDERED",
   "pronunciations": "ˈwɑːndɝd"
 },
 {
   "id": 9591,
   "word": "WARDROBE",
   "pronunciations": "ˈwɔrˌdroʊb"
 },
 {
   "id": 9592,
   "word": "WARMLY",
   "pronunciations": "ˈwɔrmli"
 },
 {
   "id": 9593,
   "word": "WEAKER",
   "pronunciations": "ˈwiːkɝ"
 },
 {
   "id": 9594,
   "word": "WEEK'S",
   "pronunciations": "ˈwiːks"
 },
 {
   "id": 9595,
   "word": "WEEPING",
   "pronunciations": "ˈwiːpɪŋ"
 },
 {
   "id": 9596,
   "word": "WENDELL",
   "pronunciations": "ˈwɛndəl"
 },
 {
   "id": 9597,
   "word": "WESTON",
   "pronunciations": "ˈwɛstən"
 },
 {
   "id": 9598,
   "word": "WESTWARD",
   "pronunciations": "ˈwɛstwɝd"
 },
 {
   "id": 9599,
   "word": "WINKED",
   "pronunciations": "ˈwɪŋkt"
 },
 {
   "id": 9600,
   "word": "WINNER",
   "pronunciations": "ˈwɪnɝ"
 },
 {
   "id": 9601,
   "word": "WINS",
   "pronunciations": "ˈwɪnz"
 },
 {
   "id": 9602,
   "word": "WIRY",
   "pronunciations": "ˈwɪri"
 },
 {
   "id": 9603,
   "word": "WISELY",
   "pronunciations": "ˈwaɪzli"
 },
 {
   "id": 9604,
   "word": "WITCHES",
   "pronunciations": "ˈwɪtʃəz, ˈwɪtʃɪz"
 },
 {
   "id": 9605,
   "word": "WITHDRAW",
   "pronunciations": "wɪðˈdrɔ, wɪθˈdrɔ"
 },
 {
   "id": 9606,
   "word": "WITHHELD",
   "pronunciations": "wɪθˈhɛld"
 },
 {
   "id": 9607,
   "word": "WITHHOLDING",
   "pronunciations": "wɪθˈhoʊldɪŋ"
 },
 {
   "id": 9608,
   "word": "WOLFE",
   "pronunciations": "ˈwʊlf"
 },
 {
   "id": 9609,
   "word": "WONDERS",
   "pronunciations": "ˈwʌndɝz"
 },
 {
   "id": 9610,
   "word": "WORKBENCH",
   "pronunciations": "ˈwɝːkˌbɛntʃ"
 },
 {
   "id": 9611,
   "word": "WORTHWHILE",
   "pronunciations": "ˈwɝːθˈwaɪl"
 },
 {
   "id": 9612,
   "word": "WOUNDS",
   "pronunciations": "ˈwuːndz"
 },
 {
   "id": 9613,
   "word": "WREATH",
   "pronunciations": "ˈriːθ"
 },
 {
   "id": 9614,
   "word": "WRECK",
   "pronunciations": "ˈrɛk"
 },
 {
   "id": 9615,
   "word": "YEARS'",
   "pronunciations": "ˈjɪrz"
 },
 {
   "id": 9616,
   "word": "YIN",
   "pronunciations": "ˈjɪn"
 },
 {
   "id": 9617,
   "word": "YOUNGSTER",
   "pronunciations": "ˈjʌŋstɝ"
 },
 {
   "id": 9618,
   "word": "YOURSELVES",
   "pronunciations": "jʊrˈsɛlvz, ˈjɔrsɛlvz"
 },
 {
   "id": 9619,
   "word": "ZEAL",
   "pronunciations": "ˈziːl"
 },
 {
   "id": 9620,
   "word": "ZING",
   "pronunciations": "ˈzɪŋ"
 },
 {
   "id": 9621,
   "word": "AARON",
   "pronunciations": "ˈɛrən"
 },
 {
   "id": 9622,
   "word": "ABANDONING",
   "pronunciations": "əˈbændənɪŋ"
 },
 {
   "id": 9623,
   "word": "ABBEY",
   "pronunciations": "ˈæbi"
 },
 {
   "id": 9624,
   "word": "ABIDE",
   "pronunciations": "əˈbaɪd"
 },
 {
   "id": 9625,
   "word": "ABORIGINE",
   "pronunciations": "ˌæbɝˈɪdʒəni"
 },
 {
   "id": 9626,
   "word": "ABSTRACTIONS",
   "pronunciations": "æbˈstrækʃənz"
 },
 {
   "id": 9627,
   "word": "ABUSES",
   "pronunciations": "əˈbjuːsɪz, əˈbjuːzɪz"
 },
 {
   "id": 9628,
   "word": "ACCESSORIES",
   "pronunciations": "ækˈsɛsɝiːz"
 },
 {
   "id": 9629,
   "word": "ACCOMPLISHMENT",
   "pronunciations": "əˈkɑːmplɪʃmənt"
 },
 {
   "id": 9630,
   "word": "ACCREDITATION",
   "pronunciations": "əˌkrɛdəˈteɪʃən"
 },
 {
   "id": 9631,
   "word": "ACCRUING",
   "pronunciations": "əˈkruːɪŋ"
 },
 {
   "id": 9632,
   "word": "ACETATE",
   "pronunciations": "ˈæsəˌteɪt"
 },
 {
   "id": 9633,
   "word": "ACIDS",
   "pronunciations": "ˈæsədz"
 },
 {
   "id": 9634,
   "word": "ACTIVATION",
   "pronunciations": "ˌæktəˈveɪʃən"
 },
 {
   "id": 9635,
   "word": "ADAPTATIONS",
   "pronunciations": "ˌædæpˈteɪʃənz, ˌædəpˈteɪʃənz"
 },
 {
   "id": 9636,
   "word": "ADLAI",
   "pronunciations": "ɑːdˈlɑːi"
 },
 {
   "id": 9637,
   "word": "ADOLESCENTS",
   "pronunciations": "ˌædəˈlɛsənts, ˌædoʊˈlɛsənts"
 },
 {
   "id": 9638,
   "word": "AEROSOL",
   "pronunciations": "ˈɛrəˌsɑːl"
 },
 {
   "id": 9639,
   "word": "AFFILIATED",
   "pronunciations": "əˈfɪliːˌeɪtɪd"
 },
 {
   "id": 9640,
   "word": "AFLOAT",
   "pronunciations": "əˈfloʊt"
 },
 {
   "id": 9641,
   "word": "AGREEING",
   "pronunciations": "əˈgriːɪŋ"
 },
 {
   "id": 9642,
   "word": "AIDING",
   "pronunciations": "ˈeɪdɪŋ"
 },
 {
   "id": 9643,
   "word": "AIRBORNE",
   "pronunciations": "ˈɛrˌbɔrn"
 },
 {
   "id": 9644,
   "word": "AIRY",
   "pronunciations": "ˈɛri"
 },
 {
   "id": 9645,
   "word": "ALGAE",
   "pronunciations": "ˈældʒi"
 },
 {
   "id": 9646,
   "word": "ALMA",
   "pronunciations": "ˈɑːlmə"
 },
 {
   "id": 9647,
   "word": "ALTERATION",
   "pronunciations": "ˌɔltɝˈeɪʃən"
 },
 {
   "id": 9648,
   "word": "ALTERATIONS",
   "pronunciations": "ˌɔltɝˈeɪʃənz"
 },
 {
   "id": 9649,
   "word": "ALTERNATELY",
   "pronunciations": "ˈɔltɝnətli"
 },
 {
   "id": 9650,
   "word": "AMBIGUITIES",
   "pronunciations": "æmbəgˈjuːətiːz"
 },
 {
   "id": 9651,
   "word": "AMBUSH",
   "pronunciations": "ˈæmˌbʊʃ"
 },
 {
   "id": 9652,
   "word": "AMENDMENTS",
   "pronunciations": "əˈmɛndmənts"
 },
 {
   "id": 9653,
   "word": "AMUSEMENT",
   "pronunciations": "əˈmjuːzmənt"
 },
 {
   "id": 9654,
   "word": "ANALYST",
   "pronunciations": "ˈænəlɪst"
 },
 {
   "id": 9655,
   "word": "ANARCHY",
   "pronunciations": "ˈænɝˌkiː"
 },
 {
   "id": 9656,
   "word": "ANCESTOR",
   "pronunciations": "ˈænˌsɛstɝ"
 },
 {
   "id": 9657,
   "word": "ANGRILY",
   "pronunciations": "ˈæŋgrəli"
 },
 {
   "id": 9658,
   "word": "ANKLES",
   "pronunciations": "ˈæŋkəlz"
 },
 {
   "id": 9659,
   "word": "ANNA",
   "pronunciations": "ˈænə"
 },
 {
   "id": 9660,
   "word": "ANNAPOLIS",
   "pronunciations": "əˈnæpəlɪs"
 },
 {
   "id": 9661,
   "word": "ANNOUNCING",
   "pronunciations": "əˈnaʊnsɪŋ"
 },
 {
   "id": 9662,
   "word": "ANNOYED",
   "pronunciations": "əˈnɔɪd"
 },
 {
   "id": 9663,
   "word": "ANTELOPE",
   "pronunciations": "ˈæntəˌloʊp"
 },
 {
   "id": 9664,
   "word": "ANTHROPOLOGY",
   "pronunciations": "ˌænθrəˈpɑːlədʒi"
 },
 {
   "id": 9665,
   "word": "ANTS",
   "pronunciations": "ˈænts"
 },
 {
   "id": 9666,
   "word": "APPRECIABLY",
   "pronunciations": "əˈpriːʃəbli"
 },
 {
   "id": 9667,
   "word": "APPROXIMATION",
   "pronunciations": "əˌprɑːksəˈmeɪʃən"
 },
 {
   "id": 9668,
   "word": "APRON",
   "pronunciations": "ˈeɪprən"
 },
 {
   "id": 9669,
   "word": "ARCHES",
   "pronunciations": "ˈɑːrtʃəz, ˈɑːrtʃɪz"
 },
 {
   "id": 9670,
   "word": "ARENA",
   "pronunciations": "ɝˈiːnə"
 },
 {
   "id": 9671,
   "word": "ARGON",
   "pronunciations": "ˈɑːrˌgɑːn"
 },
 {
   "id": 9672,
   "word": "ARRIVES",
   "pronunciations": "ɝˈaɪvz"
 },
 {
   "id": 9673,
   "word": "ARTERIAL",
   "pronunciations": "ɑːrˈtɪriːəl"
 },
 {
   "id": 9674,
   "word": "ARTIST'S",
   "pronunciations": "ˈɑːrtəsts, ˈɑːrtɪsts"
 },
 {
   "id": 9675,
   "word": "ASCERTAIN",
   "pronunciations": "ˌæsɝˈteɪn"
 },
 {
   "id": 9676,
   "word": "ASSERTION",
   "pronunciations": "əˈsɝːʃən"
 },
 {
   "id": 9677,
   "word": "ASSISTED",
   "pronunciations": "əˈsɪstəd, əˈsɪstɪd"
 },
 {
   "id": 9678,
   "word": "ASSISTING",
   "pronunciations": "əˈsɪstɪŋ"
 },
 {
   "id": 9679,
   "word": "ATTENDANTS",
   "pronunciations": "əˈtɛndənts"
 },
 {
   "id": 9680,
   "word": "ATTRIBUTABLE",
   "pronunciations": "əˈtrɪbjətəbəl"
 },
 {
   "id": 9681,
   "word": "AUTHOR'S",
   "pronunciations": "ˈɔθɝz"
 },
 {
   "id": 9682,
   "word": "AUXILIARY",
   "pronunciations": "ɑːgˈzɪljɝi, ɑːgˈzɪliːɛri"
 },
 {
   "id": 9683,
   "word": "AWAITED",
   "pronunciations": "əˈweɪtɪd"
 },
 {
   "id": 9684,
   "word": "AWAITING",
   "pronunciations": "əˈweɪtɪŋ"
 },
 {
   "id": 9685,
   "word": "AWAKEN",
   "pronunciations": "əˈweɪkən"
 },
 {
   "id": 9686,
   "word": "AXES",
   "pronunciations": "ˈækˌsɪz, ˈækˌsiːz"
 },
 {
   "id": 9687,
   "word": "BACKGROUNDS",
   "pronunciations": "ˈbækˌgraʊndz"
 },
 {
   "id": 9688,
   "word": "BAIL",
   "pronunciations": "ˈbeɪl"
 },
 {
   "id": 9689,
   "word": "BALLADS",
   "pronunciations": "ˈbælədz"
 },
 {
   "id": 9690,
   "word": "BAN",
   "pronunciations": "ˈbæn"
 },
 {
   "id": 9691,
   "word": "BANG",
   "pronunciations": "ˈbæŋ"
 },
 {
   "id": 9692,
   "word": "BANISHED",
   "pronunciations": "ˈbænɪʃt"
 },
 {
   "id": 9693,
   "word": "BAREFOOT",
   "pronunciations": "ˈbɛrˌfʊt"
 },
 {
   "id": 9694,
   "word": "BARGAIN",
   "pronunciations": "ˈbɑːrgən, ˈbɑːrgɪn"
 },
 {
   "id": 9695,
   "word": "BARGE",
   "pronunciations": "ˈbɑːrdʒ"
 },
 {
   "id": 9696,
   "word": "BARREN",
   "pronunciations": "ˈbærən, ˈbɛrən"
 },
 {
   "id": 9697,
   "word": "BASIN",
   "pronunciations": "ˈbeɪsən"
 },
 {
   "id": 9698,
   "word": "BATHED",
   "pronunciations": "ˈbeɪðd"
 },
 {
   "id": 9699,
   "word": "BATISTA",
   "pronunciations": "bəˈtɪstɑː"
 },
 {
   "id": 9700,
   "word": "BATTLES",
   "pronunciations": "ˈbætəlz"
 },
 {
   "id": 9701,
   "word": "BAZAAR",
   "pronunciations": "bəˈzɑːr"
 },
 {
   "id": 9702,
   "word": "BEAST",
   "pronunciations": "ˈbiːst"
 },
 {
   "id": 9703,
   "word": "BEATNIK",
   "pronunciations": "ˈbiːtnɪk"
 },
 {
   "id": 9704,
   "word": "BEATRICE",
   "pronunciations": "ˈbiːətrɪs"
 },
 {
   "id": 9705,
   "word": "BECKONED",
   "pronunciations": "ˈbɛkənd"
 },
 {
   "id": 9706,
   "word": "BENDING",
   "pronunciations": "ˈbɛndɪŋ"
 },
 {
   "id": 9707,
   "word": "BESET",
   "pronunciations": "bɪˈsɛt"
 },
 {
   "id": 9708,
   "word": "BESTOWED",
   "pronunciations": "bɪˈstoʊd"
 },
 {
   "id": 9709,
   "word": "BIDDING",
   "pronunciations": "ˈbɪdɪŋ"
 },
 {
   "id": 9710,
   "word": "BILLIONS",
   "pronunciations": "ˈbɪljənz"
 },
 {
   "id": 9711,
   "word": "BIOLOGY",
   "pronunciations": "baɪˈɑːlədʒi"
 },
 {
   "id": 9712,
   "word": "BIZARRE",
   "pronunciations": "bəˈzɑːr, bɪˈzɑːr"
 },
 {
   "id": 9713,
   "word": "BLAMED",
   "pronunciations": "ˈbleɪmd"
 },
 {
   "id": 9714,
   "word": "BLAZE",
   "pronunciations": "ˈbleɪz"
 },
 {
   "id": 9715,
   "word": "BLIZZARD",
   "pronunciations": "ˈblɪzɝd"
 },
 {
   "id": 9716,
   "word": "BLOSSOM",
   "pronunciations": "ˈblɑːsəm"
 },
 {
   "id": 9717,
   "word": "BLOSSOMS",
   "pronunciations": "ˈblɑːsəmz"
 },
 {
   "id": 9718,
   "word": "BOA",
   "pronunciations": "ˈboʊə"
 },
 {
   "id": 9719,
   "word": "BODILY",
   "pronunciations": "ˈbɑːdəli"
 },
 {
   "id": 9720,
   "word": "BOLTED",
   "pronunciations": "ˈboʊltəd, ˈboʊltɪd"
 },
 {
   "id": 9721,
   "word": "BONY",
   "pronunciations": "ˈboʊni"
 },
 {
   "id": 9722,
   "word": "BOOKED",
   "pronunciations": "ˈbʊkt"
 },
 {
   "id": 9723,
   "word": "BOOTH",
   "pronunciations": "ˈbuːθ"
 },
 {
   "id": 9724,
   "word": "BOWED",
   "pronunciations": "ˈbaʊd, ˈboʊd"
 },
 {
   "id": 9725,
   "word": "BRAHMS",
   "pronunciations": "ˈbrɑːmz"
 },
 {
   "id": 9726,
   "word": "BRAKES",
   "pronunciations": "ˈbreɪks"
 },
 {
   "id": 9727,
   "word": "BRANDY",
   "pronunciations": "ˈbrændi"
 },
 {
   "id": 9728,
   "word": "BRANDYWINE",
   "pronunciations": "ˈbrændiːˌwaɪn"
 },
 {
   "id": 9729,
   "word": "BRAVADO",
   "pronunciations": "brəˈvɑːdoʊ"
 },
 {
   "id": 9730,
   "word": "BREADTH",
   "pronunciations": "ˈbrɛdθ"
 },
 {
   "id": 9731,
   "word": "BREATHE",
   "pronunciations": "ˈbriːð"
 },
 {
   "id": 9732,
   "word": "BREEDING",
   "pronunciations": "ˈbriːdɪŋ"
 },
 {
   "id": 9733,
   "word": "BRIGADIER",
   "pronunciations": "ˌbrɪgəˈdɪr"
 },
 {
   "id": 9734,
   "word": "BRISK",
   "pronunciations": "ˈbrɪsk"
 },
 {
   "id": 9735,
   "word": "BROADCASTS",
   "pronunciations": "ˈbrɔdˌkæsts"
 },
 {
   "id": 9736,
   "word": "BROADENED",
   "pronunciations": "ˈbrɔdənd"
 },
 {
   "id": 9737,
   "word": "BROADLY",
   "pronunciations": "ˈbrɔdli"
 },
 {
   "id": 9738,
   "word": "BROWNING",
   "pronunciations": "ˈbraʊnɪŋ"
 },
 {
   "id": 9739,
   "word": "BRUISED",
   "pronunciations": "ˈbruːzd"
 },
 {
   "id": 9740,
   "word": "BRUSHES",
   "pronunciations": "ˈbrʌʃɪz"
 },
 {
   "id": 9741,
   "word": "BRUSHING",
   "pronunciations": "ˈbrʌʃɪŋ"
 },
 {
   "id": 9742,
   "word": "BRUTAL",
   "pronunciations": "ˈbruːtəl"
 },
 {
   "id": 9743,
   "word": "BUCKET",
   "pronunciations": "ˈbʌkɪt"
 },
 {
   "id": 9744,
   "word": "BUCKLEY",
   "pronunciations": "ˈbʌkli"
 },
 {
   "id": 9745,
   "word": "BUCKSKIN",
   "pronunciations": "ˈbʌkˌskɪn"
 },
 {
   "id": 9746,
   "word": "BUDGETING",
   "pronunciations": "ˈbʌdʒɪtɪŋ"
 },
 {
   "id": 9747,
   "word": "BUILDS",
   "pronunciations": "ˈbɪldz"
 },
 {
   "id": 9748,
   "word": "BULB",
   "pronunciations": "ˈbʌlb"
 },
 {
   "id": 9749,
   "word": "BUM",
   "pronunciations": "ˈbʌm"
 },
 {
   "id": 9750,
   "word": "BUNDLES",
   "pronunciations": "ˈbʌndəlz"
 },
 {
   "id": 9751,
   "word": "BURDENS",
   "pronunciations": "ˈbɝːdənz"
 },
 {
   "id": 9752,
   "word": "BUREAUCRACY",
   "pronunciations": "bjʊˈrɑːkrəsi"
 },
 {
   "id": 9753,
   "word": "BURKE",
   "pronunciations": "ˈbɝːk"
 },
 {
   "id": 9754,
   "word": "BURNSIDE",
   "pronunciations": "ˈbɝːnˌsaɪd"
 },
 {
   "id": 9755,
   "word": "BURR",
   "pronunciations": "ˈbɝː"
 },
 {
   "id": 9756,
   "word": "BUSES",
   "pronunciations": "ˈbʌsɪz"
 },
 {
   "id": 9757,
   "word": "BUST",
   "pronunciations": "ˈbʌst"
 },
 {
   "id": 9758,
   "word": "CABINS",
   "pronunciations": "ˈkæbənz"
 },
 {
   "id": 9759,
   "word": "CABLE",
   "pronunciations": "ˈkeɪbəl"
 },
 {
   "id": 9760,
   "word": "CALCULATING",
   "pronunciations": "ˈkælkjəˌleɪtɪŋ"
 },
 {
   "id": 9761,
   "word": "CALLOUS",
   "pronunciations": "ˈkæləs"
 },
 {
   "id": 9762,
   "word": "CALORIES",
   "pronunciations": "ˈkælɔˌriːz"
 },
 {
   "id": 9763,
   "word": "CANADIAN",
   "pronunciations": "kəˈneɪdiːən"
 },
 {
   "id": 9764,
   "word": "CANCEL",
   "pronunciations": "ˈkænsəl"
 },
 {
   "id": 9765,
   "word": "CANNING",
   "pronunciations": "ˈkænɪŋ"
 },
 {
   "id": 9766,
   "word": "CANNON",
   "pronunciations": "ˈkænən"
 },
 {
   "id": 9767,
   "word": "CANOE",
   "pronunciations": "kəˈnuː"
 },
 {
   "id": 9768,
   "word": "CAPTAIN'S",
   "pronunciations": "ˈkæptənz"
 },
 {
   "id": 9769,
   "word": "CAR'S",
   "pronunciations": "ˈkɑːrz"
 },
 {
   "id": 9770,
   "word": "CARCASS",
   "pronunciations": "ˈkɑːrkəs"
 },
 {
   "id": 9771,
   "word": "CARGO",
   "pronunciations": "ˈkɑːrˌgoʊ"
 },
 {
   "id": 9772,
   "word": "CARIBBEAN",
   "pronunciations": "kɛˈrɪˌbiːən, ˌkɛrɪˈbiːən"
 },
 {
   "id": 9773,
   "word": "CARTER",
   "pronunciations": "ˈkɑːrtɝ"
 },
 {
   "id": 9774,
   "word": "CASTLE",
   "pronunciations": "ˈkæsəl"
 },
 {
   "id": 9775,
   "word": "CDC",
   "pronunciations": "ˈsiːˌdiːˈsiː"
 },
 {
   "id": 9776,
   "word": "CEASE-FIRE",
   "pronunciations": "ˈsiːsˈfaɪɝ"
 },
 {
   "id": 9777,
   "word": "CELTIC",
   "pronunciations": "ˈsɛltɪk, ˈkɛltɪk"
 },
 {
   "id": 9778,
   "word": "CERTIFICATE",
   "pronunciations": "sɝˈtɪfɪkət"
 },
 {
   "id": 9779,
   "word": "CERTIFIED",
   "pronunciations": "ˈsɝːtəˌfaɪd"
 },
 {
   "id": 9780,
   "word": "CHARACTERISTICALLY",
   "pronunciations": "ˌkɛrɪktɝˈɪstɪkli"
 },
 {
   "id": 9781,
   "word": "CHARLES'",
   "pronunciations": "ˈtʃɑːrlz, ˈtʃɑːrəlz"
 },
 {
   "id": 9782,
   "word": "CHARTING",
   "pronunciations": "ˈtʃɑːrtɪŋ"
 },
 {
   "id": 9783,
   "word": "CHATTER",
   "pronunciations": "ˈtʃætɝ"
 },
 {
   "id": 9784,
   "word": "CHIC",
   "pronunciations": "ˈʃiːk"
 },
 {
   "id": 9785,
   "word": "CHILLED",
   "pronunciations": "ˈtʃɪld"
 },
 {
   "id": 9786,
   "word": "CHIMNEY",
   "pronunciations": "ˈtʃɪmni"
 },
 {
   "id": 9787,
   "word": "CHOKED",
   "pronunciations": "ˈtʃoʊkt"
 },
 {
   "id": 9788,
   "word": "CHOKING",
   "pronunciations": "ˈtʃoʊkɪŋ"
 },
 {
   "id": 9789,
   "word": "CHORD",
   "pronunciations": "ˈkɔrd"
 },
 {
   "id": 9790,
   "word": "CHORE",
   "pronunciations": "ˈtʃɔr"
 },
 {
   "id": 9791,
   "word": "CHRONOLOGICAL",
   "pronunciations": "ˌkrɑːnəˈlɑːdʒɪkəl"
 },
 {
   "id": 9792,
   "word": "CIRCUS",
   "pronunciations": "ˈsɝːkəs"
 },
 {
   "id": 9793,
   "word": "CITE",
   "pronunciations": "ˈsaɪt"
 },
 {
   "id": 9794,
   "word": "CLAD",
   "pronunciations": "ˈklæd"
 },
 {
   "id": 9795,
   "word": "CLERKS",
   "pronunciations": "ˈklɝːks"
 },
 {
   "id": 9796,
   "word": "CLIENT'S",
   "pronunciations": "ˈklaɪənts"
 },
 {
   "id": 9797,
   "word": "CLINGING",
   "pronunciations": "ˈklɪŋɪŋ"
 },
 {
   "id": 9798,
   "word": "CLUTCHED",
   "pronunciations": "ˈklʌtʃt"
 },
 {
   "id": 9799,
   "word": "CO-OPERATIVE",
   "pronunciations": "ˌkoʊˈɑːˌpɝːətɪv, ˌkoʊˈɑːprətɪv"
 },
 {
   "id": 9800,
   "word": "COCONUT",
   "pronunciations": "ˈkoʊkəˌnət"
 },
 {
   "id": 9801,
   "word": "COFFIN",
   "pronunciations": "ˈkɔfɪn"
 },
 {
   "id": 9802,
   "word": "COLLAPSE",
   "pronunciations": "kəˈlæps"
 },
 {
   "id": 9803,
   "word": "COLLECTORS",
   "pronunciations": "kəˈlɛktɝz"
 },
 {
   "id": 9804,
   "word": "COLLISION",
   "pronunciations": "kəˈlɪʒən"
 },
 {
   "id": 9805,
   "word": "COLONIES",
   "pronunciations": "ˈkɑːləniːz"
 },
 {
   "id": 9806,
   "word": "COLORING",
   "pronunciations": "ˈkʌlɝɪŋ"
 },
 {
   "id": 9807,
   "word": "COMBINES",
   "pronunciations": "kəmˈbaɪnz"
 },
 {
   "id": 9808,
   "word": "COMMENCED",
   "pronunciations": "kəˈmɛnst"
 },
 {
   "id": 9809,
   "word": "COMMEND",
   "pronunciations": "kəˈmɛnd"
 },
 {
   "id": 9810,
   "word": "COMMODITY",
   "pronunciations": "kəˈmɑːdəti"
 },
 {
   "id": 9811,
   "word": "COMMONWEALTH",
   "pronunciations": "ˈkɑːmənˌwɛlθ"
 },
 {
   "id": 9812,
   "word": "COMMUNICATING",
   "pronunciations": "kəˈmjuːnəˌkeɪtɪŋ"
 },
 {
   "id": 9813,
   "word": "COMPILER",
   "pronunciations": "kəmˈpaɪlɝ"
 },
 {
   "id": 9814,
   "word": "COMPLETIONS",
   "pronunciations": "kəmˈpliːʃənz"
 },
 {
   "id": 9815,
   "word": "COMPLICITY",
   "pronunciations": "kəmˈplɪsəti, kəmˈplɪsɪti"
 },
 {
   "id": 9816,
   "word": "COMPREHENSION",
   "pronunciations": "ˌkɑːmpriːˈhɛnʃən"
 },
 {
   "id": 9817,
   "word": "COMPULSORY",
   "pronunciations": "kəmˈpʌlsɝi"
 },
 {
   "id": 9818,
   "word": "COMPUTATION",
   "pronunciations": "ˌkɑːmpjəˈteɪʃən"
 },
 {
   "id": 9819,
   "word": "COMPUTE",
   "pronunciations": "kəmˈpjuːt"
 },
 {
   "id": 9820,
   "word": "CON",
   "pronunciations": "ˈkɑːn"
 },
 {
   "id": 9821,
   "word": "CONANT",
   "pronunciations": "ˈkoʊnənt"
 },
 {
   "id": 9822,
   "word": "CONCEAL",
   "pronunciations": "kənˈsiːl"
 },
 {
   "id": 9823,
   "word": "CONCENTRATES",
   "pronunciations": "ˈkɑːnsənˌtreɪts"
 },
 {
   "id": 9824,
   "word": "CONCENTRATING",
   "pronunciations": "ˈkɑːnsənˌtreɪtɪŋ"
 },
 {
   "id": 9825,
   "word": "CONCESSIONS",
   "pronunciations": "kənˈsɛʃənz"
 },
 {
   "id": 9826,
   "word": "CONCLUSIVELY",
   "pronunciations": "kənˈkluːsɪvli"
 },
 {
   "id": 9827,
   "word": "CONCURRENT",
   "pronunciations": "kənˈkɝːənt"
 },
 {
   "id": 9828,
   "word": "CONDEMNATION",
   "pronunciations": "ˌkɑːndəmˈneɪʃən"
 },
 {
   "id": 9829,
   "word": "CONDENSATION",
   "pronunciations": "ˌkɑːndənˈseɪʃən"
 },
 {
   "id": 9830,
   "word": "CONFESSED",
   "pronunciations": "kənˈfɛst"
 },
 {
   "id": 9831,
   "word": "CONFIGURATION",
   "pronunciations": "kənˌfɪgjɝˈeɪʃən"
 },
 {
   "id": 9832,
   "word": "CONFINEMENT",
   "pronunciations": "kənˈfaɪnmənt"
 },
 {
   "id": 9833,
   "word": "CONFINES",
   "pronunciations": "ˈkɑːnˌfaɪnz, kənˈfaɪnz"
 },
 {
   "id": 9834,
   "word": "CONFIRMATION",
   "pronunciations": "ˌkɑːnfɝˈmeɪʃən"
 },
 {
   "id": 9835,
   "word": "CONGENIAL",
   "pronunciations": "kənˈdʒiːnjəl"
 },
 {
   "id": 9836,
   "word": "CONGRATULATIONS",
   "pronunciations": "kənˌgrætʃəˈleɪʃənz"
 },
 {
   "id": 9837,
   "word": "CONSENSUS",
   "pronunciations": "kənˈsɛnsəs"
 },
 {
   "id": 9838,
   "word": "CONSEQUENT",
   "pronunciations": "ˈkɑːnsəkwənt"
 },
 {
   "id": 9839,
   "word": "CONSTRUCTING",
   "pronunciations": "kənˈstrʌktɪŋ"
 },
 {
   "id": 9840,
   "word": "CONSULTANTS",
   "pronunciations": "kənˈsʌltənts"
 },
 {
   "id": 9841,
   "word": "CONTEMPLATE",
   "pronunciations": "ˈkɑːntəmˌpleɪt"
 },
 {
   "id": 9842,
   "word": "CONTINENTS",
   "pronunciations": "ˈkɑːntənənts"
 },
 {
   "id": 9843,
   "word": "CONTINUUM",
   "pronunciations": "kənˈtɪnjuːəm"
 },
 {
   "id": 9844,
   "word": "CONTRACTUAL",
   "pronunciations": "kənˈtræktʃuːəl"
 },
 {
   "id": 9845,
   "word": "CONVENIENTLY",
   "pronunciations": "kənˈviːnjəntli"
 },
 {
   "id": 9846,
   "word": "COOPERATING",
   "pronunciations": "koʊˈɑːpɝˌeɪtɪŋ"
 },
 {
   "id": 9847,
   "word": "CORONARY",
   "pronunciations": "ˈkɔrəˌnɛri"
 },
 {
   "id": 9848,
   "word": "CORPSE",
   "pronunciations": "ˈkɔrps"
 },
 {
   "id": 9849,
   "word": "CORPUS",
   "pronunciations": "ˈkɔrpəs"
 },
 {
   "id": 9850,
   "word": "CORRESPOND",
   "pronunciations": "ˌkɔrəˈspɑːnd"
 },
 {
   "id": 9851,
   "word": "CORSO",
   "pronunciations": "ˈkɔrsoʊ"
 },
 {
   "id": 9852,
   "word": "CORTEX",
   "pronunciations": "ˈkɔrtɛks"
 },
 {
   "id": 9853,
   "word": "COSMETICS",
   "pronunciations": "kɑːzˈmɛtɪks"
 },
 {
   "id": 9854,
   "word": "COUGH",
   "pronunciations": "ˈkɑːf, ˈkɔf"
 },
 {
   "id": 9855,
   "word": "COUNTRYSIDE",
   "pronunciations": "ˈkʌntriːˌsaɪd"
 },
 {
   "id": 9856,
   "word": "COURTESY",
   "pronunciations": "ˈkɝːtəsi"
 },
 {
   "id": 9857,
   "word": "CRACKS",
   "pronunciations": "ˈkræks"
 },
 {
   "id": 9858,
   "word": "CRADLE",
   "pronunciations": "ˈkreɪdəl"
 },
 {
   "id": 9859,
   "word": "CRASHING",
   "pronunciations": "ˈkræʃɪŋ"
 },
 {
   "id": 9860,
   "word": "CREDITS",
   "pronunciations": "ˈkrɛdɪts"
 },
 {
   "id": 9861,
   "word": "CROUCH",
   "pronunciations": "ˈkraʊtʃ"
 },
 {
   "id": 9862,
   "word": "CROWNED",
   "pronunciations": "ˈkraʊnd"
 },
 {
   "id": 9863,
   "word": "CRUISING",
   "pronunciations": "ˈkruːzɪŋ"
 },
 {
   "id": 9864,
   "word": "CRUSHING",
   "pronunciations": "ˈkrʌʃɪŋ"
 },
 {
   "id": 9865,
   "word": "CUBIST",
   "pronunciations": "ˈkjuːbɪst"
 },
 {
   "id": 9866,
   "word": "CURED",
   "pronunciations": "ˈkjʊrd"
 },
 {
   "id": 9867,
   "word": "CURVED",
   "pronunciations": "ˈkɝːvd"
 },
 {
   "id": 9868,
   "word": "CYCLES",
   "pronunciations": "ˈsaɪkəlz"
 },
 {
   "id": 9869,
   "word": "CYLINDERS",
   "pronunciations": "ˈsɪləndɝz"
 },
 {
   "id": 9870,
   "word": "CYPRESS",
   "pronunciations": "ˈsaɪprəs, ˈsaɪprɪs"
 },
 {
   "id": 9871,
   "word": "DAG",
   "pronunciations": "ˈdæg"
 },
 {
   "id": 9872,
   "word": "DAMAGED",
   "pronunciations": "ˈdæmədʒd, ˈdæmɪdʒd"
 },
 {
   "id": 9873,
   "word": "DAME",
   "pronunciations": "ˈdeɪm"
 },
 {
   "id": 9874,
   "word": "DAMMIT",
   "pronunciations": "ˈdæmɪt"
 },
 {
   "id": 9875,
   "word": "DARKENED",
   "pronunciations": "ˈdɑːrkənd"
 },
 {
   "id": 9876,
   "word": "DEALINGS",
   "pronunciations": "ˈdiːlɪŋz"
 },
 {
   "id": 9877,
   "word": "DEFECTIVE",
   "pronunciations": "dɪˈfɛktɪv"
 },
 {
   "id": 9878,
   "word": "DEFIANCE",
   "pronunciations": "dɪˈfaɪəns"
 },
 {
   "id": 9879,
   "word": "DEFY",
   "pronunciations": "dɪˈfaɪ"
 },
 {
   "id": 9880,
   "word": "DEJA",
   "pronunciations": "ˈdiːdʒə, ˈdeɪˌʒɑː"
 },
 {
   "id": 9881,
   "word": "DELIBERATIONS",
   "pronunciations": "dɪˌlɪbɝˈeɪʃənz"
 },
 {
   "id": 9882,
   "word": "DELINQUENCY",
   "pronunciations": "dɪˈlɪŋkwənsi"
 },
 {
   "id": 9883,
   "word": "DELTA",
   "pronunciations": "ˈdɛltə"
 },
 {
   "id": 9884,
   "word": "DEMONS",
   "pronunciations": "ˈdiːmənz"
 },
 {
   "id": 9885,
   "word": "DENOTES",
   "pronunciations": "dɪˈnoʊts"
 },
 {
   "id": 9886,
   "word": "DENOUNCED",
   "pronunciations": "dɪˈnaʊnst"
 },
 {
   "id": 9887,
   "word": "DEPART",
   "pronunciations": "dɪˈpɑːrt"
 },
 {
   "id": 9888,
   "word": "DEPARTURES",
   "pronunciations": "dɪˈpɑːrtʃɝz"
 },
 {
   "id": 9889,
   "word": "DERBY",
   "pronunciations": "ˈdɝːbi"
 },
 {
   "id": 9890,
   "word": "DESCRIPTIVE",
   "pronunciations": "dɪˈskrɪptɪv"
 },
 {
   "id": 9891,
   "word": "DESPERATION",
   "pronunciations": "ˌdɛspɝˈeɪʃən, ˌdɛspɝˈeɪʃɪn"
 },
 {
   "id": 9892,
   "word": "DESPISE",
   "pronunciations": "dɪˈspaɪz"
 },
 {
   "id": 9893,
   "word": "DESSERT",
   "pronunciations": "dɪˈzɝːt"
 },
 {
   "id": 9894,
   "word": "DETERMINISTIC",
   "pronunciations": "dɪˌtɝːməˈnɪstɪk"
 },
 {
   "id": 9895,
   "word": "DIAMONDS",
   "pronunciations": "ˈdaɪməndz"
 },
 {
   "id": 9896,
   "word": "DIANA",
   "pronunciations": "daɪˈænə"
 },
 {
   "id": 9897,
   "word": "DIAPHRAGM",
   "pronunciations": "ˈdaɪəˌfræm"
 },
 {
   "id": 9898,
   "word": "DIARRHEA",
   "pronunciations": "ˌdaɪɝˈiːə"
 },
 {
   "id": 9899,
   "word": "DICTATOR",
   "pronunciations": "dɪkˈteɪtɝ, ˈdɪkteɪtɝ"
 },
 {
   "id": 9900,
   "word": "DIFFRACTION",
   "pronunciations": "dɪˈfrækʃən"
 },
 {
   "id": 9901,
   "word": "DIGBY",
   "pronunciations": "ˈdɪgbi"
 },
 {
   "id": 9902,
   "word": "DIGGING",
   "pronunciations": "ˈdɪgɪŋ"
 },
 {
   "id": 9903,
   "word": "DIGNIFIED",
   "pronunciations": "ˈdɪgnəˌfaɪd"
 },
 {
   "id": 9904,
   "word": "DILUTION",
   "pronunciations": "daɪˈluːʃən, dɪˈluːʃən"
 },
 {
   "id": 9905,
   "word": "DIRECTING",
   "pronunciations": "dɝˈɛktɪŋ, diːˈrɛktɪŋ, daɪˈrɛktɪŋ, dɪˈrɛktɪŋ"
 },
 {
   "id": 9906,
   "word": "DIRECTORY",
   "pronunciations": "dɝˈɛktɝi, daɪˈrɛktɝi, diːˈrɛktɝi, dɪˈrɛktɝi"
 },
 {
   "id": 9907,
   "word": "DISAGREE",
   "pronunciations": "dɪsəˈgriː"
 },
 {
   "id": 9908,
   "word": "DISAPPOINTING",
   "pronunciations": "ˌdɪsəˈpɔɪntɪŋ, ˌdɪsəˈpɔɪnɪŋ"
 },
 {
   "id": 9909,
   "word": "DISCOMFORT",
   "pronunciations": "dɪˈskʌmfɝt"
 },
 {
   "id": 9910,
   "word": "DISCONTINUED",
   "pronunciations": "dɪskənˈtɪnjuːd"
 },
 {
   "id": 9911,
   "word": "DISCOVERING",
   "pronunciations": "dɪˈskʌvɝɪŋ"
 },
 {
   "id": 9912,
   "word": "DISCRETE",
   "pronunciations": "dɪˈskriːt"
 },
 {
   "id": 9913,
   "word": "DISCRIMINATING",
   "pronunciations": "dɪˈskrɪməˌneɪtɪŋ"
 },
 {
   "id": 9914,
   "word": "DISCS",
   "pronunciations": "ˈdɪsks"
 },
 {
   "id": 9915,
   "word": "DISMISSAL",
   "pronunciations": "dɪˈsmɪsəl"
 },
 {
   "id": 9916,
   "word": "DISOBEDIENCE",
   "pronunciations": "ˌdɪsəˈbiːdiːəns, ˌdɪsoʊˈbiːdiːəns"
 },
 {
   "id": 9917,
   "word": "DISORDER",
   "pronunciations": "dɪˈsɔrdɝ"
 },
 {
   "id": 9918,
   "word": "DISORDERS",
   "pronunciations": "dɪˈsɔrdɝz"
 },
 {
   "id": 9919,
   "word": "DISPERSED",
   "pronunciations": "dɪˈspɝːst"
 },
 {
   "id": 9920,
   "word": "DISPLEASED",
   "pronunciations": "dɪˈspliːzd"
 },
 {
   "id": 9921,
   "word": "DISTORTION",
   "pronunciations": "dɪˈstɔrʃən"
 },
 {
   "id": 9922,
   "word": "DISTRESSING",
   "pronunciations": "dɪˈstrɛsɪŋ"
 },
 {
   "id": 9923,
   "word": "DISTRIBUTOR",
   "pronunciations": "dɪˈstrɪbjətɝ"
 },
 {
   "id": 9924,
   "word": "DIVERSIFIED",
   "pronunciations": "daɪˈvɝːsəˌfaɪd, dɪˈvɝːsəˌfaɪd"
 },
 {
   "id": 9925,
   "word": "DIVERSION",
   "pronunciations": "daɪˈvɝːʒən, dɪˈvɝːʒən"
 },
 {
   "id": 9926,
   "word": "DIVIDING",
   "pronunciations": "dɪˈvaɪdɪŋ"
 },
 {
   "id": 9927,
   "word": "DIVINITY",
   "pronunciations": "dɪˈvɪnəti"
 },
 {
   "id": 9928,
   "word": "DOMINATES",
   "pronunciations": "ˈdɑːməˌneɪts"
 },
 {
   "id": 9929,
   "word": "DONATED",
   "pronunciations": "ˈdoʊˌneɪtəd, ˈdoʊˌneɪtɪd"
 },
 {
   "id": 9930,
   "word": "DONOVAN",
   "pronunciations": "ˈdɑːnəvən"
 },
 {
   "id": 9931,
   "word": "DOUBLING",
   "pronunciations": "ˈdʌbəlɪŋ, ˈdʌblɪŋ"
 },
 {
   "id": 9932,
   "word": "DRAINED",
   "pronunciations": "ˈdreɪnd"
 },
 {
   "id": 9933,
   "word": "DRIPPING",
   "pronunciations": "ˈdrɪpɪŋ"
 },
 {
   "id": 9934,
   "word": "DRUNKEN",
   "pronunciations": "ˈdrʌŋkən"
 },
 {
   "id": 9935,
   "word": "DUBIOUS",
   "pronunciations": "ˈduːbiːəs"
 },
 {
   "id": 9936,
   "word": "DUCLOS",
   "pronunciations": "dəˈkloʊz"
 },
 {
   "id": 9937,
   "word": "DUGOUT",
   "pronunciations": "ˈdʌˌgaʊt"
 },
 {
   "id": 9938,
   "word": "DWELLINGS",
   "pronunciations": "ˈdwɛlɪŋz"
 },
 {
   "id": 9939,
   "word": "EASIEST",
   "pronunciations": "ˈiːziːəst"
 },
 {
   "id": 9940,
   "word": "ECHOED",
   "pronunciations": "ˈɛkoʊd"
 },
 {
   "id": 9941,
   "word": "ECONOMIES",
   "pronunciations": "ɪˈkɑːnəmiːz, iːˈkɑːnəmiːz"
 },
 {
   "id": 9942,
   "word": "EDGED",
   "pronunciations": "ˈɛdʒd"
 },
 {
   "id": 9943,
   "word": "EDITED",
   "pronunciations": "ˈɛdətəd, ˈɛdɪtɪd"
 },
 {
   "id": 9944,
   "word": "EDUCATE",
   "pronunciations": "ˈɛdʒəˌkeɪt, ˈɛdʒjuːˌkeɪt"
 },
 {
   "id": 9945,
   "word": "ELASTIC",
   "pronunciations": "ɪˈlæstɪk"
 },
 {
   "id": 9946,
   "word": "ELBOWS",
   "pronunciations": "ˈɛlˌboʊz"
 },
 {
   "id": 9947,
   "word": "ELEPHANT",
   "pronunciations": "ˈɛləfənt"
 },
 {
   "id": 9948,
   "word": "ELIZABETHAN",
   "pronunciations": "ˌɛlɪzəˈbiːθən"
 },
 {
   "id": 9949,
   "word": "ELLIS",
   "pronunciations": "ˈɛlɪs"
 },
 {
   "id": 9950,
   "word": "EMBASSIES",
   "pronunciations": "ˈɛmbəsiːz"
 },
 {
   "id": 9951,
   "word": "EMBODIED",
   "pronunciations": "ɪmˈbɑːdiːd"
 },
 {
   "id": 9952,
   "word": "EMERGENCIES",
   "pronunciations": "ɪˈmɝːdʒənsiːz, ˈiːmɝdʒənsiːz"
 },
 {
   "id": 9953,
   "word": "EN",
   "pronunciations": "ˈɛn"
 },
 {
   "id": 9954,
   "word": "ENACT",
   "pronunciations": "ɪˈnækt"
 },
 {
   "id": 9955,
   "word": "ENACTMENT",
   "pronunciations": "ɛˈnæktmənt, ɛˈnækmənt"
 },
 {
   "id": 9956,
   "word": "ENCLOSURE",
   "pronunciations": "ɛnˈkloʊʒɝ, ɪnˈkloʊʒɝ"
 },
 {
   "id": 9957,
   "word": "ENDEAVOR",
   "pronunciations": "ɪnˈdɛvɝ"
 },
 {
   "id": 9958,
   "word": "ENDLESSLY",
   "pronunciations": "ˈɛndləsli"
 },
 {
   "id": 9959,
   "word": "ENDOWED",
   "pronunciations": "ɛnˈdaʊd"
 },
 {
   "id": 9960,
   "word": "ENGAGES",
   "pronunciations": "ɪnˈgeɪdʒɪz"
 },
 {
   "id": 9961,
   "word": "ENLARGE",
   "pronunciations": "ˌɛnˈlɑːrdʒ"
 },
 {
   "id": 9962,
   "word": "ENLARGED",
   "pronunciations": "ˌɛnˈlɑːrdʒd"
 },
 {
   "id": 9963,
   "word": "ENLIGHTENED",
   "pronunciations": "ˌɛnˈlaɪtənd"
 },
 {
   "id": 9964,
   "word": "ENTIRETY",
   "pronunciations": "ɪnˈtaɪɝti"
 },
 {
   "id": 9965,
   "word": "ENVIRONMENTAL",
   "pronunciations": "ɪnˌvaɪrənˈmɛntəl, ɪnˌvaɪrənˈmɛnəl"
 },
 {
   "id": 9966,
   "word": "ENVY",
   "pronunciations": "ˈɛnvi"
 },
 {
   "id": 9967,
   "word": "EPITHETS",
   "pronunciations": "ˈɛpəˌθɛts"
 },
 {
   "id": 9968,
   "word": "EQUITY",
   "pronunciations": "ˈɛkwəti"
 },
 {
   "id": 9969,
   "word": "ERRAND",
   "pronunciations": "ˈɛrənd"
 },
 {
   "id": 9970,
   "word": "ERUPTED",
   "pronunciations": "ˌiːˈrʌptɪd, ˌɪˈrʌptɪd"
 },
 {
   "id": 9971,
   "word": "ESCALATION",
   "pronunciations": "ˌɛskəˈleɪʃən"
 },
 {
   "id": 9972,
   "word": "EVALUATING",
   "pronunciations": "ɪˈvæljuːˌeɪtɪŋ, iːˈvæljuːˌeɪtɪŋ"
 },
 {
   "id": 9973,
   "word": "EVANSTON",
   "pronunciations": "ˈɛvənstən"
 },
 {
   "id": 9974,
   "word": "EVOKED",
   "pronunciations": "ɪˈvoʊkt, iːˈvoʊkt"
 },
 {
   "id": 9975,
   "word": "EXALTED",
   "pronunciations": "ɪgˈzɔltɪd"
 },
 {
   "id": 9976,
   "word": "EXAMINING",
   "pronunciations": "ɪgˈzæmɪnɪŋ"
 },
 {
   "id": 9977,
   "word": "EXCHANGED",
   "pronunciations": "ɪksˈtʃeɪndʒd"
 },
 {
   "id": 9978,
   "word": "EXCITEDLY",
   "pronunciations": "ɪkˈsaɪtədli"
 },
 {
   "id": 9979,
   "word": "EXCLUDE",
   "pronunciations": "ɪksˈkluːd"
 },
 {
   "id": 9980,
   "word": "EXCLUSION",
   "pronunciations": "ɪksˈkluːʒən"
 },
 {
   "id": 9981,
   "word": "EXECUTE",
   "pronunciations": "ˈɛksəˌkjuːt"
 },
 {
   "id": 9982,
   "word": "EXHAUST",
   "pronunciations": "ɪgˈzɔst"
 },
 {
   "id": 9983,
   "word": "EXIT",
   "pronunciations": "ˈɛgzɪt, ˈɛksət"
 },
 {
   "id": 9984,
   "word": "EXOTIC",
   "pronunciations": "ɪgˈzɑːtɪk"
 },
 {
   "id": 9985,
   "word": "EXPEDIENT",
   "pronunciations": "ɪkˈspiːdiːənt"
 },
 {
   "id": 9986,
   "word": "EXPERIENCING",
   "pronunciations": "ɪkˈspɪriːənsɪŋ"
 },
 {
   "id": 9987,
   "word": "EXPERIMENTING",
   "pronunciations": "ɛkˈspɛrəˌmɛntɪŋ"
 },
 {
   "id": 9988,
   "word": "EXPLODING",
   "pronunciations": "ɪkˈsploʊdɪŋ"
 },
 {
   "id": 9989,
   "word": "EXPRESSIVE",
   "pronunciations": "ɪkˈsprɛsɪv"
 },
 {
   "id": 9990,
   "word": "EXUBERANT",
   "pronunciations": "ɪgˈzuːbɝənt"
 },
 {
   "id": 9991,
   "word": "EYED",
   "pronunciations": "ˈaɪd"
 },
 {
   "id": 9992,
   "word": "EYELIDS",
   "pronunciations": "ˈaɪˌlɪdz"
 },
 {
   "id": 9993,
   "word": "FACADE",
   "pronunciations": "fəˈsɑːd"
 },
 {
   "id": 9994,
   "word": "FACTO",
   "pronunciations": "ˈfæktoʊ"
 },
 {
   "id": 9995,
   "word": "FACTUAL",
   "pronunciations": "ˈfæktʃuːəl"
 },
 {
   "id": 9996,
   "word": "FAINTLY",
   "pronunciations": "ˈfeɪntli"
 },
 {
   "id": 9997,
   "word": "FARE",
   "pronunciations": "ˈfɛr"
 },
 {
   "id": 9998,
   "word": "FARMER'S",
   "pronunciations": "ˈfɑːrmɝz"
 },
 {
   "id": 9999,
   "word": "FASCINATED",
   "pronunciations": "ˈfæsəˌneɪtəd, ˈfæsəˌneɪtɪd"
 },
 {
   "id": 10000,
   "word": "FASHIONED",
   "pronunciations": "ˈfæʃənd"
 },
 {
   "id": 10001,
   "word": "FASTEST",
   "pronunciations": "ˈfæstəst"
 },
 {
   "id": 10002,
   "word": "FATTY",
   "pronunciations": "ˈfæti"
 },
 {
   "id": 10003,
   "word": "FAULTS",
   "pronunciations": "ˈfɔlts"
 },
 {
   "id": 10004,
   "word": "FE",
   "pronunciations": "ˈfeɪ"
 },
 {
   "id": 10005,
   "word": "FEARLESS",
   "pronunciations": "ˈfɪrləs"
 },
 {
   "id": 10006,
   "word": "FERGUSON",
   "pronunciations": "ˈfɝːgəsən"
 },
 {
   "id": 10007,
   "word": "FIDEL",
   "pronunciations": "fɪˈdɛl"
 },
 {
   "id": 10008,
   "word": "FIERY",
   "pronunciations": "ˈfaɪɝi"
 },
 {
   "id": 10009,
   "word": "FILTHY",
   "pronunciations": "ˈfɪlθi"
 },
 {
   "id": 10010,
   "word": "FIREARMS",
   "pronunciations": "ˈfaɪɝˌɑːrmz, ˈfaɪˌrɑːrmz"
 },
 {
   "id": 10011,
   "word": "FISHERMEN",
   "pronunciations": "ˈfɪʃɝmɪn"
 },
 {
   "id": 10012,
   "word": "FLANNAGAN",
   "pronunciations": "ˈflænəgən"
 },
 {
   "id": 10013,
   "word": "FLATLY",
   "pronunciations": "ˈflætli"
 },
 {
   "id": 10014,
   "word": "FLATTERED",
   "pronunciations": "ˈflætɝd"
 },
 {
   "id": 10015,
   "word": "FLEETING",
   "pronunciations": "ˈfliːtɪŋ"
 },
 {
   "id": 10016,
   "word": "FLETCHER",
   "pronunciations": "ˈflɛtʃɝ"
 },
 {
   "id": 10017,
   "word": "FLOATED",
   "pronunciations": "ˈfloʊtəd, ˈfloʊtɪd"
 },
 {
   "id": 10018,
   "word": "FLOORING",
   "pronunciations": "ˈflɔrɪŋ"
 },
 {
   "id": 10019,
   "word": "FOLD",
   "pronunciations": "ˈfoʊld"
 },
 {
   "id": 10020,
   "word": "FORENSIC",
   "pronunciations": "fɝˈɛnsɪk, ˌfɔˈrɛnsɪk"
 },
 {
   "id": 10021,
   "word": "FORERUNNER",
   "pronunciations": "ˈfɔˌrənɝ"
 },
 {
   "id": 10022,
   "word": "FORGETTING",
   "pronunciations": "fɝˈgɛtɪŋ, fɔrˈgɛtɪŋ"
 },
 {
   "id": 10023,
   "word": "FORKS",
   "pronunciations": "ˈfɔrks"
 },
 {
   "id": 10024,
   "word": "FORMATIONS",
   "pronunciations": "fɔrˈmeɪʃənz"
 },
 {
   "id": 10025,
   "word": "FORTIES",
   "pronunciations": "ˈfɔrtiːz"
 },
 {
   "id": 10026,
   "word": "FORTIFIED",
   "pronunciations": "ˈfɔrtəˌfaɪd"
 },
 {
   "id": 10027,
   "word": "FORTY-FIVE",
   "pronunciations": "ˈfɔrtiːˌfaɪv"
 },
 {
   "id": 10028,
   "word": "FOSTERED",
   "pronunciations": "ˈfɑːstɝd"
 },
 {
   "id": 10029,
   "word": "FRAGMENTARY",
   "pronunciations": "ˈfrægmənˌtɛri"
 },
 {
   "id": 10030,
   "word": "FRANKFURT",
   "pronunciations": "ˈfræŋkfɝt"
 },
 {
   "id": 10031,
   "word": "FRANKFURTERS",
   "pronunciations": "ˈfræŋkfɝtɝz"
 },
 {
   "id": 10032,
   "word": "FRONTAGE",
   "pronunciations": "ˈfrʌntɪdʒ"
 },
 {
   "id": 10033,
   "word": "FRONTS",
   "pronunciations": "ˈfrʌnts"
 },
 {
   "id": 10034,
   "word": "FRUITFUL",
   "pronunciations": "ˈfruːtfəl"
 },
 {
   "id": 10035,
   "word": "FUDO",
   "pronunciations": "ˈfjuːdoʊ"
 },
 {
   "id": 10036,
   "word": "FUTILITY",
   "pronunciations": "fjuːˈtɪləti"
 },
 {
   "id": 10037,
   "word": "FUZZY",
   "pronunciations": "ˈfʌzi"
 },
 {
   "id": 10038,
   "word": "GADGETS",
   "pronunciations": "ˈgædʒəts"
 },
 {
   "id": 10039,
   "word": "GALA",
   "pronunciations": "ˈgælə, ˈgeɪlə"
 },
 {
   "id": 10040,
   "word": "GALAXIES",
   "pronunciations": "ˈgæləksiːz"
 },
 {
   "id": 10041,
   "word": "GALL",
   "pronunciations": "ˈgɔl"
 },
 {
   "id": 10042,
   "word": "GARBAGE",
   "pronunciations": "ˈgɑːrbɪdʒ"
 },
 {
   "id": 10043,
   "word": "GASES",
   "pronunciations": "ˈgæsəz, ˈgæsɪz"
 },
 {
   "id": 10044,
   "word": "GATHERINGS",
   "pronunciations": "ˈgæðɝɪŋz"
 },
 {
   "id": 10045,
   "word": "GAUDY",
   "pronunciations": "ˈgɔdi"
 },
 {
   "id": 10046,
   "word": "GAZED",
   "pronunciations": "ˈgeɪzd"
 },
 {
   "id": 10047,
   "word": "GENERALIZATIONS",
   "pronunciations": "ˌdʒɛnɝələˈzeɪʃənz, ˌdʒɛnrələˈzeɪʃənz"
 },
 {
   "id": 10048,
   "word": "GENERATE",
   "pronunciations": "ˈdʒɛnɝˌeɪt"
 },
 {
   "id": 10049,
   "word": "GENERATING",
   "pronunciations": "ˈdʒɛnɝˌeɪtɪŋ"
 },
 {
   "id": 10050,
   "word": "GENEROSITY",
   "pronunciations": "ˌdʒɛnɝˈɑːsəti"
 },
 {
   "id": 10051,
   "word": "GESTURES",
   "pronunciations": "ˈdʒɛstʃɝz"
 },
 {
   "id": 10052,
   "word": "GIBBS",
   "pronunciations": "ˈgɪbz"
 },
 {
   "id": 10053,
   "word": "GIBBY",
   "pronunciations": "ˈdʒɪbi"
 },
 {
   "id": 10054,
   "word": "GILES",
   "pronunciations": "ˈdʒaɪlz"
 },
 {
   "id": 10055,
   "word": "GLARE",
   "pronunciations": "ˈglɛr"
 },
 {
   "id": 10056,
   "word": "GLARING",
   "pronunciations": "ˈglɛrɪŋ"
 },
 {
   "id": 10057,
   "word": "GLEN",
   "pronunciations": "ˈglɛn"
 },
 {
   "id": 10058,
   "word": "GLOUCESTER",
   "pronunciations": "ˈglɔstɝ"
 },
 {
   "id": 10059,
   "word": "GLOVES",
   "pronunciations": "ˈglʌvz"
 },
 {
   "id": 10060,
   "word": "GORE",
   "pronunciations": "ˈgɔr"
 },
 {
   "id": 10061,
   "word": "GORGEOUS",
   "pronunciations": "ˈgɔrdʒəs"
 },
 {
   "id": 10062,
   "word": "GOULDING",
   "pronunciations": "ˈguːldɪŋ"
 },
 {
   "id": 10063,
   "word": "GOVERN",
   "pronunciations": "ˈgʌvɝn"
 },
 {
   "id": 10064,
   "word": "GRADUATING",
   "pronunciations": "ˈgrædʒəˌweɪtɪŋ, ˈgrædʒuːˌeɪtɪŋ"
 },
 {
   "id": 10065,
   "word": "GRAPES",
   "pronunciations": "ˈgreɪps"
 },
 {
   "id": 10066,
   "word": "GRAVELY",
   "pronunciations": "ˈgreɪvli"
 },
 {
   "id": 10067,
   "word": "GRAVEYARD",
   "pronunciations": "ˈgreɪvˌjɑːrd"
 },
 {
   "id": 10068,
   "word": "GRAVITY",
   "pronunciations": "ˈgrævəti, ˈgrævɪti"
 },
 {
   "id": 10069,
   "word": "GREET",
   "pronunciations": "ˈgriːt"
 },
 {
   "id": 10070,
   "word": "GRINNING",
   "pronunciations": "ˈgrɪnɪŋ"
 },
 {
   "id": 10071,
   "word": "GROPED",
   "pronunciations": "ˈgroʊpt"
 },
 {
   "id": 10072,
   "word": "GRUDGE",
   "pronunciations": "ˈgrʌdʒ"
 },
 {
   "id": 10073,
   "word": "GRUMBLE",
   "pronunciations": "ˈgrʌmbəl"
 },
 {
   "id": 10074,
   "word": "GUBERNATORIAL",
   "pronunciations": "guːˌbɝːnəˈtɔˌriːəl"
 },
 {
   "id": 10075,
   "word": "GUILD",
   "pronunciations": "ˈgɪld"
 },
 {
   "id": 10076,
   "word": "GUNFIRE",
   "pronunciations": "ˈgʌnˌfaɪɝ, ˈgʌnˌfaɪr"
 },
 {
   "id": 10077,
   "word": "HAILED",
   "pronunciations": "ˈheɪld"
 },
 {
   "id": 10078,
   "word": "HALLWAY",
   "pronunciations": "ˈhɔlˌweɪ"
 },
 {
   "id": 10079,
   "word": "HAMLET",
   "pronunciations": "ˈhæmlət, ˈhæmlɪt"
 },
 {
   "id": 10080,
   "word": "HAMM",
   "pronunciations": "ˈhæm"
 },
 {
   "id": 10081,
   "word": "HANGED",
   "pronunciations": "ˈhæŋd"
 },
 {
   "id": 10082,
   "word": "HANOVERIAN",
   "pronunciations": "ˌhænoʊˈvɪriːən"
 },
 {
   "id": 10083,
   "word": "HARMONIES",
   "pronunciations": "ˈhɑːrməniːz"
 },
 {
   "id": 10084,
   "word": "HARRINGTON",
   "pronunciations": "ˈhɛrɪŋtən"
 },
 {
   "id": 10085,
   "word": "HAZE",
   "pronunciations": "ˈheɪz"
 },
 {
   "id": 10086,
   "word": "HEADLINES",
   "pronunciations": "ˈhɛdˌlaɪnz"
 },
 {
   "id": 10087,
   "word": "HEARS",
   "pronunciations": "ˈhiːrz"
 },
 {
   "id": 10088,
   "word": "HEIR",
   "pronunciations": "ˈɛr"
 },
 {
   "id": 10089,
   "word": "HEISER",
   "pronunciations": "ˈhaɪsɝ"
 },
 {
   "id": 10090,
   "word": "HESITATION",
   "pronunciations": "ˌhɛzəˈteɪʃən"
 },
 {
   "id": 10091,
   "word": "HINTED",
   "pronunciations": "ˈhɪntəd, ˈhɪntɪd, ˈhɪnɪd"
 },
 {
   "id": 10092,
   "word": "HITLER'S",
   "pronunciations": "ˈhɪtlɝz"
 },
 {
   "id": 10093,
   "word": "HOOD",
   "pronunciations": "ˈhʊd"
 },
 {
   "id": 10094,
   "word": "HOOFS",
   "pronunciations": "ˈhʊfs, ˈhuːfs"
 },
 {
   "id": 10095,
   "word": "HOOKED",
   "pronunciations": "ˈhʊkt"
 },
 {
   "id": 10096,
   "word": "HOPELESSLY",
   "pronunciations": "ˈhoʊpləsli"
 },
 {
   "id": 10097,
   "word": "HOPKINS",
   "pronunciations": "ˈhɑːpkɪnz"
 },
 {
   "id": 10098,
   "word": "HOTTER",
   "pronunciations": "ˈhɑːtɝ"
 },
 {
   "id": 10099,
   "word": "HOUND",
   "pronunciations": "ˈhaʊnd"
 },
 {
   "id": 10100,
   "word": "HOUSEKEEPING",
   "pronunciations": "ˈhaʊˌskiːpɪŋ"
 },
 {
   "id": 10101,
   "word": "HUGGING",
   "pronunciations": "ˈhʌgɪŋ"
 },
 {
   "id": 10102,
   "word": "HUNCH",
   "pronunciations": "ˈhʌntʃ"
 },
 {
   "id": 10103,
   "word": "HUNTED",
   "pronunciations": "ˈhʌntəd, ˈhʌntɪd, ˈhʌnəd, ˈhʌnɪd"
 },
 {
   "id": 10104,
   "word": "HYPOCRISY",
   "pronunciations": "hɪˈpɑːkrəsi"
 },
 {
   "id": 10105,
   "word": "HYSTERIA",
   "pronunciations": "hɪˈstɛriːə"
 },
 {
   "id": 10106,
   "word": "IDIOM",
   "pronunciations": "ˈɪdiːəm"
 },
 {
   "id": 10107,
   "word": "IDOL",
   "pronunciations": "ˈaɪdəl"
 },
 {
   "id": 10108,
   "word": "ILLUSIONS",
   "pronunciations": "ˌɪˈluːʒənz"
 },
 {
   "id": 10109,
   "word": "ILLUSTRATES",
   "pronunciations": "ˈɪləˌstreɪts"
 },
 {
   "id": 10110,
   "word": "IMMATURE",
   "pronunciations": "ˌɪmətˈjʊr"
 },
 {
   "id": 10111,
   "word": "IMMORTAL",
   "pronunciations": "ˌɪˈmɔrtəl"
 },
 {
   "id": 10112,
   "word": "IMMUNITY",
   "pronunciations": "ˌɪˈmjuːnəti, ˌɪˈmjuːnɪti"
 },
 {
   "id": 10113,
   "word": "IMPAIRED",
   "pronunciations": "ˌɪmˈpɛrd"
 },
 {
   "id": 10114,
   "word": "IMPLYING",
   "pronunciations": "ˌɪmˈplaɪɪŋ"
 },
 {
   "id": 10115,
   "word": "IMPOSING",
   "pronunciations": "ˌɪmˈpoʊzɪŋ"
 },
 {
   "id": 10116,
   "word": "INACTIVE",
   "pronunciations": "ˌɪˈnæktɪv"
 },
 {
   "id": 10117,
   "word": "INCIDENCE",
   "pronunciations": "ˈɪnsədəns, ˈɪnsɪdəns"
 },
 {
   "id": 10118,
   "word": "INCREDIBLY",
   "pronunciations": "ˌɪnˈkrɛdəbli"
 },
 {
   "id": 10119,
   "word": "INDICES",
   "pronunciations": "ˈɪndɪˌsiːz, ˈɪndəsɪz"
 },
 {
   "id": 10120,
   "word": "INEFFICIENT",
   "pronunciations": "ˌɪnɪˈfɪʃənt"
 },
 {
   "id": 10121,
   "word": "INEXPERIENCED",
   "pronunciations": "ˌɪnɛkˈspɪriːənst"
 },
 {
   "id": 10122,
   "word": "INFERENCE",
   "pronunciations": "ˈɪnfɝəns"
 },
 {
   "id": 10123,
   "word": "INFERIOR",
   "pronunciations": "ˌɪnˈfɪriːɝ"
 },
 {
   "id": 10124,
   "word": "INFIELD",
   "pronunciations": "ˈɪnˌfiːld"
 },
 {
   "id": 10125,
   "word": "INFORM",
   "pronunciations": "ˌɪnˈfɔrm"
 },
 {
   "id": 10126,
   "word": "INFRINGEMENT",
   "pronunciations": "ˌɪnˈfrɪndʒmənt"
 },
 {
   "id": 10127,
   "word": "INHUMAN",
   "pronunciations": "ˌɪnˈhjuːmən"
 },
 {
   "id": 10128,
   "word": "INITIATION",
   "pronunciations": "ˌɪˌnɪʃiːˈeɪʃən"
 },
 {
   "id": 10129,
   "word": "INJECTION",
   "pronunciations": "ˌɪnˈdʒɛkʃən"
 },
 {
   "id": 10130,
   "word": "INK",
   "pronunciations": "ˈɪŋk"
 },
 {
   "id": 10131,
   "word": "INNOVATION",
   "pronunciations": "ˌɪnəˈveɪʃən, ˌɪnoʊˈveɪʃən"
 },
 {
   "id": 10132,
   "word": "INSCRIBED",
   "pronunciations": "ˌɪnˈskraɪbd"
 },
 {
   "id": 10133,
   "word": "INSOFAR",
   "pronunciations": "ˈɪnsəfɑːr"
 },
 {
   "id": 10134,
   "word": "INSUFFICIENT",
   "pronunciations": "ˌɪnsəˈfɪʃənt"
 },
 {
   "id": 10135,
   "word": "INSULT",
   "pronunciations": "ˌɪnˈsʌlt, ˈɪnˌsəlt"
 },
 {
   "id": 10136,
   "word": "INTAKE",
   "pronunciations": "ˈɪnˌteɪk"
 },
 {
   "id": 10137,
   "word": "INTEGRATE",
   "pronunciations": "ˈɪntəˌgreɪt, ˈɪnəˌgreɪt"
 },
 {
   "id": 10138,
   "word": "INTERFAITH",
   "pronunciations": "ˌɪntɝˈfeɪθ"
 },
 {
   "id": 10139,
   "word": "INTERVIEWING",
   "pronunciations": "ˈɪntɝvˌjuːɪŋ"
 },
 {
   "id": 10140,
   "word": "INTUITIVE",
   "pronunciations": "ˌɪnˈtuːətɪv"
 },
 {
   "id": 10141,
   "word": "INVALID",
   "pronunciations": "ˈɪnvələd, ˈɪnvəlɪd, ˌɪnˈvæləd"
 },
 {
   "id": 10142,
   "word": "INVENT",
   "pronunciations": "ˌɪnˈvɛnt"
 },
 {
   "id": 10143,
   "word": "INVENTOR",
   "pronunciations": "ˌɪnˈvɛntɝ"
 },
 {
   "id": 10144,
   "word": "INVITES",
   "pronunciations": "ˌɪnˈvaɪts"
 },
 {
   "id": 10145,
   "word": "IRONS",
   "pronunciations": "ˈaɪɝnz"
 },
 {
   "id": 10146,
   "word": "IRRITATION",
   "pronunciations": "ˌɪrɪˈteɪʃən"
 },
 {
   "id": 10147,
   "word": "ISSUANCE",
   "pronunciations": "ˈɪʃuːəns"
 },
 {
   "id": 10148,
   "word": "ITALIANS",
   "pronunciations": "ˌɪˈtæljənz"
 },
 {
   "id": 10149,
   "word": "JEN",
   "pronunciations": "ˈdʒɛn"
 },
 {
   "id": 10150,
   "word": "JERUSALEM",
   "pronunciations": "dʒɝˈuːsələm"
 },
 {
   "id": 10151,
   "word": "JOINTLY",
   "pronunciations": "ˈdʒɔɪntli"
 },
 {
   "id": 10152,
   "word": "JOYS",
   "pronunciations": "ˈdʒɔɪz"
 },
 {
   "id": 10153,
   "word": "JUAN",
   "pronunciations": "ˈwɑːn, ˈhwɑːn"
 },
 {
   "id": 10154,
   "word": "JUNCTION",
   "pronunciations": "ˈdʒʌŋkʃən"
 },
 {
   "id": 10155,
   "word": "KAHLER",
   "pronunciations": "ˈkɑːlɝ"
 },
 {
   "id": 10156,
   "word": "KARNS",
   "pronunciations": "ˈkɑːrnz"
 },
 {
   "id": 10157,
   "word": "KENNAN",
   "pronunciations": "ˈkɛnən"
 },
 {
   "id": 10158,
   "word": "KIDDING",
   "pronunciations": "ˈkɪdɪŋ"
 },
 {
   "id": 10159,
   "word": "KINGS",
   "pronunciations": "ˈkɪŋz"
 },
 {
   "id": 10160,
   "word": "KITTY",
   "pronunciations": "ˈkɪti"
 },
 {
   "id": 10161,
   "word": "KNIVES",
   "pronunciations": "ˈnaɪvz"
 },
 {
   "id": 10162,
   "word": "KYOTO",
   "pronunciations": "ˈkjoʊtoʊ"
 },
 {
   "id": 10163,
   "word": "LACE",
   "pronunciations": "ˈleɪs"
 },
 {
   "id": 10164,
   "word": "LAMB",
   "pronunciations": "ˈlæm"
 },
 {
   "id": 10165,
   "word": "LAMBS",
   "pronunciations": "ˈlæmz"
 },
 {
   "id": 10166,
   "word": "LANDMARKS",
   "pronunciations": "ˈlændˌmɑːrks"
 },
 {
   "id": 10167,
   "word": "LARGE-SCALE",
   "pronunciations": "ˈlɑːrdʒˌskeɪl"
 },
 {
   "id": 10168,
   "word": "LAUNDERING",
   "pronunciations": "ˈlɔndɝɪŋ"
 },
 {
   "id": 10169,
   "word": "LEDGER",
   "pronunciations": "ˈlɛdʒɝ"
 },
 {
   "id": 10170,
   "word": "LEGION",
   "pronunciations": "ˈliːdʒən"
 },
 {
   "id": 10171,
   "word": "LEGISLATOR",
   "pronunciations": "ˈlɛdʒəˌsleɪtɝ"
 },
 {
   "id": 10172,
   "word": "LEMMA",
   "pronunciations": "ˈlɛmə"
 },
 {
   "id": 10173,
   "word": "LENDING",
   "pronunciations": "ˈlɛndɪŋ"
 },
 {
   "id": 10174,
   "word": "LEO",
   "pronunciations": "ˈliːoʊ"
 },
 {
   "id": 10175,
   "word": "LESSENING",
   "pronunciations": "ˈlɛsənɪŋ"
 },
 {
   "id": 10176,
   "word": "LEVY",
   "pronunciations": "ˈlɛvi, ˈliːvi"
 },
 {
   "id": 10177,
   "word": "LEXINGTON",
   "pronunciations": "ˈlɛksɪŋtən"
 },
 {
   "id": 10178,
   "word": "LIABILITY",
   "pronunciations": "ˌlaɪəˈbɪlɪti"
 },
 {
   "id": 10179,
   "word": "LILIAN",
   "pronunciations": "ˈlɪliːən, ˈlɪljən"
 },
 {
   "id": 10180,
   "word": "LINDEN",
   "pronunciations": "ˈlɪndən"
 },
 {
   "id": 10181,
   "word": "LINGER",
   "pronunciations": "ˈlɪŋgɝ, ˈlɪŋɝ"
 },
 {
   "id": 10182,
   "word": "LINKS",
   "pronunciations": "ˈlɪŋks"
 },
 {
   "id": 10183,
   "word": "LISTING",
   "pronunciations": "ˈlɪstɪŋ"
 },
 {
   "id": 10184,
   "word": "LOCKS",
   "pronunciations": "ˈlɑːks"
 },
 {
   "id": 10185,
   "word": "LONGED",
   "pronunciations": "ˈlɔŋd"
 },
 {
   "id": 10186,
   "word": "LOOKUP",
   "pronunciations": "ˈlʊkəp"
 },
 {
   "id": 10187,
   "word": "LORE",
   "pronunciations": "ˈlɔr"
 },
 {
   "id": 10188,
   "word": "LUMP",
   "pronunciations": "ˈlʌmp"
 },
 {
   "id": 10189,
   "word": "LURE",
   "pronunciations": "ˈlʊr"
 },
 {
   "id": 10190,
   "word": "LYRICAL",
   "pronunciations": "ˈlɪrɪkəl"
 },
 {
   "id": 10191,
   "word": "MAGNIFICENTLY",
   "pronunciations": "mægˈnɪfəsəntli"
 },
 {
   "id": 10192,
   "word": "MAILS",
   "pronunciations": "ˈmeɪlz"
 },
 {
   "id": 10193,
   "word": "MANDATE",
   "pronunciations": "ˈmænˌdeɪt"
 },
 {
   "id": 10194,
   "word": "MANIPULATION",
   "pronunciations": "məˌnɪpjəˈleɪʃən"
 },
 {
   "id": 10195,
   "word": "MAO",
   "pronunciations": "ˈmaʊ"
 },
 {
   "id": 10196,
   "word": "MAPLE",
   "pronunciations": "ˈmeɪpəl"
 },
 {
   "id": 10197,
   "word": "MAPPING",
   "pronunciations": "ˈmæpɪŋ"
 },
 {
   "id": 10198,
   "word": "MARCUS",
   "pronunciations": "ˈmɑːrkəs"
 },
 {
   "id": 10199,
   "word": "MARINAS",
   "pronunciations": "mɝˈiːnəz"
 },
 {
   "id": 10200,
   "word": "MARKSMAN",
   "pronunciations": "ˈmɑːrksmən"
 },
 {
   "id": 10201,
   "word": "MASCULINE",
   "pronunciations": "ˈmæskjələn"
 },
 {
   "id": 10202,
   "word": "MASTER'S",
   "pronunciations": "ˈmæstɝz"
 },
 {
   "id": 10203,
   "word": "MATERIALISM",
   "pronunciations": "məˈtɪriːəˌlɪzəm"
 },
 {
   "id": 10204,
   "word": "MAURICE",
   "pronunciations": "mɔˈriːs, ˈmɑːrɪs"
 },
 {
   "id": 10205,
   "word": "MAXIMIZATION",
   "pronunciations": "ˌmæksɪmɪˈzeɪʃən"
 },
 {
   "id": 10206,
   "word": "MCCARTHY",
   "pronunciations": "məˈkɑːrθi"
 },
 {
   "id": 10207,
   "word": "MEADOWS",
   "pronunciations": "ˈmɛˌdoʊz"
 },
 {
   "id": 10208,
   "word": "MEDAL",
   "pronunciations": "ˈmɛdəl"
 },
 {
   "id": 10209,
   "word": "MEDITERRANEAN",
   "pronunciations": "ˌmɛdətɝˈeɪniːən"
 },
 {
   "id": 10210,
   "word": "MENTIONS",
   "pronunciations": "ˈmɛnʃənz"
 },
 {
   "id": 10211,
   "word": "MERCHANDISE",
   "pronunciations": "ˈmɝːtʃənˌdaɪz"
 },
 {
   "id": 10212,
   "word": "METALS",
   "pronunciations": "ˈmɛtəlz"
 },
 {
   "id": 10213,
   "word": "MIKE'S",
   "pronunciations": "ˈmaɪks"
 },
 {
   "id": 10214,
   "word": "MILDLY",
   "pronunciations": "ˈmaɪldli"
 },
 {
   "id": 10215,
   "word": "MINT",
   "pronunciations": "ˈmɪnt"
 },
 {
   "id": 10216,
   "word": "MISPLACED",
   "pronunciations": "mɪˈspleɪst"
 },
 {
   "id": 10217,
   "word": "MOLDS",
   "pronunciations": "ˈmoʊldz"
 },
 {
   "id": 10218,
   "word": "MOLESWORTH",
   "pronunciations": "ˈmoʊlzˌwɝːθ"
 },
 {
   "id": 10219,
   "word": "MOLOTOV",
   "pronunciations": "ˈmɔləˌtɑːf"
 },
 {
   "id": 10220,
   "word": "MONASTIC",
   "pronunciations": "məˈnæstɪk"
 },
 {
   "id": 10221,
   "word": "MONOTONY",
   "pronunciations": "məˈnɑːtəni"
 },
 {
   "id": 10222,
   "word": "MONTPELIER",
   "pronunciations": "mɑːntˈpiːliːɝ"
 },
 {
   "id": 10223,
   "word": "MORALLY",
   "pronunciations": "ˈmɔrəli"
 },
 {
   "id": 10224,
   "word": "MORALS",
   "pronunciations": "ˈmɔrəlz"
 },
 {
   "id": 10225,
   "word": "MORES",
   "pronunciations": "ˈmɔˌreɪz, ˈmɔˌriːz"
 },
 {
   "id": 10226,
   "word": "MOTELS",
   "pronunciations": "moʊˈtɛlz"
 },
 {
   "id": 10227,
   "word": "MOTIONLESS",
   "pronunciations": "ˈmoʊʃənləs"
 },
 {
   "id": 10228,
   "word": "MOUTHPIECE",
   "pronunciations": "ˈmaʊθˌpiːs"
 },
 {
   "id": 10229,
   "word": "MULLINS",
   "pronunciations": "ˈmʌˌlɪnz"
 },
 {
   "id": 10230,
   "word": "MULTIPLIED",
   "pronunciations": "ˈmʌltəˌplaɪd"
 },
 {
   "id": 10231,
   "word": "MURPHY",
   "pronunciations": "ˈmɝːfi"
 },
 {
   "id": 10232,
   "word": "MYRIAD",
   "pronunciations": "ˈmɪriːəd"
 },
 {
   "id": 10233,
   "word": "MYSTERIES",
   "pronunciations": "ˈmɪstɝiːz"
 },
 {
   "id": 10234,
   "word": "NAPOLEON",
   "pronunciations": "nəˈpoʊliːən, nəˈpoʊljən"
 },
 {
   "id": 10235,
   "word": "NARCOTICS",
   "pronunciations": "nɑːrˈkɑːtɪks"
 },
 {
   "id": 10236,
   "word": "NARROWER",
   "pronunciations": "ˈnɛroʊɝ"
 },
 {
   "id": 10237,
   "word": "NASHVILLE",
   "pronunciations": "ˈnæʃvɪl"
 },
 {
   "id": 10238,
   "word": "NEGOTIATED",
   "pronunciations": "nəˈgoʊʃiːˌeɪtəd, nɪˈgoʊʃiːˌeɪtɪd"
 },
 {
   "id": 10239,
   "word": "NEWCOMER",
   "pronunciations": "ˈnuːˌkəmɝ"
 },
 {
   "id": 10240,
   "word": "NEWCOMERS",
   "pronunciations": "ˈnuːˌkəmɝz"
 },
 {
   "id": 10241,
   "word": "NICHOLAS",
   "pronunciations": "ˈnɪkələs, ˈnɪkləs"
 },
 {
   "id": 10242,
   "word": "NICK'S",
   "pronunciations": "ˈnɪks"
 },
 {
   "id": 10243,
   "word": "NICKEL",
   "pronunciations": "ˈnɪkəl"
 },
 {
   "id": 10244,
   "word": "NIKITA",
   "pronunciations": "ˌnɪˈkiːtə, nəˈkiːtə"
 },
 {
   "id": 10245,
   "word": "NOBEL",
   "pronunciations": "noʊˈbɛl"
 },
 {
   "id": 10246,
   "word": "NODDING",
   "pronunciations": "ˈnɑːdɪŋ"
 },
 {
   "id": 10247,
   "word": "NOMENCLATURE",
   "pronunciations": "ˈnoʊmənˌkleɪtʃɝ"
 },
 {
   "id": 10248,
   "word": "NOTEWORTHY",
   "pronunciations": "ˈnoʊˌtwɝːði"
 },
 {
   "id": 10249,
   "word": "NOVELTIES",
   "pronunciations": "ˈnɑːvəltiːz"
 },
 {
   "id": 10250,
   "word": "NUMBERING",
   "pronunciations": "ˈnʌmbɝɪŋ"
 },
 {
   "id": 10251,
   "word": "OATS",
   "pronunciations": "ˈoʊts"
 },
 {
   "id": 10252,
   "word": "OBEYED",
   "pronunciations": "oʊˈbeɪd"
 },
 {
   "id": 10253,
   "word": "OBSCURED",
   "pronunciations": "əbsˈkjʊrd"
 },
 {
   "id": 10254,
   "word": "OBSTACLES",
   "pronunciations": "ˈɑːbstəkəlz"
 },
 {
   "id": 10255,
   "word": "OCCUPYING",
   "pronunciations": "ˈɑːkjəˌpaɪɪŋ"
 },
 {
   "id": 10256,
   "word": "OFFSPRING",
   "pronunciations": "ˈɔfˌsprɪŋ"
 },
 {
   "id": 10257,
   "word": "OLD-FASHIONED",
   "pronunciations": "ˌoʊldˈfæʃənd"
 },
 {
   "id": 10258,
   "word": "OLIVER",
   "pronunciations": "ˈɑːləvɝ, ˈɑːlɪvɝ"
 },
 {
   "id": 10259,
   "word": "OLYMPIC",
   "pronunciations": "oʊˈlɪmpɪk"
 },
 {
   "id": 10260,
   "word": "OPENINGS",
   "pronunciations": "ˈoʊpənɪŋz"
 },
 {
   "id": 10261,
   "word": "ORGANISMS",
   "pronunciations": "ˈɔrgəˌnɪzəmz"
 },
 {
   "id": 10262,
   "word": "ORGASM",
   "pronunciations": "ˈɔrgæzəm"
 },
 {
   "id": 10263,
   "word": "ORIGINS",
   "pronunciations": "ˈɔrədʒɪnz"
 },
 {
   "id": 10264,
   "word": "OUTBOARD",
   "pronunciations": "ˈaʊtˌbɔrd"
 },
 {
   "id": 10265,
   "word": "OUTRAGED",
   "pronunciations": "ˈaʊˌtreɪdʒd"
 },
 {
   "id": 10266,
   "word": "OVEN",
   "pronunciations": "ˈʌvən"
 },
 {
   "id": 10267,
   "word": "OVERCOMES",
   "pronunciations": "ˈoʊvɝˌkəmz"
 },
 {
   "id": 10268,
   "word": "OVERLOOKED",
   "pronunciations": "ˈoʊvɝˌlʊkt"
 },
 {
   "id": 10269,
   "word": "OVERWHELMINGLY",
   "pronunciations": "ˌoʊvɝˈwɛlmɪŋli, ˌoʊvɝˈhwɛlmɪŋli"
 },
 {
   "id": 10270,
   "word": "PACES",
   "pronunciations": "ˈpeɪsɪz"
 },
 {
   "id": 10271,
   "word": "PACING",
   "pronunciations": "ˈpeɪsɪŋ"
 },
 {
   "id": 10272,
   "word": "PACKAGING",
   "pronunciations": "ˈpækɪdʒɪŋ"
 },
 {
   "id": 10273,
   "word": "PAGEANT",
   "pronunciations": "ˈpædʒənt"
 },
 {
   "id": 10274,
   "word": "PAKISTAN",
   "pronunciations": "ˈpækɪˌstæn"
 },
 {
   "id": 10275,
   "word": "PALESTINE",
   "pronunciations": "ˈpæləˌstaɪn"
 },
 {
   "id": 10276,
   "word": "PAPAL",
   "pronunciations": "ˈpeɪpəl"
 },
 {
   "id": 10277,
   "word": "PARAMETER",
   "pronunciations": "pɝˈæmətɝ"
 },
 {
   "id": 10278,
   "word": "PARTICIPANTS",
   "pronunciations": "pɑːrˈtɪsəpənts"
 },
 {
   "id": 10279,
   "word": "PARTICIPATES",
   "pronunciations": "pɑːrˈtɪsəˌpeɪts"
 },
 {
   "id": 10280,
   "word": "PATRICIA",
   "pronunciations": "pəˈtrɪʃə"
 },
 {
   "id": 10281,
   "word": "PATTED",
   "pronunciations": "ˈpætəd, ˈpætɪd"
 },
 {
   "id": 10282,
   "word": "PAULING",
   "pronunciations": "ˈpɔlɪŋ"
 },
 {
   "id": 10283,
   "word": "PAXTON",
   "pronunciations": "ˈpækstən"
 },
 {
   "id": 10284,
   "word": "PEAKED",
   "pronunciations": "ˈpiːkt"
 },
 {
   "id": 10285,
   "word": "PEASANT",
   "pronunciations": "ˈpɛzənt"
 },
 {
   "id": 10286,
   "word": "PENETRATE",
   "pronunciations": "ˈpɛnəˌtreɪt"
 },
 {
   "id": 10287,
   "word": "PENSIONS",
   "pronunciations": "ˈpɛnʃənz"
 },
 {
   "id": 10288,
   "word": "PERCEPTUAL",
   "pronunciations": "pɝˈsɛptʃəwəl"
 },
 {
   "id": 10289,
   "word": "PERCUSSIVE",
   "pronunciations": "pɝˈkʌsəv"
 },
 {
   "id": 10290,
   "word": "PERFORMER",
   "pronunciations": "pɝˈfɔrmɝ"
 },
 {
   "id": 10291,
   "word": "PERSECUTION",
   "pronunciations": "ˌpɝːsəˈkjuːʃən"
 },
 {
   "id": 10292,
   "word": "PERSISTS",
   "pronunciations": "pɝˈsɪsts"
 },
 {
   "id": 10293,
   "word": "PHONES",
   "pronunciations": "ˈfoʊnz"
 },
 {
   "id": 10294,
   "word": "PHOSPHATE",
   "pronunciations": "ˈfɑːsfeɪt"
 },
 {
   "id": 10295,
   "word": "PHOTOCHEMICAL",
   "pronunciations": "ˌfoʊtoʊˈkɛmɪkəl"
 },
 {
   "id": 10296,
   "word": "PHOTOGRAPHY",
   "pronunciations": "fəˈtɑːgrəfi"
 },
 {
   "id": 10297,
   "word": "PHOTOS",
   "pronunciations": "ˈfoʊˌtoʊz"
 },
 {
   "id": 10298,
   "word": "PINCHED",
   "pronunciations": "ˈpɪntʃt"
 },
 {
   "id": 10299,
   "word": "PIPES",
   "pronunciations": "ˈpaɪps"
 },
 {
   "id": 10300,
   "word": "PISTON",
   "pronunciations": "ˈpɪstən"
 },
 {
   "id": 10301,
   "word": "PLANK",
   "pronunciations": "ˈplæŋk"
 },
 {
   "id": 10302,
   "word": "PLANTATIONS",
   "pronunciations": "ˌplænˈteɪʃənz"
 },
 {
   "id": 10303,
   "word": "PLATOON",
   "pronunciations": "pləˈtuːn"
 },
 {
   "id": 10304,
   "word": "PLAYER'S",
   "pronunciations": "ˈpleɪɝz"
 },
 {
   "id": 10305,
   "word": "PLEADED",
   "pronunciations": "ˈpliːdəd, ˈpliːdɪd"
 },
 {
   "id": 10306,
   "word": "PLENTIFUL",
   "pronunciations": "ˈplɛntəfəl, ˈplɛntɪfəl, ˈplɛnəfəl, ˈplɛnɪfəl"
 },
 {
   "id": 10307,
   "word": "PLIGHT",
   "pronunciations": "ˈplaɪt"
 },
 {
   "id": 10308,
   "word": "POLAR",
   "pronunciations": "ˈpoʊlɝ"
 },
 {
   "id": 10309,
   "word": "POLITE",
   "pronunciations": "pəˈlaɪt"
 },
 {
   "id": 10310,
   "word": "POLYMERIZATION",
   "pronunciations": "ˌpɑːlɪmɝəˈzeɪʃən"
 },
 {
   "id": 10311,
   "word": "PONDS",
   "pronunciations": "ˈpɑːndz"
 },
 {
   "id": 10312,
   "word": "POP",
   "pronunciations": "ˈpɑːp"
 },
 {
   "id": 10313,
   "word": "POPULARLY",
   "pronunciations": "ˈpɑːpjəlɝli"
 },
 {
   "id": 10314,
   "word": "PORTRAITS",
   "pronunciations": "ˈpɔrtrəts"
 },
 {
   "id": 10315,
   "word": "PORTRAYAL",
   "pronunciations": "pɔrˈtreɪəl"
 },
 {
   "id": 10316,
   "word": "POSED",
   "pronunciations": "ˈpoʊzd"
 },
 {
   "id": 10317,
   "word": "POSTAL",
   "pronunciations": "ˈpoʊstəl"
 },
 {
   "id": 10318,
   "word": "POSTCARD",
   "pronunciations": "ˈpoʊstˌkɑːrd, ˈpoʊˌskɑːrd"
 },
 {
   "id": 10319,
   "word": "POSTPONE",
   "pronunciations": "poʊstˈpoʊn"
 },
 {
   "id": 10320,
   "word": "POTENTIALLY",
   "pronunciations": "pəˈtɛnʃəli"
 },
 {
   "id": 10321,
   "word": "POWDERED",
   "pronunciations": "ˈpaʊdɝd"
 },
 {
   "id": 10322,
   "word": "PRECAUTIONS",
   "pronunciations": "priːˈkɔʃənz"
 },
 {
   "id": 10323,
   "word": "PREDOMINANTLY",
   "pronunciations": "ˌprɪˈdɑːmənəntˌliː"
 },
 {
   "id": 10324,
   "word": "PREFERENCES",
   "pronunciations": "ˈprɛfɝənsɪz, ˈprɛfrənsɪz"
 },
 {
   "id": 10325,
   "word": "PREMISE",
   "pronunciations": "ˈprɛmɪs"
 },
 {
   "id": 10326,
   "word": "PREPARATORY",
   "pronunciations": "prɪˈpɛrəˌtɔri, ˈprɛprəˌtɔri"
 },
 {
   "id": 10327,
   "word": "PREVAIL",
   "pronunciations": "prɪˈveɪl, priːˈveɪl"
 },
 {
   "id": 10328,
   "word": "PREVAILED",
   "pronunciations": "prɪˈveɪld, priːˈveɪld"
 },
 {
   "id": 10329,
   "word": "PREVAILS",
   "pronunciations": "prɪˈveɪlz, priːˈveɪlz"
 },
 {
   "id": 10330,
   "word": "PREY",
   "pronunciations": "ˈpreɪ"
 },
 {
   "id": 10331,
   "word": "PRICING",
   "pronunciations": "ˈpraɪsɪŋ"
 },
 {
   "id": 10332,
   "word": "PRINCETON",
   "pronunciations": "ˈprɪnstən"
 },
 {
   "id": 10333,
   "word": "PRISONER",
   "pronunciations": "ˈprɪzənɝ, ˈprɪznɝ"
 },
 {
   "id": 10334,
   "word": "PROBATION",
   "pronunciations": "proʊˈbeɪʃən"
 },
 {
   "id": 10335,
   "word": "PROCEDURAL",
   "pronunciations": "prəˈsiːdʒɝəl"
 },
 {
   "id": 10336,
   "word": "PRODUCTIONS",
   "pronunciations": "prəˈdʌkʃənz, proʊˈdʌkʃənz, pɝˈdʌkʃənz"
 },
 {
   "id": 10337,
   "word": "PROMPTED",
   "pronunciations": "ˈprɑːmptəd, ˈprɑːmptɪd"
 },
 {
   "id": 10338,
   "word": "PROPOSES",
   "pronunciations": "prəˈpoʊzɪz"
 },
 {
   "id": 10339,
   "word": "PROPRIETY",
   "pronunciations": "prəˈpraɪəti"
 },
 {
   "id": 10340,
   "word": "PROTESTING",
   "pronunciations": "prəˈtɛstɪŋ, ˈproʊˌtɛstɪŋ"
 },
 {
   "id": 10341,
   "word": "PROTOZOA",
   "pronunciations": "ˌproʊtəˈzoʊə"
 },
 {
   "id": 10342,
   "word": "PROVISIONAL",
   "pronunciations": "prəˈvɪʒənəl"
 },
 {
   "id": 10343,
   "word": "PROVOCATIVE",
   "pronunciations": "proʊˈvɑːkətɪv"
 },
 {
   "id": 10344,
   "word": "PROVOKED",
   "pronunciations": "prəˈvoʊkt"
 },
 {
   "id": 10345,
   "word": "PROXY",
   "pronunciations": "ˈprɑːksi"
 },
 {
   "id": 10346,
   "word": "PSYCHE",
   "pronunciations": "ˈsaɪki"
 },
 {
   "id": 10347,
   "word": "PSYCHOANALYTIC",
   "pronunciations": "ˌsaɪkoʊˌænəˈlɪtɪk"
 },
 {
   "id": 10348,
   "word": "PUNISHED",
   "pronunciations": "ˈpʌnɪʃt"
 },
 {
   "id": 10349,
   "word": "PUTT",
   "pronunciations": "ˈpʌt"
 },
 {
   "id": 10350,
   "word": "QUARRY",
   "pronunciations": "ˈkwɔri"
 },
 {
   "id": 10351,
   "word": "QUARTERLY",
   "pronunciations": "ˈkwɔrtɝli"
 },
 {
   "id": 10352,
   "word": "QUIVERING",
   "pronunciations": "ˈkwɪvɝɪŋ"
 },
 {
   "id": 10353,
   "word": "RADIOS",
   "pronunciations": "ˈreɪdiːˌoʊz"
 },
 {
   "id": 10354,
   "word": "RAGS",
   "pronunciations": "ˈrægz"
 },
 {
   "id": 10355,
   "word": "RAINING",
   "pronunciations": "ˈreɪnɪŋ"
 },
 {
   "id": 10356,
   "word": "RANCHERS",
   "pronunciations": "ˈræntʃɝz"
 },
 {
   "id": 10357,
   "word": "RATTLING",
   "pronunciations": "ˈrætlɪŋ, ˈrætəlɪŋ"
 },
 {
   "id": 10358,
   "word": "RAUCOUS",
   "pronunciations": "ˈrɔkəs"
 },
 {
   "id": 10359,
   "word": "RAYS",
   "pronunciations": "ˈreɪz"
 },
 {
   "id": 10360,
   "word": "REACTOR",
   "pronunciations": "riːˈæktɝ"
 },
 {
   "id": 10361,
   "word": "REASSURING",
   "pronunciations": "ˌriːəˈʃʊrɪŋ"
 },
 {
   "id": 10362,
   "word": "RECALLING",
   "pronunciations": "rɪˈkɔlɪŋ"
 },
 {
   "id": 10363,
   "word": "RECEIPTS",
   "pronunciations": "rɪˈsiːts, riːˈsiːts"
 },
 {
   "id": 10364,
   "word": "RECESSION",
   "pronunciations": "rɪˈsɛʃən, ˌriːˈsɛʃən"
 },
 {
   "id": 10365,
   "word": "RECIPIENT",
   "pronunciations": "rəˈsɪpiːənt, rɪˈsɪpiːənt"
 },
 {
   "id": 10366,
   "word": "RECKON",
   "pronunciations": "ˈrɛkən"
 },
 {
   "id": 10367,
   "word": "RECOGNIZABLE",
   "pronunciations": "ˌrɛkəgˈnaɪzəbəl"
 },
 {
   "id": 10368,
   "word": "RECORDER",
   "pronunciations": "rɪˈkɔrdɝ, riːˈkɔrdɝ"
 },
 {
   "id": 10369,
   "word": "RECRUITMENT",
   "pronunciations": "rəˈkruːtmənt, rɪˈkruːtmənt, riːˈkruːtmənt"
 },
 {
   "id": 10370,
   "word": "REDHEAD",
   "pronunciations": "ˈrɛdˌhɛd"
 },
 {
   "id": 10371,
   "word": "REDUCES",
   "pronunciations": "rɪˈduːsɪz, riːˈduːsɪz"
 },
 {
   "id": 10372,
   "word": "REFLECTIONS",
   "pronunciations": "rɪˈflɛkʃənz"
 },
 {
   "id": 10373,
   "word": "REFUGE",
   "pronunciations": "ˈrɛfjuːdʒ"
 },
 {
   "id": 10374,
   "word": "REFUGEE",
   "pronunciations": "ˈrɛfjuːdʒi"
 },
 {
   "id": 10375,
   "word": "REFUGEES",
   "pronunciations": "ˈrɛˌfjuːdʒiːz"
 },
 {
   "id": 10376,
   "word": "REGARDS",
   "pronunciations": "rɪˈgɑːrdz"
 },
 {
   "id": 10377,
   "word": "REGISTRY",
   "pronunciations": "ˈrɛdʒɪstri"
 },
 {
   "id": 10378,
   "word": "REGRESSION",
   "pronunciations": "rəˈgrɛʃən"
 },
 {
   "id": 10379,
   "word": "REGULATED",
   "pronunciations": "ˈrɛgjəˌleɪtəd, ˈrɛgjəˌleɪtɪd"
 },
 {
   "id": 10380,
   "word": "REHEARSED",
   "pronunciations": "riːˈhɝːst"
 },
 {
   "id": 10381,
   "word": "REIGN",
   "pronunciations": "ˈreɪn"
 },
 {
   "id": 10382,
   "word": "REINFORCED",
   "pronunciations": "ˌriːɪnˈfɔrst"
 },
 {
   "id": 10383,
   "word": "RELATE",
   "pronunciations": "rɪˈleɪt, riːˈleɪt"
 },
 {
   "id": 10384,
   "word": "RELAXATION",
   "pronunciations": "ˌriːlækˈseɪʃən"
 },
 {
   "id": 10385,
   "word": "RELIANCE",
   "pronunciations": "rɪˈlaɪəns, riːˈlaɪəns"
 },
 {
   "id": 10386,
   "word": "RELUCTANTLY",
   "pronunciations": "rɪˈlʌktəntli"
 },
 {
   "id": 10387,
   "word": "RENDEZVOUS",
   "pronunciations": "ˈrɑːndɪˌvuː"
 },
 {
   "id": 10388,
   "word": "RENO",
   "pronunciations": "ˈriːnoʊ"
 },
 {
   "id": 10389,
   "word": "RENTED",
   "pronunciations": "ˈrɛntəd, ˈrɛntɪd"
 },
 {
   "id": 10390,
   "word": "REPAY",
   "pronunciations": "riːˈpeɪ"
 },
 {
   "id": 10391,
   "word": "REPEAL",
   "pronunciations": "rɪˈpiːl, riːˈpiːl"
 },
 {
   "id": 10392,
   "word": "REPRODUCE",
   "pronunciations": "ˌriːprəˈduːs"
 },
 {
   "id": 10393,
   "word": "REPRODUCED",
   "pronunciations": "ˌriːprəˈduːst"
 },
 {
   "id": 10394,
   "word": "REPUTABLE",
   "pronunciations": "ˈrɛpjətəbəl"
 },
 {
   "id": 10395,
   "word": "RESIGNATION",
   "pronunciations": "ˌrɛzəgˈneɪʃən, ˌrɛzɪgˈneɪʃən"
 },
 {
   "id": 10396,
   "word": "RESISTORS",
   "pronunciations": "rɪˈzɪstɝz"
 },
 {
   "id": 10397,
   "word": "RESPONDS",
   "pronunciations": "rɪˈspɑːndz, riːˈspɑːndz"
 },
 {
   "id": 10398,
   "word": "RESTRAINING",
   "pronunciations": "riːˈstreɪnɪŋ"
 },
 {
   "id": 10399,
   "word": "RESTRAINTS",
   "pronunciations": "rɪˈstreɪnts, riːˈstreɪnts"
 },
 {
   "id": 10400,
   "word": "RESTRICTIVE",
   "pronunciations": "riːˈstrɪktɪv"
 },
 {
   "id": 10401,
   "word": "RETAINING",
   "pronunciations": "rɪˈteɪnɪŋ, riːˈteɪnɪŋ"
 },
 {
   "id": 10402,
   "word": "RETARDED",
   "pronunciations": "rɪˈtɑːrdɪd, riːˈtɑːrdəd, riːˈtɑːrdɪd"
 },
 {
   "id": 10403,
   "word": "REVENGE",
   "pronunciations": "riːˈvɛndʒ"
 },
 {
   "id": 10404,
   "word": "REVOLUTIONS",
   "pronunciations": "ˌrɛvəˈluːʃənz"
 },
 {
   "id": 10405,
   "word": "RHINE",
   "pronunciations": "ˈraɪn"
 },
 {
   "id": 10406,
   "word": "RIGOROUS",
   "pronunciations": "ˈrɪgɝəs"
 },
 {
   "id": 10407,
   "word": "RIOT",
   "pronunciations": "ˈraɪət"
 },
 {
   "id": 10408,
   "word": "ROCKET",
   "pronunciations": "ˈrɑːkət"
 },
 {
   "id": 10409,
   "word": "ROONEY",
   "pronunciations": "ˈruːni"
 },
 {
   "id": 10410,
   "word": "ROSES",
   "pronunciations": "ˈroʊzɪz"
 },
 {
   "id": 10411,
   "word": "ROUGE",
   "pronunciations": "ˈruːʒ"
 },
 {
   "id": 10412,
   "word": "ROYALTY",
   "pronunciations": "ˈrɔɪəlti"
 },
 {
   "id": 10413,
   "word": "RPM",
   "pronunciations": "ˈɑːrˈpiːˈɛm"
 },
 {
   "id": 10414,
   "word": "RUSSELL'S",
   "pronunciations": "ˈrʌsəlz"
 },
 {
   "id": 10415,
   "word": "RUTHLESS",
   "pronunciations": "ˈruːθləs"
 },
 {
   "id": 10416,
   "word": "SABELLA",
   "pronunciations": "səˈbɛlə"
 },
 {
   "id": 10417,
   "word": "SAGA",
   "pronunciations": "ˈsɑːgə"
 },
 {
   "id": 10418,
   "word": "SALAMI",
   "pronunciations": "səˈlɑːmi"
 },
 {
   "id": 10419,
   "word": "SAMPLED",
   "pronunciations": "ˈsæmpəld"
 },
 {
   "id": 10420,
   "word": "SATELLITES",
   "pronunciations": "ˈsætəˌlaɪts"
 },
 {
   "id": 10421,
   "word": "SATURATED",
   "pronunciations": "ˈsætʃɝˌeɪtəd, ˈsætʃɝˌeɪtɪd"
 },
 {
   "id": 10422,
   "word": "SAXONS",
   "pronunciations": "ˈsæksənz"
 },
 {
   "id": 10423,
   "word": "SCANDALS",
   "pronunciations": "ˈskændəlz"
 },
 {
   "id": 10424,
   "word": "SCHUYLKILL",
   "pronunciations": "sˈkjuːlˌkɪl"
 },
 {
   "id": 10425,
   "word": "SCRAPING",
   "pronunciations": "ˈskreɪpɪŋ"
 },
 {
   "id": 10426,
   "word": "SCRATCHED",
   "pronunciations": "ˈskrætʃt"
 },
 {
   "id": 10427,
   "word": "SCREECHING",
   "pronunciations": "ˈskriːtʃɪŋ"
 },
 {
   "id": 10428,
   "word": "SCULPTURES",
   "pronunciations": "ˈskʌlptʃɝz"
 },
 {
   "id": 10429,
   "word": "SEAMAN",
   "pronunciations": "ˈsiːmən"
 },
 {
   "id": 10430,
   "word": "SEATTLE",
   "pronunciations": "siːˈætəl"
 },
 {
   "id": 10431,
   "word": "SECURING",
   "pronunciations": "sɪˈkjʊrɪŋ"
 },
 {
   "id": 10432,
   "word": "SELF-DETERMINATION",
   "pronunciations": "ˈsɛlfdɪˌtɝːməˈneɪʃən"
 },
 {
   "id": 10433,
   "word": "SEMANTIC",
   "pronunciations": "sɪˈmæntɪk"
 },
 {
   "id": 10434,
   "word": "SEPARATING",
   "pronunciations": "ˈsɛpɝˌeɪtɪŋ"
 },
 {
   "id": 10435,
   "word": "SERIAL",
   "pronunciations": "ˈsɪˌriːəl"
 },
 {
   "id": 10436,
   "word": "SESAME",
   "pronunciations": "ˈsɛsəmi"
 },
 {
   "id": 10437,
   "word": "SHAEFER",
   "pronunciations": "ˈʃeɪfɝ"
 },
 {
   "id": 10438,
   "word": "SHEARING",
   "pronunciations": "ˈʃɪrɪŋ"
 },
 {
   "id": 10439,
   "word": "SHELLEY'S",
   "pronunciations": "ˈʃɛliːz"
 },
 {
   "id": 10440,
   "word": "SHERMAN'S",
   "pronunciations": "ˈʃɝːmənz"
 },
 {
   "id": 10441,
   "word": "SHORTENED",
   "pronunciations": "ˈʃɔrtənd"
 },
 {
   "id": 10442,
   "word": "SHORTSTOP",
   "pronunciations": "ˈʃɔrtˌstɑːp"
 },
 {
   "id": 10443,
   "word": "SHRILL",
   "pronunciations": "ˈʃrɪl"
 },
 {
   "id": 10444,
   "word": "SHRINE",
   "pronunciations": "ˈʃraɪn"
 },
 {
   "id": 10445,
   "word": "SHYLOCK",
   "pronunciations": "ˈʃaɪˌlɑːk"
 },
 {
   "id": 10446,
   "word": "SIGHTED",
   "pronunciations": "ˈsaɪtəd, ˈsaɪtɪd"
 },
 {
   "id": 10447,
   "word": "SIGNING",
   "pronunciations": "ˈsaɪnɪŋ"
 },
 {
   "id": 10448,
   "word": "SIMPKINS",
   "pronunciations": "ˈsɪmpkɪnz"
 },
 {
   "id": 10449,
   "word": "SIMULATED",
   "pronunciations": "ˈsɪmjəˌleɪtɪd"
 },
 {
   "id": 10450,
   "word": "SINCERELY",
   "pronunciations": "sɪnˈsɪrli"
 },
 {
   "id": 10451,
   "word": "SINNER",
   "pronunciations": "ˈsɪnɝ"
 },
 {
   "id": 10452,
   "word": "SKEPTICAL",
   "pronunciations": "ˈskɛptəkəl, ˈskɛptɪkəl"
 },
 {
   "id": 10453,
   "word": "SKIING",
   "pronunciations": "ˈskiːɪŋ"
 },
 {
   "id": 10454,
   "word": "SKINS",
   "pronunciations": "ˈskɪnz"
 },
 {
   "id": 10455,
   "word": "SLACKS",
   "pronunciations": "ˈslæks"
 },
 {
   "id": 10456,
   "word": "SLICK",
   "pronunciations": "ˈslɪk"
 },
 {
   "id": 10457,
   "word": "SLIPPERS",
   "pronunciations": "ˈslɪpɝz"
 },
 {
   "id": 10458,
   "word": "SLIPPING",
   "pronunciations": "ˈslɪpɪŋ"
 },
 {
   "id": 10459,
   "word": "SLOGAN",
   "pronunciations": "ˈsloʊgən"
 },
 {
   "id": 10460,
   "word": "SLOPES",
   "pronunciations": "ˈsloʊps"
 },
 {
   "id": 10461,
   "word": "SLOPING",
   "pronunciations": "ˈsloʊpɪŋ"
 },
 {
   "id": 10462,
   "word": "SMOOTHED",
   "pronunciations": "ˈsmuːðd"
 },
 {
   "id": 10463,
   "word": "SMUG",
   "pronunciations": "ˈsmʌg"
 },
 {
   "id": 10464,
   "word": "SNELLING",
   "pronunciations": "ˈsnɛlɪŋ"
 },
 {
   "id": 10465,
   "word": "SNOWS",
   "pronunciations": "ˈsnoʊz"
 },
 {
   "id": 10466,
   "word": "SOAK",
   "pronunciations": "ˈsoʊk"
 },
 {
   "id": 10467,
   "word": "SOCKS",
   "pronunciations": "ˈsɑːks"
 },
 {
   "id": 10468,
   "word": "SOFTENED",
   "pronunciations": "ˈsɔfənd"
 },
 {
   "id": 10469,
   "word": "SOILED",
   "pronunciations": "ˈsɔɪld"
 },
 {
   "id": 10470,
   "word": "SOLO",
   "pronunciations": "ˈsoʊˌloʊ"
 },
 {
   "id": 10471,
   "word": "SOMERS",
   "pronunciations": "ˈsʌmɝz"
 },
 {
   "id": 10472,
   "word": "SONAR",
   "pronunciations": "ˈsoʊnɑːr"
 },
 {
   "id": 10473,
   "word": "SOPHIA",
   "pronunciations": "soʊˈfiːə, ˈsoʊfiːə"
 },
 {
   "id": 10474,
   "word": "SPAIN",
   "pronunciations": "ˈspeɪn"
 },
 {
   "id": 10475,
   "word": "SPEAR",
   "pronunciations": "ˈspɪr"
 },
 {
   "id": 10476,
   "word": "SPECK",
   "pronunciations": "ˈspɛk"
 },
 {
   "id": 10477,
   "word": "SPECULATE",
   "pronunciations": "ˈspɛkjəˌleɪt"
 },
 {
   "id": 10478,
   "word": "SPIN",
   "pronunciations": "ˈspɪn"
 },
 {
   "id": 10479,
   "word": "SPIRITUALLY",
   "pronunciations": "ˈspɪrɪˌtʃuːəˌliː"
 },
 {
   "id": 10480,
   "word": "SPLENDOR",
   "pronunciations": "ˈsplɛndɝ"
 },
 {
   "id": 10481,
   "word": "SPONGE",
   "pronunciations": "ˈspʌndʒ"
 },
 {
   "id": 10482,
   "word": "SPONTANEITY",
   "pronunciations": "ˌspɑːntəˈniːəti"
 },
 {
   "id": 10483,
   "word": "SPORADIC",
   "pronunciations": "spɝˈædɪk"
 },
 {
   "id": 10484,
   "word": "SPRINKLE",
   "pronunciations": "ˈsprɪŋkəl"
 },
 {
   "id": 10485,
   "word": "SPRINKLING",
   "pronunciations": "ˈsprɪŋklɪŋ, ˈsprɪŋkəlɪŋ"
 },
 {
   "id": 10486,
   "word": "SQUALL",
   "pronunciations": "ˈskwɔl"
 },
 {
   "id": 10487,
   "word": "SQUAT",
   "pronunciations": "ˈskwɑːt"
 },
 {
   "id": 10488,
   "word": "SQUATTING",
   "pronunciations": "ˈskwɑːtɪŋ"
 },
 {
   "id": 10489,
   "word": "STALKED",
   "pronunciations": "ˈstɔkt"
 },
 {
   "id": 10490,
   "word": "STAMPED",
   "pronunciations": "ˈstæmpt"
 },
 {
   "id": 10491,
   "word": "STARK",
   "pronunciations": "ˈstɑːrk"
 },
 {
   "id": 10492,
   "word": "STARVATION",
   "pronunciations": "stɑːrˈveɪʃən"
 },
 {
   "id": 10493,
   "word": "STATUTES",
   "pronunciations": "ˈstætʃuːts"
 },
 {
   "id": 10494,
   "word": "STERLING",
   "pronunciations": "ˈstɝːlɪŋ"
 },
 {
   "id": 10495,
   "word": "STIMULATED",
   "pronunciations": "ˈstɪmjəˌleɪtəd, ˈstɪmjəˌleɪtɪd"
 },
 {
   "id": 10496,
   "word": "STIR",
   "pronunciations": "ˈstɝː"
 },
 {
   "id": 10497,
   "word": "STRAIGHTEN",
   "pronunciations": "ˈstreɪtən"
 },
 {
   "id": 10498,
   "word": "STRAINING",
   "pronunciations": "ˈstreɪnɪŋ"
 },
 {
   "id": 10499,
   "word": "STRAND",
   "pronunciations": "ˈstrænd"
 },
 {
   "id": 10500,
   "word": "STRANDED",
   "pronunciations": "ˈstrændəd, ˈstrændɪd"
 },
 {
   "id": 10501,
   "word": "STREAMING",
   "pronunciations": "ˈstriːmɪŋ"
 },
 {
   "id": 10502,
   "word": "STRIDES",
   "pronunciations": "ˈstraɪdz"
 },
 {
   "id": 10503,
   "word": "STRIVE",
   "pronunciations": "ˈstraɪv"
 },
 {
   "id": 10504,
   "word": "STUD",
   "pronunciations": "ˈstʌd"
 },
 {
   "id": 10505,
   "word": "STYRENE",
   "pronunciations": "ˈstaɪˌriːn"
 },
 {
   "id": 10506,
   "word": "SUBGROUPS",
   "pronunciations": "ˈsʌbˌgruːps"
 },
 {
   "id": 10507,
   "word": "SUBMERGED",
   "pronunciations": "səbˈmɝːdʒd"
 },
 {
   "id": 10508,
   "word": "SUBSCRIBERS",
   "pronunciations": "səbˈskraɪbɝz"
 },
 {
   "id": 10509,
   "word": "SUBSIDIARY",
   "pronunciations": "səbˈsɪdiːˌɛri"
 },
 {
   "id": 10510,
   "word": "SUBSPACE",
   "pronunciations": "ˈsʌbˌspeɪs"
 },
 {
   "id": 10511,
   "word": "SUBWAY",
   "pronunciations": "ˈsʌbˌweɪ"
 },
 {
   "id": 10512,
   "word": "SUMMED",
   "pronunciations": "ˈsʌmd"
 },
 {
   "id": 10513,
   "word": "SUMMER'S",
   "pronunciations": "ˈsʌmɝz"
 },
 {
   "id": 10514,
   "word": "SUPERFICIAL",
   "pronunciations": "ˌsuːpɝˈfɪʃəl"
 },
 {
   "id": 10515,
   "word": "SUPPORTIVE",
   "pronunciations": "səˈpɔrtɪv"
 },
 {
   "id": 10516,
   "word": "SUPPRESSION",
   "pronunciations": "səˈprɛʃən"
 },
 {
   "id": 10517,
   "word": "SURGED",
   "pronunciations": "ˈsɝːdʒd"
 },
 {
   "id": 10518,
   "word": "SURRENDERED",
   "pronunciations": "sɝˈɛndɝd"
 },
 {
   "id": 10519,
   "word": "SUSPICIONS",
   "pronunciations": "səˈspɪʃənz"
 },
 {
   "id": 10520,
   "word": "SWEDISH",
   "pronunciations": "ˈswiːdɪʃ"
 },
 {
   "id": 10521,
   "word": "SWELL",
   "pronunciations": "ˈswɛl"
 },
 {
   "id": 10522,
   "word": "SWITCHING",
   "pronunciations": "ˈswɪtʃɪŋ"
 },
 {
   "id": 10523,
   "word": "SWORD",
   "pronunciations": "ˈsɔrd"
 },
 {
   "id": 10524,
   "word": "SYMMETRY",
   "pronunciations": "ˈsɪmətri"
 },
 {
   "id": 10525,
   "word": "SYMPATHIZE",
   "pronunciations": "ˈsɪmpəˌθaɪz"
 },
 {
   "id": 10526,
   "word": "SYMPHONIC",
   "pronunciations": "sɪmˈfɑːnɪk"
 },
 {
   "id": 10527,
   "word": "SYMPTOMATIC",
   "pronunciations": "ˌsɪmptəˈmætɪk"
 },
 {
   "id": 10528,
   "word": "TABLESPOONS",
   "pronunciations": "ˈteɪbəlˌspuːnz"
 },
 {
   "id": 10529,
   "word": "TAILS",
   "pronunciations": "ˈteɪlz"
 },
 {
   "id": 10530,
   "word": "TAIWAN",
   "pronunciations": "ˈtaɪˈwɑːn"
 },
 {
   "id": 10531,
   "word": "TALENTED",
   "pronunciations": "ˈtæləntəd, ˈtæləntɪd"
 },
 {
   "id": 10532,
   "word": "TALLER",
   "pronunciations": "ˈtɔlɝ"
 },
 {
   "id": 10533,
   "word": "TALLYHO",
   "pronunciations": "ˌtæliːˈhoʊ"
 },
 {
   "id": 10534,
   "word": "TAMMANY",
   "pronunciations": "ˈtæməni"
 },
 {
   "id": 10535,
   "word": "TAPERED",
   "pronunciations": "ˈteɪpɝd"
 },
 {
   "id": 10536,
   "word": "TAPPED",
   "pronunciations": "ˈtæpt"
 },
 {
   "id": 10537,
   "word": "TART",
   "pronunciations": "ˈtɑːrt"
 },
 {
   "id": 10538,
   "word": "TED",
   "pronunciations": "ˈtɛd"
 },
 {
   "id": 10539,
   "word": "TEMPERAMENT",
   "pronunciations": "ˈtɛmprəmənt, ˈtɛmpɝmənt"
 },
 {
   "id": 10540,
   "word": "TENTH",
   "pronunciations": "ˈtɛnθ"
 },
 {
   "id": 10541,
   "word": "TERRACES",
   "pronunciations": "ˈtɛrəsəz, ˈtɛrəsɪz"
 },
 {
   "id": 10542,
   "word": "TERRESTRIAL",
   "pronunciations": "tɝˈɛstriːəl"
 },
 {
   "id": 10543,
   "word": "TERRIFIED",
   "pronunciations": "ˈtɛrəˌfaɪd"
 },
 {
   "id": 10544,
   "word": "TERRIFYING",
   "pronunciations": "ˈtɛrəˌfaɪɪŋ"
 },
 {
   "id": 10545,
   "word": "TERRY",
   "pronunciations": "ˈtɛri"
 },
 {
   "id": 10546,
   "word": "TESSIE",
   "pronunciations": "ˈtɛsi"
 },
 {
   "id": 10547,
   "word": "THIGHS",
   "pronunciations": "ˈθaɪz"
 },
 {
   "id": 10548,
   "word": "THIRTIES",
   "pronunciations": "ˈθɝːtiːz"
 },
 {
   "id": 10549,
   "word": "THREADS",
   "pronunciations": "ˈθrɛdz"
 },
 {
   "id": 10550,
   "word": "TIBET",
   "pronunciations": "təˈbɛt"
 },
 {
   "id": 10551,
   "word": "TIGER",
   "pronunciations": "ˈtaɪgɝ"
 },
 {
   "id": 10552,
   "word": "TITAN",
   "pronunciations": "ˈtaɪtən"
 },
 {
   "id": 10553,
   "word": "TOPPED",
   "pronunciations": "ˈtɑːpt"
 },
 {
   "id": 10554,
   "word": "TORSO",
   "pronunciations": "ˈtɔrˌsoʊ"
 },
 {
   "id": 10555,
   "word": "TOTALED",
   "pronunciations": "ˈtoʊtəld"
 },
 {
   "id": 10556,
   "word": "TOURING",
   "pronunciations": "ˈtʊrɪŋ"
 },
 {
   "id": 10557,
   "word": "TOWNSHIP",
   "pronunciations": "ˈtaʊnʃɪp"
 },
 {
   "id": 10558,
   "word": "TRACTORS",
   "pronunciations": "ˈtræktɝz"
 },
 {
   "id": 10559,
   "word": "TRAGEDIES",
   "pronunciations": "ˈtrædʒədiːz"
 },
 {
   "id": 10560,
   "word": "TRAILING",
   "pronunciations": "ˈtreɪlɪŋ"
 },
 {
   "id": 10561,
   "word": "TRANSFORM",
   "pronunciations": "trænsˈfɔrm, ˈtrænsfɔrm"
 },
 {
   "id": 10562,
   "word": "TRAPPED",
   "pronunciations": "ˈtræpt"
 },
 {
   "id": 10563,
   "word": "TRIGGERED",
   "pronunciations": "ˈtrɪgɝd"
 },
 {
   "id": 10564,
   "word": "TROOPER",
   "pronunciations": "ˈtruːpɝ"
 },
 {
   "id": 10565,
   "word": "TROTTED",
   "pronunciations": "ˈtrɑːtəd, ˈtrɑːtɪd"
 },
 {
   "id": 10566,
   "word": "TROUBLESOME",
   "pronunciations": "ˈtrʌbəlsəm"
 },
 {
   "id": 10567,
   "word": "TROUSERS",
   "pronunciations": "ˈtraʊzɝz"
 },
 {
   "id": 10568,
   "word": "TRUMPET",
   "pronunciations": "ˈtrʌmpət"
 },
 {
   "id": 10569,
   "word": "TRUSTS",
   "pronunciations": "ˈtrʌsts"
 },
 {
   "id": 10570,
   "word": "TUNES",
   "pronunciations": "ˈtuːnz"
 },
 {
   "id": 10571,
   "word": "TWENTY-THREE",
   "pronunciations": "ˈtwɛntiːˌθriː"
 },
 {
   "id": 10572,
   "word": "TWIN",
   "pronunciations": "ˈtwɪn"
 },
 {
   "id": 10573,
   "word": "TYPING",
   "pronunciations": "ˈtaɪpɪŋ"
 },
 {
   "id": 10574,
   "word": "UGLINESS",
   "pronunciations": "ˈʌgliːnəs"
 },
 {
   "id": 10575,
   "word": "UNAVAILABLE",
   "pronunciations": "ˌənəˈveɪləbəl"
 },
 {
   "id": 10576,
   "word": "UNAVOIDABLE",
   "pronunciations": "ˌənəˈvɔɪdəbəl"
 },
 {
   "id": 10577,
   "word": "UNBROKEN",
   "pronunciations": "ənˈbroʊkən"
 },
 {
   "id": 10578,
   "word": "UNCOVERED",
   "pronunciations": "ənˈkʌvɝd"
 },
 {
   "id": 10579,
   "word": "UNDERTOOK",
   "pronunciations": "ˌəndɝˈtʊk"
 },
 {
   "id": 10580,
   "word": "UNIFORMED",
   "pronunciations": "ˈjuːnəˌfɔrmd"
 },
 {
   "id": 10581,
   "word": "UNLOAD",
   "pronunciations": "ənˈloʊd"
 },
 {
   "id": 10582,
   "word": "UNMISTAKABLE",
   "pronunciations": "ˌənmɪˈsteɪkəbəl"
 },
 {
   "id": 10583,
   "word": "UNRELATED",
   "pronunciations": "ˌənrɪˈleɪtɪd, ˌənriːˈleɪtɪd"
 },
 {
   "id": 10584,
   "word": "UNWILLING",
   "pronunciations": "ənˈwɪlɪŋ"
 },
 {
   "id": 10585,
   "word": "UPHOLD",
   "pronunciations": "əpˈhoʊld"
 },
 {
   "id": 10586,
   "word": "UPTURN",
   "pronunciations": "əpˈtɝːn, ˈʌpˌtɝːn"
 },
 {
   "id": 10587,
   "word": "UTILITIES",
   "pronunciations": "juːˈtɪlətiːz"
 },
 {
   "id": 10588,
   "word": "UTMOST",
   "pronunciations": "ˈʌtˌmoʊst"
 },
 {
   "id": 10589,
   "word": "VAGINAL",
   "pronunciations": "vəˈdʒaɪnəl"
 },
 {
   "id": 10590,
   "word": "VALUATION",
   "pronunciations": "væljuːˈeɪʃən"
 },
 {
   "id": 10591,
   "word": "VANITY",
   "pronunciations": "ˈvænəti, ˈvænɪti"
 },
 {
   "id": 10592,
   "word": "VECTORS",
   "pronunciations": "ˈvɛktɝz"
 },
 {
   "id": 10593,
   "word": "VENICE",
   "pronunciations": "ˈvɛnəs, ˈvɛnɪs"
 },
 {
   "id": 10594,
   "word": "VERBS",
   "pronunciations": "ˈvɝːbz"
 },
 {
   "id": 10595,
   "word": "VICTORIES",
   "pronunciations": "ˈvɪktɝiːz, ˈvɪktriːz"
 },
 {
   "id": 10596,
   "word": "VIOLATE",
   "pronunciations": "ˈvaɪəleɪt"
 },
 {
   "id": 10597,
   "word": "VIOLET",
   "pronunciations": "ˈvaɪəlɪt"
 },
 {
   "id": 10598,
   "word": "VISIONS",
   "pronunciations": "ˈvɪʒənz"
 },
 {
   "id": 10599,
   "word": "VOWEL",
   "pronunciations": "ˈvaʊəl"
 },
 {
   "id": 10600,
   "word": "VULGAR",
   "pronunciations": "ˈvʌlgɝ"
 },
 {
   "id": 10601,
   "word": "VULNERABILITY",
   "pronunciations": "ˌvəlnɝəˈbɪlɪti"
 },
 {
   "id": 10602,
   "word": "WAGED",
   "pronunciations": "ˈweɪdʒd"
 },
 {
   "id": 10603,
   "word": "WALLPAPER",
   "pronunciations": "ˈwɔlˌpeɪpɝ"
 },
 {
   "id": 10604,
   "word": "WANDERING",
   "pronunciations": "ˈwɑːndɝɪŋ"
 },
 {
   "id": 10605,
   "word": "WARRIORS",
   "pronunciations": "ˈwɔriːɝz, ˈwɔrjɝz"
 },
 {
   "id": 10606,
   "word": "WARY",
   "pronunciations": "ˈwɛri"
 },
 {
   "id": 10607,
   "word": "WASHINGTON'S",
   "pronunciations": "ˈwɑːʃɪŋtənz, ˈwɔʃɪŋtənz"
 },
 {
   "id": 10608,
   "word": "WASTEFUL",
   "pronunciations": "ˈweɪstfəl"
 },
 {
   "id": 10609,
   "word": "WATERED",
   "pronunciations": "ˈwɔtɝd"
 },
 {
   "id": 10610,
   "word": "WEAKEN",
   "pronunciations": "ˈwiːkən"
 },
 {
   "id": 10611,
   "word": "WEARILY",
   "pronunciations": "ˈwɛrəli"
 },
 {
   "id": 10612,
   "word": "WEEKENDS",
   "pronunciations": "ˈwiːˌkɛndz"
 },
 {
   "id": 10613,
   "word": "WHIPPING",
   "pronunciations": "ˈwɪpɪŋ, ˈhwɪpɪŋ"
 },
 {
   "id": 10614,
   "word": "WHIPPLE",
   "pronunciations": "ˈwɪpəl, ˈhwɪpəl"
 },
 {
   "id": 10615,
   "word": "WHITEHEAD",
   "pronunciations": "ˈwaɪtˌhɛd, ˈhwaɪtˌhɛd"
 },
 {
   "id": 10616,
   "word": "WHOLESALE",
   "pronunciations": "ˈhoʊlˌseɪl"
 },
 {
   "id": 10617,
   "word": "WINK",
   "pronunciations": "ˈwɪŋk"
 },
 {
   "id": 10618,
   "word": "WINKING",
   "pronunciations": "ˈwɪŋkɪŋ"
 },
 {
   "id": 10619,
   "word": "WISER",
   "pronunciations": "ˈwaɪzɝ"
 },
 {
   "id": 10620,
   "word": "WORKMEN",
   "pronunciations": "ˈwɝːkmɪn"
 },
 {
   "id": 10621,
   "word": "WORLDS",
   "pronunciations": "ˈwɝːldz"
 },
 {
   "id": 10622,
   "word": "WRETCHED",
   "pronunciations": "ˈrɛtʃɪd"
 },
 {
   "id": 10623,
   "word": "WRINKLES",
   "pronunciations": "ˈrɪŋkəlz"
 },
 {
   "id": 10624,
   "word": "WRIT",
   "pronunciations": "ˈrɪt"
 },
 {
   "id": 10625,
   "word": "Y.",
   "pronunciations": "ˈwaɪ"
 },
 {
   "id": 10626,
   "word": "YANK",
   "pronunciations": "ˈjæŋk"
 },
 {
   "id": 10627,
   "word": "YEARNING",
   "pronunciations": "ˈjɝːnɪŋ"
 },
 {
   "id": 10628,
   "word": "YIELDS",
   "pronunciations": "ˈjiːldz"
 },
 {
   "id": 10629,
   "word": "YORK'S",
   "pronunciations": "ˈjɔrks"
 },
 {
   "id": 10630,
   "word": "YORKER",
   "pronunciations": "ˈjɔrkɝ"
 },
 {
   "id": 10631,
   "word": "YUGOSLAV",
   "pronunciations": "ˈjuːgoʊˌslɑːv"
 },
 {
   "id": 10632,
   "word": "A'S",
   "pronunciations": "ˈeɪz"
 },
 {
   "id": 10633,
   "word": "ABDOMEN",
   "pronunciations": "æbˈdoʊmən, ˈæbdəmən"
 },
 {
   "id": 10634,
   "word": "ABORTION",
   "pronunciations": "əˈbɔrʃən"
 },
 {
   "id": 10635,
   "word": "ABRAHAM",
   "pronunciations": "ˈeɪbrəˌhæm"
 },
 {
   "id": 10636,
   "word": "ACCELERATING",
   "pronunciations": "ækˈsɛlɝˌeɪtɪŋ"
 },
 {
   "id": 10637,
   "word": "ACCEPTS",
   "pronunciations": "ækˈsɛpts"
 },
 {
   "id": 10638,
   "word": "ACCIDENTALLY",
   "pronunciations": "ˌæksəˈdɛntəli, ˌæksəˈdɛnəli"
 },
 {
   "id": 10639,
   "word": "ACHING",
   "pronunciations": "ˈeɪkɪŋ"
 },
 {
   "id": 10640,
   "word": "ACROPOLIS",
   "pronunciations": "əˈkrɑːpələs"
 },
 {
   "id": 10641,
   "word": "ACTRESS",
   "pronunciations": "ˈæktrəs"
 },
 {
   "id": 10642,
   "word": "ADHESIVE",
   "pronunciations": "ædˈhiːsɪv, ədˈhiːsɪv"
 },
 {
   "id": 10643,
   "word": "ADIOS",
   "pronunciations": "ˌɑːdiːˈoʊs"
 },
 {
   "id": 10644,
   "word": "ADJUNCT",
   "pronunciations": "ˈæˌdʒəŋkt"
 },
 {
   "id": 10645,
   "word": "ADMINISTRATION'S",
   "pronunciations": "ædˌmɪnɪˈstreɪʃənz"
 },
 {
   "id": 10646,
   "word": "ADMIRABLY",
   "pronunciations": "ˈædmɝəbli"
 },
 {
   "id": 10647,
   "word": "ADVISER",
   "pronunciations": "ædˈvaɪzɝ"
 },
 {
   "id": 10648,
   "word": "ADVOCATING",
   "pronunciations": "ˈædvəˌkeɪtɪŋ"
 },
 {
   "id": 10649,
   "word": "AFFECTIONATE",
   "pronunciations": "əˈfɛkʃənət"
 },
 {
   "id": 10650,
   "word": "AFFIRMED",
   "pronunciations": "əˈfɝːmd"
 },
 {
   "id": 10651,
   "word": "AGITATION",
   "pronunciations": "ˌædʒəˈteɪʃən"
 },
 {
   "id": 10652,
   "word": "AILMENTS",
   "pronunciations": "ˈeɪlmənts"
 },
 {
   "id": 10653,
   "word": "AIRFIELDS",
   "pronunciations": "ˈɛrˌfiːldz"
 },
 {
   "id": 10654,
   "word": "AIRWAYS",
   "pronunciations": "ˈɛrˌweɪz"
 },
 {
   "id": 10655,
   "word": "AISLE",
   "pronunciations": "ˈaɪl, ˈaɪəl"
 },
 {
   "id": 10656,
   "word": "ALBUM",
   "pronunciations": "ˈælbəm"
 },
 {
   "id": 10657,
   "word": "ALIENATED",
   "pronunciations": "ˈeɪliːəˌneɪtɪd"
 },
 {
   "id": 10658,
   "word": "ALIGNED",
   "pronunciations": "əˈlaɪnd"
 },
 {
   "id": 10659,
   "word": "ALL-OUT",
   "pronunciations": "ˈɔˈlaʊt"
 },
 {
   "id": 10660,
   "word": "ALPHA",
   "pronunciations": "ˈælfə"
 },
 {
   "id": 10661,
   "word": "ALVIN",
   "pronunciations": "ˈælvɪn"
 },
 {
   "id": 10662,
   "word": "AMBASSADORS",
   "pronunciations": "æmˈbæsədɝz"
 },
 {
   "id": 10663,
   "word": "AMBIVALENT",
   "pronunciations": "æmˈbɪvələnt"
 },
 {
   "id": 10664,
   "word": "AMBULANCE",
   "pronunciations": "ˈæmbjələns"
 },
 {
   "id": 10665,
   "word": "AMORPHOUS",
   "pronunciations": "əˈmɔrfəs"
 },
 {
   "id": 10666,
   "word": "AMPLIFIED",
   "pronunciations": "ˈæmpləˌfaɪd"
 },
 {
   "id": 10667,
   "word": "AMPLIFIER",
   "pronunciations": "ˈæmpləˌfaɪɝ"
 },
 {
   "id": 10668,
   "word": "AMPLITUDE",
   "pronunciations": "ˈæmpləˌtuːd"
 },
 {
   "id": 10669,
   "word": "ANALYSTS",
   "pronunciations": "ˈænəlɪsts"
 },
 {
   "id": 10670,
   "word": "ANCESTORS",
   "pronunciations": "ˈænˌsɛstɝz"
 },
 {
   "id": 10671,
   "word": "ANEW",
   "pronunciations": "əˈnuː, ənˈjuː"
 },
 {
   "id": 10672,
   "word": "ANNIHILATION",
   "pronunciations": "əˌnaɪəˈleɪʃən"
 },
 {
   "id": 10673,
   "word": "ANNOUNCEMENTS",
   "pronunciations": "əˈnaʊnsmɛnts"
 },
 {
   "id": 10674,
   "word": "ANNOYING",
   "pronunciations": "əˈnɔɪɪŋ"
 },
 {
   "id": 10675,
   "word": "ANT",
   "pronunciations": "ˈænt"
 },
 {
   "id": 10676,
   "word": "ANTISEPTIC",
   "pronunciations": "ˌæntəˈsɛptɪk"
 },
 {
   "id": 10677,
   "word": "ANTONIO",
   "pronunciations": "ænˈtoʊniːoʊ"
 },
 {
   "id": 10678,
   "word": "ANYONE'S",
   "pronunciations": "ˈɛniːˌwənz"
 },
 {
   "id": 10679,
   "word": "APOLOGETICALLY",
   "pronunciations": "əˌpɑːləˈdʒɛtɪˌkliː"
 },
 {
   "id": 10680,
   "word": "APPLES",
   "pronunciations": "ˈæpəlz"
 },
 {
   "id": 10681,
   "word": "APPOINT",
   "pronunciations": "əˈpɔɪnt"
 },
 {
   "id": 10682,
   "word": "APPOINTMENTS",
   "pronunciations": "əˈpɔɪntmənts"
 },
 {
   "id": 10683,
   "word": "ARABIC",
   "pronunciations": "ˈærəbɪk, ˈɛrəbɪk"
 },
 {
   "id": 10684,
   "word": "ARISTOTLE'S",
   "pronunciations": "ˈɛrəˌstɑːtəlz"
 },
 {
   "id": 10685,
   "word": "ARMSTRONG",
   "pronunciations": "ˈɑːrmˌstrɑːŋ, ˈɑːrmˌstrɔŋ"
 },
 {
   "id": 10686,
   "word": "ARP",
   "pronunciations": "ˈɑːrp"
 },
 {
   "id": 10687,
   "word": "ARREARS",
   "pronunciations": "ɝˈɪrz"
 },
 {
   "id": 10688,
   "word": "ARROWS",
   "pronunciations": "ˈæroʊz, ˈɛroʊz"
 },
 {
   "id": 10689,
   "word": "ARTIFICIALLY",
   "pronunciations": "ˌɑːrtəˈfɪʃəli"
 },
 {
   "id": 10690,
   "word": "ARTISTS'",
   "pronunciations": "ˈɑːrtɪsts"
 },
 {
   "id": 10691,
   "word": "ASHES",
   "pronunciations": "ˈæʃɪz"
 },
 {
   "id": 10692,
   "word": "ASHORE",
   "pronunciations": "əˈʃɔr"
 },
 {
   "id": 10693,
   "word": "ASSASSIN",
   "pronunciations": "əˈsæsən"
 },
 {
   "id": 10694,
   "word": "ASSAULTED",
   "pronunciations": "əˈsɔltɪd"
 },
 {
   "id": 10695,
   "word": "ASSEMBLING",
   "pronunciations": "əˈsɛmbəlɪŋ, əˈsɛmblɪŋ"
 },
 {
   "id": 10696,
   "word": "ASSESS",
   "pronunciations": "əˈsɛs"
 },
 {
   "id": 10697,
   "word": "ASSESSMENTS",
   "pronunciations": "əˈsɛsmənts"
 },
 {
   "id": 10698,
   "word": "ASSURES",
   "pronunciations": "əˈʃʊrz"
 },
 {
   "id": 10699,
   "word": "ASTONISHED",
   "pronunciations": "əˈstɑːnɪʃt"
 },
 {
   "id": 10700,
   "word": "ASTONISHINGLY",
   "pronunciations": "əˈstɑːnɪʃɪŋli"
 },
 {
   "id": 10701,
   "word": "ASTRONOMICAL",
   "pronunciations": "ˌæstrəˈnɑːmɪkəl"
 },
 {
   "id": 10702,
   "word": "ATOP",
   "pronunciations": "əˈtɑːp"
 },
 {
   "id": 10703,
   "word": "ATTACKER",
   "pronunciations": "əˈtækɝ"
 },
 {
   "id": 10704,
   "word": "ATTAINING",
   "pronunciations": "əˈteɪnɪŋ"
 },
 {
   "id": 10705,
   "word": "ATTENDS",
   "pronunciations": "əˈtɛndz"
 },
 {
   "id": 10706,
   "word": "ATTIRE",
   "pronunciations": "əˈtaɪɝ"
 },
 {
   "id": 10707,
   "word": "ATTRIBUTE",
   "pronunciations": "əˈtrɪˌbjuːt"
 },
 {
   "id": 10708,
   "word": "AUGUSTA",
   "pronunciations": "əˈgʌstə"
 },
 {
   "id": 10709,
   "word": "AUSPICES",
   "pronunciations": "ˈɔspɪsɪz"
 },
 {
   "id": 10710,
   "word": "AUTHORIZATIONS",
   "pronunciations": "ˌɔθɝəˈzeɪʃənz"
 },
 {
   "id": 10711,
   "word": "AUTOMATION",
   "pronunciations": "ɔtəˈmeɪʃən"
 },
 {
   "id": 10712,
   "word": "AVANT-GARDE",
   "pronunciations": "əˈvɑːntˈgɑːrd, əˈvɑːnˈgɑːrd"
 },
 {
   "id": 10713,
   "word": "AVOCADOS",
   "pronunciations": "ˌævəˈkɑːdoʊz"
 },
 {
   "id": 10714,
   "word": "AX",
   "pronunciations": "ˈæks"
 },
 {
   "id": 10715,
   "word": "AXE",
   "pronunciations": "ˈæks"
 },
 {
   "id": 10716,
   "word": "BABY'S",
   "pronunciations": "ˈbeɪbiːz"
 },
 {
   "id": 10717,
   "word": "BACHELOR",
   "pronunciations": "ˈbætʃəlɝ, ˈbætʃlɝ"
 },
 {
   "id": 10718,
   "word": "BAILIFF",
   "pronunciations": "ˈbeɪlɪf"
 },
 {
   "id": 10719,
   "word": "BANGS",
   "pronunciations": "ˈbæŋz"
 },
 {
   "id": 10720,
   "word": "BANQUET",
   "pronunciations": "ˈbæŋkwət"
 },
 {
   "id": 10721,
   "word": "BARLEY",
   "pronunciations": "ˈbɑːrli"
 },
 {
   "id": 10722,
   "word": "BARTENDER",
   "pronunciations": "ˈbɑːrˌtɛndɝ"
 },
 {
   "id": 10723,
   "word": "BATES",
   "pronunciations": "ˈbeɪts"
 },
 {
   "id": 10724,
   "word": "BATS",
   "pronunciations": "ˈbæts"
 },
 {
   "id": 10725,
   "word": "BAYONET",
   "pronunciations": "ˈbeɪəˌnɛt"
 },
 {
   "id": 10726,
   "word": "BEAMING",
   "pronunciations": "ˈbiːmɪŋ"
 },
 {
   "id": 10727,
   "word": "BEARINGS",
   "pronunciations": "ˈbɛrɪŋz"
 },
 {
   "id": 10728,
   "word": "BEAVERTON",
   "pronunciations": "ˈbiːvɝtən"
 },
 {
   "id": 10729,
   "word": "BECKETT",
   "pronunciations": "ˈbɛkɪt"
 },
 {
   "id": 10730,
   "word": "BEECH",
   "pronunciations": "ˈbiːtʃ"
 },
 {
   "id": 10731,
   "word": "BELLOWED",
   "pronunciations": "ˈbɛloʊd"
 },
 {
   "id": 10732,
   "word": "BERMAN",
   "pronunciations": "ˈbɝːmən"
 },
 {
   "id": 10733,
   "word": "BETRAYAL",
   "pronunciations": "bɪˈtreɪəl"
 },
 {
   "id": 10734,
   "word": "BEWILDERED",
   "pronunciations": "bɪˈwɪldɝd"
 },
 {
   "id": 10735,
   "word": "BEY",
   "pronunciations": "ˈbeɪ"
 },
 {
   "id": 10736,
   "word": "BIDS",
   "pronunciations": "ˈbɪdz"
 },
 {
   "id": 10737,
   "word": "BIRTHPLACE",
   "pronunciations": "ˈbɝːθˌpleɪs"
 },
 {
   "id": 10738,
   "word": "BISHOPS",
   "pronunciations": "ˈbɪʃəps"
 },
 {
   "id": 10739,
   "word": "BISQUE",
   "pronunciations": "ˈbɪsk"
 },
 {
   "id": 10740,
   "word": "BITCH",
   "pronunciations": "ˈbɪtʃ"
 },
 {
   "id": 10741,
   "word": "BITING",
   "pronunciations": "ˈbaɪtɪŋ"
 },
 {
   "id": 10742,
   "word": "BLACK'S",
   "pronunciations": "ˈblæks"
 },
 {
   "id": 10743,
   "word": "BLAKE",
   "pronunciations": "ˈbleɪk"
 },
 {
   "id": 10744,
   "word": "BLAZING",
   "pronunciations": "ˈbleɪzɪŋ"
 },
 {
   "id": 10745,
   "word": "BLINKED",
   "pronunciations": "ˈblɪŋkt"
 },
 {
   "id": 10746,
   "word": "BLOOMED",
   "pronunciations": "ˈbluːmd"
 },
 {
   "id": 10747,
   "word": "BLOT",
   "pronunciations": "ˈblɑːt"
 },
 {
   "id": 10748,
   "word": "BLURRED",
   "pronunciations": "ˈblɝːd"
 },
 {
   "id": 10749,
   "word": "BLUSHED",
   "pronunciations": "ˈblʌʃt"
 },
 {
   "id": 10750,
   "word": "BOASTED",
   "pronunciations": "ˈboʊstəd, ˈboʊstɪd"
 },
 {
   "id": 10751,
   "word": "BONG",
   "pronunciations": "ˈbɑːŋ"
 },
 {
   "id": 10752,
   "word": "BONN",
   "pronunciations": "ˈbɑːn"
 },
 {
   "id": 10753,
   "word": "BONNER",
   "pronunciations": "ˈbɔnɝ"
 },
 {
   "id": 10754,
   "word": "BOOKING",
   "pronunciations": "ˈbʊkɪŋ"
 },
 {
   "id": 10755,
   "word": "BOTHERING",
   "pronunciations": "ˈbɑːðɝɪŋ"
 },
 {
   "id": 10756,
   "word": "BOURBONS",
   "pronunciations": "ˈbɝːbənz"
 },
 {
   "id": 10757,
   "word": "BOXCAR",
   "pronunciations": "ˈbɑːkˌskɑːr"
 },
 {
   "id": 10758,
   "word": "BREACH",
   "pronunciations": "ˈbriːtʃ"
 },
 {
   "id": 10759,
   "word": "BREAKTHROUGH",
   "pronunciations": "ˈbreɪkˌθruː"
 },
 {
   "id": 10760,
   "word": "BREASTED",
   "pronunciations": "ˈbrɛstəd, ˈbrɛstɪd"
 },
 {
   "id": 10761,
   "word": "BRICKS",
   "pronunciations": "ˈbrɪks"
 },
 {
   "id": 10762,
   "word": "BRIGHTLY",
   "pronunciations": "ˈbraɪtli"
 },
 {
   "id": 10763,
   "word": "BRITAIN'S",
   "pronunciations": "ˈbrɪtənz"
 },
 {
   "id": 10764,
   "word": "BROTHERHOOD",
   "pronunciations": "ˈbrʌðɝˌhʊd"
 },
 {
   "id": 10765,
   "word": "BROW",
   "pronunciations": "ˈbraʊ"
 },
 {
   "id": 10766,
   "word": "BRUTE",
   "pronunciations": "ˈbruːt"
 },
 {
   "id": 10767,
   "word": "BUCKS",
   "pronunciations": "ˈbʌks"
 },
 {
   "id": 10768,
   "word": "BUFFET",
   "pronunciations": "ˈbʌfət, bəˈfeɪ"
 },
 {
   "id": 10769,
   "word": "BUGGY",
   "pronunciations": "ˈbʌgi"
 },
 {
   "id": 10770,
   "word": "BURGUNDY",
   "pronunciations": "ˈbɝːgəndi"
 },
 {
   "id": 10771,
   "word": "BURLINGTON",
   "pronunciations": "ˈbɝːlɪŋtən"
 },
 {
   "id": 10772,
   "word": "BURNT",
   "pronunciations": "ˈbɝːnt"
 },
 {
   "id": 10773,
   "word": "BURY",
   "pronunciations": "ˈbɛri"
 },
 {
   "id": 10774,
   "word": "BUZZING",
   "pronunciations": "ˈbʌzɪŋ"
 },
 {
   "id": 10775,
   "word": "CAESAR",
   "pronunciations": "ˈsiːzɝ"
 },
 {
   "id": 10776,
   "word": "CALDERONE",
   "pronunciations": "kɑːldɝˈoʊni"
 },
 {
   "id": 10777,
   "word": "CALIBRATION",
   "pronunciations": "ˌkæləˈbreɪʃən"
 },
 {
   "id": 10778,
   "word": "CALMED",
   "pronunciations": "ˈkɑːmd, ˈkɑːlmd"
 },
 {
   "id": 10779,
   "word": "CALVES",
   "pronunciations": "ˈkævz"
 },
 {
   "id": 10780,
   "word": "CANCELED",
   "pronunciations": "ˈkænsəld"
 },
 {
   "id": 10781,
   "word": "CANDIDACY",
   "pronunciations": "ˈkændɪdəsi"
 },
 {
   "id": 10782,
   "word": "CANNED",
   "pronunciations": "ˈkænd"
 },
 {
   "id": 10783,
   "word": "CANONS",
   "pronunciations": "ˈkænənz"
 },
 {
   "id": 10784,
   "word": "CAPER",
   "pronunciations": "ˈkeɪpɝ"
 },
 {
   "id": 10785,
   "word": "CAPITALIST",
   "pronunciations": "ˈkæpətəlɪst"
 },
 {
   "id": 10786,
   "word": "CAPONE",
   "pronunciations": "kəˈpoʊn"
 },
 {
   "id": 10787,
   "word": "CAPS",
   "pronunciations": "ˈkæps"
 },
 {
   "id": 10788,
   "word": "CARBINE",
   "pronunciations": "ˈkɑːrˌbaɪn"
 },
 {
   "id": 10789,
   "word": "CARPENTER",
   "pronunciations": "ˈkɑːrpəntɝ"
 },
 {
   "id": 10790,
   "word": "CARRIAGES",
   "pronunciations": "ˈkærɪdʒɪz, ˈkɛrədʒəz"
 },
 {
   "id": 10791,
   "word": "CARTOONS",
   "pronunciations": "kɑːrˈtuːnz"
 },
 {
   "id": 10792,
   "word": "CARTRIDGE",
   "pronunciations": "ˈkɑːrtrədʒ, ˈkɑːrtrɪdʒ"
 },
 {
   "id": 10793,
   "word": "CARVING",
   "pronunciations": "ˈkɑːrvɪŋ"
 },
 {
   "id": 10794,
   "word": "CASTS",
   "pronunciations": "ˈkæsts"
 },
 {
   "id": 10795,
   "word": "CAUSAL",
   "pronunciations": "ˈkɔzəl"
 },
 {
   "id": 10796,
   "word": "CAUTIONED",
   "pronunciations": "ˈkɑːʃənd, ˈkɔʃənd"
 },
 {
   "id": 10797,
   "word": "CAVES",
   "pronunciations": "ˈkeɪvz"
 },
 {
   "id": 10798,
   "word": "CENTENNIAL",
   "pronunciations": "sɛnˈtɛniːəl"
 },
 {
   "id": 10799,
   "word": "CENTRALLY",
   "pronunciations": "ˈsɛntrəli"
 },
 {
   "id": 10800,
   "word": "CENTUM",
   "pronunciations": "ˈkɛntəm"
 },
 {
   "id": 10801,
   "word": "CHANTED",
   "pronunciations": "ˈtʃæntɪd"
 },
 {
   "id": 10802,
   "word": "CHAPMAN",
   "pronunciations": "ˈtʃæpmən"
 },
 {
   "id": 10803,
   "word": "CHARACTERIZE",
   "pronunciations": "ˈkɛrɪktɝˌaɪz"
 },
 {
   "id": 10804,
   "word": "CHARTED",
   "pronunciations": "ˈtʃɑːrtəd, ˈtʃɑːrtɪd"
 },
 {
   "id": 10805,
   "word": "CHATTERING",
   "pronunciations": "ˈtʃætɝɪŋ"
 },
 {
   "id": 10806,
   "word": "CHERRY",
   "pronunciations": "ˈtʃɛri"
 },
 {
   "id": 10807,
   "word": "CHIEFS",
   "pronunciations": "ˈtʃiːfs"
 },
 {
   "id": 10808,
   "word": "CHILI",
   "pronunciations": "ˈtʃɪli"
 },
 {
   "id": 10809,
   "word": "CHIPPING",
   "pronunciations": "ˈtʃɪpɪŋ"
 },
 {
   "id": 10810,
   "word": "CHORDS",
   "pronunciations": "ˈkɔrdz"
 },
 {
   "id": 10811,
   "word": "CLAMBERED",
   "pronunciations": "ˈklæmbɝd"
 },
 {
   "id": 10812,
   "word": "CLAMPS",
   "pronunciations": "ˈklæmps"
 },
 {
   "id": 10813,
   "word": "CLAPPING",
   "pronunciations": "ˈklæpɪŋ"
 },
 {
   "id": 10814,
   "word": "CLASSIFY",
   "pronunciations": "ˈklæsəˌfaɪ"
 },
 {
   "id": 10815,
   "word": "CLEAR-CUT",
   "pronunciations": "ˈklɪrˌkət"
 },
 {
   "id": 10816,
   "word": "CLERGYMEN",
   "pronunciations": "ˈklɝːdʒiːmɪn, ˈklɝːdʒiːˌmɛn"
 },
 {
   "id": 10817,
   "word": "CLICHE",
   "pronunciations": "kliːˈʃeɪ"
 },
 {
   "id": 10818,
   "word": "CLING",
   "pronunciations": "ˈklɪŋ"
 },
 {
   "id": 10819,
   "word": "CLIP",
   "pronunciations": "ˈklɪp"
 },
 {
   "id": 10820,
   "word": "CLOSES",
   "pronunciations": "ˈkloʊzɪz"
 },
 {
   "id": 10821,
   "word": "CLOUDED",
   "pronunciations": "ˈklaʊdɪd"
 },
 {
   "id": 10822,
   "word": "CLUMSY",
   "pronunciations": "ˈklʌmzi"
 },
 {
   "id": 10823,
   "word": "COACHING",
   "pronunciations": "ˈkoʊtʃɪŋ"
 },
 {
   "id": 10824,
   "word": "COASTS",
   "pronunciations": "ˈkoʊsts"
 },
 {
   "id": 10825,
   "word": "COCKED",
   "pronunciations": "ˈkɑːkt, ˈkɔkt"
 },
 {
   "id": 10826,
   "word": "COD",
   "pronunciations": "ˈkɑːd, ˈsiːˈoʊˈdiː"
 },
 {
   "id": 10827,
   "word": "COHESION",
   "pronunciations": "koʊˈhiːʒən"
 },
 {
   "id": 10828,
   "word": "COIL",
   "pronunciations": "ˈkɔɪl"
 },
 {
   "id": 10829,
   "word": "COINCIDED",
   "pronunciations": "ˌkoʊənˈsaɪdəd"
 },
 {
   "id": 10830,
   "word": "COLLINS",
   "pronunciations": "ˈkɑːlɪnz"
 },
 {
   "id": 10831,
   "word": "COLMER",
   "pronunciations": "ˈkoʊmɝ"
 },
 {
   "id": 10832,
   "word": "COMB",
   "pronunciations": "ˈkoʊm"
 },
 {
   "id": 10833,
   "word": "COMMANDERS",
   "pronunciations": "kəˈmændɝz"
 },
 {
   "id": 10834,
   "word": "COMMOTION",
   "pronunciations": "kəˈmoʊʃən"
 },
 {
   "id": 10835,
   "word": "COMMUNICATIVE",
   "pronunciations": "kəˈmjuːnəkətɪv"
 },
 {
   "id": 10836,
   "word": "COMPARES",
   "pronunciations": "kəmˈpɛrz"
 },
 {
   "id": 10837,
   "word": "COMPARISONS",
   "pronunciations": "kəmˈpɛrəsənz"
 },
 {
   "id": 10838,
   "word": "COMPLEXES",
   "pronunciations": "ˈkɑːmplɛksəz"
 },
 {
   "id": 10839,
   "word": "COMPLEXION",
   "pronunciations": "kəmˈplɛkʃən"
 },
 {
   "id": 10840,
   "word": "COMPLIANCE",
   "pronunciations": "kəmˈplaɪəns"
 },
 {
   "id": 10841,
   "word": "COMPLIED",
   "pronunciations": "kəmˈplaɪd"
 },
 {
   "id": 10842,
   "word": "COMPOSE",
   "pronunciations": "kəmˈpoʊz"
 },
 {
   "id": 10843,
   "word": "CONFIDENTIAL",
   "pronunciations": "ˌkɑːnfəˈdɛnʃəl"
 },
 {
   "id": 10844,
   "word": "CONGESTION",
   "pronunciations": "kənˈdʒɛstʃən"
 },
 {
   "id": 10845,
   "word": "CONNECTING",
   "pronunciations": "kəˈnɛktɪŋ"
 },
 {
   "id": 10846,
   "word": "CONSOLIDATED",
   "pronunciations": "kənˈsɑːləˌdeɪtəd"
 },
 {
   "id": 10847,
   "word": "CONSPICUOUS",
   "pronunciations": "kənˈspɪkjuːəs"
 },
 {
   "id": 10848,
   "word": "CONSTRICTOR",
   "pronunciations": "kənˈstrɪktɝ"
 },
 {
   "id": 10849,
   "word": "CONSTRUED",
   "pronunciations": "kənˈstruːd"
 },
 {
   "id": 10850,
   "word": "CONTEMPLATING",
   "pronunciations": "ˈkɑːntəmˌpleɪtɪŋ"
 },
 {
   "id": 10851,
   "word": "CONTEMPLATION",
   "pronunciations": "ˌkɑːntəmˈpleɪʃən"
 },
 {
   "id": 10852,
   "word": "CONTEMPORARIES",
   "pronunciations": "kənˈtɛmpɝˌɛriːz"
 },
 {
   "id": 10853,
   "word": "CONTEMPTUOUS",
   "pronunciations": "kənˈtɛmptʃuːəs"
 },
 {
   "id": 10854,
   "word": "CONTEND",
   "pronunciations": "kənˈtɛnd"
 },
 {
   "id": 10855,
   "word": "CONTINUANCE",
   "pronunciations": "kənˈtɪnjuːəns"
 },
 {
   "id": 10856,
   "word": "CONTOUR",
   "pronunciations": "ˈkɑːnˌtʊr"
 },
 {
   "id": 10857,
   "word": "CONTRACTOR",
   "pronunciations": "ˈkɑːnˌtræktɝ"
 },
 {
   "id": 10858,
   "word": "CONTRIBUTORS",
   "pronunciations": "kənˈtrɪbjətɝz"
 },
 {
   "id": 10859,
   "word": "CONVERSIONS",
   "pronunciations": "kənˈvɝːʒənz"
 },
 {
   "id": 10860,
   "word": "CONVICT",
   "pronunciations": "ˈkɑːnvɪkt, kənˈvɪkt"
 },
 {
   "id": 10861,
   "word": "COOKIES",
   "pronunciations": "ˈkʊkiːz"
 },
 {
   "id": 10862,
   "word": "COORDINATES",
   "pronunciations": "koʊˈɔrdənəts, koʊˈɔrdəˌneɪts"
 },
 {
   "id": 10863,
   "word": "COPENHAGEN",
   "pronunciations": "ˈkoʊpənˌheɪgən, ˈkoʊpənˌhɑːgən"
 },
 {
   "id": 10864,
   "word": "CORD",
   "pronunciations": "ˈkɔrd"
 },
 {
   "id": 10865,
   "word": "CORDIAL",
   "pronunciations": "ˈkɔrdʒəl"
 },
 {
   "id": 10866,
   "word": "CORRESPONDS",
   "pronunciations": "ˌkɔrəˈspɑːndz"
 },
 {
   "id": 10867,
   "word": "COSTING",
   "pronunciations": "ˈkɔstɪŋ"
 },
 {
   "id": 10868,
   "word": "COTTAGES",
   "pronunciations": "ˈkɑːtɪdʒɪz"
 },
 {
   "id": 10869,
   "word": "COUGHLIN",
   "pronunciations": "ˈkɔglɪn"
 },
 {
   "id": 10870,
   "word": "COUNCIL'S",
   "pronunciations": "ˈkaʊnsəlz"
 },
 {
   "id": 10871,
   "word": "COUNCILS",
   "pronunciations": "ˈkaʊnsɪlz"
 },
 {
   "id": 10872,
   "word": "COUNTENANCE",
   "pronunciations": "ˈkaʊntənəns"
 },
 {
   "id": 10873,
   "word": "COUNTRYMEN",
   "pronunciations": "ˈkʌntriːmɪn"
 },
 {
   "id": 10874,
   "word": "COURTEOUS",
   "pronunciations": "ˈkɝːtiːəs"
 },
 {
   "id": 10875,
   "word": "CREAKED",
   "pronunciations": "ˈkriːkt"
 },
 {
   "id": 10876,
   "word": "CRIES",
   "pronunciations": "ˈkraɪz"
 },
 {
   "id": 10877,
   "word": "CRIMINALS",
   "pronunciations": "ˈkrɪmənəlz"
 },
 {
   "id": 10878,
   "word": "CRIPPLED",
   "pronunciations": "ˈkrɪpəld"
 },
 {
   "id": 10879,
   "word": "CRIPPLING",
   "pronunciations": "ˈkrɪpəlɪŋ, ˈkrɪplɪŋ"
 },
 {
   "id": 10880,
   "word": "CRUTCHES",
   "pronunciations": "ˈkrʌtʃɪz"
 },
 {
   "id": 10881,
   "word": "CUTTERS",
   "pronunciations": "ˈkʌtɝz"
 },
 {
   "id": 10882,
   "word": "DAKOTA",
   "pronunciations": "dəˈkoʊtə"
 },
 {
   "id": 10883,
   "word": "DANNY",
   "pronunciations": "ˈdæni"
 },
 {
   "id": 10884,
   "word": "DAPPER",
   "pronunciations": "ˈdæpɝ"
 },
 {
   "id": 10885,
   "word": "DARTED",
   "pronunciations": "ˈdɑːrtɪd"
 },
 {
   "id": 10886,
   "word": "DC",
   "pronunciations": "ˌdiːˈsiː"
 },
 {
   "id": 10887,
   "word": "DEADLINE",
   "pronunciations": "ˈdɛdˌlaɪn"
 },
 {
   "id": 10888,
   "word": "DEBATES",
   "pronunciations": "dəˈbeɪts"
 },
 {
   "id": 10889,
   "word": "DEBENTURES",
   "pronunciations": "dəˈbɛntʃɝz"
 },
 {
   "id": 10890,
   "word": "DECKS",
   "pronunciations": "ˈdɛks"
 },
 {
   "id": 10891,
   "word": "DECLINES",
   "pronunciations": "dɪˈklaɪnz"
 },
 {
   "id": 10892,
   "word": "DECORATED",
   "pronunciations": "ˈdɛkɝˌeɪtəd, ˈdɛkɝˌeɪtɪd"
 },
 {
   "id": 10893,
   "word": "DECREASING",
   "pronunciations": "dɪˈkriːsɪŋ, ˈdiːˌkriːsɪŋ"
 },
 {
   "id": 10894,
   "word": "DEDUCED",
   "pronunciations": "dɪˈduːst"
 },
 {
   "id": 10895,
   "word": "DEFENDANT",
   "pronunciations": "dɪˈfɛndənt"
 },
 {
   "id": 10896,
   "word": "DEFENDERS",
   "pronunciations": "dɪˈfɛndɝz"
 },
 {
   "id": 10897,
   "word": "DEFINITIONS",
   "pronunciations": "ˌdɛfəˈnɪʃənz"
 },
 {
   "id": 10898,
   "word": "DEKALB",
   "pronunciations": "dɪˈkælb"
 },
 {
   "id": 10899,
   "word": "DELINQUENT",
   "pronunciations": "dɪˈlɪŋkwənt"
 },
 {
   "id": 10900,
   "word": "DELIVERS",
   "pronunciations": "dɪˈlɪvɝz"
 },
 {
   "id": 10901,
   "word": "DELLA",
   "pronunciations": "ˈdɛlə"
 },
 {
   "id": 10902,
   "word": "DEMONSTRATES",
   "pronunciations": "ˈdɛmənˌstreɪts"
 },
 {
   "id": 10903,
   "word": "DEMONSTRATING",
   "pronunciations": "ˈdɛmənˌstreɪtɪŋ"
 },
 {
   "id": 10904,
   "word": "DENIES",
   "pronunciations": "dɪˈnaɪz"
 },
 {
   "id": 10905,
   "word": "DEPICTING",
   "pronunciations": "dɪˈpɪktɪŋ"
 },
 {
   "id": 10906,
   "word": "DEPLETION",
   "pronunciations": "dɪˈpliːʃən"
 },
 {
   "id": 10907,
   "word": "DEPOSITS",
   "pronunciations": "dəˈpɑːzɪts, dɪˈpɑːzəts"
 },
 {
   "id": 10908,
   "word": "DESEGREGATED",
   "pronunciations": "dɪˈsɛgrɪˌgeɪtɪd"
 },
 {
   "id": 10909,
   "word": "DESOLATE",
   "pronunciations": "ˈdɛsələt, ˈdɛzələt, ˈdɛsəˌleɪt"
 },
 {
   "id": 10910,
   "word": "DETECTING",
   "pronunciations": "dɪˈtɛktɪŋ"
 },
 {
   "id": 10911,
   "word": "DEVOID",
   "pronunciations": "dɪˈvɔɪd"
 },
 {
   "id": 10912,
   "word": "DIALECTIC",
   "pronunciations": "ˌdaɪəˈlɛktɪk"
 },
 {
   "id": 10913,
   "word": "DICTION",
   "pronunciations": "ˈdɪkʃən"
 },
 {
   "id": 10914,
   "word": "DIETARY",
   "pronunciations": "ˈdaɪəˌtɛri"
 },
 {
   "id": 10915,
   "word": "DIGITAL",
   "pronunciations": "ˈdɪdʒətəl, ˈdɪdʒɪtəl"
 },
 {
   "id": 10916,
   "word": "DILUTED",
   "pronunciations": "daɪˈluːtəd, dɪˈluːtəd"
 },
 {
   "id": 10917,
   "word": "DIMAGGIO",
   "pronunciations": "dɪˈmædʒiːˌoʊ"
 },
 {
   "id": 10918,
   "word": "DIP",
   "pronunciations": "ˈdɪp"
 },
 {
   "id": 10919,
   "word": "DIPLOMATS",
   "pronunciations": "ˈdɪpləˌmæts"
 },
 {
   "id": 10920,
   "word": "DIPPER",
   "pronunciations": "ˈdɪpɝ"
 },
 {
   "id": 10921,
   "word": "DISBELIEF",
   "pronunciations": "ˌdɪsbɪˈliːf"
 },
 {
   "id": 10922,
   "word": "DISC",
   "pronunciations": "ˈdɪsk"
 },
 {
   "id": 10923,
   "word": "DISGUSTED",
   "pronunciations": "dɪsˈgʌstəd, dɪsˈgʌstɪd"
 },
 {
   "id": 10924,
   "word": "DISPLAYING",
   "pronunciations": "dɪˈspleɪɪŋ"
 },
 {
   "id": 10925,
   "word": "DISREGARD",
   "pronunciations": "ˌdɪsrɪˈgɑːrd"
 },
 {
   "id": 10926,
   "word": "DISSATISFIED",
   "pronunciations": "dɪˈsætəsˌfaɪd"
 },
 {
   "id": 10927,
   "word": "DISSEMINATED",
   "pronunciations": "dɪˈsɛməˌneɪtəd"
 },
 {
   "id": 10928,
   "word": "DISSOLVE",
   "pronunciations": "dɪˈzɑːlv"
 },
 {
   "id": 10929,
   "word": "DISTINGUISHING",
   "pronunciations": "dɪˈstɪŋgwɪʃɪŋ"
 },
 {
   "id": 10930,
   "word": "DISTRIBUTE",
   "pronunciations": "dɪˈstrɪbjuːt"
 },
 {
   "id": 10931,
   "word": "DISTRUST",
   "pronunciations": "dɪˈstrʌst"
 },
 {
   "id": 10932,
   "word": "DIVAN",
   "pronunciations": "dɪˈvæn"
 },
 {
   "id": 10933,
   "word": "DIVERGENT",
   "pronunciations": "daɪˈvɝːdʒənt, dɪˈvɝːdʒənt"
 },
 {
   "id": 10934,
   "word": "DIVIDEND",
   "pronunciations": "ˈdɪvɪˌdɛnd"
 },
 {
   "id": 10935,
   "word": "DIVIDES",
   "pronunciations": "dɪˈvaɪdz"
 },
 {
   "id": 10936,
   "word": "DOCUMENTED",
   "pronunciations": "ˈdɑːkjəˌmɛntəd, ˈdɑːkjəˌmɛnəd, ˈdɑːkjuːˌmɛntəd, ˈdɑːkjuːˌmɛnəd"
 },
 {
   "id": 10937,
   "word": "DOINGS",
   "pronunciations": "ˈduːɪŋz"
 },
 {
   "id": 10938,
   "word": "DOOLIN",
   "pronunciations": "ˈduːlɪn"
 },
 {
   "id": 10939,
   "word": "DOUBLES",
   "pronunciations": "ˈdʌbəlz"
 },
 {
   "id": 10940,
   "word": "DOWNHILL",
   "pronunciations": "ˈdaʊnˈhɪl"
 },
 {
   "id": 10941,
   "word": "DRAFTING",
   "pronunciations": "ˈdræftɪŋ"
 },
 {
   "id": 10942,
   "word": "DRAMAS",
   "pronunciations": "ˈdrɑːməz"
 },
 {
   "id": 10943,
   "word": "DREADNOUGHT",
   "pronunciations": "ˈdrɛdˌnɔt"
 },
 {
   "id": 10944,
   "word": "DREARY",
   "pronunciations": "ˈdrɪri"
 },
 {
   "id": 10945,
   "word": "DRIFTS",
   "pronunciations": "ˈdrɪfts"
 },
 {
   "id": 10946,
   "word": "DRIPPED",
   "pronunciations": "ˈdrɪpt"
 },
 {
   "id": 10947,
   "word": "DRIVES",
   "pronunciations": "ˈdraɪvz"
 },
 {
   "id": 10948,
   "word": "DROWNED",
   "pronunciations": "ˈdraʊnd"
 },
 {
   "id": 10949,
   "word": "DUCTS",
   "pronunciations": "ˈdʌkts"
 },
 {
   "id": 10950,
   "word": "DUNN",
   "pronunciations": "ˈdʌn"
 },
 {
   "id": 10951,
   "word": "DUPLICATE",
   "pronunciations": "ˈduːpləkət, ˈduːpləˌkeɪt"
 },
 {
   "id": 10952,
   "word": "DUSTING",
   "pronunciations": "ˈdʌstɪŋ"
 },
 {
   "id": 10953,
   "word": "EAGLES",
   "pronunciations": "ˈiːgəlz"
 },
 {
   "id": 10954,
   "word": "EARTHLY",
   "pronunciations": "ˈɝːθli"
 },
 {
   "id": 10955,
   "word": "ECONOMIST",
   "pronunciations": "ɪˈkɑːnəmɪst, iːˈkɑːnəmɪst"
 },
 {
   "id": 10956,
   "word": "ECSTASY",
   "pronunciations": "ˈɛkstəsi"
 },
 {
   "id": 10957,
   "word": "EDUCATORS",
   "pronunciations": "ˈɛdʒəˌkeɪtɝz, ˈɛdʒjuːˌkeɪtɝz"
 },
 {
   "id": 10958,
   "word": "ELABORATELY",
   "pronunciations": "ɪˈlæbrətli"
 },
 {
   "id": 10959,
   "word": "ELICITED",
   "pronunciations": "ɪˈlɪsɪtɪd"
 },
 {
   "id": 10960,
   "word": "ELMER",
   "pronunciations": "ˈɛlmɝ"
 },
 {
   "id": 10961,
   "word": "EMERALDS",
   "pronunciations": "ˈɛmrəldz, ˈɛmɝrəldz"
 },
 {
   "id": 10962,
   "word": "ENDORSE",
   "pronunciations": "ɛnˈdɔrs"
 },
 {
   "id": 10963,
   "word": "ENROLLMENT",
   "pronunciations": "ɛnˈroʊlmənt"
 },
 {
   "id": 10964,
   "word": "ENTREPRENEUR",
   "pronunciations": "ˌɑːntrəprəˈnɝː, ˌɑːntrəprəˈnʊr"
 },
 {
   "id": 10965,
   "word": "ENZYME",
   "pronunciations": "ˈɛnˌzaɪm"
 },
 {
   "id": 10966,
   "word": "EPISCOPAL",
   "pronunciations": "ɪˈpɪskəpəl"
 },
 {
   "id": 10967,
   "word": "EPISODES",
   "pronunciations": "ˈɛpɪˌsoʊdz"
 },
 {
   "id": 10968,
   "word": "EPOCH",
   "pronunciations": "ˈɛpək, ˈiːpək"
 },
 {
   "id": 10969,
   "word": "ERIKSON",
   "pronunciations": "ˈɛrɪksən"
 },
 {
   "id": 10970,
   "word": "EROSION",
   "pronunciations": "ɪˈroʊʒən"
 },
 {
   "id": 10971,
   "word": "ESPRIT",
   "pronunciations": "ɛˈspriː"
 },
 {
   "id": 10972,
   "word": "ETERNITY",
   "pronunciations": "ɪˈtɝːnəti, iːˈtɝːnəti"
 },
 {
   "id": 10973,
   "word": "EVOKE",
   "pronunciations": "ɪˈvoʊk, iːˈvoʊk"
 },
 {
   "id": 10974,
   "word": "EXCEEDING",
   "pronunciations": "ɪkˈsiːdɪŋ"
 },
 {
   "id": 10975,
   "word": "EXCERPT",
   "pronunciations": "ˈɛksɝpt, ɛkˈsɝːpt"
 },
 {
   "id": 10976,
   "word": "EXCLAMATION",
   "pronunciations": "ˌɛkskləˈmeɪʃən"
 },
 {
   "id": 10977,
   "word": "EXERCISING",
   "pronunciations": "ˈɛksɝˌsaɪzɪŋ"
 },
 {
   "id": 10978,
   "word": "EXHIBITING",
   "pronunciations": "ɪgˈzɪbɪtɪŋ"
 },
 {
   "id": 10979,
   "word": "EXPANDABLE",
   "pronunciations": "ɪkˈspændəbəl"
 },
 {
   "id": 10980,
   "word": "EXPEDITIONS",
   "pronunciations": "ˌɛkspəˈdɪʃənz"
 },
 {
   "id": 10981,
   "word": "EXPERIMENTED",
   "pronunciations": "ɪkˈspɛrəməntəd"
 },
 {
   "id": 10982,
   "word": "EXPLICITLY",
   "pronunciations": "ɪkˈsplɪsətli"
 },
 {
   "id": 10983,
   "word": "EXPLODE",
   "pronunciations": "ɪkˈsploʊd"
 },
 {
   "id": 10984,
   "word": "EXPOSITION",
   "pronunciations": "ˌɛkspəˈzɪʃən"
 },
 {
   "id": 10985,
   "word": "EXTRACT",
   "pronunciations": "ˈɛkˌstrækt, ɪkˈstrækt"
 },
 {
   "id": 10986,
   "word": "FABULOUS",
   "pronunciations": "ˈfæbjələs"
 },
 {
   "id": 10987,
   "word": "FACTIONS",
   "pronunciations": "ˈfækʃənz"
 },
 {
   "id": 10988,
   "word": "FAIRNESS",
   "pronunciations": "ˈfɛrnəs"
 },
 {
   "id": 10989,
   "word": "FAMILY'S",
   "pronunciations": "ˈfæməliːz, ˈfæmliːz"
 },
 {
   "id": 10990,
   "word": "FARRELL",
   "pronunciations": "ˈfɛrɪl"
 },
 {
   "id": 10991,
   "word": "FASCINATION",
   "pronunciations": "ˌfæsəˈneɪʃən"
 },
 {
   "id": 10992,
   "word": "FEAT",
   "pronunciations": "ˈfiːt"
 },
 {
   "id": 10993,
   "word": "FEATHER",
   "pronunciations": "ˈfɛðɝ"
 },
 {
   "id": 10994,
   "word": "FELLA",
   "pronunciations": "ˈfɛlə"
 },
 {
   "id": 10995,
   "word": "FETCH",
   "pronunciations": "ˈfɛtʃ"
 },
 {
   "id": 10996,
   "word": "FEUDAL",
   "pronunciations": "ˈfjuːdəl"
 },
 {
   "id": 10997,
   "word": "FIBROSIS",
   "pronunciations": "faɪˈbroʊsɪs"
 },
 {
   "id": 10998,
   "word": "FIGHTS",
   "pronunciations": "ˈfaɪts"
 },
 {
   "id": 10999,
   "word": "FIGURING",
   "pronunciations": "ˈfɪgjɝɪŋ"
 },
 {
   "id": 11000,
   "word": "FILTERED",
   "pronunciations": "ˈfɪltɝd"
 },
 {
   "id": 11001,
   "word": "FILTERING",
   "pronunciations": "ˈfɪltɝɪŋ"
 },
 {
   "id": 11002,
   "word": "FINALE",
   "pronunciations": "fəˈnæli"
 },
 {
   "id": 11003,
   "word": "FINANCES",
   "pronunciations": "fɪˈnænsɪz, ˈfaɪˌnænsɪz"
 },
 {
   "id": 11004,
   "word": "FINGERPRINT",
   "pronunciations": "ˈfɪŋgɝˌprɪnt"
 },
 {
   "id": 11005,
   "word": "FIREPLACE",
   "pronunciations": "ˈfaɪɝˌpleɪs"
 },
 {
   "id": 11006,
   "word": "FIRMER",
   "pronunciations": "ˈfɝːmɝ"
 },
 {
   "id": 11007,
   "word": "FIRST-CLASS",
   "pronunciations": "ˌfɝːstˈklæs"
 },
 {
   "id": 11008,
   "word": "FITZGERALD",
   "pronunciations": "fɪtsˈdʒɛrəld"
 },
 {
   "id": 11009,
   "word": "FLAMING",
   "pronunciations": "ˈfleɪmɪŋ"
 },
 {
   "id": 11010,
   "word": "FLARES",
   "pronunciations": "ˈflɛrz"
 },
 {
   "id": 11011,
   "word": "FLASHING",
   "pronunciations": "ˈflæʃɪŋ"
 },
 {
   "id": 11012,
   "word": "FLATTENED",
   "pronunciations": "ˈflætənd"
 },
 {
   "id": 11013,
   "word": "FLOODS",
   "pronunciations": "ˈflʌdz"
 },
 {
   "id": 11014,
   "word": "FLOPPED",
   "pronunciations": "ˈflɑːpt"
 },
 {
   "id": 11015,
   "word": "FLOURISHED",
   "pronunciations": "ˈflɝːɪʃt"
 },
 {
   "id": 11016,
   "word": "FLOWED",
   "pronunciations": "ˈfloʊd"
 },
 {
   "id": 11017,
   "word": "FLOWERING",
   "pronunciations": "ˈflaʊɝɪŋ"
 },
 {
   "id": 11018,
   "word": "FLUSHED",
   "pronunciations": "ˈflʌʃt"
 },
 {
   "id": 11019,
   "word": "FOAMING",
   "pronunciations": "ˈfoʊmɪŋ"
 },
 {
   "id": 11020,
   "word": "FOCUSING",
   "pronunciations": "ˈfoʊkəsɪŋ, ˈfoʊkɪsɪŋ"
 },
 {
   "id": 11021,
   "word": "FOES",
   "pronunciations": "ˈfoʊz"
 },
 {
   "id": 11022,
   "word": "FORE",
   "pronunciations": "ˈfɔr"
 },
 {
   "id": 11023,
   "word": "FOREFINGER",
   "pronunciations": "ˈfɔrˌfɪŋgɝ"
 },
 {
   "id": 11024,
   "word": "FORGIVEN",
   "pronunciations": "fɝˈgɪvən, fɔrˈgɪvən"
 },
 {
   "id": 11025,
   "word": "FORSYTHE",
   "pronunciations": "ˈfɔrsaɪð"
 },
 {
   "id": 11026,
   "word": "FORTE",
   "pronunciations": "ˈfɔrteɪ, ˈfɔrt"
 },
 {
   "id": 11027,
   "word": "FORTHRIGHT",
   "pronunciations": "ˈfɔrˈθraɪt"
 },
 {
   "id": 11028,
   "word": "FORTRESS",
   "pronunciations": "ˈfɔrtrəs"
 },
 {
   "id": 11029,
   "word": "FORTUNES",
   "pronunciations": "ˈfɔrtʃənz, ˈfɔrtʃuːnz"
 },
 {
   "id": 11030,
   "word": "FOUNDERS",
   "pronunciations": "ˈfaʊndɝz"
 },
 {
   "id": 11031,
   "word": "FRAGMENT",
   "pronunciations": "ˈfrægmənt"
 },
 {
   "id": 11032,
   "word": "FRAGRANCE",
   "pronunciations": "ˈfreɪgrəns"
 },
 {
   "id": 11033,
   "word": "FRANCE'S",
   "pronunciations": "ˈfrænsɪz"
 },
 {
   "id": 11034,
   "word": "FRATERNITY",
   "pronunciations": "frəˈtɝːnəti, frəˈtɝːnɪti"
 },
 {
   "id": 11035,
   "word": "FREEZE",
   "pronunciations": "ˈfriːz"
 },
 {
   "id": 11036,
   "word": "FRENZY",
   "pronunciations": "ˈfrɛnzi"
 },
 {
   "id": 11037,
   "word": "FRIED",
   "pronunciations": "ˈfraɪd, ˈfriːd"
 },
 {
   "id": 11038,
   "word": "FRIGHTFUL",
   "pronunciations": "ˈfraɪtfəl"
 },
 {
   "id": 11039,
   "word": "FRITZIE",
   "pronunciations": "ˈfrɪtzi"
 },
 {
   "id": 11040,
   "word": "FRIVOLOUS",
   "pronunciations": "ˈfrɪvələs"
 },
 {
   "id": 11041,
   "word": "FROST",
   "pronunciations": "ˈfrɔst"
 },
 {
   "id": 11042,
   "word": "FUTILE",
   "pronunciations": "ˈfjuːtəl"
 },
 {
   "id": 11043,
   "word": "GALLIUM",
   "pronunciations": "ˈgæliːəm"
 },
 {
   "id": 11044,
   "word": "GALLON",
   "pronunciations": "ˈgælən"
 },
 {
   "id": 11045,
   "word": "GALLONS",
   "pronunciations": "ˈgælənz"
 },
 {
   "id": 11046,
   "word": "GANGS",
   "pronunciations": "ˈgæŋz"
 },
 {
   "id": 11047,
   "word": "GARMENT",
   "pronunciations": "ˈgɑːrmənt"
 },
 {
   "id": 11048,
   "word": "GARMENTS",
   "pronunciations": "ˈgɑːrmənts"
 },
 {
   "id": 11049,
   "word": "GAUNT",
   "pronunciations": "ˈgɔnt"
 },
 {
   "id": 11050,
   "word": "GENERAL'S",
   "pronunciations": "ˈdʒɛnɝəlz, ˈdʒɛnrəlz"
 },
 {
   "id": 11051,
   "word": "GEOGRAPHIC",
   "pronunciations": "ˌdʒiːəˈgræfɪk"
 },
 {
   "id": 11052,
   "word": "GEOGRAPHICALLY",
   "pronunciations": "ˌdʒiːəˈgræfɪkəli, ˌdʒiːəˈgræfɪkli"
 },
 {
   "id": 11053,
   "word": "GHASTLY",
   "pronunciations": "ˈgæstli"
 },
 {
   "id": 11054,
   "word": "GLANDS",
   "pronunciations": "ˈglændz"
 },
 {
   "id": 11055,
   "word": "GLEAMING",
   "pronunciations": "ˈgliːmɪŋ"
 },
 {
   "id": 11056,
   "word": "GLENN",
   "pronunciations": "ˈglɛn"
 },
 {
   "id": 11057,
   "word": "GLISTENING",
   "pronunciations": "ˈglɪsənɪŋ, ˈglɪsnɪŋ"
 },
 {
   "id": 11058,
   "word": "GLITTERING",
   "pronunciations": "ˈglɪtɝɪŋ"
 },
 {
   "id": 11059,
   "word": "GLOWED",
   "pronunciations": "ˈgloʊd"
 },
 {
   "id": 11060,
   "word": "GOAT",
   "pronunciations": "ˈgoʊt"
 },
 {
   "id": 11061,
   "word": "GOOD-BYE",
   "pronunciations": "gɪdˈbaɪ, ˈgʊdˌbaɪ"
 },
 {
   "id": 11062,
   "word": "GOODBYE",
   "pronunciations": "ˌgʊdˈbaɪ"
 },
 {
   "id": 11063,
   "word": "GRANDCHILDREN",
   "pronunciations": "ˈgrænˌtʃɪldrən, ˈgrændˌtʃɪldrən"
 },
 {
   "id": 11064,
   "word": "GRANDEUR",
   "pronunciations": "grænˈduːr"
 },
 {
   "id": 11065,
   "word": "GRANNY",
   "pronunciations": "ˈgræni"
 },
 {
   "id": 11066,
   "word": "GRAPHIC",
   "pronunciations": "ˈgræfɪk"
 },
 {
   "id": 11067,
   "word": "GRASSLANDS",
   "pronunciations": "ˈgræˌslændz"
 },
 {
   "id": 11068,
   "word": "GREER",
   "pronunciations": "ˈgrɪr"
 },
 {
   "id": 11069,
   "word": "GREETINGS",
   "pronunciations": "ˈgriːtɪŋz"
 },
 {
   "id": 11070,
   "word": "GRENADES",
   "pronunciations": "grəˈneɪdz"
 },
 {
   "id": 11071,
   "word": "GRIPPING",
   "pronunciations": "ˈgrɪpɪŋ"
 },
 {
   "id": 11072,
   "word": "GROUNDED",
   "pronunciations": "ˈgraʊndɪd"
 },
 {
   "id": 11073,
   "word": "GRUDGINGLY",
   "pronunciations": "ˈgrʌdʒɪŋli, ˈgrʌdʒɪŋgli"
 },
 {
   "id": 11074,
   "word": "GUISE",
   "pronunciations": "ˈgaɪz"
 },
 {
   "id": 11075,
   "word": "GUNNY",
   "pronunciations": "ˈgʌni"
 },
 {
   "id": 11076,
   "word": "GYP",
   "pronunciations": "ˈdʒɪp"
 },
 {
   "id": 11077,
   "word": "HAMBURGER",
   "pronunciations": "ˈhæmbɝgɝ"
 },
 {
   "id": 11078,
   "word": "HANDICAP",
   "pronunciations": "ˈhændiːˌkæp"
 },
 {
   "id": 11079,
   "word": "HANDING",
   "pronunciations": "ˈhændɪŋ"
 },
 {
   "id": 11080,
   "word": "HANDLER",
   "pronunciations": "ˈhændlɝ, ˈhændəlɝ"
 },
 {
   "id": 11081,
   "word": "HARASSED",
   "pronunciations": "hɝˈæst"
 },
 {
   "id": 11082,
   "word": "HARCOURT",
   "pronunciations": "ˈhɑːrˌkɔrt"
 },
 {
   "id": 11083,
   "word": "HATCHING",
   "pronunciations": "ˈhætʃɪŋ"
 },
 {
   "id": 11084,
   "word": "HAWAIIAN",
   "pronunciations": "həˈwaɪən"
 },
 {
   "id": 11085,
   "word": "HAWTHORNE",
   "pronunciations": "ˈhɔθɔrn"
 },
 {
   "id": 11086,
   "word": "HAYS",
   "pronunciations": "ˈheɪz"
 },
 {
   "id": 11087,
   "word": "HEADACHES",
   "pronunciations": "ˈhɛˌdeɪks"
 },
 {
   "id": 11088,
   "word": "HEALED",
   "pronunciations": "ˈhiːld"
 },
 {
   "id": 11089,
   "word": "HEALING",
   "pronunciations": "ˈhiːlɪŋ"
 },
 {
   "id": 11090,
   "word": "HEARST'S",
   "pronunciations": "ˈhɝːsts"
 },
 {
   "id": 11091,
   "word": "HEIGHTENED",
   "pronunciations": "ˈhaɪtənd"
 },
 {
   "id": 11092,
   "word": "HELLENIC",
   "pronunciations": "həˈlɛnɪk"
 },
 {
   "id": 11093,
   "word": "HELPER",
   "pronunciations": "ˈhɛlpɝ"
 },
 {
   "id": 11094,
   "word": "HERDS",
   "pronunciations": "ˈhɝːdz"
 },
 {
   "id": 11095,
   "word": "HERNANDEZ",
   "pronunciations": "hɝˈnændɛz"
 },
 {
   "id": 11096,
   "word": "HI",
   "pronunciations": "ˈhaɪ"
 },
 {
   "id": 11097,
   "word": "HICKORY",
   "pronunciations": "ˈhɪkɝi, ˈhɪkri"
 },
 {
   "id": 11098,
   "word": "HID",
   "pronunciations": "ˈhɪd"
 },
 {
   "id": 11099,
   "word": "HIGHLANDS",
   "pronunciations": "ˈhaɪləndz"
 },
 {
   "id": 11100,
   "word": "HIRING",
   "pronunciations": "ˈhaɪrɪŋ"
 },
 {
   "id": 11101,
   "word": "HOMICIDE",
   "pronunciations": "ˈhɑːməˌsaɪd"
 },
 {
   "id": 11102,
   "word": "HONOLULU",
   "pronunciations": "ˌhɑːnəˈluːluː"
 },
 {
   "id": 11103,
   "word": "HORIZONS",
   "pronunciations": "hɝˈaɪzənz"
 },
 {
   "id": 11104,
   "word": "HOSPITALITY",
   "pronunciations": "ˌhɑːspəˈtæləti"
 },
 {
   "id": 11105,
   "word": "HOSTILITY",
   "pronunciations": "hɑːˈstɪləti"
 },
 {
   "id": 11106,
   "word": "HOUGH",
   "pronunciations": "ˈhʌf"
 },
 {
   "id": 11107,
   "word": "HUMILIATION",
   "pronunciations": "hjuːˌmɪliːˈeɪʃən"
 },
 {
   "id": 11108,
   "word": "HUMMING",
   "pronunciations": "ˈhʌmɪŋ"
 },
 {
   "id": 11109,
   "word": "HUMPHREY",
   "pronunciations": "ˈhʌmfri"
 },
 {
   "id": 11110,
   "word": "HUNTERS",
   "pronunciations": "ˈhʌntɝz"
 },
 {
   "id": 11111,
   "word": "HUTS",
   "pronunciations": "ˈhʌts"
 },
 {
   "id": 11112,
   "word": "HUXLEY",
   "pronunciations": "ˈhʌksli"
 },
 {
   "id": 11113,
   "word": "HYMNS",
   "pronunciations": "ˈhɪmz"
 },
 {
   "id": 11114,
   "word": "IDENTIFIES",
   "pronunciations": "aɪˈdɛntəˌfaɪz"
 },
 {
   "id": 11115,
   "word": "IDLY",
   "pronunciations": "ˈaɪdli"
 },
 {
   "id": 11116,
   "word": "ILLUSTRATIVE",
   "pronunciations": "ˌɪˈlʌstrətɪv"
 },
 {
   "id": 11117,
   "word": "IMPECCABLE",
   "pronunciations": "ˌɪmˈpɛkəbəl"
 },
 {
   "id": 11118,
   "word": "IMPELLED",
   "pronunciations": "ˌɪmˈpɛld"
 },
 {
   "id": 11119,
   "word": "IMPETUS",
   "pronunciations": "ˈɪmpətəs"
 },
 {
   "id": 11120,
   "word": "IMPRISONMENT",
   "pronunciations": "ˌɪmˈprɪzənmənt"
 },
 {
   "id": 11121,
   "word": "INACTION",
   "pronunciations": "ˌɪˈnækʃən"
 },
 {
   "id": 11122,
   "word": "INCEPTION",
   "pronunciations": "ˌɪnˈsɛpʃən"
 },
 {
   "id": 11123,
   "word": "INDECENT",
   "pronunciations": "ˌɪnˈdiːsənt"
 },
 {
   "id": 11124,
   "word": "INDEFINITELY",
   "pronunciations": "ˌɪnˈdɛfənətli"
 },
 {
   "id": 11125,
   "word": "INDIANAPOLIS",
   "pronunciations": "ˌɪndiːəˈnæpəlɪs"
 },
 {
   "id": 11126,
   "word": "INDICATIVE",
   "pronunciations": "ˌɪnˈdɪkətɪv"
 },
 {
   "id": 11127,
   "word": "INDUCTION",
   "pronunciations": "ˌɪnˈdʌkʃən"
 },
 {
   "id": 11128,
   "word": "INEXPENSIVE",
   "pronunciations": "ˌɪnɪkˈspɛnsɪv"
 },
 {
   "id": 11129,
   "word": "INEXPLICABLE",
   "pronunciations": "ˌɪnəkˈsplɪkəbəl"
 },
 {
   "id": 11130,
   "word": "INFILTRATION",
   "pronunciations": "ˌɪnfɪlˈtreɪʃən"
 },
 {
   "id": 11131,
   "word": "INFORMS",
   "pronunciations": "ˌɪnˈfɔrmz"
 },
 {
   "id": 11132,
   "word": "INGREDIENT",
   "pronunciations": "ˌɪnˈgriːdiːənt"
 },
 {
   "id": 11133,
   "word": "INHABITED",
   "pronunciations": "ˌɪnˈhæbətəd"
 },
 {
   "id": 11134,
   "word": "INHERITANCE",
   "pronunciations": "ˌɪnˈhɛrətəns"
 },
 {
   "id": 11135,
   "word": "INHIBITION",
   "pronunciations": "ˌɪnhəˈbɪʃən, ˌɪnəˈbɪʃən"
 },
 {
   "id": 11136,
   "word": "INJECT",
   "pronunciations": "ˌɪnˈdʒɛkt"
 },
 {
   "id": 11137,
   "word": "INMATES",
   "pronunciations": "ˈɪnˌmeɪts"
 },
 {
   "id": 11138,
   "word": "INNUMERABLE",
   "pronunciations": "ˌɪˈnuːmɝəbəl"
 },
 {
   "id": 11139,
   "word": "INQUIRE",
   "pronunciations": "ˌɪnˈkwaɪr"
 },
 {
   "id": 11140,
   "word": "INSCRIPTION",
   "pronunciations": "ˌɪnˈskrɪpʃən"
 },
 {
   "id": 11141,
   "word": "INSISTING",
   "pronunciations": "ˌɪnˈsɪstɪŋ"
 },
 {
   "id": 11142,
   "word": "INSOLENCE",
   "pronunciations": "ˈɪnsələns"
 },
 {
   "id": 11143,
   "word": "INSURED",
   "pronunciations": "ˌɪnˈʃʊrd"
 },
 {
   "id": 11144,
   "word": "INSURING",
   "pronunciations": "ˌɪnˈʃʊrɪŋ"
 },
 {
   "id": 11145,
   "word": "INTANGIBLE",
   "pronunciations": "ˌɪnˈtændʒəbəl"
 },
 {
   "id": 11146,
   "word": "INTENDS",
   "pronunciations": "ˌɪnˈtɛndz"
 },
 {
   "id": 11147,
   "word": "INTERCEPT",
   "pronunciations": "ˌɪntɝˈsɛpt, ˌɪnɝˈsɛpt"
 },
 {
   "id": 11148,
   "word": "INTERCHANGE",
   "pronunciations": "ˌɪntɝˈtʃeɪndʒ, ˌɪnɝˈtʃeɪndʒ"
 },
 {
   "id": 11149,
   "word": "INTERDEPENDENCE",
   "pronunciations": "ˌɪntɝdəˈpɛndəns"
 },
 {
   "id": 11150,
   "word": "INTERFERING",
   "pronunciations": "ˌɪntɝˈfɪrɪŋ, ˌɪnɝˈfɪrɪŋ"
 },
 {
   "id": 11151,
   "word": "INTERNALLY",
   "pronunciations": "ˌɪnˈtɝːnəli"
 },
 {
   "id": 11152,
   "word": "INTERPLAY",
   "pronunciations": "ˈɪntɝˌpleɪ"
 },
 {
   "id": 11153,
   "word": "INTERSECT",
   "pronunciations": "ˌɪntɝˈsɛkt"
 },
 {
   "id": 11154,
   "word": "INTIMATELY",
   "pronunciations": "ˈɪntɪmətli"
 },
 {
   "id": 11155,
   "word": "INVADED",
   "pronunciations": "ˌɪnˈveɪdəd, ˌɪnˈveɪdɪd"
 },
 {
   "id": 11156,
   "word": "INVESTMENTS",
   "pronunciations": "ˌɪnˈvɛstmənts, ˌɪnˈvɛsmənts"
 },
 {
   "id": 11157,
   "word": "INVOKED",
   "pronunciations": "ˌɪnˈvoʊkt"
 },
 {
   "id": 11158,
   "word": "ION",
   "pronunciations": "ˈaɪˌɑːn, ˈaɪən"
 },
 {
   "id": 11159,
   "word": "IONIZING",
   "pronunciations": "ˈaɪəˌnaɪzɪŋ"
 },
 {
   "id": 11160,
   "word": "IRONICALLY",
   "pronunciations": "aɪˈrɑːnɪkli"
 },
 {
   "id": 11161,
   "word": "ISLANDERS",
   "pronunciations": "ˈaɪləndɝz"
 },
 {
   "id": 11162,
   "word": "J",
   "pronunciations": "ˈdʒeɪ"
 },
 {
   "id": 11163,
   "word": "JACKETS",
   "pronunciations": "ˈdʒækɪts"
 },
 {
   "id": 11164,
   "word": "JAKE",
   "pronunciations": "ˈdʒeɪk"
 },
 {
   "id": 11165,
   "word": "JAM",
   "pronunciations": "ˈdʒæm"
 },
 {
   "id": 11166,
   "word": "JANICE",
   "pronunciations": "ˈdʒænəs, ˈdʒænɪs"
 },
 {
   "id": 11167,
   "word": "JENKS",
   "pronunciations": "ˈdʒɛŋks"
 },
 {
   "id": 11168,
   "word": "JO",
   "pronunciations": "ˈdʒoʊ"
 },
 {
   "id": 11169,
   "word": "JOHNS",
   "pronunciations": "ˈdʒɑːnz"
 },
 {
   "id": 11170,
   "word": "JUG",
   "pronunciations": "ˈdʒʌg"
 },
 {
   "id": 11171,
   "word": "JUICY",
   "pronunciations": "ˈdʒuːsi"
 },
 {
   "id": 11172,
   "word": "KATHARINE",
   "pronunciations": "ˈkæθrɪn"
 },
 {
   "id": 11173,
   "word": "KATHERINE",
   "pronunciations": "ˈkæθɝɪn, ˈkæθrɪn"
 },
 {
   "id": 11174,
   "word": "KEEL",
   "pronunciations": "ˈkiːl"
 },
 {
   "id": 11175,
   "word": "KELSEY",
   "pronunciations": "ˈkɛlsi"
 },
 {
   "id": 11176,
   "word": "KENNETH",
   "pronunciations": "ˈkɛnɪθ"
 },
 {
   "id": 11177,
   "word": "KEROSENE",
   "pronunciations": "ˈkɛrəˌsiːn"
 },
 {
   "id": 11178,
   "word": "KIDNEY",
   "pronunciations": "ˈkɪdni"
 },
 {
   "id": 11179,
   "word": "KISSING",
   "pronunciations": "ˈkɪsɪŋ"
 },
 {
   "id": 11180,
   "word": "LABORER",
   "pronunciations": "ˈleɪbɝɝ"
 },
 {
   "id": 11181,
   "word": "LABORERS",
   "pronunciations": "ˈleɪbɝɝz"
 },
 {
   "id": 11182,
   "word": "LACKS",
   "pronunciations": "ˈlæks"
 },
 {
   "id": 11183,
   "word": "LAD",
   "pronunciations": "ˈlæd"
 },
 {
   "id": 11184,
   "word": "LADEN",
   "pronunciations": "ˈleɪdən"
 },
 {
   "id": 11185,
   "word": "LAMPS",
   "pronunciations": "ˈlæmps"
 },
 {
   "id": 11186,
   "word": "LAPSE",
   "pronunciations": "ˈlæps"
 },
 {
   "id": 11187,
   "word": "LARVAE",
   "pronunciations": "ˈlɑːrvi"
 },
 {
   "id": 11188,
   "word": "LASH",
   "pronunciations": "ˈlæʃ"
 },
 {
   "id": 11189,
   "word": "LAUDERDALE",
   "pronunciations": "ˈlɔdɝˌdeɪl"
 },
 {
   "id": 11190,
   "word": "LAURO",
   "pronunciations": "ˈlɔroʊ"
 },
 {
   "id": 11191,
   "word": "LAYMEN",
   "pronunciations": "ˈleɪmən"
 },
 {
   "id": 11192,
   "word": "LAYOUT",
   "pronunciations": "ˈleɪˌaʊt"
 },
 {
   "id": 11193,
   "word": "LAYS",
   "pronunciations": "ˈleɪz"
 },
 {
   "id": 11194,
   "word": "LEADER'S",
   "pronunciations": "ˈliːdɝz"
 },
 {
   "id": 11195,
   "word": "LEAVITT",
   "pronunciations": "ˈlɛvɪt"
 },
 {
   "id": 11196,
   "word": "LECTURER",
   "pronunciations": "ˈlɛktʃɝɝ"
 },
 {
   "id": 11197,
   "word": "LEDGE",
   "pronunciations": "ˈlɛdʒ"
 },
 {
   "id": 11198,
   "word": "LEGENDARY",
   "pronunciations": "ˈlɛdʒənˌdɛri"
 },
 {
   "id": 11199,
   "word": "LENIN",
   "pronunciations": "ˈlɛnən, ˈlɛnɪn"
 },
 {
   "id": 11200,
   "word": "LEVERS",
   "pronunciations": "ˈlɛvɝz"
 },
 {
   "id": 11201,
   "word": "LIABLE",
   "pronunciations": "ˈlaɪəbəl"
 },
 {
   "id": 11202,
   "word": "LIAISON",
   "pronunciations": "liːˈeɪˌzɑːn"
 },
 {
   "id": 11203,
   "word": "LIBRARIANS",
   "pronunciations": "laɪˈbrɛˌriːənz"
 },
 {
   "id": 11204,
   "word": "LICENSED",
   "pronunciations": "ˈlaɪsənst"
 },
 {
   "id": 11205,
   "word": "LICENSES",
   "pronunciations": "ˈlaɪsənsɪz"
 },
 {
   "id": 11206,
   "word": "LICENSING",
   "pronunciations": "ˈlaɪsənsɪŋ"
 },
 {
   "id": 11207,
   "word": "LIED",
   "pronunciations": "ˈlaɪd"
 },
 {
   "id": 11208,
   "word": "LIFE'S",
   "pronunciations": "ˈlaɪfs"
 },
 {
   "id": 11209,
   "word": "LINEN",
   "pronunciations": "ˈlɪnən"
 },
 {
   "id": 11210,
   "word": "LINKING",
   "pronunciations": "ˈlɪŋkɪŋ"
 },
 {
   "id": 11211,
   "word": "LIONS",
   "pronunciations": "ˈlaɪənz"
 },
 {
   "id": 11212,
   "word": "LIQUIDS",
   "pronunciations": "ˈlɪkwədz, ˈlɪkwɪdz"
 },
 {
   "id": 11213,
   "word": "LISTON",
   "pronunciations": "ˈlɪstən"
 },
 {
   "id": 11214,
   "word": "LOCUST",
   "pronunciations": "ˈloʊkəst"
 },
 {
   "id": 11215,
   "word": "LONGEST",
   "pronunciations": "ˈlɔŋgəst, ˈlɔŋgɪst"
 },
 {
   "id": 11216,
   "word": "LOOM",
   "pronunciations": "ˈluːm"
 },
 {
   "id": 11217,
   "word": "LOUISVILLE",
   "pronunciations": "ˈluːiːˌvɪl"
 },
 {
   "id": 11218,
   "word": "LOW-COST",
   "pronunciations": "ˌloʊˈkɔst"
 },
 {
   "id": 11219,
   "word": "LOWELL",
   "pronunciations": "ˈloʊəl"
 },
 {
   "id": 11220,
   "word": "LUXURIOUS",
   "pronunciations": "ləgˈʒɝːiːəs"
 },
 {
   "id": 11221,
   "word": "MACBETH",
   "pronunciations": "məkˈbɛθ"
 },
 {
   "id": 11222,
   "word": "MAGNIFIED",
   "pronunciations": "ˈmægnəˌfaɪd"
 },
 {
   "id": 11223,
   "word": "MAKESHIFT",
   "pronunciations": "ˈmeɪkˌʃɪft"
 },
 {
   "id": 11224,
   "word": "MAN-MADE",
   "pronunciations": "ˈmænˌmeɪd"
 },
 {
   "id": 11225,
   "word": "MANDATORY",
   "pronunciations": "ˈmændəˌtɔri"
 },
 {
   "id": 11226,
   "word": "MANHOOD",
   "pronunciations": "ˈmænˌhʊd"
 },
 {
   "id": 11227,
   "word": "MANIFESTATION",
   "pronunciations": "ˌmænəfɛˈsteɪʃən"
 },
 {
   "id": 11228,
   "word": "MANIFESTED",
   "pronunciations": "ˈmænəˌfɛstəd"
 },
 {
   "id": 11229,
   "word": "MANIPULATE",
   "pronunciations": "məˈnɪpjəˌleɪt"
 },
 {
   "id": 11230,
   "word": "MANLEY",
   "pronunciations": "ˈmænli"
 },
 {
   "id": 11231,
   "word": "MANTLE'S",
   "pronunciations": "ˈmæntəlz"
 },
 {
   "id": 11232,
   "word": "MANUEL",
   "pronunciations": "mɑːnˈwɛl"
 },
 {
   "id": 11233,
   "word": "MANURE",
   "pronunciations": "məˈnʊr"
 },
 {
   "id": 11234,
   "word": "MARGINS",
   "pronunciations": "ˈmɑːrdʒənz"
 },
 {
   "id": 11235,
   "word": "MARIE",
   "pronunciations": "mɝˈiː"
 },
 {
   "id": 11236,
   "word": "MARR",
   "pronunciations": "ˈmɑːr"
 },
 {
   "id": 11237,
   "word": "MARTINI",
   "pronunciations": "mɑːrˈtiːni"
 },
 {
   "id": 11238,
   "word": "MARVEL",
   "pronunciations": "ˈmɑːrvəl"
 },
 {
   "id": 11239,
   "word": "MASONRY",
   "pronunciations": "ˈmeɪsənri"
 },
 {
   "id": 11240,
   "word": "MAST",
   "pronunciations": "ˈmæst"
 },
 {
   "id": 11241,
   "word": "MATILDA",
   "pronunciations": "məˈtɪldə"
 },
 {
   "id": 11242,
   "word": "MAZE",
   "pronunciations": "ˈmeɪz"
 },
 {
   "id": 11243,
   "word": "MEAGER",
   "pronunciations": "ˈmiːgɝ"
 },
 {
   "id": 11244,
   "word": "MEMBRANE",
   "pronunciations": "ˈmɛmˌbreɪn"
 },
 {
   "id": 11245,
   "word": "METEORITE",
   "pronunciations": "ˈmiːtiːɔˌraɪt"
 },
 {
   "id": 11246,
   "word": "METER",
   "pronunciations": "ˈmiːtɝ"
 },
 {
   "id": 11247,
   "word": "METHODICALLY",
   "pronunciations": "məˈθɑːdɪkəli, məˈθɑːdɪkli"
 },
 {
   "id": 11248,
   "word": "METICULOUSLY",
   "pronunciations": "məˈtɪkjələsli"
 },
 {
   "id": 11249,
   "word": "MEYER",
   "pronunciations": "ˈmaɪɝ"
 },
 {
   "id": 11250,
   "word": "MICROSCOPICALLY",
   "pronunciations": "ˌmaɪkrəˈskɑːpɪkli"
 },
 {
   "id": 11251,
   "word": "MIDWESTERN",
   "pronunciations": "mɪˈdwɛstɝn"
 },
 {
   "id": 11252,
   "word": "MILLER'S",
   "pronunciations": "ˈmɪlɝz"
 },
 {
   "id": 11253,
   "word": "MINCED",
   "pronunciations": "ˈmɪnst"
 },
 {
   "id": 11254,
   "word": "MIND'S",
   "pronunciations": "ˈmaɪndz"
 },
 {
   "id": 11255,
   "word": "MISUNDERSTOOD",
   "pronunciations": "ˌmɪsəndɝˈstʊd"
 },
 {
   "id": 11256,
   "word": "MODERATELY",
   "pronunciations": "ˈmɑːdɝətli"
 },
 {
   "id": 11257,
   "word": "MODERNITY",
   "pronunciations": "mɑːˈdɝːnəti"
 },
 {
   "id": 11258,
   "word": "MODIFICATIONS",
   "pronunciations": "ˌmɑːdəfəˈkeɪʃənz"
 },
 {
   "id": 11259,
   "word": "MODIFY",
   "pronunciations": "ˈmɑːdəˌfaɪ"
 },
 {
   "id": 11260,
   "word": "MOLECULE",
   "pronunciations": "ˈmɑːləˌkjuːl"
 },
 {
   "id": 11261,
   "word": "MOLLIE",
   "pronunciations": "ˈmɑːli"
 },
 {
   "id": 11262,
   "word": "MOMENTARY",
   "pronunciations": "ˈmoʊmənˌtɛri"
 },
 {
   "id": 11263,
   "word": "MONSTER",
   "pronunciations": "ˈmɑːnstɝ"
 },
 {
   "id": 11264,
   "word": "MORGAN'S",
   "pronunciations": "ˈmɔrgənz"
 },
 {
   "id": 11265,
   "word": "MOSE",
   "pronunciations": "ˈmoʊz"
 },
 {
   "id": 11266,
   "word": "MOUNTAINOUS",
   "pronunciations": "ˈmaʊntənəs"
 },
 {
   "id": 11267,
   "word": "MULCH",
   "pronunciations": "ˈmʌltʃ"
 },
 {
   "id": 11268,
   "word": "MULTIPLICATION",
   "pronunciations": "ˌməltəpləˈkeɪʃən"
 },
 {
   "id": 11269,
   "word": "MULTNOMAH",
   "pronunciations": "ˌməlˈnoʊmə"
 },
 {
   "id": 11270,
   "word": "MUNICH",
   "pronunciations": "ˈmjuːnɪk"
 },
 {
   "id": 11271,
   "word": "MUSKET",
   "pronunciations": "ˈmʌskət"
 },
 {
   "id": 11272,
   "word": "MYTHS",
   "pronunciations": "ˈmɪθs"
 },
 {
   "id": 11273,
   "word": "NAIL",
   "pronunciations": "ˈneɪl"
 },
 {
   "id": 11274,
   "word": "NARA",
   "pronunciations": "ˈnɑːrə"
 },
 {
   "id": 11275,
   "word": "NARRAGANSETT",
   "pronunciations": "ˌnɛrəˈgænsət"
 },
 {
   "id": 11276,
   "word": "NARROWLY",
   "pronunciations": "ˈnɛroʊli"
 },
 {
   "id": 11277,
   "word": "NAVIGATION",
   "pronunciations": "ˈnævəˈgeɪʃən, ˌnævəˈgeɪʃən"
 },
 {
   "id": 11278,
   "word": "NBC",
   "pronunciations": "ˈɛnˌbiːˈsiː"
 },
 {
   "id": 11279,
   "word": "NE",
   "pronunciations": "ˈniː, ˈneɪ"
 },
 {
   "id": 11280,
   "word": "NEBRASKA",
   "pronunciations": "nəˈbræskə"
 },
 {
   "id": 11281,
   "word": "NEEDLES",
   "pronunciations": "ˈniːdəlz"
 },
 {
   "id": 11282,
   "word": "NEEDY",
   "pronunciations": "ˈniːdi"
 },
 {
   "id": 11283,
   "word": "NEGOTIATION",
   "pronunciations": "nɪˌgoʊʃiːˈeɪʃən"
 },
 {
   "id": 11284,
   "word": "NELLIE",
   "pronunciations": "ˈnɛli"
 },
 {
   "id": 11285,
   "word": "NEUROSIS",
   "pronunciations": "nʊˈroʊsəs"
 },
 {
   "id": 11286,
   "word": "NEVADA",
   "pronunciations": "nəˈvɑːdə, nəˈvædə"
 },
 {
   "id": 11287,
   "word": "NEWBORN",
   "pronunciations": "ˈnuːbɔrn"
 },
 {
   "id": 11288,
   "word": "NEWSPAPERMAN",
   "pronunciations": "ˈnuːzˌpeɪpɝˌmæn"
 },
 {
   "id": 11289,
   "word": "NEWTON",
   "pronunciations": "ˈnuːtən"
 },
 {
   "id": 11290,
   "word": "NOISES",
   "pronunciations": "ˈnɔɪzɪz"
 },
 {
   "id": 11291,
   "word": "NOISY",
   "pronunciations": "ˈnɔɪzi"
 },
 {
   "id": 11292,
   "word": "NON-CATHOLIC",
   "pronunciations": "nɑːnˈkæθlɪk"
 },
 {
   "id": 11293,
   "word": "NORBERG",
   "pronunciations": "ˈnɔrbɝg"
 },
 {
   "id": 11294,
   "word": "NOSES",
   "pronunciations": "ˈnoʊzɪz"
 },
 {
   "id": 11295,
   "word": "NOSTALGIC",
   "pronunciations": "nɔˈstældʒɪk"
 },
 {
   "id": 11296,
   "word": "NOTCH",
   "pronunciations": "ˈnɑːtʃ"
 },
 {
   "id": 11297,
   "word": "NOTCHES",
   "pronunciations": "ˈnɑːtʃəz, ˈnɑːtʃɪz"
 },
 {
   "id": 11298,
   "word": "NOTRE",
   "pronunciations": "ˈnoʊtrə, ˈnoʊtɝ"
 },
 {
   "id": 11299,
   "word": "OATH",
   "pronunciations": "ˈoʊθ"
 },
 {
   "id": 11300,
   "word": "OBSERVANCE",
   "pronunciations": "əbˈzɝːvəns"
 },
 {
   "id": 11301,
   "word": "OFFENSES",
   "pronunciations": "əˈfɛnsɪz"
 },
 {
   "id": 11302,
   "word": "OFFICERS'",
   "pronunciations": "ˈɔfɪsɝz"
 },
 {
   "id": 11303,
   "word": "OLGA",
   "pronunciations": "ˈoʊlgə"
 },
 {
   "id": 11304,
   "word": "OMITTING",
   "pronunciations": "oʊˈmɪtɪŋ"
 },
 {
   "id": 11305,
   "word": "OPAQUE",
   "pronunciations": "oʊˈpeɪk"
 },
 {
   "id": 11306,
   "word": "OPENER",
   "pronunciations": "ˈoʊpənɝ"
 },
 {
   "id": 11307,
   "word": "OPERATIVE",
   "pronunciations": "ˈɑːpɝətɪv"
 },
 {
   "id": 11308,
   "word": "OPERETTA",
   "pronunciations": "ˌɑːpɝˈɛtə"
 },
 {
   "id": 11309,
   "word": "OPPRESSION",
   "pronunciations": "əˈprɛʃən"
 },
 {
   "id": 11310,
   "word": "ORANGES",
   "pronunciations": "ˈɔrəndʒəz, ˈɔrɪndʒɪz"
 },
 {
   "id": 11311,
   "word": "ORGANISM",
   "pronunciations": "ˈɔrgəˌnɪzəm"
 },
 {
   "id": 11312,
   "word": "ORIGINALITY",
   "pronunciations": "ɝˌɪdʒəˈnælɪti"
 },
 {
   "id": 11313,
   "word": "ORIGINATE",
   "pronunciations": "ɝˈɪdʒəˌneɪt"
 },
 {
   "id": 11314,
   "word": "ORTHOGRAPHY",
   "pronunciations": "ɔrˈθɑːgrəfi"
 },
 {
   "id": 11315,
   "word": "ORVIS",
   "pronunciations": "ˈɔrvɪs"
 },
 {
   "id": 11316,
   "word": "OSAKA",
   "pronunciations": "oʊˈsɑːkə"
 },
 {
   "id": 11317,
   "word": "OSSIFICATION",
   "pronunciations": "ˌɑːsəfəˈkeɪʃən"
 },
 {
   "id": 11318,
   "word": "OUTBURSTS",
   "pronunciations": "ˈaʊtˌbɝːsts"
 },
 {
   "id": 11319,
   "word": "OUTDOORS",
   "pronunciations": "ˈaʊtˈdɔrz"
 },
 {
   "id": 11320,
   "word": "OUTLETS",
   "pronunciations": "ˈaʊtˌlɛts"
 },
 {
   "id": 11321,
   "word": "OUTLINED",
   "pronunciations": "ˈaʊtˌlaɪnd"
 },
 {
   "id": 11322,
   "word": "OUTLINES",
   "pronunciations": "ˈaʊtˌlaɪnz"
 },
 {
   "id": 11323,
   "word": "OUTSPOKEN",
   "pronunciations": "ˈaʊtˈspoʊkən"
 },
 {
   "id": 11324,
   "word": "OVERCOMING",
   "pronunciations": "ˈoʊvɝˌkəmɪŋ"
 },
 {
   "id": 11325,
   "word": "OVERHEARD",
   "pronunciations": "ˈoʊvɝˈhɝːd"
 },
 {
   "id": 11326,
   "word": "OX",
   "pronunciations": "ˈɑːks"
 },
 {
   "id": 11327,
   "word": "OYSTER",
   "pronunciations": "ˈɔɪstɝ"
 },
 {
   "id": 11328,
   "word": "PACKAGED",
   "pronunciations": "ˈpækɪdʒd"
 },
 {
   "id": 11329,
   "word": "PACKAGES",
   "pronunciations": "ˈpækədʒəz, ˈpækɪdʒɪz"
 },
 {
   "id": 11330,
   "word": "PAIRED",
   "pronunciations": "ˈpɛrd"
 },
 {
   "id": 11331,
   "word": "PALMER'S",
   "pronunciations": "ˈpɑːmɝz, ˈpɑːlmɝz"
 },
 {
   "id": 11332,
   "word": "PANELING",
   "pronunciations": "ˈpænəlɪŋ"
 },
 {
   "id": 11333,
   "word": "PANSY",
   "pronunciations": "ˈpænzi"
 },
 {
   "id": 11334,
   "word": "PARADIGM",
   "pronunciations": "ˈpɛrəˌdaɪm"
 },
 {
   "id": 11335,
   "word": "PARALYSIS",
   "pronunciations": "pɝˈæləsəs, pɝˈælɪsɪs"
 },
 {
   "id": 11336,
   "word": "PARENTHOOD",
   "pronunciations": "ˈpɛrəntˌhʊd"
 },
 {
   "id": 11337,
   "word": "PARENTS'",
   "pronunciations": "ˈpɛrənts"
 },
 {
   "id": 11338,
   "word": "PARKWAY",
   "pronunciations": "ˈpɑːrˌkweɪ"
 },
 {
   "id": 11339,
   "word": "PARTHENON",
   "pronunciations": "ˈpɑːrθəˌnɑːn"
 },
 {
   "id": 11340,
   "word": "PARTITION",
   "pronunciations": "pɑːrˈtɪʃən"
 },
 {
   "id": 11341,
   "word": "PAS",
   "pronunciations": "ˈpɑːz"
 },
 {
   "id": 11342,
   "word": "PASADENA",
   "pronunciations": "ˌpæsəˈdiːnɝ"
 },
 {
   "id": 11343,
   "word": "PASSPORT",
   "pronunciations": "ˈpæˌspɔrt"
 },
 {
   "id": 11344,
   "word": "PASTED",
   "pronunciations": "ˈpeɪstɪd"
 },
 {
   "id": 11345,
   "word": "PASTORAL",
   "pronunciations": "ˈpæstɝəl"
 },
 {
   "id": 11346,
   "word": "PASTORS",
   "pronunciations": "ˈpæstɝz"
 },
 {
   "id": 11347,
   "word": "PATRIOTISM",
   "pronunciations": "ˈpeɪtriːəˌtɪzəm"
 },
 {
   "id": 11348,
   "word": "PATTERNED",
   "pronunciations": "ˈpætɝnd"
 },
 {
   "id": 11349,
   "word": "PAUSING",
   "pronunciations": "ˈpɔzɪŋ"
 },
 {
   "id": 11350,
   "word": "PEANUT",
   "pronunciations": "ˈpiːnət, ˈpiːˌnət"
 },
 {
   "id": 11351,
   "word": "PEAR",
   "pronunciations": "ˈpɛr"
 },
 {
   "id": 11352,
   "word": "PEDESTRIAN",
   "pronunciations": "pəˈdɛstriːən"
 },
 {
   "id": 11353,
   "word": "PEELING",
   "pronunciations": "ˈpiːlɪŋ"
 },
 {
   "id": 11354,
   "word": "PEGBOARD",
   "pronunciations": "ˈpɛgˌbɔrd"
 },
 {
   "id": 11355,
   "word": "PELS",
   "pronunciations": "ˈpɛlz"
 },
 {
   "id": 11356,
   "word": "PERCENTAGES",
   "pronunciations": "pɝˈsɛntɪdʒɪz, pɝˈsɛnɪdʒɪz"
 },
 {
   "id": 11357,
   "word": "PERENNIAL",
   "pronunciations": "pɝˈɛniːəl"
 },
 {
   "id": 11358,
   "word": "PERIODICALLY",
   "pronunciations": "ˌpiːriːˈɑːdɪkəli, ˌpiːriːˈɑːdɪkli"
 },
 {
   "id": 11359,
   "word": "PERRIN",
   "pronunciations": "ˈpɛrɪn"
 },
 {
   "id": 11360,
   "word": "PERSIST",
   "pronunciations": "pɝˈsɪst"
 },
 {
   "id": 11361,
   "word": "PESSIMISM",
   "pronunciations": "ˈpɛsəˌmɪzəm"
 },
 {
   "id": 11362,
   "word": "PESSIMISTIC",
   "pronunciations": "ˌpɛsəˈmɪstɪk"
 },
 {
   "id": 11363,
   "word": "PETS",
   "pronunciations": "ˈpɛts"
 },
 {
   "id": 11364,
   "word": "PHOTOGRAPHERS",
   "pronunciations": "fəˈtɑːgrəfɝz"
 },
 {
   "id": 11365,
   "word": "PHYSICIANS",
   "pronunciations": "fəˈzɪʃənz, fɪˈzɪʃənz"
 },
 {
   "id": 11366,
   "word": "PIERCE",
   "pronunciations": "ˈpɪrs"
 },
 {
   "id": 11367,
   "word": "PIERS",
   "pronunciations": "ˈpɪrz"
 },
 {
   "id": 11368,
   "word": "PIGS",
   "pronunciations": "ˈpɪgz"
 },
 {
   "id": 11369,
   "word": "PILGRIMS",
   "pronunciations": "ˈpɪlgrəmz"
 },
 {
   "id": 11370,
   "word": "PILING",
   "pronunciations": "ˈpaɪlɪŋ"
 },
 {
   "id": 11371,
   "word": "PINCH",
   "pronunciations": "ˈpɪntʃ"
 },
 {
   "id": 11372,
   "word": "PINS",
   "pronunciations": "ˈpɪnz"
 },
 {
   "id": 11373,
   "word": "PIPELINE",
   "pronunciations": "ˈpaɪˌplaɪn"
 },
 {
   "id": 11374,
   "word": "PITCHES",
   "pronunciations": "ˈpɪtʃɪz"
 },
 {
   "id": 11375,
   "word": "PLACID",
   "pronunciations": "ˈplæsəd, ˈplæsɪd"
 },
 {
   "id": 11376,
   "word": "PLAGUE",
   "pronunciations": "ˈpleɪg"
 },
 {
   "id": 11377,
   "word": "PLANTER",
   "pronunciations": "ˈplæntɝ"
 },
 {
   "id": 11378,
   "word": "PLEASURES",
   "pronunciations": "ˈplɛʒɝz"
 },
 {
   "id": 11379,
   "word": "POIGNANT",
   "pronunciations": "ˈpɔɪnjənt"
 },
 {
   "id": 11380,
   "word": "POISE",
   "pronunciations": "ˈpɔɪz"
 },
 {
   "id": 11381,
   "word": "POKER",
   "pronunciations": "ˈpoʊkɝ"
 },
 {
   "id": 11382,
   "word": "POLARIZATION",
   "pronunciations": "ˌpoʊlɝəˈzeɪʃən, ˌpoʊlɝɪˈzeɪʃən"
 },
 {
   "id": 11383,
   "word": "POLLUTION",
   "pronunciations": "pəˈluːʃən"
 },
 {
   "id": 11384,
   "word": "PONIES",
   "pronunciations": "ˈpoʊniːz"
 },
 {
   "id": 11385,
   "word": "POOL'S",
   "pronunciations": "ˈpuːlz"
 },
 {
   "id": 11386,
   "word": "POPPED",
   "pronunciations": "ˈpɑːpt"
 },
 {
   "id": 11387,
   "word": "POPPING",
   "pronunciations": "ˈpɑːpɪŋ"
 },
 {
   "id": 11388,
   "word": "PORTRAY",
   "pronunciations": "pɔrˈtreɪ"
 },
 {
   "id": 11389,
   "word": "PORTRAYED",
   "pronunciations": "pɔrˈtreɪd"
 },
 {
   "id": 11390,
   "word": "POSSESSING",
   "pronunciations": "pəˈzɛsɪŋ"
 },
 {
   "id": 11391,
   "word": "POSTERIOR",
   "pronunciations": "ˌpɔˈstɪrjɝ"
 },
 {
   "id": 11392,
   "word": "POSTERITY",
   "pronunciations": "pɑːˈstɛrəti"
 },
 {
   "id": 11393,
   "word": "POTENCY",
   "pronunciations": "ˈpoʊtənsi"
 },
 {
   "id": 11394,
   "word": "POUNDING",
   "pronunciations": "ˈpaʊndɪŋ"
 },
 {
   "id": 11395,
   "word": "PRACTICABLE",
   "pronunciations": "ˈpræktəkəbəl"
 },
 {
   "id": 11396,
   "word": "PRACTITIONERS",
   "pronunciations": "prækˈtɪʃənɝz"
 },
 {
   "id": 11397,
   "word": "PREDECESSORS",
   "pronunciations": "ˈprɛdəˌsɛsɝz"
 },
 {
   "id": 11398,
   "word": "PREDICTING",
   "pronunciations": "prɪˈdɪktɪŋ, priːˈdɪktɪŋ"
 },
 {
   "id": 11399,
   "word": "PREFERABLE",
   "pronunciations": "ˈprɛfɝəbəl, ˈprɛfrəbəl"
 },
 {
   "id": 11400,
   "word": "PRESENTATIONS",
   "pronunciations": "ˌprɛzənˈteɪʃənz"
 },
 {
   "id": 11401,
   "word": "PRETENDED",
   "pronunciations": "priːˈtɛndəd, priːˈtɛndɪd"
 },
 {
   "id": 11402,
   "word": "PRETENSE",
   "pronunciations": "priːˈtɛns"
 },
 {
   "id": 11403,
   "word": "PRETENTIOUS",
   "pronunciations": "priːˈtɛnʃəs"
 },
 {
   "id": 11404,
   "word": "PRIEUR",
   "pronunciations": "ˈpriːɝ"
 },
 {
   "id": 11405,
   "word": "PRIZES",
   "pronunciations": "ˈpraɪzəz, ˈpraɪzɪz"
 },
 {
   "id": 11406,
   "word": "PROBE",
   "pronunciations": "ˈproʊb"
 },
 {
   "id": 11407,
   "word": "PROGRESSES",
   "pronunciations": "ˈprɑːˌgrɛsəz, proʊˈgrɛsəz"
 },
 {
   "id": 11408,
   "word": "PROGRESSIVELY",
   "pronunciations": "prɑːˈgrɛsɪvli"
 },
 {
   "id": 11409,
   "word": "PROJECTING",
   "pronunciations": "prɑːˈdʒɛktɪŋ"
 },
 {
   "id": 11410,
   "word": "PROMOTIONAL",
   "pronunciations": "prəˈmoʊʃənəl, pɝˈmoʊʃənəl"
 },
 {
   "id": 11411,
   "word": "PROPONENTS",
   "pronunciations": "prəˈpoʊnənts"
 },
 {
   "id": 11412,
   "word": "PROPOSING",
   "pronunciations": "prəˈpoʊzɪŋ"
 },
 {
   "id": 11413,
   "word": "PROPS",
   "pronunciations": "ˈprɑːps"
 },
 {
   "id": 11414,
   "word": "PROPULSION",
   "pronunciations": "prəˈpʌlʃən"
 },
 {
   "id": 11415,
   "word": "PROSTITUTE",
   "pronunciations": "ˈprɑːstəˌtuːt"
 },
 {
   "id": 11416,
   "word": "PRUDENCE",
   "pronunciations": "ˈpruːdəns"
 },
 {
   "id": 11417,
   "word": "PRY",
   "pronunciations": "ˈpraɪ"
 },
 {
   "id": 11418,
   "word": "PSYCHOTHERAPY",
   "pronunciations": "ˌsaɪkoʊˈθɛrəpi"
 },
 {
   "id": 11419,
   "word": "PUBLIC'S",
   "pronunciations": "ˈpʌblɪks"
 },
 {
   "id": 11420,
   "word": "PUBLICIZED",
   "pronunciations": "ˈpʌblɪˌsaɪzd"
 },
 {
   "id": 11421,
   "word": "PUNY",
   "pronunciations": "ˈpjuːni"
 },
 {
   "id": 11422,
   "word": "PUPPET",
   "pronunciations": "ˈpʌpət, ˈpʌpɪt"
 },
 {
   "id": 11423,
   "word": "QUACKERY",
   "pronunciations": "ˈkwækɝi"
 },
 {
   "id": 11424,
   "word": "QUAKER",
   "pronunciations": "ˈkweɪkɝ"
 },
 {
   "id": 11425,
   "word": "QUALITATIVE",
   "pronunciations": "ˈkwɑːləˌteɪtɪv"
 },
 {
   "id": 11426,
   "word": "QUEER",
   "pronunciations": "ˈkwɪr"
 },
 {
   "id": 11427,
   "word": "QUESTIONNAIRES",
   "pronunciations": "ˌkwɛstʃəˈnɛrz"
 },
 {
   "id": 11428,
   "word": "QUICKER",
   "pronunciations": "ˈkwɪkɝ"
 },
 {
   "id": 11429,
   "word": "RAMP",
   "pronunciations": "ˈræmp"
 },
 {
   "id": 11430,
   "word": "RAT",
   "pronunciations": "ˈræt"
 },
 {
   "id": 11431,
   "word": "RATIONALE",
   "pronunciations": "ˌræʃəˈnæl"
 },
 {
   "id": 11432,
   "word": "REACTORS",
   "pronunciations": "riːˈæktɝz"
 },
 {
   "id": 11433,
   "word": "REBUILDING",
   "pronunciations": "riːˈbɪldɪŋ"
 },
 {
   "id": 11434,
   "word": "REBUT",
   "pronunciations": "rɪˈbʌt, riːˈbʌt"
 },
 {
   "id": 11435,
   "word": "RECONSTRUCT",
   "pronunciations": "ˌriːkənˈstrʌkt"
 },
 {
   "id": 11436,
   "word": "RECOURSE",
   "pronunciations": "ˈriːkɔrs"
 },
 {
   "id": 11437,
   "word": "RECURRING",
   "pronunciations": "rɪˈkɝːɪŋ, riːˈkɝːɪŋ"
 },
 {
   "id": 11438,
   "word": "REDCOAT",
   "pronunciations": "ˈrɛdˌkoʊt"
 },
 {
   "id": 11439,
   "word": "REFERRAL",
   "pronunciations": "rɪˈfɝːəl"
 },
 {
   "id": 11440,
   "word": "REFINED",
   "pronunciations": "rəˈfaɪnd, rɪˈfaɪnd"
 },
 {
   "id": 11441,
   "word": "REFLECTIVE",
   "pronunciations": "rɪˈflɛktɪv"
 },
 {
   "id": 11442,
   "word": "REFLEXES",
   "pronunciations": "ˈriːflɛksəz"
 },
 {
   "id": 11443,
   "word": "REFRESHING",
   "pronunciations": "rɪˈfrɛʃɪŋ"
 },
 {
   "id": 11444,
   "word": "REFUSES",
   "pronunciations": "rəˈfjuːzəz, rɪˈfjuːzɪz"
 },
 {
   "id": 11445,
   "word": "REGULARS",
   "pronunciations": "ˈrɛgjəlɝz"
 },
 {
   "id": 11446,
   "word": "REICH",
   "pronunciations": "ˈraɪk"
 },
 {
   "id": 11447,
   "word": "RELEGATED",
   "pronunciations": "ˈrɛləˌgeɪtɪd"
 },
 {
   "id": 11448,
   "word": "RELIC",
   "pronunciations": "ˈrɛlɪk"
 },
 {
   "id": 11449,
   "word": "RELINQUISH",
   "pronunciations": "rɪˈlɪŋkwɪʃ, riːˈlɪŋkwɪʃ"
 },
 {
   "id": 11450,
   "word": "REMEDIES",
   "pronunciations": "ˈrɛmədiːz"
 },
 {
   "id": 11451,
   "word": "REPLACES",
   "pronunciations": "rɪˈpleɪsɪz"
 },
 {
   "id": 11452,
   "word": "REPRESSION",
   "pronunciations": "riːˈprɛʃən"
 },
 {
   "id": 11453,
   "word": "REPRODUCTION",
   "pronunciations": "ˌriːprəˈdʌkʃən"
 },
 {
   "id": 11454,
   "word": "REPUBLICS",
   "pronunciations": "riːˈpʌblɪks"
 },
 {
   "id": 11455,
   "word": "RESCUED",
   "pronunciations": "ˈrɛskjuːd"
 },
 {
   "id": 11456,
   "word": "RESIDING",
   "pronunciations": "rɪˈzaɪdɪŋ, riːˈzaɪdɪŋ"
 },
 {
   "id": 11457,
   "word": "RESOLUTIONS",
   "pronunciations": "ˌrɛzəˈluːʃənz"
 },
 {
   "id": 11458,
   "word": "RESPONDING",
   "pronunciations": "rɪˈspɑːndɪŋ, riːˈspɑːndɪŋ"
 },
 {
   "id": 11459,
   "word": "RESTORING",
   "pronunciations": "rɪˈstɔrɪŋ"
 },
 {
   "id": 11460,
   "word": "RETALIATION",
   "pronunciations": "riːˌtæliːˈeɪʃən"
 },
 {
   "id": 11461,
   "word": "REVERSIBLE",
   "pronunciations": "rɪˈvɝːsəbəl, riːˈvɝːsəbəl"
 },
 {
   "id": 11462,
   "word": "REVERSING",
   "pronunciations": "rɪˈvɝːsɪŋ, riːˈvɝːsɪŋ"
 },
 {
   "id": 11463,
   "word": "REVIVED",
   "pronunciations": "rɪˈvaɪvd, riːˈvaɪvd"
 },
 {
   "id": 11464,
   "word": "REVOLVING",
   "pronunciations": "riːˈvɑːlvɪŋ"
 },
 {
   "id": 11465,
   "word": "REXROTH",
   "pronunciations": "ˈrɛksrɑːθ"
 },
 {
   "id": 11466,
   "word": "RIBBONS",
   "pronunciations": "ˈrɪbənz"
 },
 {
   "id": 11467,
   "word": "RIDDEN",
   "pronunciations": "ˈrɪdən"
 },
 {
   "id": 11468,
   "word": "RIGHT-HAND",
   "pronunciations": "raɪtˈhænd"
 },
 {
   "id": 11469,
   "word": "RIGHTEOUSNESS",
   "pronunciations": "ˈraɪtʃəsnəs"
 },
 {
   "id": 11470,
   "word": "RINGS",
   "pronunciations": "ˈrɪŋz"
 },
 {
   "id": 11471,
   "word": "RINSE",
   "pronunciations": "ˈrɪns"
 },
 {
   "id": 11472,
   "word": "RIP",
   "pronunciations": "ˈrɪp"
 },
 {
   "id": 11473,
   "word": "RIPPED",
   "pronunciations": "ˈrɪpt"
 },
 {
   "id": 11474,
   "word": "RIVALRY",
   "pronunciations": "ˈraɪvəlri"
 },
 {
   "id": 11475,
   "word": "ROAM",
   "pronunciations": "ˈroʊm"
 },
 {
   "id": 11476,
   "word": "ROBBERS",
   "pronunciations": "ˈrɑːbɝz"
 },
 {
   "id": 11477,
   "word": "ROBBINS",
   "pronunciations": "ˈrɑːbɪnz"
 },
 {
   "id": 11478,
   "word": "ROBE",
   "pronunciations": "ˈroʊb"
 },
 {
   "id": 11479,
   "word": "ROBERTA",
   "pronunciations": "rəˈbɝːtə"
 },
 {
   "id": 11480,
   "word": "ROCOCO",
   "pronunciations": "rəˈkoʊˌkoʊ"
 },
 {
   "id": 11481,
   "word": "RODGERS",
   "pronunciations": "ˈrɑːdʒɝz"
 },
 {
   "id": 11482,
   "word": "ROTATED",
   "pronunciations": "ˈroʊˌteɪtɪd"
 },
 {
   "id": 11483,
   "word": "ROTOR",
   "pronunciations": "ˈroʊtɝ"
 },
 {
   "id": 11484,
   "word": "ROTUNDA",
   "pronunciations": "roʊˈtʌndə"
 },
 {
   "id": 11485,
   "word": "ROUTES",
   "pronunciations": "ˈruːts, ˈraʊts, ˈrʊts"
 },
 {
   "id": 11486,
   "word": "RUB",
   "pronunciations": "ˈrʌb"
 },
 {
   "id": 11487,
   "word": "RUDE",
   "pronunciations": "ˈruːd"
 },
 {
   "id": 11488,
   "word": "RUE",
   "pronunciations": "ˈruː"
 },
 {
   "id": 11489,
   "word": "RUMORS",
   "pronunciations": "ˈruːmɝz"
 },
 {
   "id": 11490,
   "word": "RUNAWAY",
   "pronunciations": "ˈrʌnəˌweɪ"
 },
 {
   "id": 11491,
   "word": "RUPEE",
   "pronunciations": "ruːˈpiː"
 },
 {
   "id": 11492,
   "word": "SACRIFICES",
   "pronunciations": "ˈsækrəˌfaɪsɪz"
 },
 {
   "id": 11493,
   "word": "SADNESS",
   "pronunciations": "ˈsædnəs"
 },
 {
   "id": 11494,
   "word": "SAINTS",
   "pronunciations": "ˈseɪnts"
 },
 {
   "id": 11495,
   "word": "SALESMANSHIP",
   "pronunciations": "ˈseɪlzmənˌʃɪp"
 },
 {
   "id": 11496,
   "word": "SALTS",
   "pronunciations": "ˈsɔlts"
 },
 {
   "id": 11497,
   "word": "SANDY",
   "pronunciations": "ˈsændi"
 },
 {
   "id": 11498,
   "word": "SAVAGES",
   "pronunciations": "ˈsævədʒəz, ˈsævɪdʒɪz"
 },
 {
   "id": 11499,
   "word": "SAVIOR",
   "pronunciations": "ˈseɪvjɝ"
 },
 {
   "id": 11500,
   "word": "SAX",
   "pronunciations": "ˈsæks"
 },
 {
   "id": 11501,
   "word": "SCAFFOLD",
   "pronunciations": "ˈskæfəld"
 },
 {
   "id": 11502,
   "word": "SCARCE",
   "pronunciations": "ˈskɛrs"
 },
 {
   "id": 11503,
   "word": "SCENT",
   "pronunciations": "ˈsɛnt"
 },
 {
   "id": 11504,
   "word": "SCHEMES",
   "pronunciations": "ˈskiːmz"
 },
 {
   "id": 11505,
   "word": "SCHIZOPHRENIC",
   "pronunciations": "ˌʃɪzəˈfrɛnɪk"
 },
 {
   "id": 11506,
   "word": "SCHNABEL",
   "pronunciations": "ˈʃnæbəl"
 },
 {
   "id": 11507,
   "word": "SCHWARTZ",
   "pronunciations": "ˈʃwɔrts"
 },
 {
   "id": 11508,
   "word": "SCHWARZKOPF",
   "pronunciations": "ˈʃwɔrtskɔpf, ˈʃwɔrtskɔf"
 },
 {
   "id": 11509,
   "word": "SCRATCHES",
   "pronunciations": "ˈskrætʃəz, ˈskrætʃɪz"
 },
 {
   "id": 11510,
   "word": "SCULPTOR",
   "pronunciations": "ˈskʌlptɝ"
 },
 {
   "id": 11511,
   "word": "SECRETLY",
   "pronunciations": "ˈsiːkrɪtli"
 },
 {
   "id": 11512,
   "word": "SEIZE",
   "pronunciations": "ˈsiːz"
 },
 {
   "id": 11513,
   "word": "SEIZURE",
   "pronunciations": "ˈsiːʒɝ"
 },
 {
   "id": 11514,
   "word": "SELLER",
   "pronunciations": "ˈsɛlɝ"
 },
 {
   "id": 11515,
   "word": "SENSATIONAL",
   "pronunciations": "sɛnˈseɪʃənəl"
 },
 {
   "id": 11516,
   "word": "SENSELESS",
   "pronunciations": "ˈsɛnsləs"
 },
 {
   "id": 11517,
   "word": "SENSIBILITIES",
   "pronunciations": "ˌsɛnsɪˈbɪlɪtiːz"
 },
 {
   "id": 11518,
   "word": "SENSORS",
   "pronunciations": "ˈsɛnsɝz"
 },
 {
   "id": 11519,
   "word": "SENSUAL",
   "pronunciations": "ˈsɛnʃəwəl"
 },
 {
   "id": 11520,
   "word": "SENTRY",
   "pronunciations": "ˈsɛntri"
 },
 {
   "id": 11521,
   "word": "SEPTA",
   "pronunciations": "ˈsɛptə"
 },
 {
   "id": 11522,
   "word": "SEQUENCES",
   "pronunciations": "ˈsiːkwənsəz, ˈsiːkwənsɪz"
 },
 {
   "id": 11523,
   "word": "SERENITY",
   "pronunciations": "sɝˈɛnəti"
 },
 {
   "id": 11524,
   "word": "SETTLEMENTS",
   "pronunciations": "ˈsɛtəlmənts"
 },
 {
   "id": 11525,
   "word": "SEVERED",
   "pronunciations": "ˈsɛvɝd"
 },
 {
   "id": 11526,
   "word": "SEW",
   "pronunciations": "ˈsoʊ"
 },
 {
   "id": 11527,
   "word": "SEXUALLY",
   "pronunciations": "ˈsɛkʃuːəli"
 },
 {
   "id": 11528,
   "word": "SHADED",
   "pronunciations": "ˈʃeɪdɪd"
 },
 {
   "id": 11529,
   "word": "SHAFER",
   "pronunciations": "ˈʃeɪfɝ"
 },
 {
   "id": 11530,
   "word": "SHAKESPEAREAN",
   "pronunciations": "ˌʃeɪkˈspɪriːən"
 },
 {
   "id": 11531,
   "word": "SHATTERING",
   "pronunciations": "ˈʃætɝɪŋ"
 },
 {
   "id": 11532,
   "word": "SHAVE",
   "pronunciations": "ˈʃeɪv"
 },
 {
   "id": 11533,
   "word": "SHAVING",
   "pronunciations": "ˈʃeɪvɪŋ"
 },
 {
   "id": 11534,
   "word": "SHERLOCK",
   "pronunciations": "ˈʃɝːˌlɑːk"
 },
 {
   "id": 11535,
   "word": "SHIPPED",
   "pronunciations": "ˈʃɪpt"
 },
 {
   "id": 11536,
   "word": "SHORELINE",
   "pronunciations": "ˈʃɔrˌlaɪn"
 },
 {
   "id": 11537,
   "word": "SHOVING",
   "pronunciations": "ˈʃʌvɪŋ"
 },
 {
   "id": 11538,
   "word": "SIBERIA",
   "pronunciations": "saɪˈbɪriːə"
 },
 {
   "id": 11539,
   "word": "SICKNESS",
   "pronunciations": "ˈsɪknəs"
 },
 {
   "id": 11540,
   "word": "SIDEWISE",
   "pronunciations": "ˈsaɪˌdwaɪz"
 },
 {
   "id": 11541,
   "word": "SIEGE",
   "pronunciations": "ˈsiːdʒ"
 },
 {
   "id": 11542,
   "word": "SIGNATURE",
   "pronunciations": "ˈsɪgnətʃɝ"
 },
 {
   "id": 11543,
   "word": "SINGLY",
   "pronunciations": "ˈsɪŋgli"
 },
 {
   "id": 11544,
   "word": "SINKING",
   "pronunciations": "ˈsɪŋkɪŋ"
 },
 {
   "id": 11545,
   "word": "SINNED",
   "pronunciations": "ˈsɪnd"
 },
 {
   "id": 11546,
   "word": "SITS",
   "pronunciations": "ˈsɪts"
 },
 {
   "id": 11547,
   "word": "SLAPPING",
   "pronunciations": "ˈslæpɪŋ"
 },
 {
   "id": 11548,
   "word": "SLEEPY",
   "pronunciations": "ˈsliːpi"
 },
 {
   "id": 11549,
   "word": "SLIT",
   "pronunciations": "ˈslɪt"
 },
 {
   "id": 11550,
   "word": "SLOT",
   "pronunciations": "ˈslɑːt"
 },
 {
   "id": 11551,
   "word": "SLOWING",
   "pronunciations": "ˈsloʊɪŋ"
 },
 {
   "id": 11552,
   "word": "SMOTHERED",
   "pronunciations": "ˈsmʌðɝd"
 },
 {
   "id": 11553,
   "word": "SNACK",
   "pronunciations": "ˈsnæk"
 },
 {
   "id": 11554,
   "word": "SNEAKED",
   "pronunciations": "ˈsniːkt"
 },
 {
   "id": 11555,
   "word": "SNIFFED",
   "pronunciations": "ˈsnɪft"
 },
 {
   "id": 11556,
   "word": "SNORING",
   "pronunciations": "ˈsnɔrɪŋ"
 },
 {
   "id": 11557,
   "word": "SOAKED",
   "pronunciations": "ˈsoʊkt"
 },
 {
   "id": 11558,
   "word": "SOCIALIZATION",
   "pronunciations": "ˌsoʊʃəlɪˈzeɪʃən"
 },
 {
   "id": 11559,
   "word": "SOFA",
   "pronunciations": "ˈsoʊfə"
 },
 {
   "id": 11560,
   "word": "SOFTENING",
   "pronunciations": "ˈsɔfənɪŋ, ˈsɔfnɪŋ"
 },
 {
   "id": 11561,
   "word": "SOLACE",
   "pronunciations": "ˈsɑːləs, ˈsoʊlɪs"
 },
 {
   "id": 11562,
   "word": "SOLICITOR",
   "pronunciations": "səˈlɪsətɝ"
 },
 {
   "id": 11563,
   "word": "SOMEBODY'S",
   "pronunciations": "ˈsʌmˌbɑːdiːz"
 },
 {
   "id": 11564,
   "word": "SOMEPLACE",
   "pronunciations": "ˈsʌmˌpleɪs"
 },
 {
   "id": 11565,
   "word": "SONATAS",
   "pronunciations": "ˌsɑːˈnɑːtəz"
 },
 {
   "id": 11566,
   "word": "SOPRANO",
   "pronunciations": "səˈprɑːnoʊ, səˈprænoʊ"
 },
 {
   "id": 11567,
   "word": "SOYBEANS",
   "pronunciations": "ˈsɔɪˌbiːnz"
 },
 {
   "id": 11568,
   "word": "SPACING",
   "pronunciations": "ˈspeɪsɪŋ"
 },
 {
   "id": 11569,
   "word": "SPECTRAL",
   "pronunciations": "ˈspɛktrəl"
 },
 {
   "id": 11570,
   "word": "SPEEDY",
   "pronunciations": "ˈspiːˌdiː"
 },
 {
   "id": 11571,
   "word": "SPELLED",
   "pronunciations": "ˈspɛld"
 },
 {
   "id": 11572,
   "word": "SPENCER'S",
   "pronunciations": "ˈspɛnsɝz"
 },
 {
   "id": 11573,
   "word": "SPINE",
   "pronunciations": "ˈspaɪn"
 },
 {
   "id": 11574,
   "word": "SPOILED",
   "pronunciations": "ˈspɔɪld"
 },
 {
   "id": 11575,
   "word": "SPOON",
   "pronunciations": "ˈspuːn"
 },
 {
   "id": 11576,
   "word": "SPORTSMEN",
   "pronunciations": "ˈspɔrtsmɪn"
 },
 {
   "id": 11577,
   "word": "SPOTLIGHT",
   "pronunciations": "ˈspɑːtˌlaɪt"
 },
 {
   "id": 11578,
   "word": "SPRAYED",
   "pronunciations": "ˈspreɪd"
 },
 {
   "id": 11579,
   "word": "SPROUTING",
   "pronunciations": "ˈspraʊtɪŋ"
 },
 {
   "id": 11580,
   "word": "SPURRED",
   "pronunciations": "ˈspɝːd"
 },
 {
   "id": 11581,
   "word": "STAGGERING",
   "pronunciations": "ˈstægɝˌɪŋ"
 },
 {
   "id": 11582,
   "word": "STAIN",
   "pronunciations": "ˈsteɪn"
 },
 {
   "id": 11583,
   "word": "STAIRWAY",
   "pronunciations": "ˈstɛrˌweɪ"
 },
 {
   "id": 11584,
   "word": "STANCE",
   "pronunciations": "ˈstæns"
 },
 {
   "id": 11585,
   "word": "STARVING",
   "pronunciations": "ˈstɑːrvɪŋ"
 },
 {
   "id": 11586,
   "word": "STEALING",
   "pronunciations": "ˈstiːlɪŋ"
 },
 {
   "id": 11587,
   "word": "STEAMED",
   "pronunciations": "ˈstiːmd"
 },
 {
   "id": 11588,
   "word": "STENGEL",
   "pronunciations": "ˈstɛŋgəl"
 },
 {
   "id": 11589,
   "word": "STEWART",
   "pronunciations": "ˈstuːɝt"
 },
 {
   "id": 11590,
   "word": "STIMULATE",
   "pronunciations": "ˈstɪmjəˌleɪt"
 },
 {
   "id": 11591,
   "word": "STINT",
   "pronunciations": "ˈstɪnt"
 },
 {
   "id": 11592,
   "word": "STORMS",
   "pronunciations": "ˈstɔrmz"
 },
 {
   "id": 11593,
   "word": "STRAIGHTENING",
   "pronunciations": "ˈstreɪtənɪŋ, ˈstreɪtnɪŋ"
 },
 {
   "id": 11594,
   "word": "STRANGLED",
   "pronunciations": "ˈstræŋgəld"
 },
 {
   "id": 11595,
   "word": "STRATFORD",
   "pronunciations": "ˈstrætfɝd"
 },
 {
   "id": 11596,
   "word": "STRAYS",
   "pronunciations": "ˈstreɪz"
 },
 {
   "id": 11597,
   "word": "STREAKS",
   "pronunciations": "ˈstriːks"
 },
 {
   "id": 11598,
   "word": "STRENGTHENED",
   "pronunciations": "ˈstrɛŋθənd"
 },
 {
   "id": 11599,
   "word": "STREWN",
   "pronunciations": "ˈstruːn"
 },
 {
   "id": 11600,
   "word": "STRICKEN",
   "pronunciations": "ˈstrɪkən"
 },
 {
   "id": 11601,
   "word": "STRIFE",
   "pronunciations": "ˈstraɪf"
 },
 {
   "id": 11602,
   "word": "STRONGHOLD",
   "pronunciations": "ˈstrɔŋˌhoʊld"
 },
 {
   "id": 11603,
   "word": "STUNNING",
   "pronunciations": "ˈstʌnɪŋ"
 },
 {
   "id": 11604,
   "word": "SUBMITTING",
   "pronunciations": "səbˈmɪtɪŋ"
 },
 {
   "id": 11605,
   "word": "SUBORDINATE",
   "pronunciations": "səˈbɔrdəˌneɪt, səˈbɔrdənət"
 },
 {
   "id": 11606,
   "word": "SUBTLY",
   "pronunciations": "ˈsʌtəli"
 },
 {
   "id": 11607,
   "word": "SUBTRACTION",
   "pronunciations": "səbˈtrækʃən"
 },
 {
   "id": 11608,
   "word": "SUCCEEDING",
   "pronunciations": "səkˈsiːdɪŋ"
 },
 {
   "id": 11609,
   "word": "SUCCESSORS",
   "pronunciations": "səkˈsɛsɝz"
 },
 {
   "id": 11610,
   "word": "SUCKED",
   "pronunciations": "ˈsʌkt"
 },
 {
   "id": 11611,
   "word": "SUNDAY'S",
   "pronunciations": "ˈsʌnˌdeɪz, ˈsʌnˌdiːz"
 },
 {
   "id": 11612,
   "word": "SUNDOWN",
   "pronunciations": "ˈsʌnˌdaʊn"
 },
 {
   "id": 11613,
   "word": "SUNK",
   "pronunciations": "ˈsʌŋk"
 },
 {
   "id": 11614,
   "word": "SUPERIMPOSED",
   "pronunciations": "ˌsuːpɝəmˈpoʊzd"
 },
 {
   "id": 11615,
   "word": "SUPPLEMENTED",
   "pronunciations": "ˌsəpləˌmɛntɪd"
 },
 {
   "id": 11616,
   "word": "SUPPLIER",
   "pronunciations": "səˈplaɪɝ"
 },
 {
   "id": 11617,
   "word": "SUPPRESS",
   "pronunciations": "səˈprɛs"
 },
 {
   "id": 11618,
   "word": "SURGERY",
   "pronunciations": "ˈsɝːdʒɝi"
 },
 {
   "id": 11619,
   "word": "SURVEILLANCE",
   "pronunciations": "sɝˈveɪləns"
 },
 {
   "id": 11620,
   "word": "SUSCEPTIBLE",
   "pronunciations": "səˈsɛptəbəl"
 },
 {
   "id": 11621,
   "word": "SUSPENSE",
   "pronunciations": "səˈspɛns"
 },
 {
   "id": 11622,
   "word": "SUTHERLAND",
   "pronunciations": "ˈsʌðɝlənd"
 },
 {
   "id": 11623,
   "word": "SWAM",
   "pronunciations": "ˈswæm"
 },
 {
   "id": 11624,
   "word": "SWEETLY",
   "pronunciations": "ˈswiːtli"
 },
 {
   "id": 11625,
   "word": "SYNDICATE",
   "pronunciations": "ˈsɪndɪkət, ˈsɪndəˌkeɪt"
 },
 {
   "id": 11626,
   "word": "SYNTAX",
   "pronunciations": "ˈsɪnˌtæks"
 },
 {
   "id": 11627,
   "word": "TABLESPOON",
   "pronunciations": "ˈteɪbəlˌspuːn"
 },
 {
   "id": 11628,
   "word": "TACT",
   "pronunciations": "ˈtækt"
 },
 {
   "id": 11629,
   "word": "TAGGED",
   "pronunciations": "ˈtægd"
 },
 {
   "id": 11630,
   "word": "TANGENTS",
   "pronunciations": "ˈtændʒənts"
 },
 {
   "id": 11631,
   "word": "TANNED",
   "pronunciations": "ˈtænd"
 },
 {
   "id": 11632,
   "word": "TAPPING",
   "pronunciations": "ˈtæpɪŋ"
 },
 {
   "id": 11633,
   "word": "TEACHINGS",
   "pronunciations": "ˈtiːtʃɪŋz"
 },
 {
   "id": 11634,
   "word": "TEASE",
   "pronunciations": "ˈtiːz"
 },
 {
   "id": 11635,
   "word": "TECHNICIAN",
   "pronunciations": "tɛkˈnɪʃən"
 },
 {
   "id": 11636,
   "word": "TEDIOUS",
   "pronunciations": "ˈtiːdiːəs"
 },
 {
   "id": 11637,
   "word": "TEEN",
   "pronunciations": "ˈtiːn"
 },
 {
   "id": 11638,
   "word": "TELEPHONES",
   "pronunciations": "ˈtɛləˌfoʊnz"
 },
 {
   "id": 11639,
   "word": "TEMPTATIONS",
   "pronunciations": "tɛmˈteɪʃənz"
 },
 {
   "id": 11640,
   "word": "TENOR",
   "pronunciations": "ˈtɛnɝ"
 },
 {
   "id": 11641,
   "word": "TENTATIVELY",
   "pronunciations": "ˈtɛntətɪvli"
 },
 {
   "id": 11642,
   "word": "TENUOUS",
   "pronunciations": "ˈtɛnjəwəs"
 },
 {
   "id": 11643,
   "word": "TERMINOLOGY",
   "pronunciations": "ˌtɝːmɪˈnɑːlədʒi"
 },
 {
   "id": 11644,
   "word": "TERRIER",
   "pronunciations": "ˈtɛriːɝ"
 },
 {
   "id": 11645,
   "word": "TEXTURES",
   "pronunciations": "ˈtɛkstʃɝz"
 },
 {
   "id": 11646,
   "word": "THANKED",
   "pronunciations": "ˈθæŋkt"
 },
 {
   "id": 11647,
   "word": "THANKFUL",
   "pronunciations": "ˈθæŋkfəl"
 },
 {
   "id": 11648,
   "word": "THAW",
   "pronunciations": "ˈθɔ"
 },
 {
   "id": 11649,
   "word": "THELMA",
   "pronunciations": "ˈθɛlmə"
 },
 {
   "id": 11650,
   "word": "THENCE",
   "pronunciations": "ˈðɛns"
 },
 {
   "id": 11651,
   "word": "THERMOMETERS",
   "pronunciations": "θɝˈmɑːmətɝz"
 },
 {
   "id": 11652,
   "word": "THERMOSTAT",
   "pronunciations": "ˈθɝːməˌstæt"
 },
 {
   "id": 11653,
   "word": "THINKER",
   "pronunciations": "ˈθɪŋkɝ"
 },
 {
   "id": 11654,
   "word": "THINKERS",
   "pronunciations": "ˈθɪŋkɝz"
 },
 {
   "id": 11655,
   "word": "THINNER",
   "pronunciations": "ˈθɪnɝ"
 },
 {
   "id": 11656,
   "word": "THOMAS'",
   "pronunciations": "ˈtɑːməsɪz, ˈtɑːməs"
 },
 {
   "id": 11657,
   "word": "THOMAS'S",
   "pronunciations": "ˈtɑːməsɪz"
 },
 {
   "id": 11658,
   "word": "THROATS",
   "pronunciations": "ˈθroʊts"
 },
 {
   "id": 11659,
   "word": "THROTTLE",
   "pronunciations": "ˈθrɑːtəl"
 },
 {
   "id": 11660,
   "word": "THROWS",
   "pronunciations": "ˈθroʊz"
 },
 {
   "id": 11661,
   "word": "THURBER",
   "pronunciations": "ˈθɝːbɝ"
 },
 {
   "id": 11662,
   "word": "TIGHTENED",
   "pronunciations": "ˈtaɪtənd"
 },
 {
   "id": 11663,
   "word": "TILES",
   "pronunciations": "ˈtaɪlz"
 },
 {
   "id": 11664,
   "word": "TINGLING",
   "pronunciations": "ˈtɪŋgəlɪŋ, ˈtɪŋglɪŋ"
 },
 {
   "id": 11665,
   "word": "TOLERATED",
   "pronunciations": "ˈtɑːlɝˌeɪtəd"
 },
 {
   "id": 11666,
   "word": "TOLLEY",
   "pronunciations": "ˈtɑːli"
 },
 {
   "id": 11667,
   "word": "TOOTHBRUSH",
   "pronunciations": "ˈtuːθbrəʃ"
 },
 {
   "id": 11668,
   "word": "TOPOGRAPHY",
   "pronunciations": "təˈpɑːgrəfi"
 },
 {
   "id": 11669,
   "word": "TORIES",
   "pronunciations": "ˈtɔˌriːz"
 },
 {
   "id": 11670,
   "word": "TORONTO",
   "pronunciations": "tɝˈɑːntoʊ, tɔˈrɑːntoʊ"
 },
 {
   "id": 11671,
   "word": "TOTALING",
   "pronunciations": "ˈtoʊtəlɪŋ"
 },
 {
   "id": 11672,
   "word": "TOTALITARIAN",
   "pronunciations": "ˌtoʊˌtælɪˈtɛriːən"
 },
 {
   "id": 11673,
   "word": "TOTALS",
   "pronunciations": "ˈtoʊtəlz"
 },
 {
   "id": 11674,
   "word": "TOUCHDOWN",
   "pronunciations": "ˈtʌtʃˌdaʊn"
 },
 {
   "id": 11675,
   "word": "TOUGHNESS",
   "pronunciations": "ˈtʌfnəs"
 },
 {
   "id": 11676,
   "word": "TOWEL",
   "pronunciations": "ˈtaʊəl, ˈtaʊl"
 },
 {
   "id": 11677,
   "word": "TRAITS",
   "pronunciations": "ˈtreɪts"
 },
 {
   "id": 11678,
   "word": "TRANSCENDS",
   "pronunciations": "trænˈsɛndz"
 },
 {
   "id": 11679,
   "word": "TRAVERSED",
   "pronunciations": "ˈtrævɝst, trəˈvɝːst"
 },
 {
   "id": 11680,
   "word": "TREACHEROUS",
   "pronunciations": "ˈtrɛtʃɝəs"
 },
 {
   "id": 11681,
   "word": "TREASON",
   "pronunciations": "ˈtriːzən"
 },
 {
   "id": 11682,
   "word": "TREASURES",
   "pronunciations": "ˈtrɛʒɝz"
 },
 {
   "id": 11683,
   "word": "TRIBAL",
   "pronunciations": "ˈtraɪbəl"
 },
 {
   "id": 11684,
   "word": "TROOPERS",
   "pronunciations": "ˈtruːpɝz"
 },
 {
   "id": 11685,
   "word": "TUBERCULOSIS",
   "pronunciations": "təˌbɝːkjəˈloʊsɪs, tuːˌbɝːkjəˈloʊsəs, tuːˌbɝːkjuːˈloʊsəs"
 },
 {
   "id": 11686,
   "word": "TUBING",
   "pronunciations": "ˈtuːbɪŋ"
 },
 {
   "id": 11687,
   "word": "TUCKED",
   "pronunciations": "ˈtʌkt"
 },
 {
   "id": 11688,
   "word": "TURBINE",
   "pronunciations": "ˈtɝːbaɪn"
 },
 {
   "id": 11689,
   "word": "TURNER",
   "pronunciations": "ˈtɝːnɝ"
 },
 {
   "id": 11690,
   "word": "TWISTS",
   "pronunciations": "ˈtwɪsts"
 },
 {
   "id": 11691,
   "word": "UDALL",
   "pronunciations": "ˈjuːdəl"
 },
 {
   "id": 11692,
   "word": "UH",
   "pronunciations": "ˈʌ"
 },
 {
   "id": 11693,
   "word": "UNBEARABLE",
   "pronunciations": "ənˈbɛrəbəl"
 },
 {
   "id": 11694,
   "word": "UNDERSTANDS",
   "pronunciations": "ˌəndɝˈstændz"
 },
 {
   "id": 11695,
   "word": "UNDERWORLD",
   "pronunciations": "ˈʌndɝˌwɝːld"
 },
 {
   "id": 11696,
   "word": "UNDULY",
   "pronunciations": "ənˈduːli"
 },
 {
   "id": 11697,
   "word": "UNEASILY",
   "pronunciations": "əˈniːzəli"
 },
 {
   "id": 11698,
   "word": "UNEVEN",
   "pronunciations": "əˈniːvən"
 },
 {
   "id": 11699,
   "word": "UNFRIENDLY",
   "pronunciations": "ənˈfrɛndli"
 },
 {
   "id": 11700,
   "word": "UNHAPPINESS",
   "pronunciations": "ənˈhæpiːnɪs"
 },
 {
   "id": 11701,
   "word": "UNIFORMLY",
   "pronunciations": "ˈjuːnəˌfɔrmli"
 },
 {
   "id": 11702,
   "word": "UNIVERSALLY",
   "pronunciations": "ˌjuːnəˈvɝːsəli"
 },
 {
   "id": 11703,
   "word": "UNMARRIED",
   "pronunciations": "ənˈmɛriːd"
 },
 {
   "id": 11704,
   "word": "UNORTHODOX",
   "pronunciations": "əˈnɔrθəˌdɑːks"
 },
 {
   "id": 11705,
   "word": "UNPOPULAR",
   "pronunciations": "ˌənˈpɑːpjəlɝ"
 },
 {
   "id": 11706,
   "word": "UNPREPARED",
   "pronunciations": "ˌənpriːˈpɛrd"
 },
 {
   "id": 11707,
   "word": "UNREAL",
   "pronunciations": "ənˈriːl"
 },
 {
   "id": 11708,
   "word": "UNWANTED",
   "pronunciations": "ənˈwɔntɪd"
 },
 {
   "id": 11709,
   "word": "UPHELD",
   "pronunciations": "əpˈhɛld"
 },
 {
   "id": 11710,
   "word": "UPKEEP",
   "pronunciations": "ˈʌpˌkiːp"
 },
 {
   "id": 11711,
   "word": "UPWARDS",
   "pronunciations": "ˈʌpwɝdz"
 },
 {
   "id": 11712,
   "word": "URANIUM",
   "pronunciations": "jɝˈeɪniːəm"
 },
 {
   "id": 11713,
   "word": "URGENTLY",
   "pronunciations": "ˈɝːdʒəntli"
 },
 {
   "id": 11714,
   "word": "USERS",
   "pronunciations": "ˈjuːzɝz"
 },
 {
   "id": 11715,
   "word": "UTAH",
   "pronunciations": "ˈjuːˌtɔ"
 },
 {
   "id": 11716,
   "word": "VACANCY",
   "pronunciations": "ˈveɪkənsi"
 },
 {
   "id": 11717,
   "word": "VANDIVER",
   "pronunciations": "ˈvænˌdaɪvɝ"
 },
 {
   "id": 11718,
   "word": "VANTAGE",
   "pronunciations": "ˈvæntədʒ, ˈvæntɪdʒ"
 },
 {
   "id": 11719,
   "word": "VAULTS",
   "pronunciations": "ˈvɔlts"
 },
 {
   "id": 11720,
   "word": "VEILED",
   "pronunciations": "ˈveɪld"
 },
 {
   "id": 11721,
   "word": "VEINS",
   "pronunciations": "ˈveɪnz"
 },
 {
   "id": 11722,
   "word": "VELOCITIES",
   "pronunciations": "vəˈlɑːsətiːz"
 },
 {
   "id": 11723,
   "word": "VENDING",
   "pronunciations": "ˈvɛndɪŋ"
 },
 {
   "id": 11724,
   "word": "VENETIAN",
   "pronunciations": "vəˈniːʃən"
 },
 {
   "id": 11725,
   "word": "VENTILATION",
   "pronunciations": "ˌvɛntɪˈleɪʃən"
 },
 {
   "id": 11726,
   "word": "VERIFIED",
   "pronunciations": "ˈvɛrəˌfaɪd"
 },
 {
   "id": 11727,
   "word": "VERSA",
   "pronunciations": "ˈvɝːsə"
 },
 {
   "id": 11728,
   "word": "VIBRANT",
   "pronunciations": "ˈvaɪbrənt"
 },
 {
   "id": 11729,
   "word": "VICINITY",
   "pronunciations": "vəˈsɪnəti, vɪˈsɪnɪti"
 },
 {
   "id": 11730,
   "word": "VIETNAMESE",
   "pronunciations": "viːˌɛtnɑːˈmiːs"
 },
 {
   "id": 11731,
   "word": "VILLA",
   "pronunciations": "ˈvɪlə"
 },
 {
   "id": 11732,
   "word": "VIRTUOUS",
   "pronunciations": "ˈvɝːtʃuːəs"
 },
 {
   "id": 11733,
   "word": "VISIBLY",
   "pronunciations": "ˈvɪzəbli"
 },
 {
   "id": 11734,
   "word": "VOGUE",
   "pronunciations": "ˈvoʊg"
 },
 {
   "id": 11735,
   "word": "VOLLEY",
   "pronunciations": "ˈvɑːli"
 },
 {
   "id": 11736,
   "word": "WALLACE",
   "pronunciations": "ˈwɔləs, ˈwɔlɪs"
 },
 {
   "id": 11737,
   "word": "WALLET",
   "pronunciations": "ˈwɔlət"
 },
 {
   "id": 11738,
   "word": "WARTIME",
   "pronunciations": "ˈwɔrˌtaɪm"
 },
 {
   "id": 11739,
   "word": "WASTES",
   "pronunciations": "ˈweɪsts"
 },
 {
   "id": 11740,
   "word": "WAVELENGTHS",
   "pronunciations": "ˈweɪvˌlɛŋθs"
 },
 {
   "id": 11741,
   "word": "WEAKENED",
   "pronunciations": "ˈwiːkənd"
 },
 {
   "id": 11742,
   "word": "WEAKENING",
   "pronunciations": "ˈwiːkənɪŋ"
 },
 {
   "id": 11743,
   "word": "WEAKNESSES",
   "pronunciations": "ˈwiːknəsɪz"
 },
 {
   "id": 11744,
   "word": "WEARS",
   "pronunciations": "ˈwɛrz"
 },
 {
   "id": 11745,
   "word": "WEB",
   "pronunciations": "ˈwɛb"
 },
 {
   "id": 11746,
   "word": "WEIDER",
   "pronunciations": "ˈwaɪdɝ"
 },
 {
   "id": 11747,
   "word": "WELCH'S",
   "pronunciations": "ˈwɛltʃɪz"
 },
 {
   "id": 11748,
   "word": "WERNER",
   "pronunciations": "ˈwɝːnɝ"
 },
 {
   "id": 11749,
   "word": "WESTFIELD",
   "pronunciations": "ˈwɛstfiːld"
 },
 {
   "id": 11750,
   "word": "WEXLER",
   "pronunciations": "ˈwɛkslɝ"
 },
 {
   "id": 11751,
   "word": "WHATSOEVER",
   "pronunciations": "ˌwətsoʊˈɛvɝ, ˌhwətsoʊˈɛvɝ"
 },
 {
   "id": 11752,
   "word": "WHERE'S",
   "pronunciations": "ˈwɛrz, ˈhwɛrz"
 },
 {
   "id": 11753,
   "word": "WHEREUPON",
   "pronunciations": "ˈwɛrəˈpɑːn, ˈhwɛrəˈpɑːn"
 },
 {
   "id": 11754,
   "word": "WHICHEVER",
   "pronunciations": "wɪˈtʃɛvɝ, hwɪˈtʃɛvɝ"
 },
 {
   "id": 11755,
   "word": "WHIG",
   "pronunciations": "ˈwɪg, ˈhwɪg"
 },
 {
   "id": 11756,
   "word": "WHIGS",
   "pronunciations": "ˈwɪgz, ˈhwɪgz"
 },
 {
   "id": 11757,
   "word": "WHINING",
   "pronunciations": "ˈwaɪnɪŋ, ˈhwaɪnɪŋ"
 },
 {
   "id": 11758,
   "word": "WHIRLED",
   "pronunciations": "ˈwɝːld, ˈhwɝːld"
 },
 {
   "id": 11759,
   "word": "WHISTLED",
   "pronunciations": "ˈwɪsəld, ˈhwɪsəld"
 },
 {
   "id": 11760,
   "word": "WHITEY",
   "pronunciations": "ˈwaɪˌtiː, ˈhwaɪˌtiː, ˈhwaɪti"
 },
 {
   "id": 11761,
   "word": "WILEY",
   "pronunciations": "ˈwaɪli"
 },
 {
   "id": 11762,
   "word": "WILLED",
   "pronunciations": "ˈwɪld"
 },
 {
   "id": 11763,
   "word": "WILLIAM'S",
   "pronunciations": "ˈwɪljəmz"
 },
 {
   "id": 11764,
   "word": "WILMINGTON",
   "pronunciations": "ˈwɪlmɪŋtən"
 },
 {
   "id": 11765,
   "word": "WINDSHIELD",
   "pronunciations": "ˈwɪndˌʃiːld"
 },
 {
   "id": 11766,
   "word": "WIPING",
   "pronunciations": "ˈwaɪpɪŋ"
 },
 {
   "id": 11767,
   "word": "WITHDRAWAL",
   "pronunciations": "wɪðˈdrɔəl, wɪθˈdrɔəl"
 },
 {
   "id": 11768,
   "word": "WITNESSING",
   "pronunciations": "ˈwɪtnəsɪŋ"
 },
 {
   "id": 11769,
   "word": "WOLF",
   "pronunciations": "ˈwʊlf"
 },
 {
   "id": 11770,
   "word": "WORKINGS",
   "pronunciations": "ˈwɝːkɪŋz"
 },
 {
   "id": 11771,
   "word": "WORKMANSHIP",
   "pronunciations": "ˈwɝːkmənˌʃɪp"
 },
 {
   "id": 11772,
   "word": "WORKOUT",
   "pronunciations": "ˈwɝːˌkaʊt"
 },
 {
   "id": 11773,
   "word": "WORKSHOPS",
   "pronunciations": "ˈwɝːkˌʃɑːps"
 },
 {
   "id": 11774,
   "word": "WRANGLER",
   "pronunciations": "ˈræŋgəlɝ, ˈræŋglɝ"
 },
 {
   "id": 11775,
   "word": "WRAPPING",
   "pronunciations": "ˈræpɪŋ"
 },
 {
   "id": 11776,
   "word": "WRECKED",
   "pronunciations": "ˈrɛkt"
 },
 {
   "id": 11777,
   "word": "WRISTS",
   "pronunciations": "ˈrɪsts"
 },
 {
   "id": 11778,
   "word": "WRITHING",
   "pronunciations": "ˈraɪðɪŋ, ˈrɪθɪŋ"
 },
 {
   "id": 11779,
   "word": "WRONGS",
   "pronunciations": "ˈrɔŋz"
 },
 {
   "id": 11780,
   "word": "YARNS",
   "pronunciations": "ˈjɑːrnz"
 },
 {
   "id": 11781,
   "word": "YELLING",
   "pronunciations": "ˈjɛlɪŋ"
 },
 {
   "id": 11782,
   "word": "YESTERDAY'S",
   "pronunciations": "ˈjɛstɝˌdeɪz, ˈjɛstɝdiːz"
 },
 {
   "id": 11783,
   "word": "YURI",
   "pronunciations": "ˈjʊri"
 },
 {
   "id": 11784,
   "word": "ZENITH",
   "pronunciations": "ˈziːnɪθ"
 },
 {
   "id": 11785,
   "word": "ZION",
   "pronunciations": "ˈzaɪən"
 },
 {
   "id": 11786,
   "word": "ZONING",
   "pronunciations": "ˈzoʊnɪŋ"
 },
 {
   "id": 11787,
   "word": "'ROUND",
   "pronunciations": "ˈraʊnd"
 },
 {
   "id": 11788,
   "word": "ABERRANT",
   "pronunciations": "æˈbɛrənt"
 },
 {
   "id": 11789,
   "word": "ABERRATIONS",
   "pronunciations": "ˌæbɝˈeɪʃənz"
 },
 {
   "id": 11790,
   "word": "ABIDING",
   "pronunciations": "əˈbaɪdɪŋ"
 },
 {
   "id": 11791,
   "word": "ABO",
   "pronunciations": "ˈɑːboʊ"
 },
 {
   "id": 11792,
   "word": "ABREAST",
   "pronunciations": "əˈbrɛst"
 },
 {
   "id": 11793,
   "word": "ABSTENTION",
   "pronunciations": "əbˈstɛntʃən, æbˈstɛntʃən"
 },
 {
   "id": 11794,
   "word": "ABUSED",
   "pronunciations": "əˈbjuːzd"
 },
 {
   "id": 11795,
   "word": "ACADEMICALLY",
   "pronunciations": "ˌækəˈdɛmɪkli"
 },
 {
   "id": 11796,
   "word": "ACCELERATE",
   "pronunciations": "ækˈsɛlɝˌeɪt"
 },
 {
   "id": 11797,
   "word": "ACCELERATOR",
   "pronunciations": "ækˈsɛlɝˌeɪtɝ"
 },
 {
   "id": 11798,
   "word": "ACCENTS",
   "pronunciations": "ˈæksɛnts"
 },
 {
   "id": 11799,
   "word": "ACCESSIBLE",
   "pronunciations": "ækˈsɛsəbəl"
 },
 {
   "id": 11800,
   "word": "ACCOUNTED",
   "pronunciations": "əˈkaʊntɪd"
 },
 {
   "id": 11801,
   "word": "ACHIEVES",
   "pronunciations": "əˈtʃiːvz"
 },
 {
   "id": 11802,
   "word": "ACQUIESCENCE",
   "pronunciations": "ˌækwiːˈɛsəns"
 },
 {
   "id": 11803,
   "word": "ACTIVATED",
   "pronunciations": "ˈæktɪˌveɪtɪd"
 },
 {
   "id": 11804,
   "word": "ACUTELY",
   "pronunciations": "əˈkjuːtli"
 },
 {
   "id": 11805,
   "word": "ADAMANT",
   "pronunciations": "ˈædəmənt"
 },
 {
   "id": 11806,
   "word": "ADAPT",
   "pronunciations": "əˈdæpt"
 },
 {
   "id": 11807,
   "word": "ADDITIONALLY",
   "pronunciations": "əˈdɪʃəˌnəli"
 },
 {
   "id": 11808,
   "word": "ADHERED",
   "pronunciations": "ædˈhɪrd"
 },
 {
   "id": 11809,
   "word": "ADHERENTS",
   "pronunciations": "ædˈhɪrənts"
 },
 {
   "id": 11810,
   "word": "ADMINISTRATORS",
   "pronunciations": "ædˈmɪnɪˌstreɪtɝz"
 },
 {
   "id": 11811,
   "word": "ADVANTAGEOUS",
   "pronunciations": "ˌædvənˈteɪdʒəs"
 },
 {
   "id": 11812,
   "word": "ADVENT",
   "pronunciations": "ˈædˌvɛnt"
 },
 {
   "id": 11813,
   "word": "ADVENTUROUS",
   "pronunciations": "ædˈvɛntʃɝəs"
 },
 {
   "id": 11814,
   "word": "ADVERSARY",
   "pronunciations": "ˈædvɝˌsɛri"
 },
 {
   "id": 11815,
   "word": "ADVERTISERS",
   "pronunciations": "ˈædvɝˌtaɪzɝz"
 },
 {
   "id": 11816,
   "word": "ADVISORS",
   "pronunciations": "ædˈvaɪzɝz"
 },
 {
   "id": 11817,
   "word": "AFFECTING",
   "pronunciations": "əˈfɛktɪŋ"
 },
 {
   "id": 11818,
   "word": "AFFILIATIONS",
   "pronunciations": "əˌfɪliːˈeɪʃənz"
 },
 {
   "id": 11819,
   "word": "AFFINITY",
   "pronunciations": "əˈfɪnɪti"
 },
 {
   "id": 11820,
   "word": "AFFORDS",
   "pronunciations": "əˈfɔrdz"
 },
 {
   "id": 11821,
   "word": "AFT",
   "pronunciations": "ˈæft"
 },
 {
   "id": 11822,
   "word": "AGENDA",
   "pronunciations": "əˈdʒɛndə"
 },
 {
   "id": 11823,
   "word": "AGGRESSIVENESS",
   "pronunciations": "əˈgrɛsɪvnəs"
 },
 {
   "id": 11824,
   "word": "AIMING",
   "pronunciations": "ˈeɪmɪŋ"
 },
 {
   "id": 11825,
   "word": "AIMLESS",
   "pronunciations": "ˈeɪmləs"
 },
 {
   "id": 11826,
   "word": "AIRFIELD",
   "pronunciations": "ˈɛrˌfiːld"
 },
 {
   "id": 11827,
   "word": "AIRLINES",
   "pronunciations": "ˈɛrˌlaɪnz"
 },
 {
   "id": 11828,
   "word": "ALAN",
   "pronunciations": "ˈælən"
 },
 {
   "id": 11829,
   "word": "ALCOVES",
   "pronunciations": "ˈælˌkoʊvz"
 },
 {
   "id": 11830,
   "word": "ALGERIAN",
   "pronunciations": "ælˈdʒɪriːən"
 },
 {
   "id": 11831,
   "word": "ALLEGATIONS",
   "pronunciations": "ˌæləˈgeɪʃənz"
 },
 {
   "id": 11832,
   "word": "ALLEVIATE",
   "pronunciations": "əˈliːviːˌeɪt"
 },
 {
   "id": 11833,
   "word": "ALLOCATED",
   "pronunciations": "ˈæləˌkeɪtɪd"
 },
 {
   "id": 11834,
   "word": "ALLOWABLE",
   "pronunciations": "əˈlaʊəbəl"
 },
 {
   "id": 11835,
   "word": "ALLUSIONS",
   "pronunciations": "əˈluːʒənz"
 },
 {
   "id": 11836,
   "word": "ALMIGHTY",
   "pronunciations": "ɔlˈmaɪti"
 },
 {
   "id": 11837,
   "word": "ALOOF",
   "pronunciations": "əˈluːf"
 },
 {
   "id": 11838,
   "word": "ALPERT",
   "pronunciations": "ˈælpɝt"
 },
 {
   "id": 11839,
   "word": "ALTAR",
   "pronunciations": "ˈɔltɝ"
 },
 {
   "id": 11840,
   "word": "AMBIVALENCE",
   "pronunciations": "æmˈbɪvələns"
 },
 {
   "id": 11841,
   "word": "AMERICANA",
   "pronunciations": "əˌmɛrɪˈkænə"
 },
 {
   "id": 11842,
   "word": "AMOUNTED",
   "pronunciations": "əˈmaʊntɪd, əˈmaʊnɪd"
 },
 {
   "id": 11843,
   "word": "ANCESTRAL",
   "pronunciations": "ænˈsɛstrəl"
 },
 {
   "id": 11844,
   "word": "ANEMIA",
   "pronunciations": "əˈniːmiːə"
 },
 {
   "id": 11845,
   "word": "ANIMATED",
   "pronunciations": "ˈænəˌmeɪtɪd"
 },
 {
   "id": 11846,
   "word": "ANOTHER'S",
   "pronunciations": "əˈnʌðɝz"
 },
 {
   "id": 11847,
   "word": "ANTERIOR",
   "pronunciations": "ænˈtɪriːɝ"
 },
 {
   "id": 11848,
   "word": "ANTISUBMARINE",
   "pronunciations": "ˌæntɪˈsʌbmɝˌiːn, ˌæntaɪˈsʌbmɝˌiːn"
 },
 {
   "id": 11849,
   "word": "ANYMORE",
   "pronunciations": "ˌɛniːˈmɔr"
 },
 {
   "id": 11850,
   "word": "APOCALYPTIC",
   "pronunciations": "əˌpɑːkəˈlɪptɪk"
 },
 {
   "id": 11851,
   "word": "APOLLO",
   "pronunciations": "əˈpɑːloʊ"
 },
 {
   "id": 11852,
   "word": "APOLOGIZED",
   "pronunciations": "əˈpɑːləˌdʒaɪzd"
 },
 {
   "id": 11853,
   "word": "APPLAUD",
   "pronunciations": "əˈplɔd"
 },
 {
   "id": 11854,
   "word": "APPLIANCE",
   "pronunciations": "əˈplaɪəns"
 },
 {
   "id": 11855,
   "word": "APPOINTEES",
   "pronunciations": "əpɔɪnˈtiːz, əˈpɔɪntiːz"
 },
 {
   "id": 11856,
   "word": "APPRECIABLE",
   "pronunciations": "əˈpriːʃəbəl"
 },
 {
   "id": 11857,
   "word": "APPREHENSIONS",
   "pronunciations": "ˌæprɪˈhɛnʃənz"
 },
 {
   "id": 11858,
   "word": "APPROPRIATELY",
   "pronunciations": "əˈproʊpriːɪtli"
 },
 {
   "id": 11859,
   "word": "APPROPRIATION",
   "pronunciations": "əˌproʊpriːˈeɪʃən"
 },
 {
   "id": 11860,
   "word": "APPROXIMATED",
   "pronunciations": "əˈprɑːksəˌmeɪtəd"
 },
 {
   "id": 11861,
   "word": "ARBITER",
   "pronunciations": "ˈɑːrbɪtɝ"
 },
 {
   "id": 11862,
   "word": "ARBITRARILY",
   "pronunciations": "ˈɑːrbɪˌtrɛrəli"
 },
 {
   "id": 11863,
   "word": "ARBUCKLE",
   "pronunciations": "ˈɑːrbəkəl"
 },
 {
   "id": 11864,
   "word": "ARCHAIC",
   "pronunciations": "ɑːrˈkeɪɪk"
 },
 {
   "id": 11865,
   "word": "ARMY'S",
   "pronunciations": "ˈɑːrmiːz"
 },
 {
   "id": 11866,
   "word": "ARNOLPHE",
   "pronunciations": "ɑːrˈnɑːlfi"
 },
 {
   "id": 11867,
   "word": "AROUSE",
   "pronunciations": "ɝˈaʊz"
 },
 {
   "id": 11868,
   "word": "ARRESTING",
   "pronunciations": "ɝˈɛstɪŋ"
 },
 {
   "id": 11869,
   "word": "ARTISTICALLY",
   "pronunciations": "ɑːrˈtɪstɪkli"
 },
 {
   "id": 11870,
   "word": "ARUNDEL",
   "pronunciations": "ˈɛrəndəl"
 },
 {
   "id": 11871,
   "word": "ASCRIBED",
   "pronunciations": "əˈskraɪbd"
 },
 {
   "id": 11872,
   "word": "ASKINGTON",
   "pronunciations": "ˈæskɪŋtən"
 },
 {
   "id": 11873,
   "word": "ASS",
   "pronunciations": "ˈæs"
 },
 {
   "id": 11874,
   "word": "ASSERTS",
   "pronunciations": "əˈsɝːts"
 },
 {
   "id": 11875,
   "word": "ASSET",
   "pronunciations": "ˈæˌsɛt"
 },
 {
   "id": 11876,
   "word": "ASTONISHMENT",
   "pronunciations": "əˈstɑːnɪʃmənt"
 },
 {
   "id": 11877,
   "word": "ASTOUNDING",
   "pronunciations": "əˈstaʊndɪŋ"
 },
 {
   "id": 11878,
   "word": "ATHLETES",
   "pronunciations": "ˈæθˌliːts"
 },
 {
   "id": 11879,
   "word": "ATTACHMENT",
   "pronunciations": "əˈtætʃmənt"
 },
 {
   "id": 11880,
   "word": "ATTENTIVE",
   "pronunciations": "əˈtɛntɪv"
 },
 {
   "id": 11881,
   "word": "ATTRITION",
   "pronunciations": "əˈtrɪʃən"
 },
 {
   "id": 11882,
   "word": "AUDUBON",
   "pronunciations": "ˈɔdəbɑːn"
 },
 {
   "id": 11883,
   "word": "AUSTERE",
   "pronunciations": "ɔˈstɪr"
 },
 {
   "id": 11884,
   "word": "AUTHORITARIAN",
   "pronunciations": "əˌθɔrəˈtɛriːən"
 },
 {
   "id": 11885,
   "word": "AUTHORIZE",
   "pronunciations": "ˈɔθɝˌaɪz"
 },
 {
   "id": 11886,
   "word": "AUTHORIZING",
   "pronunciations": "ˈɔθɝˌaɪzɪŋ"
 },
 {
   "id": 11887,
   "word": "AUTOBIOGRAPHY",
   "pronunciations": "ˌɔtəbaɪˈɑːgrəfi"
 },
 {
   "id": 11888,
   "word": "AVENUES",
   "pronunciations": "ˈævəˌnuːz"
 },
 {
   "id": 11889,
   "word": "AVIATION",
   "pronunciations": "ˌeɪviːˈeɪʃən"
 },
 {
   "id": 11890,
   "word": "AWE",
   "pronunciations": "ˈɑː, ˈɔ"
 },
 {
   "id": 11891,
   "word": "AWED",
   "pronunciations": "ˈɔd"
 },
 {
   "id": 11892,
   "word": "AWKWARDLY",
   "pronunciations": "ˈɔkwɝdli"
 },
 {
   "id": 11893,
   "word": "AXLE",
   "pronunciations": "ˈæksəl"
 },
 {
   "id": 11894,
   "word": "BACKLOG",
   "pronunciations": "ˈbæˌklɑːg, ˈbæˌklɔg"
 },
 {
   "id": 11895,
   "word": "BACKWOODS",
   "pronunciations": "ˈbæˈkwʊdz"
 },
 {
   "id": 11896,
   "word": "BADGE",
   "pronunciations": "ˈbædʒ"
 },
 {
   "id": 11897,
   "word": "BAER",
   "pronunciations": "ˈbɛr"
 },
 {
   "id": 11898,
   "word": "BAFFLED",
   "pronunciations": "ˈbæfəld"
 },
 {
   "id": 11899,
   "word": "BALCONY",
   "pronunciations": "ˈbælkəni"
 },
 {
   "id": 11900,
   "word": "BALD",
   "pronunciations": "ˈbɔld"
 },
 {
   "id": 11901,
   "word": "BALE",
   "pronunciations": "ˈbeɪl"
 },
 {
   "id": 11902,
   "word": "BALLPLAYER",
   "pronunciations": "ˈbɔlˌpleɪɝ"
 },
 {
   "id": 11903,
   "word": "BANCROFT",
   "pronunciations": "ˈbæŋkrɔft"
 },
 {
   "id": 11904,
   "word": "BANDSTAND",
   "pronunciations": "ˈbændˌstænd"
 },
 {
   "id": 11905,
   "word": "BANISTER",
   "pronunciations": "ˈbænɪstɝ"
 },
 {
   "id": 11906,
   "word": "BANKER",
   "pronunciations": "ˈbæŋkɝ"
 },
 {
   "id": 11907,
   "word": "BANKRUPT",
   "pronunciations": "ˈbæŋkrəpt"
 },
 {
   "id": 11908,
   "word": "BANTER",
   "pronunciations": "ˈbæntɝ"
 },
 {
   "id": 11909,
   "word": "BARBELL",
   "pronunciations": "ˈbɑːrˌbɛl"
 },
 {
   "id": 11910,
   "word": "BARITONE",
   "pronunciations": "ˈbɛrəˌtoʊn"
 },
 {
   "id": 11911,
   "word": "BARNARD",
   "pronunciations": "ˈbɑːrnɑːrd"
 },
 {
   "id": 11912,
   "word": "BARRAGE",
   "pronunciations": "bɝˈɑːʒ"
 },
 {
   "id": 11913,
   "word": "BARRE",
   "pronunciations": "ˈbɛri, ˈbɑːr"
 },
 {
   "id": 11914,
   "word": "BARTH",
   "pronunciations": "ˈbɑːrθ"
 },
 {
   "id": 11915,
   "word": "BATCH",
   "pronunciations": "ˈbætʃ"
 },
 {
   "id": 11916,
   "word": "BATHS",
   "pronunciations": "ˈbæθs"
 },
 {
   "id": 11917,
   "word": "BATTLEFIELD",
   "pronunciations": "ˈbætəlˌfiːld"
 },
 {
   "id": 11918,
   "word": "BEACON",
   "pronunciations": "ˈbiːkən"
 },
 {
   "id": 11919,
   "word": "BEAN",
   "pronunciations": "ˈbiːn"
 },
 {
   "id": 11920,
   "word": "BEARDS",
   "pronunciations": "ˈbɪrdz"
 },
 {
   "id": 11921,
   "word": "BEAUTIES",
   "pronunciations": "ˈbjuːtiːz"
 },
 {
   "id": 11922,
   "word": "BEDSIDE",
   "pronunciations": "ˈbɛdˌsaɪd"
 },
 {
   "id": 11923,
   "word": "BEGOTTEN",
   "pronunciations": "biːˈgɔtɪn"
 },
 {
   "id": 11924,
   "word": "BELIEVERS",
   "pronunciations": "bɪˈliːvɝz"
 },
 {
   "id": 11925,
   "word": "BELLIGERENT",
   "pronunciations": "bəˈlɪdʒɝənt"
 },
 {
   "id": 11926,
   "word": "BEQUEST",
   "pronunciations": "bɪˈkwɛst"
 },
 {
   "id": 11927,
   "word": "BERGER'S",
   "pronunciations": "ˈbɝːgɝz"
 },
 {
   "id": 11928,
   "word": "BERN",
   "pronunciations": "ˈbɝːn"
 },
 {
   "id": 11929,
   "word": "BERTHA",
   "pronunciations": "ˈbɝːθə"
 },
 {
   "id": 11930,
   "word": "BETH",
   "pronunciations": "ˈbɛθ"
 },
 {
   "id": 11931,
   "word": "BETTING",
   "pronunciations": "ˈbɛtɪŋ"
 },
 {
   "id": 11932,
   "word": "BEVERAGE",
   "pronunciations": "ˈbɛvɝɪdʒ, ˈbɛvrɪdʒ"
 },
 {
   "id": 11933,
   "word": "BICYCLE",
   "pronunciations": "ˈbaɪsɪkəl"
 },
 {
   "id": 11934,
   "word": "BILL'S",
   "pronunciations": "ˈbɪlz"
 },
 {
   "id": 11935,
   "word": "BIRDIE",
   "pronunciations": "ˈbɝːdi"
 },
 {
   "id": 11936,
   "word": "BISCUITS",
   "pronunciations": "ˈbɪskəts"
 },
 {
   "id": 11937,
   "word": "BIVOUAC",
   "pronunciations": "ˈbɪvwæk"
 },
 {
   "id": 11938,
   "word": "BLACKENED",
   "pronunciations": "ˈblækənd"
 },
 {
   "id": 11939,
   "word": "BLACKNESS",
   "pronunciations": "ˈblæknəs"
 },
 {
   "id": 11940,
   "word": "BLACKOUT",
   "pronunciations": "ˈblæˌkaʊt"
 },
 {
   "id": 11941,
   "word": "BLASPHEMOUS",
   "pronunciations": "ˈblæsfəməs"
 },
 {
   "id": 11942,
   "word": "BLEACHED",
   "pronunciations": "ˈbliːtʃt"
 },
 {
   "id": 11943,
   "word": "BLEACHERS",
   "pronunciations": "ˈbliːtʃɝz"
 },
 {
   "id": 11944,
   "word": "BLENHEIM",
   "pronunciations": "ˈblɛnˌhaɪm"
 },
 {
   "id": 11945,
   "word": "BOARD'S",
   "pronunciations": "ˈbɔrdz"
 },
 {
   "id": 11946,
   "word": "BOARDED",
   "pronunciations": "ˈbɔrdəd, ˈbɔrdɪd"
 },
 {
   "id": 11947,
   "word": "BOARDING",
   "pronunciations": "ˈbɔrdɪŋ"
 },
 {
   "id": 11948,
   "word": "BOGEY",
   "pronunciations": "ˈboʊgi"
 },
 {
   "id": 11949,
   "word": "BOMBING",
   "pronunciations": "ˈbɑːmɪŋ"
 },
 {
   "id": 11950,
   "word": "BOOKKEEPING",
   "pronunciations": "ˈbʊkˌkiːpɪŋ"
 },
 {
   "id": 11951,
   "word": "BORDERING",
   "pronunciations": "ˈbɔrdɝɪŋ"
 },
 {
   "id": 11952,
   "word": "BORING",
   "pronunciations": "ˈbɔrɪŋ"
 },
 {
   "id": 11953,
   "word": "BOROUGH",
   "pronunciations": "ˈbɝːˌoʊ"
 },
 {
   "id": 11954,
   "word": "BOSSES",
   "pronunciations": "ˈbɔsɪz"
 },
 {
   "id": 11955,
   "word": "BOUT",
   "pronunciations": "ˈbaʊt"
 },
 {
   "id": 11956,
   "word": "BOYD",
   "pronunciations": "ˈbɔɪd"
 },
 {
   "id": 11957,
   "word": "BOYHOOD",
   "pronunciations": "ˈbɔɪˌhʊd"
 },
 {
   "id": 11958,
   "word": "BRACED",
   "pronunciations": "ˈbreɪst"
 },
 {
   "id": 11959,
   "word": "BRADFORD",
   "pronunciations": "ˈbrædfɝd"
 },
 {
   "id": 11960,
   "word": "BRANDISHING",
   "pronunciations": "ˈbrændɪʃɪŋ"
 },
 {
   "id": 11961,
   "word": "BREATHLESS",
   "pronunciations": "ˈbrɛθləs"
 },
 {
   "id": 11962,
   "word": "BREVARD",
   "pronunciations": "ˈbrɛvɝd"
 },
 {
   "id": 11963,
   "word": "BRIAN",
   "pronunciations": "ˈbraɪən"
 },
 {
   "id": 11964,
   "word": "BRIDE'S",
   "pronunciations": "ˈbraɪdz"
 },
 {
   "id": 11965,
   "word": "BRISKLY",
   "pronunciations": "ˈbrɪskli"
 },
 {
   "id": 11966,
   "word": "BROTHER-IN-LAW",
   "pronunciations": "ˈbrʌðɝɪnˌlɔ"
 },
 {
   "id": 11967,
   "word": "BROWS",
   "pronunciations": "ˈbraʊz"
 },
 {
   "id": 11968,
   "word": "BUCKLE",
   "pronunciations": "ˈbʌkəl"
 },
 {
   "id": 11969,
   "word": "BUDD",
   "pronunciations": "ˈbʌd"
 },
 {
   "id": 11970,
   "word": "BUDDIES",
   "pronunciations": "ˈbʌdiːz"
 },
 {
   "id": 11971,
   "word": "BUDGETS",
   "pronunciations": "ˈbʌdʒɪts"
 },
 {
   "id": 11972,
   "word": "BUDS",
   "pronunciations": "ˈbʌdz"
 },
 {
   "id": 11973,
   "word": "BUFF",
   "pronunciations": "ˈbʌf"
 },
 {
   "id": 11974,
   "word": "BULGE",
   "pronunciations": "ˈbʌldʒ"
 },
 {
   "id": 11975,
   "word": "BULWARK",
   "pronunciations": "ˈbʊlwɝk"
 },
 {
   "id": 11976,
   "word": "BUMP",
   "pronunciations": "ˈbʌmp"
 },
 {
   "id": 11977,
   "word": "BUNCHED",
   "pronunciations": "ˈbʌntʃt"
 },
 {
   "id": 11978,
   "word": "BUTCHERY",
   "pronunciations": "ˈbʊtʃɝi"
 },
 {
   "id": 11979,
   "word": "BUTTS",
   "pronunciations": "ˈbʌts"
 },
 {
   "id": 11980,
   "word": "BUYERS",
   "pronunciations": "ˈbaɪɝz"
 },
 {
   "id": 11981,
   "word": "BYZANTINE",
   "pronunciations": "ˈbɪzənˌtaɪn, ˈbɪzənˌtiːn"
 },
 {
   "id": 11982,
   "word": "CABINETS",
   "pronunciations": "ˈkæbənəts, ˈkæbnəts"
 },
 {
   "id": 11983,
   "word": "CAFES",
   "pronunciations": "ˌkæˈfeɪz"
 },
 {
   "id": 11984,
   "word": "CAIRO",
   "pronunciations": "ˈkaɪroʊ"
 },
 {
   "id": 11985,
   "word": "CANDLES",
   "pronunciations": "ˈkændəlz"
 },
 {
   "id": 11986,
   "word": "CANON",
   "pronunciations": "ˈkænən"
 },
 {
   "id": 11987,
   "word": "CANS",
   "pronunciations": "ˈkænz"
 },
 {
   "id": 11988,
   "word": "CAPACITIES",
   "pronunciations": "kəˈpæsətiːz, kəˈpæsɪtiːz"
 },
 {
   "id": 11989,
   "word": "CAPSULE",
   "pronunciations": "ˈkæpsəl"
 },
 {
   "id": 11990,
   "word": "CAPTIVE",
   "pronunciations": "ˈkæptɪv"
 },
 {
   "id": 11991,
   "word": "CARDBOARD",
   "pronunciations": "ˈkɑːrdˌbɔrd"
 },
 {
   "id": 11992,
   "word": "CARESSES",
   "pronunciations": "kɝˈɛsɪz"
 },
 {
   "id": 11993,
   "word": "CARESSING",
   "pronunciations": "kɝˈɛsɪŋ"
 },
 {
   "id": 11994,
   "word": "CAREY",
   "pronunciations": "ˈkɛri"
 },
 {
   "id": 11995,
   "word": "CARRUTHERS",
   "pronunciations": "kɝˈʌðɝz"
 },
 {
   "id": 11996,
   "word": "CART",
   "pronunciations": "ˈkɑːrt"
 },
 {
   "id": 11997,
   "word": "CARTRIDGES",
   "pronunciations": "ˈkɑːrtrədʒəz"
 },
 {
   "id": 11998,
   "word": "CARTS",
   "pronunciations": "ˈkɑːrts"
 },
 {
   "id": 11999,
   "word": "CARVEY",
   "pronunciations": "ˈkɑːrvi"
 },
 {
   "id": 12000,
   "word": "CASTRO'S",
   "pronunciations": "ˈkæstroʊz"
 },
 {
   "id": 12001,
   "word": "CATASTROPHES",
   "pronunciations": "kəˈtæstrəfiːz"
 },
 {
   "id": 12002,
   "word": "CATASTROPHIC",
   "pronunciations": "ˌkætəˈstrɑːfɪk"
 },
 {
   "id": 12003,
   "word": "CATHARSIS",
   "pronunciations": "kəˈθɑːrsəs"
 },
 {
   "id": 12004,
   "word": "CATKINS",
   "pronunciations": "ˈkætkənz"
 },
 {
   "id": 12005,
   "word": "CATSKILL",
   "pronunciations": "ˈkætˌskɪl"
 },
 {
   "id": 12006,
   "word": "CELEBRATING",
   "pronunciations": "ˈsɛləˌbreɪtɪŋ"
 },
 {
   "id": 12007,
   "word": "CENSORSHIP",
   "pronunciations": "ˈsɛnsɝˌʃɪp"
 },
 {
   "id": 12008,
   "word": "CENTERING",
   "pronunciations": "ˈsɛntɝɪŋ"
 },
 {
   "id": 12009,
   "word": "CERTIFY",
   "pronunciations": "ˈsɝːtəˌfaɪ"
 },
 {
   "id": 12010,
   "word": "CEYLON",
   "pronunciations": "sɪˈlɑːn, siːˈlɑːn"
 },
 {
   "id": 12011,
   "word": "CHANGEABLE",
   "pronunciations": "ˈtʃeɪndʒəbəl"
 },
 {
   "id": 12012,
   "word": "CHANNING",
   "pronunciations": "ˈtʃænɪŋ"
 },
 {
   "id": 12013,
   "word": "CHAOTIC",
   "pronunciations": "keɪˈɑːtɪk"
 },
 {
   "id": 12014,
   "word": "CHAPLAIN",
   "pronunciations": "ˈtʃæplən"
 },
 {
   "id": 12015,
   "word": "CHARITABLE",
   "pronunciations": "ˈtʃærətəbəl, ˈtʃɛrətəbəl"
 },
 {
   "id": 12016,
   "word": "CHAT",
   "pronunciations": "ˈtʃæt"
 },
 {
   "id": 12017,
   "word": "CHECKBOOK",
   "pronunciations": "ˈtʃɛkˌbʊk"
 },
 {
   "id": 12018,
   "word": "CHECKING",
   "pronunciations": "ˈtʃɛkɪŋ"
 },
 {
   "id": 12019,
   "word": "CHEEKBONES",
   "pronunciations": "ˈtʃiːkˌboʊnz"
 },
 {
   "id": 12020,
   "word": "CHEERFULLY",
   "pronunciations": "ˈtʃɪrfəli, ˈtʃɪrfli"
 },
 {
   "id": 12021,
   "word": "CHEMICALLY",
   "pronunciations": "ˈkɛmɪkli"
 },
 {
   "id": 12022,
   "word": "CHERISH",
   "pronunciations": "ˈtʃɛrɪʃ"
 },
 {
   "id": 12023,
   "word": "CHESTNUT",
   "pronunciations": "ˈtʃɛˌsnət, ˈtʃɛstˌnət"
 },
 {
   "id": 12024,
   "word": "CHILLING",
   "pronunciations": "ˈtʃɪlɪŋ"
 },
 {
   "id": 12025,
   "word": "CHILLY",
   "pronunciations": "ˈtʃɪli"
 },
 {
   "id": 12026,
   "word": "CHING",
   "pronunciations": "ˈtʃɪŋ"
 },
 {
   "id": 12027,
   "word": "CHLORIDE",
   "pronunciations": "ˈklɔraɪd"
 },
 {
   "id": 12028,
   "word": "CHOPPING",
   "pronunciations": "ˈtʃɑːpɪŋ"
 },
 {
   "id": 12029,
   "word": "CHOREOGRAPHED",
   "pronunciations": "ˈkɔriːəˌgræft"
 },
 {
   "id": 12030,
   "word": "CHOREOGRAPHER",
   "pronunciations": "ˌkɔriːˈɑːgrəfɝ"
 },
 {
   "id": 12031,
   "word": "CHRISTOPHER",
   "pronunciations": "ˈkrɪstəfɝ"
 },
 {
   "id": 12032,
   "word": "CHRONICLE",
   "pronunciations": "ˈkrɑːnɪkəl"
 },
 {
   "id": 12033,
   "word": "CHRONOLOGY",
   "pronunciations": "krəˈnɑːlədʒi"
 },
 {
   "id": 12034,
   "word": "CHUCKLE",
   "pronunciations": "ˈtʃʌkəl"
 },
 {
   "id": 12035,
   "word": "CHUNKS",
   "pronunciations": "ˈtʃʌŋks"
 },
 {
   "id": 12036,
   "word": "CICERO",
   "pronunciations": "ˈsɪsɝˌoʊ"
 },
 {
   "id": 12037,
   "word": "CIRCULATING",
   "pronunciations": "ˈsɝːkjəˌleɪtɪŋ"
 },
 {
   "id": 12038,
   "word": "CITATION",
   "pronunciations": "saɪˈteɪʃən"
 },
 {
   "id": 12039,
   "word": "CLAIMANTS",
   "pronunciations": "ˈkleɪmənts"
 },
 {
   "id": 12040,
   "word": "CLARIFICATION",
   "pronunciations": "ˌklɛrəfəˈkeɪʃən"
 },
 {
   "id": 12041,
   "word": "CLASH",
   "pronunciations": "ˈklæʃ"
 },
 {
   "id": 12042,
   "word": "CLASSROOMS",
   "pronunciations": "ˈklæsˌruːmz"
 },
 {
   "id": 12043,
   "word": "CLENCHED",
   "pronunciations": "ˈklɛntʃt"
 },
 {
   "id": 12044,
   "word": "CLERK'S",
   "pronunciations": "ˈklɝːks"
 },
 {
   "id": 12045,
   "word": "CLICHES",
   "pronunciations": "kliːˈʃeɪz"
 },
 {
   "id": 12046,
   "word": "CLIFFORD",
   "pronunciations": "ˈklɪfɝd"
 },
 {
   "id": 12047,
   "word": "CLOTHED",
   "pronunciations": "ˈkloʊðd"
 },
 {
   "id": 12048,
   "word": "CLUBHOUSE",
   "pronunciations": "ˈklʌbˌhaʊs"
 },
 {
   "id": 12049,
   "word": "CLUSTERS",
   "pronunciations": "ˈklʌstɝz"
 },
 {
   "id": 12050,
   "word": "CLUTCH",
   "pronunciations": "ˈklʌtʃ"
 },
 {
   "id": 12051,
   "word": "CO",
   "pronunciations": "ˈkoʊ"
 },
 {
   "id": 12052,
   "word": "COACHES",
   "pronunciations": "ˈkoʊtʃɪz"
 },
 {
   "id": 12053,
   "word": "COCK",
   "pronunciations": "ˈkɑːk"
 },
 {
   "id": 12054,
   "word": "COE",
   "pronunciations": "ˈkoʊ"
 },
 {
   "id": 12055,
   "word": "COHERENT",
   "pronunciations": "koʊˈhɪrənt"
 },
 {
   "id": 12056,
   "word": "COINCIDES",
   "pronunciations": "ˌkoʊɪnˈsaɪdz"
 },
 {
   "id": 12057,
   "word": "COLDER",
   "pronunciations": "ˈkoʊldɝ"
 },
 {
   "id": 12058,
   "word": "COLLECTS",
   "pronunciations": "kəˈlɛkts"
 },
 {
   "id": 12059,
   "word": "COLUMNIST",
   "pronunciations": "ˈkɑːləmnəst"
 },
 {
   "id": 12060,
   "word": "COMEDIAN",
   "pronunciations": "kəˈmiːdiːən"
 },
 {
   "id": 12061,
   "word": "COMFORTS",
   "pronunciations": "ˈkʌmfɝts"
 },
 {
   "id": 12062,
   "word": "COMMENDABLE",
   "pronunciations": "kəˈmɛndəbəl"
 },
 {
   "id": 12063,
   "word": "COMMENTING",
   "pronunciations": "ˈkɑːmɛntɪŋ"
 },
 {
   "id": 12064,
   "word": "COMMITTING",
   "pronunciations": "kəˈmɪtɪŋ"
 },
 {
   "id": 12065,
   "word": "COMMUNES",
   "pronunciations": "ˈkɑːmjuːnz, kəˈmjuːnz"
 },
 {
   "id": 12066,
   "word": "COMMUTING",
   "pronunciations": "kəˈmjuːtɪŋ"
 },
 {
   "id": 12067,
   "word": "COMPASSION",
   "pronunciations": "kəmˈpæʃən"
 },
 {
   "id": 12068,
   "word": "COMPETENTLY",
   "pronunciations": "ˈkɑːmpətɪntli"
 },
 {
   "id": 12069,
   "word": "COMPLAINING",
   "pronunciations": "kəmˈpleɪnɪŋ"
 },
 {
   "id": 12070,
   "word": "COMPLETES",
   "pronunciations": "kəmˈpliːts"
 },
 {
   "id": 12071,
   "word": "COMPLICATIONS",
   "pronunciations": "ˌkɑːmpləˈkeɪʃənz"
 },
 {
   "id": 12072,
   "word": "COMPLY",
   "pronunciations": "kəmˈplaɪ"
 },
 {
   "id": 12073,
   "word": "COMPREHEND",
   "pronunciations": "ˌkɑːmpriːˈhɛnd"
 },
 {
   "id": 12074,
   "word": "COMPUTERS",
   "pronunciations": "kəmˈpjuːtɝz"
 },
 {
   "id": 12075,
   "word": "CONCERTOS",
   "pronunciations": "kənˈtʃɛrtoʊz"
 },
 {
   "id": 12076,
   "word": "CONCHITA",
   "pronunciations": "kənˈtʃiːtə"
 },
 {
   "id": 12077,
   "word": "CONDITIONERS",
   "pronunciations": "kənˈdɪʃənɝz"
 },
 {
   "id": 12078,
   "word": "CONDUCTIVITY",
   "pronunciations": "ˌkɑːnˌdəkˈtɪvəti"
 },
 {
   "id": 12079,
   "word": "CONFERRED",
   "pronunciations": "kənˈfɝːd"
 },
 {
   "id": 12080,
   "word": "CONFORMS",
   "pronunciations": "kənˈfɔrmz"
 },
 {
   "id": 12081,
   "word": "CONFRONTS",
   "pronunciations": "kənˈfrʌnts"
 },
 {
   "id": 12082,
   "word": "CONFUSE",
   "pronunciations": "kənˈfjuːz"
 },
 {
   "id": 12083,
   "word": "CONJUGATED",
   "pronunciations": "ˌkɑːndʒəˈgeɪtɪd, ˈkɑːndʒəˌgeɪtɪd"
 },
 {
   "id": 12084,
   "word": "CONNOTATION",
   "pronunciations": "ˌkɑːnəˈteɪʃən"
 },
 {
   "id": 12085,
   "word": "CONSTABLE",
   "pronunciations": "ˈkɑːnstəbəl"
 },
 {
   "id": 12086,
   "word": "CONSTANCY",
   "pronunciations": "ˈkɑːnstənsi"
 },
 {
   "id": 12087,
   "word": "CONSTITUENT",
   "pronunciations": "kənˈstɪtʃuːənt"
 },
 {
   "id": 12088,
   "word": "CONSUMING",
   "pronunciations": "kənˈsuːmɪŋ"
 },
 {
   "id": 12089,
   "word": "CONTEMPLATED",
   "pronunciations": "ˈkɑːntəmˌpleɪtɪd"
 },
 {
   "id": 12090,
   "word": "CONTENDS",
   "pronunciations": "kənˈtɛndz"
 },
 {
   "id": 12091,
   "word": "CONTESTANTS",
   "pronunciations": "kənˈtɛstənts"
 },
 {
   "id": 12092,
   "word": "CONTINGENCIES",
   "pronunciations": "kənˈtɪndʒənsiːz"
 },
 {
   "id": 12093,
   "word": "CONTINUAL",
   "pronunciations": "kənˈtɪnjuːəl"
 },
 {
   "id": 12094,
   "word": "CONTRADICTIONS",
   "pronunciations": "ˌkɑːntrəˈdɪkʃənz"
 },
 {
   "id": 12095,
   "word": "CONVERSE",
   "pronunciations": "ˈkɑːnvɝs, kənˈvɝːs"
 },
 {
   "id": 12096,
   "word": "CONVERTS",
   "pronunciations": "ˈkɑːnvɝts, kənˈvɝːts"
 },
 {
   "id": 12097,
   "word": "COOLLY",
   "pronunciations": "ˈkuːli"
 },
 {
   "id": 12098,
   "word": "COOLNESS",
   "pronunciations": "ˈkuːlnəs"
 },
 {
   "id": 12099,
   "word": "COORDINATOR",
   "pronunciations": "koʊˈɔrdəˌneɪtɝ"
 },
 {
   "id": 12100,
   "word": "CORAL",
   "pronunciations": "ˈkɔrəl"
 },
 {
   "id": 12101,
   "word": "CORINTHIAN",
   "pronunciations": "kɝˈɪnθiːən"
 },
 {
   "id": 12102,
   "word": "CORNELL",
   "pronunciations": "kɔrˈnɛl"
 },
 {
   "id": 12103,
   "word": "CORONER",
   "pronunciations": "ˈkɔrənɝ"
 },
 {
   "id": 12104,
   "word": "CORPORATION'S",
   "pronunciations": "ˌkɔrpɝˈeɪʃənz"
 },
 {
   "id": 12105,
   "word": "CORPSES",
   "pronunciations": "ˈkɔrpsəz, ˈkɔrpsɪz"
 },
 {
   "id": 12106,
   "word": "CORRAL",
   "pronunciations": "kɝˈæl"
 },
 {
   "id": 12107,
   "word": "CORRECTION",
   "pronunciations": "kɝˈɛkʃən"
 },
 {
   "id": 12108,
   "word": "CORRESPONDENTS",
   "pronunciations": "ˌkɔrəˈspɑːndənts"
 },
 {
   "id": 12109,
   "word": "CORRUPTIBLE",
   "pronunciations": "kɝˈʌptɪbəl"
 },
 {
   "id": 12110,
   "word": "COUNCILMAN",
   "pronunciations": "ˈkaʊnsəlmən"
 },
 {
   "id": 12111,
   "word": "COUNTERPOINT",
   "pronunciations": "ˈkaʊntɝˌpɔɪnt"
 },
 {
   "id": 12112,
   "word": "COUPLER",
   "pronunciations": "ˈkʌplɝ"
 },
 {
   "id": 12113,
   "word": "COURTIER",
   "pronunciations": "ˈkɔrtiːɝ"
 },
 {
   "id": 12114,
   "word": "COX",
   "pronunciations": "ˈkɑːks"
 },
 {
   "id": 12115,
   "word": "CRAFTSMANSHIP",
   "pronunciations": "ˈkræftsmənˌʃɪp, ˈkræfsmənˌʃɪp"
 },
 {
   "id": 12116,
   "word": "CRANE",
   "pronunciations": "ˈkreɪn"
 },
 {
   "id": 12117,
   "word": "CRATERS",
   "pronunciations": "ˈkreɪtɝz"
 },
 {
   "id": 12118,
   "word": "CREAKING",
   "pronunciations": "ˈkriːkɪŋ"
 },
 {
   "id": 12119,
   "word": "CRIB",
   "pronunciations": "ˈkrɪb"
 },
 {
   "id": 12120,
   "word": "CRITICALITY",
   "pronunciations": "ˌkrɪtəˈkæləti"
 },
 {
   "id": 12121,
   "word": "CRITICALLY",
   "pronunciations": "ˈkrɪtɪkəli, ˈkrɪtɪkli"
 },
 {
   "id": 12122,
   "word": "CROPPED",
   "pronunciations": "ˈkrɑːpt"
 },
 {
   "id": 12123,
   "word": "CROSBY",
   "pronunciations": "ˈkrɔzbi"
 },
 {
   "id": 12124,
   "word": "CROWDING",
   "pronunciations": "ˈkraʊdɪŋ"
 },
 {
   "id": 12125,
   "word": "CRYSTALLINE",
   "pronunciations": "ˈkrɪstəˌlaɪn"
 },
 {
   "id": 12126,
   "word": "CUBANS",
   "pronunciations": "ˈkjuːbənz"
 },
 {
   "id": 12127,
   "word": "CULMINATES",
   "pronunciations": "ˈkʌlmɪˌneɪts"
 },
 {
   "id": 12128,
   "word": "CULTURALLY",
   "pronunciations": "ˈkʌltʃɝəˌliː"
 },
 {
   "id": 12129,
   "word": "CUNARD",
   "pronunciations": "ˈkjuːnɝd"
 },
 {
   "id": 12130,
   "word": "CUNNING",
   "pronunciations": "ˈkʌnɪŋ"
 },
 {
   "id": 12131,
   "word": "CUNNINGHAM",
   "pronunciations": "ˈkʌnɪŋˌhæm"
 },
 {
   "id": 12132,
   "word": "CURLY",
   "pronunciations": "ˈkɝːli"
 },
 {
   "id": 12133,
   "word": "CURVATURE",
   "pronunciations": "ˈkɝːvətʃɝ"
 },
 {
   "id": 12134,
   "word": "CUSTER",
   "pronunciations": "ˈkʌstɝ"
 },
 {
   "id": 12135,
   "word": "CUTE",
   "pronunciations": "ˈkjuːt"
 },
 {
   "id": 12136,
   "word": "CZECHOSLOVAKIA",
   "pronunciations": "ˌtʃɛkəsloʊˈvɑːkiːə"
 },
 {
   "id": 12137,
   "word": "DALE",
   "pronunciations": "ˈdeɪl"
 },
 {
   "id": 12138,
   "word": "DARES",
   "pronunciations": "ˈdɛrz"
 },
 {
   "id": 12139,
   "word": "DEACON",
   "pronunciations": "ˈdiːkən"
 },
 {
   "id": 12140,
   "word": "DEBATED",
   "pronunciations": "dəˈbeɪtɪd"
 },
 {
   "id": 12141,
   "word": "DEBUTANTE",
   "pronunciations": "ˈdɛbjəˈtɑːnt"
 },
 {
   "id": 12142,
   "word": "DECEIVED",
   "pronunciations": "dɪˈsiːvd"
 },
 {
   "id": 12143,
   "word": "DECISIVELY",
   "pronunciations": "dɪˈsaɪsɪvli"
 },
 {
   "id": 12144,
   "word": "DECORATOR",
   "pronunciations": "ˈdɛkɝˌeɪtɝ"
 },
 {
   "id": 12145,
   "word": "DECREES",
   "pronunciations": "dɪˈkriːz"
 },
 {
   "id": 12146,
   "word": "DEDUCTIBLE",
   "pronunciations": "dɪˈdʌktəbəl"
 },
 {
   "id": 12147,
   "word": "DEFERENCE",
   "pronunciations": "ˈdɛfɝəns, ˈdɛfrəns"
 },
 {
   "id": 12148,
   "word": "DEFINES",
   "pronunciations": "dɪˈfaɪnz"
 },
 {
   "id": 12149,
   "word": "DEFINITIVE",
   "pronunciations": "dɪˈfɪnɪtɪv"
 },
 {
   "id": 12150,
   "word": "DEFORMATION",
   "pronunciations": "ˌdiːfɔrˈmeɪʃən"
 },
 {
   "id": 12151,
   "word": "DELHI",
   "pronunciations": "ˈdɛli"
 },
 {
   "id": 12152,
   "word": "DELICACY",
   "pronunciations": "ˈdɛləkəsi, ˈdɛlɪkəsi"
 },
 {
   "id": 12153,
   "word": "DENOTING",
   "pronunciations": "dɪˈnoʊtɪŋ"
 },
 {
   "id": 12154,
   "word": "DENOUNCE",
   "pronunciations": "dɪˈnaʊns"
 },
 {
   "id": 12155,
   "word": "DEPRESSING",
   "pronunciations": "dɪˈprɛsɪŋ"
 },
 {
   "id": 12156,
   "word": "DESERTS",
   "pronunciations": "ˈdɛzɝts, dɪˈzɝːts"
 },
 {
   "id": 12157,
   "word": "DESIGNATE",
   "pronunciations": "ˈdɛzəgˌneɪt, ˈdɛzɪgˌneɪt"
 },
 {
   "id": 12158,
   "word": "DESIRING",
   "pronunciations": "dɪˈzaɪɝɪŋ"
 },
 {
   "id": 12159,
   "word": "DESOLATION",
   "pronunciations": "ˌdɛsəˈleɪʃən"
 },
 {
   "id": 12160,
   "word": "DESPOTISM",
   "pronunciations": "ˈdɛspəˌtɪzəm"
 },
 {
   "id": 12161,
   "word": "DEVASTATING",
   "pronunciations": "ˈdɛvəˌsteɪtɪŋ"
 },
 {
   "id": 12162,
   "word": "DEVELOPER",
   "pronunciations": "dɪˈvɛləpɝ"
 },
 {
   "id": 12163,
   "word": "DEVEY",
   "pronunciations": "dɪˈveɪ"
 },
 {
   "id": 12164,
   "word": "DEVIL'S",
   "pronunciations": "ˈdɛvəlz"
 },
 {
   "id": 12165,
   "word": "DICTATED",
   "pronunciations": "dɪkˈteɪtɪd, ˈdɪkˌteɪtɪd"
 },
 {
   "id": 12166,
   "word": "DIEGO",
   "pronunciations": "diːˈeɪgoʊ"
 },
 {
   "id": 12167,
   "word": "DIETRICH",
   "pronunciations": "ˈdiːtrɪk"
 },
 {
   "id": 12168,
   "word": "DIFFERENTIATED",
   "pronunciations": "ˌdɪfɝˈɛnʃiːˌeɪtɪd, ˌdɪfɝˈɛntʃiːˌeɪtəd"
 },
 {
   "id": 12169,
   "word": "DINGY",
   "pronunciations": "ˈdɪndʒi"
 },
 {
   "id": 12170,
   "word": "DIOCESAN",
   "pronunciations": "daɪˈɑːsəsən"
 },
 {
   "id": 12171,
   "word": "DIPLOMAT",
   "pronunciations": "ˈdɪpləˌmæt"
 },
 {
   "id": 12172,
   "word": "DIPOLE",
   "pronunciations": "ˈdaɪˌpoʊl"
 },
 {
   "id": 12173,
   "word": "DIRECTS",
   "pronunciations": "dɝˈɛkts, daɪˈrɛkts, diːˈrɛkts, dɪˈrɛkts"
 },
 {
   "id": 12174,
   "word": "DISABILITY",
   "pronunciations": "ˌdɪsəˈbɪlɪti, dɪsəˈbɪlɪtiːz"
 },
 {
   "id": 12175,
   "word": "DISAPPEARING",
   "pronunciations": "ˌdɪsəˈpɪrɪŋ, ˌdɪsəˈpiːrɪŋ"
 },
 {
   "id": 12176,
   "word": "DISCIPLES",
   "pronunciations": "dɪˈsaɪpəlz"
 },
 {
   "id": 12177,
   "word": "DISCOUNTS",
   "pronunciations": "dɪˈskaʊnts, ˈdɪˌskaʊnts"
 },
 {
   "id": 12178,
   "word": "DISCOURAGING",
   "pronunciations": "dɪˈskɝːɪdʒɪŋ"
 },
 {
   "id": 12179,
   "word": "DISCREPANCIES",
   "pronunciations": "dɪˈskrɛpənsiːz"
 },
 {
   "id": 12180,
   "word": "DISFIGURED",
   "pronunciations": "dɪsˈfɪgjɝd"
 },
 {
   "id": 12181,
   "word": "DISGUISE",
   "pronunciations": "dɪsˈgaɪz"
 },
 {
   "id": 12182,
   "word": "DISINTEGRATION",
   "pronunciations": "dɪˌsɪntəˈgreɪʃən, dɪˌsɪnəˈgreɪʃən"
 },
 {
   "id": 12183,
   "word": "DISINTERESTED",
   "pronunciations": "dɪˈsɪntrɪstɪd, dɪˈsɪnrɪstɪd"
 },
 {
   "id": 12184,
   "word": "DISMAY",
   "pronunciations": "dɪˈsmeɪ"
 },
 {
   "id": 12185,
   "word": "DISMISS",
   "pronunciations": "dɪˈsmɪs"
 },
 {
   "id": 12186,
   "word": "DISORGANIZED",
   "pronunciations": "dɪˈsɔrgəˌnaɪzd"
 },
 {
   "id": 12187,
   "word": "DISPATCHED",
   "pronunciations": "dɪˈspætʃt"
 },
 {
   "id": 12188,
   "word": "DISPOSE",
   "pronunciations": "dɪˈspoʊz"
 },
 {
   "id": 12189,
   "word": "DISRUPT",
   "pronunciations": "dɪsˈrʌpt"
 },
 {
   "id": 12190,
   "word": "DISRUPTED",
   "pronunciations": "dɪsˈrʌptɪd"
 },
 {
   "id": 12191,
   "word": "DISSENT",
   "pronunciations": "dɪˈsɛnt"
 },
 {
   "id": 12192,
   "word": "DISTINGUISHES",
   "pronunciations": "dɪˈstɪŋgwɪʃɪz"
 },
 {
   "id": 12193,
   "word": "DISTRACTED",
   "pronunciations": "dɪˈstræktəd, dɪˈstræktɪd"
 },
 {
   "id": 12194,
   "word": "DIURNAL",
   "pronunciations": "daɪˈɝːnəl"
 },
 {
   "id": 12195,
   "word": "DIVED",
   "pronunciations": "ˈdaɪvd"
 },
 {
   "id": 12196,
   "word": "DIVING",
   "pronunciations": "ˈdaɪvɪŋ"
 },
 {
   "id": 12197,
   "word": "DIVISIVE",
   "pronunciations": "dɪˈvaɪsɪv"
 },
 {
   "id": 12198,
   "word": "DIZZY",
   "pronunciations": "ˈdɪzi"
 },
 {
   "id": 12199,
   "word": "DOCTRINES",
   "pronunciations": "ˈdɑːktrənz"
 },
 {
   "id": 12200,
   "word": "DODGERS",
   "pronunciations": "ˈdɑːdʒɝz"
 },
 {
   "id": 12201,
   "word": "DOLCE",
   "pronunciations": "ˈdoʊlˌtʃeɪ"
 },
 {
   "id": 12202,
   "word": "DONOR",
   "pronunciations": "ˈdoʊnɝ"
 },
 {
   "id": 12203,
   "word": "DONORS",
   "pronunciations": "ˈdoʊnɝz"
 },
 {
   "id": 12204,
   "word": "DORIS",
   "pronunciations": "ˈdɔrəs, ˈdɔrɪs, ˈdɑːrəs, ˈdɑːrɪs"
 },
 {
   "id": 12205,
   "word": "DORMANT",
   "pronunciations": "ˈdɔrmənt"
 },
 {
   "id": 12206,
   "word": "DOWNED",
   "pronunciations": "ˈdaʊnd"
 },
 {
   "id": 12207,
   "word": "DOWNFALL",
   "pronunciations": "ˈdaʊnˌfɔl"
 },
 {
   "id": 12208,
   "word": "DOWNS",
   "pronunciations": "ˈdaʊnz"
 },
 {
   "id": 12209,
   "word": "DOWNSTREAM",
   "pronunciations": "ˈdaʊnˈstriːm"
 },
 {
   "id": 12210,
   "word": "DOZED",
   "pronunciations": "ˈdoʊzd"
 },
 {
   "id": 12211,
   "word": "DRAB",
   "pronunciations": "ˈdræb"
 },
 {
   "id": 12212,
   "word": "DRAFTED",
   "pronunciations": "ˈdræftɪd"
 },
 {
   "id": 12213,
   "word": "DRAINS",
   "pronunciations": "ˈdreɪnz"
 },
 {
   "id": 12214,
   "word": "DRAWERS",
   "pronunciations": "ˈdrɔrz"
 },
 {
   "id": 12215,
   "word": "DRILLED",
   "pronunciations": "ˈdrɪld"
 },
 {
   "id": 12216,
   "word": "DRIVER'S",
   "pronunciations": "ˈdraɪvɝz"
 },
 {
   "id": 12217,
   "word": "DRIZZLE",
   "pronunciations": "ˈdrɪzəl"
 },
 {
   "id": 12218,
   "word": "DROUGHT",
   "pronunciations": "ˈdraʊt"
 },
 {
   "id": 12219,
   "word": "DRUGGED",
   "pronunciations": "ˈdrʌgd"
 },
 {
   "id": 12220,
   "word": "DRUGSTORE",
   "pronunciations": "ˈdrʌgˌstɔr"
 },
 {
   "id": 12221,
   "word": "DUCKED",
   "pronunciations": "ˈdʌkt"
 },
 {
   "id": 12222,
   "word": "DUEL",
   "pronunciations": "ˈduːəl"
 },
 {
   "id": 12223,
   "word": "DUPONT",
   "pronunciations": "ˈduːpɑːnt"
 },
 {
   "id": 12224,
   "word": "DYNAMITE",
   "pronunciations": "ˈdaɪnəˌmaɪt"
 },
 {
   "id": 12225,
   "word": "DYNASTY",
   "pronunciations": "ˈdaɪnəsti"
 },
 {
   "id": 12226,
   "word": "EAGLE",
   "pronunciations": "ˈiːgəl"
 },
 {
   "id": 12227,
   "word": "EASEL",
   "pronunciations": "ˈiːzəl"
 },
 {
   "id": 12228,
   "word": "EASTWICK",
   "pronunciations": "ˈiːsˌtwɪk"
 },
 {
   "id": 12229,
   "word": "ECONOMISTS",
   "pronunciations": "ɪˈkɑːnəmɪsts, ɪˈkɑːnəmɪs, iːˈkɑːnəmɪs"
 },
 {
   "id": 12230,
   "word": "EDGING",
   "pronunciations": "ˈɛdʒɪŋ"
 },
 {
   "id": 12231,
   "word": "EDIBLE",
   "pronunciations": "ˈɛdəbəl"
 },
 {
   "id": 12232,
   "word": "EDITING",
   "pronunciations": "ˈɛdətɪŋ, ˈɛdɪtɪŋ"
 },
 {
   "id": 12233,
   "word": "EDWARD'S",
   "pronunciations": "ˈɛdwɝdz"
 },
 {
   "id": 12234,
   "word": "EGYPTIAN",
   "pronunciations": "ɪˈdʒɪpʃən"
 },
 {
   "id": 12235,
   "word": "ELAPSED",
   "pronunciations": "ɪˈlæpst"
 },
 {
   "id": 12236,
   "word": "ELASTICITY",
   "pronunciations": "ˌiːˌlæˈstɪsəti"
 },
 {
   "id": 12237,
   "word": "ELDEST",
   "pronunciations": "ˈɛldəst"
 },
 {
   "id": 12238,
   "word": "ELECTRODE",
   "pronunciations": "ˌɪˈlɛktroʊd"
 },
 {
   "id": 12239,
   "word": "ELECTROPHORESIS",
   "pronunciations": "ˌɪˌlɛktroʊfɔˈrɪsɪs"
 },
 {
   "id": 12240,
   "word": "ELLIOTT",
   "pronunciations": "ˈɛliːət"
 },
 {
   "id": 12241,
   "word": "ELMAN",
   "pronunciations": "ˈɛlmən"
 },
 {
   "id": 12242,
   "word": "ELONGATED",
   "pronunciations": "ɪˈlɔŋgeɪtəd"
 },
 {
   "id": 12243,
   "word": "EMBARK",
   "pronunciations": "ɛmˈbɑːrk, ɪmˈbɑːrk"
 },
 {
   "id": 12244,
   "word": "EMBROIDERED",
   "pronunciations": "ɛmˈbrɔɪdɝd"
 },
 {
   "id": 12245,
   "word": "EMILE",
   "pronunciations": "eɪˈmiːl"
 },
 {
   "id": 12246,
   "word": "EMMETT",
   "pronunciations": "ˈɛmɪt"
 },
 {
   "id": 12247,
   "word": "EMPIRICALLY",
   "pronunciations": "ɛmˈpɪrɪkəli, ɛmˈpɪrɪkli"
 },
 {
   "id": 12248,
   "word": "ENCHANTED",
   "pronunciations": "ɛnˈtʃæntɪd, ɛnˈtʃænɪd"
 },
 {
   "id": 12249,
   "word": "ENCOURAGES",
   "pronunciations": "ɛnˈkɝːɪdʒɪz, ɪnˈkɝːədʒəz"
 },
 {
   "id": 12250,
   "word": "ENCROACHMENT",
   "pronunciations": "ɛnˈkroʊtʃmənt"
 },
 {
   "id": 12251,
   "word": "ENDEAVORS",
   "pronunciations": "ɪnˈdɛvɝz"
 },
 {
   "id": 12252,
   "word": "ENFORCING",
   "pronunciations": "ɛnˈfɔrsɪŋ"
 },
 {
   "id": 12253,
   "word": "ENGLANDER",
   "pronunciations": "ˈɪŋgləndɝ"
 },
 {
   "id": 12254,
   "word": "ENGULFED",
   "pronunciations": "ɪnˈgʌlft"
 },
 {
   "id": 12255,
   "word": "ENHANCE",
   "pronunciations": "ɛnˈhæns"
 },
 {
   "id": 12256,
   "word": "ENHANCED",
   "pronunciations": "ɛnˈhænst"
 },
 {
   "id": 12257,
   "word": "ENJOINED",
   "pronunciations": "ˌɛnˈdʒɔɪnd"
 },
 {
   "id": 12258,
   "word": "ENLIST",
   "pronunciations": "ˌɛnˈlɪst"
 },
 {
   "id": 12259,
   "word": "ENRICH",
   "pronunciations": "ɛnˈrɪtʃ, ɪnˈrɪtʃ"
 },
 {
   "id": 12260,
   "word": "ENROLL",
   "pronunciations": "ɛnˈroʊl, ɪnˈroʊl"
 },
 {
   "id": 12261,
   "word": "ENSUED",
   "pronunciations": "ɪnˈsuːd"
 },
 {
   "id": 12262,
   "word": "ENTAIL",
   "pronunciations": "ɛnˈteɪl"
 },
 {
   "id": 12263,
   "word": "ENTERPRISING",
   "pronunciations": "ˈɛntɝˌpraɪzɪŋ, ˈɛnɝˌpraɪzɪŋ"
 },
 {
   "id": 12264,
   "word": "ENTHUSIASTICALLY",
   "pronunciations": "ɪnˌθuːziːˈæstɪkli"
 },
 {
   "id": 12265,
   "word": "ENTITLE",
   "pronunciations": "ɛnˈtaɪtəl, ɪnˈtaɪtəl"
 },
 {
   "id": 12266,
   "word": "ENTRENCHED",
   "pronunciations": "ɛnˈtrɛntʃt, ɪnˈtrɛntʃt"
 },
 {
   "id": 12267,
   "word": "ENVIED",
   "pronunciations": "ˈɛnviːd"
 },
 {
   "id": 12268,
   "word": "EQUATED",
   "pronunciations": "ɪˈkweɪtɪd"
 },
 {
   "id": 12269,
   "word": "ERECTION",
   "pronunciations": "ɪˈrɛkʃən"
 },
 {
   "id": 12270,
   "word": "ERNST",
   "pronunciations": "ˈɝːnst"
 },
 {
   "id": 12271,
   "word": "ESCAPING",
   "pronunciations": "ɪˈskeɪpɪŋ"
 },
 {
   "id": 12272,
   "word": "ESCORTED",
   "pronunciations": "ɛˈskɔrtɪd"
 },
 {
   "id": 12273,
   "word": "ESPIONAGE",
   "pronunciations": "ˈɛspiːənɑːdʒ"
 },
 {
   "id": 12274,
   "word": "ESTATES",
   "pronunciations": "ɛˈsteɪts"
 },
 {
   "id": 12275,
   "word": "ESTEEM",
   "pronunciations": "ɛˈstiːm"
 },
 {
   "id": 12276,
   "word": "EUROPEANS",
   "pronunciations": "ˌjʊrəˈpiːənz"
 },
 {
   "id": 12277,
   "word": "EVACUATION",
   "pronunciations": "ɪˌvækjəˈweɪʃən, iːˈvækjəˈweɪʃən"
 },
 {
   "id": 12278,
   "word": "EVALUATIONS",
   "pronunciations": "ɪˌvæljuːˈeɪʃənz, iːˌvæljuːˈeɪʃənz"
 },
 {
   "id": 12279,
   "word": "EVANGELICAL",
   "pronunciations": "ˌiːvænˈdʒɛlɪkəl"
 },
 {
   "id": 12280,
   "word": "EVASIVE",
   "pronunciations": "ɪˈveɪzɪv, iːˈveɪzɪv"
 },
 {
   "id": 12281,
   "word": "EVIDENCES",
   "pronunciations": "ˈɛvədənsəz"
 },
 {
   "id": 12282,
   "word": "EVOKES",
   "pronunciations": "ɪˈvoʊks, iːˈvoʊks"
 },
 {
   "id": 12283,
   "word": "EVOLVE",
   "pronunciations": "ɪˈvɑːlv, iːˈvɑːlv"
 },
 {
   "id": 12284,
   "word": "EXAGGERATION",
   "pronunciations": "ɪgˌzædʒɝˈeɪʃən"
 },
 {
   "id": 12285,
   "word": "EXASPERATION",
   "pronunciations": "ˌɛkˌsæspɝˈeɪʃən"
 },
 {
   "id": 12286,
   "word": "EXCEEDED",
   "pronunciations": "ɪkˈsiːdəd, ɪkˈsiːdɪd"
 },
 {
   "id": 12287,
   "word": "EXCELLENTLY",
   "pronunciations": "ˈɛksələntli"
 },
 {
   "id": 12288,
   "word": "EXCERPTS",
   "pronunciations": "ˈɛksɝpts, ɛkˈsɝːpts"
 },
 {
   "id": 12289,
   "word": "EXCHANGES",
   "pronunciations": "ɪksˈtʃeɪndʒəz, ɪksˈtʃeɪndʒɪz"
 },
 {
   "id": 12290,
   "word": "EXCHEQUER",
   "pronunciations": "ˈɛksˌtʃɛkɝ"
 },
 {
   "id": 12291,
   "word": "EXEMPT",
   "pronunciations": "ɪgˈzɛmpt"
 },
 {
   "id": 12292,
   "word": "EXISTENT",
   "pronunciations": "ɛgˈzɪstənt"
 },
 {
   "id": 12293,
   "word": "EXPANSE",
   "pronunciations": "ɪkˈspæns"
 },
 {
   "id": 12294,
   "word": "EXPELLED",
   "pronunciations": "ɪkˈspɛld"
 },
 {
   "id": 12295,
   "word": "EXPERIMENTER",
   "pronunciations": "ɪkˈspɛrəˌmɛntɝ"
 },
 {
   "id": 12296,
   "word": "EXPIRED",
   "pronunciations": "ɪkˈspaɪrd"
 },
 {
   "id": 12297,
   "word": "EXPLOITATION",
   "pronunciations": "ˌɛkˌsplɔɪˈteɪʃən"
 },
 {
   "id": 12298,
   "word": "EXPLORING",
   "pronunciations": "ɪkˈsplɔrɪŋ"
 },
 {
   "id": 12299,
   "word": "EXTANT",
   "pronunciations": "ˈɛkstənt"
 },
 {
   "id": 12300,
   "word": "EXTRACTION",
   "pronunciations": "ɛkˈstrækʃən"
 },
 {
   "id": 12301,
   "word": "EXTRAVAGANT",
   "pronunciations": "ɛkˈstrævəgənt"
 },
 {
   "id": 12302,
   "word": "FABER",
   "pronunciations": "ˈfeɪbɝ"
 },
 {
   "id": 12303,
   "word": "FACILITATE",
   "pronunciations": "fəˈsɪləˌteɪt"
 },
 {
   "id": 12304,
   "word": "FACTION",
   "pronunciations": "ˈfækʃən"
 },
 {
   "id": 12305,
   "word": "FACULTIES",
   "pronunciations": "ˈfækəltiːz"
 },
 {
   "id": 12306,
   "word": "FADING",
   "pronunciations": "ˈfeɪdɪŋ"
 },
 {
   "id": 12307,
   "word": "FAIRWAY",
   "pronunciations": "ˈfɛrˌweɪ"
 },
 {
   "id": 12308,
   "word": "FAITHFULLY",
   "pronunciations": "ˈfeɪθfəli"
 },
 {
   "id": 12309,
   "word": "FAMED",
   "pronunciations": "ˈfeɪmd"
 },
 {
   "id": 12310,
   "word": "FANNING",
   "pronunciations": "ˈfænɪŋ"
 },
 {
   "id": 12311,
   "word": "FAROUK",
   "pronunciations": "fəˈruːk"
 },
 {
   "id": 12312,
   "word": "FASHIONS",
   "pronunciations": "ˈfæʃənz"
 },
 {
   "id": 12313,
   "word": "FAVRE",
   "pronunciations": "ˈfeɪvɝ"
 },
 {
   "id": 12314,
   "word": "FEARING",
   "pronunciations": "ˈfɪrɪŋ"
 },
 {
   "id": 12315,
   "word": "FERTILE",
   "pronunciations": "ˈfɝːtəl, fɝˈtaɪl"
 },
 {
   "id": 12316,
   "word": "FERVENT",
   "pronunciations": "ˈfɝːvənt"
 },
 {
   "id": 12317,
   "word": "FIBERGLAS",
   "pronunciations": "ˈfaɪbɝˌglæs"
 },
 {
   "id": 12318,
   "word": "FIBROUS",
   "pronunciations": "ˈfaɪbrəs"
 },
 {
   "id": 12319,
   "word": "FIGURATIVE",
   "pronunciations": "ˈfɪgjɝətɪv"
 },
 {
   "id": 12320,
   "word": "FILLS",
   "pronunciations": "ˈfɪlz"
 },
 {
   "id": 12321,
   "word": "FINS",
   "pronunciations": "ˈfɪnz"
 },
 {
   "id": 12322,
   "word": "FIREMEN",
   "pronunciations": "ˈfaɪrmən"
 },
 {
   "id": 12323,
   "word": "FIREWORKS",
   "pronunciations": "ˈfaɪrˌwɝːks"
 },
 {
   "id": 12324,
   "word": "FISHER",
   "pronunciations": "ˈfɪʃɝ"
 },
 {
   "id": 12325,
   "word": "FISHERMAN",
   "pronunciations": "ˈfɪʃɝˌmæn, ˈfɪʃɝmən"
 },
 {
   "id": 12326,
   "word": "FISKE",
   "pronunciations": "ˈfɪsk"
 },
 {
   "id": 12327,
   "word": "FISSION",
   "pronunciations": "ˈfɪʃən"
 },
 {
   "id": 12328,
   "word": "FLAGS",
   "pronunciations": "ˈflægz"
 },
 {
   "id": 12329,
   "word": "FLANKED",
   "pronunciations": "ˈflæŋkt"
 },
 {
   "id": 12330,
   "word": "FLARED",
   "pronunciations": "ˈflɛrd"
 },
 {
   "id": 12331,
   "word": "FLASK",
   "pronunciations": "ˈflæsk"
 },
 {
   "id": 12332,
   "word": "FLEMISH",
   "pronunciations": "ˈflɛmɪʃ"
 },
 {
   "id": 12333,
   "word": "FLORENCE",
   "pronunciations": "ˈflɔrəns"
 },
 {
   "id": 12334,
   "word": "FLOURISH",
   "pronunciations": "ˈflɝːɪʃ"
 },
 {
   "id": 12335,
   "word": "FLOWS",
   "pronunciations": "ˈfloʊz"
 },
 {
   "id": 12336,
   "word": "FLUENT",
   "pronunciations": "ˈfluːənt"
 },
 {
   "id": 12337,
   "word": "FOGGY",
   "pronunciations": "ˈfɑːgi"
 },
 {
   "id": 12338,
   "word": "FOOLS",
   "pronunciations": "ˈfuːlz"
 },
 {
   "id": 12339,
   "word": "FORBIDS",
   "pronunciations": "fɝˈbɪdz, fɔˈbɪdz"
 },
 {
   "id": 12340,
   "word": "FORECASTS",
   "pronunciations": "fɔrˈkæsts, ˈfɔrˌkæsts, fɔrˈkæs, ˈfɔrˌkæs"
 },
 {
   "id": 12341,
   "word": "FORESIGHT",
   "pronunciations": "ˈfɔrˌsaɪt"
 },
 {
   "id": 12342,
   "word": "FORESTALL",
   "pronunciations": "fɔrˈstɔl"
 },
 {
   "id": 12343,
   "word": "FORMOSA",
   "pronunciations": "fɔrˈmoʊsə"
 },
 {
   "id": 12344,
   "word": "FRAGMENTATION",
   "pronunciations": "ˌfrægmənˈteɪʃən"
 },
 {
   "id": 12345,
   "word": "FRAN",
   "pronunciations": "ˈfræn"
 },
 {
   "id": 12346,
   "word": "FRANCHISE",
   "pronunciations": "ˈfrænˌtʃaɪz"
 },
 {
   "id": 12347,
   "word": "FRAUDS",
   "pronunciations": "ˈfrɔdz"
 },
 {
   "id": 12348,
   "word": "FREER",
   "pronunciations": "ˈfriːɝ"
 },
 {
   "id": 12349,
   "word": "FREEWAY",
   "pronunciations": "ˈfriːˌweɪ"
 },
 {
   "id": 12350,
   "word": "FREEWAYS",
   "pronunciations": "ˈfriːˌweɪz"
 },
 {
   "id": 12351,
   "word": "FRIGID",
   "pronunciations": "ˈfrɪdʒəd"
 },
 {
   "id": 12352,
   "word": "FRONTIERS",
   "pronunciations": "frənˈtɪrz"
 },
 {
   "id": 12353,
   "word": "FROZE",
   "pronunciations": "ˈfroʊz"
 },
 {
   "id": 12354,
   "word": "FRUITLESS",
   "pronunciations": "ˈfruːtləs"
 },
 {
   "id": 12355,
   "word": "FULLEST",
   "pronunciations": "ˈfʊləst"
 },
 {
   "id": 12356,
   "word": "FUMBLED",
   "pronunciations": "ˈfʌmbəld"
 },
 {
   "id": 12357,
   "word": "FUMES",
   "pronunciations": "ˈfjuːmz"
 },
 {
   "id": 12358,
   "word": "FUNDAMENTALS",
   "pronunciations": "ˌfəndəˈmɛntəlz, ˌfəndəˈmɛnəlz"
 },
 {
   "id": 12359,
   "word": "FURNISHES",
   "pronunciations": "ˈfɝːnɪʃɪz"
 },
 {
   "id": 12360,
   "word": "FURROW",
   "pronunciations": "ˈfɝːoʊ"
 },
 {
   "id": 12361,
   "word": "FURS",
   "pronunciations": "ˈfɝːz"
 },
 {
   "id": 12362,
   "word": "FUSE",
   "pronunciations": "ˈfjuːz"
 },
 {
   "id": 12363,
   "word": "GABRIEL'S",
   "pronunciations": "ˈgeɪbriːəlz"
 },
 {
   "id": 12364,
   "word": "GAILY",
   "pronunciations": "ˈgeɪli"
 },
 {
   "id": 12365,
   "word": "GAL",
   "pronunciations": "ˈgæl"
 },
 {
   "id": 12366,
   "word": "GALLANT",
   "pronunciations": "ˈgælənt"
 },
 {
   "id": 12367,
   "word": "GAMBLERS",
   "pronunciations": "ˈgæmblɝz"
 },
 {
   "id": 12368,
   "word": "GAMMA",
   "pronunciations": "ˈgæmə"
 },
 {
   "id": 12369,
   "word": "GANTRY",
   "pronunciations": "ˈgæntri"
 },
 {
   "id": 12370,
   "word": "GARAGES",
   "pronunciations": "gɝˈɑːʒɪz"
 },
 {
   "id": 12371,
   "word": "GARRISON",
   "pronunciations": "ˈgærɪsən"
 },
 {
   "id": 12372,
   "word": "GARY",
   "pronunciations": "ˈgɛri, ˈgæri"
 },
 {
   "id": 12373,
   "word": "GASPED",
   "pronunciations": "ˈgæspt"
 },
 {
   "id": 12374,
   "word": "GASPING",
   "pronunciations": "ˈgæspɪŋ"
 },
 {
   "id": 12375,
   "word": "GASPS",
   "pronunciations": "ˈgæsps"
 },
 {
   "id": 12376,
   "word": "GEHRIG",
   "pronunciations": "ˈgɛrɪg"
 },
 {
   "id": 12377,
   "word": "GENERALIZE",
   "pronunciations": "ˈdʒɛnɝəˌlaɪz"
 },
 {
   "id": 12378,
   "word": "GENERATES",
   "pronunciations": "ˈdʒɛnɝˌeɪts"
 },
 {
   "id": 12379,
   "word": "GENETIC",
   "pronunciations": "dʒəˈnɛtɪk"
 },
 {
   "id": 12380,
   "word": "GENIAL",
   "pronunciations": "ˈdʒiːnjəl"
 },
 {
   "id": 12381,
   "word": "GEOGRAPHY",
   "pronunciations": "dʒiːˈɑːgrəfi"
 },
 {
   "id": 12382,
   "word": "GEOLOGY",
   "pronunciations": "dʒiːˈɑːlədʒi"
 },
 {
   "id": 12383,
   "word": "GERTRUDE",
   "pronunciations": "ˈgɝːtruːd"
 },
 {
   "id": 12384,
   "word": "GHETTOS",
   "pronunciations": "ˈgɛtoʊz"
 },
 {
   "id": 12385,
   "word": "GHOSTS",
   "pronunciations": "ˈgoʊsts"
 },
 {
   "id": 12386,
   "word": "GINNING",
   "pronunciations": "ˈdʒɪnɪŋ"
 },
 {
   "id": 12387,
   "word": "GIRLISH",
   "pronunciations": "ˈgɝːlɪʃ"
 },
 {
   "id": 12388,
   "word": "GIVIN'",
   "pronunciations": "ˈgɪvɪn"
 },
 {
   "id": 12389,
   "word": "GLAMOROUS",
   "pronunciations": "ˈglæmɝəs"
 },
 {
   "id": 12390,
   "word": "GLAMOUR",
   "pronunciations": "ˈglæmɝ"
 },
 {
   "id": 12391,
   "word": "GLANCES",
   "pronunciations": "ˈglænsɪz"
 },
 {
   "id": 12392,
   "word": "GLARED",
   "pronunciations": "ˈglɛrd"
 },
 {
   "id": 12393,
   "word": "GLAZED",
   "pronunciations": "ˈgleɪzd"
 },
 {
   "id": 12394,
   "word": "GLIMPSED",
   "pronunciations": "ˈglɪmpst"
 },
 {
   "id": 12395,
   "word": "GLINTING",
   "pronunciations": "ˈglɪntɪŋ"
 },
 {
   "id": 12396,
   "word": "GLITTER",
   "pronunciations": "ˈglɪtɝ"
 },
 {
   "id": 12397,
   "word": "GODOT",
   "pronunciations": "gəˈdoʊ"
 },
 {
   "id": 12398,
   "word": "GOTTA",
   "pronunciations": "ˈgɑːtə"
 },
 {
   "id": 12399,
   "word": "GRABBING",
   "pronunciations": "ˈgræbɪŋ"
 },
 {
   "id": 12400,
   "word": "GRABSKI",
   "pronunciations": "ˈgræbˌskiː"
 },
 {
   "id": 12401,
   "word": "GRADIENTS",
   "pronunciations": "ˈgreɪdiːənts"
 },
 {
   "id": 12402,
   "word": "GRADY",
   "pronunciations": "ˈgreɪdi"
 },
 {
   "id": 12403,
   "word": "GRAFTON",
   "pronunciations": "ˈgræftən"
 },
 {
   "id": 12404,
   "word": "GRANDSON",
   "pronunciations": "ˈgrændˌsən"
 },
 {
   "id": 12405,
   "word": "GRAPHITE",
   "pronunciations": "ˈgræˌfaɪt"
 },
 {
   "id": 12406,
   "word": "GREEDY",
   "pronunciations": "ˈgriːdi"
 },
 {
   "id": 12407,
   "word": "GREEKS",
   "pronunciations": "ˈgriːks"
 },
 {
   "id": 12408,
   "word": "GREENS",
   "pronunciations": "ˈgriːnz"
 },
 {
   "id": 12409,
   "word": "GREETING",
   "pronunciations": "ˈgriːtɪŋ"
 },
 {
   "id": 12410,
   "word": "GROOM",
   "pronunciations": "ˈgruːm"
 },
 {
   "id": 12411,
   "word": "GROPING",
   "pronunciations": "ˈgroʊpɪŋ"
 },
 {
   "id": 12412,
   "word": "GROUPED",
   "pronunciations": "ˈgruːpt"
 },
 {
   "id": 12413,
   "word": "GUARDED",
   "pronunciations": "ˈgɑːrdəd, ˈgɑːrdɪd"
 },
 {
   "id": 12414,
   "word": "GULLY",
   "pronunciations": "ˈgʌli"
 },
 {
   "id": 12415,
   "word": "GUSHED",
   "pronunciations": "ˈgʌʃt"
 },
 {
   "id": 12416,
   "word": "GYROS",
   "pronunciations": "ˈdʒaɪˌroʊz"
 },
 {
   "id": 12417,
   "word": "HABITUAL",
   "pronunciations": "həˈbɪtʃuːəl"
 },
 {
   "id": 12418,
   "word": "HAIRY",
   "pronunciations": "ˈhɛri"
 },
 {
   "id": 12419,
   "word": "HAMMOCK",
   "pronunciations": "ˈhæmək"
 },
 {
   "id": 12420,
   "word": "HAMPER",
   "pronunciations": "ˈhæmpɝ"
 },
 {
   "id": 12421,
   "word": "HANDWRITING",
   "pronunciations": "ˈhænˌdraɪtɪŋ"
 },
 {
   "id": 12422,
   "word": "HAPPENINGS",
   "pronunciations": "ˈhæpənɪŋz, ˈhæpnɪŋz"
 },
 {
   "id": 12423,
   "word": "HARDSHIPS",
   "pronunciations": "ˈhɑːrdʃɪps"
 },
 {
   "id": 12424,
   "word": "HARMLESS",
   "pronunciations": "ˈhɑːrmləs"
 },
 {
   "id": 12425,
   "word": "HARMONIOUS",
   "pronunciations": "hɑːrˈmoʊniːəs"
 },
 {
   "id": 12426,
   "word": "HARPER'S",
   "pronunciations": "ˈhɑːrpɝz"
 },
 {
   "id": 12427,
   "word": "HARSHLY",
   "pronunciations": "ˈhɑːrʃli"
 },
 {
   "id": 12428,
   "word": "HARTMAN",
   "pronunciations": "ˈhɑːrtmən"
 },
 {
   "id": 12429,
   "word": "HARTSFIELD",
   "pronunciations": "ˈhɑːrtsˌfiːld"
 },
 {
   "id": 12430,
   "word": "HASTY",
   "pronunciations": "ˈheɪsti"
 },
 {
   "id": 12431,
   "word": "HATCH",
   "pronunciations": "ˈhætʃ"
 },
 {
   "id": 12432,
   "word": "HAUL",
   "pronunciations": "ˈhɔl"
 },
 {
   "id": 12433,
   "word": "HAYES",
   "pronunciations": "ˈheɪz"
 },
 {
   "id": 12434,
   "word": "HAZARDOUS",
   "pronunciations": "ˈhæzɝdəs"
 },
 {
   "id": 12435,
   "word": "HAZY",
   "pronunciations": "ˈheɪzi"
 },
 {
   "id": 12436,
   "word": "HEADACHE",
   "pronunciations": "ˈhɛˌdeɪk"
 },
 {
   "id": 12437,
   "word": "HELPLESSNESS",
   "pronunciations": "ˈhɛlpləsnəs"
 },
 {
   "id": 12438,
   "word": "HEMORRHAGE",
   "pronunciations": "ˈhɛmɝɪdʒ, ˈhɛmrədʒ"
 },
 {
   "id": 12439,
   "word": "HERFORD",
   "pronunciations": "ˈhɝːfɝd"
 },
 {
   "id": 12440,
   "word": "HEROINE",
   "pronunciations": "ˈhɛroʊən"
 },
 {
   "id": 12441,
   "word": "HETTIE",
   "pronunciations": "ˈhɛti"
 },
 {
   "id": 12442,
   "word": "HEYWOOD",
   "pronunciations": "ˈheɪˌwʊd"
 },
 {
   "id": 12443,
   "word": "HIBACHI",
   "pronunciations": "hiːˈbɑːˌtʃiː"
 },
 {
   "id": 12444,
   "word": "HIDES",
   "pronunciations": "ˈhaɪdz"
 },
 {
   "id": 12445,
   "word": "HIGH-SCHOOL",
   "pronunciations": "ˈhaɪˌskuːl"
 },
 {
   "id": 12446,
   "word": "HIGH-SPEED",
   "pronunciations": "ˈhaɪˌspiːd"
 },
 {
   "id": 12447,
   "word": "HIPPODROME",
   "pronunciations": "ˈhɪpəˌdroʊm"
 },
 {
   "id": 12448,
   "word": "HITCH",
   "pronunciations": "ˈhɪtʃ"
 },
 {
   "id": 12449,
   "word": "HOARSE",
   "pronunciations": "ˈhɔrs"
 },
 {
   "id": 12450,
   "word": "HOLDERS",
   "pronunciations": "ˈhoʊldɝz"
 },
 {
   "id": 12451,
   "word": "HOLOCAUST",
   "pronunciations": "ˈhɔləˌkɔst"
 },
 {
   "id": 12452,
   "word": "HOMELAND",
   "pronunciations": "ˈhoʊmˌlænd"
 },
 {
   "id": 12453,
   "word": "HOMOGENEITY",
   "pronunciations": "ˌhɑːmədʒəˈniːəti"
 },
 {
   "id": 12454,
   "word": "HOMOZYGOUS",
   "pronunciations": "ˌhoʊmoʊˈzaɪgəs"
 },
 {
   "id": 12455,
   "word": "HOOK",
   "pronunciations": "ˈhʊk"
 },
 {
   "id": 12456,
   "word": "HOPPED",
   "pronunciations": "ˈhɑːpt"
 },
 {
   "id": 12457,
   "word": "HORACE",
   "pronunciations": "ˈhɔrəs, ˈhɔrɪs"
 },
 {
   "id": 12458,
   "word": "HORSE'S",
   "pronunciations": "ˈhɔrsəz"
 },
 {
   "id": 12459,
   "word": "HORSEPOWER",
   "pronunciations": "ˈhɔrˌspaʊɝ"
 },
 {
   "id": 12460,
   "word": "HOSS",
   "pronunciations": "ˈhɑːs"
 },
 {
   "id": 12461,
   "word": "HOST'S",
   "pronunciations": "ˈhoʊsts"
 },
 {
   "id": 12462,
   "word": "HOSTILITIES",
   "pronunciations": "hɑːˈstɪlətiːz"
 },
 {
   "id": 12463,
   "word": "HOSTS",
   "pronunciations": "ˈhoʊsts"
 },
 {
   "id": 12464,
   "word": "HOUSEWIVES",
   "pronunciations": "ˈhaʊˌswaɪvz"
 },
 {
   "id": 12465,
   "word": "HUH",
   "pronunciations": "ˈhʌ"
 },
 {
   "id": 12466,
   "word": "HUM",
   "pronunciations": "ˈhʌm"
 },
 {
   "id": 12467,
   "word": "HUMANE",
   "pronunciations": "hjuːˈmeɪn"
 },
 {
   "id": 12468,
   "word": "HUMANISM",
   "pronunciations": "ˈhjuːməˌnɪzəm"
 },
 {
   "id": 12469,
   "word": "HUMILITY",
   "pronunciations": "hjuːˈmɪlɪti"
 },
 {
   "id": 12470,
   "word": "HUNTLEY",
   "pronunciations": "ˈhʌntli"
 },
 {
   "id": 12471,
   "word": "HURLING",
   "pronunciations": "ˈhɝːlɪŋ"
 },
 {
   "id": 12472,
   "word": "HURTLING",
   "pronunciations": "ˈhɝːtlɪŋ"
 },
 {
   "id": 12473,
   "word": "HYDROLYSIS",
   "pronunciations": "haɪˈdrɑːləsəs"
 },
 {
   "id": 12474,
   "word": "IDENTIFIABLE",
   "pronunciations": "aɪˈdɛntəˌfaɪəbəl"
 },
 {
   "id": 12475,
   "word": "IGNITION",
   "pronunciations": "ˌɪgˈnɪʃən"
 },
 {
   "id": 12476,
   "word": "IGNORES",
   "pronunciations": "ˌɪgˈnɔrz"
 },
 {
   "id": 12477,
   "word": "ILLUMINATING",
   "pronunciations": "ˌɪˈluːməˌneɪtɪŋ"
 },
 {
   "id": 12478,
   "word": "IMITATE",
   "pronunciations": "ˈɪməˌteɪt"
 },
 {
   "id": 12479,
   "word": "IMMACULATE",
   "pronunciations": "ˌɪˈmækjuːlɪt"
 },
 {
   "id": 12480,
   "word": "IMMORAL",
   "pronunciations": "ˌɪˈmɔrəl"
 },
 {
   "id": 12481,
   "word": "IMPEDED",
   "pronunciations": "ˌɪmˈpiːdɪd"
 },
 {
   "id": 12482,
   "word": "IMPINGING",
   "pronunciations": "ˌɪmˈpɪndʒɪŋ"
 },
 {
   "id": 12483,
   "word": "IMPLEMENTS",
   "pronunciations": "ˈɪmpləmənts"
 },
 {
   "id": 12484,
   "word": "IMPOSITION",
   "pronunciations": "ˌɪmpəˈzɪʃən"
 },
 {
   "id": 12485,
   "word": "IMPRACTICAL",
   "pronunciations": "ˌɪmˈpræktəkəl, ˌɪmˈpræktɪkəl"
 },
 {
   "id": 12486,
   "word": "IMPUTED",
   "pronunciations": "ˌɪmˈpjuːtɪd"
 },
 {
   "id": 12487,
   "word": "INACCURATE",
   "pronunciations": "ˌɪˈnækjɝət"
 },
 {
   "id": 12488,
   "word": "INCARNATION",
   "pronunciations": "ˌɪnˈkɑːrˈneɪʃən"
 },
 {
   "id": 12489,
   "word": "INCIDENTAL",
   "pronunciations": "ˌɪnsɪˈdɛntəl"
 },
 {
   "id": 12490,
   "word": "INCOMING",
   "pronunciations": "ˈɪnˌkəmɪŋ"
 },
 {
   "id": 12491,
   "word": "INCONSISTENT",
   "pronunciations": "ˌɪnkənˈsɪstənt"
 },
 {
   "id": 12492,
   "word": "INCORRECT",
   "pronunciations": "ˌɪnkɝˈɛkt"
 },
 {
   "id": 12493,
   "word": "INCUR",
   "pronunciations": "ˌɪnˈkɝː"
 },
 {
   "id": 12494,
   "word": "INDECISION",
   "pronunciations": "ˌɪndɪˈsɪʒən"
 },
 {
   "id": 12495,
   "word": "INDELIBLE",
   "pronunciations": "ˌɪnˈdɛlɪbəl"
 },
 {
   "id": 12496,
   "word": "INDIAN'S",
   "pronunciations": "ˈɪndiːənz"
 },
 {
   "id": 12497,
   "word": "INDIVIDUALIZED",
   "pronunciations": "ˌɪndɪˈvɪdʒuːəlaɪzd, ˌɪndɪˈvɪdʒəlaɪzd"
 },
 {
   "id": 12498,
   "word": "INDOORS",
   "pronunciations": "ˈɪnˌdɔrz"
 },
 {
   "id": 12499,
   "word": "INDULGED",
   "pronunciations": "ˌɪnˈdʌldʒd"
 },
 {
   "id": 12500,
   "word": "INDULGENCE",
   "pronunciations": "ˌɪnˈdʌldʒəns"
 },
 {
   "id": 12501,
   "word": "INERT",
   "pronunciations": "ˌɪˈnɝːt"
 },
 {
   "id": 12502,
   "word": "INFECTIONS",
   "pronunciations": "ˌɪnˈfɛkʃənz"
 },
 {
   "id": 12503,
   "word": "INFERIORITY",
   "pronunciations": "ˌɪnfɪriːˈɔrɪˌtiː"
 },
 {
   "id": 12504,
   "word": "INFLATION",
   "pronunciations": "ˌɪnˈfleɪʃən"
 },
 {
   "id": 12505,
   "word": "INFORMALLY",
   "pronunciations": "ˌɪnˈfɔrməli"
 },
 {
   "id": 12506,
   "word": "INGENUITY",
   "pronunciations": "ˌɪndʒəˈnuːəˌtiː"
 },
 {
   "id": 12507,
   "word": "INHIBITED",
   "pronunciations": "ˌɪnˈhɪbətɪd"
 },
 {
   "id": 12508,
   "word": "INITIATE",
   "pronunciations": "ˌɪˈnɪʃiːˌeɪt"
 },
 {
   "id": 12509,
   "word": "INJECTING",
   "pronunciations": "ˌɪnˈdʒɛktɪŋ"
 },
 {
   "id": 12510,
   "word": "INJUNCTIONS",
   "pronunciations": "ˌɪnˈdʒʌŋkʃənz, ˌɪnˈdʒʌŋʃənz"
 },
 {
   "id": 12511,
   "word": "INQUEST",
   "pronunciations": "ˈɪnˌkwɛst"
 },
 {
   "id": 12512,
   "word": "INQUIRING",
   "pronunciations": "ˌɪnˈkwaɪɝɪŋ"
 },
 {
   "id": 12513,
   "word": "INSCRUTABLE",
   "pronunciations": "ˌɪnˈskruːtəbəl"
 },
 {
   "id": 12514,
   "word": "INSECURITY",
   "pronunciations": "ˌɪnsɪˈkjʊrɪti"
 },
 {
   "id": 12515,
   "word": "INSIGNIFICANT",
   "pronunciations": "ˌɪnsɪgnˈjɪfɪkənt"
 },
 {
   "id": 12516,
   "word": "INSTALLING",
   "pronunciations": "ˌɪnˈstɔlɪŋ"
 },
 {
   "id": 12517,
   "word": "INSTALLMENT",
   "pronunciations": "ˌɪnˈstɔlmənt"
 },
 {
   "id": 12518,
   "word": "INSTANTANEOUS",
   "pronunciations": "ˌɪnstənˈtæniːəs"
 },
 {
   "id": 12519,
   "word": "INTELLECT",
   "pronunciations": "ˈɪntəˌlɛkt, ˈɪnəˌlɛkt"
 },
 {
   "id": 12520,
   "word": "INTELLECTUALLY",
   "pronunciations": "ˌɪntəˈlɛktʃuːəli, ˌɪntəˈlɛktʃuːli, ˌɪnəˈlɛktʃuːəli, ˌɪnəˈlɛktʃuːli"
 },
 {
   "id": 12521,
   "word": "INTENSITIES",
   "pronunciations": "ˌɪnˈtɛnsɪtiːz"
 },
 {
   "id": 12522,
   "word": "INTENTIONAL",
   "pronunciations": "ˌɪnˈtɛnʃənəl"
 },
 {
   "id": 12523,
   "word": "INTERCONTINENTAL",
   "pronunciations": "ˌɪntɝˌkɑːntəˈnɛntəl"
 },
 {
   "id": 12524,
   "word": "INTERFACES",
   "pronunciations": "ˈɪntɝˌfeɪsɪz, ˈɪnɝˌfeɪsɪz"
 },
 {
   "id": 12525,
   "word": "INTERFERED",
   "pronunciations": "ˌɪntɝˈfɪrd, ˌɪnɝˈfɪrd"
 },
 {
   "id": 12526,
   "word": "INTERLUDE",
   "pronunciations": "ˈɪntɝˌluːd"
 },
 {
   "id": 12527,
   "word": "INTERMEDIATES",
   "pronunciations": "ˌɪntɝˈmiːdiːəts, ˌɪntɝˈmiːdiːeɪts, ˌɪnɝˈmiːdiːəts, ˌɪnɝˈmiːdiːeɪts"
 },
 {
   "id": 12528,
   "word": "INTERRELATED",
   "pronunciations": "ˌɪntɝrɪˈleɪtɪd"
 },
 {
   "id": 12529,
   "word": "INTERSTELLAR",
   "pronunciations": "ˌɪntɝˈstɛlɝ"
 },
 {
   "id": 12530,
   "word": "INTIMATED",
   "pronunciations": "ˈɪntɪˌmeɪtɪd"
 },
 {
   "id": 12531,
   "word": "INTIMIDATION",
   "pronunciations": "ˌɪnˌtɪmɪˈdeɪʃən"
 },
 {
   "id": 12532,
   "word": "INTRINSIC",
   "pronunciations": "ˌɪnˈtrɪnsɪk"
 },
 {
   "id": 12533,
   "word": "INVADE",
   "pronunciations": "ˌɪnˈveɪd"
 },
 {
   "id": 12534,
   "word": "INVADERS",
   "pronunciations": "ˌɪnˈveɪdɝz"
 },
 {
   "id": 12535,
   "word": "INVALUABLE",
   "pronunciations": "ˌɪnˈvæljəbəl"
 },
 {
   "id": 12536,
   "word": "INVERSE",
   "pronunciations": "ˌɪnˈvɝːs"
 },
 {
   "id": 12537,
   "word": "INVERSELY",
   "pronunciations": "ˌɪnˈvɝːsli"
 },
 {
   "id": 12538,
   "word": "IRONING",
   "pronunciations": "ˈaɪɝnɪŋ, ˈaɪrnɪŋ"
 },
 {
   "id": 12539,
   "word": "IRRADIATED",
   "pronunciations": "ˌɪˈreɪdiːˌeɪtɪd"
 },
 {
   "id": 12540,
   "word": "IRREGULARLY",
   "pronunciations": "ˌɪˈrɛgjəlɝli"
 },
 {
   "id": 12541,
   "word": "IRRITABLE",
   "pronunciations": "ˈɪrətəbəl"
 },
 {
   "id": 12542,
   "word": "IRRITATED",
   "pronunciations": "ˈɪrəˌteɪtəd"
 },
 {
   "id": 12543,
   "word": "ISLE",
   "pronunciations": "ˈaɪl"
 },
 {
   "id": 12544,
   "word": "ISOLATING",
   "pronunciations": "ˈaɪsəˌleɪtɪŋ"
 },
 {
   "id": 12545,
   "word": "ISTANBUL",
   "pronunciations": "ˌɪstɑːnˈbuːl"
 },
 {
   "id": 12546,
   "word": "ITCH",
   "pronunciations": "ˈɪtʃ"
 },
 {
   "id": 12547,
   "word": "JACOBY",
   "pronunciations": "dʒəˈkoʊbi"
 },
 {
   "id": 12548,
   "word": "JAGGED",
   "pronunciations": "ˈdʒægd"
 },
 {
   "id": 12549,
   "word": "JAGUAR",
   "pronunciations": "ˈdʒæˌgwɑːr"
 },
 {
   "id": 12550,
   "word": "JASON",
   "pronunciations": "ˈdʒeɪsən"
 },
 {
   "id": 12551,
   "word": "JEFFERSON'S",
   "pronunciations": "ˈdʒɛfɝsənz"
 },
 {
   "id": 12552,
   "word": "JEROME",
   "pronunciations": "dʒɝˈoʊm"
 },
 {
   "id": 12553,
   "word": "JOCKEY",
   "pronunciations": "ˈdʒɑːki"
 },
 {
   "id": 12554,
   "word": "JOE'S",
   "pronunciations": "ˈdʒoʊz"
 },
 {
   "id": 12555,
   "word": "JOKING",
   "pronunciations": "ˈdʒoʊkɪŋ"
 },
 {
   "id": 12556,
   "word": "JONATHAN",
   "pronunciations": "ˈdʒɑːnəθən"
 },
 {
   "id": 12557,
   "word": "JOURNALS",
   "pronunciations": "ˈdʒɝːnəlz"
 },
 {
   "id": 12558,
   "word": "JOYOUS",
   "pronunciations": "ˈdʒɔɪəs"
 },
 {
   "id": 12559,
   "word": "JUSTIFIABLY",
   "pronunciations": "ˈdʒʌstəˌfaɪəbli"
 },
 {
   "id": 12560,
   "word": "JUSTLY",
   "pronunciations": "ˈdʒʌstli"
 },
 {
   "id": 12561,
   "word": "KAFKA",
   "pronunciations": "ˈkɑːfkə"
 },
 {
   "id": 12562,
   "word": "KAPPA",
   "pronunciations": "ˈkæpə"
 },
 {
   "id": 12563,
   "word": "KEMBLE",
   "pronunciations": "ˈkɛmbəl"
 },
 {
   "id": 12564,
   "word": "KERR",
   "pronunciations": "ˈkɝː"
 },
 {
   "id": 12565,
   "word": "KIDNEYS",
   "pronunciations": "ˈkɪdniːz"
 },
 {
   "id": 12566,
   "word": "KINDA",
   "pronunciations": "ˈkɪndə"
 },
 {
   "id": 12567,
   "word": "KINDNESS",
   "pronunciations": "ˈkaɪndnəs"
 },
 {
   "id": 12568,
   "word": "KINGSTON",
   "pronunciations": "ˈkɪŋstən"
 },
 {
   "id": 12569,
   "word": "KITCHENS",
   "pronunciations": "ˈkɪtʃənz"
 },
 {
   "id": 12570,
   "word": "KITTEN",
   "pronunciations": "ˈkɪtən"
 },
 {
   "id": 12571,
   "word": "KITTENS",
   "pronunciations": "ˈkɪtənz"
 },
 {
   "id": 12572,
   "word": "KNEEL",
   "pronunciations": "ˈniːl"
 },
 {
   "id": 12573,
   "word": "KNEELING",
   "pronunciations": "ˈniːlɪŋ"
 },
 {
   "id": 12574,
   "word": "KNOCKING",
   "pronunciations": "ˈnɑːkɪŋ"
 },
 {
   "id": 12575,
   "word": "KNOX",
   "pronunciations": "ˈnɑːks"
 },
 {
   "id": 12576,
   "word": "KOREANS",
   "pronunciations": "ˌkɔˈriːənz"
 },
 {
   "id": 12577,
   "word": "KRUGER",
   "pronunciations": "ˈkruːgɝ"
 },
 {
   "id": 12578,
   "word": "LABORED",
   "pronunciations": "ˈleɪbɝd"
 },
 {
   "id": 12579,
   "word": "LADY'S",
   "pronunciations": "ˈleɪdiːz"
 },
 {
   "id": 12580,
   "word": "LANDSCAPES",
   "pronunciations": "ˈlændˌskeɪps, ˈlænˌskeɪps"
 },
 {
   "id": 12581,
   "word": "LARSON",
   "pronunciations": "ˈlɑːrsən"
 },
 {
   "id": 12582,
   "word": "LAS",
   "pronunciations": "ˈlɑːs, ˈɛˈleɪˈɛs"
 },
 {
   "id": 12583,
   "word": "LATCH",
   "pronunciations": "ˈlætʃ"
 },
 {
   "id": 12584,
   "word": "LATITUDE",
   "pronunciations": "ˈlætəˌtuːd"
 },
 {
 },
 {
}