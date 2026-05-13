"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AssetPlaceholder } from "@/components/common/AssetPlaceholder";

const Scene = dynamic(() => import("./VesselScene").then((m) => m.VesselScene), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-bg-elevated" />,
});

interface VesselViewerProps {
  glbSrc?: string;
  fallbackAsset: string;
  className?: string;
}

export function VesselViewer({
  glbSrc = "/assets/jal-prahari/jal-prahari.glb",
  fallbackAsset,
  className,
}: VesselViewerProps) {
  const [hasGlb, setHasGlb] = useState<boolean | null>(null);

  useEffect(() => {
    fetch(glbSrc, { method: "HEAD" })
      .then((r) => setHasGlb(r.ok && !!r.headers.get("content-type")))
      .catch(() => setHasGlb(false));
  }, [glbSrc]);

  if (hasGlb === false || hasGlb === null) {
    return (
      <div className={className}>
        <AssetPlaceholder
          path={fallbackAsset}
          note="Drop a GLB at /assets/jal-prahari/jal-prahari.glb to enable the 3D viewer"
          ratio="aspect-[16/9]"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="relative aspect-[16/9] w-full overflow-hidden border border-rule bg-bg-elevated">
        <Suspense fallback={<div className="h-full w-full" />}>
          <Scene src={glbSrc} />
        </Suspense>
      </div>
    </div>
  );
}
