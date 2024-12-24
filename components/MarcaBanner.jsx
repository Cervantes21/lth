import Link from "next/link";

export const MarcaBanner = () => {
  return (
    <div className="bg-grey-lth w-full mt-8 lg:mt-8 py-7 lg:py-16">
      <Link href="/lth" className="block w-fit mx-auto">
        <img
          className="mx-auto w-36 lg:w-72"
          alt="lth logo"
          src="/lth-logo-1.png"
        ></img>
      </Link>
    </div>
  );
};
