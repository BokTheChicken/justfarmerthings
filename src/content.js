import React, { Component }from 'react'

class Content extends Component 
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="container flex items-center justify-center w-auto mx-auto my-0 md:px-12" >
                <div class="rounded-xl shadow-lg bg-white my-2 w-full">
                    <div class="p-5">
                        <center>
                        <img src={this.props.imageurl} class="justify-center items-center"></img>
                        </center>   
                            <h2 class="block text-black text-2xl font-bold mb-2 ">{this.props.contenttitle}</h2>
                            <p class="text-slate-500 text-lg mt-3">{this.props.contentdescription}</p>
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