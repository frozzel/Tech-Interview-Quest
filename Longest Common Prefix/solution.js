/**
 * @param {string[]} strs
 * @return {string}
 */
 var commonPrefix = function(s1,s2){
    for(let i = 0; i < s1.length; i++){
    if(s1[i] !== s2[i]){
    return s1.slice(0,i);
    }
    }
    return s1;
    }
    var longestCommonPrefix = function(strs) {
    var n = strs.length;
    if(n === 0){return "";}
    var sorted = strs.sort(function(a,b){return a.length-b.length;});
    var res = sorted[0];
    for(var i = 1; i < n; i++){
    res = commonPrefix(res,strs[i]);
    if(res === ""){return res;}
    }
    return res;
    };