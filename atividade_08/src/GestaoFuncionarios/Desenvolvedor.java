package GestaoFuncionarios;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return salarioBase * 1.2;
    }

    @Override
    public double calcularBonus() {
        return salarioBase * 0.1;
    }
}

