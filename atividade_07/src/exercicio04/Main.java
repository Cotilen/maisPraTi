package exercicio04;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TextEditor textEditor = new TextEditor();
        int option;

        do {
            System.out.println("\n--- Editor de Texto ---");
            System.out.println("1. Adicionar texto");
            System.out.println("2. Remover texto");
            System.out.println("3. Desfazer última ação");
            System.out.println("4. Refazer última ação");
            System.out.println("5. Mostrar texto atual");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("Digite o texto a ser adicionado: ");
                    String textToAdd = scanner.nextLine();
                    textEditor.performAction("Add:" + textToAdd);
                    break;
                case 2:
                    System.out.print("Digite o número de caracteres a serem removidos: ");
                    int charsToRemove = scanner.nextInt();
                    textEditor.performAction("Remove:" + charsToRemove);
                    break;
                case 3:
                    textEditor.undo();
                    break;
                case 4:
                    textEditor.redo();
                    break;
                case 5:
                    textEditor.printText();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        } while (option != 0);

        scanner.close();
    }
}
