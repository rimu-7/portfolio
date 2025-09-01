import React from "react";
import { 
  SiReact, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
const ReactLogo = () => <SiReact className="w-full h-full" />;
const TailwindLogo = () => <SiTailwindcss className="w-full h-full" />;
const NextjsLogo = () => <SiNextdotjs className="w-full h-full" />;
const JSLogo = () => <SiJavascript className="w-full h-full" />;
const TSLogo = () => <SiTypescript className="w-full h-full" />;
const GolangLogo = () => <FaGolang className="w-full h-full" />;

const logos1 = [
  {
    id: 1,
    component: <ReactLogo />,
  },
  {
    id: 3,
    component: <TailwindLogo />,
  },
  {
    id: 5,
    component: <NextjsLogo />,
  },
  {
    id: 9,
    component: <GolangLogo />,
  },
  {
    id: 7,
    component: <JSLogo />,
  },
  {
    id: 8,
    component: <TSLogo />,
  },
  {
    id: 1,
    component: <ReactLogo />,
  },
  {
    id: 3,
    component: <TailwindLogo />,
  },
  {
    id: 5,
    component: <NextjsLogo />,
  },
  {
    id: 9,
    component: <GolangLogo />,
  },
  {
    id: 7,
    component: <JSLogo />,
  },
  {
    id: 8,
    component: <TSLogo />,
  },
  {
    id: 1,
    component: <ReactLogo />,
  },
  {
    id: 3,
    component: <TailwindLogo />,
  },
  {
    id: 5,
    component: <NextjsLogo />,
  },
  {
    id: 7,
    component: <JSLogo />,
  },
  {
    id: 9,
    component: <GolangLogo />,
  },
  {
    id: 8,
    component: <TSLogo />,
  },
];

function Logomarquee() {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  
  const Marquee = ({ logos, direction = "forwards" }) => {
    const numItems = logos.length;
    const speed = "25s";
    const itemWidth = "120px";
    const itemGap = "25px";
    
    return (
      <div
        className="max-w-7xl mx-auto overflow-hidden"
        style={{
          "--speed": speed,
          "--numItems": numItems,
          "--item-width": itemWidth,
          "--item-gap": itemGap,
          "--direction": direction,
          maskImage:
            "linear-gradient(to right, transparent, black 2rem, black calc(100% - 2rem), transparent)",
        }}
      >
        <div
          className="w-max flex"
          style={{
            "--track-width": `calc(var(--item-width) * ${numItems})`,
            "--track-gap": `calc(var(--item-gap) * ${numItems})`,
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center bg-white/10 border border-black rounded-2xl text-white"
              style={{
                width: "var(--item-width)",
                aspectRatio: "1 / 1.2",
                marginRight: "var(--item-gap)",
                animation: `marquee-move var(--speed) linear infinite ${direction}`,
              }}
            >
              <div className="w-3/5 h-auto">{logo.component}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="items-center overflow-hidden">
      <div className="w-full flex flex-col gap-y-6">
        <Marquee logos={logos1} />
      </div>
    </div>
  );
}

export default Logomarquee;