import './App.css'
import MyButton from './MyButton'

function App() {

  return (
    <>
      <div className={'bg-green-200'}>
        <h1>Botones</h1>
        <MyButton header2={'boton para aceptar'} text_button={'Aceptar'}/>
        <MyButton header2={'boton1'} text_button={' - 1 -'}/>
        <MyButton header2={'boton para volver atras'} text_button={'Cancelar'}/>
      </div>
    </>
  )
}

export default App
