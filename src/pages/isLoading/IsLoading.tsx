

import { RiseLoader } from "react-spinners"


const IsLoading = () => {
  return (
    <div style={{width:"100%", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"", flexDirection:"column"}}>

        {/* <img src="" alt="" /> */}

        <RiseLoader 
            color="#0A2463"
            speedMultiplier={1}
            size={15}
        />

        <i style={{fontSize:"17px", color:"#000", marginTop:"30px"}}>Loading...</i>
    </div>
  )
}

export default IsLoading