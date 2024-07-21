import { BusinessNameCombobox } from "./_sub-components/business-name";
import { Profile } from "./_sub-components/profile";

export const HeadNav = () => {
  return (
    <div className="flex m-auto md:w-[1000px] items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="flex items-center tracking-wider text-4xl font-extrabold">
          <span className="text-rose-700 ">kom</span>
          <span>rada</span>
        </div>

        <div className="text-zinc-400/70 text-4xl">/</div>

        <div>
          <BusinessNameCombobox />
        </div>
        <div className="text-zinc-400/70 text-4xl">/</div>
      </div>

      <div>
        <Profile />
      </div>
    </div>
  );
};
