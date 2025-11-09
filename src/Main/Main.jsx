import img from './Main_assets/Frame.png'

export default function Main(){
    return(
        <>
            <main className=''>
                <section  className="bg-[url('/src/Main/Main_assets/IMAGE.png')] w-[100%] h-[700px] bg-cover bg-center flex justify-center items-center">
                    <div className="flex justify-between items-start w-[576px] h-[359px] mr-[204px] flex-col">
                        <div className="w-[576px] h-[212px]">
                            <h1 className="text-[49px]">The <span className="text-[#2BCA8B] underline"> most complete</span> <br />Photography resource.</h1>
                            <p className="text-[19px]">Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
                        </div>
                        <div className="flex justify-between w-[481px] h-[63px]">
                            <div className="w-[211px] h-[63px] flex justify-around flex-col items-center bg-[#F55F39] text-white">
                                <h2  className="text-[23px]">Visit our Blog</h2>
                                <p className="text-[14px]">Stories, News & info</p>
                            </div>
                            <div className="w-[255px] h-[63px] flex justify-around flex-col items-center bg-white">
                                <h2 className="text-[23px]">Resource Center</h2>
                                <p className="text-[14px]">Tips, Tricks & Tutorials</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex justify-end items-end w-[100%] h-[305px] absolute pb-[80px]">
                    <div className="w-[440px] h-[124px] ml-[210px] flex justify-between">
                        <h2 className='text-[28px] text-[#2BCA8B] w-[125px]'>How can we help you?</h2>
                        <div className='w-[260px] h-[116px] flex justify-between flex-col'>
                            <p>Visit our Blog</p>
                            <p>Photographers Resources Library</p>
                            <p>Featured Stories</p>
                            <p>Get Full Access Today!</p>
                        </div>
                    </div>
                    <div className="ml-[190px] bg-[url('/src/Main/Main_assets/Vector.png')] w-[50%] h-[305px] bg-[#252061] text-white flex justify-center items-start flex-col">
                        <div className='flex justify-between items-start flex-col w-[330px] h-[216px] ml-[56px]'>
                            <h3 className='text-[24px]'>Meet our Writers</h3>
                            <p className='w-[306px] text-[14px]'>We've got a professional team of professional photographers providing you with resources.</p>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}