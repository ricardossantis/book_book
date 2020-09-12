const passwordVerifications = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("A senha digitada não combina!");
  },
});

export default passwordVerifications;
