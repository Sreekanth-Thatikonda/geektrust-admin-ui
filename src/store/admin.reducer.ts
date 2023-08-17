import { createReducer, on } from '@ngrx/store';
import { deleteAdminUser, loadAdminUsers, updateAdminUser } from './admin.action';
import { initialState } from './admin.state';


export function adminReducer(state: any, action: any) {
  return _adminReducer(state, action)
}

const _adminReducer = createReducer(
  initialState, 
  on(loadAdminUsers, (state)=> {
    return {
      ...state
    }
  }),
  on(updateAdminUser, (state)=> {
    return {
      ...state
    }
  }),
  on(deleteAdminUser, (state)=> {
    return {
      ...state
    }
  })
);

