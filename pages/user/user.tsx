import useAddress from "../../src/domain/hooks/use-address";


export function User(){
    const {loadDetails,loadAddress} =useAddress()

const address = loadAddress()
return(
<>

{address}
</>)
}