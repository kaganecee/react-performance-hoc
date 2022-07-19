# React Performance Hoc

React high order component check how much does it take to render component

## Demo

## Installation

```
npm install react-performance-hoc
```

## Usage

```js
import React from "react"
import withPerformance from "react-performance-hoc"

const Component = () => {
  const PerformantComponent = withPerformance(Component)
  return (
    <div>
      <PerformantComponent/>
    </div>
  )
}
```

### Props
```js
import React from "react"
import withPerformance from "react-performance-hoc"

const Component = () => {
  const PerformantComponent = 
  withPerformance(
    Component,
    1000,  //If render time is more than this time, log with console.error .  Default=200
    100    //If render time is more than this time, log with console.warn .  Default=100
    )
  return (
    <div>
      <PerformantComponent/>
    </div>
  )
}
```