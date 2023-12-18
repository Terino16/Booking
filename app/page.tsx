/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import SearchForm from '@/components/SearchForm'
import Image from 'next/image'
import { trending_data } from '@/data/trending'
export default function Home() {
  return (
    <main className="bg-[url('/Back.jpg')] w-full h-full bg-cover bg-center">
    <div className="max-w-7xl h-screen mx-auto p-6 bg-transparent">
      <section className=" flex flex-col items-center ">
        <h1 className='font-semibold text-5xl text-white font-Poppins lg:p-8'>In a Great Hotel,You Don't Just Stay,You Belong</h1>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt="Logo"
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  )
}
