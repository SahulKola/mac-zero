import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Shortcut {
  action: string;
  mac: string;
  windows: string;
  notes: string;
  category: string;
}

interface Extension {
  name: string;
  downloads: string;
  purpose: string;
  category: string;
}

interface Workflow {
  name: string;
  description: string;
  steps: string[];
  tools: string[];
}

@Component({
  selector: 'app-vscode-guide',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div
      class="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <!-- Hero Section -->
      <section class="relative overflow-hidden py-16 sm:py-20">
        <div class="absolute inset-0 opacity-5">
          <div
            class="absolute top-0 right-0 w-96 h-96 bg-neutral-600 rounded-full mix-blend-multiply filter blur-3xl"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-96 h-96 bg-neutral-700 rounded-full mix-blend-multiply filter blur-3xl"
          ></div>
        </div>
        <div class="relative max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h1 class="text-5xl sm:text-6xl font-bold mb-6 text-neutral-950 dark:text-white">
              VS Code Mastery
            </h1>
            <p class="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Complete guide to keyboard shortcuts, extensions, and productivity workflows from the
              54-chapter "Productive VS Code" course.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <button
                (click)="activeTab.set('shortcuts')"
                [class.active]="activeTab() === 'shortcuts'"
                class="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                [ngClass]="
                  activeTab() === 'shortcuts'
                    ? 'bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:shadow-md'
                "
              >
                ⌨️ Shortcuts
              </button>
              <button
                (click)="activeTab.set('extensions')"
                [class.active]="activeTab() === 'extensions'"
                class="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                [ngClass]="
                  activeTab() === 'extensions'
                    ? 'bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:shadow-md'
                "
              >
                🧩 Extensions
              </button>
              <button
                (click)="activeTab.set('workflows')"
                [class.active]="activeTab() === 'workflows'"
                class="px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                [ngClass]="
                  activeTab() === 'workflows'
                    ? 'bg-gradient-to-br from-neutral-800 to-neutral-900 text-white shadow-lg'
                    : 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white hover:shadow-md'
                "
              >
                🛠️ Workflows
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Keyboard Shortcuts Section -->
      @if (activeTab() === 'shortcuts') {
        <section class="py-10 px-4">
          <div class="max-w-6xl mx-auto">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-neutral-950 dark:text-white mb-4">
                Essential Keyboard Shortcuts
              </h2>
              <input
                [(ngModel)]="shortcutSearchTerm"
                placeholder="Search shortcuts by action or category..."
                class="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-600 focus:dark:border-neutral-700 transition-colors"
              />
            </div>

            <!-- Category Shortcuts -->
            @for (categoryGroup of groupedShortcuts(); track categoryGroup.category) {
              <div class="mb-8">
                <h3
                  class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-neutral-600"
                >
                  {{ categoryGroup.category }}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  @for (shortcut of categoryGroup.shortcuts; track shortcut.action) {
                    <div
                      class="bg-white dark:bg-neutral-800 rounded-lg p-5 shadow-md hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all duration-200 border-l-4 border-neutral-700 dark:border-neutral-700 hover:border-neutral-800 dark:hover:border-neutral-600"
                    >
                      <h4 class="font-semibold text-neutral-950 dark:text-white mb-2">
                        {{ shortcut.action }}
                      </h4>
                      <div class="space-y-2 text-sm">
                        <div
                          class="bg-neutral-200 dark:bg-neutral-700/40 px-3 py-2 rounded font-mono text-xs"
                        >
                          <span class="text-neutral-600 dark:text-neutral-400">Mac: </span>
                          <span class="text-neutral-900 dark:text-neutral-100 font-bold">{{
                            shortcut.mac
                          }}</span>
                        </div>
                        <div
                          class="bg-neutral-200 dark:bg-neutral-700/40 px-3 py-2 rounded font-mono text-xs"
                        >
                          <span class="text-neutral-600 dark:text-neutral-400">Win: </span>
                          <span class="text-neutral-900 dark:text-neutral-100 font-bold">{{
                            shortcut.windows
                          }}</span>
                        </div>
                        <p class="text-neutral-600 dark:text-neutral-400 italic">
                          {{ shortcut.notes }}
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </section>
      }

      <!-- Extensions Section -->
      @if (activeTab() === 'extensions') {
        <section class="py-10 px-4">
          <div class="max-w-6xl mx-auto">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-neutral-950 dark:text-white mb-4">
                Recommended Extensions
              </h2>
              <input
                [(ngModel)]="extensionSearchTerm"
                placeholder="Search extensions by name or category..."
                class="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-600 focus:dark:border-neutral-700 transition-colors"
              />
            </div>

            <!-- Category Extensions -->
            @for (categoryGroup of groupedExtensions(); track categoryGroup.category) {
              <div class="mb-8">
                <h3
                  class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 pb-3 border-b-2 border-neutral-600"
                >
                  {{ categoryGroup.category }}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  @for (ext of categoryGroup.extensions; track ext.name) {
                    <div
                      class="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all duration-200 border-t-4 border-neutral-700 dark:border-neutral-700 hover:border-neutral-800 dark:hover:border-neutral-600"
                    >
                      <div class="flex justify-between items-start mb-3">
                        <h4 class="text-lg font-bold text-neutral-950 dark:text-white">
                          {{ ext.name }}
                        </h4>
                        @if (ext.downloads) {
                          <span
                            class="text-xs bg-neutral-200 dark:bg-neutral-700/40 text-neutral-900 dark:text-neutral-100 px-3 py-1 rounded-full font-semibold"
                          >
                            {{ ext.downloads }}
                          </span>
                        }
                      </div>
                      <p class="text-neutral-700 dark:text-neutral-300">
                        {{ ext.purpose }}
                      </p>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </section>
      }

      <!-- Workflows Section -->
      @if (activeTab() === 'workflows') {
        <section class="py-10 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-neutral-950 dark:text-white mb-12">
              Language-Specific Workflows
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              @for (workflow of workflows(); track workflow.name) {
                <div
                  class="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden border border-neutral-300 dark:border-neutral-700"
                >
                  <div
                    class="bg-gradient-to-r from-neutral-800 via-neutral-800 to-neutral-800 px-6 py-4"
                  >
                    <h3 class="text-2xl font-bold text-white">{{ workflow.name }}</h3>
                  </div>
                  <div class="p-6">
                    <p class="text-neutral-700 dark:text-neutral-300 mb-6">
                      {{ workflow.description }}
                    </p>
                    <div class="mb-6">
                      <h4 class="font-semibold text-neutral-950 dark:text-white mb-3">Steps:</h4>
                      <ol class="space-y-2 list-decimal list-inside">
                        @for (step of workflow.steps; track $index) {
                          <li class="text-neutral-700 dark:text-neutral-300 text-sm">
                            {{ step }}
                          </li>
                        }
                      </ol>
                    </div>
                    <div>
                      <h4 class="font-semibold text-neutral-950 dark:text-white mb-3">Tools:</h4>
                      <div class="flex flex-wrap gap-2">
                        @for (tool of workflow.tools; track tool) {
                          <span
                            class="text-xs bg-neutral-200 dark:bg-neutral-700/40 text-neutral-900 dark:text-neutral-200 px-3 py-1 rounded-full font-medium border border-neutral-300 dark:border-neutral-600"
                          >
                            {{ tool }}
                          </span>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
      }

      <!-- Quick Tips Section -->
      <section
        class="py-12 px-4 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      >
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-neutral-950 dark:text-white mb-8">💡 Pro Tips</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border-l-4 border-neutral-700 dark:border-neutral-700 hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all"
            >
              <h3 class="font-bold text-neutral-950 dark:text-white mb-2">
                Keep Hands on Keyboard
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm">
                Every second saved × 100 times/day = significant productivity gain
              </p>
            </div>
            <div
              class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border-l-4 border-neutral-700 dark:border-neutral-700 hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all"
            >
              <h3 class="font-bold text-neutral-950 dark:text-white mb-2">
                Master Command Palette
              </h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm">
                Cmd+Shift+P is your command center. Every feature is accessible from here.
              </p>
            </div>
            <div
              class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border-l-4 border-neutral-700 dark:border-neutral-700 hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all"
            >
              <h3 class="font-bold text-neutral-950 dark:text-white mb-2">Enable Format on Save</h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm">
                Set editor.formatOnSave: true to automatically clean code on save.
              </p>
            </div>
            <div
              class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border-l-4 border-neutral-700 dark:border-neutral-700 hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all"
            >
              <h3 class="font-bold text-neutral-950 dark:text-white mb-2">Multi-Cursor Magic</h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm">
                Cmd+D to select next occurrence. Perfect for renaming or bulk edits.
              </p>
            </div>
            <div
              class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border-l-4 border-neutral-700 dark:border-neutral-700 hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all"
            >
              <h3 class="font-bold text-neutral-950 dark:text-white mb-2">Settings Sync</h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm">
                Sign in with GitHub to sync settings across machines automatically.
              </p>
            </div>
            <div
              class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md border-l-4 border-neutral-700 dark:border-neutral-700 hover:shadow-lg hover:dark:shadow-neutral-900/20 transition-all"
            >
              <h3 class="font-bold text-neutral-950 dark:text-white mb-2">Learn One Per Day</h3>
              <p class="text-neutral-700 dark:text-neutral-300 text-sm">
                Keyboard shortcuts take 1-2 weeks to internalize through daily practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VscodeGuideComponent {
  readonly activeTab = signal<'shortcuts' | 'extensions' | 'workflows'>('shortcuts');
  readonly shortcutSearchTerm = signal('');
  readonly extensionSearchTerm = signal('');

  private readonly shortcuts: Shortcut[] = [
    // Essential Navigation
    {
      category: 'Navigation',
      action: 'Command Palette',
      mac: 'Cmd+Shift+P',
      windows: 'Ctrl+Shift+P',
      notes: 'Access all commands instantly',
    },
    {
      category: 'Navigation',
      action: 'Go to File',
      mac: 'Cmd+P',
      windows: 'Ctrl+P',
      notes: 'Quick file switcher',
    },
    {
      category: 'Navigation',
      action: 'Go to Line',
      mac: 'Ctrl+G',
      windows: 'Ctrl+G',
      notes: 'Jump to specific line number',
    },
    {
      category: 'Navigation',
      action: 'Go to Definition',
      mac: 'F12',
      windows: 'F12',
      notes: 'Jump to code definition',
    },
    // File Management
    {
      category: 'File Management',
      action: 'New File',
      mac: 'Cmd+N',
      windows: 'Ctrl+N',
      notes: 'Create new file',
    },
    {
      category: 'File Management',
      action: 'Save',
      mac: 'Cmd+S',
      windows: 'Ctrl+S',
      notes: 'Save current file',
    },
    {
      category: 'File Management',
      action: 'Close Tab',
      mac: 'Cmd+W',
      windows: 'Ctrl+W',
      notes: 'Close active tab',
    },
    {
      category: 'File Management',
      action: 'Split Editor',
      mac: 'Cmd+\\',
      windows: 'Ctrl+\\',
      notes: 'Split editor vertically',
    },
    // Editing
    {
      category: 'Editing',
      action: 'Delete Line',
      mac: 'Cmd+Shift+K',
      windows: 'Ctrl+Shift+K',
      notes: 'Remove entire line',
    },
    {
      category: 'Editing',
      action: 'Duplicate Line',
      mac: 'Shift+Option+Down',
      windows: 'Shift+Alt+Down',
      notes: 'Duplicate line below',
    },
    {
      category: 'Editing',
      action: 'Comment Line',
      mac: 'Cmd+/',
      windows: 'Ctrl+/',
      notes: 'Toggle line comment',
    },
    {
      category: 'Editing',
      action: 'Multi-Cursor (Select)',
      mac: 'Cmd+D',
      windows: 'Ctrl+D',
      notes: 'Select next occurrence',
    },
    // Search & Replace
    {
      category: 'Search & Replace',
      action: 'Find',
      mac: 'Cmd+F',
      windows: 'Ctrl+F',
      notes: 'Find text in file',
    },
    {
      category: 'Search & Replace',
      action: 'Replace',
      mac: 'Cmd+H',
      windows: 'Ctrl+H',
      notes: 'Find and replace',
    },
    {
      category: 'Search & Replace',
      action: 'Find in Files',
      mac: 'Cmd+Shift+F',
      windows: 'Ctrl+Shift+F',
      notes: 'Search entire project',
    },
    // Refactoring
    {
      category: 'Refactoring',
      action: 'Rename Symbol',
      mac: 'F2',
      windows: 'F2',
      notes: 'Rename across all files',
    },
    {
      category: 'Refactoring',
      action: 'Quick Fix',
      mac: 'Cmd+.',
      windows: 'Ctrl+.',
      notes: 'Show code actions',
    },
    {
      category: 'Refactoring',
      action: 'Format Document',
      mac: 'Shift+Option+F',
      windows: 'Shift+Alt+F',
      notes: 'Format entire file',
    },
  ];

  private readonly extensions: Extension[] = [
    // Essentials
    {
      category: 'Essentials',
      name: 'Prettier',
      downloads: '-',
      purpose: 'Code formatter for consistent style',
    },
    {
      category: 'Essentials',
      name: 'ESLint',
      downloads: '-',
      purpose: 'Linter for JavaScript/TypeScript errors',
    },
    {
      category: 'Essentials',
      name: 'GitLens',
      downloads: '-',
      purpose: 'Git blame, history, and analytics',
    },
    // UI & Themes
    {
      category: 'UI & Themes',
      name: 'Material Icon Theme',
      downloads: '-',
      purpose: 'Beautiful file and folder icons',
    },
    {
      category: 'UI & Themes',
      name: 'Dracula',
      downloads: '-',
      purpose: 'Popular dark color theme',
    },
    // Web Development
    {
      category: 'Web Development',
      name: 'Tailwind CSS IntelliSense',
      downloads: '-',
      purpose: 'Tailwind class autocomplete',
    },
    {
      category: 'Web Development',
      name: 'CSS Peek',
      downloads: '-',
      purpose: 'Peek CSS definitions from HTML',
    },
    {
      category: 'Web Development',
      name: 'Live Server',
      downloads: '-',
      purpose: 'Local dev server with reload',
    },
    // Frontend Frameworks
    {
      category: 'Frontend Frameworks',
      name: 'Angular Language Service',
      downloads: '-',
      purpose: 'Angular template support',
    },
    {
      category: 'Frontend Frameworks',
      name: 'Simple React Snippets',
      downloads: '-',
      purpose: 'React component snippets',
    },
    // Productivity
    {
      category: 'Productivity',
      name: 'Path Intellisense',
      downloads: '-',
      purpose: 'File path autocomplete',
    },
    {
      category: 'Productivity',
      name: 'Thunder Client',
      downloads: '-',
      purpose: 'API testing in editor',
    },
  ];

  private readonly workflowData: Workflow[] = [
    {
      name: 'JavaScript Development',
      description: 'Essential setup for JavaScript/TypeScript projects',
      steps: [
        'Configure ESLint for project rules',
        'Enable Prettier with formatOnSave',
        'Use Cmd+Shift+O to find symbols',
        'Use F2 to rename variables globally',
        'Use Cmd+. for quick fixes',
      ],
      tools: ['ESLint', 'Prettier', 'Path Intellisense'],
    },
    {
      name: 'Web UI Development',
      description: 'HTML, CSS, and component development',
      steps: [
        'Use Emmet abbreviations (Tab to expand)',
        'Enable Tailwind IntelliSense for suggestions',
        'Use CSS Peek to view styles',
        'Format with Prettier on save',
        'Test responsiveness with DevTools',
      ],
      tools: ['Tailwind CSS IntelliSense', 'CSS Peek', 'Prettier', 'Live Server'],
    },
    {
      name: 'Version Control',
      description: 'Git workflow and GitHub integration',
      steps: [
        'Open Source Control (Ctrl+Shift+G)',
        'Stage changes with the + button',
        'Commit with clear messages',
        'View history with GitLens',
        'Create PRs with GitHub extension',
      ],
      tools: ['GitLens', 'GitHub Pull Requests'],
    },
    {
      name: 'Code Review & Testing',
      description: 'Collaborative development practices',
      steps: [
        'Review code quality with ESLint',
        'Format code consistently with Prettier',
        'Check git blame for context',
        'Use multi-cursor for bulk edits',
        'Test locally before pushing',
      ],
      tools: ['ESLint', 'Prettier', 'GitLens', 'Thunder Client'],
    },
  ];

  readonly groupedShortcuts = computed(() => {
    const searchTerm = this.shortcutSearchTerm().toLowerCase();
    const filtered = this.shortcuts.filter(
      (s) =>
        s.action.toLowerCase().includes(searchTerm) ||
        s.notes.toLowerCase().includes(searchTerm) ||
        s.category.toLowerCase().includes(searchTerm),
    );
    const groups: { category: string; shortcuts: Shortcut[] }[] = [];
    const seenCategories = new Set<string>();

    filtered.forEach((shortcut) => {
      if (!seenCategories.has(shortcut.category)) {
        seenCategories.add(shortcut.category);
        groups.push({
          category: shortcut.category,
          shortcuts: filtered.filter((s) => s.category === shortcut.category),
        });
      }
    });

    return groups;
  });

  readonly groupedExtensions = computed(() => {
    const searchTerm = this.extensionSearchTerm().toLowerCase();
    const filtered = this.extensions.filter(
      (e) =>
        e.name.toLowerCase().includes(searchTerm) ||
        e.purpose.toLowerCase().includes(searchTerm) ||
        e.category.toLowerCase().includes(searchTerm),
    );
    const groups: { category: string; extensions: Extension[] }[] = [];
    const seenCategories = new Set<string>();

    filtered.forEach((ext) => {
      if (!seenCategories.has(ext.category)) {
        seenCategories.add(ext.category);
        groups.push({
          category: ext.category,
          extensions: filtered.filter((e) => e.category === ext.category),
        });
      }
    });

    return groups;
  });

  readonly workflows = computed(() => this.workflowData);
}
