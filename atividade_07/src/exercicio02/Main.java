package exercicio02;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("ADicione o tamanho máximo do histórico: ");
        int maxSize = scanner.nextInt();
        scanner.nextLine();

        BrowserHistory browserHistory = new BrowserHistory(maxSize);
        int option;

        do {
            System.out.println("\n--- Histórico de Navegação ---");
            System.out.println("1. Adicione a url do site que deseja visitar");
            System.out.println("2. Histórico");
            System.out.println("0. Sair");
            System.out.print("Escolha: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("URL: ");
                    String url = scanner.nextLine();
                    browserHistory.visit(url);
                    break;
                case 2:
                    System.out.println("\n--- Histórico ---");
                    browserHistory.printHistory();
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

