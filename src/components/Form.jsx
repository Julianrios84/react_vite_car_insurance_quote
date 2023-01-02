import { Fragment } from 'react'
import { Marks, Years, Plans} from '../constants'
import useQuote from '../hooks/useQuote'
import Error from './Error'

const Form = () => {

    const { data, handleChangeData, error, setError, quoteInsurance } = useQuote()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(data).includes('')) {
            setError('All fields are required')
            return
        }

        setError('')
        quoteInsurance()
    }
    
  return (
    <>
        {error && <Error />}
        <form
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Mark
                </label>
                <select
                    name="mark"
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={ e => handleChangeData(e)}
                    value={data.mark}
                >
                    <option value="">-- Select mark --</option>

                    {Marks.map(mark => (
                        <option
                            key={mark.id}
                            value={mark.id}
                        >
                            {mark.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Year
                </label>
                <select
                    name="year"
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={ e => handleChangeData(e)}
                    value={data.year}
                >
                    <option value="">-- Select year --</option>

                    {Years.map(year => (
                        <option
                            key={year}
                            value={year}
                        >
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Choose a plan
                </label>
                <div className='flex gap-3 items-center'>
                    {Plans.map(plan => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.name}
                            </label>
                            <input
                                type="radio"
                                name="plan"
                                value={plan.id}
                                onChange={ e => handleChangeData(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>

            <input 
                type="submit"
                className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
                value="Quote"
            />
        </form>
    </>
  )
}

export default Form