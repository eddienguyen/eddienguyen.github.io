export default class StringExtra {
  /**
   *
   * @param {string} item
   * @return {boolean}
   */
  static isEmpty(item) {
    return item === null || item.match(/^ *$/) !== null;
  }
  /**
   *
   * @param {string} text
   * @param {string} str1
   * @param {string} str2
   */
  static getBetween(text, str1, str2 = "") {
    if (text.indexOf(str1) <= -1) return "";

    const firstIndex = text.indexOf(str1) + str1.length;
    const secondIndex = str2 ? text.indexOf(str2, firstIndex) : text.length;
    return text.substring(firstIndex, secondIndex);
  }

  /**
   *
   * @param {string} item
   * @return {string}
   */
  static replaceAt(item, index, replacement) {
    return (
      item.substr(0, index) +
      replacement +
      item.substr(index + replacement.length)
    );
  }

  static replaceAll(str, old, _new) {
    return str.replace(`/${old}/g`, _new);
  }

  static makeString(object) {
    /// Ensure some object is a coerced to a string
    if (object === null) return "";
    return "" + object;
  }

  static uppercase(str) {
    return StringExtra.makeString(str).toUpperCase();
  }

  static titleize(str) {
    const regString = new RegExp(/(?:^|\s|-)\S/g);
    return StringExtra.makeString(str)
      .toLowerCase()
      .replace(regString, function (c) {
        return c.toUpperCase();
      });
  }

  static capitalize(str, lowercaseRest = 1) {
    str = StringExtra.makeString(str);
    let remainingChars = !lowercaseRest
      ? str.slice(1)
      : str.slice(1).toLowerCase();

    return str.charAt(0).toUpperCase() + remainingChars;
  }

  static capitalizeName(str) {
    str = StringExtra.makeString(str);

    str = str.trim();
    str = str.replace(/^\s+|\s+$/gm, "");

    str = str.toLowerCase();

    const arr = str.split(" ");

    str = arr
      .map((item) => {
        return this.capitalize(item);
      })
      .filter((x) => x)
      .join(" ");

    return str;
  }

  /**
   * format number above 99 into 99+
   * @param {Number} num
   * @returns {String} number (with plus sign)
   */
  static hFormatter(num) {
    return Math.abs(num) > 99
      ? Math.sign(num) * 99 + "+"
      : Math.sign(num) * Math.abs(num);
  }

  static makeSpecificDigitNumber(value = 0, numberOfDigits = 2) {
    return value.toLocaleString("en-US", {
      minimumIntegerDigits: numberOfDigits,
      useGrouping: false,
    });
  }
}
