import React, { ChangeEvent, useEffect, useState } from "react"
import { SuperButton } from "../button/superButton"
import s from "../styleCounter.module.css"

type SettingCounterType = {
    handlerSettingNewValues: (maxValue: number, startValue: number) => void
    startValueCount: number
}

export const SettingCounter: React.FC<SettingCounterType> = ({ handlerSettingNewValues, startValueCount }) => {

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(startValueCount)

    useEffect(() => {
        const storedStartValue = localStorage.getItem('startValue');
        const storedMaxValue = localStorage.getItem('maxValue');
        setStartValue(Number(storedStartValue));
        setMaxValue(Number(storedMaxValue));
        handlerSettingNewValues(Number(storedMaxValue), Number(storedStartValue))
    }, []);



    useEffect(() => {
        localStorage.setItem('startValue', startValue.toString())
        localStorage.setItem('maxValue', maxValue.toString())
    }, [startValue, maxValue])


    const setNewValue = () => {
        handlerSettingNewValues(maxValue, startValue)
    }
    const setMaxValueCallbAck = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value))
    }
    const setStartValueCallbAck = (e: ChangeEvent<HTMLInputElement>) => {
        if (maxValue > +e.currentTarget.value) setStartValue(parseInt(e.currentTarget.value))
    }



    return (
        <div>
            <div>
                <div><label>Max value <input value={maxValue} onChange={setMaxValueCallbAck} type="number" /></label></div>
                <div><label>Start value<input value={startValue} onChange={setStartValueCallbAck} type="number" /></label></div>
            </div>
            <SuperButton styleButton={s.button} clickButton={setNewValue} name='Set' />
        </div>
    )
}