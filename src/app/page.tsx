import Image from "next/image";
import { SiteNav } from "@/components/site-nav";

type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  technologies?: string[];
};

type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "Gerenciamento de Estoque",
    description:
      "Sistema web com suporte à importação massiva de dados via arquivos Excel (XLSX), construído com Java, Spring Boot, MySQL e interface responsiva.",
    image: "/assets/SistemaEstoque.png",
    imageAlt: "Interface do sistema de gerenciamento de estoque",
    href: "https://github.com/abdieldeathayde/Estoque",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Sistema de Restaurante",
    description:
      "Gerenciamento para restaurantes com foco na otimização do fluxo de pedidos, mesas e cadastros. Desenvolvido com Spring Boot para uma API RESTful e MySQL para persistência de dados.",
    image: "/assets/baixados.jpeg",
    imageAlt: "Código da aplicação de restaurante",
    href: "https://github.com/abdieldeathayde/RestauranteApp",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "AgendaAI — Sistema de Agendamento",
    description:
      "Aplicação web para organizar clientes, profissionais, serviços, horários e agendamentos. Desenvolvida com ReactJS, Next.js, Tailwind CSS e TypeScript, utiliza localStorage para salvar os dados localmente no navegador.",
    image: "/assets/AgendaAI.png",
    imageAlt: "Interface do sistema AgendaAI",
    href: "https://agenda-ai-ts.vercel.app/dashboard",
    
    technologies: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Real Car & Service",
    description:
      "Landing page institucional para apresentação de serviços mecânicos, com integração direta para contato via WhatsApp e formulário web.",
    image: "/assets/portfolio RealCar.jpeg",
    imageAlt: "Prévia da landing page Real Car Service",
    href: "https://siterealcareservice.vercel.app/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Sistema de Biblioteca",
    description:
      "Aplicação web para gestão de acervo, empréstimos, devoluções e usuários, com integração entre frontend e backend.",
    image: "/assets/baixados.jpeg",
    imageAlt: "Código da aplicação de biblioteca",
    href: "https://github.com/abdieldeathayde/Biblioteca-Web",
    technologies: ["Frontend", "Backend"],
  },
  {
    title: "IF-Eventos (IFSC Gaspar)",
    description:
      "Aplicativo Android nativo em Kotlin para controle de presenças, tarefas e inscrições em eventos acadêmicos para alunos e servidores.",
    image: "/assets/AppIFSC.jpeg",
    imageAlt: "Interface do aplicativo IF-Eventos",
    href: "https://github.com/abdieldeathayde/IFSCEventosKotlin.git",
    technologies: ["Kotlin", "Android"],
  },
];

const experiences: Experience[] = [
  {
    role: "Técnico de Infraestrutura de TI",
    company: "Governança Brasil",
    period: "Atual",
    summary:
      "Atuação no suporte e manutenção da infraestrutura de TI corporativa, garantindo disponibilidade, segurança e desempenho dos ambientes operacionais.",
    highlights: [
      "Gestão e monitoramento de ambientes de rede, servidores e sistemas operacionais.",
      "Suporte técnico na resolução de incidentes e apoio ao gerenciamento de sistemas corporativos.",
      "Otimização de rotinas de suporte e melhoria contínua dos processos de TI.",
    ],
    technologies: [
      "Infraestrutura de TI",
      "Redes",
      "Linux / Windows Server",
      "Suporte Técnico",
      "Gestão de Incidentes",
    ],
  },
  {
    role: "Jovem Aprendiz — Automação de Processos (RPA)",
    company: "Bunge Alimentos",
    period: "2021 - 2023",
    summary:
      "Atuação em automação de processos corporativos, com foco em tarefas repetitivas e otimização de atividades operacionais.",
    highlights: [
      "Execução, acompanhamento e suporte a processos automatizados com Blue Prism.",
      "Monitoramento de processos pelo Control Room e acompanhamento dos fluxos.",
      "Identificação de inconsistências e validação dos resultados das automações.",
      "Identificação de oportunidades de automação e melhoria contínua.",
    ],
    technologies: [
      "RPA",
      "Blue Prism",
      "Control Room",
      "Automação de Processos",
      "Melhoria Contínua",
    ],
  },
];

