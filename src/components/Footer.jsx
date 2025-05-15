import React from 'react'
import UnderFooter from "./UnderFooter.jsx";



function Footer( {isVisible} ) {
    const icon = (png, url) => {
        return <a href={url} className="p">
            <img src={png} className="h-8 invert " />
        </a>
    }


    return (
        <div className='my-10 md:my-15 font-mono '>
            <div className="flex items-center justify-center px-3 py-2 md:px-5 md:py-3 bg-white/10 border border-white/15 rounded-2xl hover:bg-white/25 transition-all ease-in-out sizeinc-3 ">
                <p className='w-fit text-sm md:text-md text-white/75'>Feel free to checkout my </p>
                <a className='text-sm font-bold md:text-md text-blue-500  ' href='https://github.com/Misa-De-Codes'>&nbsp;resume</a>
            </div>
            <div className="flex items-center justify-center gap-3 mt-10">
                {icon('/instagram.png', 'https://www.instagram.com/MUSA_DE_CODES')}
                {icon('/discord.svg', 'https://discord.com/channels/@musa_de_codes')}
                {icon('/linkedin.svg', 'https://www.linkedin.com/in/musaddikul-islam-a70459360')}
                {icon('/twitter.svg', 'https://x.com/Musa_De_codes')}
            </div>
            <p className="text-xs mt-5 text-white/50 ">© 2025 Musa-De-Codes. All rights reserved.</p>
            <div className={isVisible? 'block' : 'hidden' }>
               <UnderFooter />
            </div>
        </div>
    )
}

export default Footer