
export default function Portofolio() {
    return (
        <section id="portofolio" className="pt-36 pb-16 bg-sky-400">
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary font-serif italic  mb-2">Portofolio</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
                        <p className="font-medium text-md text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id sodales ipsum.</p>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src="/img/porto1.png" alt="Landing Page" width="w-full"/>
                        </div>
                        <h3 className="font-semibold text-xl text-primary mt-5 mb-3">Landing Page Hendy</h3>
                        <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id sodales ipsum.</p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src="/img/porto2.png" alt="List Code" width="w-full"/>
                        </div>
                        <h3 className="font-semibold text-xl text-dark mt-5 mb-3">List Code</h3>
                        <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id sodales ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}