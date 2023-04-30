import React from "react"
type ViewCounterPropsType = {
    countValue: number
    styleCount: string

}
export const ViewCounter: React.FC <ViewCounterPropsType> = (props)=>{


    return (
        <>
            <div className={props.styleCount}>{props.countValue}</div>
        </>
    )
}