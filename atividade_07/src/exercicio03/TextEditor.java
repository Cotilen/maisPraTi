package exercicio03;

public class TextEditor {
    private ActionNode head;
    private StringBuilder text;

    public TextEditor() {
        this.head = null;
        this.text = new StringBuilder();
    }

    public void performAction(String action) {
        ActionNode newAction = new ActionNode(action);

        newAction.next = head;
        head = newAction;

        executeAction(action);
        System.out.println("Performed action: " + action);
    }

    private void executeAction(String action) {
        if (action.startsWith("Add:")) {
            text.append(action.substring(5));
        } else if (action.startsWith("Remove:")) {
            int lengthToRemove = Integer.parseInt(action.substring(8));
            int start = text.length() - lengthToRemove;
            if (start >= 0) {
                text.delete(start, text.length());
            }
        }
    }

    public void undo() {
        if (head == null) {
            System.out.println("No actions to undo.");
            return;
        }

        String lastAction = head.action;
        head = head.next;

        System.out.println("Undoing action: " + lastAction);
        revertAction(lastAction);
    }

    private void revertAction(String action) {
        if (action.startsWith("Add:")) {
            int lengthToRemove = action.substring(5).length();
            int start = text.length() - lengthToRemove;
            if (start >= 0) {
                text.delete(start, text.length());
            }
        } else if (action.startsWith("Remove:")) {
            // Aqui você pode implementar um sistema mais complexo para reverter a remoção,
            // como armazenar o texto removido em uma pilha.
            System.out.println("Cannot undo a remove action without additional data.");
        }
    }

    public void printText() {
        System.out.println("Current text: " + text.toString());
    }
}
