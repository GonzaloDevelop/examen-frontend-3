import { useState } from 'react'
import Card from './Components/Card'
import Container from './Components/Container'
import CarsForm from './Components/CarsForm'

function App() {
  const [cars, setCars] = useState([])

  const submit = car => {
    setCars([...cars, car])
  }

  return (
    <div className='m-[15%] font-sans'>
      <Container>
        <Card>
          <div>
            <CarsForm submit = {submit}/>
          </div>
        </Card>
        <Card>
          <ul>
            {cars.map((x, index) => (
              <li key={index}>
                <p>¡Hola, {x.nombre}!</p>
                <p>Sabemos que tu auto preferido es: {x.autoPreferido}</p>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App
