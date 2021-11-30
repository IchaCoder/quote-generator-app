import React,{useContext, useState, useEffect, useCallback} from "react";


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [quotes, setQuotes] = useState({});
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [index, setIndex] = useState(0)
    const [random, setRandom] = useState(null)
    const [alert, setAlert] = useState({type:'', message:'', show: false})
    const [stared, setStared] = useState(false);
    const [list,setList] = useState([])

    const url = "https://type.fit/api/quotes"
    

    const fetchQuotes = useCallback (async () => {
        setLoading(true)
        const response = await fetch(url);
        const quote = await response.json();
        setQuotes(quote[index < 0 ? quote.length-1 : index])        
        setData(quote)
        setLoading(false)
        setStared(false)
    },[index])
    
    useEffect(() => {
        fetchQuotes()
    }, [index, fetchQuotes]);

    const randomQuote = () => {
        const newIndex = Math.floor(Math.random() * data.length)
        setRandom(newIndex)
        if(random){
            setIndex(random)
        }
    }

    const addFavorite = useCallback( () => {
        setStared(true)
        showAlert('success','Added to',true)
        const temp = data.filter((item,id) => id === index)
    
        setList([...list,...temp])
    },[list,data,index])

    const removeFavorite = (ind) => {
        const temp = list.filter((item, id) => id !== ind)
        setList(temp)
        setStared(true)
    }

    const showAlert = (type='', message = '',show= false) => {
        setAlert({type,message,show})
    }

    return <AppContext.Provider value={{
        quotes,
        setQuotes,
        setIndex,
        index,
        loading,
        data,
        randomQuote,
        alert,
        setAlert,
        stared,
        setStared,
        list,
        setList,
        addFavorite,
        removeFavorite,
        showAlert,
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}