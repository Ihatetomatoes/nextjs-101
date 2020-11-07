import Link from "next/link";

const Unit = ({ unit }) => {
  const { slug, title, excerpt } = unit;
  return (
    <li className="border border-gray-200 border-t-0 relative z-10">
      <Link key={slug} href={`post/${slug}`}>
        <a
          className="block p-4 hover:bg-gray-100 transition-colors duration-200"
          href={`post/${slug}`}
        >
          <strong>{title}</strong>
          <br />
          <span className="text-sm text-gray-400">{excerpt}</span>
        </a>
      </Link>
    </li>
  );
};

export default Unit;
