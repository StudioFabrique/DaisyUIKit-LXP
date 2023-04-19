const Img = 'https://daisyui.com/tailwind-css-component-profile-1@94w.jpg';

export const Avatars = (
  <>
    <div className="flex justify-center">
      <div className="space-x-2">
        <div className="placeholder avatar offline">
          <div className="bg-neutral-focus text-neutral-content w-24 rounded-full">
            <span className="text-3xl">CP</span>
          </div>
        </div>
        <div className="placeholder avatar online">
          <div className="bg-neutral-focus text-neutral-content w-16 rounded-full">
            <span className="text-xl">CC</span>
          </div>
        </div>
        <div className="placeholder avatar">
          <div className="bg-neutral-focus text-neutral-content ring-primary w-12 rounded-full ring">
            <span>MD</span>
          </div>
        </div>
        <div className="placeholder avatar">
          <div className="bg-neutral-focus text-neutral-content w-8 rounded-full">
            <span className="text-xs">AA</span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div className="space-x-2">
        <div className="placeholder avatar offline">
          <div className="mask mask-squircle w-8">
            <img src={Img} alt="test" />
          </div>
        </div>
        <div className="placeholder avatar online">
          <div className="mask mask-squircle w-12">
            <img src={Img} alt="test" />
          </div>
        </div>
        <div className="placeholder avatar">
          <div className="mask mask-squircle w-16">
            <img src={Img} alt="test" />
          </div>
        </div>
        <div className="placeholder avatar">
          <div className="mask mask-squircle w-24">
            <img src={Img} alt="test" />
          </div>
        </div>
      </div>
    </div>
  </>
);
