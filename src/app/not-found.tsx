import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const NotFound = () => {
  return (
    <section>
      <div className="wrapper h-[80vh] flex flex-col items-center justify-center gap-5 text-center">
        <div>
          <p className="text-primary">404</p>
          <h1 className="text-4xl sm:text-5xl text-black/90 dark:text-white/90 font-black font-nunito mb-2">
            Page Not Found
          </h1>
          <p className="text-black/70 dark:text-white/70">
            Sorry, we could&#39;nt find the page you&#39;re looking for.
          </p>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row sm:items-center">
          <Link href="/">
            <Button className="w-full">Got back home</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">
              Contact support <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
