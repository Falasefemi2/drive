import { Input } from "@/components/ui/input";
import { Icon } from "lucide-react";

export default function InputSearch({ text, icon }: { text: string, icon: React.ReactNode }) {
    return (
        <div className="relative mt-2">
            <Input placeholder={text} className="pl-10" />
            <Icon iconNode={[]} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</Icon>
        </div>
    )
}