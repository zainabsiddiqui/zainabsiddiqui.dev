import { keyboardRows } from "../data/keyboardLayout";
import Key from "./Key";
import type { Section } from "../types";

interface KeyboardProps {
    onSectionChange: (section: Section) => void;
}

export default function Keyboard({onSectionChange}: KeyboardProps) {
    const mappedRows = keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1.5 mb-1.5 sm:gap-2 sm:mb-2 lg:gap-3 lg:mb-3">
            {row.map((keyConfig, keyIndex) => (
                <Key config={keyConfig} isPressed={false} onClick={() => keyConfig.section && onSectionChange(keyConfig.section)} key={keyIndex} />
            ))}
        </div>
    ));
    
    return (
        <>
            <div className="bg-case-top max-w-5xl lg:max-w-6xl mx-auto p-4 sm:p-5 lg:p-6 rounded-2xl shadow-[0_8px_0_0_var(--color-case-bottom),0_14px_24px_rgba(0,0,0,0.35)]">
                <div className="bg-tray p-3 sm:p-4 lg:p-5 rounded-2xl">
                    {mappedRows}
                </div>
            </div>
        </>
    )
}