// ========= ACTIONS OF USER AND ALL INTEGRATION =========
// =======================================================


// =================== SET TOKEN OF CURRENT USER =================
export function setToken(token) {
  try{
    localStorage.setItem('currentToken', token)
  }
  catch{
    console.log("same error to set current token !!!"); 
  }
}

// ================== SET OBJECT OF CURRENT USER ===============
export function setCurrentUser(currentUser) {
  try{
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }
  catch{
    console.log("same error to set currentUser !!!");
  }
}