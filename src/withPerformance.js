import { useEffect } from "react";
const withPerformance = (Component) => ({...props}) => {
    let startTime;
    let endTime;
    startTime = performance.now();
    useEffect(()=> {
        <Component/>
        endTime = performance.now();
        if(endTime-startTime > 200){
            console.error(Component.name,"render time =",endTime - startTime)
        }
        else if(endTime-startTime > 100){
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