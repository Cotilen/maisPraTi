package GestaoFuncionarios;

public class Gerente extends Funcionario {

    public Gerente(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return salarioBase * 1.5;
    }

    @Override
    public double calcularBonus() {
        return salarioBase * 0.2;
    }
}
