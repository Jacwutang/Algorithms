Print all valid combos of n-pairs of parentheses

Input 1
output ()

Input 2
output (()), () ()

function combos(n,current,let set = new Set()){
  if(current > n){
    return set;
  }

  if(current === 1){
    set.add('()');
    combos(n, current+=1, set);
  }

  for(let item of set){
    // 3 cases for sub-solution build
    set.add(item.concat('()'));
    set.add('()'.concat(item));
    set.add('('.concat(item).concat(')'));
  }

  return combos(n,current += 1, set);
}
