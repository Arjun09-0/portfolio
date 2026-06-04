import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  createElement,
  type ElementType,
  type HTMLAttributes,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

const portfolio = {
  name: "Nannuri Arjun Reddy",
  title: "AI & Full-Stack Developer",
  location: "India",
  phone: "+91 80749 43694",
  email: "n.arjunreddy893297@gmail.com",
  github: "https://github.com/Arjun09-0",
  resume: "/cv.pdf",
  education:
    "B.Tech in Artificial Intelligence & Data Science, KL University, India. Expected graduation: 2028.",
};

const portraitUrl =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const marqueeImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const aboutDecor = [
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    className:
      "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    className:
      "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    className:
      "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    className:
      "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

const skillGroups = [
  {
    number: "01",
    name: "Languages",
    description:
      "Python, Java, C, and SQL for building data workflows, backend services, and practical software systems.",
  },
  {
    number: "02",
    name: "Web & Backend",
    description:
      "React, Django, REST APIs, WebSockets, and MERN Stack experience for full-stack and real-time applications.",
  },
  {
    number: "03",
    name: "Machine Learning",
    description:
      "Pandas, NumPy, Scikit-learn, data preprocessing, model training, and feature engineering.",
  },
  {
    number: "04",
    name: "Databases & Tools",
    description:
      "MongoDB, Git, Tableau, Redis, Vercel, and Streamlit for shipping usable, production-minded projects.",
  },
];

const projects = [
  {
    number: "01",
    name: "EEG Emotion Classification",
    category: "Python / Scikit-learn / Streamlit",
    summary:
      "Built an end-to-end machine learning system to classify human emotions and detect eye state using EEG signal datasets, with preprocessing, normalization, feature scaling, and cloud deployment.",
    stats: "87% emotion accuracy / 86% eye-state accuracy",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    ],
  },
  {
    number: "02",
    name: "CollabBoard",
    category: "React / Django / WebSocket / Redis",
    summary:
      "Designed and developed a multi-user real-time collaborative whiteboard with simultaneous drawing sessions, Django Channels synchronization, REST APIs, persistent storage, and React-Konva canvas rendering.",
    stats: "Low-latency updates for concurrent users",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    ],
  },
  {
    number: "03",
    name: "AI-Ready Full-Stack Systems",
    category: "Engineering Focus",
    summary:
      "Portfolio focus across model workflows, scalable backend systems, and polished interfaces for practical AI-driven applications.",
    stats: "Python / React / Django / Data Science",
    images: [
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    ],
  },
];

type FadeInProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    as?: ElementType;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
  }
>;

function FadeIn({
  as = "div",
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...props
}: FadeInProps) {
  const Component = motion.create(as);

  return createElement(
    Component,
    {
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "50px", amount: 0 },
      transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] },
      ...props,
    },
    children,
  );
}

type MagnetProps = PropsWithChildren<{
  padding: number;
  strength: number;
  activeTransition: string;
  inactiveTransition: string;
  className?: string;
}>;

