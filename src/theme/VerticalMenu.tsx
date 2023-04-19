const HomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const StatIcon = (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="white"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>
)

const verticalLinks: Array<{
  title: string;
  path: string;
  img: any;
}> = [
  {
    title: 'Home',
    path: './',
    img: HomeIcon
  },
  {
    title: 'Parcours',
    path: './',
    img: HomeIcon
  },
  {
    title: 'Modules',
    path: './',
    img: StatIcon
  },
  {
    title: 'Statistics',
    path: './',
    img: HomeIcon
  },
  {
    title: 'Messages',
    path: './',
    img: StatIcon
  },
  {
    title: 'Notifications',
    path: './',
    img: HomeIcon
  }
];

export const VerticalMenu = (
  <div className="flex">
   <ul className="menu bg-base-100 rounded-box ">
          {verticalLinks.map((link) => (
            <li key={link.path}>
              <a tabIndex={0} href={link.path}>
                {link.img}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1"></div>
  </div>
);
