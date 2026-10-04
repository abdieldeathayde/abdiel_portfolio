"use client";

import { useState } from "react";

const links = [
  ["Sobre", "#sobre"],
  ["Projetos", "#projetos"],
  ["Experiência", "#experiencia"],
  ["Habilidades", "#habilidades"],
  ["Formação", "#formacao"],
  ["Contato", "#contato"],
] as const;

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#inicio"
          className="font-semibold tracking-tight text-white"
          onClick={() => setIsOpen(false)}
        >
          Abdiel<span className="text-accent">.</span>
        </a>
        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
        <ul
          id="main-menu"
          className={`${isOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[4.25rem] flex-col gap-1 rounded-2xl border border-white/10 bg-panel p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-accent md:px-0 md:py-1"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
