import React from 'react'

const Content = () => {
    return (

        <div className="container mx-auto flex flex-wrap items-start my-16" >
            <div className="lg:w-1/4 w-full lg:pr-3">
                <div className="bg-gray-200 rounded-xl relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black rounded-b-xl"></div>
                <img src="https://eventingguide.com/wp-content/uploads/2021/06/funniest-horse-names.png" alt="Horze" className="object-cover h-96 w-full rounded-xl"></img>
                    <div className="p-6 absolute bottom-0 left-0 z-20">
                        <h2 class="text-gray-300 text-2xl font-bold mb-2">Horze</h2>
                        <div className="text-gray-300 leading-relaxed mb-6">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar nisi a finibus convallis. Nullam felis orci, dapibus quis feugiat quis, pellentesque eget lacus. 
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )

}
// API ID 1FUjQroXZuzVik1zTf3q0Yd6R22-ShI88QPqjKjan_ts
// spreadsheet.google.com/feeds/cells/{sheetID}/{pagenumber}/public/full?json
// spreadsheet.google.com/feeds/cells/1FUjQroXZuzVik1zTf3q0Yd6R22-ShI88QPqjKjan_ts/1/public/full?json
export default Content