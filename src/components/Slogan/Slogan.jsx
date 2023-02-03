import Cards from '../../Img/desktop/isocard.svg'

const Slogan =( ) =>{
    return (
        <section className="text-36 my-14 font-extrabold">
            <div className="text-center">
                <p className="">
                    Earn <span className="text-purple-300"> More </span>
                </p>
                <p className="">Pay Less</p>
                <button className="text-20 px-6 py-[6px] font-bold mt-[16px] bg-purple-500 rounded-full hover:bg-pink-500 transition-all duration-300">
                    Start
                </button>
            </div>
            <div className='mt-[69px]'>
                <img src={Cards} alt="Loading...." className='mx-auto' />
            </div>
        </section>
    );  
}

export default Slogan;