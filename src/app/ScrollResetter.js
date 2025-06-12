"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollResetter() {
  const pathname = usePathname();

  useEffect(() => {
    // URLにハッシュがあったら消す
    if (window.location.hash) {
      const { pathname, search } = window.location;
      history.replaceState(null, "", pathname + search);
    }

    // トップにスクロール
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}