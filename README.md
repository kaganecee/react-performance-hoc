# React Performance Hoc

React high order component check how much does it take to render component

## Installation

```
npm install react-performance-hoc
```

## Simple Usage

```js
import React from "react"
import withPerformance from "react-performance-hoc"
import Login from "./Login"

const App = () => {
  const PerformantLogin = withPerformance(Login)
  return (
    <div>
      <PerformantLogin/>
    </div>
  )
}
```
### Parameters
| Parameter Name | Description   | Default  | 
| :------------: | :------------: | :------------: | 
|  Component | The component you want to measure render time  |   |
|  identifier | specify identifier to easily catch which component it is  |  "specify identifier"  |
|  errorTime   | If render time is more than this time, log with console.error  | 200 (ms)  |
|  warnTime   |  If render time is more than this time, log with console.warn  | 100 (ms)   |
|  onPerformanceCapture()   |  You can use the render time with callback as you wish, for example you can fetch  |  It prints the render time to the console according to the error and warn times  |

## Usage with Params
```js
import React from "react"
import withPerformance from "react-performance-hoc"
import Login from "./Login"

const App = () => {
  const onPerformanceCapture = (Component,identifier,renderedTime) => {
    fetch("url",{
      component: Component.name,
      identifier,
      time: renderedTime,
    })
  }
  const PerformantLogin = 
  withPerformance(
    Login,
    "login component", 
    1000,  
    100,    
    onPerformanceCapture
    )
  return (
    <div>
      <PerformantLogin/>
    </div>
  )
}
```