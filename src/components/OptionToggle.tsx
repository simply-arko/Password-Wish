import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface OptionProps {
    title: string;
    enabled: Boolean;
}

const OptionToggle: React.FC<OptionProps> = ({ title, enabled }) => {
    return (
        <div className="border border-solid border-slate-600 rounded-md p-4 mt-4">
            <div className="flex flex-row justify-between">
                <Label className="text-lg" htmlFor={title}>
                    {title}
                </Label>
                <Switch id={title} />
            </div>
        </div>
    );
};

export default OptionToggle;
