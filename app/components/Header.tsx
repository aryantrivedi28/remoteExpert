import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-cool-gray bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container-max flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/remoteExpertLogo.png" 
            alt="Remote Expert Jobs logo" 
            width={36} 
            height={36} 
            className="h-9 w-auto"
          />
          <span className="text-xl font-bold text-navy tracking-tight">
            RemoteExpert<span className="text-purple">Jobs</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#openings" className="hover:text-purple transition">Openings</a>
          <a href="#categories" className="hover:text-purple transition">Categories</a>
          <a href="#how-it-works" className="hover:text-purple transition">How it works</a>
          <a href="#faq" className="hover:text-purple transition">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-3">
          <a href="#apply" className="btn-primary text-sm py-2 px-5">
            Join Talent Network
          </a>
        </div>
      </div>
    </header>
  )
}