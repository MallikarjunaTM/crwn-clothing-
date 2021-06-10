import { createSelector } from 'reselect';

const directorySelector = state =>state.directory;

export const directorySelectorSection = createSelector(
    [directorySelector],
    (directory)=>directory.sections

);

