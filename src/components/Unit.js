import Link from "next/link";

const Unit = ({ unit, index }) => {
  const { slug, title, excerpt } = unit;
  return (
    <li className="border border-gray-200 border-t-0 relative z-10">
      <Link key={slug} href={`post/${slug}`}>
        <a
          className="relative block p-2 pl-8 pr-8 hover:bg-gray-100 transition-colors duration-200"
          href={`post/${slug}`}
        >
          <strong className="text-gray-400">{title}</strong>
          <br />
          <span className="text-sm text-gray-400 opacity-75">{excerpt}</span>
          <span className="absolute right-0 opacity-25 bottom-0 -mb-2 mr-2 left-auto text-gray-200 text-6xl">
            {index + 1}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default Unit;
