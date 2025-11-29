# Contributing to AutoBot WA Landing Page

Thank you for your interest in contributing to AutoBot WA Landing Page! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## 📜 Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## 🚀 Getting Started

1. **Fork the repository**
   ```bash
   # Click the Fork button on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/Autobot-WA-Landing-Page.git
   cd Autobot-WA-Landing-Page
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Process

### Before You Start

- Check existing issues and pull requests to avoid duplicate work
- For major changes, open an issue first to discuss the approach
- Keep your fork up to date with the main repository

### Making Changes

1. **Make your changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Add comments for complex logic
   - Update documentation as needed

2. **Test your changes**
   ```bash
   npm run build  # Ensure build succeeds
   npm run lint   # Fix any linting errors
   ```

3. **Test in browser**
   - Test in multiple browsers (Chrome, Firefox, Safari)
   - Test responsive design on different screen sizes
   - Test both light and dark themes
   - Verify accessibility features

## 📝 Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests pass (if applicable)
- [ ] Changes tested in browser

### Submitting a Pull Request

1. **Update your branch**
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Use a clear, descriptive title
   - Reference any related issues
   - Describe what changes you made and why
   - Include screenshots for UI changes
   - Wait for review and address feedback

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Refactoring

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested responsive design
- [ ] Tested dark/light themes

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

## 💻 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Follow React best practices

### Styling

- Use Tailwind CSS utility classes
- Use CSS variables for theming
- Follow mobile-first approach
- Ensure responsive design

### File Structure

```
components/
  ComponentName.tsx    # Component file
  ComponentName.test.tsx  # Tests (if applicable)
```

### Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`)
- **Files**: Match component name
- **Functions**: camelCase (`handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)
- **CSS Variables**: kebab-case (`--text-primary`)

## 📝 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(theme): add dark mode toggle button
fix(header): resolve mobile menu closing issue
docs(readme): update installation instructions
style(components): format code with prettier
refactor(hero): simplify animation logic
perf(images): optimize image loading
```

### Good Commit Messages

✅ Good:
```
feat(components): add scroll progress indicator

- Add ScrollProgress component
- Implement scroll percentage calculation
- Add smooth animation transitions
```

❌ Bad:
```
update
fix bug
changes
```

## 🐛 Reporting Bugs

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce the bug
3. Check if it's a browser-specific issue

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Any other relevant information or screenshots.
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## ❓ Questions?

If you have questions, feel free to:
- Open an issue with the `question` label
- Check existing issues and discussions
- Review the documentation

Thank you for contributing! 🎉

