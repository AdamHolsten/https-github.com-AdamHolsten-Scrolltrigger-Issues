// SlideItem.js
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import { ItemList } from './ItemList';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const SkillsWrapper = () => {
  let component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // ScrollTrigger.create({
      //   trigger: element,
      //   start: "top 90%",
      //   toggleActions: "play none none reverse",
      //   animation: tl,
      // }),
      // gsap.to(".right-item-list", {
      let mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(max-width: 768px)',
          isMobile: '(min-width: 768px)',
        },
        (context) => {
          // eslint-disable-next-line no-unused-vars
          let isDesktop = context.isDesktop;
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: '#circle-container',
              // trigger: "#item-collection",
              start: 'top top',
              end: '+=100%',
              pin: isDesktop ? false : '#circle-wrap',
              pinSpacing: false,
              toggleActions: 'play none none reverse',
              anticipatePin: 1,

              markers: true,
            },
          });
          tl.fromTo('#circle-wrap', { autoAlpha: 0 }, { autoAlpha: 1 }, 0);

          let tlLine = gsap.timeline({
            scrollTrigger: {
              trigger: 'ul',
              // pin: true, // pin the trigger element while active
              start: 'top 60%',

              // markers: true,
            },
          });
          tlLine.fromTo(
            '#left-bar',
            { opacity: 0 },
            { opacity: 1, stagger: 0.25 },
            0
          );
          let circleHeaderTl = gsap.timeline({
            scrollTrigger: {
              trigger: '#Technologies',
              // pin: true, // pin the trigger element while active
              start: 'top 60%',
              // markers: true,
              toggleActions: 'play none none reverse',
            },
          });
          gsap.set('#second-circle-header', { autoAlpha: 0, height: 0 });
          circleHeaderTl.to(
            '#first-circle-header',
            { autoAlpha: 0, opacity: 0, duration: 0.25 },
            0
          );
          circleHeaderTl.to(
            '#first-circle-header',
            { height: 0, duration: 0 },
            0.25
          );
          circleHeaderTl.fromTo(
            '#second-circle-header',
            { autoAlpha: 0, height: 0, y: 20 },
            { autoAlpha: 1, height: 'initial', y: 0 },
            0.35
          );
        }
      );
      // gsap.utils.toArray(".slide-up").forEach((elem) => {
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
      //       duration: 2,
      //       // ease: 'expo.out',
      //       y: 0,
      //       opacity: 1,
      //     }
      //   );
      // });
    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);

  return (
    <div id="item-collection" className="inner-padding" ref={component}>
      <div>
        <div className="right-item-list">
          <hr id="left-bar" />

          <ItemList
            heading="Skills & Exp."
            items={[
              { item: 'Front-End Development', exp: '8+ years' },
              { item: 'Web Design', exp: '5+ years' },
              { item: 'Photo & Video', exp: '5+ years' },
              { item: 'Web Animation', exp: '2+ years' },
            ]}
            resume
          />
          <ItemList
            heading="Technologies"
            items={[
              { item: 'HTML' },
              { item: 'CSS & SCSS' },
              { item: 'Javascript' },
              { item: 'Greensock' },
              { item: 'React' },
              { item: 'Vue & Nuxt' },
              { item: 'WordPress, ACF & Gutenberg' },
              { item: 'Adobe Creative Cloud' },
            ]}
          />
        </div>
      </div>
      <div id="circle-container">
        <div id="circle-wrap" className=" full-height">
          <div id="skill-circle">
            <h2 id="first-circle-header">
              I possess extensive experience in crafting interactive and
              captivating websites.
            </h2>

            <h2 id="second-circle-header">
              I consistently stay current with the latest relevant technologies
              and skills.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsWrapper;
