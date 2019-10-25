function swapValues(arr, x) {
    let num = arr[0]
    arr[0] = arr[1]
    arr[1] = num
    return arr
}