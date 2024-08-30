package exercicio07;

import java.util.LinkedList;
import java.util.Queue;

public class PrintQueue {
    private Queue<PrintJob> queue;
    private int nextJobId;

    public PrintQueue() {
        this.queue = new LinkedList<>();
        this.nextJobId = 1;
    }

    // Adiciona um trabalho de impressão à fila
    public void addJob(String documentName) {
        PrintJob newJob = new PrintJob(documentName, nextJobId++);
        queue.add(newJob);
        System.out.println("Trabalho de impressão adicionado à fila: " + newJob);
    }

    // Processa o próximo trabalho de impressão na fila
    public void processNextJob() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum trabalho de impressão na fila.");
        } else {
            PrintJob nextJob = queue.poll();
            System.out.println("Processando trabalho de impressão: " + nextJob);
        }
    }

    // Exibe todos os trabalhos de impressão na fila
    public void showQueue() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum trabalho de impressão na fila.");
        } else {
            System.out.println("Trabalhos de impressão na fila:");
            for (PrintJob job : queue) {
                System.out.println(job);
            }
        }
    }
}

