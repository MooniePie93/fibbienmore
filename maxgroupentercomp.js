function makeGroups(a, n) {
    let arr = [2, 3, 1, 2, 2];

    let size = arr.length;

    makeGroups(arr, size);

    let v = Array.from({
        length: n + 1
    }, (_, i) => 0);
    for (let i = 0; i < n; i++) {
        v[a[i]]++;
    }
    let no_of_groups = 0;
    for (let i = 1; i <= n; i++) {
        no_of_groups += Math.floor(v[i] / i);
        v[i] = v[i] % i;
    }
    let i = 1;
    let total = 0;
    for (i = 1; i <= n; i++) {
        if (v[i] != 0) {
            total = v[i];
            break;
        }
    }
    i++;
    while (i <= n) {
        if (v[i] != 0) {
            total += v[i];
            if (total >= i) {
                let rem = total - i;
                no_of_groups++;
                total = rem;
            }
        }
        i++;
    }
    console.log(no_of_groups + "\n");
}
    