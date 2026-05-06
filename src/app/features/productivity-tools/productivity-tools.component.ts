import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productivity-tools',
  imports: [CommonModule],
  template: `
    <div class="min-h-screen">
      <section class="section py-20">
        <div class="max-w-4xl mx-auto">
          <h1 class="heading-lg mb-4 text-neutral-950 dark:text-neutral-50">
            macOS Productivity Tools Quick Guide
          </h1>
          <p class="body-lg text-neutral-700 dark:text-neutral-300 max-w-3xl">
            Short, practical guides for tools that blend well with macOS workflows. Each section
            includes a quick install command and a few high-impact daily commands.
          </p>
        </div>
      </section>

      <div class="divider"></div>

      <section class="section">
        <div class="max-w-4xl mx-auto space-y-8">
          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">
              1. Homebrew (package manager)
            </h2>
            <p class="text-neutral-700 dark:text-neutral-300">
              Install and update almost every dev tool from one place.
            </p>
            <div
              class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
            >
              /bin/bash -c "$(curl -fsSL
              https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            </div>
            <div class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p><strong>Daily usage</strong></p>
              <p class="font-mono">brew update && brew upgrade</p>
              <p class="font-mono">brew install git fzf ripgrep fd eza bat</p>
              <p class="font-mono">brew list --versions</p>
            </div>
          </article>

          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">2. iTerm2 + tmux</h2>
            <p class="text-neutral-700 dark:text-neutral-300">
              Better terminal UX plus persistent sessions for long-running tasks.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg font-mono text-xs text-neutral-950 dark:text-neutral-100 overflow-x-auto"
              >
                brew install --cask iterm2
              </div>
              <div
                class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg font-mono text-xs text-neutral-950 dark:text-neutral-100 overflow-x-auto"
              >
                brew install tmux
              </div>
            </div>
            <div class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p><strong>Daily usage</strong></p>
              <p class="font-mono">tmux new -s project</p>
              <p class="font-mono">tmux attach -t project</p>
              <p class="font-mono">tmux ls</p>
            </div>
          </article>

          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">3. Vim / Neovim basics</h2>
            <p class="text-neutral-700 dark:text-neutral-300">
              Perfect for quick edits, commit messages, and SSH sessions.
            </p>
            <div
              class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
            >
              brew install neovim
            </div>
            <div class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p><strong>Core muscle memory</strong></p>
              <p class="font-mono">
                i (insert), Esc (normal), :w (save), :q (quit), :wq (save+quit)
              </p>
              <p class="font-mono">
                /text (search), n (next), gg (top), G (bottom), dd (delete line)
              </p>
              <p class="font-mono">nvim file.ts</p>
            </div>
          </article>

          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">
              4. fzf + ripgrep + fd (fast navigation)
            </h2>
            <p class="text-neutral-700 dark:text-neutral-300">
              Find files and text instantly in big codebases.
            </p>
            <div
              class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
            >
              brew install fzf ripgrep fd && $(brew --prefix)/opt/fzf/install
            </div>
            <div class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p><strong>Daily usage</strong></p>
              <p class="font-mono">rg "ChangeDetectionStrategy" src</p>
              <p class="font-mono">fd component src/app</p>
              <p class="font-mono">fzf</p>
            </div>
          </article>

          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">5. zoxide + eza + bat</h2>
            <p class="text-neutral-700 dark:text-neutral-300">
              Better defaults for jumping directories, listing files, and previewing content.
            </p>
            <div
              class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
            >
              brew install zoxide eza bat
            </div>
            <div class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p><strong>Daily usage</strong></p>
              <p class="font-mono">eval "$(zoxide init zsh)"</p>
              <p class="font-mono">z mac-zero</p>
              <p class="font-mono">eza -la --git</p>
              <p class="font-mono">bat src/app/app.routes.ts</p>
            </div>
          </article>

          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">6. GitHub CLI</h2>
            <p class="text-neutral-700 dark:text-neutral-300">
              Faster PR and issue workflows directly in terminal.
            </p>
            <div
              class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
            >
              brew install gh && gh auth login
            </div>
            <div class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p><strong>Daily usage</strong></p>
              <p class="font-mono">gh repo view --web</p>
              <p class="font-mono">gh pr create --fill</p>
              <p class="font-mono">gh pr status</p>
            </div>
          </article>

          <article class="card p-6 space-y-4">
            <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">
              Suggested 10-minute setup order
            </h2>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300"
            >
              <p>1) Homebrew</p>
              <p>2) iTerm2</p>
              <p>3) fzf + ripgrep + fd</p>
              <p>4) zoxide + eza + bat</p>
              <p>5) Vim or Neovim</p>
              <p>6) GitHub CLI</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductivityToolsComponent {}
