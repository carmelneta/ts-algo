

function strStr(haystack: string, needle: string): number {
    let count = 0
    let needleStartChar = needle.charAt(0)
    for (let i = 0; i < haystack.length && i + needle.length <= haystack.length; i++) {
        count++
        if (haystack.charAt(i) === needleStartChar ) {
            let j = 0
            for (; j < needle.length; j++) {
                if (haystack.charAt(i + j) !== needle.charAt(j)) {
                    break
                }
            }

            if (j === needle.length) {
                return i
            }
        }
    }

    console.log(count)
    return -1
};


console.log(strStr('leetcode', 'leeto'))
// console.log(strStr('leetcode', 'leet'))