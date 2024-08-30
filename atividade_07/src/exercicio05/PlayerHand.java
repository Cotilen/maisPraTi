package exercicio05;

public class PlayerHand {
    private CardNode head;
    private CardNode tail;

    public PlayerHand() {
        this.head = null;
        this.tail = null;
    }

    // Adiciona uma carta ao final da mão
    public void addCard(String card) {
        CardNode newCard = new CardNode(card);
        if (head == null) {
            head = newCard;
            tail = newCard;
        } else {
            tail.next = newCard;
            newCard.prev = tail;
            tail = newCard;
        }
        System.out.println("Carta adicionada: " + card);
    }

    // Remove uma carta específica da mão
    public void removeCard(String card) {
        CardNode current = head;

        while (current != null) {
            if (current.card.equals(card)) {
                if (current.prev != null) {
                    current.prev.next = current.next;
                } else {
                    head = current.next;
                }

                if (current.next != null) {
                    current.next.prev = current.prev;
                } else {
                    tail = current.prev;
                }

                System.out.println("Carta removida: " + card);
                return;
            }
            current = current.next;
        }

        System.out.println("Carta não encontrada: " + card);
    }

    // Move uma carta para uma nova posição na mão
    public void moveCard(String card, int newPosition) {
        CardNode current = head;
        int position = 0;

        while (current != null) {
            if (current.card.equals(card)) {
                // Remove a carta da posição atual
                if (current.prev != null) {
                    current.prev.next = current.next;
                } else {
                    head = current.next;
                }

                if (current.next != null) {
                    current.next.prev = current.prev;
                } else {
                    tail = current.prev;
                }

                // Reinsere a carta na nova posição
                insertAtPosition(current, newPosition);
                System.out.println("Carta movida: " + card + " para posição " + newPosition);
                return;
            }
            current = current.next;
            position++;
        }

        System.out.println("Carta não encontrada: " + card);
    }

    // Insere a carta em uma posição específica na mão
    private void insertAtPosition(CardNode card, int position) {
        if (position <= 0 || head == null) {
            card.next = head;
            if (head != null) {
                head.prev = card;
            }
            head = card;
            if (tail == null) {
                tail = card;
            }
            return;
        }

        CardNode current = head;
        int currentPosition = 0;

        while (current != null && currentPosition < position) {
            current = current.next;
            currentPosition++;
        }

        if (current == null) {
            tail.next = card;
            card.prev = tail;
            tail = card;
        } else {
            card.next = current;
            card.prev = current.prev;
            if (current.prev != null) {
                current.prev.next = card;
            }
            current.prev = card;
        }
    }

    // Exibe as cartas na mão do jogador
    public void showHand() {
        if (head == null) {
            System.out.println("Mão vazia.");
            return;
        }

        CardNode current = head;
        System.out.print("Mão do jogador: ");

        while (current != null) {
            System.out.print(current.card + " ");
            current = current.next;
        }
        System.out.println();
    }
}
