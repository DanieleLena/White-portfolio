

      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline();

        tl.to(".section-one", {
          translateY: "-17vh",
          ease: "power1.inOut",
          scrollTrigger: {
            start: 0,
            end: 100,
            scrub: 1,
          },
        })
          .to(".nav-box", {
            maxHeight: "13vh",
            ease: "power1.inOut",
            scrollTrigger: {
              start: 0,
              end: 100,
              scrub: 1,
            },
          })
          .to(".name", {
            translateY: "-53%",
            translateX: "35%",
            fontSize: "2rem",
            ease: "power1.inOut",
            scrollTrigger: {
              start: 0,
              end: 100,
              scrub: 1,
            },
          })
          .to(".surname", {
            translateX: "-80%",
            fontSize: "2rem",
            ease: "power1.inOut",
            scrollTrigger: {
              start: 0,
              end: 100,
              scrub: 1,
            },
          })
          .to(".job", {
            fontSize: "2.5rem",
            ease: "power1.inOut",
            scrollTrigger: {
              start: 0,
              end: 100,
              scrub: 1,
            },
          })
          .to(".scroll", {
            opacity: 0,
            ease: "power1.inOut",
            scrollTrigger: {
              start: 0,
              end: 500,
              scrub: 1,
            },
          });