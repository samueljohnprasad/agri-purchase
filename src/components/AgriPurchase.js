import React from 'react'
import NavBar from './bars/NavBar'
import SideBar from './bars/SideBar'

function AgriPurchase() {
    return (
        <div className="h-screen w-screen bg-gray-100 overflow-auto">
            <div className="flex h-full">
                <div>
                <SideBar/>
                </div>
                <div className="px-8 py-4 w-full h-full" style={{fontFamily:"'Poppins', serif"}}>
                    <NavBar/>

                </div>
            </div>
            
        </div>
    )
}

export default AgriPurchase
