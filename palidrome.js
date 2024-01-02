/* PROBLEM
Given a string s, return the longest 
palindromic substring in s.
*/

/* SOLUTION */
function longestPalindrome(s) {
    if (!s || s.length < 1) {
        return "";
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i); // For odd-length palindromes
        const len2 = expandAroundCenter(s, i, i + 1); // For even-length palindromes
        const maxLength = Math.max(len1, len2);

        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}


