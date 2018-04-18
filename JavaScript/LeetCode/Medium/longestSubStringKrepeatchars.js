var longestSubstring = function(s, k) {
    let hash = {};
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]] === undefined){
            hash[s[i]] = 1;
        } else{
            hash[s[i]] += 1;
        }
    }
    
    
    let marked = [];
    for(let i in hash){
        if(hash[i] < k){
            marked.push(i);
        }
    }
    
    
    
    let newString = "";
    for(let i = 0; i < s.length; i++){
        if(marked.includes(s[i])){
            newString += "0";
        } else{
            newString += s[i]
        }
        
    }
    
    
    let arr = newString.split('0');
    
    
    let max = 0;
    
    arr.forEach((sub) => {
       
        for(let i = 0; i < sub.length; i++){
            
            
            for(let j = sub.length; j > 0; j--){
                let str = sub.slice(i,j);
            
                let res = checkValidSub(str,k); 
                if(res === true && str.length > max){
                    max = str.length;
           
                }        
                
            }
            
            
            
            
        }
        
        
    });
    
    
    return max;
    
    
    
};


function checkValidSub(sub,k){
    let hash = {};
    for(let i = 0; i < sub.length; i++){
        if(hash[sub[i]] === undefined){
            hash[sub[i]] = 1;
        } else{
            hash[sub[i]] += 1;
        }
        
    }
    
    let arr = Object.values(hash);
    return arr.every( (el) => el >= k);
}

//brute force approach. At least O(n^3)
