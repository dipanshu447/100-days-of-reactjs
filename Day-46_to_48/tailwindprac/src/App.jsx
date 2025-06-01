export default function App() {
  return (
    <div className="bg-[url(https://images.pexels.com/photos/32215464/pexels-photo-32215464/free-photo-of-tirana-skyline-at-sunset-with-reflective-lake.jpeg)] h-screen bg-cover bg-center box-border text-white">
      <div className="absolute inset-0 bg-black/40">
        <div className="relative z-10 px-20">
          <nav className="flex justify-between items-center text-md py-4 font-light">
            <div className="font-semibold text-xl">Education Inc.</div>
            <div className="flex items-center">
              <ul className="flex cursor-pointer">
                <li className="transition-all duration-1000 ease-[cubic-bezier(0,0.71,0,1.12)] px-10 hover:font-bold">Cources</li>
                <li className="transition-all duration-1000 ease-[cubic-bezier(0,0.71,0,1.12)] px-10 hover:font-bold">Our Story</li>
                <li className="transition-all duration-1000 ease-[cubic-bezier(0,0.71,0,1.12)] px-10 hover:font-bold">Pricing</li>
                <li className="transition-all duration-1000 ease-[cubic-bezier(0,0.71,0,1.12)] px-10 hover:font-bold">Contact Us</li>
              </ul>
              <button className="transition-all duration-1000 ease-[cubic-bezier(0,0.71,0,1.12)] ml-10 border px-6 py-2 border-gray-300 cursor-pointer hover:text-black hover:bg-white">Sign In</button>
            </div>
          </nav>
          <main className="h-full flex items-center py-30">
            <div className="w-1/3">
              <h1 className="text-6xl font-extrabold mb-5">ROBUST EDUCATION</h1>
              <p className="text-sm text-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur nemo, corrupti commodi similique cum sint ex dolorem itaque nulla cumque quod, aspernatur accusantium iure odit distinctio fuga voluptates accusamus.
              Dolores maiores asperiores accusamus perspiciatis etur facilis modi Officiis facere blanditiis voluptate animi assumenda incidunt!</p>
              <button className="mt-10 border px-6 py-2 bg-white text-black border-gray-300 hover:text-white hover:bg-transparent cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0,0.71,0,1.12)]">Apply Now</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}