import React from "react";

export default function redness(props) {
  const { fill, size } = props.details;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill={fill}
        d="M24.56 28.55a.5.5 0 0 1-.13.52.71.71 0 0 1-.65.38 1.2 1.2 0 0 1-.45-.12 8.38 8.38 0 0 0-4.02-1.1c-1.36 0-2.72.39-4.14 1.1-.52.25-.98.12-1.17-.26-.06-.2-.13-.32-.06-.52.06-.25.25-.45.58-.57a12.03 12.03 0 0 1 5.57-1.23c.84 0 2.46.39 4.02 1.29.25.13.38.32.45.51zm-2.46-6.43a3.62 3.62 0 0 1-2.92 1.68c-1.1 0-2-.52-2.65-1.48-.33-.45-.26-.9.13-1.16.51-.32.84-.06 1.1.26.45.51.97.83 1.55.83.58 0 1.1-.32 1.56-.9.32-.38.7-.51 1.03-.25.33.25.46.64.2 1.02zM11.4 9.65a4.88 4.88 0 0 0-1.68-.06c-1.16 0-2.33.19-3.36.51-.2.07-.4.07-.52-.06a.58.58 0 0 1-.2-.45c0-.39.52-.77.91-1.03a4 4 0 0 1 1.94-.7c.33-.07.65-.07.98-.07 1.36 0 2.72.25 4.08.51h.06c.45.13.84.2 1.3.26.45.06.97.2 1.3.51.32.32.32.58.25.77-.06.26-.39.52-.78.58-.19.07-.45.07-.64.07-.78 0-1.5-.26-2.2-.45-.46-.13-.98-.32-1.43-.39zm2.15 3.09c.77 0 1.49.06 1.88.32.19.06.32.2.32.38 0 .2-.13.33-.32.33-.26.06-.46.06-.72.12-.26.07-.52.2-.77.33-.2.06-.4.19-.65.25-.46.13-.97.2-1.56.2-.32 0-.64-.07-.9-.07a8.82 8.82 0 0 1-3.44-1.03c-.06-.06-.06-.13-.13-.13-.26-.19-.52-.45-.71-.64l-.32-.32c-.13-.13-.13-.26-.07-.39a.5.5 0 0 1 .26-.12h.13c1.3.7 2.66.96 4.28.9.19 0 .45-.07.7-.07.66 0 1.37-.06 2.02-.06zm19.62-3.22c0 .2-.06.32-.32.45-.13.13-.32.13-.52.07-1.55-.52-3.3-.65-4.92-.39-.45.07-.97.26-1.43.39-.7.19-1.42.45-2.2.45-.2 0-.45 0-.65-.07-.38-.06-.7-.32-.77-.58-.07-.12-.07-.45.26-.77.32-.32.84-.45 1.3-.51.38-.07.83-.2 1.22-.26h.07a18.4 18.4 0 0 1 4.14-.58c.33 0 .65.07.97.07a4 4 0 0 1 1.95.7c.39.26.9.65.9 1.03zm-.7 2.45c.06 0 .19.06.25.06.07.13.07.26-.06.39-.13.12-.2.25-.33.32-.2.25-.45.45-.71.64 0 .06-.06.06-.13.13a8.82 8.82 0 0 1-3.43 1.03c-.26.06-.59.06-.91.06a5.7 5.7 0 0 1-1.55-.2 1.95 1.95 0 0 1-.65-.25 3.98 3.98 0 0 0-.78-.32c-.26-.06-.52-.13-.78-.13-.2 0-.32-.13-.32-.32-.07-.2.06-.32.26-.39.58-.12 1.23-.19 2-.19.72 0 1.37 0 2.01.07.26.06.46.06.72.06 1.62.06 3.04-.2 4.27-.9l.13-.06zM19.56 40h-.13a10.8 10.8 0 0 1-5.38-1.48 24.34 24.34 0 0 1-4.98-3.47c-1.95-1.67-3.5-3.86-4.93-6.75a14.41 14.41 0 0 1-1.36-4.5c-.2-1.42-.7-2.83-1.3-4.38A21.14 21.14 0 0 1 .2 15.37c-.45-2.31-.06-4.63.4-6.81.19-1.16.38-2.25.5-3.35l.07-1.02c0-1.03.07-2.2.13-3.28.07-.52.52-.97 1.04-.9.58.06.97.51.97 1.09-.13 1.1-.2 2.19-.26 3.21L3 5.34c-.07 1.16-.33 2.38-.52 3.54-.39 2.12-.78 4.18-.39 6.1.26 1.23.71 2.45 1.23 3.74.58 1.54 1.23 3.15 1.43 4.82.2 1.35.58 2.64 1.16 3.92 1.3 2.7 2.72 4.63 4.47 6.17a26.76 26.76 0 0 0 4.67 3.22 8.97 8.97 0 0 0 4.4 1.22c1.43 0 2.92-.38 4.4-1.22 1.82-.97 3.31-2.06 4.67-3.22a18.62 18.62 0 0 0 4.47-6.17 10.93 10.93 0 0 0 1.17-3.92c.2-1.67.84-3.28 1.42-4.82.52-1.29.97-2.51 1.23-3.73.4-1.93 0-3.92-.39-6.11-.2-1.16-.45-2.32-.51-3.54l-.07-1.03a347 347 0 0 1-.2-2.95.95.95 0 0 1 .91-1.03c.52-.07.97.38 1.04.9l.2 3.02.12.96c.07 1.1.26 2.2.52 3.35.4 2.25.84 4.56.4 6.81-.27 1.42-.85 2.77-1.3 4.05-.59 1.48-1.17 2.9-1.3 4.38-.2 1.54-.65 3.02-1.36 4.5-1.43 2.9-2.98 5.08-4.92 6.75a27.14 27.14 0 0 1-5 3.47A11.71 11.71 0 0 1 19.58 40zm9.61-18.33a.71.71 0 0 1-.71-.7c0-.4.32-.71.71-.71.4 0 .72.32.72.7 0 .4-.32.71-.72.71zm-2.99.52a.71.71 0 0 1-.71-.7.71.71 0 1 1 1.43 0c0 .38-.32.7-.72.7zm-1.56-2.2a.71.71 0 0 1-.71-.7c0-.4.32-.7.71-.7.4 0 .72.3.72.7 0 .39-.32.7-.72.7zm2.6 0a.71.71 0 0 1-.71-.7c0-.4.32-.7.71-.7.4 0 .72.3.72.7 0 .39-.32.7-.72.7zm1.17 3.75a.71.71 0 0 1-.71-.7.71.71 0 1 1 1.43 0c0 .38-.32.7-.72.7zm-18.2 2.32a.71.71 0 0 1-.71-.7c0-.4.32-.71.71-.71.4 0 .72.31.72.7 0 .4-.32.71-.72.71zM31 23.74a.71.71 0 0 1-.71-.7.71.71 0 1 1 1.43 0c0 .38-.32.7-.72.7zm-19.37 0a.71.71 0 0 1-.71-.7.71.71 0 1 1 1.43 0c0 .38-.32.7-.72.7zm-.65-2.07a.71.71 0 0 1-.71-.7c0-.4.32-.71.71-.71.4 0 .72.32.72.7 0 .4-.32.71-.72.71zm1.7-1.67a.71.71 0 0 1-.72-.71c0-.4.32-.7.71-.7.4 0 .72.3.72.7 0 .39-.32.7-.72.7zm-3.13 3.74a.71.71 0 0 1-.71-.7.71.71 0 1 1 1.43 0c0 .38-.32.7-.72.7zm3.77-1.55a.71.71 0 0 1-.71-.7.71.71 0 1 1 1.43 0c0 .38-.32.7-.72.7zm1.7-2.2a.71.71 0 0 1-.72-.7c0-.4.32-.7.71-.7.4 0 .72.3.72.7 0 .39-.32.7-.72.7z"
      />
    </svg>
  );
}
