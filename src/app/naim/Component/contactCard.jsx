import React from 'react'
import SectionTitle from './sectionTitle'
import Button from '@/Components/shared/button'

const ContactCard = ({ icon, text, text2, btn }) => {
    return (
        <div className='w-[384px] p-8 shadow-sm flex flex-col gap-4'>
            {icon}

            <SectionTitle text={text} />
            <SectionTitle text={text2} className={"font-normal text-[#456170]"} />

            <Button className='w-[163px] border !border-BtnColor !bg-transparent !text-BtnColor hover:!bg-BtnColor hover:!text-white duration-200 ease-linear'>
                {btn}
            </Button>
        </div>
    )
}

export default ContactCard