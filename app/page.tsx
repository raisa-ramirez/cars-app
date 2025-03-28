import { Hero, CustomFilter, SearchBar, CarCard } from "./_components";
import { fetchCars } from "@/utils";
import { yearsOfProduction, fuels } from "./_constants";
import { HomeProps } from "./_interfaces";

export default async function Home({searchParams}:HomeProps) {
  const {manufacturer, year, fuel, model} = await searchParams;
  const allCars = await fetchCars({
    manufacturer: manufacturer || '',
    year: year || 2022,
    fuel: fuel || '',
    model: model || ''
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars

  return <main className="overflow-hidden">
    <Hero />

    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter title="fuel" options={fuels}/>
          <CustomFilter title="year" options={yearsOfProduction}/>
        </div>
      </div>

      {!isDataEmpty?(
        <div className="home__cars-wrapper">
          {allCars.map((car) => (
            <CarCard car={car} key={car}></CarCard>
          ))}
        </div>
      ):(
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">Opps, no results</h2>
          <p>{allCars.message}</p>
        </div>
      )}      
      
    </div>
  </main>
}