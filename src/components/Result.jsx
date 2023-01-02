import { Fragment, useCallback, useMemo, useRef } from 'react'
import useQuote from "../hooks/useQuote"
import { Marks, Plans } from '../constants'

const Result = () => {
    const {result, data } = useQuote()
    const {mark, plan, year } = data
    const yearRef = useRef(year)

    const [nameMark] = useCallback( 
        Marks.filter(m => m.id === Number(mark) ), 
        [result]
    )
    const [namePlan] = useCallback( 
      Plans .filter(p => p.id === Number(plan) ), 
        [result]
    )

    if(result === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resume
            </h2>

            <p className="my-2">
                <span className="font-bold">Mark: </span>
                {nameMark.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {namePlan.name}
            </p>

            <Fragment>
            <p className="my-2">
                <span className="font-bold">Auto year: </span>
                {yearRef.current}
            </p>
            </Fragment>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total price: </span>
                {result}
            </p>
        </div>
    )
}

export default Result