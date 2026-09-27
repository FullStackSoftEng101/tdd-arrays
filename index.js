/**
 * @param {T[]} array - an array of elements of type T
 * @returns {T} the first element of the array
 *
 * @example
 * getFirst([1,2,3])' //1
 * @example
 * getFirst(["a","b","c"]) //"a"
 * @example
 * getFirst([true,false,true]) //true
 *
 */

function getFirst(array) {
  //   let result = array;

  //   console.debug(array);
  return array[0];
}
// console.debug(getFirst([1, 2, 3])); //1
// console.debug(getFirst(["a", "b", "c"])); //"a"
// console.debug(getFirst([true, false, true])); //true
// console.debug(getFirst([])); //Undefined
// console.debug(getFirst([42])); //42

/**
 * @param {T[]} array - an arry of elements of type T
 * @returns {T} the last element of the array
 *
 * @example
 * getLast([1,2,3]); //3
 * @example
 * getLast(["a","b","c"]); //"c"
 * @example
 * getLast(true,false,true); //true
 *
 *
 */

function getLast(array) {
  return array[array.length - 1];
  //return array.at[-1];
}
// console.debug(getLast([1, 2, 3])); //3
// console.debug(getLast(["a", "b", "c"])); //"c"
// console.debug(getLast([true, false, true])); //true
// console.debug(getLast([])); //Undefined
// console.debug(getLast([42])); //42

/**
 * @param {T[]} array -an array of elements of type T
 * @returns {T[]} an array containing the first and last elements of the given array
 * @returns {T[]} an empty array if the input is emply
 * @returns {T[]} the same array if the input only contains one element
 *
 * @example
 * getFirstLst([1,2,3]) //[1,3];
 * @example
 * getFirstLast([]); // []
 * @example
 * getFirstLast([[42]]) //42
 *
 */
function getFirstLast(array) {
  //   console.debug(array);
  if (array.length < 2) return array;
  //   let first = array[0];
  //   let last = array[array.length - 1];
  //   return [first, last];
  //   return [array[0], array[array.length - 1]];
  return [getFirst(array), getLast(array)];
  //or

  return [array[0], array.at[-2]];

  const answer = [];
  answer.push(getFirst(array));
  answer.push(getLast(array));

  answer[0] = getfirst(array);
}
// console.debug(getFirstLast([1, 2, 3])); //[1,3]
// console.debug(getFirstLast([])); //[]
// console.debug(getFirstLast([-5])); //[-5]
// console.debug(getFirstLast(["a", "b", "c"])); //["a","c"]
// console.debug(getFirstLast([true, false, true])); //[true,true]

/**
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @returns {boolean} whether the first letters of both strings are the same.
 * @returns {boolean} false if either string is empty
 *
 * @examples
 * sharesFirstLetter("apple","appricot"); //true
 * @example
 * sharesFirstLetter("banana", "berry"); //true
 * @example
 * sharesFirstLetter("cat","dog"); //false
 *
 */
function sharesFirstLetter(str1, str2) {
  if (str1 === "" || str2 === "") return false;
  return str1[0] === str2[0];
}
// console.debug(sharesFirstLetter("apple", "apricot")); //true
// console.debug(sharesFirstLetter("banana", "berry")); // true
// console.debug(sharesFirstLetter("cat", "dog")); //false
// console.debug(sharesFirstLetter("", "dog")); //false
// console.debug(sharesFirstLetter("cat", "")); //false
// console.debug(sharesFirstLetter("", "")); //false
// console.debug(sharesFirstLetter("a", "a")); //true
// console.debug(sharesFirstLetter("a", "b")); //false

/**
 * @param {number[]} numbers
 * @returns {number[]} a new array with each number multiplied
 *
 * @example
 * quintupe([1,2,3]); // [5,10,15]
 * @example
 * quintuple([0,4]); // [0,20]
 * @example
 * quintuple([])
 *
 *
 */
function quintuple(numbers) {
  debugger;
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result[i] = numbers[i] * 5;
    //for (const number of numbers) {
    // result.push(number);
    // result.push(number * 5);
    //console.log(number);
  }
  return result;
}
// console.debug(quintuple([1, 2, 3])); //[5,10,15]
// console.debug(quintuple([])); //[]
// console.debug(quintuple([0, 4])); //[0,20]
// console.debug(quintuple([-2, -1])); //[-10,-5]
// console.debug(quintuple([7])); //[35]

/**
 * There is a general rule for making nouns plural in English:
 * Add "s" to the end of the word, unless the word already ends with "s",
 * in which case add "es" instead.
 *
 * Hint: Look up `endsWith` on MDN!
 *
 * @param {string[]} words - an array of singular nouns
 * @returns {string[]} an array of the plural forms of those nouns
 *
 * @example
 * pluralize(["cat", "dog"]); // ["cats", "dogs"]
 * @example
 * pluralize(["bus", "glass"]); // ["buses", "glasses"]
 * @example
 * pluralize([]); // []
 */
