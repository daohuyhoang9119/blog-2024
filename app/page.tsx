import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[500px] bg-white">
      <div className="main-paragraph text-black">
        <p className="width-full font-bold text-4xl  py-4 border-b">About</p>
        <div className="grid grid-cols-2 gap-2 content-center">
          <div className="py-4 flex flex-col items-center space-x-2 ">
            <img
              src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9ib3R8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="rounded-full h-48 w-48"
            />
            <h3 className="text-2xl font-bold leading-8 tracking-tight">
              Ryan
            </h3>
            <p>😬Currently student</p>
            <p>Frontend Enginner | Data Engineer | Backend Engineer</p>
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
          <div className="">
            {/* <p className="width-full font-bold text-4xl py-4">
              Đào Huy Hoàng / Ryan
            </p> */}
            <p className=" text-xl py-4 max-w-[900px] leading-relaxed">
              Hello, I'm Hoang, a passionate and driven individual with a
              deep-rooted fascination for technology. At 24 years old, I've
              immersed myself in the world of computer science, specializing in
              web development and data manipulation using Python and JavaScript.
              My journey has been one of continuous learning and exploration,
              fueled by a relentless curiosity to unravel the intricacies of
              programming languages and their applications.
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
          </div>
        </div>
      </div>
    </main>
  );
}