function Magnet({
  children,
  padding,
  strength,
  activeTransition,
  inactiveTransition,
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!inside) {
        setTransition(inactiveTransition);
        x.set(0);
        y.set(0);
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setTransition(activeTransition);
      x.set((event.clientX - centerX) / strength);
      y.set((event.clientY - centerY) / strength);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [activeTransition, inactiveTransition, padding, strength, x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, transition, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

function ContactButton({
  href = `mailto:${portfolio.email}`,
  label = "Contact Me",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 -outline-offset-[3px] outline-white transition-transform duration-200 hover:-translate-y-1 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      }}
    >
      {label}
    </a>
  );
}

function LiveProjectButton() {
  return (
    <a
      href={portfolio.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      GitHub
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}

function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <p
      ref={ref}
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
    >
      {text.split("").map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={text.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function AnimatedCharacter({
  character,
  index,
  total,
  progress,
}: {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, start + 0.18);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="opacity-0">{character}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {character}
      </motion.span>
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="z-20 flex w-full justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
        aria-label="Primary navigation"
      >
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Skills" ? "#skills" : `#${item.toLowerCase()}`}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      <FadeIn
        delay={0.15}
        y={40}
        className="relative z-0 mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5"
      >
        <h1 className="hero-heading w-full text-[13vw] font-black uppercase leading-none tracking-tight sm:text-[12vw] md:text-[10vw] lg:text-[9vw]">
          {portfolio.name}
        </h1>
      </FadeIn>

      <FadeIn delay={0.6} y={30}>
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
        >
          <img
            src={portraitUrl}
            alt={`${portfolio.name} portfolio portrait`}
            className="block w-full select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
        >
          {portfolio.title} building machine learning systems and real-time web applications
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const rowOne = marqueeImages.slice(0, 11);
  const rowTwo = marqueeImages.slice(11);

  useEffect(() => {
    const updateOffset = () => {
      const section = ref.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Moving project previews"
    >
      <MarqueeRow images={rowOne} x={offset - 200} />
      <MarqueeRow images={rowTwo} x={-(offset - 200)} className="mt-3" />
    </section>
  );
}

function MarqueeRow({
  images,
  x,
  className = "",
}: {
  images: string[];
  x: number;
  className?: string;
}) {
  return (
    <div
      className={`flex gap-3 ${className}`}
      style={{ transform: `translateX(${x}px)`, willChange: "transform" }}
    >
      {[...images, ...images, ...images].map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}

function AboutSection() {
  const text =
    "Artificial Intelligence and Data Science undergraduate with hands-on experience building machine learning systems, real-time collaborative web applications, and full-stack software using Python, React, and Django. Strong foundation in data preprocessing, model development, and scalable backend systems.";

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {aboutDecor.map((item) => (
        <FadeIn
          key={item.src}
          delay={item.delay}
          duration={0.9}
          x={item.x}
          y={0}
          className={`pointer-events-none absolute z-0 ${item.className}`}
        >
          <img src={item.src} alt="" loading="lazy" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text={text} />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none sm:mb-20 md:mb-28">
          Skills
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {skillGroups.map((skill, index) => (
          <FadeIn
            key={skill.number}
            delay={index * 0.1}
            className="flex gap-5 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:gap-8 sm:py-10 md:gap-14 md:py-12"
          >
            <span className="min-w-[2.4ch] text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {skill.number}
            </span>
            <div className="flex min-w-0 flex-col justify-center">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                {skill.name}
              </h3>
              <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                {skill.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh]">
      <motion.article
        className="sticky rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ top: `calc(6rem + ${index * 28}px)`, scale }}
      >
        <div className="flex flex-wrap items-end justify-between gap-5 pb-5 text-[#D7E2EA] sm:pb-7">
          <div className="flex flex-wrap items-end gap-4 sm:gap-6 md:gap-8">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none">
              {project.number}
            </span>
            <div className="pb-2">
              <p className="text-sm font-medium uppercase tracking-widest opacity-70 sm:text-base">
                {project.category}
              </p>
              <h3 className="mt-1 text-[clamp(1.8rem,4vw,4.6rem)] font-black uppercase leading-none tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 max-w-3xl text-sm font-light leading-relaxed opacity-75 sm:text-base">
                {project.summary}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest opacity-70 sm:text-sm">
                {project.stats}
              </p>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-[40%_60%]">
          <div className="grid gap-3">
            <img
              src={project.images[0]}
              alt={`${project.name} preview one`}
              loading="lazy"
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
            <img
              src={project.images[1]}
              alt={`${project.name} preview two`}
              loading="lazy"
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={project.images[2]}
            alt={`${project.name} main preview`}
            loading="lazy"
            className="h-[clamp(300px,39vw,582px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.article>
    </div>
  );
}

function ContactFooter() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 pb-16 text-center text-[#D7E2EA]"
    >
      <FadeIn y={30} className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <h2 className="hero-heading text-[clamp(2.6rem,9vw,120px)] font-black uppercase leading-none tracking-tight">
          Contact
        </h2>
        <p className="max-w-2xl text-[clamp(1rem,2vw,1.25rem)] font-light leading-relaxed">
          {portfolio.education}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest sm:text-base">
          <a className="transition-opacity hover:opacity-70" href={`mailto:${portfolio.email}`}>
            {portfolio.email}
          </a>
          <span className="opacity-40">/</span>
          <a className="transition-opacity hover:opacity-70" href={`tel:${portfolio.phone.replace(/\s/g, "")}`}>
            {portfolio.phone}
          </a>
          <span className="opacity-40">/</span>
          <a
            className="transition-opacity hover:opacity-70"
            href={portfolio.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <ContactButton />
          <ContactButton href={portfolio.resume} label="Resume" />
        </div>
      </FadeIn>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
