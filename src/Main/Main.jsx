import img from './Main_assets/Frame.png'
import man from './Main_assets/man.png'
import imgg from './Main_assets/imgg.png'
import strelka from './Main_assets/strelka.png'
import galochka from './Main_assets/galochka.png'
import znak from './Main_assets/znak.png'
import woman from './Main_assets/woman.png'
import streeelochka from './Main_assets/streeelochka.png'
import loop from './Main_assets/loop.png'
import dok from './Main_assets/dok.png'

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
                    <div className="ml-[190px] bg-[url('/src/Main/Main_assets/Vector.png')] w-[45%] h-[305px] bg-[#252061] text-white flex justify-center items-start flex-col">
                        <div className='flex justify-between items-start flex-col w-[330px] h-[216px] ml-[56px]'>
                            <h3 className='text-[24px]'>Meet our Writers</h3>
                            <p className='w-[306px] text-[14px]'>We've got a professional team of professional photographers providing you with resources.</p>
                            <img src={img} alt="" />
                        </div>
                    </div>
                </section>
                <section className='w-[100%] h-[928px] flex justify-center items-center mt-[325px]'>
                    <div className='flex justify-between flex-col w-[940px] h-[928px] '>
                        <h2 className='text-[52px] w-[492px] leading-[49px]'>Recently in our Photography <span className='text-[#F55F39] underline'>Blog</span>.</h2>
                        <div className='w-[940px] h-[769px] flex justify-between'>
                            <div className="flex justify-start items-end bg-[url('/src/Main/Main_assets/bake.png')] w-[534px] h-[675px]">
                                <div className='w-[427px] h-[309px] flex justify-start items-end bg-white'>
                                    <div className='w-[387px] h-[281px] flex flex-col justify-between items-start'>
                                        <h3 className='text-[30px] text-[#252061] w-[314px]'>Photographers Who Changed the World forever</h3>
                                        <p className='text-[#969696] text-[14px] w-[377px]'>Debitis ea dicta ea eum laboriosam quis dolore repudiandae. Est hic quod et similique ullam et. Ipsum ipsam temporibus quo ea natus enim quae officia nulla.</p>
                                        <div className='flex justify-between items-start w-[195px] h-[47px]'>
                                            <img src={man} alt="" />
                                            <div className='flex flex-col w-[145px] justify-between h-[47px] text-[#252061]'>
                                                <p className='text-[15px]'>Robert Brown</p>
                                                <p className='text-[13px]'>on September 13, 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[376px] h-[769px] flex justify-between flex-col'>
                                <img src={imgg} alt="" />
                                <div className="flex justify-start items-end bg-[url('/src/Main/Main_assets/lug.png')] w-[376px] h-[240px]">
                                    <div className='w-[301px] h-[112px] flex justify-start items-end bg-white'>
                                        <div className='w-[222px] h-[91px] flex flex-col justify-between'>
                                            <p className='text-[#929292] text-[12px] pl-[17px]'>Sep 13, 2019</p>
                                            <h3 className='text-[#252061] text-[18px]'>7 Things About Photography Your Boss Wants To Know</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[376px] h-[229px] bg-[#252061] bg-[url("/src/Main/Main_assets/Vector.png")] flex justify-center items-center'>
                                    <div className='w-[208px] h-[144px] flex justify-between flex-col text-white mr-[24px]'>
                                        <h3 className='text-[28px]'>Visit Full Blog</h3>
                                        <p className='text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <p className='text-[14px] text-[#F55F39]'>Visit Blog</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='w-[100%] h-[1000px] flex justify-center items-center absolute z-[3]'>
                    <div className='bg-[url("/src/Main/Main_assets/Photoman.png")] w-[1100px] h-[660px] flex justify-start items-end'>
                        <div className='flex justify-center items-center w-[530px] h-[479px] bg-[#352F77]'>
                            <div className='w-[414px] h-[367px] flex justify-between flex-col text-white'>
                                <h2 className='text-[44px]'>Inspired to get <br />your photography <br />to the next level?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                <div className='bg-[#2BCA8B] w-[355px] h-[68px] flex justify-between items-center pl-[25px] pr-[30px]'>
                                    <img src={strelka} alt="" />
                                    <div> 
                                        <h3 className='text-[23px]'>Resource Center</h3>
                                        <p>Packed with useful tips & tutorials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-[100%] h-[1193px] flex justify-center items-center bg-[#252061] bg-[url('/src/Main/Main_assets/Vector20.png')] mt-[600px] absolute z-[2]">
                    <div className='w-[900px] h-[702px] flex justify-between items-center flex-col text-white mt-[200px]'>
                        <div className='w-[900px] h-[555px] flex justify-between flex-col items-center'>
                            <h2 className='text-[52px]'>Get full accesses. Today</h2>
                            <div className='text-black w-[100%] h-[469px] flex justify-between items-center'>
                                <div className='flex justify-center items-center w-[287px] h-[429px] bg-[#ffffffe6]'>
                                    <div className='w-[204px] h-[348px] flex flex-col justify-between'>
                                        <p className='text-[#183EB6] text-[15px]'>1 Month Access</p>
                                        <h2 className='text-[55px] flex items-center'>$49<span className='pl-[7px] pt-[10px] text-[14px]'>/month</span></h2>
                                        <div className='flex justify-between flex-col items-start w-[190px] h-[80px]'>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Full Access to Resources</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Access to Blog</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Access to News</p>
                                            </div>
                                        </div>
                                        <button type="button" className='bg-[#2BCA8B] w-[112px] h-[47px] justify-center items-center border-none text-[white]'>Buy Now</button>
                                        <p className='text-[#9DA0AC] text-[11px]'>On checkout you will be charged the total amount of $534 for the 6 month package.</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center w-[287px] h-[469px] bg-white'>
                                    <div className='w-[204px] h-[348px] flex flex-col justify-between'>
                                        <p className='text-[#2BCA8B] text-[15px]'>1 Year Access</p>
                                        <h2 className='text-[55px] flex items-center'>$67<span className='pl-[7px] pt-[10px] text-[14px]'>/month</span></h2>
                                        <div className='flex justify-between flex-col items-start w-[190px] h-[80px]'>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Full Access to Resources</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Access to Blog</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Access to News</p>
                                            </div>
                                        </div>
                                        <button type="button" className='bg-[#F55F39] w-[112px] h-[47px] justify-center items-center border-none text-[white]'>Buy Now</button>
                                        <p className='text-[#9DA0AC] text-[11px]'>On checkout you will be charged the total amount of $804 for the 12 month package.</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center w-[287px] h-[429px] bg-[#ffffffe6]'>
                                    <div className='w-[204px] h-[348px] flex flex-col justify-between'>
                                        <p className='text-[#183EB6] text-[15px]'>Lifetime Access</p>
                                        <h2 className='text-[55px] flex items-center'>$89<span className='pl-[7px] pt-[10px] text-[14px]'>/month</span></h2>
                                        <div className='flex justify-between flex-col items-start w-[190px] h-[80px]'>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Full Access to Resources</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Access to Blog</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <img src={galochka} alt="" />
                                                <p className='text-[13px] pl-[15px]'>Access to News</p>
                                            </div>
                                        </div>
                                        <button type="button" className='bg-[#2BCA8B] w-[112px] h-[47px] justify-center items-center border-none text-[white]'>Buy Now</button>
                                        <p className='text-[#9DA0AC] text-[11px]'>On checkout you will be charged the total amount of $534 for the 6 month package.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[752px] h-[77px] flex justify-between items-center'>
                            <div className='flex justify-between flex-col h-[77px] w-[540px]'>
                                <div className='flex h-[25px]  items-center'>
                                    <img src={znak} alt="" />
                                    <h4 className='text-[21px] pl-[10px]'>Instant Access</h4>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            </div>
                            <p className='w-[84px] text-[14px]'>Learn more</p>
                        </div>
                    </div>
                </section>
                <section className='w-[100%] h-[797px] flex justify-between z-[3] mt-[1723px] absolute'>
                    <div className='w-[50%] h-[797px] flex justify-bet items-start'>
                        <div className='bg-white w-[100%] h-[754px] flex justify-end items-center pr-[45px]'>
                            <div className='w-[530px] h-[644px] flex justify-between items-start flex-col'>
                                <h3 className='text-[30px] pl-[60px]'>What <span className='underline text-[#2BCA8B]'>others</span> say.</h3>
                                <div className='flex justify-end items-end w-[530px]'>
                                    <img src={woman} className='mr-[10px]' alt="" />
                                    <div className='absolute w-[530px] h-[336px] z-5 flex justify-between items-end'>
                                        <div className='flex justify-center items-center w-[276px] h-[336px] bg-white'>
                                            <div className='w-[212px] h-[276px] flex justify-between flex-col'>
                                                <p className='text-[20px] text-[#524B9A] font-[500]'>"I learned so much, even as a professional".</p>
                                                <p className='text-[15px]'>"Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."</p>
                                                <p className='text-[15px] text-[#524B9A]'>Juan Huang</p>
                                            </div>
                                        </div>
                                        <button type="button" className='bg-[#2BCA8B] text-white flex justify-center items-center w-[145px] h-[47px] mb-[35px] text-[17px]'>more stories</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-[797px] flex justify-center items-end'>
                        <div className='bg-[#F0F0F0] w-[100%] h-[727px] flex justify-start items-center'>
                            <div className='w-[350px] h-[622px] pl-[55px] flex justify-between flex-col'>
                                <h3 className='text-[30px] w-[341px]'>What kind of photographer <span className='underline text-[#2BCA8B]'>are you</span>?</h3>
                                <div className='w-[350px] h-[513px] flex flex-col justify-between'>
                                    <div className='w-[100%] h-[140px] flex justify-between items-center'>
                                        <div className='w-[305px] h-[140px] flex flex-col justify-between items-start'>
                                            <hr className='h-[1px] w-[100%] border-[#DADADA]'/>
                                            <h4 className='text-[22px] text-[#524B9A]'>Amateur</h4>
                                            <p className='text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                            <p className='text-[#4163AC] text-[16px]'>More Information</p>
                                        </div>
                                        <img src={streeelochka} alt="" />
                                    </div>
                                    <div className='w-[100%] h-[140px] flex justify-between items-center'>
                                        <div className='w-[305px] h-[140px] flex flex-col justify-between items-start'>
                                            <hr className='h-[1px] w-[100%] border-[#DADADA]'/>
                                            <h4 className='text-[22px] text-[#524B9A]'>Beginner</h4>
                                            <p className='text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                            <p className='text-[#4163AC] text-[16px]'>More Information</p>
                                        </div>
                                        <img src={streeelochka} alt="" />
                                    </div>
                                    <div className='w-[100%] h-[140px] flex justify-between items-center'>
                                        <div className='w-[305px] h-[140px] flex flex-col justify-between items-start'>
                                            <hr className='h-[1px] w-[100%] border-[#DADADA]'/>
                                            <h4 className='text-[22px] text-[#524B9A]'>Professional</h4>
                                            <p className='text-[17px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                                            <p className='text-[#4163AC] text-[16px]'>More Information</p>
                                        </div>
                                        <img src={streeelochka} alt="" />
                                    </div>
                                    <p className='text-[#F55F39] text-[17px]'>Visit Resource Center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='w-[100%] h-[754px] flex justify-center items-center mt-[2540px]'>
                    <div className='flex justify-between items-center flex-col w-[940px] h-[554px] '>
                        <h2 className='text-[52px] w-[589px] text-center leading-[39px]'><span className='text-[24px]'>The most complete Photography resource.</span><br />Search our Resources:</h2>
                        <div className='w-[471px] h-[50px] flex justify-between'>
                            <div className='flex items-center justify-start w-[306px] h-[50px] rounded-l-[3px] border border-[#D9D9D9] border-solid '>
                                <img src={loop} className='pl-[16px]' alt="" />
                                <input type="text" className='pl-[29px] w-[116px] text-[#E0E0E0]' placeholder='Search website...'/>
                            </div>
                            <button type="button" className='flex justify-center items-center w-[165px] h-[50px] bg-[#2BCA8B] text-[#E0E0E0]'>Search</button>
                        </div>
                        <div className='w-[100%] flex justify-between items-center'>
                            <div className='w-[300px] h-[296px] flex justify-between items-center flex-col border-[#E6E8EE] border-[3px]'>
                                <div className='flex justify-center items-center w-[100%] h-[237px] flex-col'>
                                    <div className='w-[234px] h-[178px] flex justify-start items-start flex-col'>
                                        <h4  className='text-[19px]'>For Beginners</h4>
                                        <div className='pt-[16px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>10 Beginner tips to get started</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Basic gear kit for Beginners</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>The first steps in Photo Editing</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>The first steps in using Lightroom</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[53px] bg-[#EEF1F6] flex items-center pl-[30px] text-[#252061] text-[13px]'>
                                    <p>View All</p>
                                </div>
                            </div>
                            <div className='w-[300px] h-[296px] flex justify-between items-center flex-col border-[#E6E8EE] border-[3px]'>
                                <div className='flex justify-center items-center w-[100%] h-[237px] flex-col'>
                                    <div className='w-[234px] h-[178px] flex justify-start items-start flex-col'>
                                        <h4  className='text-[19px]'>For Amateurs</h4>
                                        <div className='pt-[16px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Basic gear kit for Amateurs</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>The next steps in Photo Editing</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>The next steps in using Lightroom</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Using Photoshop for Photo Editing</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[53px] bg-[#EEF1F6] flex items-center pl-[30px] text-[#252061] text-[13px]'>
                                    <p>View All</p>
                                </div>
                            </div>
                            <div className='w-[300px] h-[296px] flex justify-between items-center flex-col border-[#E6E8EE] border-[3px]'>
                                <div className='flex justify-center items-center w-[100%] h-[237px] flex-col'>
                                    <div className='w-[234px] h-[178px] flex justify-start items-start flex-col'>
                                        <h4 className='text-[19px]'>For Professionals</h4>
                                        <div className='pt-[16px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Basic gear kit for Pros</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Create custom filters in <br />Lightroom</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Using Lightroom as a Pro</p>
                                        </div>
                                        <div className='pt-[8px] text-[#F55F39] text-[14px] flex items-start'>
                                            <img src={dok} alt="" />
                                            <p className='pl-[12px]'>Using Photoshop for Photo Editing</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[53px] bg-[#EEF1F6] flex items-center pl-[30px] text-[#252061] text-[13px]'>
                                    <p>View All</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}