import Link from 'next/link';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='lg:w-4/5 mx-auto flex justify-between items-center my-8'>
            <div></div>
            <ul className='flex justify-center items-center gap-4 text-gray-600'>
                <li><NavLink href={"/"}>Home</NavLink></li>
                <li><NavLink href={"/about-us"}>About</NavLink></li>
                <li><NavLink href={"/career"}>Career</NavLink></li>
            </ul>

            <div className="flex items-center justify-center gap-4">
                <Image src={userAvatar} width={40} height={40} alt='user' />
                <button className='btn bg-purple-500 text-white'>
                    <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;