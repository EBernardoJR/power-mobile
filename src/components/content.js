import React, { useState, useEffect } from 'react'
import './content.css'
import foto2 from '../assets/foto-2.jpg'
import foto3 from '../assets/foto-3.jpg'
import foto4 from '../assets/foto-4.jpg'
import foto5 from '../assets/foto-5.jpg'
import icone from '../assets/power_mobile_logo.png'
import logoInsta from '../assets/instagram.png'
import logoInstaBranco from '../assets/instagram-branco.png'
import iconeCarro from '../assets/icone-carro.png'
import iconeRestaurant from '../assets/food.png'
import iconeFest from '../assets/drink.png'
import iconeSalon from '../assets/head.png'
import iconeLoja from '../assets/shop.png'
import iconeAcademy from '../assets/gym.png'
import introducaoImg1 from '../assets/background-image.jpg'
import introducaoImg2 from '../assets/bateria-iphone.jpg'
import iconeIntroducao1 from '../assets/idea.png'
import iconeIntroducao2 from '../assets/fun.png'
import carregador from '../assets/carregador.jpg'
import firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";


function Items(props){
    return(
        <div className='items-content'>
            <img src={props.item.image} alt="item"/>
            <strong>{props.item.title}</strong>
                <ul>
                {props.item.vantagems.map( vantagem =>(
                    <li key={vantagem}>{vantagem}</li>
                ))}
                </ul>
        </div>
    )
}


