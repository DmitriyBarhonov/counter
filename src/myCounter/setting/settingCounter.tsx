import React, { ChangeEvent, useState } from "react"
import { SuperButton } from "../button/superButton"
import s from "../styleCounter.module.css"
type  SettingCounterType = {
    maxValueProps?: number
}

export const SettingCounter: React.FC<SettingCounterType> = (props) => {

    // const {maxValueProps} = props

    const [maxValue, setMaxValue] = useState()


    const HandlerClick  = () => {
        console.log(1);
        
    }
    const setMaxValueCallbAck  = (e:  any) => {
        setMaxValue( e.currentTarget.value)
        console.log(maxValue);
    }


    return (
        <div>
            <div>
                <div><label>Max value <input value={maxValue} onChange={setMaxValueCallbAck} type="number" /></label></div>
                <div><label>Start value<input type="number" /></label></div>
            </div>
            <SuperButton  styleButton={s.button} clickButton={HandlerClick} name='Set' />
        </div>
    )
}