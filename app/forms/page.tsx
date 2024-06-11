import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { title } from "@/components/primitives";
export default function FormsPage() {
  return (
    <div>
      <h1 className={title()}>Froms</h1>
      <Button>
        <Link href="/forms/create">create</Link>

        <Link href="/forms/answer">answer</Link>
      </Button>
    </div>
  );
}
