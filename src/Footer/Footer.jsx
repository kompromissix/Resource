import icon from "./Footer_assets/icon.png"

export default function Footer(){
    return(
        <>
            <footer className="w-[100%] h-[484px] flex justify-center items-center bg-[#1C1842] bg-[url('/src/Main/Main_assets/Vector.png')]">
                <div className="w-[940px] h-[274px] flex flex-col justify-between items-start text-white">
                    <div className="w-[100%] h-[140px] flex justify-between items-center">
                        <div className="w-[300px] h-[140px] flex flex-col justify-between items-start">
                            <img src={icon} alt="" />
                            <p>Welcome at Template Resource. This template is packed with useful features to built out your own resource website.</p>
                        </div>
                        <div className="w-[570px] h-[140px] flex justify-between items-center">
                            <div className="w-[190px] h-[140px] flex justify-between flex-col text-[16px] text-[#ABA8CA]">
                                <h5 className="text-[20px] text-white">About us</h5>
                                <p className="pl-[10px]">About us</p>
                                <p className="pl-[10px]">Our team</p>
                                <p className="pl-[10px]">Frequent Questions</p>
                                <p className="pl-[10px]">Contact us</p>
                            </div>
                            <div className="w-[190px] h-[140px] flex justify-between flex-col text-[16px] text-[#ABA8CA]">
                                <h5 className="text-[20px] text-white">Information</h5>
                                <p className="pl-[10px]">Blog</p>
                                <p className="pl-[10px]">Pricing</p>
                                <p className="pl-[10px]">Resources</p>
                                <p className="pl-[10px]">Frequent Questions</p>
                            </div>
                            <div className="w-[190px] h-[140px] flex justify-between flex-col text-[16px] text-[#ABA8CA] ">
                                <h5 className="text-[20px] text-white">Contact</h5>
                                <p className="pl-[10px]">Email us</p>
                                <p className="pl-[10px]">Support Page</p>
                                <p className="pl-[10px]">Facebook</p>
                                <p className="pl-[10px]">Twitter</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-[100%] border-[#FFFFFF1A]"/>
                    <p className="text-[14px]">Copyright © <span className="text-[#F55F39]">Studio Corvus</span> ㅤPowered by<span className="text-[#F55F39]"> Webflow ㅤTemplate Licensing Info</span></p>
                </div>
            </footer>
        </>
    )
}