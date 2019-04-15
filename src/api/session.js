 // eslint-disable-next-line
/* eslint-disable */
// ========= ACTIONS OF USER AND ALL INTEGRATION =========
// =======================================================


// =================== SET TOKEN OF CURRENT USER =================
export function setToken (token) {
  try{
    localStorage.setItem('currentToken', token)
    console.log('current token save', token)
  } catch{
    console.log('same error to set current token !!!')
  }
}

// ================== SET OBJECT OF CURRENT USER ===============
export function setCurrentUser (currentUser) {
  try {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }catch {
    console.log('same error to set currentUser !!!')
  }
}

// ================== TEST IF USER LOGGED ===============
export function userLogged () {
  try {
    if(localStorage.getItem('currentToken')){
      return true
    }
    else{
      return false
    }
  }catch {
    console.log('same error to set currentUser !!!')
  }
}
