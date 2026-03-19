"use client";

import Container from "@/components/Container";
import CardComponent from "@/components/home/partner/cardComponent";
import { partner, dasher } from "@/components/index";

const CardContent = [
  {
    title: "Become a Partner",
    description:
      "Grow your business and reach new customers by partnering with us.",
    btnValue: "Learn More",
    navigate: "/",
    image: partner,
    desctextColor: "#8E620A",
  },
  {
    title: "Become a Dasher",
    description:
      "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
    btnValue: "Start earning",
    navigate: "/",
    image: dasher,
    desctextColor: "#979797",
  },
];

const Partner = () => {
  return (
    <Container>
      <section className="min-h-[472px] w-full flex flex-col py-[24px] md:flex-row items-center md:justify-between gap-2.5">
        {CardContent.map((card) => {
          const handleClick = () => {
            console.log("Navigate to:", card.navigate);
          };

          return (
            <CardComponent
              key={card.title}
              desctextColor={card.desctextColor}
              bgImg={card.image}
              title={card.title}
              description={card.description}
              btnValue={card.btnValue}
              onclick={handleClick}
            />
          );
        })}
      </section>
    </Container>
  );
};

export default Partner;
