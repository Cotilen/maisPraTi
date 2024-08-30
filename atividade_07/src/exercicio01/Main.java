package exercicio01;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TaskManager taskManager = new TaskManager();
        int option;

        do {
            System.out.println("\n--- Gerenciador de Tarefas ---");
            System.out.println("1. Adicionar tarefa");
            System.out.println("2. Remover tarefa");
            System.out.println("3. Marcar tarefa como concluída");
            System.out.println("4. Listar tarefas");
            System.out.println("0. Sair");
            System.out.print("Escolha uma opção: ");
            option = scanner.nextInt();
            scanner.nextLine(); // Consumir a nova linha

            switch (option) {
                case 1:
                    System.out.print("Descrição da tarefa: ");
                    String description = scanner.nextLine();
                    taskManager.addTask(description);
                    break;
                case 2:
                    System.out.print("Índice da tarefa a ser removida: ");
                    int removeIndex = scanner.nextInt();
                    taskManager.removeTask(removeIndex);
                    break;
                case 3:
                    System.out.print("Índice da tarefa a ser marcada como concluída: ");
                    int completeIndex = scanner.nextInt();
                    taskManager.markTaskAsCompleted(completeIndex);
                    break;
                case 4:
                    System.out.println("\n--- Lista de Tarefas ---");
                    taskManager.printTasks();
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

