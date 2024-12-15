import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Drop } from '../icons'
import { Frequently } from '../frequently';

const Questions = () => {
    const [active, setactive] = useState(null);

    function activeClick(index) {
        active == index ? setactive(null) : setactive(index)
    }
   

    return (
        <div className='w-[926px] mx-auto'>
            <Accordion type="single" collapsible className='flex flex-col gap-y-6'>
                {
                    Frequently.map((el, idx) => (
                        <AccordionItem key={idx} value={`item-${idx + 1}`} className="rounded-[8px] shadow px-6">
                            <AccordionTrigger onClick={() => activeClick(idx)} className="hover:!no-underline !font-semibold !text-base !text-primaryColor">
                                {el.title}
                                <Drop className={`bg-[#FCE1E3] duration-100 ease-linear p-3 !h-[36px] !w-[36px] !rounded-full ${active == idx ? "!bg-BtnColor !stroke-white" : false}`} />
                            </AccordionTrigger>
                            <AccordionContent className="!text-[#607D8B] !text-sm">
                                {el.contant}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}

export default Questions