import React from 'react';
import '../App.css';
import ImgCsgo from '../img/csgo.jpeg';
import ImgCod from '../img/cod.jpeg';
import ImgBf from '../img/BF.jpeg';

class Lista extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            games: [
                {
                    nome: 'CSGO',
                    info: 'Counter-Strike: Global Offensive é ' +
                    'um jogo online desenvolvido pela Valve ' +
                    'Corporation e pela Hidden Path Entertainment, ' +
                    'sendo uma sequência de Counter-Strike: Source.',
                    img: ImgCsgo
                },
                {
                    nome: 'COD',
                    info: 'Call of Duty é uma série de videojogos ' +
                    'na primeira pessoa. A série começou no PC, ' +
                    'mais tarde expandindo-se para os vários tipos de consoles.',
                    img: ImgCod
                },
                {
                    nome: 'Battlefield',
                    info: 'Battlefield é uma série de jogos eletrônicos ' +
                    'da EA Games em parceria com a Digital Illusions, ' +
                    'que teve início em 2002 e que, ao todo, teve 14 ' +
                    'jogos feitos e outras 18 expansões para eles.',
                    img: ImgBf
                }
            ]
        }
    }


    render() {
        return(
            <div className="conatainer">
                {
                    this.state.games.map((item, index) => {
                        return (    
                            <div className="card" key={index}>
                                <img className="card-img" src={item.img} alt="imagem ilustrativa"></img>
                                <h2 className="card-title">{item.nome}</h2>
                                <p className="card-info">{item.info}</p>
                            </div>
                        );
                    })
                }
            </div>
            
        )
    }
}

export default Lista;