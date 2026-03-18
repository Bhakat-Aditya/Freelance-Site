import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame } from '@react-three/fiber';

// Import all 4 of your models
import HappyIdle from './HappyIdle';
import Typing from './Typing';
import TalkingOnPhone from './TalkingOnPhone';
import StandingGreeting from './StandingGreeting';

gsap.registerPlugin(ScrollTrigger);

export default function AvatarController() {
  const idleRef = useRef();
  const servicesRef = useRef();
  const phoneRef = useRef();
  const greetingRef = useRef();
  const rotatingGroupRef = useRef();

  // This hook smoothly rotates your desk/laptop setup continuously
  useFrame(() => {
    if (rotatingGroupRef.current) {
      rotatingGroupRef.current.rotation.y += 0.005; // Adjust speed here
    }
  });

  useEffect(() => {
    // 1. INITIAL STATE: Hide everything except Idle by pushing them far underground (y: -10)
    gsap.set([servicesRef.current.position, phoneRef.current.position, greetingRef.current.position], { y: -10 });

    // 2. SWAP 1: Black Screen to Services
    ScrollTrigger.create({
      trigger: "#black-screen-1",
      start: "center center",
      onEnter: () => {
        gsap.set(idleRef.current.position, { y: -10 }); // Hide Idle
        gsap.set(servicesRef.current.position, { y: -1 }); // Show Services
      },
      onLeaveBack: () => {
        gsap.set(servicesRef.current.position, { y: -10 });
        gsap.set(idleRef.current.position, { y: -1 });
      }
    });

    // 3. SWAP 2: Black Screen to Pricing
    ScrollTrigger.create({
      trigger: "#black-screen-2",
      start: "center center",
      onEnter: () => {
        gsap.set(servicesRef.current.position, { y: -10 });
        gsap.set(phoneRef.current.position, { y: -1 });
      },
      onLeaveBack: () => {
        gsap.set(phoneRef.current.position, { y: -10 });
        gsap.set(servicesRef.current.position, { y: -1 });
      }
    });

    // 4. SWAP 3: Black Screen to Testimonials (Hide ALL models for the client words/video)
    ScrollTrigger.create({
      trigger: "#black-screen-3",
      start: "center center",
      onEnter: () => gsap.set(phoneRef.current.position, { y: -10 }),
      onLeaveBack: () => gsap.set(phoneRef.current.position, { y: -1 })
    });

    // 5. SWAP 4: Black Screen to Footer
    ScrollTrigger.create({
      trigger: "#black-screen-4",
      start: "center center",
      onEnter: () => gsap.set(greetingRef.current.position, { y: -1 }),
      onLeaveBack: () => gsap.set(greetingRef.current.position, { y: -10 })
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <group>
      {/* 1. HERO (Idle) */}
      <group ref={idleRef} position={[0, -1, 0]}>
        <HappyIdle />
      </group>

      {/* 2. SERVICES (Typing + Rotating Desk & Chair) */}
      <group ref={servicesRef} position={[0, -10, 0]}>
        <group ref={rotatingGroupRef}>
          <Typing />
          {/* Simple minimalist Chair behind the avatar */}
          <mesh position={[0, 0.4, -0.15]}>
            <boxGeometry args={[0.4, 0.5, 0.4]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          {/* Simple floating Desk */}
          <mesh position={[0, 0.8, 0.4]}>
            <boxGeometry args={[1, 0.05, 0.5]} />
            <meshStandardMaterial color="#333" />
          </mesh>
          {/* Simple Laptop Base & Screen */}
          <mesh position={[0, 0.85, 0.4]}>
            <boxGeometry args={[0.4, 0.02, 0.3]} />
            <meshStandardMaterial color="silver" />
          </mesh>
          <mesh position={[0, 0.98, 0.26]} rotation={[-0.2, 0, 0]}>
            <boxGeometry args={[0.4, 0.25, 0.02]} />
            <meshStandardMaterial color="black" />
          </mesh>
        </group>
      </group>

      {/* 3. PRICING (Phone) */}
      <group ref={phoneRef} position={[0, -10, 0]}>
        <TalkingOnPhone />
      </group>

      {/* 4. FOOTER (Greeting) */}
      <group ref={greetingRef} position={[0, -10, 0]}>
        <StandingGreeting />
      </group>
    </group>
  );
}