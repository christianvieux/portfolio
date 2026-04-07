// sections/IntroSection.js
import Image from "next/image";
import { heroContent } from "../data/heroContent";
import Markdown from "react-markdown";
import { Chip } from "@heroui/react";
import Separator from "../components/Seperator";
import IntroSummary from "../components/IntroSummary";
import TechStack from "../components/TechStack";

export default function IntroSection({ className }) {
  const renderTagline = (content) => {
    return content.map((item, index) => (
      <span
        key={index}
        className={item.highlight ? "font-semibold text-primary" : ""}
      >
        {item.text}
      </span>
    ));
  };

  return (
    <section
      id="intro-section"
      className={`${className}`}
    >
      <div className="flex flex-col md:flex-row  max-w-6xl md:justify-between">
        <IntroSummary className={`py-8 md:max-w-[50%]`} />
        {/*  */}
        <Separator orientation="vertical" variant="tertiary" className="hidden md:block my-10 !mx-5 !w-0.5"/>
        {/*  */}
        <TechStack className="py-8"/>
      </div>
    </section>
  );
}
