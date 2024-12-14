"use client"
import React, { useState } from 'react'
import CompareList from './compareList'
import { Input } from '@/Components/ui/input'
import Button from '@/Components/shared/button'
import { Drop, Search } from '../icons'
import EmptyProduct from './emptyProduct'

const ComparePage = () => {
    let arr = ["Apple", "Apricot", "Appetizer", "Banana", "Basil", "Baklava", "Cod", "Cody"]
    const [val, setval] = useState([])
    let [sugs, setsugs] = useState([])
    let [search, setsearch] = useState("")

    function change(e) {
        let suggestion = arr.filter((data) => {
            if (e.target.value !== "") {
                return data.toLowerCase().startsWith(e.target.value.toLowerCase())
            } else {
                return false
            }
        })
        setsugs(suggestion)
        setsearch(e.target.value)
    }

    function sumbit(e) {
        e.preventDefault()
        val.push(search)
        setsugs([])
    }

    return (
        <div className='container'>

            <div className="search w-[702px] mx-auto">
                <form onSubmit={sumbit} className="h-[48px] w-full flex justify-between mt-[80px]">
                    <div className="relative w-[548px]">
                        <Search className={"absolute top-1/2 -translate-y-1/2 left-4"} />
                        <Input onChange={change} placeholder="Search Group" className="w-full h-full pl-[48px] rounded-[6px]" />
                        <Drop className={"absolute top-1/2 -translate-y-1/2 right-4"} />
                    </div>
                    <Button type="submit" className='font-bold text-base'>
                        Add Group
                    </Button>
                </form>

                <div className={`h-[100px] w-[548px] shadow-md p-4 overflow-auto ${sugs == false ? "hidden" : "block"}`}>
                    {
                        sugs.map((el, idx) => {
                            return (
                                <li className='text-base text-[#333] list-none font-medium' key={idx}>{el}
                                </li>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-[24px] mb-[180px]">
                {
                    val == false ?
                        <EmptyProduct /> :
                        <CompareList />
                }
            </div>
        </div>
    )
}

export default ComparePage