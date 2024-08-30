package exercicio05;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        PlayerHand playerHand = new PlayerHand();
        int option;

        do {
            System.out.println("\n--- Jogo de Cartas ---");
            System.out.println("1. Adicionar carta");
            System.out.println("2. Remover carta");
            System.out.println("3. Mover carta");
            System.out.println("4. Mostrar mão do jogador");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("Digite o nome da carta a ser adicionada: ");
                    String cardToAdd = scanner.nextLine();
                    playerHand.addCard(cardToAdd);
                    break;
                case 2:
                    System.out.print("Digite o nome da carta a ser removida: ");
                    String cardToRemove = scanner.nextLine();
                    playerHand.removeCard(cardToRemove);
                    break;
                case 3:
                    System.out.print("Digite o nome da carta a ser movida: ");
                    String cardToMove = scanner.nextLine();
                    System.out.print("Digite a nova posição da carta (0 para o início): ");
                    int newPosition = scanner.nextInt();
                    playerHand.moveCard(cardToMove, newPosition);
                    break;
                case 4:
                    playerHand.showHand();
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