export default function Content(){

    useEffect(() => {

        const firebaseConfig = process.env.REACT_APP_FIREBASE 

          firebase.initializeApp(firebaseConfig)
    }, [])

    const [ name, setName ] = useState('')
    const [ empresa, setEmpresa ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ city, setCity ] = useState('')
    const [ email, setEmail ] = useState('')

    function sendData(){
         
        
        var contatos = firebase.database().ref("contato");

        contatos.push().set({
            nome: 'teste 1'
        })

    }

    return(
    <>
    <div class='content'>


        <div className='apresentacao'>
            <div className='background-apresentacao'>
            <h1>Fácil, Rápido e Seguro</h1>
           <h2>Uma nova forma de recarregar seu Celular</h2>
           
            <span className="link-insta"><a href='https://www.instagram.com/powermobile.br/' rel="noopener noreferrer" target="_blank">Acesse nosso Instagram e fique por dentro de todas as novidades <img src={logoInstaBranco} alt="Logo Instagram"/></a></span>
            </div>
        </div>
        <hr></hr>
        <div className='introducao'>
            <div className="introducao-text">
                <img src={iconeIntroducao1} />
                <h1>Torne sua empresa moderna</h1>
                <p>Destaque sua empresa dentre as outras levando modernidade e conformidade.</p>
            </div>
            <div className="introducao-img"><img src={introducaoImg1} /></div>
        </div>
        <div className='introducao'>
            <div className="introducao-text">
                <img src={iconeIntroducao2} />
                <h1>Mantenha seus clientes confortados</h1>
                <p>Forneça aos seus clientes experiências agradáveis e inesqueciveis. </p>
            </div>
            <div className="introducao-img"><img src={introducaoImg2} /></div>
        </div>
        <div className='about' id='about'>
            <h1>Quem Somos?</h1>
            <p>Somos uma empresa Brasileira, com sede em Recife-PE, que surgiu devido a necessidade da atualidade em se manter conectado em todo lugar e a todo momento.</p>

            <p>O que fazemos?
            Desenvolvemos soluções em carregamento para celulares para ambientes comerciais e eventos, atrelado a isso a publicidade estatica e mídia out of home.</p>
            <div className="icone-div">
            <img src={icone} className='icone-power-mobile' alt="Icone"/>
            </div>
        </div>
        <hr></hr>
        <div className='products' id="products">
            <div className="product-item">
            <h1>Produtos:</h1>
                <h2>TOTEM CARREGADOR</h2>
                <div className="products-img">
                    <img src={foto5} />
                    
                </div>

                <p>Ideal para qualquer tipo de situação, o totem carregador é a solução perfeita para quem quer divulgar seu produto e sua marca de uma maneira totalmente inovadora, ele possui 8 compartimentos com chaves, disponível em cada um deles multi-carregadores do tipo: Micro USB Universal, iPhone Lightning e Type C, levando ao seu cliente a facilidade de carregar o celular e outros dispositivos móveis importantes no dia-a-dia, com segurança, em qualquer lugar e a qualquer tempo.</p>

                <p>Dimensões:
                <ul>
                    <li><strong>Largura:</strong> 0,50 m</li>
                    <li><strong> Profundidade:</strong> 0,20 m</li>
                    <li><strong>Altura:</strong> 1,70 m</li>
                </ul>
                </p>
                <hr></hr>
                <h2>ESTAÇÃO DE RECARGA DE MESA</h2>
                <div className="products-img">
                    <img src={carregador} />
                </div>
                <p>Forneça um serviço adicional para seus clientes enquanto aguardam atendimento carregam o celular
Carregador de smartphones e tablets desenvolvido especialmente para mesas e bancadas de estabelecimentos.
Produto ideal para restaurantes, cafeterias, bar, lanchonete, consultórios médicos, salões de beleza e barbearias!
Possui display acrilico cristal com 10x15cm para colocar publicidade e local para colocar cartão de visitas.
Adquira estação de recarga para seu comércio para ninguém ficar sem carga na bateria! Tenha uma solução prática e segura para o carregamento de smartphones, tablets entre outros dispositivos recarregáveis em sua loja. Ofereça um serviço de recarga de bateria de alta qualidade e rapidez e utilize o painel acrílico para exposição de materiais de comunicação como, cardápios, avisos entre outros.</p>
                <p>
                Especificações:
                <ul>
                    <li><strong>Bateria:</strong> lítio</li>
                    <li><strong>Capacidade memória expansível:</strong>: 10.000 mAh</li>
                    <li><strong>Entrada:</strong> 5V/2.1a</li>
                    <li><strong>Saídas:</strong> 5V/6a</li>
                </ul>
                </p>
            </div>
        </div>
        <hr/>
        <div className="items-container">
            <h1>Quais as vantagens ao implantar os Carregadores em seu negócio?</h1>
            <div className="all-items">
            <Items item={{image: iconeCarro, title: 'Concessionárias',vantagems: ['Tenha total atenção durante o atendimento', 'Ofereça conforto enquanto seu cliente aguarda na loja']}}/>
            <Items item={{image: iconeRestaurant, title: 'Bares e Restaurantes',vantagems: ['Aumente o consumo matendo os clientes por mais tempo', 'Mantenha controle sobre os locais que tenham tomadas']}}/>
            <Items item={{image: iconeFest, title: 'Festas e Eventos',vantagems: ['conforto para os convidados', 'Evite que os convidados deixem celulares carregando em qualquer lugar arriscando a segurança']}}/>
            <Items item={{image: iconeSalon, title: 'Salões de Beleza',vantagems: ['Aumente o consumo de serviços mantendo clientes no estabelecimento por mais tempo', 'Ofereça conforto e diferenciais para seus clientes']}}/>
            <Items item={{image: iconeLoja, title: 'Lojas e Shoppings',vantagems: ['Tenha total atenção de seus clientes durante o atendimento', 'Ofereça alternativas para que o cliente não deixe o local caso seu celular descarregue']}}/>
            <Items item={{image: iconeAcademy, title: 'Acadêmias',vantagems: ['Alunos focados no treino facilita fluxo entre aparelhos', 'Disponha um diferencial e um local seguro para os celulares']}}/>
            </div>
        </div>

        <hr></hr>
        <div className='event' id="event">
            <h1>Eventos e Empresas</h1>
        
            <div className="slider-container">
                <div className='slider'>
                    <h3>Acelere Talks - 2020</h3>
                    <div id="sliderMain" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#sliderMain" data-slide-to="0" className="active"></li>
                            <li data-target="#sliderMain" data-slide-to="1"></li>
                            <li data-target="#sliderMain" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block  image-slider w-100" src={foto2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block image-slider w-100" src={foto3} alt="Third slide" />
                            </div>


                            <div className="carousel-item">
                            <img className="d-block image-slider w-100" src={foto4} alt="fourth slide" />
                            </div>
                
                            
                        </div>
                        <a className="carousel-control-prev" href="#sliderMain" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#sliderMain" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="anuncie" id="anuncie">
            <div className="anuncie-content">
                <h1>Ficou interessado em anunciar seu negócio conosco?</h1>
                <div className="banner">
                    <div>
                    <h1>Tire suas dúvidas, faça um orçamento sem compromisso agora mesmo!</h1>
                    <form onSubmit={sendData} className='form'>
                        <label htmlFor="name">Nome:</label>
                        <input 
                        id="name"
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Exemplo: José da Silva"
                        required
                        />
                        <label htmlFor="email">Email:</label>
                        <input 
                        id="email"
                        type='text'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Exemplo: josedasilva@gmail.com"
                        required
                        />
                        <label htmlFor="empresa">Empresa:</label>
                        <input 
                        id="empresa"
                        type='text'
                        value={empresa}
                        onChange={e => setEmpresa(e.target.value)}
                        placeholder="Exemplo: Power Mobile"
                        required
                        />
                        <label htmlFor="city">Cidade - Estado:</label>
                        <input 
                        id="city"
                        type='text'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder="Exemplo: Recife - PE"
                        required
                        />
                        <label htmlFor="number">Nome:</label>
                        <input 
                        id="number"
                        type='text'
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        placeholder="Exemplo: (00) 00000-0000"
                        required
                        />

                        <button type='submit'>Enviar</button>
                    </form>
                    </div> 
                </div>

            </div>
        </div>

        <div className='contact' id='contact'>
            <h1>Contatos</h1>
            <h3>Telefones:</h3>
            <p>(81) 99646-5599</p>
            <h3>Email: </h3>
            <p>contato@powermobilebr.com</p>
            <h3>Redes Socias: </h3>
            <a href="https://www.instagram.com/powermobile.br/" target='_blank' rel="noopener noreferrer"> <img src={logoInsta} alt="logo instagram"/></a>
        </div>
    </div>

    </>
    )
}