# Redux Slices Review Guidelines

## Slice Structure

- **State Interface**: Define clear TypeScript interfaces for state
- **Initial State**: Set proper initial state with all required fields
- **Reducers**: Use Immer for immutable state updates
- **Extra Reducers**: Handle async thunk states properly

## Async Thunks

- **createAsyncThunk**: Use for all async operations
- **Loading States**: Implement pending, fulfilled, rejected states
- **Error Handling**: Handle errors with proper error messages
- **Type Safety**: Use proper TypeScript for thunk parameters and return types

## State Management

- **Normalization**: Normalize complex data structures
- **Selectors**: Create memoized selectors with createSelector
- **State Updates**: Use Immer for immutable updates
- **State Shape**: Keep state flat and avoid deep nesting

## Common Issues

- **State Mutations**: Never mutate state directly
- **Circular Dependencies**: Avoid circular imports between slices
- **Memory Leaks**: Clean up subscriptions and listeners
- **Type Safety**: Ensure proper TypeScript types
- **Selector Performance**: Avoid expensive computations in selectors

## Best Practices

- **Action Naming**: Use descriptive action names
- **Error Handling**: Implement proper error handling
- **Loading States**: Show loading states for better UX
- **Optimistic Updates**: Use optimistic updates when appropriate
- **Testing**: Write comprehensive tests for slices
