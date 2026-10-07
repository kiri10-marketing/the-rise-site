"use client";
import Image from "next/image";
import { useState } from "react";
import { residences } from "@/content/copy";

export default function ResidenceTabs() {
  const [active, setActive] = useState(residences.tabs[1].key);
  const tab = residences.tabs.find((t) => t.key === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Residences" className="flex flex-wrap justify-center gap-x-8 gap-y-2 border-b border-line">
        {residences.tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={t.key === active}
            aria-controls={`panel-${t.key}`}
            onClick={() => setActive(t.key)}
            className={`-mb-px min-h-[52px] border-b-2 px-1 text-[0.85rem] uppercase tracking-[0.22em] transition-colors ${t.key === active ? "border-ink text-ink" : "border-transparent text-body hover:text-ink"}`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${tab.key}`} aria-labelledby={`tab-${tab.key}`} className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <figure className="bg-paper p-3 sm:p-6">
          <div className="relative aspect-[2460/1040] w-full">
            <Image key={tab.plan} src={tab.plan} alt={`Concept floor plan, ${tab.name}`} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-contain" />
          </div>
          <figcaption className="mt-3 text-center text-sm text-body">Concept plan · west deck on the left · not to scale</figcaption>
        </figure>
        <div>
          <p className="eyebrow">{tab.level}</p>
          <h3 className="display h-md mt-3">{tab.name}</h3>
          <dl className="mt-8 grid grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-stone p-4"><dt className="text-xs uppercase tracking-[0.2em]">Interior</dt><dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-ink">{tab.interior}</dd></div>
            <div className="bg-stone p-4"><dt className="text-xs uppercase tracking-[0.2em]">Outdoor</dt><dd className="mt-1 font-[family-name:var(--font-display)] text-3xl text-ink">{tab.deck.split(" ")[0]} {tab.deck.split(" ")[1]}</dd><dd className="text-sm">{tab.deck.split(" ").slice(2).join(" ")}</dd></div>
          </dl>
          <ul className="mt-8 grid gap-3">
            {tab.points.map((p) => (
              <li key={p} className="flex gap-4"><span aria-hidden="true" className="mt-[0.85em] h-px w-6 shrink-0 bg-bronze" /><span>{p}</span></li>
            ))}
          </ul>
          <p className="mt-8 text-sm uppercase tracking-[0.2em] text-ink">{residences.price}</p>
        </div>
      </div>
    </div>
  );
}
