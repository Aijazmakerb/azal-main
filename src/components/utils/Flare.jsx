import React, { useEffect, useRef } from "react";
import "./Flare.css"

const SIZE_DEFAULT = 200;
const CSS_VAR_DEFAULT = "--colors-global-accentA";

function Base(props) {
  return (
    <div
      tabIndex={props.tabIndex}
      className={props.className ? `${props.className} relative` : "relative"}
      onKeyUp={props.onKeyUp}
    >
      {props.children}
    </div>
  );
}

function Child(props) {
  return <div className={props.className ? `${props.className} relative` : "relative"}>{props.children}</div>;
}

function Light(props) {
  const outerRef = useRef(null);
  const size = props.flareSize ?? SIZE_DEFAULT;
  const cssVar = props.cssColorVar ?? CSS_VAR_DEFAULT;
  useEffect(() => {
    function mouseMove(e) {
      if (!outerRef.current) return;
      const rect = outerRef.current.getBoundingClientRect();
      const halfSize = size / 2;
      outerRef.current.style.setProperty(
        "--bg-x",
        `${(e.clientX - rect.left - halfSize).toFixed(0)}px`,
      );
      outerRef.current.style.setProperty(
        "--bg-y",
        `${(e.clientY - rect.top - halfSize).toFixed(0)}px`,
      );
    }
    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, [size]);
  return (
    <div
      ref={outerRef}
      className={`
        flare-light pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-[400ms]
        ${props.className ? props.className : ""}
        ${props.enabled ? "!opacity-100" : ""}
      `}
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(var(${cssVar}) / 1), rgba(var(${cssVar}) / 0) 70%)`,
        backgroundPosition: `var(--bg-x) var(--bg-y)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${size.toFixed(0)}px ${size.toFixed(0)}px`,
      }}
    >
      <div
        className={`
          absolute inset-[1px] overflow-hidden
          ${props.className ? props.className : ""}
          ${props.backgroundClass ? props.backgroundClass : ""}
        `}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at center, rgba(var(${cssVar}) / 1), rgba(var(${cssVar}) / 0) 70%)`,
            backgroundPosition: `var(--bg-x) var(--bg-y)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${size.toFixed(0)}px ${size.toFixed(0)}px`,
          }}
        />
      </div>
    </div>
  );
}

export const Flare = {
  Base,
  Light,
  Child,
};