import React from "react";
const withPerformance = (Component,identifier="specify identifier",errorTime=200,warnTime=100,onPerformanceCapture=defaultOnPerformanceCapture) => React.forwardRef(( props,ref ) => {
    const startTime = performance.now();
    const renderedComponent = <Component {...props} ref={ref}/>;
    const endTime = performance.now();
    const renderedTime = endTime - startTime
    onPerformanceCapture(Component,identifier,renderedTime,errorTime,warnTime)
    return renderedComponent
})
const defaultOnPerformanceCapture = (Component,identifer,renderedTime,errorTime=200,warnTime=100) => {
        if(renderedTime > errorTime){
            console.error(Component.name,identifer,"render time =",renderedTime)
        }
        else if(renderedTime > warnTime){
            console.warn(Component.name,identifer,"render time =",renderedTime)
        }else{
            console.log(Component.name, identifer,"render time =",renderedTime)
        }
    }
export default withPerformance;