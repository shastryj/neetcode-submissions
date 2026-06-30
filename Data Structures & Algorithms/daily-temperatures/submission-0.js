class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = []

        for(let today = 0; today < temperatures.length; today++) {
            
            while(stack.length > 0){
              const waitingDay = stack[stack.length - 1];
              const foundWarmerDay = temperatures[today] > temperatures[waitingDay];
              if (!foundWarmerDay) break;
              stack.pop();
              res[waitingDay] = today - waitingDay;
            }

            stack.push(today);

        }

        return res
    }
}
