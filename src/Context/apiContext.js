import { createContext, useContext, useEffect, useState } from "react";
import intializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const APIContext = createContext();

intializeAuthentication();

const APIContextProvider = ({ children }) => {

    //data
    const [fakeData, setFakeData] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [bookings, SetBookings] = useState([]);
    const [isLoadingData, setIsLoadingData] = useState(true);


    // fetch data

    //Apartment Data

    useEffect(() => {
        fetch("https://calm-citadel-30522.herokuapp.com/apartments")
            .then(res => res.json())
            .then(data => {
                setFakeData(data)
                setIsLoadingData(false)
            })
    }, []);

    // Review Data

    useEffect(() => {
        fetch('https://calm-citadel-30522.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setIsLoadingData(false);
            });
    }, []);


    useEffect(() => {
        fetch("https://calm-citadel-30522.herokuapp.com/adminTasks")
            .then(res => res.json())
            .then(data => {
                SetBookings(data)
                setIsLoadingData(false)
                console.log(bookings)
            })
    }, []);


    //firebase authentication

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    // const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    // // Google Sign in
    // const signInUsingGoogle = () => {
    //     setIsLoading(true);
    //     return signInWithPopup(auth, googleProvider)
    //         .finally(() => setIsLoading(false));

    // }

    // Signin Using email and password

    // const handleEmailChange = e => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = e => {
    //     setPassword(e.target.value);
    // }

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    useEffect(() => {
        fetch(`https://calm-citadel-30522.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])




    //Sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://calm-citadel-30522.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }

    return (
        <APIContext.Provider
            value={{
                fakeData,
                reviews,
                bookings,
                isLoadingData,
                isLoading,
                registerUser,
                loginUser,
                user,
                admin,
                logOut,
                error
            }}
        >
            {children}
        </APIContext.Provider>
    )


}

export default APIContextProvider;


// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}