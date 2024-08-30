package exercicio04;

public class TextEditor {
    private ActionNode current;
    private StringBuilder text;

    public TextEditor() {
        this.current = null;
        this.text = new StringBuilder();
    }

    public void performAction(String action) {
        // Cria um novo nó de ação
        ActionNode newAction = new ActionNode(action);

        // Se há uma ação corrente, atualiza a corrente para a nova ação e ajusta os ponteiros
        if (current != null) {
            current.next = newAction;
            newAction.prev = current;
        }

        // Define a nova ação como corrente
        current = newAction;

        // Executa a ação
        executeAction(action);
        System.out.println("Ação realizada: " + action);
    }

    // Executa a ação, adicionando ou removendo texto
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

    // Desfaz a última ação
    public void undo() {
        if (current == null) {
            System.out.println("Nenhuma ação para desfazer.");
            return;
        }

        System.out.println("Desfazendo ação: " + current.action);
        revertAction(current.action);
        current = current.prev;
    }

    // Refaz a última ação desfeita
    public void redo() {
        if (current == null || current.next == null) {
            System.out.println("Nenhuma ação para refazer.");
            return;
        }

        current = current.next;
        System.out.println("Refazendo ação: " + current.action);
        executeAction(current.action);
    }

    // Reverte uma ação, desfazendo-a
    private void revertAction(String action) {
        if (action.startsWith("Add:")) {
            int lengthToRemove = action.substring(5).length();
            int start = text.length() - lengthToRemove;
            if (start >= 0) {
                text.delete(start, text.length());
            }
        } else if (action.startsWith("Remove:")) {
            // Implementação mais complexa pode ser feita para reverter a remoção,
            // como armazenar o texto removido em uma pilha.
            System.out.println("Não é possível desfazer uma ação de remoção sem dados adicionais.");
        }
    }

    // Exibe o texto atual
    public void printText() {
        System.out.println("Texto atual: " + text.toString());
    }
}
