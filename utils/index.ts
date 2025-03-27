import { CarProps, FilterProps } from "@/app/_interfaces";

const fetchCars = async (filters: FilterProps)  => {
    const {manufacturer, year, fuel, model} = filters
    
    const url = new URL('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars')
    url.searchParams.append("make", manufacturer)
    url.searchParams.append("year", year.toString())
    url.searchParams.append("fuel_type", fuel)
    url.searchParams.append("model", model)

    const headers = {
		'x-rapidapi-key': '6f660796dbmsh7fb594778ff81c6p14d62ajsnd9380f9442ea',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(url, {headers: headers})
	const result = await response.json()
 
    return result
}

const calculateRent = (city_mpg:number, year:number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export {
    fetchCars,
    calculateRent
}