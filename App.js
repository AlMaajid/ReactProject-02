import React from "react";
import Info from './Info'
import infoData from './infoData'
import About from './About'
import aboutData from './aboutData'
import Interest from './Interest'
import interestData from "./interestData";
import Footer from './Footer'
import footerData from "./footerData";


export default function App() {
  const infoDataOne = infoData.map(item => {
    // console.log(item)
    return (
      <Info
        key={item.id}
        {...item}
      />
    )
  })
  const aboutDataOne = aboutData.map(item => {
    return (
      <About
        key={item.id}
        {...item}

      />
    )
  })
  const interestDataOne = interestData.map(item => {
    return (
      <Interest
        key={item.id}
        {...item}
      />
    )
  })
  const footerDataOne = footerData.map((item) => {
    return (
      <Footer
        key={item.key}
        {...item}
      />
    )
  })
  return (
    <div>
      {infoDataOne}
      <div className='aboutInterest'>
        {aboutDataOne}
        {interestDataOne}
        {footerDataOne}
      </div>
    </div>
  )
}