import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="items-center  flex flex-col lg:flex-row lg:max-w-7xl mx-auto">
      <div className="flex-1">
        <Image
          src="/Profile.png"
          alt=""
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex-1 px-14 mt-4">
        <h1 className="p-2 font-bold text-2xl underline underline-offset-4">
          About Me
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          alias facilis, necessitatibus voluptate laborum vero. Inventore
          tenetur laboriosam quaerat consectetur, repellendus dolorum explicabo
          officia itaque modi esse repudiandae eaque atque? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Laudantium voluptatibus, qui
          cumque ipsa obcaecati deleniti! Quo quibusdam deleniti modi sint quae
          accusamus hic, et molestiae obcaecati consequatur omnis mollitia?
          Ipsa!Lorem
        </p>
        <button className="w-40  text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-4 my-4 text-center me-2 mb-2">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
