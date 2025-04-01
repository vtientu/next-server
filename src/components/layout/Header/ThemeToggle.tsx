"use client";

import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Skeleton className="h-8 w-8 rounded-md" />; // Không render khi chưa xác định được theme

  return (
    <Button
      className="p-2 h-auto"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default memo(ThemeToggle);
