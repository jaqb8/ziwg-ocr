export const undefinedErrorMessage = 'Undefined error has occured';

export const getErrorMessage = (error: any) => {
  if (error.message === 'Network Error') {
    return 'Connection failed. Please check your internet connection.';
  }

  // generic message for unhandled errors
  else if (error.message != null) {
    const firstLetterIsVovel = ['a', 'e', 'i', 'o', 'u', 'y'].includes(
      error.message[0].toLowerCase()
    );
    return `${firstLetterIsVovel ? 'An' : 'A'} ${error.message} has occured.`;
  }

  // default error message if there's no information about the error
  else return undefinedErrorMessage;
};
