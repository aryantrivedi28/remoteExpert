export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-b from-soft-lavender to-white">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-navy">
            Remote Expert Jobs for <br/>
            <span className="text-purple">Skilled Freelancers</span>, Developers &amp; Operators
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-lg">
            Join a curated remote talent network and get matched with relevant freelance, 
            part-time, and full-time opportunities across GoHighLevel, web development, 
            marketing, automation, design, content, and operations.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#apply" className="btn-primary">Join Talent Network</a>
            <a href="#openings" className="btn-outline">View Current Openings</a>
          </div>
          <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
            ✅ Apply once. Get contacted when a matching remote opportunity opens.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="bg-white p-4 rounded-2xl card-shadow border border-cool-gray">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-soft-lavender flex items-center justify-center text-purple font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="font-semibold">Digital Marketing Specialist</p>
                  <p className="text-sm text-gray-500">Fully Remote · India</p>
                  <p className="text-sm font-medium text-purple">₹10L – ₹18L / year</p>
                  <span className="text-xs bg-cyan/20 text-navy px-2 py-0.5 rounded-full">
                    Applications close Aug 20
                  </span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-cool-gray flex items-center gap-2">
                <span className="text-xs bg-soft-lavender px-3 py-1 rounded-full">
                  Performance Marketing
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">Aarohi M.</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-cyan/20 rounded-full -z-10"></div>
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-purple/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}