// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// eslint-disable-next-line react/prop-types
export const ItemList = ({ heading, items, resume }) => {
  //   console.log("Heading:" + heading);
  //   console.log("items:" + items);
  //   console.log("resume:" + resume);\

  let component = useRef();

  useEffect(() => {
    let scrollCtx = gsap.context(() => {
      // ScrollTrigger.create({
      //   trigger: element,
      //   start: "top 90%",
      //   toggleActions: "play none none reverse",
      //   animation: tl,
      // }),

      // gsap.utils.toArray(".work-item").forEach((elem) => {
      //   gsap.fromTo(
      //     elem,
      //     // elem! as gsap.DOMTarget,
      //     {
      //       y: 100,
      //       opacity: 0,
      //     },
      //     {
      //       scrollTrigger: {
      //         trigger: elem,
      //         start: "-80px bottom",
      //       },
      //       stagger: 1.75,
      //       duration: 0.75,
      //       // ease: 'expo.out',
      //       y: 0,
      //       opacity: 1,
      //     }
      //   );
      // });
      // const tl = gsap.timeline()
      // .from(".box", {opacity:0, stagger:1})
      // .to(".box", {opacity:0, stagger:1}, 0.5)
      // scrollTrigger: {
      //           trigger: elem,
      //           start: "-80px bottom",
      //         },

      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        // tl.set(".work-item", { autoAlpha: 0 });
        scrollTrigger: {
          trigger: "ul",
          // pin: true, // pin the trigger element while active
          start: "top 60%", // when the top of the trigger hits the top of the viewport
          // pinSpacing: true,
          // markers: true,
          // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });

      // tl.from(".work-item", { opacity: 0, stagger: 1 });
      tl.fromTo("h2", { opacity: 0 }, { opacity: 1, stagger: 0.25 }, 0);

      tl.fromTo(
        ".work-item",
        { opacity: 0 },
        { opacity: 1, stagger: 0.25 },
        0.5
      );
    }, component); // <- selector scoping
    return () => scrollCtx.revert();
  }, []);

  return (
    <div className="item-list" ref={component}>
      <h2 className="gsap-fade-up">
        <span>{heading}</span>
      </h2>
      <ul id={heading}>
        {items &&
          // eslint-disable-next-line react/prop-types
          items.map((item, index) => {
            const workExperience = item.exp;
            return (
              <li className="work-item gsap-fade-up" key={index + item.item}>
                {item.item}
                {workExperience && <p>{workExperience}</p>}
              </li>
            );
          })}
        {resume && (
          <li className="work-item gsap-fade-up">
            <a href="">View Resume</a>
          </li>
        )}
      </ul>
    </div>
  );
};
