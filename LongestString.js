/* 
    #PROBLEM#
Given a string s, find the length of the longest 
substring
 without repeating characters.
*/
/* SOLUTION */

const lengthOfLongestSubstring = (str) => {
    // Map to store chars and their indexes
    const charIndexMap = new Map()
    let maxLength = 0    
    let start = 0

    // loop through using the trasverseMethod
    for(let end = 0; end < str.length; end++){
        const currentChar = str[end]
        if(charIndexMap.has(currentChar)){
            // update start if necessary
            start = Math.max(start, charIndexMap.get(currentChar)+1)

        }
        // update map with the current index
        charIndexMap.set(currentChar, end)
        // check if we have a longer substring than before
        maxLength = Math.max(maxLength, end-start+1)
    }
    return maxLength
} 
