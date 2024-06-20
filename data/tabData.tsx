const divClassName =
  "w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white border border-white/[0.1] bg-[#13162d]";
const imgClassName =
  "object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto";

export const tabs = [
  {
    title: "Agrodesh",
    value: "Agrodesh",
    content: (
      <a
        className="cursor-pointer"
        href="https://www.figma.com/proto/c1FODdohtYAwUFLsDqzPug/AgroDesh?node-id=14-299&starting-point-node-id=14%3A51"
      >
        <div className={divClassName}>
          <p>Agrodesh App</p>
          <img
            src="/AgrodeshApp.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
  {
    title: "LitterNot",
    value: "LitterNot",
    content: (
      <a
        className="cursor-pointer"
        href="https://www.figma.com/proto/YPa9U6RwqQBvhg3uwFgLgk/litterNot?node-id=2-144&starting-point-node-id=2%3A19"
      >
        <div className={divClassName}>
          <p>LitterNot App</p>
          <img
            src="/LitterNotApp.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
  {
    title: "Ferrara",
    value: "Ferrara",
    content: (
      <a
        className="cursor-pointer"
        href="https://dribbble.com/shots/24196572-Concept-for-a-Landscaping-Website"
      >
        <div className={divClassName}>
          <p>Ferrara Landscaping Website</p>
          <img
            src="/GardeningWebsite.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
  {
    title: "Rhea",
    value: "Rhea",
    content: (
      <a
        className="cursor-pointer"
        href="https://dribbble.com/shots/24383201-Rhea-Fine-Dining-Concept"
      >
        <div className={divClassName}>
          <p>Rhea Fine Dining Website</p>
          <img
            src="/RestaurantWebsite.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
  {
    title: "JDoodle",
    value: "JDoodle",
    content: (
      <a
        className="cursor-pointer"
        href="https://dribbble.com/shots/21390865-Website-for-an-IDE"
      >
        <div className={divClassName}>
          <p>JDoodle IDE Website</p>
          <img
            src="/CodingWebsite.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
  {
    title: "FreeGuides",
    value: "FreeGuides",
    content: (
      <a
        className="cursor-pointer"
        href="https://dribbble.com/shots/21377511-Landing-Page-for-a-Startup"
      >
        <div className={divClassName}>
          <p>FreeGuides App Website</p>
          <img
            src="/HostelAppWebsite.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
  {
    title: "Live and Fresh",
    value: "Live and Fresh",
    content: (
      <div className={divClassName}>
        <p>Live and Fresh Website</p>
        <img
          src="/SeafoodCompanyWebsite.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className={imgClassName}
        />
      </div>
    ),
  },
  {
    title: "Nomad",
    value: "Nomad",
    content: (
      <a
        className="cursor-pointer"
        href="https://dribbble.com/shots/21377530-Hauling-Company-Website"
      >
        <div className={divClassName}>
          <p>Nomad Trucking Website</p>
          <img
            src="/TruckingWebsite.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className={imgClassName}
          />
        </div>
      </a>
    ),
  },
];
