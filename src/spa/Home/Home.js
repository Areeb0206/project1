import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Home.css';


export default function Home() {
	AOS.init();
	
  return (

  <div className="project">

     <div className="triangle">

            <div className="gif">

               <div className="triangle-gif"></div>

            </div>
     </div>

      <div className="about">

        <div className="in-about">




            <div className="heading1">



               <h1 data-aos="fade-up"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">Abo</h1>

               <h2 data-aos="fade-down"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">ut</h2>



            </div>



		               <div className="heading2" data-aos="fade-down-right"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">
		                 <h1>Brand</h1>


		               </div>


					  <div className="heading3" data-aos="flip-up"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">
		                 <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,</h1>


		               </div>


            



        </div>
      </div>











       <div className="trees"></div>






        


         <div className="founder">

        <div className="in-founder">
               
               <div className="left" data-aos="zoom-up"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100"><div className="founder-image"></div>
               </div>
 				


				<div className="right">


		               <div className="heading">
		               <h1 data-aos="fade-up"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">Abo</h1>
		               <h2 data-aos="fade-down"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">Ut</h2>

		               </div>
		           

		               <div className="heading2" data-aos="fade-down-right"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">
		                 <h1>founder</h1>


		               </div>


					  <div className="heading3" data-aos="flip-up"  data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100">
		                 <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut </h1>


		               </div>
</div>
              



        </div>
      </div>





<div className="footer"></div>






  </div>

  );
}


