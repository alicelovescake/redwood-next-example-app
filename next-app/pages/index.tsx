import Nominations from '../components/Nominations'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <head>
        <title>Shoppie Awards</title>
      </head>
      <div className="container mx-auto p-10 w-full min-h-screen flex flex-col justify-between">
        <div>
          <div className="relative z-10 mb-12 bg-brand-green bg-opacity-10 rounded-lg p-8 h-96 shadow-xl">
            <div className="flex flex-col justify-end h-full">
              <div className="lg:w-2/3">
                <h1 className="text-brand-green-dark font-bold text-4xl lg:text-5xl mb-4">
                  Welcome to the Shoppies!
                </h1>

                <p className=" text-lg lg:text-xl leading-loose font-bold text-brand-green pb-2">
                  What movies inspired you last year?
                </p>
                <p className="text-lg lg:text-xl leading-loose">
                  Shopify is dedicated to celebrating the entrepreneurial spirit
                  in all of us.
                </p>
                <p className="text-lg lg:text-xl leading-loose">
                  Nominate 5 films that you think deserves to win the 1st annual
                  Shoppies Award. 🎉
                </p>
              </div>

              <SearchBox />

              <div
                style={{
                  backgroundImage: 'url(/images/movie-watchers.jpg)',
                  clipPath: 'polygon(24% 0, 100% 0, 100% 100%, 0 100%)',
                }}
                className="w-1/3 hidden lg:block h-96 bg-center bg-cover absolute right-0 top-0 rounded-tr-lg rounded-br-lg"
              >
                <div
                  className="w-16 h-16 rounded-full absolute light"
                  style={{
                    top: '83px',
                    left: '230px',
                    backgroundColor: '#e2d7db',
                  }}
                ></div>
              </div>
            </div>
          </div>

          <Nominations />
        </div>

        <Footer />
      </div>
    </>
  )
}
