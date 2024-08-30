package exercicio02;

public class BrowserHistory {
    private HistoryNode head;
    private int size;
    private final int maxSize;

    public BrowserHistory(int maxSize) {
        this.head = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    public void visit(String url) {
        HistoryNode newNode = new HistoryNode(url);

        if (head == null) {
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }

        size++;

        if (size > maxSize) {
            removeOldest();
        }

        System.out.println("Visited: " + url);
    }

    private void removeOldest() {
        if (head == null || head.next == null) {
            return;
        }

        HistoryNode current = head;

        while (current.next.next != null) {
            current = current.next;
        }

        System.out.println("Removing oldest: " + current.next.url);
        current.next = null;
        size--;
    }

    public void printHistory() {
        if (head == null) {
            System.out.println("No browsing history.");
            return;
        }

        HistoryNode current = head;
        int index = 0;

        while (current != null) {
            System.out.println(index + ": " + current.url);
            current = current.next;
            index++;
        }
    }
}

