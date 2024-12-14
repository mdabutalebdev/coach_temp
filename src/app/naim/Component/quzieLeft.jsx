import React from 'react'

const QuizeLeft = ({ idx }) => {
    return (
        <div>
            <div className="w-[468px]">
                <h1 className="text-primaryColor text-[24px] font-semibold">{idx + 1} of 5</h1>
                <h2 className="text-[40px] font-semibold text-primaryColor leading-[50px] mt-8">
                    Peer Group Preferences & Challenges and Areas for Support</h2>
                <p className="text-primaryColor font-medium text-base mt-8">
                    Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text
                </p>
            </div>
        </div>
    )
}

export default QuizeLeft