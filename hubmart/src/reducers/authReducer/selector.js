import {createSelector} from 'reselect'



const authSelect = (state) => state.authReducer;

export const currentUserSelector = createSelector([authSelect], (authUser) => authUser.currentUser)

export const authUserSelector = createSelector([authSelect], (authUser )=> authUser.isAuthenticated)