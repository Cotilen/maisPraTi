package Encapsulamento;

public class Gerente extends Funcionario {
    public Gerente(String nome, Double salario) {
        super(nome, salario);
    }

    public double calcularBonus() {
        return this.salario * 0.20;
    }

    @Override
    public void trabalhar(){
        System.out.println("O gerente está gerenciando");
    }
}
