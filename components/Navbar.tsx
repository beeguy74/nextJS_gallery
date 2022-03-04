import { FunctionComponent, useEffect, useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

const NavItem:FunctionComponent<{
  activeItem:string,
  setActiveItem:Function,
  name:string,
  route:string
}> = ({activeItem,name,route,setActiveItem})=>{
  return (
    activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={()=>setActiveItem(name)} className="hover:text-green-400">{ name }</span>
        </a>
      </Link>
    ): null
  )
}

const Navbar = (props) => {

  const [activeItem, setActiveItem] = useState<string>('')


  const {pathname} = useRouter()

  useEffect(()=>{
    if (pathname === "/")
      setActiveItem('Gallery')
    else if (pathname === "/about")
      setActiveItem('About')
  }, [])

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-400 text-xl border-b-4 border-green-400">{activeItem}</span>
      <div className="font-lg flex space-x-3">
        <NavItem activeItem="activeItem" setActiveItem={setActiveItem} name="About" route="/about" />
        <NavItem activeItem="activeItem" setActiveItem={setActiveItem} name="Gallery" route="/" />
      </div>
    </div>
  )
}

export default Navbar