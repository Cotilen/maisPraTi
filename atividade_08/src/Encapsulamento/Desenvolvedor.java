package Encapsulamento;

public class Desenvolvedor extends Funcionario {

    public Desenvolvedor(String nome, double salario) {
        super(nome, salario);
    }

    public double calcularBonus() {
        return this.salario * 0.10;
    }

    @Override
    public void trabalhar(){
        System.out.println("O desenvolvedor está desenvolvendo!");
    }
}
