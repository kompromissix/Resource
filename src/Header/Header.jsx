import logo from './Header_assets/Frame.png'
import loop from './Header_assets/Group.png'
import home from './Header_assets/home.png'

export default function Header(){
    return(
        <>
            <header className="w-[100%] h-[80px] flex justify-center items-center">
                <nav className="w-[1230px] h-[80px] flex justify-between items-center">
                    <div className='w-[505px] h-[23px] flex justify-between'>
                        <img src={home} alt="" />
                        <p>Resource Center</p>
                        <p>Blog</p>
                        <p>Featured</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    <div className='w-[390px] flex justify-between'>
                        <div className='flex items-center justify-start w-[254px] h-[42px] rounded-l-[3px] border border-[#D9D9D9] border-solid '>
                            <img src={loop} className='pr-[11px]' alt="" />
                            <input type="text" className='pl-[20px] w-[116px] text-[#E0E0E0]' placeholder='Search website...'/>
                        </div>
                        <button type="button" className='flex justify-center items-center w-[137px] h-[42px] bg-[#B8BDC9] text-[#E0E0E0]'>Search</button>
                    </div>
                </nav>
                <img src={logo} className='absolute' alt="" />
            </header>
        </>
    )
}