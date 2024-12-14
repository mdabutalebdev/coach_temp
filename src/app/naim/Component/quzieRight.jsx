import React from 'react'
import { LeftArr } from '../icons'

const QuizeRight = ({ data, continueFun, backFun }) => {

    const { question } = data

    return (
        <form id="step-form" className="flex flex-col gap-[48px]">

            <div className="space-y-6">
                {
                    question.map((el, idx) => (
                        <div key={idx}>
                            <label htmlFor="industry" className="block text-base font-semibold text-primaryColor mb-[10px]">
                                {idx + 1}. {el.qs}
                            </label>
                            <div className="relative border rounded-md p-[14px] w-full h-[56px]">
                                <p className='text-[12px] text-[#919EAB] absolute -top-[10px] bg-white'>
                                    {el.stType}
                                </p>
                                <select id="current-role" className="w-full h-full text-base text-[#212B36] border-gray-300 outline-none">
                                    {
                                        el.op.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-between">
                <button onClick={backFun} type="button" id="leftArr">
                    <LeftArr />
                </button>
                <button onClick={continueFun} type="button" id="continue-button"
                    className="w-[106px] h[48px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
                    Continue
                </button>
            </div>
        </form>
    )
}

export default QuizeRight