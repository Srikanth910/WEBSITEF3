const Auth = {
    // isAuthenticated localStorage.setItem('isAuth', false),
    isAuth:'',
    authenticate() {
    
 this.isAuth= localStorage.setItem('isAuth', true);
    },
    signout() {
       this.isAuth=localStorage.removeItem('isAuth');
    },
    getAuth() {
        return this.isAuth;
      }
  };

  export default Auth;