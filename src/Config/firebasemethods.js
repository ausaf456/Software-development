// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { getDatabase, set, ref, onValue } from "firebase/database";

// import app from "./firebaseconfig";

// const auth = getAuth(app);
// const db = getDatabase(app);

// let signUpUser = (obj) => {
//   return new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(auth, obj.email, obj.password)
//       .then((res) => {
//         obj.id = res.user.uid;
//         const reference = ref(db, `users/${obj.id}`);
//         set(reference, obj)
//           .then(() => {
//             resolve("Data Send Successfully in Database and User Created");
//           })
//           .catch((err) => {
//             reject(err.message);
//           });
//       })
//       .catch((err) => {
//         reject(err.message);
//       });
//   });
// };
// let loginUser = (obj) => {
//   return new Promise((resolve, reject) => {
//     signInWithEmailAndPassword(auth, obj.email, obj.password)
//       .then((res) => {
//         const reference = ref(db, `users/${res.user.uid}`);
//         onValue(reference, (data) => {
//           if (data.exists()) {
//             resolve(data.val());
//           } else {
//             reject("Data Not Found :(");
//           }
//         });
//       })
//       .catch((err) => {
//         reject(err.message);
//       });
//   });
// };

// export {
//   signUpUser,
//   loginUser,
 
// };





import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from './firebaseconfig'
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  child,
  remove,
  update,
} from "firebase/database";

// == authentication meythods ==

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password);
};
let logInUser = (obj) => {
  return signInWithEmailAndPassword(auth, obj.email, obj.password);
};
// let logOutUser = () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// };
// let checkAuthUser = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// };


// == database methods ==

let sendData = (obj, nodeName, uid) => {
  if (!uid) {
    // for uid/key start
    let postListRef = ref(database, nodeName);
    obj.uid = push(postListRef).key;
    console.log(obj.uid);
    // for uid/key end
  }
  let newpostListRef = ref(database, `${nodeName}/${uid ? uid : obj.uid}`);
  return set(newpostListRef, obj);
};



let getData = async (nodeName, uid) => {
  const dbRef = ref(database);
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${uid ? uid : ""}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr;
          if (uid) {
            arr = snapshot.val();
            resolve(arr);
            console.log(arr)
          } else {
            arr = Object.values(snapshot.val());
            resolve(arr);
            console.log(arr)
          }
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // get(
  //   dbRef,
  //   (snapshot) => {
  //     console.log(snapshot.val());

  //     // snapshot.forEach((childSnapshot) => {
  //     // const childData = childSnapshot.val();

  //     // ...
  //     // });
  //   },
  //   {
  //     onlyOnce: true,
  //   }
  // );

};



let Editfac = (obj, nodeName, uid) => {

  let newpostListRef = ref(database, `${nodeName}/${+uid}`);
  return update(newpostListRef, obj);
}




let DeleteData = (nodeName, uid) => {
  const referencee = ref(database,`${nodeName}/${uid}`)
  return remove(referencee)
}

export { signUpUser, logInUser, sendData, getData, DeleteData, Editfac };