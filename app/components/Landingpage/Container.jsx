import Link from 'next/link'
import React from 'react'

const Container = () => {
    return (
        <div className='flex mx-full px-9 justify-center bg-white'>
            <div id='Hero' className="w-400 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden opacity: 1; transform: none;">
                <div className="absolute top-4 left-4 text-6xl opacity-20">🍳</div>
                <div className="absolute bottom-4 right-4 text-6xl opacity-20">🥗</div>
                <div className="absolute top-1/2 left-8 text-4xl opacity-10">🍅</div>
                <div className="absolute top-1/4 right-12 text-4xl opacity-10">🥕</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">Ready to start cooking?</h2>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto relative z-10">Join thousands of home chefs and discover your next favorite recipe today.</p>
                <Link href="/Signup"><button className="inline-flex text-black items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 text-lg px-12 py-7 rounded-2xl shadow-2xl hover:scale-105 transition-all bg-white hover:bg-white/95 text-primary font-bold gap-2 relative z-10">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-arrow-right text-black"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></Link>
            </div>
        </div>
    )
}

export default Container
