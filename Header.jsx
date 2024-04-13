import { Menu ,X} from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
    const [menu , setMenu] = useState(false);
  return (  
    <div className="flex justify-between items-center w-full bg-main p-4">
      <div>
        <h2 className='font-bold text-white cursor-pointer hover:text-gray-400 '>Logo and title</h2>
      </div>
       {/* Nav items */}
        <div className='flex gap-4 text-white justify-center items-center max-md:hidden'>

            <span className='cursor-pointer hover:text-gray-400'>Home</span>
        
            <span className='cursor-pointer hover:text-gray-400'>About</span>

            <span className='cursor-pointer hover:text-gray-400'>Search</span>
        
            <span className='cursor-pointer hover:text-gray-400'>Contact</span>
        
        </div> 
        {/* menuItems */}
        <div className='justify-center items-center hidden max-md:block'>
            {!menu && <Menu className='float-right' color='white' onClick={()=>setMenu(!menu)}/>}
            {menu && <X className='float-right' color='white' onClick={()=>setMenu(!menu)}/>}


            {menu && <div className='text-gray-400 md:hidden list-none flex flex-col gap-4 pr-4'>
            <li>Home</li>
            <li>About</li>
            <li>Search</li>
            <li>Contact</li>            
        </div>
        }
        </div>
    </div>
  )
}

export default Header
