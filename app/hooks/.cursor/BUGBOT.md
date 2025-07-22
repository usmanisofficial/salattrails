# Custom Hooks Review Guidelines

## Hook Structure

- **Naming Convention**: Use 'use' prefix for all custom hooks
- **Return Values**: Return consistent data structures
- **TypeScript**: Use proper TypeScript interfaces for return types
- **Documentation**: Document complex hooks with JSDoc

## Redux Integration

- **useAppSelector**: Use typed selectors for Redux state
- **useAppDispatch**: Use typed dispatch for Redux actions
- **State Mapping**: Map Redux state to component-friendly format
- **Error Handling**: Handle Redux errors gracefully

## Performance Optimization

- **Memoization**: Use useMemo and useCallback appropriately
- **Dependencies**: Properly manage useEffect dependencies
- **Cleanup**: Implement cleanup functions for subscriptions
- **Re-renders**: Avoid unnecessary re-renders

## Common Issues

- **Memory Leaks**: Clean up subscriptions and timers
- **Stale Closures**: Handle stale closures in async operations
- **Dependency Arrays**: Ensure proper dependency arrays
- **Error Boundaries**: Implement error handling for hooks
- **Type Safety**: Ensure proper TypeScript types

## Best Practices

- **Single Responsibility**: Each hook should have a single purpose
- **Reusability**: Make hooks reusable across components
- **Testing**: Write tests for custom hooks
- **Error Handling**: Implement proper error handling
- **Documentation**: Document hook usage and parameters
