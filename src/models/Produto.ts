export class Produto{
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public set setNome(novoNome: string) {
        // Regra de negócio: Nome não pode ser vazio
        if (novoNome.length === 0) {
            console.log("\n ERRO: O nome do produto não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
        console.log("\n Nome alterado com sucesso!");
    }

    public set setPreco(novoPreco: number) {
        // Regra de negócio: Preço não pode ser negativo
        if (novoPreco < 0) {
            console.log("\n ERRO: O preço não pode ser negativo! Bloqueado.");
            return;
        }
        this.preco = novoPreco;
        console.log("\n Preço atualizado com sucesso!");
    }
}
