class Formatter {
  static capitalize(string1) {
    return string1.charAt(0).toUpperCase() + string1.slice(1);
  }
  static sanitize(string2) {
    return string2.replace(/[^A-Za-z0-9-' ']/g, "");
  }

  static titleize(sentence) {
    let sentenceArray = sentence.split(" ");
    let uppercasedWordStorage = [];
    const doNotcapitalize = [
      "and",
      "for",
      "at",
      "by",
      "from",
      "the",
      "a",
      "an",
      "but",
      "of",
    ];
    for (let i = 0; i < sentenceArray.length; i++) {
      if (i === 0) {
        uppercasedWordStorage.push(this.capitalize(sentenceArray[i]));
      } else {
        if (doNotcapitalize.includes(sentenceArray[i])) {
          uppercasedWordStorage.push(sentenceArray[i]);
        } else {
          uppercasedWordStorage.push(this.capitalize(sentenceArray[i]));
        }
      }
    }
    return uppercasedWordStorage.join(" ");
  }
}
