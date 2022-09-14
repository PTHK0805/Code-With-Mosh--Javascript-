
console.log(sum(1, 2, 3, 4));

function sum(...argu) {
    if (argu.length === 1 && Array.isArray(argu[0])){
      argu = [...argu[0]];
    }

    return argu.reduce((a,b) => a+b)
}