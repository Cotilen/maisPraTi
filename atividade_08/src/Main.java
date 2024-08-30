import Abstracao.Boleto;
import Abstracao.CartaoCredito;
import Abstracao.FormaPagamento;
import Abstracao.Pix;
import GestaoFuncionarios.*;
import Polimorfismo.*;

import java.util.ArrayList;
import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
//        IMeioTransporte[] meiosDeTransporte = new IMeioTransporte[] {
//                new Carro(),
//                new Bicicleta(),
//                new Trem()
//        };
//
//        for (IMeioTransporte transporte : meiosDeTransporte) {
//            transporte.acelerar();
//            transporte.frear();
//            System.out.println();
//        }

//        List<Animal> animais = new ArrayList<>();
//
//        animais.add(new Cachorro());
//        animais.add(new Gato());
//        animais.add(new Vaca());
//
//        for (Animal animal : animais) {
//            animal.emitirSom();
//        }

//        List<FormaPagamento> formasDePagamento = new ArrayList<>();
//
//        formasDePagamento.add(new CartaoCredito("1234567812345678", "12/25", "123"));
//        formasDePagamento.add(new Boleto("12345678901234567890123456789012345678901234"));
//        formasDePagamento.add(new Pix("chavepix@gmail.com"));
//
//        for (FormaPagamento pagamento : formasDePagamento) {
//            pagamento.processarPagamento(100.00);
//            System.out.println();
//        }

        Empresa empresa = new Empresa();

        Funcionario gerente = new Gerente("Alice", 5000);
        Funcionario desenvolvedor = new Desenvolvedor("Bob", 4000);
        Funcionario estagiario = new Estagiario("Carol", 1500);

        empresa.adicionarFuncionario(gerente);
        empresa.adicionarFuncionario(desenvolvedor);
        empresa.adicionarFuncionario(estagiario);

        empresa.listarFuncionarios();

        double folhaPagamento = empresa.calcularFolhaPagamento();
        System.out.println("Folha de pagamento total: R$" + folhaPagamento);

        empresa.promoverFuncionario(estagiario, new Desenvolvedor(estagiario.getNome(), estagiario.getSalarioBase()));

        System.out.println("\nApós a promoção:");
        empresa.listarFuncionarios();

        folhaPagamento = empresa.calcularFolhaPagamento();
        System.out.println("Folha de pagamento total: R$" + folhaPagamento);
    }
}