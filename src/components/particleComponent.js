import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 350,
            density: {
              enable: false
            }
          },
          size: {
            value: 8,
            random: true,
            anim: {
              speed: 6,
              size_min: 0.7
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 2,
            direction: "top",
            out_mode: "out"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
            },
            repulse: {
              distance: 400,
              duration: 4
            }
          }
        }
      }}
    />
  </div>
);
