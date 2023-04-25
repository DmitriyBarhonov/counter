import { click } from "@testing-library/user-event/dist/click"
import React from "react"
import s from '../styleCounter.module.css'
type ButtonIncrType = {
    clickButton: ()=> void
    styleButton: string
    disabled?: boolean
    name: string
}
export const SuperButton: React.FC <ButtonIncrType> = (props)=>{
    

    return (
        <>
            <button  className={props.styleButton} disabled={props.disabled} onClick={props.clickButton}>{props.name}</button>
        </>
    )
}