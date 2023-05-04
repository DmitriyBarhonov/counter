import { ViewCounter } from "./viewCounter"
import { SuperButton } from "../button/superButton"
import s from '../styleCounter.module.css'
import React from "react"

type CountPropsType = {
    countValue: number
    maxValueCount: number
    startValueCount: number
    resetCounter: () => void
    clickIncr: () => void
}

export const Count: React.FC<CountPropsType> = (props) => {
    const { countValue, clickIncr, resetCounter, maxValueCount, startValueCount } = props

    const TITLE_BUTTON_INC = "inc"
    const TITLE_BUTTON_RESET = "reset"

    const styleCount: string = countValue === maxValueCount ? s.counter_max : ""
    const styleButtonDisableInc: string = countValue === maxValueCount ? s.button_disable : s.button
    const styleButtonDisableReset: string = countValue === startValueCount ? s.button_disable : s.button

    return (
        <>
            <div className={s.wrapper_count}>
                <ViewCounter styleCount={styleCount} countValue={countValue} />
                <div>
                    <SuperButton name={TITLE_BUTTON_INC} styleButton={styleButtonDisableInc} clickButton={clickIncr} disabled={countValue >= maxValueCount} />
                    <SuperButton name={TITLE_BUTTON_RESET} styleButton={styleButtonDisableReset} clickButton={resetCounter} disabled={countValue === startValueCount} />
                </div>
            </div>
        </>
    )
}