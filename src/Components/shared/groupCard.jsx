import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Button from "./button";
  import Image from "next/image";
  
  
  
  const GroupCard = ({src1, src2, src3, src4, src5, CardTitleOne, secontTitle, loceation, review, person, description, cardOne, cardTwo, time, cardThree, cardFour, price, lastBtn, Hour, className}) => {
    return (
      <Card className={`w-full md:w-[588px] py-5 ${className}`}>
       
        <div className="flex">
        <CardHeader className="">
          <Image
             src={src1}
             alt="alt"
             className=' '
          />
          </CardHeader>
          <CardHeader className="">
          <CardTitle className="font-extrabold text-base text-primaryColor">{CardTitleOne} </CardTitle>
          <div className="flex gap-2">
              <Image
             src={src2}
             alt='alt'
             className=' '
          />
          <CardDescription className="font-medium text-[12px] text-primaryColor opacity-40">{loceation}</CardDescription>
          
          </div>
          <div className="flex">
                  <Image
                  src={src3}
                  alt='alt'
                  className=''
                  />
                 
                  <p className="text-gray-500 font-normal text-sm pl-2 mt-[2px]">{review}</p>
            </div>
          </CardHeader>
          
        </div>
        {/* ------ */}
  <div className="border-t border-[#E2E5F1] px-10 ml-5 mr-5"></div>
        <CardDescription className="font-bold text-primaryColor text-base ml-7 mt-2">{secontTitle}</CardDescription>
  
       <div className="flex ml-7 mt-1 gap-x-5">
       <div className="flex">
       <Image
                  src={src4}
                  alt='alt'
                  className='mr-1'
                  />
       <CardDescription className="font-medium text-[12px] text-primaryColor opacity-40 pt-1">{person}</CardDescription>
       </div>
       <div className="flex">
       <Image
                  src={src5}
                  alt='alt'
                  className='mr-1'
                  />
       <CardDescription className="font-medium text-[12px] text-primaryColor opacity-40 pt-1"> {time} </CardDescription>
       </div>
  
       </div>
            {/* peragraph start */}
      <CardContent className="flex gap-x-2">
      <p className="text-gray-500 text-md font-normal leading-6"> {description} </p>
      </CardContent>
      {/* peragraph end */}
  
      {/*  btn start */}
      <CardContent className="flex gap-2 mr-2 w-full flex-wrap">
          <Button className="font-normal text-[12px] !text-primaryColor   h-[36px] !rounded-[43px] !bg-BgColor">
           {cardOne}
          </Button>
          <Button className="font-normal text-[12px] !text-primaryColor   h-[36px] !rounded-[43px] !bg-BgColor">
          {cardTwo}
          </Button>
          <Button className="font-normal text-[12px] !text-primaryColor !px-2   h-[36px] !rounded-[43px] !bg-BgColor">
          {cardThree}
          </Button>
          <Button className="font-normal text-[12px] !text-primaryColor !px-2  h-[36px] !rounded-[43px] !bg-BgColor">
          {cardFour}
          </Button>
        
      </CardContent>
      {/* btn end */}
  
  
       {/* last btn start */}
      <CardFooter className="flex justify-between">
          <div className="flex">
          <h3 className="font-extrabold text-[20px] text-primaryColor">{price}</h3> <span className="font-normal text-[12px] text-primaryColor opacity-40 pt-2">{Hour}</span>
          </div>
         <Button className="!bg-MenuHColor !text-BtnColor">
          {lastBtn}
         </Button>
      </CardFooter>
      {/* last btn end */}
    </Card>
    );
  };
  
  export default GroupCard;
  