# Redux Store Review Guidelines

## Redux Toolkit Patterns

- **createSlice**: Use createSlice for all state management
- **createAsyncThunk**: Handle async operations with proper loading states
- **Immer**: Leverage Immer for immutable state updates
- **TypeScript**: Use proper TypeScript interfaces for state and actions

## State Structure

- **Normalized State**: Use normalized state structure for complex data
- **Selectors**: Implement memoized selectors with createSelector
- **State Shape**: Keep state flat and avoid deep nesting
- **Persistence**: Handle state persistence with proper serialization

## Async Operations

- **Loading States**: Implement proper loading, success, and error states
- **Error Handling**: Handle errors gracefully with proper error messages
- **Optimistic Updates**: Use optimistic updates for better UX
- **Retry Logic**: Implement retry logic for failed operations

## Performance Optimization

- **Selector Memoization**: Use createSelector for expensive computations
- **State Normalization**: Normalize state to avoid duplicate data
- **Subscription Management**: Properly manage Redux subscriptions
- **Action Batching**: Batch related actions when possible

## Common Issues

- **State Mutations**: Never mutate state directly, use Immer
- **Circular Dependencies**: Avoid circular dependencies between slices
- **Memory Leaks**: Clean up subscriptions and listeners
- **Type Safety**: Ensure proper TypeScript types for all state and actions
- **Selector Performance**: Avoid expensive computations in selectors

## Testing Guidelines

- **Slice Testing**: Test reducer logic and action creators
- **Async Thunk Testing**: Test async operations with proper mocking
- **Selector Testing**: Test selector logic and memoization
- **Integration Testing**: Test Redux integration with components

## Best Practices

- **Action Naming**: Use descriptive action names (e.g., 'user/loginRequested')
- **State Immutability**: Always return new state objects
- **Error Boundaries**: Implement error boundaries for Redux operations
- **DevTools**: Use Redux DevTools for debugging
- **Middleware**: Use appropriate middleware for side effects
