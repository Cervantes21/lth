import Link from "next/link";

export const MarcaBanner = () => {
  return (
    <div className="bg-grey-lth w-full mt-[160px] py-7">
      <Link href="/lth" className="block w-fit mx-auto">
        <img
          className="mx-auto w-36"
          alt="lth logo"
          src="/lth-logo-1.png"
        ></img>
      </Link>
    </div>
  );
};
