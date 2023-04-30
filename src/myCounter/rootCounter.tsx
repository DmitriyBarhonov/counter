import { useState } from "react"
import s from './styleCounter.module.css'
import { Count } from "./viewCount/count"
import { SettingCounter } from "./setting/settingCounter";

export const RootCounter = () => {

    const [countValue, setCountValue] = useState(0)
    const [maxValueCount, setMaxValueCount] = useState(5)
    const [startValueCount, setStartValueCount] = useState(0)




    const clickIncr = () => {
        setCountValue(countValue =>countValue + 1)
    }

    const resetCounter = () => {
        setCountValue(0)
    }

    const handleSetMax = (value: number) => {
        setMaxValueCount(value)
    }
    console.log(`rerender root`);
    

    return (
        <div className={s.grid}>
            <Count startValueCount={startValueCount}
                maxValueCount={maxValueCount}
                countValue={countValue}
                clickIncr={clickIncr}
                resetCounter={resetCounter} />

                <SettingCounter />
        </div>

    )
}