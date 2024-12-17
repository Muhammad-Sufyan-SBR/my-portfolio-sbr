import React from 'react'

const Home = () => {
  return (
    <div>
       <div>
      <div className='flex items-center justify-center min-h-screen bg-[url("/Sufyan.jpg")] bg-cover bg-center bg-opacity-50 md:[bg-contain md:h-screen '>
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>
      <h1 className='text-4xl font-bold border-b-4 border-white inline-block text-white z-10 opacity-80'>Muhammad Sufyan</h1>
      <div>
          <p className='absolute bottom-4 right-0 p-2 pb-4 rotate-90 text-white z-35'>scroll</p>
        </div>
        <div className="fixed flex  items-center bottom-48 space-x-12 z-50">
      {/* Resume Box */}
      <a
        href="/path-to-your-resume.pdf" // Link to your resume
        target="_blank"
        className="text-white bg-cyan-500 hover:bg-red-700 px-2 py-2 rounded-md text-lg font-semibold animate-bounce"
        aria-label="Resume"
      >
        Resume
      </a>

      {/* Hire Me Box */}
      <a
        href="mailto:your-email@example.com" // Link for Hire Me (mailto link)
        className="text-white bg-cyan-500 hover:bg-red-700 px-2 py-2 rounded-md text-lg font-semibold animate-bounce"
        aria-label="Hire Me"
      >
        Hire Me
      </a>
    </div>

      </div>
    </div>
    </div>
  )
}

export default Home
