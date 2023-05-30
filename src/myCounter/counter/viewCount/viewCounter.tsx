import React, { useEffect } from "react"
import s from '../styleCounter.module.css'
type ViewCounterPropsType = {
    countValue: number
    styleCount: string

}
export const ViewCounter: React.FC <ViewCounterPropsType> = ({styleCount,countValue})=>{

 

    return (
        <>
            <div className={styleCount}>{countValue}</div>
        </>
    )
}