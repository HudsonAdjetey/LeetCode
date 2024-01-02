/* 
##PROBLEM##
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/* SOLUTION */
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the smaller array
    }

    const totalLength = nums1.length + nums2.length;
    const halfLength = Math.floor((totalLength + 1) / 2); // Length needed for finding median

    let left = 0,
        right = nums1.length;

    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = halfLength - partitionX;

        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === nums1.length ? Infinity : nums1[partitionX];

        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === nums2.length ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            const maxLeft = Math.max(maxX, maxY);
            if (totalLength % 2 === 1) {
                return maxLeft;
            }

            const minRight = Math.min(minX, minY);
            return (maxLeft + minRight) / 2;
        } else if (maxX > minY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
        
    }
    return 0; // Return 0 if arrays are empty
}


