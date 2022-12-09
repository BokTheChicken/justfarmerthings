import React, { Component }from 'react'

class Content extends Component 
{
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="container items-center justify-center w-full mx-auto my-0 md:w-6/12 h-6/12" >
                <div className="hover:bg-emerald-300 rounded-xl items-center justify-center w-full shadow-lg bg-white my-2 lg:flex-row dark:bg-gray-600 dark:hover:bg-emerald-600 ">
                    <div className="p-10">
                        <center><img src={this.props.imageurl}></img></center>   
                            <h2 className="block text-black text-2xl font-bold mb-2 mt-5 ">{this.props.contenttitle}</h2>
                            <p className="text-slate-500 text-lg mt-1 dark:text-gray-100 ">{this.props.contentdescription}</p>
                
                    </div>
                </div>
            </div>
        

        )
    }
}

// API ID 1FUjQroXZuzVik1zTf3q0Yd6R22-ShI88QPqjKjan_ts
// spreadsheet.google.com/feeds/cells/{sheetID}/{pagenumber}/public/full?json
// spreadsheet.google.com/feeds/cells/1FUjQroXZuzVik1zTf3q0Yd6R22-ShI88QPqjKjan_ts/1/public/full?json
export default Content