import React from "react";

type CTAProps = {
  name: string;
  href: string;
  disabled?: boolean;
};

const CTA = ({ name, href, disabled = false }: CTAProps) => {
  if (disabled) {
    return (
      <button
        disabled
        className="flex justify-center w-full col-span-2 px-20 py-6 text-xl font-semibold text-white cursor-not-allowed gradient-disabled"
      >
        {name}
      </button>
    );
  }

  return (
    <a
      href={href}
      className="flex justify-center w-full col-span-2 px-20 py-6 text-xl font-semibold text-white gradient"
    >
      {name}
    </a>
  );
};

export default CTA;
