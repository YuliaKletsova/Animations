export const Rectangle = () => {
  return (
    <svg width="150" height="150">
      <rect width="150" height="150" style={{fill:'white', opacity:0.5}}>
        <animate attributeName="rx" values="0;75;0" dur="10s" repeatCount="indefinite" />
        <animate attributeName="fill" values="#91a6be;#afb6cf;#dee2ef;#f0f0f0" dur="20s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

export const Progress = () => {
  return (
      <svg width={300} height={30} xmlns="http://www.w3.org/2000/svg">
          <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="300" y2="10" gradientUnits="userSpaceOnUse" >
                  <stop offset="10%" stop-color="yellow"></stop>
                  <stop offset="50%" stop-color="red"></stop>
                  <stop offset="90%" stop-color="blue"></stop>
              </linearGradient>
          </defs>
          {/* line is filling fully with gradient from the beginning of animation*/}
          <linearGradient id="g2" x1="0" y1="0">
              <stop offset="10%" stop-color="yellow"></stop>
              <stop offset="50%" stop-color="red"></stop>
              <stop offset="90%" stop-color="blue"></stop>
          </linearGradient>
          <rect id="line" x="0" y="0" width="300" height="10" fill="url(#g1)">
            <animate id="animation1" attributeName="width" dur="5" values="0;300" begin="0; animation2.end"></animate>
            <animate id="animation2" attributeName="width" dur="10s" values="30;300" begin="animation1.end"></animate>
          </rect>
          <rect id="line" x="0" y="20" width="300" height="10" fill="url(#g2)">
            <animate id="animation1" attributeName="width" dur="5" values="0;300" begin="0; animation2.end"></animate>
            <animate id="animation2" attributeName="width" dur="10s" values="30;300" begin="animation1.end"></animate>
          </rect>
      </svg>
  )
}