# My Portfolio

A personal portfolio website built with Jekyll and hosted on GitHub Pages.

## About

This is my professional portfolio showcasing my work as a web developer and IT specialist. The site is built using Jekyll, a static site generator, and hosted on GitHub Pages.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Static site with optimized assets
- **SEO Friendly**: Built-in SEO optimization with Jekyll SEO tag
- **Easy Maintenance**: Simple markdown-based content management

## Local Development

### Prerequisites

- Ruby (version 2.5.0 or higher)
- Bundler

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tomyxlungu/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. GitHub Pages will build the site using Jekyll.

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Layout templates
│   └── default.html
├── _pages/              # Additional pages
│   ├── about.md
│   ├── projects.md
│   └── contact.md
├── assets/              # Static assets
│   ├── css/
│   └── js/
├── index.md             # Homepage
└── Gemfile              # Ruby dependencies
```

## Customization

### Adding New Pages

1. Create a new markdown file in the `_pages/` directory
2. Add front matter with layout and title
3. Add content using Markdown

### Modifying Styles

Edit the CSS files in `assets/css/` to customize the appearance.

### Updating Content

Edit the markdown files to update text content, or modify the HTML layouts for structural changes.

## Contact

Thomas Lungu
- Email: tomyxlungu@gmail.com
- LinkedIn: [Thomas Lungu](https://www.linkedin.com/in/thomas-lungu-123456789/)

---

Built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/)
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
