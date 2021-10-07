import { Component } from 'react';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Title from './components/Title';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [
      // {
      //   name: 'Tomate',
      //   price: 1500,
      //   img: '/productos/tomate.jpg',
      //   cantidad: 1,
      // },
    ],
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((item) =>
        item.name === producto.name
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  render() {
    console.log(this.state.carro);
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
