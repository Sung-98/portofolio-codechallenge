export default function Hero() {
  return (
    <section id="hero" className="pt-6 bg-sky-100" >
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">Halo Semua👋, saya <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Hendy</span></h1>
            <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Full-Stack Web Developer</h2>
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">Membangun Website sesuai yang diinginkan!</p>

            <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi Saya</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0 z-0">
              <img src="img/profilnaruto.png" alt="Hendy" className="max-w-full mx-auto" />
              <span className="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width="900" height="700" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0e153a" d="M39.1,-17.3C46.2,9.1,44.4,33.9,30.7,44.3C17,54.8,-8.6,50.9,-29.1,36.8C-49.7,22.7,-65.2,-1.8,-59.5,-26.2C-53.7,-50.7,-26.9,-75.2,-5.4,-73.5C16,-71.7,32,-43.7,39.1,-17.3Z" transform="translate(100 100)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}