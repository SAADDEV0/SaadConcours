import { Suspense } from "react";
import Skeleton from "@/app/admin/_components/ui/Skeleton";
import BacEditor from "./BacEditor";

export const metadata = { title: "Modifier un chapitre · Cours Bac" };

export default function BacModifierPage() {
  return (
    <Suspense fallback={<Skeleton lines={10} />}>
      <BacEditor />
    </Suspense>
  );
}
