package GestaoFuncionarios;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private List<Funcionario> funcionarios;

    public Empresa() {
        this.funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);
    }

    public double calcularFolhaPagamento() {
        double totalPagamento = 0;
        for (Funcionario funcionario : funcionarios) {
            totalPagamento += funcionario.calcularTotalPagamento();
        }
        return totalPagamento;
    }

    public void promoverFuncionario(Funcionario funcionario, Funcionario novoFuncionario) {
        int index = funcionarios.indexOf(funcionario);
        if (index >= 0) {
            funcionarios.set(index, novoFuncionario);
        }
    }

    public void listarFuncionarios() {
        for (Funcionario funcionario : funcionarios) {
            System.out.println("Nome: " + funcionario.getNome() +
                    ", Salário: R$" + funcionario.calcularSalario() +
                    ", Bônus: R$" + funcionario.calcularBonus());
        }
    }
}

