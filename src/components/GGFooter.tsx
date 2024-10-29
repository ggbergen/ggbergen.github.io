import { useState } from 'react';
import { FaTwitch, FaDiscord, FaFacebook, FaYoutube } from 'react-icons/fa6';

export function GGFooter() {
  const [mail, setMail] = useState(
    <span
      className="h-4 cursor-pointer font-semibold text-white underline"
      onClick={() => {
        setMail(
          <a
            href="mailto:styret@ggbergen.org"
            className="h-4 cursor-pointer font-semibold text-white underline hover:underline md:no-underline"
          >
            styret@ggbergen.org
          </a>,
        );
      }}
    >
      Vis epost
    </span>,
  );

  return (
    <footer className="bg-red-600 p-8 text-white">
      <div className="container flex items-center justify-evenly gap-4">
        <div className="h-20">
          <h1 className="text-2xl font-bold">Kontakt oss</h1>
          {mail}
          <p>GG Bergen 915 014 879</p>
        </div>
        <img className="h-24" src="/logo.png"></img>
        <div className="h-20 text-right">
          <h1 className="text-2xl font-bold">Sosialt</h1>
          <div className="flex text-4xl">
            <FaDiscord />
            <FaFacebook />
            <FaTwitch />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
}
