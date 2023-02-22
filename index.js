
function countingSort(arr, arrCount){
    for(let i=0; i<arr.length; i++){

        for(let j=0; j<arrCount; j++){

            if(arr[i] == j){

                arrCount[j] += 1
                
            }
            console.log(arrCount)
        }
    }
}

let list = [2, 3, 1, 5, 1, 2]
let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
countingSort(list, countArray)