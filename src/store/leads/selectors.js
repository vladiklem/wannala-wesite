export const selectLeadFormState = (state) => ({
    isLoading: state.leads.isLoading,
    isSuccess: state.leads.isSuccess,
});
