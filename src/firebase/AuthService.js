//importações 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence } from  'firebase/auth' ; 
import { firebaseAuth } from  './BaseConfig' 

//necessário se você quiser manter o login ativo após o usuário sair do navegador ou fechar a aba 
setPersistence (firebaseAuth, browserLocalPersistence); 

//Funcionalidade de login 
export  const  firebaseSignIn = async ({email, password}) => { 
 const result = await  signInWithEmailAndPassword (firebaseAuth, email, password); 
 return result; 
}; 

//Funcionalidade de cadastro 
export  const  firebaseSignUp = async ({email, password}) => { 
 const   result = await  createUserWithEmailAndPassword (firebaseAuth, email, password); 
 return result; 
}; 

//Funcionalidade de logout 
export  const   firebaseSignOut   =   async ( ) => { 
 await   signOut (firebaseAuth); 
};