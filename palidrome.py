def longest_palindrome(s):
    if not s or len(s) < 1:
        return ""

    start = 0
    end = 0

    for i in range(len(s)):
        len1 = expand_around_center(s, i, i)  # For odd-length palindromes
        len2 = expand_around_center(s, i, i + 1)  # For even-length palindromes
        max_length = max(len1, len2)

        if max_length > end - start:
            start = i - (max_length - 1) // 2
            end = i + max_length // 2

    return s[start:end + 1]


def expand_around_center(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return right - left - 1


# Example usage:
input_string = "babad"
longest_pal_substring = longest_palindrome(input_string)
print("Longest palindromic substring:", longest_pal_substring)  # Output: "bab" or "aba"
