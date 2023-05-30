import { useEffect, useState } from "react"
import s from './styleCounter.module.css'
import { Count } from "./counter/count"
import { SettingCounter } from "./setting/settingCounter";
import { log } from "console";

export const RootCounter = () => {

    const [countValue, setCountValue] = useState(0)
    const [maxValueCount, setMaxValueCount] = useState(5)
    const [startValueCount, setStartValueCount] = useState(0)   

    const clickIncr = () => {
        setCountValue(countValue =>countValue + 1)
    }

    const resetCounter = () => {
        setCountValue(startValueCount)
    }

    const handlerSettingNewValues = (maxValue: number, startValue: number) => {
        setMaxValueCount(maxValue)
        setStartValueCount(startValue)
        setCountValue(startValue)
    }
    

    
    return (
        <div className={s.grid}>
            <Count startValueCount={startValueCount}
                maxValueCount={maxValueCount}
                countValue={countValue}
                clickIncr={clickIncr}
                resetCounter={resetCounter} 
                />
                <SettingCounter   startValueCount={startValueCount} handlerSettingNewValues={handlerSettingNewValues} />
        </div>

    )
}