class MinStack {

   constructor(){
    this.stack = []
    this.minstack = []
   }

   push(val){
     this.stack.push(val)
     let minval = this.minstack[this.minstack.length -1]
     if(minval < val){
        this.minstack.push(minval)
     }
     else {
        this.minstack.push(val)
     }
   }

   pop(){
     this.stack.pop()
     this.minstack.pop()
   }

   top(){
     return this.stack[this.stack.length-1]
   }

   getMin(){
     return this.minstack[this.minstack.length-1]
   }
}
