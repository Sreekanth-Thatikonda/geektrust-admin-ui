export interface AppState {
  todo: TodoState
}

export interface AppStore {
  todo: ActionReducer<TodoState, Action>;
}

export const appStore: AppStore = {
  todo: todoReducer
}

export const appEffects = [TodoEffects];