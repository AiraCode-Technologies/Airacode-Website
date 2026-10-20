import { techStack } from "@/data/techStack";

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
      {techStack.map((group) => (
        <div key={group.id} className="clay-card p-6 space-y-3">
          <div>
            <h3 className="text-base font-bold text-[#1e2530] dark:text-[#f3f4f6]">{group.title}</h3>
            <p className="text-xs text-[#6b7280] dark:text-[#9ca3af] mt-0.5">{group.description}</p>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {group.tools.map((tool) => (
              <li
                key={tool}
                className="px-2.5 py-1 rounded-lg bg-[#f6f3ee] dark:bg-white/5 border border-[#ede9e0] dark:border-white/10 text-xs font-medium text-[#1e2530] dark:text-[#f3f4f6]"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
