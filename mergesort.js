let arry = [5, 2, 1 , 3, 6, 4]


function mergeSort(arr){
    if (arr.length <= 1) {
        return arr
    }

    //divide the array into two halves
    const middle = Math.floor(arr.length / 2)
    const leftHalf = arr.slice(0, middle)
    const rightHalf = arr.slice(middle)

    // Recursively sort each half
    const sortedLeftHalf = mergeSort(leftHalf)
    const sortedRightHalf = mergeSort(rightHalf)

    return merge(sortedLeftHalf, sortedRightHalf)
}

function merge(left, right){
    const merged = []
    let leftIndex = 0
    let rightIndex = 0

    // Merge the element from left and right array in sorted order
    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex])
            leftIndex++
        } else{
            merged.push(right[rightIndex])
            rightIndex++
        }
    }

    // Adding any remaining element from left or right array
    while(leftIndex < left.length){
        merged.push(left[leftIndex])
        leftIndex++
    }
    while(rightIndex < right.length){
        merged.push(right[rightIndex])
        rightIndex++
    }

    return merged
}

console.log(mergeSort(arry));