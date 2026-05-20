/**
 * Given two strings, return a new string that interleaves their characters one at a time. 
 * If one string is longer, append the remaining characters at the end.
*/
function zipStrings(a, b) {
  const result = [];
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < a.length) {
      result.push(a[i]);
    }

    if (i < b.length) {
      result.push(b[i]);
    }
  }

  return result.join('');
}