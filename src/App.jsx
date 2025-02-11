import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import alegif1 from "./assets/alegif1.gif";
import ale1 from "./assets/ale1.jpg";
import ale2 from "./assets/ale2.jpg";
import ale3 from "./assets/ale3.jpg";
import ale4 from "./assets/ale4.jpg";
import ale5 from "./assets/ale5.jpg";
import ale6 from "./assets/ale6.jpg";
import ale7 from "./assets/ale7.jpg";
import ale8 from "./assets/ale8.jpg";
import ale9 from "./assets/ale9.jpg";
import ale10 from "./assets/ale10.jpg";
import ale11 from "./assets/ale11.jpg";
import Confetti from "react-canvas-confetti";
import { useRef } from "react";



function App() {
  const [count, setCount] = useState(0)
  const [modalVisible, setModalVisible] = useState(false);
  const confettiRef = useRef(null);


  // Función para activar los fuegos artificiales
  const handleClose = () => {
    setModalVisible(false); // Cierra el modal
    confettiRef.current && confettiRef.current(); // Dispara los fuegos artificiales
  };

  // Configuración de los fuegos artificiales
  const fireConfetti = () => {
    return {
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    };
  };



  return (
    <>
      
      <div>
        <div className='divalegif1'>
          <img src={alegif1} alt="Animación" className='alegif1' />
            <div className='textodiv'>
              <p className='textoheader'>Valentn</p>
              <p className='numeroheader'>2025</p>
            </div>  
        </div>
  <div className='bodycompleto'>
      <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Otro San Valentín a tu lado, siendo el mas afortunado.</p>
          <img className='fotosbody' src={ale1} alt="Imagen Ale 1" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Collage de nuestro intercambio donde pudimos crecer como pareja y personas:</p>
          <img className='fotosbody' src={ale2} alt="Imagen Ale 2" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Mi país favorito, con mi persona favorita</p>
          <img className='fotosbody' src={ale3} alt="Imagen Ale3 " />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Como olvidar cuando aprendimos sobre el significado de la "Fika".</p>
          <img className='fotosbody' src={ale4} alt="Imagen Ale 4" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Mi atardecer favorito.</p>
          <img className='fotosbody' src={ale6} alt="Imagen Ale 6" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Marruecos, un viaje diferente donde pudimos cruzar algunas adversidades...</p>
          <img className='fotosbody' src={ale7} alt="Imagen Ale 7" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Quiero decirte que estoy muy agradecido por tener una persona tan linda que me escucha y me apoya siempre.</p>
          <img className='fotosbody' src={ale8} alt="Imagen Ale 8" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Independientemente de las circunstancias y dificultades.</p>
          <img className='fotosbody' src={ale9} alt="Imagen Ale 9" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Por esto mismo, se que eres la persona con la que quiero estar el resto de mis dias.</p>
          <img className='fotosbody' src={ale10} alt="Imagen Ale 10" />
        </div>
        </div>

        <div className='body'>
        <div className='fotosdiv'>
          <p className='textobody'>Las palabras estan demás para expresarte lo que siento, mis acciones dia con dia te lo demostrarán.</p>
          <img className='fotosbody' src={ale11} alt="Imagen Ale 10" />
          <p className='teamo'>Te amo </p>
        </div>
        </div>

    </div>

      </div>
      

      <div className='divpropuesta'>
        <div className='propuesta'>
            <p className='textopropuesta'>Este 14 de febrero de 2025. </p>
            <p className='textopropuesta2'>¿Quieres ser mi San Valentín? </p>
        </div>
        <div className='divbotones'>
        <button className='botonpropuesta' onClick={() => setModalVisible(true)}>
          Si
        </button>
        <button className='botonpropuesta' onClick={() => setModalVisible(true)}>
          Si
        </button>
        </div>
      </div>


      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Muy bien Wakis</h2>
            <p>Te espero arreglada y bien preciosa el viernes a las 21:30 hrs en tu depa. </p>
            <button onClick={() => setModalVisible(false)} className='botonconfirmo' >
              Confirmo
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
