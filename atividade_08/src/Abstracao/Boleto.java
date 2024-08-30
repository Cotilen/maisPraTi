package Abstracao;

public class Boleto extends FormaPagamento {
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$" + valor + " processado com Boleto.");
        } else {
            System.out.println("Falha na validação do pagamento com Boleto.");
        }
    }

    @Override
    public boolean validarPagamento() {
        return codigoBarras.length() == 44;
    }
}
