import type { LucideIcon } from "lucide-react";

export type CardType = {
    id: number;
    title: string;
    desc: string;
    icon: LucideIcon;
    image?: string;
}