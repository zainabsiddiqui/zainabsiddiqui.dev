import { sectionTabs } from "../data/sectionTabs";
import type { Tab } from "../types";
import type { Section } from "../types";

interface TabPanelProps {
    activeSection: Section | null;
    onTabClick: (section: Section) => void;
}

export default function TabPanel({ activeSection, onTabClick }: TabPanelProps) {
    const tabs = sectionTabs.map((tab: Tab) => (
        <button
            key={tab.key}
            role="tab"
            aria-selected={activeSection === tab.key}
            onClick={() => onTabClick(tab.key)}
            className={`rounded-tl-2xl rounded-tr-2xl p-4 text-accent-text ${
                activeSection === tab.key
                ? 'bg-accent'
                : 'bg-tray'
            }`}>
            {tab.fileLabel}
        </button>
    ))
    return (
        <div className=" flex flex-col bg-case-top max-w-5xl lg:max-w-6xl mx-auto p-4 sm:p-5 lg:p-6 rounded-2xl">
            <div role= "tablist" className="flex gap-1 font-mono">
                { tabs }
            </div>
            <div className="p-4 bg-tray border-t-board border-t-2 rounded-b-2xl">
                <span>Hello!</span>
            </div>
        </div>
    )
}