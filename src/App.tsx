import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import LengthSlider from "./components/LenghtSlider";
import OptionToggle from "./components/OptionToggle";

import "./App.css";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="text-white border-solid border-slate-600 p-6 border rounded-lg min-w-[480px]">
                <h3 className="text-xl font-semibold text-center">
                    Wish Password
                </h3>
                <div className="flex flex-row gap-x-4 mt-4">
                    <Input readOnly type="email" placeholder="Password" />
                    <Button type="submit">Copy</Button>
                </div>
                <LengthSlider count={20} />
                <OptionToggle title="Lowercase Letters" enabled={true} />
                <OptionToggle title="Uppercase Letters" enabled={true} />
                <OptionToggle title="Digits" enabled={true} />
                <OptionToggle title="Special Letters" enabled={true} />
            </div>
        </ThemeProvider>
        // contanier
    );
}

export default App;
