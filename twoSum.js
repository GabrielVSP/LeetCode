/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {

    for(let i = 0; i < nums.length; i++) {29011998

        for(let c = 0; c < nums.length; c++) {

            if(i != c) {

                if(nums[i] + nums[c] == target) {

                    return [i, c]
        
                }

            }

        }

    }

};