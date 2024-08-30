package Encapsulamento;

public class Funcionario {
    protected String nome;
    protected Double salario;

    public Funcionario(String nome, Double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public double calcularBonus() {
        return 0;
    }

    public void trabalhar(){
        System.out.println("Os funcionários estão trabalhado");
    }
}
