import React from "react";

export const SubHeading: React.FC<{ text: string; privacy?: boolean }> = ({
  text,
  privacy,
}) => {
  return (
    <h2
      className={`my-[30px] font-serif leading-[1.2] text-darkblue ${!privacy ? "uppercase text-center after:m-auto" : "after:ml-14"} text-[2.4rem] font-thin pb-[5px] relative after:content-[''] after:absolute after:top-[55px] after:h-[2px] after:left-0 after:right-0 mx-auto after:w-[100px] after:bg-mediumdarkblue`}
    >
      {text}
    </h2>
  );
};

export const Section = React.forwardRef<
  HTMLElement,
  { children: React.ReactNode; id: string }
>(({ children, id }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className="text-darkblue text-xl h-auto py-[30px] px-[40px]"
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";