const skills = [
  { name: "Java", mark: "J", featured: true },
  { name: "Spring Boot", mark: "S", featured: true },
  { name: "MySQL", mark: "DB", featured: true },
  { name: "Docker", mark: "D", featured: true },
  { name: "Spring Data JPA", mark: "JPA" },
  { name: "Spring Security", mark: "SEC" },
  { name: "APIs RESTful", mark: "API" },
  { name: "SQL", mark: "SQL" },
  { name: "ReactJS", mark: "R" },
  { name: "TypeScript", mark: "TS" },
  { name: "Next.js", mark: "N" },
  { name: "Tailwind CSS", mark: "TW" },
  { name: "JavaScript", mark: "JS" },
  { name: "Angular", mark: "A" },
  { name: "Python", mark: "Py" },
  { name: "Django", mark: "D" },
  { name: "Django REST Framework", mark: "API" },
  { name: "Git / GitHub", mark: "Git" },
];

const education = [
  {
    level: "Graduação",
    title: "Análise e Desenvolvimento de Sistemas",
    completion: "Concluído em 12/2025",
    institution: "IFSC — Instituto Federal de Santa Catarina",
    description:
      "Foco em engenharia de software, arquitetura de sistemas, estruturas de dados e desenvolvimento de aplicações corporativas.",
  },
  {
    level: "Técnico",
    title: "Curso Técnico em Informática",
    completion: "Concluído em 08/2018",
    institution: "IFSC — Instituto Federal de Santa Catarina",
    description:
      "Fundamentos de lógica de programação, arquitetura de computadores, redes de computadores e desenvolvimento web.",
  },
  {
    level: "Especialização",
    title: "Formação Java Developer & Ecossistema Spring",
    completion: "",
    institution: "Cursos de Extensão e Certificações",
    description:
      "Aprofundamento em APIs RESTful, Spring Boot, Spring Security, Spring Data JPA, testes automatizados e containers com Docker.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="inicio" className="overflow-hidden">
        <section className="relative flex min-h-[720px] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-[800px]">
          <div className="pointer-events-none absolute -right-40 top-24 h-[32rem] w-[32rem] rounded-full bg-teal-300/10 blur-[120px]" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Olá, eu sou Abdiel
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Desenvolvedor{" "}
                <span className="text-accent">Back-end</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Desenvolvo APIs e aplicações back-end robustas com Java e
                Spring, utilizando MySQL para persistência e Docker para
                conteinerização.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="rounded-xl bg-accent px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-teal-200"
                >
                  Explorar projetos <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#contato"
                  className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-accent/60 hover:text-accent"
                >
                  Entrar em contato
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
                {["Java", "Spring Boot", "MySQL", "Docker"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-10 flex items-center gap-5">
                <ExternalLink
                  href="https://github.com/abdieldeathayde"
                  className="text-sm text-slate-400 transition hover:text-accent"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </ExternalLink>
                <ExternalLink
                  href="https://www.linkedin.com/in/abdieldeathayde"
                  className="text-sm text-slate-400 transition hover:text-accent"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </ExternalLink>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-accent/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-panel p-4 shadow-glow">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                  <Image
                    src="/assets/foto-perfil.jpeg"
                    alt="Foto de perfil de Abdiel de Athayde"
                    width={640}
                    height={760}
                    priority
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-5">
                  <div>
                    <p className="font-semibold text-white">Abdiel de Athayde</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Back-end · Java & Spring
                    </p>
                  </div>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Portfólio
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-white/10 bg-panel/95 px-5 py-4 shadow-xl sm:block">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Stack principal
                </p>
                <p className="mt-2 font-medium text-white">
                  Java <span className="text-accent">+</span> Spring
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-24 border-t border-white/5 px-5 py-24 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="01 / Perfil" title="Sobre mim" />
            <div>
              <p className="text-lg leading-8 text-slate-300">
                Sou desenvolvedor back-end com foco em Java e Spring Boot.
                Construo APIs RESTful e aplicações com persistência em MySQL,
                utilizando Docker para conteinerização e organização do
                ambiente.
              </p>
              <p className="mt-5 leading-8 text-slate-400">
                Também tenho experiência com Python, Django, ReactJS,
                TypeScript, Next.js e Tailwind CSS, além de persistência de
                dados e arquitetura de sistemas. Na minha trajetória
                profissional, atuei com automação de processos internos usando
                RPA e com infraestrutura corporativa de TI.
              </p>
              <p className="mt-5 leading-8 text-slate-400">
                Estou sempre buscando novos desafios e oportunidades para
                evoluir profissionalmente e aplicar meus conhecimentos em
                projetos reais.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
                {[
                  ["6+", "Projetos concluídos"],
                  ["2+", "Anos de experiência"],
                  ["10+", "Tecnologias principais"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="text-3xl font-semibold text-accent">{value}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="scroll-mt-24 border-t border-white/5 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="02 / Seleção"
              title="Projetos em destaque"
              description="Uma seleção de aplicações e soluções que representam minha experiência em desenvolvimento."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/70 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panel"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={720}
                      height={450}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/75 px-3 py-1 text-xs text-white backdrop-blur">
                      Projeto {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>
                    {project.technologies && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                    <ExternalLink
                      href={project.href}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
                    >
                      Ver projeto <span aria-hidden="true">↗</span>
                    </ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="scroll-mt-24 border-t border-white/5 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="03 / Trajetória"
              title="Experiência profissional"
              description="Experiências que fortaleceram minha capacidade de resolver problemas, colaborar e melhorar processos."
            />
            <div className="space-y-5">
              {experiences.map((experience) => (
                <article
                  key={experience.role}
                  className="rounded-2xl border border-white/10 bg-panel/70 p-6 sm:p-8"
                >
                  <div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-1 font-medium text-accent">
                        {experience.company}
                      </p>
                    </div>
                    <span className="w-fit rounded-full bg-white/5 px-3 py-1 text-sm text-slate-400">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mt-5 leading-7 text-slate-400">
                    {experience.summary}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="scroll-mt-24 border-t border-white/5 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="04 / Ferramentas"
              title="Habilidades técnicas"
              description="Foco em desenvolvimento back-end com Java e Spring, bancos de dados relacionais e conteinerização, complementado por tecnologias front-end e ferramentas da minha experiência."
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-4 rounded-xl border p-4 transition hover:-translate-y-0.5 ${
                    skill.featured
                      ? "border-accent/25 bg-accent/[0.06] hover:border-accent/50"
                      : "border-white/10 bg-panel/50 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-lg text-xs font-bold ${
                      skill.featured
                        ? "bg-accent text-ink"
                        : "bg-white/5 text-slate-300"
                    }`}
                  >
                    {skill.mark}
                  </span>
                  <span className="text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" className="scroll-mt-24 border-t border-white/5 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="05 / Aprendizado"
              title="Formação acadêmica"
            />
            <div className="relative ml-2 space-y-8 border-l border-white/10 pl-7 sm:ml-4 sm:pl-10">
              {education.map((item) => (
                <article key={item.title} className="relative">
                  <span className="absolute -left-[2.15rem] top-1 h-3 w-3 rounded-full border-2 border-ink bg-accent ring-4 ring-accent/10 sm:-left-[2.9rem]" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {item.level}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  {item.completion && (
                    <p className="mt-1 text-sm text-slate-500">
                      {item.completion}
                    </p>
                  )}
                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {item.institution}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="scroll-mt-24 border-t border-white/5 px-5 py-24 sm:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-accent/20 bg-panel px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                06 / Vamos conversar
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tem um projeto em mente?
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                Sinta-se à vontade para me enviar uma mensagem ou conectar-se
                comigo nas redes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:abdieldeathayde67@gmail.com"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-teal-200"
                >
                  Enviar e-mail
                </a>
                <ExternalLink
                  href="https://wa.me/5547984849363"
                  className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-accent/50 hover:text-accent"
                >
                  WhatsApp
                </ExternalLink>
                <ExternalLink
                  href="https://www.linkedin.com/in/abdieldeathayde"
                  className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-accent/50 hover:text-accent"
                >
                  LinkedIn
                </ExternalLink>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                abdieldeathayde67@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        © 2026 Abdiel de Athayde · Desenvolvido com cuidado.
      </footer>
    </>
  );
}
