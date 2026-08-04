class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = []
        for(let today=0; today<temperatures.length; today++){
            while(stack.length>0){
                let waitingday = stack[stack.length-1]
                if(temperatures[today] <= temperatures[waitingday]) break
                stack.pop()
                res[waitingday] = today - waitingday
            }
            stack.push(today)
        }
        return res
    }
}
