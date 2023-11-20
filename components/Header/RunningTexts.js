"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function RunningTexts(props) {
  const runningTextsRef = useRef();
  const mainTextRef = useRef();
  const nextTextRef = useRef();
  const _direction = useRef(1);
  const _class = props.className || "";

  let _xPercent = 0;
  // let _direction = 1;
  let _delta = 0.1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(runningTextsRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          // console.log("[onUpdate] e:", 0.001 * Math.abs(e.getVelocity()));
          _direction.current = e.direction * -1;
        },
        // onScrubComplete: (self) => {
        //   _delta = 0.1;
        // },
      },
      x: `-=500px`,
    });

    return () => {};
  }, []);

  const animation = () => {
    if (_xPercent <= -100) {
      _xPercent = 0;
    }
    if (_xPercent > 0) {
      _xPercent = -100;
    }

    // different width
    // const mainWidth = mainTextRef.current.clientWidth || 1;
    // const delta = (0.1 * mainWidth) / 100 || 1;
    // _xPercent += delta * _direction;

    // same width
    gsap.set(mainTextRef.current, { xPercent: _xPercent });
    gsap.set(nextTextRef.current, { xPercent: _xPercent });
    _xPercent += _delta * _direction.current;
    requestAnimationFrame(animation);
  };

  return (
    <div className={`${_class} running-texts__container `}>
      <div
        className="running-texts relative flex whitespace-nowrap"
        ref={runningTextsRef}
      >
        <p
          ref={mainTextRef}
          className="text main m-0 text-7xl leading-normal text-solitude-light font-extrabold"
        >
          Front-end Development - Brand Design - Agile/SCRUM Teamwork - Website
          Development - Mobile Application -
        </p>
        <p
          ref={nextTextRef}
          className="text next m-0 absolute text-7xl leading-normal text-solitude-light font-extrabold"
        >
          Front-end Development - Brand Design - Agile/SCRUM Teamwork - Website
          Development - Mobile Application -
        </p>
      </div>
      <style jsx>{`
        .running-texts__container {
          mix-blend-mode: color-dodge;
          filter: invert(100%);
        }
        .running-texts {
          .text {
            padding-right: 0.4em;
            white-space: nowrap;
          }
          .main {
          }
          .next {
            left: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default RunningTexts;
