import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>Hello, my name is Aarsh. I'm a applicaton and web developer with 3+ Years of professional experience as Front-End developer.</p>

        <p>I'm constantly well versed in technologies and frameworks like React JS, Node JS and Mongo DB.</p>

        <p>When I'm not learning something new I like to invest my time in geeky stuffs or watching soccer matches.</p>

        <div class="py-5">
          <div class="card-deck text-center">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">R-FINANCIAL</h4>
                <p class="card-text">India</p>
                <p class='p-2 mb-3 bg-dark text-white'>FRONT END DEVELOPER</p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: AUGUST 2016 - JULY 2019</h6>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h4 class="card-title">JPMORGAN CHASE & CO.</h4>
                <p class="card-text">Maryland, USA</p>
                <p class='p-2 mb-3 bg-dark text-white'>FRONT END DEVELOPER</p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: JAN 2021 – CURRENT</h6>
              </div>
            </div>

          </div>
        </div>

      </Content>
    </div>
  );
}

export default AboutPage;