# React Render Time High Order Component

React high order component check how much does it take to render component

## Demo

## Installation

```
npm install react-render-time-hoc
```

## Usage

```js
import React from "react"
import withPerformance from "react-render-time-hoc"

const Component = () => {
  const PerformantComponent = withPerformance(Component)
  return (
    <div>
      <PerformantComponent/>
    </div>
  )
}
```