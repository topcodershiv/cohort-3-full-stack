
n=5;
for(let i=0; i<n; i++) {
    setTimeout(() => printing(i),i*1000);
}

function printing(n) {
console.log(n);
}
