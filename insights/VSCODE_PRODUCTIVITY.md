# VS Code Productivity Guide

**Source:** "Productive VS Code" - 54-Chapter Course by Chris Sev (Better Dev)

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Essential Keyboard Shortcuts](#essential-keyboard-shortcuts)
3. [Recommended Extensions](#recommended-extensions)
4. [Language-Specific Workflows](#language-specific-workflows)
5. [Advanced Features](#advanced-features)
6. [Settings Reference](#settings-reference)
7. [Quick Reference Checklists](#quick-reference-checklists)

---

## 🚀 Quick Start

### Top 5 Productivity Gains

1. **Command Palette** (`Cmd+Shift+P`) - Your command center for everything
2. **Multi-Cursor Editing** (`Cmd+D`, `Option+Click`) - Edit multiple places simultaneously
3. **Keyboard Shortcuts** - Keep hands on keyboard, avoid mouse
4. **IntelliSense** - AI code completion and type hints
5. **Keyboard Shortcuts for UI Navigation** - Command+Shift+E, F, G, X to access panels

---

## ⌨️ Essential Keyboard Shortcuts

### Command Palette & Core

| Action                 | Mac                           | Windows         | Notes                 |
| ---------------------- | ----------------------------- | --------------- | --------------------- |
| Command Palette        | `Cmd+Shift+P`                 | `Ctrl+Shift+P`  | Search all commands   |
| Open Recent Files      | `Cmd+P`                       | `Ctrl+P`        | Quick file switcher   |
| Go to Line             | `Ctrl+G`                      | `Ctrl+G`        | Jump to specific line |
| Keyboard Shortcuts Ref | `Cmd+K Cmd+R`                 | `Ctrl+K Ctrl+R` | Open cheat sheet      |
| Settings               | `Cmd+,`                       | `Ctrl+,`        | Open settings UI      |
| Settings (JSON)        | `Cmd+Shift+P → settings json` | -               | Edit raw settings     |

### File & Tab Management

| Action              | Mac            | Windows         | Notes                 |
| ------------------- | -------------- | --------------- | --------------------- |
| New File            | `Cmd+N`        | `Ctrl+N`        | Create untitled file  |
| Save                | `Cmd+S`        | `Ctrl+S`        | Save current file     |
| Close Tab           | `Cmd+W`        | `Ctrl+W`        | Close active tab      |
| Reopen Closed Tab   | `Cmd+Shift+T`  | `Ctrl+Shift+T`  | Like browser back     |
| Split Editor Right  | `Cmd+\`        | `Ctrl+\`        | Split pane vertically |
| Switch Editor Group | `Cmd+1,2,3...` | `Ctrl+1,2,3...` | Jump to split pane    |
| Focus Sidebar       | `Cmd+B`        | `Ctrl+B`        | Toggle sidebar        |

### Line Editing

| Action              | Mac                 | Windows            | Notes                  |
| ------------------- | ------------------- | ------------------ | ---------------------- |
| Cut Line            | `Cmd+X`             | `Ctrl+X`           | Cut entire line        |
| Copy Line           | `Cmd+C`             | `Ctrl+C`           | Copy without selection |
| Delete Line         | `Cmd+Shift+K`       | `Ctrl+Shift+K`     | Remove line            |
| Move Line Down      | `Option+Down`       | `Alt+Down`         | Shift line down        |
| Move Line Up        | `Option+Up`         | `Alt+Up`           | Shift line up          |
| Duplicate Line Down | `Shift+Option+Down` | `Shift+Alt+Down`   | Copy line below        |
| Insert Line Below   | `Cmd+Enter`         | `Ctrl+Enter`       | New line below         |
| Insert Line Above   | `Cmd+Shift+Enter`   | `Ctrl+Shift+Enter` | New line above         |
| Indent              | `Cmd+]`             | `Ctrl+]`           | Increase indent        |
| Outdent             | `Cmd+[`             | `Ctrl+[`           | Decrease indent        |
| Comment Line        | `Cmd+/`             | `Ctrl+/`           | Toggle comment         |

### Multi-Cursor Editing

| Action             | Mac                    | Windows              | Notes                     |
| ------------------ | ---------------------- | -------------------- | ------------------------- |
| Add Cursor         | `Option+Click`         | `Alt+Click`          | Click to add cursor       |
| Select Next Match  | `Cmd+D`                | `Ctrl+D`             | Highlight next occurrence |
| Select All Matches | `Cmd+Shift+L`          | `Ctrl+Shift+L`       | Select all occurrences    |
| Multi-Line Edit    | `Shift+Option+Down`    | `Shift+Alt+Down`     | Edit column down          |
| Find & Select All  | `Cmd+F → Option+Enter` | `Ctrl+F → Alt+Enter` | Find then multi-select    |

### Navigation

| Action                   | Mac           | Windows        | Notes                    |
| ------------------------ | ------------- | -------------- | ------------------------ |
| Go to File               | `Cmd+P`       | `Ctrl+P`       | Open file by name        |
| Go to Symbol (File)      | `Cmd+Shift+O` | `Ctrl+Shift+O` | Jump to function/var     |
| Go to Symbol (Workspace) | `Cmd+T`       | `Ctrl+T`       | Search all symbols       |
| Go to Definition         | `F12`         | `F12`          | Jump to definition       |
| Peek Definition          | `Option+F12`  | `Alt+F12`      | Show inline definition   |
| Bracket Matching         | `Cmd+Shift+\` | `Ctrl+Shift+\` | Jump to matching bracket |
| Go to End of File        | `Cmd+Down`    | `Ctrl+End`     | Jump to bottom           |
| Go to Start of File      | `Cmd+Up`      | `Ctrl+Home`    | Jump to top              |
| Ctrl+Cmd+Left/Right      | -             | -              | Navigate word by word    |

### Find & Replace

| Action        | Mac           | Windows        | Notes                      |
| ------------- | ------------- | -------------- | -------------------------- |
| Find          | `Cmd+F`       | `Ctrl+F`       | Open find dialog           |
| Replace       | `Cmd+H`       | `Ctrl+H`       | Open replace dialog        |
| Find in Files | `Cmd+Shift+F` | `Ctrl+Shift+F` | Search entire project      |
| Replace All   | (in Find)     | (in Find)      | Click "Replace All" button |

### Refactoring & Code Actions

| Action           | Mac              | Windows         | Notes                |
| ---------------- | ---------------- | --------------- | -------------------- |
| Rename Symbol    | `F2`             | `F2`            | Rename across files  |
| Go to References | `Shift+F12`      | `Shift+F12`     | Find all references  |
| Quick Fix        | `Cmd+.`          | `Ctrl+.`        | Show code actions    |
| Format Document  | `Shift+Option+F` | `Shift+Alt+F`   | Format entire file   |
| Format Selection | `Cmd+K Cmd+F`    | `Ctrl+K Ctrl+F` | Format selected text |

### UI Navigation Shortcuts

| Action               | Mac            | Windows        | Notes                |
| -------------------- | -------------- | -------------- | -------------------- |
| Explorer             | `Cmd+Shift+E`  | `Ctrl+Shift+E` | File browser         |
| Search               | `Cmd+Shift+F`  | `Ctrl+Shift+F` | Find in files        |
| Source Control (Git) | `Ctrl+Shift+G` | `Ctrl+Shift+G` | Git panel            |
| Debug                | `Cmd+Shift+D`  | `Ctrl+Shift+D` | Debug panel          |
| Extensions           | `Cmd+Shift+X`  | `Ctrl+Shift+X` | Extensions panel     |
| Terminal             | `Ctrl+~`       | `Ctrl+~`       | Toggle terminal      |
| Problems Panel       | `Cmd+Shift+M`  | `Ctrl+Shift+M` | Show errors/warnings |

---

## 🧩 Recommended Extensions

### UI & Themes (Start Here)

| Extension               | Downloads | Purpose                         |
| ----------------------- | --------- | ------------------------------- |
| **One Dark Pro**        | 3.8M      | Clean, professional dark theme  |
| **Material Icon Theme** | 7.7M      | Beautiful icon set for files    |
| **Winter is Coming**    | -         | Blue-tinted syntax theme        |
| **Dracula**             | -         | Purple-inspired dark theme      |
| **GitHub Theme**        | 1M+       | GitHub-styled light/dark themes |

### Code Quality & Formatting

| Extension              | Downloads | Purpose                              |
| ---------------------- | --------- | ------------------------------------ |
| **Prettier**           | 14.1M     | Auto code formatter (essential)      |
| **ESLint**             | 14M+      | JavaScript linting & error detection |
| **Code Spell Checker** | 2.7M      | Catch typos in code & comments       |

### HTML/CSS Development

| Extension                     | Downloads | Purpose                           |
| ----------------------------- | --------- | --------------------------------- |
| **HTML CSS Support**          | -         | IntelliSense for classes & IDs    |
| **CSS Peek**                  | -         | Peek at CSS definitions from HTML |
| **HTML Tag Labels**           | -         | Show closing tag labels           |
| **Color Highlight**           | 428K      | Highlight colors in code          |
| **Tailwind CSS IntelliSense** | -         | Tailwind class autocomplete       |
| **Headwind**                  | -         | Sort Tailwind classes             |

### JavaScript/TypeScript

| Extension                          | Downloads | Purpose                             |
| ---------------------------------- | --------- | ----------------------------------- |
| **JavaScript (ES6) Code Snippets** | -         | Common JS/TS snippets               |
| **Path Intellisense**              | 5.1M      | Auto-complete file paths            |
| **Turbo Console Log**              | 285K      | Quick console.log with `Ctrl+Alt+L` |
| **JavaScript Booster**             | 190K      | Quick refactorings & code actions   |
| **npm Intellisense**               | -         | Auto-complete npm packages          |

### React Development

| Extension                 | Downloads | Purpose                      |
| ------------------------- | --------- | ---------------------------- |
| **Simple React Snippets** | 1M+       | React-specific code snippets |
| **JavaScript Booster**    | 190K      | JSX/TSX refactoring helpers  |

### Vue.js Development

| Extension                                     | Downloads | Purpose                            |
| --------------------------------------------- | --------- | ---------------------------------- |
| **Vetur**                                     | -         | Complete Vue.js support (official) |
| **Vue Snippets** (by Sarah Drasner)           | -         | Vue-specific snippets              |
| **VS Code Extension Pack** (by Sarah Drasner) | -         | Curated extension collection       |

### Node.js/npm

| Extension            | Downloads | Purpose                       |
| -------------------- | --------- | ----------------------------- |
| **npm**              | 3.9M      | Run npm commands from palette |
| **Version Lens**     | -         | See & update package versions |
| **Import Cost**      | -         | Show bundle size of imports   |
| **npm Intellisense** | -         | Auto-complete in package.json |
| **Git Ignore**       | 1M+       | Generate .gitignore files     |

### Markdown Writing

| Extension                           | Downloads | Purpose                     |
| ----------------------------------- | --------- | --------------------------- |
| **Markdown All-In-One**             | -         | Complete markdown support   |
| **Markdown Preview GitHub Styling** | 428K      | GitHub-styled preview       |
| **Markdown Lint**                   | -         | Catch markdown style issues |

### PHP/Laravel

| Extension                      | Downloads | Purpose                   |
| ------------------------------ | --------- | ------------------------- |
| **PHP Intelephense**           | -         | Complete PHP support      |
| **PHP Fmt**                    | -         | PHP code formatting       |
| **Laravel Extra IntelliSense** | -         | Laravel-specific hints    |
| **Laravel Blade Snippets**     | 1.3M      | Blade template snippets   |
| **Laravel Blade Spacer**       | -         | Auto-space Blade brackets |
| **Laravel Blade Formatter**    | -         | Format blade templates    |

### Git & GitHub

| Extension                         | Downloads | Purpose                            |
| --------------------------------- | --------- | ---------------------------------- |
| **Git History**                   | -         | View git commit history            |
| **Git Blame**                     | -         | See who changed each line          |
| **Git Link**                      | -         | Copy GitHub links to code          |
| **Git Indicators**                | -         | Show file change status in toolbar |
| **Git Lens**                      | 14M+      | Advanced git information & history |
| **GitHub Pull Requests & Issues** | -         | Manage PRs inside VS Code          |
| **Remote Repositories**           | -         | Edit GitHub repos without cloning  |

### Productivity & Utilities

| Extension             | Downloads | Purpose                             |
| --------------------- | --------- | ----------------------------------- |
| **Advanced New File** | 163K      | Create files with `Cmd+Alt+N`       |
| **Project Manager**   | -         | Switch between projects quickly     |
| **Peacock**           | -         | Color-code projects in workspace    |
| **Live Server**       | -         | Launch local dev server with reload |
| **Browser Preview**   | -         | Built-in browser preview panel      |

### API Testing

| Extension          | Downloads | Purpose                        |
| ------------------ | --------- | ------------------------------ |
| **REST Client**    | -         | Send HTTP requests from editor |
| **Thunder Client** | -         | Postman-like GUI in VS Code    |

### AI Coding Helpers

| Extension          | Downloads | Purpose                            |
| ------------------ | --------- | ---------------------------------- |
| **Tab 9**          | -         | AI code completion                 |
| **GitHub Copilot** | -         | Advanced AI pair programmer (beta) |

### Vim Integration

| Extension    | Downloads | Purpose                      |
| ------------ | --------- | ---------------------------- |
| **amVim**    | -         | Lightweight Vim emulation    |
| **Vim**      | -         | Full Vim emulation (heavier) |
| **LearnVim** | -         | Interactive Vim tutorial     |

---

## 🛠️ Language-Specific Workflows

### HTML & CSS Workflow

**Key Features:**

- **Emmet** (built-in) - Abbreviations like `div.class>p*3` expand to HTML
- **Auto-closing tags** (configurable) - Auto-close opening tags
- **Linked editing** - Change opening & closing tags together
- **Code folding** - Collapse/expand code sections
- **Color Picker** - Hover colors to pick

**Essential Extensions:**

- HTML CSS Support
- CSS Peek
- HTML Tag Labels
- Color Highlight

**Workflow:**

```
1. Type Emmet abbreviation: div.hero>h1+p
2. Press Tab to expand
3. Use Linked Editing to sync tag names
4. Format with Cmd+Shift+P → Format Document
5. Use CSS Peek (Cmd+Hover) to see styles
```

### JavaScript Workflow

**Key Features:**

- **IntelliSense** - Auto-completion for variables, functions, types
- **JSDoc** - Type hints in comments for better inference
- **Auto Import** - Automatically import when typing symbols
- **Symbol Navigation** - `Cmd+Shift+O` to jump to functions/variables
- **Rename Symbol** - `F2` to refactor across files
- **Code Actions** - `Cmd+.` for quick fixes

**Essential Extensions:**

- ESLint (for error detection)
- JavaScript (ES6) Code Snippets
- Path Intellisense
- Turbo Console Log
- JavaScript Booster

**Settings:**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.organizeImports": true
    }
  }
}
```

**Shortcuts:**

- `Cmd+D` - Select next occurrence (multi-cursor)
- `Ctrl+Spacebar` - Trigger IntelliSense manually
- `F2` - Rename symbol across files
- `F12` - Go to definition
- `Shift+F12` - Find all references

### React Workflow

**Key Features:**

- **JSX Support** - Built-in JSX syntax highlighting
- **prop-types** - Type checking for props
- **Snippets** - Fast component creation
- **JavaScript Booster** - JSX-specific refactorings

**Essential Setup:**

1. Install Simple React Snippets
2. Install JavaScript Booster
3. Configure Emmet for JSX:
   ```json
   {
     "emmet.includeLanguages": {
       "javascript": "javascriptreact"
     }
   }
   ```

**Snippets:**

- `rafce` - React Arrow Function Component w/ Export
- `use` - useState hook
- `usef` - useEffect hook
- `imp` - Import statement

**Workflow:**

```
1. Type component name: function MyButton
2. Use snippets to add hooks
3. Use JavaScript Booster (Cmd+.) for refactorings:
   - Convert to arrow function
   - Wrap in React.memo
   - Convert to useCallback
```

### Vue.js Workflow

**Key Features:**

- **Vetur** (official) - Complete Vue support
- **Single File Components** - .vue file support
- **IntelliSense** - Smart autocomplete in templates
- **Debugging** - Built-in Vue debugging

**Installation:**

- Install Vetur extension (recommended by VS Code)
- Install Vue Snippets for extra templates

**Snippets:**

- `v-if`, `v-for`, `v-model` - Directive shortcuts
- `vscript` - Component script setup
- `template` - Vue template block

### Tailwind CSS Workflow

**Key Features:**

- **IntelliSense** - Color/spacing autocomplete
- **Hover Preview** - See generated CSS on hover
- **Responsive Prefixes** - `md:`, `lg:` support
- **Class Sorting** - Headwind organizes classes

**Essential Extensions:**

- Tailwind CSS IntelliSense (required)
- Tailwind Docs (quick access to docs)
- Headwind (optional: auto-sort classes)

**Settings:**

```json
{
  "tailwindCSS.emmetCompletions": true,
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

**Workflow:**

```
1. Type: class="flex items-center"
2. Press Ctrl+Spacebar for class suggestions
3. Hover to see generated CSS
4. Use Headwind: Cmd+Shift+P → Sort Tailwind Classes
5. Format with Prettier on save
```

### Markdown Workflow

**Key Features:**

- **Preview** - Side-by-side live preview
- **Outline** - Jump to headers with Cmd+Shift+O
- **Link Auto-complete** - Path hints in links
- **Table Support** - Format & edit markdown tables
- **Checkbox Support** - Toggle `- [ ]` with `Option+C`

**Essential Extensions:**

- Markdown All-In-One
- Markdown Preview GitHub Styling
- Markdown Lint

**Workflow:**

```
1. Create new file: touch notes.md
2. Open preview: Cmd+K V (side-by-side)
3. Type markdown normally
4. Use snippets: `[link](path)` auto-completes paths
5. Create table: Insert snippet or use All-In-One commands
6. Format: Cmd+Shift+P → Format Document
```

### PHP/Laravel Workflow

**Key Features:**

- **IntelliSense** - PHP function/class suggestions
- **Route Hints** - Auto-complete Laravel routes
- **Blade Support** - Template syntax highlighting
- **Model Navigation** - Jump between models and migrations

**Essential Extensions:**

- PHP Intelephense (main)
- Laravel Extra IntelliSense
- Laravel Blade Snippets
- Laravel Blade Formatter

**Snippets:**

- `b:for` - Blade foreach loop
- `vscript` - Vue component script
- `route` - Laravel route() helper

**Workflow:**

```
1. Edit routes: web.php with route autocomplete
2. Create controller: `php artisan make:controller`
3. Edit blade template with syntax highlighting
4. Use IntelliSense for model/eloquent methods
5. Format with Prettier or Blade Formatter
```

### Git/GitHub Workflow

**Key Features:**

- **Source Control Panel** - Stage, commit, push from sidebar
- **File Diff Viewer** - See changes before committing
- **Branch Management** - Create/switch branches easily
- **GitHub Integration** - Clone, PR review, issue tracking

**Essential Extensions:**

- Git Lens (advanced features)
- GitHub Pull Requests & Issues
- Remote Repositories (edit without cloning)

**Workflow:**

```
1. Clone: Cmd+Shift+P → Git Clone from GitHub
2. Create branch: Cmd+Shift+P → Git Branch → Create Branch
3. Make changes to files
4. Stage files: Click + in Source Control panel
5. Commit: Type message, press Cmd+Enter
6. Push: Cmd+Shift+P → Git Push
7. Create PR: Cmd+Shift+P → Create Pull Request
```

---

## 🔧 Advanced Features

### Multi-Cursor Editing (Advanced)

The most powerful productivity feature. Master these patterns:

**Pattern 1: Highlight and Edit**

```javascript
// Before: Need to change all "name" to "fullName"
const name = "John";
const name2 = "Jane";

// Solution:
1. Double-click "name" to select
2. Press Cmd+D to select next match
3. Cmd+D again for third match
4. Type "fullName" (replaces all selected)
```

**Pattern 2: Find and Multi-Select**

```
1. Cmd+F to open find
2. Type search term
3. Option+Enter to select all matches
4. Type replacement
```

**Pattern 3: Column Selection**

```
1. Click at start position
2. Hold Shift+Option and drag
3. Type to edit entire column at once
```

**Pattern 4: Line-by-Line Editing**

```
1. Option+Cmd+Down to select down by line
2. Type to edit all selected lines
```

### Zen Mode & Distraction-Free Editing

```
Cmd+Shift+P → Toggle Zen Mode
```

Hides everything except code. Perfect for focused writing. Exit with `Escape`.

### Split Editors & Editor Groups

```
Cmd+\ → Split editor vertically
Cmd+1, 2, 3... → Switch between editor groups
Cmd+K Cmd+← → Move file left
Cmd+K Cmd+→ → Move file right
```

### Settings Sync (Cloud Sync)

```
Sign in with GitHub:
1. Click account icon (bottom left)
2. Click "Turn on Settings Sync"
3. Sign in with GitHub
4. Settings automatically sync across machines
```

### Debugging JavaScript

```
1. Place breakpoint: Click line number gutter
2. Open Debug: Cmd+Shift+D
3. Select "JavaScript Debug Terminal"
4. Run your app
5. Use Step Over (F10), Step Into (F11)
```

### Keyboard Shortcuts Customization

```
1. Cmd+Shift+P → Preferences: Open Keyboard Shortcuts (JSON)
2. Add custom binding:
   [
     {
       "key": "ctrl+shift+g",
       "command": "workbench.scm.focus"
     }
   ]
3. Save and use immediately
```

### Terminal Integration

```
Ctrl+~ → Toggle integrated terminal
Cmd+Shift+P → Terminal: Create New Terminal

Tips:
- Opens in current workspace folder
- Right-click Explorer → Open in Terminal
- Split terminals: Click split icon
- Move to editor: Right-click → Move into Editor Area
```

### Browser Preview

```
1. Install Browser Preview extension
2. Cmd+Shift+P → Show Browser Preview
3. Navigate to localhost:3000
4. Live-reload as you code
```

### Vim Mode (Advanced Editing)

```
Install: amVim extension (lightweight) or Vim (full)

Navigation Mode (default):
- j/k = down/up
- h/l = left/right
- w = next word
- b = previous word
- G = end of file
- gg = start of file
- / = search
- n = next match

Insert Mode:
- i = insert at cursor
- a = append after cursor
- I = insert at line start
- A = append at line end
- o = new line below
- O = new line above

Actions:
- d = delete
- c = change
- y = yank (copy)
- p = paste
- 5j = repeat (move down 5 lines)
- dw = delete word
- ciw = change inside word (replace word under cursor)
```

---

## ⚙️ Settings Reference

### Essential Settings (`settings.json`)

```json
{
  // Appearance
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "editor.fontFamily": "Cascadia Code",
  "editor.fontSize": 16,
  "editor.lineHeight": 26,
  "editor.fontLigatures": true,

  // Editor Behavior
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,
  "editor.rulers": [80, 120],
  "editor.wordWrap": "on",
  "editor.renderIndentGuides": false,

  // File & Autosave
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1500,
  "files.defaultLanguage": "markdown",

  // Formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.organizeImports": true
    }
  },

  // IntelliSense & Autocomplete
  "editor.autoClosingBrackets": "off",
  "editor.autoClosingQuotes": "off",
  "editor.linkedEditing": true,

  // Emmet for JSX
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },

  // Terminal
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.lineHeight": 1.5,

  // Search
  "search.exclude": {
    "**/node_modules": true,
    "**/.git": true
  },

  // UI
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.enablePreview": false,
  "breadcrumbs.enabled": false,

  // Multi-cursor modifier
  "editor.multiCursorModifier": "alt"
}
```

### Minimalist Settings

```json
{
  "activityBar.visible": false,
  "statusBar.visible": false,
  "minimap.enabled": false,
  "editor.lineNumbers": "off",
  "editor.glyphMargin": false,
  "editor.folding": false,
  "workbench.editor.showTabs": false,
  "workbench.explorer.openEditors.visible": 0
}
```

---

## ✅ Quick Reference Checklists

### First 10 Keyboard Shortcuts to Learn

- [ ] `Cmd+Shift+P` - Command Palette (your best friend)
- [ ] `Cmd+P` - Quick file switcher
- [ ] `Cmd+B` - Toggle sidebar
- [ ] `Cmd+S` - Save
- [ ] `Cmd+W` - Close tab
- [ ] `Cmd+/` - Comment line
- [ ] `Cmd+D` - Multi-cursor: next match
- [ ] `F12` - Go to definition
- [ ] `Cmd+F` - Find
- [ ] `Cmd+H` - Replace

### Must-Have Extensions by Language

**JavaScript/TypeScript:**

- [ ] Prettier
- [ ] ESLint
- [ ] JavaScript (ES6) Code Snippets

**React:**

- [ ] Simple React Snippets
- [ ] JavaScript Booster

**Web (HTML/CSS):**

- [ ] HTML CSS Support
- [ ] CSS Peek
- [ ] Color Highlight

**Git/GitHub:**

- [ ] Git Lens
- [ ] GitHub Pull Requests & Issues

**Productivity:**

- [ ] One Dark Pro (theme)
- [ ] Material Icon Theme

### Daily Optimization Checklist

- [ ] Use `Cmd+Shift+P` instead of menu
- [ ] Practice 2-3 new keyboard shortcuts daily
- [ ] Keep hands on home row (avoid mouse)
- [ ] Use `Cmd+P` to navigate files
- [ ] Use `F2` to rename symbols
- [ ] Use `Cmd+D` for multi-cursor
- [ ] Enable autosave: `files.autoSave: afterDelay`
- [ ] Enable format on save: `editor.formatOnSave: true`
- [ ] Run extension setup once per project
- [ ] Customize keyboard shortcuts for your workflow

### Performance Optimization Tips

1. **Disable unnecessary extensions** - Fewer = faster VS Code
2. **Use workspace-level extension disabling** - Turn off Ruby extensions in JS projects
3. **Increase terminal font size** - Harder to miss output
4. **Enable autosave** - Less thinking about saving
5. **Use format on save** - Automatic code cleanup
6. **Limit search scope** - Exclude `node_modules`, `.git`
7. **Turn off breadcrumbs** - Use `Cmd+Shift+O` instead
8. **Disable minimap** if not used - Saves screen real estate
9. **Uninstall heavy themes** - Use native themes for speed

---

## 🎯 Workflow Summary

### The Ideal Daily Workflow

```
1. Start with clean slate
   Cmd+Shift+P → New Untitled File (opens markdown)

2. Open project
   Cmd+P → Type project name → Enter

3. Make edits
   Use Cmd+D for multi-cursor, Cmd+/ for comments

4. Navigate files
   Cmd+P for quick file switching
   Cmd+Shift+O for symbols within file

5. Format & save
   Cmd+S (format on save handles it)
   Or Cmd+Shift+P → Format Document

6. Commit changes
   Cmd+Shift+G (Git panel)
   Stage files, commit, push

7. Zero distractions
   Use Zen Mode: Cmd+Shift+P → Toggle Zen Mode
   Or minimize sidebar with Cmd+B
```

### Pro Tips

- **Keep Command Palette handy** - It knows every feature
- **Keyboard shortcuts compound** - 1 second saved × 100 times/day = 100 seconds
- **IntelliSense is your friend** - Let it complete your code
- **Format on save removes thinking** - Set `editor.formatOnSave: true`
- **Vim mode has steep learning curve** - But ROI is huge if you code 8+ hours/day
- **Customize keyboard shortcuts** - Map commands to YOUR muscle memory
- **Test extensions before committing** - Some slow down VS Code
- **Settings sync across devices** - Sign in with GitHub to sync

---

## 📚 Additional Resources

### Official Documentation

- [VS Code Official Docs](https://code.visualstudio.com/docs)
- [Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/getstarted/keybindings)
- [Extension Marketplace](https://marketplace.visualstudio.com)

### Recommended External Tools

- [Coding Fonts Showcase](https://www.codingfont.com) - Find your perfect font
- [Emmet Cheat Sheet](https://docs.emmet.io/abbreviations/syntax/) - Master Emmet
- [Vim Adventures](https://vim-adventures.com/) - Learn Vim interactively
- [Prettier Playground](https://prettier.io/playground/) - Test formatting rules

---

## 📝 Notes

- **OS Differences:** Guide uses Mac shortcuts (`Cmd`) - substitute with `Ctrl` on Windows
- **Version:** Based on VS Code latest (as of course recording)
- **Extension Updates:** Extensions update frequently; check marketplace for latest versions
- **Customization:** These are recommendations—customize to YOUR workflow
- **Practice:** Keyboard shortcuts take 1-2 weeks to internalize through daily use

---

**Last Updated:** Based on "Productive VS Code" 54-Chapter Course
**Course Creator:** Chris Sev (Better Dev / Digital Ocean)
