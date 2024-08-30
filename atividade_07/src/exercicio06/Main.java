package exercicio06;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BankQueue bankQueue = new BankQueue();
        int option;

        do {
            System.out.println("\n--- Fila de Atendimento do Banco ---");
            System.out.println("1. Adicionar cliente à fila");
            System.out.println("2. Chamar próximo cliente");
            System.out.println("3. Mostrar fila");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("Digite o nome do cliente: ");
                    String clientName = scanner.nextLine();
                    bankQueue.addClient(clientName);
                    break;
                case 2:
                    bankQueue.callNextClient();
                    break;
                case 3:
                    bankQueue.showQueue();
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

