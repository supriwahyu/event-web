import Link from "next/link"
import Image from "next/image"

export const Header = () =>  {
    return (
        <>
            <header>
                <div>
                <div className='topNav'>
                    <Image alt="logo" src={'/images/logoipsum-290.svg'} width={100} height={50} />
                <nav>
                    <ul>
                        <li>
                        <Link href='/' legacyBehavior><a>Home</a></Link>
                        </li>
                        <li>
                        <Link href='/events' legacyBehavior><a>Events</a></Link>
                        </li>
                        <li>
                        <Link href='/about-us' legacyBehavior><a>About Us</a></Link>
                        </li>
                    </ul>
                </nav>
                </div>
                {/* <h1>
                    simply dummy text of the printing
                </h1> */}
                </div>
            </header>
        </>
        )
    }
    