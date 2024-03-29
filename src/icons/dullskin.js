import React from "react";

export default function dullskin(props) {
  const { fill, size } = props.details;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g fill={fill}>
        <path d="M19 38.8V.5h17.6A36 36 0 0 0 37 9c.6 3.1 0 7-1.6 11.5l-1.8 7-5.5 7.3-6.4 4H19z" opacity=".4" />
        <path d="M24.4 28.6c0 .1 0 .3-.2.5 0 .2-.3.4-.6.4l-.4-.2c-1.3-.7-2.7-1-4-1-1.4 0-2.7.3-4.1 1-.6.3-1 .2-1.2-.2v-.5c0-.3.2-.5.5-.6 1.7-.9 3.4-1.2 5.5-1.2a9 9 0 0 1 4 1.2c.3.2.4.4.5.6zM21.9 22c-.6 1-1.6 1.6-2.9 1.7-1 0-2-.5-2.6-1.5-.3-.4-.3-.9.1-1.1.5-.4.9-.1 1.1.2.5.5 1 .9 1.6.9.5 0 1-.4 1.5-1 .3-.3.7-.5 1-.2.4.3.5.6.2 1zM11.3 9.7c-.5-.2-1-.2-1.6-.1-1.2 0-2.4.2-3.4.5h-.5a.6.6 0 0 1-.2-.5c0-.4.5-.8.9-1a4 4 0 0 1 2-.7l.9-.1c1.3 0 2.7.2 4 .5h.1l1.3.3c.4 0 1 .2 1.3.5.3.3.3.6.2.7 0 .3-.3.6-.7.6h-.7c-.7 0-1.5-.2-2.2-.4l-1.4-.3zm2.1 3c.8 0 1.5.1 2 .4l.2.3c0 .2-.1.4-.3.4h-.7l-.8.4-.6.3-1.6.2-.9-.1a8.7 8.7 0 0 1-3.4-1v-.2a7 7 0 0 1-.8-.6l-.3-.3c-.1-.1-.1-.3 0-.4l.2-.1h.1c1.3.7 2.6 1 4.2.9l.8-.1h2zM33 9.5c0 .2 0 .3-.3.5h-.5c-1.6-.5-3.3-.6-4.9-.3l-1.4.3c-.7.2-1.4.5-2.2.5H23c-.4-.1-.7-.4-.8-.7 0 0 0-.4.2-.7.4-.3.9-.5 1.3-.5l1.3-.3c1.4-.3 2.8-.6 4.1-.6h1a4 4 0 0 1 2 .8c.3.3.8.6.8 1zm-.7 2.5h.3v.4l-.4.3-.7.7-.1.1-1.1.5c-.7.3-1.5.5-2.4.5l-.9.1c-.5 0-1 0-1.5-.2a2 2 0 0 1-.6-.2 4 4 0 0 0-.8-.4l-.8-.1c-.2 0-.3-.1-.3-.3 0-.2 0-.3.3-.4l2-.2h2l.6.1c1.7 0 3-.2 4.3-.9h.1zM19.4 40h-.1c-1.7 0-3.5-.5-5.3-1.5-2-1-3.6-2.2-5-3.5a20.6 20.6 0 0 1-6.2-11.2c-.2-1.4-.7-2.8-1.3-4.4-.5-1.3-1-2.6-1.3-4-.4-2.3 0-4.7.4-6.8L1 5.2v-1L1.4.9c0-.5.5-1 1-.9.6 0 1 .5 1 1.1L3 4.3v1L2.5 9C2 11 1.7 13 2 14.9c.2 1.3.7 2.5 1.2 3.8.6 1.6 1.2 3.2 1.4 4.8a18.6 18.6 0 0 0 5.6 10c1.3 1.3 2.8 2.3 4.6 3.3 1.5.9 3 1.3 4.4 1.3 1.4 0 2.9-.4 4.4-1.3 1.8-1 3.2-2 4.6-3.2a18.6 18.6 0 0 0 5.6-10c.2-1.7.8-3.3 1.4-4.9.5-1.3 1-2.5 1.2-3.7.4-2 0-4-.4-6.1l-.5-3.6v-1l-.2-3c0-.5.4-1 .9-1s1 .4 1 1l.2 3 .1 1c0 1 .3 2.1.5 3.3.4 2.2.9 4.5.4 6.8-.2 1.4-.8 2.7-1.3 4-.5 1.5-1.1 3-1.3 4.4-.1 1.5-.6 3-1.3 4.5-1.4 2.9-3 5-4.9 6.7a27 27 0 0 1-5 3.5c-1.8 1-3.5 1.5-5.3 1.5z" />
      </g>
    </svg>
  );
}
