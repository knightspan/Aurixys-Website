import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { JalPrahari } from "@/components/sections/JalPrahari";
import { SecondaryProducts } from "@/components/sections/SecondaryProducts";
import { Missions } from "@/components/sections/Missions";
import { Shloka } from "@/components/sections/Shloka";
import { Recognition } from "@/components/sections/Recognition";
import { Partners } from "@/components/sections/Partners";
import { Team } from "@/components/sections/Team";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <JalPrahari />
      <SecondaryProducts />
      <Missions />
      <Shloka />
      <Recognition />
      <Partners />
      <Team />
      <Press />
      <Contact />
    </>
  );
}
