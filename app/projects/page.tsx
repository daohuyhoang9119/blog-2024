import ProjectItem from "./components/project-item";
export default function Project() {
  return (
    <section className="px-48 py-8 bg-white text-black">
      <p className="text-7xl my-8">Projects</p>
      <div className="grid grid-cols-3 gap-28 grid-rows-3 mx-16">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </section>
  );
}
