package exercicio03;

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
            System.out.println("3. Refazer ultima ação");
            System.out.println("4. Mostrar texto atual");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine();

            switch (option) {
                case 1:
                    System.out.print("Digite o texto: ");
                    String textToAdd = scanner.nextLine();
                    textEditor.performAction("Add:" + textToAdd);
                    break;
                case 2:
                    System.out.print("Digite o id para remover: ");
                    int charsToRemove = scanner.nextInt();
                    textEditor.performAction("Remover:" + charsToRemove);
                    break;
                case 3:
                    textEditor.undo();
                    break;
                case 4:
                    textEditor.printText();
                    break;
                case 0:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida.");
                    break;
            }
        } while (option != 0);

        scanner.close();
    }
}

