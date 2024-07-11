import { HeadNav } from "./_components/home-head-nav";

export default function Layout({ children }) {
  return (
    <div className="bg-sky-200/10 h-full">
      <div className="bg-white z-50  sticky top-0  border-b border-zinc-300/40">
        <div className="sm:max-w-[1000px] p-2 m-auto">
          <HeadNav />
        </div>
      </div>
      <div className="sm:max-w-[1000px] p-3 m-auto">{children}</div>
      <div>{/* footer */}</div>
    </div>
  );
}
