export type WorkApi = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url: string | null;
  image_url: string | null;
  featured: boolean;
  created_at: string;
};

export type UiWork = {
  title: string;
  category: string;
  description: string;
  href: string;
  imageSrc?: string;
};

function getApiBase(): string {
  // Use relative path when behind nginx (recommended),
  // otherwise set NEXT_PUBLIC_API_BASE=http://localhost:8000 for dev.
  const base = process.env.NEXT_PUBLIC_API_BASE?.trim();
  return base && base !== "/" ? base.replace(/\/$/, "") : "";
}

export async function fetchWorks(signal?: AbortSignal): Promise<UiWork[]> {
  const base = getApiBase();
  const url = `${base}/api/works/`;

  const res = await fetch(url, { signal, cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch works: ${res.status}`);
  }
  const data = (await res.json()) as WorkApi[];

  return data.map((w) => ({
    title: w.title,
    category: w.tech_stack || "",
    description: w.description || "",
    href: w.github_url || "#",
    imageSrc: w.image_url || undefined,
  }));
}

// Server-side fetch that always talks to the backend container
export async function fetchWorksServer(): Promise<UiWork[]> {
  const base = (process.env.API_BASE?.trim() || "http://backend:8000").replace(/\/$/, "");
  const url = `${base}/api/works/`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch works (server): ${res.status}`);
  }
  const data = (await res.json()) as WorkApi[];
  return data.map((w) => ({
    title: w.title,
    category: w.tech_stack || "",
    description: w.description || "",
    href: w.github_url || "#",
    imageSrc: w.image_url || undefined,
  }));
}
