import React, { Fragment, useContext, useState } from 'react'
import {Container} from './NavBar'
import {FcCheckmark} from 'react-icons/fc'
import '../Styles/Pricing.css'
function Pricing() {
  const {toggle} = useContext(Container)
  const [toggleBasic, setToggleBasic] = useState(true)
  const [toggleStandard, setToggleStandard] = useState(true)
  const [togglePremium, setTogglePremium] = useState(true)

  const [basicCost, setBasicCost] = useState("200")
  const [standardCost, setstandardCost] = useState("500")
  const [premiumCost, setpremiumCost] = useState("1000")

  return (
    <Fragment>
  <div className={toggle ? 'background-Color-Main' : 'background-color-secondary'}>
         <div className='Pricing-container'>
             <div className={toggle ? 'Pricing-option1' : 'light-Theme1'}>
                 <h2>Basic</h2>
                 <div className='Price'>
                 <h3> ₹{basicCost}</h3><h4 id ='MonthlyYearly'>{toggleBasic ? '/Monthly' : '/Yearly'}</h4>
                 </div>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Unlimited Files and Tv programmes</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Watch on Mobile phones and tablets</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Cancel at anytime</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />30 Days free trail pack</span>
                 <button id='button1'>Buy Now</button>
                 <div id='darktheme'>
                 <div className='Pricing-yearly-darktheme' onClick={() => {
                     setToggleBasic(!toggleBasic)
                     if(toggleBasic){
                     setBasicCost("500")
                     }else{
                     setBasicCost('100')
                  }
                 }}>
                    <div className={toggleBasic ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                 </div>
                 </div>
               </div>
               <div className={toggle ? 'Pricing-option1' : 'light-Theme2'}>
                 <h2>Standard</h2>
                 <div className='Price'>
                 <h3> ₹{standardCost}</h3><h4 id ='MonthlyYearly'>{toggleStandard ? '/Monthly' : '/Yearly'}</h4>
                 </div>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Unlimited Files and Tv programmes</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Watch on Mobile phones and tablets</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Cancel at anytime</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />480P Streaming</span>
                 <button id='button2'>Buy Now</button>
                 <div id='darktheme'>
                 <div className='Pricing-yearly-darktheme' onClick={() => {
                     setToggleStandard(!toggleStandard)
                     if(toggleStandard){
                     setstandardCost("1000")
                     }else{
                     setstandardCost('500')
                  }
                 }}>
                    <div className={toggleStandard ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                 </div>
                 </div>
               </div>
               <div className={toggle ? 'Pricing-option3' : 'light-Theme3'}>
                 <h2>Premium</h2>
                 <div className='Price'>
                 <h3> ₹{premiumCost}</h3><h4 id ='MonthlyYearly'>{togglePremium ? '/Monthly' : '/Yearly'}</h4>
                 </div>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Unlimited Files and Tv programmes</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Watch on Mobile phones and tablets</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />Cancel at anytime</span>
                 <span><FcCheckmark fontSize={25} id="checkmark" />1080p Streaming</span>
                 <button id='button3' >Buy Now</button>
                 <div id='darktheme'>
                 <div className='Pricing-yearly-darktheme' onClick={() => {
                     setTogglePremium(!togglePremium)
                     if(togglePremium){
                     setpremiumCost("2000")
                     }else{
                     setpremiumCost('1000')
                  }
                 }}>
                    <div className={togglePremium ? 'Pricing-monthly-darktheme' : 'Pricing-monthly-light'}></div>
                 </div>
                 </div>
               </div>
           </div>
      </div>
     </Fragment>
  )
}

export default Pricing