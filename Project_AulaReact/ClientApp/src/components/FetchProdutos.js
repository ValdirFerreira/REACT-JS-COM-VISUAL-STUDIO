import React, { Component } from 'react';

export class FetchProdutos extends Component {
    static displayName = FetchProdutos.name;

    constructor(props) {
        super(props);
        this.state = { produtos: [], loading: true };
    }

    componentDidMount() {
        this.populateProdutosData();
    }


    static renderprodutosTable(produtos) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto =>
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchProdutos.renderprodutosTable(this.state.produtos);

        return (
            <div>
                <h1 id="tableLabel">Produtos</h1>
                <p>Componente da video aula canal dev net core.</p>
                {contents}
            </div>
        );
    }


    async populateProdutosData() {
        const response = await fetch('produtos');
        const data = await response.json();
        this.setState({ produtos: data, loading: false });
    }


}