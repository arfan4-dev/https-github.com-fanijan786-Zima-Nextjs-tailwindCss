import React from 'react'
import Image from 'next/image'
import './style.css'
const TwentyTwo = () => {
  return (
    <div className='flex justify-around mt-10 bg-slate-50  sx:block sm:block md:flex  ' id='parent'>
        
{/* First Div */}
<div className='flex flex-col justify-between items-start ' id='first'>

  <div id='firstA'>
    <p>ENQUIRIES</p>
    <p>hello@zimogroup.org</p>
  </div>

  <div id='firstB'>
    <p  className='text-6xl'>ZIMO GROUP</p>
    <Image src='/images/15.png' alt='' width={200} height={200}/> 
    <p>ZIMO GROUP LIMITED</p>
    <p>71 - 75 SHELTON STREET COVENT GARDEN LONDON <br /> WC2H 9JQ ENGLAND UNITED KINGDOM</p>
    <p>HELLO@ZIMOGROUP.ORG</p>
    <p>REGISTERED IN ENGLAND 14383397</p>
  </div>

  <div>
    <p>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED. <br /> The registered office is: 71-75 Shelton Street, <br/> Covent Garden, London, WC2H 9JQ, England, United Kingdom.
    </p>
  </div>
  
</div>

{/* second */}
<div id='second'        >
    <p>Contact</p>
</div>

{/* Third */}
<div className='flex flex-col justify-center items-center  sm:items-start xm:items-start' id='third'>
   <div>
   <p>REAL ESTATE</p>
    <p>realestate@zimogroup.org</p>
    <p>CARS</p>
    <p>cars@zimogroup.org</p>
    <p>YACHTS</p>
    <p>yachts@zimogroup.org</p>

    <p>WATCHES</p>
    <p>watches@zimogroup.org</p>
    <p>jets@zimogroup.org</p>
    <p>PRIVATE ISLANDS</p>
    <p>privateislands@zimogroup.org</p>
    <p>DIAMONDS</p>
    <p>diamonds@zimogroup.org</p>
    <p>TRAVEL THE WORLD</p>
    <p>ttw@zimogroup.org</p>
   </div>
</div>

{/* Fourth */}


<div className='' id='fourth'>
    <div>
        <p>PROPERTY PROFESSIONALS / AGENTS
</p>
        <p>agent@zimogroup.org
</p>
        <p>ADVERTISING
</p>
        <p>advertising@zimogroup.org
</p>
        <p>SPONSORSHIP</p>
        <p>sponsor@zimogroup.org
</p>
        <p>PARTNERS</p>
        <p>partners@zimogroup.org
</p>
        <p>LEGAL</p>
        <p>legal@zimogroup.org
</p>
        <p>CORPORATE
</p>
        <p>corporate@zimogroup.org
</p>
        <p>MARKETING</p>
        <p>marketing@zimogroup.org
</p>
       <br />
    </div>

    <div>
    <p>PRESS</p>
<br />
        <p>UNITED KINGDOM
</p>
        <p>press-uk@zimogroup.org
</p>
        <p>EUROPE
</p>
        <p>press-eu@zimogroup.org
</p>
        <p>NORTH AMERICA
</p>
        <p>press-na@zimogroup.org
</p>
        <p>MIDDLE EAST
</p>
        <p>press-me@zimogroup.org
</p>
        <p>ASIA/AUSTRALIA
</p>
        <p>press-apac@zimogroup.org
</p>
        <p>AFRICA
</p>
        <p>press-af@zimogroup.org
</p>
        <p>CHINA/HONG KONG
</p>
        <p>press-ch@zimogroup.org
</p>
    </div>
</div>

    </div>
  )
}

export default TwentyTwo