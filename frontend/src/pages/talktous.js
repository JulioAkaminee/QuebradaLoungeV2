import Header from "@/components/header/header";
import { useState } from "react";

export default function TalkToUs() {
    const [contador,SetContador] = useState(0);
        
    const acrescentar = () =>{
        SetContador(contador+1)
    }
     
    return (
        <>
        
        <Header/>

        <button onClick={acrescentar}>acrescentar</button>
        <p >{contador}</p>
        </>
    );
}