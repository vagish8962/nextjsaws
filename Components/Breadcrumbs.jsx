import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = ({ crumbs }) => {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <div className="container mx-auto">
      <div className="flex ml-3 text-lg tracking-wider font-unilevershillingMedium py-4">
        {crumbs.map((crumb, index) => (
          <span
            className={`flex ${
              currentUrl === crumb.route ? "font-bold" : "font-semibold pr-1"
            }`}
            key={crumb.route}
          >
            {index > 0 && " / "}
            {crumb.route !== currentUrl ? (
              <Link href={crumb.route}>{crumb.label}</Link>
            ) : (
              crumb.label
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
