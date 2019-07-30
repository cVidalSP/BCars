import React,{ Component } from 'react';

class Exibir extends Component{

    render(){

        const { MyContext } = this.props;
        // const idadeTeste = {
        //     idade: 21,
        // }

        return(
         <MyContext.Consumer>
             {(context) =>(
                <React.Fragment>
                    <div>
                        <p>{ context.state.items.price }</p>
                        {/* <p>{ context.state.userData.nome !== undefined && context.state.userData.nome !== null ? context.state.userData.nome : null }</p>
                        <p>{ context.state.userData.idade !== undefined && context.state.userData.idade !== null ? context.state.userData.idade : null }</p> */}

                    </div>
                    {/* <button onClick={context.addValues(idadeTeste)}> Adicionar Idade </button> */}
                </React.Fragment>
             )}
        </MyContext.Consumer>
     )
    }
}





export default Exibir;