function pluralize(words) {
  let plurals = [];
  for (const word of words) {
    if (word.endsWith("s")) {
      plurals.push(word + "es");
    } else {
      plurals.push(word + "s");
    }
  }
  return plurals;
}
// console.debug(pluralize(["cat", "dog"])); //["cats", "dogs"]
// console.debug(pluralize(["bus", "glass"])); //["buses", "glasses"]
// console.debug(pluralize([])); //[]
// console.debug(pluralize(["car"])); //["cars"]
// console.debug(pluralize(["class"])); //["classes"]
// console.debug(pluralize(["bus", "cat"])); //["buses", "cats"]

/**
 * @param {boolean[]} attendance - an array representing student attendance
 * - true = student is present
 * - false = student is absent
 * @returns {number} the number of students present
 *
 * @example
 * countAttendance([true, false, true]); // 2
 * @example
 * countAttendance([false, false]); // 0
 * @example
 * countAttendance([]); // 0
 */
function countAttendance(attendance) {
  /**
   * XXX do not use...
   * const count =0; //error does not change
   */
  let count = 0;
  for (const studentPresent of attendance) {
    if (studentPresent) {
      count += 1;
    }
  }
  //   console.debug(attendance);
  return count;
}
// console.debug(countAttendance([true, false, true])); //2
// console.debug(countAttendance([false, false])); //0
// console.debug(countAttendance([])); //0
// console.debug(countAttendance([true])); //1
// console.debug(countAttendance([false])); //0
// console.debug(countAttendance([true, true, true])); //3

/**
 * @param {string[]} sentence - an array of words
 * @returns {string} the first longest word in the sentence
 * @returns {null} null if the sentence is empty
 *
 * @example
 * getLongestWord(["sphinx", "of", "black", "quartz"]); // "sphinx"
 * @example
 * getLongestWord([]); // null
 * @example
 * getLongestWord(["a", "ab", "abc"]); // "abc"
 */
function getLongestWord(sentence) {
  if (sentence.length === 0) {
    return null;
  } else {
    let longestWord = "";
    for (const word of sentence) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    // return sentence;
    return longestWord;
  }
}
// console.debug(getLongestWord(["spinx", "of", "black", "quartz"])); //"sphinx"
// console.debug(getLongestWord([])); //Null
// console.debug(getLongestWord(["hello"])); //"hello"
// console.debug(getLongestWord(["cat", "dog", "bat"])); //"cat"
// console.debug(getLongestWord(["a", "ab", "abc"])); //"abc"
// console.debug(getLongestWord(["", "", ""])); //""

/**
 * @param {string[]} playlist - an array of song titles
 * @param {string} song - the name of a song to find
 * @returns {number} the index of the song in the playlist
 * @returns {number} -1 if the song is not found
 *
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Golden Skies"); // 1
 * @example
 * findSong(["Midnight Drive", "Golden Skies", "Neon Dreams"], "Afternoon Drink"); // -1
 * @example
 * findSong([], "Midnight Drive"); // -1
 */
function findSong(playlist, song) {
  for (let i = 0; i < playlist.length; i++)
    if (playlist[i] === song) {
      return i;
    }
  return -1;
}
// console.debug(findSong(["A", "B", "C"], "B")); //1
// console.debug(findSong(["A", "B", "C"], "D")); //-1
// console.debug(findSong([], "A")); //-1
// console.debug(findSong(["A", "B"], "A")); //0
// console.debug(findSong(["A", "B", "C", "D"], "D")); //3
// console.debug(findSong(["ABC"], "abc")); //-1

/**
 * @param {string[][]} map - a 2D array in which each element is a string that
 *  represents something in the area, such as "tree", "pigeon", "lamp", or "guard"
 * @returns {number[]} the [x,y] coordinates of the "spy"
 * @returns {null} null if the spy is not found
 *
 * @example
 * findSpy([["tree","spy"],["lamp","guard"]]); // [0,1]
 * @example
 * findSpy([["tree","lamp"],["spy","guard"]]); // [1,0]
 * @example
 * findSpy([["tree","lamp"],["pigeon","guard"]]); // null
 */
function findSpy(map) {
  // if(map.length===0) wrong
  let a = map.length;
  for (let i = 0; i < map.length; i++) {
    let b = map[i].length;
    for (let j = 0; j < map[i].length; j++)
      if (map[i][j] == "spy") return [i, j];
  }
  return null;
}
console.debug(
  findSpy([
    ["tree", "spy"],
    ["lamp", "guard"],
  ]),
); //[0, 1]
console.debug(
  findSpy([
    ["tree", "lamp"],
    ["spy", "guard"],
  ]),
); //([1, 0]
console.debug(
  findSpy([
    ["tree", "lamp"],
    ["pigeon", "guard"],
  ]),
); //toBeNull
console.debug(findSpy([])); //toBeNull
console.debug(findSpy([["spy"]])); //[0, 0]
console.debug(
  findSpy([
    ["tree", "lamp", "car", "bench"],
    ["pigeon", "guard", "lamp", "tree"],
    ["house", "spy", "tent", "bush"],
  ]),
); //[2, 1]
console.debug(findSpy([[], []])); //toBeNull
console.debug(); //
export {
  getFirst,
  getLast,
  getFirstLast,
  sharesFirstLetter,
  quintuple,
  pluralize,
  countAttendance,
  getLongestWord,
  findSong,
  findSpy,
};
