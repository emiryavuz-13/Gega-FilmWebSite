import React from 'react'

const Header = () => {
  return (
    
    <div>
      {/* Header Section*/}
      <header className='bg-black py-12 text-gega-grey font-gemunu uppercase'>
        {/* Header Container */}
        <div className='container flex items-center justify-between space-x-16'>
            {/* Logo */}
            <a href="#" className='text-6xl font-bold'>GEGA</a>
            {/* Navigation */}
            <nav className='flex jusitfy-between flex-1 '>
                {/* Menu */}
                <div className='flex items-center text-lg space-x-8'>
                    <a href="#" className='hover:text-gega-melon transition duration-500'>movies</a>
                    <a href="#" className='hover:text-gega-melon transition duration-500'>celebrities</a>
                    <a href="#" className='hover:text-gega-melon transition duration-500'>news</a>
                    <a href="#" className='hover:text-gega-melon transition duration-500'>about</a>
                </div>
                {/* Login Area */}
                <div className='flex items-center space-x-8 '>
                    {/* Search Area */}
                    <form>
                        <div className='border-r px-4 mx-4 py-1 border-gega-red'>
                            <input type="text" className='bg-transparent border-b border-gega-red focus:outline-none w-44'/>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
