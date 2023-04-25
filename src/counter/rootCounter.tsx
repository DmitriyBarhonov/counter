import { useState } from "react"
import { ViewCounter } from "./viewCount/viewCounter"
import { SuperButton } from "./button/superButton"
import s from './styleCounter.module.css'


export const RootCounter = () => {
    console.log(1);
    
    const [count, setCount] = useState(0)

    const styleCount: string = count === 5 ? s.counter_max : ""
    const styleButtonDisableInc: string = count === 5 ? s.button_disable : s.button
    const styleButtonDisableReset: string = count === 0 ? s.button_disable : s.button


    const TITLE_BUTTON_INC = "inc"
    const TITLE_BUTTON_RESET = "reset"

    let disabledInc: boolean  = false
    let disabledReset: boolean  = false
    if (count >= 5) disabledInc = true 
    if (count === 0) disabledReset = true 

    const clickIncr = () => {
        setCount(count + 1)
        setCount(count + 1)
    }

    const resetCounter = () => {
        setCount(0)
    }

    return (
        <div className={s.wrapper_count}>
            <ViewCounter styleCount={styleCount} count={count} />
            <div>
                <SuperButton name={TITLE_BUTTON_INC} styleButton={styleButtonDisableInc} clickButton={clickIncr} disabled={disabledInc} />
                <SuperButton name={TITLE_BUTTON_RESET} styleButton={styleButtonDisableReset} clickButton={resetCounter} disabled={disabledReset} />
            </div>
        </div>
    )
}