import React from 'react'
import SectionTitle from './sectionTitle'
import RvwCard from './rvwCard'
import { Star } from '../icons'

const ReviewPeer = () => {
    return (
        <div>
            <SectionTitle text={`Review Summary`} />

            <div className="flex flex-col space-y-5 mt-5 mb-16">
                <RvwCard comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"} />
                <RvwCard comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"} />
                <RvwCard comment={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"} />
            </div>

            <SectionTitle text={`Review`} />

            <div className="flex flex-col space-y-6 my-8">
                <RvwCard comment={"I've improved my negotiation skill thank to this course."}
                    star={<Star className={`w-[16px] h-[16px]`} />} />

                <RvwCard comment={"I've improved my negotiation skill thank to this course."}
                    star={<Star className={`w-[16px] h-[16px]`} />} />

                <RvwCard comment={"I've improved my negotiation skill thank to this course."}
                    star={<Star className={`w-[16px] h-[16px]`} />} />
            </div>

        </div>
    )
}

export default ReviewPeer