package exercicio05;

public class CardNode {
    String card;
    CardNode prev;
    CardNode next;

    public CardNode(String card) {
        this.card = card;
        this.prev = null;
        this.next = null;
    }
}
