import React from 'react';
import { vegetables } from '../../consts/vegetables';

class Detail extends React.Component {
  constructor(props) {
    super(props)
    const { id } = props.match.params
    this.state = {
      id: id,
      loading: false,
      currentVegetable: null,
      error: null
    }
    console.log(props)

    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState((state) => ({
        currentVegetable: vegetables.find(v => v.id === state.id),
        //error: "Hubo un error en el servidor",
        loading: false
      }))
    }, 2000)
  }

  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div>
        {this.state.loading ? <h1>Cargando...</h1> :
          this.state.currentVegetable && <h1> Detalle {this.state.currentVegetable.name}</h1>
        }
        {!this.state.loading && this.state.error && <h1>{this.state.error}</h1>}
        <button onClick={this.goBack}>Volver</button>
      </div>
    )
  }

}

export default Detail;