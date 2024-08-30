package exercicio04;

public class ActionNode {
    String action;
    ActionNode prev;
    ActionNode next;

    public ActionNode(String action) {
        this.action = action;
        this.prev = null;
        this.next = null;
    }
}

