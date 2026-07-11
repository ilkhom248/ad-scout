"use client";

import { useEffect } from "react";
import { trackViewContent } from "../lib/analytics";

/** Fires a single ViewContent on the landing page mount (shared pixels). */
export default function ViewContentTracker() {
  useEffect(() => {
    trackViewContent({ content_name: "NeckReset", content_type: "product" });
  }, []);
  return null;
}
