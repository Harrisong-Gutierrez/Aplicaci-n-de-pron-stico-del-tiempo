import React from 'react'
import Spinner from './Spinner'

const Card = ({showData,loadingData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date =day + '/' + month+  '/' + year;


    var url = "";
    var iconUrl = "";




    //
  
    //

    //



    if(loadingData) {
        return <Spinner/>
    }

    if (showData) {

        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png"

    }


  return (
    <div>
        {
            showData === true ? (
                <div className='flex justify-center mt-16'>
                
<a href="#" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src='https://img2.wallspic.com/previews/4/0/2/7/2/127204/127204-area_urbana-arquitectura-urbe-paisaje_urbano-edificio-x750.jpg'></img>


    <div className="flex flex-col justify-between p-4 leading-normal">
        <div className=''>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{weather.name}</h5>
        <div>
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{(weather.main.temp - 273.15).toFixed(1)}°C</span>
        <p className='flex gap-2 text-3xl font-bold text-gray-900 dark:text-white'>
            <img src={iconUrl} alt='icon'/>{weather.weather[0].description}
        </p>
        </div>
        {/* <div className='flex gap-2'>
        <div>lat:{weather.coord.lat}</div>
        <div>lon:{weather.coord.lon}</div>
        </div> */}
        </div>
        

        <div className='flex'>
        <svg aria-hidden="true" class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        <p class="text-xl font-semibold text-blue-600/100 dark:text-blue-500/100">{date}</p>
        </div>

        <h2 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">-temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h2>
        <h2 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">-temperatura minima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h2>
        <h2 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white">-sensacion termica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h2>
    </div>
</a>

                </div>

            ):(
              <div className='flex justify-center mt-20'>
                <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-zinc-400 rounded-lg shadow dark:text-gray-400 " role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Warning icon</span>
    </div>
    <h3 className="mb-2 ml-4 text-2xl font-bold tracking-tight  text-white">NO HAY DATOS</h3>
    
</div>
              </div>
            )
        }

    </div>
  )
}

export default Card