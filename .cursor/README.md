# BUGBOT.md Structure

This directory contains project-specific context files for BugBot reviews. BugBot automatically includes the root `.cursor/BUGBOT.md` file and any additional files found while traversing upward from changed files.

## File Structure

```
.cursor/
├── BUGBOT.md                    # Project-wide guidelines (always included)
├── README.md                    # This file
├── app/
│   ├── .cursor/
│   │   └── BUGBOT.md           # App directory guidelines
│   ├── store/
│   │   └── .cursor/
│   │       └── BUGBOT.md       # Redux store guidelines
│   └── hooks/
│       └── .cursor/
│           └── BUGBOT.md       # Custom hooks guidelines
├── components/
│   └── .cursor/
│       └── BUGBOT.md           # Component guidelines
└── config/
    └── .cursor/
        └── BUGBOT.md           # Configuration guidelines
```

## Usage

When reviewing code, BugBot will automatically include:

1. **Root BUGBOT.md** - Always included for project-wide guidelines
2. **Directory-specific BUGBOT.md** - Included when reviewing files in that directory
3. **Parent directory BUGBOT.md** - Included when reviewing files in subdirectories

## Guidelines Covered

- **Security**: Firebase auth, location permissions, input validation
- **Architecture**: Redux patterns, Expo Router, component structure
- **Performance**: Optimization, memory management, bundle size
- **Testing**: Unit tests, integration tests, accessibility testing
- **Platform**: iOS/Android specific considerations
- **Code Quality**: Naming conventions, TypeScript, error handling

## Adding New Guidelines

To add new guidelines:

1. Create a `.cursor/` directory in the relevant folder
2. Add a `BUGBOT.md` file with specific guidelines
3. Follow the existing format and structure
4. Update this README if needed

## Example

When reviewing `app/store/slices/authSlice.ts`, BugBot will include:

- `.cursor/BUGBOT.md` (project-wide)
- `app/.cursor/BUGBOT.md` (app directory)
- `app/store/.cursor/BUGBOT.md` (store directory)
