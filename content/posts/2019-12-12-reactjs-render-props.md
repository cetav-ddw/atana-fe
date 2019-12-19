---
title: ReactJS Render Props
date: 2019-12-12T18:08:39.351Z
description: >-
  How to send values from one component into another component using “Global
  States”, the idea is to create a route that renders a component that has as a
  prop the value from the state.
author: Felipe
---

Render Props:

How to send values from one component into another component using “Global States”, the idea is to create a route that renders a component that has as a prop the value from the state.

https://css-tricks.com/an-overview-of-render-props-in-react/

**React Render props**

https://www.robinwieruch.de/react-render-props-pattern

React Class components have by default an object with some properties, some of these properties can be accessed by using ( this.state.props.\$something ). If we set a new property, this new property will overwrite default props.

https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-link-redirect-in-react-router-v4

React by default has a render method for every Component. The reason why I forced another Render it’s because ( State ) was not defined when the render method runs even though I used ComponentWillMount as first render function to pull and set the Data into the ( State ).

https://davidwalsh.name/react-force-render
