import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-white p-10 border-b-1 border-white">
        <aside className="flex items-center">
          <img className="w-30" src="/logo.png" alt="logo" />
          <h1 className="text-5xl font-bold">HERO.IO</h1>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;
