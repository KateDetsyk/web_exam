function tune(arr) {
    let frequency = [329.63, 246.94, 196, 146.83, 110, 82.41];
    var result = [];
    console.log(arr);
    if(arr.length != 6) {return "size isn't correct."}

    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != 'number') {
            return "incorect type of element in arr."
        }
        if (arr[i] === 0) {
            result[i] = ' - ';
        } else if (arr[i] === frequency[i]) {     
            result[i] = 'OK';
        } else if ( arr[i] > frequency[i]) {
            if (arr[i] - frequency[i] < 3) {
                result[i] = "•<";
            } else {
                result[i] = "•<<"; 
            }
        } else {
            if (frequency[i]-arr[i] < 3) {
                result[i] = ">•";
            } else {
                result[i] = ">>•";
            }
        }
    }
    return result;
}