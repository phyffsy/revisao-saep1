export class Livro{
    private titulo: string;
    private paginas: number;

    constructor(titulo: string, paginas: number) {
        this.titulo = titulo;
        this.paginas = paginas;
    }

    public get getTitulo(): string {
        return this.titulo;
    }

    public get getPaginas(): number {
        return this.paginas;
    }

    public set setTitulo(novoTitulo: string) {
        // Regra de negócio: Título não pode ser vazio
        if (novoTitulo.length === 0) {
            console.log("\n ERRO: O título do livro não pode ser vazio!");
            return;
        }
        this.titulo = novoTitulo;
        console.log("\n Título alterado com sucesso!");
    }

    public set setPaginas(novasPaginas: number) {
        // Regra de negócio: Páginas não pode ser negativo
        if (novasPaginas < 0) {
            console.log("\n ERRO: O número de páginas não pode ser negativo! Bloqueado.");
            return;
        }
        this.paginas = novasPaginas;
        console.log("\n Páginas atualizadas com sucesso!");
    }
}
