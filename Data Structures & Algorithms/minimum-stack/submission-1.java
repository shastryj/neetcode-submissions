class MinStack {

    ArrayList<Integer> stack;
    ArrayList<Integer> minstack;

    public MinStack() {
        this.stack = new ArrayList<Integer>();
        this.minstack = new ArrayList<Integer>();
    }

    public void push(int val) {
        stack.add(val);
        int minval = minstack.isEmpty() ? val : Math.min(minstack.get(minstack.size() - 1), val);
        minstack.add(minval);
    }

    public void pop() {
        stack.remove(stack.size() - 1);
        minstack.remove(minstack.size() - 1);
    }

    public int top() {
        return stack.get(stack.size() - 1);
    }

    public int getMin() {
        return minstack.get(minstack.size() - 1);
    }
}