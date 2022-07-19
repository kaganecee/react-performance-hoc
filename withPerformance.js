import { useEffect } from "react";
import React from "react"
const withPerformance = (Component,errorTime=200,warnTime=100) => ({...props}) => {
    let startTime;
    let endTime;
    startTime = performance.now();
    useEffect(()=> {
        <Component/>
        endTime = performance.now();
        if(endTime-startTime > errorTime){
            console.error(Component.name,"render time =",endTime - startTime)
        }
        else if(endTime-startTime > warnTime){
            console.warn(Component.name,"render time =",endTime-startTime)
        }else{
            console.log(Component.name,"render time =",endTime - startTime)
        }
      })
    return (
        <>
            <Component  {...props}/>
        </>
    )
}
export default withPerformance;