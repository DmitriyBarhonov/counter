import React from "react"
type ViewCounterPropsType = {
    count: number
    styleCount: string

}
export const ViewCounter: React.FC <ViewCounterPropsType> = (props)=>{


    return (
        <>
            <div className={props.styleCount}>{props.count}</div>
        </>
    )
}