import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mac-setup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen">
      <section class="section py-20">
        <div class="max-w-4xl mx-auto">
          <h1 class="heading-lg mb-4 text-neutral-950 dark:text-neutral-50">
            macOS Frontend Developer Setup
          </h1>
          <p class="body-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
            Complete guide to configure your macOS machine for productive frontend development with
            Angular, TypeScript, and modern tooling.
          </p>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Package Manager -->
      <section class="section">
        <div class="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              1. Install Homebrew
            </h2>
            <div class="card p-6 space-y-4">
              <p class="text-neutral-700 dark:text-neutral-300">
                Homebrew is macOS's essential package manager. Install it first:
              </p>
              <div
                class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
              >
                /bin/bash -c "$(curl -fsSL
                https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
              </div>
              <p class="text-sm text-neutral-700 dark:text-neutral-300">
                Verify installation:
                <code
                  class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-950 dark:text-neutral-100"
                  >brew --version</code
                >
              </p>
            </div>
          </div>

          <!-- Node.js & pnpm -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              2. Install Node.js & pnpm
            </h2>
            <div class="card p-6 space-y-4">
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Install Node.js via Homebrew
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto mb-3"
                >
                  brew install node
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Install pnpm (recommended package manager)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  npm install -g pnpm
                </div>
              </div>
              <p class="text-sm text-neutral-700 dark:text-neutral-300">
                Verify:
                <code
                  class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-950 dark:text-neutral-100"
                  >node --version && pnpm --version</code
                >
              </p>
            </div>
          </div>

          <!-- Git Configuration -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">3. Configure Git</h2>
            <div class="card p-6 space-y-4">
              <div class="space-y-3">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50">
                  Set global Git configuration
                </h3>
                <div class="space-y-2 text-sm">
                  <div
                    class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                  >
                    git config --global user.name "Your Name"
                  </div>
                  <div
                    class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                  >
                    git config --global user.email "your.email@example.com"
                  </div>
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Generate SSH key for GitHub
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  ssh-keygen -t ed25519 -C "your.email@example.com"
                </div>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mt-3">
                  Then add the key to your GitHub account in Settings → SSH and GPG Keys
                </p>
              </div>
            </div>
          </div>

          <!-- VS Code Setup -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              4. Install VS Code & Extensions
            </h2>
            <div class="card p-6 space-y-4">
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Install VS Code Insiders (recommended)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask visual-studio-code-insiders
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Essential Extensions
                </h3>
                <ul class="space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span
                      ><strong>ESLint</strong> - Find and fix JavaScript/TypeScript issues</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span><strong>Prettier</strong> - Code formatter</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span
                      ><strong>Angular Language Service</strong> - Angular template support</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span><strong>GitHub Copilot</strong> - AI-powered code completion</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span><strong>Thunder Client</strong> - API testing built-in</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span><strong>GitLens</strong> - Git integration and blame</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">•</span
                    ><span
                      ><strong>Tailwind CSS IntelliSense</strong> - Tailwind utilities
                      autocomplete</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Terminal Setup -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              5. Configure Terminal & Shell
            </h2>
            <div class="card p-6 space-y-4">
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Install iTerm2 (enhanced terminal)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask iterm2
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Install Oh My Zsh (shell configuration)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  sh -c "$(curl -fsSL
                  https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Useful terminal aliases (add to ~/.zshrc)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto space-y-2"
                >
                  <div>alias dev="pnpm dev"</div>
                  <div>alias build="pnpm build"</div>
                  <div>alias test="pnpm test"</div>
                  <div>alias lint="pnpm lint"</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Development Tools -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              6. Additional Development Tools
            </h2>
            <div class="card p-6 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Docker</h3>
                  <div
                    class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-950 dark:text-neutral-100 overflow-x-auto mb-2"
                  >
                    brew install --cask docker
                  </div>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300">
                    Containerize your applications
                  </p>
                </div>
                <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                    Homebrew Cask
                  </h3>
                  <div
                    class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-950 dark:text-neutral-100 overflow-x-auto mb-2"
                  >
                    brew tap homebrew/cask
                  </div>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300">GUI app installation</p>
                </div>
                <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">ngrok</h3>
                  <div
                    class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-950 dark:text-neutral-100 overflow-x-auto mb-2"
                  >
                    brew install ngrok
                  </div>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300">
                    Expose local dev server to internet
                  </p>
                </div>
                <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
                  <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">Watchman</h3>
                  <div
                    class="bg-neutral-100 dark:bg-neutral-900 p-3 rounded font-mono text-xs text-neutral-950 dark:text-neutral-100 overflow-x-auto mb-2"
                  >
                    brew install watchman
                  </div>
                  <p class="text-sm text-neutral-700 dark:text-neutral-300">
                    File system watcher for faster rebuilds
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Angular CLI -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              7. Angular CLI & Project Setup
            </h2>
            <div class="card p-6 space-y-4">
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Install Angular CLI globally
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  pnpm add -g @angular/cli
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                  Create a new Angular project
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  ng new my-app --package-manager=pnpm --ssr
                </div>
              </div>
              <p class="text-sm text-neutral-700 dark:text-neutral-300">
                Always use pnpm as package manager for faster installations and better disk space
                usage
              </p>
            </div>
          </div>

          <!-- System Optimization -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              8. System Optimization for Development
            </h2>
            <div class="card p-6 space-y-4">
              <div class="space-y-3">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Show hidden files in Finder
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  defaults write com.apple.finder AppleShowAllFiles -bool true
                </div>
              </div>
              <div class="space-y-3">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Increase file watcher limit (for large projects)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf
                </div>
              </div>
              <div class="space-y-3">
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Set up Node.js version manager (nvm)
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                </div>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  Allows switching between Node versions easily
                </p>
              </div>
            </div>
          </div>

          <!-- Performance Tips -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              9. Development Performance Tips
            </h2>
            <div class="card p-6 space-y-3">
              <div class="flex items-start space-x-3">
                <span class="text-neutral-300 dark:text-neutral-500 font-bold">→</span>
                <p class="text-neutral-700 dark:text-neutral-300">
                  <strong>Use pnpm</strong> - Faster dependency resolution and less disk space
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-neutral-300 dark:text-neutral-500 font-bold">→</span>
                <p class="text-neutral-700 dark:text-neutral-300">
                  <strong>Enable file caching</strong> - Configure .gitignore properly to exclude
                  node_modules from Spotlight
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-neutral-300 dark:text-neutral-500 font-bold">→</span>
                <p class="text-neutral-700 dark:text-neutral-300">
                  <strong>Use SSD</strong> - External M.2 SSD for faster project loading
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-neutral-300 dark:text-neutral-500 font-bold">→</span>
                <p class="text-neutral-700 dark:text-neutral-300">
                  <strong>Monitor disk space</strong> - Use Disk Diag or CleanMyMac regularly
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-neutral-300 dark:text-neutral-500 font-bold">→</span>
                <p class="text-neutral-700 dark:text-neutral-300">
                  <strong>Update regularly</strong> - Keep macOS, Node.js, and tools current
                </p>
              </div>
            </div>
          </div>

          <!-- Quick Reference -->
          <div>
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">
              10. Quick Reference Commands
            </h2>
            <div class="card p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                    Package Management
                  </h3>
                  <div class="space-y-1 text-neutral-700 dark:text-neutral-300">
                    <div>
                      <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded"
                        >brew list</code
                      >
                      - List installed packages
                    </div>
                    <div>
                      <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded"
                        >brew outdated</code
                      >
                      - Check for updates
                    </div>
                    <div>
                      <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded"
                        >brew upgrade</code
                      >
                      - Update all packages
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-2">
                    pnpm Commands
                  </h3>
                  <div class="space-y-1 text-neutral-700 dark:text-neutral-300">
                    <div>
                      <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded"
                        >pnpm install</code
                      >
                      - Install dependencies
                    </div>
                    <div>
                      <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded"
                        >pnpm add pkg</code
                      >
                      - Add a package
                    </div>
                    <div>
                      <code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded"
                        >pnpm store prune</code
                      >
                      - Clean cache
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Must-Have Dependencies -->
      <section class="section">
        <div class="max-w-4xl mx-auto space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 mb-4">
              <span class="text-2xl">⭐</span>
              <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">
                Must-Have Dependencies
              </h2>
            </div>
            <p class="text-neutral-700 dark:text-neutral-300 mb-6">
              Essential tools required for professional frontend development. These are
              non-negotiable for a modern development environment.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Homebrew -->
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">📦 Homebrew</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Package manager for macOS. Foundation for all other installs.
                </p>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew --version
                </div>
              </div>

              <!-- Node.js -->
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">⚙️ Node.js 18+</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  JavaScript runtime. Required for all Node-based development.
                </p>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  node --version
                </div>
              </div>

              <!-- pnpm -->
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">🔧 pnpm</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Faster, more efficient package manager. Better than npm/yarn for monorepos.
                </p>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  pnpm --version
                </div>
              </div>

              <!-- Git -->
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">📝 Git</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Version control system. Essential for collaboration and history tracking.
                </p>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  git --version
                </div>
              </div>

              <!-- VS Code -->
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">💻 VS Code</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Powerful code editor with excellent extension ecosystem.
                </p>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  code --version
                </div>
              </div>

              <!-- Angular CLI -->
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">🎯 Angular CLI</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Command-line tool for Angular project scaffolding and development.
                </p>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  ng version
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Good-to-Have Tools -->
      <section class="section">
        <div class="max-w-4xl mx-auto space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 mb-4">
              <span class="text-2xl">💎</span>
              <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">Good-to-Have Tools</h2>
            </div>
            <p class="text-neutral-700 dark:text-neutral-300 mb-6">
              Highly recommended tools that significantly improve productivity and development
              experience. Not strictly required but strongly suggested.
            </p>
            <div class="space-y-4">
              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h3 class="font-bold text-neutral-950 dark:text-white mb-2">🖥️ iTerm2</h3>
                    <p class="text-sm text-neutral-700 dark:text-neutral-300">
                      Enhanced terminal with split panes, autocomplete, and better performance.
                    </p>
                  </div>
                  <div
                    class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full whitespace-nowrap ml-3"
                  >
                    RECOMMENDED
                  </div>
                </div>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask iterm2
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h3 class="font-bold text-neutral-950 dark:text-white mb-2">🐚 Oh My Zsh</h3>
                    <p class="text-sm text-neutral-700 dark:text-neutral-300">
                      Powerful shell configuration framework with plugins and themes.
                    </p>
                  </div>
                  <div
                    class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full whitespace-nowrap ml-3"
                  >
                    RECOMMENDED
                  </div>
                </div>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install zsh
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">🐳 Docker</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  Containerization platform for database setup (PostgreSQL, MongoDB), API testing
                  environments, and CI/CD simulation.
                </p>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask docker
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">
                  🔍 Postman / Insomnia
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  API testing and debugging tools. Essential for backend integration testing.
                </p>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask insomnia
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">
                  ⚡ Volta (Node Version Manager)
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  Seamless Node.js and package manager management. Alternative to nvm with better
                  performance.
                </p>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  curl https://get.volta.sh | bash
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">
                  📊 DBeaver / pgAdmin
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  Database GUI clients. Useful for managing PostgreSQL, MySQL, and other databases
                  during development.
                </p>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask dbeaver-community
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">
                  🔐 Keychain / 1Password
                </h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  Secure credential storage for API keys, database passwords, and SSH keys.
                </p>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install --cask 1password
                </div>
              </div>

              <div
                class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-800"
              >
                <h3 class="font-bold text-neutral-950 dark:text-white mb-2">📡 Ngrok / Expose</h3>
                <p class="text-sm text-neutral-700 dark:text-neutral-300">
                  Expose local dev server to the internet. Useful for testing webhooks and sharing
                  demos.
                </p>
                <div
                  class="mt-3 bg-neutral-100 dark:bg-neutral-900 p-2 rounded text-xs font-mono text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install ngrok
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Browser DevTools Setup -->
      <section class="section">
        <div class="max-w-4xl mx-auto space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 mb-4">
              <span class="text-2xl">🌐</span>
              <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">
                Browser Setup for Frontend Development
              </h2>
            </div>
            <div class="card p-6 space-y-4">
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Chrome/Chromium Extensions
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li class="flex items-start">
                    <span class="mr-3">✓</span>
                    <span
                      ><strong>React DevTools</strong> - React component inspection and
                      debugging</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span>
                    <span
                      ><strong>Angular DevTools</strong> - Angular-specific debugging tools</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span>
                    <span><strong>Web Vitals</strong> - Monitor Core Web Vitals in real-time</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span>
                    <span><strong>Lighthouse</strong> - Built-in performance auditing tool</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span>
                    <span><strong>CSS Peek</strong> - View CSS definitions inline</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">✓</span>
                    <span
                      ><strong>Accessibility Insights</strong> - Test for accessibility
                      compliance</span
                    >
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  DevTools Tips
                </h3>
                <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                  <li class="flex items-start">
                    <span class="mr-3">→</span>
                    <span>Enable Local Overrides for offline development and quick testing</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">→</span>
                    <span
                      >Use DevTools Recorder to capture user interactions and create automated
                      tests</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">→</span>
                    <span>Monitor Network tab for API calls and loading performance</span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-3">→</span>
                    <span
                      >Use Lighthouse regularly to audit performance, accessibility, and SEO</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- SSL/HTTPS Local Development -->
      <section class="section">
        <div class="max-w-4xl mx-auto space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 mb-4">
              <span class="text-2xl">🔒</span>
              <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">
                Local HTTPS Development
              </h2>
            </div>
            <div class="card p-6 space-y-4">
              <p class="text-neutral-700 dark:text-neutral-300">
                Some features require HTTPS even in development (camera, microphone, geolocation).
                Use mkcert for local SSL certificates.
              </p>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Install mkcert
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  brew install mkcert && mkcert -install
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Create Local Certificate
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  mkcert localhost 127.0.0.1 ::1
                </div>
              </div>
              <div>
                <h3 class="font-semibold text-neutral-950 dark:text-neutral-50 mb-3">
                  Configure in angular.json
                </h3>
                <div
                  class="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-950 dark:text-neutral-100 overflow-x-auto"
                >
                  "serve": {{ '{' }}<br />
                  &nbsp;&nbsp;"options": {{ '{' }}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"ssl": true,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"sslCert": "./localhost.pem",<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"sslKey": "./localhost-key.pem"<br />
                  &nbsp;&nbsp;{{ '}' }}<br />
                  {{ '}' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Optimization Checklist -->
      <section class="section">
        <div class="max-w-4xl mx-auto space-y-6">
          <div>
            <div class="inline-flex items-center gap-2 mb-4">
              <span class="text-2xl">✅</span>
              <h2 class="heading-sm text-neutral-950 dark:text-neutral-50">Post-Setup Checklist</h2>
            </div>
            <div class="card p-6">
              <div class="space-y-3">
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-1" />
                  <label for="check-1" class="text-neutral-700 dark:text-neutral-300"
                    >Configure Git global settings (name, email, SSH)</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-2" />
                  <label for="check-2" class="text-neutral-700 dark:text-neutral-300"
                    >Set up GitHub authentication (SSH key or PAT)</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-3" />
                  <label for="check-3" class="text-neutral-700 dark:text-neutral-300"
                    >Install VS Code extensions for your projects</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-4" />
                  <label for="check-4" class="text-neutral-700 dark:text-neutral-300"
                    >Configure terminal aliases in ~/.zshrc</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-5" />
                  <label for="check-5" class="text-neutral-700 dark:text-neutral-300"
                    >Enable macOS hidden files visibility</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-6" />
                  <label for="check-6" class="text-neutral-700 dark:text-neutral-300"
                    >Create Node.js version manager setup (Volta or nvm)</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-7" />
                  <label for="check-7" class="text-neutral-700 dark:text-neutral-300"
                    >Test pnpm installation with a sample project</label
                  >
                </div>
                <div
                  class="flex items-start space-x-3 pb-3 border-b border-neutral-200 dark:border-neutral-700"
                >
                  <input type="checkbox" class="mt-1" id="check-8" />
                  <label for="check-8" class="text-neutral-700 dark:text-neutral-300"
                    >Install Docker and verify it's running</label
                  >
                </div>
                <div class="flex items-start space-x-3">
                  <input type="checkbox" class="mt-1" id="check-9" />
                  <label for="check-9" class="text-neutral-700 dark:text-neutral-300"
                    >Enable VS Code Settings Sync for configuration backup</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Next Steps -->
      <section class="section pb-20">
        <div class="max-w-4xl mx-auto">
          <div
            class="card p-8 bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800"
          >
            <h2 class="heading-sm mb-4 text-neutral-950 dark:text-neutral-50">Next Steps</h2>
            <p class="text-neutral-700 dark:text-neutral-300 mb-6">
              Now that your macOS development environment is configured, explore the VS Code Guide
              to master keyboard shortcuts and productivity tips, or jump into the Resources section
              for learning materials.
            </p>
            <div class="flex flex-col md:flex-row gap-3">
              <a routerLink="/vscode-guide" class="btn-primary">VS Code Guide</a>
              <a routerLink="/resources" class="btn-secondary">View Resources</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MacSetupComponent {}
