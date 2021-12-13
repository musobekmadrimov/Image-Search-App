import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://musobekmadrimov.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        &copy; Musobek Madrimov 2021 - {new Date().getFullYear()} | made with ❤️{" "}
      </a>
    </div>
  );
}
