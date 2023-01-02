import { useState, createContext } from 'react'
import { obtainDifferenceYear, calculateMark, calculatePlan, formatMoney} from '../helpers'

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

    const [data, setData] = useState({
        mark: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeData = e => {
      setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = () => {
        // Una base 
        let result = 2000

        // Obtener diferencia de años
        const difference = obtainDifferenceYear(data.year)

        // Hay que restar el 3% por cada año
        result -= ((difference * 3) * result) / 100

        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        result *= calculateMark(data.mark)

        // Básico 20%
        // Completo 50%
        result *= calculatePlan(data.plan)

        // Formatear Dinero
        result = formatMoney(result)

        setLoading(true)

        setTimeout(() => {
            setResult(result)
            setLoading(false)
        }, 1000);
    }


    return(
        <QuoteContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                quoteInsurance,
                result,
                loading
            }}
        >
            {children}
        </QuoteContext.Provider>
    )
}

export { 
  QuoteProvider
}
export default QuoteContext