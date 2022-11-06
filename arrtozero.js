function setElementstoZero(arr, N)
{
    var pq = [];
    var op = 0;
    for(var i = 0; i < N; i++) {
        if (arr[i] > 0) {
            pq.push(arr[i]);
        }
    }
    pq.sort((a,b) => a-b);
    while (pq.length > 1) {
        op += 1;
        var p = pq[pq.length-1];
        pq.pop();
        var q = pq[pq.length-1];
        pq.pop();
        if (p - q > 0) {
            pq.push(p);
        }
        pq.sort((a,b) => a-b);
    }
    return op;
}
var arr = [ 1, 2, 3, 4 ];
var N = arr.length;
console.log(setElementstoZero(arr, N));
