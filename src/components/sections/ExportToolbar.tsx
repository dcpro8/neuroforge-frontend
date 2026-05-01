import React from 'react';
import { useStore } from '../../store/useStore';
import { FileText } from 'lucide-react';

export const ExportToolbar: React.FC = () => {
  const blueprint = useStore(state => state.blueprint);

  if (!blueprint) return null;

  const downloadMarkdown = () => {
    let md = `# NeuroForge Architecture Blueprint\n\n`;
    
    md += `## Features\n`;
    blueprint.features.forEach(f => {
      md += `- **${f.name}** (${f.priority}): ${f.description}\n`;
    });

    md += `\n## Database Schema\n`;
    blueprint.database.forEach(t => {
      md += `### ${t.name}\n`;
      t.fields.forEach(f => {
        md += `- \`${f.name}\` [${f.type}] ${f.required ? '(Required)' : ''}\n`;
      });
    });

    md += `\n## API Endpoints\n`;
    blueprint.apis.forEach(a => {
      md += `- **[${a.method}]** \`${a.path}\` - ${a.description}\n`;
    });

    md += `\n## UI Screens\n`;
    blueprint.ui.forEach(u => {
      md += `### ${u.name}\n`;
      md += `*${u.description}*\n`;
      u.components.forEach(c => md += `- \`${c}\`\n`);
    });

    md += `\n## Roadmap\n`;
    blueprint.roadmap.forEach(r => {
      md += `### ${r.phase}\n`;
      r.items.forEach(i => md += `- ${i}\n`);
    });

    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'architecture_blueprint.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 py-4 justify-end w-full print:hidden">
      <button
        onClick={downloadMarkdown}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 border border-slate-700/50 rounded-lg text-sm font-medium transition-colors backdrop-blur-md"
      >
        <FileText className="w-4 h-4" />
        Export Markdown
      </button>
    </div>
  );
};
