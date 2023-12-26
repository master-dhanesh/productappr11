import Link from "next/link";
const Nav = () => {
    return (
        <nav className="text-center pt-[5%]">
            <Link className="hover:text-red-400 text-2xl mr-10" href="/">
                Home
            </Link>
            <Link className="hover:text-red-400 text-2xl " href="/product">
                Products
            </Link>
        </nav>
    );
};

export default Nav;
