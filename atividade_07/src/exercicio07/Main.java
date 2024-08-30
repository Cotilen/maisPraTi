package exercicio07;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PrintQueue printQueue = new PrintQueue();
        int option;

        do {
            System.out.println("\n--- Sistema de Gerenciamento de Impressões ---");
            System.out.println("1. Adicionar trabalho de impressão");
            System.out.println("2. Processar próximo trabalho de impressão");
            System.out.println("3. Mostrar fila de impressão");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("Digite o nome do documento: ");
                    String documentName = scanner.nextLine();
                    printQueue.addJob(documentName);
                    break;
                case 2:
                    printQueue.processNextJob();
                    break;
                case 3:
                    printQueue.showQueue();
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

