package exercicio08;

import java.util.LinkedList;
import java.util.Queue;

public class ProcessQueue {
    private Queue<Process> queue;
    private int nextProcessId;

    public ProcessQueue() {
        this.queue = new LinkedList<>();
        this.nextProcessId = 1;
    }

    // Adiciona um novo processo à fila
    public void addProcess(String processName) {
        Process newProcess = new Process(processName, nextProcessId++);
        queue.add(newProcess);
        System.out.println("Processo adicionado à fila: " + newProcess);
    }

    // Remove o processo mais antigo para execução
    public void executeNextProcess() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum processo na fila.");
        } else {
            Process nextProcess = queue.poll();
            System.out.println("Executando o processo: " + nextProcess);
        }
    }

    // Exibe todos os processos na fila
    public void showQueue() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum processo na fila.");
        } else {
            System.out.println("Processos na fila:");
            for (Process process : queue) {
                System.out.println(process);
            }
        }
    }
}

