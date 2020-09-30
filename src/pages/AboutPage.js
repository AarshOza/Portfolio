import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  const projects = ['Dating app', 'Basketball Event Management app','Daily Prayer (UI and functionality similar to Instagram) app'];
  const listItems = projects.map((projects) =>
    <li>{projects}</li>
  );

  return (
    <div>
      <Hero title={props.title}/>

      <Content>
        <p>Hello, my name is Aarsh. I'm a applicaton and web developer with experience in React JS, React Native, Python.</p>

        <p>My short time goal is to become full stack Javascript developer.</p>

        <p>I'm constantly learning new things. currently those things include gaining more experience with MongoDB, React, Express JS,Node JS and Python.</p>

        {/* <p>My latest project, Dev Grub, is a cookbook for developers. You can check it out <a href="https://devgrub.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with Angular, MongoDB, Express JS, and Node JS. However, I will be rebuilding it using React in the coming months</p> */}
        <ul>{listItems}</ul>

        <p>When I'm not learning something new I like to invest my time in geeky stuffs or watching soccer matches.abs</p>

        <div class="py-5">
          <div class="card-deck text-center">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Cygbit IT Solutions</h4>
                <p class="card-text">Tower A, 4F-07, Earth Artica, Opp. Nilamber 1 Bunglows, Vasna - Bhayli Main Rd, Vadodara, Gujarat 390007, India</p>
                <p class='p-2 mb-3 bg-dark text-white'>React-Native Intern</p>
                <p class='p-2 mb-3 bg-dark text-white'>email: info@cygbit.com</p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2018</h6>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Sateweb</h4>
                <p class="card-text">Sarabhai Campus, 205/A, Tower-B, Atlantis K10, Near Genda Circle, Sarabhai Rd, Alkapuri, Vadodara, Gujarat 390005, India</p>
                <p class='p-2 mb-3 bg-dark text-white'>React-Native Developer</p>
                <p class='p-2 mb-3 bg-dark text-white'>email: info@sateweb.com</p>
              </div>
              <div class="card-footer">
                <h6 class="text-muted">Dates: 2018 - 2019</h6>
              </div>
            </div>

          </div>
        </div>

      </Content>
    </div>
  );
}

export default AboutPage;