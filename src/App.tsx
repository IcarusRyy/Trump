import React from "react"
import "./App.css"

function App() {
  //   return <div className="App">1</div>
  return (
    <>
      <svg
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="#ff0c"></stop>
            <stop offset="100%" stop-color="#ff00"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient2"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="23.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="#0ff9"></stop>
            <stop offset="100%" stop-color="#0ff0"></stop>
          </radialGradient>
          <radialGradient
            id="Gradient3"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="21.5s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            ></animate>
            <stop offset="0%" stop-color="#f0f7"></stop>
            <stop offset="100%" stop-color="#f0f0"></stop>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="17s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="5 50 50"
            to="365 50 50"
            dur="17s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="10 50 50"
            to="370 50 50"
            dur="17s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="5 50 50"
            to="365 50 50"
            dur="18s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="10 50 50"
            to="370 50 50"
            dur="18s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="26s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="19s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="26s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="365 50 50"
            to="5 50 50"
            dur="19s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            dur="26s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          ></animate>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="370 50 50"
            to="10 50 50"
            dur="19s"
            repeatCount="indefinite"
          ></animateTransform>
        </rect>
      </svg>
      <img
        src="https://img.ixintu.com/download/jpg/202001/e170538a012d83be9721ed4f2faf5951.jpg!con"
        alt=""
      />
      <div style={{ position: "absolute", top: "50%", left: "50%" }}>
        <div>
          <div className="child_font">
            ⌜ <br /> 不要总想搞个
            <br />
            <a className="child_fake">假新闻.</a>
            <br />⌞<br />
            <span
              className="child_small"
              id="busuanzi_container_site_pv"
              style={{ display: "inline" }}
            >
              {" "}
              + <span id="busuanzi_value_site_pv">305</span> s{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
