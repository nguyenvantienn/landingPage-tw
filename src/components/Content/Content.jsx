import {FaUser} from 'react-icons/fa'
import {BsFillCreditCardFill} from 'react-icons/bs'
// import {useSpring ,animated} from 'react-spring'
import {useSpring , animated} from 'react-spring'

import checkIconMobile from '../../Img/mobile/checkpoint.svg'

const Content =() =>{
    // console.log(checkIconMobile);
    const customer = useSpring({ customers :10245 , from: {customers: 0} });
    const card = useSpring({cards: 101245 ,from :{cards: 0} })
    return (
        <section className="">
            <div className="ml-[70px] mr-[54px] text-bold flex-col items-center flex item-center bg-gradient-to-b shadow-md from-white/40 to-transparent rounded-[24px] ">
                <div className="mt-16 flex items-center">
                    <FaUser size={"24px"} className='mr-[26px] mb-[32px]'/>
                    <div className='text-26'>
                        <animated.div>
                            {customer.customers.to((val)=>Math.floor(val))}
                        </animated.div>
                        <p className='text-13 font-semibold mb-[36px]'>Customers</p>
                    </div>
                </div>
                <div className="flex items-start mb-16">
                    <BsFillCreditCardFill size={'22px'} className='mt-[16px] mr-[26px]'/>
                    <div className="text-26">
                        <animated.div>
                            {card.cards.to((val)=>Math.floor(val))}
                        </animated.div>
                        <div className="text-13 font-semibold">Card Issued</div>
                    </div>
                </div>
            </div>
            <div className='text-13 flex flex-col w-[100%] mt-[90px] font-semibold'>
                <div className="mb-[23px] flex gap-8 ml-[70px] mr-[29px] items-center">
                    <img src={checkIconMobile} alt="" />
                    <p> Card reports sent to your phone every weeks</p>
                </div>
                <div className="mb-[23px] flex gap-8 ml-[70px] mr-[29px] items-center">
                    <img src={checkIconMobile} alt="" />
                    <p> No external fees</p>
                </div>
                <div className="mb-[23px] flex gap-8 ml-[70px] mr-[29px] items-center">
                    <img src={checkIconMobile} alt="" />
                    <p> Set spending limits and restrictions</p>
                </div>
            </div>
        </section>
    )
};

export default Content;