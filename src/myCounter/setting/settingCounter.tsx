import React, { ChangeEvent, useState } from "react"
import { SuperButton } from "../button/superButton"
import s from "../styleCounter.module.css"

type  SettingCounterType = {
    handlerSettingNewValues: (maxValue: number, startValue: number) => void
}

export const SettingCounter: React.FC<SettingCounterType> = ({handlerSettingNewValues}) => {

    // const {maxValueProps} = props

    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)


    const setNewValue  = () => {
        handlerSettingNewValues(maxValue,startValue)
    }
    const setMaxValueCallbAck  = (e:  ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        
        setMaxValue(parseInt(e.currentTarget.value))
    }
    const setStartValueCallbAck  = (e:  ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setStartValue(parseInt(e.currentTarget.value))
    }


    return (
        <div>
            <div>
                <div><label>Max value <input value={maxValue} onChange={setMaxValueCallbAck} type="number" /></label></div>
                <div><label>Start value<input value={startValue} onChange={setStartValueCallbAck} type="number" /></label></div>
            </div>
            <SuperButton  styleButton={s.button} clickButton={setNewValue} name='Set' />
        </div>
    )
}