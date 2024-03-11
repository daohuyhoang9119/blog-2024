import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-52 bg-white">
      <div className="main-paragraph text-black">
        <p className="width-full font-bold text-4xl">Đào Huy Hoàng / Ryan</p>
        <p className=" text-xl py-4 max-w-[900px] leading-relaxed">
          Hello, I'm Hoang, a passionate and driven individual with a
          deep-rooted fascination for technology. At 24 years old, I've immersed
          myself in the world of computer science, specializing in web
          development and data manipulation using Python and JavaScript. My
          journey has been one of continuous learning and exploration, fueled by
          a relentless curiosity to unravel the intricacies of programming
          languages and their applications.
        </p>
        <p className="font-bold text-2xl">Experiences ✍️</p>
        <p className="text-xl py-4 max-w-[900px] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem provident sapiente earum veritatis aliquid, libero
          asperiores quaerat ex odit neque? Deserunt minima obcaecati magnam
          rerum, nihil ratione consequatur repellat veritatis?
        </p>
        <p className="font-bold text-2xl">Education 📖</p>
        <p className="text-xl pt-4 max-w-[900px] leading-relaxed  text-orange-500 font-semibold ">
          University of Information Technology - VNUHCM
        </p>
        <p className="pb-4 text-xl font-xs">[2019 - 2024]</p>

        <p className="font-bold text-2xl mb-2">Contact 🤝</p>
        <ul className="grid grid-cols-2 w-4/5 text-xl gap-3">
          <li>
            <a href="#" className="underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Email
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Linked
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Github
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
