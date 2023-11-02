import { useState } from "react"
import Input from "./Input"
import Button from './Button'
import useForm from "../Hooks/useForm"


const CarsForm = ({submit}) => {
    const [form, handleChange, reset] = useForm({nombre: '', edad: '', autoPreferido: ''})
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const nombreValido = form.nombre.length >= 3 && !form.nombre.startsWith(' ')
        const autoValido = form.autoPreferido.length >= 6
        const edadValida = !isNaN(form.edad)

        if (!nombreValido || !autoValido || !edadValida) {
            setError('🚨 Por favor, chequea que la información sea correcta 🚨')
            return
        }

        submit(form)
        reset()
        setError('')
    }

    return (
        <form onSubmit = {handleSubmit}>
            <Input label = {'Ingrese su nombre'}
            placeholder = {'Nombre'}
            name = {'nombre'}
            value = {form.nombre}
            onChange = {handleChange}
            />

            <Input label = {'Ingrese su edad'}
            placeholder = {'Edad'}
            name = {'edad'}
            value = {form.edad}
            onChange = {handleChange}
            />

            <Input label = {'Ingrese su auto preferido'}
            placeholder = {'Auto preferido'}
            name = {'autoPreferido'}
            value = {form.autoPreferido}
            onChange = {handleChange}
            />
            <Button>Enviar</Button>
            {error && <div className="text-guardsman-red-700 mt-2 font-bold text-[20px]">{error}</div>}
        </form>
    )
}

export default CarsForm
