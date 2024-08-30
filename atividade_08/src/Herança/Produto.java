package Herança;

public class Produto {
    private String nome;
    private Double preco;
    private Integer quantidade;

    public Produto(String nome, Double preco, Integer quantidade){
        nome = this.nome;
        setPreco(preco);
        setQuantidade(quantidade);
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        if (quantidade < 0){
            System.out.println("A quantidade não pode ser negativa!");
        }else{
            this.quantidade = quantidade;
        }
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        if (preco < 0){
            System.out.println("O preço não pode ser negativo!");
        }else{
            this.preco = preco;

        }
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void aplicarDesconto(Double porcentagem){
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("O desconto não pode ser menor que 0% ou maior que 50%.");
        }
        this.preco -= this.preco * (porcentagem / 100);

    }

}
