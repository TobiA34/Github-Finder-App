import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl font-bold">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        assumenda consectetur quidem delectus dolorum a vitae doloribus nesciunt
        hic repellat ratione facilis ullam, obcaecati voluptates corrupti ab,
        voluptatem possimus sunt repudiandae cum amet maxime! Praesentium porro
        quis sunt, sint iure necessitatibus numquam at molestiae nobis quidem id
        ex voluptates velit?
        <a href="www.google.com">
          {""} 
         </a>
        {""}
         <strong>
          <a href="https://www.linkedin.com/in/tobi-adegoroye-76aab3186/"></a>
        </strong>
        
      </p>
      <p className="text-lg">
        Version <span>1.0.0</span>
      </p>
      <p className="text-lg">
        Layout By: 
        <a className="ml-2" href="https://twitter.com/adegoroye_65810">
        Tobi Adegoroye
        </a>
      </p>
    </div>
  );
}

export default About
