/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]

var addTwoNumbers = function(l1, l2) {
    
    let sum = reverse(l1) + reverse(l2)
    let sumStr = String(reverse(String(sum)))

    let sumArray = []

    for(let i = 0; i < sumStr.length; i++) {

        sumArray.push(Number(sumStr[i]))

    }

    console.log(typeof(sumArray))

    return sumArray

};

function reverse(list) {

    let newNum = String(list[list.length - 1])

    for(let i = 0; i < list.length; i++) {

        if (i > 0) {

            newNum += String(list[(list.length - 1) - i])

        }

    }

    return Number(newNum)

}

addTwoNumbers(l1, l2)