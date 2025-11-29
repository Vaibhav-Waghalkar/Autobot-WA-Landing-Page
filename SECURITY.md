# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** open a public GitHub issue
2. Email security details to: [your-email@example.com]
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- We will acknowledge receipt within 48 hours
- We will provide an initial assessment within 7 days
- We will keep you informed of our progress
- We will notify you when the vulnerability is fixed

### Disclosure Policy

- We will not disclose the vulnerability until it's fixed
- We will credit you in the security advisory (if desired)
- We will work with you to coordinate public disclosure

## Security Best Practices

### For Users

- Keep dependencies up to date
- Review and audit third-party packages
- Use environment variables for sensitive data
- Never commit API keys or secrets to version control
- Regularly update Node.js and npm

### For Developers

- Follow secure coding practices
- Validate and sanitize all user inputs
- Use HTTPS in production
- Implement proper authentication and authorization
- Keep dependencies updated
- Review security advisories regularly

## Known Security Considerations

### Dependencies

This project uses the following dependencies. Please review their security advisories:

- Next.js: [Security Advisories](https://github.com/vercel/next.js/security)
- React: [Security Advisories](https://github.com/facebook/react/security)
- Other dependencies: Check npm audit regularly

### Regular Security Checks

Run security audits regularly:

```bash
npm audit
npm audit fix
```

## Security Updates

We recommend:

1. **Subscribing to security updates**
   - Watch this repository for security releases
   - Enable GitHub security alerts

2. **Keeping dependencies updated**
   ```bash
   npm update
   npm audit fix
   ```

3. **Reviewing changelog**
   - Check CHANGELOG.md for security-related updates

## Contact

For security concerns, please contact: [your-email@example.com]

---

**Thank you for helping keep AutoBot WA Landing Page secure!**

