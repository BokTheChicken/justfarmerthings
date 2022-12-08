import React, { Component }from 'react'

class Header extends Component 
{
    constructor(props) {
      super(props);
    } 
 render(){
    return (
      <div className=" bg-emerald-500 mb-3">
        <a
        className="mx-8 text-2xl font-mono font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
        href="#placelinkhere">
        JustFarmerThings
        </a>
      </div>
    )
  }
}

export default Header