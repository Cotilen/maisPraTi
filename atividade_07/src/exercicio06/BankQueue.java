package exercicio06;

import java.util.LinkedList;
import java.util.Queue;

public class BankQueue {
    private Queue<Client> queue;
    private int nextId;

    public BankQueue() {
        this.queue = new LinkedList<>();
        this.nextId = 1;
    }

    // Adiciona um cliente à fila
    public void addClient(String name) {
        Client newClient = new Client(name, nextId++);
        queue.add(newClient);
        System.out.println("Cliente adicionado à fila: " + newClient);
    }

    // Chama o próximo cliente da fila
    public void callNextClient() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum cliente na fila.");
        } else {
            Client nextClient = queue.poll();
            System.out.println("Chamando o próximo cliente: " + nextClient);
        }
    }

    // Exibe todos os clientes que estão na fila
    public void showQueue() {
        if (queue.isEmpty()) {
            System.out.println("Nenhum cliente na fila.");
        } else {
            System.out.println("Clientes na fila:");
            for (Client client : queue) {
                System.out.println(client);
            }
        }
    }
}

