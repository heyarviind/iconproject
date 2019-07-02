import React from "react";

export default function eczema(props) {
  const { fill, size } = props.details;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill={fill} d="M18.57 22.73a2.2 2.2 0 0 1-2.19-2.2c0-1.22.98-2.21 2.19-2.21 1.2 0 2.18.99 2.18 2.2a2.2 2.2 0 0 1-2.18 2.2zM18.5 7.2a3.59 3.59 0 0 1-3.58-3.6c0-2 1.6-3.61 3.58-3.61a3.59 3.59 0 0 1 3.58 3.6c0 2-1.6 3.6-3.58 3.6zm6.75.55a2.5 2.5 0 0 1-1.02-3.36 2.46 2.46 0 0 1 3.33-1.03 2.5 2.5 0 0 1 1.02 3.36 2.46 2.46 0 0 1-3.33 1.03zm5.93 4.18a1.63 1.63 0 0 1 .4-2.27 1.6 1.6 0 0 1 2.24.4c.5.74.33 1.75-.4 2.26a1.6 1.6 0 0 1-2.24-.4zm1.62 7.05a2.61 2.61 0 0 1 5.17-.64 2.61 2.61 0 0 1-5.17.64zm-.31 7.08c.4-1.06 1.59-1.6 2.65-1.19 1.06.41 1.58 1.6 1.18 2.67a2.05 2.05 0 0 1-2.65 1.2 2.07 2.07 0 0 1-1.18-2.68zm-4.46 5.54a2.6 2.6 0 0 1 3.68.2 2.64 2.64 0 0 1-.19 3.7 2.6 2.6 0 0 1-3.68-.19 2.64 2.64 0 0 1 .2-3.7zm-6.02 3.02a1.81 1.81 0 0 1 .87 3.52 1.81 1.81 0 0 1-.87-3.52zm-6.95.2a2.63 2.63 0 0 1-1.26 5.1 2.63 2.63 0 0 1 1.26-5.1zM8.5 32.14c.78.7.84 1.92.14 2.7-.7.79-1.9.85-2.68.14a1.92 1.92 0 0 1-.14-2.7c.7-.78 1.9-.84 2.68-.14zm-3.46-6.27a2.63 2.63 0 0 1-1.5 3.4 2.6 2.6 0 0 1-3.37-1.52 2.63 2.63 0 0 1 1.5-3.39 2.6 2.6 0 0 1 3.37 1.51zm-1.09-7a1.36 1.36 0 1 1-2.69-.33 1.36 1.36 0 1 1 2.7.33zm2.38-6.58a2.21 2.21 0 0 1-3.1.55c-1-.71-1.24-2.1-.54-3.12a2.21 2.21 0 0 1 3.1-.55c1 .71 1.24 2.1.54 3.12zm5.07-5.21a1.7 1.7 0 0 1-2.3-.7 1.72 1.72 0 0 1 .7-2.33 1.7 1.7 0 0 1 2.3.71c.45.84.13 1.88-.7 2.32zm7.11 7.16a2.13 2.13 0 0 1-2.12-2.13c0-1.18.95-2.14 2.12-2.14 1.17 0 2.12.96 2.12 2.14 0 1.18-.95 2.13-2.12 2.13zm4.62 3.1c-.6-.77-.49-1.88.26-2.49.75-.61 1.86-.5 2.47.26.6.76.49 1.87-.26 2.48-.75.62-1.86.5-2.47-.26zm.89 4.94a3.2 3.2 0 1 1 6.23 1.45 3.2 3.2 0 1 1-6.23-1.45zM21.6 27.1a1.7 1.7 0 0 1 2.29.8c.41.85.06 1.89-.8 2.3a1.7 1.7 0 0 1-2.28-.79c-.42-.86-.06-1.9.79-2.3zm-5.63-.72a2.98 2.98 0 0 1 1.35 3.97 2.94 2.94 0 0 1-3.94 1.36 2.98 2.98 0 0 1-1.36-3.97 2.94 2.94 0 0 1 3.95-1.36zm-4.6-3.72a1.52 1.52 0 1 1-2.96.69 1.52 1.52 0 1 1 2.96-.69zm2.4-5.42a2.79 2.79 0 0 1-3.94.42 2.84 2.84 0 0 1-.41-3.97 2.79 2.79 0 0 1 3.94-.42c1.2.98 1.39 2.76.41 3.97z"/>
    </svg>
  );
}