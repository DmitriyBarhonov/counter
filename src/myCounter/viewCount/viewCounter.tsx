import React from "react"
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