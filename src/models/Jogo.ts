export class Jogo{
    private titulo: string;
    private preco: number;

    constructor(titulo: string, preco: number) {
        this.titulo = titulo;
        this.preco = preco;
    }

    public get getTitulo(): string {
        return this.titulo;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public set setTitulo(novoTitulo: string) {
        // Regra de negócio: Título não pode ser vazio
        if (novoTitulo.length === 0) {
            console.log("\n ERRO: O título do jogo não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\n Título alterado com sucesso!");
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
