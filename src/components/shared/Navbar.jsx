"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userAvatar from "@/assets/user.png";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <div className="lg:w-4/5 mx-auto flex justify-between items-center my-8">
      <div></div>
      <ul className="flex justify-center items-center gap-4 text-gray-600">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      {isPending ? (
        <span className="loading loading-ring loading-xl"></span>
      ) : user ? (
        <div className="flex items-center justify-center gap-4">
          <h2 className="font-bold">Hello, {user.name}</h2>
          <Image
            src={user.image || userAvatar}
            width={40}
            height={40}
            alt="user"
          />
          {/* <FaUserCircle className='text-4xl' /> */}
          <button
            className="btn bg-[#403F3F] text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <Image
            src={userAvatar}
            width={40}
            height={40}
            alt="user"
          />
          <button className="btn bg-[#403F3F] text-white">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
