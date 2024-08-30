package exercicio08;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ProcessQueue processQueue = new ProcessQueue();
        int option;

        do {
            System.out.println("\n--- Simulador de Fila de Processos ---");
            System.out.println("1. Adicionar processo");
            System.out.println("2. Executar próximo processo");
            System.out.println("3. Mostrar fila de processos");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("Digite o nome do processo: ");
                    String processName = scanner.nextLine();
                    processQueue.addProcess(processName);
                    break;
                case 2:
                    processQueue.executeNextProcess();
                    break;
                case 3:
                    processQueue.showQueue();
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

