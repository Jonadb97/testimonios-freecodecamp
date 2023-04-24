import './App.css';
import { Testimonio } from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeAlphaModeCodeBootCamp:</h1>
      <Testimonio
      imagen='perfil1'
      nombre='Fulanita Pérez'
      pais='Tailandia'
      cargo='Software Engineering'
      empresa='Warner Bros Discovery'
      testimonio='"Soy Fulanita, ingeniera de software en Warner Bros Discovery y creadora de "MindfulLife", una aplicación móvil que ayuda a los usuarios a encontrar momentos de calma y meditación en su día a día. He trabajado duro para asegurarme de que "MindfulLife" sea una herramienta útil y fácil de usar, y estoy emocionada de compartirlo con el mundo para ayudar a las personas a encontrar la paz interior y la felicidad en su vida cotidiana."'
      alt='Foto de Fulanita' />
      <Testimonio
      imagen='perfil2'
      nombre='Fulanito Martínez'
      pais='Finlandia'
      cargo='UI Designer'
      empresa='Panasonic'
      testimonio='"Soy Fulanito Martínez y trabajo en el equipo de diseño de la aplicación móvil de Panasonic. Estoy orgulloso del último lanzamiento, en el que trabajamos arduamente para asegurarnos de que la interfaz de usuario sea fácil de usar y tenga una apariencia moderna y elegante. El diseño se adaptó a las necesidades de los usuarios en colaboración con el equipo de desarrolladores. Si buscas una aplicación fácil de usar con una interfaz de usuario moderna y elegante, definitivamente deberías probar la aplicación móvil de Panasonic".'
      alt='Foto de Fulanito' />
      </div>
      <Testimonio
      imagen='perfil3'
      nombre='Menganita Gutierrez'
      pais='Checoslovakia'
      cargo='Machine Learning Specialist'
      empresa='Fiat'
      testimonio='"Mi nombre es Menganita Gutiérrez, y trabajo en el equipo de desarrollo de la próxima generación de vehículos autónomos de Fiat. Como especialista en Machine Learning, mi trabajo consiste en desarrollar algoritmos que permitan a los vehículos autónomos de Fiat tomar decisiones inteligentes en tiempo real. Estoy emocionada de ser parte de este proyecto innovador, y si estás interesado en el futuro de la tecnología de vehículos autónomos, te animo a seguir el trabajo de Fiat y el equipo de Machine Learning".' 
      alt='Foto de Menganita' />
      
      </div>
  );
}

export default App;
