import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className = 'App'>
      <div className = 'contenedor-principal'>
        <h1>Esto es lo que dicen los expertos sobre el éxito de los hombres más ricos del mundo</h1>
      <Testimonio 
      nombre='Elon Musk'
      pais='Sudafrica'
      imagen='elon'
      cargo='CEO'
      empresa='Tesla y SpaceX'
      testimonio='Muy pocas son las personas que se animan a emprender un negocio propio, pues es un camino complicado y lleno de incertidumbres. Pero muchas veces quien se ha animado a emprender un primer negocio, lo encuentra tan apasionante que se vuelve su estilo de vida y emprende un negocio tras otro.'/>

      <Testimonio
      nombre='Jeff Bezos'
      pais='EE.UU'
      imagen='jeff'
      cargo='CEO'
      empresa='Amazon'
      testimonio='Según un informe de la BBC, Bezos tuvo bien claros sus objetivos hace 25 años, cuando renunció a su empleo, el cual era muy bien pagado y que tuvo que estar 100% decidido para dejar su cargo en un banco de inversiones de Wall Strett. Luego de ello, el 5 de julio de 1994, Bezos decide fundar Amazon desde la cochera de la casa de sus padres en Seattle.'/>

      <Testimonio
      nombre='Mark Zuckerberg'
      pais='EE.UU'
      imagen='mark'
      cargo='CEO'
      empresa='Facebook'
      testimonio='Los Millennials lo admiran. Y de hecho no sólo ellos, pero lo cierto es que resulta aún más difícil no identificarse con alguien de la misma generación que uno, y Mark hoy por hoy tiene 30 años. De acuerdo con cifras de Statista, el 53% de los usuarios activos de Facebook a nivel mundialque son alrededor de 1.59 mil millones tienen entre 16 y 35 años de edad.
      Seguramente ni tú ni yo lo conocemos en persona, pero por alguna razón, tras haber pasado la última década -o un poco menos- suscritos a dicha plataforma, pensamos que en el fondo sí sabemos quién es realmente Mark Zuckerberg.'/>
      </div>
    </div>
  );
}

export default App;