import Image from "next/image";

const AboutWebsite = () => {
  return (
    <div className="flex items-center flex-col py-10 lg:flex-row ">
      <div className="flex flex-col items-center flex-1 gap-4 px-8">
        <h3 className="text-xl font-medium">Hi I am Amazing Devoloper</h3>
        <h1 className="font-bold text-2xl">
          Creative FullStack WebApplication Devoloper
        </h1>
        <p className="font-medium font-sm">
          I am design and code beautiful simple things and i love what i am
          doing
        </p>
      </div>
      <div className="flex-1 mt-20 items-center justify-center ">
        <Image
          src="/Websitelogo.jpg"
          alt=""
          width={200}
          height={200}
          className=""
        />
      </div>
    </div>
  );
};

export default AboutWebsite;
