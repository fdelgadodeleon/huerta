import React from 'react'
import './Home.css'

const Home = ({}) => {
    return (
        <div>
            <input placeholder="Buscar"/>
            <div className="itemsContainer">
                <div className="card">
                    <img alt="lechuga" src={require('../../assets/lechuga.jpg')}/>
                    <div className="info">
                        <h4>Lechuga</h4>
                        <p>La lechuga es una hortaliza muy popular que se cultiva por sus grandes hojas que en algunos casos se aprietan formando repollos más o menos compactos. Existen muchísimas variedades de esta verdura, y el número aumenta cada año. Las propiedades nutritivas de esta planta son escasas, siendo un alimento bajo en calorías que aporta algunas vitaminas y minerales.</p>
                    </div>
                </div>
                <div className="card">
                    <img alt="rucula" src={require('../../assets/rucula.jpg')}/>
                    <div className="info">
                        <h4>Rúcula</h4>
                        <p>Es un vegetal de hoja que puede sembrarse todo el año. Las hojas tienen un sabor entre picante y amargo, y se consumen crudas en ensaladas o también cocidas, al tiempo que se aplican en la decoración de platos. Las flores son muy vistosas en forma de cruz, con pétalos blancos con algunas estrías verdes o violáceas, y son de excelente sabor. Se utilizan para decoración o aderezos. Las hojas más viejas son más picantes y pueden incluirse en salsas, sopas y como aderezo de pizzas.</p>
                    </div>
                </div>
                <div className="card">
                    <img alt="tomate" src={require('../../assets/tomate.jpg')}/>
                    <div className="info">
                        <h4>Tomate</h4>
                        <p>El tomate es la hortaliza de mayor importancia en el mundo. Se cultiva en todo el mundo, siendo los principales países productores China y Estados Unidos. Se consume de múltiples maneras, tanto en crudo como procesado para la industria. Hoy en día existen multitud de variedades, cultivadas durante todo el año, y con frutos de distintos tamaños, formas y colores. Además, es un alimento rico en fibra y bajo en calorías que aporta vitaminas y minerales.</p>
                    </div>
                </div>
                <div className="card">
                    <img alt="albahaca" src={require('../../assets/albahaca.jpg')}/>
                    <div className="info">
                        <h4>Albahaca</h4>
                        <p>Es una planta anual herbácea que presenta los tallos erguidos que pueden alcanzar una altura de 60 cm. Las hojas son pecioladas, ovaladas, lanceoladas, de dimensiones muy variables según la especie, tal como su color que varía del verde intenso al verde oscuro, al morado o al púrpura según las variedades. Las hojas son ricas en aceites esenciales que le otorgan el característico aroma.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;