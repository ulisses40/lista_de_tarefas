import java.util.Scanner;

public class Parquimetro {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Tabela de preços
        double preco30 = 1.00;
        double preco60 = 1.75;
        double preco120 = 3.00;

        System.out.print("Digite o valor em reais: R$ ");
        double valor = scanner.nextDouble();

        int tempo = 0;

        if (valor == preco120) {
            tempo = (int)((valor / preco120) * 120);
        } else if (valor == preco60) {
            tempo = (int)((valor / preco60) * 60);
        } else if (valor == preco30) {
            tempo = (int)((valor / preco30) * 30);
        
        }else if (valor > preco120){
            System.out.println("Valor acima do permitido. somente até 120 minutos ou R$3,00")
            
        }else {
            System.out.println("Valor insuficiente para estacionar.");
            return;
        }

        System.out.println("⏱️ Tempo de estacionamento: " + tempo + " minutos");
    }
}