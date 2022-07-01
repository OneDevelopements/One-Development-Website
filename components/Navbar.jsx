import { Popover, Transition } from '@headlessui/react'
import {useRouter} from 'next/router'

export default function Navbar(){
    const router = useRouter()
const solutions = [
    {
      name: 'Somelist',
      description: 'Discover. Explore. Advertise. All on the #1 Discord Bot List.',
      href: '##',
    },
    {
      name: 'Beats',
      description: 'Quality Music with just 1 tap. No paywalls, No hidden fees.',
      href: '##',
    },
    {
      name: 'UpBot',
      description: 'Keep track of your bots. Track users, add uptime notifications.',
      href: '##',
    },
  ]  
    const Navlink = (props) =>{
        console.log(props.noLink)
        return(
            <>
            <button className="m-0 mx-2 text-md hover:text-white/80 transition ease-in-out duration-100" onClick={()=> props.noLink && !props.offSite ? router.push(props.href) : window.location.href= props.href}>
                {props.children}
            </button>
            </>
        )
    }
    return(<>
    <div className="w-screen p-5 flex items-center bg-black/50 backdrop-blur-xl fixed top-0">
        <button className="text-lg mx-3 font-semibold hover:text-sky-500 transition ease-in-out duration-500" onClick={()=> router.push('/')}>
            One Devs
        </button>
        <Navlink href='/'>Home</Navlink>
        <Navlink href='/about'>About</Navlink>
        <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                 className="m-0 mx-2 text-md hover:text-white/80 transition ease-in-out duration-100"
                >
                Products
                </Popover.Button>
                <Transition
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                <Popover.Panel className="absolute left-0 z-10 mt-3 w-[400px] -translate-x-1/2 transform px-4 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-black/50 p-7 backdrop-blur-xl">
                        {solutions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-900/50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            </div>
                            <div className="ml-4">
                            <p className="text-sm font-medium text-white">
                                {item.name}
                            </p>
                            <p className="text-sm text-white/70">
                                {item.description}
                            </p>
                            </div>
                        </a>
                        ))}
                    </div>
                    </div>
                </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    </div>
    </>)
}