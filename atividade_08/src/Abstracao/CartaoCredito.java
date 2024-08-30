package Abstracao;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;
    private String dataValidade;
    private String cvv;

    public CartaoCredito(String numeroCartao, String dataValidade, String cvv) {
        this.numeroCartao = numeroCartao;
        this.dataValidade = dataValidade;
        this.cvv = cvv;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado com Cartão de Crédito.");
        } else {
            System.out.println("Falha na validação do pagamento com Cartão de Crédito.");
        }
    }

    @Override
    public boolean validarPagamento() {
        return numeroCartao.length() == 16 && dataValidade.matches("\\d{2}/\\d{2}") && cvv.length() == 3;
    }
}

