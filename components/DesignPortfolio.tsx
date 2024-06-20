import { TabsDemo } from "./ui/TabsforUse";

const DesignPortfolio = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Curated Selection of <span className="text-purple">My Designs</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <TabsDemo />
      </div>
    </div>
  );
};

export default DesignPortfolio;
