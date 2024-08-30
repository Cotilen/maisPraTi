package GestaoFuncionarios;

public class Estagiario extends Funcionario {

    public Estagiario(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return salarioBase;
    }

    @Override
    public double calcularBonus() {
        return salarioBase * 0.05;
    }
}

