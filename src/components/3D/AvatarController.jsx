import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFrame } from "@react-three/fiber";

// Import all 4 of your models
import HappyIdle from "./HappyIdle";
import Typing from "./Typing";
import TalkingOnPhone from "./TalkingOnPhone";
import StandingGreeting from "./StandingGreeting";

gsap.registerPlugin(ScrollTrigger);

export default function AvatarController() {
  const idleRef = useRef();
  const servicesRef = useRef();
  const phoneRef = useRef();
  const greetingRef = useRef();
  const rotatingGroupRef = useRef();

  useFrame(() => {
    if (rotatingGroupRef.current) {
      rotatingGroupRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    gsap.set(
      [
        servicesRef.current.position,
        phoneRef.current.position,
        greetingRef.current.position,
      ],
      { y: -10 },
    );

    const createSwap = (trigger, onEnterAction, onLeaveAction) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: "center center",
        onEnter: onEnterAction,
        onLeaveBack: onLeaveAction,
      });
    };

    createSwap(
      "#black-screen-1",
      () => {
        gsap.set(idleRef.current.position, { y: -10 });
        gsap.set(servicesRef.current.position, { y: -1 });
      },
      () => {
        gsap.set(servicesRef.current.position, { y: -10 });
        gsap.set(idleRef.current.position, { y: -1 });
      },
    );

    createSwap(
      "#black-screen-2",
      () => {
        gsap.set(servicesRef.current.position, { y: -10 });
        gsap.set(phoneRef.current.position, { y: -1 });
      },
      () => {
        gsap.set(phoneRef.current.position, { y: -10 });
        gsap.set(servicesRef.current.position, { y: -1 });
      },
    );

    createSwap(
      "#black-screen-3",
      () => gsap.set(phoneRef.current.position, { y: -10 }),
      () => gsap.set(phoneRef.current.position, { y: -1 }),
    );

    createSwap(
      "#black-screen-3",
      () => gsap.set(phoneRef.current.position, { y: -10 }),
      () => gsap.set(phoneRef.current.position, { y: -1 }),
    );

    createSwap(
      "#black-screen-4",
      () => gsap.set(greetingRef.current.position, { y: -1 }),
      () => gsap.set(greetingRef.current.position, { y: -10 }),
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <group>
      {/* 1. HERO */}
      <group ref={idleRef} position={[0, -1, 0]}>
        <HappyIdle />
      </group>

      {/* 2. SERVICES (With Desk Legs & Mouse) */}
      <group ref={servicesRef} position={[0, -10, 0]}>
        <group ref={rotatingGroupRef}>
          <Typing />

          {/* Chair */}
          <mesh position={[0, 0.15, 0.1]}>
            <boxGeometry args={[0.45, 0.5, 0.45]} />
            <meshStandardMaterial color="#145" />
          </mesh>

          {/* Desk Tablet */}
          <mesh position={[0, 0.72, 0.55]}>
            <boxGeometry args={[1.2, 0.05, 0.7]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>

          {/* Desk Legs (4 Legs) */}
          {[
            [-0.55, 0.85],
            [0.55, 0.85],
            [-0.55, 0.25],
            [0.55, 0.25],
          ].map((pos, i) => (
            <mesh key={i} position={[pos[0], 0.35, pos[1]]}>
              <cylinderGeometry args={[0.02, 0.02, 0.7]} />
              <meshStandardMaterial color="#1E90FF" />
            </mesh>
          ))}

          {/* Laptop Setup */}
          <group position={[0.1, 0.8, 0.65]}>
            {/* Base */}
            <mesh>
              <boxGeometry args={[0.5, 0.02, 0.3]} />
              <meshStandardMaterial color="#888" />
            </mesh>
            {/* Screen */}
            <mesh position={[0, 0.15, 0.17]} rotation={[0.2, 0, 0]}>
              <boxGeometry args={[0.5, 0.3, 0.015]} />
              <meshStandardMaterial color="#050505" />
            </mesh>
            {/* Mouse (Beside Laptop) */}
            <mesh position={[0.4, -0.05, 0]}>
              <capsuleGeometry
                args={[0.03, 0.05, 4, 8]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <meshStandardMaterial color="#333" />
            </mesh>
          </group>
        </group>
      </group>

      {/* 3. PRICING (Phone) */}
      <group ref={phoneRef} position={[0, -10, 0]}>
        <TalkingOnPhone />
      </group>

      {/* 4. FOOTER */}
      <group ref={greetingRef} position={[0, -10, 0]}>
        <StandingGreeting />
      </group>
    </group>
  );
}
