export default function Article() {
  return (
    <div className="flex flex-col  space-x-3 rounded-lg bg-stone-50 w-80 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1723250573601-3cc941920745?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={320}
      />

      <div className="space-y-2 py-2 px-4">
        <h1 className="font-bold text-lg">My post lorem title for my blog</h1>
        <p className="w-fit">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          assumenda molestiae, doloribus aliquam inventore tempore nesciunt nisi
          repellat odit, maxime nobis beatae placeat, labore sed explicabo totam
          neque. Quasi, quos!
        </p>
        <p className="text-right text-xs font-bold">Lucas Winicius - 06 ago 2024</p>
      </div>
    </div>
  );
}
