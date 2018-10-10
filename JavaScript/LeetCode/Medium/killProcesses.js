// Given n processes, each process has a unique PID (process id) and its PPID (parent process id).
//
// Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.
//
// We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.
//
// Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.
//
// Example 1:
// Input:
// pid =  [1, 3, 10, 5]
// ppid = [3, 0, 5, 3]
// kill = 5
// Output: [5,10]
// Explanation:
//            3
//          /   \
//         1     5
//              /
//             10
// Kill 5 will also kill 10.

var killProcess = function(pid, ppid, kill) {
    let hash = {};
    let leaf = {};
    // hash ppid's to pid's
    for(let i = 0; i < ppid.length; i++) {
        leaf[pid[i]] = pid[i];

        if(ppid[i] === 0) {

            if(!hash[pid[i]]){
                hash[pid[i]] = new Array();
            }
        }
        else if (hash[ppid[i]] === undefined) {
            hash[ppid[i]] = Array(1).fill(pid[i]);
        } else {
            hash[ppid[i]].push(pid[i]);
        }
    }

    let result = []; let queue = [];
    // if kill id doesn't exist in ppid, then its a leaf node
    if(hash[kill]) {
        queue.push(kill);
    } else if(leaf[kill]){
        return [leaf[kill]];
    }

    // BF Traversal
    while(queue.length > 0) {
        let curr = queue.shift();
        result.push(curr);

        if(hash[curr]){
            for(let children of hash[curr]){
                queue.push(children);
            }
        }


    }

    return result;
};
