import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { SetStateAction } from "react";

interface OptionProps {
    title: string;
    enabled: boolean;
    setEnabled: React.Dispatch<SetStateAction<boolean>>;
}

const OptionToggle: React.FC<OptionProps> = ({
    title,
    enabled,
    setEnabled,
}) => {
    return (
        <div className="border border-solid border-slate-600 rounded-md p-4 mt-4">
            <div className="flex flex-row justify-between">
                <Label className="text-lg" htmlFor={title}>
                    {title}
                </Label>
                <Switch
                    id={title}
                    checked={enabled}
                    onCheckedChange={(e) => setEnabled(e)}
                />
            </div>
        </div>
    );
};

export default OptionToggle;
