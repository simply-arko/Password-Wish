import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import LengthSlider from "./components/LenghtSlider";
import OptionToggle from "./components/OptionToggle";
import Generator from "./lib/generator";

import "./App.css";

function App() {
    const [password, setPassword] = useState<string | undefined>("Password");
    const [length, setlength] = useState<number>(15);
    const [lowercaseAllowed, setlowercaseAllowed] = useState<boolean>(true);
    const [uppercaseAllowed, setuppercaseAllowed] = useState<boolean>(false);
    const [digitsAllowed, setdigitsAllowed] = useState<boolean>(false);
    const [symbolsAllowed, setsymbolsAllowed] = useState<boolean>(false);

    const passwordGenerator = useCallback(() => {
        const pass: string | undefined = Generator(
            lowercaseAllowed,
            uppercaseAllowed,
            digitsAllowed,
            symbolsAllowed,
            length
        );

        setPassword(pass);
    }, [
        length,
        lowercaseAllowed,
        uppercaseAllowed,
        digitsAllowed,
        symbolsAllowed,
        setPassword,
    ]);

    useEffect(() => {
        passwordGenerator();
    }, [
        length,
        lowercaseAllowed,
        uppercaseAllowed,
        digitsAllowed,
        symbolsAllowed,
        passwordGenerator,
    ]);

    const passwordRef = useRef<HTMLInputElement>(null);
    const copyPasswordtoClipboard = useCallback(() => {
        passwordRef.current?.select();
        navigator.clipboard.writeText(password!);
    }, [password]);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="text-white border-solid border-slate-600 p-6 border rounded-lg min-w-[480px]">
                <h3 className="text-xl font-semibold text-center">
                    Wish Password
                </h3>
                <div className="flex flex-row gap-x-4 mt-4">
                    <Input
                        readOnly
                        type="text"
                        placeholder={password}
                        value={password}
                        ref={passwordRef}
                    />
                    <Button onClick={copyPasswordtoClipboard}>Copy</Button>
                </div>
                <LengthSlider length={length} setlength={setlength} />
                <OptionToggle
                    title="Lowercase Letters"
                    enabled={lowercaseAllowed}
                    setEnabled={setlowercaseAllowed}
                />
                <OptionToggle
                    title="Uppercase Letters"
                    enabled={uppercaseAllowed}
                    setEnabled={setuppercaseAllowed}
                />
                <OptionToggle
                    title="Digits"
                    enabled={digitsAllowed}
                    setEnabled={setdigitsAllowed}
                />
                <OptionToggle
                    title="Special Letters"
                    enabled={symbolsAllowed}
                    setEnabled={setsymbolsAllowed}
                />
            </div>
        </ThemeProvider>
        // contanier
    );
}

export default App;
