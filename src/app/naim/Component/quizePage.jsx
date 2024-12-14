"use client"
import React, { useEffect, useState } from 'react'
import { qsData } from './quzieData'
import QuizeLeft from './quzieLeft'
import QuizeRight from './quzieRight'

const QuizePage = () => {
    let [index, setindex] = useState(0)
    let [qs, setqs] = useState(qsData[index])
    let [bar, setbar] = useState({
        one: 0,
        two: 0,
        three: 0,
        four: 0,
    })


    function inc() {
        if (index == 4) {
            setindex(4)
            setqs(qsData[index])
        }
        else if (index < qsData.length) {
            setindex(++index)
            setqs(qsData[index])
        }

        if (index == 1) {
            setbar((prev) => ({ ...prev, one: 100 }))
        }
        else if (index == 2) {
            setbar((prev) => ({ ...prev, two: 100 }))
        }
        else if (index == 3) {
            setbar((prev) => ({ ...prev, three: 100 }))
        }
        else if (index == 4) {
            setbar((prev) => ({ ...prev, four: 100 }))
        }
    }

    function dec() {
        if (index == 0) {
            setindex(0)
            setqs(qsData[index])
        }
        else {
            setindex(--index)
            setqs(qsData[index])
        }


        if (index == 0) {
            setbar((prev) => ({ ...prev, one: 0 }))
        }
        else if (index == 1) {
            setbar((prev) => ({ ...prev, two: 0 }))
        }
        else if (index == 2) {
            setbar((prev) => ({ ...prev, three: 0 }))
        }
        else if (index == 3) {
            setbar((prev) => ({ ...prev, four: 0 }))
        }

    }


    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <QuizeLeft idx={index} />

                <div className="w-[578px] py-[30px] bg-white rounded-[20px]">
                    <div className="w-[482px] mx-auto">
                        <div className="flex space-x-3 items-center justify-center mb-[32px]">

                            {/* 1st point  */}
                            <span className={`w-3 h-3 rounded-full bg-BtnColor`}></span>

                            <div className="w-[54px] rounded-full overflow-hidden h-[5px]">
                                <div className={`bg-BtnColor ${bar.one == 100 ? "w-full" : "w-[0px]"}  h-full`}></div>
                            </div>
                            {/* 1st point  */}

                            {/* 2nd point  */}
                            <span className={`w-3 h-3 rounded-full ${bar.one == 100 ? "bg-BtnColor" : "bg-[#919EAB]"}`}>
                            </span>

                            <div className="w-[54px] rounded-full overflow-hidden h-[5px]">
                                <div className={`bg-BtnColor ${bar.two == 100 ? "w-full" : "w-[0px]"} h-full`}></div>
                            </div>
                            {/* 2nd point  */}

                            {/* 3rd point  */}
                            <span className={`w-3 h-3 rounded-full ${bar.two == 100 ? "bg-BtnColor" : "bg-[#919EAB]"}`}>
                            </span>

                            <div className="w-[54px] rounded-full overflow-hidden h-[5px]">
                                <div className={`bg-BtnColor ${bar.three == 100 ? "w-full" : "w-[0px]"} h-full`}></div>
                            </div>
                            {/* 3rd point  */}

                            {/* 4th point  */}
                            <span className={`w-3 h-3 rounded-full ${bar.three == 100 ? "bg-BtnColor" : "bg-[#919EAB]"}`}>
                            </span>

                            <div className="w-[54px] rounded-full overflow-hidden h-[5px]">
                                <div className={`bg-BtnColor ${bar.four == 100 ? "w-full" : "w-[0px]"} h-full`}></div>
                            </div>
                            {/* 4th point  */}

                            {/* 5th point  */}
                            <span className={`w-3 h-3 rounded-full ${bar.four == 100 ? "bg-BtnColor" : "bg-[#919EAB]"}`}>
                            </span>

                        </div>

                        <QuizeRight data={qs} continueFun={inc} backFun={dec} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizePage