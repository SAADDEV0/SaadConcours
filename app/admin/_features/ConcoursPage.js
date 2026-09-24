"use client";

import Link from "next/link";
import Icon from "../_ui/Icon";
import ContentList from "./ContentList";
import { num } from "../_lib/format";

export default function ConcoursPage() {
  return (
    <ContentList
      collectionKey="concours"
      hero={{
        icon: "📝",
        eyebrow: "Contenu · Concours Master",
        title: "Concours d'accès aux Masters",
        text: "Sujets réels, corrigés et scans. Un brouillon reste invisible sur le site ; le score de qualité montre ce qui manque à chaque fiche.",
        newLabel: "Nouveau concours",
      }}
      extraActions={
        <>
          <Link className="ax-btn" href="/admin/concours/couverture">
            <Icon name="grid" size="sm" /> Couverture
          </Link>
          <Link className="ax-btn" href="/admin/concours/import">
            <Icon name="upload" size="sm" /> Importer
          </Link>
        </>
      }
      heroStats={(list, ctx) => {
        const sans = list.filter((c) => !c.corrige_md && !ctx.corrigeFiles.has(c.id)).length;
        const scans = list.filter((c) => !(c.images || []).length).length;
        return [
          { value: num(sans), label: "sans corrigé" },
          { value: num(scans), label: "sans scan" },
        ];
      }}
    />
  );
}
