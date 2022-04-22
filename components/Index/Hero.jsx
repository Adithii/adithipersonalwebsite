export default function Hero() {
    return (
        <div className="w-full sm:grid sm:grid-cols-2 sm:gap-x-12 pb-10 pt-5 sm:pt-0">
            <div className="flex items-center">
                <div className="text-center sm:text-right">
                    <h1 className="text-white font-bold text-4xl">Hi, I'm Adithi.</h1>
                    <p className="w-4/5 lg:w-11/12 mx-auto sm:mr-0 sm:ml-auto text-gray-400">Front-end Developer. I live in Turkey. I'm student and self-improvement person.</p>
                </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
                <img alt="Hero" src="/img/hero.svg" className="w-3/4" />
            </div>
        </div>
    );
};