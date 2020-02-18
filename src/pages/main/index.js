import React from 'react'; 
import api from '../../service/api'
import './styles.css'

export default class Main extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.loadProducts();
    }
    
    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({
            products: response.data.docs
        });
      };

    render() {
        
        return (
            <div className="product-list">
                <h1>Contagem de produtos: {this.state.products.length}</h1>
                    {this.state.products.map(product => (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>product.description</p>
                            <a href="">Acessar</a>
                        </article>
                    ))}
            </div>
        )
    }
}